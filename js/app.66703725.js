(function(t){function e(e){for(var a,i,c=e[0],r=e[1],l=e[2],d=0,p=[];d<c.length;d++)i=c[d],n[i]&&p.push(n[i][0]),n[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,c=1;c<s.length;c++){var r=s[c];0!==n[r]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var a={},n={app:0},o=[];function i(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=a,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(s,a,function(e){return t[e]}.bind(null,a));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/vue-shequ/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"1b9d":function(t,e,s){"use strict";var a=s("e4a2"),n=s.n(a);n.a},3607:function(t,e,s){"use strict";var a=s("979f"),n=s.n(a);n.a},"402d":function(t,e,s){},4678:function(t,e,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var e=o(t);return s(e)}function o(t){var e=a[t];if(!(e+1)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return e}n.keys=function(){return Object.keys(a)},n.resolve=o,t.exports=n,n.id="4678"},"56d7":function(t,e,s){"use strict";s.r(e);s("1951"),s("450d");var a=s("eedf"),n=s.n(a),o=(s("672e"),s("101e")),i=s.n(o),c=(s("cadf"),s("551c"),s("f751"),s("097d"),s("2b0e")),r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Header",{on:{goHome:t.goHome}}),s("router-view"),s("Footer")],1)},l=[],u=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"inner"},[s("div",{staticClass:"logo",on:{click:function(e){return t.$emit("goHome")}}},[s("h1",[t._v("vue-js")])]),t.userInfo?s("div",{staticClass:"logout"},[s("img",{attrs:{src:t.userInfo.avatar_url,alt:""}}),s("button",{on:{click:t.logout}},[t._v("退出")])]):s("div",{staticClass:"login"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],attrs:{type:"text"},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}}),s("button",{on:{click:t.login}},[t._v("登录")])]),s("div",{staticClass:"addArticle"},[t.userInfo&&-1===this.$route.fullPath.indexOf("topic/create")?s("span",[s("router-link",{attrs:{to:"/topic/create"}},[t._v("发布文章")])],1):t._e()]),s("div",{staticClass:"header-nav"},[s("div",{staticClass:"nav-ul"},[s("div",{staticClass:"nav-li"},[s("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),t.userInfo?s("div",{staticClass:"nav-li spanInLi"},[s("router-link",{attrs:{to:"/my/messages"}},[t.messageNum?s("span",[t._v(t._s(t.messageNum))]):t._e(),t._v("未读消息\n          ")])],1):t._e(),s("div",{staticClass:"nav-li"},[t._v("微信公众号")]),s("div",{staticClass:"nav-li"},[t._v("vue-2.0")]),s("div",{staticClass:"nav-li"},[t._v("参考资料")]),s("div",{staticClass:"nav-li"},[t._v("API")]),s("div",{staticClass:"nav-li"},[t._v("关于")]),s("div",{staticClass:"nav-li"},[t._v("设置")])])])])])},d=[],p=s("bc3a"),v=s.n(p),f={name:"tou",data:function(){return{val:"969bace2-ba1c-40e5-bfe3-750148f06844",userInfo:null,messageNum:0}},created:function(){var t=this;sessionStorage.getItem("token")&&v.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:this.val}).then(function(e){console.log(e.data),t.userInfo=e.data})},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this;sessionStorage.getItem("token")&&v.a.get("https://www.vue-js.com/api/v1/message/count?accesstoken=".concat(sessionStorage.getItem("token"))).then(function(e){t.messageNum=e.data.data,console.log(e.data.data)})}}},methods:{login:function(){var t=this;this.$router.push("/"),v.a.post("https://www.vue-js.com/api/v1/accesstoken",{accesstoken:this.val}).then(function(e){t.userInfo=e.data,sessionStorage.setItem("token",t.val),sessionStorage.setItem("user_id",e.data)})},logout:function(){this.$router.push("/"),this.userInfo=null,sessionStorage.clear()}}},m=f,h=(s("8baf"),s("2877")),_=Object(h["a"])(m,u,d,!1,null,null,null),g=_.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},j=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"footer"},[s("div",{staticClass:"footer-top"},[s("a",{attrs:{href:"javascript:void(0)"}},[t._v("RSS")]),t._v("|\n    "),s("a",{attrs:{href:"javascript:void(0)"}},[t._v("源码地址")])]),s("div",{staticClass:"footer-middle"},[s("span",[t._v("服务器搭建在")]),s("a",{attrs:{href:"https://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=Ionichina&utm_medium=display"}},[s("img",{attrs:{src:"https://www.vue-js.com/public/images/ucloud.png",alt:""}})]),s("span",[t._v("，存储赞助商为")]),s("a",{attrs:{href:"https://www.qiniu.com/?ref=ionichina"}},[s("img",{attrs:{src:"https://www.vue-js.com/public/images/qiniu.png",alt:""}})])]),s("div",{staticClass:"footer-bottom"},[s("p",[t._v("声明：内容均来自于网络，如有侵权行为请发送邮件至vueclub@126.com,我们将在第一时间删除")])])])}],k={name:"bottom"},w=k,y=(s("760c"),Object(h["a"])(w,b,j,!1,null,null,null)),C=y.exports,x={name:"app",components:{Header:g,Footer:C},methods:{goHome:function(){this.$router.push("/")}}},$=x,O=Object(h["a"])($,r,l,!1,null,null,null),S=O.exports,z=(s("8a7b"),s("8c4f")),I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"home"},[s("div",{staticClass:"header-nav"},[s("ul",[s("li",[s("router-link",{class:-1!=t.$route.fullPath.indexOf("all")||"/"===t.$route.fullPath?"active":"",attrs:{to:"/?tab=all"}},[t._v("全部")])],1),s("li",[s("router-link",{class:-1!=t.$route.fullPath.indexOf("good")?"active":"",attrs:{to:"/?tab=good"}},[t._v("精华")])],1),s("li",[s("router-link",{class:-1!=t.$route.fullPath.indexOf("weex")?"active":"",attrs:{to:"/?tab=weex"}},[t._v("weex")])],1),s("li",[s("router-link",{class:-1!=t.$route.fullPath.indexOf("share")?"active":"",attrs:{to:"/?tab=share"}},[t._v("分享")])],1),s("li",[s("router-link",{class:-1!=t.$route.fullPath.indexOf("ask")?"active":"",attrs:{to:"/?tab=ask"}},[t._v("问答")])],1),s("li",[s("router-link",{class:-1!=t.$route.fullPath.indexOf("job")?"active":"",attrs:{to:"/?tab=job"}},[t._v("招聘")])],1)])]),s("div",[s("div",{staticClass:"header-main"},[t.topics.length?s("ul",t._l(t.topics,function(e){return s("li",{key:e.id},[s("div",{staticClass:"one"},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})])],1),s("div",{staticClass:"two"},[s("span",{style:{fontSize:"14px",color:"#444"}},[t._v(t._s(e.reply_count))]),t._v("/\n            "),s("span",{style:{color:"#ccc"}},[t._v(t._s(e.visit_count))])]),"/?tab=all"===t.$route.fullPath||"/"===t.$route.fullPath||e.good||e.top?s("div",{staticClass:"three"},[s("span",{class:{type:!0,bg:e.top||e.good}},[t._v(t._s(e.top?"置顶":e.good?"精华":"ask"===e.tab?"问答":"share"===e.tab?"分享":"job"===e.tab?"招聘":"week"))])]):t._e(),s("div",{staticClass:"four"},[s("router-link",{attrs:{to:"/topics/"+e.id,title:e.title}},[t._v(t._s(e.title))])],1),s("div",{staticClass:"five time"},[s("span",[t._v(t._s(t.myMoment(e.last_reply_at)))])])])}),0):s("img",{attrs:{src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg",alt:""}}),s("el-pagination",{attrs:{"page-size":20,layout:"prev, pager, next",total:t.pages},on:{"current-change":t.change}})],1)])])},E=[],P=(s("c5f6"),s("c1df")),N=s.n(P),M={name:"home",data:function(){return{topics:[],pages:860}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.query.tab||"all",s=Number(this.$route.query.page)||1;console.log(e),this.pages="all"===e?860:"good"===e?20:"weex"===e?20:"ask"===e?580:"share"===e?260:40,this.topics.length&&(this.topics=[]),v.a.get("https://www.vue-js.com/api/v1/topics/?tab=".concat(e,"&page=").concat(s)).then(function(e){setTimeout(function(){t.topics=e.data.data},300)})}}},methods:{myMoment:function(t){return N.a.locale("zh-cn"),N()(t).fromNow()},change:function(t){var e=this.$route.query.tab||"all";console.log(this.$route.query),this.$router.push("/?tab=".concat(e,"&page=").concat(t))}}},q=M,F=(s("8b71"),Object(h["a"])(q,I,E,!1,null,null,null)),H=F.exports,T=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topic"},[t.topic?s("div",{staticClass:"topicInner"},[s("div",{staticClass:"topic-nav"},[s("div",{staticClass:"topic-inner"},[s("div",{staticClass:"topicN-t"},[t.topic.top||t.topic.good?s("span",{staticClass:"typeName",class:{type:!0,bg:t.topic.top||t.topic.good}},[t._v(t._s(t.topic.top?"置顶":t.topic.good?"精华":""))]):t._e(),s("h2",[t._v(t._s(t.topic.title))]),s("button",{directives:[{name:"show",rawName:"v-show",value:t.is_login,expression:"is_login"}],class:{collect:!0,collaft:t.is_collect},on:{click:t.changebg}},[t._v(t._s(t.is_collect?"取消收藏":"加入收藏"))])]),s("div",{staticClass:"topicN-b"},[s("ul",[s("li",[s("b",[t._v("·")]),t._v("\n              发布于"+t._s(t.myMomentTop(t.topic.create_at))+"\n            ")]),s("li",[s("b",[t._v("·")]),t._v("\n              作者"+t._s(t.topic.author.loginname)+"\n            ")]),s("li",[s("b",[t._v("·")]),t._v("\n              "+t._s(t.topic.visit_count)+"次浏览\n            ")]),s("li",[s("b",[t._v("·")]),t._v("\n              最后一次编辑是"+t._s(t.myMomentTop(t.topic.create_at))+"\n            ")]),s("li",[s("b",[t._v("·")]),t._v("\n              来自"+t._s("share"===t.topic.tab?"分享":"job"===t.topic.tab?"招聘":"ask"===t.topic.tab?"问答":"weex")+"\n            ")])])])])]),s("div",{staticClass:"topicBott topic-inner"},[s("div",{staticClass:"topic-main topic_content",domProps:{innerHTML:t._s(t.topic.content)}})]),s("div",{staticClass:"comment"},[s("p",{style:{backgroundColor:"#f6f6f6"}},[t._v(t._s(t.topic.replies.length)+"回复")]),s("ul",t._l(t.topic.replies,function(e){return s("li",{key:e.id,style:{backgroundColor:t.isUped(e.id)?"#f4fcf0":""}},[s("div",{staticClass:"comment-user"},[s("img",{style:{width:"30px"},attrs:{src:e.author.avatar_url,alt:""}}),s("span",[t._v(t._s(e.author.loginname))])]),s("div",{domProps:{innerHTML:t._s(e.content)}}),s("div",{staticClass:"up-reply"},[s("span",[s("span",{staticClass:"iconfont icon-zan",class:0===e.ups.length?"kong":t.isUped(e.id)?"dian":"moren",on:{click:function(s){return t.up(e.id)}}}),t._v("\n              "+t._s(e.ups.length?e.ups.length:"")+"\n            ")]),s("span",{staticClass:"huifu iconfont icon-huifu",on:{click:function(s){return t.addReply(e.author.loginname)}}})])])}),0)]),s("div",{staticClass:"comment-form"},[s("p",[t._v("添加回复")]),s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],style:{width:"100%",height:"300px"},domProps:{value:t.val},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.changeComment(e)},input:function(e){e.target.composing||(t.val=e.target.value)}}}),s("button",{on:{click:t.changeComment}},[t._v("回复")])])]):s("img",{attrs:{src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg",alt:""}})])},U=[],B=(s("7514"),{name:"topic",data:function(){return{topic:null,is_collect:!1,val:""}},computed:{is_login:function(){return Boolean(sessionStorage.getItem("token"))}},created:function(){var t=this,e=this.$route.params.id;v.a.get("https://www.vue-js.com/api/v1/topic/".concat(e)).then(function(e){t.topic=e.data.data,console.log(e.data.data)})},methods:{changebg:function(){var t=this,e={topic_id:this.$route.params.id,accesstoken:sessionStorage.getItem("token")};this.is_collect?v.a.post("https://www.vue-js.com/api/v1/topic/de_collect",e).then(function(e){e.data.success&&(t.is_collect=!1)}):v.a.post("https://www.vue-js.com/api/v1/topic/collect",e).then(function(e){e.data.success&&(t.is_collect=!0)})},myMomentTop:function(t){return N.a.locale("zh-cn"),N()(t).fromNow()},changeComment:function(){var t=this;v.a.post("https://www.vue-js.com/api/v1/topic/".concat(this.topic.id,"/replies"),{accesstoken:sessionStorage.getItem("token"),content:this.val}).then(function(e){v.a.get("https://www.vue-js.com/api/v1/topic/".concat(t.topic.id)).then(function(e){t.topic=e.data.data,t.val=""})})},up:function(t){var e=this;console.log(t),sessionStorage.getItem("token")?v.a.post("https://www.vue-js.com/api/v1/reply/".concat(t,"/ups"),{accesstoken:sessionStorage.getItem("token")}).then(function(s){console.log(sessionStorage.getItem("user_id")),console.log(s.data),"up"===s.data.action?e.topic.replies.find(function(e){return e.id===t}).ups.push(sessionStorage.getItem("user_id")):e.topic.replies.find(function(e){return e.id===t}).ups=e.topic.replies.find(function(e){return e.id===t}).ups.filter(function(t){return t!=sessionStorage.getItem("user_id")})}):alert("登录再进行点赞行为")},isUped:function(t){return-1!=this.topic.replies.find(function(e){return e.id===t}).ups.indexOf(sessionStorage.getItem("user_id"))},addReply:function(t){console.log(t),this.val="@".concat(t," "),document.querySelector(".huifu").focus()}}}),G=B,W=(s("1b9d"),Object(h["a"])(G,T,U,!1,null,null,null)),Q=W.exports,R=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.user?s("div",{staticClass:"user"},[s("div",{staticClass:"user-inner"},[s("div",{staticClass:"user-mesage"},[s("div",[s("span",{style:{color:"#369219"},on:{click:t.goBack}},[t._v("主页")]),t._v("/\n      ")]),s("div",[s("div",{staticClass:"pic"},[s("img",{attrs:{src:t.user.avatar_url,alt:""}}),s("span",[t._v(t._s(t.user.loginname))])]),s("div",[s("span",[t._v(t._s(t.user.score)+"积分")])]),s("p",[t._v("注册时间"+t._s(t.myMomentUser(t.user.create_at)))])])]),s("div",{staticClass:"user-set"},[s("p",[t._v("最近创建的话题")]),s("div",{staticClass:"tagulWrap"},t._l(t.user.recent_topics,function(e){return s("div",{key:e.id,staticClass:"tagul"},[s("div",{staticClass:"one"},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})])],1),s("div",{staticClass:"four"},[s("router-link",{attrs:{to:"/topic/"+e.id,title:e.title}},[t._v(t._s(e.title))])],1),s("div",{staticClass:"five time"},[s("span",[t._v(t._s(t.myMomentUser(e.last_reply_at)))])])])}),0),s("div",{staticClass:"more"},[t.user.recent_topics.length?s("span",[s("router-link",{attrs:{to:"/user/"+t.user.loginname+"/topics"}},[t._v("查看更多》")])],1):s("span",[t._v("无话题")])])]),s("div",{staticClass:"user-set"},[s("p",[t._v("最近参与的话题")]),s("div",{staticClass:"tagulWrap"},t._l(t.user.recent_replies,function(e){return s("div",{key:e.id,staticClass:"tagul"},[s("div",{staticClass:"one"},[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[s("img",{attrs:{src:e.author.avatar_url,alt:""}})])],1),s("div",{staticClass:"four"},[s("router-link",{attrs:{to:"/topic/"+e.id,title:e.title}},[t._v(t._s(e.title))])],1),s("div",{staticClass:"five time"},[s("span",[t._v(t._s(t.myMomentUser(e.last_reply_at)))])])])}),0),s("div",{staticClass:"more"},[t.user.recent_replies.length?s("span",[t._v("查看更多》")]):s("span",[t._v("无话题")])])])])]):s("img",{attrs:{src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg",alt:""}})},K=[],L={neme:"user",data:function(){return{user:null}},watch:{"$route.fullPath":{immediate:!0,handler:function(){var t=this,e=this.$route.params.loginname;console.log(this.$route.params.loginname),v.a.get("https://www.vue-js.com/api/v1/user/".concat(e)).then(function(e){t.user=e.data.data,console.log(t.user)})}}},methods:{goBack:function(){this.$router.push("/")},myMomentUser:function(t){return N.a.locale("zh-cn"),N()(t).fromNow()}}},X=L,Y=(s("3607"),Object(h["a"])(X,R,K,!1,null,null,null)),A=Y.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._v("作者")])},J=[],V={name:"userlist"},Z=V,tt=Object(h["a"])(Z,D,J,!1,null,null,null),et=tt.exports,st=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"addarticle"},[s("div",{staticClass:"addarticle-inner"},[s("div",{staticClass:"addarticle-map"},[s("span",{on:{click:t.goback}},[t._v("主页")]),s("span",[t._v("/发布话题")])]),s("div",{staticClass:"addarticle-tab"},[s("span",[t._v("选择板块：")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.tab,expression:"tab"}],on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.tab=e.target.multiple?s:s[0]}}},[s("option",{attrs:{value:"",selected:""}},[t._v("请选择")]),s("option",{attrs:{value:"weex"}},[t._v("weex")]),s("option",{attrs:{value:"share"}},[t._v("分享")]),s("option",{attrs:{value:"ask"}},[t._v("问答")]),s("option",{attrs:{value:"job"}},[t._v("工作")])])]),s("div",{staticClass:"addarticle-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",placeholder:"标题字数10字以上"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}})]),s("div",{staticClass:"addarticle-textarea"},[s("quill-editor",{ref:"myQuillEditor",attrs:{options:t.editorOption},on:{blur:function(e){return t.onEditorBlur(e)},focus:function(e){return t.onEditorFocus(e)},ready:function(e){return t.onEditorReady(e)}},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),s("div",{staticClass:"addarticle-button"},[s("button",{on:{click:t.submit}},[t._v("提交")])])])])},at=[],nt=(s("a753"),s("8096"),s("14e1"),s("953d")),ot={name:"addarticle",data:function(){return{tab:"",title:"",content:"",editorOption:{}}},components:{quillEditor:nt["quillEditor"]},methods:{goback:function(){this.$router.push("/")},submit:function(){var t=this;console.log(this.content),v.a.post("https://www.vue-js.com/api/v1/topics",{tab:this.tab,title:this.title,content:this.content.trim(),accesstoken:sessionStorage.getItem("token")}).then(function(e){console.log(e.data),t.tab="",t.title="",t.content="",t.$router.push("/topics/".concat(e.data.topic_id))})},onEditorBlur:function(t){console.log("editor blur!",t)},onEditorFocus:function(t){console.log("editor focus!",t)},onEditorReady:function(t){console.log("editor ready!",t)},onEditorChange:function(t){var e=t.quill,s=t.html,a=t.text;console.log("editor change!",e,s,a),this.content=s}}},it=ot,ct=(s("6228"),Object(h["a"])(it,st,at,!1,null,null,null)),rt=ct.exports,lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"message"},[t.has_read_messages.length||t.hasnot_read_messages.length?s("div",{staticClass:"message-inner"},[s("div",{staticClass:"message-new"},[t._m(0),s("div",[t.hasnot_read_messages.length?s("ul",t._l(t.hasnot_read_messages,function(e){return s("li",{key:e.id},[s("div",[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),s("span",[t._v("在话题")]),s("router-link",{attrs:{to:"/topics/"+e.topic.id}},[t._v(t._s(e.topic.title))]),s("span",[t._v("中@了你")])],1),t._m(1,!0)])}),0):s("span",[t._v("无消息")])])]),s("div",{staticClass:"message-read"},[t._m(2),t.has_read_messages.length?s("ul",t._l(t.has_read_messages,function(e){return s("li",{key:e.id},[s("div",[s("router-link",{attrs:{to:"/user/"+e.author.loginname}},[t._v(t._s(e.author.loginname))]),s("span",[t._v(t._s("at"===e.type?"在话题":"回复了你的话题"))]),s("router-link",{attrs:{to:"/topics/"+e.topic.id}},[t._v(t._s(e.topic.title))]),s("span",[t._v(t._s("at"===e.type?"中@了你":""))])],1),t._m(3,!0)])}),0):s("span",[t._v("无消息")])])]):s("img",{attrs:{src:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4246834486,3428281355&fm=117&gp=0.jpg"}})])},ut=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("主页")]),s("span",[t._v("/")]),s("span",[t._v("新消息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"arrirm"},[s("b",[t._v("√")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("span",[t._v("过往消息")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"arrirm"},[s("b",[t._v("√")])])}],dt={name:"message",data:function(){return{has_read_messages:[],hasnot_read_messages:[]}},created:function(){var t=this;v.a.get("https://www.vue-js.com/api/v1/messages?accesstoken=".concat(sessionStorage.getItem("token"))).then(function(e){console.log(e.data.data.has_read_messages),t.has_read_messages=e.data.data.has_read_messages,console.log(t.has_read_messages),t.hasnot_read_messages=e.data.data.hasnot_read_messages,console.log(t.hasnot_read_messages)}),v.a.post("https://www.vue-js.com/api/v1/message/mark_all",{accesstoken:sessionStorage.getItem("token")})}},pt=dt,vt=(s("5932"),Object(h["a"])(pt,lt,ut,!1,null,null,null)),ft=vt.exports;c["default"].use(z["a"]);var mt=new z["a"]({routes:[{path:"/",component:H},{path:"/topics/:id",component:Q},{path:"/user/:loginname",component:A},{path:"/user/:loginname/topics",component:et},{path:"/topic/create",component:rt},{path:"/my/messages",component:ft}],mode:"history"});s("ed2c");c["default"].config.productionTip=!1,c["default"].use(i.a),c["default"].use(n.a),new c["default"]({render:function(t){return t(S)},router:mt}).$mount("#app")},5932:function(t,e,s){"use strict";var a=s("bdba"),n=s.n(a);n.a},6228:function(t,e,s){"use strict";var a=s("402d"),n=s.n(a);n.a},"760c":function(t,e,s){"use strict";var a=s("b675"),n=s.n(a);n.a},"782e":function(t,e,s){},"8a7b":function(t,e,s){},"8b71":function(t,e,s){"use strict";var a=s("e3a2"),n=s.n(a);n.a},"8baf":function(t,e,s){"use strict";var a=s("782e"),n=s.n(a);n.a},"979f":function(t,e,s){},b675:function(t,e,s){},bdba:function(t,e,s){},e3a2:function(t,e,s){},e4a2:function(t,e,s){},ed2c:function(t,e,s){}});
//# sourceMappingURL=app.66703725.js.map