(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/recruit/recruit"],{"19b7":function(t,e,n){"use strict";n.r(e);var i=n("69c8"),u=n("79b2");for(var o in u)"default"!==o&&function(t){n.d(e,t,(function(){return u[t]}))}(o);n("283d");var s,a=n("f0c5"),c=Object(a["a"])(u["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],s);e["default"]=c.exports},"283d":function(t,e,n){"use strict";var i=n("7593"),u=n.n(i);u.a},"69c8":function(t,e,n){"use strict";n.d(e,"b",(function(){return u})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var i={uForm:function(){return n.e("node-modules/uview-ui/components/u-form/u-form").then(n.bind(null,"b94a"))},uFormItem:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-form-item/u-form-item")]).then(n.bind(null,"1014"))},uInput:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-input/u-input")]).then(n.bind(null,"7b63"))},uActionSheet:function(){return n.e("node-modules/uview-ui/components/u-action-sheet/u-action-sheet").then(n.bind(null,"3675"))},uUpload:function(){return n.e("node-modules/uview-ui/components/u-upload/u-upload").then(n.bind(null,"ffca"))},uButton:function(){return n.e("node-modules/uview-ui/components/u-button/u-button").then(n.bind(null,"5b0e"))},uToast:function(){return n.e("node-modules/uview-ui/components/u-toast/u-toast").then(n.bind(null,"d080"))},uPicker:function(){return Promise.all([n.e("common/vendor"),n.e("node-modules/uview-ui/components/u-picker/u-picker")]).then(n.bind(null,"3ded"))}},u=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.show=!0},t.e1=function(e){t.reshow=!0},t.e2=function(e){t.newshow=!0})},o=[]},7593:function(t,e,n){},"79b2":function(t,e,n){"use strict";n.r(e);var i=n("ec13"),u=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=u.a},b615:function(t,e,n){"use strict";(function(t){n("a38e");i(n("66fd"));var e=i(n("19b7"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])},ec13:function(t,e,n){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{value:"",name:"",data:"",price:"",time:"",type:"",preadd:"",lastadd:"",timer:null,newshow:!1,imageList:[],num:0,addresslist:{province:"",city:"",area:""},title:"",show:!1,reshow:!1,params:{province:!0,city:!0,area:!0},img:[],actionSheetList:[{text:"日结"},{text:"月结"}],actionSheetList1:[{text:"安保"},{text:"快递"},{text:"零工"},{text:"在线"},{text:"保洁"},{text:"外卖"},{text:"家教"},{text:"其他"}]}},onLoad:function(){},computed:{ifnull:function(){return!(this.type&&this.time&&this.address&&this.value&&this.data&&this.price&&this.title)},address:function(){return this.preadd+"/"+this.lastadd}},methods:{image:function(){t.chooseImage({count:1,success:function(e){if(e.tempFilePaths.length>0){t.showLoading({title:"上传中..."});var i=e.tempFilePaths[0];n.uploadFile({filePath:i,cloudPath:Date.now()+".jpg",success:function(t){var e=t.fileID;n.callFunction({name:"addImage",data:{imageUrl:e,createtime:Date.now()},success:function(t){}})}})}},complete:function(){t.hideLoading()}})},firm:function(t){this.addresslist.province=t.province.label,this.addresslist.city=t.city.label,this.addresslist.area=t.area.label,this.preadd=this.addresslist.province+"-"+this.addresslist.city+"-"+this.addresslist.area},actionSheetCallback:function(t){this.value=this.actionSheetList[t].text},actionSheetCallback1:function(t){this.type=this.actionSheetList1[t].text},getaddress:function(){},getTimes:function(){n.callFunction({name:"gettimes",success:function(t){}})},realadd:function(){var t=this;t.num==this.$refs.uUpload.lists.length&&(this.ifnull?(this.$refs.uToast1.show({title:"除图片外所有内容均为必填，请检查",type:"error"}),clearInterval(t.timer),t.timer=null):(console.log(this.$store.state.openid),n.callFunction({name:"add",data:{type:this.type,time:this.time,address:this.address,money_type:this.value,title:this.title,content:this.data,price:"¥"+this.price,openid:this.$store.state.openid,img:t.img},success:function(e){t.$refs.uToast.show({title:"上传成功",type:"success",back:"true"}),clearInterval(t.timer),t.timer=null}})))},addMsg:function(){var t=this,e=this.$refs.uUpload.lists;e.forEach((function(e){n.uploadFile({filePath:e.file.path,cloudPath:Date.now()+".jpg",success:function(e){t.num+=1,t.img=t.img.concat(e.fileID)}})})),this.timer=setInterval(this.realadd,2e3)},submit:function(){var t=this;t.getTimes(),t.addMsg()}}};e.default=i}).call(this,n("543d")["default"],n("a9ff")["default"])}},[["b615","common/runtime","common/vendor"]]]);