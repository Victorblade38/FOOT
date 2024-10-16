import React, { useState, useEffect } from "react";

const Quote = ({ color = "blue" }) => {
  const [quote, setQuote] = useState("");

  async function quoteData() {
    //const url = "https://api.quotable.io/random";
    //console.log(url);
    try {
      const response = await fetch("http://api.quotable.io/random");
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

  return (
    <div
      className={`bg-${color}-100 rounded-md p-2 md:p-6 flex flex-col gap-2 `}
    >
      <p className="text-lg md:text-xl font-serif font-medium p-2 text-wrap w-64 md:w-96 ">
        "{quote.content}"
      </p>
      <span className="font-serif text-lg md:text-xl text-right px-2 ">
        -- {quote.author}
      </span>
    </div>
  );
};

export default Quote;
