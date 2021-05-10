import "./App.css";
import { BrowserRouter, Route, Switch } from "../node_modules/react-router-dom";
import Main from "./components/main";
import AboutMe from "./components/about-me";
import Footer from "./components/footer";
import Skills from "./components/skills";
import Works from "./components/works";
import Contact from "./components/contact";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/about-me" component={AboutMe}></Route>
        <Route exact path="/skills" component={Skills}></Route>
        <Route exact path="/proyectos" component={Works}></Route>
        <Route exact path="/contacto" component={Contact}></Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
