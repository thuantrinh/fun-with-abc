import React from "react";
import "../index.css"
import RandomAlphabets from "./RandomAbc"
import LinearAlphabets from "./LinearAbc"
import LinearNumbers from "./LinearNumbers"
import Home from "./Home"
import About from "./About"
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
                            <li><Link to={`/`}>Home</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/about/"  component={About} />
                        <Route path="/" exact component={Home} />
                        <Route path="/randomAlphabets/:index" exact component={RandomAlphabets} />
                        <Route path="/linearAlphabets/:index" exact component={LinearAlphabets} />
                        <Route path="/linearNumbers/:index" exact component={LinearNumbers} />
                        <Redirect from="/randomAlphabets" to="start"/>
                        <Redirect from="/linearAlphabets" to="start"/>
                        <Redirect from="/linearNumbers" to="0"/>
                    </Switch>
                </main>
            </Provider>
        </Router>
    );
}