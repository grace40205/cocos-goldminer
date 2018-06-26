// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

let animState = cc.Enum({
    idle:-1, // 不停旋转
    expand:-1, // 放绳子
    appear:-1,
    disappear:-1,
    dig:-1,
    strong:-1,
    throw:-1, 
    pullHeavy:-1,
    pullLight:-1,
    pullNone:-1,
    happy:-1,
    sad:-1,
    catch:-1, // 爪子抓取
});

module.exports = animState;
