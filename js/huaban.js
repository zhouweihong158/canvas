/*
* @Author: 20911
* @Date:   2017-08-28 18:21:10
* @Last Modified by:   20911
* @Last Modified time: 2017-09-03 14:00:49
*/  
function Huanban(canvas,zhezhao){
  this.canvas=canvas;
  this.zhezhao=zhezhao;
	this.trig=this.canvas.getContext("2d");
	this.history=[];
  this.bianshu=8;
  this.jiaoshu=8;
  this.cw=this.canvas.width;
  this.ch=this.canvas.height;
  this.lineWidth=2;
  this.fillStyle="red";
  this.strokeStyle="red";
  this.style="fill";
  this.temp=null;
}
Huanban.prototype={
  chushiyangshi:function(){
    this.trig.lineWidth=this.lineWidth;
    this.trig.fillStyle=this.fillStyle;
    this.trig.strokeStyle=this.strokeStyle;
  },
  //复杂的办法
  
	// line:function(){
	// 	  let that=this;
 //      that.chushiyangshi();
 //      that.canvas.onmousedown=function(e){
 //     	let ox=e.offsetX;
 //     	let oy=e.offsetY;
 //     	that.canvas.onmousemove=function(m){
 //     	     that.trig.clearRect(0, 0, that.cw,that.cw);
 //           let mx=m.offsetX;
 //           let my=m.offsetY;
 //           if(that.history.length>0){
 //            that.trig.putImageData(that.history[that.history.length-1],0,0);
 //           }
 //           that.trig.beginPath();
 //           that.trig.moveTo(ox,oy);
 //           that.trig.lineTo(mx,my);
 //           that.trig.closePath();
 //           that.trig.stroke();
 //     	}
 //     that.canvas.onmouseup=function(){
 //      that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
	// 		that.canvas.onmousemove=null;
	// 		that.canvas.onmouseup=null;
 //     	}
 //     } 
	// },
  // dash:function(){
  //     let that=this;
  //     that.chushiyangshi();
  //     that.canvas.onmousedown=function(e){
  //     let ox=e.offsetX;
  //     let oy=e.offsetY;
  //     that.canvas.onmousemove=function(m){
  //          that.trig.clearRect(0, 0, that.cw,that.cw);
  //          let mx=m.offsetX;
  //          let my=m.offsetY;
  //          if(that.history.length>0){
  //           that.trig.putImageData(that.history[that.history.length-1],0,0);
  //          }
  //          that.trig.lineWidth=1;
  //          that.trig.beginPath();
  //          that.trig.setLineDash([10,10]);
  //          that.trig.moveTo(ox,oy);
  //          that.trig.lineTo(mx,my);
  //          that.trig.closePath();
  //          that.trig.stroke();
           
  //     }
  //     that.canvas.onmouseup=function(){
  //     that.trig.setLineDash([0,0]);
  //     that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
  //     that.canvas.onmousemove=null;
  //     that.canvas.onmouseup=null;
  //     }
  //    } 
  // },
  // duobianxing:function(bian){
  //   let that=this;
  //   that.chushiyangshi();
  //   that.canvas.onmousedown=function(e){
  //     let ox=e.offsetX;
  //     let oy=e.offsetY;
  //     that.canvas.onmousemove=function(m){
  //       let yx=m.offsetX;
  //       let yy=m.offsetY;
  //       let r=Math.sqrt(Math.pow(yx-ox,2)+Math.pow(yy-oy,2));
  //       fn(ox,oy,bian,r);
  //     }
  //     that.canvas.onmouseup=function(){
  //       that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
  //       that.canvas.onmousemove=null;
  //       that.canvas.onmouseup=null;
  //     }
  //   }
    // function fn(x,y,num, banjing){
    //   that.trig.clearRect(0, 0, that.canvas.width, that.canvas.height);
    //   let ang=360/num/180*Math.PI;
    //      if(that.history.length>0){
    //         that.trig.putImageData(that.history[that.history.length-1],0,0);
    //        }
    //   that.trig.beginPath();
    //   that.trig.moveTo(x+banjing,y);
    //   for(let i=1;i<num;i++){
    //         that.trig.lineTo(x+banjing*Math.cos(ang*i), y+banjing*Math.sin(ang*i))
    //   }
    //   that.trig.closePath();
    //   that.trig.stroke();
    // }
  // },
  // juxing:function(){
  //   let that=this;
  //   that.chushiyangshi();
  //   that.canvas.onmousedown=function(e){
  //      let ox=e.offsetX;
  //      let oy=e.offsetY;
  //      that.canvas.onmousemove=function(m){
  //      let mx=m.offsetX;
  //      let my=m.offsetY;
  //      that.trig.clearRect(0, 0,that.canvas.width,that.canvas.height);
  //      if(that.history.length>0){
  //           that.trig.putImageData(that.history[that.history.length-1],0,0);
  //          }
  //      that.trig.beginPath();
  //      that.trig.moveTo(ox,oy);
  //      that.trig.lineTo(mx,oy);
  //      that.trig.lineTo(mx,my);
  //      that.trig.lineTo(ox,my);
  //      that.trig.closePath();
  //      that.trig[that.style]();  //填充
  //      // that.trig.stroke();
  //      }
  //      that.canvas.onmouseup=function(){
  //       that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
  //       that.canvas.onmousemove=null;
  //       that.canvas.onmouseup=null;
  //      }
  //   }
  // },
  // yuan:function(){
  //   let that=this;
  //   that.chushiyangshi();
  //   that.canvas.onmousedown=function(e){
  //     let ox=e.offsetX;
  //     let oy=e.offsetY;
  //     that.canvas.onmousemove=function(m){
  //       that.trig.clearRect(0, 0, that.canvas.width, that.canvas.height)
  //       let mx=m.offsetX;
  //       let my=m.offsetY;
  //       if(that.history.length>0){
  //           that.trig.putImageData(that.history[that.history.length-1],0,0);
  //          }
  //       let r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
  //       that.trig.beginPath();
  //       that.trig.arc(ox, oy, r, 0,2*Math.PI);
  //       that.trig.stroke();
  //     }
  //     that.canvas.onmouseup=function(){
  //       that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
  //       that.canvas.onmousemove=null;
  //       that.canvas.onmouseup=null;
  //     }
  //   }
  // },
  qianbi:function(){
      this.zhezhao.onmousedown=function(e){
      this.chushiyangshi();

      let ox=e.offsetX;

      let oy=e.offsetY;
      this.trig.beginPath();
      this.trig.moveTo(ox,oy);
       this.zhezhao.onmousemove=function(m){
         let mx=m.offsetX;
         let my=m.offsetY;
         if(this.history.length>0){
            this.trig.putImageData(this.history[this.history.length-1],0,0);
           }
         this.trig.lineTo(mx,my);
         this.trig.stroke();
       }.bind(this); //每一层都需要绑定this
       this.zhezhao.onmouseup=function(){
        this.history.push(this.trig.getImageData(0, 0, this.cw, this.ch));
        this.zhezhao.onmousemove=null;
        this.zhezhao.onmouseup=null;
       }.bind(this);
      }.bind(this);
    //用bind绑定this，里边所有的东西都用this代替，不用that
    
    // let that=this;
    // that.chushiyangshi();
    // that.canvas.onmousedown=function(e){
    //   let ox=e.offsetX;
    //   let oy=e.offsetY;
    //   that.trig.beginPath();
    //   that.trig.moveTo(ox,oy);
    //   that.canvas.onmousemove=function(m){
    //      let mx=m.offsetX;
    //      let my=m.offsetY;
    //     if(that.history.length>0){
    //         that.trig.putImageData(that.history[that.history.length-1],0,0);
    //        }
    //      that.trig.lineTo(mx,my);
    //      that.trig.stroke();
    //   }
    //   that.canvas.onmouseup=function(){
    //     that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
    //     that.canvas.onmousemove=null;
    //     that.canvas.onmouseup=null;
    //   }
    // }
  },
  // duojiaoxiing:function(bian){
  //   let that=this;
  //   that.chushiyangshi();
  //   that.canvas.onmousedown=function(e){
  //     let ox=e.offsetX;
  //     let oy=e.offsetY;
  //     that.canvas.onmousemove=function(m){
  //       let yx=m.offsetX;
  //       let yy=m.offsetY;
  //       let r=Math.sqrt(Math.pow(yx-ox,2)+Math.pow(yy-oy,2));
  //       fn(ox,oy,bian,r);
  //     }
  //     that.canvas.onmouseup=function(){
  //       that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
  //       that.canvas.onmousemove=null;
  //       that.canvas.onmouseup=null;
  //     }
  //   }
  //   function fn(x,y,num, banjing){
  //     that.trig.clearRect(0, 0, that.canvas.width, that.canvas.height);
  //     let ang=360/(2*num)/180*Math.PI;
  //        if(that.history.length>0){
  //           that.trig.putImageData(that.history[that.history.length-1],0,0);
  //          }
  //     that.trig.beginPath();
  //     that.trig.moveTo(x+banjing,y);
  //     for(let i=1;i<2*num;i++){
  //       if(i%2==0){
  //         that.trig.lineTo(x+banjing*Math.cos(ang*i), y+banjing*Math.sin(ang*i));
  //       }else if(i%2==1){
  //         that.trig.lineTo(x+(banjing/2)*Math.cos(ang*i), y+(banjing/2)*Math.sin(ang*i));
  //       }
           
  //     }
  //     that.trig.closePath();
  //     that.trig.stroke();
  //   }
  // },

  //简单办法
  jingjian:function(type){
    let that=this;
     
    that.zhezhao.onmousedown=function(e){
      that.chushiyangshi();
     let ox=e.offsetX;
     let oy=e.offsetY;
     that.zhezhao.onmousemove=function(m){
        let mx=m.offsetX;
        let my=m.offsetY;
        that.trig.clearRect(0, 0, that.cw,that.cw);
         if(that.history.length>0){
          that.trig.putImageData(that.history[that.history.length-1],0,0);
         }
        that[type](ox,oy,mx,my);

     }
     that.zhezhao.onmouseup=function(){

      that.trig.setLineDash([0,0]);
      that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
      that.zhezhao.onmousemove=null;
      that.zhezhao.onmouseup=null;
     }
    }       
    //利用精简的办法，把几个函数的重复部分去掉，省去了代码，简单方便
  },
  line:function(ox,oy,mx,my){
     let that=this;
     that.trig.beginPath();
     that.trig.moveTo(ox,oy);
     that.trig.lineTo(mx,my);
     that.trig.closePath();
  },
  dash:function(ox,oy,mx,my){
      let that=this;
      that.chushiyangshi();
      that.trig.lineWidth=1;
      that.trig.beginPath();
      that.trig.setLineDash([10,10]);
      that.trig.moveTo(ox,oy);
      that.trig.lineTo(mx,my);
      that.trig.closePath();
      that.trig.stroke();
  },
  duobianxing:function(ox,oy,mx,my){
    let that=this;
    that.chushiyangshi();
    let r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
    fn(ox,oy,r,this.bianshu);
    console.log(this.bianshu);
    function fn(x,y,banjing,num){
      that.trig.clearRect(0, 0, that.canvas.width, that.canvas.height);
      let ang=360/num/180*Math.PI;
         if(that.history.length>0){
            that.trig.putImageData(that.history[that.history.length-1],0,0);
           }
      that.trig.beginPath();
      that.trig.moveTo(x+banjing,y);
      for(let i=1;i<num;i++){
            that.trig.lineTo(x+banjing*Math.cos(ang*i), y+banjing*Math.sin(ang*i))
      }
      that.trig.closePath();
      that.trig[that.style]();
    }
  },
  juxing:function(ox,oy,mx,my){
       let that=this;
       that.trig.beginPath();
       that.trig.moveTo(ox,oy);
       that.trig.lineTo(mx,oy);
       that.trig.lineTo(mx,my);
       that.trig.lineTo(ox,my);
       that.trig.closePath();
       that.trig[that.style]();
  },
  yuan:function(ox,oy,mx,my){
    let that=this;
    let r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
    that.trig.beginPath();
    that.trig.arc(ox, oy, r, 0,2*Math.PI);
    that.trig[that.style]();
  },
  duojiaoxiing:function(ox,oy,mx,my){
    let that=this;
    let r=Math.sqrt(Math.pow(mx-ox,2)+Math.pow(my-oy,2));
    fn(ox,oy,this.jiaoshu,r);
    function fn(x,y,num, banjing){
      that.trig.clearRect(0, 0, that.canvas.width, that.canvas.height);
      let ang=360/(2*num)/180*Math.PI;
        if(that.history.length>0){ 
            that.trig.putImageData(that.history[that.history.length-1],0,0);
        }
        that.trig.beginPath();
        that.trig.moveTo(x+banjing,y);
        for(let i=1;i<2*num;i++){
          if(i%2==0){
           that.trig.lineTo(x+banjing*Math.cos(ang*i), y+banjing*Math.sin(ang*i));
          }else if(i%2==1){
             that.trig.lineTo(x+(banjing/2)*Math.cos(ang*i), y+(banjing/2)*Math.sin(ang*i));
          }
           
        }
      that.trig.closePath();
      that.trig[that.style]();
  
    }
  },
  xiangpi:function(eraserobj,w,h){
    let that=this;
    that.zhezhao.onmousedown=function(e){
        eraserobj.style.display="block";
        e.preventDefault();//去掉浏览器的默认行为
        that.zhezhao.onmousemove=function(e){
             let ox=e.offsetX;
             let oy=e.offsetY;
             let lefts=ox-w/2;
             let tops=oy-h/2;
             if(lefts<=0){
              lefts=0;
             }
             if(lefts>=that.cw-w){
              lefts=that.cw-w
             }
             if(tops<=0){
              tops=0;
             }
             if(tops>=that.ch-h){
              tops=that.ch-h;
             }
             eraserobj.style.left=`${lefts}px`;
             eraserobj.style.top=`${tops}px`;
             that.trig.clearRect(lefts,tops, w, h)
        } 
        that.zhezhao.onmouseup=function(){
          eraserobj.style.display="none";
          that.history.push(that.trig.getImageData(0, 0, that.cw, that.ch));
          that.zhezhao.onmousemove=null;
          that.zhezhao.onmouseup=null;
        }
    }
  },
  wenzi:function(){
    let that=this;
     that.zhezhao.onmousedown=function(e){
        let lefts;
        let tops;
        let ox=e.offsetX;
        let oy=e.offsetY;
        let divs=document.createElement("div");
        divs.style.cssText=`
        width:200px; height:100px; border:1px solid red; position:absolute;top:${oy}px;left:${ox}px`;
        that.zhezhao.appendChild(divs);
        that.zhezhao.onmousedown=null;
        divs.contentEditable=true;
        divs.onmousedown=function(e){
          let cx=e.clientX;
          let cy=e.clientY;
          let ol=divs.offsetLeft;
          let ot=divs.offsetTop;
          that.zhezhao.onmousemove=function(m){
            let yx=m.clientX;
            let yy=m.clientY;
            lefts=yx-cx+ol;
            tops=yy-cy+ot;
            console.log(lefts);
            divs.style.left=`${lefts}px`;
            divs.style.top=`${tops}px`;
          }
          divs.onmouseup=function(){
            that.zhezhao.onmousemove=null;
            divs.onmouseup=null;
          }
        }
        divs.onblur=function(){
            let value=this.innerText;
            that.zhezhao.removeChild(divs);
            that.trig.textAlign="center";
            that.trig.textBaseline="middle";
            that.trig.font="bold 20px Arial";
            that.trig.fillText(value,lefts,tops);
        }

     }
  },
  zhuanhuan:function(){
    let imgData=this.trig.getImageData(0, 0, this.cw,this.ch);
    console.log(imgData);
    let data=imgData.data;
    console.log(data);
    for(let i=0;i<data.length;i+=4){
      data[i]=255-data[i];
      data[i+1]=255-data[i+1];
      data[i+2]=255-data[i+2];
    }
    this.trig.putImageData(imgData, 0,0);
  },
  clip:function(clipObj){
     let that=this;
     this.zhezhao.onmousedown=function(e){
        let w,h,minx,miny;
        let ox=e.offsetX;
        let oy=e.offsetY;
        that.zhezhao.onmousemove=function(c){
          let cx=c.offsetX;
           e.preventDefault();
          let cy=c.offsetY;
          w=Math.abs(cx-ox);
          h=Math.abs(cy-oy);
          minx=cx>=ox?ox:cx;
          miny=cy>=oy?oy:cy;
          clipObj.style.cssText=`
          display:block;
          width:${w}px;height:${h}px;
          left:${minx}px;top:${miny}px
          `;
        }
        that.zhezhao.onmouseup=function(){
          that.temp=that.trig.getImageData(minx, miny, w,h);
          that.trig.clearRect(minx, miny, w,h);
          that.history.push(that.trig.getImageData(0, 0, that.cw,that.ch))
          that.trig.putImageData(that.temp,minx, miny);
          that.zhezhao.onmousemove=null;
          that.zhezhao.onmouseup=null;
          that.drag(minx,miny,w,h,clipObj);
        }
 
     }
  },
  drag: function (minx,miny,w,h,clipObj){
          let that=this;
          that.zhezhao.onmousedown=function(e){
              let ox=e.offsetX;
              let oy=e.offsetY;
              if(ox>minx && ox<=minx+w && oy> miny && oy<=miny+h){
                that.zhezhao.style.cursor="move";
              }else{
                that.zhezhao.style.cursor="default"; 
              }
              that.zhezhao.onmousemove=function(m){
                  e.preventDefault();
                  let mx=m.offsetX;
                  let my=m.offsetY;
                  lefts=mx-ox+minx;
                  tops=my-oy+miny;
                  if(lefts<=0){
                    lefts=0;
                  }
                  else if(lefts>=that.cw-w){
                    lefts=that.cw-w;
                  }
                  if(tops<=0){
                    tops=0;
                  }
                  else if(tops>=that.ch-h){
                    tops=that.ch-h;
                  }
                  clipObj.style.left=`${lefts}px`;
                  clipObj.style.top=`${tops}px`;
                  // that.temp=that.trig.getImageData(minx, miny, lefts,tops);
                  // that.trig.clearRect(minx, miny, w,h);
          
                  if(that.history.length>1){
                     that.trig.putImageData(that.history[that.history.length-1],0,0);
                   }
                     that.trig.putImageData(that.temp,lefts, tops);
              }
              that.zhezhao.onmouseup=function(){
                 that.history.push(that.trig.getImageData(0, 0, that.cw,that.ch));
                 if(that.history.length>1){
                     that.trig.putImageData(that.history[that.history.length-1],0,0);
                   }
                 that.temp=null;
                 clipObj.style.display="none";
                 that.zhezhao.onmousemove=null;
                 that.zhezhao.onmouseup=null;
              }
          }
  }

}


// contenteditable=true//可编辑
// 失去焦点：onblur
// 删掉:that.mask.removeChild();
// that.ctx.fillText(value, ox, oy)
// leftsw=浏览器的x-ox-this.offsetX;
//toDataURL()  转换成
//把base64 给到一个能够下载的功能的元素 a标签
//
// pause.classlist.toggle();
// 任务:canvas   音频  演讲

