let levels = {
    getLevelById(id){
        for(let i=0; i < this.levelArray.length; i++){
            if(this.levelArray[i].id === id){
                return this.levelArray[i];
            }
        }
    },
    levelArray:[
        {
            id:0,
            passScore:120,
            timeLimit:120, // second
            mineralMgr:0, // level setting   
        },
        {
            id:1,
            passScore:200,
            timeLimit:60, // second
            mineralMgr:1, // level setting   
        },
    ],
    getLevelSize(){
        return this.levelArray.length;
    },

};

module.exports = levels;