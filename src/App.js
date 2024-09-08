import React, { useState, useEffect } from "react";

// Custom dictionary for spell-checking
const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example"
};

const XSpellCheck = () => {
  const [inputText, setInputText] = useState(""); // State for user input
  const [suggestion, setSuggestion] = useState(""); // State for correction suggestion

  // Function to handle text input
  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
  };

  // Function to find the first misspelled word
  const findCorrection = (text) => {
    const words = text.toLowerCase().split(" ");
    for (let word of words) {
      if (customDictionary[word]) {
        return `Did you mean: ${customDictionary[word]}?`;
      }
    }
    return "";
  };

  // Effect to update suggestion based on input text
  useEffect(() => {
    if (inputText.trim() === "") {
      setSuggestion(""); // Clear suggestion if input is empty
    } else {
      const correction = findCorrection(inputText);
      setSuggestion(correction);
    }
  }, [inputText]);

  return (
    <div>
      <h2>Spell Checker</h2>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter text..."
      />
      {suggestion && <p>{suggestion}</p>}
    </div>
  );
};

export default XSpellCheck;
