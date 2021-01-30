(this["webpackJsonprocket-launch"]=this["webpackJsonprocket-launch"]||[]).push([[0],{22:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),s=n(15),a=n.n(s),i=(n(22),function(e){return Object(c.jsx)("div",{className:"wrapper",children:e.children})}),l=n(6),u=n.n(l),o=n(16),d=n(3),j=n(5),h=n.n(j),b=function(){return Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Space Launch"})})},f=function(e){return Object(c.jsx)("div",{className:"content",children:e.children})},m=function(e){var t=e.left,n=e.divideBy,r=e.label;return Object(c.jsxs)("div",{className:"countdown__box",children:[Object(c.jsxs)("div",{className:"countdown__box_circles",children:[Object(c.jsxs)("svg",{height:"110",width:"110",children:[Object(c.jsx)("circle",{stroke:"#1df9ba",strokeWidth:"9",r:"47",cx:"55",cy:"55"}),Object(c.jsx)("circle",{stroke:"#058862",strokeDashoffset:-t/n*47*2*Math.PI+94*Math.PI,strokeDasharray:94*Math.PI,strokeWidth:"3",r:"47",cx:"55",cy:"55"})]}),Object(c.jsx)("div",{className:"countdown__box_left",children:t})]}),Object(c.jsx)("p",{className:"countdown__box_label",children:r})]})},O=function(e){var t,n=e.date,s=new Date,a=new Date(n),i=a.getTime()-s.getTime(),l=Math.floor(i/864e5),u=function(e){return e%400===0||e%100!==0&&e%4===0}(a.getFullYear())?366:365,o=Math.floor(l/u),j=l<=0?0:l-o*u,h=Math.floor(i/36e5%24),b=Math.floor(i/6e4%60),f=Math.floor(i/1e3%60),O=o<10?"0"+o:o,x=j<10?"0"+j:j,v=h<10?"0"+h:h,p=b<10?"0"+b:b,y=f<10?"0"+f:f,g=Object(r.useState)(!1),w=Object(d.a)(g,2),M=w[0],_=w[1],k=Object(r.useState)({years:o>0?O:"00",days:j>0?x:"00",hours:h>0?v:"00",minutes:b>0?p:"00",seconds:f>0?y:"00"}),N=Object(d.a)(k,2),T=N[0],D=N[1];return Object(r.useEffect)((function(){M&&clearInterval(t)}),[M]),Object(r.useEffect)((function(){return M||(t=setInterval((function(){i>0?D({years:O,days:x,hours:v,minutes:p,seconds:y}):(D({years:"00",days:"00",hours:"00",minutes:"00",seconds:"00"}),_(!0))}),1e3)),function(){clearInterval(t)}}),[a,s,M,o,j,h,b,f,i,O,x,v,p,y]),Object(c.jsx)(r.Fragment,{children:Object(c.jsxs)("div",{className:"countdown",children:[T.years>0&&Object(c.jsx)(m,{left:T.years,divideBy:Math.floor(T.years)/100===0?100:Math.floor(T.years/100+100),label:"years"}),Object(c.jsx)(m,{left:T.days,divideBy:u,label:"days"}),Object(c.jsx)(m,{left:T.hours,divideBy:24,label:"hours"}),Object(c.jsx)(m,{left:T.minutes,divideBy:60,label:"minutes"}),Object(c.jsx)(m,{left:T.seconds,divideBy:60,label:"seconds"})]})})},x=function(e){var t,n=e.launch,r=["January","February","March","April","May","June","July","August","September","October","November","December"];function s(e){return t=new Date(e.net),r[t.getUTCMonth()]+" "+t.getUTCDate()+" "+t.getUTCFullYear()+" "+t.getUTCHours()+":"+t.getUTCMinutes()+" UTC"}function a(e){var n="GMT"+function(e){var t=e.getTimezoneOffset()>0?"-":"+",n=Math.abs(e.getTimezoneOffset()),c=i(Math.floor(n/60)),r=i(n%60);return t+c+":"+r}(t=new Date(e.net));return r[t.getMonth()]+" "+t.getDate()+" "+t.getFullYear()+" | "+function(e){var t=e.getHours(),n=e.getMinutes(),c=t>=12?"pm":"am";return(t=(t%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+c}(t)+" "+n}function i(e){return e<10?"0"+e:e}function l(e){return null!=n[e].mission?n[e].mission.description:""}function u(e){if("undefined"!==typeof e&&e.length>0)return Object(c.jsx)("a",{href:e[0].url,target:"_blank",children:Object(c.jsx)("button",{children:Object(c.jsx)("p",{children:"Live webcast"})})})}return Object(c.jsx)("div",{className:"launch",children:n.map((function(e,t){if(null!=e.image&&new Date(e.net)>new Date)return Object(c.jsxs)("div",{className:"rockets",children:[Object(c.jsx)("h2",{children:e.name}),Object(c.jsx)("img",{src:e.image,alt:e.name,width:"500px"}),Object(c.jsx)("p",{children:e.launch_service_provider.name}),Object(c.jsx)("p",{children:e.pad.name}),Object(c.jsx)("div",{className:"description",children:l(t)}),Object(c.jsxs)("p",{children:["Time until: ",a(e)]}),Object(c.jsx)(O,{date:s(e)}),u(e.vidURLs)]})}))})},v=function(){var e=Object(r.useState)(),t=Object(d.a)(e,2),n=t[0],s=t[1],a=function(){var e=Object(o.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://spacelaunchnow.me/api/3.5.0/launch/upcoming/?mode=detailed&limit=20",t=h.a.get("https://spacelaunchnow.me/api/3.5.0/launch/upcoming/?mode=detailed&limit=20"),e.next=4,t;case 4:n=e.sent,s(n.data.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)(a,[]),Object(c.jsxs)("div",{className:"main",children:[Object(c.jsx)(b,{}),Object(c.jsx)(f,{children:n&&Object(c.jsx)(x,{launch:n})})]})};var p=function(){return Object(c.jsx)(i,{children:Object(c.jsx)(v,{})})};a.a.render(Object(c.jsx)(p,{}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.392f8947.chunk.js.map