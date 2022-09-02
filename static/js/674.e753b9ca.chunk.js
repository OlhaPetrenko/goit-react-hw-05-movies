"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[674],{9894:function(e,t,n){n.d(t,{Z:function(){return i}});var r="Button_Btn__cWlfc",a=n(184);var i=function(e){var t=e.type,n=e.title,i=e.onClick;return(0,a.jsx)("button",{type:t,className:r,onClick:i,children:n})}},9155:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(501),a=n(6871),i="MoviesList_Item__6qotj",s=n(184);function c(e){var t=e.movies,n=(0,a.TH)(),c=t.map((function(e){var t=e.id,a=e.title,c=e.name;return(0,s.jsx)("li",{className:i,children:(0,s.jsxs)(r.rU,{to:"/movie/".concat(t),state:{from:n},children:[a," ",c]})},t)}));return(0,s.jsx)("ul",{children:c})}c.defaultProps={movies:[]};var o=c},9674:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(5861),a=n(885),i=n(7757),s=n.n(i),c=n(2791),o=n(4569),u=n.n(o),l=n(501),d=n(9894),v="SearchForm_Input__C5DWT",_="SearchForm_Form__vRFa9",f=n(184);var m=function(e){var t=e.onSubmit,n=(0,c.useState)(""),r=(0,a.Z)(n,2),i=r[0],s=r[1];return(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==i.trim()?(t(i),s("")):alert("\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442!")},className:_,children:[(0,f.jsx)("input",{type:"text",name:"query",value:i,placeholder:"\u0412\u0432\u0435\u0434\u0438 \u043d\u0430\u0437\u0432\u0443 \u0444\u0456\u043b\u044c\u043c\u0443",onChange:function(e){s(e.currentTarget.value.toLowerCase())},className:v}),(0,f.jsx)(d.Z,{type:"submit",title:"\u0417\u043d\u0430\u0439\u0442\u0438"})]})})},h=n(9155),p=n(4687),x="https://api.themoviedb.org/3",j="5b0447e2e1e726ae474ba46ec861fdf3";var g=function(){var e,t=(0,c.useState)(""),n=(0,a.Z)(t,2),i=n[0],o=n[1],d=(0,c.useState)("idle"),v=(0,a.Z)(d,2),_=v[0],g=v[1],Z=(0,c.useState)(null),b=(0,a.Z)(Z,2),k=b[0],y=b[1],S=(0,l.lr)(),C=(0,a.Z)(S,2),L=C[0],T=C[1],w=null!==(e=L.get("query"))&&void 0!==e?e:"";return(0,c.useEffect)((function(){function e(){return(e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,g("pending"),e.next=4,u().get(" ".concat(x,"/search/movie/?api_key=").concat(j,"&language=en-US&page=1&query=").concat(w));case 4:t=e.sent,o(t.data.results),g("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),y(e.t0),g("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}w&&function(){e.apply(this,arguments)}()}),[w]),(0,f.jsxs)("main",{children:[(0,f.jsx)(m,{onSubmit:function(e){T(""!==e?{query:e}:{})}}),"pending"===_&&(0,f.jsx)("h2",{className:p.Z.Load,children:"\u0412\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445..."}),"resolved"===_&&0!==i.length&&(0,f.jsx)(h.Z,{movies:i}),"resolved"===_&&0===i.length&&(0,f.jsx)("h2",{children:" \u041d\u0430 \u0436\u0430\u043b\u044c, \u0456\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0456\u044f \u0449\u043e\u0434\u043e \u0412\u0430\u0448\u043e\u0433\u043e \u0437\u0430\u043f\u0438\u0442\u0443 \u0432\u0456\u0434\u0441\u0443\u0442\u043d\u044f :-((("}),"rejected"===_&&(0,f.jsx)("h1",{children:k.message})]})}},4687:function(e,t){t.Z={Card:"TrendMovies_Card__60DcF",List:"TrendMovies_List__rJfHX",Link:"TrendMovies_Link__omoGN",Active:"TrendMovies_Active__cBDAG",Load:"TrendMovies_Load__oToN+"}}}]);
//# sourceMappingURL=674.e753b9ca.chunk.js.map