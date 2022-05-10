//Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Firebase DB
import firebase from "./scripts/firebase";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";

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
  //States for List
  const [lists, setLists] = useState([]);
  const [userListNameInput, setUserListNameInput] = useState("");

  useEffect(() => {
    // Variable to hold the DB
    const database = getDatabase(firebase);
    // Variables to store the references of the DB noves
    const dbRef = ref(database);
    // Add Event Listener to Grab info from a specific point (dbRef) in the DB and save it to the State
    onValue(dbRef, (response) => {
      //Variable to store the new State
      const newState = [];
      //Variable to store the query response
      const data = response.val();
      // //Iterate data (for...in) to store objects into the newState array
      for (let key in data) {
        newState.push({ key: key, name: data[key] });
      }

      //Set the State through setLists
      setLists(newState);
    });
  }, []);

  //Firebase Methods
  //onChange in the Input element id=newList
  const handleNewListNameChange = (event) => {
    setUserListNameInput(event.target.value);
  };

  //Submit new list name
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

  //Delete list name
  const handleRemoveList = (listId) => {
    // Variable for the DB
    const database = getDatabase(firebase);
    // Variable for the reference
    const dbRef = ref(database, `/${listId}`);
    //Use remove() to a spacific node
    remove(dbRef);
  };

  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <section>
          <h2>Create a new List</h2>
          <form action="submit">
            <label htmlFor="newList">Add New List</label>
            <input
              type="text"
              id="newList"
              onChange={(event) => {
                handleNewListNameChange(event);
              }}
              value={userListNameInput}
            />
            <button onClick={submitNewListName}>Create</button>
          </form>
          <ul>
            {lists.map((list) => {
              return (
                <li key={list.key}>
                  <p>
                    {list.name} - {list.key}
                  </p>
                  <button onClick={() => handleRemoveList(list.key)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
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
