import React, { useState, useEffect } from "react";
import quotesArray from "../../quotes";
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

  return (
    <div className="mt-8 py-2 md:py-6 text-secondaryText flex flex-col gap-2 ">
      <p className="text-[14px]  text-wrap">"{quote.content}"</p>
      <p className="flex flex-row justify-end text-[12px] text-right">
        -- {quote.author}
      </p>
    </div>
  );
};

export default Quote;
