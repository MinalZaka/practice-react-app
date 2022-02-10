import React from "react";
import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();
  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  };

  return (
    <section className="section search">
      <form action="" onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favourite cocktail</label>
          <input
            type="text"
            id="name"
            ref={searchValue}
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
