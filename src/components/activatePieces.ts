interface EachSquare {
    white: boolean;
    squareValue: string;
    piece?: string;
    active: boolean;
  }


export function activatePiecesFunc (square:EachSquare, board:EachSquare[]|null, setBoard:React.Dispatch<React.SetStateAction<EachSquare[] | null>>){
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
}