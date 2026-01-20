import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property(Node)
    FailuredNode: Node = null;
    @property(Node)
    SuccessNode: Node = null;
    @property(Node)
    completeNode: Node = null;
    start() {
        director.getScene().on('faild', this.onfaild, this);
        director.getScene().on('success', this.onsuccess, this);
    }
    onfaild() {
        this.FailuredNode.active = true;
    }
    onsuccess() {
        if (director.getScene().name == 'level-010') {
            this.completeNode.active = true;
        } else {
            this.SuccessNode.active = true;
        }

    }
    onBtnAgain() {
        director.loadScene(director.getScene().name);
    }
    onBtnMenu() {
        director.loadScene('Manu');
    }
    onBtnsuccess() {
        const corrent = director.getScene().name;
        if (corrent == 'level-001') {
            director.loadScene('level-002');
        }
        if (corrent == 'level-002') {
            director.loadScene('level-003');
        }
        if (corrent == 'level-003') {
            director.loadScene('level-004');
        }
        if (corrent == 'level-004') {
            director.loadScene('level-005');
        }
        if (corrent == 'level-005') {
            director.loadScene('level-006');
        }
        if (corrent == 'level-006') {
            director.loadScene('level-007');
        }
        if (corrent == 'level-007') {
            director.loadScene('level-008');
        }
        if (corrent == 'level-008') {
            director.loadScene('level-009');
        }
        if (corrent == 'level-009') {
            director.loadScene('level-010');
        }
       

    }

    update(deltaTime: number) {

    }
}


