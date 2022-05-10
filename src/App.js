//Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Firebase DB
import firebase from "./scripts/firebase";
import { getDatabase, ref, onValue, push, remove } from "firebase/database";

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
  //States for List
  const [lists, setLists] = useState([]);
  const [userListNameInput, setUserListNameInput] = useState("");

  //States for User
  const [users, setUsers] = useState({});
  const [userNameInput, setUserNameInput] = useState("");
  const [userPasswordInput, setUserPasswordInput] = useState("");

  useEffect(() => {
    // Variable to hold the DB
    const database = getDatabase(firebase);
    // Variables to store the references of the DB noves
    const dbRef = ref(database);
    // Add Event Listener to Grab info from a specific point (dbRef) in the DB and save it to the State
    onValue(dbRef, (response) => {
      // Variable to store the new State
      const newUsersState = [
        {
          userName: "Guest",
          password: "123",
          lists: [
            {
              listName: "default",
              moviesId: [1, 2, 3],
            },
            {
              listName: "oscar",
              moviesId: [4, 5, 6],
            },
          ],
        },
      ];
      const newListState = [];
      // Variable to store the query response
      const data = response.val();

      // // HARD CODED
      const newUser1 = {
        userName: "Theo",
        password: "ASAP",
        lists: [
          {
            listName: "default",
            moviesId: [15, 25, 35],
          },
          {
            listName: "thriller",
            moviesId: [45, 55, 65],
          },
        ],
      };
      newUsersState.push(newUser1);
      // // // HARD CODED ENG - DELETE

      // Bring data from DB - Iterate data (for...in) to store objects into the newListState array
      for (let key in data) {
        newListState.push({ key: key, name: data[key] });
      }
      // Set the State through setLists
      setUsers(newUsersState);
      setLists(newListState);

      console.log("inside:", newListState);
    });
  }, []);

  console.log("outside users:", users);
  console.log("outside lists:", lists);

  //Firebase Methods
  //#region User

  //#endregion User

  //#region Lists
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
  //#endregion Lists

  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <section className="create-user">
          <h2>Create new User</h2>
          <form action="submit">
            <label htmlFor="newUser">User name</label>
            <input type="text" id="newUser" />
            <label htmlFor="newUserPassword">Password</label>
            <input type="text" id="newUserPassword" />
            <button>Add user</button>
          </form>
          <ul>
            {users.map((user) => {
              return (
                // activeUser.key = user.key ? {Show <li>} : <p>No user found</p>
                <li key={user.key}>
                  <p>
                    {user.name} - {user.key} - {user.userName}
                  </p>
                  <button onClick={() => handleRemoveList(user.key)}>
                    Remove
                  </button>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="create-new-list">
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
                    {list.name} - {list.key} - {users.userName}
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
          <Genres />
        </main>
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;
