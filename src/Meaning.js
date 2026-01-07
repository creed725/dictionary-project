import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div className="definition-example-synonyms">
        <p>
          <strong>Definition: </strong>
          {props.meaning.definition}
          <br />
          <strong>Example: </strong>
          <em> {props.meaning.example} </em>
          <Synonyms synonyms={props.meaning.synonyms} />
        </p>
      </div>
    </div>
  );
}
