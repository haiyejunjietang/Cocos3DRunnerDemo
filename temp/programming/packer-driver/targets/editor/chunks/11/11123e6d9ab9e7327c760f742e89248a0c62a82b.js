System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Player, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Distance;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      Player = _unresolved_2.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "f7612Qm9HFDIbSQvDr5IX8B", "HUD_Distance", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Distance", Distance = (_dec = ccclass('Distance'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec(_class = (_class2 = class Distance extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "player", _descriptor, this);

          _initializerDefineProperty(this, "Distance", _descriptor2, this);

          _initializerDefineProperty(this, "MaxDistance", _descriptor3, this);

          this.content = null;
          this.maxDistanceNum = 0;
        }

        start() {
          this.content = this.node.getComponent(Label); // 读取本地存储：如果有值就用之前的最高分，没有就默认0（不强制重置）

          const savedMax = localStorage.getItem('maxDistance');
          this.maxDistanceNum = savedMax ? parseFloat(savedMax) : 0; // 初始化显示最高分（用读取到的真实值）

          this.MaxDistance.string = `最高得分为:${this.maxDistanceNum.toFixed(1)}m`;
        }

        update(deltaTime) {
          if (this.player.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player).enabled) {
            const z = this.player.position.z;
            const normalizedZ = Math.abs(z) < 0.05 ? 0 : z;
            this.content.string = `${normalizedZ.toFixed(1)}m`;
            this.Distance.string = `当前得分为:${normalizedZ.toFixed(1)}m`; // 只有当前距离超过历史最高分，才更新

            if (normalizedZ > this.maxDistanceNum) {
              this.maxDistanceNum = normalizedZ;
              this.MaxDistance.string = `最高得分为:${this.maxDistanceNum.toFixed(1)}m`;
              localStorage.setItem('maxDistance', this.maxDistanceNum.toString());
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "player", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "Distance", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "MaxDistance", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=11123e6d9ab9e7327c760f742e89248a0c62a82b.js.map