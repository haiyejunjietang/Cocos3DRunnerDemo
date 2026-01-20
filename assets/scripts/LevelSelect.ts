import { _decorator, Component, director, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LevelSelect')
export class LevelSelect extends Component {
     // 点击返回按钮时调用
    onBackClick() {
        director.loadScene('Manu'); // 替换为你的主菜单场景名
    }
        onLevel1Click() {
        director.loadScene('level-001'); // 替换为你的第一个关卡场景名
    }
    // 点击关卡2按钮时调用
    onLevel2Click() {
        director.loadScene('level-002'); // 替换为你的第二个关卡场景名
    }
    // 点击关卡3按钮时调用
    onLevel3Click() {
        director.loadScene('level-003'); // 替换为你的第三个关卡场景名
    }
    onLevel4Click() {
        director.loadScene('level-004'); // 替换为你的第四个关卡场景名
    }
    onLevel5Click() {
        director.loadScene('level-005'); // 替换为你的第五个关卡场景名
    }
    onLevel6Click() {
        director.loadScene('level-006'); // 替换为你的第六个关卡场景名
    }
    onLevel7Click() {
        director.loadScene('level-007'); // 替换为你的第七个关卡场景名
    }
    onLevel8Click() {
        director.loadScene('level-008'); // 替换为你的第八个关卡场景名
    }
    onLevel9Click() {
        director.loadScene('level-009'); // 替换为你的第九个关卡场景名
    }
    onLevel10Click() {
        director.loadScene('level-010'); // 替换为你的第十个关卡场景名
    }
   
}


