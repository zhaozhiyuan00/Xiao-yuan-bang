(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/testmessage/testmessage"],{"3e70":function(e,t,r){"use strict";r.r(t);var i=r("fca1"),n=r.n(i);for(var o in i)"default"!==o&&function(e){r.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"7d66":function(e,t,r){"use strict";(function(e){r("a38e");i(r("66fd"));var t=i(r("d47f"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,r("543d")["createPage"])},"93f9":function(e,t,r){},d47f:function(e,t,r){"use strict";r.r(t);var i=r("d9a2"),n=r("3e70");for(var o in n)"default"!==o&&function(e){r.d(t,e,(function(){return n[e]}))}(o);r("e47e");var s,u=r("f0c5"),a=Object(u["a"])(n["default"],i["b"],i["c"],!1,null,"15728284",null,!1,i["a"],s);t["default"]=a.exports},d9a2:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"c",(function(){return o})),r.d(t,"a",(function(){return i}));var i={uIcon:function(){return r.e("node-modules/uview-ui/components/u-icon/u-icon").then(r.bind(null,"3771"))}},n=function(){var e=this,t=e.$createElement;e._self._c},o=[]},e47e:function(e,t,r){"use strict";var i=r("93f9"),n=r.n(i);n.a},fca1:function(e,t,r){"use strict";(function(e,r){function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i({data:function(){return{info:{},yourName:"",yourImg:"",yourtext:"",yourid:"",isfriend:!0,isuser:!1,pos:"id-0",mission:"",contentlist:[],timer:null,childrenId:"",temp:[],num:0,our:[],skip:10,refresherTriggered:!1,_refresherTriggered:!1,style:{pageHeight:0,contentViewHeight:0,footViewHeight:90,mitemHeight:0},scrollTop:0}},computed:{isfriend:function(){return function(e){var t=e.userid;return t==this.yourid}},isuser:function(){return function(e){var t=e.userid;return t!=this.yourid}}},created:function(){var t=e.getSystemInfoSync();this.style.pageHeight=t.windowHeight,this.style.contentViewHeight=t.windowHeight-100},methods:{addmsg:function(){var e=this;0!=e.yourtext.length&&r.callFunction({name:"addcontent",data:{userid:e.$store.state.openid,friendid:e.yourid,content:e.yourtext,time:Date.now(),myName:this.$store.state.userName,myUrl:this.$store.state.avatarUrl,yourName:this.yourName,yourImg:this.yourImg,project:e.project,our:e.our},success:function(t){e.yourtext="",e.skip+=1,e.num=0}})},setScroll:function(e){this.contentlist.length;this.childrenId="id-"+e},scrollToBottom:function(){var t=this,r=e.createSelectorQuery();r.selectAll(".cu-chat").boundingClientRect(),r.select("#scrollview").boundingClientRect(),r.exec((function(e){hat.style.mitemHeight=0,e[0].forEach((function(e){return t.style.mitemHeight=t.style.mitemHeight+e.height+40})),setTimeout((function(){t.style.mitemHeight>t.style.contentViewHeight-100&&(t.scrollTop=t.style.mitemHeight-t.style.contentViewHeight)}),100)}))},getMsg:function(){var e=this;r.callFunction({name:"getcontent",data:{userid:e.$store.state.openid,friendid:e.yourid,mission:e.project._id,ski:e.skip},success:function(t){e.compare(e.contentlist,t.result.data)||(e.contentlist=t.result.data,e.contentlist.forEach((function(t){t.userid==e.yourid?(t.friend=!0,t.user=!1,t.name=e.yourName,t.img=e.yourImg):(t.friend=!1,t.user=!0,t.name=e.myName,t.img=e.imaUrl),t.time=new Date(t.time).toLocaleString()})),0==e.num&&(e.setScroll(0),e.num=1))}})},compare:function(e,t){if(0==e.length)return!1;if(e.length!=t.length)return!1;var r=0;return e.forEach((function(e,i){e.time==new Date(t[i].time).toLocaleString()&&(r+=1)})),r==e.length},refresherrefresh:function(){var e=this;e._refresherTriggered||(e._refresherTriggered=!0,e.refresherTriggered||(e.refresherTriggered=!0),this.loadStoreData())},refresherrestore:function(){var e=this;e.refresherTriggered=!1,e._refresherTriggered=!1},refresherabort:function(){var e=this;e.refresherTriggered=!1,e._refresherTriggered=!1},loadStoreData:function(){var e=this;this.listData(),setTimeout((function(){e.refresherTriggered=!1,e._refresherTriggered=!1,e.setScroll(e.contentlist.length)}),1e3)},listData:function(){var e=this;e.skip+=10}},onLoad:function(e){var t=this,i=JSON.parse(e.Jsonstr);"my"==e.type?(this.project=i,this.$store.state.openid!=this.project.openid&&(t.our=t.our.concat(this.$store.state.openid),t.our=t.our.concat(this.project.openid)),this.info=i,r.callFunction({name:"getinfo",data:{openid:i.openid},success:function(e){t.yourName=e.result.data[0].userName,t.yourImg=e.result.data[0].avatarUrl,t.yourid=e.result.data[0].openid}}),t.timer=setInterval(t.getMsg,100)):"your"==e.type&&(this.project=i._id.project,this.$store.state.openid==i.userid?(t.yourName=i.yourName,t.yourImg=i.yourImg,t.yourid=i.yourid,this.$store.state.openid!=this.project.openid?(t.our=t.our.concat(this.$store.state.openid),t.our=t.our.concat(this.project.openid)):(t.our=t.our.concat(i.yourid),t.our=t.our.concat(this.$store.state.openid))):(t.yourName=i.myName,t.yourImg=i.myUrl,t.yourid=i.userid,this.$store.state.openid!=this.project.openid?(t.our=t.our.concat(this.$store.state.openid),t.our=t.our.concat(this.project.openid)):(t.our=t.our.concat(i.userid),t.our=t.our.concat(this.$store.state.openid))),t.timer=setInterval(t.getMsg,100))},onUnload:function(){clearInterval(this.timer),this.timer=null}},"computed",{myName:function(){return this.$store.state.userName},imaUrl:function(){return this.$store.state.avatarUrl}});t.default=n}).call(this,r("543d")["default"],r("a9ff")["default"])}},[["7d66","common/runtime","common/vendor"]]]);