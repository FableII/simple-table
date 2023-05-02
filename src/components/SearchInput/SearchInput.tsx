import React from "react";
import { Form, FormControl } from "react-bootstrap";
/* import { SvgIcon } from "../SvgIcon/SvgIcon"; */
import "./SearchInput.css";

interface SearchInputProps {
  placeholder: string;
  onSearch: (query: string) => void;
}

export const SearchInput: React.FC<SearchInputProps> = ({
  placeholder,
  onSearch,
}) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <Form className="form-inline">
      <FormControl
        type="text"
        placeholder={placeholder}
        className="w-100"
        id="search-input"
        onChange={handleSearch}
      />
      <div className="search-icon">
        {/* TODO Вынести в компонент SvgIcon */}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="search-icon-svg"
        >
          <path
            d="M10.7204 9.43396H10.0429L9.80274 9.2024C10.6432 8.2247 11.1492 6.9554 11.1492 5.57461C11.1492 2.49571 8.65352 0 5.57461 0C2.49571 0 0 2.49571 0 5.57461C0 8.65352 2.49571 11.1492 5.57461 11.1492C6.9554 11.1492 8.2247 10.6432 9.2024 9.80274L9.43396 10.0429V10.7204L13.7221 15L15 13.7221L10.7204 9.43396ZM5.57461 9.43396C3.43911 9.43396 1.71527 7.71012 1.71527 5.57461C1.71527 3.43911 3.43911 1.71527 5.57461 1.71527C7.71012 1.71527 9.43396 3.43911 9.43396 5.57461C9.43396 7.71012 7.71012 9.43396 5.57461 9.43396Z"
            fill="#ACACAC"
          />
        </svg>
      </div>
    </Form>
  );
};

export default SearchInput;
