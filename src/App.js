//Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import CreateListForm from "./Components/CreateListForm";
import Footer from "./Components/Footer";
//Components
import Header from "./Components/Header";
import Lists from "./Components/Lists";
import Movies from "./Components/Movies";
import SearchBar from "./Components/SearchBar";
import Users from "./Components/Users";
import { UserContextProvider } from "./context/apiMovies";
import { UserDBContextProvider } from "./context/firebaseConnection";

//Firebase DB

//Style
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Users />
      <UserDBContextProvider>
        <Lists />
      </UserDBContextProvider>
      <SearchBar />
      <UserContextProvider>
        <Movies />
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;
