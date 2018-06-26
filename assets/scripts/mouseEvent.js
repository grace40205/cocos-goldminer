// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

let toolJs = require('tool');

cc.Class({
    extends: cc.Component,

    properties: {
      tool:cc.Node,  
      toolJs:toolJs,    
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {        
        //this.toolJs = this.tool.getComponent('tool');
        

        this.node.on(cc.Node.EventType.MOUSE_DOWN, function (event) {
            // this.toolJs.isRotating = !this.toolJs.isRotating;
            // this.toolJs.isExpanding = !this.toolJs.isExpanding;

            if( cc.dm.animState.idle === this.toolJs.animState){
                this.toolJs.changeAnimState( cc.dm.animState.expand);
            } else if(cc.dm.animState.expand === this.toolJs.animState){
                this.toolJs.changeAnimState(cc.dm.animState.idle);
            }

          }, this);
    },

    start () {

    },

    // update (dt) {},
});
