import { BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Pages from "./pages/Pages";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Logo to={"/"} class="flex justify-center" />
      <div class="p-10 text-center">
        <p>Welcome to this beatiful project!</p>
        <p>Click on the cards to access to the recipes</p>
        <p>or text something in the searchbar</p>
      </div>
      <BrowserRouter>
        <Search class="flex-row p-3 border-4 border-beige rounded-lg bg-green m-3" />
        <Pages />
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
