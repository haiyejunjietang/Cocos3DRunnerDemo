System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Input, input, KeyCode, RigidBody, Vec3, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Player;

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
      Input = _cc.Input;
      input = _cc.input;
      KeyCode = _cc.KeyCode;
      RigidBody = _cc.RigidBody;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5e851UeFdZM94i4/EQjlWFl", "Player", undefined);

      __checkObsolete__(['_decorator', 'BoxCollider', 'Collider', 'Component', 'director', 'EventKeyboard', 'Input', 'input', 'KeyCode', 'Node', 'RigidBody', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property(RigidBody), _dec(_class = (_class2 = class Player extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rigidBody", _descriptor, this);

          this.forwardForce = 500;
          this.isLeftDown = false;
          this.isRightDown = false;
        }

        start() {
          console.log(director.getScene().name);
          input.on(Input.EventType.KEY_DOWN, this.onkeydown, this);
          input.on(Input.EventType.KEY_UP, this.onkeyup, this);
        }

        onDestroy() {
          input.off(Input.EventType.KEY_DOWN, this.onkeydown, this);
          input.off(Input.EventType.KEY_UP, this.onkeyup, this);
        }

        onkeydown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.isLeftDown = true;
              break;

            case KeyCode.KEY_D:
              this.isRightDown = true;
              break;
          }
        }

        onkeyup(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.isLeftDown = false;
              break;

            case KeyCode.KEY_D:
              this.isRightDown = false;
              break;
          }
        }

        update(dt) {
          this.rigidBody.applyForce(new Vec3(0, 0, this.forwardForce * dt));

          if (this.isLeftDown) {
            this.rigidBody.applyForce(new Vec3(this.forwardForce * dt * 2, 0, 0));
          }

          if (this.isRightDown) {
            this.rigidBody.applyForce(new Vec3(-this.forwardForce * dt * 2, 0, 0));
          }

          if (this.node.y < -10) {
            director.getScene().emit('faild');
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rigidBody", [_dec2], {
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
//# sourceMappingURL=1fe55e94b6353306121dc4b356fa5e9e6ccc1eed.js.map