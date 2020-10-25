(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mLogin_mRegister"],{"0315":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-form",{attrs:{model:t.RegisterForm},on:{submit:t.onSubmit}},[r("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.RegisterForm.username,callback:function(e){t.$set(t.RegisterForm,"username",e)},expression:"RegisterForm.username"}}),r("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.RegisterForm.password,callback:function(e){t.$set(t.RegisterForm,"password",e)},expression:"RegisterForm.password"}}),r("van-field",{attrs:{name:"昵称",label:"昵称",placeholder:"昵称",rules:[{required:!0,message:"请填写昵称"}]},model:{value:t.RegisterForm.nickname,callback:function(e){t.$set(t.RegisterForm,"nickname",e)},expression:"RegisterForm.nickname"}}),r("van-field",{attrs:{name:"邮箱",label:"邮箱",placeholder:"邮箱",rules:[{required:!0,message:"请填写您的邮箱！"},{pattern:/^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/,message:"邮箱格式错误！"}]},model:{value:t.RegisterForm.email,callback:function(e){t.$set(t.RegisterForm,"email",e)},expression:"RegisterForm.email"}}),r("van-field",{attrs:{name:"uploader",label:"上传头像"},scopedSlots:t._u([{key:"input",fn:function(){return[r("van-uploader",{attrs:{"after-read":t.afterRead}})]},proxy:!0}])}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 提交 ")])],1)],1)],1)},o=[],a=(r("96cf"),r("1da1")),i={data:function(){return{RegisterForm:{}}},methods:{afterRead:function(t){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var n,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=new FormData,n.append("file",t.file),r.next=4,e.$http.post("upload",n);case 4:o=r.sent,e.$set(e.RegisterForm,"avatar",o.data.url),console.log(o);case 7:case"end":return r.stop()}}),r)})))()},onSubmit:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("user/create",t.RegisterForm);case 2:e.sent,t.$router.push("/mLogin");case 4:case"end":return e.stop()}}),e)})))()}}},s=i,u=r("2877"),c=Object(u["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports},"1da1":function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r("d3b7");function n(t,e,r,n,o,a,i){try{var s=t[a](i),u=s.value}catch(c){return void r(c)}s.done?e(u):Promise.resolve(u).then(n,o)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(o,a){var i=t.apply(e,r);function s(t){n(i,o,a,s,u,"next",t)}function u(t){n(i,o,a,s,u,"throw",t)}s(void 0)}))}}},9243:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("van-form",{attrs:{model:t.LoginForm},on:{submit:t.onSubmit}},[r("van-field",{attrs:{name:"用户名",label:"用户名",placeholder:"用户名",rules:[{required:!0,message:"请填写用户名"}]},model:{value:t.LoginForm.username,callback:function(e){t.$set(t.LoginForm,"username",e)},expression:"LoginForm.username"}}),r("van-field",{attrs:{type:"password",name:"密码",label:"密码",placeholder:"密码",rules:[{required:!0,message:"请填写密码"}]},model:{value:t.LoginForm.password,callback:function(e){t.$set(t.LoginForm,"password",e)},expression:"LoginForm.password"}}),r("div",{staticStyle:{margin:"16px"}},[r("van-button",{attrs:{round:"",block:"",type:"info","native-type":"submit"}},[t._v(" 登录 ")])],1)],1),r("div",{staticStyle:{"text-align":"center","font-size":"1rem"}},[r("span",[t._v("还没有账号?赶紧")]),r("router-link",{staticStyle:{color:"red","font-size":"1rem"},attrs:{to:"/mRegister",tag:"span"}},[t._v("注册")])],1)],1)},o=[],a=(r("96cf"),r("1da1")),i={inject:["reload"],data:function(){return{LoginForm:{}}},methods:{onSubmit:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$http.post("login",t.LoginForm);case 2:r=e.sent,localStorage.token=r.data.token,localStorage.userPermission=JSON.stringify(r.data.userinfo),t.$router.push("/homeCard"),t.reload();case 7:case"end":return e.stop()}}),e)})))()}}},s=i,u=r("2877"),c=Object(u["a"])(s,n,o,!1,null,null,null);e["default"]=c.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=k(t,r,i),a}function c(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",m={};function d(){}function v(){}function g(){}var y={};y[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(O([])));b&&b!==r&&n.call(b,a)&&(y=b);var x=g.prototype=d.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function F(t,e){function r(o,a,i,s){var u=c(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(u.arg)}var o;function a(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}this._invoke=a}function k(t,e,r){var n=l;return function(o,a){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return j()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var s=R(i,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=c(t,e,r);if("normal"===u.type){if(n=r.done?p:f,u.arg===m)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function R(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,R(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=c(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,m;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function S(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:j}}function j(){return{value:e,done:!0}}return v.prototype=x.constructor=g,g.constructor=v,g[s]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(F.prototype),F.prototype[i]=function(){return this},t.AsyncIterator=F,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new F(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(x),x[s]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=O,S.prototype={constructor:S,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(E),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return s.type="throw",s.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],s=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,m):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:O(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}}}]);
//# sourceMappingURL=mLogin_mRegister.b043e9d5.js.map