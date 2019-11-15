import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage.js";
import SearchForm from "./components/SearchForm.js";
import {Route} from "react-router-dom";

export default function App() {
  return (

    <main>
      <Header />
      <Route exact path="/" component={WelcomePage} />
      <Route path="/Characters" component={CharacterList} />
      <Route path="/SearchForm" component={SearchForm} />
    </main>

  );
}
