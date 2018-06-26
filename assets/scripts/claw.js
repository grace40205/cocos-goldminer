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
        console.log('oncollitionenter');
        this.toolJs.expandSpeed *= -1;
    },

    // update (dt) {},
});
