import React from "react";

export default function Phonetics(props) {
  console.log(props.phonetics);
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>

      <span>{props.phonetic.text}</span>
    </div>
  );
}
