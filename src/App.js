//External Imports
import { BrowserRouter, Route, Switch } from "../node_modules/react-router-dom";

//Internal Imports
import "./App.css";
import Main from "./components/main";
import AboutMe from "./components/AboutMe/about-me";
import Footer from "./components/Footer/footer";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";

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
