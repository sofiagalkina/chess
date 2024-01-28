import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from '../../assets/Subject 10.png';
import whiteLogo from '../../assets/Subject 11.png';

export class Pawn extends Figure{
    constructor(color: Colors, cell: Cell){
        super(color, cell)
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.PAWN;
    }
    
    canMove(target: Cell): boolean{
        if(target.figure?.color === this.color)
        return false
        if (target.figure?.name === FigureNames.KING)
        return false
    return true;
    }
}