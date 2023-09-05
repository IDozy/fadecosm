import React from 'react';

const SearchBar = () => {
  return (
    <div className="et_search_outer">
      <div className="container et_search_form_container">
        <form
          role="search"
          method="get"
          className="et-search-form"
          action="http://grupomvperu.com/"
        >
          <input
            type="search"
            className="et-search-field"
            placeholder="Búsqueda &hellip;"
            value=""
            name="s"
            title="Buscar:"
          />
        </form>
        <span className="et_close_search_field"></span>
      </div>
    </div>
  );
};

export default SearchBar;
