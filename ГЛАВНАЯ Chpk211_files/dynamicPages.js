(window.webpackJsonp__wix_thunderbolt_app=window.webpackJsonp__wix_thunderbolt_app||[]).push([[44],{417:function(e,t,r){"use strict";r.r(t),r.d(t,"site",(function(){return S}));var a,n=r(0),o=r(7),i=r(5),c=r(25),u=r(44),s=r(280),d=r(454),p=r(32),l=r(12),f=r(357),b=r(325);!function(e){e.PAGES="pages",e.SITEMAP="sitemap"}(a||(a={}));var h=function(e){return/(^https?)|(^data)|(^blob)|(^\/\/)/.test(e)},v=function(e){return e.replace("./","").split("/")},_=function(e,t,r,a,n){var o=e.optionsData.bodyData,i=o.routerPrefix,c=o.config,u=o.pageRoles,s=function(e){return"/"+v(e).slice(1).join("/")}(t),d=""+a+i+s+r;return JSON.stringify({routerPrefix:i,routerSuffix:s,fullUrl:d,config:c,pageRoles:u,requestInfo:{formFactor:n}})},g=function(e,t,r,a,o,i,c){var u=e.urlData,s=u.basePath,d=u.queryParams,p=u.appDefinitionId;return{url:function(e,t,r){var a=new URL(e);return a.searchParams.append(t,r),a.toString()}(s+"/"+c+"?"+d,"instance",r.getAppInstanceByAppDefId(p)),options:Object(n.a)(Object(n.a)({method:"POST",body:_(e,a,o,i,t),headers:e.optionsData.headers},e.optionsData.credentials?{credentials:e.optionsData.credentials}:{}),e.optionsData.mode?{mode:e.optionsData.mode}:{})}},O="__403__dp",j="__404__dp",D="__500__dp",U="__uknown_error__dp",I=function(e,t){return/^\/(.*)/.test(e)?"."+e:"./"+t+"/"+e},w=Object(o.h)([Object(o.f)(c.f,f.a),u.b,l.b,p.a,s.a,d.a,i.g],(function(e,t,r,o,i,c,u){var s=e.prefixToRouterFetchData,d=e.routerPagesSeoToIdMap,p=e.externalBaseUrl,l=e.viewMode;return{getSitemapFetchParams:function(e){var t=s[e];return t?g(t,l,o,u.getRelativeEncodedUrl(),u.getParsedUrl().search,p,a.SITEMAP):null},handle:function(e){return Object(n.b)(this,void 0,void 0,(function(){var u,f,_,w,S,m=this;return Object(n.d)(this,(function(P){return!e.pageId&&e.relativeUrl&&e.parsedUrl&&e.relativeEncodedUrl?(R=e.relativeUrl,u=v(R)[0],(f=s[u])?(_=g(f,l,o,e.relativeEncodedUrl,e.parsedUrl.search,p,a.PAGES),w=_.url,S=_.options,[2,c.envFetch(w,S).then((function(a){return Object(n.b)(m,void 0,void 0,(function(){var o,c,s,d,l,f,v,_,g,w,S,m;return Object(n.d)(this,(function(P){switch(P.label){case 0:if(!a.ok)throw a;return[4,a.json()];case 1:return o=P.sent(),c=o.result,s=o.exception,d=c.page,l=c.data,f=c.head,v=c.tpaInnerRoute,_=c.publicData,g=c.redirectUrl,w=c.status,g?Object(b.e)(t)?(S=function(e,t,r,a){if(h(e))return e;var n=I(e,r),o=new URL(n,t+"/");return o.search=a,o.toString()}(g,p,u,e.parsedUrl.search),r.isInSEO()?(r.setRedirectUrl(S),r.setCorvidSeoStatusCode(w)):function(e){i.setHead('<meta http-equiv="refresh" content="0;url='+e+'" />')}(S),[2,null]):(h(g)&&t.location.assign(g),[2,{redirectUrl:I(g,u)}]):[2,(m=function(e,t){var r=e.status,a=e.page,n=e.redirectUrl;return t?D:403===r?O:404===r?j:a||n?null:U}(c,s))?Object(n.a)(Object(n.a)({},e),{pageId:m}):Object(n.a)(Object(n.a)({},e),{pageId:d,dynamicRouteData:{pageData:l,pageHeadData:f,publicData:_,tpaInnerRoute:v}})]}}))}))})).catch((function(){return Object(b.e)(t)?null:Object(n.a)(Object(n.a)({},e),{pageId:D})}))]):d[u]?[2,Object(n.a)(Object(n.a)({},e),{pageId:j})]:[2,e]):[2,e];var R}))}))}}})),S=function(e){e(i.e.Dynamic,c.a).to(w)}}}]);
//# sourceMappingURL=https://static.parastorage.com/services/wix-thunderbolt/dist/dynamicPages.2ae011b2.chunk.min.js.map