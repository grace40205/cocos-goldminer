// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

let levels = require('levelDts');

let gameJs = cc.Class({
    extends: cc.Component,

    properties: {    
        stonePrefabs:{
            default:[],
            type:cc.Prefab,
        },
        mineralMgrPrefabs:{
            default:[],
            type:cc.Prefab,
        },
        // time:{
        //     default:null,
        //     type:cc.Label,
        // },
        // score:{
        //     default:null,
        //     type:cc.Label,
        // },
        maxMineralHeight:0,
        spawnRate:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {        
        var curLevel = levels.getLevelById(cc.dm.curLevel);

        // 设置过关分数要求
        this.node.getChildByName('score').getComponent(cc.Label).string = 'Score: ' + curLevel.passScore;
        
        // 设置当前分数、时间
        this.score = 0;
        this.updateScore(0);
        this.time = curLevel.timeLimit;
        this.updateTime(0);

        // 通过获取Label组件的方式设置分数、时间
        // this.time.string = 'Time: ' + curLevel.timeLimit;
        // this.score.string = 'Time: ' + curLevel.passScore;

        let index = curLevel.mineralMgr;
        this.node.getChildByName('level').addChild(cc.instantiate(this.mineralMgrPrefabs[index]));



        

        // 随机生成矿石
        //this.spawnNewStones();
    },

    updateScore(score){
        this.score += score;
        this.node.getChildByName('curScore').getComponent(cc.Label).string = 'CurScore: ' + this.score;
    },

    updateTime(dt){
        this.time -= dt;    
        //this.time = Math.floor(this.time);
        let time = Math.floor(this.time * 10) / 10;
        this.node.getChildByName('time').getComponent(cc.Label).string = 'Time: ' + time;
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

    update (dt) {
        this.updateTime(dt);
    },
});

module.exports = gameJs;
