//Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Firebase DB
import firebase from "./scripts/firebase";
import { getDatabase, ref, onValue } from "firebase/database";

//Components
import Header from "./components/Header";
import Movie from "./components/Movie";
import Footer from "./components/Footer";
import CreateListForm from "./components/CreateListForm";

const App = () => {
  //States
  const [movies, setMovies] = useState([]);
  const [lists, setLists] = useState([]);
  const [userListNameInput, setUserListNameInput] = useState("");

  useEffect(() => {
    //grab information from moviedb API
    //store our keys
    //search for movies
    const fetchData = async () => {
      const response = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/trending/all/day?",
        params: {
          format: "json",
          api_key: "9279e74f93d44d00c0b5afd5efff4065",
        },
      });
      // TO DO DELETE THIS RESPONSE22 - using just to get image sizes
      const response22 = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/configuration?api_key=9279e74f93d44d00c0b5afd5efff4065",
      });
      setMovies(response.data.results);
      console.log("=====", response22);
    };
    fetchData();
  }, []);

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
      <h1>Testing Movie API and Firebase</h1>
      <Header />
      <main className="wrapper container">
        {/* <CreateListForm createList={createNewList} value={userListNameInput} /> */}
        <section>
          <h2>Create a List</h2>
          <form action="submit">
            <input
              type="text"
              onChange={(event) => {
                createNewList(event);
              }}
              value={userListNameInput}
            />
            <button>Create</button>
          </form>
        </section>

        {movies.map((movie) => {
          return <Movie movie={movie} key={movie.id} />;
        })}
      </main>
      <Footer />
    </div>
  );
};

export default App;
