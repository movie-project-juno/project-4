import { getDatabase, onValue, push, ref, remove } from "firebase/database";
// // Modules
import React, { createContext, useEffect, useState } from "react";

// //Firebase DB
import firebase from "../scripts/firebase";

// // create context
const DBContext = createContext();

const UserDBContextProvider = ({ children }) => {
  //   //States
  const [lists, setLists] = useState([]);
  const [userListNameInput, setUserListNameInput] = useState("");

  //   //
  useEffect(() => {
    //     // Variable to hold the DB
    const database = getDatabase(firebase);
    //     // Variables to store the references of the DB noves
    const dbRef = ref(database);
    //     // Add Event Listener to Grab info from a specific point (dbRef) in the DB and save it to the State
    onValue(dbRef, (response) => {
      //       //Variable to store the new State
      const newState = [];
      //       //Variable to store the query response
      const data = response.val();
      //       // //Iterate data (for...in) to store objects into the newState array
      for (let key in data) {
        newState.push({ key: key, name: data[key] });
      }

      //       //Set the State through setLists
      setLists(newState);
    });
  }, []);

  return (
    //     // the Provider gives access to the context to its children
    <DBContext.Provider value={lists}>{children}</DBContext.Provider>
  );
};

export { DBContext, UserDBContextProvider };
