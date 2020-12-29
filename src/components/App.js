import React from "react";
import "../index.css"
import RandomAlphabets from "./RandomAbc"
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default function App() {
    return (
        <Router>
            <main>
                <nav>
                    <ul>
                        {/*<li><Link to="/">Home</Link></li>*/}
                        <li><Link to={`/about/`}>About</Link></li>
                        <li><Link to="/randomAlphabets">Random Alphabets</Link></li>
                    </ul>
                </nav>
                <Switch>
                    {/*<Route path="/"  component={Home} />*/}
                    <Route path="/about/"  component={About} />
                    <Route path="/" exact component={RandomAlphabets} />
                    <Route path="/randomAlphabets" exact component={RandomAlphabets} />
                </Switch>
            </main>
        </Router>
    );
}
// Home Page
const Home = () => (
    <React.Fragment>
        <h1>Home</h1>
    </React.Fragment>
);
// About Page
const About = () => {
    return (
        // props.match.params.name
        <React.Fragment>
            <h1>Made this to help teach my 4 year old Alphabets and number</h1>
        </React.Fragment>
    )
};