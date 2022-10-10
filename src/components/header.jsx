import { FaSearch } from "react-icons/fa";

export const Header = ({ setSearch, search }) => {
  const changing = (e) => {
    e.preventDefault();
  };

  return (
    <header>
      <div className="logo_amazon">
        <i className="fa-brands fa-amazon fa-5x"></i>
      </div>
      {/* ciao */}
      <form onSubmit={changing}>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit">
          <FaSearch />
        </button>
      </form>
      <div>
        <i className="fa-solid fa-cart-shopping fa-2x"></i>
      </div>
    </header>
  );
};
