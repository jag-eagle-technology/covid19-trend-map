!function(e){function t(t){for(var r,c,o=t[0],s=t[1],u=t[2],f=0,d=[];f<o.length;f++)c=o[f],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);for(l&&l(t);d.length;)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={0:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;i.push([128,1]),n()}({128:function(e,t,n){"use strict";n.r(t);n(86);var r=n(0),a=n.n(r),i=n(37),c=n.n(i),o=n(7),s=n(2),u=n.n(s),l=n(4),f=n.n(l),d=n(1),p=n.n(d),m=n(10),b=n.n(m),h=function(e){var t=e.webmapId,n=e.initialMapCenterLocation,i=e.onStationary,c=e.children,s=a.a.useRef(),l=a.a.useState(null),d=p()(l,2),m=d[0],b=d[1],h=function(){var e=f()(u.a.mark((function e(){var r,a,i,c,l,f,d,m,h,v;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.loadModules)(["esri/views/MapView","esri/WebMap"]);case 3:r=e.sent,a=p()(r,2),i=a[0],c=a[1],f=(l=n||{}).lat,d=l.lon,m=l.zoom,h=d&&f?[d,f]:void 0,(v=new i({container:s.current,center:h,zoom:m,map:new c({portalItem:{id:t}})})).when((function(){b(v)})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=f()(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.loadModules)(["esri/core/watchUtils"]);case 3:t=e.sent,n=p()(t,1),n[0].whenTrue(m,"stationary",(function(){if(-1!==m.zoom){var e={lat:m.center&&m.center.latitude?+m.center.latitude.toFixed(3):0,lon:m.center&&m.center.longitude?+m.center.longitude.toFixed(3):0,zoom:m.zoom};i(e)}})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){Object(o.loadCss)(),h()}),[]),a.a.useEffect((function(){m&&v()}),[m]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},ref:s}),a.a.Children.map(c,(function(e){return a.a.cloneElement(e,{mapView:m})})))},v=function(e){var t=e.activeTrend,n=e.features,a=e.visibleScale,i=e.size,c=void 0===i?20:i,s=e.mapView,l=Object(r.useState)(),d=p()(l,2),m=d[0],b=d[1],h=function(){var e=f()(u.a.mark((function e(){var t,n,r,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.loadModules)(["esri/layers/GraphicsLayer","esri/core/watchUtils"]);case 3:t=e.sent,n=p()(t,2),r=n[0],n[1],i=new r({minScale:a&&a.min,maxScale:a&&a.max}),s.map.add(i),b(i),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}(),v=function(){var e=f()(u.a.mark((function e(n){var r,a,i,s,l,f;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.loadModules)(["esri/symbols/CIMSymbol","esri/Graphic","esri/geometry/Point"]);case 3:r=e.sent,a=p()(r,3),i=a[0],s=a[1],l=a[2],f=n.map((function(e){var n=e.geometry,r={confirmed:e.confirmed,death:e.deaths,"new-cases":e.newCases}[t],a=r.frame,o=r.path,u=new i({data:{type:"CIMSymbolReference",symbol:{type:"CIMPointSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,scaleSymbolsProportionally:!1,respectFrame:!1,size:c,frame:a,markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[o]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",width:1,color:[161,13,34,255]}]}}]}]}}});return new s({geometry:new l({latitude:n.y,longitude:n.x}),symbol:u})})),m.addMany(f),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){s&&h()}),[s]),Object(r.useEffect)((function(){m&&n&&(m.removeAll(),v(n))}),[m,n,t]),null},y=function(e){var t=e.itemId,n=e.outFields,a=e.mapView,i=e.visibleScale,c=e.onSelect,s=Object(r.useState)(),l=p()(s,2),d=l[0],m=l[1],b=function(){var e=f()(u.a.mark((function e(){var n,r,a,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(o.loadModules)(["esri/layers/FeatureLayer"]);case 3:n=e.sent,r=p()(n,1),a=r[0],c=new a({portalItem:{id:t},minScale:i&&i.min,maxScale:i&&i.max}),m(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),h=function(){var e=f()(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.scale<d.minScale&&a.scale>d.maxScale)){e.next=5;break}return e.next=3,d.queryFeatures({where:"1=1",geometry:a.toMap(t),returnGeometry:!0,outFields:n||["*"]});case 3:(r=e.sent).features&&r.features.length&&c(r.features[0]);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){a&&b()}),[a]),Object(r.useEffect)((function(){d&&a&&a.on("click",(function(e){h(e)}))}),[d]),null},g={"webmap-id":"1bff921ddf7044c3b5ba34e8494a2073","us-states-feature-layer-item-id":"99fd67933e754a1181cc755146be21ca","us-counties-feature-layer-item-id":"7566e0221e5646f99ea249a197116605","covid19-data-us-states-url":"https://covid19.vannizhang.com/us-states-paths.json","covid19-data-us-counties-url":"https://covid19.vannizhang.com/us-counties-paths.json","us-counties-layer-visible-scale":{min:75e5,max:0},"us-states-layer-visible-scale":{min:73957190,max:7500001}},x="#A10D22",w="#E8E2D2",O="#EFEADB",E="#B1A483",S="#B2A584",j=[{label:"WEEKLY CASES",value:"new-cases"},{label:"CASES",value:"confirmed"},{label:"DEATHS",value:"death"}],C=function(e){var t=e.isMobile,n=e.activeTrend,r=e.activeTrendOnChange;return a.a.createElement("div",{style:{position:"absolute",top:"10px",right:"10px",left:t?"10px":"unset",boxShadow:"0 0 10px 2px #B1A483"}},a.a.createElement("div",{style:{backgroundColor:x,color:O,height:t?"auto":"20px",lineHeight:"20px",width:"100%",textAlign:"center"}},a.a.createElement("span",{className:"avenir-bold",style:{fontSize:"0.785rem"}},"CORONAVIRUS TRENDS PER 100,000 PEOPLE, SINCE FEBRUARY, UPDATED DAILY")),a.a.createElement("div",{style:{display:"flex",height:"60px",width:"100%",boxSizing:"border-box",backgroundColor:w}},j.map((function(e){var i=e.value,c=e.label;return a.a.createElement("div",{key:i,style:{width:t?"auto":"150px",flexGrow:t?1:0,height:"100%",color:x,backgroundColor:n===i?O:"transparent",display:"flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",borderBottom:"solid 4px ".concat(n===i?x:"transparent"),borderRight:"solid 1px #E0D8C1",cursor:"pointer"},onClick:r.bind(void 0,i)},a.a.createElement("span",{className:"avenir-bold font-size--3"},c))})),a.a.createElement("div",{style:{width:"60px",height:"100%",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}},a.a.createElement("svg",{viewBox:"0 0 24 24",height:"24",width:"24",fill:S},a.a.createElement("path",{d:"M12.5 7.5a1 1 0 1 1 1-1 1.002 1.002 0 0 1-1 1zM13 18V9h-2v1h1v8h-1v1h3v-1zm9.8-5.5A10.3 10.3 0 1 1 12.5 2.2a10.297 10.297 0 0 1 10.3 10.3zm-1 0a9.3 9.3 0 1 0-9.3 9.3 9.31 9.31 0 0 0 9.3-9.3z"}),a.a.createElement("path",{fill:"none",d:"M0 0h24v24H0z"})))))},k=n(16),F=n.n(k),P=n(3),M=n(38),N=n.n(M);function D(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?D(Object(n),!0).forEach((function(t){F()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):D(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var A={top:15,right:20,bottom:30,left:40},I=function(e){var t=e.xDomain,n=e.yDomain,i=e.children,c=N()(),o=Object(r.useRef)(),s=Object(r.useRef)(),u=a.a.useState(),l=p()(u,2),f=l[0],d=l[1],m=a.a.useState(),b=p()(m,2),h=b[0],v=b[1],y=function(){v((function(e){return z(z({},e),{},{lastUpdateTime:new Date})}))};return Object(r.useEffect)((function(){!function(){var e=o.current,r=e.offsetWidth-A.left-A.right,a=e.offsetHeight-A.top-A.bottom;s.current={height:a,width:r},Object(P.h)(e).append("svg").attr("width","100%").attr("height",a+A.top+A.bottom).append("g").attr("transform","translate(".concat(A.left,", ").concat(A.top,")"));var i=Object(P.h)(e).select("svg"),c=i.node(),u=i.select("g").node(),l=Object(P.e)().paddingInner(.2).range([0,r]).domain(t),f=Object(P.f)().range([a,0]).domain(n).nice();d({svg:c,g:u,margin:A,dimension:s.current}),v({x:l,y:f})}()}),[]),Object(r.useEffect)((function(){h&&n&&(h.y.domain(n).nice(),y())}),[n]),a.a.useEffect((function(){!function(){var e=o.current;if(e&&f&&h){var t=h.x,n=e.offsetWidth-A.left-A.right;s.current.width=n,t.range([0,n]),y()}}()}),[c]),a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{ref:o,style:{position:"relative",width:"100%",height:"100%"}}),a.a.Children.map(i,(function(e){return a.a.cloneElement(e,{svgContainerData:f,scales:h})})))},T=n(5),L=Object(P.i)("%b"),R=function(e){var t=e.svgContainerData,n=e.scales;return a.a.useEffect((function(){var e,r,a,i,c,o,s,u,l,f,d,p,m;t&&n&&(e=t.dimension,r=t.g,a=e.height,i=e.width,c=Object(P.h)(r),o=n.x.domain(),s=o[0].split("-").map((function(e){return+e})),u=new Date(s[0],s[1]-1,s[2]),l=o[o.length-1].split("-").map((function(e){return+e})),f=new Date(l[0],l[1]-1,l[2]),d=Object(P.g)().range([0,i]).domain([u,f]),p=Object(P.a)(d).tickFormat((function(e){return L(e)})),(m=c.selectAll(".x.axis")).size()?m.attr("transform","translate(0,"+a+")").call(p):c.append("g").attr("class","x axis").attr("transform","translate(0,"+a+")").call(p),function(){var e=t.g,r=t.dimension.width,a=n.y,i=Object(P.h)(e),c=Object(P.b)(a).ticks(5).tickSizeInner(-r).tickPadding(5).tickFormat((function(e){return T.numberFns.abbreviateNumber(+e,0)})),o=i.selectAll(".y.axis");o.size()?o.call(c):i.append("g").attr("class","y axis").call(c)}())}),[t,n]),null},U=n(11),B="bar-rect-group-".concat(Object(U.generate)()),_="bar-rect-".concat(Object(U.generate)()),W=function(e){var t=e.data,n=e.fillColor,r=e.svgContainerData,i=e.scales,c=a.a.useRef(),o=function(){var e=Object(P.h)(c.current).selectAll(".".concat(B));e.size()&&e.remove()};return a.a.useEffect((function(){var e;r&&(e=r.g,c.current=Object(P.h)(e).append("g").node())}),[r]),a.a.useEffect((function(){var e,a,s;r&&i&&t&&(e=r.dimension.height,a=i.x,s=i.y,o(),Object(P.h)(c.current).append("g").attr("class",B).selectAll(".".concat(_)).data(t).enter().append("rect").attr("class",_).style("fill",n).attr("x",(function(e){return a(e.x)})).attr("width",a.bandwidth()).attr("y",(function(e){return s(e.y)})).attr("height",(function(t){return e-s(t.y)})))}),[i,t]),null},G="line-".concat(Object(U.generate)()),V=function(e){var t=e.data,n=e.strokeColor,r=e.svgContainerData,i=e.scales,c=a.a.useRef(),o=function(){var e=Object(P.h)(c.current).selectAll(".".concat(G));e.size()&&e.remove().exit()};return a.a.useEffect((function(){var e;r&&(e=r.g,c.current=Object(P.h)(e).append("g").node())}),[r]),a.a.useEffect((function(){var e,a,s,u,l;r&&i&&t&&(e=Object(P.h)(c.current),a=i.x,s=i.y,u=a.bandwidth()/2,l=Object(P.c)().x((function(e){return a(e.x)+u})).y((function(e){return s(e.y)})),o(),e.append("path").data([t]).attr("class",G).attr("d",l).style("fill","none").style("stroke",n).style("stroke-width",2))}),[i,t]),null},H={"new-cases":"NewCases",death:"Deaths",confirmed:"Confirmed"},q=function(e){var t,n=e.activeTrend,i=e.data,c=H[n],o=Object(r.useState)(!1),s=p()(o,2),u=s[0];s[1];return i&&i.length?a.a.createElement("div",{style:{width:"100%",height:"170px",backgroundColor:O}},a.a.createElement(I,{xDomain:i.map((function(e){return e.attributes.dt})),yDomain:(t=i.map((function(e){return u?Math.round(e.attributes[c]/e.attributes.Population*1e5):e.attributes[c]})),[0,Object(P.d)(t)])},a.a.createElement(R,null),a.a.createElement(W,{fillColor:S,data:i&&i.length?i.map((function(e){var t=u?Math.round(e.attributes[c]/e.attributes.Population*1e5):e.attributes[c];return{x:e.attributes.dt,y:t}})):[]}),a.a.createElement(V,{strokeColor:x,data:function(){if(!i||!i.length||"new-cases"!==n)return[];for(var e=[],t=i.length-1;t>0;t--){var r=i[t],a=r.attributes.dt,o=0,s=t-6>=0?t-6:0,l=t+1,f=i.slice(s,l);f.forEach((function(e){return o+=e.attributes[c]}));var d=o/f.length;u&&(d=d/r.attributes.Population*1e5),d=(d=Math.round(d))<0?0:d,e.push({x:a,y:d})}return e}()}))):null},J=function(e){var t=e.children;return a.a.createElement("div",{style:{position:"absolute",left:"15px",right:"15px",bottom:"25px",boxSizing:"border-box",boxShadow:"0 0 10px 2px ".concat(E),backgroundColor:O}},t)};function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){F()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var K=function(e){var t,n,r,i,c,o,s,u=e.locationName,l=e.data,f=e.isMobile,d=void 0!==f&&f,p=e.closeBtnOnClick;return a.a.createElement("div",{style:{position:"relative",width:"100%",padding:".4rem 1.35rem",display:d?"block":"flex",alignItems:"center",boxSizing:"border-box",backgroundColor:w}},a.a.createElement("div",{style:{color:x,textTransform:"uppercase"}},a.a.createElement("span",{className:"avenir-bold font-size-2"},u)),a.a.createElement("div",{style:{flexGrow:1}},(t=l[l.length-7],n=l[l.length-1],r=T.numberFns.numberWithCommas(n.attributes.Confirmed),i=T.numberFns.numberWithCommas(n.attributes.Deaths),c=T.numberFns.numberWithCommas(n.attributes.Confirmed-t.attributes.Confirmed),o=T.numberFns.numberWithCommas(n.attributes.Deaths-t.attributes.Deaths),s=T.numberFns.numberWithCommas(n.attributes.Population),a.a.createElement("div",{className:"font-size--2 avenir-bold text-theme-color-khaki",style:{display:d?"block":"flex",alignItems:"center",padding:"0 ".concat(d?"0":"1rem")}},a.a.createElement("div",{className:"margin-right-1"},a.a.createElement("span",{className:"text-theme-color-red"},"Population")," ",s),a.a.createElement("div",{className:"margin-right-1"},a.a.createElement("span",{className:"text-theme-color-red"},c)," new cases and ",a.a.createElement("span",{className:"text-theme-color-red"},o)," deaths this week"),a.a.createElement("div",{className:"margin-right-1"},a.a.createElement("span",{className:"text-theme-color-red"},r)," cumulative cases and ",a.a.createElement("span",{className:"text-theme-color-red"},i)," deaths")))),a.a.createElement("div",{style:Y({cursor:"pointer"},d?{position:"absolute",top:".5rem",right:".5rem"}:null),onClick:p},a.a.createElement("svg",{viewBox:"0 0 32 32",height:"32",width:"32",fill:S},a.a.createElement("path",{d:"M23.985 8.722L16.707 16l7.278 7.278-.707.707L16 16.707l-7.278 7.278-.707-.707L15.293 16 8.015 8.722l.707-.707L16 15.293l7.278-7.278z"}),a.a.createElement("path",{fill:"none",d:"M0 0h32v32H0z"}))))},X={},Z=function(){var e=f()(u.a.mark((function e(t){var n,r,a,i,c,o,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.countyFIPS,r=t.stateName,!X[a=n||r]){e.next=4;break}return e.abrupt("return",X[a]);case 4:return i="".concat("https://services9.arcgis.com/6Hv9AANartyT7fJW/ArcGIS/rest/services/USCounties_cases_V1/FeatureServer/1","/query"),c=n?{f:"json",where:"FIPS='".concat(n,"'"),outFields:"dt,Confirmed,Deaths,NewCases,Population",orderByFields:"dt"}:{f:"json",where:"ST_Name='".concat(r,"'"),outFields:"*",orderByFields:"dt",groupByFieldsForStatistics:"ST_Name,dt",outStatistics:JSON.stringify([{statisticType:"sum",onStatisticField:"Confirmed",outStatisticFieldName:"Confirmed"},{statisticType:"sum",onStatisticField:"Deaths",outStatisticFieldName:"Deaths"},{statisticType:"sum",onStatisticField:"NewCases",outStatisticFieldName:"NewCases"},{statisticType:"sum",onStatisticField:"Population",outStatisticFieldName:"Population"}])},e.prev=6,e.next=9,b.a.get(i,{params:new URLSearchParams(c)});case 9:if(o=e.sent,!(s=o.data)||!s.features){e.next=14;break}return X[a]=s.features,e.abrupt("return",s.features);case 14:e.next=19;break;case 16:e.prev=16,e.t0=e.catch(6);case 19:return e.abrupt("return",null);case 20:case"end":return e.stop()}}),e,null,[[6,16]])})));return function(t){return e.apply(this,arguments)}}(),$=function(){var e=Object(r.useState)(function(){var e=T.urlFns.parseQuery();if(!e["@"])return null;var t=e["@"].split(",").map((function(e){return+e})),n=p()(t,3);return{lon:n[0],lat:n[1],zoom:n[2]}}()),t=p()(e,2),n=t[0],a=t[1];return Object(r.useEffect)((function(){if(n){var e=n.lon,t=n.lat,r=n.zoom;T.urlFns.updateQueryParam({key:"@",value:"".concat(e,",").concat(t,",").concat(r)})}}),[n]),{locationFromURL:n,saveLocationInURL:a}},ee=T.miscFns.isMobileDevice(),te=T.urlFns.parseQuery().trend,ne=function(){var e=$(),t=e.locationFromURL,n=e.saveLocationInURL,i=Object(r.useState)(te||"new-cases"),c=p()(i,2),o=c[0],s=c[1],l=Object(r.useState)(),d=p()(l,2),m=d[0],x=d[1],w=Object(r.useState)(),O=p()(w,2),E=O[0],S=O[1],j=Object(r.useState)(),k=p()(j,2),F=k[0],P=k[1],M=Object(r.useState)(),N=p()(M,2),D=N[0],z=N[1],A=function(){var e=f()(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(g["covid19-data-us-counties-url"]);case 3:return t=e.sent,x(t.data),e.next=7,b.a.get(g["covid19-data-us-states-url"]);case 7:n=e.sent,S(n.data),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){A()}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement(h,{webmapId:g["webmap-id"],initialMapCenterLocation:t,onStationary:n},a.a.createElement(v,{key:"US-Counties",features:m,activeTrend:o,size:18,visibleScale:g["us-counties-layer-visible-scale"]}),a.a.createElement(v,{key:"US-States",features:E,activeTrend:o,size:24,visibleScale:g["us-states-layer-visible-scale"]}),a.a.createElement(y,{key:"query-4-US-Counties",itemId:g["us-counties-feature-layer-item-id"],outFields:["FIPS","NAME","STATE_NAME"],visibleScale:g["us-counties-layer-visible-scale"],onSelect:function(){var e=f()(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.attributes.NAME," CO, ").concat(t.attributes.STATE_NAME),z(n),e.next=4,Z({countyFIPS:t.attributes.FIPS});case 4:r=e.sent,P(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),a.a.createElement(y,{key:"query-4-US-States",itemId:g["us-states-feature-layer-item-id"],outFields:["STATE_NAME"],visibleScale:g["us-states-layer-visible-scale"],onSelect:function(){var e=f()(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.attributes.STATE_NAME,z(n),e.next=4,Z({stateName:n});case 4:r=e.sent,P(r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()})),a.a.createElement(C,{isMobile:ee,activeTrend:o,activeTrendOnChange:s}),F?a.a.createElement(J,null,a.a.createElement(K,{locationName:D,data:F,isMobile:ee,closeBtnOnClick:P.bind(void 0,null)}),a.a.createElement(q,{activeTrend:o,data:F})):null)};Object(o.setDefaultOptions)({url:"https://js.arcgis.com/next/"}),c.a.render(a.a.createElement(ne,null),document.getElementById("root"))},86:function(e,t,n){}});
//# sourceMappingURL=main.e93361bf123a067fe37a.js.map