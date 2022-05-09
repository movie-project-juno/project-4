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

const App = () => {
  //States
  // const [movies, setMovies] = useState([]);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // Variable to hold the DB
    const database = getDatabase(firebase);
    // Variables to store the references of the DB noves
    const dbRef = ref(database);
    // Grab info from a specific point (reference) in the DB
    onValue(dbRef, (response) => {
      console.log(response.val());
    });
  });

  return (
    <div className="App">
      <UserContextProvider>
        <Header />
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
