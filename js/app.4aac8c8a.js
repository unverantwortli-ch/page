(function(e){function t(t){for(var r,c,o=t[0],l=t[1],u=t[2],h=0,b=[];h<o.length;h++)c=o[h],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);s&&s(t);while(b.length)b.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var l=n[o];0!==i[l]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var s=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"327a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),i=(n("b0c0"),{id:"wrapper"}),a=Object(r["d"])("header",null,[Object(r["d"])("h1",null,"Unverantwortli.ch"),Object(r["d"])("p",null,"Die Unverantwortlich-Liste hält Unternehmen und Organisationen, die in der Vergangenheit nicht aktiv am Responsible Disclosure teilgenommen haben."),Object(r["d"])("p",null,"Die Unternehmen und Organisationen haben den jeweiligen Melder einer Sicherheitslücke angezeigt oder verklagt."),Object(r["d"])("p",null,"Das stellt eine Gefahr für die allgemeine Sicherheit dar, weil gutartige Hacker eine Anzeige oder Klage zu befürchten haben.")],-1),c=Object(r["d"])("thead",null,[Object(r["d"])("tr",null,[Object(r["d"])("th",null,"Unternehmen"),Object(r["d"])("th",null,"Jahr des Vorfalles"),Object(r["d"])("th",null,"Quelle(n)")])],-1),o=["href"],l=Object(r["e"])('<footer><h2>Definition: Responsible Disclosure</h2><blockquote id="explanation"> „Finden unabhängige IT-Sicherheitsexperten Schwachstellen in Computerprogrammen, sogenannte Sicherheitslücken, gibt es für sie mehrere Möglichkeiten der Offenlegung. Bei einer Responsible Disclosure oder auch Coordinated Disclosure stimmt sich der Entdecker mit den verantwortlichen Stellen ab und veröffentlicht Einzelheiten zu der Schwachstelle erst, wenn der Entwickler genügend Zeit hatte, diese zu beheben.“<br> ~ Quelle: <a href="https://de.wikipedia.org/wiki/Responsible_Disclosure_(IT-Sicherheit)" target="_blank">Wikipedia</a></blockquote><p>Die Daten stammen aus der <a href="https://github.com/unverantwortli-ch/list" target="_blank">Liste auf github.com</a>. Möchtest du die Liste erweitern? Erstelle einfach einen Pull request.</p><p><a href="https://github.com/unverantwortli-ch/list" target="_blank">Die Liste auf github.com</a></p><p><a href="https://github.com/unverantwortli-ch/page" target="_blank">Das Projekt auf github.com</a></p><p id="hostedBy">Hosted by <a href="https://pages.github.com/" target="_blank">GitHub Pages</a></p><p><a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" style="border-width:0;" src="ccby4.png"></a><br> This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>. </p></footer>',1);function u(e,t,n,u,s,h){return Object(r["f"])(),Object(r["c"])("div",i,[a,Object(r["d"])("table",null,[c,Object(r["d"])("tbody",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(s.fools,(function(e){return Object(r["f"])(),Object(r["c"])("tr",{key:e.name},[Object(r["d"])("td",null,Object(r["h"])(e.name),1),Object(r["d"])("td",null,Object(r["h"])(e.year),1),Object(r["d"])("td",null,[(Object(r["f"])(!0),Object(r["c"])(r["a"],null,Object(r["g"])(e.proofs,(function(e){return Object(r["f"])(),Object(r["c"])("div",{key:e},[Object(r["d"])("a",{href:e,target:"_blank"},"Quelle ("+Object(r["h"])(h.getProofInfo(e))+")",9,o)])})),128))])])})),128))])]),l])}var s=n("1da1"),h=(n("96cf"),n("e2c1")),b=n("bc3a"),d=n.n(b),f={name:"App",data:function(){return{fools:[]}},mounted:function(){this.fetchList()},methods:{fetchList:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,d.a.get("https://raw.githubusercontent.com/unverantwortli-ch/list/main/list.yml");case 2:n=t.sent,e.fools=h["a"].load(n.data).fools;case 4:case"end":return t.stop()}}),t)})))()},getProofInfo:function(e){var t=document.createElement("a");return t.href=e,t.hostname}}},p=(n("8739"),n("6b0d")),g=n.n(p);const m=g()(f,[["render",u]]);var O=m;Object(r["b"])(O).mount("#app")},8739:function(e,t,n){"use strict";n("327a")}});
//# sourceMappingURL=app.4aac8c8a.js.map