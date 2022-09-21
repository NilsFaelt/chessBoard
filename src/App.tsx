import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Board from "./components/Board";

const dynamic = "hobbies";
const user = {
  name: "nils",
  email: "nils@yahoo.com",
  [dynamic]: "staeling code",
};
console.log(user);
function App() {
  return (
    <div className='App'>
      <Board />
    </div>
  );
}

export default App;
