import { _decorator, Component, Node } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('star_tip')
export class star_tip extends Component {
    @property(Player)
    player: Player = null;
    update(deltaTime: number) {
        
    }
    startGame() {
        this.player.enabled = true;
        this.node.active = false;
    }
}


