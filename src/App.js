import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import FooterComponant from "./Footer/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavComponant from "./Navbar/nav";
import MoviesComponant from "./Movies/movie";
import MoviesDetialsComponant from "./Movies/movieDetials";
import favoriteMovies from "./favoriteMov/favMov";
import ChangeLoader from "./Loading/loading";
import { useSelector } from "react-redux";

function App() {
  const isLoading = useSelector((state) => state.loader.isLoader);
  return (
    <BrowserRouter>
      <NavComponant />
      <Switch>
        <Route path="/" exact component={MoviesComponant} />

        <Route path="/movies" exact component={MoviesComponant} />
        <Route
          path="/moviedetails/:id"
          exact
          component={MoviesDetialsComponant}
        />
        <Route path="/favorite" exact component={favoriteMovies} />
      </Switch>
      {isLoading && <ChangeLoader />}
      <FooterComponant />
    </BrowserRouter>
  );
}

export default App;
