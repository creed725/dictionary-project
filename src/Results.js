import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    // FALLBACK: If the API responded but the meanings array is empty or an invalid word
    if (!props.results.meanings || props.results.meanings.length === 0) {
      return (
        <div className="Results">
          <section>
            <p>
              Sorry, we couldn't find a definition for that word. Please try
              again!
            </p>
          </section>
        </div>
      );
    }

    //If the word is valide, render as usual
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <Phonetic phonetic={props.results.phonetic} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
