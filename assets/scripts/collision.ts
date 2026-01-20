import { _decorator, Collider, Component, director, ICollisionEvent, ITriggerEvent, Node } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('collision')
export class collision extends Component {


    start() {
        let collider = this.node.getComponent(Collider);
        collider.on('onCollisionEnter', this.onCollisionEnter, this);
        collider.on('onTriggerEnter', this.onTriggerEnter, this);
        
    }

    onCollisionEnter(event: ICollisionEvent) {
        if (event.otherCollider.node.name == 'Obstacle') {
            this.node.getComponent(Player).enabled = false;
            director.getScene().emit('faild');
        }
    }
    onTriggerEnter(event: ITriggerEvent) {
        if (event.otherCollider.node.name == 'Obstacle') {
            console.log('trigger enter')
            this.node.getComponent(Player).enabled = false;
            director.getScene().emit('success');
        }
    }
}


