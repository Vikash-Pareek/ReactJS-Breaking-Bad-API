(this["webpackJsonpvikash-pareek"]=this["webpackJsonpvikash-pareek"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.3795f66d.png"},17:function(e,t,a){e.exports=a.p+"static/media/476.0ddbac1c.gif"},18:function(e,t,a){e.exports=a(42)},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),l=a.n(c),i=a(3),s=a.n(i),u=a(14),m=a(2),o=a(15),E=a.n(o),p=a(16),f=a.n(p),d=function(){return r.a.createElement("header",{className:"center"},r.a.createElement("img",{src:f.a,alt:""}))},g=function(e){var t=e.item;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-inner"},r.a.createElement("div",{className:"card-front"},r.a.createElement("img",{src:t.img,alt:""})),r.a.createElement("div",{className:"card-back"},r.a.createElement("h1",null,t.name),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("strong",null,"Birthday:")," ",t.birthday),r.a.createElement("li",null,r.a.createElement("strong",null,"Occupation:")," ",t.occupation),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",t.status),r.a.createElement("li",null,r.a.createElement("strong",null,"Nickname:")," ",t.nickname),r.a.createElement("li",null,r.a.createElement("strong",null,"Actor Name:")," ",t.portrayed),r.a.createElement("li",null,r.a.createElement("strong",null,"Season Appearance:")," ",t.appearance)))))},h=a(17),v=a.n(h),b=function(){return r.a.createElement("img",{src:v.a,style:{width:"200px",margin:"auto",display:"block"},alt:"Loading"})},k=function(e){var t=e.items;return e.isLoading?r.a.createElement(b,null):r.a.createElement("section",{className:"cards"},t.map((function(e){return r.a.createElement(g,{key:e.char_id,item:e})})))},N=function(e){var t=e.getQuery,a=Object(n.useState)(""),c=Object(m.a)(a,2),l=c[0],i=c[1];return r.a.createElement("section",{className:"search"},r.a.createElement("form",null,r.a.createElement("input",{type:"text",className:"form-control",placeholder:"Search Your Favourite Characters By Their Name",value:l,onChange:function(e){return a=e.target.value,i(a),void t(a);var a},autoFocus:!0})))},y=function(e){for(var t=e.itemsPerPage,a=e.totalItems,n=e.paginate,c=[],l=1;l<=Math.ceil(a/t);l++)c.push(l);return r.a.createElement("nav",null,r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},href:"!#",className:"page-link"},e))}))))},O=function(){return r.a.createElement("footer",{className:"footer"},"Copyright \xa9 ReactJS Assignment By Vikash Pareek For 100ms.live ",(new Date).getFullYear())},j=(a(41),function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!0),i=Object(m.a)(l,2),o=i[0],p=i[1],f=Object(n.useState)(""),g=Object(m.a)(f,2),h=g[0],v=g[1],b=Object(n.useState)(1),j=Object(m.a)(b,2),S=j[0],w=j[1],x=Object(n.useState)(10),P=Object(m.a)(x,1)[0];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p(!0),e.next=3,E()("https://www.breakingbadapi.com/api/characters?name=".concat(h));case 3:t=e.sent,c(t.data),p(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[h]);var B=S*P,C=B-P,F=a.slice(C,B);return r.a.createElement("div",{className:"container"},r.a.createElement(d,null),r.a.createElement(N,{getQuery:function(e){return v(e)}}),r.a.createElement(k,{items:F,isLoading:o}),r.a.createElement(y,{itemsPerPage:P,totalItems:a.length,paginate:function(e){return w(e)}}),r.a.createElement(O,null))});l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.552d8974.chunk.js.map