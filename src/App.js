//Modules
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

//Components
import CreateListForm from "./Components/CreateListForm";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Lists from "./Components/Lists";
import Movies from "./Components/Movies";
import SearchBar from "./Components/SearchBar";
import { UserContextProvider } from "./context/apiMovies";
import { UserDBContextProvider } from "./context/firebaseConnection";

//Style
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <UserContextProvider>
        {/* 
      <UserDBContextProvider>
        <Lists />
      </UserDBContextProvider> */}
        <SearchBar />
        <Movies />
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;
