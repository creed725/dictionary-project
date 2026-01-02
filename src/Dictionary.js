import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    //console.log(response.data[0]);
    //console.log(response.data[0].meanings[0].definition[0].definition);
    setResults(response.data.meanings);
  }
  function search(event) {
    event.preventDefault();

    // documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = `40bdb8c3a26579atfoa8a2d376def906`;
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
      <Results results={results} />
    </div>
  );
}
