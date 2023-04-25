import style from "./Container.module.css";
import classNames from "classnames";

function Container({ children, className }) {
  return (
    <div className={classNames(style.container, className)}>{children}</div>
  );
}

export default Container;
