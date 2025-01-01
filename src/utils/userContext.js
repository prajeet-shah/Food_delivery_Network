import { createContext } from "react";

const userContext = createContext({
    loggedInUser : "Default value",
})


export default userContext;
