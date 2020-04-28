(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var t=ca(this);function da(){da=function(){};
t.Symbol||(t.Symbol=ea)}
function fa(a,b){this.f=a;ba(this,"description",{configurable:!0,writable:!0,value:b})}
fa.prototype.toString=function(){return this.f};
var ea=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new fa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ha(){da();var a=t.Symbol.iterator;a||(a=t.Symbol.iterator=t.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ba(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ia(aa(this))}});
ha=function(){}}
function ia(a){ha();a={next:a};a[t.Symbol.iterator]=function(){return this};
return a}
function u(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var ma;a:{var na={a:!0},oa={};try{oa.__proto__=na;ma=oa.a;break a}catch(a){}ma=!1}la=ma?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var pa=la;
function qa(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(pa)pa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.A=b.prototype}
function v(a,b){if(b){for(var c=t,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ba(c,d,{configurable:!0,writable:!0,value:f})}}
function ra(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=ra(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=ra(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,l=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&l<e;)if(d[l++]!=b[h++])return!1;return h>=f}});
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var sa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||sa});
v("WeakMap",function(a){function b(g){this.f=(h+=Math.random()+1).toString();if(g){g=u(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
function c(){}
function d(g){var k=typeof g;return"object"===k&&null!==g||"function"===k}
function e(g){if(!w(g,l)){var k=new c;ba(g,l,{value:k})}}
function f(g){var k=Object[g];k&&(Object[g]=function(m){if(m instanceof c)return m;e(m);return k(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var g=Object.seal({}),k=Object.seal({}),m=new a([[g,2],[k,3]]);if(2!=m.get(g)||3!=m.get(k))return!1;m["delete"](g);m.set(k,4);return!m.has(g)&&4==m.get(k)}catch(n){return!1}}())return a;
var l="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(g,k){if(!d(g))throw Error("Invalid WeakMap key");e(g);if(!w(g,l))throw Error("WeakMap key fail: "+g);g[l][this.f]=k;return this};
b.prototype.get=function(g){return d(g)&&w(g,l)?g[l][this.f]:void 0};
b.prototype.has=function(g){return d(g)&&w(g,l)&&w(g[l],this.f)};
b.prototype["delete"]=function(g){return d(g)&&w(g,l)&&w(g[l],this.f)?delete g[l][this.f]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,g){var k=h.f;return ia(function(){if(k){for(;k.head!=h.f;)k=k.previous;for(;k.next!=k.head;)return k=k.next,{done:!1,value:g(k)};k=null}return{done:!0,value:void 0}})}
function d(h,g){var k=g&&typeof g;"object"==k||"function"==k?f.has(g)?k=f.get(g):(k=""+ ++l,f.set(g,k)):k="p_"+g;var m=h.g[k];if(m&&w(h.g,k))for(var n=0;n<m.length;n++){var p=m[n];if(g!==g&&p.key!==p.key||g===p.key)return{id:k,list:m,index:n,j:p}}return{id:k,list:m,index:-1,j:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=u(h);for(var g;!(g=h.next()).done;)g=g.value,this.set(g[0],g[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),g=new a(u([[h,"s"]]));if("s"!=g.get(h)||1!=g.size||g.get({x:4})||g.set({x:4},"t")!=g||2!=g.size)return!1;var k=g.entries(),m=k.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=k.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!k.next().done?!1:!0}catch(n){return!1}}())return a;
ha();var f=new WeakMap;e.prototype.set=function(h,g){h=0===h?0:h;var k=d(this,h);k.list||(k.list=this.g[k.id]=[]);k.j?k.j.value=g:(k.j={next:this.f,previous:this.f.previous,head:this.f,key:h,value:g},k.list.push(k.j),this.f.previous.next=k.j,this.f.previous=k.j,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.j&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.j.previous.next=h.j.next,h.j.next.previous=h.j.previous,h.j.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).j};
e.prototype.get=function(h){return(h=d(this,h).j)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,g){for(var k=this.entries(),m;!(m=k.next()).done;)m=m.value,h.call(g,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var l=0;return e});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)w(b,d)&&c.push([d,b[d]]);return c}});
v("Set",function(a){function b(c){this.f=new Map;if(c){c=u(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(u([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(l){return!1}}())return a;
ha();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==ra(this,b,"includes").indexOf(b,c||0)}});
var y=this||self;function z(a,b){for(var c=a.split("."),d=b||y,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ta(){}
function ua(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function va(a){var b=ua(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function wa(a){return"function"==ua(a)}
function xa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function ya(a){return Object.prototype.hasOwnProperty.call(a,za)&&a[za]||(a[za]=++Aa)}
var za="closure_uid_"+(1E9*Math.random()>>>0),Aa=0;function Ba(a,b,c){return a.call.apply(a.bind,arguments)}
function Ca(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=Ba:A=Ca;return A.apply(null,arguments)}
function Da(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var C=Date.now||function(){return+new Date};
function D(a,b){var c=a.split("."),d=y;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function E(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var Ea=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},F=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Fa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
F(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Ga(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ia(a){return Array.prototype.concat.apply([],arguments)}
function Ja(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ka(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(va(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var l=0;l<f;l++)a[e+l]=d[l]}else a.push(d)}}
;function La(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function Ma(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Na(a){var b=G,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Oa(a){for(var b in a)return!1;return!0}
function Pa(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function Qa(a){var b=ua(a);if("object"==b||"array"==b){if(wa(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=Qa(a[c]);return b}return a}
var Ra="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Sa(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ra.length;f++)c=Ra[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Ta(a,b){this.g=a===Ua&&b||"";this.f=Va}
var Va={},Ua={},Wa=new Ta(Ua,"");function Xa(a,b){this.g=a===Ya&&b||"";this.f=Za}
var Za={},Ya={};var $a=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ab=/&/g,bb=/</g,cb=/>/g,db=/"/g,eb=/'/g,fb=/\x00/g,gb=/[\x00&<>"']/;var hb;a:{var ib=y.navigator;if(ib){var jb=ib.userAgent;if(jb){hb=jb;break a}}hb=""}function H(a){return-1!=hb.indexOf(a)}
;function kb(){this.f="";this.g=lb}
var lb={};function mb(a){var b=new kb;b.f=a;return b}
mb("<!DOCTYPE html>");var nb=mb("");mb("<br>");function ob(a){var b=new Xa(Ya,Wa instanceof Ta&&Wa.constructor===Ta&&Wa.f===Va?Wa.g:"type_error:Const");a.src=(b instanceof Xa&&b.constructor===Xa&&b.f===Za?b.g:"type_error:TrustedResourceUrl").toString()}
;var pb=H("Opera"),qb=H("Trident")||H("MSIE"),rb=H("Edge"),sb=H("Gecko")&&!(-1!=hb.toLowerCase().indexOf("webkit")&&!H("Edge"))&&!(H("Trident")||H("MSIE"))&&!H("Edge"),tb=-1!=hb.toLowerCase().indexOf("webkit")&&!H("Edge");function ub(){var a=y.document;return a?a.documentMode:void 0}
var vb;a:{var wb="",xb=function(){var a=hb;if(sb)return/rv:([^\);]+)(\)|;)/.exec(a);if(rb)return/Edge\/([\d\.]+)/.exec(a);if(qb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(tb)return/WebKit\/(\S+)/.exec(a);if(pb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
xb&&(wb=xb?xb[1]:"");if(qb){var zb=ub();if(null!=zb&&zb>parseFloat(wb)){vb=String(zb);break a}}vb=wb}var Ab=vb,Bb;if(y.document&&qb){var Cb=ub();Bb=Cb?Cb:parseInt(Ab,10)||void 0}else Bb=void 0;var Db=Bb;var Eb={},Fb=null;var I=window;function Gb(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Hb[b]?b=Hb[b]:(b=String(b),Hb[b]||(c=/function\s+([^\(]+)/m.exec(b),Hb[b]=c?c[1]:"[Anonymous]"),b=Hb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Hb={};function Ib(a){this.f=a||{cookie:""}}
r=Ib.prototype;r.isEnabled=function(){return navigator.cookieEnabled};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ya;d=c.secure||!1;var f=c.domain||void 0;var l=c.path||void 0;var h=c.M}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";l=l?";path="+l:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(C()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+l+h+d+(null!=e?";samesite="+e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=$a(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{M:0,path:b,domain:c});return d};
r.isEmpty=function(){return!this.f.cookie};
r.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=$a(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Jb=new Ib("undefined"==typeof document?null:document);function Kb(a,b){this.width=a;this.height=b}
r=Kb.prototype;r.clone=function(){return new Kb(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.isEmpty=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Lb(a,b){var c,d;var e=document;e=b||e;if(e.querySelectorAll&&e.querySelector&&a)return e.querySelectorAll(a?"."+a:"");if(a&&e.getElementsByClassName){var f=e.getElementsByClassName(a);return f}f=e.getElementsByTagName("*");if(a){var l={};for(c=d=0;e=f[c];c++){var h=e.className,g;if(g="function"==typeof h.split)g=0<=Ea(h.split(/\s+/),a);g&&(l[d++]=e)}l.length=d;return l}return f}
function Mb(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Nb(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var Ob=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a.match(Ob)}
function Pb(a){return a?decodeURI(a):a}
function Qb(a){var b=J(a);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Rb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Rb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function Sb(a){var b=[],c;for(c in a)Rb(c,a[c],b);return b.join("&")}
var Tb=/#|$/;function Ub(a){var b=Vb;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Wb(){var a=[];Ub(function(b){a.push(b)});
return a}
var Vb={ga:"allow-forms",ha:"allow-modals",ia:"allow-orientation-lock",ja:"allow-pointer-lock",ka:"allow-popups",la:"allow-popups-to-escape-sandbox",ma:"allow-presentation",na:"allow-same-origin",oa:"allow-scripts",pa:"allow-top-navigation",qa:"allow-top-navigation-by-user-activation"},Xb=La(function(){return Wb()});
function Yb(){var a=Mb(),b={};F(Xb(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function Zb(){this.h=this.h;this.i=this.i}
Zb.prototype.h=!1;Zb.prototype.dispose=function(){this.h||(this.h=!0,this.H())};
Zb.prototype.H=function(){if(this.i)for(;this.i.length;)this.i.shift()()};/*
 Copyright (c) Microsoft Corporation. All rights reserved.
 Licensed under the Apache License, Version 2.0 (the "License"); you may not use
 this file except in compliance with the License. You may obtain a copy of the
 License at http://www.apache.org/licenses/LICENSE-2.0

 THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
 WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
 MERCHANTABLITY OR NON-INFRINGEMENT.

 See the Apache Version 2.0 License for specific language governing permissions
 and limitations under the License.
*/
var $b=(new Date).getTime();function ac(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"chrome-untrusted"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");
if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function bc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=k=0}
function b(n){for(var p=l,q=0;64>q;q+=4)p[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=p[q-3]^p[q-8]^p[q-14]^p[q-16],p[q]=(n<<1|n>>>31)&4294967295;n=e[0];var x=e[1],B=e[2],U=e[3],yb=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var ja=U^x&(B^U);var Ha=1518500249}else ja=x^B^U,Ha=1859775393;else 60>q?(ja=x&B|U&(x|B),Ha=2400959708):(ja=x^B^U,Ha=3395469782);ja=((n<<5|n>>>27)&4294967295)+ja+yb+Ha+p[q]&4294967295;yb=U;U=B;B=(x<<30|x>>>2)&4294967295;x=n;n=ja}e[0]=e[0]+n&4294967295;e[1]=e[1]+
x&4294967295;e[2]=e[2]+B&4294967295;e[3]=e[3]+U&4294967295;e[4]=e[4]+yb&4294967295}
function c(n,p){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],x=0,B=n.length;x<B;++x)q.push(n.charCodeAt(x));n=q}p||(p=n.length);q=0;if(0==k)for(;q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64;for(;q<p;)if(f[k++]=n[q++],m++,64==k)for(k=0,b(f);q+64<p;)b(n.slice(q,q+64)),q+=64,m+=64}
function d(){var n=[],p=8*m;56>k?c(h,56-k):c(h,64-(k-56));for(var q=63;56<=q;q--)f[q]=p&255,p>>>=8;b(f);for(q=p=0;5>q;q++)for(var x=24;0<=x;x-=8)n[p++]=e[q]>>x&255;return n}
for(var e=[],f=[],l=[],h=[128],g=1;64>g;++g)h[g]=0;var k,m;a();return{reset:a,update:c,digest:d,W:function(){for(var n=d(),p="",q=0;q<n.length;q++)p+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return p}}}
;function cc(a,b,c){var d=[],e=[];if(1==("array"==ua(c)?2:1))return e=[b,a],F(d,function(h){e.push(h)}),dc(e.join(" "));
var f=[],l=[];F(c,function(h){l.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];F(d,function(h){e.push(h)});
a=dc(e.join(" "));a=[c,a];0==l.length||a.push(l.join(""));return a.join("_")}
function dc(a){var b=bc();b.update(a);return b.W().toLowerCase()}
;function ec(a){var b=ac(String(y.location.href)),c;(c=y.__SAPISID||y.__APISID||y.__OVERRIDE_SID)?c=!0:(c=new Ib(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?y.__SAPISID:y.__APISID,c||(c=new Ib(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(y.location.href);return d&&c&&b?[b,cc(ac(d),c,a||null)].join(" "):null}return null}
;function fc(){this.g=[];this.f=-1}
fc.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
fc.prototype.get=function(a){return!!this.g[a]};
function gc(a){-1==a.f&&(a.f=Fa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function hc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
hc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};function ic(a){y.setTimeout(function(){throw a;},0)}
var jc;
function kc(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!H("Presto")&&(a=function(){var e=Mb();e.style.display="none";ob(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(nb instanceof kb&&nb.constructor===kb&&nb.g===lb?nb.f:"type_error:SafeHtml");e.close();var l="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=A(function(g){if(("*"==
h||g.origin==h)&&g.data==l)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(l,h)}}});
if("undefined"!==typeof a&&!H("Trident")&&!H("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.L;c.L=null;e()}};
return function(e){d.next={L:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function lc(){this.g=this.f=null}
var nc=new hc(function(){return new mc},function(a){a.reset()});
lc.prototype.add=function(a,b){var c=nc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
lc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function mc(){this.next=this.scope=this.f=null}
mc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
mc.prototype.reset=function(){this.next=this.scope=this.f=null};function oc(a){pc||qc();rc||(pc(),rc=!0);sc.add(a,void 0)}
var pc;function qc(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);pc=function(){a.then(tc)}}else pc=function(){var b=tc;
!wa(y.setImmediate)||y.Window&&y.Window.prototype&&!H("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(jc||(jc=kc()),jc(b)):y.setImmediate(b)}}
var rc=!1,sc=new lc;function tc(){for(var a;a=sc.remove();){try{a.f.call(a.scope)}catch(c){ic(c)}var b=nc;b.i(a);100>b.g&&(b.g++,a.next=b.f,b.f=a)}rc=!1}
;function uc(){this.g=-1}
;function vc(){this.g=64;this.f=[];this.m=[];this.v=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.l=this.h=0;this.reset()}
E(vc,uc);vc.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.l=this.h=0};
function wc(a,b,c){c||(c=0);var d=a.v;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var l=a.f[2],h=a.f[3],g=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(l^h);var k=1518500249}else f=c^l^h,k=1859775393;else 60>e?(f=c&l|h&(c|l),k=2400959708):
(f=c^l^h,k=3395469782);f=(b<<5|b>>>27)+f+g+k+d[e]&4294967295;g=h;h=l;l=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+l&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+g&4294967295}
vc.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.m,f=this.h;d<b;){if(0==f)for(;d<=c;)wc(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){wc(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){wc(this,e);f=0;break}}this.h=f;this.l+=b}};
vc.prototype.digest=function(){var a=[],b=8*this.l;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.m[c]=b&255,b/=256;wc(this,this.m);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};var xc="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function K(){}
K.prototype.next=function(){throw xc;};
K.prototype.u=function(){return this};
function yc(a){if(a instanceof K)return a;if("function"==typeof a.u)return a.u(!1);if(va(a)){var b=0,c=new K;c.next=function(){for(;;){if(b>=a.length)throw xc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function zc(a,b){if(va(a))try{F(a,b,void 0)}catch(c){if(c!==xc)throw c;}else{a=yc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==xc)throw c;}}}
function Ac(a){if(va(a))return Ja(a);a=yc(a);var b=[];zc(a,function(c){b.push(c)});
return b}
;function Bc(a,b){this.h={};this.f=[];this.i=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Bc)for(c=Cc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Cc(a){Dc(a);return a.f.concat()}
r=Bc.prototype;r.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Ec;Dc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Ec(a,b){return a===b}
r.isEmpty=function(){return 0==this.g};
r.clear=function(){this.h={};this.i=this.g=this.f.length=0};
r.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.i++,this.f.length>2*this.g&&Dc(this),!0):!1};
function Dc(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
r.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
r.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=Cc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new Bc(this)};
r.u=function(a){Dc(this);var b=0,c=this.i,d=this,e=new K;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw xc;var f=d.f[b++];return a?f:d.h[f]};
return e};var Fc=y.JSON.stringify;function L(a){Zb.call(this);this.v=1;this.l=[];this.m=0;this.f=[];this.g={};this.B=!!a}
E(L,Zb);r=L.prototype;r.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.v;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.v=e+3;d.push(e);return e};
function Gc(a,b,c){var d=Hc;if(a=d.g[a]){var e=d.f;(a=Ga(a,function(f){return e[f+1]==b&&e[f+2]==c}))&&d.D(a)}}
r.D=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.m)this.l.push(a),this.f[a+1]=ta;else{if(c){var d=Ea(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
r.J=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.B)for(e=0;e<c.length;e++){var l=c[e];Ic(this.f[l+1],this.f[l+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f;e++)l=c[e],this.f[l+1].apply(this.f[l+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.D(c)}}return 0!=e}return!1};
function Ic(a,b,c){oc(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.g[a];b&&(F(b,this.D,this),delete this.g[a])}else this.f.length=0,this.g={}};
r.H=function(){L.A.H.call(this);this.clear();this.l.length=0};function Jc(a){this.f=a}
Jc.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Fc(b))};
Jc.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Jc.prototype.remove=function(a){this.f.remove(a)};function Kc(a){this.f=a}
E(Kc,Jc);function Lc(a){this.data=a}
function Mc(a){return void 0===a||a instanceof Lc?a:new Lc(a)}
Kc.prototype.set=function(a,b){Kc.A.set.call(this,a,Mc(b))};
Kc.prototype.g=function(a){a=Kc.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Kc.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function M(a){this.f=a}
E(M,Kc);M.prototype.set=function(a,b,c){if(b=Mc(b)){if(c){if(c<C()){M.prototype.remove.call(this,a);return}b.expiration=c}b.creation=C()}M.A.set.call(this,a,b)};
M.prototype.g=function(a){var b=M.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<C()||c&&c>C())M.prototype.remove.call(this,a);else return b}};function Nc(){}
;function Oc(){}
E(Oc,Nc);Oc.prototype.clear=function(){var a=Ac(this.u(!0)),b=this;F(a,function(c){b.remove(c)})};function Pc(a){this.f=a}
E(Pc,Oc);r=Pc.prototype;r.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
r.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeItem(a)};
r.u=function(a){var b=0,c=this.f,d=new K;d.next=function(){if(b>=c.length)throw xc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){this.f.clear()};
r.key=function(a){return this.f.key(a)};function Qc(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(Qc,Pc);function Rc(a,b){this.g=a;this.f=null;var c;if(c=qb)c=!(9<=Number(Db));if(c){Sc||(Sc=new Bc);this.f=Sc.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Sc.set(a,this.f));try{this.f.load(this.g)}catch(d){this.f=null}}}
E(Rc,Oc);var Tc={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Sc=null;function Uc(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Tc[b]})}
r=Rc.prototype;r.isAvailable=function(){return!!this.f};
r.set=function(a,b){this.f.setAttribute(Uc(a),b);Vc(this)};
r.get=function(a){a=this.f.getAttribute(Uc(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.f.removeAttribute(Uc(a));Vc(this)};
r.u=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new K;d.next=function(){if(b>=c.length)throw xc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
r.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Vc(this)};
function Vc(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Wc(a,b){this.g=a;this.f=b+"::"}
E(Wc,Oc);Wc.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Wc.prototype.get=function(a){return this.g.get(this.f+a)};
Wc.prototype.remove=function(a){this.g.remove(this.f+a)};
Wc.prototype.u=function(a){var b=this.g.u(!0),c=this,d=new K;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var Xc=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};D("yt.config_",Xc);function Yc(a){var b=arguments;1<b.length?Xc[b[0]]=b[1]:1===b.length&&Object.assign(Xc,b[0])}
function N(a,b){return a in Xc?Xc[a]:b}
;var Zc=[];function $c(a){Zc.forEach(function(b){return b(a)})}
function ad(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){bd(b),$c(b)}}:a}
function bd(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),Yc("ERRORS",b))}
function cd(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=N("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),Yc("ERRORS",b))}
;var dd=0;D("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++dd});var ed={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function fd(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in ed||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
fd.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
fd.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
fd.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var G=z("ytEventsEventsListeners")||{};D("ytEventsEventsListeners",G);var gd=z("ytEventsEventsCounter")||{count:0};D("ytEventsEventsCounter",gd);
function hd(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Na(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,l=xa(e[4])&&xa(d)&&Pa(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||l)})}
function id(a){a&&("string"==typeof a&&(a=[a]),F(a,function(b){if(b in G){var c=G[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?jd()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete G[b]}}))}
var jd=La(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function kd(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=hd(a,b,c,d);if(!e){e=++gd.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var l=f?function(h){h=new fd(h);if(!Nb(h.relatedTarget,function(g){return g==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new fd(h);
h.currentTarget=a;return c.call(a,h)};
l=ad(l);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),jd()||"boolean"===typeof d?a.addEventListener(b,l,d):a.addEventListener(b,l,!!d.capture)):a.attachEvent("on"+b,l);G[e]=[a,b,c,l,d]}}}
;function ld(a,b){wa(a)&&(a=ad(a));return window.setTimeout(a,b)}
function md(a){wa(a)&&(a=ad(a));return window.setInterval(a,250)}
function O(a){window.clearTimeout(a)}
;function nd(a){var b=[];Ma(a,function(c,d){var e=encodeURIComponent(String(d)),f;"array"==ua(c)?f=c:f=[c];F(f,function(l){""==l?b.push(e):b.push(e+"="+encodeURIComponent(String(l)))})});
return b.join("&")}
function od(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),l=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==ua(b[f])?Ka(b[f],l):b[f]=[b[f],l]:b[f]=l}catch(g){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};bd(h)}}}return b}
function pd(a,b){return qd(a,b||{},!0)}
function qd(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=od(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=Sb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var rd={};function sd(a){return rd[a]||(rd[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var td={},ud=[],Hc=new L,vd={};function wd(){for(var a=u(ud),b=a.next();!b.done;b=a.next())b=b.value,b()}
function xd(a,b){b||(b=document);var c=Ja(b.getElementsByTagName("yt:"+a)),d="yt-"+a,e=b||document;d=Ja(e.querySelectorAll&&e.querySelector?e.querySelectorAll("."+d):Lb(d,b));return Ia(c,d)}
function P(a,b){var c;"yt:"==a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[sd(b)]:a.getAttribute("data-"+b):null;return c}
function yd(a,b){Hc.J.apply(Hc,arguments)}
;function zd(a){this.g=a||{};this.h=this.f=!1;a=document.getElementById("www-widgetapi-script");if(this.f=!!("https:"==document.location.protocol||a&&0==a.src.indexOf("https:"))){a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.replace("http://","https://"))}}
function Q(a,b){for(var c=[a.g,window.YTConfig||{}],d=0;d<c.length;d++){var e=c[d][b];if(void 0!=e)return e}return null}
function Ad(a,b,c){Bd||(Bd={},kd(window,"message",A(a.i,a)));Bd[c]=b}
zd.prototype.i=function(a){if(a.origin==Q(this,"host")||a.origin==Q(this,"host").replace(/^http:/,"https:")){try{var b=JSON.parse(a.data)}catch(c){return}this.h=!0;this.f||0!=a.origin.indexOf("https:")||(this.f=!0);if(a=Bd[b.id])a.B=!0,a.B&&(F(a.v,a.K,a),a.v.length=0),a.S(b)}};
var Bd=null;function R(a){a=Cd(a);return"string"===typeof a&&"false"===a?!1:!!a}
function Dd(a,b){var c=Cd(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function Cd(a){var b=N("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:N("EXPERIMENT_FLAGS",{})[a]}
;var Ed=z("ytPubsubPubsubInstance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.D;L.prototype.publish=L.prototype.J;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",Ed);D("ytPubsubPubsubSubscribedKeys",z("ytPubsubPubsubSubscribedKeys")||{});D("ytPubsubPubsubTopicToKeys",z("ytPubsubPubsubTopicToKeys")||{});D("ytPubsubPubsubIsSynchronous",z("ytPubsubPubsubIsSynchronous")||{});var S=window,T=S.ytcsi&&S.ytcsi.now?S.ytcsi.now:S.performance&&S.performance.timing&&S.performance.now&&S.performance.timing.navigationStart?function(){return S.performance.timing.navigationStart+S.performance.now()}:function(){return(new Date).getTime()};var Fd=Dd("initial_gel_batch_timeout",1E3),Gd=Math.pow(2,16)-1,Hd=null,Id=0,Jd=void 0,Kd=0,Ld=0,Md=0,Nd=!0,Od=z("ytLoggingTransportLogPayloadsQueue_")||{};D("ytLoggingTransportLogPayloadsQueue_",Od);var Pd=z("ytLoggingTransportGELQueue_")||new Map;D("ytLoggingTransportGELQueue_",Pd);var Qd=z("ytLoggingTransportTokensToCttTargetIds_")||{};D("ytLoggingTransportTokensToCttTargetIds_",Qd);
function Rd(){O(Kd);O(Ld);Ld=0;Jd&&Jd.isReady()?(Sd(Pd),"log_event"in Od&&Sd(Object.entries(Od.log_event)),Pd.clear(),delete Od.log_event):Td()}
function Td(){R("web_gel_timeout_cap")&&!Ld&&(Ld=ld(Rd,6E4));O(Kd);var a=N("LOGGING_BATCH_TIMEOUT",Dd("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Nd&&(a=Fd);Kd=ld(Rd,a)}
function Sd(a){var b=Jd,c=Math.round(T());a=u(a);for(var d=a.next();!d.done;d=a.next()){var e=u(d.value);d=e.next().value;var f=e.next().value;e=Qa({context:Ud(b.f||Vd())});e.events=f;(f=Qd[d])&&Wd(e,d,f);delete Qd[d];Xd(e,c);Yd(b,"log_event",e,{retry:!0,onSuccess:function(){Id=Math.round(T()-c)}});
Nd=!1}}
function Xd(a,b){a.requestTimeMs=String(b);R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);var c=N("EVENT_ID",void 0);if(c){var d=N("BATCH_CLIENT_COUNTER",void 0)||0;!d&&R("web_client_counter_random_seed")&&(d=Math.floor(Math.random()*Gd/2));d++;d>Gd&&(d=1);Yc("BATCH_CLIENT_COUNTER",d);c={serializedEventId:c,clientCounter:String(d)};a.serializedClientEventId=c;Hd&&Id&&R("log_gel_rtt_web")&&(a.previousBatchInfo={serializedClientEventId:Hd,roundtripMs:String(Id)});Hd=c;Id=0}}
function Wd(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
;var Zd=Dd("initial_gel_batch_timeout",1E3),$d=Math.pow(2,16)-1,ae=null,be=0,ce={log_event:"events",log_interaction:"interactions"},de=new Set(["log_event"]),ee={},fe=0,ge=0,he=0,ie=!0,V=z("ytLoggingTransportLogPayloadsQueue_")||{};D("ytLoggingTransportLogPayloadsQueue_",V);var je=z("ytLoggingTransportTokensToCttTargetIds_")||{};D("ytLoggingTransportTokensToCttTargetIds_",je);
function ke(){if(R("use_typescript_transport"))Rd();else if(O(fe),O(ge),ge=0,!Oa(V)){for(var a in V){var b=ee[a];if(b&&b.isReady()){var c=void 0,d=a,e=ce[d],f=Math.round(T());for(c in V[d]){var l=Qa({context:Ud(b.f||Vd())});l[e]=le(d,c);var h=je[c];if(h)a:{var g=l,k=c;if(h.videoId)var m="VIDEO";else if(h.playlistId)m="PLAYLIST";else break a;g.credentialTransferTokenTargetId=h;g.context=g.context||{};g.context.user=g.context.user||{};g.context.user.credentialTransferTokens=[{token:k,scope:m}]}delete je[c];
h=l;h.requestTimeMs=f;R("unsplit_gel_payloads_in_logs")&&(h.unsplitGelPayloadsInLogs=!0);if(m=N("EVENT_ID",void 0))g=N("BATCH_CLIENT_COUNTER",void 0)||0,!g&&R("web_client_counter_random_seed")&&(g=Math.floor(Math.random()*$d/2)),g++,g>$d&&(g=1),Yc("BATCH_CLIENT_COUNTER",g),m={serializedEventId:m,clientCounter:g},h.serializedClientEventId=m,ae&&be&&R("log_gel_rtt_web")&&(h.previousBatchInfo={serializedClientEventId:ae,roundtripMs:be}),ae=m,be=0;Yd(b,d,l,{retry:de.has(d),onSuccess:Da(me,T())})}delete V[a];
ie=!1}}Oa(V)||ne()}}
function ne(){R("web_gel_timeout_cap")&&!ge&&(ge=ld(ke,6E4));O(fe);var a=N("LOGGING_BATCH_TIMEOUT",Dd("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&ie&&(a=Zd);fe=ld(ke,a)}
function le(a,b){b=void 0===b?"":b;V[a]=V[a]||{};V[a][b]=V[a][b]||[];return V[a][b]}
function me(a){be=Math.round(T()-a)}
;function oe(){}
function pe(a){var b=5E3;isNaN(b)&&(b=void 0);var c=z("yt.scheduler.instance.addJob");c?c(a,0,b):void 0===b?a():ld(a,b||0)}
;function W(){}
qa(W,oe);W.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
W.f=void 0;W.g=function(){W.f||(W.f=new W)};
W.g();var qe=z("ytLoggingGelSequenceIdObj_")||{};D("ytLoggingGelSequenceIdObj_",qe);function re(a){var b=se;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(te(b),ue(b));b.ca_type="image";a&&(b.bid=a);return b}
function te(a){var b={};b.dt=$b;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function ue(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var l=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,l,h];c=a.f.top;try{var g=(c||window).document,k="CSS1Compat"==g.compatMode?g.documentElement:g.body;var m=(new Kb(k.clientWidth,k.clientHeight)).round()}catch(n){m=new Kb(-12245933,-12245933)}g=m;m={};k=new fc;y.SVGElement&&
y.document.createElementNS&&k.set(0);c=Yb();c["allow-top-navigation-by-user-activation"]&&k.set(1);c["allow-popups-to-escape-sandbox"]&&k.set(2);y.crypto&&y.crypto.subtle&&k.set(3);y.TextDecoder&&y.TextEncoder&&k.set(4);k=gc(k);m.bc=k;m.bih=g.height;m.biw=g.width;m.brdim=b.join();a=a.g;return m.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,m.wgl=!!I.WebGLRenderingContext,m}
var se=new function(){var a=window.document;this.f=window;this.g=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return nd(re(a))});C();var ve=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function we(){if(!ve)return null;var a=ve();return"open"in a?a:null}
;var xe={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ye="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
ze=!1;
function Ae(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=J(a)[1]||null,e=Pb(J(a)[3]||null);d&&e?(d=c,c=J(a),d=J(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?Pb(J(c)[3]||null)==e&&(Number(J(c)[4]||null)||null)==(Number(J(a)[4]||null)||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in xe)e=N(xe[f]),!e||!c&&!Be(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Be(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Be(a,"X-YouTube-Time-Zone"))&&(f=
"undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Be(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=nd(re(void 0));return b}
function Ce(a){var b=window.location.search,c=Pb(J(a)[3]||null),d=Pb(J(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=od(b),f={};F(ye,function(l){e[l]&&(f[l]=e[l])});
return qd(a,f||{},!1)}
function Be(a,b){var c=N("CORS_HEADER_WHITELIST")||{},d=Pb(J(a)[3]||null);return d?(c=c[d])?0<=Ea(c,b):!1:!0}
function De(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Ee(a,b);var d=Fe(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(l){if(!e){e=!0;f&&O(f);var h=l.ok,g=function(k){k=k||{};var m=b.context||y;h?b.onSuccess&&b.onSuccess.call(m,k,l):b.onError&&b.onError.call(m,k,l);b.I&&b.I.call(m,k,l)};
"JSON"==(b.format||"JSON")&&(h||400<=l.status&&500>l.status)?l.json().then(g,function(){g(null)}):g(null)}});
b.ea&&0<b.timeout&&(f=ld(function(){e||(e=!0,O(f))},b.timeout))}else Ge(a,b)}
function Ge(a,b){var c=b.format||"JSON";a=Ee(a,b);var d=Fe(a,b),e=!1,f,l=He(a,function(h){if(!e){e=!0;f&&O(f);a:switch(h&&"status"in h?h.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var g=!0;break a;default:g=!1}var k=null,m=400<=h.status&&500>h.status,n=500<=h.status&&600>h.status;if(g||m||n)k=Ie(c,h,b.ta);if(g)a:if(h&&204==h.status)g=!0;else{switch(c){case "XML":g=0==parseInt(k&&k.return_code,10);break a;case "RAW":g=!0;break a}g=!!k}k=k||{};m=b.context||y;
g?b.onSuccess&&b.onSuccess.call(m,h,k):b.onError&&b.onError.call(m,h,k);b.I&&b.I.call(m,h,k)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.O&&0<b.timeout&&(f=ld(function(){e||(e=!0,l.abort(),O(f))},b.timeout))}
function Ee(a,b){b.wa&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=N("XSRF_FIELD_NAME",void 0),d=b.fa;d&&(d[c]&&delete d[c],a=pd(a,d));return a}
function Fe(a,b){var c=N("XSRF_FIELD_NAME",void 0),d=N("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.o,l=N("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.va||Pb(J(a)[3]||null)&&!b.withCredentials&&Pb(J(a)[3]||null)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.o&&b.o[l]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=od(e),Sa(e,f),e=b.R&&"JSON"==b.R?JSON.stringify(e):Sb(e));f=e||f&&!Oa(f);!ze&&f&&"POST"!=b.method&&(ze=!0,bd(Error("AJAX request with postData should use POST")));
return e}
function Ie(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Je(b):null)d={},F(b.getElementsByTagName("*"),function(e){d[e.tagName]=Ke(e)})}c&&Le(d);
return d}
function Le(a){if(xa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=mb(a[b]);a[c]=d}else Le(a[b])}}
function Je(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ke(a){var b="";F(a.childNodes,function(c){b+=c.nodeValue});
return b}
function He(a,b,c,d,e,f,l){function h(){4==(g&&"readyState"in g?g.readyState:0)&&b&&ad(b)(g)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var g=we();if(!g)return null;"onloadend"in g?g.addEventListener("loadend",h,!1):g.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=Ce(a));g.open(c,a,!0);f&&(g.responseType=f);l&&(g.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Ae(a,e))for(var k in e)g.setRequestHeader(k,e[k]),"content-type"==k.toLowerCase()&&(c=!1);c&&g.setRequestHeader("Content-Type","application/x-www-form-urlencoded");g.send(d);
return g}
;function Me(){for(var a={},b=u(Object.entries(od(N("DEVICE","")))),c=b.next();!c.done;c=b.next()){var d=u(c.value);c=d.next().value;d=d.next().value;"cbrand"===c?a.deviceMake=d:"cmodel"===c?a.deviceModel=d:"cbr"===c?a.browserName=d:"cbrver"===c?a.browserVersion=d:"cos"===c?a.osName=d:"cosver"===c?a.osVersion=d:"cplatform"===c&&(a.platform=d)}return a}
;function Ne(){return"INNERTUBE_API_KEY"in Xc&&"INNERTUBE_API_VERSION"in Xc}
function Vd(){return{innertubeApiKey:N("INNERTUBE_API_KEY",void 0),innertubeApiVersion:N("INNERTUBE_API_VERSION",void 0),X:N("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Y:N("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:N("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),aa:N("INNERTUBE_CONTEXT_HL",void 0),Z:N("INNERTUBE_CONTEXT_GL",void 0),ba:N("INNERTUBE_HOST_OVERRIDE",void 0)||"",ca:!!N("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Ud(a){a={client:{hl:a.aa,gl:a.Z,clientName:a.Y,clientVersion:a.innertubeContextClientVersion,configInfo:a.X}};var b=window.devicePixelRatio;b&&1!=b&&(a.client.screenDensityFloat=String(b));b=N("EXPERIMENTS_TOKEN","");""!==b&&(a.client.experimentsToken=b);b=[];var c=N("EXPERIMENTS_FORCED_FLAGS",{});for(d in c)b.push({key:d,value:String(c[d])});var d=N("EXPERIMENT_FLAGS",{});for(var e in d)e.startsWith("force_")&&void 0===c[e]&&b.push({key:e,value:String(d[e])});0<b.length&&(a.request={internalExperimentFlags:b});
N("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(a.user={onBehalfOfUser:N("DELEGATED_SESSION_ID")});R("enable_device_forwarding_from_xhr_client")&&(a.client=Object.assign(a.client,Me()));return a}
function Oe(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||N("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.sa||N("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().ra:b=ec([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=N("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=N("DELEGATED_SESSION_ID")));return d}
function Pe(a){a=Object.assign({},a);delete a.Authorization;var b=ec();if(b){var c=new vc;c.update(N("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);if(!Fb){Fb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var l=d.concat(e[f].split(""));Eb[f]=l;for(var h=0;h<l.length;h++){var g=l[h];void 0===Fb[g]&&(Fb[g]=h)}}}c=Eb[c];d=[];for(e=0;e<b.length;e+=3){var k=b[e],m=(f=e+1<b.length)?b[e+1]:
0;g=(l=e+2<b.length)?b[e+2]:0;h=k>>2;k=(k&3)<<4|m>>4;m=(m&15)<<2|g>>6;g&=63;l||(g=64,f||(m=64));d.push(c[h],c[k],c[m]||"",c[g]||"")}a.hash=d.join("")}return a}
;function Qe(){var a=new Qc;(a=a.isAvailable()?new Wc(a,"yt.innertube"):null)||(a=new Rc("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new M(a):null;this.g=document.domain||window.location.hostname}
Qe.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,C()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Fc(b))}catch(f){return}else e=escape(b);b=this.g;Jb.set(""+a,e,{M:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
Qe.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Jb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Qe.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Jb.remove(""+a,"/",void 0===b?"youtube.com":b)};var X=new Qe;function Re(a,b,c,d){if(d)return null;d=X.get("nextId",!0)||1;var e=X.get("requests",!0)||{};e[d]={method:a,request:b,authState:Pe(c),requestTime:Math.round(T())};X.set("nextId",d+1,86400,!0);X.set("requests",e,86400,!0);return d}
function Se(a){var b=X.get("requests",!0)||{};delete b[a];X.set("requests",b,86400,!0)}
function Te(a){var b=X.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Pe(Oe(!1));Pa(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),Yd(a,d.method,e,{}));delete b[c]}}X.set("requests",b,86400,!0)}}
;function Ue(a){var b=this;this.f=null;a?this.f=a:Ne()&&(this.f=Vd());pe(function(){Te(b)})}
Ue.prototype.isReady=function(){!this.f&&Ne()&&(this.f=Vd());return!!this.f};
function Yd(a,b,c,d){!N("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&cd(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",o:c,R:"JSON",O:function(){},
ea:d.O,onSuccess:function(p,q){if(d.onSuccess)d.onSuccess(q)},
N:function(p){if(d.onSuccess)d.onSuccess(p)},
onError:function(p,q){if(d.onError)d.onError(q)},
xa:function(p){if(d.onError)d.onError(p)},
timeout:d.timeout,withCredentials:!0},f="",l=a.f.ba;l&&(f=l);l=a.f.ca||!1;var h=Oe(l,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var g=pd(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),k;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(k=Re(b,c,h,l))){var m=e.onSuccess,n=e.N;e.onSuccess=function(p,q){Se(k);m(p,q)};
c.N=function(p,q){Se(k);n(p,q)}}try{R("use_fetch_for_op_xhr")?De(g,e):(e.method="POST",e.o||(e.o={}),Ge(g,e))}catch(p){if("InvalidAccessError"==p)k&&(Se(k),k=0),cd(Error("An extension is blocking network request."));
else throw p;}k&&pe(function(){Te(a)})}
;var Ve=new Set,We=0;function Xe(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Y(a,b,c){this.m=this.f=this.g=null;this.l=ya(this);this.h=0;this.B=!1;this.v=[];this.i=null;this.T=c;this.V={};c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"==a.tagName.toLowerCase(),b.host||(b.host=c?Qb(a.src):"https://www.youtube.com"),this.g=new zd(b),c||(b=Ye(this,a),this.m=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.f=a,this.f.id||(this.f.id="widget"+ya(this.f)),td[this.f.id]=this,window.postMessage){this.i=new L;Ze(this);b=Q(this.g,"events");for(var d in b)b.hasOwnProperty(d)&&
this.addEventListener(d,b[d]);for(var e in vd)$e(this,e)}}
r=Y.prototype;r.setSize=function(a,b){this.f.width=a;this.f.height=b;return this};
r.da=function(){return this.f};
r.S=function(a){this.C(a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"==typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.i.subscribe(a,c);af(this,a);return this};
function $e(a,b){var c=b.split(".");if(2==c.length){var d=c[1];a.T==c[0]&&af(a,d)}}
r.destroy=function(){this.f.id&&(td[this.f.id]=null);var a=this.i;a&&"function"==typeof a.dispose&&a.dispose();if(this.m){a=this.f;var b=a.parentNode;b&&b.replaceChild(this.m,a)}else(a=this.f)&&a.parentNode&&a.parentNode.removeChild(a);Bd&&(Bd[this.l]=null);this.g=null;a=this.f;for(var c in G)G[c][0]==a&&id(c);this.m=this.f=null};
r.F=function(){return{}};
function bf(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.B?a.K(b):a.v.push(b)}
r.C=function(a,b){if(!this.i.h){var c={target:this,data:b};this.i.J(a,c);yd(this.T+"."+a,c)}};
function Ye(a,b){for(var c=document.createElement("iframe"),d=b.attributes,e=0,f=d.length;e<f;e++){var l=d[e].value;null!=l&&""!=l&&"null"!=l&&c.setAttribute(d[e].name,l)}c.setAttribute("frameBorder",0);c.setAttribute("allowfullscreen",1);c.setAttribute("allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");c.setAttribute("title","YouTube "+Q(a.g,"title"));(d=Q(a.g,"width"))&&c.setAttribute("width",d);(d=Q(a.g,"height"))&&c.setAttribute("height",d);var h=a.F();h.enablejsapi=
window.postMessage?1:0;window.location.host&&(h.origin=window.location.protocol+"//"+window.location.host);h.widgetid=a.l;window.location.href&&F(["debugjs","debugcss"],function(g){var k=window.location.href;var m=k.search(Tb);b:{var n=0;for(var p=g.length;0<=(n=k.indexOf(g,n))&&n<m;){var q=k.charCodeAt(n-1);if(38==q||63==q)if(q=k.charCodeAt(n+p),!q||61==q||38==q||35==q)break b;n+=p+1}n=-1}if(0>n)k=null;else{p=k.indexOf("&",n);if(0>p||p>m)p=m;n+=g.length+1;k=decodeURIComponent(k.substr(n,p-n).replace(/\+/g,
" "))}null!==k&&(h[g]=k)});
c.src=Q(a.g,"host")+a.G()+"?"+Sb(h);return c}
r.P=function(){this.f&&this.f.contentWindow?this.K({event:"listening"}):window.clearInterval(this.h)};
function Ze(a){Ad(a.g,a,a.l);a.h=md(A(a.P,a));kd(a.f,"load",A(function(){window.clearInterval(this.h);this.h=md(A(this.P,this))},a))}
function af(a,b){a.V[b]||(a.V[b]=!0,bf(a,"addEventListener",[b]))}
r.K=function(a){a.id=this.l;a.channel="widget";a=Fc(a);var b=this.g;var c=Qb(this.f.src||"");b=0==c.indexOf("https:")?[c]:b.f?[c.replace("http:","https:")]:b.h?[c]:[c,c.replace("http:","https:")];if(this.f.contentWindow)for(c=0;c<b.length;c++)try{this.f.contentWindow.postMessage(a,b[c])}catch(B){if(B.name&&"SyntaxError"==B.name){if(!(B.message&&0<B.message.indexOf("target origin ''"))){var d=void 0,e=void 0,f=B;e=void 0===e?{}:e;e.name=N("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=N("INNERTUBE_CONTEXT_CLIENT_VERSION",
void 0);var l=e||{};e="WARNING";e=void 0===e?"ERROR":e;var h=window&&window.yterr||!1;if(f&&h&&!(5<=We)){if(R("console_log_js_exceptions")){h=f;var g=[];g.push("Name: "+h.name);g.push("Message: "+h.message);h.hasOwnProperty("params")&&g.push("Error Params: "+JSON.stringify(h.params));g.push("File name: "+h.fileName);g.push("Stacktrace: "+h.stack);window.console.log(g.join("\n"),h)}if(0!==f.f){h=f.g;g=f.columnNumber;if(f.args&&f.args.length){var k=0;for(d=0;d<f.args.length;d++){var m=f.args[d],n="params."+
d;k+=n.length;if(m)if(Array.isArray(m)){var p=m;m=n;n=l;for(var q=0;q<p.length&&!(p[q]&&(k+=Xe(q,p[q],m,n),500<k));q++);}else if("object"===typeof m)for(p in p=void 0,q=l,m){if(m[p]&&(k+=Xe(p,m[p],n,q),500<k))break}else l[n]=String(JSON.stringify(m)).substring(0,500),k+=l[n].length;else l[n]=String(JSON.stringify(m)).substring(0,500),k+=l[n].length;if(500<=k)break}}else if(f.hasOwnProperty("params"))if(k=f.params,"object"===typeof f.params)for(d in p=0,k){if(k[d]&&(m="params."+d,n=String(JSON.stringify(k[d])).substr(0,
500),l[m]=n,p+=m.length+n.length,500<p))break}else l.params=String(JSON.stringify(k)).substr(0,500);f=Gb(f);(h=h||f.stack)||(h="Not available");k={stackTrace:h};f.fileName&&(k.filename=f.fileName);d=f.lineNumber.toString();isNaN(d)||!g||isNaN(g)||(k.lineNumber=Number(d),k.columnNumber=Number(g),d=d+":"+g);window.yterr&&wa(window.yterr)&&(f.params=l,window.yterr(f));if(!(Ve.has(f.message)||0<=h.indexOf("/YouTubeCenter.js")||0<=h.indexOf("/mytube.js"))){if(R("kevlar_gel_error_routing")){g=void 0;m=
e;n=k;k=l;p={level:"ERROR_LEVEL_UNKNOWN",message:f.message};"ERROR"===m?p.level="ERROR_LEVEL_ERROR":"WARNING"===m&&(p.level="ERROR_LEVEL_WARNNING");m={isObfuscated:!0,browserStackInfo:n};n={pageUrl:window.location.href,kvPairs:[]};q=u(Object.keys(k));for(var x=q.next();!x.done;x=q.next())x=x.value,n.kvPairs.push({key:"client."+x,value:String(k[x])});m={errorMetadata:n,stackTrace:m,logMessage:p};g=void 0===g?{}:g;k=Ue;N("ytLoggingEventsDefaultDisabled",!1)&&Ue==Ue&&(k=null);g=void 0===g?{}:g;p={};
p.eventTimeMs=Math.round(g.timestamp||T());p.clientError=m;m=String;g.timestamp?n=-1:(n=z("_lact",window),null==n?n=-1:n=Math.max(C()-n,0));p.context={lastActivityMs:m(n)};R("log_sequence_info_on_gel_web")&&g.U&&(m=p.context,n=g.U,qe[n]=n in qe?qe[n]+1:0,m.sequence={index:qe[n],groupKey:n},g.ua&&delete qe[g.U]);g={endpoint:"log_event",payload:p,s:g.s};R("use_typescript_transport")?"log_event"===g.endpoint&&(m="",g.s&&(p=g.s,m={},p.videoId?m.videoId=p.videoId:p.playlistId&&(m.playlistId=p.playlistId),
Qd[g.s.token]=m,m=g.s.token),p=Pd.get(m)||[],Pd.set(m,p),p.push(g.payload),k&&(Jd=new k),g=Dd("web_logging_max_batch")||100,k=T(),p.length>=g?Rd():10<=k-Md&&(Td(),Md=k)):(g.s?(p=g.s,m={},p.videoId?m.videoId=p.videoId:p.playlistId&&(m.playlistId=p.playlistId),je[g.s.token]=m,p=le(g.endpoint,g.s.token)):p=le(g.endpoint),p.push(g.payload),k&&(ee[g.endpoint]=new k),g=Dd("web_logging_max_batch")||100,k=T(),p.length>=g?ke():10<=k-he&&(ne(),he=k));ke()}e={fa:{a:"logerror",t:"jserror",type:f.name,msg:f.message.substr(0,
250),line:d,level:e,"client.name":l.name},o:{url:N("PAGE_NAME",window.location.href),file:f.fileName},method:"POST"};l.version&&(e["client.version"]=l.version);if(e.o){h&&(e.o.stack=h);h=u(Object.keys(l));for(d=h.next();!d.done;d=h.next())d=d.value,e.o["client."+d]=l[d];if(l=N("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(h=u(Object.keys(l)),d=h.next();!d.done;d=h.next())d=d.value,e.o[d]=l[d]}Ge(N("ECATCHER_REPORT_HOST","")+"/error_204",e);Ve.add(f.message);We++}}}}}else throw B;}else console&&
console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function cf(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function df(a){return 0===a.search("get")||0===a.search("is")}
;function Z(a,b){if(!a)throw Error("YouTube player element ID required.");var c={title:"video player",videoId:"",width:640,height:360};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"player");this.w={};this.playerInfo={}}
qa(Z,Y);r=Z.prototype;r.G=function(){return"/embed/"+Q(this.g,"videoId")};
r.F=function(){var a=Q(this.g,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!=window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Q(this.g,"embedConfig")){if(xa(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.S=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(xa(a))for(var c in a)this.w[c]=a[c];break;case "infoDelivery":ef(this,a);break;case "initialDelivery":window.clearInterval(this.h);this.playerInfo={};this.w={};ff(this,a.apiInterface);ef(this,a);break;default:this.C(b,a)}};
function ef(a,b){if(xa(b))for(var c in b)a.playerInfo[c]=b[c]}
function ff(a,b){F(b,function(c){this[c]||("getCurrentTime"==c?this[c]=function(){var d=this.playerInfo.currentTime;if(1==this.playerInfo.playerState){var e=(C()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:cf(c)?this[c]=function(){this.playerInfo={};
this.w={};bf(this,c,arguments);return this}:df(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){bf(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=parseInt(Q(this.g,"width"),10);var b=parseInt(Q(this.g,"height"),10),c=Q(this.g,"host")+this.G();gb.test(c)&&(-1!=c.indexOf("&")&&(c=c.replace(ab,"&amp;")),-1!=c.indexOf("<")&&(c=c.replace(bb,"&lt;")),-1!=c.indexOf(">")&&(c=c.replace(cb,"&gt;")),-1!=c.indexOf('"')&&(c=c.replace(db,"&quot;")),-1!=c.indexOf("'")&&(c=c.replace(eb,"&#39;")),-1!=c.indexOf("\x00")&&(c=c.replace(fb,"&#0;")));a='<iframe width="'+a+'" height="'+b+'" src="'+c+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
return a};
r.getOptions=function(a){return this.w.namespaces?a?this.w[a].options||[]:this.w.namespaces||[]:[]};
r.getOption=function(a,b){if(this.w.namespaces&&a&&b)return this.w[a][b]};
function gf(a){if("iframe"!=a.tagName.toLowerCase()){var b=P(a,"videoid");b&&(b={videoId:b,width:P(a,"width"),height:P(a,"height")},new Z(a,b))}}
;function hf(a,b){var c={title:"Thumbnail",videoId:"",width:120,height:68};if(b)for(var d in b)c[d]=b[d];Y.call(this,a,c,"thumbnail")}
qa(hf,Y);hf.prototype.G=function(){return"/embed/"+Q(this.g,"videoId")};
hf.prototype.F=function(){return{player:0,thumb_width:Q(this.g,"thumbWidth"),thumb_height:Q(this.g,"thumbHeight"),thumb_align:Q(this.g,"thumbAlign")}};
hf.prototype.C=function(a,b){Y.prototype.C.call(this,a,b?b.info:void 0)};
function jf(a){if("iframe"!=a.tagName.toLowerCase()){var b=P(a,"videoid");if(b){b={videoId:b,events:{},width:P(a,"width"),height:P(a,"height"),thumbWidth:P(a,"thumb-width"),thumbHeight:P(a,"thumb-height"),thumbAlign:P(a,"thumb-align")};var c=P(a,"onclick");c&&(b.events.onClick=c);new hf(a,b)}}}
;D("YT.PlayerState.UNSTARTED",-1);D("YT.PlayerState.ENDED",0);D("YT.PlayerState.PLAYING",1);D("YT.PlayerState.PAUSED",2);D("YT.PlayerState.BUFFERING",3);D("YT.PlayerState.CUED",5);D("YT.get",function(a){return td[a]});
D("YT.scan",wd);D("YT.subscribe",function(a,b,c){Hc.subscribe(a,b,c);vd[a]=!0;for(var d in td)$e(td[d],a)});
D("YT.unsubscribe",function(a,b,c){Gc(a,b,c)});
D("YT.Player",Z);D("YT.Thumbnail",hf);Y.prototype.destroy=Y.prototype.destroy;Y.prototype.setSize=Y.prototype.setSize;Y.prototype.getIframe=Y.prototype.da;Y.prototype.addEventListener=Y.prototype.addEventListener;Z.prototype.getVideoEmbedCode=Z.prototype.getVideoEmbedCode;Z.prototype.getOptions=Z.prototype.getOptions;Z.prototype.getOption=Z.prototype.getOption;ud.push(function(a){a=xd("player",a);F(a,gf)});
ud.push(function(){var a=xd("thumbnail");F(a,jf)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||wd();var kf=z("onYTReady");kf&&kf();var lf=z("onYouTubeIframeAPIReady");lf&&lf();var mf=z("onYouTubePlayerAPIReady");mf&&mf();}).call(this);
