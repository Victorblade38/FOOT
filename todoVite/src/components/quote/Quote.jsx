import React, { useState, useEffect } from "react";
import quotesArray from "../../quotes";
import reload from "../../assets/refresh.png";
import "./Quote.css";

const Quote = ({ color = "blue" }) => {
  const [quote, setQuote] = useState({});
  const [rotateClass, setRotateClass] = useState("");

  async function quoteData() {
    const url = import.meta.env.VITE_QUOTE_API_KEY;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const json = await response.json();
      setQuote(json);
      //console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    quoteData();
  }, []);

  const refresh = () => {
    console.log("Refreshing...");
    setRotateClass("rotate");
    setTimeout(() => {
      setRotateClass("");
    }, 200);
    quoteData();
  };

  return (
    <div
      className={`bg-${color}-100 rounded-md p-2 md:p-6 flex flex-col gap-2 `}
    >
      <p className="text-lg md:text-xl font-serif font-medium p-2 text-wrap w-64 md:w-96 ">
        "{quote.content}"
      </p>
      <span className="flex flex-row justify-end items-center gap-4 font-serif text-lg md:text-xl text-right px-2 ">
        -- {quote.author}{" "}
        <button onClick={refresh} className="bg-blue-500 p-2 rounded-md">
          <img
            src={reload}
            width={20}
            className={rotateClass}
            id="refresh-img"
            alt="Refresh"
          />
        </button>
      </span>
    </div>
  );
};

export default Quote;
