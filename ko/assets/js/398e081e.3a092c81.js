"use strict";(self.webpackChunkadguard_knowledge_base=self.webpackChunkadguard_knowledge_base||[]).push([[2776],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return n?a.createElement(g,i(i({ref:t},c),{},{components:n})):a.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9824:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(7462),r=(n(7294),n(4137));const o={title:"Local adguard.com domain",sidebar_position:3},i=void 0,l={unversionedId:"general/https-filtering/local-adguard-com-domain",id:"general/https-filtering/local-adguard-com-domain",title:"Local adguard.com domain",description:"Users of AdGuard for Windows, Mac, and Android may notice that AdGuard adds a small script to every web page, that is loaded from the local.adguard.org domain.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/general/https-filtering/local-adguard-com-domain.md",sourceDirName:"general/https-filtering",slug:"/general/https-filtering/local-adguard-com-domain",permalink:"/KnowledgeBase/ko/general/https-filtering/local-adguard-com-domain",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBase/edit/master/docs/general/https-filtering/local-adguard-com-domain.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Local adguard.com domain",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTPS \ud544\ud130\ub9c1: \uc54c\ub824\uc9c4 \ubb38\uc81c",permalink:"/KnowledgeBase/ko/general/https-filtering/known-issues"},next:{title:"Browsing Security",permalink:"/KnowledgeBase/ko/general/browsing-security"}},s={},d=[{value:"Technical explanation",id:"technical-explanation",level:3},{value:"Verification",id:"verification",level:3}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Users of AdGuard for Windows, Mac, and Android may notice that AdGuard adds a small script to every web page, that is loaded from the ",(0,r.kt)("inlineCode",{parentName:"p"},"local.adguard.org")," domain."),(0,r.kt)("p",null,"First of all, don't worry, this is not a real domain, and there is actually no real server with that name. This domain is used to apply cosmetic filtering to web pages, but everything is done locally right on your device without connecting to any server."),(0,r.kt)("h3",{id:"technical-explanation"},"Technical explanation"),(0,r.kt)("p",null,"But what's going on and why is it done? Please read the technical explanation below."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"AdGuard is a network-level content blocker so it cannot simply add custom Javascript and CSS to webpages like what browser extensions do. However, doing this is crucial for quality content blocking."),(0,r.kt)("li",{parentName:"ol"},'In order to do it AdGuard injects a "content script" that looks like this: ',(0,r.kt)("inlineCode",{parentName:"li"},'<script src="https://local.adguard.org/.../content-script.js">'),'. This "content script" takes care of cosmetic filtering, hides or removes ad content from the web pages.'),(0,r.kt)("li",{parentName:"ol"},"Connections to the IP address of the ",(0,r.kt)("inlineCode",{parentName:"li"},"local.adguard.org")," domain are intercepted by AdGuard on the network level and ",(0,r.kt)("strong",{parentName:"li"},"processed locally"),'. This is why that domain has a "static" IP address that does not change for years.')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Why do we need to use a real IP address for that?")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We cannot use ",(0,r.kt)("inlineCode",{parentName:"li"},"127.0.0.1")," as the browsers won't accept it."),(0,r.kt)("li",{parentName:"ul"},"Using some IP address from the private subnets is possible, but this solution has two downsides.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"First, there is a slight chance of intersecting with an existing intranet service and breaking access to it."),(0,r.kt)("li",{parentName:"ul"},"Second, some DNS servers may consider this a DNS rebinding attack and refuse to respond to ",(0,r.kt)("inlineCode",{parentName:"li"},"local.adguard.org"),".")))),(0,r.kt)("h3",{id:"verification"},"Verification"),(0,r.kt)("p",null,"This is easy to verify. If you disable AdGuard, you'll see that it is simply impossible to establish connection to ",(0,r.kt)("inlineCode",{parentName:"p"},"local.adguard.org")," since there is no server with that address. Just try opening it in your browser when AdGuard is disabled."))}p.isMDXComponent=!0}}]);