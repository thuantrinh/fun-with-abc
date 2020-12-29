import React from "react";
import "../index.css"
import RandomAlphabets from "./RandomAbc"
import { BrowserRouter as Router, Route, Link, Switch, Redirect} from "react-router-dom";
import { Provider } from "mobx-react"
import { AppStore } from "../models/AppStore"

export default function App() {
    return (
        <Router>
            <Provider store={new AppStore()}>
                <main>
                    <nav>
                        <ul>
                            {/*<li><Link to="/">Home</Link></li>*/}
                            <li><Link to={`/about/`}>About</Link></li>
                            <li><Link to="/randomAlphabets/0">Random Alphabets</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        {/*<Route path="/"  component={Home} />*/}
                        <Route path="/about/"  component={About} />
                        <Route path="/" exact component={RandomAlphabets} />
                        <Route path="/randomAlphabets/:alphabetIndex" exact component={RandomAlphabets} />
                        <Redirect from="/randomAlphabets" to="0"/>
                    </Switch>
                </main>
            </Provider>

        </Router>
    );
}
// About Page
const About = () => {
    return (
        // props.match.params.name
        <React.Fragment>
            <h1>Made this to help teach my 4 year old Alphabets and number</h1>
        </React.Fragment>
    )
};