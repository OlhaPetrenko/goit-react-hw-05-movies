"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[602],{9894:function(e,n,t){t.d(n,{Z:function(){return r}});var i="Button_Btn__cWlfc",s=t(184);var r=function(e){var n=e.type,t=e.title,r=e.onClick;return(0,s.jsx)("button",{type:n,className:i,onClick:r,children:t})}},7602:function(e,n,t){t.r(n);var i=t(5861),s=t(885),r=t(7757),c=t.n(r),a=t(6871),o=t(501),l=t(2791),d=t(4569),u=t.n(d),h=t(9894),v=t(4687),_=t(184);function m(e){return e.isActive?"".concat(v.Z.Active," ").concat(v.Z.Link):v.Z.Link}var f="https://api.themoviedb.org/3",p="5b0447e2e1e726ae474ba46ec861fdf3";n.default=function(){var e,n=(0,a.UO)().movieId,t=(0,l.useState)(null),r=(0,s.Z)(t,2),d=r[0],j=r[1],x=(0,l.useState)("idle"),g=(0,s.Z)(x,2),Z=g[0],k=g[1],L=(0,l.useState)(null),w=(0,s.Z)(L,2),C=w[0],N=w[1];(0,l.useEffect)((function(){function e(){return(e=(0,i.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,k("pending"),e.next=4,u().get(" ".concat(f,"/movie/").concat(n,"?api_key=").concat(p,"&language=en-US"));case 4:t=e.sent,j(t.data),k("resolved"),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),N(e.t0),k("rejected");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n]);var b=(null===(e=(0,a.TH)().state)||void 0===e?void 0:e.from)||"/",A=(0,a.s0)();return(0,_.jsxs)("main",{children:["pending"===Z&&(0,_.jsx)("h2",{className:v.Z.Load,children:"\u0412\u0456\u0434\u0431\u0443\u0432\u0430\u0454\u0442\u044c\u0441\u044f \u0437\u0430\u0432\u0430\u043d\u0442\u0430\u0436\u0435\u043d\u043d\u044f \u0434\u0430\u043d\u0438\u0445..."}),"resolved"===Z&&d&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)(h.Z,{type:"button",title:"> GO BACK <",onClick:function(){return A(b)}}),(0,_.jsx)("h2",{children:d.original_title}),(0,_.jsxs)("div",{className:v.Z.Card,children:[(0,_.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(d.poster_path),alt:d.original_title,width:"200"}),(0,_.jsxs)("div",{children:[(0,_.jsxs)("p",{children:["User score ",d.vote_average]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:d.overview}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("p",{children:d.genres.map((function(e){return e.name})).join(", ")})]})]}),(0,_.jsx)("h3",{children:"Additional information"}),(0,_.jsxs)("ul",{className:v.Z.List,children:[(0,_.jsx)("li",{className:v.Z.Item,children:(0,_.jsx)(o.OL,{to:"cast",className:m,state:{from:b},children:"Cast"})}),(0,_.jsx)("li",{className:v.Z.Item,children:(0,_.jsx)(o.OL,{to:"reviews",className:m,state:{from:b},children:"Reviews"})})]})]}),"resolved"===Z&&!d&&(0,_.jsx)("h2",{children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a :((( "}),"rejected"===Z&&(0,_.jsx)("h1",{children:C.message}),(0,_.jsx)(a.j3,{})]})}},4687:function(e,n){n.Z={Card:"TrendMovies_Card__60DcF",List:"TrendMovies_List__rJfHX",Link:"TrendMovies_Link__omoGN",Active:"TrendMovies_Active__cBDAG",Load:"TrendMovies_Load__oToN+"}}}]);
//# sourceMappingURL=602.172438bf.chunk.js.map