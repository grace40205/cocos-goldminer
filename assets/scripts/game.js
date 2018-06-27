// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {    
        stonePrefabs:{
            default:[],
            type:cc.Prefab,
        },
        maxMineralHeight:0,
        spawnRate:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        manager.enabledDebugDraw = true;
        manager.enabledDrawBoundingBox = true;

        cc.dm = {};
        cc.dm.mineralDts = require('mineralDts');
        cc.dm.animState = require('enums');

        this.spawnNewStones();
    },

    start () {

    },

    spawnNewStone(){
        var newStone = cc.instantiate(this.stonePrefab);
        this.node.getChildByName('mineralMgr').addChild(newStone);
        newStone.setPosition(this.getNewStonePosition());
    },

    spawnNewStones(){
        for(let i = 0; i < this.spawnRate; i++ ){
            let index = Math.floor(cc.random0To1() * this.stonePrefabs.length);
            var newStone = cc.instantiate(this.stonePrefabs[index]);

            newStone.parent = this.node.getChildByName('mineralMgr');
            newStone.setPosition(this.getNewStonePosition());            
        }
    },

    getNewStonePosition(){
        var randX = 0;
        var randY = cc.random0To1() * this.maxMineralHeight + 10;
        var maxX = this.node.width;
        randX = cc.random0To1() * maxX;
        return cc.p(randX,randY);
    },
    // update (dt) {},
});
