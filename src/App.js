//Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Firebase DB
import firebase from "./scripts/firebase";
import { getDatabase, ref, onValue, push } from "firebase/database";

//Components
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import Footer from "./Components/Footer";
import SearchBar from "./Components/SearchBar";
import Genres from "./Components/Genres";
import { UserContextProvider } from "./context";

//Style
import "./styles/App.css";
import CreateListForm from "./Components/CreateListForm";

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
      console.log("data from DB", response.val());

      //Variable to store the new State
      const newState = [];
      //Variable to store the query response
      const data = response.val();
      // //Iterate data (for...in) to store objects into the newState array
      for (let item in data) {
        newState.push(data[item]);
      }

      //Set the State through setLists
      setLists(newState);
    });
  }, []);

  //Firebase Methods
  const createNewList = (event) => {
    console.log(event.target.value);
    setUserListNameInput(event.target.value);
  };

  console.log("outside", lists);

  const submitNewListName = (event) => {
    event.preventDefault();
    //Variable for the DB
    const database = getDatabase(firebase);
    // VAriable for the reference
    const dbRef = ref(database);
    //Push value to DB
    push(dbRef, userListNameInput);
    //Reset state to empty
    setUserListNameInput("");
  };

  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <section>
          <h2>Create a new List</h2>
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
            <button onSubmit={submitNewListName}>Create</button>
          </form>
          <p>{lists}</p>
        </section>
        <SearchBar />
        <main className="wrapper container">
          <Movies />
          <Genres />
        </main>
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;
