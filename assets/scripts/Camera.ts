import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Camera')
export class Camera extends Component {
    @property(Node)
    target: Node = null;
    @property(Vec3)
    offset: Vec3 = new Vec3();
    private temPos = new Vec3();
    start() {
       
    }   

    update(deltaTime: number) {
    this.target.getPosition(this.temPos);
    this.node.setPosition(this.temPos.add(this.offset));
    }
}


