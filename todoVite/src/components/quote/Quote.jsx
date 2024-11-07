import React, { useState, useEffect } from "react";
import quotesArray from "../../quotes";
import reload from "../../assets/refresh.png";
import "./Quote.css";

const Quote = () => {
  const [quote, setQuote] = useState({});
  const [rotateClass, setRotateClass] = useState("");

  /*async function quoteData() {
    const url = "http://api.quotable.io/random";
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
  }*/

  useEffect(() => {
    //quoteData();
    getRandomQuote();
  }, []);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    setQuote(quotesArray[randomIndex]);
  }

  const refresh = () => {
    console.log("Refreshing...");
    setRotateClass("rotate");
    setTimeout(() => {
      setRotateClass("");
    }, 400);
    getRandomQuote();
  };

  return (
    <div className={`rounded-md p-2 md:p-6 text-white flex flex-col gap-2 `}>
      <p className="text-sm md:text-lg lg:text-xl font-serif font-medium p-2 text-wrap w-64 md:w-80 ">
        "{quote.content}"
      </p>
      <span className="flex flex-row justify-end items-center gap-4 md:gap-2 font-serif text-base md:text-xl text-right px-2 ">
        -- {quote.author}
        <button
          onClick={refresh}
          className="bg-blue-500 p-[6px] md:p-2 rounded-md hidden md:flex"
        >
          <img
            src={reload}
            className={`${rotateClass} w-4`}
            id="refresh-img"
            alt="Refresh"
          />
        </button>
      </span>
    </div>
  );
};

export default Quote;
