!function(){"use strict";var e,n={273:function(){var e=window.wp.blocks,n=window.wp.element,o=window.wp.i18n,t=window.wp.blockEditor;(0,e.registerBlockType)("create-block/testimonial-block",{edit:function(){return(0,n.createElement)("p",(0,t.useBlockProps)(),(0,o.__)("Testimonial Block – hello from the editor!","testimonial-block"))},save:function(){return(0,n.createElement)("p",t.useBlockProps.save(),(0,o.__)("Testimonial Block – hello from the saved content!","testimonial-block"))}})}},o={};function t(e){var r=o[e];if(void 0!==r)return r.exports;var i=o[e]={exports:{}};return n[e](i,i.exports,t),i.exports}t.m=n,e=[],t.O=function(n,o,r,i){if(!o){var l=1/0;for(s=0;s<e.length;s++){o=e[s][0],r=e[s][1],i=e[s][2];for(var c=!0,u=0;u<o.length;u++)(!1&i||l>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[u])}))?o.splice(u--,1):(c=!1,i<l&&(l=i));if(c){e.splice(s--,1);var a=r();void 0!==a&&(n=a)}}return n}i=i||0;for(var s=e.length;s>0&&e[s-1][2]>i;s--)e[s]=e[s-1];e[s]=[o,r,i]},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={826:0,431:0};t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,l=o[0],c=o[1],u=o[2],a=0;if(l.some((function(n){return 0!==e[n]}))){for(r in c)t.o(c,r)&&(t.m[r]=c[r]);if(u)var s=u(t)}for(n&&n(o);a<l.length;a++)i=l[a],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(s)},o=self.webpackChunktestimonial_block=self.webpackChunktestimonial_block||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var r=t.O(void 0,[431],(function(){return t(273)}));r=t.O(r)}();