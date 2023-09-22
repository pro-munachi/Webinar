import React from "react";

export const FAQ = () => {
  const data = [
    {
        q: "What's the venue for this training?",
        a: "It is a virtual live training that you can be part of from any part of the world."
    },
    {
        q: "My job is time demanding, how do I meet up with the training?",
        a: "There is always a replay for those who cannot join the live sessions."
    },
    {
        q: "Can I make payment by instalment?",
        a: "Yes you can pay by instalment as long as you complete the payment before training begins."
    },
  ];

  return (
    <section  className="faq">
      <h1>Frequently Asked Question:</h1>
      <div> 
       {data.map((item, i) => (
        <div  className="faq-container">
            <span>
                Q: {item.q}
            </span><br />
            <span>
                A: {item.a}
            </span><br /><br />
        </div>
       ))}
      </div>
    </section>
  );
};
