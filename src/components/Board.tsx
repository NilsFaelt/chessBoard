import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { activatePiecesFunc } from "./activatePieces";
import Styles from "./board.module.css";
import { createBoard } from "./createBoard";

interface Props {
  toogelSpinBoard: boolean;
  showSquareValue: boolean;
}

interface EachSquare {
  white: boolean;
  squareValue: string;
  piece?: string;
  active: boolean;
}

const Board: React.FC<Props> = ({ toogelSpinBoard, showSquareValue }) => {
  const [board, setBoard] = useState<EachSquare[] | null>(null);
  useEffect(() => {
    setBoard(createBoard());
  }, []);

  const activatePiece = (square: EachSquare) => {
    activatePiecesFunc(square, board, setBoard);
  };

  return (
    <div className={toogelSpinBoard ? Styles.containerSpin : Styles.container}>
      {board?.map((square) => {
        return (
          <div
            onClick={() => activatePiece(square)}
            title={square.squareValue}
            key={nanoid()}
            style={{
              backgroundColor: square.active ? "rgb(206, 158, 247)" : "",
              color: square.active ? "rgb(253, 239, 81)" : "",
            }}
            className={square.white ? Styles.square : Styles.squareWhite}
          >
            <p className={toogelSpinBoard ? Styles.textActive : Styles.text}>
              {showSquareValue ? square.piece : square.squareValue}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
