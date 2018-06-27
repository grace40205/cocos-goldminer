// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

let mineral ={
    mineralArray:[
        {
            tag: 1,
            name: 'diamond',
            score: 60,
            pullSpeed: 190,
        },
        {
            tag: 2,
            name: 'gold-0',
            score: 20,
            pullSpeed: 120,
        },
        {
            tag: 3,
            name: 'gold-1',
            score: 15,
            pullSpeed: 110,
        },
        {
            tag: 4,
            name: 'stone-0',
            score: 0,
            pullSpeed: 20,
        },
        {
            tag: 5,
            name: 'stone-1',
            score: 0,
            pullSpeed: 10,
        },
    
    ],
    getMineralByTag(tag){
        return this.mineralArray[tag-1];
    },
    getMineralSize(){
        return this.mineralArray.length;
    }
}

module.exports = mineral;
