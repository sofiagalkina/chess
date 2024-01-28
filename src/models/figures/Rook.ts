import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from '../../assets/black-rook.png';
import whiteLogo from '../../assets/white-rook.png';



export class Rook extends Figure{

    constructor(color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.ROOK;
    }
    

    canMove(target: Cell): boolean{
        if(target.figure?.color === this.color)
        return false
        if (target.figure?.name === FigureNames.KING)
        return false
    return true;
    }
}