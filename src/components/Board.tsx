import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import Styles from "./board.module.css";
import { createBoard } from "./createBoard";

interface EachSquare {
  white: boolean;
  squareValue: string;
  piece?: string;
  active: boolean;
}

const Board = () => {
  const [board, setBoard] = useState<EachSquare[] | null>(null);
  useEffect(() => {
    setBoard(createBoard());
  }, []);

  const activatePiece = (square: EachSquare) => {
    if (square.piece && board) {
      setBoard((prevState: any) =>
        prevState.map((item: EachSquare) => {
          return { ...item, active: false };
        })
      );
      setBoard((prevState: any) =>
        prevState?.map((item: EachSquare) => {
          if (square.squareValue === item.squareValue) {
            return { ...item, active: !item.active };
          } else return item;
        })
      );
    }
  };

  return (
    <div className={Styles.container}>
      {board?.map((square) => {
        return (
          <div
            key={nanoid()}
            style={{
              backgroundColor: square.active ? "rgb(206, 158, 247)" : "",
            }}
            className={square.white ? Styles.square : Styles.squareWhite}
          >
            <p
              onClick={() => activatePiece(square)}
              className={square.active ? Styles.textActive : Styles.text}
            >
              {square.piece}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Board;
