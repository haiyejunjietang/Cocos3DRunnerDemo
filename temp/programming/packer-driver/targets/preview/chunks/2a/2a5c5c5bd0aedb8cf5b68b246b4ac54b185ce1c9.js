System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Node, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, UIManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      Node = _cc.Node;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "61d07bN7npCB5sQ+72PESeg", "UIManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIManager", UIManager = (_dec = ccclass('UIManager'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = class UIManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "FailuredNode", _descriptor, this);

          _initializerDefineProperty(this, "SuccessNode", _descriptor2, this);

          _initializerDefineProperty(this, "completeNode", _descriptor3, this);
        }

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
          var corrent = director.getScene().name;

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

        update(deltaTime) {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "FailuredNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "SuccessNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "completeNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a5c5c5bd0aedb8cf5b68b246b4ac54b185ce1c9.js.map