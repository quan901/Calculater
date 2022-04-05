// index.js
const calc=require("../../utils/calc.js")

Page({
//  页面的数据初始化
data:{
  num:'0',
  op:''
},

result:null,
isClear:false,

// 数字按钮事件处理函数
numBtn:function(e){
  var input=e.target.dataset.val
  if(this.data.num === '0'||this.isClear){
    this.setData({
      num:input
    })
    this.isClear = false
  }else{
    this.setData({
      num:this.data.num+input
    })
  }
},

// 小数点处理
dotBtn:function(){
  if(this.isClear){
    this.setData({
      num:'0.'
    })
    this.isClear=flase
    return
  }
  if(this.data.num.indexOf('.')>=0){
    return
  }
  this.setData({
    num:this.data.num+'.'
  })
},

// 运算符事件处理函数
opBtn:function(e){
  var opt = this.data.op
  var number = Number(this.data.num)
  this.setData({
    op:e.target.dataset.val
  })
  if(this.isClear){
    return
  }

  this.isClear=true
  if(this.result===null){
    this.result=number
    return
  }
  if(opt==='+'){
    this.result=calc.add(this.result,number)
  }else if(opt==='-'){
    this.result=calc.sub(this.result,number)
  }else if(opt==='*'){
    this.result=calc.mul(this.result,number)
  }else if(opt==='/'){
    this.result=calc.div(this.result,number)
  }else if(opt==='%'){
    this.result=this.result%number
  }

  this.setData({
    num:this.result+''
  })
},

  // DEL按钮处理函数
  delBtn:function(){
    var num=this.data.num.substr(0,this.data.num.length-1)
    this.setData({
      num:num===''?'0':num
    })
  },

  // C按钮事件处理函数
  resetBtn:function(){
    this.result=null
    this.isClear=false
    this.setData({
      num:'0',
      op:''
    })
  }
})