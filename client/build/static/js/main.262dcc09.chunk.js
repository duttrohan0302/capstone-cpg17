(this["webpackJsonpreact-course"]=this["webpackJsonpreact-course"]||[]).push([[0],{23:function(e,t,n){e.exports={header:"MainNavigation_header__2p-WD",logo:"MainNavigation_logo__2WMla",active:"MainNavigation_active__1YWjl",badge:"MainNavigation_badge__16C-p"}},24:function(e,t,n){e.exports={item:"Content_item__1g_yl",image:"Content_image__2jU-n",content:"Content_content__1XC-e",actions:"Content_actions__2HIW1"}},26:function(e,t,n){e.exports={form:"SamplePaper_form__D0QWd",control:"SamplePaper_control__1eD9e",actions:"SamplePaper_actions__1jGys"}},30:function(e,t,n){e.exports={main:"Layout_main__1weV0",main2:"Layout_main2__3t9M7"}},43:function(e,t){},45:function(e,t,n){e.exports={card:"Card_card__1fDzw"}},51:function(e,t,n){},75:function(e,t){},76:function(e,t){},77:function(e,t){},78:function(e,t){},79:function(e,t){},82:function(e,t,n){"use strict";n.r(t);var c=n(2),a=n(44),r=n.n(a),s=n(11),i=(n(51),n(6)),l=n(23),o=n.n(l),j=n(1);var d=function(){return Object(j.jsxs)("header",{className:o.a.header,children:[Object(j.jsx)("div",{className:o.a.logo,children:Object(j.jsx)(s.b,{to:"/",children:"EXAM IDEA"})}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/upload-paper",children:"Question Paper Analysis"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/sample-paper",children:"Sample Paper Analysis"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/previous-year",children:"Previous Year Papers"})})]})})]})},u=n(30),b=n.n(u);var p=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(d,{}),Object(j.jsx)("main",{className:b.a.main,children:e.children})]})};var h=function(){return Object(j.jsx)(p,{children:Object(j.jsx)("section",{children:Object(j.jsx)("h1",{children:"All Previous Year papers"})})})},O=n(45),x=n.n(O);var m=function(e){return Object(j.jsx)("div",{className:x.a.card,children:e.children})},f=n(24),v=n.n(f);var y=function(e){return Object(j.jsxs)(m,{children:[Object(j.jsxs)("div",{className:v.a.content,children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:e.description})})]}),Object(j.jsx)("div",{className:v.a.actions,children:Object(j.jsx)(s.b,{to:"Get your paper analysed in just 2 minutes"===e.title?"/upload-paper":"/sample-paper",children:Object(j.jsx)("button",{children:e.show})})})]})};var g=function(){var e="Get your paper analysed in just 2 minutes",t="We will check every section of your paper in a very detailed manner and give you insights that you can use to improve you paper. All it takes in just few clicks.",n="Upload your Paper",c="Generate your own sample question paper",a="If you don't have your own paper and you want to generate one then we are here for you. Your own question paper is just 5 clicks away",r="Generate My Sample Paper";return Object(j.jsx)(p,{children:Object(j.jsxs)("section",{children:[Object(j.jsx)(y,{title:e,description:t,show:n}),Object(j.jsx)("br",{}),Object(j.jsx)(y,{title:c,description:a,show:r})]})})},_=n(13),N=n.n(_),k=n(17),S=n(10),w=n(18),C=n.n(w),A=n(26),E=n.n(A),D=n(20);var P=function(){var e=Object(c.useState)("easy"),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(S.a)(r,2),i=s[0],l=s[1];D.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(D.c.version,"/pdf.worker.js");var o=Object(c.useState)(null),d=Object(S.a)(o,2),u=d[0],b=d[1],h=function(){var e=Object(k.a)(N.a.mark((function e(t){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log(n),e.prev=2,e.next=5,C()("/generate/".concat(n),{method:"GET",responseType:"blob"});case 5:c=e.sent,a=new Blob([c.data],{type:"application/pdf"}),b(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsxs)(p,{children:[Object(j.jsx)("h1",{className:"display-4",children:"Sample Paper Generation"}),Object(j.jsx)(m,{children:Object(j.jsxs)("form",{className:E.a.form,onSubmit:h,children:[Object(j.jsxs)("div",{className:E.a.control,children:[Object(j.jsx)("label",{htmlFor:"Subject",children:"Select Subject"}),Object(j.jsxs)("select",{id:"Subject",name:"Subject",children:[Object(j.jsx)("option",{value:"DSA",children:"Data Structures and Algorithms"}),Object(j.jsx)("option",{value:"OS",children:"Operating Systems"}),Object(j.jsx)("option",{value:"CN",children:"Computer Networks"}),Object(j.jsx)("option",{value:"DBMS",children:"DataBase Management Systems"})]})]}),Object(j.jsxs)("div",{className:E.a.control,children:[Object(j.jsx)("label",{htmlFor:"Difficulty",children:"Select Difficulty Level"}),Object(j.jsxs)("select",{id:"Difficulty",name:"difficulty",value:n,onChange:function(e){a(e.target.value)},children:[Object(j.jsx)("option",{value:"easy",children:"Easy"}),Object(j.jsx)("option",{value:"medium",children:"Medium"}),Object(j.jsx)("option",{value:"hard",children:"Hard"})]})]}),Object(j.jsx)("div",{className:E.a.actions,style:{transform:"scale(0.9)"},children:Object(j.jsx)("button",{onClick:h,children:"Generate Sample Paper"})}),Object(j.jsx)("br",{})]})}),Object(j.jsx)(m,{style:{marginTop:"50px"},children:Object(j.jsx)("div",{style:{marginTop:"20px"},children:u?Object(j.jsx)("div",{children:Object(j.jsx)(D.a,{file:u,onLoadSuccess:function(e){var t=e.numPages;l(t)},children:Array.apply(null,Array(i)).map((function(e,t){return t+1})).map((function(e,t){return Object(j.jsxs)("div",{style:{marginTop:"20px"},children:[Object(j.jsx)(D.b,{pageNumber:e,style:{marginTop:"10%"}}),Object(j.jsx)("br",{})]},t)}))})}):Object(j.jsx)("div",{})})})]})};var F=function(e){var t=Object(i.f)(),n=function(){var e=Object(k.a)(N.a.mark((function e(n){var c,a;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),(c=new FormData).append("upload",s),e.prev=3,e.next=6,C.a.post("/analyse",c,{headers:{"Content-type":"multipart/form-data"}});case 6:a=e.sent,console.log("Its a success hopefully",a),t("/analysis-paper"),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("Error is",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),a=Object(c.useState)(null),r=Object(S.a)(a,2),s=r[0],l=r[1];return Object(j.jsx)(m,{children:Object(j.jsxs)("section",{children:[Object(j.jsxs)("div",{className:v.a.content,children:[Object(j.jsx)("h1",{children:"Upload Question Paper"}),Object(j.jsx)("div",{children:Object(j.jsx)("p",{children:"File should Contain all the pages of the Question Paper"})})]}),Object(j.jsx)("div",{className:v.a.actions,children:Object(j.jsxs)("form",{id:"form",children:[Object(j.jsx)("input",{type:"file",name:"upload",onChange:function(e){console.log(e.target.files),l(e.target.files[0])}}),Object(j.jsx)("button",{className:"submit-btn",type:"submit",onClick:n,children:"Upload"})]})})]})})};var M=function(){return Object(j.jsx)(p,{children:Object(j.jsx)("section",{children:Object(j.jsx)(F,{})})})};var W=function(){return Object(j.jsxs)("header",{className:o.a.header,children:[Object(j.jsx)("div",{className:o.a.logo,children:Object(j.jsx)(s.b,{to:"/",children:"EXAM IDEA"})}),Object(j.jsx)("nav",{children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/analysis-paper",children:"Analysis"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/analytics-paper",children:"Analytics"})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.b,{to:"/student-percentile",children:"Student percentile Distribution"})})]})})]})};var T=function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)(W,{}),Object(j.jsx)("main",{className:b.a.main2,children:e.children})]})};var B=function(){var e=Object(c.useState)(null),t=Object(S.a)(e,2),n=t[0],a=t[1];D.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/".concat(D.c.version,"/pdf.worker.js");var r=Object(c.useState)(null),s=Object(S.a)(r,2),i=s[0],l=s[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(k.a)(N.a.mark((function e(){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:C()("/analysed-paper",{method:"GET",responseType:"blob"}).then((function(e){var t=new Blob([e.data],{type:"application/pdf"});l(t)})).catch((function(e){console.log(e)}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(j.jsx)("section",{children:Object(j.jsx)(T,{children:Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{children:"Analysis of papers"}),i?Object(j.jsx)("div",{children:Object(j.jsx)(D.a,{file:i,onLoadSuccess:function(e){var t=e.numPages;a(t)},children:Array.apply(null,Array(n)).map((function(e,t){return t+1})).map((function(e,t){return Object(j.jsxs)("div",{children:[Object(j.jsx)(D.b,{pageNumber:e}),Object(j.jsx)("br",{})]},t)}))})}):Object(j.jsx)("div",{children:Object(j.jsx)("h2",{children:"No Question Paper Analysed"})})]})})})};var G=function(){var e=Object(c.useState)(null),t=Object(S.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(k.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("/percentile");case 3:t=e.sent,a(t.data.percentiles),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),console.log(n),Object(j.jsx)(T,{children:Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"display-4",children:"Student Percentile"}),n?Object(j.jsxs)("table",{className:"table table-striped table-dark",children:[Object(j.jsxs)("thead",{className:"thead-dark",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{colSpan:2,children:"Marks"}),Object(j.jsx)("th",{colSpan:2,children:"Percentile"})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"To"}),Object(j.jsx)("th",{children:"From"}),Object(j.jsx)("th",{children:"To"}),Object(j.jsx)("th",{children:"From"})]})]}),Object(j.jsx)("tbody",{children:n.map((function(e,t){return t<=9?Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:10*t}),Object(j.jsx)("td",{children:10*(t+1)}),Object(j.jsx)("td",{children:e.toFixed(2)}),Object(j.jsx)("td",{children:n[t+1].toFixed(2)})]}):null}))})]}):null]})})},I=n(27),L=n(31),Q=n(9);Q.f.register(Q.e,Q.j,Q.c,Q.a,Q.p,Q.q,Q.h);var H=["#FF6384","#36A2EB","#FFCE56","#E59866","#F1948A","#52BE80","#85C1E9","#E59866","#5499C7"],U=["#FF6384","#36A2EB","#FFCE56","#D35400","#E74C3C","#1E8449","#2E86C1","#D35400","#2471A3"];var Y=function(){var e=Object(c.useState)(null),t=Object(S.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(null),s=Object(S.a)(r,2),i=s[0],l=s[1];Object(c.useEffect)((function(){var e=function(){var e=Object(k.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C.a.get("/analytics");case 3:t=e.sent,a(t.data.difficultyWise),l(t.data.topicWise),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var o={labels:n?n.easy.map((function(e){return e.topic})):[],datasets:[{data:n?n.easy.map((function(e){return e.count})):[],backgroundColor:H,hoverBackgroundColor:U,hoverOffset:3}]},d={labels:n?n.medium.map((function(e){return e.topic})):[],datasets:[{label:"Medium Difficulty",data:n?n.medium.map((function(e){return e.count})):[],backgroundColor:H,hoverBackgroundColor:U,hoverOffset:3}]},u={labels:n?n.hard.map((function(e){return e.topic})):[],datasets:[{data:n?n.hard.map((function(e){return e.count})):[],backgroundColor:H,hoverBackgroundColor:U,hoverOffset:3}]},b={labels:i?i.map((function(e){return e.topic})):[],datasets:[{label:"Easy",data:i?i.map((function(e){return e.easy})):[],backgroundColor:"rgb(255, 99, 132)",borderWidth:1},{label:"Medium",data:i?i.map((function(e){return e.medium})):[],backgroundColor:"rgb(75, 192, 192)",borderWidth:1},{label:"Hard",data:i?i.map((function(e){return e.hard})):[],backgroundColor:"rgb(204, 153, 0)",borderWidth:1}]};return console.log(n),Object(j.jsx)(T,{children:Object(j.jsxs)("section",{children:[Object(j.jsx)("h1",{className:"display-3",children:"Analytics"}),n?Object(j.jsxs)("div",{className:"container mb-10",children:[Object(j.jsx)("h2",{className:"display-4",children:"Difficulty Wise Analysis"}),Object(j.jsxs)("div",{className:"row",children:[Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(I.b,{options:{plugins:{title:{display:!0,text:"Easy"}}},data:o,plugins:[L.a]})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(I.b,{data:d,options:{plugins:{title:{display:!0,text:"Medium"}}},plugins:[L.a]})}),Object(j.jsx)("div",{className:"col-md-4",children:Object(j.jsx)(I.b,{data:u,plugins:[L.a],options:{plugins:{title:{display:!0,text:"Hard"}}}})})]})]}):Object(j.jsx)("div",{children:"Nothing to show"}),i?Object(j.jsxs)("div",{className:"container",style:{marginTop:"50px"},children:[Object(j.jsx)("h2",{className:"display-4",children:"Topic Wise Analysis"}),Object(j.jsx)("div",{className:"row",children:Object(j.jsx)("div",{className:"col-md-12",children:Object(j.jsx)(I.a,{data:b,options:{responsive:!0,scales:{x:{stacked:!0},y:{stacked:!0,beginAtZero:!0}}}})})})]}):Object(j.jsx)("div",{})]})})};var q=function(){return Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/",exact:!0,element:Object(j.jsx)(g,{})}),Object(j.jsx)(i.a,{path:"/sample-paper",element:Object(j.jsx)(P,{})}),Object(j.jsx)(i.a,{path:"/previous-year",element:Object(j.jsx)(h,{})}),Object(j.jsx)(i.a,{path:"/upload-paper",element:Object(j.jsx)(M,{})}),Object(j.jsx)(i.a,{path:"/analysis-paper",element:Object(j.jsx)(B,{})}),Object(j.jsx)(i.a,{path:"/analytics-paper",element:Object(j.jsx)(Y,{})}),Object(j.jsx)(i.a,{path:"/student-percentile",element:Object(j.jsx)(G,{})})]})};r.a.render(Object(j.jsx)(s.a,{children:Object(j.jsx)(q,{})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.262dcc09.chunk.js.map