import { Link } from "react-router-dom";

const Button = ({ children, disabled, to, type }) => {
  const className =
    "text-sm inline-block rounded-full bg-yellow-400 px-4 py-3 font-semibold uppercase tracking-wider text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed sm:px-6 sm:py-4";

  const base =
    "text-sm inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wider text-stone-800 transition-colors hover:bg-yellow-300 focus:bg-yellow-400 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 sm:px-6 sm:py-4",
    small: base + " px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary:
      " text-sm px-4 py-2.5 md:px-6 md:py-3.5 inline-block rounded-full bg-transparent border-2 border-stone-300 font-semibold uppercase tracking-wider text-stone-400 transition-colors hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed",
  };
  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
};

export default Button;
