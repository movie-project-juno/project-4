// import { getDatabase, onValue, push, ref, remove } from "firebase/database";
// import { useContext, useEffect, useState } from "react";

// import { DBContext } from "../context/firebaseConnection";
// import firebase from "../scripts/firebase";

// const Lists = () => {
//   const lists = useContext(DBContext);

//   //States for List
//   const [userListNameInput, setUserListNameInput] = useState("");

//   //States for User
//   const [users, setUsers] = useState({});
//   const [userNameInput, setUserNameInput] = useState("");
//   const [userPasswordInput, setUserPasswordInput] = useState("");

//   useEffect(() => {
//     // Variable to store the new State
//     const newUsersState = [
//       {
//         userName: "Guest",
//         password: "123",
//         lists: [
//           {
//             listName: "default",
//             moviesId: [1, 2, 3],
//           },
//           {
//             listName: "oscar",
//             moviesId: [4, 5, 6],
//           },
//         ],
//       },
//     ];

//     // // HARD CODED
//     const newUser1 = {
//       userName: "Theo",
//       password: "ASAP",
//       lists: [
//         {
//           listName: "default",
//           moviesId: [15, 25, 35],
//         },
//         {
//           listName: "thriller",
//           moviesId: [45, 55, 65],
//         },
//       ],
//     };
//     newUsersState.push(newUser1);
//     // // // HARD CODED ENG - DELETE

//     // Set the State through setLists
//     setUsers(newUsersState);
//   }, []);

//   console.log("outside users:", users);
//   console.log("outside lists:", lists);

//   //#region Lists
//   //onChange in the Input element id=newList
//   const handleNewListNameChange = (event) => {
//     setUserListNameInput(event.target.value);
//   };

//   //Submit new list name
//   const submitNewListName = (event) => {
//     event.preventDefault();
//     //Variable for the DB
//     const database = getDatabase(firebase);
//     // VAriable for the reference
//     const dbRef = ref(database);
//     //Push value to DB
//     push(dbRef, userListNameInput);
//     //Reset state to empty
//     setUserListNameInput("");
//   };

//   //Delete list name
//   const handleRemoveList = (listId) => {
//     // Variable for the DB
//     const database = getDatabase(firebase);
//     // Variable for the reference
//     const dbRef = ref(database, `/${listId}`);
//     //Use remove() to a spacific node
//     remove(dbRef);
//   };
//   return (
//     <section className="create-new-list">
//       <h2>Create a new List</h2>
//       <form action="submit">
//         <label htmlFor="newList">Add New List</label>
//         <input
//           type="text"
//           id="newList"
//           onChange={(event) => {
//             handleNewListNameChange(event);
//           }}
//           value={userListNameInput}
//         />
//         <button onClick={submitNewListName}>Create</button>
//       </form>
//       <ul>
//         {lists.map((list) => {
//           return (
//             <li key={list.key}>
//               <p>{`${list.name} - ${list.key} - ${users.userName}`}</p>
//               <button onClick={() => handleRemoveList(list.key)}>Remove</button>
//             </li>
//           );
//         })}
//       </ul>
//     </section>
//   );
// };

// export default Lists;
