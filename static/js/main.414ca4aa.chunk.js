(this["webpackJsonpreact-capstone"]=this["webpackJsonpreact-capstone"]||[]).push([[0],{30:function(e,a,t){e.exports=t(41)},35:function(e,a,t){},36:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},37:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),o=t(7),r=t.n(o),s=(t(35),t(14)),i=(t(36),t(37),t(62)),l=t(68),m=t(66),u=t(67),d=t(65),h=t(64),f=Object(i.a)((function(e){return{root:{width:"100%"},heading:{fontSize:e.typography.pxToRem(15),flexBasis:"33.33%",flexShrink:0},secondaryHeading:{fontSize:e.typography.pxToRem(15),color:e.palette.text.secondary}}})),p=function(e){var a=e.courses,t=f(),n=c.a.useState(!1),o=Object(s.a)(n,2),r=o[0],i=o[1];return c.a.createElement("div",{className:t.root},c.a.createElement(h.a,{item:!0,xs:12,className:t.formLabel},c.a.createElement(d.a,{variant:"h2"},"MSIS Coursework")),a.map((function(e){return c.a.createElement(l.a,{expanded:r===e.CLASS,onChange:(a=e.CLASS,function(e,t){i(!!t&&a)})},c.a.createElement(u.a,{"aria-controls":"panel1bh-content",id:"panel1bh-header"},c.a.createElement(d.a,{className:t.heading},e.CLASS),c.a.createElement(d.a,{className:t.secondaryHeading},e.TITLE)),c.a.createElement(m.a,null,c.a.createElement(d.a,{className:t.heading},e.PROGRAM),c.a.createElement(d.a,{className:t.heading},e.QUARTER),c.a.createElement(d.a,{className:t.heading},e.INSTRUCTOR),c.a.createElement(d.a,{className:t.heading},e.WEEKS)));var a})))};var E=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],o=a[1];return Object(n.useEffect)((function(){fetch("/csv").then((function(e){return e.json().then((function(e){o(e)}))}))}),[]),c.a.createElement("div",{className:"App"},c.a.createElement(p,{courses:t}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[30,1,2]]]);
//# sourceMappingURL=main.414ca4aa.chunk.js.map