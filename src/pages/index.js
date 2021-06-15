import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { login } from "../utils/login";

export function Index() {
  const { user, setUser } = useContext(UserContext); // Opsy... so apparently in this file we set the user = UserContext(which is null)

  return (
    <div>
      <h2>Home</h2>
      <pre>{JSON.stringify(user, null, 2)}</pre> 
      {user ? (
        <button
          onClick={() => {
            // call logout
            setUser(null);
          }}
        >
          logout
        </button>
      ) : (
        <button
          onClick={async () => {
            const user = await login(); //in user we store what we get from the login() function
            setUser(user); //here we update the user with the values in user on line above i.e. line 24
          }}
        >
          login
        </button>
      )} // This asks if the user is true, at first is not because it is null because it is equal to the UserContext which is null, so we display the login button. We click on the login button and
      //we call this async function that will update our user to user see comment on line 24
    </div>
  );
}
