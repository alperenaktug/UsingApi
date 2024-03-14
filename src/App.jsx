import { useEffect } from "react";
import "./App.css";
import axios from "axios";

const BASE_URL = "http://localhost:3005";

function App() {
  // const getAllUsers = async () => {
  //   const response = await axios.get(BASE_URL + "/users");
  //   console.log(response.data);
  // };

  // const getUserById = async (userId) => {
  //   const response = await axios.get(BASE_URL + "/users/" + userId);
  //   console.log(response.data);
  // };
  // Veri eklemek için kullanılır
  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser);
    console.log("response", response.data);
  };

  useEffect(() => {
    // getAllUsers();
    // getUserById(1);
    const newUser = {
      "username ": "malik",
      password: "3434",
    };
    createUser(newUser);
  }, []);

  return (
    <>
      <div className="polat">Alperen Alemdar</div>
    </>
  );
}

export default App;
