System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Collider, Component, director, Player, _dec, _class, _crd, ccclass, property, collision;

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
      Collider = _cc.Collider;
      Component = _cc.Component;
      director = _cc.director;
    }, function (_unresolved_2) {
      Player = _unresolved_2.Player;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6a48fj9xBFHCrBwqSnx9qx4", "collision", undefined);

      __checkObsolete__(['_decorator', 'Collider', 'Component', 'director', 'ICollisionEvent', 'ITriggerEvent', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("collision", collision = (_dec = ccclass('collision'), _dec(_class = class collision extends Component {
        start() {
          let collider = this.node.getComponent(Collider);
          collider.on('onCollisionEnter', this.onCollisionEnter, this);
          collider.on('onTriggerEnter', this.onTriggerEnter, this);
        }

        onCollisionEnter(event) {
          if (event.otherCollider.node.name == 'Obstacle') {
            this.node.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).enabled = false;
            director.getScene().emit('faild');
          }
        }

        onTriggerEnter(event) {
          if (event.otherCollider.node.name == 'Obstacle') {
            console.log('trigger enter');
            this.node.getComponent(_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
              error: Error()
            }), Player) : Player).enabled = false;
            director.getScene().emit('success');
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f65d610e82d677b23526cbf741c727e4bbfc6728.js.map