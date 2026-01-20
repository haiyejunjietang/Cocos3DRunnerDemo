System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, LevelSelect;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "649a9NX0DBI7Jd25vhaHqEZ", "LevelSelect", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LevelSelect", LevelSelect = (_dec = ccclass('LevelSelect'), _dec(_class = class LevelSelect extends Component {
        // 点击返回按钮时调用
        onBackClick() {
          director.loadScene('Manu'); // 替换为你的主菜单场景名
        }

        onLevel1Click() {
          director.loadScene('level-001'); // 替换为你的第一个关卡场景名
        } // 点击关卡2按钮时调用


        onLevel2Click() {
          director.loadScene('level-002'); // 替换为你的第二个关卡场景名
        } // 点击关卡3按钮时调用


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

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=195437e15e8dee180cbbfa8dc25f9aba5c41e156.js.map