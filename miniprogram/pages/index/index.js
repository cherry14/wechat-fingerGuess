let timerId;
let numAi=0;
//获取应用实例
  Page({
    data:{
      state:true,
      gamestart:"点击以下任意图片出拳~",
      gameofpaly:"*vs*",
      winnum:0,
      imgAiScr:'',
      imguserSrc:'../../images/timgVO3G1XDI.jpg',
      srcs:[
        "../../images/timg3CQAQZCD.jpg",
        "../../images/timgLM1Y7U4E.jpg",
        "../../images/timgVO3G1XDI.jpg",
      ]
    },
    onLoad:function(){
      this.timerGo();
     
    },
    changeForChoose(e){
      if(this.data.state==false){
        return
      }

      this.setData({ 
        imguserSrc:this.data.srcs[e.currentTarget.id],
        gamestart:"出拳吧，少年~",
        
      })
      clearInterval(timerId)

      let ai = this.data.imgAiScr
      let user = this.data.imguserSrc
      let num = this.data.winnum
      let str="lost";

      if (user == "../../images/timg3CQAQZCD.jpg" && ai == "../../images/timgLM1Y7U4E.jpg" || user == "../../images/timgLM1Y7U4E.jpg" && ai == "../../images/timgVO3G1XDI.jpg" || user == "../../images/timgVO3G1XDI.jpg" && ai == "../../images/timg3CQAQZCD.jpg"){
        num++;
        str="win~"
        wx.setStorage({
          key: 'winnum',
          data: num,
        })
      }
      if(user==ai){
        str = "平局"
      }
      

      this.setData({
        winnum:num,
        gameofpaly:str,
        state:false
        
      })
    },
    timerGo(){
      timerId = setInterval(this.move,100)
    },
    move(){
      if (numAi >= 3) {
          numAi = 0
        }
      this.setData({ imgAiScr:this.data.srcs[numAi] })
        numAi++;
    },
    again(){
      
      clearInterval(timerId);
      this.timerGo();
      this.setData({
        gamestart: "点击以下任意图片出拳~",
        gameofpaly: "*vs*",
        state:true
      })
    }

   
  })

  
  