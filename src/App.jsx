import "./App.css";
import axios from "axios";
import { useEffect } from "react";

const BASE_URL = "http://localhost:3005";

function App() {
  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios.get(BASE_URL + "/users");
      console.log(response.data);
    };

    const getUserById = async (userId) => {
      const response = await axios.get(BASE_URL + "/users/" + userId);
      console.log(response.data);
    };

    const createUser = async (newUser) => {
      const response = await axios.post(`${BASE_URL}/users`, newUser);
      console.log("response", response.data);
    };

    const updateUser = async (userId, updatedUser) => {
      const response = await axios.put(
        `${BASE_URL}/users/${userId}`,
        updatedUser
      );
      console.log(response.data);
    };

    const deleteUserById = async (userId) => {
      const deletedResponse = await axios.delete(`${BASE_URL}/users/${userId}`);
      console.log(deletedResponse.data);
    };

    // Kullanımlar
    getAllUsers();
    getUserById(1);
    const newUser = {
      username: "malik",
      password: "3434",
    };
    createUser(newUser);
    updateUser("5", {
      username: "Alperen",
      password: "5151",
    });
    deleteUserById("1");
  }, []);

  return (
    <>
      <div className="polat">Alperen Alemdar</div>
    </>
  );
}

export default App;
