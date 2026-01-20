import { _decorator, BoxCollider, Collider, Component, director, EventKeyboard, Input, input, KeyCode, Node, RigidBody, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {
    @property(RigidBody)
    rigidBody: RigidBody = null;
    forwardForce: number = 500;

    isLeftDown: boolean = false;
    isRightDown: boolean = false;

    protected start(): void {
        console.log(director.getScene().name)
        input.on(Input.EventType.KEY_DOWN, this.onkeydown, this);
        input.on(Input.EventType.KEY_UP, this.onkeyup, this);
    }
    protected onDestroy(): void {
        input.off(Input.EventType.KEY_DOWN, this.onkeydown, this);
        input.off(Input.EventType.KEY_UP, this.onkeyup, this);
    }
    onkeydown(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.isLeftDown = true;
                break;
            case KeyCode.KEY_D:
                this.isRightDown = true;
                break;
        }
    }
    onkeyup(event: EventKeyboard) {
        switch (event.keyCode) {
            case KeyCode.KEY_A:
                this.isLeftDown = false;
                break;
            case KeyCode.KEY_D:
                this.isRightDown = false;
                break;
        }
    }
    protected update(dt: number): void {
        this.rigidBody.applyForce(new Vec3(0, 0, this.forwardForce * dt));
        if (this.isLeftDown) {
            this.rigidBody.applyForce(new Vec3(this.forwardForce * dt * 2, 0, 0))
        }
        if (this.isRightDown) {
            this.rigidBody.applyForce(new Vec3(-this.forwardForce * dt * 2, 0, 0))
        }
        if(this.node.y < -10){
            director.getScene().emit('faild');
        }
    }
}

