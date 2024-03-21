import { BrowserRouter } from "react-router-dom";
import Logo from "./components/Logo";
import Head from "./components/Head";
import Search from "./components/Search";
import Pages from "./pages/Pages";

import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Head />
      <Logo to={"/"} className="flex justify-center" />
      <div className="p-10 text-center">
        <p>Welcome to this beatiful project!</p>
        <p>Click on the cards below to access to the recipes</p>
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
