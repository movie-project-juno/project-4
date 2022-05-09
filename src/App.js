import Footer from "./components/Footer";
import Header from "./components/Header";
//Components
import Movies from "./components/Movies";
import SearchBar from "./components/SearchBar";
import { UserContextProvider } from "./context";

//Style
import "./styles/App.scss";

const App = () => {
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
