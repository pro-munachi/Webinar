import React from "react";

export const Testimonial = () => {
  const data = [
    "/images/12.jpg",
    "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
    "/images/16.jpg",
    "/images/17.jpg",
  ];
  return (
    <div className="testimonial">
      <h1>Testimonials</h1>
      <div className="testimonial-container">
        {data.map((item, i) => (
          <img src={item} key={i} alt={`testimonial${i}`} />
        ))}
      </div>
    </div>
  );
};

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyA6OlOMXwIqBt5W5qF8AAfQXmNLh-N4hUo",
//   authDomain: "webinar-dfe08.firebaseapp.com",
//   projectId: "webinar-dfe08",
//   storageBucket: "webinar-dfe08.appspot.com",
//   messagingSenderId: "658239488209",
//   appId: "1:658239488209:web:7e0380063461c5145045f0"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
