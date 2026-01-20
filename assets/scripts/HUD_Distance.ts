import { _decorator, Component, Label, Node } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('Distance')
export class Distance extends Component {

    @property(Node)
    player: Node = null;
    @property(Label)
    Distance: Label = null;
    @property(Label)
    MaxDistance: Label = null;
    content: Label = null;
    private maxDistanceNum: number = 0;

    start() {
        this.content = this.node.getComponent(Label);
        // 读取本地存储：如果有值就用之前的最高分，没有就默认0（不强制重置）

        const savedMax = localStorage.getItem('maxDistance');
        this.maxDistanceNum = savedMax ? parseFloat(savedMax) : 0;
        // 初始化显示最高分（用读取到的真实值）
        this.MaxDistance.string = `最高得分为:${this.maxDistanceNum.toFixed(1)}m`;
    }

    update(deltaTime: number) {
        if (this.player.getComponent(Player).enabled) {
            const z = this.player.position.z;
            const normalizedZ = Math.abs(z) < 0.05 ? 0 : z;
            this.content.string = `${normalizedZ.toFixed(1)}m`;
            this.Distance.string = `当前得分为:${normalizedZ.toFixed(1)}m`;
            // 只有当前距离超过历史最高分，才更新
            if (normalizedZ > this.maxDistanceNum) {
                this.maxDistanceNum = normalizedZ;
                this.MaxDistance.string = `最高得分为:${this.maxDistanceNum.toFixed(1)}m`;
                localStorage.setItem('maxDistance', this.maxDistanceNum.toString());
            }
        }
    }

}