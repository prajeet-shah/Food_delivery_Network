import User from "./User";
import Userclass from "./Userclass";
import userContext from "../utils/userContext";
import { useContext } from "react";
const About = () => {

  const {loggedInUser} = useContext(userContext);
  return (
    <div>
      <h1>This is about page</h1>
      <h2>{loggedInUser}</h2>
      <User name = "prajeet shah(function)" />
      <Userclass name = "prajeet shah(class)" />
    </div>
  );
};

export default About;
