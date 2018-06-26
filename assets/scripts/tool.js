// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html


let tooljs = cc.Class({
    extends: cc.Component,

    properties: {       
        rotateVelocity:0,
        rotationMaxAngle:0,
        expandSpeed:0,

        rope:cc.Node,
        claw:cc.Node,
        pickee:cc.Sprite,
        animCom:cc.Animation,

        maxRopeLength:0,
        minRopeLength:0,

        catchDuration:0,
        catchDegree:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.rope = this.node.getChildByName('rope');
        this.claw = this.node.getChildByName('claw');

        this.isExpanding = false;
        this.isRotating = true;

        this.animState = cc.dm.animState.idle;
        this.animCom.play('miner-appear');

        this.lCatchAction = this.setCatchAction(true);
        this.rCatchAction = this.setCatchAction(false);
    },

    setCatchAction(isLeft){
        // var open = cc.rotateBy(0.2,
        // 20).easing(cc.easeCubicActionOut());
        // var close = cc.rotateBy(0.2,
        // -20).easing(cc.easeCubicActionIn());

        if(isLeft === true){
            var open = cc.rotateBy(this.catchDuration,
                this.catchDegree).easing(cc.easeCubicActionOut());
                var close = cc.rotateTo(this.catchDuration,
                0).easing(cc.easeCubicActionIn());
            return cc.repeat(cc.sequence(open,close),1);
        } else {
            var open = cc.rotateBy(this.catchDuration,
                -this.catchDegree).easing(cc.easeCubicActionOut());
                var close = cc.rotateTo(this.catchDuration,
                0).easing(cc.easeCubicActionIn());
            return cc.repeat(cc.sequence(open,close),1);
        }
    },

    start () {

    },

    changeAnimState(state){
        if(this.animState === state){
            return;
        }
        this.animState = state;
    },

    update (dt) {
        if( cc.dm.animState.catch === this.animState){
            console.log('catch start.');

            // play catch animation
            this.claw.getChildByName('clawL').runAction(this.lCatchAction);
            this.claw.getChildByName('clawR').runAction(this.rCatchAction);

            this.animState =  cc.dm.animState.pullNone;
        }
        
        if(cc.dm.animState.expand === this.animState){
            this.rope.height += this.expandSpeed * dt;
            this.claw.y -= this.expandSpeed * dt;
        } else if(cc.dm.animState.idle === this.animState){
            this.node.rotation += this.rotateVelocity * dt;
            if(Math.abs(this.node.rotation) >= this.rotationMaxAngle )
                this.rotateVelocity *= -1;
        } else if(cc.dm.animState.pullNone === this.animState){
            this.rope.height -= this.expandSpeed * dt;
            this.claw.y += this.expandSpeed * dt;

            if(this.rope.height < this.minRopeLength){
                // 恢复准备状态
                this.rope.height = this.minRopeLength;  

                if(this.pickee.spriteFrame != null){
                    this.pickee.spriteFrame = null;
                }

                this.animState =  cc.dm.animState.idle;
            }
        } 
    },
});

module.exports = tooljs;