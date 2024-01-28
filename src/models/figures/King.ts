import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from '../../assets/HKKing_black.png';
import whiteLogo from '../../assets/HKKing_white.png';



export class King extends Figure{

    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.KING;
    }

    canMove(target: Cell): boolean{
        if(!super.canMove(target))
        return false;

        if (this.cell.isEmptyVertical(target) && Math.abs(target.y - this.cell.y) === 1) {
            return true;
          }
          
          if (this.cell.isEmptyHorizontal(target) && Math.abs(target.x - this.cell.x) === 1) {
            return true;
          }
          
          if (this.cell.isEmptyDiagonal(target) && Math.abs(target.y - this.cell.y) === 1 && Math.abs(target.x - this.cell.x) === 1) {
            return true;
          }

        return false;
    }
    
}