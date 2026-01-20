System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, instantiate, Node, Prefab, Vec3, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, ForeverManager;

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
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "860eeC6etxC7KxKzc4lOAde", "ForeverManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'instantiate', 'Node', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ForeverManager", ForeverManager = (_dec = ccclass('ForeverManager'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class ForeverManager extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "blockList", _descriptor, this);

          // 存储3个方块预制体
          _initializerDefineProperty(this, "player", _descriptor2, this);

          // 绑定玩家节点（用于判断视野）
          _initializerDefineProperty(this, "blockLength", _descriptor3, this);

          // 方块长度（需和预制体实际尺寸一致）
          _initializerDefineProperty(this, "spawnInterval", _descriptor4, this);

          // 生成间隔（根据玩家速度调整）
          _initializerDefineProperty(this, "despawnDistance", _descriptor5, this);

          // 超出该距离的方块回收
          this.blockStartPos = new Vec3(0, 0, 255);
          this.lastBlockIndex = -1;
        }

        // 记录上一个方块索引，避免连续重复
        start() {
          // 一次性绑定失败事件（移出update）
          director.getScene().on('faild', this.onGameFail, this); // 初始化生成3个方块作为初始关卡

          for (var i = 0; i < 3; i++) {
            this.createBlock();
          }

          this.schedule(this.createBlock, this.spawnInterval);
        }

        update(dt) {
          this.recycleBlock(); // 每帧检测并回收超出视野的方块
        } // 生成方块（优化随机逻辑）


        createBlock() {
          // 随机选择预制体，避免连续重复
          var randomIndex = this.lastBlockIndex;

          while (randomIndex === this.lastBlockIndex && this.blockList.length > 1) {
            randomIndex = Math.floor(Math.random() * this.blockList.length);
          }

          this.lastBlockIndex = randomIndex; // 实例化方块

          var block = instantiate(this.blockList[randomIndex]);
          block.parent = this.node;
          block.setPosition(this.blockStartPos); // 更新下一个方块生成位置

          this.blockStartPos.z += this.blockLength;
        } // 回收超出视野的方块


        recycleBlock() {
          var playerZ = this.player.position.z; // 遍历所有子节点（方块）

          for (var i = this.node.children.length - 1; i >= 0; i--) {
            var block = this.node.children[i]; // 当方块超出玩家后方指定距离时，销毁或回收（这里用销毁，简单高效）

            if (block.position.z < playerZ - this.despawnDistance) {
              block.destroy();
            }
          }
        }

        onGameFail() {
          this.unscheduleAllCallbacks();
        }

        onDestroy() {
          var scene = director.getScene();

          if (scene) {
            // 先判断场景是否存在
            scene.off('faild', this.onGameFail, this);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blockList", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "blockLength", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "spawnInterval", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1.5;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "despawnDistance", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 200;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3dcabec8844b6e5e40e9d47d965880d1a107039d.js.map