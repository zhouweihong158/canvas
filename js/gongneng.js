  /*
* @Author: 20911
* @Date:   2017-08-28 19:31:03
* @Last Modified by:   20911
* @Last Modified time: 2017-08-30 16:14:23
*/

window.onload=function(){
	let canvas=document.querySelector("canvas");
  let zhezhao=document.querySelector(".zhezhao");
  let huanban=new Huanban(canvas,zhezhao);
  let iconXuxian=document.querySelector(".icon-xuxian");
  let iconLine=document.querySelector(".icon-line");
  let iconDuobianxingceliang=document.querySelector(".icon-duobianxingceliang")
  let iconJuxing=document.querySelector(".icon-juxing");
  let iconYuan=document.querySelector(".icon-yuan");
  let iconYan_icon=document.querySelector(".icon-pan_icon");
  let chehui=document.querySelector(".chehui");
  let iconWujiaoxing=document.querySelector(".icon-wujiaoxing");
  let tubiao=document.querySelectorAll(".tubiao");
  let input=document.querySelectorAll("input");
  let tiaose=document.querySelectorAll(".tiaose");
  let iconXiangpica=document.querySelector(".icon-xiangpica");
  let eraser=document.querySelector(".eraser");
  let iconWenzi=document.querySelector(".icon-wenzi");
  let iconZhuanhuan=document.querySelector(".icon-zhuanhuan");
  let save=document.querySelector(".icon-baocun");
  let iconX_jiequ=document.querySelector(".icon-x_jiequ");
  let clipobj=document.querySelector(".clip");

  tiaose.forEach(element=>{
    element.onclick=function(){
       let active1=document.querySelector("li[active1=true]");
       active1.setAttribute("active1",false);
       this.setAttribute("active1",true);
       huanban.style=this.id;
    }
  })
      
  input.forEach((element,index)=>{
     element.onchange=function(){
           if(index==0){
            huanban.strokeStyle=this.value;
           }
           else if(index==1){
            huanban.fillStyle=this.value;
           }
      }
   })

   tubiao.forEach(element=>{
      element.onclick=function(){
        let active=document.querySelector("li[active=true]");
        active.setAttribute("active",false);
        this.setAttribute("active",true);
        if(this.id=="qianbi"){
          huanban.qianbi();
        }else{
          if(this.id=="duobianxing"){
               huanban.bianshu=prompt("请输入您想要的边数",5);
          }
          else if(this.id=="duojiaoxiing"){
                huanban.jiaoshu=prompt("请输入您想要的角数",5);
          }
          huanban.jingjian(this.id);
        } 
     }
   })

iconXiangpica.onclick=function(){
  huanban.xiangpi(eraser,20,30);
   let active=document.querySelector("li[active=true]");
   active.setAttribute("active",false);
   this.setAttribute("active",true);
}
iconWenzi.onclick=function(){
  huanban.wenzi();
}
iconZhuanhuan.onclick=function(){
   huanban.zhuanhuan()
}

  save.onclick=function(){
    save.href=canvas.toDataURL("image/png");
    save.download="a.png";
  }
  iconX_jiequ.onclick=function(){
     huanban.clip(clipobj);
  }




  // iconLine.onclick=function(){
  //   // huanban.line();
  //   huanban.jingjian('line');
  // }
  // iconXuxian.onclick=function(){
  // 	// huanban.dash();
  //    huanban.jingjian('dash'); 
  // }
  // iconDuobianxingceliang.onclick=function(){
  //   huanban.bianshu=prompt("请输入您想要的边数",5);
  //   huanban.jingjian('duobianxing'); 
  // }
  // iconJuxing.onclick=function(){
  //   huanban.jingjian('juxing');
  // 	// huanban.juxing();
  // }
  // iconYuan.onclick=function(){
  //   huanban.jingjian('yuan');
  // 	// huanban.yuan();
  // }
  // iconYan_icon.onclick=function(){
  	
  //   huanban.qianbi();
  // }
  // iconWujiaoxing.onclick=function(){
  //   huanban.jiaoshu=prompt("请输入您想要的角数",5);
  //   huanban.jingjian("duojiaoxiing");
  // }

}



//橡皮  clearRect(x, y, w, h)
//橡皮先定位到bottom下边，没点击之前先消失，点击之后出现，利用offsetX进行拖拽
//给遮罩上边再加
