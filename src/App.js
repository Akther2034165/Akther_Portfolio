import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Blog from "./components/Home/Blog/Blog";
import Home from "./components/Home/Home/Home";
import ProjectDetails from "./components/Home/ProjectDetails/ProjectDetails";

function App() {
  return (
    <div className="App bg-light">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/projectDetail/:ProjectId">
            <ProjectDetails />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
