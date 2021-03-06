import {BrowserRouter, Route} from "react-router-dom";
import Home from "./components/Home/Home";
import Series from "./components/Series/Series";
import Match from "./components/Match/Match";
import {Provider} from "react-redux";
import store from "./store/store";

function App() {
  return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/DotaProject/">
            <Home/>
          </Route>
          <Route exact path="/DotaProject/series">
            <Series/>
          </Route>
          <Route exact path="/DotaProject/series/:matchId">
            <Match/>
          </Route>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
