//Components
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Movies from "./Components/Movies";
import SelectMovies from "./Components/SelectMovies";
import { UserContextProvider } from "./context/apiMovies";

//Style
import "./styles/App.scss";

const App = () => {
  return (
    <div className="App">
      <Header />
      <UserContextProvider>
        <SelectMovies />
        <Movies />
      </UserContextProvider>
      <Footer />
    </div>
  );
};

export default App;
