webpackJsonp([2],{509:function(t,e,r){r(588);var o=r(137)(r(529),r(574),"data-v-5011854e",null);t.exports=o.exports},529:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(538),n=r.n(o),a=r(595);e.default={name:"login",data:function(){return{identifyCodes:"1234567890",identifyCode:"",errorInfo:!1,ruleForm:{name:"",password:"",validate:""},rules:{name:[{required:!0,message:"请输入用户名",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}],validate:[{required:!0,message:"请输入验证码",trigger:"blur"}]}}},created:function(){},mounted:function(){r.i(a.a)(),this.identifyCode="",this.makeCode(this.identifyCodes,4)},methods:{submitForm:function(t){var e=this;e.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.$http.post("/api/user/login",n()(e.ruleForm)).then(function(t){console.log("res:",t),-1==t.data.data?(e.errorInfo=!0,e.errInfo="该用户不存在",console.log("该用户不存在")):0==t.data.data?(console.log("密码错误"),e.errorInfo=!0,e.errInfo="密码错误"):200==t.data.data&&(e.$router.push("/readme"),sessionStorage.setItem("ms_username",e.ruleForm.name),sessionStorage.setItem("ms_user",n()(e.ruleForm)),console.log(n()(e.ruleForm)))}).then(function(t){console.log(t)})})},handleCommand:function(){this.$router.push("/register")},randomNum:function(t,e){return Math.floor(Math.random()*(e-t)+t)},refreshCode:function(){this.identifyCode="",this.makeCode(this.identifyCodes,4)},makeCode:function(t,e){for(var r=0;r<e;r++)this.identifyCode+=this.identifyCodes[this.randomNum(0,this.identifyCodes.length)];console.log(this.identifyCode)},debounce:function(t,e){return function(r){var o=this,n=r;clearTimeout(t.id),t.id=setTimeout(function(){t.call(o,n)},e)}},submitDebounce:function(t){var e=this;e.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;localStorage.setItem("ms_username",e.ruleForm.name),localStorage.setItem("ms_user",n()(e.ruleForm)),console.log(n()(e.ruleForm)),e.$http.post("/api/user/login",n()(e.ruleForm)).then(function(t){console.log(t),-1==t.data?(e.errorInfo=!0,e.errInfo="该用户不存在",console.log("该用户不存在")):0==t.data?(console.log("密码错误"),e.errorInfo=!0,e.errInfo="密码错误"):200==t.status&&e.$router.push("/readme")}).then(function(t){console.log(t)})})},debounceAjax:function(){debounce(submitDebounce,1e3)}}}},538:function(t,e,r){t.exports={default:r(539),__esModule:!0}},539:function(t,e,r){var o=r(65),n=o.JSON||(o.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},547:function(t,e,r){e=t.exports=r(87)(!1),e.push([t.i,"[data-v-5011854e]{margin:0;padding:0;overflow:hidden}#canvas[data-v-5011854e]{background:#000}.login-wrap[data-v-5011854e]{position:relative;width:100%;height:100%}.ms-title[data-v-5011854e]{position:absolute;top:50%;width:100%;margin-top:-230px;text-align:center;font-size:30px;color:#fff}.ms-login[data-v-5011854e]{position:absolute;left:50%;top:50%;width:300px;height:240px;margin:-150px 0 0 -190px;padding:40px;border-radius:5px;background:#fff}.ms-login span[data-v-5011854e]{color:red}.login-btn[data-v-5011854e]{text-align:center}.login-btn button[data-v-5011854e]{width:100%;height:36px}.code[data-v-5011854e]{width:112px;height:35px;border:1px solid #ccc;float:right;border-radius:2px}.validate-code[data-v-5011854e]{width:136px;float:left}.register[data-v-5011854e]{font-size:14px;line-height:30px;color:#999;cursor:pointer;float:right}",""])},574:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"login-wrap"},[r("canvas",{attrs:{id:"canvas"}}),t._v(" "),r("div",{staticClass:"ms-title"},[t._v("国际外贸登录管理系统")]),t._v(" "),r("div",{staticClass:"ms-login"},[r("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"0px"}},[t.errorInfo?r("div",[r("span",[t._v(t._s(t.errInfo))])]):t._e(),t._v(" "),r("el-form-item",{attrs:{prop:"name"}},[r("el-input",{attrs:{placeholder:"账号"},model:{value:t.ruleForm.name,callback:function(e){t.$set(t.ruleForm,"name",e)},expression:"ruleForm.name"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key,"Enter"))return null;t.submitForm("ruleForm")}},model:{value:t.ruleForm.password,callback:function(e){t.$set(t.ruleForm,"password",e)},expression:"ruleForm.password"}})],1),t._v(" "),r("el-form-item",{attrs:{prop:"validate"}},[r("el-input",{staticClass:"validate-code",attrs:{placeholder:"验证码"},model:{value:t.ruleForm.validate,callback:function(e){t.$set(t.ruleForm,"validate",e)},expression:"ruleForm.validate"}}),t._v(" "),r("div",{staticClass:"code",on:{click:t.refreshCode}},[r("s-identify",{attrs:{identifyCode:t.identifyCode}})],1)],1),t._v(" "),r("div",{staticClass:"login-btn"},[r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitForm("ruleForm")}}},[t._v("登录")])],1),t._v(" "),r("p",{staticClass:"register",on:{click:function(e){t.handleCommand()}}},[t._v("注册")])],1)],1)])},staticRenderFns:[]}},588:function(t,e,r){var o=r(547);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);r(199)("456fc864",o,!0)},595:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a=function(){function animate(){clear();var t=200*Math.sin(4*param)+150;toggleMouse?(myParallax.regPoint.x=mouse.x/2,myParallax.regPoint.y=mouse.y/4):(myParallax.regPoint.x=Math.cos(param)*t,myParallax.regPoint.y=Math.sin(param)*t,param+=.01),drawParallax(myParallax),requestAnimationFrame(animate)}function drawParallax(t){for(var e=0;e<t.layers.length;e++)for(var r=t.layers[e].zindex,o=t.layers[e].objs,n=0;n<o.length;n++){var a=copy(o[n]);a.struct.pos=translate(a.struct.pos,t.regPoint),a.struct.pos=mult(a.struct.pos,r),o[n].drawFunc(a.struct)}}function translate(t,e){return new point(t.x+e.x,t.y+e.y+10)}function mult(t,e){return new point(t.x*e,t.y*e)}function parallax(t,e){this.regPoint=t,this.layers=e}function layer(t,e){this.zindex=t,this.objs=e}function point(t,e){this.x=t,this.y=e}function copy(src){var str=JSON.stringify(src);return eval("var dst = "+str),dst}function rect(t,e,r,o){this.pos=t,this.width=e,this.height=r,this.color=o}function circle(t,e,r){this.pos=t,this.rad=e,this.color=r}function obj(t,e){this.struct=t,this.drawFunc=e}function complexObj(t,e){this.refPoint=t,this.objs=e}function clear(){ctx.fillStyle="rgba(0, 0, 0, 0.6)",ctx.fillRect(-canvas.width/2,-canvas.height/2,canvas.width,canvas.height)}function iterate(t,e){for(var r=0;r<t.length;r++)e(t[r])}function dir(t,e){return-Math.atan2(e.x-t.x,e.y-t.y)+Math.PI/2}function dist(t,e){return Math.sqrt((t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y))}function rand(t,e){var r=e-t;return Math.floor(Math.random()*r)+t}function drawCircle(t){ctx.beginPath(),ctx.fillStyle=t.color||"#ff0000",ctx.arc(t.pos.x,t.pos.y,t.rad,0,2*Math.PI,!1),ctx.fill(),ctx.closePath()}function drawRect(t){ctx.fillStyle=t.color||"#ff0000",ctx.fillRect(t.pos.x,t.pos.y,t.width,-t.height)}function drawLine(t,e,r,o){ctx.strokeStyle=o,ctx.lineWidth=r,ctx.beginPath(),ctx.moveTo(t.x,t.y),ctx.lineTo(e.x,e.y),ctx.stroke(),ctx.closePath()}function mkCurve(t){for(var e=[],r=0;r<=100;r+=5){for(var o=t;o.length>1;){for(var n=[],a=1;a<o.length;a++){n.push(getCurvePoint(o[a-1],o[a],r));var i="#00ffff";Math.abs(iAnim-a)<5&&(i="#FF0080"),2==e.length&&drawLine(o[a-1],o[a],.3,i)}o=n}e.push(o[0])}return iAnim=(iAnim+1)%50,e}function drawLines(t,e,r){for(var o=1;o<t.length;o++)drawLine(t[o-1],t[o],r,e)}var width=window.innerWidth,height=window.innerHeight,canvas=document.getElementById("canvas"),ctx=canvas.getContext("2d");canvas.width=width,canvas.height=height,ctx.translate(canvas.width/2,canvas.height/2);for(var colors=["114, 203, 219","85, 19, 78","160, 89, 107","254, 195, 67","239, 115, 81","142, 220, 157"],layers=[],points=[],toggleMouse=!1,i=1;i<=10;i++){for(var objs=[],j=0;j<20;j++){var x=rand(-width,width),y=rand(-height,height),color=colors[rand(0,colors.length)];objs.push(new obj(new circle(new point(x,y),3*i,"rgba("+color+", "+i/2+")"),drawCircle)),points.push(new point(x,y))}layers.push(new layer(i/5,objs))}var mouse=new point(0,0),myParallax=new parallax(new point(1,1),layers),param=0,param=0;animate(),canvas.addEventListener("mousemove",function(t){mouse.x=t.clientX-canvas.width/2,mouse.y=t.clientY-canvas.height/2}),canvas.addEventListener("mouseover",function(t){toggleMouse=!0}),canvas.addEventListener("mouseout",function(t){toggleMouse=!1})}}});