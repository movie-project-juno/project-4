import { getDatabase, onValue, push, ref, remove } from "firebase/database";
import { useContext, useEffect, useState } from "react";

import { DBContext } from "../context/firebaseConnection";
import firebase from "../scripts/firebase";

const Lists = () => {
  const lists = useContext(DBContext);

  //States for List
  const [userListNameInput, setUserListNameInput] = useState("");


  // console.log("outside users:", users);
  console.log("outside lists:", lists);

  //#region Lists
  //onChange in the Input element id=newList
  const handleNewListNameChange = (event) => {
    setUserListNameInput(event.target.value);
  };

  //Submit new list name
  const submitNewListName = (event) => {
    event.preventDefault();
    // Variable for the DB
    const database = getDatabase(firebase);
    // Variable for the reference
    const dbRef = ref(database);
    // Push value to DB
    push(dbRef, userListNameInput);
    // Reset state to empty
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

  //Submit new list name
  const displayListWithMovies = (event, listId) => {   
    // Variable for the DB
    const database = getDatabase(firebase);
    // Variable for the reference
    const dbRef = ref(database);


  };

  return (
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
               <p>{`${list.name} - ${list.key}`}</p>             
              </p>
              <button onClick={() => handleRemoveList(list.key)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Lists;
