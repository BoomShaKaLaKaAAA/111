!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n=window.webpackJsonp;window.webpackJsonp=function(o,i){for(var a,s,c=0,u=[];c<o.length;c++)s=o[c],r[s]&&u.push.apply(u,r[s]),r[s]=0;for(a in i)e[a]=i[a];for(n&&n(o,i);u.length;)u.shift().call(null,t)};var o={},r={0:0};return t.e=function(e,n){if(0===r[e])return n.call(null,t);if(void 0!==r[e])r[e].push(n);else{r[e]=[n];var o=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.charset="utf-8",i.async=!0,i.src=t.p+""+({}[e]||e)+"."+{1:"016bb",2:"17038",3:"cdc6b",4:"0440c"}[e]+".chunk.js",o.appendChild(i)}},t.m=e,t.c=o,t.p="//s1.hdslb.com/bfs/static/log/report/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}var i=n(1),a=o(i),s=n(3),c=o(s),u=n(4),l=o(u),d=n(5),f=o(d),p=n(6),h=o(p),m=n(7),g=o(m);n(8);var w=function v(e){r(this,v);var t=this,o=e.sample,i=Math.random();return!(i>o)&&(e.divChangeTracker===!0&&n.e(1,function(e){var o=n(9),r=document.getElementById("prison"),i=o["default"];t.divTracker=new i(r)}),e.errorTracker===!0&&n.e(2,function(e){var o=n(10),r=o["default"];t.errorTracker=new r(window)}),e.scrollTracker===!0&&n.e(3,function(e){var o=n(11),r=o["default"];t.scrollTracker=new r(window)}),e.resourceTracker===!0&&n.e(4,function(e){var o=n(12),r=o["default"];t.resourceTracker=new r(window)}),this.loadTracker=new c["default"](window),this.eventTracker=new l["default"],this.pvTracker=new f["default"],this.fingerPrinting=new h["default"],this.fingerPrinting.createPrinting(),this.pvTracker.sendPV(),this.timer=new g["default"](1e3),void this.timer.register(a["default"],a["default"].checkTools,1))};!function(e){if(window.config){if(window.config.msgObjects)for(var t=window.config.msgObjects.split("|"),n=t,o=Array.isArray(n),r=0,n=o?n:n[Symbol.iterator]();;){var i;if(o){if(r>=n.length)break;i=n[r++]}else{if(r=n.next(),r.done)break;i=r.value}var s=i;window[s]&&a["default"].transporter(window[s])}var c=new w(window.config);e.observer=c}}(window)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}t.__esModule=!0;var i=n(2),a=o(i),s=function(){function e(){r(this,e),this.currentPool=[],this.tool=[],this.requestLimit=5,this.originTools=[],this.baseURL="//data.bilibili.com/log/web",this.config={loginId:"000005",spmid:"333.333.0.0",url:encodeURIComponent(window.location.href),size:(window.innerWidth||document.body.clientWidth)+"x"+(window.innerHeight||document.body.clientHeight),ztime:window.performance?window.performance.timing.responseStart:(new Date).getTime()},this.postConfig={referrer:document.referrer?encodeURIComponent(document.referrer):""},this.msgConfig={appear:{loginId:"000016"+(new Date).getTime(),url:encodeURIComponent(window.location.href),spm_id:"333.333.0.0",timestamp:(new Date).getTime(),browser_resolution:(window.innerWidth||document.body.clientWidth)+"x"+(window.innerHeight||document.body.clientHeight),ptype:(window.innerWidth||document.body.clientWidth)<750?2:1,msg:""},click:{loginId:"000017"+(new Date).getTime(),url:encodeURIComponent(window.location.href),spm_id:"333.333.0.0",target_url:"",timestamp:(new Date).getTime(),screenx:"",screeny:"",browser_resolution:(window.innerWidth||document.body.clientWidth)+"x"+(window.innerHeight||document.body.clientHeight),ptype:(window.innerWidth||document.body.clientWidth)<750?2:1,msg:""},pv:{loginId:"000014"+(new Date).getTime(),url:encodeURIComponent(window.location.href),refer_url:document.referrer?encodeURIComponent(document.referrer):"",spm_id:"333.333.0.0",timestamp:(new Date).getTime(),fts:this.getCookie("fts")?this.getCookie("fts"):"",browser_resolution:(window.innerWidth||document.body.clientWidth)+"x"+(window.innerHeight||document.body.clientHeight),ptype:(window.innerWidth||document.body.clientWidth)<750?2:1,msg:""},performance:{loginId:"000015"+(new Date).getTime(),url:encodeURIComponent(window.location.href),spm_id:"333.333.0.0",browser_resolution:(window.innerWidth||document.body.clientWidth)+"x"+(window.innerHeight||document.body.clientHeight),navigationStart:"",unloadEventStart:"",unloadEventEnd:"",redirectStart:"",redirectEnd:"",fetchStart:"",domainLookupStart:"",domainLookupEnd:"",connectStart:"",connectEnd:"",secureConnectionStart:"",requestStart:"",responseStart:"",responseEnd:"",domLoading:"",domInteractive:"",domContentLoadedEventStart:"",domContentLoadedEventEnd:"",domComplete:"",loadEventStart:"",loadEventEnd:"",ptype:(window.innerWidth||document.body.clientWidth)<750?2:1,msg:""}}}return e.prototype.getCookie=function(e){if(document.cookie.length>0){var t=document.cookie.indexOf(e+"=");if(t!=-1){t=t+e.length+1;var n=document.cookie.indexOf(";",t);return n==-1&&(n=document.cookie.length),unescape(document.cookie.substring(t,n))}}return""},e.prototype.setCookie=function(e,t,n){var o=new Date;return o.setDate(o.getDate()+n),document.cookie=e+"="+escape(t)+(null==n?"":";expires="+o.toGMTString()),t},e.prototype.transporter=function(e){this.originTools.push(e)},e.prototype.isEmptyObject=function(e){for(var t in e)return!1;return!0},e.prototype.checkTools=function(){if(this.originTools.length>0)for(var e=this.originTools,t=Array.isArray(e),n=0,e=t?e:e[Symbol.iterator]();;){var o;if(t){if(n>=e.length)break;o=e[n++]}else{if(n=e.next(),n.done)break;o=n.value}var r=o;for(var i in r){var a={};a.event=i,"number"==typeof r[i]?(a.epos="",a.etime="",a.num=r[i],a.msg=""):(a.epos="",a.etime="",a.num="",r[i]instanceof Object?a.msg=JSON.stringify(r[i]):a.msg=r[i]),delete r[i];var s={type:"selfDef",obj:a};this.receiveGroupMsg(s)}}if(0!==this.tool.length){var c=this.tool.length;c>this.requestLimit?(this.currentPool=this.tool.splice(0,this.requestLimit),this.sendGroupMsg()):c>0&&(this.currentPool=this.tool.splice(0,c),this.sendGroupMsg())}},e.prototype.receiveMsg=function(e){var t=e.type;e=e.obj;var n=this.assignObject(this.msgConfig[t],e);this.sendMsg(n)},e.prototype.assignObject=function(e,t){var n={};for(var o in e)n[o]=e[o];for(var o in t)void 0===n[o],void 0!==n[o]&&(n[o]=t[o]);return n},e.prototype.receiveGroupMsg=function(e){var t=e.type;e=e.obj;var n=this.assignObject(this.msgConfig[t],e);this.tool.push(n)},e.prototype.sendMsg=function(e){var t="";for(var n in e)t+=e[n]+"|";t=t.substring(0,t.length-1),t=t.replace(/\|/,""),a["default"].sendGetRequest(this.baseURL,t)},e.prototype.sendGroupMsg=function(){if(0!==this.currentPool.length)for(var e=this.currentPool,t=Array.isArray(e),n=0,e=t?e:e[Symbol.iterator]();;){var o;if(t){if(n>=e.length)break;o=e[n++]}else{if(n=e.next(),n.done)break;o=n.value}var r=o,i="";for(var s in r)i+=r[s]+"|";i=i.substring(0,i.length-1),i=i.replace(/\|/,""),a["default"].sendGetRequest(this.baseURL,i)}},e}();t["default"]=new s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}t.__esModule=!0;var o=function(){function e(){n(this,e)}return e.prototype.contructor=function(){this.ie8=this.isIE(8),this.ie9=this.isIE(9)},e.prototype.isIE=function(e){var t=document.createElement("b");return t.innerHTML="<!--[if IE "+e+"]><i></i><![endif]-->",1===t.getElementsByTagName("i").length},e.prototype.sendGetRequest=function(e,t,n){var o="?"+t;if(window.XDomainRequest){var r=new XDomainRequest;r&&(r.onload=function(){n&&"function"==typeof n&&n.call(window)},r.ontimeout=function(){},r.onerror=function(e){},r.open("get",e+o),r.send())}else{var i=new XMLHttpRequest;i.open("GET",e+o,!0),i.withCredentials=!0,i.onreadystatechange=function(e){if(4==this.readyState&&200==this.status){this.responseText;n&&"function"==typeof n&&n.call(window)}},i.ontimeout=function(e){},i.onerror=function(e){},i.send()}},e}();t["default"]=new o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}t.__esModule=!0;var i=n(1),a=o(i),s=function(){function e(t,n){r(this,e),this.win=t,this.onloaded(this.showRawPerformance)}return e.prototype.assignObject=function(e,t){var n={};for(var o in e)n[o]=e[o];for(var o in t)n[o]=t[o];return n},e.prototype.onloaded=function(e){var t=this;if(e.call(t),"function"==typeof window.onload){var n=window.onload;window.onload=function(){e.call(t),n.call(t.win)}}else window.onload=function(){e.call(t)}},e.prototype.showPerformance=function(){if(this.win.performance&&this.win.performance.timing){var e=this.win.performance.timing,t={};t.dns=e.domainLookupEnd-e.domainLookupStart,t.tcp=e.connectEnd-e.connectStart,t.responseTime=e.responseEnd-e.responseStart,t.domAnalysis=e.domComplete-e.domInteractive,t.whitePageTime=e.responseStart-e.navigationStart,t.domReady=e.domContentLoadedEventEnd-e.navigationStart,t.allLoadTime=e.loadEventStart-e.navigationStart,this.todo("performance",JSON.stringify(t))}},e.prototype.showRawPerformance=function(){if(this.win.performance&&this.win.performance.timing&&this.win.performance.timing.domComplete>0){var e=this.win.performance.timing;this.todo("performance",e)}},e.prototype.todo=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=(t[0],t[1]),r=this.assignObject({},o),i={type:"performance",obj:r};a["default"].receiveGroupMsg(i)},e}();t["default"]=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}t.__esModule=!0;var i=n(1),a=o(i),s=function(){function e(){r(this,e),this.legalContainer=["container-row","fcname","nav-menu","container-top"],this.legalList={click:!0,mouseover:!1},this.spmPrefix="333.333.";for(var t in this.legalList)this.legalList.hasOwnProperty(t)&&this.legalList[t]===!0&&this.anotherListener(t)}return e.prototype.checkContainer=function(e){for(var t=0;t<this.legalContainer.length;t++)if(e.indexOf(this.legalContainer[t])>=0)return!1;return!0},e.prototype.anotherListener=function(e){var t=document.body,n=this;t.addEventListener?t.addEventListener(e,n.eventCB(e),!1):t.attachEvent("on"+e,n.eventCB(e))},e.prototype.eventCB=function(e){var t=this;return function(n){var o;if(!n)var n=window.event;n.target?o=n.target:n.srcElement&&(o=n.srcElement),3==o.nodeType&&(o=o.parentNode);for(var r,i=o,a=[],s=!1;i.parentNode&&t.checkContainer(i.className)===!0;){var c=1,u=i;if(("A"===u.tagName||"a"===u.tagName&&!s)&&(s=!0,r=encodeURIComponent(u.getAttribute("href"))),s)if(u.previousElementSibling){for(;u=u.previousElementSibling;)c++;a.push(c)}else{for(;u=u.previousSibling;)1===u.nodeType&&c++;a.push(c)}i=i.parentNode}9!==i.nodeType&&s&&(a.reverse(),"fcname"===i.className?t.todo(e,o.id,r,n.screenX,n.screenY,t.spmPrefix+"sub"+(0!=a.length?"."+a.join("-"):"")):t.todo(e,o.id,r,n.screenX,n.screenY,t.spmPrefix+(null===i.getAttribute("area")?"navigationbar":""===i.getAttribute("area")?1e3:i.getAttribute("area"))+(0!=a.length?"."+a.join("-"):"")))}},e.prototype.todo=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var o=(t[0],t[1]),r=t[2],i=t[3],s=t[4],c=t[5],u={},l={};u.screenx=i,u.screeny=s,u.timestamp=Date.parse(new Date),u.spm_id=c,u.target_url=r,l.id=o,u.msg=JSON.stringify(l);var d={type:"click",obj:u};a["default"].receiveMsg(d)},e}();t["default"]=s},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}t.__esModule=!0;var i=n(1),a=o(i),s=function(){function e(){r(this,e)}return e.prototype.sendPV=function(){this.todo()},e.prototype.todo=function(){var e={};if(localStorage&&localStorage.index_user_setting){var t=JSON.parse(localStorage.index_user_setting).sort;e.msg=JSON.stringify({sort:t})}e.timestamp=(new Date).getTime();var n={type:"pv",obj:e};a["default"].receiveGroupMsg(n)},e}();t["default"]=s},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}t.__esModule=!0;var o=function(){function e(){n(this,e)}return e.prototype.setCookie=function(e,t){var n=30,o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),document.cookie=e+"="+escape(t)+";expires="+o.toGMTString()+";domain=.bilibili.com;path=/"},e.prototype.bin2hex=function(e){var t,n,o,r="";for(e+="",t=0,n=e.length;t<n;t++)o=e.charCodeAt(t).toString(16),r+=o.length<2?"0"+o:o;return r},e.prototype.getCookie=function(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null},e.prototype.createPrinting=function(){var e=this.getCookie("finger");if(!e)try{var t=document.createElement("canvas"),n=t.getContext("2d"),o="i am the finger-printing in this broswer";n.textBaseline="top",n.font="14px 'Arial'",n.textBaseline="tencent",n.fillStyle="#f60",n.fillRect(125,1,62,20),n.fillStyle="#069",n.fillText(o,2,15),n.fillStyle="rgba(102, 204, 0, 0.7)",n.fillText(o,4,17);var r=t.toDataURL().replace("data:image/png;base64,",""),i=atob(r),a=this.bin2hex(i.slice(-16,-12));this.setCookie("finger",a)}catch(e){}},e}();t["default"]=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!(e instanceof t))try{throw new TypeError("Cannot call a class as a function")}catch(e){}}t.__esModule=!0;var i=n(1),a=(o(i),function(){function e(t){r(this,e),this.interval=t,this.timer,this.loop=0,this.registerArr=[],this.startTimer()}return e.prototype.register=function(e,t,n){var o={};o.obj=e,o.method=t,o.freq=n,this.registerArr.push(o)},e.prototype.startTimer=function(){var e=this;this.timer=setInterval(function(){e.loop++;for(var t=e.registerArr,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var i=r;e.loop%i.freq!==0||i.obj.stopCheck||i.method.call(i.obj)}},e.interval)},e.prototype.unregister=function(e,t){for(var n=0;n<this.registerArr.length;n++)if(this.registerArr[n].obj===e&&this.registerArr[n].method===t){this.registerArr.splice(n,1);break}},e.prototype.stopTimer=function(){clearInterval(this.timer)},e}());t["default"]=a},function(e,t){"use strict";Date.now||(Date.now=function(){return(new Date).getTime()}),Array.isArray||(Array.isArray=function(e){return"[object Array]"===Object.prototype.toString.call(e)}),"performance"in window&&window.performance&&window.performance.setResourceTimingBufferSize&&performance.setResourceTimingBufferSize(300)}]);