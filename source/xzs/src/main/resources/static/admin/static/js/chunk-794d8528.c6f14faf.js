(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-794d8528"],{"4ce2":function(e,t,s){},"4d8e":function(e,t,s){e.exports=s.p+"static/img/avatar.d25a6cc8.gif"},"5aad":function(e,t,s){"use strict";s("4ce2")},ecac:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e._self._c;return t("div",{staticClass:"app-container"},[t("div",[t("el-row",{attrs:{gutter:20}},[t("el-col",{attrs:{span:6,xs:24}},[t("user-card",{attrs:{userInfo:e.userInfo}})],1),t("el-col",{attrs:{span:18,xs:24}},[t("el-card",[t("el-tabs",{attrs:{"active-name":"timeline"}},[t("el-tab-pane",{attrs:{label:"时间线",name:"timeline"}},[t("timeline",{attrs:{userInfo:e.userInfo}})],1),t("el-tab-pane",{attrs:{label:"账号",name:"account"}},[t("account",{attrs:{userInfo:e.userInfo}})],1)],1)],1)],1)],1)],1)])},r=[],n=function(){var e=this,t=e._self._c;return t("el-card",{staticStyle:{"margin-bottom":"20px"}},[t("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[t("span",[e._v("关于我")])]),t("div",{staticClass:"user-profile"},[t("div",{staticClass:"box-center"},[t("img",{staticStyle:{"border-radius":"50px"},attrs:{src:null===e.userInfo.imagePath?s("4d8e"):e.userInfo.imagePath,height:"100px",width:"100px"}})]),t("div",{staticClass:"box-center"},[t("div",{staticClass:"user-name text-center"},[e._v(e._s(e.userInfo.userName))]),t("div",{staticClass:"user-role text-center text-muted"},[e._v(e._s(e.enumFormat(e.roleEnum,e.userInfo.role)))])])]),t("div",{staticClass:"user-bio"},[t("div",{staticClass:"user-education user-bio-section"},[t("div",{staticClass:"user-bio-section-header"},[t("svg-icon",{attrs:{"icon-class":"education"}}),t("span",[e._v("个人简介")])],1),t("div",{staticClass:"user-bio-section-body"},[t("div",{staticClass:"text-muted"},[e._v(" 无 ")])])])])])},i=[],l=s("5530"),o=s("2f62"),u={props:{userInfo:{type:Object,default:function(){return{realName:"",userName:"",role:"",imagePath:null}}}},computed:Object(l["a"])(Object(l["a"])({},Object(o["c"])("enumItem",["enumFormat"])),Object(o["e"])("enumItem",{roleEnum:function(e){return e.user.roleEnum}}))},c=u,m=(s("5aad"),s("2877")),f=Object(m["a"])(c,n,i,!1,null,"bd51907a",null),p=f.exports,d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"block"},[t("el-timeline",[t("el-timeline-item",{attrs:{placement:"top",timestamp:e.userInfo.lastActiveTime}},[t("el-card",[t("h4",[e._v("最后活动时间")]),t("p",[e._v(e._s(e.userInfo.realName+"在校考系统中最后活动了"))])])],1),t("el-timeline-item",{attrs:{placement:"top",timestamp:e.userInfo.createTime}},[t("el-card",[t("h4",[e._v("加入时间")]),t("p",[e._v(e._s(e.userInfo.realName+"加入了校考系统"))])])],1)],1)],1)},v=[],b={props:{userInfo:{type:Object,default:function(){return{realName:"",lastActiveTime:"",createTime:""}}}}},h=b,I=Object(m["a"])(h,d,v,!1,null,null,null),_=I.exports,x=(s("498a"),function(){var e=this,t=e._self._c;return t("el-form",[t("el-form-item",{attrs:{label:"真实姓名"}},[t("el-input",{model:{value:e.userInfo.realName,callback:function(t){e.$set(e.userInfo,"realName","string"===typeof t?t.trim():t)},expression:"userInfo.realName"}})],1),t("el-form-item",{attrs:{label:"手机号"}},[t("el-input",{model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone","string"===typeof t?t.trim():t)},expression:"userInfo.phone"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("更新")])],1)],1)}),g=[],C=s("c24f"),j={props:{userInfo:{type:Object,default:function(){return{realName:"",phone:""}}}},methods:{submit:function(){var e=this;C["a"].updateUser(this.userInfo).then((function(t){1===t.code?e.$message.success(t.message):e.$message.error(t.message)}))}}},N=j,O=Object(m["a"])(N,x,g,!1,null,null,null),y=O.exports,w={name:"Profile",data:function(){return{userInfo:{realName:"",phone:"",lastActiveTime:"",createTime:"",role:"1",imagePath:null}}},components:{UserCard:p,Timeline:_,Account:y},created:function(){var e=this;C["a"].getCurrentUser().then((function(t){e.userInfo=t.response}))}},k=w,T=Object(m["a"])(k,a,r,!1,null,null,null);t["default"]=T.exports}}]);