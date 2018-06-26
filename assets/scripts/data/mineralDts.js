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
            id: 1,
            name: 'gold',
            score: 20,
            pullSpeed: 10,
        },
        {
            id: 2,
            name: 'stone',
            score: 0,
            pullSpeed: 40,
        },
        {
            id: 3,
            name: 'diamond',
            score: 60,
            pullSpeed: 10,
        },
    
    ],
    getMineralById(id){
        return this.mineralArray[id];
    },
    getMineralSize(){
        return this.mineralArray.length;
    }
}

module.exports = mineral;
