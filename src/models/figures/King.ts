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
        if(target.figure?.color === this.color)
        return false
        if (target.figure?.name === FigureNames.KING)
        return false
    return true;
    }
    
}