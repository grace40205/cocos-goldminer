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
        maxRopeLength:0,
        minRopeLength:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.rope = this.node.getChildByName('rope');
        this.claw = this.node.getChildByName('claw');

        this.isExpanding = false;
        this.isRotating = true;
    },

    start () {

    },



    update (dt) {
        // 钩子的旋转
        if(this.isRotating){
            this.node.rotation += this.rotateVelocity * dt;
            if(Math.abs(this.node.rotation) >= this.rotationMaxAngle )
                this.rotateVelocity *= -1;
        }

        // 绳子的伸缩
        if(this.isExpanding){
            this.rope.height += this.expandSpeed * dt;
            this.claw.y -= this.expandSpeed * dt;

            // if(this.rope.height >= this.maxRopeLength){
            //     this.expandSpeed *= -1;
            // }
            //else 
            if(this.rope.height < this.minRopeLength){
                // 恢复准备状态
                this.rope.height = this.minRopeLength;
                this.expandSpeed *= -1;
                this.isExpanding = false;
                this.isRotating = true;
            }
        }
    },
});

module.exports = tooljs;