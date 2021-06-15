import { createContext } from "react";

export const UserContext = createContext(null); //I mean we already provide a value to the user context from the userstate which is either logged in or logged out but this will probably make sure that if there is no value provided the context is null, might be a convention
