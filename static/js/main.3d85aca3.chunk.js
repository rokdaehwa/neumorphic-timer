(this["webpackJsonpneumorphic-timer"]=this["webpackJsonpneumorphic-timer"]||[]).push([[0],{58:function(e,a,n){e.exports=n(77)},63:function(e,a,n){},67:function(e,a,n){},72:function(e,a,n){},73:function(e,a,n){},74:function(e,a,n){},75:function(e,a,n){},77:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),o=n(9),c=n.n(o),l=(n(63),n(21)),i=n(101),u=n(38),s=n.n(u),m=n(39),h=n(40),f=n(48),v=n(47),E=function(e){Object(f.a)(n,e);var a=Object(v.a)(n);function n(){var e;Object(m.a)(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={hasError:!1},e}return Object(h.a)(n,[{key:"componentDidCatch",value:function(e,a){}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{error:e,hasError:!0}}}]),n}(r.a.Component),d=n(104),g=n(97);n(67);var p=function(e){var a=e.progress,n=e.isPlaying;return r.a.createElement("div",{className:"timer-root"},r.a.createElement("div",{className:"timer-wrapper-out"},r.a.createElement("div",{className:"timer-wrapper-in"},r.a.createElement(g.a,{size:"28rem",thickness:22,color:n?"primary":"secondary",value:a/36,variant:"static"}))))};n(72);var y=function(e){var a=e.total;return r.a.createElement("div",{className:"header-root"},r.a.createElement("div",{className:"header-title"},"".concat(a," Min Timer")),r.a.createElement("div",{className:"header-actions"}))},w=n(98);n(73);var k=function(e){var a=e.changeTotal;return r.a.createElement("div",{className:"buttonSet-root"},r.a.createElement(w.a,{onClick:function(){return a(10)}},"10 Min"),r.a.createElement(w.a,{onClick:function(){return a(20)}},"20 Min"),r.a.createElement(w.a,{onClick:function(){return a(30)}},"30 Min"),r.a.createElement(w.a,{onClick:function(){return a(40)}},"40 Min"),r.a.createElement(w.a,{onClick:function(){return a(50)}},"50 Min"),r.a.createElement(w.a,{onClick:function(){return a(60)}},"60 Min"))};n(74);var b=n(105),C=n(99),S=n(100),j=n(45),N=n.n(j),O=n(44),M=n.n(O);n(75);var P=n(103),T=n(81);var D=function(e){var a=e.show,n=e.handleShow,t=e.handleTogglePlaying,o=e.isPlaying,c=e.progress;return r.a.createElement(P.a,{className:"footer-root"},r.a.createElement(C.a,{onClick:function(){return t(null)}},o?r.a.createElement(M.a,null):r.a.createElement(N.a,null)),r.a.createElement(T.a,null,function(e){var a=Math.floor(e/60),n=e%60;return a<10&&(a="0"+a),n<10&&(n="0"+n),"".concat(a,":").concat(n)}(c)),r.a.createElement(P.a,{className:"blank"}),r.a.createElement(S.a,{control:r.a.createElement(b.a,{checked:a,onChange:n,color:"primary"}),label:"Show"}))},I=Object(i.a)((function(e){return{root:{width:"100%",height:"100%",backgroundColor:"#e6e6e6",display:"flex",flexDirection:"column"}}}));new s.a;var x=function(){var e=I(),a=r.a.useState(3600),n=Object(l.a)(a,2),t=n[0],o=n[1],c=r.a.useState(60),i=Object(l.a)(c,2),u=i[0],s=i[1],m=r.a.useState(!0),h=Object(l.a)(m,2),f=h[0],v=h[1],g=r.a.useState(!1),w=Object(l.a)(g,2),b=w[0],C=w[1],S=function(e){return null==e?void C(!b):void C(e)},j=function(e){S(!1),s(e),o(60*e)};return r.a.useEffect((function(){var e=setInterval((function(){b?function(){if(t<=0)return alert("Time Done!"),void j(u);o(t-1),console.log("progress: ".concat(t))}():clearInterval(e)}),1e3);return function(){return clearInterval(e)}})),r.a.createElement(E,null,r.a.createElement("div",{className:e.root},r.a.createElement(d.a,{in:f},r.a.createElement(y,{total:u,progress:t})),r.a.createElement(p,{progress:t,isPlaying:b}),r.a.createElement(d.a,{in:f},r.a.createElement(k,{changeTotal:j,handleTogglePlaying:S,isPlaying:b})),r.a.createElement(D,{show:f,handleShow:function(){v(!f)},handleTogglePlaying:S,isPlaying:b,progress:t})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=n(46),J=n(102),W=n(29),z=n(28),A=Object(B.a)({palette:{primary:{main:W.a[500]},secondary:{main:z.a[500]}}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J.a,{theme:A},r.a.createElement(x,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[58,1,2]]]);
//# sourceMappingURL=main.3d85aca3.chunk.js.map