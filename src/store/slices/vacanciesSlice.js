import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getVacancies } from "../../api";

export const fetchVacancies = createAsyncThunk(
  "fetchVacancies",
  async (_, { getState }) => {
    const state = getState().vacancies;
    const params = {
      page: state.filters.page,
      count: state.filters.count,
      published: 1,
      no_agreement: 1,
    };

    if (state.filters.payment_from && state.filters.payment_from >= 0) {
      params.payment_from = Number(state.filters.payment_from);
    }

    if (state.filters.payment_to && state.filters.payment_to >= 0) {
      params.payment_to = Number(state.filters.payment_to);
    }
    if (state.filters.keyword) {
      params.keyword = state.filters.keyword;
    }
    if (state.filters.catalogues) {
      params.catalogues = state.filters.catalogues.key;
    }
    const response = await getVacancies(params);
    return response;
  }
);

const vacanciesSlice = createSlice({
  name: "vacancies",
  initialState: {
    vacancies: [],
    total: 0,
    loading: false,
    error: null,
    filters: {
      payment_from: "",
      payment_to: "",
      keyword: null,
      catalogues: null,
      page: 1,
      count: 4,
    },
  },
  reducers: {
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setDefaultFilters: (state) => {
      state.filters = {
        ...state.filters,
        payment_from: "",
        payment_to: "",
        catalogues: null,
        page: 1,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVacancies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchVacancies.fulfilled, (state, action) => {
      state.vacancies = action.payload.objects;
      state.loading = false;
      state.total = action.payload.total;
      state.error = null;
    });
    builder.addCase(fetchVacancies.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
  },
});

export const { setFilters, setDefaultFilters } = vacanciesSlice.actions;

export default vacanciesSlice.reducer;
