import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Manu')
export class Manu extends Component {
    protected start(): void {
        console.log(director.getScene().name);
    }
    onstartGame() {
        
        director.loadScene('level-select');
    }
   onstartForeverGame(){
    director.loadScene('level-forever');
   }
}


