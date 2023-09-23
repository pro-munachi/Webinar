import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { IWillShare } from "./components/IWillShare";
import { Actions } from "./components/Actions";
import { Navbar } from "./components/Navbar";
import { FAQ } from "./components/FAQ";
import { Testimonial } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebase";

function App() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const addTodo = async (e) => {
    setLoading(true)
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        todo: {
          name,
          email,
        },
      });

      setLoading(false)
      setSubmitted(true)

    } catch (e) {
      console.error("Error adding document: ", e);
      setLoading(false)

    }
  };
  return (
    <div className="App">
      <Navbar />

      <div className="container">
        {submitted ? (
          <>
            <Header />
            <Actions />
          </>
        ) : (
          <>
            <IWillShare />
            <FAQ />
            <Testimonial />

            <div className="form">
              <h1>Fill this form to indicate interest</h1>
              <input
                className="form-input"
                placeholder="Enter name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="form-input"
                placeholder="Enter email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <button
                className="form-button"
                onClick={(e) => addTodo(e)}
                disabled={!name || !email}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
