(function(t){function e(e){for(var i,o,r=e[0],c=e[1],u=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);l&&l(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),s()}function s(){for(var t,e=0;e<a.length;e++){for(var s=a[e],i=!0,r=1;r<s.length;r++){var c=s[r];0!==n[c]&&(i=!1)}i&&(a.splice(e--,1),t=o(o.s=s[0]))}return t}var i={},n={app:0},a=[];function o(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=i,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(s,i,function(e){return t[e]}.bind(null,i));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var u=0;u<r.length;u++)e(r[u]);var l=c;a.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"10b7":function(t,e,s){"use strict";s("ff20")},"26cf":function(t,e,s){"use strict";s("e916")},"3a63":function(t,e,s){"use strict";s("587c")},"436b":function(t,e,s){},"45f1":function(t,e,s){"use strict";s("66f7")},"53bc":function(t,e,s){},"54c4":function(t,e,s){},5528:function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("b0c0"),s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper",attrs:{id:"app"}},[s("router-view",{attrs:{to:"/"}})],1)},a=[],o=s("2877"),r={},c=Object(o["a"])(r,n,a,!1,null,null,null),u=c.exports,l=s("260b"),d=(s("ea7b"),s("66ce"),s("741f"),s("588e"),s("8c4f")),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth_box bgc_coral"},[s("div",{staticClass:"auth--area bgc_black c_white"},[t._m(0),s("h2",{staticClass:"c_white"},[t._v("Registration")]),s("form",{attrs:{action:"registration"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userMail,expression:"user.userMail"}],attrs:{type:"text",placeholder:"mail"},domProps:{value:t.user.userMail},on:{input:function(e){e.target.composing||t.$set(t.user,"userMail",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userPassword,expression:"user.userPassword"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.user.userPassword},on:{input:function(e){e.target.composing||t.$set(t.user,"userPassword",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userPasswordConfirm,expression:"user.userPasswordConfirm"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.user.userPasswordConfirm},on:{input:function(e){e.target.composing||t.$set(t.user,"userPasswordConfirm",e.target.value)}}}),s("button",{staticClass:"submit",on:{click:function(e){return e.preventDefault(),t.createUser(e)}}},[t._v(" Register ")])]),s("router-link",{attrs:{to:{name:"sign"}}},[s("div",{staticClass:"from_sign_to_reg"},[t._v(" Sign in ")])]),s("p",{staticClass:"error"},[t._v(t._s(t.submitStatus))])],1)])},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"c_white"},[t._v(" to"),s("span",{staticClass:"c_white",staticStyle:{margin:"0 15px"}},[t._v("-")]),t._v("do ")])}],f=s("5530"),v=s("2f62"),h={data:function(){return{user:{userMail:null,userPassword:null,userPasswordConfirm:null},submitStatus:null}},methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["registerUser"])),{},{createUser:function(){var t=this;if(this.userPassword===this.userPasswordConfirm)try{this.registerUser(this.user),this.submitStatus=!0}catch(e){this.submitStatus=e.message,setTimeout((function(){t.submitStatus=null}),3e3)}else this.submitStatus="Check your password"}})},b=h,y=(s("ab67"),Object(o["a"])(b,m,p,!1,null,"20510528",null)),_=y.exports,g=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"auth_box bgc_coral"},[s("div",{staticClass:"auth--area bgc_black c_white"},[t._m(0),s("form",{attrs:{action:"sign-in"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userMail,expression:"user.userMail"}],attrs:{type:"text",placeholder:"mail"},domProps:{value:t.user.userMail},on:{input:function(e){e.target.composing||t.$set(t.user,"userMail",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.userPassword,expression:"user.userPassword"}],attrs:{type:"password",placeholder:"password"},domProps:{value:t.user.userPassword},on:{input:function(e){e.target.composing||t.$set(t.user,"userPassword",e.target.value)}}}),s("button",{staticClass:"submit",on:{click:function(e){return e.preventDefault(),t.signIn_local_method(e)}}},[t._v(" sign in ")])]),s("router-link",{attrs:{to:{name:"registration"}}},[s("div",{staticClass:"from_sign_to_reg"},[t._v(" Registration ")])]),s("p",{staticClass:"error"},[t._v(t._s(t.submitStatus))])],1)])},D=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("h1",{staticClass:"c_white"},[t._v(" to"),s("span",{staticClass:"c_white",staticStyle:{margin:"0 15px"}},[t._v("-")]),t._v("do ")])}],E={data:function(){return{user:{userMail:null,userPassword:null},submitStatus:null}},methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["signIn"])),{},{signIn_local_method:function(){var t=this;try{this.signIn(this.user),"main"!==this.$route.name&&this.$router.push({name:"main"})}catch(e){this.submitStatus=e.message,setTimeout((function(){t.submitStatus=null}),3e3)}}})},O=E,w=(s("5dd9"),Object(o["a"])(O,g,D,!1,null,"08ad61ec",null)),C=w.exports,A=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("Header"),s("CalendarBox",{attrs:{"number-of-days":t.numberOfDays,month:t.month+1}}),s("FieldBox")],1)},j=[],M=(s("cb29"),s("d81d"),s("fb6a"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"calendar-visible wrapper bgc_coral"},[s("div",{staticClass:"calendar_scroll"},[s("div",{staticClass:"calendar-box"},t._l(t.numberOfDays,(function(e,i){return s("CalendarOneDay",{key:i,attrs:{day:e,date:t.fullDate(e),active:!!t.arrDaysActiveMissions.includes(t.fullDate(e))||null,done:!!t.arrDaysDoneMissions.includes(t.fullDate(e))||null}})})),1)])])}),k=[],x=(s("99af"),s("caad"),s("a9e3"),s("4fad"),s("159b"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"day_block",on:{click:t.setActiveDay_local_method}},[s("span",{staticClass:"day_block-day"},[t._v(t._s(t.day))]),s("span",{staticClass:"name_of_day"},[t._v(t._s(t.setDayOfWeek()))]),s("div",{staticClass:"to_activity"},[t.done?s("div",{staticClass:"point_completed bgc_coral"}):t._e(),t.active?s("div",{staticClass:"point_active bgc_black"}):t._e()])])}),P=[],T={props:{day:{type:Number,default:function(){}},idx:{type:Number,default:function(){}},date:{type:String,default:""},active:{type:Boolean,default:function(){}},done:{type:Boolean,default:function(){}}},methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["setActiveDay"])),{},{setActiveDay_local_method:function(){this.setActiveDay(this.date)},setDayOfWeek:function(){var t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];return t[new Date(this.date).getDay()]}})},S=T,$=(s("bbcb"),Object(o["a"])(S,x,P,!1,null,"6c66bc17",null)),N=$.exports,U={components:{CalendarOneDay:N},props:{numberOfDays:{type:Array,default:function(){return{}}},month:{type:Number,default:function(){return{}}}},computed:Object(f["a"])({},Object(v["c"])(["missions","arrDaysActiveMissions","arrDaysDoneMissions"])),watch:{missions:function(){this.setArrOfStateMissions()}},mounted:function(){this.missions&&this.setArrOfStateMissions()},methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["setArrDaysActiveMissions","setArrDaysDoneMissions"])),{},{fullDate:function(t){return"".concat(this.month,"-").concat(t,"-").concat((new Date).getFullYear())},setArrOfStateMissions:function(){var t=[],e=[];this.missions&&(Object.entries(this.missions).forEach((function(s){Object.entries(s[1]).forEach((function(i){!0===i[1].completed?e.includes(s[0])||e.push(s[0]):t.includes(s[0])||t.push(s[0])}))})),this.setArrDaysActiveMissions(t),this.setArrDaysDoneMissions(e))}})},V=U,B=(s("b813"),Object(o["a"])(V,M,k,!1,null,"e9405882",null)),I=B.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",[t._v(" "+t._s(t.isCreated)+" "),s("h1",[t._v(" missions for "),s("span",{staticClass:"c_coral"},[t._v(t._s(t.monthName))])]),s("div",{staticClass:"nav"},[t._e(),s("LogoutButton")],1),s("Burger")],1)},R=[],L=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"burger"},[s("div",{class:{burger_content:!0,burger_animation:t.active}},[s("CreationButton"),s("LogoutButton")],1),s("div",{staticClass:"burger_button",on:{click:t.getContent}},[s("span",{staticClass:"burger_button_span"})])])},H=[],J=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("button",{staticClass:"logout",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("logout")])},K=[],Y={methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["logoutUser"])),{},{logout:function(){this.logoutUser()}})},W=Y,G=(s("26cf"),Object(o["a"])(W,J,K,!1,null,"27e753e0",null)),z=G.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("router-link",{attrs:{to:{name:"create"}}},[s("button",{staticClass:"create bgc_white c_black"},[t._v(" create a mission ")])])},Q=[],X=(s("10b7"),{}),Z=Object(o["a"])(X,q,Q,!1,null,"1f2ef38c",null),tt=Z.exports,et={components:{LogoutButton:z,CreationButton:tt},data:function(){return{active:!1}},methods:{getContent:function(){this.active=!this.active}}},st=et,it=(s("aaf6"),Object(o["a"])(st,L,H,!1,null,"6b20dc1b",null)),nt=it.exports,at={components:{Burger:nt,LogoutButton:z,CreationButton:tt},props:{isCreated:Boolean},data:function(){return{monthName:this.getMonthName()}},computed:Object(f["a"])({},Object(v["c"])(["months"])),beforeCreate:function(){this.$store.commit("setMonths")},mounted:function(){console.log("H",this.isCreated)},methods:{getMonthName:function(){var t=new Date,e=t.getMonth();return this.$store.getters.months[e]}}},ot=at,rt=(s("45f1"),Object(o["a"])(ot,F,R,!1,null,"27daf786",null)),ct=rt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"tasks_field c_black "},[t.activeDay?s("h2",[t._v("missions for "+t._s(t.activeDayInDF.getDate())+"th")]):t._e(),s("Field")],1)},lt=[],dt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.missionsForActiveDay?s("div",{staticClass:"field bgc_coral"},[s("div",{staticClass:"current_missions"},[s("h3",{staticClass:"c_white"},[t._v("current")]),s("ul",t._l(t.active,(function(t,e){return s("Mission",{key:e,attrs:{item:t,"key-value":e,checked:!1}})})),1)]),s("div",{staticClass:"completed_missions"},[s("h3",{staticClass:"c_white"},[t._v("completed")]),s("ul",t._l(t.done,(function(t,e){return s("Mission",{key:e,attrs:{item:t,"key-value":e,checked:!0}})})),1)])]):s("div",{staticClass:"no_field bgc_coral c_white"},[t._v("There are no missions")])])},mt=[],pt=(s("b64b"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("li",{staticClass:"mission"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"completed"}],staticClass:"custom_checkbox",attrs:{id:"completed",type:"checkbox",name:"completed"},domProps:{checked:Array.isArray(t.completed)?t._i(t.completed,null)>-1:t.completed},on:{click:t.setChecked,change:function(e){var s=t.completed,i=e.target,n=!!i.checked;if(Array.isArray(s)){var a=null,o=t._i(s,a);i.checked?o<0&&(t.completed=s.concat([a])):o>-1&&(t.completed=s.slice(0,o).concat(s.slice(o+1)))}else t.completed=n}}}),i("h3",{staticClass:"mission-title"},[t._v(" "+t._s(t.item.title)+" ")]),i("img",{staticClass:"delete",attrs:{src:s("d739"),width:"17px"},on:{click:t.deleteMission}}),i("img",{staticClass:"edit",attrs:{src:s("6582"),width:"17px"},on:{click:t.editMission}}),i("p",{staticClass:"mission-description",attrs:{id:"description"}},[t._v(" "+t._s(t.item.description)+" ")])])}),ft=[],vt=(s("a4d3"),s("e01a"),s("ade3")),ht=s("2591"),bt={props:{item:{type:Object,default:function(){}},keyValue:{type:String,default:""},checked:Boolean},data:function(){return{completed:this.item.completed}},computed:Object(f["a"])({},Object(v["c"])(["user","activeDay","isEdit"])),methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["setIsEdit","setKeyValueToEdit","setTitleToEdit","setDescriptionToEdit"])),{},{setChecked:function(){this.item.completed=!this.item.completed,ht["a"].database().ref("users/".concat(this.user,"/").concat(this.activeDay)).update(Object(vt["a"])({},this.keyValue,this.item))},deleteMission:function(){ht["a"].database().ref("users/".concat(this.user,"/").concat(this.activeDay)).update(Object(vt["a"])({},this.keyValue,null))},editMission:function(){this.setIsEdit(!0),this.setKeyValueToEdit(!0),this.setTitleToEdit(this.item.title),this.setDescriptionToEdit(this.item.description),this.$router.push({name:"create"})}})},yt=bt,_t=(s("75c7"),Object(o["a"])(yt,pt,ft,!1,null,"0d83a160",null)),gt=_t.exports,Dt={components:{Mission:gt},data:function(){return{active:{},done:{},activeMissions:null}},computed:Object(f["a"])({},Object(v["c"])(["activeDay","missions","missionsForActiveDay"])),watch:{missionsForActiveDay:function(){this.completedMissions()}},mounted:function(){this.completedMissions()},methods:{completedMissions:function(){var t=this;this.active={},this.done={},this.missionsForActiveDay&&Object.keys(this.missionsForActiveDay).forEach((function(e){!1===t.missionsForActiveDay[e].completed?t.active[e]=t.missionsForActiveDay[e]:t.done[e]=t.missionsForActiveDay[e]}))}}},Et=Dt,Ot=(s("9022"),Object(o["a"])(Et,dt,mt,!1,null,"4e198a70",null)),wt=Ot.exports,Ct={components:{Field:wt},computed:Object(f["a"])({},Object(v["c"])(["activeDay","user","activeDayInDF"])),mounted:function(){this.$store.commit("setActiveDay",new Date)}},At=Ct,jt=(s("e4f1"),Object(o["a"])(At,ut,lt,!1,null,"8bf9ef7c",null)),Mt=jt.exports,kt={components:{Header:ct,CalendarBox:I,FieldBox:Mt},data:function(){return{numberOfDays:this.countDays()}},methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["setDaysArray"])),{},{countDays:function(){var t=new Date,e=t.getFullYear();this.month=t.getMonth();var s=[31,28,31,30,31,30,31,31,30,31,30,31];(e%4==0&&e%100!=0||e%400==0)&&(s[1]=29),this.setDaysArray(s[this.month]);var i=new Array(s[this.month]).fill();return i.map((function(t,e){return e+1})).slice(t.getDate()-1,i.length+1)}})},xt=kt,Pt=Object(o["a"])(xt,A,j,!1,null,null,null),Tt=Pt.exports,St=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[s("Header",{attrs:{"is-created":!0}}),s("form",{class:{creation:!0,error_to_sent:t.errorInCreation}},[s("label",{attrs:{for:"title"}},[t._v("Title")]),t.isEdit?s("input",{directives:[{name:"model",rawName:"v-model",value:t.toEdit.title,expression:"toEdit.title"}],staticClass:"input-title",attrs:{id:"title"},domProps:{value:t.toEdit.title},on:{input:function(e){e.target.composing||t.$set(t.toEdit,"title",e.target.value)}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:t.mission.title,expression:"mission.title"}],staticClass:"input-title",attrs:{id:"title",placeholder:"title"},domProps:{value:t.mission.title},on:{input:function(e){e.target.composing||t.$set(t.mission,"title",e.target.value)}}}),s("label",{attrs:{for:"description"}},[t._v("Description")]),t.isEdit?s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.toEdit.description,expression:"toEdit.description"}],staticClass:"input-description",attrs:{id:"description"},domProps:{value:t.toEdit.description},on:{input:function(e){e.target.composing||t.$set(t.toEdit,"description",e.target.value)}}}):s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.mission.description,expression:"mission.description"}],staticClass:"input-description",attrs:{id:"description",placeholder:"description"},domProps:{value:t.mission.description},on:{input:function(e){e.target.composing||t.$set(t.mission,"description",e.target.value)}}}),t._v(" "),s("div",{staticClass:"date"},[s("label",{attrs:{for:"day"}},[t._v("Day")]),s("label",{attrs:{for:"month"}},[t._v("Month")]),s("label",{attrs:{for:"year"}},[t._v("Year")]),s("input",{directives:[{name:"model",rawName:"v-model",value:t.date.day,expression:"date.day"}],staticClass:"date-item",attrs:{id:"day"},domProps:{value:t.date.day},on:{input:function(e){e.target.composing||t.$set(t.date,"day",e.target.value)}}}),s("select",{directives:[{name:"model",rawName:"v-model",value:t.date.month,expression:"date.month"}],staticClass:"date-item",attrs:{id:"month"},on:{change:function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.date,"month",e.target.multiple?s:s[0])}}},t._l(t.months,(function(e,i){return s("option",{key:i,domProps:{value:i+1}},[t._v(" "+t._s(e.match(/^.{0,3}/).toString())+" ")])})),0),s("input",{directives:[{name:"model",rawName:"v-model",value:t.date.year,expression:"date.year"}],staticClass:"date-item",attrs:{id:"year"},domProps:{value:t.date.year},on:{input:function(e){e.target.composing||t.$set(t.date,"year",e.target.value)}}})]),s("button",{attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.setMission(e)}}},[t._v("save")])])],1)},$t=[],Nt=(s("a15b"),s("13d5"),{components:{Header:ct},data:function(){return{mission:{title:null,description:null,completed:!1},date:{month:null,day:null,year:null},toEdit:{title:null,description:null},errorInCreation:!1}},computed:Object(f["a"])({},Object(v["c"])(["months","user","isEdit","titleToEdit","descriptionToEdit","activeDay","keyValueToEdit"])),mounted:function(){this.isEdit&&(this.toEdit.title=this.titleToEdit,this.toEdit.description=this.descriptionToEdit)},methods:Object(f["a"])(Object(f["a"])({},Object(v["b"])(["setIsEdit"])),{},{setMission:function(){var t=this,e=new Date(Object.entries(this.date).reduce((function(t,e){return"month"===e[0]&&e[1]++,t.push(e[1]),t}),[]).join("-")),s="".concat(e.getMonth(),"-").concat(e.getDate(),"-").concat(e.getFullYear());this.isEdit&&(ht["a"].database().ref("users/".concat(this.user,"/").concat(this.activeDay)).update(Object(vt["a"])({},this.keyValueToEdit,null)),this.mission.title=this.toEdit.title,this.mission.description=this.toEdit.description),(this.mission.title||this.toEdit.title)&&this.date.month&&this.date.day&&this.date.year?(ht["a"].database().ref("users/".concat(this.user,"/").concat(s)).update(Object(vt["a"])({},+new Date,this.mission)),this.setIsEdit(!1),this.$router.push({name:"main"})):(this.errorInCreation=!0,setTimeout((function(){t.errorInCreation=!1}),1e3))}})}),Ut=Nt,Vt=(s("3a63"),Object(o["a"])(Ut,St,$t,!1,null,"542fc688",null)),Bt=Vt.exports;i["a"].use(d["a"]);var It=new d["a"]({mode:"history",routes:[{name:"main",path:"/",component:Tt},{name:"registration",path:"/registration",component:_},{name:"sign",path:"/sign-in",component:C},{name:"create",path:"/create",component:Bt}]}),Ft={state:{titleToEdit:null,descriptionToEdit:null,keyValueToEdit:null,isEdit:!1},getters:{titleToEdit:function(t){return t.titleToEdit},descriptionToEdit:function(t){return t.descriptionToEdit},keyValueToEdit:function(t){return t.keyValueToEdit},isEdit:function(t){return t.isEdit}},mutations:{isEdit:function(t,e){t.isEdit=e},titleToEdit:function(t,e){t.titleToEdit=e},descriptionToEdit:function(t,e){t.descriptionToEdit=e},keyValueToEdit:function(t,e){t.keyValueToEdit=e}},actions:{setIsEdit:function(t,e){var s=t.commit;s("isEdit",e)},setTitleToEdit:function(t,e){var s=t.commit;s("titleToEdit",e)},setDescriptionToEdit:function(t,e){var s=t.commit;s("descriptionToEdit",e)},setKeyValueToEdit:function(t,e){var s=t.commit;s("keyValueToEdit",e)}}},Rt=(s("96cf"),s("1da1")),Lt=s("d4ec"),Ht=function t(e){Object(Lt["a"])(this,t),this.id=e},Jt={state:{user:void 0},getters:{user:function(t){return t.user}},mutations:{setUser:function(t,e){t.user=e?e.id:null}},actions:{registerUser:function(t,e){return Object(Rt["a"])(regeneratorRuntime.mark((function s(){var i,n,a,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i=t.commit,n=e.userMail,a=e.userPassword,s.prev=2,s.next=5,ht["a"].auth().createUserWithEmailAndPassword(n,a);case 5:o=s.sent,i("setUser",new Ht(o.user.uid)),s.next=12;break;case 9:throw s.prev=9,s.t0=s["catch"](2),s.t0;case 12:case"end":return s.stop()}}),s,null,[[2,9]])})))()},signIn:function(t,e){return Object(Rt["a"])(regeneratorRuntime.mark((function s(){var i,n,a,o;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return i=t.commit,n=e.userMail,a=e.userPassword,s.prev=2,s.next=5,ht["a"].auth().signInWithEmailAndPassword(n,a);case 5:o=s.sent,i("setUser",new Ht(o.user.uid)),s.next=12;break;case 9:throw s.prev=9,s.t0=s["catch"](2),s.t0;case 12:case"end":return s.stop()}}),s,null,[[2,9]])})))()},loggedUser:function(t,e){var s=t.commit;s("setUser",new Ht(e.uid))},logoutUser:function(t){var e=t.commit;ht["a"].auth().signOut(),e("setUser",null)}}},Kt={state:{daysArray:[],activeDay:null,missions:null,months:null,keyToGetMission:null,arrDaysActiveMissions:[],arrDaysDoneMissions:[]},getters:{daysArray:function(t){return t.daysArray},activeDay:function(t){return t.activeDay},activeDayInDF:function(t){return new Date(t.activeDay)},missions:function(t){return t.missions},missionsForActiveDay:function(t){return t.missions&&t.activeDay?t.missions[t.activeDay]:null},months:function(t){return t.months},arrDaysActiveMissions:function(t){return t.arrDaysActiveMissions},arrDaysDoneMissions:function(t){return t.arrDaysDoneMissions}},mutations:{setDaysArray:function(t,e){for(var s=0;s<e;s++)t.daysArray.push(s)},setActiveDay:function(t,e){var s=t.activeDay?new Date(e):new Date;t.activeDay=s.getMonth()+1+"-"+s.getDate()+"-"+s.getFullYear()},setCurrentDayTasks:function(t){t.activeDay=new Date},setMissions:function(t,e){t.missions=e},setMonths:function(t){var e=["January","February","March","April","May","June","July","August","September","October","November","December"];t.months=e},setArrDaysActiveMissions:function(t,e){t.arrDaysActiveMissions=e},setArrDaysDoneMissions:function(t,e){t.arrDaysDoneMissions=e}},actions:{setDaysArray:function(t,e){var s=t.commit;s("setDaysArray",e)},setActiveDay:function(t,e){var s=t.commit;s("setActiveDay",e)},setCurrentDayTasks:function(t){var e=t.commit;e("setCurrentDayTasks")},setMissions:function(t,e){var s=t.commit;ht["a"].database().ref("users/"+e).on("value",(function(t){s("setMissions",t.val())}))},setMonths:function(t){var e=t.commit;e("setMonths")},setArrDaysActiveMissions:function(t,e){var s=t.commit;s("setArrDaysActiveMissions",e)},setArrDaysDoneMissions:function(t,e){var s=t.commit;s("setArrDaysDoneMissions",e)}}};i["a"].use(v["a"]);var Yt=new v["a"].Store({modules:{edit:Ft,main_page:Kt,user:Jt}});i["a"].config.productionTip=!1,new i["a"]({store:Yt,router:It,created:function(){var t=this,e={apiKey:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_API_KEY,authDomain:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_AUTH_DOMAIN,databaseURL:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DATABASE_URL,projectId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_MESSAGING_SENDER_ID,appId:Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APPID};l["a"].initializeApp(e),l["a"].auth().onAuthStateChanged((function(e){e?(t.$store.dispatch("loggedUser",e),t.$store.dispatch("setMissions",e.uid),"main"!==t.$route.name&&t.$router.push({name:"main"})):"sign"!==t.$route.name&&t.$router.push({name:"sign"})}))},render:function(t){return t(u)}}).$mount("#app")},"587c":function(t,e,s){},"5dd9":function(t,e,s){"use strict";s("d79d")},6582:function(t,e,s){t.exports=s.p+"img/edit.930f91f3.svg"},"66f7":function(t,e,s){},"75c7":function(t,e,s){"use strict";s("e960")},"7c09":function(t,e,s){},9022:function(t,e,s){"use strict";s("53bc")},aaf6:function(t,e,s){"use strict";s("5528")},ab67:function(t,e,s){"use strict";s("436b")},ac1c:function(t,e,s){},b813:function(t,e,s){"use strict";s("ac1c")},bbcb:function(t,e,s){"use strict";s("7c09")},d739:function(t,e,s){t.exports=s.p+"img/delete.650cdc57.svg"},d79d:function(t,e,s){},e4f1:function(t,e,s){"use strict";s("54c4")},e916:function(t,e,s){},e960:function(t,e,s){},ff20:function(t,e,s){}});