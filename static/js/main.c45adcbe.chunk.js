(this["webpackJsonpneumorphic-timer"]=this["webpackJsonpneumorphic-timer"]||[]).push([[0],{38:function(e,t,n){e.exports=n(51)},43:function(e,t,n){},44:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),i=(n(43),n(22)),l=n(68),u=n(26),s=n(27),m=n(34),f=n(33),h=function(e){Object(m.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1},e}return Object(s.a)(n,[{key:"componentDidCatch",value:function(e,t){}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e,hasError:!0}}}]),n}(r.a.Component),v=n(66);n(44);var d=function(e){var t=e.progress,n=e.isPlaying;return r.a.createElement("div",{className:"timer-root"},r.a.createElement("div",{className:"timer-wrapper"},r.a.createElement(v.a,{size:"30rem",thickness:22,color:n?"primary":"secondary",value:t/36,variant:"static"})))},E=(n(49),n(70));var g=function(e){var t=e.total,n=e.progress;return r.a.createElement("div",{className:"header-root"},r.a.createElement("div",{className:"header-title"},"".concat(t," Min Timer")),r.a.createElement("div",{className:"header-progress"},function(e){var t=Math.floor(e/60),n=e%60;return t<10&&(t="0"+t),n<10&&(n="0"+n),"".concat(t,":").concat(n)}(n)),r.a.createElement("div",{className:"header-actions"},r.a.createElement(E.a,{className:"header-button",onClick:function(){return document.body.requestFullscreen()}},"Full Screen")))};n(50);var p=function(e){var t=e.changeTotal,n=e.handleTogglePlaying,a=e.isPlaying;return r.a.createElement("div",{className:"buttonSet-root"},r.a.createElement(E.a,{onClick:function(){return n(null)}},a?"Pause":"Play"),r.a.createElement(E.a,{onClick:function(){return t(1/6)}},"1 Min"),r.a.createElement(E.a,{onClick:function(){return t(10)}},"10 Min"),r.a.createElement(E.a,{onClick:function(){return t(20)}},"20 Min"),r.a.createElement(E.a,{onClick:function(){return t(30)}},"30 Min"),r.a.createElement(E.a,{onClick:function(){return t(40)}},"40 Min"),r.a.createElement(E.a,{onClick:function(){return t(50)}},"50 Min"),r.a.createElement(E.a,{onClick:function(){return t(60)}},"60 Min"))},y=Object(l.a)((function(e){return{root:{width:"100%",height:"100%",backgroundColor:"#e6e6e6",display:"flex",flexDirection:"column"}}}));var k=function(){var e=y(),t=r.a.useState(3600),n=Object(i.a)(t,2),a=n[0],o=n[1],c=r.a.useState(60),l=Object(i.a)(c,2),u=l[0],s=l[1],m=r.a.useState(!1),f=Object(i.a)(m,2),v=f[0],E=f[1],k=function(e){return null==e?void E(!v):void E(e)},b=function(e){k(!1),s(e),o(60*e)};return r.a.useEffect((function(){var e=setInterval((function(){v?function(){if(a<=0)return alert("Time Done!"),void b(u);o(a-1),console.log("progress: ".concat(a))}():clearInterval(e)}),1e3);return function(){return clearInterval(e)}})),r.a.createElement(h,null,r.a.createElement("div",{className:e.root},r.a.createElement(g,{total:u,progress:a}),r.a.createElement(d,{progress:a,isPlaying:v}),r.a.createElement(p,{changeTotal:b,handleTogglePlaying:k,isPlaying:v})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=n(32),w=n(69),C=n(21),M=n(20),j=Object(b.a)({palette:{primary:{main:C.a[500]},secondary:{main:M.a[500]}}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w.a,{theme:j},r.a.createElement(k,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.c45adcbe.chunk.js.map