import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Board from "./components/Board";
import SideBarMenu from "./components/SideBarMenu";

function App() {
  const [toogelSpinBoard, setToogelSpinBoard] = useState<boolean>(false);
  const [showSquareValue, setshowSquareValue] = useState<boolean>(false);
  const [showPieces, setShowPieces] = useState<boolean>(false);
  return (
    <div className='App'>
      <SideBarMenu
        showSquareValue={showSquareValue}
        setshowSquareValue={setshowSquareValue}
        setToogelSpinBoard={setToogelSpinBoard}
        toogelSpinBoard={toogelSpinBoard}
      />
      <Board
        toogelSpinBoard={toogelSpinBoard}
        showSquareValue={showSquareValue}
      />
    </div>
  );
}

export default App;
