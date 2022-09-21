export function createBoard(){
 
 interface EachSquare {
    white: boolean,
    squareValue:string,
    piece?:string
    active:boolean
 }   

let board: EachSquare[] = [];
  for (let i = 0; i < 8; i++) {
    if (board.length < 8) {
      for (let i = 0; i < 8; i++) {
        if (board.length % 2) {
          board.push({active:false, white:true, squareValue:`a${i + 1}`,  });
        } else {
          board.push({active:false, white:false, squareValue:`a${i + 1}` });
        }
      }
    }
    if (board.length > 7 && board.length < 16) {
      for (let i = 0; i < 8; i++) {
        if (board.length % 2) {
          board.push({active:false, white:false, squareValue:`b${i + 1}`,piece:'pawn'});
        } else {
          board.push({active:false, white:true, squareValue:`b${i + 1}`,piece:'pawn'});
        }
      }
    }
    if (board.length > 15 && board.length < 24) {
      for (let i = 0; i < 8; i++) {
        if (board.length % 2) {
          board.push({active:false, white:true, squareValue:`c${i + 1}`});
        } else {
          board.push({active:false, white:false, squareValue:`c${i + 1}`});
        }
      }
    }
    if (board.length > 23 && board.length < 31) {
        for (let i = 0; i < 8; i++) {
          if (board.length % 2) {
            board.push({active:false, white:false, squareValue:`d${i + 1}` });
          } else {
            board.push({active:false, white:true, squareValue:`d${i + 1}` });
          }
        }
      }
      if (board.length > 30 && board.length < 38) {
        for (let i = 0; i < 8; i++) {
          if (board.length % 2) {
            board.push({active:false, white:true, squareValue:`e${i + 1}` });
          } else {
            board.push({active:false, white:false, squareValue:`e${i + 1}` });
          }
        }
      }
      if (board.length > 37 && board.length < 45) {
        for (let i = 0; i < 8; i++) {
          if (board.length % 2) {
            board.push({active:false, white:false, squareValue:`f${i + 1}` });
          } else {
            board.push({active:false, white:true, squareValue:`f${i + 1}` });
          }
        }
      }
      if (board.length > 44 && board.length < 52) {
        for (let i = 0; i < 8; i++) {
          if (board.length % 2) {
            board.push({active:false, white:true, squareValue:`g${i + 1}`,piece:'pawn' });
          } else {
            board.push({active:false, white:false, squareValue:`g${i + 1}`,piece:'pawn' });
          }
        }
      }
      if (board.length > 51 && board.length < 62) {
        for (let i = 0; i < 8; i++) {
          if (board.length % 2) {
            
            board.push({active:false, white:false, squareValue:`h${i + 1}`});
          } else {
            board.push({active:false, white:true, squareValue:`h${i + 1}`});
          }
        }
        board[0].piece = 'rock', board[7].piece = 'rock', board[63].piece = 'rock',
        board[56].piece = 'rock'
        board[1].piece = 'horse', board[6].piece = 'horse', board[62].piece = 'horse',
        board[57].piece = 'horse'
        board[2].piece = 'runner', board[5].piece = 'runner', board[61].piece = 'runner',
        board[58].piece = 'runner',
        board[3].piece = 'king',board[4].piece = 'queen'
        board[59].piece = 'queen',board[60].piece = 'king'
      }
  }
  return board
}