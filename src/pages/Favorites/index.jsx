import React, { useState, useEffect } from "react";
import Container from "@components/Container";
import EmptyState from "@components/EmptyState";

function Favorites() {
  const [favorites, setFavorites] = useState(null);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <Container>
      {favorites ? <div>There's something</div> : <EmptyState />}
    </Container>
  );
}

export default Favorites;
