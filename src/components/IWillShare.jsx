import React from "react";

export const IWillShare = () => {
  const data = [
    "How talent changed my life and can also change yours",
    "How you can create an exit route from a toxic job",
    "How you can change from a place of obscurity to greatness",
    "The money-making & wealth creation tool you have but don't know",
    "The surest way to discover your purpose on earth",
  ];

  return (
    <section className="iwillshare">
      <h1>In this webinar, I will share:</h1>
      <div > 
        {data.map((item, i) => (
          <p key={i}>{`${i + 1}. ${item}`}</p>
        ))}
      </div>
    </section>
  );
};
