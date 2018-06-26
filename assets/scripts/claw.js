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
        toolJs:toolJs, 
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       
    },

    start () {

    },
    
    onCollisionEnter(other,self){
        if(0 === other.tag){
            console.log('collided wall');
            
            this.toolJs.changeAnimState(cc.dm.animState.pullNone);

        } else if(1 === other.tag){
            console.log('collided stone');

            // 拾取
            // claw动作
            this.toolJs.changeAnimState( cc.dm.animState.catch);

            self.node.getChildByName('pickee').getComponent(cc.Sprite).spriteFrame =
            other.node.getComponent(cc.Sprite).spriteFrame;

            // 销毁
            other.node.destroy();
        }       
    },

    // update (dt) {},
});
