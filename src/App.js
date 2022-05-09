//Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Firebase DB
import firebase from "./scripts/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

//Components
import Header from "./components/Header";
import Movies from "./components/Movies";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { UserContextProvider } from "./context";

//Style
import "./styles/App.scss";
import CreateListForm from "./components/CreateListForm";

const App = () => {
  //States
  // const [movies, setMovies] = useState([]);
  const [lists, setLists] = useState([]);
  const [userListNameInput, setUserListNameInput] = useState("");

  useEffect(() => {
    // Variable to hold the DB
    const database = getDatabase(firebase);
    // Variables to store the references of the DB noves
    const dbRef = ref(database);
    // Add Event Listener to Grab info from a specific point (dbRef) in the DB and save it to the State
    onValue(dbRef, (response) => {
      console.log(response.val());

      //Variable to store the new State
      const newState = [];
      //Variable to store the query response
      const data = response.val();
      // //Iterate data (for...in) to store objects into the newState array
      // for (let item in data) {
      //   newState.push();
      // }

      //Set the State through setLists
      setLists(newState);
    });
  }, []);

  //Firebase Methods
  const createNewList = (event) => {
    console.log(event.target.value);
    setUserListNameInput(event.target.value);
  };

  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <section>
          <h2>Create a List</h2>
          <form action="submit">
            <label htmlFor="newList">New List</label>
            <input
              type="text"
              id="newList"
              onChange={(event) => {
                createNewList(event);
              }}
              value={userListNameInput}
            />
            <button>Create</button>
          </form>
        </section>
        <SearchBar />
        <main className="wrapper container">
          <Movies />
        </main>
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;
