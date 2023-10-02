import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import "../App.css";
import { Navbar } from "../components/Navbar";
import {AiFillCopy} from "react-icons/ai"

const FetchUsers = () => {
  const [users, setUsers] = useState([]);

  const fetchPost = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      const data = newData.map((item) => ({
        name: item?.todo?.name,
        email: item?.todo?.email,
      }));

      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Error in copying text: ', err);
    }
  }

  return (
    <div>
      <Navbar />

      <div style={{ width: "80%", margin: "80px auto",  }}>
        <div style={{ overflowX: "auto", display: "block" }}>
        <table>
          <tr>
            <th>Email address</th>
            <th>Name</th>
          </tr>

          {users.map((item, i) => (
           <tr key={i}>
           <td>{item?.email} <AiFillCopy onClick={() => copyToClipboard(item?.email)} /></td>
           <td>{item?.name}</td>
         </tr>
        ))}      
        </table>
        </div>
      </div>
    </div>
  );
};

export default FetchUsers;
