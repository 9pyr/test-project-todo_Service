(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(e,t,n){e.exports=n(50)},28:function(e,t,n){},29:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(22),i=n.n(o),r=(n(28),n(6)),l=n(11),s=(n(29),n(4)),d=n.n(s),u=n(10),m=n(8),f="https://novm.herokuapp.com";var h=function(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Object(a.useState)([]),s=Object(l.a)(i,2),h=s[0],v=s[1];Object(a.useEffect)((function(){d.a.get("".concat(f,"/todos")).then((function(e){v(e.data)})).catch((function(e){console.log(e)}))}),[]);var p=function(e){d.a.put("".concat(f,"/todo"),e).then((function(e){console.log("Update...")})).catch((function(e){console.log(e)}))};return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"card"},c.a.createElement("div",{className:"card-header"},"My Todo"),c.a.createElement("div",{onKeyUp:function(e){13===e.keyCode&&d.a.post("".concat(f,"/todo"),{content:n}).then((function(e){console.log("Save..."),o(""),v((function(t){return[].concat(Object(r.a)(t),[e.data])}))})).catch((function(e){console.log(e)}))},className:"card-body"},c.a.createElement("input",{type:"text",placeholder:"Input task name then tap Enter to add",value:n,onChange:function(e){o(e.target.value)}})),c.a.createElement("div",{className:"card-footer"},c.a.createElement("div",{className:"list"},h.map((function(e,t){return c.a.createElement("div",{key:t,className:"list-item"},c.a.createElement("input",{type:"checkbox",onChange:function(t){var n=t.target.checked;e.is_active=n,v((function(e){return Object(r.a)(e)})),p(e)},checked:e.is_active,name:"is_active-".concat(t),id:"is_active-".concat(t)}),c.a.createElement("label",{htmlFor:"is_active-".concat(t)}),c.a.createElement("div",{id:"content-".concat(t),style:{width:"100%",marginLeft:"6px",paddingLeft:"5px",display:"flex",flexDirection:"row"}},e.content),c.a.createElement("div",{style:{display:"flex",flexDirection:"row",justifyContent:"right"}},c.a.createElement("button",{className:"btn fab","data-target":"content-".concat(t),onClick:function(t){return function(e,t){var n=e.target,a=document.getElementById(n.getAttribute("data-target"));a.contentEditable=!0,a.addEventListener("keyup",(function(e){13===e.keyCode&&(a.contentEditable=!1,t.content=a.textContent,p(t))}))}(t,e)}},c.a.createElement(m.a,{icon:u.a})),c.a.createElement("button",{className:"btn fab",onClick:function(){return n=e._id,a=t,void d.a.delete("".concat(f,"/todo"),{data:{id:n}}).then((function(e){v((function(e){var t=e.slice(0,a),n=e.slice(a+1,e.length);return e=t.concat(n),Object(r.a)(e)})),console.log("Delete...")})).catch((function(e){console.log(e)}));var n,a}},c.a.createElement(m.a,{icon:u.b}))))})))))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[23,1,2]]]);
//# sourceMappingURL=main.31389476.chunk.js.map