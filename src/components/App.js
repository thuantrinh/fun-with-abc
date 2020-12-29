import React from "react";
import "../index.css"
import RandomAlphabets from "./RandomAbc"
import LinearAlphabets from "./LinearAbc"
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
                            {/*<li><Link to="/">Home</Link></li>*/}
                            <li><Link to={`/`}>Home</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        {/*<Route path="/"  component={Home} />*/}
                        <Route path="/about/"  component={About} />
                        <Route path="/" exact component={Home} />
                        <Route path="/randomAlphabets/:alphabetIndex" exact component={RandomAlphabets} />
                        <Route path="/linearAlphabets/:alphabetIndex" exact component={LinearAlphabets} />
                        <Redirect from="/randomAlphabets" to="0"/>
                        <Redirect from="/linearAlphabets" to="0"/>
                    </Switch>
                </main>
            </Provider>

        </Router>
    );
}