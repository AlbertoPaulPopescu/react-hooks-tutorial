import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { About } from "./pages/about";
import { UserContext } from "./UserContext";

function AppRouter() {
  const [user, setUser] = useState(null); //this is what I don't get.... 

  const value = useMemo(() => ({ user, setUser }), [user, setUser]); // This is isolating the useState to render only when there are changes exclusivleyt to the user

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> 
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={value}> // This is 'providing' a value that is taken from the user state which is initially null and given to the usercontext in index.js on line 6
          <Route path="/" exact component={Index} /> // This 'exact' disables some react rule which won't let you go deeper than '/' on the route so next line will also result in you going to the '/' instead of the about page /about/
          <Route path="/about/" component={About} />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default AppRouter;
