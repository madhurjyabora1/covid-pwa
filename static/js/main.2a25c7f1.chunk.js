(this["webpackJsonpcovid-pwa"]=this["webpackJsonpcovid-pwa"]||[]).push([[0],{23:function(e,t,a){e.exports=a(51)},28:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),s=a.n(r),l=(a(28),a(3)),i=a.n(l),o=a(14),u=a(2),m=a(15),d=a.n(m),f=a(16),h=a(17),v=a(22),p=a(20),g=(a(47),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(f.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={},e}return Object(h.a)(a,[{key:"render",value:function(){var e=this.props.item;return c.a.createElement("div",{className:"card-body ".concat("Green"===e.zone?"background-green":"Orange"===e.zone?"background-orange":"background-red")},c.a.createElement("h3",{className:"card-body-dist"},e.district),c.a.createElement("hr",null),c.a.createElement("div",{className:"card-body-detail"},c.a.createElement("div",{className:"sub-detail"},c.a.createElement("span",{className:"title"},"Zone:"),c.a.createElement("b",{className:"val"},e.zone)),c.a.createElement("div",{className:"sub-detail"},c.a.createElement("span",{className:"title"},"Code:"),c.a.createElement("b",{className:"val"},e.districtcode)),c.a.createElement("div",{className:"sub-detail"},c.a.createElement("span",{className:"title"},"State:"),c.a.createElement("b",{className:"val"},e.state)),c.a.createElement("div",{className:"sub-detail"},c.a.createElement("span",{className:"title"},"State Code:"),c.a.createElement("b",{className:"val"},e.statecode)),c.a.createElement("div",{className:"sub-detail"},c.a.createElement("span",{className:"title"},"Last Updated:"),c.a.createElement("b",{className:"val"},e.lastupdated))))}}]),a}(n.Component)),b=(a(48),a(49),function(e){var t=e.search,a=e.onSearchInputChange,r=e.results,s=e.highlightSearch,l=e.fetchResults,i=e.data,o=e.showDefaultValues,m=e.defaultValues,d=e.toggleDefaultValues,f=e.setSearch,h=function(e,t){var a=e.split(new RegExp("(".concat(t,")"),"gi"));return c.a.createElement("span",{className:"name"},a.map((function(e,a){return c.a.createElement("span",{key:a,className:e.toLowerCase()===t.toLowerCase()?"highlight-txt":{}},e)})))},v=Object(n.useState)(!0),p=Object(u.a)(v,2),g=p[0],b=p[1],E=function e(t){t.target.closest(".search-box")||(document.removeEventListener("click",e),b(!1))};return c.a.createElement("div",{className:"searchbar"},c.a.createElement("span",null,c.a.createElement("div",{className:"coronaImg"},c.a.createElement("img",{id:"logo",src:"https://i.imgur.com/Ka0dbaX.png",alt:"corona"})),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"search-box"},c.a.createElement("div",{className:"main"},c.a.createElement("input",{placeholder:"Search for a District...",type:"text",className:"search-input",value:t,onChange:a,onFocus:function(){d(!0),document.addEventListener("click",E),b(!0)}}),t?c.a.createElement("span",{className:"search-icon"},c.a.createElement("i",{style:{fontSize:"1.4rem"},className:"fa fa-close","aria-hidden":"true",onClick:function(){return f("")}})):c.a.createElement("span",{className:"search-icon"},c.a.createElement("i",{style:{fontSize:"1.4rem"},className:"fa fa-search","aria-hidden":"true"}))),!t.length&&o&&g?c.a.createElement("div",{className:"result-box"},i.filter((function(e,t){return m[e.district]})).map((function(e,a){return c.a.createElement("div",{key:a,className:"search-result",onClick:function(){console.log("item",e),l(e.district)}},h(e.district,t))}))):null,s?null:r.length&&g?c.a.createElement("div",{className:"result-box"},r.map((function(e,a){return c.a.createElement("div",{key:a,className:"search-result",onClick:function(){return l(e.district)}},h(e.district,t))}))):t.length&&g?c.a.createElement("div",{className:"result-box"},c.a.createElement("div",{className:"search-result"},"No results")):null))))}),E=a(21),N=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),m=l[0],f=l[1],h=Object(n.useState)(null),v=Object(u.a)(h,2),p=v[0],N=v[1],w=Object(n.useState)([]),k=Object(u.a)(w,2),S=k[0],j=k[1],y=Object(n.useState)(!1),O=Object(u.a)(y,2),C=O[0],x=O[1],L=Object(n.useState)({Mumbai:!0,"New Delhi":!0,Chennai:!0,Kolkata:!0,"Bengaluru Urban":!0}),z=Object(u.a)(L,1)[0];Object(n.useEffect)((function(){W()}),[]),Object(n.useEffect)((function(){R(),m&&A(),a||W()}),[a,m]);var W=function(){var e=Object(o.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(null),e.prev=1,e.next=4,d()("https://api.covid19india.org/zones.json");case 4:t=e.sent,N(t.data.zones),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}(),R=function(){if(a.length){var e=p.filter((function(e){return e.district.toLowerCase().includes(a.toLowerCase())}));e=e.filter((function(e,t){return t<=5})),j(e)}else j([])},A=function(){N(null);var e=p.filter((function(e){return e.district.toString()===a.toString()}));N(e)};return c.a.createElement("div",{className:"app"},c.a.createElement(b,{search:a,highlightSearch:m,onSearchInputChange:function(e){p&&(r(e.target.value),f(!1),x(!1))},results:S,fetchResults:function(e){r(e),f(!0)},data:p,showDefaultValues:C,defaultValues:z,toggleDefaultValues:function(e){x(e)},setSearch:r}),c.a.createElement("div",{className:"main-data"},c.a.createElement("div",{className:"container"},null===p?c.a.createElement(E.a,{animation:"border",size:"large",variant:"primary",className:"spinnnahhh"},c.a.createElement("span",{className:"sr-only"},"Loading...")):p.map((function(e,t){return c.a.createElement(g,{key:t,item:e})})))),m&&a?c.a.createElement("div",{className:"reset-btn"},c.a.createElement("button",{onClick:function(){r(""),f(!1),j([]),x(!1),W()},className:"extra"},"Reset")):null)},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(50);s.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(N,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/covid-pwa",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/covid-pwa","/service-worker.js");w?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):k(t,e)}))}}()}},[[23,1,2]]]);
//# sourceMappingURL=main.2a25c7f1.chunk.js.map