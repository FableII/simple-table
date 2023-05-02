import React, { useState } from "react";
import SearchInput from "../SearchInput/SearchInput";
import { SelectInput } from "../SelectInput/SelectInput";
import { DateInput } from "../DateInput/DateInput";
import "./Header.css";

export const Header = (): JSX.Element => {
  const [query, setQuery] = useState("");

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    // здесь можно выполнить поиск с использованием нового значения запроса
    console.log(query)
  };
  return (
    <React.Fragment>
      <header className="header">
        <h1 className="header-description">Таблица</h1>
        <div className="header-elements">
          <SearchInput placeholder="Поиск" onSearch={handleSearch} />
          <DateInput dateText="с" />
          <DateInput dateText="по" />
          <SelectInput />
        </div>
      </header>
    </React.Fragment>
  );
};
