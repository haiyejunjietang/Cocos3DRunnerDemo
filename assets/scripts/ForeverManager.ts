import { _decorator, Component, director, instantiate, Node, Prefab, Vec3 } from 'cc';
import { Player } from './Player';
const { ccclass, property } = _decorator;

@ccclass('ForeverManager')
export class ForeverManager extends Component {
    @property(Prefab)
    blockList: Prefab[] = []; // 存储3个方块预制体
    @property(Node)
    player: Node = null; // 绑定玩家节点（用于判断视野）
    @property
    blockLength: number = 100; // 方块长度（需和预制体实际尺寸一致）
    @property
    spawnInterval: number = 1.5; // 生成间隔（根据玩家速度调整）
    @property
    despawnDistance: number = 200; // 超出该距离的方块回收

    private blockStartPos: Vec3 = new Vec3(0, 0, 255);
    private lastBlockIndex: number = -1; // 记录上一个方块索引，避免连续重复

    start() {
        // 一次性绑定失败事件（移出update）
        director.getScene().on('faild', this.onGameFail, this);
        // 初始化生成3个方块作为初始关卡
        for (let i = 0; i < 3; i++) {
            this.createBlock();
        }
  
        this.schedule(this.createBlock, this.spawnInterval);
    }

    update(dt: number) {
        this.recycleBlock(); // 每帧检测并回收超出视野的方块
    }

    // 生成方块（优化随机逻辑）
    private createBlock() {
        // 随机选择预制体，避免连续重复
        let randomIndex = this.lastBlockIndex;
        while (randomIndex === this.lastBlockIndex && this.blockList.length > 1) {
            randomIndex = Math.floor(Math.random() * this.blockList.length);
        }
        this.lastBlockIndex = randomIndex;

        // 实例化方块
        const block = instantiate(this.blockList[randomIndex]);
        block.parent = this.node;
        block.setPosition(this.blockStartPos);
        // 更新下一个方块生成位置
        this.blockStartPos.z += this.blockLength;
    }

    // 回收超出视野的方块
    private recycleBlock() {
        const playerZ = this.player.position.z;
        // 遍历所有子节点（方块）
        for (let i = this.node.children.length - 1; i >= 0; i--) {
            const block = this.node.children[i];
            // 当方块超出玩家后方指定距离时，销毁或回收（这里用销毁，简单高效）
            if (block.position.z < playerZ - this.despawnDistance) {
                block.destroy();
            }
        }
    }

    private onGameFail() {
        this.unscheduleAllCallbacks();
    }
    onDestroy() {
    const scene = director.getScene();
    if (scene) { // 先判断场景是否存在
        scene.off('faild', this.onGameFail, this);
    }
}
}
