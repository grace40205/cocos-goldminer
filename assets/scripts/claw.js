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
let minerals = require('mineralDts');
let gameJs = require('game');

cc.Class({
    extends: cc.Component,

    properties: {
        toolJs:toolJs,    
        gameJs:gameJs,     
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
       this.minerals = minerals;
    },

    start () {

    },
    
    onCollisionEnter(other,self){
        if(0 === other.tag){
            console.log('collided wall');
            
            this.toolJs.changeAnimState(cc.dm.animState.pullNone);

        } else {
            let mineral =  this.minerals.getMineralByTag(other.tag);
            console.log('collided mineral:' + mineral.name);

            // 拾取
            // claw动作
            this.toolJs.changeAnimState( cc.dm.animState.catch);

            // 改变绳子拉取速度
            this.toolJs.speed = mineral.pullSpeed;
            //this.toolJs.changeAnimState( cc.dm.animState.pull);

            self.node.getChildByName('pickee').getComponent(cc.Sprite).spriteFrame =
            other.node.getComponent(cc.Sprite).spriteFrame;
            
            // 加分
            this.gameJs.gainScore(mineral.score);

            // 销毁
            other.node.destroy();
            
        }      
       
        
    },

    // update (dt) {},
});
