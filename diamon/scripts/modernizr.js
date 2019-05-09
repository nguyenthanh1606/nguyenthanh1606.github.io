!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,a,i,s;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],t=C[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,a=0;a<e.length;a++)i=e[a],s=i.split("."),1===s.length?S[s[0]]=o:(!S[s[0]]||S[s[0]]instanceof Boolean||(S[s[0]]=new Boolean(S[s[0]])),S[s[0]][s[1]]=o),y.push((o?"":"no-")+s.join("-"))}}function a(e){var t=x.className,n=S._config.classPrefix||"";if(b&&(t=t.baseVal),S._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}S._config.enableClasses&&(t+=" "+n+e.join(" "+n),b?x.className.baseVal=t:x.className=t)}function i(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function s(e,t){return!!~(""+e).indexOf(t)}function l(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):b?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function u(e,t){return function(){return e.apply(t,arguments)}}function f(e,t,n){var o;for(var a in e)if(e[a]in t)return n===!1?e[a]:(o=t[e[a]],r(o,"function")?u(o,n||t):o);return!1}function c(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function d(){var e=t.body;return e||(e=l(b?"svg":"body"),e.fake=!0),e}function p(e,n,r,o){var a,i,s,u,f="modernizr",c=l("div"),p=d();if(parseInt(r,10))for(;r--;)s=l("div"),s.id=o?o[r]:f+(r+1),c.appendChild(s);return a=l("style"),a.type="text/css",a.id="s"+f,(p.fake?p:c).appendChild(a),p.appendChild(c),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",u=x.style.overflow,x.style.overflow="hidden",x.appendChild(p)),i=n(c,e),p.fake?(p.parentNode.removeChild(p),x.style.overflow=u,x.offsetHeight):c.parentNode.removeChild(c),!!i}function m(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(c(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var a=[];o--;)a.push("("+c(t[o])+":"+r+")");return a=a.join(" or "),p("@supports ("+a+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return n}function h(e,t,o,a){function u(){c&&(delete F.style,delete F.modElem)}if(a=r(a,"undefined")?!1:a,!r(o,"undefined")){var f=m(e,o);if(!r(f,"undefined"))return f}for(var c,d,p,h,v,g=["modernizr","tspan"];!F.style;)c=!0,F.modElem=l(g.shift()),F.style=F.modElem.style;for(p=e.length,d=0;p>d;d++)if(h=e[d],v=F.style[h],s(h,"-")&&(h=i(h)),F.style[h]!==n){if(a||r(o,"undefined"))return u(),"pfx"==t?h:!0;try{F.style[h]=o}catch(y){}if(F.style[h]!=v)return u(),"pfx"==t?h:!0}return u(),!1}function v(e,t,n,o,a){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+N.join(i+" ")+i).split(" ");return r(t,"string")||r(t,"undefined")?h(s,t,o,a):(s=(e+" "+_.join(i+" ")+i).split(" "),f(s,t,n))}function g(e,t,r){return v(e,n,n,t,r)}var y=[],C=[],E={_version:"3.1.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},S=function(){};S.prototype=E,S=new S;var x=t.documentElement,b="svg"===x.nodeName.toLowerCase();b||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function a(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function i(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=a(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||a(e);for(var o=n.frag.cloneNode(),i=0,s=r(),l=s.length;l>i;i++)o.createElement(s[i]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=a(e);return!C.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||l(e,r),e}var f,c,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,c=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:i,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var w="Moz O ms Webkit",_=E._config.usePrefixes?w.toLowerCase().split(" "):[];E._domPrefixes=_;var N=E._config.usePrefixes?w.split(" "):[];E._cssomPrefixes=N;var j=function(t){var r,o=prefixes.length,a=e.CSSRule;if("undefined"==typeof a)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in a)return"@"+t;for(var i=0;o>i;i++){var s=prefixes[i],l=s.toUpperCase()+"_"+r;if(l in a)return"@-"+s.toLowerCase()+"-"+t}return!1};E.atRule=j;var k={elem:l("modernizr")};S._q.push(function(){delete k.elem});var F={style:k.elem.style};S._q.unshift(function(){delete F.style});E.testProp=function(e,t,r){return h([e],n,t,r)};E.testAllProps=v;E.prefixed=function(e,t,n){return 0===e.indexOf("@")?j(e):(-1!=e.indexOf("-")&&(e=i(e)),t?v(e,t,n):v(e,"pfx"))};E.testAllProps=g,o(),a(y),delete E.addTest,delete E.addAsyncTest;for(var P=0;P<S._q.length;P++)S._q[P]();e.Modernizr=S}(window,document);