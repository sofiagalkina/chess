import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from '../../assets/HKBishop_black copy.png';
import whiteLogo from '../../assets/HKBishop_white copy.png';


export class Bishop extends Figure{

    constructor(color: Colors, cell: Cell){
        super(color,cell); // vyzov konstruktora roditel'skogo klassa (to est' klass figure)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }


    canMove(target: Cell): boolean {
        if(!super.canMove(target))
            return false;

        if(this.cell.isEmptyDiagonal(target))
            return true;

      return false;      
        
    }
}