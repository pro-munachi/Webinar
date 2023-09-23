import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useState } from "react";

const [todos, setTodos] = useState([]);

const fetchPost = async () => {
  await getDocs(collection(db, "users")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    setTodos(newData);
    console.log(todos, newData);
  });
};

useEffect(() => {
  fetchPost();
}, []);
