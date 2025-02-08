import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";

import { getProductsByQuery, getProducts } from "../../redux/features/product/productSlice";
import { SmText } from "../../styles/Text.styles";
import { SearchContainer, SearchInput, SearchResults } from "../../styles/SearchBar.styles";

export default function SearchBar() {
  const dispatch = useDispatch();
  const { totalProducts } = useSelector((state) => state.product);

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        if (query) {
          dispatch(getProductsByQuery(query));
        } else {
          dispatch(getProducts());
        }
      }, 500),
    [dispatch]
  );

  const handleSearchChange = useCallback(
    (e) => {
      debouncedSearch(e.target.value);
    },
    [debouncedSearch] // Mantiene la referencia correcta del debounce
  );

  return (
    <div>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Search for a smartphone..."
          onChange={handleSearchChange}
        />
      </SearchContainer>
      <SearchResults>
        <SmText>{totalProducts > 0 ? totalProducts : 0} RESULTS</SmText>
      </SearchResults>
    </div>
  );
}
