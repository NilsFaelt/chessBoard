import Styles from "./sideBarMenu.module.css";

interface Props {
  setToogelSpinBoard: React.Dispatch<React.SetStateAction<boolean>>;
  setshowSquareValue: React.Dispatch<React.SetStateAction<boolean>>;
  toogelSpinBoard: boolean;
  showSquareValue: boolean;
}

const SideBarMenu: React.FC<Props> = ({
  setshowSquareValue,
  showSquareValue,
  setToogelSpinBoard,
  toogelSpinBoard,
}) => {
  return (
    <div className={Styles.container}>
      <button onClick={() => setToogelSpinBoard(!toogelSpinBoard)}>
        Spin Board
      </button>
      <button onClick={() => setshowSquareValue(!showSquareValue)}>
        {showSquareValue ? "Show square value" : "Show Pieces"}
      </button>
    </div>
  );
};

export default SideBarMenu;
