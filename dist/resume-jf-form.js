!function(e){var t={};function o(a){if(t[a])return t[a].exports;var i=t[a]={i:a,l:!1,exports:{}};return e[a].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(a,i,function(t){return e[t]}.bind(null,i));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const a=new WeakMap,i=e=>"function"==typeof e&&a.has(e),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,r=(e,t,o=null)=>{for(;t!==o;){const o=t.nextSibling;e.removeChild(t),t=o}},s={},l={},c=`{{lit-${String(Math.random()).slice(2)}}}`,f=`\x3c!--${c}--\x3e`,d=new RegExp(`${c}|${f}`),b="$lit$";class m{constructor(e,t){this.parts=[],this.element=t;const o=[],a=[],i=document.createTreeWalker(t.content,133,null,!1);let n=0,r=-1,s=0;const{strings:l,values:{length:f}}=e;for(;s<f;){const e=i.nextNode();if(null!==e){if(r++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:o}=t;let a=0;for(let e=0;e<o;e++)h(t[e].name,b)&&a++;for(;a-- >0;){const t=l[s],o=g.exec(t)[2],a=o.toLowerCase()+b,i=e.getAttribute(a);e.removeAttribute(a);const n=i.split(d);this.parts.push({type:"attribute",index:r,name:o,strings:n}),s+=n.length-1}}"TEMPLATE"===e.tagName&&(a.push(e),i.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(c)>=0){const a=e.parentNode,i=t.split(d),n=i.length-1;for(let t=0;t<n;t++){let o,n=i[t];if(""===n)o=u();else{const e=g.exec(n);null!==e&&h(e[2],b)&&(n=n.slice(0,e.index)+e[1]+e[2].slice(0,-b.length)+e[3]),o=document.createTextNode(n)}a.insertBefore(o,e),this.parts.push({type:"node",index:++r})}""===i[n]?(a.insertBefore(u(),e),o.push(e)):e.data=i[n],s+=n}}else if(8===e.nodeType)if(e.data===c){const t=e.parentNode;null!==e.previousSibling&&r!==n||(r++,t.insertBefore(u(),e)),n=r,this.parts.push({type:"node",index:r}),null===e.nextSibling?e.data="":(o.push(e),r--),s++}else{let t=-1;for(;-1!==(t=e.data.indexOf(c,t+1));)this.parts.push({type:"node",index:-1}),s++}}else i.currentNode=a.pop()}for(const e of o)e.parentNode.removeChild(e)}}const h=(e,t)=>{const o=e.length-t.length;return o>=0&&e.slice(o)===t},p=e=>-1!==e.index,u=()=>document.createComment(""),g=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class v{constructor(e,t,o){this.__parts=[],this.template=e,this.processor=t,this.options=o}update(e){let t=0;for(const o of this.__parts)void 0!==o&&o.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],o=this.template.parts,a=document.createTreeWalker(e,133,null,!1);let i,r=0,s=0,l=a.nextNode();for(;r<o.length;)if(i=o[r],p(i)){for(;s<i.index;)s++,"TEMPLATE"===l.nodeName&&(t.push(l),a.currentNode=l.content),null===(l=a.nextNode())&&(a.currentNode=t.pop(),l=a.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(l.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(l,i.name,i.strings,this.options));r++}else this.__parts.push(void 0),r++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const w=` ${c} `;class x{constructor(e,t,o,a){this.strings=e,this.values=t,this.type=o,this.processor=a}getHTML(){const e=this.strings.length-1;let t="",o=!1;for(let a=0;a<e;a++){const e=this.strings[a],i=e.lastIndexOf("\x3c!--");o=(i>-1||o)&&-1===e.indexOf("--\x3e",i+1);const n=g.exec(e);t+=null===n?e+(o?w:f):e.substr(0,n.index)+n[1]+n[2]+b+n[3]+c}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const k=e=>null===e||!("object"==typeof e||"function"==typeof e),y=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class z{constructor(e,t,o){this.dirty=!0,this.element=e,this.name=t,this.strings=o,this.parts=[];for(let e=0;e<o.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new S(this)}_getValue(){const e=this.strings,t=e.length-1;let o="";for(let a=0;a<t;a++){o+=e[a];const t=this.parts[a];if(void 0!==t){const e=t.value;if(k(e)||!y(e))o+="string"==typeof e?e:String(e);else for(const t of e)o+="string"==typeof t?t:String(t)}}return o+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class S{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===s||k(e)&&e===this.value||(this.value=e,i(e)||(this.committer.dirty=!0))}commit(){for(;i(this.value);){const e=this.value;this.value=s,e(this)}this.value!==s&&this.committer.commit()}}class _{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(u()),this.endNode=e.appendChild(u())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=u()),e.__insert(this.endNode=u())}insertAfterPart(e){e.__insert(this.startNode=u()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}const e=this.__pendingValue;e!==s&&(k(e)?e!==this.value&&this.__commitText(e):e instanceof x?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):y(e)?this.__commitIterable(e):e===l?(this.value=l,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,o="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=o:this.__commitNode(document.createTextNode(o)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof v&&this.value.template===t)this.value.update(e.values);else{const o=new v(t,e.processor,this.options),a=o._clone();o.update(e.values),this.__commitNode(a),this.value=o}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let o,a=0;for(const i of e)void 0===(o=t[a])&&(o=new _(this.options),t.push(o),0===a?o.appendIntoPart(this):o.insertAfterPart(t[a-1])),o.setValue(i),o.commit(),a++;a<t.length&&(t.length=a,this.clear(o&&o.endNode))}clear(e=this.startNode){r(this.startNode.parentNode,e.nextSibling,this.endNode)}}class j{constructor(e,t,o){if(this.value=void 0,this.__pendingValue=void 0,2!==o.length||""!==o[0]||""!==o[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=o}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}if(this.__pendingValue===s)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=s}}class q extends z{constructor(e,t,o){super(e,t,o),this.single=2===o.length&&""===o[0]&&""===o[1]}_createPart(){return new P(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class P extends S{}let C=!1;try{const e={get capture(){return C=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class N{constructor(e,t,o){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=o,this.__boundHandleEvent=e=>this.handleEvent(e)}setValue(e){this.__pendingValue=e}commit(){for(;i(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=s,e(this)}if(this.__pendingValue===s)return;const e=this.__pendingValue,t=this.value,o=null==e||null!=t&&(e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive),a=null!=e&&(null==t||o);o&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),a&&(this.__options=G(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=s}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const G=e=>e&&(C?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const A=new class{handleAttributeExpressions(e,t,o,a){const i=t[0];if("."===i){return new q(e,t.slice(1),o).parts}return"@"===i?[new N(e,t.slice(1),a.eventContext)]:"?"===i?[new j(e,t.slice(1),o)]:new z(e,t,o).parts}handleTextExpression(e){return new _(e)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function E(e){let t=$.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},$.set(e.type,t));let o=t.stringsArray.get(e.strings);if(void 0!==o)return o;const a=e.strings.join(c);return void 0===(o=t.keyString.get(a))&&(o=new m(e,e.getTemplateElement()),t.keyString.set(a,o)),t.stringsArray.set(e.strings,o),o}const $=new Map,T=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const O=(e,...t)=>new x(e,t,"html",A),R=133;function U(e,t){const{element:{content:o},parts:a}=e,i=document.createTreeWalker(o,R,null,!1);let n=V(a),r=a[n],s=-1,l=0;const c=[];let f=null;for(;i.nextNode();){s++;const e=i.currentNode;for(e.previousSibling===f&&(f=null),t.has(e)&&(c.push(e),null===f&&(f=e)),null!==f&&l++;void 0!==r&&r.index===s;)r.index=null!==f?-1:r.index-l,r=a[n=V(a,n)]}c.forEach(e=>e.parentNode.removeChild(e))}const M=e=>{let t=11===e.nodeType?0:1;const o=document.createTreeWalker(e,R,null,!1);for(;o.nextNode();)t++;return t},V=(e,t=-1)=>{for(let o=t+1;o<e.length;o++){const t=e[o];if(p(t))return o}return-1};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const B=(e,t)=>`${e}--${t}`;let F=!0;void 0===window.ShadyCSS?F=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),F=!1);const I=e=>t=>{const o=B(t.type,e);let a=$.get(o);void 0===a&&(a={stringsArray:new WeakMap,keyString:new Map},$.set(o,a));let i=a.stringsArray.get(t.strings);if(void 0!==i)return i;const n=t.strings.join(c);if(void 0===(i=a.keyString.get(n))){const o=t.getTemplateElement();F&&window.ShadyCSS.prepareTemplateDom(o,e),i=new m(t,o),a.keyString.set(n,i)}return a.stringsArray.set(t.strings,i),i},L=["html","svg"],H=new Set,D=(e,t,o)=>{H.add(e);const a=o?o.element:document.createElement("template"),i=t.querySelectorAll("style"),{length:n}=i;if(0===n)return void window.ShadyCSS.prepareTemplateStyles(a,e);const r=document.createElement("style");for(let e=0;e<n;e++){const t=i[e];t.parentNode.removeChild(t),r.textContent+=t.textContent}(e=>{L.forEach(t=>{const o=$.get(B(t,e));void 0!==o&&o.keyString.forEach(e=>{const{element:{content:t}}=e,o=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{o.add(e)}),U(e,o)})})})(e);const s=a.content;o?function(e,t,o=null){const{element:{content:a},parts:i}=e;if(null==o)return void a.appendChild(t);const n=document.createTreeWalker(a,R,null,!1);let r=V(i),s=0,l=-1;for(;n.nextNode();){for(l++,n.currentNode===o&&(s=M(t),o.parentNode.insertBefore(t,o));-1!==r&&i[r].index===l;){if(s>0){for(;-1!==r;)i[r].index+=s,r=V(i,r);return}r=V(i,r)}}}(o,r,s.firstChild):s.insertBefore(r,s.firstChild),window.ShadyCSS.prepareTemplateStyles(a,e);const l=s.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==l)t.insertBefore(l.cloneNode(!0),t.firstChild);else if(o){s.insertBefore(r,s.firstChild);const e=new Set;e.add(r),U(o,e)}};window.JSCompiler_renameProperty=(e,t)=>e;const W={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},Y=(e,t)=>t!==e&&(t==t||e==e),J={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:Y},X=Promise.resolve(!0),K=1,Q=4,Z=8,ee=16,te=32,oe="finalized";class ae extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=X,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,o)=>{const a=this._attributeNameForProperty(o,t);void 0!==a&&(this._attributeToPropertyMap.set(a,o),e.push(a))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e,t=J){if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const o="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[o]},set(t){const a=this[e];this[o]=t,this._requestUpdate(e,a)},configurable:!0,enumerable:!0})}static finalize(){const e=Object.getPrototypeOf(this);if(e.hasOwnProperty(oe)||e.finalize(),this[oe]=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const o of t)this.createProperty(o,e[o])}}static _attributeNameForProperty(e,t){const o=t.attribute;return!1===o?void 0:"string"==typeof o?o:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t,o=Y){return o(e,t)}static _propertyValueFromAttribute(e,t){const o=t.type,a=t.converter||W,i="function"==typeof a?a:a.fromAttribute;return i?i(e,o):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const o=t.type,a=t.converter;return(a&&a.toAttribute||W.toAttribute)(e,o)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|te,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,o){t!==o&&this._attributeToProperty(e,o)}_propertyToAttribute(e,t,o=J){const a=this.constructor,i=a._attributeNameForProperty(e,o);if(void 0!==i){const e=a._propertyValueToAttribute(t,o);if(void 0===e)return;this._updateState=this._updateState|Z,null==e?this.removeAttribute(i):this.setAttribute(i,e),this._updateState=this._updateState&~Z}}_attributeToProperty(e,t){if(this._updateState&Z)return;const o=this.constructor,a=o._attributeToPropertyMap.get(e);if(void 0!==a){const e=o._classProperties.get(a)||J;this._updateState=this._updateState|ee,this[a]=o._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~ee}}_requestUpdate(e,t){let o=!0;if(void 0!==e){const a=this.constructor,i=a._classProperties.get(e)||J;a._valueHasChanged(this[e],t,i.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==i.reflect||this._updateState&ee||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,i))):o=!1}!this._hasRequestedUpdate&&o&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Q;const o=this._updatePromise;this._updatePromise=new Promise((o,a)=>{e=o,t=a});try{await o}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&te}get _hasRequestedUpdate(){return this._updateState&Q}get hasUpdated(){return this._updateState&K}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&K||(this._updateState=this._updateState|K,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Q}get updateComplete(){return this._getUpdateComplete()}_getUpdateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}ae[oe]=!0;const ie="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ne=Symbol();class re{constructor(e,t){if(t!==ne)throw new Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e}get styleSheet(){return void 0===this._styleSheet&&(ie?(this._styleSheet=new CSSStyleSheet,this._styleSheet.replaceSync(this.cssText)):this._styleSheet=null),this._styleSheet}toString(){return this.cssText}}const se=(e,...t)=>{const o=t.reduce((t,o,a)=>t+(e=>{if(e instanceof re)return e.cssText;if("number"==typeof e)return e;throw new Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(o)+e[a+1],e[0]);return new re(o,ne)};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litElementVersions||(window.litElementVersions=[])).push("2.2.1");const le=e=>e.flat?e.flat(1/0):function e(t,o=[]){for(let a=0,i=t.length;a<i;a++){const i=t[a];Array.isArray(i)?e(i,o):o.push(i)}return o}(e);class ce extends ae{static finalize(){super.finalize.call(this),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){le(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?ie?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof x&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}ce.finalized=!0,ce.render=(e,t,o)=>{if(!o||"object"!=typeof o||!o.scopeName)throw new Error("The `scopeName` option is required.");const a=o.scopeName,i=T.has(t),n=F&&11===t.nodeType&&!!t.host,s=n&&!H.has(a),l=s?document.createDocumentFragment():t;if(((e,t,o)=>{let a=T.get(t);void 0===a&&(r(t,t.firstChild),T.set(t,a=new _(Object.assign({templateFactory:E},o))),a.appendInto(t)),a.setValue(e),a.commit()})(e,l,Object.assign({templateFactory:I(a)},o)),s){const e=T.get(l);T.delete(l);const o=e.value instanceof v?e.value.template:void 0;D(a,l,o),r(t,t.firstChild),t.appendChild(l),T.set(t,e)}!i&&n&&window.ShadyCSS.styleElement(t.host)};const fe=se`
/*! bulma.io v0.7.5 | MIT License | github.com/jgthms/bulma */
@-webkit-keyframes spinAround {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}
@keyframes spinAround {
  from {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(359deg);
            transform: rotate(359deg);
  }
}

.delete, .modal-close, .is-unselectable, .button, .file, .breadcrumb, .pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis, .tabs {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.select:not(.is-multiple):not(.is-loading)::after, .navbar-link:not(.is-arrowless)::after {
  border: 3px solid transparent;
  border-radius: 2px;
  border-right: 0;
  border-top: 0;
  content: " ";
  display: block;
  height: 0.625em;
  margin-top: -0.4375em;
  pointer-events: none;
  position: absolute;
  top: 50%;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
  -webkit-transform-origin: center;
          transform-origin: center;
  width: 0.625em;
}

.box:not(:last-child), .content:not(:last-child), .notification:not(:last-child), .progress:not(:last-child), .table:not(:last-child), .table-container:not(:last-child), .title:not(:last-child),
.subtitle:not(:last-child), .block:not(:last-child), .highlight:not(:last-child), .breadcrumb:not(:last-child), .level:not(:last-child), .list:not(:last-child), .message:not(:last-child), .tabs:not(:last-child) {
  margin-bottom: 1.5rem;
}

.delete, .modal-close {
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgba(10, 10, 10, 0.2);
  border: none;
  border-radius: 290486px;
  cursor: pointer;
  pointer-events: auto;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 0;
  height: 20px;
  max-height: 20px;
  max-width: 20px;
  min-height: 20px;
  min-width: 20px;
  outline: none;
  position: relative;
  vertical-align: top;
  width: 20px;
}

.delete::before, .modal-close::before, .delete::after, .modal-close::after {
  background-color: white;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.delete::before, .modal-close::before {
  height: 2px;
  width: 50%;
}

.delete::after, .modal-close::after {
  height: 50%;
  width: 2px;
}

.delete:hover, .modal-close:hover, .delete:focus, .modal-close:focus {
  background-color: rgba(10, 10, 10, 0.3);
}

.delete:active, .modal-close:active {
  background-color: rgba(10, 10, 10, 0.4);
}

.is-small.delete, .is-small.modal-close {
  height: 16px;
  max-height: 16px;
  max-width: 16px;
  min-height: 16px;
  min-width: 16px;
  width: 16px;
}

.is-medium.delete, .is-medium.modal-close {
  height: 24px;
  max-height: 24px;
  max-width: 24px;
  min-height: 24px;
  min-width: 24px;
  width: 24px;
}

.is-large.delete, .is-large.modal-close {
  height: 32px;
  max-height: 32px;
  max-width: 32px;
  min-height: 32px;
  min-width: 32px;
  width: 32px;
}

.button.is-loading::after, .loader, .select.is-loading::after, .control.is-loading::after {
  -webkit-animation: spinAround 500ms infinite linear;
          animation: spinAround 500ms infinite linear;
  border: 2px solid #dbdbdb;
  border-radius: 290486px;
  border-right-color: transparent;
  border-top-color: transparent;
  content: "";
  display: block;
  height: 1em;
  position: relative;
  width: 1em;
}

.is-overlay, .image.is-square img,
.image.is-square .has-ratio, .image.is-1by1 img,
.image.is-1by1 .has-ratio, .image.is-5by4 img,
.image.is-5by4 .has-ratio, .image.is-4by3 img,
.image.is-4by3 .has-ratio, .image.is-3by2 img,
.image.is-3by2 .has-ratio, .image.is-5by3 img,
.image.is-5by3 .has-ratio, .image.is-16by9 img,
.image.is-16by9 .has-ratio, .image.is-2by1 img,
.image.is-2by1 .has-ratio, .image.is-3by1 img,
.image.is-3by1 .has-ratio, .image.is-4by5 img,
.image.is-4by5 .has-ratio, .image.is-3by4 img,
.image.is-3by4 .has-ratio, .image.is-2by3 img,
.image.is-2by3 .has-ratio, .image.is-3by5 img,
.image.is-3by5 .has-ratio, .image.is-9by16 img,
.image.is-9by16 .has-ratio, .image.is-1by2 img,
.image.is-1by2 .has-ratio, .image.is-1by3 img,
.image.is-1by3 .has-ratio, .modal, .modal-background, .hero-video {
  bottom: 0;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
}

.button, .input, .textarea, .select select, .file-cta,
.file-name, .pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis {
  -moz-appearance: none;
  -webkit-appearance: none;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 4px;
  box-shadow: none;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-left: calc(0.625em - 1px);
  padding-right: calc(0.625em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
}

.button:focus, .input:focus, .textarea:focus, .select select:focus, .file-cta:focus,
.file-name:focus, .pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus,
.pagination-ellipsis:focus, .is-focused.button, .is-focused.input, .is-focused.textarea, .select select.is-focused, .is-focused.file-cta,
.is-focused.file-name, .is-focused.pagination-previous,
.is-focused.pagination-next,
.is-focused.pagination-link,
.is-focused.pagination-ellipsis, .button:active, .input:active, .textarea:active, .select select:active, .file-cta:active,
.file-name:active, .pagination-previous:active,
.pagination-next:active,
.pagination-link:active,
.pagination-ellipsis:active, .is-active.button, .is-active.input, .is-active.textarea, .select select.is-active, .is-active.file-cta,
.is-active.file-name, .is-active.pagination-previous,
.is-active.pagination-next,
.is-active.pagination-link,
.is-active.pagination-ellipsis {
  outline: none;
}

.button[disabled], .input[disabled], .textarea[disabled], .select select[disabled], .file-cta[disabled],
.file-name[disabled], .pagination-previous[disabled],
.pagination-next[disabled],
.pagination-link[disabled],
.pagination-ellipsis[disabled],
fieldset[disabled] .button,
fieldset[disabled] .input,
fieldset[disabled] .textarea,
fieldset[disabled] .select select,
.select fieldset[disabled] select,
fieldset[disabled] .file-cta,
fieldset[disabled] .file-name,
fieldset[disabled] .pagination-previous,
fieldset[disabled] .pagination-next,
fieldset[disabled] .pagination-link,
fieldset[disabled] .pagination-ellipsis {
  cursor: not-allowed;
}

/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

ul {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

html {
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
embed,
iframe,
object,
video {
  height: auto;
  max-width: 100%;
}

audio {
  max-width: 100%;
}

iframe {
  border: 0;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

td:not([align]),
th:not([align]) {
  text-align: left;
}

html {
  background-color: white;
  font-size: 16px;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  min-width: 300px;
  overflow-x: hidden;
  overflow-y: scroll;
  text-rendering: optimizeLegibility;
  -webkit-text-size-adjust: 100%;
     -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
          text-size-adjust: 100%;
}

article,
aside,
figure,
footer,
header,
hgroup,
section {
  display: block;
}

body,
button,
input,
select,
textarea {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

code,
pre {
  -moz-osx-font-smoothing: auto;
  -webkit-font-smoothing: auto;
  font-family: monospace;
}

body {
  color: #4a4a4a;
  font-size: 1em;
  font-weight: 400;
  line-height: 1.5;
}

a {
  color: #3273dc;
  cursor: pointer;
  text-decoration: none;
}

a strong {
  color: currentColor;
}

a:hover {
  color: #363636;
}

code {
  background-color: whitesmoke;
  color: #ff3860;
  font-size: 0.875em;
  font-weight: normal;
  padding: 0.25em 0.5em 0.25em;
}

hr {
  background-color: whitesmoke;
  border: none;
  display: block;
  height: 2px;
  margin: 1.5rem 0;
}

img {
  height: auto;
  max-width: 100%;
}

input[type="checkbox"],
input[type="radio"] {
  vertical-align: baseline;
}

small {
  font-size: 0.875em;
}

span {
  font-style: inherit;
  font-weight: inherit;
}

strong {
  color: #363636;
  font-weight: 700;
}

fieldset {
  border: none;
}

pre {
  -webkit-overflow-scrolling: touch;
  background-color: whitesmoke;
  color: #4a4a4a;
  font-size: 0.875em;
  overflow-x: auto;
  padding: 1.25rem 1.5rem;
  white-space: pre;
  word-wrap: normal;
}

pre code {
  background-color: transparent;
  color: currentColor;
  font-size: 1em;
  padding: 0;
}

table td,
table th {
  vertical-align: top;
}

table td:not([align]),
table th:not([align]) {
  text-align: left;
}

table th {
  color: #363636;
}

.is-clearfix::after {
  clear: both;
  content: " ";
  display: table;
}

.is-pulled-left {
  float: left !important;
}

.is-pulled-right {
  float: right !important;
}

.is-clipped {
  overflow: hidden !important;
}

.is-size-1 {
  font-size: 3rem !important;
}

.is-size-2 {
  font-size: 2.5rem !important;
}

.is-size-3 {
  font-size: 2rem !important;
}

.is-size-4 {
  font-size: 1.5rem !important;
}

.is-size-5 {
  font-size: 1.25rem !important;
}

.is-size-6 {
  font-size: 1rem !important;
}

.is-size-7 {
  font-size: 0.75rem !important;
}

@media screen and (max-width: 768px) {
  .is-size-1-mobile {
    font-size: 3rem !important;
  }
  .is-size-2-mobile {
    font-size: 2.5rem !important;
  }
  .is-size-3-mobile {
    font-size: 2rem !important;
  }
  .is-size-4-mobile {
    font-size: 1.5rem !important;
  }
  .is-size-5-mobile {
    font-size: 1.25rem !important;
  }
  .is-size-6-mobile {
    font-size: 1rem !important;
  }
  .is-size-7-mobile {
    font-size: 0.75rem !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-size-1-tablet {
    font-size: 3rem !important;
  }
  .is-size-2-tablet {
    font-size: 2.5rem !important;
  }
  .is-size-3-tablet {
    font-size: 2rem !important;
  }
  .is-size-4-tablet {
    font-size: 1.5rem !important;
  }
  .is-size-5-tablet {
    font-size: 1.25rem !important;
  }
  .is-size-6-tablet {
    font-size: 1rem !important;
  }
  .is-size-7-tablet {
    font-size: 0.75rem !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-size-1-touch {
    font-size: 3rem !important;
  }
  .is-size-2-touch {
    font-size: 2.5rem !important;
  }
  .is-size-3-touch {
    font-size: 2rem !important;
  }
  .is-size-4-touch {
    font-size: 1.5rem !important;
  }
  .is-size-5-touch {
    font-size: 1.25rem !important;
  }
  .is-size-6-touch {
    font-size: 1rem !important;
  }
  .is-size-7-touch {
    font-size: 0.75rem !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-size-1-desktop {
    font-size: 3rem !important;
  }
  .is-size-2-desktop {
    font-size: 2.5rem !important;
  }
  .is-size-3-desktop {
    font-size: 2rem !important;
  }
  .is-size-4-desktop {
    font-size: 1.5rem !important;
  }
  .is-size-5-desktop {
    font-size: 1.25rem !important;
  }
  .is-size-6-desktop {
    font-size: 1rem !important;
  }
  .is-size-7-desktop {
    font-size: 0.75rem !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-size-1-widescreen {
    font-size: 3rem !important;
  }
  .is-size-2-widescreen {
    font-size: 2.5rem !important;
  }
  .is-size-3-widescreen {
    font-size: 2rem !important;
  }
  .is-size-4-widescreen {
    font-size: 1.5rem !important;
  }
  .is-size-5-widescreen {
    font-size: 1.25rem !important;
  }
  .is-size-6-widescreen {
    font-size: 1rem !important;
  }
  .is-size-7-widescreen {
    font-size: 0.75rem !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-size-1-fullhd {
    font-size: 3rem !important;
  }
  .is-size-2-fullhd {
    font-size: 2.5rem !important;
  }
  .is-size-3-fullhd {
    font-size: 2rem !important;
  }
  .is-size-4-fullhd {
    font-size: 1.5rem !important;
  }
  .is-size-5-fullhd {
    font-size: 1.25rem !important;
  }
  .is-size-6-fullhd {
    font-size: 1rem !important;
  }
  .is-size-7-fullhd {
    font-size: 0.75rem !important;
  }
}

.has-text-centered {
  text-align: center !important;
}

.has-text-justified {
  text-align: justify !important;
}

.has-text-left {
  text-align: left !important;
}

.has-text-right {
  text-align: right !important;
}

@media screen and (max-width: 768px) {
  .has-text-centered-mobile {
    text-align: center !important;
  }
}

@media screen and (min-width: 769px), print {
  .has-text-centered-tablet {
    text-align: center !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-centered-tablet-only {
    text-align: center !important;
  }
}

@media screen and (max-width: 1023px) {
  .has-text-centered-touch {
    text-align: center !important;
  }
}

@media screen and (min-width: 1024px) {
  .has-text-centered-desktop {
    text-align: center !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-centered-desktop-only {
    text-align: center !important;
  }
}

@media screen and (min-width: 1216px) {
  .has-text-centered-widescreen {
    text-align: center !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-centered-widescreen-only {
    text-align: center !important;
  }
}

@media screen and (min-width: 1408px) {
  .has-text-centered-fullhd {
    text-align: center !important;
  }
}

@media screen and (max-width: 768px) {
  .has-text-justified-mobile {
    text-align: justify !important;
  }
}

@media screen and (min-width: 769px), print {
  .has-text-justified-tablet {
    text-align: justify !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-justified-tablet-only {
    text-align: justify !important;
  }
}

@media screen and (max-width: 1023px) {
  .has-text-justified-touch {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1024px) {
  .has-text-justified-desktop {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-justified-desktop-only {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1216px) {
  .has-text-justified-widescreen {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-justified-widescreen-only {
    text-align: justify !important;
  }
}

@media screen and (min-width: 1408px) {
  .has-text-justified-fullhd {
    text-align: justify !important;
  }
}

@media screen and (max-width: 768px) {
  .has-text-left-mobile {
    text-align: left !important;
  }
}

@media screen and (min-width: 769px), print {
  .has-text-left-tablet {
    text-align: left !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-left-tablet-only {
    text-align: left !important;
  }
}

@media screen and (max-width: 1023px) {
  .has-text-left-touch {
    text-align: left !important;
  }
}

@media screen and (min-width: 1024px) {
  .has-text-left-desktop {
    text-align: left !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-left-desktop-only {
    text-align: left !important;
  }
}

@media screen and (min-width: 1216px) {
  .has-text-left-widescreen {
    text-align: left !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-left-widescreen-only {
    text-align: left !important;
  }
}

@media screen and (min-width: 1408px) {
  .has-text-left-fullhd {
    text-align: left !important;
  }
}

@media screen and (max-width: 768px) {
  .has-text-right-mobile {
    text-align: right !important;
  }
}

@media screen and (min-width: 769px), print {
  .has-text-right-tablet {
    text-align: right !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .has-text-right-tablet-only {
    text-align: right !important;
  }
}

@media screen and (max-width: 1023px) {
  .has-text-right-touch {
    text-align: right !important;
  }
}

@media screen and (min-width: 1024px) {
  .has-text-right-desktop {
    text-align: right !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .has-text-right-desktop-only {
    text-align: right !important;
  }
}

@media screen and (min-width: 1216px) {
  .has-text-right-widescreen {
    text-align: right !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .has-text-right-widescreen-only {
    text-align: right !important;
  }
}

@media screen and (min-width: 1408px) {
  .has-text-right-fullhd {
    text-align: right !important;
  }
}

.is-capitalized {
  text-transform: capitalize !important;
}

.is-lowercase {
  text-transform: lowercase !important;
}

.is-uppercase {
  text-transform: uppercase !important;
}

.is-italic {
  font-style: italic !important;
}

.has-text-white {
  color: white !important;
}

a.has-text-white:hover, a.has-text-white:focus {
  color: #e6e6e6 !important;
}

.has-background-white {
  background-color: white !important;
}

.has-text-black {
  color: #0a0a0a !important;
}

a.has-text-black:hover, a.has-text-black:focus {
  color: black !important;
}

.has-background-black {
  background-color: #0a0a0a !important;
}

.has-text-light {
  color: whitesmoke !important;
}

a.has-text-light:hover, a.has-text-light:focus {
  color: #dbdbdb !important;
}

.has-background-light {
  background-color: whitesmoke !important;
}

.has-text-dark {
  color: #363636 !important;
}

a.has-text-dark:hover, a.has-text-dark:focus {
  color: #1c1c1c !important;
}

.has-background-dark {
  background-color: #363636 !important;
}

.has-text-primary {
  color: #00d1b2 !important;
}

a.has-text-primary:hover, a.has-text-primary:focus {
  color: #009e86 !important;
}

.has-background-primary {
  background-color: #00d1b2 !important;
}

.has-text-link {
  color: #3273dc !important;
}

a.has-text-link:hover, a.has-text-link:focus {
  color: #205bbc !important;
}

.has-background-link {
  background-color: #3273dc !important;
}

.has-text-info {
  color: #209cee !important;
}

a.has-text-info:hover, a.has-text-info:focus {
  color: #0f81cc !important;
}

.has-background-info {
  background-color: #209cee !important;
}

.has-text-success {
  color: #23d160 !important;
}

a.has-text-success:hover, a.has-text-success:focus {
  color: #1ca64c !important;
}

.has-background-success {
  background-color: #23d160 !important;
}

.has-text-warning {
  color: #ffdd57 !important;
}

a.has-text-warning:hover, a.has-text-warning:focus {
  color: #ffd324 !important;
}

.has-background-warning {
  background-color: #ffdd57 !important;
}

.has-text-danger {
  color: #ff3860 !important;
}

a.has-text-danger:hover, a.has-text-danger:focus {
  color: #ff0537 !important;
}

.has-background-danger {
  background-color: #ff3860 !important;
}

.has-text-black-bis {
  color: #121212 !important;
}

.has-background-black-bis {
  background-color: #121212 !important;
}

.has-text-black-ter {
  color: #242424 !important;
}

.has-background-black-ter {
  background-color: #242424 !important;
}

.has-text-grey-darker {
  color: #363636 !important;
}

.has-background-grey-darker {
  background-color: #363636 !important;
}

.has-text-grey-dark {
  color: #4a4a4a !important;
}

.has-background-grey-dark {
  background-color: #4a4a4a !important;
}

.has-text-grey {
  color: #7a7a7a !important;
}

.has-background-grey {
  background-color: #7a7a7a !important;
}

.has-text-grey-light {
  color: #b5b5b5 !important;
}

.has-background-grey-light {
  background-color: #b5b5b5 !important;
}

.has-text-grey-lighter {
  color: #dbdbdb !important;
}

.has-background-grey-lighter {
  background-color: #dbdbdb !important;
}

.has-text-white-ter {
  color: whitesmoke !important;
}

.has-background-white-ter {
  background-color: whitesmoke !important;
}

.has-text-white-bis {
  color: #fafafa !important;
}

.has-background-white-bis {
  background-color: #fafafa !important;
}

.has-text-weight-light {
  font-weight: 300 !important;
}

.has-text-weight-normal {
  font-weight: 400 !important;
}

.has-text-weight-medium {
  font-weight: 500 !important;
}

.has-text-weight-semibold {
  font-weight: 600 !important;
}

.has-text-weight-bold {
  font-weight: 700 !important;
}

.is-family-primary {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-secondary {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-sans-serif {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
}

.is-family-monospace {
  font-family: monospace !important;
}

.is-family-code {
  font-family: monospace !important;
}

.is-block {
  display: block !important;
}

@media screen and (max-width: 768px) {
  .is-block-mobile {
    display: block !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-block-tablet {
    display: block !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-block-tablet-only {
    display: block !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-block-touch {
    display: block !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-block-desktop {
    display: block !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-block-desktop-only {
    display: block !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-block-widescreen {
    display: block !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-block-widescreen-only {
    display: block !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-block-fullhd {
    display: block !important;
  }
}

.is-flex {
  display: flex !important;
}

@media screen and (max-width: 768px) {
  .is-flex-mobile {
    display: flex !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-flex-tablet {
    display: flex !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-flex-tablet-only {
    display: flex !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-flex-touch {
    display: flex !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-flex-desktop {
    display: flex !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-flex-desktop-only {
    display: flex !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-flex-widescreen {
    display: flex !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-flex-widescreen-only {
    display: flex !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-flex-fullhd {
    display: flex !important;
  }
}

.is-inline {
  display: inline !important;
}

@media screen and (max-width: 768px) {
  .is-inline-mobile {
    display: inline !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-inline-tablet {
    display: inline !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-tablet-only {
    display: inline !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-inline-touch {
    display: inline !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-inline-desktop {
    display: inline !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-desktop-only {
    display: inline !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-inline-widescreen {
    display: inline !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-widescreen-only {
    display: inline !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-inline-fullhd {
    display: inline !important;
  }
}

.is-inline-block {
  display: inline-block !important;
}

@media screen and (max-width: 768px) {
  .is-inline-block-mobile {
    display: inline-block !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-inline-block-tablet {
    display: inline-block !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-block-tablet-only {
    display: inline-block !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-inline-block-touch {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-inline-block-desktop {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-block-desktop-only {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-inline-block-widescreen {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-block-widescreen-only {
    display: inline-block !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-inline-block-fullhd {
    display: inline-block !important;
  }
}

.is-inline-flex {
  display: inline-flex !important;
}

@media screen and (max-width: 768px) {
  .is-inline-flex-mobile {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-inline-flex-tablet {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-inline-flex-tablet-only {
    display: inline-flex !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-inline-flex-touch {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-inline-flex-desktop {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-inline-flex-desktop-only {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-inline-flex-widescreen {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-inline-flex-widescreen-only {
    display: inline-flex !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-inline-flex-fullhd {
    display: inline-flex !important;
  }
}

.is-hidden {
  display: none !important;
}

.is-sr-only {
  border: none !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 0.01em !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 0.01em !important;
}

@media screen and (max-width: 768px) {
  .is-hidden-mobile {
    display: none !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-hidden-tablet {
    display: none !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-hidden-tablet-only {
    display: none !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-hidden-touch {
    display: none !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-hidden-desktop {
    display: none !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-hidden-desktop-only {
    display: none !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-hidden-widescreen {
    display: none !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-hidden-widescreen-only {
    display: none !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-hidden-fullhd {
    display: none !important;
  }
}

.is-invisible {
  visibility: hidden !important;
}

@media screen and (max-width: 768px) {
  .is-invisible-mobile {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 769px), print {
  .is-invisible-tablet {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .is-invisible-tablet-only {
    visibility: hidden !important;
  }
}

@media screen and (max-width: 1023px) {
  .is-invisible-touch {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1024px) {
  .is-invisible-desktop {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .is-invisible-desktop-only {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1216px) {
  .is-invisible-widescreen {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .is-invisible-widescreen-only {
    visibility: hidden !important;
  }
}

@media screen and (min-width: 1408px) {
  .is-invisible-fullhd {
    visibility: hidden !important;
  }
}

.is-marginless {
  margin: 0 !important;
}

.is-paddingless {
  padding: 0 !important;
}

.is-radiusless {
  border-radius: 0 !important;
}

.is-shadowless {
  box-shadow: none !important;
}

.is-relative {
  position: relative !important;
}

.box {
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  display: block;
  padding: 1.25rem;
}

a.box:hover, a.box:focus {
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px #3273dc;
}

a.box:active {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2), 0 0 0 1px #3273dc;
}

.button {
  background-color: white;
  border-color: #dbdbdb;
  border-width: 1px;
  color: #363636;
  cursor: pointer;
  justify-content: center;
  padding-bottom: calc(0.375em - 1px);
  padding-left: 0.75em;
  padding-right: 0.75em;
  padding-top: calc(0.375em - 1px);
  text-align: center;
  white-space: nowrap;
}

.button strong {
  color: inherit;
}

.button .icon, .button .icon.is-small, .button .icon.is-medium, .button .icon.is-large {
  height: 1.5em;
  width: 1.5em;
}

.button .icon:first-child:not(:last-child) {
  margin-left: calc(-0.375em - 1px);
  margin-right: 0.1875em;
}

.button .icon:last-child:not(:first-child) {
  margin-left: 0.1875em;
  margin-right: calc(-0.375em - 1px);
}

.button .icon:first-child:last-child {
  margin-left: calc(-0.375em - 1px);
  margin-right: calc(-0.375em - 1px);
}

.button:hover, .button.is-hovered {
  border-color: #b5b5b5;
  color: #363636;
}

.button:focus, .button.is-focused {
  border-color: #3273dc;
  color: #363636;
}

.button:focus:not(:active), .button.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.button:active, .button.is-active {
  border-color: #4a4a4a;
  color: #363636;
}

.button.is-text {
  background-color: transparent;
  border-color: transparent;
  color: #4a4a4a;
  text-decoration: underline;
}

.button.is-text:hover, .button.is-text.is-hovered, .button.is-text:focus, .button.is-text.is-focused {
  background-color: whitesmoke;
  color: #363636;
}

.button.is-text:active, .button.is-text.is-active {
  background-color: #e8e8e8;
  color: #363636;
}

.button.is-text[disabled],
fieldset[disabled] .button.is-text {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
}

.button.is-white {
  background-color: white;
  border-color: transparent;
  color: #0a0a0a;
}

.button.is-white:hover, .button.is-white.is-hovered {
  background-color: #f9f9f9;
  border-color: transparent;
  color: #0a0a0a;
}

.button.is-white:focus, .button.is-white.is-focused {
  border-color: transparent;
  color: #0a0a0a;
}

.button.is-white:focus:not(:active), .button.is-white.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}

.button.is-white:active, .button.is-white.is-active {
  background-color: #f2f2f2;
  border-color: transparent;
  color: #0a0a0a;
}

.button.is-white[disabled],
fieldset[disabled] .button.is-white {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
}

.button.is-white.is-inverted {
  background-color: #0a0a0a;
  color: white;
}

.button.is-white.is-inverted:hover, .button.is-white.is-inverted.is-hovered {
  background-color: black;
}

.button.is-white.is-inverted[disabled],
fieldset[disabled] .button.is-white.is-inverted {
  background-color: #0a0a0a;
  border-color: transparent;
  box-shadow: none;
  color: white;
}

.button.is-white.is-loading::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}

.button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}

.button.is-white.is-outlined:hover, .button.is-white.is-outlined.is-hovered, .button.is-white.is-outlined:focus, .button.is-white.is-outlined.is-focused {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}

.button.is-white.is-outlined.is-loading::after {
  border-color: transparent transparent white white !important;
}

.button.is-white.is-outlined.is-loading:hover::after, .button.is-white.is-outlined.is-loading.is-hovered::after, .button.is-white.is-outlined.is-loading:focus::after, .button.is-white.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}

.button.is-white.is-outlined[disabled],
fieldset[disabled] .button.is-white.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}

.button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  color: #0a0a0a;
}

.button.is-white.is-inverted.is-outlined:hover, .button.is-white.is-inverted.is-outlined.is-hovered, .button.is-white.is-inverted.is-outlined:focus, .button.is-white.is-inverted.is-outlined.is-focused {
  background-color: #0a0a0a;
  color: white;
}

.button.is-white.is-inverted.is-outlined.is-loading:hover::after, .button.is-white.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-white.is-inverted.is-outlined.is-loading:focus::after, .button.is-white.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}

.button.is-white.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-white.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  box-shadow: none;
  color: #0a0a0a;
}

.button.is-black {
  background-color: #0a0a0a;
  border-color: transparent;
  color: white;
}

.button.is-black:hover, .button.is-black.is-hovered {
  background-color: #040404;
  border-color: transparent;
  color: white;
}

.button.is-black:focus, .button.is-black.is-focused {
  border-color: transparent;
  color: white;
}

.button.is-black:focus:not(:active), .button.is-black.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}

.button.is-black:active, .button.is-black.is-active {
  background-color: black;
  border-color: transparent;
  color: white;
}

.button.is-black[disabled],
fieldset[disabled] .button.is-black {
  background-color: #0a0a0a;
  border-color: transparent;
  box-shadow: none;
}

.button.is-black.is-inverted {
  background-color: white;
  color: #0a0a0a;
}

.button.is-black.is-inverted:hover, .button.is-black.is-inverted.is-hovered {
  background-color: #f2f2f2;
}

.button.is-black.is-inverted[disabled],
fieldset[disabled] .button.is-black.is-inverted {
  background-color: white;
  border-color: transparent;
  box-shadow: none;
  color: #0a0a0a;
}

.button.is-black.is-loading::after {
  border-color: transparent transparent white white !important;
}

.button.is-black.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  color: #0a0a0a;
}

.button.is-black.is-outlined:hover, .button.is-black.is-outlined.is-hovered, .button.is-black.is-outlined:focus, .button.is-black.is-outlined.is-focused {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}

.button.is-black.is-outlined.is-loading::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}

.button.is-black.is-outlined.is-loading:hover::after, .button.is-black.is-outlined.is-loading.is-hovered::after, .button.is-black.is-outlined.is-loading:focus::after, .button.is-black.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent white white !important;
}

.button.is-black.is-outlined[disabled],
fieldset[disabled] .button.is-black.is-outlined {
  background-color: transparent;
  border-color: #0a0a0a;
  box-shadow: none;
  color: #0a0a0a;
}

.button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  color: white;
}

.button.is-black.is-inverted.is-outlined:hover, .button.is-black.is-inverted.is-outlined.is-hovered, .button.is-black.is-inverted.is-outlined:focus, .button.is-black.is-inverted.is-outlined.is-focused {
  background-color: white;
  color: #0a0a0a;
}

.button.is-black.is-inverted.is-outlined.is-loading:hover::after, .button.is-black.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-black.is-inverted.is-outlined.is-loading:focus::after, .button.is-black.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #0a0a0a #0a0a0a !important;
}

.button.is-black.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-black.is-inverted.is-outlined {
  background-color: transparent;
  border-color: white;
  box-shadow: none;
  color: white;
}

.button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  color: #363636;
}

.button.is-light:hover, .button.is-light.is-hovered {
  background-color: #eeeeee;
  border-color: transparent;
  color: #363636;
}

.button.is-light:focus, .button.is-light.is-focused {
  border-color: transparent;
  color: #363636;
}

.button.is-light:focus:not(:active), .button.is-light.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}

.button.is-light:active, .button.is-light.is-active {
  background-color: #e8e8e8;
  border-color: transparent;
  color: #363636;
}

.button.is-light[disabled],
fieldset[disabled] .button.is-light {
  background-color: whitesmoke;
  border-color: transparent;
  box-shadow: none;
}

.button.is-light.is-inverted {
  background-color: #363636;
  color: whitesmoke;
}

.button.is-light.is-inverted:hover, .button.is-light.is-inverted.is-hovered {
  background-color: #292929;
}

.button.is-light.is-inverted[disabled],
fieldset[disabled] .button.is-light.is-inverted {
  background-color: #363636;
  border-color: transparent;
  box-shadow: none;
  color: whitesmoke;
}

.button.is-light.is-loading::after {
  border-color: transparent transparent #363636 #363636 !important;
}

.button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  color: whitesmoke;
}

.button.is-light.is-outlined:hover, .button.is-light.is-outlined.is-hovered, .button.is-light.is-outlined:focus, .button.is-light.is-outlined.is-focused {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: #363636;
}

.button.is-light.is-outlined.is-loading::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}

.button.is-light.is-outlined.is-loading:hover::after, .button.is-light.is-outlined.is-loading.is-hovered::after, .button.is-light.is-outlined.is-loading:focus::after, .button.is-light.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #363636 #363636 !important;
}

.button.is-light.is-outlined[disabled],
fieldset[disabled] .button.is-light.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  box-shadow: none;
  color: whitesmoke;
}

.button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #363636;
  color: #363636;
}

.button.is-light.is-inverted.is-outlined:hover, .button.is-light.is-inverted.is-outlined.is-hovered, .button.is-light.is-inverted.is-outlined:focus, .button.is-light.is-inverted.is-outlined.is-focused {
  background-color: #363636;
  color: whitesmoke;
}

.button.is-light.is-inverted.is-outlined.is-loading:hover::after, .button.is-light.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-light.is-inverted.is-outlined.is-loading:focus::after, .button.is-light.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}

.button.is-light.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-light.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #363636;
  box-shadow: none;
  color: #363636;
}

.button.is-dark {
  background-color: #363636;
  border-color: transparent;
  color: whitesmoke;
}

.button.is-dark:hover, .button.is-dark.is-hovered {
  background-color: #2f2f2f;
  border-color: transparent;
  color: whitesmoke;
}

.button.is-dark:focus, .button.is-dark.is-focused {
  border-color: transparent;
  color: whitesmoke;
}

.button.is-dark:focus:not(:active), .button.is-dark.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}

.button.is-dark:active, .button.is-dark.is-active {
  background-color: #292929;
  border-color: transparent;
  color: whitesmoke;
}

.button.is-dark[disabled],
fieldset[disabled] .button.is-dark {
  background-color: #363636;
  border-color: transparent;
  box-shadow: none;
}

.button.is-dark.is-inverted {
  background-color: whitesmoke;
  color: #363636;
}

.button.is-dark.is-inverted:hover, .button.is-dark.is-inverted.is-hovered {
  background-color: #e8e8e8;
}

.button.is-dark.is-inverted[disabled],
fieldset[disabled] .button.is-dark.is-inverted {
  background-color: whitesmoke;
  border-color: transparent;
  box-shadow: none;
  color: #363636;
}

.button.is-dark.is-loading::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}

.button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  color: #363636;
}

.button.is-dark.is-outlined:hover, .button.is-dark.is-outlined.is-hovered, .button.is-dark.is-outlined:focus, .button.is-dark.is-outlined.is-focused {
  background-color: #363636;
  border-color: #363636;
  color: whitesmoke;
}

.button.is-dark.is-outlined.is-loading::after {
  border-color: transparent transparent #363636 #363636 !important;
}

.button.is-dark.is-outlined.is-loading:hover::after, .button.is-dark.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-outlined.is-loading:focus::after, .button.is-dark.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent whitesmoke whitesmoke !important;
}

.button.is-dark.is-outlined[disabled],
fieldset[disabled] .button.is-dark.is-outlined {
  background-color: transparent;
  border-color: #363636;
  box-shadow: none;
  color: #363636;
}

.button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  color: whitesmoke;
}

.button.is-dark.is-inverted.is-outlined:hover, .button.is-dark.is-inverted.is-outlined.is-hovered, .button.is-dark.is-inverted.is-outlined:focus, .button.is-dark.is-inverted.is-outlined.is-focused {
  background-color: whitesmoke;
  color: #363636;
}

.button.is-dark.is-inverted.is-outlined.is-loading:hover::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-dark.is-inverted.is-outlined.is-loading:focus::after, .button.is-dark.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #363636 #363636 !important;
}

.button.is-dark.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-dark.is-inverted.is-outlined {
  background-color: transparent;
  border-color: whitesmoke;
  box-shadow: none;
  color: whitesmoke;
}

.button.is-primary {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}

.button.is-primary:hover, .button.is-primary.is-hovered {
  background-color: #00c4a7;
  border-color: transparent;
  color: #fff;
}

.button.is-primary:focus, .button.is-primary.is-focused {
  border-color: transparent;
  color: #fff;
}

.button.is-primary:focus:not(:active), .button.is-primary.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}

.button.is-primary:active, .button.is-primary.is-active {
  background-color: #00b89c;
  border-color: transparent;
  color: #fff;
}

.button.is-primary[disabled],
fieldset[disabled] .button.is-primary {
  background-color: #00d1b2;
  border-color: transparent;
  box-shadow: none;
}

.button.is-primary.is-inverted {
  background-color: #fff;
  color: #00d1b2;
}

.button.is-primary.is-inverted:hover, .button.is-primary.is-inverted.is-hovered {
  background-color: #f2f2f2;
}

.button.is-primary.is-inverted[disabled],
fieldset[disabled] .button.is-primary.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #00d1b2;
}

.button.is-primary.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #00d1b2;
  color: #00d1b2;
}

.button.is-primary.is-outlined:hover, .button.is-primary.is-outlined.is-hovered, .button.is-primary.is-outlined:focus, .button.is-primary.is-outlined.is-focused {
  background-color: #00d1b2;
  border-color: #00d1b2;
  color: #fff;
}

.button.is-primary.is-outlined.is-loading::after {
  border-color: transparent transparent #00d1b2 #00d1b2 !important;
}

.button.is-primary.is-outlined.is-loading:hover::after, .button.is-primary.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-outlined.is-loading:focus::after, .button.is-primary.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-primary.is-outlined[disabled],
fieldset[disabled] .button.is-primary.is-outlined {
  background-color: transparent;
  border-color: #00d1b2;
  box-shadow: none;
  color: #00d1b2;
}

.button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}

.button.is-primary.is-inverted.is-outlined:hover, .button.is-primary.is-inverted.is-outlined.is-hovered, .button.is-primary.is-inverted.is-outlined:focus, .button.is-primary.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #00d1b2;
}

.button.is-primary.is-inverted.is-outlined.is-loading:hover::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-primary.is-inverted.is-outlined.is-loading:focus::after, .button.is-primary.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #00d1b2 #00d1b2 !important;
}

.button.is-primary.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-primary.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}

.button.is-link {
  background-color: #3273dc;
  border-color: transparent;
  color: #fff;
}

.button.is-link:hover, .button.is-link.is-hovered {
  background-color: #276cda;
  border-color: transparent;
  color: #fff;
}

.button.is-link:focus, .button.is-link.is-focused {
  border-color: transparent;
  color: #fff;
}

.button.is-link:focus:not(:active), .button.is-link.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.button.is-link:active, .button.is-link.is-active {
  background-color: #2366d1;
  border-color: transparent;
  color: #fff;
}

.button.is-link[disabled],
fieldset[disabled] .button.is-link {
  background-color: #3273dc;
  border-color: transparent;
  box-shadow: none;
}

.button.is-link.is-inverted {
  background-color: #fff;
  color: #3273dc;
}

.button.is-link.is-inverted:hover, .button.is-link.is-inverted.is-hovered {
  background-color: #f2f2f2;
}

.button.is-link.is-inverted[disabled],
fieldset[disabled] .button.is-link.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #3273dc;
}

.button.is-link.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-link.is-outlined {
  background-color: transparent;
  border-color: #3273dc;
  color: #3273dc;
}

.button.is-link.is-outlined:hover, .button.is-link.is-outlined.is-hovered, .button.is-link.is-outlined:focus, .button.is-link.is-outlined.is-focused {
  background-color: #3273dc;
  border-color: #3273dc;
  color: #fff;
}

.button.is-link.is-outlined.is-loading::after {
  border-color: transparent transparent #3273dc #3273dc !important;
}

.button.is-link.is-outlined.is-loading:hover::after, .button.is-link.is-outlined.is-loading.is-hovered::after, .button.is-link.is-outlined.is-loading:focus::after, .button.is-link.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-link.is-outlined[disabled],
fieldset[disabled] .button.is-link.is-outlined {
  background-color: transparent;
  border-color: #3273dc;
  box-shadow: none;
  color: #3273dc;
}

.button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}

.button.is-link.is-inverted.is-outlined:hover, .button.is-link.is-inverted.is-outlined.is-hovered, .button.is-link.is-inverted.is-outlined:focus, .button.is-link.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #3273dc;
}

.button.is-link.is-inverted.is-outlined.is-loading:hover::after, .button.is-link.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-link.is-inverted.is-outlined.is-loading:focus::after, .button.is-link.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #3273dc #3273dc !important;
}

.button.is-link.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-link.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}

.button.is-info {
  background-color: #209cee;
  border-color: transparent;
  color: #fff;
}

.button.is-info:hover, .button.is-info.is-hovered {
  background-color: #1496ed;
  border-color: transparent;
  color: #fff;
}

.button.is-info:focus, .button.is-info.is-focused {
  border-color: transparent;
  color: #fff;
}

.button.is-info:focus:not(:active), .button.is-info.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);
}

.button.is-info:active, .button.is-info.is-active {
  background-color: #118fe4;
  border-color: transparent;
  color: #fff;
}

.button.is-info[disabled],
fieldset[disabled] .button.is-info {
  background-color: #209cee;
  border-color: transparent;
  box-shadow: none;
}

.button.is-info.is-inverted {
  background-color: #fff;
  color: #209cee;
}

.button.is-info.is-inverted:hover, .button.is-info.is-inverted.is-hovered {
  background-color: #f2f2f2;
}

.button.is-info.is-inverted[disabled],
fieldset[disabled] .button.is-info.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #209cee;
}

.button.is-info.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-info.is-outlined {
  background-color: transparent;
  border-color: #209cee;
  color: #209cee;
}

.button.is-info.is-outlined:hover, .button.is-info.is-outlined.is-hovered, .button.is-info.is-outlined:focus, .button.is-info.is-outlined.is-focused {
  background-color: #209cee;
  border-color: #209cee;
  color: #fff;
}

.button.is-info.is-outlined.is-loading::after {
  border-color: transparent transparent #209cee #209cee !important;
}

.button.is-info.is-outlined.is-loading:hover::after, .button.is-info.is-outlined.is-loading.is-hovered::after, .button.is-info.is-outlined.is-loading:focus::after, .button.is-info.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-info.is-outlined[disabled],
fieldset[disabled] .button.is-info.is-outlined {
  background-color: transparent;
  border-color: #209cee;
  box-shadow: none;
  color: #209cee;
}

.button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}

.button.is-info.is-inverted.is-outlined:hover, .button.is-info.is-inverted.is-outlined.is-hovered, .button.is-info.is-inverted.is-outlined:focus, .button.is-info.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #209cee;
}

.button.is-info.is-inverted.is-outlined.is-loading:hover::after, .button.is-info.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-info.is-inverted.is-outlined.is-loading:focus::after, .button.is-info.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #209cee #209cee !important;
}

.button.is-info.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-info.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}

.button.is-success {
  background-color: #23d160;
  border-color: transparent;
  color: #fff;
}

.button.is-success:hover, .button.is-success.is-hovered {
  background-color: #22c65b;
  border-color: transparent;
  color: #fff;
}

.button.is-success:focus, .button.is-success.is-focused {
  border-color: transparent;
  color: #fff;
}

.button.is-success:focus:not(:active), .button.is-success.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);
}

.button.is-success:active, .button.is-success.is-active {
  background-color: #20bc56;
  border-color: transparent;
  color: #fff;
}

.button.is-success[disabled],
fieldset[disabled] .button.is-success {
  background-color: #23d160;
  border-color: transparent;
  box-shadow: none;
}

.button.is-success.is-inverted {
  background-color: #fff;
  color: #23d160;
}

.button.is-success.is-inverted:hover, .button.is-success.is-inverted.is-hovered {
  background-color: #f2f2f2;
}

.button.is-success.is-inverted[disabled],
fieldset[disabled] .button.is-success.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #23d160;
}

.button.is-success.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-success.is-outlined {
  background-color: transparent;
  border-color: #23d160;
  color: #23d160;
}

.button.is-success.is-outlined:hover, .button.is-success.is-outlined.is-hovered, .button.is-success.is-outlined:focus, .button.is-success.is-outlined.is-focused {
  background-color: #23d160;
  border-color: #23d160;
  color: #fff;
}

.button.is-success.is-outlined.is-loading::after {
  border-color: transparent transparent #23d160 #23d160 !important;
}

.button.is-success.is-outlined.is-loading:hover::after, .button.is-success.is-outlined.is-loading.is-hovered::after, .button.is-success.is-outlined.is-loading:focus::after, .button.is-success.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-success.is-outlined[disabled],
fieldset[disabled] .button.is-success.is-outlined {
  background-color: transparent;
  border-color: #23d160;
  box-shadow: none;
  color: #23d160;
}

.button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}

.button.is-success.is-inverted.is-outlined:hover, .button.is-success.is-inverted.is-outlined.is-hovered, .button.is-success.is-inverted.is-outlined:focus, .button.is-success.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #23d160;
}

.button.is-success.is-inverted.is-outlined.is-loading:hover::after, .button.is-success.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-success.is-inverted.is-outlined.is-loading:focus::after, .button.is-success.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #23d160 #23d160 !important;
}

.button.is-success.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-success.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}

.button.is-warning {
  background-color: #ffdd57;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}

.button.is-warning:hover, .button.is-warning.is-hovered {
  background-color: #ffdb4a;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}

.button.is-warning:focus, .button.is-warning.is-focused {
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}

.button.is-warning:focus:not(:active), .button.is-warning.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);
}

.button.is-warning:active, .button.is-warning.is-active {
  background-color: #ffd83d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}

.button.is-warning[disabled],
fieldset[disabled] .button.is-warning {
  background-color: #ffdd57;
  border-color: transparent;
  box-shadow: none;
}

.button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffdd57;
}

.button.is-warning.is-inverted:hover, .button.is-warning.is-inverted.is-hovered {
  background-color: rgba(0, 0, 0, 0.7);
}

.button.is-warning.is-inverted[disabled],
fieldset[disabled] .button.is-warning.is-inverted {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: transparent;
  box-shadow: none;
  color: #ffdd57;
}

.button.is-warning.is-loading::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}

.button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #ffdd57;
  color: #ffdd57;
}

.button.is-warning.is-outlined:hover, .button.is-warning.is-outlined.is-hovered, .button.is-warning.is-outlined:focus, .button.is-warning.is-outlined.is-focused {
  background-color: #ffdd57;
  border-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.button.is-warning.is-outlined.is-loading::after {
  border-color: transparent transparent #ffdd57 #ffdd57 !important;
}

.button.is-warning.is-outlined.is-loading:hover::after, .button.is-warning.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-outlined.is-loading:focus::after, .button.is-warning.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent rgba(0, 0, 0, 0.7) rgba(0, 0, 0, 0.7) !important;
}

.button.is-warning.is-outlined[disabled],
fieldset[disabled] .button.is-warning.is-outlined {
  background-color: transparent;
  border-color: #ffdd57;
  box-shadow: none;
  color: #ffdd57;
}

.button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  color: rgba(0, 0, 0, 0.7);
}

.button.is-warning.is-inverted.is-outlined:hover, .button.is-warning.is-inverted.is-outlined.is-hovered, .button.is-warning.is-inverted.is-outlined:focus, .button.is-warning.is-inverted.is-outlined.is-focused {
  background-color: rgba(0, 0, 0, 0.7);
  color: #ffdd57;
}

.button.is-warning.is-inverted.is-outlined.is-loading:hover::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-warning.is-inverted.is-outlined.is-loading:focus::after, .button.is-warning.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #ffdd57 #ffdd57 !important;
}

.button.is-warning.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-warning.is-inverted.is-outlined {
  background-color: transparent;
  border-color: rgba(0, 0, 0, 0.7);
  box-shadow: none;
  color: rgba(0, 0, 0, 0.7);
}

.button.is-danger {
  background-color: #ff3860;
  border-color: transparent;
  color: #fff;
}

.button.is-danger:hover, .button.is-danger.is-hovered {
  background-color: #ff2b56;
  border-color: transparent;
  color: #fff;
}

.button.is-danger:focus, .button.is-danger.is-focused {
  border-color: transparent;
  color: #fff;
}

.button.is-danger:focus:not(:active), .button.is-danger.is-focused:not(:active) {
  box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);
}

.button.is-danger:active, .button.is-danger.is-active {
  background-color: #ff1f4b;
  border-color: transparent;
  color: #fff;
}

.button.is-danger[disabled],
fieldset[disabled] .button.is-danger {
  background-color: #ff3860;
  border-color: transparent;
  box-shadow: none;
}

.button.is-danger.is-inverted {
  background-color: #fff;
  color: #ff3860;
}

.button.is-danger.is-inverted:hover, .button.is-danger.is-inverted.is-hovered {
  background-color: #f2f2f2;
}

.button.is-danger.is-inverted[disabled],
fieldset[disabled] .button.is-danger.is-inverted {
  background-color: #fff;
  border-color: transparent;
  box-shadow: none;
  color: #ff3860;
}

.button.is-danger.is-loading::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #ff3860;
  color: #ff3860;
}

.button.is-danger.is-outlined:hover, .button.is-danger.is-outlined.is-hovered, .button.is-danger.is-outlined:focus, .button.is-danger.is-outlined.is-focused {
  background-color: #ff3860;
  border-color: #ff3860;
  color: #fff;
}

.button.is-danger.is-outlined.is-loading::after {
  border-color: transparent transparent #ff3860 #ff3860 !important;
}

.button.is-danger.is-outlined.is-loading:hover::after, .button.is-danger.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-outlined.is-loading:focus::after, .button.is-danger.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #fff #fff !important;
}

.button.is-danger.is-outlined[disabled],
fieldset[disabled] .button.is-danger.is-outlined {
  background-color: transparent;
  border-color: #ff3860;
  box-shadow: none;
  color: #ff3860;
}

.button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  color: #fff;
}

.button.is-danger.is-inverted.is-outlined:hover, .button.is-danger.is-inverted.is-outlined.is-hovered, .button.is-danger.is-inverted.is-outlined:focus, .button.is-danger.is-inverted.is-outlined.is-focused {
  background-color: #fff;
  color: #ff3860;
}

.button.is-danger.is-inverted.is-outlined.is-loading:hover::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-hovered::after, .button.is-danger.is-inverted.is-outlined.is-loading:focus::after, .button.is-danger.is-inverted.is-outlined.is-loading.is-focused::after {
  border-color: transparent transparent #ff3860 #ff3860 !important;
}

.button.is-danger.is-inverted.is-outlined[disabled],
fieldset[disabled] .button.is-danger.is-inverted.is-outlined {
  background-color: transparent;
  border-color: #fff;
  box-shadow: none;
  color: #fff;
}

.button.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}

.button.is-normal {
  font-size: 1rem;
}

.button.is-medium {
  font-size: 1.25rem;
}

.button.is-large {
  font-size: 1.5rem;
}

.button[disabled],
fieldset[disabled] .button {
  background-color: white;
  border-color: #dbdbdb;
  box-shadow: none;
  opacity: 0.5;
}

.button.is-fullwidth {
  display: flex;
  width: 100%;
}

.button.is-loading {
  color: transparent !important;
  pointer-events: none;
}

.button.is-loading::after {
  position: absolute;
  left: calc(50% - (1em / 2));
  top: calc(50% - (1em / 2));
  position: absolute !important;
}

.button.is-static {
  background-color: whitesmoke;
  border-color: #dbdbdb;
  color: #7a7a7a;
  box-shadow: none;
  pointer-events: none;
}

.button.is-rounded {
  border-radius: 290486px;
  padding-left: 1em;
  padding-right: 1em;
}

.buttons {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.buttons .button {
  margin-bottom: 0.5rem;
}

.buttons .button:not(:last-child):not(.is-fullwidth) {
  margin-right: 0.5rem;
}

.buttons:last-child {
  margin-bottom: -0.5rem;
}

.buttons:not(:last-child) {
  margin-bottom: 1rem;
}

.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large) {
  border-radius: 2px;
  font-size: 0.75rem;
}

.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large) {
  font-size: 1.25rem;
}

.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium) {
  font-size: 1.5rem;
}

.buttons.has-addons .button:not(:first-child) {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.buttons.has-addons .button:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  margin-right: -1px;
}

.buttons.has-addons .button:last-child {
  margin-right: 0;
}

.buttons.has-addons .button:hover, .buttons.has-addons .button.is-hovered {
  z-index: 2;
}

.buttons.has-addons .button:focus, .buttons.has-addons .button.is-focused, .buttons.has-addons .button:active, .buttons.has-addons .button.is-active, .buttons.has-addons .button.is-selected {
  z-index: 3;
}

.buttons.has-addons .button:focus:hover, .buttons.has-addons .button.is-focused:hover, .buttons.has-addons .button:active:hover, .buttons.has-addons .button.is-active:hover, .buttons.has-addons .button.is-selected:hover {
  z-index: 4;
}

.buttons.has-addons .button.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}

.buttons.is-centered {
  justify-content: center;
}

.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.buttons.is-right {
  justify-content: flex-end;
}

.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth) {
  margin-left: 0.25rem;
  margin-right: 0.25rem;
}

.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}

@media screen and (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
  .container.is-fluid {
    margin-left: 32px;
    margin-right: 32px;
    max-width: none;
  }
}

@media screen and (max-width: 1215px) {
  .container.is-widescreen {
    max-width: 1152px;
  }
}

@media screen and (max-width: 1407px) {
  .container.is-fullhd {
    max-width: 1344px;
  }
}

@media screen and (min-width: 1216px) {
  .container {
    max-width: 1152px;
  }
}

@media screen and (min-width: 1408px) {
  .container {
    max-width: 1344px;
  }
}

.content li + li {
  margin-top: 0.25em;
}

.content p:not(:last-child),
.content dl:not(:last-child),
.content ol:not(:last-child),
.content ul:not(:last-child),
.content blockquote:not(:last-child),
.content pre:not(:last-child),
.content table:not(:last-child) {
  margin-bottom: 1em;
}

.content h1,
.content h2,
.content h3,
.content h4,
.content h5,
.content h6 {
  color: #363636;
  font-weight: 600;
  line-height: 1.125;
}

.content h1 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

.content h1:not(:first-child) {
  margin-top: 1em;
}

.content h2 {
  font-size: 1.75em;
  margin-bottom: 0.5714em;
}

.content h2:not(:first-child) {
  margin-top: 1.1428em;
}

.content h3 {
  font-size: 1.5em;
  margin-bottom: 0.6666em;
}

.content h3:not(:first-child) {
  margin-top: 1.3333em;
}

.content h4 {
  font-size: 1.25em;
  margin-bottom: 0.8em;
}

.content h5 {
  font-size: 1.125em;
  margin-bottom: 0.8888em;
}

.content h6 {
  font-size: 1em;
  margin-bottom: 1em;
}

.content blockquote {
  background-color: whitesmoke;
  border-left: 5px solid #dbdbdb;
  padding: 1.25em 1.5em;
}

.content ol {
  list-style-position: outside;
  margin-left: 2em;
  margin-top: 1em;
}

.content ol:not([type]) {
  list-style-type: decimal;
}

.content ol:not([type]).is-lower-alpha {
  list-style-type: lower-alpha;
}

.content ol:not([type]).is-lower-roman {
  list-style-type: lower-roman;
}

.content ol:not([type]).is-upper-alpha {
  list-style-type: upper-alpha;
}

.content ol:not([type]).is-upper-roman {
  list-style-type: upper-roman;
}

.content ul {
  list-style: disc outside;
  margin-left: 2em;
  margin-top: 1em;
}

.content ul ul {
  list-style-type: circle;
  margin-top: 0.5em;
}

.content ul ul ul {
  list-style-type: square;
}

.content dd {
  margin-left: 2em;
}

.content figure {
  margin-left: 2em;
  margin-right: 2em;
  text-align: center;
}

.content figure:not(:first-child) {
  margin-top: 2em;
}

.content figure:not(:last-child) {
  margin-bottom: 2em;
}

.content figure img {
  display: inline-block;
}

.content figure figcaption {
  font-style: italic;
}

.content pre {
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  padding: 1.25em 1.5em;
  white-space: pre;
  word-wrap: normal;
}

.content sup,
.content sub {
  font-size: 75%;
}

.content table {
  width: 100%;
}

.content table td,
.content table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}

.content table th {
  color: #363636;
}

.content table th:not([align]) {
  text-align: left;
}

.content table thead td,
.content table thead th {
  border-width: 0 0 2px;
  color: #363636;
}

.content table tfoot td,
.content table tfoot th {
  border-width: 2px 0 0;
  color: #363636;
}

.content table tbody tr:last-child td,
.content table tbody tr:last-child th {
  border-bottom-width: 0;
}

.content .tabs li + li {
  margin-top: 0;
}

.content.is-small {
  font-size: 0.75rem;
}

.content.is-medium {
  font-size: 1.25rem;
}

.content.is-large {
  font-size: 1.5rem;
}

.icon {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  height: 1.5rem;
  width: 1.5rem;
}

.icon.is-small {
  height: 1rem;
  width: 1rem;
}

.icon.is-medium {
  height: 2rem;
  width: 2rem;
}

.icon.is-large {
  height: 3rem;
  width: 3rem;
}

.image {
  display: block;
  position: relative;
}

.image img {
  display: block;
  height: auto;
  width: 100%;
}

.image img.is-rounded {
  border-radius: 290486px;
}

.image.is-square img,
.image.is-square .has-ratio, .image.is-1by1 img,
.image.is-1by1 .has-ratio, .image.is-5by4 img,
.image.is-5by4 .has-ratio, .image.is-4by3 img,
.image.is-4by3 .has-ratio, .image.is-3by2 img,
.image.is-3by2 .has-ratio, .image.is-5by3 img,
.image.is-5by3 .has-ratio, .image.is-16by9 img,
.image.is-16by9 .has-ratio, .image.is-2by1 img,
.image.is-2by1 .has-ratio, .image.is-3by1 img,
.image.is-3by1 .has-ratio, .image.is-4by5 img,
.image.is-4by5 .has-ratio, .image.is-3by4 img,
.image.is-3by4 .has-ratio, .image.is-2by3 img,
.image.is-2by3 .has-ratio, .image.is-3by5 img,
.image.is-3by5 .has-ratio, .image.is-9by16 img,
.image.is-9by16 .has-ratio, .image.is-1by2 img,
.image.is-1by2 .has-ratio, .image.is-1by3 img,
.image.is-1by3 .has-ratio {
  height: 100%;
  width: 100%;
}

.image.is-square, .image.is-1by1 {
  padding-top: 100%;
}

.image.is-5by4 {
  padding-top: 80%;
}

.image.is-4by3 {
  padding-top: 75%;
}

.image.is-3by2 {
  padding-top: 66.6666%;
}

.image.is-5by3 {
  padding-top: 60%;
}

.image.is-16by9 {
  padding-top: 56.25%;
}

.image.is-2by1 {
  padding-top: 50%;
}

.image.is-3by1 {
  padding-top: 33.3333%;
}

.image.is-4by5 {
  padding-top: 125%;
}

.image.is-3by4 {
  padding-top: 133.3333%;
}

.image.is-2by3 {
  padding-top: 150%;
}

.image.is-3by5 {
  padding-top: 166.6666%;
}

.image.is-9by16 {
  padding-top: 177.7777%;
}

.image.is-1by2 {
  padding-top: 200%;
}

.image.is-1by3 {
  padding-top: 300%;
}

.image.is-16x16 {
  height: 16px;
  width: 16px;
}

.image.is-24x24 {
  height: 24px;
  width: 24px;
}

.image.is-32x32 {
  height: 32px;
  width: 32px;
}

.image.is-48x48 {
  height: 48px;
  width: 48px;
}

.image.is-64x64 {
  height: 64px;
  width: 64px;
}

.image.is-96x96 {
  height: 96px;
  width: 96px;
}

.image.is-128x128 {
  height: 128px;
  width: 128px;
}

.notification {
  background-color: whitesmoke;
  border-radius: 4px;
  padding: 1.25rem 2.5rem 1.25rem 1.5rem;
  position: relative;
}

.notification a:not(.button):not(.dropdown-item) {
  color: currentColor;
  text-decoration: underline;
}

.notification strong {
  color: currentColor;
}

.notification code,
.notification pre {
  background: white;
}

.notification pre code {
  background: transparent;
}

.notification > .delete {
  position: absolute;
  right: 0.5rem;
  top: 0.5rem;
}

.notification .title,
.notification .subtitle,
.notification .content {
  color: currentColor;
}

.notification.is-white {
  background-color: white;
  color: #0a0a0a;
}

.notification.is-black {
  background-color: #0a0a0a;
  color: white;
}

.notification.is-light {
  background-color: whitesmoke;
  color: #363636;
}

.notification.is-dark {
  background-color: #363636;
  color: whitesmoke;
}

.notification.is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.notification.is-link {
  background-color: #3273dc;
  color: #fff;
}

.notification.is-info {
  background-color: #209cee;
  color: #fff;
}

.notification.is-success {
  background-color: #23d160;
  color: #fff;
}

.notification.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.notification.is-danger {
  background-color: #ff3860;
  color: #fff;
}

.progress {
  -moz-appearance: none;
  -webkit-appearance: none;
  border: none;
  border-radius: 290486px;
  display: block;
  height: 1rem;
  overflow: hidden;
  padding: 0;
  width: 100%;
}

.progress::-webkit-progress-bar {
  background-color: #dbdbdb;
}

.progress::-webkit-progress-value {
  background-color: #4a4a4a;
}

.progress::-moz-progress-bar {
  background-color: #4a4a4a;
}

.progress::-ms-fill {
  background-color: #4a4a4a;
  border: none;
}

.progress.is-white::-webkit-progress-value {
  background-color: white;
}

.progress.is-white::-moz-progress-bar {
  background-color: white;
}

.progress.is-white::-ms-fill {
  background-color: white;
}

.progress.is-white:indeterminate {
  background-image: linear-gradient(to right, white 30%, #dbdbdb 30%);
}

.progress.is-black::-webkit-progress-value {
  background-color: #0a0a0a;
}

.progress.is-black::-moz-progress-bar {
  background-color: #0a0a0a;
}

.progress.is-black::-ms-fill {
  background-color: #0a0a0a;
}

.progress.is-black:indeterminate {
  background-image: linear-gradient(to right, #0a0a0a 30%, #dbdbdb 30%);
}

.progress.is-light::-webkit-progress-value {
  background-color: whitesmoke;
}

.progress.is-light::-moz-progress-bar {
  background-color: whitesmoke;
}

.progress.is-light::-ms-fill {
  background-color: whitesmoke;
}

.progress.is-light:indeterminate {
  background-image: linear-gradient(to right, whitesmoke 30%, #dbdbdb 30%);
}

.progress.is-dark::-webkit-progress-value {
  background-color: #363636;
}

.progress.is-dark::-moz-progress-bar {
  background-color: #363636;
}

.progress.is-dark::-ms-fill {
  background-color: #363636;
}

.progress.is-dark:indeterminate {
  background-image: linear-gradient(to right, #363636 30%, #dbdbdb 30%);
}

.progress.is-primary::-webkit-progress-value {
  background-color: #00d1b2;
}

.progress.is-primary::-moz-progress-bar {
  background-color: #00d1b2;
}

.progress.is-primary::-ms-fill {
  background-color: #00d1b2;
}

.progress.is-primary:indeterminate {
  background-image: linear-gradient(to right, #00d1b2 30%, #dbdbdb 30%);
}

.progress.is-link::-webkit-progress-value {
  background-color: #3273dc;
}

.progress.is-link::-moz-progress-bar {
  background-color: #3273dc;
}

.progress.is-link::-ms-fill {
  background-color: #3273dc;
}

.progress.is-link:indeterminate {
  background-image: linear-gradient(to right, #3273dc 30%, #dbdbdb 30%);
}

.progress.is-info::-webkit-progress-value {
  background-color: #209cee;
}

.progress.is-info::-moz-progress-bar {
  background-color: #209cee;
}

.progress.is-info::-ms-fill {
  background-color: #209cee;
}

.progress.is-info:indeterminate {
  background-image: linear-gradient(to right, #209cee 30%, #dbdbdb 30%);
}

.progress.is-success::-webkit-progress-value {
  background-color: #23d160;
}

.progress.is-success::-moz-progress-bar {
  background-color: #23d160;
}

.progress.is-success::-ms-fill {
  background-color: #23d160;
}

.progress.is-success:indeterminate {
  background-image: linear-gradient(to right, #23d160 30%, #dbdbdb 30%);
}

.progress.is-warning::-webkit-progress-value {
  background-color: #ffdd57;
}

.progress.is-warning::-moz-progress-bar {
  background-color: #ffdd57;
}

.progress.is-warning::-ms-fill {
  background-color: #ffdd57;
}

.progress.is-warning:indeterminate {
  background-image: linear-gradient(to right, #ffdd57 30%, #dbdbdb 30%);
}

.progress.is-danger::-webkit-progress-value {
  background-color: #ff3860;
}

.progress.is-danger::-moz-progress-bar {
  background-color: #ff3860;
}

.progress.is-danger::-ms-fill {
  background-color: #ff3860;
}

.progress.is-danger:indeterminate {
  background-image: linear-gradient(to right, #ff3860 30%, #dbdbdb 30%);
}

.progress:indeterminate {
  -webkit-animation-duration: 1.5s;
          animation-duration: 1.5s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
  -webkit-animation-name: moveIndeterminate;
          animation-name: moveIndeterminate;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  background-color: #dbdbdb;
  background-image: linear-gradient(to right, #4a4a4a 30%, #dbdbdb 30%);
  background-position: top left;
  background-repeat: no-repeat;
  background-size: 150% 150%;
}

.progress:indeterminate::-webkit-progress-bar {
  background-color: transparent;
}

.progress:indeterminate::-moz-progress-bar {
  background-color: transparent;
}

.progress.is-small {
  height: 0.75rem;
}

.progress.is-medium {
  height: 1.25rem;
}

.progress.is-large {
  height: 1.5rem;
}

@-webkit-keyframes moveIndeterminate {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}

@keyframes moveIndeterminate {
  from {
    background-position: 200% 0;
  }
  to {
    background-position: -200% 0;
  }
}

.table {
  background-color: white;
  color: #363636;
}

.table td,
.table th {
  border: 1px solid #dbdbdb;
  border-width: 0 0 1px;
  padding: 0.5em 0.75em;
  vertical-align: top;
}

.table td.is-white,
.table th.is-white {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}

.table td.is-black,
.table th.is-black {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}

.table td.is-light,
.table th.is-light {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: #363636;
}

.table td.is-dark,
.table th.is-dark {
  background-color: #363636;
  border-color: #363636;
  color: whitesmoke;
}

.table td.is-primary,
.table th.is-primary {
  background-color: #00d1b2;
  border-color: #00d1b2;
  color: #fff;
}

.table td.is-link,
.table th.is-link {
  background-color: #3273dc;
  border-color: #3273dc;
  color: #fff;
}

.table td.is-info,
.table th.is-info {
  background-color: #209cee;
  border-color: #209cee;
  color: #fff;
}

.table td.is-success,
.table th.is-success {
  background-color: #23d160;
  border-color: #23d160;
  color: #fff;
}

.table td.is-warning,
.table th.is-warning {
  background-color: #ffdd57;
  border-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.table td.is-danger,
.table th.is-danger {
  background-color: #ff3860;
  border-color: #ff3860;
  color: #fff;
}

.table td.is-narrow,
.table th.is-narrow {
  white-space: nowrap;
  width: 1%;
}

.table td.is-selected,
.table th.is-selected {
  background-color: #00d1b2;
  color: #fff;
}

.table td.is-selected a,
.table td.is-selected strong,
.table th.is-selected a,
.table th.is-selected strong {
  color: currentColor;
}

.table th {
  color: #363636;
}

.table th:not([align]) {
  text-align: left;
}

.table tr.is-selected {
  background-color: #00d1b2;
  color: #fff;
}

.table tr.is-selected a,
.table tr.is-selected strong {
  color: currentColor;
}

.table tr.is-selected td,
.table tr.is-selected th {
  border-color: #fff;
  color: currentColor;
}

.table thead {
  background-color: transparent;
}

.table thead td,
.table thead th {
  border-width: 0 0 2px;
  color: #363636;
}

.table tfoot {
  background-color: transparent;
}

.table tfoot td,
.table tfoot th {
  border-width: 2px 0 0;
  color: #363636;
}

.table tbody {
  background-color: transparent;
}

.table tbody tr:last-child td,
.table tbody tr:last-child th {
  border-bottom-width: 0;
}

.table.is-bordered td,
.table.is-bordered th {
  border-width: 1px;
}

.table.is-bordered tr:last-child td,
.table.is-bordered tr:last-child th {
  border-bottom-width: 1px;
}

.table.is-fullwidth {
  width: 100%;
}

.table.is-hoverable tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}

.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover {
  background-color: #fafafa;
}

.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(even) {
  background-color: whitesmoke;
}

.table.is-narrow td,
.table.is-narrow th {
  padding: 0.25em 0.5em;
}

.table.is-striped tbody tr:not(.is-selected):nth-child(even) {
  background-color: #fafafa;
}

.table-container {
  -webkit-overflow-scrolling: touch;
  overflow: auto;
  overflow-y: hidden;
  max-width: 100%;
}

.tags {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.tags .tag {
  margin-bottom: 0.5rem;
}

.tags .tag:not(:last-child) {
  margin-right: 0.5rem;
}

.tags:last-child {
  margin-bottom: -0.5rem;
}

.tags:not(:last-child) {
  margin-bottom: 1rem;
}

.tags.are-medium .tag:not(.is-normal):not(.is-large) {
  font-size: 1rem;
}

.tags.are-large .tag:not(.is-normal):not(.is-medium) {
  font-size: 1.25rem;
}

.tags.is-centered {
  justify-content: center;
}

.tags.is-centered .tag {
  margin-right: 0.25rem;
  margin-left: 0.25rem;
}

.tags.is-right {
  justify-content: flex-end;
}

.tags.is-right .tag:not(:first-child) {
  margin-left: 0.5rem;
}

.tags.is-right .tag:not(:last-child) {
  margin-right: 0;
}

.tags.has-addons .tag {
  margin-right: 0;
}

.tags.has-addons .tag:not(:first-child) {
  margin-left: 0;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.tags.has-addons .tag:not(:last-child) {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.tag:not(body) {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 4px;
  color: #4a4a4a;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  line-height: 1.5;
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}

.tag:not(body) .delete {
  margin-left: 0.25rem;
  margin-right: -0.375rem;
}

.tag:not(body).is-white {
  background-color: white;
  color: #0a0a0a;
}

.tag:not(body).is-black {
  background-color: #0a0a0a;
  color: white;
}

.tag:not(body).is-light {
  background-color: whitesmoke;
  color: #363636;
}

.tag:not(body).is-dark {
  background-color: #363636;
  color: whitesmoke;
}

.tag:not(body).is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.tag:not(body).is-link {
  background-color: #3273dc;
  color: #fff;
}

.tag:not(body).is-info {
  background-color: #209cee;
  color: #fff;
}

.tag:not(body).is-success {
  background-color: #23d160;
  color: #fff;
}

.tag:not(body).is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.tag:not(body).is-danger {
  background-color: #ff3860;
  color: #fff;
}

.tag:not(body).is-normal {
  font-size: 0.75rem;
}

.tag:not(body).is-medium {
  font-size: 1rem;
}

.tag:not(body).is-large {
  font-size: 1.25rem;
}

.tag:not(body) .icon:first-child:not(:last-child) {
  margin-left: -0.375em;
  margin-right: 0.1875em;
}

.tag:not(body) .icon:last-child:not(:first-child) {
  margin-left: 0.1875em;
  margin-right: -0.375em;
}

.tag:not(body) .icon:first-child:last-child {
  margin-left: -0.375em;
  margin-right: -0.375em;
}

.tag:not(body).is-delete {
  margin-left: 1px;
  padding: 0;
  position: relative;
  width: 2em;
}

.tag:not(body).is-delete::before, .tag:not(body).is-delete::after {
  background-color: currentColor;
  content: "";
  display: block;
  left: 50%;
  position: absolute;
  top: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%) rotate(45deg);
          transform: translateX(-50%) translateY(-50%) rotate(45deg);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.tag:not(body).is-delete::before {
  height: 1px;
  width: 50%;
}

.tag:not(body).is-delete::after {
  height: 50%;
  width: 1px;
}

.tag:not(body).is-delete:hover, .tag:not(body).is-delete:focus {
  background-color: #e8e8e8;
}

.tag:not(body).is-delete:active {
  background-color: #dbdbdb;
}

.tag:not(body).is-rounded {
  border-radius: 290486px;
}

a.tag:hover {
  text-decoration: underline;
}

.title,
.subtitle {
  word-break: break-word;
}

.title em,
.title span,
.subtitle em,
.subtitle span {
  font-weight: inherit;
}

.title sub,
.subtitle sub {
  font-size: 0.75em;
}

.title sup,
.subtitle sup {
  font-size: 0.75em;
}

.title .tag,
.subtitle .tag {
  vertical-align: middle;
}

.title {
  color: #363636;
  font-size: 2rem;
  font-weight: 600;
  line-height: 1.125;
}

.title strong {
  color: inherit;
  font-weight: inherit;
}

.title + .highlight {
  margin-top: -0.75rem;
}

.title:not(.is-spaced) + .subtitle {
  margin-top: -1.25rem;
}

.title.is-1 {
  font-size: 3rem;
}

.title.is-2 {
  font-size: 2.5rem;
}

.title.is-3 {
  font-size: 2rem;
}

.title.is-4 {
  font-size: 1.5rem;
}

.title.is-5 {
  font-size: 1.25rem;
}

.title.is-6 {
  font-size: 1rem;
}

.title.is-7 {
  font-size: 0.75rem;
}

.subtitle {
  color: #4a4a4a;
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.25;
}

.subtitle strong {
  color: #363636;
  font-weight: 600;
}

.subtitle:not(.is-spaced) + .title {
  margin-top: -1.25rem;
}

.subtitle.is-1 {
  font-size: 3rem;
}

.subtitle.is-2 {
  font-size: 2.5rem;
}

.subtitle.is-3 {
  font-size: 2rem;
}

.subtitle.is-4 {
  font-size: 1.5rem;
}

.subtitle.is-5 {
  font-size: 1.25rem;
}

.subtitle.is-6 {
  font-size: 1rem;
}

.subtitle.is-7 {
  font-size: 0.75rem;
}

.heading {
  display: block;
  font-size: 11px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.highlight {
  font-weight: 400;
  max-width: 100%;
  overflow: hidden;
  padding: 0;
}

.highlight pre {
  overflow: auto;
  max-width: 100%;
}

.number {
  align-items: center;
  background-color: whitesmoke;
  border-radius: 290486px;
  display: inline-flex;
  font-size: 1.25rem;
  height: 2em;
  justify-content: center;
  margin-right: 1.5rem;
  min-width: 2.5em;
  padding: 0.25rem 0.5rem;
  text-align: center;
  vertical-align: top;
}

.input, .textarea, .select select {
  background-color: white;
  border-color: #dbdbdb;
  border-radius: 4px;
  color: #363636;
}

.input::-moz-placeholder, .textarea::-moz-placeholder, .select select::-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}

.input::-webkit-input-placeholder, .textarea::-webkit-input-placeholder, .select select::-webkit-input-placeholder {
  color: rgba(54, 54, 54, 0.3);
}

.input:-moz-placeholder, .textarea:-moz-placeholder, .select select:-moz-placeholder {
  color: rgba(54, 54, 54, 0.3);
}

.input:-ms-input-placeholder, .textarea:-ms-input-placeholder, .select select:-ms-input-placeholder {
  color: rgba(54, 54, 54, 0.3);
}

.input:hover, .textarea:hover, .select select:hover, .is-hovered.input, .is-hovered.textarea, .select select.is-hovered {
  border-color: #b5b5b5;
}

.input:focus, .textarea:focus, .select select:focus, .is-focused.input, .is-focused.textarea, .select select.is-focused, .input:active, .textarea:active, .select select:active, .is-active.input, .is-active.textarea, .select select.is-active {
  border-color: #3273dc;
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.input[disabled], .textarea[disabled], .select select[disabled],
fieldset[disabled] .input,
fieldset[disabled] .textarea,
fieldset[disabled] .select select,
.select fieldset[disabled] select {
  background-color: whitesmoke;
  border-color: whitesmoke;
  box-shadow: none;
  color: #7a7a7a;
}

.input[disabled]::-moz-placeholder, .textarea[disabled]::-moz-placeholder, .select select[disabled]::-moz-placeholder,
fieldset[disabled] .input::-moz-placeholder,
fieldset[disabled] .textarea::-moz-placeholder,
fieldset[disabled] .select select::-moz-placeholder,
.select fieldset[disabled] select::-moz-placeholder {
  color: rgba(122, 122, 122, 0.3);
}

.input[disabled]::-webkit-input-placeholder, .textarea[disabled]::-webkit-input-placeholder, .select select[disabled]::-webkit-input-placeholder,
fieldset[disabled] .input::-webkit-input-placeholder,
fieldset[disabled] .textarea::-webkit-input-placeholder,
fieldset[disabled] .select select::-webkit-input-placeholder,
.select fieldset[disabled] select::-webkit-input-placeholder {
  color: rgba(122, 122, 122, 0.3);
}

.input[disabled]:-moz-placeholder, .textarea[disabled]:-moz-placeholder, .select select[disabled]:-moz-placeholder,
fieldset[disabled] .input:-moz-placeholder,
fieldset[disabled] .textarea:-moz-placeholder,
fieldset[disabled] .select select:-moz-placeholder,
.select fieldset[disabled] select:-moz-placeholder {
  color: rgba(122, 122, 122, 0.3);
}

.input[disabled]:-ms-input-placeholder, .textarea[disabled]:-ms-input-placeholder, .select select[disabled]:-ms-input-placeholder,
fieldset[disabled] .input:-ms-input-placeholder,
fieldset[disabled] .textarea:-ms-input-placeholder,
fieldset[disabled] .select select:-ms-input-placeholder,
.select fieldset[disabled] select:-ms-input-placeholder {
  color: rgba(122, 122, 122, 0.3);
}

.input, .textarea {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  width: 100%;
}

.input[readonly], .textarea[readonly] {
  box-shadow: none;
}

.is-white.input, .is-white.textarea {
  border-color: white;
}

.is-white.input:focus, .is-white.textarea:focus, .is-white.is-focused.input, .is-white.is-focused.textarea, .is-white.input:active, .is-white.textarea:active, .is-white.is-active.input, .is-white.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}

.is-black.input, .is-black.textarea {
  border-color: #0a0a0a;
}

.is-black.input:focus, .is-black.textarea:focus, .is-black.is-focused.input, .is-black.is-focused.textarea, .is-black.input:active, .is-black.textarea:active, .is-black.is-active.input, .is-black.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}

.is-light.input, .is-light.textarea {
  border-color: whitesmoke;
}

.is-light.input:focus, .is-light.textarea:focus, .is-light.is-focused.input, .is-light.is-focused.textarea, .is-light.input:active, .is-light.textarea:active, .is-light.is-active.input, .is-light.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}

.is-dark.input, .is-dark.textarea {
  border-color: #363636;
}

.is-dark.input:focus, .is-dark.textarea:focus, .is-dark.is-focused.input, .is-dark.is-focused.textarea, .is-dark.input:active, .is-dark.textarea:active, .is-dark.is-active.input, .is-dark.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}

.is-primary.input, .is-primary.textarea {
  border-color: #00d1b2;
}

.is-primary.input:focus, .is-primary.textarea:focus, .is-primary.is-focused.input, .is-primary.is-focused.textarea, .is-primary.input:active, .is-primary.textarea:active, .is-primary.is-active.input, .is-primary.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}

.is-link.input, .is-link.textarea {
  border-color: #3273dc;
}

.is-link.input:focus, .is-link.textarea:focus, .is-link.is-focused.input, .is-link.is-focused.textarea, .is-link.input:active, .is-link.textarea:active, .is-link.is-active.input, .is-link.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.is-info.input, .is-info.textarea {
  border-color: #209cee;
}

.is-info.input:focus, .is-info.textarea:focus, .is-info.is-focused.input, .is-info.is-focused.textarea, .is-info.input:active, .is-info.textarea:active, .is-info.is-active.input, .is-info.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);
}

.is-success.input, .is-success.textarea {
  border-color: #23d160;
}

.is-success.input:focus, .is-success.textarea:focus, .is-success.is-focused.input, .is-success.is-focused.textarea, .is-success.input:active, .is-success.textarea:active, .is-success.is-active.input, .is-success.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);
}

.is-warning.input, .is-warning.textarea {
  border-color: #ffdd57;
}

.is-warning.input:focus, .is-warning.textarea:focus, .is-warning.is-focused.input, .is-warning.is-focused.textarea, .is-warning.input:active, .is-warning.textarea:active, .is-warning.is-active.input, .is-warning.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);
}

.is-danger.input, .is-danger.textarea {
  border-color: #ff3860;
}

.is-danger.input:focus, .is-danger.textarea:focus, .is-danger.is-focused.input, .is-danger.is-focused.textarea, .is-danger.input:active, .is-danger.textarea:active, .is-danger.is-active.input, .is-danger.is-active.textarea {
  box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);
}

.is-small.input, .is-small.textarea {
  border-radius: 2px;
  font-size: 0.75rem;
}

.is-medium.input, .is-medium.textarea {
  font-size: 1.25rem;
}

.is-large.input, .is-large.textarea {
  font-size: 1.5rem;
}

.is-fullwidth.input, .is-fullwidth.textarea {
  display: block;
  width: 100%;
}

.is-inline.input, .is-inline.textarea {
  display: inline;
  width: auto;
}

.input.is-rounded {
  border-radius: 290486px;
  padding-left: 1em;
  padding-right: 1em;
}

.input.is-static {
  background-color: transparent;
  border-color: transparent;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
}

.textarea {
  display: block;
  max-width: 100%;
  min-width: 100%;
  padding: 0.625em;
  resize: vertical;
}

.textarea:not([rows]) {
  max-height: 600px;
  min-height: 120px;
}

.textarea[rows] {
  height: initial;
}

.textarea.has-fixed-size {
  resize: none;
}

.checkbox, .radio {
  cursor: pointer;
  display: inline-block;
  line-height: 1.25;
  position: relative;
}

.checkbox input, .radio input {
  cursor: pointer;
}

.checkbox:hover, .radio:hover {
  color: #363636;
}

.checkbox[disabled], .radio[disabled],
fieldset[disabled] .checkbox,
fieldset[disabled] .radio {
  color: #7a7a7a;
  cursor: not-allowed;
}

.radio + .radio {
  margin-left: 0.5em;
}

.select {
  display: inline-block;
  max-width: 100%;
  position: relative;
  vertical-align: top;
}

.select:not(.is-multiple) {
  height: 2.25em;
}

.select:not(.is-multiple):not(.is-loading)::after {
  border-color: #3273dc;
  right: 1.125em;
  z-index: 4;
}

.select.is-rounded select {
  border-radius: 290486px;
  padding-left: 1em;
}

.select select {
  cursor: pointer;
  display: block;
  font-size: 1em;
  max-width: 100%;
  outline: none;
}

.select select::-ms-expand {
  display: none;
}

.select select[disabled]:hover,
fieldset[disabled] .select select:hover {
  border-color: whitesmoke;
}

.select select:not([multiple]) {
  padding-right: 2.5em;
}

.select select[multiple] {
  height: auto;
  padding: 0;
}

.select select[multiple] option {
  padding: 0.5em 1em;
}

.select:not(.is-multiple):not(.is-loading):hover::after {
  border-color: #363636;
}

.select.is-white:not(:hover)::after {
  border-color: white;
}

.select.is-white select {
  border-color: white;
}

.select.is-white select:hover, .select.is-white select.is-hovered {
  border-color: #f2f2f2;
}

.select.is-white select:focus, .select.is-white select.is-focused, .select.is-white select:active, .select.is-white select.is-active {
  box-shadow: 0 0 0 0.125em rgba(255, 255, 255, 0.25);
}

.select.is-black:not(:hover)::after {
  border-color: #0a0a0a;
}

.select.is-black select {
  border-color: #0a0a0a;
}

.select.is-black select:hover, .select.is-black select.is-hovered {
  border-color: black;
}

.select.is-black select:focus, .select.is-black select.is-focused, .select.is-black select:active, .select.is-black select.is-active {
  box-shadow: 0 0 0 0.125em rgba(10, 10, 10, 0.25);
}

.select.is-light:not(:hover)::after {
  border-color: whitesmoke;
}

.select.is-light select {
  border-color: whitesmoke;
}

.select.is-light select:hover, .select.is-light select.is-hovered {
  border-color: #e8e8e8;
}

.select.is-light select:focus, .select.is-light select.is-focused, .select.is-light select:active, .select.is-light select.is-active {
  box-shadow: 0 0 0 0.125em rgba(245, 245, 245, 0.25);
}

.select.is-dark:not(:hover)::after {
  border-color: #363636;
}

.select.is-dark select {
  border-color: #363636;
}

.select.is-dark select:hover, .select.is-dark select.is-hovered {
  border-color: #292929;
}

.select.is-dark select:focus, .select.is-dark select.is-focused, .select.is-dark select:active, .select.is-dark select.is-active {
  box-shadow: 0 0 0 0.125em rgba(54, 54, 54, 0.25);
}

.select.is-primary:not(:hover)::after {
  border-color: #00d1b2;
}

.select.is-primary select {
  border-color: #00d1b2;
}

.select.is-primary select:hover, .select.is-primary select.is-hovered {
  border-color: #00b89c;
}

.select.is-primary select:focus, .select.is-primary select.is-focused, .select.is-primary select:active, .select.is-primary select.is-active {
  box-shadow: 0 0 0 0.125em rgba(0, 209, 178, 0.25);
}

.select.is-link:not(:hover)::after {
  border-color: #3273dc;
}

.select.is-link select {
  border-color: #3273dc;
}

.select.is-link select:hover, .select.is-link select.is-hovered {
  border-color: #2366d1;
}

.select.is-link select:focus, .select.is-link select.is-focused, .select.is-link select:active, .select.is-link select.is-active {
  box-shadow: 0 0 0 0.125em rgba(50, 115, 220, 0.25);
}

.select.is-info:not(:hover)::after {
  border-color: #209cee;
}

.select.is-info select {
  border-color: #209cee;
}

.select.is-info select:hover, .select.is-info select.is-hovered {
  border-color: #118fe4;
}

.select.is-info select:focus, .select.is-info select.is-focused, .select.is-info select:active, .select.is-info select.is-active {
  box-shadow: 0 0 0 0.125em rgba(32, 156, 238, 0.25);
}

.select.is-success:not(:hover)::after {
  border-color: #23d160;
}

.select.is-success select {
  border-color: #23d160;
}

.select.is-success select:hover, .select.is-success select.is-hovered {
  border-color: #20bc56;
}

.select.is-success select:focus, .select.is-success select.is-focused, .select.is-success select:active, .select.is-success select.is-active {
  box-shadow: 0 0 0 0.125em rgba(35, 209, 96, 0.25);
}

.select.is-warning:not(:hover)::after {
  border-color: #ffdd57;
}

.select.is-warning select {
  border-color: #ffdd57;
}

.select.is-warning select:hover, .select.is-warning select.is-hovered {
  border-color: #ffd83d;
}

.select.is-warning select:focus, .select.is-warning select.is-focused, .select.is-warning select:active, .select.is-warning select.is-active {
  box-shadow: 0 0 0 0.125em rgba(255, 221, 87, 0.25);
}

.select.is-danger:not(:hover)::after {
  border-color: #ff3860;
}

.select.is-danger select {
  border-color: #ff3860;
}

.select.is-danger select:hover, .select.is-danger select.is-hovered {
  border-color: #ff1f4b;
}

.select.is-danger select:focus, .select.is-danger select.is-focused, .select.is-danger select:active, .select.is-danger select.is-active {
  box-shadow: 0 0 0 0.125em rgba(255, 56, 96, 0.25);
}

.select.is-small {
  border-radius: 2px;
  font-size: 0.75rem;
}

.select.is-medium {
  font-size: 1.25rem;
}

.select.is-large {
  font-size: 1.5rem;
}

.select.is-disabled::after {
  border-color: #7a7a7a;
}

.select.is-fullwidth {
  width: 100%;
}

.select.is-fullwidth select {
  width: 100%;
}

.select.is-loading::after {
  margin-top: 0;
  position: absolute;
  right: 0.625em;
  top: 0.625em;
  -webkit-transform: none;
          transform: none;
}

.select.is-loading.is-small:after {
  font-size: 0.75rem;
}

.select.is-loading.is-medium:after {
  font-size: 1.25rem;
}

.select.is-loading.is-large:after {
  font-size: 1.5rem;
}

.file {
  align-items: stretch;
  display: flex;
  justify-content: flex-start;
  position: relative;
}

.file.is-white .file-cta {
  background-color: white;
  border-color: transparent;
  color: #0a0a0a;
}

.file.is-white:hover .file-cta, .file.is-white.is-hovered .file-cta {
  background-color: #f9f9f9;
  border-color: transparent;
  color: #0a0a0a;
}

.file.is-white:focus .file-cta, .file.is-white.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(255, 255, 255, 0.25);
  color: #0a0a0a;
}

.file.is-white:active .file-cta, .file.is-white.is-active .file-cta {
  background-color: #f2f2f2;
  border-color: transparent;
  color: #0a0a0a;
}

.file.is-black .file-cta {
  background-color: #0a0a0a;
  border-color: transparent;
  color: white;
}

.file.is-black:hover .file-cta, .file.is-black.is-hovered .file-cta {
  background-color: #040404;
  border-color: transparent;
  color: white;
}

.file.is-black:focus .file-cta, .file.is-black.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(10, 10, 10, 0.25);
  color: white;
}

.file.is-black:active .file-cta, .file.is-black.is-active .file-cta {
  background-color: black;
  border-color: transparent;
  color: white;
}

.file.is-light .file-cta {
  background-color: whitesmoke;
  border-color: transparent;
  color: #363636;
}

.file.is-light:hover .file-cta, .file.is-light.is-hovered .file-cta {
  background-color: #eeeeee;
  border-color: transparent;
  color: #363636;
}

.file.is-light:focus .file-cta, .file.is-light.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(245, 245, 245, 0.25);
  color: #363636;
}

.file.is-light:active .file-cta, .file.is-light.is-active .file-cta {
  background-color: #e8e8e8;
  border-color: transparent;
  color: #363636;
}

.file.is-dark .file-cta {
  background-color: #363636;
  border-color: transparent;
  color: whitesmoke;
}

.file.is-dark:hover .file-cta, .file.is-dark.is-hovered .file-cta {
  background-color: #2f2f2f;
  border-color: transparent;
  color: whitesmoke;
}

.file.is-dark:focus .file-cta, .file.is-dark.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(54, 54, 54, 0.25);
  color: whitesmoke;
}

.file.is-dark:active .file-cta, .file.is-dark.is-active .file-cta {
  background-color: #292929;
  border-color: transparent;
  color: whitesmoke;
}

.file.is-primary .file-cta {
  background-color: #00d1b2;
  border-color: transparent;
  color: #fff;
}

.file.is-primary:hover .file-cta, .file.is-primary.is-hovered .file-cta {
  background-color: #00c4a7;
  border-color: transparent;
  color: #fff;
}

.file.is-primary:focus .file-cta, .file.is-primary.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.25);
  color: #fff;
}

.file.is-primary:active .file-cta, .file.is-primary.is-active .file-cta {
  background-color: #00b89c;
  border-color: transparent;
  color: #fff;
}

.file.is-link .file-cta {
  background-color: #3273dc;
  border-color: transparent;
  color: #fff;
}

.file.is-link:hover .file-cta, .file.is-link.is-hovered .file-cta {
  background-color: #276cda;
  border-color: transparent;
  color: #fff;
}

.file.is-link:focus .file-cta, .file.is-link.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(50, 115, 220, 0.25);
  color: #fff;
}

.file.is-link:active .file-cta, .file.is-link.is-active .file-cta {
  background-color: #2366d1;
  border-color: transparent;
  color: #fff;
}

.file.is-info .file-cta {
  background-color: #209cee;
  border-color: transparent;
  color: #fff;
}

.file.is-info:hover .file-cta, .file.is-info.is-hovered .file-cta {
  background-color: #1496ed;
  border-color: transparent;
  color: #fff;
}

.file.is-info:focus .file-cta, .file.is-info.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(32, 156, 238, 0.25);
  color: #fff;
}

.file.is-info:active .file-cta, .file.is-info.is-active .file-cta {
  background-color: #118fe4;
  border-color: transparent;
  color: #fff;
}

.file.is-success .file-cta {
  background-color: #23d160;
  border-color: transparent;
  color: #fff;
}

.file.is-success:hover .file-cta, .file.is-success.is-hovered .file-cta {
  background-color: #22c65b;
  border-color: transparent;
  color: #fff;
}

.file.is-success:focus .file-cta, .file.is-success.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(35, 209, 96, 0.25);
  color: #fff;
}

.file.is-success:active .file-cta, .file.is-success.is-active .file-cta {
  background-color: #20bc56;
  border-color: transparent;
  color: #fff;
}

.file.is-warning .file-cta {
  background-color: #ffdd57;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}

.file.is-warning:hover .file-cta, .file.is-warning.is-hovered .file-cta {
  background-color: #ffdb4a;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}

.file.is-warning:focus .file-cta, .file.is-warning.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(255, 221, 87, 0.25);
  color: rgba(0, 0, 0, 0.7);
}

.file.is-warning:active .file-cta, .file.is-warning.is-active .file-cta {
  background-color: #ffd83d;
  border-color: transparent;
  color: rgba(0, 0, 0, 0.7);
}

.file.is-danger .file-cta {
  background-color: #ff3860;
  border-color: transparent;
  color: #fff;
}

.file.is-danger:hover .file-cta, .file.is-danger.is-hovered .file-cta {
  background-color: #ff2b56;
  border-color: transparent;
  color: #fff;
}

.file.is-danger:focus .file-cta, .file.is-danger.is-focused .file-cta {
  border-color: transparent;
  box-shadow: 0 0 0.5em rgba(255, 56, 96, 0.25);
  color: #fff;
}

.file.is-danger:active .file-cta, .file.is-danger.is-active .file-cta {
  background-color: #ff1f4b;
  border-color: transparent;
  color: #fff;
}

.file.is-small {
  font-size: 0.75rem;
}

.file.is-medium {
  font-size: 1.25rem;
}

.file.is-medium .file-icon .fa {
  font-size: 21px;
}

.file.is-large {
  font-size: 1.5rem;
}

.file.is-large .file-icon .fa {
  font-size: 28px;
}

.file.has-name .file-cta {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.file.has-name .file-name {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.file.has-name.is-empty .file-cta {
  border-radius: 4px;
}

.file.has-name.is-empty .file-name {
  display: none;
}

.file.is-boxed .file-label {
  flex-direction: column;
}

.file.is-boxed .file-cta {
  flex-direction: column;
  height: auto;
  padding: 1em 3em;
}

.file.is-boxed .file-name {
  border-width: 0 1px 1px;
}

.file.is-boxed .file-icon {
  height: 1.5em;
  width: 1.5em;
}

.file.is-boxed .file-icon .fa {
  font-size: 21px;
}

.file.is-boxed.is-small .file-icon .fa {
  font-size: 14px;
}

.file.is-boxed.is-medium .file-icon .fa {
  font-size: 28px;
}

.file.is-boxed.is-large .file-icon .fa {
  font-size: 35px;
}

.file.is-boxed.has-name .file-cta {
  border-radius: 4px 4px 0 0;
}

.file.is-boxed.has-name .file-name {
  border-radius: 0 0 4px 4px;
  border-width: 0 1px 1px;
}

.file.is-centered {
  justify-content: center;
}

.file.is-fullwidth .file-label {
  width: 100%;
}

.file.is-fullwidth .file-name {
  flex-grow: 1;
  max-width: none;
}

.file.is-right {
  justify-content: flex-end;
}

.file.is-right .file-cta {
  border-radius: 0 4px 4px 0;
}

.file.is-right .file-name {
  border-radius: 4px 0 0 4px;
  border-width: 1px 0 1px 1px;
  order: -1;
}

.file-label {
  align-items: stretch;
  display: flex;
  cursor: pointer;
  justify-content: flex-start;
  overflow: hidden;
  position: relative;
}

.file-label:hover .file-cta {
  background-color: #eeeeee;
  color: #363636;
}

.file-label:hover .file-name {
  border-color: #d5d5d5;
}

.file-label:active .file-cta {
  background-color: #e8e8e8;
  color: #363636;
}

.file-label:active .file-name {
  border-color: #cfcfcf;
}

.file-input {
  height: 100%;
  left: 0;
  opacity: 0;
  outline: none;
  position: absolute;
  top: 0;
  width: 100%;
}

.file-cta,
.file-name {
  border-color: #dbdbdb;
  border-radius: 4px;
  font-size: 1em;
  padding-left: 1em;
  padding-right: 1em;
  white-space: nowrap;
}

.file-cta {
  background-color: whitesmoke;
  color: #4a4a4a;
}

.file-name {
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 1px 1px 1px 0;
  display: block;
  max-width: 16em;
  overflow: hidden;
  text-align: left;
  text-overflow: ellipsis;
}

.file-icon {
  align-items: center;
  display: flex;
  height: 1em;
  justify-content: center;
  margin-right: 0.5em;
  width: 1em;
}

.file-icon .fa {
  font-size: 14px;
}

.label {
  color: #363636;
  display: block;
  font-size: 1rem;
  font-weight: 700;
}

.label:not(:last-child) {
  margin-bottom: 0.5em;
}

.label.is-small {
  font-size: 0.75rem;
}

.label.is-medium {
  font-size: 1.25rem;
}

.label.is-large {
  font-size: 1.5rem;
}

.help {
  display: block;
  font-size: 0.75rem;
  margin-top: 0.25rem;
}

.help.is-white {
  color: white;
}

.help.is-black {
  color: #0a0a0a;
}

.help.is-light {
  color: whitesmoke;
}

.help.is-dark {
  color: #363636;
}

.help.is-primary {
  color: #00d1b2;
}

.help.is-link {
  color: #3273dc;
}

.help.is-info {
  color: #209cee;
}

.help.is-success {
  color: #23d160;
}

.help.is-warning {
  color: #ffdd57;
}

.help.is-danger {
  color: #ff3860;
}

.field:not(:last-child) {
  margin-bottom: 0.75rem;
}

.field.has-addons {
  display: flex;
  justify-content: flex-start;
}

.field.has-addons .control:not(:last-child) {
  margin-right: -1px;
}

.field.has-addons .control:not(:first-child):not(:last-child) .button,
.field.has-addons .control:not(:first-child):not(:last-child) .input,
.field.has-addons .control:not(:first-child):not(:last-child) .select select {
  border-radius: 0;
}

.field.has-addons .control:first-child:not(:only-child) .button,
.field.has-addons .control:first-child:not(:only-child) .input,
.field.has-addons .control:first-child:not(:only-child) .select select {
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

.field.has-addons .control:last-child:not(:only-child) .button,
.field.has-addons .control:last-child:not(:only-child) .input,
.field.has-addons .control:last-child:not(:only-child) .select select {
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

.field.has-addons .control .button:not([disabled]):hover, .field.has-addons .control .button:not([disabled]).is-hovered,
.field.has-addons .control .input:not([disabled]):hover,
.field.has-addons .control .input:not([disabled]).is-hovered,
.field.has-addons .control .select select:not([disabled]):hover,
.field.has-addons .control .select select:not([disabled]).is-hovered {
  z-index: 2;
}

.field.has-addons .control .button:not([disabled]):focus, .field.has-addons .control .button:not([disabled]).is-focused, .field.has-addons .control .button:not([disabled]):active, .field.has-addons .control .button:not([disabled]).is-active,
.field.has-addons .control .input:not([disabled]):focus,
.field.has-addons .control .input:not([disabled]).is-focused,
.field.has-addons .control .input:not([disabled]):active,
.field.has-addons .control .input:not([disabled]).is-active,
.field.has-addons .control .select select:not([disabled]):focus,
.field.has-addons .control .select select:not([disabled]).is-focused,
.field.has-addons .control .select select:not([disabled]):active,
.field.has-addons .control .select select:not([disabled]).is-active {
  z-index: 3;
}

.field.has-addons .control .button:not([disabled]):focus:hover, .field.has-addons .control .button:not([disabled]).is-focused:hover, .field.has-addons .control .button:not([disabled]):active:hover, .field.has-addons .control .button:not([disabled]).is-active:hover,
.field.has-addons .control .input:not([disabled]):focus:hover,
.field.has-addons .control .input:not([disabled]).is-focused:hover,
.field.has-addons .control .input:not([disabled]):active:hover,
.field.has-addons .control .input:not([disabled]).is-active:hover,
.field.has-addons .control .select select:not([disabled]):focus:hover,
.field.has-addons .control .select select:not([disabled]).is-focused:hover,
.field.has-addons .control .select select:not([disabled]):active:hover,
.field.has-addons .control .select select:not([disabled]).is-active:hover {
  z-index: 4;
}

.field.has-addons .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}

.field.has-addons.has-addons-centered {
  justify-content: center;
}

.field.has-addons.has-addons-right {
  justify-content: flex-end;
}

.field.has-addons.has-addons-fullwidth .control {
  flex-grow: 1;
  flex-shrink: 0;
}

.field.is-grouped {
  display: flex;
  justify-content: flex-start;
}

.field.is-grouped > .control {
  flex-shrink: 0;
}

.field.is-grouped > .control:not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}

.field.is-grouped > .control.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}

.field.is-grouped.is-grouped-centered {
  justify-content: center;
}

.field.is-grouped.is-grouped-right {
  justify-content: flex-end;
}

.field.is-grouped.is-grouped-multiline {
  flex-wrap: wrap;
}

.field.is-grouped.is-grouped-multiline > .control:last-child, .field.is-grouped.is-grouped-multiline > .control:not(:last-child) {
  margin-bottom: 0.75rem;
}

.field.is-grouped.is-grouped-multiline:last-child {
  margin-bottom: -0.75rem;
}

.field.is-grouped.is-grouped-multiline:not(:last-child) {
  margin-bottom: 0;
}

@media screen and (min-width: 769px), print {
  .field.is-horizontal {
    display: flex;
  }
}

.field-label .label {
  font-size: inherit;
}

@media screen and (max-width: 768px) {
  .field-label {
    margin-bottom: 0.5rem;
  }
}

@media screen and (min-width: 769px), print {
  .field-label {
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 0;
    margin-right: 1.5rem;
    text-align: right;
  }
  .field-label.is-small {
    font-size: 0.75rem;
    padding-top: 0.375em;
  }
  .field-label.is-normal {
    padding-top: 0.375em;
  }
  .field-label.is-medium {
    font-size: 1.25rem;
    padding-top: 0.375em;
  }
  .field-label.is-large {
    font-size: 1.5rem;
    padding-top: 0.375em;
  }
}

.field-body .field .field {
  margin-bottom: 0;
}

@media screen and (min-width: 769px), print {
  .field-body {
    display: flex;
    flex-basis: 0;
    flex-grow: 5;
    flex-shrink: 1;
  }
  .field-body .field {
    margin-bottom: 0;
  }
  .field-body > .field {
    flex-shrink: 1;
  }
  .field-body > .field:not(.is-narrow) {
    flex-grow: 1;
  }
  .field-body > .field:not(:last-child) {
    margin-right: 0.75rem;
  }
}

.control {
  box-sizing: border-box;
  clear: both;
  font-size: 1rem;
  position: relative;
  text-align: left;
}

.control.has-icons-left .input:focus ~ .icon,
.control.has-icons-left .select:focus ~ .icon, .control.has-icons-right .input:focus ~ .icon,
.control.has-icons-right .select:focus ~ .icon {
  color: #7a7a7a;
}

.control.has-icons-left .input.is-small ~ .icon,
.control.has-icons-left .select.is-small ~ .icon, .control.has-icons-right .input.is-small ~ .icon,
.control.has-icons-right .select.is-small ~ .icon {
  font-size: 0.75rem;
}

.control.has-icons-left .input.is-medium ~ .icon,
.control.has-icons-left .select.is-medium ~ .icon, .control.has-icons-right .input.is-medium ~ .icon,
.control.has-icons-right .select.is-medium ~ .icon {
  font-size: 1.25rem;
}

.control.has-icons-left .input.is-large ~ .icon,
.control.has-icons-left .select.is-large ~ .icon, .control.has-icons-right .input.is-large ~ .icon,
.control.has-icons-right .select.is-large ~ .icon {
  font-size: 1.5rem;
}

.control.has-icons-left .icon, .control.has-icons-right .icon {
  color: #dbdbdb;
  height: 2.25em;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 2.25em;
  z-index: 4;
}

.control.has-icons-left .input,
.control.has-icons-left .select select {
  padding-left: 2.25em;
}

.control.has-icons-left .icon.is-left {
  left: 0;
}

.control.has-icons-right .input,
.control.has-icons-right .select select {
  padding-right: 2.25em;
}

.control.has-icons-right .icon.is-right {
  right: 0;
}

.control.is-loading::after {
  position: absolute !important;
  right: 0.625em;
  top: 0.625em;
  z-index: 4;
}

.control.is-loading.is-small:after {
  font-size: 0.75rem;
}

.control.is-loading.is-medium:after {
  font-size: 1.25rem;
}

.control.is-loading.is-large:after {
  font-size: 1.5rem;
}

.breadcrumb {
  font-size: 1rem;
  white-space: nowrap;
}

.breadcrumb a {
  align-items: center;
  color: #3273dc;
  display: flex;
  justify-content: center;
  padding: 0 0.75em;
}

.breadcrumb a:hover {
  color: #363636;
}

.breadcrumb li {
  align-items: center;
  display: flex;
}

.breadcrumb li:first-child a {
  padding-left: 0;
}

.breadcrumb li.is-active a {
  color: #363636;
  cursor: default;
  pointer-events: none;
}

.breadcrumb li + li::before {
  color: #b5b5b5;
  content: "\\0002f";
}

.breadcrumb ul,
.breadcrumb ol {
  align-items: flex-start;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}

.breadcrumb .icon:first-child {
  margin-right: 0.5em;
}

.breadcrumb .icon:last-child {
  margin-left: 0.5em;
}

.breadcrumb.is-centered ol,
.breadcrumb.is-centered ul {
  justify-content: center;
}

.breadcrumb.is-right ol,
.breadcrumb.is-right ul {
  justify-content: flex-end;
}

.breadcrumb.is-small {
  font-size: 0.75rem;
}

.breadcrumb.is-medium {
  font-size: 1.25rem;
}

.breadcrumb.is-large {
  font-size: 1.5rem;
}

.breadcrumb.has-arrow-separator li + li::before {
  content: "\\02192";
}

.breadcrumb.has-bullet-separator li + li::before {
  content: "\\02022";
}

.breadcrumb.has-dot-separator li + li::before {
  content: "\\000b7";
}

.breadcrumb.has-succeeds-separator li + li::before {
  content: "\\0227B";
}

.card {
  background-color: white;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  color: #4a4a4a;
  max-width: 100%;
  position: relative;
}

.card-header {
  background-color: transparent;
  align-items: stretch;
  box-shadow: 0 1px 2px rgba(10, 10, 10, 0.1);
  display: flex;
}

.card-header-title {
  align-items: center;
  color: #363636;
  display: flex;
  flex-grow: 1;
  font-weight: 700;
  padding: 0.75rem;
}

.card-header-title.is-centered {
  justify-content: center;
}

.card-header-icon {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.75rem;
}

.card-image {
  display: block;
  position: relative;
}

.card-content {
  background-color: transparent;
  padding: 1.5rem;
}

.card-footer {
  background-color: transparent;
  border-top: 1px solid #dbdbdb;
  align-items: stretch;
  display: flex;
}

.card-footer-item {
  align-items: center;
  display: flex;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: center;
  padding: 0.75rem;
}

.card-footer-item:not(:last-child) {
  border-right: 1px solid #dbdbdb;
}

.card .media:not(:last-child) {
  margin-bottom: 1.5rem;
}

.dropdown {
  display: inline-flex;
  position: relative;
  vertical-align: top;
}

.dropdown.is-active .dropdown-menu, .dropdown.is-hoverable:hover .dropdown-menu {
  display: block;
}

.dropdown.is-right .dropdown-menu {
  left: auto;
  right: 0;
}

.dropdown.is-up .dropdown-menu {
  bottom: 100%;
  padding-bottom: 4px;
  padding-top: initial;
  top: auto;
}

.dropdown-menu {
  display: none;
  left: 0;
  min-width: 12rem;
  padding-top: 4px;
  position: absolute;
  top: 100%;
  z-index: 20;
}

.dropdown-content {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.dropdown-item {
  color: #4a4a4a;
  display: block;
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0.375rem 1rem;
  position: relative;
}

a.dropdown-item,
button.dropdown-item {
  padding-right: 3rem;
  text-align: left;
  white-space: nowrap;
  width: 100%;
}

a.dropdown-item:hover,
button.dropdown-item:hover {
  background-color: whitesmoke;
  color: #0a0a0a;
}

a.dropdown-item.is-active,
button.dropdown-item.is-active {
  background-color: #3273dc;
  color: #fff;
}

.dropdown-divider {
  background-color: #dbdbdb;
  border: none;
  display: block;
  height: 1px;
  margin: 0.5rem 0;
}

.level {
  align-items: center;
  justify-content: space-between;
}

.level code {
  border-radius: 4px;
}

.level img {
  display: inline-block;
  vertical-align: top;
}

.level.is-mobile {
  display: flex;
}

.level.is-mobile .level-left,
.level.is-mobile .level-right {
  display: flex;
}

.level.is-mobile .level-left + .level-right {
  margin-top: 0;
}

.level.is-mobile .level-item:not(:last-child) {
  margin-bottom: 0;
  margin-right: 0.75rem;
}

.level.is-mobile .level-item:not(.is-narrow) {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .level {
    display: flex;
  }
  .level > .level-item:not(.is-narrow) {
    flex-grow: 1;
  }
}

.level-item {
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
}

.level-item .title,
.level-item .subtitle {
  margin-bottom: 0;
}

@media screen and (max-width: 768px) {
  .level-item:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}

.level-left,
.level-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.level-left .level-item.is-flexible,
.level-right .level-item.is-flexible {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .level-left .level-item:not(:last-child),
  .level-right .level-item:not(:last-child) {
    margin-right: 0.75rem;
  }
}

.level-left {
  align-items: center;
  justify-content: flex-start;
}

@media screen and (max-width: 768px) {
  .level-left + .level-right {
    margin-top: 1.5rem;
  }
}

@media screen and (min-width: 769px), print {
  .level-left {
    display: flex;
  }
}

.level-right {
  align-items: center;
  justify-content: flex-end;
}

@media screen and (min-width: 769px), print {
  .level-right {
    display: flex;
  }
}

.list {
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 2px 3px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
}

.list-item {
  display: block;
  padding: 0.5em 1em;
}

.list-item:not(a) {
  color: #4a4a4a;
}

.list-item:first-child {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.list-item:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.list-item:not(:last-child) {
  border-bottom: 1px solid #dbdbdb;
}

.list-item.is-active {
  background-color: #3273dc;
  color: #fff;
}

a.list-item {
  background-color: whitesmoke;
  cursor: pointer;
}

.media {
  align-items: flex-start;
  display: flex;
  text-align: left;
}

.media .content:not(:last-child) {
  margin-bottom: 0.75rem;
}

.media .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  display: flex;
  padding-top: 0.75rem;
}

.media .media .content:not(:last-child),
.media .media .control:not(:last-child) {
  margin-bottom: 0.5rem;
}

.media .media .media {
  padding-top: 0.5rem;
}

.media .media .media + .media {
  margin-top: 0.5rem;
}

.media + .media {
  border-top: 1px solid rgba(219, 219, 219, 0.5);
  margin-top: 1rem;
  padding-top: 1rem;
}

.media.is-large + .media {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
}

.media-left,
.media-right {
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
}

.media-left {
  margin-right: 1rem;
}

.media-right {
  margin-left: 1rem;
}

.media-content {
  flex-basis: auto;
  flex-grow: 1;
  flex-shrink: 1;
  text-align: left;
}

@media screen and (max-width: 768px) {
  .media-content {
    overflow-x: auto;
  }
}

.menu {
  font-size: 1rem;
}

.menu.is-small {
  font-size: 0.75rem;
}

.menu.is-medium {
  font-size: 1.25rem;
}

.menu.is-large {
  font-size: 1.5rem;
}

.menu-list {
  line-height: 1.25;
}

.menu-list a {
  border-radius: 2px;
  color: #4a4a4a;
  display: block;
  padding: 0.5em 0.75em;
}

.menu-list a:hover {
  background-color: whitesmoke;
  color: #363636;
}

.menu-list a.is-active {
  background-color: #3273dc;
  color: #fff;
}

.menu-list li ul {
  border-left: 1px solid #dbdbdb;
  margin: 0.75em;
  padding-left: 0.75em;
}

.menu-label {
  color: #7a7a7a;
  font-size: 0.75em;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.menu-label:not(:first-child) {
  margin-top: 1em;
}

.menu-label:not(:last-child) {
  margin-bottom: 1em;
}

.message {
  background-color: whitesmoke;
  border-radius: 4px;
  font-size: 1rem;
}

.message strong {
  color: currentColor;
}

.message a:not(.button):not(.tag):not(.dropdown-item) {
  color: currentColor;
  text-decoration: underline;
}

.message.is-small {
  font-size: 0.75rem;
}

.message.is-medium {
  font-size: 1.25rem;
}

.message.is-large {
  font-size: 1.5rem;
}

.message.is-white {
  background-color: white;
}

.message.is-white .message-header {
  background-color: white;
  color: #0a0a0a;
}

.message.is-white .message-body {
  border-color: white;
  color: #4d4d4d;
}

.message.is-black {
  background-color: #fafafa;
}

.message.is-black .message-header {
  background-color: #0a0a0a;
  color: white;
}

.message.is-black .message-body {
  border-color: #0a0a0a;
  color: #090909;
}

.message.is-light {
  background-color: #fafafa;
}

.message.is-light .message-header {
  background-color: whitesmoke;
  color: #363636;
}

.message.is-light .message-body {
  border-color: whitesmoke;
  color: #505050;
}

.message.is-dark {
  background-color: #fafafa;
}

.message.is-dark .message-header {
  background-color: #363636;
  color: whitesmoke;
}

.message.is-dark .message-body {
  border-color: #363636;
  color: #2a2a2a;
}

.message.is-primary {
  background-color: #f5fffd;
}

.message.is-primary .message-header {
  background-color: #00d1b2;
  color: #fff;
}

.message.is-primary .message-body {
  border-color: #00d1b2;
  color: #021310;
}

.message.is-link {
  background-color: #f6f9fe;
}

.message.is-link .message-header {
  background-color: #3273dc;
  color: #fff;
}

.message.is-link .message-body {
  border-color: #3273dc;
  color: #22509a;
}

.message.is-info {
  background-color: #f6fbfe;
}

.message.is-info .message-header {
  background-color: #209cee;
  color: #fff;
}

.message.is-info .message-body {
  border-color: #209cee;
  color: #12537e;
}

.message.is-success {
  background-color: #f6fef9;
}

.message.is-success .message-header {
  background-color: #23d160;
  color: #fff;
}

.message.is-success .message-body {
  border-color: #23d160;
  color: #0e301a;
}

.message.is-warning {
  background-color: #fffdf5;
}

.message.is-warning .message-header {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.message.is-warning .message-body {
  border-color: #ffdd57;
  color: #3b3108;
}

.message.is-danger {
  background-color: #fff5f7;
}

.message.is-danger .message-header {
  background-color: #ff3860;
  color: #fff;
}

.message.is-danger .message-body {
  border-color: #ff3860;
  color: #cd0930;
}

.message-header {
  align-items: center;
  background-color: #4a4a4a;
  border-radius: 4px 4px 0 0;
  color: #fff;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  line-height: 1.25;
  padding: 0.75em 1em;
  position: relative;
}

.message-header .delete {
  flex-grow: 0;
  flex-shrink: 0;
  margin-left: 0.75em;
}

.message-header + .message-body {
  border-width: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.message-body {
  border-color: #dbdbdb;
  border-radius: 4px;
  border-style: solid;
  border-width: 0 0 0 4px;
  color: #4a4a4a;
  padding: 1.25em 1.5em;
}

.message-body code,
.message-body pre {
  background-color: white;
}

.message-body pre code {
  background-color: transparent;
}

.modal {
  align-items: center;
  display: none;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: fixed;
  z-index: 40;
}

.modal.is-active {
  display: flex;
}

.modal-background {
  background-color: rgba(10, 10, 10, 0.86);
}

.modal-content,
.modal-card {
  margin: 0 20px;
  max-height: calc(100vh - 160px);
  overflow: auto;
  position: relative;
  width: 100%;
}

@media screen and (min-width: 769px), print {
  .modal-content,
  .modal-card {
    margin: 0 auto;
    max-height: calc(100vh - 40px);
    width: 640px;
  }
}

.modal-close {
  background: none;
  height: 40px;
  position: fixed;
  right: 20px;
  top: 20px;
  width: 40px;
}

.modal-card {
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 40px);
  overflow: hidden;
  -ms-overflow-y: visible;
}

.modal-card-head,
.modal-card-foot {
  align-items: center;
  background-color: whitesmoke;
  display: flex;
  flex-shrink: 0;
  justify-content: flex-start;
  padding: 20px;
  position: relative;
}

.modal-card-head {
  border-bottom: 1px solid #dbdbdb;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.modal-card-title {
  color: #363636;
  flex-grow: 1;
  flex-shrink: 0;
  font-size: 1.5rem;
  line-height: 1;
}

.modal-card-foot {
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-top: 1px solid #dbdbdb;
}

.modal-card-foot .button:not(:last-child) {
  margin-right: 0.5em;
}

.modal-card-body {
  -webkit-overflow-scrolling: touch;
  background-color: white;
  flex-grow: 1;
  flex-shrink: 1;
  overflow: auto;
  padding: 20px;
}

.navbar {
  background-color: white;
  min-height: 3.25rem;
  position: relative;
  z-index: 30;
}

.navbar.is-white {
  background-color: white;
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand > .navbar-item,
.navbar.is-white .navbar-brand .navbar-link {
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand > a.navbar-item:focus, .navbar.is-white .navbar-brand > a.navbar-item:hover, .navbar.is-white .navbar-brand > a.navbar-item.is-active,
.navbar.is-white .navbar-brand .navbar-link:focus,
.navbar.is-white .navbar-brand .navbar-link:hover,
.navbar.is-white .navbar-brand .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.navbar.is-white .navbar-brand .navbar-link::after {
  border-color: #0a0a0a;
}

.navbar.is-white .navbar-burger {
  color: #0a0a0a;
}

@media screen and (min-width: 1024px) {
  .navbar.is-white .navbar-start > .navbar-item,
  .navbar.is-white .navbar-start .navbar-link,
  .navbar.is-white .navbar-end > .navbar-item,
  .navbar.is-white .navbar-end .navbar-link {
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start > a.navbar-item:focus, .navbar.is-white .navbar-start > a.navbar-item:hover, .navbar.is-white .navbar-start > a.navbar-item.is-active,
  .navbar.is-white .navbar-start .navbar-link:focus,
  .navbar.is-white .navbar-start .navbar-link:hover,
  .navbar.is-white .navbar-start .navbar-link.is-active,
  .navbar.is-white .navbar-end > a.navbar-item:focus,
  .navbar.is-white .navbar-end > a.navbar-item:hover,
  .navbar.is-white .navbar-end > a.navbar-item.is-active,
  .navbar.is-white .navbar-end .navbar-link:focus,
  .navbar.is-white .navbar-end .navbar-link:hover,
  .navbar.is-white .navbar-end .navbar-link.is-active {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-start .navbar-link::after,
  .navbar.is-white .navbar-end .navbar-link::after {
    border-color: #0a0a0a;
  }
  .navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-white .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #f2f2f2;
    color: #0a0a0a;
  }
  .navbar.is-white .navbar-dropdown a.navbar-item.is-active {
    background-color: white;
    color: #0a0a0a;
  }
}

.navbar.is-black {
  background-color: #0a0a0a;
  color: white;
}

.navbar.is-black .navbar-brand > .navbar-item,
.navbar.is-black .navbar-brand .navbar-link {
  color: white;
}

.navbar.is-black .navbar-brand > a.navbar-item:focus, .navbar.is-black .navbar-brand > a.navbar-item:hover, .navbar.is-black .navbar-brand > a.navbar-item.is-active,
.navbar.is-black .navbar-brand .navbar-link:focus,
.navbar.is-black .navbar-brand .navbar-link:hover,
.navbar.is-black .navbar-brand .navbar-link.is-active {
  background-color: black;
  color: white;
}

.navbar.is-black .navbar-brand .navbar-link::after {
  border-color: white;
}

.navbar.is-black .navbar-burger {
  color: white;
}

@media screen and (min-width: 1024px) {
  .navbar.is-black .navbar-start > .navbar-item,
  .navbar.is-black .navbar-start .navbar-link,
  .navbar.is-black .navbar-end > .navbar-item,
  .navbar.is-black .navbar-end .navbar-link {
    color: white;
  }
  .navbar.is-black .navbar-start > a.navbar-item:focus, .navbar.is-black .navbar-start > a.navbar-item:hover, .navbar.is-black .navbar-start > a.navbar-item.is-active,
  .navbar.is-black .navbar-start .navbar-link:focus,
  .navbar.is-black .navbar-start .navbar-link:hover,
  .navbar.is-black .navbar-start .navbar-link.is-active,
  .navbar.is-black .navbar-end > a.navbar-item:focus,
  .navbar.is-black .navbar-end > a.navbar-item:hover,
  .navbar.is-black .navbar-end > a.navbar-item.is-active,
  .navbar.is-black .navbar-end .navbar-link:focus,
  .navbar.is-black .navbar-end .navbar-link:hover,
  .navbar.is-black .navbar-end .navbar-link.is-active {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-start .navbar-link::after,
  .navbar.is-black .navbar-end .navbar-link::after {
    border-color: white;
  }
  .navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-black .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: black;
    color: white;
  }
  .navbar.is-black .navbar-dropdown a.navbar-item.is-active {
    background-color: #0a0a0a;
    color: white;
  }
}

.navbar.is-light {
  background-color: whitesmoke;
  color: #363636;
}

.navbar.is-light .navbar-brand > .navbar-item,
.navbar.is-light .navbar-brand .navbar-link {
  color: #363636;
}

.navbar.is-light .navbar-brand > a.navbar-item:focus, .navbar.is-light .navbar-brand > a.navbar-item:hover, .navbar.is-light .navbar-brand > a.navbar-item.is-active,
.navbar.is-light .navbar-brand .navbar-link:focus,
.navbar.is-light .navbar-brand .navbar-link:hover,
.navbar.is-light .navbar-brand .navbar-link.is-active {
  background-color: #e8e8e8;
  color: #363636;
}

.navbar.is-light .navbar-brand .navbar-link::after {
  border-color: #363636;
}

.navbar.is-light .navbar-burger {
  color: #363636;
}

@media screen and (min-width: 1024px) {
  .navbar.is-light .navbar-start > .navbar-item,
  .navbar.is-light .navbar-start .navbar-link,
  .navbar.is-light .navbar-end > .navbar-item,
  .navbar.is-light .navbar-end .navbar-link {
    color: #363636;
  }
  .navbar.is-light .navbar-start > a.navbar-item:focus, .navbar.is-light .navbar-start > a.navbar-item:hover, .navbar.is-light .navbar-start > a.navbar-item.is-active,
  .navbar.is-light .navbar-start .navbar-link:focus,
  .navbar.is-light .navbar-start .navbar-link:hover,
  .navbar.is-light .navbar-start .navbar-link.is-active,
  .navbar.is-light .navbar-end > a.navbar-item:focus,
  .navbar.is-light .navbar-end > a.navbar-item:hover,
  .navbar.is-light .navbar-end > a.navbar-item.is-active,
  .navbar.is-light .navbar-end .navbar-link:focus,
  .navbar.is-light .navbar-end .navbar-link:hover,
  .navbar.is-light .navbar-end .navbar-link.is-active {
    background-color: #e8e8e8;
    color: #363636;
  }
  .navbar.is-light .navbar-start .navbar-link::after,
  .navbar.is-light .navbar-end .navbar-link::after {
    border-color: #363636;
  }
  .navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-light .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #e8e8e8;
    color: #363636;
  }
  .navbar.is-light .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #363636;
  }
}

.navbar.is-dark {
  background-color: #363636;
  color: whitesmoke;
}

.navbar.is-dark .navbar-brand > .navbar-item,
.navbar.is-dark .navbar-brand .navbar-link {
  color: whitesmoke;
}

.navbar.is-dark .navbar-brand > a.navbar-item:focus, .navbar.is-dark .navbar-brand > a.navbar-item:hover, .navbar.is-dark .navbar-brand > a.navbar-item.is-active,
.navbar.is-dark .navbar-brand .navbar-link:focus,
.navbar.is-dark .navbar-brand .navbar-link:hover,
.navbar.is-dark .navbar-brand .navbar-link.is-active {
  background-color: #292929;
  color: whitesmoke;
}

.navbar.is-dark .navbar-brand .navbar-link::after {
  border-color: whitesmoke;
}

.navbar.is-dark .navbar-burger {
  color: whitesmoke;
}

@media screen and (min-width: 1024px) {
  .navbar.is-dark .navbar-start > .navbar-item,
  .navbar.is-dark .navbar-start .navbar-link,
  .navbar.is-dark .navbar-end > .navbar-item,
  .navbar.is-dark .navbar-end .navbar-link {
    color: whitesmoke;
  }
  .navbar.is-dark .navbar-start > a.navbar-item:focus, .navbar.is-dark .navbar-start > a.navbar-item:hover, .navbar.is-dark .navbar-start > a.navbar-item.is-active,
  .navbar.is-dark .navbar-start .navbar-link:focus,
  .navbar.is-dark .navbar-start .navbar-link:hover,
  .navbar.is-dark .navbar-start .navbar-link.is-active,
  .navbar.is-dark .navbar-end > a.navbar-item:focus,
  .navbar.is-dark .navbar-end > a.navbar-item:hover,
  .navbar.is-dark .navbar-end > a.navbar-item.is-active,
  .navbar.is-dark .navbar-end .navbar-link:focus,
  .navbar.is-dark .navbar-end .navbar-link:hover,
  .navbar.is-dark .navbar-end .navbar-link.is-active {
    background-color: #292929;
    color: whitesmoke;
  }
  .navbar.is-dark .navbar-start .navbar-link::after,
  .navbar.is-dark .navbar-end .navbar-link::after {
    border-color: whitesmoke;
  }
  .navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #292929;
    color: whitesmoke;
  }
  .navbar.is-dark .navbar-dropdown a.navbar-item.is-active {
    background-color: #363636;
    color: whitesmoke;
  }
}

.navbar.is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.navbar.is-primary .navbar-brand > .navbar-item,
.navbar.is-primary .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-primary .navbar-brand > a.navbar-item:focus, .navbar.is-primary .navbar-brand > a.navbar-item:hover, .navbar.is-primary .navbar-brand > a.navbar-item.is-active,
.navbar.is-primary .navbar-brand .navbar-link:focus,
.navbar.is-primary .navbar-brand .navbar-link:hover,
.navbar.is-primary .navbar-brand .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}

.navbar.is-primary .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-primary .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-primary .navbar-start > .navbar-item,
  .navbar.is-primary .navbar-start .navbar-link,
  .navbar.is-primary .navbar-end > .navbar-item,
  .navbar.is-primary .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-primary .navbar-start > a.navbar-item:focus, .navbar.is-primary .navbar-start > a.navbar-item:hover, .navbar.is-primary .navbar-start > a.navbar-item.is-active,
  .navbar.is-primary .navbar-start .navbar-link:focus,
  .navbar.is-primary .navbar-start .navbar-link:hover,
  .navbar.is-primary .navbar-start .navbar-link.is-active,
  .navbar.is-primary .navbar-end > a.navbar-item:focus,
  .navbar.is-primary .navbar-end > a.navbar-item:hover,
  .navbar.is-primary .navbar-end > a.navbar-item.is-active,
  .navbar.is-primary .navbar-end .navbar-link:focus,
  .navbar.is-primary .navbar-end .navbar-link:hover,
  .navbar.is-primary .navbar-end .navbar-link.is-active {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-start .navbar-link::after,
  .navbar.is-primary .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #00b89c;
    color: #fff;
  }
  .navbar.is-primary .navbar-dropdown a.navbar-item.is-active {
    background-color: #00d1b2;
    color: #fff;
  }
}

.navbar.is-link {
  background-color: #3273dc;
  color: #fff;
}

.navbar.is-link .navbar-brand > .navbar-item,
.navbar.is-link .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-link .navbar-brand > a.navbar-item:focus, .navbar.is-link .navbar-brand > a.navbar-item:hover, .navbar.is-link .navbar-brand > a.navbar-item.is-active,
.navbar.is-link .navbar-brand .navbar-link:focus,
.navbar.is-link .navbar-brand .navbar-link:hover,
.navbar.is-link .navbar-brand .navbar-link.is-active {
  background-color: #2366d1;
  color: #fff;
}

.navbar.is-link .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-link .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-link .navbar-start > .navbar-item,
  .navbar.is-link .navbar-start .navbar-link,
  .navbar.is-link .navbar-end > .navbar-item,
  .navbar.is-link .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-link .navbar-start > a.navbar-item:focus, .navbar.is-link .navbar-start > a.navbar-item:hover, .navbar.is-link .navbar-start > a.navbar-item.is-active,
  .navbar.is-link .navbar-start .navbar-link:focus,
  .navbar.is-link .navbar-start .navbar-link:hover,
  .navbar.is-link .navbar-start .navbar-link.is-active,
  .navbar.is-link .navbar-end > a.navbar-item:focus,
  .navbar.is-link .navbar-end > a.navbar-item:hover,
  .navbar.is-link .navbar-end > a.navbar-item.is-active,
  .navbar.is-link .navbar-end .navbar-link:focus,
  .navbar.is-link .navbar-end .navbar-link:hover,
  .navbar.is-link .navbar-end .navbar-link.is-active {
    background-color: #2366d1;
    color: #fff;
  }
  .navbar.is-link .navbar-start .navbar-link::after,
  .navbar.is-link .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-link .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #2366d1;
    color: #fff;
  }
  .navbar.is-link .navbar-dropdown a.navbar-item.is-active {
    background-color: #3273dc;
    color: #fff;
  }
}

.navbar.is-info {
  background-color: #209cee;
  color: #fff;
}

.navbar.is-info .navbar-brand > .navbar-item,
.navbar.is-info .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-info .navbar-brand > a.navbar-item:focus, .navbar.is-info .navbar-brand > a.navbar-item:hover, .navbar.is-info .navbar-brand > a.navbar-item.is-active,
.navbar.is-info .navbar-brand .navbar-link:focus,
.navbar.is-info .navbar-brand .navbar-link:hover,
.navbar.is-info .navbar-brand .navbar-link.is-active {
  background-color: #118fe4;
  color: #fff;
}

.navbar.is-info .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-info .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-info .navbar-start > .navbar-item,
  .navbar.is-info .navbar-start .navbar-link,
  .navbar.is-info .navbar-end > .navbar-item,
  .navbar.is-info .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-info .navbar-start > a.navbar-item:focus, .navbar.is-info .navbar-start > a.navbar-item:hover, .navbar.is-info .navbar-start > a.navbar-item.is-active,
  .navbar.is-info .navbar-start .navbar-link:focus,
  .navbar.is-info .navbar-start .navbar-link:hover,
  .navbar.is-info .navbar-start .navbar-link.is-active,
  .navbar.is-info .navbar-end > a.navbar-item:focus,
  .navbar.is-info .navbar-end > a.navbar-item:hover,
  .navbar.is-info .navbar-end > a.navbar-item.is-active,
  .navbar.is-info .navbar-end .navbar-link:focus,
  .navbar.is-info .navbar-end .navbar-link:hover,
  .navbar.is-info .navbar-end .navbar-link.is-active {
    background-color: #118fe4;
    color: #fff;
  }
  .navbar.is-info .navbar-start .navbar-link::after,
  .navbar.is-info .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-info .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #118fe4;
    color: #fff;
  }
  .navbar.is-info .navbar-dropdown a.navbar-item.is-active {
    background-color: #209cee;
    color: #fff;
  }
}

.navbar.is-success {
  background-color: #23d160;
  color: #fff;
}

.navbar.is-success .navbar-brand > .navbar-item,
.navbar.is-success .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-success .navbar-brand > a.navbar-item:focus, .navbar.is-success .navbar-brand > a.navbar-item:hover, .navbar.is-success .navbar-brand > a.navbar-item.is-active,
.navbar.is-success .navbar-brand .navbar-link:focus,
.navbar.is-success .navbar-brand .navbar-link:hover,
.navbar.is-success .navbar-brand .navbar-link.is-active {
  background-color: #20bc56;
  color: #fff;
}

.navbar.is-success .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-success .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-success .navbar-start > .navbar-item,
  .navbar.is-success .navbar-start .navbar-link,
  .navbar.is-success .navbar-end > .navbar-item,
  .navbar.is-success .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-success .navbar-start > a.navbar-item:focus, .navbar.is-success .navbar-start > a.navbar-item:hover, .navbar.is-success .navbar-start > a.navbar-item.is-active,
  .navbar.is-success .navbar-start .navbar-link:focus,
  .navbar.is-success .navbar-start .navbar-link:hover,
  .navbar.is-success .navbar-start .navbar-link.is-active,
  .navbar.is-success .navbar-end > a.navbar-item:focus,
  .navbar.is-success .navbar-end > a.navbar-item:hover,
  .navbar.is-success .navbar-end > a.navbar-item.is-active,
  .navbar.is-success .navbar-end .navbar-link:focus,
  .navbar.is-success .navbar-end .navbar-link:hover,
  .navbar.is-success .navbar-end .navbar-link.is-active {
    background-color: #20bc56;
    color: #fff;
  }
  .navbar.is-success .navbar-start .navbar-link::after,
  .navbar.is-success .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-success .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #20bc56;
    color: #fff;
  }
  .navbar.is-success .navbar-dropdown a.navbar-item.is-active {
    background-color: #23d160;
    color: #fff;
  }
}

.navbar.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand > .navbar-item,
.navbar.is-warning .navbar-brand .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand > a.navbar-item:focus, .navbar.is-warning .navbar-brand > a.navbar-item:hover, .navbar.is-warning .navbar-brand > a.navbar-item.is-active,
.navbar.is-warning .navbar-brand .navbar-link:focus,
.navbar.is-warning .navbar-brand .navbar-link:hover,
.navbar.is-warning .navbar-brand .navbar-link.is-active {
  background-color: #ffd83d;
  color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-brand .navbar-link::after {
  border-color: rgba(0, 0, 0, 0.7);
}

.navbar.is-warning .navbar-burger {
  color: rgba(0, 0, 0, 0.7);
}

@media screen and (min-width: 1024px) {
  .navbar.is-warning .navbar-start > .navbar-item,
  .navbar.is-warning .navbar-start .navbar-link,
  .navbar.is-warning .navbar-end > .navbar-item,
  .navbar.is-warning .navbar-end .navbar-link {
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start > a.navbar-item:focus, .navbar.is-warning .navbar-start > a.navbar-item:hover, .navbar.is-warning .navbar-start > a.navbar-item.is-active,
  .navbar.is-warning .navbar-start .navbar-link:focus,
  .navbar.is-warning .navbar-start .navbar-link:hover,
  .navbar.is-warning .navbar-start .navbar-link.is-active,
  .navbar.is-warning .navbar-end > a.navbar-item:focus,
  .navbar.is-warning .navbar-end > a.navbar-item:hover,
  .navbar.is-warning .navbar-end > a.navbar-item.is-active,
  .navbar.is-warning .navbar-end .navbar-link:focus,
  .navbar.is-warning .navbar-end .navbar-link:hover,
  .navbar.is-warning .navbar-end .navbar-link.is-active {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-start .navbar-link::after,
  .navbar.is-warning .navbar-end .navbar-link::after {
    border-color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ffd83d;
    color: rgba(0, 0, 0, 0.7);
  }
  .navbar.is-warning .navbar-dropdown a.navbar-item.is-active {
    background-color: #ffdd57;
    color: rgba(0, 0, 0, 0.7);
  }
}

.navbar.is-danger {
  background-color: #ff3860;
  color: #fff;
}

.navbar.is-danger .navbar-brand > .navbar-item,
.navbar.is-danger .navbar-brand .navbar-link {
  color: #fff;
}

.navbar.is-danger .navbar-brand > a.navbar-item:focus, .navbar.is-danger .navbar-brand > a.navbar-item:hover, .navbar.is-danger .navbar-brand > a.navbar-item.is-active,
.navbar.is-danger .navbar-brand .navbar-link:focus,
.navbar.is-danger .navbar-brand .navbar-link:hover,
.navbar.is-danger .navbar-brand .navbar-link.is-active {
  background-color: #ff1f4b;
  color: #fff;
}

.navbar.is-danger .navbar-brand .navbar-link::after {
  border-color: #fff;
}

.navbar.is-danger .navbar-burger {
  color: #fff;
}

@media screen and (min-width: 1024px) {
  .navbar.is-danger .navbar-start > .navbar-item,
  .navbar.is-danger .navbar-start .navbar-link,
  .navbar.is-danger .navbar-end > .navbar-item,
  .navbar.is-danger .navbar-end .navbar-link {
    color: #fff;
  }
  .navbar.is-danger .navbar-start > a.navbar-item:focus, .navbar.is-danger .navbar-start > a.navbar-item:hover, .navbar.is-danger .navbar-start > a.navbar-item.is-active,
  .navbar.is-danger .navbar-start .navbar-link:focus,
  .navbar.is-danger .navbar-start .navbar-link:hover,
  .navbar.is-danger .navbar-start .navbar-link.is-active,
  .navbar.is-danger .navbar-end > a.navbar-item:focus,
  .navbar.is-danger .navbar-end > a.navbar-item:hover,
  .navbar.is-danger .navbar-end > a.navbar-item.is-active,
  .navbar.is-danger .navbar-end .navbar-link:focus,
  .navbar.is-danger .navbar-end .navbar-link:hover,
  .navbar.is-danger .navbar-end .navbar-link.is-active {
    background-color: #ff1f4b;
    color: #fff;
  }
  .navbar.is-danger .navbar-start .navbar-link::after,
  .navbar.is-danger .navbar-end .navbar-link::after {
    border-color: #fff;
  }
  .navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,
  .navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link,
  .navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #ff1f4b;
    color: #fff;
  }
  .navbar.is-danger .navbar-dropdown a.navbar-item.is-active {
    background-color: #ff3860;
    color: #fff;
  }
}

.navbar > .container {
  align-items: stretch;
  display: flex;
  min-height: 3.25rem;
  width: 100%;
}

.navbar.has-shadow {
  box-shadow: 0 2px 0 0 whitesmoke;
}

.navbar.is-fixed-bottom, .navbar.is-fixed-top {
  left: 0;
  position: fixed;
  right: 0;
  z-index: 30;
}

.navbar.is-fixed-bottom {
  bottom: 0;
}

.navbar.is-fixed-bottom.has-shadow {
  box-shadow: 0 -2px 0 0 whitesmoke;
}

.navbar.is-fixed-top {
  top: 0;
}

html.has-navbar-fixed-top,
body.has-navbar-fixed-top {
  padding-top: 3.25rem;
}

html.has-navbar-fixed-bottom,
body.has-navbar-fixed-bottom {
  padding-bottom: 3.25rem;
}

.navbar-brand,
.navbar-tabs {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
}

.navbar-brand a.navbar-item:focus, .navbar-brand a.navbar-item:hover {
  background-color: transparent;
}

.navbar-tabs {
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}

.navbar-burger {
  color: #4a4a4a;
  cursor: pointer;
  display: block;
  height: 3.25rem;
  position: relative;
  width: 3.25rem;
  margin-left: auto;
}

.navbar-burger span {
  background-color: currentColor;
  display: block;
  height: 1px;
  left: calc(50% - 8px);
  position: absolute;
  -webkit-transform-origin: center;
          transform-origin: center;
  transition-duration: 86ms;
  transition-property: background-color, opacity, -webkit-transform;
  transition-property: background-color, opacity, transform;
  transition-property: background-color, opacity, transform, -webkit-transform;
  transition-timing-function: ease-out;
  width: 16px;
}

.navbar-burger span:nth-child(1) {
  top: calc(50% - 6px);
}

.navbar-burger span:nth-child(2) {
  top: calc(50% - 1px);
}

.navbar-burger span:nth-child(3) {
  top: calc(50% + 4px);
}

.navbar-burger:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.navbar-burger.is-active span:nth-child(1) {
  -webkit-transform: translateY(5px) rotate(45deg);
          transform: translateY(5px) rotate(45deg);
}

.navbar-burger.is-active span:nth-child(2) {
  opacity: 0;
}

.navbar-burger.is-active span:nth-child(3) {
  -webkit-transform: translateY(-5px) rotate(-45deg);
          transform: translateY(-5px) rotate(-45deg);
}

.navbar-menu {
  display: none;
}

.navbar-item,
.navbar-link {
  color: #4a4a4a;
  display: block;
  line-height: 1.5;
  padding: 0.5rem 0.75rem;
  position: relative;
}

.navbar-item .icon:only-child,
.navbar-link .icon:only-child {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

a.navbar-item,
.navbar-link {
  cursor: pointer;
}

a.navbar-item:focus, a.navbar-item:focus-within, a.navbar-item:hover, a.navbar-item.is-active,
.navbar-link:focus,
.navbar-link:focus-within,
.navbar-link:hover,
.navbar-link.is-active {
  background-color: #fafafa;
  color: #3273dc;
}

.navbar-item {
  display: block;
  flex-grow: 0;
  flex-shrink: 0;
}

.navbar-item img {
  max-height: 1.75rem;
}

.navbar-item.has-dropdown {
  padding: 0;
}

.navbar-item.is-expanded {
  flex-grow: 1;
  flex-shrink: 1;
}

.navbar-item.is-tab {
  border-bottom: 1px solid transparent;
  min-height: 3.25rem;
  padding-bottom: calc(0.5rem - 1px);
}

.navbar-item.is-tab:focus, .navbar-item.is-tab:hover {
  background-color: transparent;
  border-bottom-color: #3273dc;
}

.navbar-item.is-tab.is-active {
  background-color: transparent;
  border-bottom-color: #3273dc;
  border-bottom-style: solid;
  border-bottom-width: 3px;
  color: #3273dc;
  padding-bottom: calc(0.5rem - 3px);
}

.navbar-content {
  flex-grow: 1;
  flex-shrink: 1;
}

.navbar-link:not(.is-arrowless) {
  padding-right: 2.5em;
}

.navbar-link:not(.is-arrowless)::after {
  border-color: #3273dc;
  margin-top: -0.375em;
  right: 1.125em;
}

.navbar-dropdown {
  font-size: 0.875rem;
  padding-bottom: 0.5rem;
  padding-top: 0.5rem;
}

.navbar-dropdown .navbar-item {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.navbar-divider {
  background-color: whitesmoke;
  border: none;
  display: none;
  height: 2px;
  margin: 0.5rem 0;
}

@media screen and (max-width: 1023px) {
  .navbar > .container {
    display: block;
  }
  .navbar-brand .navbar-item,
  .navbar-tabs .navbar-item {
    align-items: center;
    display: flex;
  }
  .navbar-link::after {
    display: none;
  }
  .navbar-menu {
    background-color: white;
    box-shadow: 0 8px 16px rgba(10, 10, 10, 0.1);
    padding: 0.5rem 0;
  }
  .navbar-menu.is-active {
    display: block;
  }
  .navbar.is-fixed-bottom-touch, .navbar.is-fixed-top-touch {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-touch {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-touch.has-shadow {
    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  }
  .navbar.is-fixed-top-touch {
    top: 0;
  }
  .navbar.is-fixed-top .navbar-menu, .navbar.is-fixed-top-touch .navbar-menu {
    -webkit-overflow-scrolling: touch;
    max-height: calc(100vh - 3.25rem);
    overflow: auto;
  }
  html.has-navbar-fixed-top-touch,
  body.has-navbar-fixed-top-touch {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-touch,
  body.has-navbar-fixed-bottom-touch {
    padding-bottom: 3.25rem;
  }
}

@media screen and (min-width: 1024px) {
  .navbar,
  .navbar-menu,
  .navbar-start,
  .navbar-end {
    align-items: stretch;
    display: flex;
  }
  .navbar {
    min-height: 3.25rem;
  }
  .navbar.is-spaced {
    padding: 1rem 2rem;
  }
  .navbar.is-spaced .navbar-start,
  .navbar.is-spaced .navbar-end {
    align-items: center;
  }
  .navbar.is-spaced a.navbar-item,
  .navbar.is-spaced .navbar-link {
    border-radius: 4px;
  }
  .navbar.is-transparent a.navbar-item:focus, .navbar.is-transparent a.navbar-item:hover, .navbar.is-transparent a.navbar-item.is-active,
  .navbar.is-transparent .navbar-link:focus,
  .navbar.is-transparent .navbar-link:hover,
  .navbar.is-transparent .navbar-link.is-active {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link, .navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link {
    background-color: transparent !important;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item:focus, .navbar.is-transparent .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }
  .navbar.is-transparent .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #3273dc;
  }
  .navbar-burger {
    display: none;
  }
  .navbar-item,
  .navbar-link {
    align-items: center;
    display: flex;
  }
  .navbar-item {
    display: flex;
  }
  .navbar-item.has-dropdown {
    align-items: stretch;
  }
  .navbar-item.has-dropdown-up .navbar-link::after {
    -webkit-transform: rotate(135deg) translate(0.25em, -0.25em);
            transform: rotate(135deg) translate(0.25em, -0.25em);
  }
  .navbar-item.has-dropdown-up .navbar-dropdown {
    border-bottom: 2px solid #dbdbdb;
    border-radius: 6px 6px 0 0;
    border-top: none;
    bottom: 100%;
    box-shadow: 0 -8px 8px rgba(10, 10, 10, 0.1);
    top: auto;
  }
  .navbar-item.is-active .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown {
    display: block;
  }
  .navbar.is-spaced .navbar-item.is-active .navbar-dropdown, .navbar-item.is-active .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown, .navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown, .navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed, .navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown, .navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed {
    opacity: 1;
    pointer-events: auto;
    -webkit-transform: translateY(0);
            transform: translateY(0);
  }
  .navbar-menu {
    flex-grow: 1;
    flex-shrink: 0;
  }
  .navbar-start {
    justify-content: flex-start;
    margin-right: auto;
  }
  .navbar-end {
    justify-content: flex-end;
    margin-left: auto;
  }
  .navbar-dropdown {
    background-color: white;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    border-top: 2px solid #dbdbdb;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1);
    display: none;
    font-size: 0.875rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 20;
  }
  .navbar-dropdown .navbar-item {
    padding: 0.375rem 1rem;
    white-space: nowrap;
  }
  .navbar-dropdown a.navbar-item {
    padding-right: 3rem;
  }
  .navbar-dropdown a.navbar-item:focus, .navbar-dropdown a.navbar-item:hover {
    background-color: whitesmoke;
    color: #0a0a0a;
  }
  .navbar-dropdown a.navbar-item.is-active {
    background-color: whitesmoke;
    color: #3273dc;
  }
  .navbar.is-spaced .navbar-dropdown, .navbar-dropdown.is-boxed {
    border-radius: 6px;
    border-top: none;
    box-shadow: 0 8px 8px rgba(10, 10, 10, 0.1), 0 0 0 1px rgba(10, 10, 10, 0.1);
    display: block;
    opacity: 0;
    pointer-events: none;
    top: calc(100% + (-4px));
    -webkit-transform: translateY(-5px);
            transform: translateY(-5px);
    transition-duration: 86ms;
    transition-property: opacity, -webkit-transform;
    transition-property: opacity, transform;
    transition-property: opacity, transform, -webkit-transform;
  }
  .navbar-dropdown.is-right {
    left: auto;
    right: 0;
  }
  .navbar-divider {
    display: block;
  }
  .navbar > .container .navbar-brand,
  .container > .navbar .navbar-brand {
    margin-left: -.75rem;
  }
  .navbar > .container .navbar-menu,
  .container > .navbar .navbar-menu {
    margin-right: -.75rem;
  }
  .navbar.is-fixed-bottom-desktop, .navbar.is-fixed-top-desktop {
    left: 0;
    position: fixed;
    right: 0;
    z-index: 30;
  }
  .navbar.is-fixed-bottom-desktop {
    bottom: 0;
  }
  .navbar.is-fixed-bottom-desktop.has-shadow {
    box-shadow: 0 -2px 3px rgba(10, 10, 10, 0.1);
  }
  .navbar.is-fixed-top-desktop {
    top: 0;
  }
  html.has-navbar-fixed-top-desktop,
  body.has-navbar-fixed-top-desktop {
    padding-top: 3.25rem;
  }
  html.has-navbar-fixed-bottom-desktop,
  body.has-navbar-fixed-bottom-desktop {
    padding-bottom: 3.25rem;
  }
  html.has-spaced-navbar-fixed-top,
  body.has-spaced-navbar-fixed-top {
    padding-top: 5.25rem;
  }
  html.has-spaced-navbar-fixed-bottom,
  body.has-spaced-navbar-fixed-bottom {
    padding-bottom: 5.25rem;
  }
  a.navbar-item.is-active,
  .navbar-link.is-active {
    color: #0a0a0a;
  }
  a.navbar-item.is-active:not(:focus):not(:hover),
  .navbar-link.is-active:not(:focus):not(:hover) {
    background-color: transparent;
  }
  .navbar-item.has-dropdown:focus .navbar-link, .navbar-item.has-dropdown:hover .navbar-link, .navbar-item.has-dropdown.is-active .navbar-link {
    background-color: #fafafa;
  }
}

.hero.is-fullheight-with-navbar {
  min-height: calc(100vh - 3.25rem);
}

.pagination {
  font-size: 1rem;
  margin: -0.25rem;
}

.pagination.is-small {
  font-size: 0.75rem;
}

.pagination.is-medium {
  font-size: 1.25rem;
}

.pagination.is-large {
  font-size: 1.5rem;
}

.pagination.is-rounded .pagination-previous,
.pagination.is-rounded .pagination-next {
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 290486px;
}

.pagination.is-rounded .pagination-link {
  border-radius: 290486px;
}

.pagination,
.pagination-list {
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link,
.pagination-ellipsis {
  font-size: 1em;
  justify-content: center;
  margin: 0.25rem;
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-align: center;
}

.pagination-previous,
.pagination-next,
.pagination-link {
  border-color: #dbdbdb;
  color: #363636;
  min-width: 2.25em;
}

.pagination-previous:hover,
.pagination-next:hover,
.pagination-link:hover {
  border-color: #b5b5b5;
  color: #363636;
}

.pagination-previous:focus,
.pagination-next:focus,
.pagination-link:focus {
  border-color: #3273dc;
}

.pagination-previous:active,
.pagination-next:active,
.pagination-link:active {
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.2);
}

.pagination-previous[disabled],
.pagination-next[disabled],
.pagination-link[disabled] {
  background-color: #dbdbdb;
  border-color: #dbdbdb;
  box-shadow: none;
  color: #7a7a7a;
  opacity: 0.5;
}

.pagination-previous,
.pagination-next {
  padding-left: 0.75em;
  padding-right: 0.75em;
  white-space: nowrap;
}

.pagination-link.is-current {
  background-color: #3273dc;
  border-color: #3273dc;
  color: #fff;
}

.pagination-ellipsis {
  color: #b5b5b5;
  pointer-events: none;
}

.pagination-list {
  flex-wrap: wrap;
}

@media screen and (max-width: 768px) {
  .pagination {
    flex-wrap: wrap;
  }
  .pagination-previous,
  .pagination-next {
    flex-grow: 1;
    flex-shrink: 1;
  }
  .pagination-list li {
    flex-grow: 1;
    flex-shrink: 1;
  }
}

@media screen and (min-width: 769px), print {
  .pagination-list {
    flex-grow: 1;
    flex-shrink: 1;
    justify-content: flex-start;
    order: 1;
  }
  .pagination-previous {
    order: 2;
  }
  .pagination-next {
    order: 3;
  }
  .pagination {
    justify-content: space-between;
  }
  .pagination.is-centered .pagination-previous {
    order: 1;
  }
  .pagination.is-centered .pagination-list {
    justify-content: center;
    order: 2;
  }
  .pagination.is-centered .pagination-next {
    order: 3;
  }
  .pagination.is-right .pagination-previous {
    order: 1;
  }
  .pagination.is-right .pagination-next {
    order: 2;
  }
  .pagination.is-right .pagination-list {
    justify-content: flex-end;
    order: 3;
  }
}

.panel {
  font-size: 1rem;
}

.panel:not(:last-child) {
  margin-bottom: 1.5rem;
}

.panel-heading,
.panel-tabs,
.panel-block {
  border-bottom: 1px solid #dbdbdb;
  border-left: 1px solid #dbdbdb;
  border-right: 1px solid #dbdbdb;
}

.panel-heading:first-child,
.panel-tabs:first-child,
.panel-block:first-child {
  border-top: 1px solid #dbdbdb;
}

.panel-heading {
  background-color: whitesmoke;
  border-radius: 4px 4px 0 0;
  color: #363636;
  font-size: 1.25em;
  font-weight: 300;
  line-height: 1.25;
  padding: 0.5em 0.75em;
}

.panel-tabs {
  align-items: flex-end;
  display: flex;
  font-size: 0.875em;
  justify-content: center;
}

.panel-tabs a {
  border-bottom: 1px solid #dbdbdb;
  margin-bottom: -1px;
  padding: 0.5em;
}

.panel-tabs a.is-active {
  border-bottom-color: #4a4a4a;
  color: #363636;
}

.panel-list a {
  color: #4a4a4a;
}

.panel-list a:hover {
  color: #3273dc;
}

.panel-block {
  align-items: center;
  color: #363636;
  display: flex;
  justify-content: flex-start;
  padding: 0.5em 0.75em;
}

.panel-block input[type="checkbox"] {
  margin-right: 0.75em;
}

.panel-block > .control {
  flex-grow: 1;
  flex-shrink: 1;
  width: 100%;
}

.panel-block.is-wrapped {
  flex-wrap: wrap;
}

.panel-block.is-active {
  border-left-color: #3273dc;
  color: #363636;
}

.panel-block.is-active .panel-icon {
  color: #3273dc;
}

a.panel-block,
label.panel-block {
  cursor: pointer;
}

a.panel-block:hover,
label.panel-block:hover {
  background-color: whitesmoke;
}

.panel-icon {
  display: inline-block;
  font-size: 14px;
  height: 1em;
  line-height: 1em;
  text-align: center;
  vertical-align: top;
  width: 1em;
  color: #7a7a7a;
  margin-right: 0.75em;
}

.panel-icon .fa {
  font-size: inherit;
  line-height: inherit;
}

.tabs {
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}

.tabs a {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: #4a4a4a;
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5em 1em;
  vertical-align: top;
}

.tabs a:hover {
  border-bottom-color: #363636;
  color: #363636;
}

.tabs li {
  display: block;
}

.tabs li.is-active a {
  border-bottom-color: #3273dc;
  color: #3273dc;
}

.tabs ul {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
}

.tabs ul.is-left {
  padding-right: 0.75em;
}

.tabs ul.is-center {
  flex: none;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
}

.tabs ul.is-right {
  justify-content: flex-end;
  padding-left: 0.75em;
}

.tabs .icon:first-child {
  margin-right: 0.5em;
}

.tabs .icon:last-child {
  margin-left: 0.5em;
}

.tabs.is-centered ul {
  justify-content: center;
}

.tabs.is-right ul {
  justify-content: flex-end;
}

.tabs.is-boxed a {
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}

.tabs.is-boxed a:hover {
  background-color: whitesmoke;
  border-bottom-color: #dbdbdb;
}

.tabs.is-boxed li.is-active a {
  background-color: white;
  border-color: #dbdbdb;
  border-bottom-color: transparent !important;
}

.tabs.is-fullwidth li {
  flex-grow: 1;
  flex-shrink: 0;
}

.tabs.is-toggle a {
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0;
  position: relative;
}

.tabs.is-toggle a:hover {
  background-color: whitesmoke;
  border-color: #b5b5b5;
  z-index: 2;
}

.tabs.is-toggle li + li {
  margin-left: -1px;
}

.tabs.is-toggle li:first-child a {
  border-radius: 4px 0 0 4px;
}

.tabs.is-toggle li:last-child a {
  border-radius: 0 4px 4px 0;
}

.tabs.is-toggle li.is-active a {
  background-color: #3273dc;
  border-color: #3273dc;
  color: #fff;
  z-index: 1;
}

.tabs.is-toggle ul {
  border-bottom: none;
}

.tabs.is-toggle.is-toggle-rounded li:first-child a {
  border-bottom-left-radius: 290486px;
  border-top-left-radius: 290486px;
  padding-left: 1.25em;
}

.tabs.is-toggle.is-toggle-rounded li:last-child a {
  border-bottom-right-radius: 290486px;
  border-top-right-radius: 290486px;
  padding-right: 1.25em;
}

.tabs.is-small {
  font-size: 0.75rem;
}

.tabs.is-medium {
  font-size: 1.25rem;
}

.tabs.is-large {
  font-size: 1.5rem;
}

.column {
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 0.75rem;
}

.columns.is-mobile > .column.is-narrow {
  flex: none;
}

.columns.is-mobile > .column.is-full {
  flex: none;
  width: 100%;
}

.columns.is-mobile > .column.is-three-quarters {
  flex: none;
  width: 75%;
}

.columns.is-mobile > .column.is-two-thirds {
  flex: none;
  width: 66.6666%;
}

.columns.is-mobile > .column.is-half {
  flex: none;
  width: 50%;
}

.columns.is-mobile > .column.is-one-third {
  flex: none;
  width: 33.3333%;
}

.columns.is-mobile > .column.is-one-quarter {
  flex: none;
  width: 25%;
}

.columns.is-mobile > .column.is-one-fifth {
  flex: none;
  width: 20%;
}

.columns.is-mobile > .column.is-two-fifths {
  flex: none;
  width: 40%;
}

.columns.is-mobile > .column.is-three-fifths {
  flex: none;
  width: 60%;
}

.columns.is-mobile > .column.is-four-fifths {
  flex: none;
  width: 80%;
}

.columns.is-mobile > .column.is-offset-three-quarters {
  margin-left: 75%;
}

.columns.is-mobile > .column.is-offset-two-thirds {
  margin-left: 66.6666%;
}

.columns.is-mobile > .column.is-offset-half {
  margin-left: 50%;
}

.columns.is-mobile > .column.is-offset-one-third {
  margin-left: 33.3333%;
}

.columns.is-mobile > .column.is-offset-one-quarter {
  margin-left: 25%;
}

.columns.is-mobile > .column.is-offset-one-fifth {
  margin-left: 20%;
}

.columns.is-mobile > .column.is-offset-two-fifths {
  margin-left: 40%;
}

.columns.is-mobile > .column.is-offset-three-fifths {
  margin-left: 60%;
}

.columns.is-mobile > .column.is-offset-four-fifths {
  margin-left: 80%;
}

.columns.is-mobile > .column.is-0 {
  flex: none;
  width: 0%;
}

.columns.is-mobile > .column.is-offset-0 {
  margin-left: 0%;
}

.columns.is-mobile > .column.is-1 {
  flex: none;
  width: 8.33333%;
}

.columns.is-mobile > .column.is-offset-1 {
  margin-left: 8.33333%;
}

.columns.is-mobile > .column.is-2 {
  flex: none;
  width: 16.66667%;
}

.columns.is-mobile > .column.is-offset-2 {
  margin-left: 16.66667%;
}

.columns.is-mobile > .column.is-3 {
  flex: none;
  width: 25%;
}

.columns.is-mobile > .column.is-offset-3 {
  margin-left: 25%;
}

.columns.is-mobile > .column.is-4 {
  flex: none;
  width: 33.33333%;
}

.columns.is-mobile > .column.is-offset-4 {
  margin-left: 33.33333%;
}

.columns.is-mobile > .column.is-5 {
  flex: none;
  width: 41.66667%;
}

.columns.is-mobile > .column.is-offset-5 {
  margin-left: 41.66667%;
}

.columns.is-mobile > .column.is-6 {
  flex: none;
  width: 50%;
}

.columns.is-mobile > .column.is-offset-6 {
  margin-left: 50%;
}

.columns.is-mobile > .column.is-7 {
  flex: none;
  width: 58.33333%;
}

.columns.is-mobile > .column.is-offset-7 {
  margin-left: 58.33333%;
}

.columns.is-mobile > .column.is-8 {
  flex: none;
  width: 66.66667%;
}

.columns.is-mobile > .column.is-offset-8 {
  margin-left: 66.66667%;
}

.columns.is-mobile > .column.is-9 {
  flex: none;
  width: 75%;
}

.columns.is-mobile > .column.is-offset-9 {
  margin-left: 75%;
}

.columns.is-mobile > .column.is-10 {
  flex: none;
  width: 83.33333%;
}

.columns.is-mobile > .column.is-offset-10 {
  margin-left: 83.33333%;
}

.columns.is-mobile > .column.is-11 {
  flex: none;
  width: 91.66667%;
}

.columns.is-mobile > .column.is-offset-11 {
  margin-left: 91.66667%;
}

.columns.is-mobile > .column.is-12 {
  flex: none;
  width: 100%;
}

.columns.is-mobile > .column.is-offset-12 {
  margin-left: 100%;
}

@media screen and (max-width: 768px) {
  .column.is-narrow-mobile {
    flex: none;
  }
  .column.is-full-mobile {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-mobile {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-mobile {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-mobile {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-mobile {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-mobile {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-mobile {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-mobile {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-mobile {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-mobile {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-mobile {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-mobile {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-mobile {
    margin-left: 50%;
  }
  .column.is-offset-one-third-mobile {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-mobile {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-mobile {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-mobile {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-mobile {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-mobile {
    margin-left: 80%;
  }
  .column.is-0-mobile {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-mobile {
    margin-left: 0%;
  }
  .column.is-1-mobile {
    flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1-mobile {
    margin-left: 8.33333%;
  }
  .column.is-2-mobile {
    flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2-mobile {
    margin-left: 16.66667%;
  }
  .column.is-3-mobile {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-mobile {
    margin-left: 25%;
  }
  .column.is-4-mobile {
    flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4-mobile {
    margin-left: 33.33333%;
  }
  .column.is-5-mobile {
    flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5-mobile {
    margin-left: 41.66667%;
  }
  .column.is-6-mobile {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-mobile {
    margin-left: 50%;
  }
  .column.is-7-mobile {
    flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7-mobile {
    margin-left: 58.33333%;
  }
  .column.is-8-mobile {
    flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8-mobile {
    margin-left: 66.66667%;
  }
  .column.is-9-mobile {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-mobile {
    margin-left: 75%;
  }
  .column.is-10-mobile {
    flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10-mobile {
    margin-left: 83.33333%;
  }
  .column.is-11-mobile {
    flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11-mobile {
    margin-left: 91.66667%;
  }
  .column.is-12-mobile {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-mobile {
    margin-left: 100%;
  }
}

@media screen and (min-width: 769px), print {
  .column.is-narrow, .column.is-narrow-tablet {
    flex: none;
  }
  .column.is-full, .column.is-full-tablet {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters, .column.is-three-quarters-tablet {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds, .column.is-two-thirds-tablet {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half, .column.is-half-tablet {
    flex: none;
    width: 50%;
  }
  .column.is-one-third, .column.is-one-third-tablet {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter, .column.is-one-quarter-tablet {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth, .column.is-one-fifth-tablet {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths, .column.is-two-fifths-tablet {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths, .column.is-three-fifths-tablet {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths, .column.is-four-fifths-tablet {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters, .column.is-offset-three-quarters-tablet {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds, .column.is-offset-two-thirds-tablet {
    margin-left: 66.6666%;
  }
  .column.is-offset-half, .column.is-offset-half-tablet {
    margin-left: 50%;
  }
  .column.is-offset-one-third, .column.is-offset-one-third-tablet {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter, .column.is-offset-one-quarter-tablet {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth, .column.is-offset-one-fifth-tablet {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths, .column.is-offset-two-fifths-tablet {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths, .column.is-offset-three-fifths-tablet {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths, .column.is-offset-four-fifths-tablet {
    margin-left: 80%;
  }
  .column.is-0, .column.is-0-tablet {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0, .column.is-offset-0-tablet {
    margin-left: 0%;
  }
  .column.is-1, .column.is-1-tablet {
    flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1, .column.is-offset-1-tablet {
    margin-left: 8.33333%;
  }
  .column.is-2, .column.is-2-tablet {
    flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2, .column.is-offset-2-tablet {
    margin-left: 16.66667%;
  }
  .column.is-3, .column.is-3-tablet {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3, .column.is-offset-3-tablet {
    margin-left: 25%;
  }
  .column.is-4, .column.is-4-tablet {
    flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4, .column.is-offset-4-tablet {
    margin-left: 33.33333%;
  }
  .column.is-5, .column.is-5-tablet {
    flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5, .column.is-offset-5-tablet {
    margin-left: 41.66667%;
  }
  .column.is-6, .column.is-6-tablet {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6, .column.is-offset-6-tablet {
    margin-left: 50%;
  }
  .column.is-7, .column.is-7-tablet {
    flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7, .column.is-offset-7-tablet {
    margin-left: 58.33333%;
  }
  .column.is-8, .column.is-8-tablet {
    flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8, .column.is-offset-8-tablet {
    margin-left: 66.66667%;
  }
  .column.is-9, .column.is-9-tablet {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9, .column.is-offset-9-tablet {
    margin-left: 75%;
  }
  .column.is-10, .column.is-10-tablet {
    flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10, .column.is-offset-10-tablet {
    margin-left: 83.33333%;
  }
  .column.is-11, .column.is-11-tablet {
    flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11, .column.is-offset-11-tablet {
    margin-left: 91.66667%;
  }
  .column.is-12, .column.is-12-tablet {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12, .column.is-offset-12-tablet {
    margin-left: 100%;
  }
}

@media screen and (max-width: 1023px) {
  .column.is-narrow-touch {
    flex: none;
  }
  .column.is-full-touch {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-touch {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-touch {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-touch {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-touch {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-touch {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-touch {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-touch {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-touch {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-touch {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-touch {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-touch {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-touch {
    margin-left: 50%;
  }
  .column.is-offset-one-third-touch {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-touch {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-touch {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-touch {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-touch {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-touch {
    margin-left: 80%;
  }
  .column.is-0-touch {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-touch {
    margin-left: 0%;
  }
  .column.is-1-touch {
    flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1-touch {
    margin-left: 8.33333%;
  }
  .column.is-2-touch {
    flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2-touch {
    margin-left: 16.66667%;
  }
  .column.is-3-touch {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-touch {
    margin-left: 25%;
  }
  .column.is-4-touch {
    flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4-touch {
    margin-left: 33.33333%;
  }
  .column.is-5-touch {
    flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5-touch {
    margin-left: 41.66667%;
  }
  .column.is-6-touch {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-touch {
    margin-left: 50%;
  }
  .column.is-7-touch {
    flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7-touch {
    margin-left: 58.33333%;
  }
  .column.is-8-touch {
    flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8-touch {
    margin-left: 66.66667%;
  }
  .column.is-9-touch {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-touch {
    margin-left: 75%;
  }
  .column.is-10-touch {
    flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10-touch {
    margin-left: 83.33333%;
  }
  .column.is-11-touch {
    flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11-touch {
    margin-left: 91.66667%;
  }
  .column.is-12-touch {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-touch {
    margin-left: 100%;
  }
}

@media screen and (min-width: 1024px) {
  .column.is-narrow-desktop {
    flex: none;
  }
  .column.is-full-desktop {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-desktop {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-desktop {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-desktop {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-desktop {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-desktop {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-desktop {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-desktop {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-desktop {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-desktop {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-desktop {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-desktop {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-desktop {
    margin-left: 50%;
  }
  .column.is-offset-one-third-desktop {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-desktop {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-desktop {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-desktop {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-desktop {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-desktop {
    margin-left: 80%;
  }
  .column.is-0-desktop {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-desktop {
    margin-left: 0%;
  }
  .column.is-1-desktop {
    flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1-desktop {
    margin-left: 8.33333%;
  }
  .column.is-2-desktop {
    flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2-desktop {
    margin-left: 16.66667%;
  }
  .column.is-3-desktop {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-desktop {
    margin-left: 25%;
  }
  .column.is-4-desktop {
    flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4-desktop {
    margin-left: 33.33333%;
  }
  .column.is-5-desktop {
    flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5-desktop {
    margin-left: 41.66667%;
  }
  .column.is-6-desktop {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-desktop {
    margin-left: 50%;
  }
  .column.is-7-desktop {
    flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7-desktop {
    margin-left: 58.33333%;
  }
  .column.is-8-desktop {
    flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8-desktop {
    margin-left: 66.66667%;
  }
  .column.is-9-desktop {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-desktop {
    margin-left: 75%;
  }
  .column.is-10-desktop {
    flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10-desktop {
    margin-left: 83.33333%;
  }
  .column.is-11-desktop {
    flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11-desktop {
    margin-left: 91.66667%;
  }
  .column.is-12-desktop {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-desktop {
    margin-left: 100%;
  }
}

@media screen and (min-width: 1216px) {
  .column.is-narrow-widescreen {
    flex: none;
  }
  .column.is-full-widescreen {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-widescreen {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-widescreen {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-widescreen {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-widescreen {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-widescreen {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-widescreen {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-widescreen {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-widescreen {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-widescreen {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-widescreen {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-widescreen {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-widescreen {
    margin-left: 50%;
  }
  .column.is-offset-one-third-widescreen {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-widescreen {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-widescreen {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-widescreen {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-widescreen {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-widescreen {
    margin-left: 80%;
  }
  .column.is-0-widescreen {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-widescreen {
    margin-left: 0%;
  }
  .column.is-1-widescreen {
    flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1-widescreen {
    margin-left: 8.33333%;
  }
  .column.is-2-widescreen {
    flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2-widescreen {
    margin-left: 16.66667%;
  }
  .column.is-3-widescreen {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-widescreen {
    margin-left: 25%;
  }
  .column.is-4-widescreen {
    flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4-widescreen {
    margin-left: 33.33333%;
  }
  .column.is-5-widescreen {
    flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5-widescreen {
    margin-left: 41.66667%;
  }
  .column.is-6-widescreen {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-widescreen {
    margin-left: 50%;
  }
  .column.is-7-widescreen {
    flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7-widescreen {
    margin-left: 58.33333%;
  }
  .column.is-8-widescreen {
    flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8-widescreen {
    margin-left: 66.66667%;
  }
  .column.is-9-widescreen {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-widescreen {
    margin-left: 75%;
  }
  .column.is-10-widescreen {
    flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10-widescreen {
    margin-left: 83.33333%;
  }
  .column.is-11-widescreen {
    flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11-widescreen {
    margin-left: 91.66667%;
  }
  .column.is-12-widescreen {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-widescreen {
    margin-left: 100%;
  }
}

@media screen and (min-width: 1408px) {
  .column.is-narrow-fullhd {
    flex: none;
  }
  .column.is-full-fullhd {
    flex: none;
    width: 100%;
  }
  .column.is-three-quarters-fullhd {
    flex: none;
    width: 75%;
  }
  .column.is-two-thirds-fullhd {
    flex: none;
    width: 66.6666%;
  }
  .column.is-half-fullhd {
    flex: none;
    width: 50%;
  }
  .column.is-one-third-fullhd {
    flex: none;
    width: 33.3333%;
  }
  .column.is-one-quarter-fullhd {
    flex: none;
    width: 25%;
  }
  .column.is-one-fifth-fullhd {
    flex: none;
    width: 20%;
  }
  .column.is-two-fifths-fullhd {
    flex: none;
    width: 40%;
  }
  .column.is-three-fifths-fullhd {
    flex: none;
    width: 60%;
  }
  .column.is-four-fifths-fullhd {
    flex: none;
    width: 80%;
  }
  .column.is-offset-three-quarters-fullhd {
    margin-left: 75%;
  }
  .column.is-offset-two-thirds-fullhd {
    margin-left: 66.6666%;
  }
  .column.is-offset-half-fullhd {
    margin-left: 50%;
  }
  .column.is-offset-one-third-fullhd {
    margin-left: 33.3333%;
  }
  .column.is-offset-one-quarter-fullhd {
    margin-left: 25%;
  }
  .column.is-offset-one-fifth-fullhd {
    margin-left: 20%;
  }
  .column.is-offset-two-fifths-fullhd {
    margin-left: 40%;
  }
  .column.is-offset-three-fifths-fullhd {
    margin-left: 60%;
  }
  .column.is-offset-four-fifths-fullhd {
    margin-left: 80%;
  }
  .column.is-0-fullhd {
    flex: none;
    width: 0%;
  }
  .column.is-offset-0-fullhd {
    margin-left: 0%;
  }
  .column.is-1-fullhd {
    flex: none;
    width: 8.33333%;
  }
  .column.is-offset-1-fullhd {
    margin-left: 8.33333%;
  }
  .column.is-2-fullhd {
    flex: none;
    width: 16.66667%;
  }
  .column.is-offset-2-fullhd {
    margin-left: 16.66667%;
  }
  .column.is-3-fullhd {
    flex: none;
    width: 25%;
  }
  .column.is-offset-3-fullhd {
    margin-left: 25%;
  }
  .column.is-4-fullhd {
    flex: none;
    width: 33.33333%;
  }
  .column.is-offset-4-fullhd {
    margin-left: 33.33333%;
  }
  .column.is-5-fullhd {
    flex: none;
    width: 41.66667%;
  }
  .column.is-offset-5-fullhd {
    margin-left: 41.66667%;
  }
  .column.is-6-fullhd {
    flex: none;
    width: 50%;
  }
  .column.is-offset-6-fullhd {
    margin-left: 50%;
  }
  .column.is-7-fullhd {
    flex: none;
    width: 58.33333%;
  }
  .column.is-offset-7-fullhd {
    margin-left: 58.33333%;
  }
  .column.is-8-fullhd {
    flex: none;
    width: 66.66667%;
  }
  .column.is-offset-8-fullhd {
    margin-left: 66.66667%;
  }
  .column.is-9-fullhd {
    flex: none;
    width: 75%;
  }
  .column.is-offset-9-fullhd {
    margin-left: 75%;
  }
  .column.is-10-fullhd {
    flex: none;
    width: 83.33333%;
  }
  .column.is-offset-10-fullhd {
    margin-left: 83.33333%;
  }
  .column.is-11-fullhd {
    flex: none;
    width: 91.66667%;
  }
  .column.is-offset-11-fullhd {
    margin-left: 91.66667%;
  }
  .column.is-12-fullhd {
    flex: none;
    width: 100%;
  }
  .column.is-offset-12-fullhd {
    margin-left: 100%;
  }
}

.columns {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}

.columns:last-child {
  margin-bottom: -0.75rem;
}

.columns:not(:last-child) {
  margin-bottom: calc(1.5rem - 0.75rem);
}

.columns.is-centered {
  justify-content: center;
}

.columns.is-gapless {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
}

.columns.is-gapless > .column {
  margin: 0;
  padding: 0 !important;
}

.columns.is-gapless:not(:last-child) {
  margin-bottom: 1.5rem;
}

.columns.is-gapless:last-child {
  margin-bottom: 0;
}

.columns.is-mobile {
  display: flex;
}

.columns.is-multiline {
  flex-wrap: wrap;
}

.columns.is-vcentered {
  align-items: center;
}

@media screen and (min-width: 769px), print {
  .columns:not(.is-desktop) {
    display: flex;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-desktop {
    display: flex;
  }
}

.columns.is-variable {
  --columnGap: 0.75rem;
  margin-left: calc(-1 * var(--columnGap));
  margin-right: calc(-1 * var(--columnGap));
}

.columns.is-variable .column {
  padding-left: var(--columnGap);
  padding-right: var(--columnGap);
}

.columns.is-variable.is-0 {
  --columnGap: 0rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-0-mobile {
    --columnGap: 0rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-0-tablet {
    --columnGap: 0rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-0-tablet-only {
    --columnGap: 0rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-0-touch {
    --columnGap: 0rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-0-desktop {
    --columnGap: 0rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-0-desktop-only {
    --columnGap: 0rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-0-widescreen {
    --columnGap: 0rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-0-widescreen-only {
    --columnGap: 0rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-0-fullhd {
    --columnGap: 0rem;
  }
}

.columns.is-variable.is-1 {
  --columnGap: 0.25rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-1-mobile {
    --columnGap: 0.25rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-1-tablet {
    --columnGap: 0.25rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-1-tablet-only {
    --columnGap: 0.25rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-1-touch {
    --columnGap: 0.25rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-1-desktop {
    --columnGap: 0.25rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-1-desktop-only {
    --columnGap: 0.25rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-1-widescreen {
    --columnGap: 0.25rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-1-widescreen-only {
    --columnGap: 0.25rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-1-fullhd {
    --columnGap: 0.25rem;
  }
}

.columns.is-variable.is-2 {
  --columnGap: 0.5rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-2-mobile {
    --columnGap: 0.5rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-2-tablet {
    --columnGap: 0.5rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-2-tablet-only {
    --columnGap: 0.5rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-2-touch {
    --columnGap: 0.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-2-desktop {
    --columnGap: 0.5rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-2-desktop-only {
    --columnGap: 0.5rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-2-widescreen {
    --columnGap: 0.5rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-2-widescreen-only {
    --columnGap: 0.5rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-2-fullhd {
    --columnGap: 0.5rem;
  }
}

.columns.is-variable.is-3 {
  --columnGap: 0.75rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-3-mobile {
    --columnGap: 0.75rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-3-tablet {
    --columnGap: 0.75rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-3-tablet-only {
    --columnGap: 0.75rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-3-touch {
    --columnGap: 0.75rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-3-desktop {
    --columnGap: 0.75rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-3-desktop-only {
    --columnGap: 0.75rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-3-widescreen {
    --columnGap: 0.75rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-3-widescreen-only {
    --columnGap: 0.75rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-3-fullhd {
    --columnGap: 0.75rem;
  }
}

.columns.is-variable.is-4 {
  --columnGap: 1rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-4-mobile {
    --columnGap: 1rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-4-tablet {
    --columnGap: 1rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-4-tablet-only {
    --columnGap: 1rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-4-touch {
    --columnGap: 1rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-4-desktop {
    --columnGap: 1rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-4-desktop-only {
    --columnGap: 1rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-4-widescreen {
    --columnGap: 1rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-4-widescreen-only {
    --columnGap: 1rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-4-fullhd {
    --columnGap: 1rem;
  }
}

.columns.is-variable.is-5 {
  --columnGap: 1.25rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-5-mobile {
    --columnGap: 1.25rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-5-tablet {
    --columnGap: 1.25rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-5-tablet-only {
    --columnGap: 1.25rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-5-touch {
    --columnGap: 1.25rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-5-desktop {
    --columnGap: 1.25rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-5-desktop-only {
    --columnGap: 1.25rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-5-widescreen {
    --columnGap: 1.25rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-5-widescreen-only {
    --columnGap: 1.25rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-5-fullhd {
    --columnGap: 1.25rem;
  }
}

.columns.is-variable.is-6 {
  --columnGap: 1.5rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-6-mobile {
    --columnGap: 1.5rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-6-tablet {
    --columnGap: 1.5rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-6-tablet-only {
    --columnGap: 1.5rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-6-touch {
    --columnGap: 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-6-desktop {
    --columnGap: 1.5rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-6-desktop-only {
    --columnGap: 1.5rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-6-widescreen {
    --columnGap: 1.5rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-6-widescreen-only {
    --columnGap: 1.5rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-6-fullhd {
    --columnGap: 1.5rem;
  }
}

.columns.is-variable.is-7 {
  --columnGap: 1.75rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-7-mobile {
    --columnGap: 1.75rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-7-tablet {
    --columnGap: 1.75rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-7-tablet-only {
    --columnGap: 1.75rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-7-touch {
    --columnGap: 1.75rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-7-desktop {
    --columnGap: 1.75rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-7-desktop-only {
    --columnGap: 1.75rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-7-widescreen {
    --columnGap: 1.75rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-7-widescreen-only {
    --columnGap: 1.75rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-7-fullhd {
    --columnGap: 1.75rem;
  }
}

.columns.is-variable.is-8 {
  --columnGap: 2rem;
}

@media screen and (max-width: 768px) {
  .columns.is-variable.is-8-mobile {
    --columnGap: 2rem;
  }
}

@media screen and (min-width: 769px), print {
  .columns.is-variable.is-8-tablet {
    --columnGap: 2rem;
  }
}

@media screen and (min-width: 769px) and (max-width: 1023px) {
  .columns.is-variable.is-8-tablet-only {
    --columnGap: 2rem;
  }
}

@media screen and (max-width: 1023px) {
  .columns.is-variable.is-8-touch {
    --columnGap: 2rem;
  }
}

@media screen and (min-width: 1024px) {
  .columns.is-variable.is-8-desktop {
    --columnGap: 2rem;
  }
}

@media screen and (min-width: 1024px) and (max-width: 1215px) {
  .columns.is-variable.is-8-desktop-only {
    --columnGap: 2rem;
  }
}

@media screen and (min-width: 1216px) {
  .columns.is-variable.is-8-widescreen {
    --columnGap: 2rem;
  }
}

@media screen and (min-width: 1216px) and (max-width: 1407px) {
  .columns.is-variable.is-8-widescreen-only {
    --columnGap: 2rem;
  }
}

@media screen and (min-width: 1408px) {
  .columns.is-variable.is-8-fullhd {
    --columnGap: 2rem;
  }
}

.tile {
  align-items: stretch;
  display: block;
  flex-basis: 0;
  flex-grow: 1;
  flex-shrink: 1;
  min-height: -webkit-min-content;
  min-height: -moz-min-content;
  min-height: min-content;
}

.tile.is-ancestor {
  margin-left: -0.75rem;
  margin-right: -0.75rem;
  margin-top: -0.75rem;
}

.tile.is-ancestor:last-child {
  margin-bottom: -0.75rem;
}

.tile.is-ancestor:not(:last-child) {
  margin-bottom: 0.75rem;
}

.tile.is-child {
  margin: 0 !important;
}

.tile.is-parent {
  padding: 0.75rem;
}

.tile.is-vertical {
  flex-direction: column;
}

.tile.is-vertical > .tile.is-child:not(:last-child) {
  margin-bottom: 1.5rem !important;
}

@media screen and (min-width: 769px), print {
  .tile:not(.is-child) {
    display: flex;
  }
  .tile.is-1 {
    flex: none;
    width: 8.33333%;
  }
  .tile.is-2 {
    flex: none;
    width: 16.66667%;
  }
  .tile.is-3 {
    flex: none;
    width: 25%;
  }
  .tile.is-4 {
    flex: none;
    width: 33.33333%;
  }
  .tile.is-5 {
    flex: none;
    width: 41.66667%;
  }
  .tile.is-6 {
    flex: none;
    width: 50%;
  }
  .tile.is-7 {
    flex: none;
    width: 58.33333%;
  }
  .tile.is-8 {
    flex: none;
    width: 66.66667%;
  }
  .tile.is-9 {
    flex: none;
    width: 75%;
  }
  .tile.is-10 {
    flex: none;
    width: 83.33333%;
  }
  .tile.is-11 {
    flex: none;
    width: 91.66667%;
  }
  .tile.is-12 {
    flex: none;
    width: 100%;
  }
}

.hero {
  align-items: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hero .navbar {
  background: none;
}

.hero .tabs ul {
  border-bottom: none;
}

.hero.is-white {
  background-color: white;
  color: #0a0a0a;
}

.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-white strong {
  color: inherit;
}

.hero.is-white .title {
  color: #0a0a0a;
}

.hero.is-white .subtitle {
  color: rgba(10, 10, 10, 0.9);
}

.hero.is-white .subtitle a:not(.button),
.hero.is-white .subtitle strong {
  color: #0a0a0a;
}

@media screen and (max-width: 1023px) {
  .hero.is-white .navbar-menu {
    background-color: white;
  }
}

.hero.is-white .navbar-item,
.hero.is-white .navbar-link {
  color: rgba(10, 10, 10, 0.7);
}

.hero.is-white a.navbar-item:hover, .hero.is-white a.navbar-item.is-active,
.hero.is-white .navbar-link:hover,
.hero.is-white .navbar-link.is-active {
  background-color: #f2f2f2;
  color: #0a0a0a;
}

.hero.is-white .tabs a {
  color: #0a0a0a;
  opacity: 0.9;
}

.hero.is-white .tabs a:hover {
  opacity: 1;
}

.hero.is-white .tabs li.is-active a {
  opacity: 1;
}

.hero.is-white .tabs.is-boxed a, .hero.is-white .tabs.is-toggle a {
  color: #0a0a0a;
}

.hero.is-white .tabs.is-boxed a:hover, .hero.is-white .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-white .tabs.is-boxed li.is-active a, .hero.is-white .tabs.is-boxed li.is-active a:hover, .hero.is-white .tabs.is-toggle li.is-active a, .hero.is-white .tabs.is-toggle li.is-active a:hover {
  background-color: #0a0a0a;
  border-color: #0a0a0a;
  color: white;
}

.hero.is-white.is-bold {
  background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-white.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #e6e6e6 0%, white 71%, white 100%);
  }
}

.hero.is-black {
  background-color: #0a0a0a;
  color: white;
}

.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-black strong {
  color: inherit;
}

.hero.is-black .title {
  color: white;
}

.hero.is-black .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-black .subtitle a:not(.button),
.hero.is-black .subtitle strong {
  color: white;
}

@media screen and (max-width: 1023px) {
  .hero.is-black .navbar-menu {
    background-color: #0a0a0a;
  }
}

.hero.is-black .navbar-item,
.hero.is-black .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-black a.navbar-item:hover, .hero.is-black a.navbar-item.is-active,
.hero.is-black .navbar-link:hover,
.hero.is-black .navbar-link.is-active {
  background-color: black;
  color: white;
}

.hero.is-black .tabs a {
  color: white;
  opacity: 0.9;
}

.hero.is-black .tabs a:hover {
  opacity: 1;
}

.hero.is-black .tabs li.is-active a {
  opacity: 1;
}

.hero.is-black .tabs.is-boxed a, .hero.is-black .tabs.is-toggle a {
  color: white;
}

.hero.is-black .tabs.is-boxed a:hover, .hero.is-black .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-black .tabs.is-boxed li.is-active a, .hero.is-black .tabs.is-boxed li.is-active a:hover, .hero.is-black .tabs.is-toggle li.is-active a, .hero.is-black .tabs.is-toggle li.is-active a:hover {
  background-color: white;
  border-color: white;
  color: #0a0a0a;
}

.hero.is-black.is-bold {
  background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-black.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, black 0%, #0a0a0a 71%, #181616 100%);
  }
}

.hero.is-light {
  background-color: whitesmoke;
  color: #363636;
}

.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-light strong {
  color: inherit;
}

.hero.is-light .title {
  color: #363636;
}

.hero.is-light .subtitle {
  color: rgba(54, 54, 54, 0.9);
}

.hero.is-light .subtitle a:not(.button),
.hero.is-light .subtitle strong {
  color: #363636;
}

@media screen and (max-width: 1023px) {
  .hero.is-light .navbar-menu {
    background-color: whitesmoke;
  }
}

.hero.is-light .navbar-item,
.hero.is-light .navbar-link {
  color: rgba(54, 54, 54, 0.7);
}

.hero.is-light a.navbar-item:hover, .hero.is-light a.navbar-item.is-active,
.hero.is-light .navbar-link:hover,
.hero.is-light .navbar-link.is-active {
  background-color: #e8e8e8;
  color: #363636;
}

.hero.is-light .tabs a {
  color: #363636;
  opacity: 0.9;
}

.hero.is-light .tabs a:hover {
  opacity: 1;
}

.hero.is-light .tabs li.is-active a {
  opacity: 1;
}

.hero.is-light .tabs.is-boxed a, .hero.is-light .tabs.is-toggle a {
  color: #363636;
}

.hero.is-light .tabs.is-boxed a:hover, .hero.is-light .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-light .tabs.is-boxed li.is-active a, .hero.is-light .tabs.is-boxed li.is-active a:hover, .hero.is-light .tabs.is-toggle li.is-active a, .hero.is-light .tabs.is-toggle li.is-active a:hover {
  background-color: #363636;
  border-color: #363636;
  color: whitesmoke;
}

.hero.is-light.is-bold {
  background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-light.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #dfd8d9 0%, whitesmoke 71%, white 100%);
  }
}

.hero.is-dark {
  background-color: #363636;
  color: whitesmoke;
}

.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-dark strong {
  color: inherit;
}

.hero.is-dark .title {
  color: whitesmoke;
}

.hero.is-dark .subtitle {
  color: rgba(245, 245, 245, 0.9);
}

.hero.is-dark .subtitle a:not(.button),
.hero.is-dark .subtitle strong {
  color: whitesmoke;
}

@media screen and (max-width: 1023px) {
  .hero.is-dark .navbar-menu {
    background-color: #363636;
  }
}

.hero.is-dark .navbar-item,
.hero.is-dark .navbar-link {
  color: rgba(245, 245, 245, 0.7);
}

.hero.is-dark a.navbar-item:hover, .hero.is-dark a.navbar-item.is-active,
.hero.is-dark .navbar-link:hover,
.hero.is-dark .navbar-link.is-active {
  background-color: #292929;
  color: whitesmoke;
}

.hero.is-dark .tabs a {
  color: whitesmoke;
  opacity: 0.9;
}

.hero.is-dark .tabs a:hover {
  opacity: 1;
}

.hero.is-dark .tabs li.is-active a {
  opacity: 1;
}

.hero.is-dark .tabs.is-boxed a, .hero.is-dark .tabs.is-toggle a {
  color: whitesmoke;
}

.hero.is-dark .tabs.is-boxed a:hover, .hero.is-dark .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-dark .tabs.is-boxed li.is-active a, .hero.is-dark .tabs.is-boxed li.is-active a:hover, .hero.is-dark .tabs.is-toggle li.is-active a, .hero.is-dark .tabs.is-toggle li.is-active a:hover {
  background-color: whitesmoke;
  border-color: whitesmoke;
  color: #363636;
}

.hero.is-dark.is-bold {
  background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-dark.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #1f191a 0%, #363636 71%, #46403f 100%);
  }
}

.hero.is-primary {
  background-color: #00d1b2;
  color: #fff;
}

.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-primary strong {
  color: inherit;
}

.hero.is-primary .title {
  color: #fff;
}

.hero.is-primary .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-primary .subtitle a:not(.button),
.hero.is-primary .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-primary .navbar-menu {
    background-color: #00d1b2;
  }
}

.hero.is-primary .navbar-item,
.hero.is-primary .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-primary a.navbar-item:hover, .hero.is-primary a.navbar-item.is-active,
.hero.is-primary .navbar-link:hover,
.hero.is-primary .navbar-link.is-active {
  background-color: #00b89c;
  color: #fff;
}

.hero.is-primary .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-primary .tabs a:hover {
  opacity: 1;
}

.hero.is-primary .tabs li.is-active a {
  opacity: 1;
}

.hero.is-primary .tabs.is-boxed a, .hero.is-primary .tabs.is-toggle a {
  color: #fff;
}

.hero.is-primary .tabs.is-boxed a:hover, .hero.is-primary .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-primary .tabs.is-boxed li.is-active a, .hero.is-primary .tabs.is-boxed li.is-active a:hover, .hero.is-primary .tabs.is-toggle li.is-active a, .hero.is-primary .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #00d1b2;
}

.hero.is-primary.is-bold {
  background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-primary.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #009e6c 0%, #00d1b2 71%, #00e7eb 100%);
  }
}

.hero.is-link {
  background-color: #3273dc;
  color: #fff;
}

.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-link strong {
  color: inherit;
}

.hero.is-link .title {
  color: #fff;
}

.hero.is-link .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-link .subtitle a:not(.button),
.hero.is-link .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-link .navbar-menu {
    background-color: #3273dc;
  }
}

.hero.is-link .navbar-item,
.hero.is-link .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-link a.navbar-item:hover, .hero.is-link a.navbar-item.is-active,
.hero.is-link .navbar-link:hover,
.hero.is-link .navbar-link.is-active {
  background-color: #2366d1;
  color: #fff;
}

.hero.is-link .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-link .tabs a:hover {
  opacity: 1;
}

.hero.is-link .tabs li.is-active a {
  opacity: 1;
}

.hero.is-link .tabs.is-boxed a, .hero.is-link .tabs.is-toggle a {
  color: #fff;
}

.hero.is-link .tabs.is-boxed a:hover, .hero.is-link .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-link .tabs.is-boxed li.is-active a, .hero.is-link .tabs.is-boxed li.is-active a:hover, .hero.is-link .tabs.is-toggle li.is-active a, .hero.is-link .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #3273dc;
}

.hero.is-link.is-bold {
  background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-link.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #1577c6 0%, #3273dc 71%, #4366e5 100%);
  }
}

.hero.is-info {
  background-color: #209cee;
  color: #fff;
}

.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-info strong {
  color: inherit;
}

.hero.is-info .title {
  color: #fff;
}

.hero.is-info .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-info .subtitle a:not(.button),
.hero.is-info .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-info .navbar-menu {
    background-color: #209cee;
  }
}

.hero.is-info .navbar-item,
.hero.is-info .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-info a.navbar-item:hover, .hero.is-info a.navbar-item.is-active,
.hero.is-info .navbar-link:hover,
.hero.is-info .navbar-link.is-active {
  background-color: #118fe4;
  color: #fff;
}

.hero.is-info .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-info .tabs a:hover {
  opacity: 1;
}

.hero.is-info .tabs li.is-active a {
  opacity: 1;
}

.hero.is-info .tabs.is-boxed a, .hero.is-info .tabs.is-toggle a {
  color: #fff;
}

.hero.is-info .tabs.is-boxed a:hover, .hero.is-info .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-info .tabs.is-boxed li.is-active a, .hero.is-info .tabs.is-boxed li.is-active a:hover, .hero.is-info .tabs.is-toggle li.is-active a, .hero.is-info .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #209cee;
}

.hero.is-info.is-bold {
  background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-info.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #04a6d7 0%, #209cee 71%, #3287f5 100%);
  }
}

.hero.is-success {
  background-color: #23d160;
  color: #fff;
}

.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-success strong {
  color: inherit;
}

.hero.is-success .title {
  color: #fff;
}

.hero.is-success .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-success .subtitle a:not(.button),
.hero.is-success .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-success .navbar-menu {
    background-color: #23d160;
  }
}

.hero.is-success .navbar-item,
.hero.is-success .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-success a.navbar-item:hover, .hero.is-success a.navbar-item.is-active,
.hero.is-success .navbar-link:hover,
.hero.is-success .navbar-link.is-active {
  background-color: #20bc56;
  color: #fff;
}

.hero.is-success .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-success .tabs a:hover {
  opacity: 1;
}

.hero.is-success .tabs li.is-active a {
  opacity: 1;
}

.hero.is-success .tabs.is-boxed a, .hero.is-success .tabs.is-toggle a {
  color: #fff;
}

.hero.is-success .tabs.is-boxed a:hover, .hero.is-success .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-success .tabs.is-boxed li.is-active a, .hero.is-success .tabs.is-boxed li.is-active a:hover, .hero.is-success .tabs.is-toggle li.is-active a, .hero.is-success .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #23d160;
}

.hero.is-success.is-bold {
  background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-success.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #12af2f 0%, #23d160 71%, #2ce28a 100%);
  }
}

.hero.is-warning {
  background-color: #ffdd57;
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-warning strong {
  color: inherit;
}

.hero.is-warning .title {
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning .subtitle {
  color: rgba(0, 0, 0, 0.9);
}

.hero.is-warning .subtitle a:not(.button),
.hero.is-warning .subtitle strong {
  color: rgba(0, 0, 0, 0.7);
}

@media screen and (max-width: 1023px) {
  .hero.is-warning .navbar-menu {
    background-color: #ffdd57;
  }
}

.hero.is-warning .navbar-item,
.hero.is-warning .navbar-link {
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning a.navbar-item:hover, .hero.is-warning a.navbar-item.is-active,
.hero.is-warning .navbar-link:hover,
.hero.is-warning .navbar-link.is-active {
  background-color: #ffd83d;
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning .tabs a {
  color: rgba(0, 0, 0, 0.7);
  opacity: 0.9;
}

.hero.is-warning .tabs a:hover {
  opacity: 1;
}

.hero.is-warning .tabs li.is-active a {
  opacity: 1;
}

.hero.is-warning .tabs.is-boxed a, .hero.is-warning .tabs.is-toggle a {
  color: rgba(0, 0, 0, 0.7);
}

.hero.is-warning .tabs.is-boxed a:hover, .hero.is-warning .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-warning .tabs.is-boxed li.is-active a, .hero.is-warning .tabs.is-boxed li.is-active a:hover, .hero.is-warning .tabs.is-toggle li.is-active a, .hero.is-warning .tabs.is-toggle li.is-active a:hover {
  background-color: rgba(0, 0, 0, 0.7);
  border-color: rgba(0, 0, 0, 0.7);
  color: #ffdd57;
}

.hero.is-warning.is-bold {
  background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-warning.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #ffaf24 0%, #ffdd57 71%, #fffa70 100%);
  }
}

.hero.is-danger {
  background-color: #ff3860;
  color: #fff;
}

.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),
.hero.is-danger strong {
  color: inherit;
}

.hero.is-danger .title {
  color: #fff;
}

.hero.is-danger .subtitle {
  color: rgba(255, 255, 255, 0.9);
}

.hero.is-danger .subtitle a:not(.button),
.hero.is-danger .subtitle strong {
  color: #fff;
}

@media screen and (max-width: 1023px) {
  .hero.is-danger .navbar-menu {
    background-color: #ff3860;
  }
}

.hero.is-danger .navbar-item,
.hero.is-danger .navbar-link {
  color: rgba(255, 255, 255, 0.7);
}

.hero.is-danger a.navbar-item:hover, .hero.is-danger a.navbar-item.is-active,
.hero.is-danger .navbar-link:hover,
.hero.is-danger .navbar-link.is-active {
  background-color: #ff1f4b;
  color: #fff;
}

.hero.is-danger .tabs a {
  color: #fff;
  opacity: 0.9;
}

.hero.is-danger .tabs a:hover {
  opacity: 1;
}

.hero.is-danger .tabs li.is-active a {
  opacity: 1;
}

.hero.is-danger .tabs.is-boxed a, .hero.is-danger .tabs.is-toggle a {
  color: #fff;
}

.hero.is-danger .tabs.is-boxed a:hover, .hero.is-danger .tabs.is-toggle a:hover {
  background-color: rgba(10, 10, 10, 0.1);
}

.hero.is-danger .tabs.is-boxed li.is-active a, .hero.is-danger .tabs.is-boxed li.is-active a:hover, .hero.is-danger .tabs.is-toggle li.is-active a, .hero.is-danger .tabs.is-toggle li.is-active a:hover {
  background-color: #fff;
  border-color: #fff;
  color: #ff3860;
}

.hero.is-danger.is-bold {
  background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);
}

@media screen and (max-width: 768px) {
  .hero.is-danger.is-bold .navbar-menu {
    background-image: linear-gradient(141deg, #ff0561 0%, #ff3860 71%, #ff5257 100%);
  }
}

.hero.is-small .hero-body {
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
}

@media screen and (min-width: 769px), print {
  .hero.is-medium .hero-body {
    padding-bottom: 9rem;
    padding-top: 9rem;
  }
}

@media screen and (min-width: 769px), print {
  .hero.is-large .hero-body {
    padding-bottom: 18rem;
    padding-top: 18rem;
  }
}

.hero.is-halfheight .hero-body, .hero.is-fullheight .hero-body, .hero.is-fullheight-with-navbar .hero-body {
  align-items: center;
  display: flex;
}

.hero.is-halfheight .hero-body > .container, .hero.is-fullheight .hero-body > .container, .hero.is-fullheight-with-navbar .hero-body > .container {
  flex-grow: 1;
  flex-shrink: 1;
}

.hero.is-halfheight {
  min-height: 50vh;
}

.hero.is-fullheight {
  min-height: 100vh;
}

.hero-video {
  overflow: hidden;
}

.hero-video video {
  left: 50%;
  min-height: 100%;
  min-width: 100%;
  position: absolute;
  top: 50%;
  -webkit-transform: translate3d(-50%, -50%, 0);
          transform: translate3d(-50%, -50%, 0);
}

.hero-video.is-transparent {
  opacity: 0.3;
}

@media screen and (max-width: 768px) {
  .hero-video {
    display: none;
  }
}

.hero-buttons {
  margin-top: 1.5rem;
}

@media screen and (max-width: 768px) {
  .hero-buttons .button {
    display: flex;
  }
  .hero-buttons .button:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}

@media screen and (min-width: 769px), print {
  .hero-buttons {
    display: flex;
    justify-content: center;
  }
  .hero-buttons .button:not(:last-child) {
    margin-right: 1.5rem;
  }
}

.hero-head,
.hero-foot {
  flex-grow: 0;
  flex-shrink: 0;
}

.hero-body {
  flex-grow: 1;
  flex-shrink: 0;
  padding: 3rem 1.5rem;
}

.section {
  padding: 3rem 1.5rem;
}

@media screen and (min-width: 1024px) {
  .section.is-medium {
    padding: 9rem 1.5rem;
  }
  .section.is-large {
    padding: 18rem 1.5rem;
  }
}

.footer {
  background-color: #fafafa;
  padding: 3rem 1.5rem 6rem;
}`,de=se`
@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}

.steps:not(:last-child) {
  margin-bottom: 1.5rem;
}

.steps .steps-segment {
  position: relative;
}

.steps .steps-segment:not(:last-child):after {
  content: " ";
  display: block;
  position: absolute;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal) .steps-segment {
    display: block;
  }
  .steps:not(.is-horizontal) .steps-segment:not(:last-child) {
    min-height: 4em;
  }
  .steps:not(.is-horizontal).is-short .steps-segment {
    flex-grow: 0;
  }
  .steps:not(.is-horizontal).is-short.is-centered {
    justify-content: center;
  }
  .steps:not(.is-horizontal).is-short.is-bottom {
    justify-content: flex-end;
  }
  .steps:not(.is-horizontal):not(.is-short) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .steps:not(.is-horizontal):not(.is-short) .steps-segment:not(:last-child) {
    flex-grow: 1;
  }
}

.steps.is-vertical .steps-segment {
  display: block;
}

.steps.is-vertical .steps-segment:not(:last-child) {
  min-height: 4em;
}

.steps.is-vertical.is-short .steps-segment {
  flex-grow: 0;
}

.steps.is-vertical.is-short.is-centered {
  justify-content: center;
}

.steps.is-vertical.is-short.is-bottom {
  justify-content: flex-end;
}

.steps.is-vertical:not(.is-short) {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.steps.is-vertical:not(.is-short) .steps-segment:not(:last-child) {
  flex-grow: 1;
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical) {
    display: flex;
  }
  .steps:not(.is-vertical) .steps-segment:not(:last-child) {
    flex-basis: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
  .steps:not(.is-vertical).is-narrow .steps-segment {
    flex-grow: 0;
  }
  .steps:not(.is-vertical).is-narrow .steps-segment:not(:last-child) {
    min-width: 10em;
  }
  .steps:not(.is-vertical).is-narrow.is-centered {
    justify-content: center;
  }
  .steps:not(.is-vertical).is-narrow.is-right {
    justify-content: flex-end;
  }
  .steps:not(.is-vertical).has-content-centered {
    text-align: center;
  }
  .steps:not(.is-vertical).is-balanced .steps-segment:last-child, .steps:not(.is-vertical).has-content-centered .steps-segment:last-child {
    flex-basis: 1rem;
    flex-grow: 1;
    flex-shrink: 1;
  }
  .steps:not(.is-vertical).is-narrow.has-content-centered .steps-segment:last-child {
    flex-grow: 0;
    min-width: 10em;
  }
  .steps:not(.is-vertical) .steps-content.is-divider-content {
    text-align: center;
  }
}

.steps.is-horizontal {
  display: flex;
}

.steps.is-horizontal .steps-segment:not(:last-child) {
  flex-basis: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
}

.steps.is-horizontal.is-narrow .steps-segment {
  flex-grow: 0;
}

.steps.is-horizontal.is-narrow .steps-segment:not(:last-child) {
  min-width: 10em;
}

.steps.is-horizontal.is-narrow.is-centered {
  justify-content: center;
}

.steps.is-horizontal.is-narrow.is-right {
  justify-content: flex-end;
}

.steps.is-horizontal.has-content-centered {
  text-align: center;
}

.steps.is-horizontal.is-balanced .steps-segment:last-child, .steps.is-horizontal.has-content-centered .steps-segment:last-child {
  flex-basis: 1rem;
  flex-grow: 1;
  flex-shrink: 1;
}

.steps.is-horizontal.is-narrow.has-content-centered .steps-segment:last-child {
  flex-grow: 0;
  min-width: 10em;
}

.steps.is-horizontal .steps-content.is-divider-content {
  text-align: center;
}

.steps .steps-marker {
  align-items: center;
  display: flex;
  border-radius: 50%;
  font-weight: 700;
  justify-content: center;
  position: relative;
  z-index: 5;
}

.steps {
  font-size: 1rem;
}

.steps .steps-marker {
  height: 2rem;
  width: 2rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1rem - (0.2em));
    top: 1.76rem;
    width: 0.4em;
  }
  .steps:not(.is-horizontal) .steps-content {
    margin-left: calc(1rem + .5em);
    margin-top: -2rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1rem - .5em);
  }
  .steps:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 2.3rem;
    bottom: 0.3rem;
  }
}

.steps.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1rem - (0.2em));
  top: 1.76rem;
  width: 0.4em;
}

.steps.is-vertical .steps-content {
  margin-left: calc(1rem + .5em);
  margin-top: -2rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1rem - .5em);
}

.steps.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 2.3rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 1.76rem;
    right: -0.24rem;
    top: calc(1rem - (0.2em));
  }
  .steps:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1rem - (0.2em));
    top: auto;
  }
  .steps:not(.is-vertical) .extra-data {
    left: calc(50% + 1.3rem);
    right: calc(-50% + 1.3rem);
    bottom: 100%;
    position: absolute;
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1rem - (0.2em));
  }
  .steps:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps:not(.is-vertical) .steps-content {
    margin-left: 1rem;
  }
  .steps:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1rem;
  }
  .steps:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1rem);
  }
  .steps:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 2rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 2rem;
    padding-bottom: .2em;
  }
  .steps:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 2.3rem;
    right: 0.3rem;
  }
  .steps:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.3rem);
    right: calc(-50% + 1.3rem);
  }
}

.steps.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 1.76rem;
  right: -0.24rem;
  top: calc(1rem - (0.2em));
}

.steps.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1rem - (0.2em));
  top: auto;
}

.steps.is-horizontal .extra-data {
  left: calc(50% + 1.3rem);
  right: calc(-50% + 1.3rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1rem - (0.2em));
}

.steps.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-horizontal .steps-content {
  margin-left: 1rem;
}

.steps.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1rem;
}

.steps.is-horizontal .steps-content.is-divider-content {
  margin-right: -1rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1rem);
}

.steps.is-horizontal.has-content-centered .steps-content {
  margin-top: 2rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 2rem;
  padding-bottom: .2em;
}

.steps.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 2.3rem;
  right: 0.3rem;
}

.steps.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.3rem);
  right: calc(-50% + 1.3rem);
}

.steps.is-small {
  font-size: 0.75rem;
}

.steps.is-small .steps-marker {
  height: 1.5rem;
  width: 1.5rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-small:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-small:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(0.75rem - (0.2em));
    top: 1.26rem;
    width: 0.4em;
  }
  .steps.is-small:not(.is-horizontal) .steps-content {
    margin-left: calc(0.75rem + .5em);
    margin-top: -1.5rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-small:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-small:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(0.75rem - .5em);
  }
  .steps.is-small:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 1.8rem;
    bottom: 0.3rem;
  }
}

.steps.is-small.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-small.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(0.75rem - (0.2em));
  top: 1.26rem;
  width: 0.4em;
}

.steps.is-small.is-vertical .steps-content {
  margin-left: calc(0.75rem + .5em);
  margin-top: -1.5rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-small.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-small.is-vertical.has-content-centered .steps-content {
  padding-top: calc(0.75rem - .5em);
}

.steps.is-small.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 1.8rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-small:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 1.26rem;
    right: -0.24rem;
    top: calc(0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(0.75rem - (0.2em));
    top: auto;
  }
  .steps.is-small:not(.is-vertical) .extra-data {
    left: calc(50% + 1.05rem);
    right: calc(-50% + 1.05rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 0.75rem - (0.2em));
  }
  .steps.is-small:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-small:not(.is-vertical) .steps-content {
    margin-left: 0.75rem;
  }
  .steps.is-small:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -0.75rem;
  }
  .steps.is-small:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -0.75rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 0.75rem);
  }
  .steps.is-small:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 1.5rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-small:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 1.5rem;
    padding-bottom: .2em;
  }
  .steps.is-small:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 1.8rem;
    right: 0.3rem;
  }
  .steps.is-small:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-small:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.05rem);
    right: calc(-50% + 1.05rem);
  }
}

.steps.is-small.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 1.26rem;
  right: -0.24rem;
  top: calc(0.75rem - (0.2em));
}

.steps.is-small.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(0.75rem - (0.2em));
  top: auto;
}

.steps.is-small.is-horizontal .extra-data {
  left: calc(50% + 1.05rem);
  right: calc(-50% + 1.05rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-small.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 0.75rem - (0.2em));
}

.steps.is-small.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-small.is-horizontal .steps-content {
  margin-left: 0.75rem;
}

.steps.is-small.is-horizontal .steps-content:not(:last-child) {
  margin-right: -0.75rem;
}

.steps.is-small.is-horizontal .steps-content.is-divider-content {
  margin-right: -0.75rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-small.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-small.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 0.75rem);
}

.steps.is-small.is-horizontal.has-content-centered .steps-content {
  margin-top: 1.5rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-small.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 1.5rem;
  padding-bottom: .2em;
}

.steps.is-small.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 1.8rem;
  right: 0.3rem;
}

.steps.is-small.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-small.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.05rem);
  right: calc(-50% + 1.05rem);
}

.steps.is-medium {
  font-size: 1.25rem;
}

.steps.is-medium .steps-marker {
  height: 2.5rem;
  width: 2.5rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-medium:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-medium:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1.25rem - (0.2em));
    top: 2.26rem;
    width: 0.4em;
  }
  .steps.is-medium:not(.is-horizontal) .steps-content {
    margin-left: calc(1.25rem + .5em);
    margin-top: -2.5rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-medium:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-medium:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1.25rem - .5em);
  }
  .steps.is-medium:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 2.8rem;
    bottom: 0.3rem;
  }
}

.steps.is-medium.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-medium.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1.25rem - (0.2em));
  top: 2.26rem;
  width: 0.4em;
}

.steps.is-medium.is-vertical .steps-content {
  margin-left: calc(1.25rem + .5em);
  margin-top: -2.5rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-medium.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-medium.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1.25rem - .5em);
}

.steps.is-medium.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 2.8rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-medium:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 2.26rem;
    right: -0.24rem;
    top: calc(1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1.25rem - (0.2em));
    top: auto;
  }
  .steps.is-medium:not(.is-vertical) .extra-data {
    left: calc(50% + 1.55rem);
    right: calc(-50% + 1.55rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.25rem - (0.2em));
  }
  .steps.is-medium:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-medium:not(.is-vertical) .steps-content {
    margin-left: 1.25rem;
  }
  .steps.is-medium:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1.25rem;
  }
  .steps.is-medium:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1.25rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1.25rem);
  }
  .steps.is-medium:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 2.5rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-medium:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 2.5rem;
    padding-bottom: .2em;
  }
  .steps.is-medium:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 2.8rem;
    right: 0.3rem;
  }
  .steps.is-medium:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-medium:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.55rem);
    right: calc(-50% + 1.55rem);
  }
}

.steps.is-medium.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 2.26rem;
  right: -0.24rem;
  top: calc(1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1.25rem - (0.2em));
  top: auto;
}

.steps.is-medium.is-horizontal .extra-data {
  left: calc(50% + 1.55rem);
  right: calc(-50% + 1.55rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.25rem - (0.2em));
}

.steps.is-medium.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-medium.is-horizontal .steps-content {
  margin-left: 1.25rem;
}

.steps.is-medium.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1.25rem;
}

.steps.is-medium.is-horizontal .steps-content.is-divider-content {
  margin-right: -1.25rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-medium.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-medium.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1.25rem);
}

.steps.is-medium.is-horizontal.has-content-centered .steps-content {
  margin-top: 2.5rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-medium.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 2.5rem;
  padding-bottom: .2em;
}

.steps.is-medium.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 2.8rem;
  right: 0.3rem;
}

.steps.is-medium.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-medium.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.55rem);
  right: calc(-50% + 1.55rem);
}

.steps.is-large {
  font-size: 1.5rem;
}

.steps.is-large .steps-marker {
  height: 3rem;
  width: 3rem;
  overflow: hidden;
}

@media screen and (max-width: 768px) {
  .steps.is-large:not(.is-horizontal) {
    display: flex;
    flex-direction: column;
  }
  .steps.is-large:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: -0.24rem;
    left: calc(1.5rem - (0.2em));
    top: 2.76rem;
    width: 0.4em;
  }
  .steps.is-large:not(.is-horizontal) .steps-content {
    margin-left: calc(1.5rem + .5em);
    margin-top: -3rem;
    padding-left: 1em;
    padding-bottom: 1em;
  }
  .steps.is-large:not(.is-horizontal) .steps-content.is-divider-content {
    margin-top: 0;
    padding-bottom: 0;
  }
  .steps.is-large:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: calc(1.5rem - .5em);
  }
  .steps.is-large:not(.is-horizontal):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-horizontal):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    top: 3.3rem;
    bottom: 0.3rem;
  }
}

.steps.is-large.is-vertical {
  display: flex;
  flex-direction: column;
}

.steps.is-large.is-vertical .steps-segment:not(:last-child):after {
  bottom: -0.24rem;
  left: calc(1.5rem - (0.2em));
  top: 2.76rem;
  width: 0.4em;
}

.steps.is-large.is-vertical .steps-content {
  margin-left: calc(1.5rem + .5em);
  margin-top: -3rem;
  padding-left: 1em;
  padding-bottom: 1em;
}

.steps.is-large.is-vertical .steps-content.is-divider-content {
  margin-top: 0;
  padding-bottom: 0;
}

.steps.is-large.is-vertical.has-content-centered .steps-content {
  padding-top: calc(1.5rem - .5em);
}

.steps.is-large.is-vertical:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-vertical:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  top: 3.3rem;
  bottom: 0.3rem;
}

@media screen and (min-width: 769px), print {
  .steps.is-large:not(.is-vertical) .steps-segment:not(:last-child):after {
    height: 0.4em;
    left: 2.76rem;
    right: -0.24rem;
    top: calc(1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(1.5rem - (0.2em));
    top: auto;
  }
  .steps.is-large:not(.is-vertical) .extra-data {
    left: calc(50% + 1.8rem);
    right: calc(-50% + 1.8rem);
    bottom: 100%;
    position: absolute;
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-right {
    overflow: visible;
    right: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-left {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical) .extra-data.has-overflow-centered {
    overflow: visible;
    left: auto;
    white-space: nowrap;
    min-width: calc(100% - 1.5rem - (0.2em));
  }
  .steps.is-large:not(.is-vertical).has-content-above .extra-data {
    top: 100%;
    bottom: auto;
  }
  .steps.is-large:not(.is-vertical) .steps-content {
    margin-left: 1.5rem;
  }
  .steps.is-large:not(.is-vertical) .steps-content:not(:last-child) {
    margin-right: -1.5rem;
  }
  .steps.is-large:not(.is-vertical) .steps-content.is-divider-content {
    margin-right: -1.5rem;
    padding-left: 2em;
    padding-right: 2em;
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: 50%;
    right: -50%;
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 1.5rem);
  }
  .steps.is-large:not(.is-vertical).has-content-centered .steps-content {
    margin-top: 3rem;
    margin-left: .5em;
    margin-right: .5em;
    padding-top: .2em;
  }
  .steps.is-large:not(.is-vertical).has-content-above.has-content-centered .steps-content {
    margin-bottom: 3rem;
    padding-bottom: .2em;
  }
  .steps.is-large:not(.is-vertical):not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-vertical):not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
    left: 3.3rem;
    right: 0.3rem;
  }
  .steps.is-large:not(.is-vertical):not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-large:not(.is-vertical):not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 1.8rem);
    right: calc(-50% + 1.8rem);
  }
}

.steps.is-large.is-horizontal .steps-segment:not(:last-child):after {
  height: 0.4em;
  left: 2.76rem;
  right: -0.24rem;
  top: calc(1.5rem - (0.2em));
}

.steps.is-large.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(1.5rem - (0.2em));
  top: auto;
}

.steps.is-large.is-horizontal .extra-data {
  left: calc(50% + 1.8rem);
  right: calc(-50% + 1.8rem);
  bottom: 100%;
  position: absolute;
}

.steps.is-large.is-horizontal .extra-data.has-overflow-right {
  overflow: visible;
  right: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal .extra-data.has-overflow-left {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal .extra-data.has-overflow-centered {
  overflow: visible;
  left: auto;
  white-space: nowrap;
  min-width: calc(100% - 1.5rem - (0.2em));
}

.steps.is-large.is-horizontal.has-content-above .extra-data {
  top: 100%;
  bottom: auto;
}

.steps.is-large.is-horizontal .steps-content {
  margin-left: 1.5rem;
}

.steps.is-large.is-horizontal .steps-content:not(:last-child) {
  margin-right: -1.5rem;
}

.steps.is-large.is-horizontal .steps-content.is-divider-content {
  margin-right: -1.5rem;
  padding-left: 2em;
  padding-right: 2em;
}

.steps.is-large.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: 50%;
  right: -50%;
}

.steps.is-large.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 1.5rem);
}

.steps.is-large.is-horizontal.has-content-centered .steps-content {
  margin-top: 3rem;
  margin-left: .5em;
  margin-right: .5em;
  padding-top: .2em;
}

.steps.is-large.is-horizontal.has-content-above.has-content-centered .steps-content {
  margin-bottom: 3rem;
  padding-bottom: .2em;
}

.steps.is-large.is-horizontal:not(.is-thin).has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-horizontal:not(.is-thin) .steps-segment.has-gaps:not(:last-child):after {
  left: 3.3rem;
  right: 0.3rem;
}

.steps.is-large.is-horizontal:not(.is-thin).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-large.is-horizontal:not(.is-thin).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 1.8rem);
  right: calc(-50% + 1.8rem);
}

.steps-segment:after {
  background-color: #23d160;
}

.steps-segment.is-active:after {
  background-color: #dbdbdb;
}

.steps-segment.is-active ~ .steps-segment:after {
  background-color: #dbdbdb;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow) {
  background-color: #23d160;
  color: #fff;
}

.steps:not(.is-hollow) .steps-segment.is-active .steps-marker:not(.is-hollow) {
  background-color: #23d160;
  color: #fff;
}

.steps:not(.is-hollow) .steps-segment.is-active ~ .steps-segment .steps-marker:not(.is-hollow) {
  background-color: #dbdbdb;
  color: rgba(0, 0, 0, 0.7);
}

.steps.is-hollow .steps-marker,
.steps-marker.is-hollow {
  border: 0.3em solid #23d160;
}

.steps.is-hollow .is-active .steps-marker,
.steps .is-active .steps-marker.is-hollow {
  border-color: #23d160;
}

.steps.is-hollow .steps-segment.is-active ~ .steps-segment .steps-marker,
.steps-segment.is-active ~ .steps-segment .steps-marker.is-hollow {
  border-color: #dbdbdb;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-white {
  background-color: white !important;
  color: #0a0a0a !important;
}

.steps.is-hollow .steps-marker.is-white,
.steps .steps-marker.is-hollow.is-white {
  border-color: white !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-black {
  background-color: #0a0a0a !important;
  color: white !important;
}

.steps.is-hollow .steps-marker.is-black,
.steps .steps-marker.is-hollow.is-black {
  border-color: #0a0a0a !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-light {
  background-color: whitesmoke !important;
  color: #363636 !important;
}

.steps.is-hollow .steps-marker.is-light,
.steps .steps-marker.is-hollow.is-light {
  border-color: whitesmoke !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-dark {
  background-color: #363636 !important;
  color: whitesmoke !important;
}

.steps.is-hollow .steps-marker.is-dark,
.steps .steps-marker.is-hollow.is-dark {
  border-color: #363636 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-primary {
  background-color: #00d1b2 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-primary,
.steps .steps-marker.is-hollow.is-primary {
  border-color: #00d1b2 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-link {
  background-color: #3273dc !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-link,
.steps .steps-marker.is-hollow.is-link {
  border-color: #3273dc !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-info {
  background-color: #209cee !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-info,
.steps .steps-marker.is-hollow.is-info {
  border-color: #209cee !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-success {
  background-color: #23d160 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-success,
.steps .steps-marker.is-hollow.is-success {
  border-color: #23d160 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-warning {
  background-color: #ffdd57 !important;
  color: rgba(0, 0, 0, 0.7) !important;
}

.steps.is-hollow .steps-marker.is-warning,
.steps .steps-marker.is-hollow.is-warning {
  border-color: #ffdd57 !important;
}

.steps:not(.is-hollow) .steps-marker:not(.is-hollow).is-danger {
  background-color: #ff3860 !important;
  color: #fff !important;
}

.steps.is-hollow .steps-marker.is-danger,
.steps .steps-marker.is-hollow.is-danger {
  border-color: #ff3860 !important;
}

@media screen and (max-width: 768px) {
  .steps:not(.is-horizontal).is-dashed .steps-segment:after, .steps:not(.is-horizontal) .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(0deg, #23d160, #23d160 5px, transparent 5px, transparent 10px);
  }
  .steps:not(.is-horizontal).is-dashed .steps-segment.is-active:after,
  .steps:not(.is-horizontal).is-dashed .steps-segment.is-active ~ .steps-segment:after,
  .steps:not(.is-horizontal) .steps-segment.is-active.is-dashed:after,
  .steps:not(.is-horizontal) .steps-segment.is-active ~ .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(0deg, #dbdbdb, #dbdbdb 5px, transparent 5px, transparent 10px);
  }
}

.steps.is-vertical.is-dashed .steps-segment:after, .steps.is-vertical .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(0deg, #23d160, #23d160 5px, transparent 5px, transparent 10px);
}

.steps.is-vertical.is-dashed .steps-segment.is-active:after,
.steps.is-vertical.is-dashed .steps-segment.is-active ~ .steps-segment:after,
.steps.is-vertical .steps-segment.is-active.is-dashed:after,
.steps.is-vertical .steps-segment.is-active ~ .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(0deg, #dbdbdb, #dbdbdb 5px, transparent 5px, transparent 10px);
}

@media screen and (min-width: 769px), print {
  .steps:not(.is-vertical).is-dashed .steps-segment:after,
  .steps:not(.is-vertical) .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(90deg, #23d160, #23d160 10px, transparent 10px, transparent 20px);
  }
  .steps:not(.is-vertical).is-dashed .steps-segment.is-active:after,
  .steps:not(.is-vertical).is-dashed .steps-segment.is-active ~ .steps-segment:after,
  .steps:not(.is-vertical) .steps-segment.is-active.is-dashed:after,
  .steps:not(.is-vertical) .steps-segment.is-active ~ .steps-segment.is-dashed:after {
    background: repeating-linear-gradient(90deg, #dbdbdb, #dbdbdb 10px, transparent 10px, transparent 20px);
  }
}

.steps.is-horizontal.is-dashed .steps-segment:after,
.steps.is-horizontal .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(90deg, #23d160, #23d160 10px, transparent 10px, transparent 20px);
}

.steps.is-horizontal.is-dashed .steps-segment.is-active:after,
.steps.is-horizontal.is-dashed .steps-segment.is-active ~ .steps-segment:after,
.steps.is-horizontal .steps-segment.is-active.is-dashed:after,
.steps.is-horizontal .steps-segment.is-active ~ .steps-segment.is-dashed:after {
  background: repeating-linear-gradient(90deg, #dbdbdb, #dbdbdb 10px, transparent 10px, transparent 20px);
}

.steps.is-thin .steps-marker {
  width: 0.8em;
  height: 0.8em;
}

.steps.is-thin.is-hollow .steps-marker,
.steps.is-thin .steps-marker.is-hollow {
  border-width: 1px;
  height: calc(0.8em + 1px);
  width: calc(0.8em + 1px);
}

@media screen and (max-width: 768px) {
  .steps.is-thin:not(.is-horizontal) .steps-segment:not(:last-child):after {
    bottom: 0;
    left: calc(0.4em - 0.5px);
    top: 0.8em;
    width: 1px;
  }
  .steps.is-thin:not(.is-horizontal) .steps-content {
    margin-top: -1.2em;
    margin-left: 0.8em;
  }
  .steps.is-thin:not(.is-horizontal).has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-horizontal) .steps-segment.has-gaps:not(:last-child):after {
    bottom: 0.4em;
    top: 1.2em;
  }
  .steps.is-thin:not(.is-horizontal).has-content-centered .steps-content {
    padding-top: 1.6em;
  }
}

.steps.is-thin.is-vertical .steps-segment:not(:last-child):after {
  bottom: 0;
  left: calc(0.4em - 0.5px);
  top: 0.8em;
  width: 1px;
}

.steps.is-thin.is-vertical .steps-content {
  margin-top: -1.2em;
  margin-left: 0.8em;
}

.steps.is-thin.is-vertical.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-vertical .steps-segment.has-gaps:not(:last-child):after {
  bottom: 0.4em;
  top: 1.2em;
}

.steps.is-thin.is-vertical.has-content-centered .steps-content {
  padding-top: 1.6em;
}

@media screen and (min-width: 769px), print {
  .steps.is-thin:not(.is-vertical) .steps-segment:not(:last-child):after {
    left: 0.8em;
    right: 0;
    top: calc(0.4em - 0.5px);
    height: 1px;
  }
  .steps.is-thin:not(.is-vertical).has-content-above .steps-segment:not(:last-child)::after {
    bottom: calc(0.4em - 0.5px);
    top: auto;
  }
  .steps.is-thin:not(.is-vertical) .steps-content {
    margin-top: 0.8em;
  }
  .steps.is-thin:not(.is-vertical).has-content-centered .steps-segment:not(:last-child):after {
    left: calc(50% + 0.4em);
    right: calc(-50% + 0.4em);
  }
  .steps.is-thin:not(.is-vertical).has-content-centered .steps-marker {
    position: absolute;
    left: calc(50% - 0.4em);
  }
  .steps.is-thin:not(.is-vertical).has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-vertical) .steps-segment.has-gaps:not(:last-child):after {
    left: 1.2em;
    right: 0.4em;
  }
  .steps.is-thin:not(.is-vertical).has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin:not(.is-vertical).has-content-centered .steps-segment.has-gaps:not(:last-child):after {
    left: calc(50% + 0.8em);
    right: calc(-50% + 0.8em);
  }
}

.steps.is-thin.is-horizontal .steps-segment:not(:last-child):after {
  left: 0.8em;
  right: 0;
  top: calc(0.4em - 0.5px);
  height: 1px;
}

.steps.is-thin.is-horizontal.has-content-above .steps-segment:not(:last-child)::after {
  bottom: calc(0.4em - 0.5px);
  top: auto;
}

.steps.is-thin.is-horizontal .steps-content {
  margin-top: 0.8em;
}

.steps.is-thin.is-horizontal.has-content-centered .steps-segment:not(:last-child):after {
  left: calc(50% + 0.4em);
  right: calc(-50% + 0.4em);
}

.steps.is-thin.is-horizontal.has-content-centered .steps-marker {
  position: absolute;
  left: calc(50% - 0.4em);
}

.steps.is-thin.is-horizontal.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-horizontal .steps-segment.has-gaps:not(:last-child):after {
  left: 1.2em;
  right: 0.4em;
}

.steps.is-thin.is-horizontal.has-content-centered.has-gaps .steps-segment:not(:last-child):after, .steps.is-thin.is-horizontal.has-content-centered .steps-segment.has-gaps:not(:last-child):after {
  left: calc(50% + 0.8em);
  right: calc(-50% + 0.8em);
}

.steps:not(.is-vertical).has-content-above .steps-segment {
  display: flex;
  flex-direction: column-reverse;
}

.steps:not(.is-vertical).has-content-above .steps-segment .steps-content {
  margin-top: 0;
  padding-top: 0;
  display: flex;
  flex-direction: column-reverse;
}`,be=se`
.fa,
.fas,
.far,
.fal,
.fad,
.fab {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1; }

.fa-lg {
  font-size: 1.33333em;
  line-height: 0.75em;
  vertical-align: -.0667em; }

.fa-xs {
  font-size: .75em; }

.fa-sm {
  font-size: .875em; }

.fa-1x {
  font-size: 1em; }

.fa-2x {
  font-size: 2em; }

.fa-3x {
  font-size: 3em; }

.fa-4x {
  font-size: 4em; }

.fa-5x {
  font-size: 5em; }

.fa-6x {
  font-size: 6em; }

.fa-7x {
  font-size: 7em; }

.fa-8x {
  font-size: 8em; }

.fa-9x {
  font-size: 9em; }

.fa-10x {
  font-size: 10em; }

.fa-fw {
  text-align: center;
  width: 1.25em; }

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0; }
  .fa-ul > li {
    position: relative; }

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit; }

.fa-border {
  border: solid 0.08em #eee;
  border-radius: .1em;
  padding: .2em .25em .15em; }

.fa-pull-left {
  float: left; }

.fa-pull-right {
  float: right; }

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: .3em; }

.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: .3em; }

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear; }

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8); }

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg); }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg); } }

.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg); }

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg); }

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg); }

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1); }

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1); }

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1); }

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none; }

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em; }

.fa-stack-1x,
.fa-stack-2x {
  left: 0;
  position: absolute;
  text-align: center;
  width: 100%; }

.fa-stack-1x {
  line-height: inherit; }

.fa-stack-2x {
  font-size: 2em; }

.fa-inverse {
  color: #fff; }

/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen
readers do not read off random characters that represent icons */
.fa-500px:before {
  content: "\\f26e"; }

.fa-accessible-icon:before {
  content: "\\f368"; }

.fa-accusoft:before {
  content: "\\f369"; }

.fa-acquisitions-incorporated:before {
  content: "\\f6af"; }

.fa-ad:before {
  content: "\\f641"; }

.fa-address-book:before {
  content: "\\f2b9"; }

.fa-address-card:before {
  content: "\\f2bb"; }

.fa-adjust:before {
  content: "\\f042"; }

.fa-adn:before {
  content: "\\f170"; }

.fa-adobe:before {
  content: "\\f778"; }

.fa-adversal:before {
  content: "\\f36a"; }

.fa-affiliatetheme:before {
  content: "\\f36b"; }

.fa-air-freshener:before {
  content: "\\f5d0"; }

.fa-airbnb:before {
  content: "\\f834"; }

.fa-algolia:before {
  content: "\\f36c"; }

.fa-align-center:before {
  content: "\\f037"; }

.fa-align-justify:before {
  content: "\\f039"; }

.fa-align-left:before {
  content: "\\f036"; }

.fa-align-right:before {
  content: "\\f038"; }

.fa-alipay:before {
  content: "\\f642"; }

.fa-allergies:before {
  content: "\\f461"; }

.fa-amazon:before {
  content: "\\f270"; }

.fa-amazon-pay:before {
  content: "\\f42c"; }

.fa-ambulance:before {
  content: "\\f0f9"; }

.fa-american-sign-language-interpreting:before {
  content: "\\f2a3"; }

.fa-amilia:before {
  content: "\\f36d"; }

.fa-anchor:before {
  content: "\\f13d"; }

.fa-android:before {
  content: "\\f17b"; }

.fa-angellist:before {
  content: "\\f209"; }

.fa-angle-double-down:before {
  content: "\\f103"; }

.fa-angle-double-left:before {
  content: "\\f100"; }

.fa-angle-double-right:before {
  content: "\\f101"; }

.fa-angle-double-up:before {
  content: "\\f102"; }

.fa-angle-down:before {
  content: "\\f107"; }

.fa-angle-left:before {
  content: "\\f104"; }

.fa-angle-right:before {
  content: "\\f105"; }

.fa-angle-up:before {
  content: "\\f106"; }

.fa-angry:before {
  content: "\\f556"; }

.fa-angrycreative:before {
  content: "\\f36e"; }

.fa-angular:before {
  content: "\\f420"; }

.fa-ankh:before {
  content: "\\f644"; }

.fa-app-store:before {
  content: "\\f36f"; }

.fa-app-store-ios:before {
  content: "\\f370"; }

.fa-apper:before {
  content: "\\f371"; }

.fa-apple:before {
  content: "\\f179"; }

.fa-apple-alt:before {
  content: "\\f5d1"; }

.fa-apple-pay:before {
  content: "\\f415"; }

.fa-archive:before {
  content: "\\f187"; }

.fa-archway:before {
  content: "\\f557"; }

.fa-arrow-alt-circle-down:before {
  content: "\\f358"; }

.fa-arrow-alt-circle-left:before {
  content: "\\f359"; }

.fa-arrow-alt-circle-right:before {
  content: "\\f35a"; }

.fa-arrow-alt-circle-up:before {
  content: "\\f35b"; }

.fa-arrow-circle-down:before {
  content: "\\f0ab"; }

.fa-arrow-circle-left:before {
  content: "\\f0a8"; }

.fa-arrow-circle-right:before {
  content: "\\f0a9"; }

.fa-arrow-circle-up:before {
  content: "\\f0aa"; }

.fa-arrow-down:before {
  content: "\\f063"; }

.fa-arrow-left:before {
  content: "\\f060"; }

.fa-arrow-right:before {
  content: "\\f061"; }

.fa-arrow-up:before {
  content: "\\f062"; }

.fa-arrows-alt:before {
  content: "\\f0b2"; }

.fa-arrows-alt-h:before {
  content: "\\f337"; }

.fa-arrows-alt-v:before {
  content: "\\f338"; }

.fa-artstation:before {
  content: "\\f77a"; }

.fa-assistive-listening-systems:before {
  content: "\\f2a2"; }

.fa-asterisk:before {
  content: "\\f069"; }

.fa-asymmetrik:before {
  content: "\\f372"; }

.fa-at:before {
  content: "\\f1fa"; }

.fa-atlas:before {
  content: "\\f558"; }

.fa-atlassian:before {
  content: "\\f77b"; }

.fa-atom:before {
  content: "\\f5d2"; }

.fa-audible:before {
  content: "\\f373"; }

.fa-audio-description:before {
  content: "\\f29e"; }

.fa-autoprefixer:before {
  content: "\\f41c"; }

.fa-avianex:before {
  content: "\\f374"; }

.fa-aviato:before {
  content: "\\f421"; }

.fa-award:before {
  content: "\\f559"; }

.fa-aws:before {
  content: "\\f375"; }

.fa-baby:before {
  content: "\\f77c"; }

.fa-baby-carriage:before {
  content: "\\f77d"; }

.fa-backspace:before {
  content: "\\f55a"; }

.fa-backward:before {
  content: "\\f04a"; }

.fa-bacon:before {
  content: "\\f7e5"; }

.fa-balance-scale:before {
  content: "\\f24e"; }

.fa-balance-scale-left:before {
  content: "\\f515"; }

.fa-balance-scale-right:before {
  content: "\\f516"; }

.fa-ban:before {
  content: "\\f05e"; }

.fa-band-aid:before {
  content: "\\f462"; }

.fa-bandcamp:before {
  content: "\\f2d5"; }

.fa-barcode:before {
  content: "\\f02a"; }

.fa-bars:before {
  content: "\\f0c9"; }

.fa-baseball-ball:before {
  content: "\\f433"; }

.fa-basketball-ball:before {
  content: "\\f434"; }

.fa-bath:before {
  content: "\\f2cd"; }

.fa-battery-empty:before {
  content: "\\f244"; }

.fa-battery-full:before {
  content: "\\f240"; }

.fa-battery-half:before {
  content: "\\f242"; }

.fa-battery-quarter:before {
  content: "\\f243"; }

.fa-battery-three-quarters:before {
  content: "\\f241"; }

.fa-battle-net:before {
  content: "\\f835"; }

.fa-bed:before {
  content: "\\f236"; }

.fa-beer:before {
  content: "\\f0fc"; }

.fa-behance:before {
  content: "\\f1b4"; }

.fa-behance-square:before {
  content: "\\f1b5"; }

.fa-bell:before {
  content: "\\f0f3"; }

.fa-bell-slash:before {
  content: "\\f1f6"; }

.fa-bezier-curve:before {
  content: "\\f55b"; }

.fa-bible:before {
  content: "\\f647"; }

.fa-bicycle:before {
  content: "\\f206"; }

.fa-biking:before {
  content: "\\f84a"; }

.fa-bimobject:before {
  content: "\\f378"; }

.fa-binoculars:before {
  content: "\\f1e5"; }

.fa-biohazard:before {
  content: "\\f780"; }

.fa-birthday-cake:before {
  content: "\\f1fd"; }

.fa-bitbucket:before {
  content: "\\f171"; }

.fa-bitcoin:before {
  content: "\\f379"; }

.fa-bity:before {
  content: "\\f37a"; }

.fa-black-tie:before {
  content: "\\f27e"; }

.fa-blackberry:before {
  content: "\\f37b"; }

.fa-blender:before {
  content: "\\f517"; }

.fa-blender-phone:before {
  content: "\\f6b6"; }

.fa-blind:before {
  content: "\\f29d"; }

.fa-blog:before {
  content: "\\f781"; }

.fa-blogger:before {
  content: "\\f37c"; }

.fa-blogger-b:before {
  content: "\\f37d"; }

.fa-bluetooth:before {
  content: "\\f293"; }

.fa-bluetooth-b:before {
  content: "\\f294"; }

.fa-bold:before {
  content: "\\f032"; }

.fa-bolt:before {
  content: "\\f0e7"; }

.fa-bomb:before {
  content: "\\f1e2"; }

.fa-bone:before {
  content: "\\f5d7"; }

.fa-bong:before {
  content: "\\f55c"; }

.fa-book:before {
  content: "\\f02d"; }

.fa-book-dead:before {
  content: "\\f6b7"; }

.fa-book-medical:before {
  content: "\\f7e6"; }

.fa-book-open:before {
  content: "\\f518"; }

.fa-book-reader:before {
  content: "\\f5da"; }

.fa-bookmark:before {
  content: "\\f02e"; }

.fa-bootstrap:before {
  content: "\\f836"; }

.fa-border-all:before {
  content: "\\f84c"; }

.fa-border-none:before {
  content: "\\f850"; }

.fa-border-style:before {
  content: "\\f853"; }

.fa-bowling-ball:before {
  content: "\\f436"; }

.fa-box:before {
  content: "\\f466"; }

.fa-box-open:before {
  content: "\\f49e"; }

.fa-boxes:before {
  content: "\\f468"; }

.fa-braille:before {
  content: "\\f2a1"; }

.fa-brain:before {
  content: "\\f5dc"; }

.fa-bread-slice:before {
  content: "\\f7ec"; }

.fa-briefcase:before {
  content: "\\f0b1"; }

.fa-briefcase-medical:before {
  content: "\\f469"; }

.fa-broadcast-tower:before {
  content: "\\f519"; }

.fa-broom:before {
  content: "\\f51a"; }

.fa-brush:before {
  content: "\\f55d"; }

.fa-btc:before {
  content: "\\f15a"; }

.fa-buffer:before {
  content: "\\f837"; }

.fa-bug:before {
  content: "\\f188"; }

.fa-building:before {
  content: "\\f1ad"; }

.fa-bullhorn:before {
  content: "\\f0a1"; }

.fa-bullseye:before {
  content: "\\f140"; }

.fa-burn:before {
  content: "\\f46a"; }

.fa-buromobelexperte:before {
  content: "\\f37f"; }

.fa-bus:before {
  content: "\\f207"; }

.fa-bus-alt:before {
  content: "\\f55e"; }

.fa-business-time:before {
  content: "\\f64a"; }

.fa-buy-n-large:before {
  content: "\\f8a6"; }

.fa-buysellads:before {
  content: "\\f20d"; }

.fa-calculator:before {
  content: "\\f1ec"; }

.fa-calendar:before {
  content: "\\f133"; }

.fa-calendar-alt:before {
  content: "\\f073"; }

.fa-calendar-check:before {
  content: "\\f274"; }

.fa-calendar-day:before {
  content: "\\f783"; }

.fa-calendar-minus:before {
  content: "\\f272"; }

.fa-calendar-plus:before {
  content: "\\f271"; }

.fa-calendar-times:before {
  content: "\\f273"; }

.fa-calendar-week:before {
  content: "\\f784"; }

.fa-camera:before {
  content: "\\f030"; }

.fa-camera-retro:before {
  content: "\\f083"; }

.fa-campground:before {
  content: "\\f6bb"; }

.fa-canadian-maple-leaf:before {
  content: "\\f785"; }

.fa-candy-cane:before {
  content: "\\f786"; }

.fa-cannabis:before {
  content: "\\f55f"; }

.fa-capsules:before {
  content: "\\f46b"; }

.fa-car:before {
  content: "\\f1b9"; }

.fa-car-alt:before {
  content: "\\f5de"; }

.fa-car-battery:before {
  content: "\\f5df"; }

.fa-car-crash:before {
  content: "\\f5e1"; }

.fa-car-side:before {
  content: "\\f5e4"; }

.fa-caret-down:before {
  content: "\\f0d7"; }

.fa-caret-left:before {
  content: "\\f0d9"; }

.fa-caret-right:before {
  content: "\\f0da"; }

.fa-caret-square-down:before {
  content: "\\f150"; }

.fa-caret-square-left:before {
  content: "\\f191"; }

.fa-caret-square-right:before {
  content: "\\f152"; }

.fa-caret-square-up:before {
  content: "\\f151"; }

.fa-caret-up:before {
  content: "\\f0d8"; }

.fa-carrot:before {
  content: "\\f787"; }

.fa-cart-arrow-down:before {
  content: "\\f218"; }

.fa-cart-plus:before {
  content: "\\f217"; }

.fa-cash-register:before {
  content: "\\f788"; }

.fa-cat:before {
  content: "\\f6be"; }

.fa-cc-amazon-pay:before {
  content: "\\f42d"; }

.fa-cc-amex:before {
  content: "\\f1f3"; }

.fa-cc-apple-pay:before {
  content: "\\f416"; }

.fa-cc-diners-club:before {
  content: "\\f24c"; }

.fa-cc-discover:before {
  content: "\\f1f2"; }

.fa-cc-jcb:before {
  content: "\\f24b"; }

.fa-cc-mastercard:before {
  content: "\\f1f1"; }

.fa-cc-paypal:before {
  content: "\\f1f4"; }

.fa-cc-stripe:before {
  content: "\\f1f5"; }

.fa-cc-visa:before {
  content: "\\f1f0"; }

.fa-centercode:before {
  content: "\\f380"; }

.fa-centos:before {
  content: "\\f789"; }

.fa-certificate:before {
  content: "\\f0a3"; }

.fa-chair:before {
  content: "\\f6c0"; }

.fa-chalkboard:before {
  content: "\\f51b"; }

.fa-chalkboard-teacher:before {
  content: "\\f51c"; }

.fa-charging-station:before {
  content: "\\f5e7"; }

.fa-chart-area:before {
  content: "\\f1fe"; }

.fa-chart-bar:before {
  content: "\\f080"; }

.fa-chart-line:before {
  content: "\\f201"; }

.fa-chart-pie:before {
  content: "\\f200"; }

.fa-check:before {
  content: "\\f00c"; }

.fa-check-circle:before {
  content: "\\f058"; }

.fa-check-double:before {
  content: "\\f560"; }

.fa-check-square:before {
  content: "\\f14a"; }

.fa-cheese:before {
  content: "\\f7ef"; }

.fa-chess:before {
  content: "\\f439"; }

.fa-chess-bishop:before {
  content: "\\f43a"; }

.fa-chess-board:before {
  content: "\\f43c"; }

.fa-chess-king:before {
  content: "\\f43f"; }

.fa-chess-knight:before {
  content: "\\f441"; }

.fa-chess-pawn:before {
  content: "\\f443"; }

.fa-chess-queen:before {
  content: "\\f445"; }

.fa-chess-rook:before {
  content: "\\f447"; }

.fa-chevron-circle-down:before {
  content: "\\f13a"; }

.fa-chevron-circle-left:before {
  content: "\\f137"; }

.fa-chevron-circle-right:before {
  content: "\\f138"; }

.fa-chevron-circle-up:before {
  content: "\\f139"; }

.fa-chevron-down:before {
  content: "\\f078"; }

.fa-chevron-left:before {
  content: "\\f053"; }

.fa-chevron-right:before {
  content: "\\f054"; }

.fa-chevron-up:before {
  content: "\\f077"; }

.fa-child:before {
  content: "\\f1ae"; }

.fa-chrome:before {
  content: "\\f268"; }

.fa-chromecast:before {
  content: "\\f838"; }

.fa-church:before {
  content: "\\f51d"; }

.fa-circle:before {
  content: "\\f111"; }

.fa-circle-notch:before {
  content: "\\f1ce"; }

.fa-city:before {
  content: "\\f64f"; }

.fa-clinic-medical:before {
  content: "\\f7f2"; }

.fa-clipboard:before {
  content: "\\f328"; }

.fa-clipboard-check:before {
  content: "\\f46c"; }

.fa-clipboard-list:before {
  content: "\\f46d"; }

.fa-clock:before {
  content: "\\f017"; }

.fa-clone:before {
  content: "\\f24d"; }

.fa-closed-captioning:before {
  content: "\\f20a"; }

.fa-cloud:before {
  content: "\\f0c2"; }

.fa-cloud-download-alt:before {
  content: "\\f381"; }

.fa-cloud-meatball:before {
  content: "\\f73b"; }

.fa-cloud-moon:before {
  content: "\\f6c3"; }

.fa-cloud-moon-rain:before {
  content: "\\f73c"; }

.fa-cloud-rain:before {
  content: "\\f73d"; }

.fa-cloud-showers-heavy:before {
  content: "\\f740"; }

.fa-cloud-sun:before {
  content: "\\f6c4"; }

.fa-cloud-sun-rain:before {
  content: "\\f743"; }

.fa-cloud-upload-alt:before {
  content: "\\f382"; }

.fa-cloudscale:before {
  content: "\\f383"; }

.fa-cloudsmith:before {
  content: "\\f384"; }

.fa-cloudversify:before {
  content: "\\f385"; }

.fa-cocktail:before {
  content: "\\f561"; }

.fa-code:before {
  content: "\\f121"; }

.fa-code-branch:before {
  content: "\\f126"; }

.fa-codepen:before {
  content: "\\f1cb"; }

.fa-codiepie:before {
  content: "\\f284"; }

.fa-coffee:before {
  content: "\\f0f4"; }

.fa-cog:before {
  content: "\\f013"; }

.fa-cogs:before {
  content: "\\f085"; }

.fa-coins:before {
  content: "\\f51e"; }

.fa-columns:before {
  content: "\\f0db"; }

.fa-comment:before {
  content: "\\f075"; }

.fa-comment-alt:before {
  content: "\\f27a"; }

.fa-comment-dollar:before {
  content: "\\f651"; }

.fa-comment-dots:before {
  content: "\\f4ad"; }

.fa-comment-medical:before {
  content: "\\f7f5"; }

.fa-comment-slash:before {
  content: "\\f4b3"; }

.fa-comments:before {
  content: "\\f086"; }

.fa-comments-dollar:before {
  content: "\\f653"; }

.fa-compact-disc:before {
  content: "\\f51f"; }

.fa-compass:before {
  content: "\\f14e"; }

.fa-compress:before {
  content: "\\f066"; }

.fa-compress-arrows-alt:before {
  content: "\\f78c"; }

.fa-concierge-bell:before {
  content: "\\f562"; }

.fa-confluence:before {
  content: "\\f78d"; }

.fa-connectdevelop:before {
  content: "\\f20e"; }

.fa-contao:before {
  content: "\\f26d"; }

.fa-cookie:before {
  content: "\\f563"; }

.fa-cookie-bite:before {
  content: "\\f564"; }

.fa-copy:before {
  content: "\\f0c5"; }

.fa-copyright:before {
  content: "\\f1f9"; }

.fa-cotton-bureau:before {
  content: "\\f89e"; }

.fa-couch:before {
  content: "\\f4b8"; }

.fa-cpanel:before {
  content: "\\f388"; }

.fa-creative-commons:before {
  content: "\\f25e"; }

.fa-creative-commons-by:before {
  content: "\\f4e7"; }

.fa-creative-commons-nc:before {
  content: "\\f4e8"; }

.fa-creative-commons-nc-eu:before {
  content: "\\f4e9"; }

.fa-creative-commons-nc-jp:before {
  content: "\\f4ea"; }

.fa-creative-commons-nd:before {
  content: "\\f4eb"; }

.fa-creative-commons-pd:before {
  content: "\\f4ec"; }

.fa-creative-commons-pd-alt:before {
  content: "\\f4ed"; }

.fa-creative-commons-remix:before {
  content: "\\f4ee"; }

.fa-creative-commons-sa:before {
  content: "\\f4ef"; }

.fa-creative-commons-sampling:before {
  content: "\\f4f0"; }

.fa-creative-commons-sampling-plus:before {
  content: "\\f4f1"; }

.fa-creative-commons-share:before {
  content: "\\f4f2"; }

.fa-creative-commons-zero:before {
  content: "\\f4f3"; }

.fa-credit-card:before {
  content: "\\f09d"; }

.fa-critical-role:before {
  content: "\\f6c9"; }

.fa-crop:before {
  content: "\\f125"; }

.fa-crop-alt:before {
  content: "\\f565"; }

.fa-cross:before {
  content: "\\f654"; }

.fa-crosshairs:before {
  content: "\\f05b"; }

.fa-crow:before {
  content: "\\f520"; }

.fa-crown:before {
  content: "\\f521"; }

.fa-crutch:before {
  content: "\\f7f7"; }

.fa-css3:before {
  content: "\\f13c"; }

.fa-css3-alt:before {
  content: "\\f38b"; }

.fa-cube:before {
  content: "\\f1b2"; }

.fa-cubes:before {
  content: "\\f1b3"; }

.fa-cut:before {
  content: "\\f0c4"; }

.fa-cuttlefish:before {
  content: "\\f38c"; }

.fa-d-and-d:before {
  content: "\\f38d"; }

.fa-d-and-d-beyond:before {
  content: "\\f6ca"; }

.fa-dashcube:before {
  content: "\\f210"; }

.fa-database:before {
  content: "\\f1c0"; }

.fa-deaf:before {
  content: "\\f2a4"; }

.fa-delicious:before {
  content: "\\f1a5"; }

.fa-democrat:before {
  content: "\\f747"; }

.fa-deploydog:before {
  content: "\\f38e"; }

.fa-deskpro:before {
  content: "\\f38f"; }

.fa-desktop:before {
  content: "\\f108"; }

.fa-dev:before {
  content: "\\f6cc"; }

.fa-deviantart:before {
  content: "\\f1bd"; }

.fa-dharmachakra:before {
  content: "\\f655"; }

.fa-dhl:before {
  content: "\\f790"; }

.fa-diagnoses:before {
  content: "\\f470"; }

.fa-diaspora:before {
  content: "\\f791"; }

.fa-dice:before {
  content: "\\f522"; }

.fa-dice-d20:before {
  content: "\\f6cf"; }

.fa-dice-d6:before {
  content: "\\f6d1"; }

.fa-dice-five:before {
  content: "\\f523"; }

.fa-dice-four:before {
  content: "\\f524"; }

.fa-dice-one:before {
  content: "\\f525"; }

.fa-dice-six:before {
  content: "\\f526"; }

.fa-dice-three:before {
  content: "\\f527"; }

.fa-dice-two:before {
  content: "\\f528"; }

.fa-digg:before {
  content: "\\f1a6"; }

.fa-digital-ocean:before {
  content: "\\f391"; }

.fa-digital-tachograph:before {
  content: "\\f566"; }

.fa-directions:before {
  content: "\\f5eb"; }

.fa-discord:before {
  content: "\\f392"; }

.fa-discourse:before {
  content: "\\f393"; }

.fa-divide:before {
  content: "\\f529"; }

.fa-dizzy:before {
  content: "\\f567"; }

.fa-dna:before {
  content: "\\f471"; }

.fa-dochub:before {
  content: "\\f394"; }

.fa-docker:before {
  content: "\\f395"; }

.fa-dog:before {
  content: "\\f6d3"; }

.fa-dollar-sign:before {
  content: "\\f155"; }

.fa-dolly:before {
  content: "\\f472"; }

.fa-dolly-flatbed:before {
  content: "\\f474"; }

.fa-donate:before {
  content: "\\f4b9"; }

.fa-door-closed:before {
  content: "\\f52a"; }

.fa-door-open:before {
  content: "\\f52b"; }

.fa-dot-circle:before {
  content: "\\f192"; }

.fa-dove:before {
  content: "\\f4ba"; }

.fa-download:before {
  content: "\\f019"; }

.fa-draft2digital:before {
  content: "\\f396"; }

.fa-drafting-compass:before {
  content: "\\f568"; }

.fa-dragon:before {
  content: "\\f6d5"; }

.fa-draw-polygon:before {
  content: "\\f5ee"; }

.fa-dribbble:before {
  content: "\\f17d"; }

.fa-dribbble-square:before {
  content: "\\f397"; }

.fa-dropbox:before {
  content: "\\f16b"; }

.fa-drum:before {
  content: "\\f569"; }

.fa-drum-steelpan:before {
  content: "\\f56a"; }

.fa-drumstick-bite:before {
  content: "\\f6d7"; }

.fa-drupal:before {
  content: "\\f1a9"; }

.fa-dumbbell:before {
  content: "\\f44b"; }

.fa-dumpster:before {
  content: "\\f793"; }

.fa-dumpster-fire:before {
  content: "\\f794"; }

.fa-dungeon:before {
  content: "\\f6d9"; }

.fa-dyalog:before {
  content: "\\f399"; }

.fa-earlybirds:before {
  content: "\\f39a"; }

.fa-ebay:before {
  content: "\\f4f4"; }

.fa-edge:before {
  content: "\\f282"; }

.fa-edit:before {
  content: "\\f044"; }

.fa-egg:before {
  content: "\\f7fb"; }

.fa-eject:before {
  content: "\\f052"; }

.fa-elementor:before {
  content: "\\f430"; }

.fa-ellipsis-h:before {
  content: "\\f141"; }

.fa-ellipsis-v:before {
  content: "\\f142"; }

.fa-ello:before {
  content: "\\f5f1"; }

.fa-ember:before {
  content: "\\f423"; }

.fa-empire:before {
  content: "\\f1d1"; }

.fa-envelope:before {
  content: "\\f0e0"; }

.fa-envelope-open:before {
  content: "\\f2b6"; }

.fa-envelope-open-text:before {
  content: "\\f658"; }

.fa-envelope-square:before {
  content: "\\f199"; }

.fa-envira:before {
  content: "\\f299"; }

.fa-equals:before {
  content: "\\f52c"; }

.fa-eraser:before {
  content: "\\f12d"; }

.fa-erlang:before {
  content: "\\f39d"; }

.fa-ethereum:before {
  content: "\\f42e"; }

.fa-ethernet:before {
  content: "\\f796"; }

.fa-etsy:before {
  content: "\\f2d7"; }

.fa-euro-sign:before {
  content: "\\f153"; }

.fa-evernote:before {
  content: "\\f839"; }

.fa-exchange-alt:before {
  content: "\\f362"; }

.fa-exclamation:before {
  content: "\\f12a"; }

.fa-exclamation-circle:before {
  content: "\\f06a"; }

.fa-exclamation-triangle:before {
  content: "\\f071"; }

.fa-expand:before {
  content: "\\f065"; }

.fa-expand-arrows-alt:before {
  content: "\\f31e"; }

.fa-expeditedssl:before {
  content: "\\f23e"; }

.fa-external-link-alt:before {
  content: "\\f35d"; }

.fa-external-link-square-alt:before {
  content: "\\f360"; }

.fa-eye:before {
  content: "\\f06e"; }

.fa-eye-dropper:before {
  content: "\\f1fb"; }

.fa-eye-slash:before {
  content: "\\f070"; }

.fa-facebook:before {
  content: "\\f09a"; }

.fa-facebook-f:before {
  content: "\\f39e"; }

.fa-facebook-messenger:before {
  content: "\\f39f"; }

.fa-facebook-square:before {
  content: "\\f082"; }

.fa-fan:before {
  content: "\\f863"; }

.fa-fantasy-flight-games:before {
  content: "\\f6dc"; }

.fa-fast-backward:before {
  content: "\\f049"; }

.fa-fast-forward:before {
  content: "\\f050"; }

.fa-fax:before {
  content: "\\f1ac"; }

.fa-feather:before {
  content: "\\f52d"; }

.fa-feather-alt:before {
  content: "\\f56b"; }

.fa-fedex:before {
  content: "\\f797"; }

.fa-fedora:before {
  content: "\\f798"; }

.fa-female:before {
  content: "\\f182"; }

.fa-fighter-jet:before {
  content: "\\f0fb"; }

.fa-figma:before {
  content: "\\f799"; }

.fa-file:before {
  content: "\\f15b"; }

.fa-file-alt:before {
  content: "\\f15c"; }

.fa-file-archive:before {
  content: "\\f1c6"; }

.fa-file-audio:before {
  content: "\\f1c7"; }

.fa-file-code:before {
  content: "\\f1c9"; }

.fa-file-contract:before {
  content: "\\f56c"; }

.fa-file-csv:before {
  content: "\\f6dd"; }

.fa-file-download:before {
  content: "\\f56d"; }

.fa-file-excel:before {
  content: "\\f1c3"; }

.fa-file-export:before {
  content: "\\f56e"; }

.fa-file-image:before {
  content: "\\f1c5"; }

.fa-file-import:before {
  content: "\\f56f"; }

.fa-file-invoice:before {
  content: "\\f570"; }

.fa-file-invoice-dollar:before {
  content: "\\f571"; }

.fa-file-medical:before {
  content: "\\f477"; }

.fa-file-medical-alt:before {
  content: "\\f478"; }

.fa-file-pdf:before {
  content: "\\f1c1"; }

.fa-file-powerpoint:before {
  content: "\\f1c4"; }

.fa-file-prescription:before {
  content: "\\f572"; }

.fa-file-signature:before {
  content: "\\f573"; }

.fa-file-upload:before {
  content: "\\f574"; }

.fa-file-video:before {
  content: "\\f1c8"; }

.fa-file-word:before {
  content: "\\f1c2"; }

.fa-fill:before {
  content: "\\f575"; }

.fa-fill-drip:before {
  content: "\\f576"; }

.fa-film:before {
  content: "\\f008"; }

.fa-filter:before {
  content: "\\f0b0"; }

.fa-fingerprint:before {
  content: "\\f577"; }

.fa-fire:before {
  content: "\\f06d"; }

.fa-fire-alt:before {
  content: "\\f7e4"; }

.fa-fire-extinguisher:before {
  content: "\\f134"; }

.fa-firefox:before {
  content: "\\f269"; }

.fa-first-aid:before {
  content: "\\f479"; }

.fa-first-order:before {
  content: "\\f2b0"; }

.fa-first-order-alt:before {
  content: "\\f50a"; }

.fa-firstdraft:before {
  content: "\\f3a1"; }

.fa-fish:before {
  content: "\\f578"; }

.fa-fist-raised:before {
  content: "\\f6de"; }

.fa-flag:before {
  content: "\\f024"; }

.fa-flag-checkered:before {
  content: "\\f11e"; }

.fa-flag-usa:before {
  content: "\\f74d"; }

.fa-flask:before {
  content: "\\f0c3"; }

.fa-flickr:before {
  content: "\\f16e"; }

.fa-flipboard:before {
  content: "\\f44d"; }

.fa-flushed:before {
  content: "\\f579"; }

.fa-fly:before {
  content: "\\f417"; }

.fa-folder:before {
  content: "\\f07b"; }

.fa-folder-minus:before {
  content: "\\f65d"; }

.fa-folder-open:before {
  content: "\\f07c"; }

.fa-folder-plus:before {
  content: "\\f65e"; }

.fa-font:before {
  content: "\\f031"; }

.fa-font-awesome:before {
  content: "\\f2b4"; }

.fa-font-awesome-alt:before {
  content: "\\f35c"; }

.fa-font-awesome-flag:before {
  content: "\\f425"; }

.fa-font-awesome-logo-full:before {
  content: "\\f4e6"; }

.fa-fonticons:before {
  content: "\\f280"; }

.fa-fonticons-fi:before {
  content: "\\f3a2"; }

.fa-football-ball:before {
  content: "\\f44e"; }

.fa-fort-awesome:before {
  content: "\\f286"; }

.fa-fort-awesome-alt:before {
  content: "\\f3a3"; }

.fa-forumbee:before {
  content: "\\f211"; }

.fa-forward:before {
  content: "\\f04e"; }

.fa-foursquare:before {
  content: "\\f180"; }

.fa-free-code-camp:before {
  content: "\\f2c5"; }

.fa-freebsd:before {
  content: "\\f3a4"; }

.fa-frog:before {
  content: "\\f52e"; }

.fa-frown:before {
  content: "\\f119"; }

.fa-frown-open:before {
  content: "\\f57a"; }

.fa-fulcrum:before {
  content: "\\f50b"; }

.fa-funnel-dollar:before {
  content: "\\f662"; }

.fa-futbol:before {
  content: "\\f1e3"; }

.fa-galactic-republic:before {
  content: "\\f50c"; }

.fa-galactic-senate:before {
  content: "\\f50d"; }

.fa-gamepad:before {
  content: "\\f11b"; }

.fa-gas-pump:before {
  content: "\\f52f"; }

.fa-gavel:before {
  content: "\\f0e3"; }

.fa-gem:before {
  content: "\\f3a5"; }

.fa-genderless:before {
  content: "\\f22d"; }

.fa-get-pocket:before {
  content: "\\f265"; }

.fa-gg:before {
  content: "\\f260"; }

.fa-gg-circle:before {
  content: "\\f261"; }

.fa-ghost:before {
  content: "\\f6e2"; }

.fa-gift:before {
  content: "\\f06b"; }

.fa-gifts:before {
  content: "\\f79c"; }

.fa-git:before {
  content: "\\f1d3"; }

.fa-git-alt:before {
  content: "\\f841"; }

.fa-git-square:before {
  content: "\\f1d2"; }

.fa-github:before {
  content: "\\f09b"; }

.fa-github-alt:before {
  content: "\\f113"; }

.fa-github-square:before {
  content: "\\f092"; }

.fa-gitkraken:before {
  content: "\\f3a6"; }

.fa-gitlab:before {
  content: "\\f296"; }

.fa-gitter:before {
  content: "\\f426"; }

.fa-glass-cheers:before {
  content: "\\f79f"; }

.fa-glass-martini:before {
  content: "\\f000"; }

.fa-glass-martini-alt:before {
  content: "\\f57b"; }

.fa-glass-whiskey:before {
  content: "\\f7a0"; }

.fa-glasses:before {
  content: "\\f530"; }

.fa-glide:before {
  content: "\\f2a5"; }

.fa-glide-g:before {
  content: "\\f2a6"; }

.fa-globe:before {
  content: "\\f0ac"; }

.fa-globe-africa:before {
  content: "\\f57c"; }

.fa-globe-americas:before {
  content: "\\f57d"; }

.fa-globe-asia:before {
  content: "\\f57e"; }

.fa-globe-europe:before {
  content: "\\f7a2"; }

.fa-gofore:before {
  content: "\\f3a7"; }

.fa-golf-ball:before {
  content: "\\f450"; }

.fa-goodreads:before {
  content: "\\f3a8"; }

.fa-goodreads-g:before {
  content: "\\f3a9"; }

.fa-google:before {
  content: "\\f1a0"; }

.fa-google-drive:before {
  content: "\\f3aa"; }

.fa-google-play:before {
  content: "\\f3ab"; }

.fa-google-plus:before {
  content: "\\f2b3"; }

.fa-google-plus-g:before {
  content: "\\f0d5"; }

.fa-google-plus-square:before {
  content: "\\f0d4"; }

.fa-google-wallet:before {
  content: "\\f1ee"; }

.fa-gopuram:before {
  content: "\\f664"; }

.fa-graduation-cap:before {
  content: "\\f19d"; }

.fa-gratipay:before {
  content: "\\f184"; }

.fa-grav:before {
  content: "\\f2d6"; }

.fa-greater-than:before {
  content: "\\f531"; }

.fa-greater-than-equal:before {
  content: "\\f532"; }

.fa-grimace:before {
  content: "\\f57f"; }

.fa-grin:before {
  content: "\\f580"; }

.fa-grin-alt:before {
  content: "\\f581"; }

.fa-grin-beam:before {
  content: "\\f582"; }

.fa-grin-beam-sweat:before {
  content: "\\f583"; }

.fa-grin-hearts:before {
  content: "\\f584"; }

.fa-grin-squint:before {
  content: "\\f585"; }

.fa-grin-squint-tears:before {
  content: "\\f586"; }

.fa-grin-stars:before {
  content: "\\f587"; }

.fa-grin-tears:before {
  content: "\\f588"; }

.fa-grin-tongue:before {
  content: "\\f589"; }

.fa-grin-tongue-squint:before {
  content: "\\f58a"; }

.fa-grin-tongue-wink:before {
  content: "\\f58b"; }

.fa-grin-wink:before {
  content: "\\f58c"; }

.fa-grip-horizontal:before {
  content: "\\f58d"; }

.fa-grip-lines:before {
  content: "\\f7a4"; }

.fa-grip-lines-vertical:before {
  content: "\\f7a5"; }

.fa-grip-vertical:before {
  content: "\\f58e"; }

.fa-gripfire:before {
  content: "\\f3ac"; }

.fa-grunt:before {
  content: "\\f3ad"; }

.fa-guitar:before {
  content: "\\f7a6"; }

.fa-gulp:before {
  content: "\\f3ae"; }

.fa-h-square:before {
  content: "\\f0fd"; }

.fa-hacker-news:before {
  content: "\\f1d4"; }

.fa-hacker-news-square:before {
  content: "\\f3af"; }

.fa-hackerrank:before {
  content: "\\f5f7"; }

.fa-hamburger:before {
  content: "\\f805"; }

.fa-hammer:before {
  content: "\\f6e3"; }

.fa-hamsa:before {
  content: "\\f665"; }

.fa-hand-holding:before {
  content: "\\f4bd"; }

.fa-hand-holding-heart:before {
  content: "\\f4be"; }

.fa-hand-holding-usd:before {
  content: "\\f4c0"; }

.fa-hand-lizard:before {
  content: "\\f258"; }

.fa-hand-middle-finger:before {
  content: "\\f806"; }

.fa-hand-paper:before {
  content: "\\f256"; }

.fa-hand-peace:before {
  content: "\\f25b"; }

.fa-hand-point-down:before {
  content: "\\f0a7"; }

.fa-hand-point-left:before {
  content: "\\f0a5"; }

.fa-hand-point-right:before {
  content: "\\f0a4"; }

.fa-hand-point-up:before {
  content: "\\f0a6"; }

.fa-hand-pointer:before {
  content: "\\f25a"; }

.fa-hand-rock:before {
  content: "\\f255"; }

.fa-hand-scissors:before {
  content: "\\f257"; }

.fa-hand-spock:before {
  content: "\\f259"; }

.fa-hands:before {
  content: "\\f4c2"; }

.fa-hands-helping:before {
  content: "\\f4c4"; }

.fa-handshake:before {
  content: "\\f2b5"; }

.fa-hanukiah:before {
  content: "\\f6e6"; }

.fa-hard-hat:before {
  content: "\\f807"; }

.fa-hashtag:before {
  content: "\\f292"; }

.fa-hat-cowboy:before {
  content: "\\f8c0"; }

.fa-hat-cowboy-side:before {
  content: "\\f8c1"; }

.fa-hat-wizard:before {
  content: "\\f6e8"; }

.fa-haykal:before {
  content: "\\f666"; }

.fa-hdd:before {
  content: "\\f0a0"; }

.fa-heading:before {
  content: "\\f1dc"; }

.fa-headphones:before {
  content: "\\f025"; }

.fa-headphones-alt:before {
  content: "\\f58f"; }

.fa-headset:before {
  content: "\\f590"; }

.fa-heart:before {
  content: "\\f004"; }

.fa-heart-broken:before {
  content: "\\f7a9"; }

.fa-heartbeat:before {
  content: "\\f21e"; }

.fa-helicopter:before {
  content: "\\f533"; }

.fa-highlighter:before {
  content: "\\f591"; }

.fa-hiking:before {
  content: "\\f6ec"; }

.fa-hippo:before {
  content: "\\f6ed"; }

.fa-hips:before {
  content: "\\f452"; }

.fa-hire-a-helper:before {
  content: "\\f3b0"; }

.fa-history:before {
  content: "\\f1da"; }

.fa-hockey-puck:before {
  content: "\\f453"; }

.fa-holly-berry:before {
  content: "\\f7aa"; }

.fa-home:before {
  content: "\\f015"; }

.fa-hooli:before {
  content: "\\f427"; }

.fa-hornbill:before {
  content: "\\f592"; }

.fa-horse:before {
  content: "\\f6f0"; }

.fa-horse-head:before {
  content: "\\f7ab"; }

.fa-hospital:before {
  content: "\\f0f8"; }

.fa-hospital-alt:before {
  content: "\\f47d"; }

.fa-hospital-symbol:before {
  content: "\\f47e"; }

.fa-hot-tub:before {
  content: "\\f593"; }

.fa-hotdog:before {
  content: "\\f80f"; }

.fa-hotel:before {
  content: "\\f594"; }

.fa-hotjar:before {
  content: "\\f3b1"; }

.fa-hourglass:before {
  content: "\\f254"; }

.fa-hourglass-end:before {
  content: "\\f253"; }

.fa-hourglass-half:before {
  content: "\\f252"; }

.fa-hourglass-start:before {
  content: "\\f251"; }

.fa-house-damage:before {
  content: "\\f6f1"; }

.fa-houzz:before {
  content: "\\f27c"; }

.fa-hryvnia:before {
  content: "\\f6f2"; }

.fa-html5:before {
  content: "\\f13b"; }

.fa-hubspot:before {
  content: "\\f3b2"; }

.fa-i-cursor:before {
  content: "\\f246"; }

.fa-ice-cream:before {
  content: "\\f810"; }

.fa-icicles:before {
  content: "\\f7ad"; }

.fa-icons:before {
  content: "\\f86d"; }

.fa-id-badge:before {
  content: "\\f2c1"; }

.fa-id-card:before {
  content: "\\f2c2"; }

.fa-id-card-alt:before {
  content: "\\f47f"; }

.fa-igloo:before {
  content: "\\f7ae"; }

.fa-image:before {
  content: "\\f03e"; }

.fa-images:before {
  content: "\\f302"; }

.fa-imdb:before {
  content: "\\f2d8"; }

.fa-inbox:before {
  content: "\\f01c"; }

.fa-indent:before {
  content: "\\f03c"; }

.fa-industry:before {
  content: "\\f275"; }

.fa-infinity:before {
  content: "\\f534"; }

.fa-info:before {
  content: "\\f129"; }

.fa-info-circle:before {
  content: "\\f05a"; }

.fa-instagram:before {
  content: "\\f16d"; }

.fa-intercom:before {
  content: "\\f7af"; }

.fa-internet-explorer:before {
  content: "\\f26b"; }

.fa-invision:before {
  content: "\\f7b0"; }

.fa-ioxhost:before {
  content: "\\f208"; }

.fa-italic:before {
  content: "\\f033"; }

.fa-itch-io:before {
  content: "\\f83a"; }

.fa-itunes:before {
  content: "\\f3b4"; }

.fa-itunes-note:before {
  content: "\\f3b5"; }

.fa-java:before {
  content: "\\f4e4"; }

.fa-jedi:before {
  content: "\\f669"; }

.fa-jedi-order:before {
  content: "\\f50e"; }

.fa-jenkins:before {
  content: "\\f3b6"; }

.fa-jira:before {
  content: "\\f7b1"; }

.fa-joget:before {
  content: "\\f3b7"; }

.fa-joint:before {
  content: "\\f595"; }

.fa-joomla:before {
  content: "\\f1aa"; }

.fa-journal-whills:before {
  content: "\\f66a"; }

.fa-js:before {
  content: "\\f3b8"; }

.fa-js-square:before {
  content: "\\f3b9"; }

.fa-jsfiddle:before {
  content: "\\f1cc"; }

.fa-kaaba:before {
  content: "\\f66b"; }

.fa-kaggle:before {
  content: "\\f5fa"; }

.fa-key:before {
  content: "\\f084"; }

.fa-keybase:before {
  content: "\\f4f5"; }

.fa-keyboard:before {
  content: "\\f11c"; }

.fa-keycdn:before {
  content: "\\f3ba"; }

.fa-khanda:before {
  content: "\\f66d"; }

.fa-kickstarter:before {
  content: "\\f3bb"; }

.fa-kickstarter-k:before {
  content: "\\f3bc"; }

.fa-kiss:before {
  content: "\\f596"; }

.fa-kiss-beam:before {
  content: "\\f597"; }

.fa-kiss-wink-heart:before {
  content: "\\f598"; }

.fa-kiwi-bird:before {
  content: "\\f535"; }

.fa-korvue:before {
  content: "\\f42f"; }

.fa-landmark:before {
  content: "\\f66f"; }

.fa-language:before {
  content: "\\f1ab"; }

.fa-laptop:before {
  content: "\\f109"; }

.fa-laptop-code:before {
  content: "\\f5fc"; }

.fa-laptop-medical:before {
  content: "\\f812"; }

.fa-laravel:before {
  content: "\\f3bd"; }

.fa-lastfm:before {
  content: "\\f202"; }

.fa-lastfm-square:before {
  content: "\\f203"; }

.fa-laugh:before {
  content: "\\f599"; }

.fa-laugh-beam:before {
  content: "\\f59a"; }

.fa-laugh-squint:before {
  content: "\\f59b"; }

.fa-laugh-wink:before {
  content: "\\f59c"; }

.fa-layer-group:before {
  content: "\\f5fd"; }

.fa-leaf:before {
  content: "\\f06c"; }

.fa-leanpub:before {
  content: "\\f212"; }

.fa-lemon:before {
  content: "\\f094"; }

.fa-less:before {
  content: "\\f41d"; }

.fa-less-than:before {
  content: "\\f536"; }

.fa-less-than-equal:before {
  content: "\\f537"; }

.fa-level-down-alt:before {
  content: "\\f3be"; }

.fa-level-up-alt:before {
  content: "\\f3bf"; }

.fa-life-ring:before {
  content: "\\f1cd"; }

.fa-lightbulb:before {
  content: "\\f0eb"; }

.fa-line:before {
  content: "\\f3c0"; }

.fa-link:before {
  content: "\\f0c1"; }

.fa-linkedin:before {
  content: "\\f08c"; }

.fa-linkedin-in:before {
  content: "\\f0e1"; }

.fa-linode:before {
  content: "\\f2b8"; }

.fa-linux:before {
  content: "\\f17c"; }

.fa-lira-sign:before {
  content: "\\f195"; }

.fa-list:before {
  content: "\\f03a"; }

.fa-list-alt:before {
  content: "\\f022"; }

.fa-list-ol:before {
  content: "\\f0cb"; }

.fa-list-ul:before {
  content: "\\f0ca"; }

.fa-location-arrow:before {
  content: "\\f124"; }

.fa-lock:before {
  content: "\\f023"; }

.fa-lock-open:before {
  content: "\\f3c1"; }

.fa-long-arrow-alt-down:before {
  content: "\\f309"; }

.fa-long-arrow-alt-left:before {
  content: "\\f30a"; }

.fa-long-arrow-alt-right:before {
  content: "\\f30b"; }

.fa-long-arrow-alt-up:before {
  content: "\\f30c"; }

.fa-low-vision:before {
  content: "\\f2a8"; }

.fa-luggage-cart:before {
  content: "\\f59d"; }

.fa-lyft:before {
  content: "\\f3c3"; }

.fa-magento:before {
  content: "\\f3c4"; }

.fa-magic:before {
  content: "\\f0d0"; }

.fa-magnet:before {
  content: "\\f076"; }

.fa-mail-bulk:before {
  content: "\\f674"; }

.fa-mailchimp:before {
  content: "\\f59e"; }

.fa-male:before {
  content: "\\f183"; }

.fa-mandalorian:before {
  content: "\\f50f"; }

.fa-map:before {
  content: "\\f279"; }

.fa-map-marked:before {
  content: "\\f59f"; }

.fa-map-marked-alt:before {
  content: "\\f5a0"; }

.fa-map-marker:before {
  content: "\\f041"; }

.fa-map-marker-alt:before {
  content: "\\f3c5"; }

.fa-map-pin:before {
  content: "\\f276"; }

.fa-map-signs:before {
  content: "\\f277"; }

.fa-markdown:before {
  content: "\\f60f"; }

.fa-marker:before {
  content: "\\f5a1"; }

.fa-mars:before {
  content: "\\f222"; }

.fa-mars-double:before {
  content: "\\f227"; }

.fa-mars-stroke:before {
  content: "\\f229"; }

.fa-mars-stroke-h:before {
  content: "\\f22b"; }

.fa-mars-stroke-v:before {
  content: "\\f22a"; }

.fa-mask:before {
  content: "\\f6fa"; }

.fa-mastodon:before {
  content: "\\f4f6"; }

.fa-maxcdn:before {
  content: "\\f136"; }

.fa-mdb:before {
  content: "\\f8ca"; }

.fa-medal:before {
  content: "\\f5a2"; }

.fa-medapps:before {
  content: "\\f3c6"; }

.fa-medium:before {
  content: "\\f23a"; }

.fa-medium-m:before {
  content: "\\f3c7"; }

.fa-medkit:before {
  content: "\\f0fa"; }

.fa-medrt:before {
  content: "\\f3c8"; }

.fa-meetup:before {
  content: "\\f2e0"; }

.fa-megaport:before {
  content: "\\f5a3"; }

.fa-meh:before {
  content: "\\f11a"; }

.fa-meh-blank:before {
  content: "\\f5a4"; }

.fa-meh-rolling-eyes:before {
  content: "\\f5a5"; }

.fa-memory:before {
  content: "\\f538"; }

.fa-mendeley:before {
  content: "\\f7b3"; }

.fa-menorah:before {
  content: "\\f676"; }

.fa-mercury:before {
  content: "\\f223"; }

.fa-meteor:before {
  content: "\\f753"; }

.fa-microchip:before {
  content: "\\f2db"; }

.fa-microphone:before {
  content: "\\f130"; }

.fa-microphone-alt:before {
  content: "\\f3c9"; }

.fa-microphone-alt-slash:before {
  content: "\\f539"; }

.fa-microphone-slash:before {
  content: "\\f131"; }

.fa-microscope:before {
  content: "\\f610"; }

.fa-microsoft:before {
  content: "\\f3ca"; }

.fa-minus:before {
  content: "\\f068"; }

.fa-minus-circle:before {
  content: "\\f056"; }

.fa-minus-square:before {
  content: "\\f146"; }

.fa-mitten:before {
  content: "\\f7b5"; }

.fa-mix:before {
  content: "\\f3cb"; }

.fa-mixcloud:before {
  content: "\\f289"; }

.fa-mizuni:before {
  content: "\\f3cc"; }

.fa-mobile:before {
  content: "\\f10b"; }

.fa-mobile-alt:before {
  content: "\\f3cd"; }

.fa-modx:before {
  content: "\\f285"; }

.fa-monero:before {
  content: "\\f3d0"; }

.fa-money-bill:before {
  content: "\\f0d6"; }

.fa-money-bill-alt:before {
  content: "\\f3d1"; }

.fa-money-bill-wave:before {
  content: "\\f53a"; }

.fa-money-bill-wave-alt:before {
  content: "\\f53b"; }

.fa-money-check:before {
  content: "\\f53c"; }

.fa-money-check-alt:before {
  content: "\\f53d"; }

.fa-monument:before {
  content: "\\f5a6"; }

.fa-moon:before {
  content: "\\f186"; }

.fa-mortar-pestle:before {
  content: "\\f5a7"; }

.fa-mosque:before {
  content: "\\f678"; }

.fa-motorcycle:before {
  content: "\\f21c"; }

.fa-mountain:before {
  content: "\\f6fc"; }

.fa-mouse:before {
  content: "\\f8cc"; }

.fa-mouse-pointer:before {
  content: "\\f245"; }

.fa-mug-hot:before {
  content: "\\f7b6"; }

.fa-music:before {
  content: "\\f001"; }

.fa-napster:before {
  content: "\\f3d2"; }

.fa-neos:before {
  content: "\\f612"; }

.fa-network-wired:before {
  content: "\\f6ff"; }

.fa-neuter:before {
  content: "\\f22c"; }

.fa-newspaper:before {
  content: "\\f1ea"; }

.fa-nimblr:before {
  content: "\\f5a8"; }

.fa-node:before {
  content: "\\f419"; }

.fa-node-js:before {
  content: "\\f3d3"; }

.fa-not-equal:before {
  content: "\\f53e"; }

.fa-notes-medical:before {
  content: "\\f481"; }

.fa-npm:before {
  content: "\\f3d4"; }

.fa-ns8:before {
  content: "\\f3d5"; }

.fa-nutritionix:before {
  content: "\\f3d6"; }

.fa-object-group:before {
  content: "\\f247"; }

.fa-object-ungroup:before {
  content: "\\f248"; }

.fa-odnoklassniki:before {
  content: "\\f263"; }

.fa-odnoklassniki-square:before {
  content: "\\f264"; }

.fa-oil-can:before {
  content: "\\f613"; }

.fa-old-republic:before {
  content: "\\f510"; }

.fa-om:before {
  content: "\\f679"; }

.fa-opencart:before {
  content: "\\f23d"; }

.fa-openid:before {
  content: "\\f19b"; }

.fa-opera:before {
  content: "\\f26a"; }

.fa-optin-monster:before {
  content: "\\f23c"; }

.fa-orcid:before {
  content: "\\f8d2"; }

.fa-osi:before {
  content: "\\f41a"; }

.fa-otter:before {
  content: "\\f700"; }

.fa-outdent:before {
  content: "\\f03b"; }

.fa-page4:before {
  content: "\\f3d7"; }

.fa-pagelines:before {
  content: "\\f18c"; }

.fa-pager:before {
  content: "\\f815"; }

.fa-paint-brush:before {
  content: "\\f1fc"; }

.fa-paint-roller:before {
  content: "\\f5aa"; }

.fa-palette:before {
  content: "\\f53f"; }

.fa-palfed:before {
  content: "\\f3d8"; }

.fa-pallet:before {
  content: "\\f482"; }

.fa-paper-plane:before {
  content: "\\f1d8"; }

.fa-paperclip:before {
  content: "\\f0c6"; }

.fa-parachute-box:before {
  content: "\\f4cd"; }

.fa-paragraph:before {
  content: "\\f1dd"; }

.fa-parking:before {
  content: "\\f540"; }

.fa-passport:before {
  content: "\\f5ab"; }

.fa-pastafarianism:before {
  content: "\\f67b"; }

.fa-paste:before {
  content: "\\f0ea"; }

.fa-patreon:before {
  content: "\\f3d9"; }

.fa-pause:before {
  content: "\\f04c"; }

.fa-pause-circle:before {
  content: "\\f28b"; }

.fa-paw:before {
  content: "\\f1b0"; }

.fa-paypal:before {
  content: "\\f1ed"; }

.fa-peace:before {
  content: "\\f67c"; }

.fa-pen:before {
  content: "\\f304"; }

.fa-pen-alt:before {
  content: "\\f305"; }

.fa-pen-fancy:before {
  content: "\\f5ac"; }

.fa-pen-nib:before {
  content: "\\f5ad"; }

.fa-pen-square:before {
  content: "\\f14b"; }

.fa-pencil-alt:before {
  content: "\\f303"; }

.fa-pencil-ruler:before {
  content: "\\f5ae"; }

.fa-penny-arcade:before {
  content: "\\f704"; }

.fa-people-carry:before {
  content: "\\f4ce"; }

.fa-pepper-hot:before {
  content: "\\f816"; }

.fa-percent:before {
  content: "\\f295"; }

.fa-percentage:before {
  content: "\\f541"; }

.fa-periscope:before {
  content: "\\f3da"; }

.fa-person-booth:before {
  content: "\\f756"; }

.fa-phabricator:before {
  content: "\\f3db"; }

.fa-phoenix-framework:before {
  content: "\\f3dc"; }

.fa-phoenix-squadron:before {
  content: "\\f511"; }

.fa-phone:before {
  content: "\\f095"; }

.fa-phone-alt:before {
  content: "\\f879"; }

.fa-phone-slash:before {
  content: "\\f3dd"; }

.fa-phone-square:before {
  content: "\\f098"; }

.fa-phone-square-alt:before {
  content: "\\f87b"; }

.fa-phone-volume:before {
  content: "\\f2a0"; }

.fa-photo-video:before {
  content: "\\f87c"; }

.fa-php:before {
  content: "\\f457"; }

.fa-pied-piper:before {
  content: "\\f2ae"; }

.fa-pied-piper-alt:before {
  content: "\\f1a8"; }

.fa-pied-piper-hat:before {
  content: "\\f4e5"; }

.fa-pied-piper-pp:before {
  content: "\\f1a7"; }

.fa-piggy-bank:before {
  content: "\\f4d3"; }

.fa-pills:before {
  content: "\\f484"; }

.fa-pinterest:before {
  content: "\\f0d2"; }

.fa-pinterest-p:before {
  content: "\\f231"; }

.fa-pinterest-square:before {
  content: "\\f0d3"; }

.fa-pizza-slice:before {
  content: "\\f818"; }

.fa-place-of-worship:before {
  content: "\\f67f"; }

.fa-plane:before {
  content: "\\f072"; }

.fa-plane-arrival:before {
  content: "\\f5af"; }

.fa-plane-departure:before {
  content: "\\f5b0"; }

.fa-play:before {
  content: "\\f04b"; }

.fa-play-circle:before {
  content: "\\f144"; }

.fa-playstation:before {
  content: "\\f3df"; }

.fa-plug:before {
  content: "\\f1e6"; }

.fa-plus:before {
  content: "\\f067"; }

.fa-plus-circle:before {
  content: "\\f055"; }

.fa-plus-square:before {
  content: "\\f0fe"; }

.fa-podcast:before {
  content: "\\f2ce"; }

.fa-poll:before {
  content: "\\f681"; }

.fa-poll-h:before {
  content: "\\f682"; }

.fa-poo:before {
  content: "\\f2fe"; }

.fa-poo-storm:before {
  content: "\\f75a"; }

.fa-poop:before {
  content: "\\f619"; }

.fa-portrait:before {
  content: "\\f3e0"; }

.fa-pound-sign:before {
  content: "\\f154"; }

.fa-power-off:before {
  content: "\\f011"; }

.fa-pray:before {
  content: "\\f683"; }

.fa-praying-hands:before {
  content: "\\f684"; }

.fa-prescription:before {
  content: "\\f5b1"; }

.fa-prescription-bottle:before {
  content: "\\f485"; }

.fa-prescription-bottle-alt:before {
  content: "\\f486"; }

.fa-print:before {
  content: "\\f02f"; }

.fa-procedures:before {
  content: "\\f487"; }

.fa-product-hunt:before {
  content: "\\f288"; }

.fa-project-diagram:before {
  content: "\\f542"; }

.fa-pushed:before {
  content: "\\f3e1"; }

.fa-puzzle-piece:before {
  content: "\\f12e"; }

.fa-python:before {
  content: "\\f3e2"; }

.fa-qq:before {
  content: "\\f1d6"; }

.fa-qrcode:before {
  content: "\\f029"; }

.fa-question:before {
  content: "\\f128"; }

.fa-question-circle:before {
  content: "\\f059"; }

.fa-quidditch:before {
  content: "\\f458"; }

.fa-quinscape:before {
  content: "\\f459"; }

.fa-quora:before {
  content: "\\f2c4"; }

.fa-quote-left:before {
  content: "\\f10d"; }

.fa-quote-right:before {
  content: "\\f10e"; }

.fa-quran:before {
  content: "\\f687"; }

.fa-r-project:before {
  content: "\\f4f7"; }

.fa-radiation:before {
  content: "\\f7b9"; }

.fa-radiation-alt:before {
  content: "\\f7ba"; }

.fa-rainbow:before {
  content: "\\f75b"; }

.fa-random:before {
  content: "\\f074"; }

.fa-raspberry-pi:before {
  content: "\\f7bb"; }

.fa-ravelry:before {
  content: "\\f2d9"; }

.fa-react:before {
  content: "\\f41b"; }

.fa-reacteurope:before {
  content: "\\f75d"; }

.fa-readme:before {
  content: "\\f4d5"; }

.fa-rebel:before {
  content: "\\f1d0"; }

.fa-receipt:before {
  content: "\\f543"; }

.fa-record-vinyl:before {
  content: "\\f8d9"; }

.fa-recycle:before {
  content: "\\f1b8"; }

.fa-red-river:before {
  content: "\\f3e3"; }

.fa-reddit:before {
  content: "\\f1a1"; }

.fa-reddit-alien:before {
  content: "\\f281"; }

.fa-reddit-square:before {
  content: "\\f1a2"; }

.fa-redhat:before {
  content: "\\f7bc"; }

.fa-redo:before {
  content: "\\f01e"; }

.fa-redo-alt:before {
  content: "\\f2f9"; }

.fa-registered:before {
  content: "\\f25d"; }

.fa-remove-format:before {
  content: "\\f87d"; }

.fa-renren:before {
  content: "\\f18b"; }

.fa-reply:before {
  content: "\\f3e5"; }

.fa-reply-all:before {
  content: "\\f122"; }

.fa-replyd:before {
  content: "\\f3e6"; }

.fa-republican:before {
  content: "\\f75e"; }

.fa-researchgate:before {
  content: "\\f4f8"; }

.fa-resolving:before {
  content: "\\f3e7"; }

.fa-restroom:before {
  content: "\\f7bd"; }

.fa-retweet:before {
  content: "\\f079"; }

.fa-rev:before {
  content: "\\f5b2"; }

.fa-ribbon:before {
  content: "\\f4d6"; }

.fa-ring:before {
  content: "\\f70b"; }

.fa-road:before {
  content: "\\f018"; }

.fa-robot:before {
  content: "\\f544"; }

.fa-rocket:before {
  content: "\\f135"; }

.fa-rocketchat:before {
  content: "\\f3e8"; }

.fa-rockrms:before {
  content: "\\f3e9"; }

.fa-route:before {
  content: "\\f4d7"; }

.fa-rss:before {
  content: "\\f09e"; }

.fa-rss-square:before {
  content: "\\f143"; }

.fa-ruble-sign:before {
  content: "\\f158"; }

.fa-ruler:before {
  content: "\\f545"; }

.fa-ruler-combined:before {
  content: "\\f546"; }

.fa-ruler-horizontal:before {
  content: "\\f547"; }

.fa-ruler-vertical:before {
  content: "\\f548"; }

.fa-running:before {
  content: "\\f70c"; }

.fa-rupee-sign:before {
  content: "\\f156"; }

.fa-sad-cry:before {
  content: "\\f5b3"; }

.fa-sad-tear:before {
  content: "\\f5b4"; }

.fa-safari:before {
  content: "\\f267"; }

.fa-salesforce:before {
  content: "\\f83b"; }

.fa-sass:before {
  content: "\\f41e"; }

.fa-satellite:before {
  content: "\\f7bf"; }

.fa-satellite-dish:before {
  content: "\\f7c0"; }

.fa-save:before {
  content: "\\f0c7"; }

.fa-schlix:before {
  content: "\\f3ea"; }

.fa-school:before {
  content: "\\f549"; }

.fa-screwdriver:before {
  content: "\\f54a"; }

.fa-scribd:before {
  content: "\\f28a"; }

.fa-scroll:before {
  content: "\\f70e"; }

.fa-sd-card:before {
  content: "\\f7c2"; }

.fa-search:before {
  content: "\\f002"; }

.fa-search-dollar:before {
  content: "\\f688"; }

.fa-search-location:before {
  content: "\\f689"; }

.fa-search-minus:before {
  content: "\\f010"; }

.fa-search-plus:before {
  content: "\\f00e"; }

.fa-searchengin:before {
  content: "\\f3eb"; }

.fa-seedling:before {
  content: "\\f4d8"; }

.fa-sellcast:before {
  content: "\\f2da"; }

.fa-sellsy:before {
  content: "\\f213"; }

.fa-server:before {
  content: "\\f233"; }

.fa-servicestack:before {
  content: "\\f3ec"; }

.fa-shapes:before {
  content: "\\f61f"; }

.fa-share:before {
  content: "\\f064"; }

.fa-share-alt:before {
  content: "\\f1e0"; }

.fa-share-alt-square:before {
  content: "\\f1e1"; }

.fa-share-square:before {
  content: "\\f14d"; }

.fa-shekel-sign:before {
  content: "\\f20b"; }

.fa-shield-alt:before {
  content: "\\f3ed"; }

.fa-ship:before {
  content: "\\f21a"; }

.fa-shipping-fast:before {
  content: "\\f48b"; }

.fa-shirtsinbulk:before {
  content: "\\f214"; }

.fa-shoe-prints:before {
  content: "\\f54b"; }

.fa-shopping-bag:before {
  content: "\\f290"; }

.fa-shopping-basket:before {
  content: "\\f291"; }

.fa-shopping-cart:before {
  content: "\\f07a"; }

.fa-shopware:before {
  content: "\\f5b5"; }

.fa-shower:before {
  content: "\\f2cc"; }

.fa-shuttle-van:before {
  content: "\\f5b6"; }

.fa-sign:before {
  content: "\\f4d9"; }

.fa-sign-in-alt:before {
  content: "\\f2f6"; }

.fa-sign-language:before {
  content: "\\f2a7"; }

.fa-sign-out-alt:before {
  content: "\\f2f5"; }

.fa-signal:before {
  content: "\\f012"; }

.fa-signature:before {
  content: "\\f5b7"; }

.fa-sim-card:before {
  content: "\\f7c4"; }

.fa-simplybuilt:before {
  content: "\\f215"; }

.fa-sistrix:before {
  content: "\\f3ee"; }

.fa-sitemap:before {
  content: "\\f0e8"; }

.fa-sith:before {
  content: "\\f512"; }

.fa-skating:before {
  content: "\\f7c5"; }

.fa-sketch:before {
  content: "\\f7c6"; }

.fa-skiing:before {
  content: "\\f7c9"; }

.fa-skiing-nordic:before {
  content: "\\f7ca"; }

.fa-skull:before {
  content: "\\f54c"; }

.fa-skull-crossbones:before {
  content: "\\f714"; }

.fa-skyatlas:before {
  content: "\\f216"; }

.fa-skype:before {
  content: "\\f17e"; }

.fa-slack:before {
  content: "\\f198"; }

.fa-slack-hash:before {
  content: "\\f3ef"; }

.fa-slash:before {
  content: "\\f715"; }

.fa-sleigh:before {
  content: "\\f7cc"; }

.fa-sliders-h:before {
  content: "\\f1de"; }

.fa-slideshare:before {
  content: "\\f1e7"; }

.fa-smile:before {
  content: "\\f118"; }

.fa-smile-beam:before {
  content: "\\f5b8"; }

.fa-smile-wink:before {
  content: "\\f4da"; }

.fa-smog:before {
  content: "\\f75f"; }

.fa-smoking:before {
  content: "\\f48d"; }

.fa-smoking-ban:before {
  content: "\\f54d"; }

.fa-sms:before {
  content: "\\f7cd"; }

.fa-snapchat:before {
  content: "\\f2ab"; }

.fa-snapchat-ghost:before {
  content: "\\f2ac"; }

.fa-snapchat-square:before {
  content: "\\f2ad"; }

.fa-snowboarding:before {
  content: "\\f7ce"; }

.fa-snowflake:before {
  content: "\\f2dc"; }

.fa-snowman:before {
  content: "\\f7d0"; }

.fa-snowplow:before {
  content: "\\f7d2"; }

.fa-socks:before {
  content: "\\f696"; }

.fa-solar-panel:before {
  content: "\\f5ba"; }

.fa-sort:before {
  content: "\\f0dc"; }

.fa-sort-alpha-down:before {
  content: "\\f15d"; }

.fa-sort-alpha-down-alt:before {
  content: "\\f881"; }

.fa-sort-alpha-up:before {
  content: "\\f15e"; }

.fa-sort-alpha-up-alt:before {
  content: "\\f882"; }

.fa-sort-amount-down:before {
  content: "\\f160"; }

.fa-sort-amount-down-alt:before {
  content: "\\f884"; }

.fa-sort-amount-up:before {
  content: "\\f161"; }

.fa-sort-amount-up-alt:before {
  content: "\\f885"; }

.fa-sort-down:before {
  content: "\\f0dd"; }

.fa-sort-numeric-down:before {
  content: "\\f162"; }

.fa-sort-numeric-down-alt:before {
  content: "\\f886"; }

.fa-sort-numeric-up:before {
  content: "\\f163"; }

.fa-sort-numeric-up-alt:before {
  content: "\\f887"; }

.fa-sort-up:before {
  content: "\\f0de"; }

.fa-soundcloud:before {
  content: "\\f1be"; }

.fa-sourcetree:before {
  content: "\\f7d3"; }

.fa-spa:before {
  content: "\\f5bb"; }

.fa-space-shuttle:before {
  content: "\\f197"; }

.fa-speakap:before {
  content: "\\f3f3"; }

.fa-speaker-deck:before {
  content: "\\f83c"; }

.fa-spell-check:before {
  content: "\\f891"; }

.fa-spider:before {
  content: "\\f717"; }

.fa-spinner:before {
  content: "\\f110"; }

.fa-splotch:before {
  content: "\\f5bc"; }

.fa-spotify:before {
  content: "\\f1bc"; }

.fa-spray-can:before {
  content: "\\f5bd"; }

.fa-square:before {
  content: "\\f0c8"; }

.fa-square-full:before {
  content: "\\f45c"; }

.fa-square-root-alt:before {
  content: "\\f698"; }

.fa-squarespace:before {
  content: "\\f5be"; }

.fa-stack-exchange:before {
  content: "\\f18d"; }

.fa-stack-overflow:before {
  content: "\\f16c"; }

.fa-stackpath:before {
  content: "\\f842"; }

.fa-stamp:before {
  content: "\\f5bf"; }

.fa-star:before {
  content: "\\f005"; }

.fa-star-and-crescent:before {
  content: "\\f699"; }

.fa-star-half:before {
  content: "\\f089"; }

.fa-star-half-alt:before {
  content: "\\f5c0"; }

.fa-star-of-david:before {
  content: "\\f69a"; }

.fa-star-of-life:before {
  content: "\\f621"; }

.fa-staylinked:before {
  content: "\\f3f5"; }

.fa-steam:before {
  content: "\\f1b6"; }

.fa-steam-square:before {
  content: "\\f1b7"; }

.fa-steam-symbol:before {
  content: "\\f3f6"; }

.fa-step-backward:before {
  content: "\\f048"; }

.fa-step-forward:before {
  content: "\\f051"; }

.fa-stethoscope:before {
  content: "\\f0f1"; }

.fa-sticker-mule:before {
  content: "\\f3f7"; }

.fa-sticky-note:before {
  content: "\\f249"; }

.fa-stop:before {
  content: "\\f04d"; }

.fa-stop-circle:before {
  content: "\\f28d"; }

.fa-stopwatch:before {
  content: "\\f2f2"; }

.fa-store:before {
  content: "\\f54e"; }

.fa-store-alt:before {
  content: "\\f54f"; }

.fa-strava:before {
  content: "\\f428"; }

.fa-stream:before {
  content: "\\f550"; }

.fa-street-view:before {
  content: "\\f21d"; }

.fa-strikethrough:before {
  content: "\\f0cc"; }

.fa-stripe:before {
  content: "\\f429"; }

.fa-stripe-s:before {
  content: "\\f42a"; }

.fa-stroopwafel:before {
  content: "\\f551"; }

.fa-studiovinari:before {
  content: "\\f3f8"; }

.fa-stumbleupon:before {
  content: "\\f1a4"; }

.fa-stumbleupon-circle:before {
  content: "\\f1a3"; }

.fa-subscript:before {
  content: "\\f12c"; }

.fa-subway:before {
  content: "\\f239"; }

.fa-suitcase:before {
  content: "\\f0f2"; }

.fa-suitcase-rolling:before {
  content: "\\f5c1"; }

.fa-sun:before {
  content: "\\f185"; }

.fa-superpowers:before {
  content: "\\f2dd"; }

.fa-superscript:before {
  content: "\\f12b"; }

.fa-supple:before {
  content: "\\f3f9"; }

.fa-surprise:before {
  content: "\\f5c2"; }

.fa-suse:before {
  content: "\\f7d6"; }

.fa-swatchbook:before {
  content: "\\f5c3"; }

.fa-swift:before {
  content: "\\f8e1"; }

.fa-swimmer:before {
  content: "\\f5c4"; }

.fa-swimming-pool:before {
  content: "\\f5c5"; }

.fa-symfony:before {
  content: "\\f83d"; }

.fa-synagogue:before {
  content: "\\f69b"; }

.fa-sync:before {
  content: "\\f021"; }

.fa-sync-alt:before {
  content: "\\f2f1"; }

.fa-syringe:before {
  content: "\\f48e"; }

.fa-table:before {
  content: "\\f0ce"; }

.fa-table-tennis:before {
  content: "\\f45d"; }

.fa-tablet:before {
  content: "\\f10a"; }

.fa-tablet-alt:before {
  content: "\\f3fa"; }

.fa-tablets:before {
  content: "\\f490"; }

.fa-tachometer-alt:before {
  content: "\\f3fd"; }

.fa-tag:before {
  content: "\\f02b"; }

.fa-tags:before {
  content: "\\f02c"; }

.fa-tape:before {
  content: "\\f4db"; }

.fa-tasks:before {
  content: "\\f0ae"; }

.fa-taxi:before {
  content: "\\f1ba"; }

.fa-teamspeak:before {
  content: "\\f4f9"; }

.fa-teeth:before {
  content: "\\f62e"; }

.fa-teeth-open:before {
  content: "\\f62f"; }

.fa-telegram:before {
  content: "\\f2c6"; }

.fa-telegram-plane:before {
  content: "\\f3fe"; }

.fa-temperature-high:before {
  content: "\\f769"; }

.fa-temperature-low:before {
  content: "\\f76b"; }

.fa-tencent-weibo:before {
  content: "\\f1d5"; }

.fa-tenge:before {
  content: "\\f7d7"; }

.fa-terminal:before {
  content: "\\f120"; }

.fa-text-height:before {
  content: "\\f034"; }

.fa-text-width:before {
  content: "\\f035"; }

.fa-th:before {
  content: "\\f00a"; }

.fa-th-large:before {
  content: "\\f009"; }

.fa-th-list:before {
  content: "\\f00b"; }

.fa-the-red-yeti:before {
  content: "\\f69d"; }

.fa-theater-masks:before {
  content: "\\f630"; }

.fa-themeco:before {
  content: "\\f5c6"; }

.fa-themeisle:before {
  content: "\\f2b2"; }

.fa-thermometer:before {
  content: "\\f491"; }

.fa-thermometer-empty:before {
  content: "\\f2cb"; }

.fa-thermometer-full:before {
  content: "\\f2c7"; }

.fa-thermometer-half:before {
  content: "\\f2c9"; }

.fa-thermometer-quarter:before {
  content: "\\f2ca"; }

.fa-thermometer-three-quarters:before {
  content: "\\f2c8"; }

.fa-think-peaks:before {
  content: "\\f731"; }

.fa-thumbs-down:before {
  content: "\\f165"; }

.fa-thumbs-up:before {
  content: "\\f164"; }

.fa-thumbtack:before {
  content: "\\f08d"; }

.fa-ticket-alt:before {
  content: "\\f3ff"; }

.fa-times:before {
  content: "\\f00d"; }

.fa-times-circle:before {
  content: "\\f057"; }

.fa-tint:before {
  content: "\\f043"; }

.fa-tint-slash:before {
  content: "\\f5c7"; }

.fa-tired:before {
  content: "\\f5c8"; }

.fa-toggle-off:before {
  content: "\\f204"; }

.fa-toggle-on:before {
  content: "\\f205"; }

.fa-toilet:before {
  content: "\\f7d8"; }

.fa-toilet-paper:before {
  content: "\\f71e"; }

.fa-toolbox:before {
  content: "\\f552"; }

.fa-tools:before {
  content: "\\f7d9"; }

.fa-tooth:before {
  content: "\\f5c9"; }

.fa-torah:before {
  content: "\\f6a0"; }

.fa-torii-gate:before {
  content: "\\f6a1"; }

.fa-tractor:before {
  content: "\\f722"; }

.fa-trade-federation:before {
  content: "\\f513"; }

.fa-trademark:before {
  content: "\\f25c"; }

.fa-traffic-light:before {
  content: "\\f637"; }

.fa-train:before {
  content: "\\f238"; }

.fa-tram:before {
  content: "\\f7da"; }

.fa-transgender:before {
  content: "\\f224"; }

.fa-transgender-alt:before {
  content: "\\f225"; }

.fa-trash:before {
  content: "\\f1f8"; }

.fa-trash-alt:before {
  content: "\\f2ed"; }

.fa-trash-restore:before {
  content: "\\f829"; }

.fa-trash-restore-alt:before {
  content: "\\f82a"; }

.fa-tree:before {
  content: "\\f1bb"; }

.fa-trello:before {
  content: "\\f181"; }

.fa-tripadvisor:before {
  content: "\\f262"; }

.fa-trophy:before {
  content: "\\f091"; }

.fa-truck:before {
  content: "\\f0d1"; }

.fa-truck-loading:before {
  content: "\\f4de"; }

.fa-truck-monster:before {
  content: "\\f63b"; }

.fa-truck-moving:before {
  content: "\\f4df"; }

.fa-truck-pickup:before {
  content: "\\f63c"; }

.fa-tshirt:before {
  content: "\\f553"; }

.fa-tty:before {
  content: "\\f1e4"; }

.fa-tumblr:before {
  content: "\\f173"; }

.fa-tumblr-square:before {
  content: "\\f174"; }

.fa-tv:before {
  content: "\\f26c"; }

.fa-twitch:before {
  content: "\\f1e8"; }

.fa-twitter:before {
  content: "\\f099"; }

.fa-twitter-square:before {
  content: "\\f081"; }

.fa-typo3:before {
  content: "\\f42b"; }

.fa-uber:before {
  content: "\\f402"; }

.fa-ubuntu:before {
  content: "\\f7df"; }

.fa-uikit:before {
  content: "\\f403"; }

.fa-umbraco:before {
  content: "\\f8e8"; }

.fa-umbrella:before {
  content: "\\f0e9"; }

.fa-umbrella-beach:before {
  content: "\\f5ca"; }

.fa-underline:before {
  content: "\\f0cd"; }

.fa-undo:before {
  content: "\\f0e2"; }

.fa-undo-alt:before {
  content: "\\f2ea"; }

.fa-uniregistry:before {
  content: "\\f404"; }

.fa-universal-access:before {
  content: "\\f29a"; }

.fa-university:before {
  content: "\\f19c"; }

.fa-unlink:before {
  content: "\\f127"; }

.fa-unlock:before {
  content: "\\f09c"; }

.fa-unlock-alt:before {
  content: "\\f13e"; }

.fa-untappd:before {
  content: "\\f405"; }

.fa-upload:before {
  content: "\\f093"; }

.fa-ups:before {
  content: "\\f7e0"; }

.fa-usb:before {
  content: "\\f287"; }

.fa-user:before {
  content: "\\f007"; }

.fa-user-alt:before {
  content: "\\f406"; }

.fa-user-alt-slash:before {
  content: "\\f4fa"; }

.fa-user-astronaut:before {
  content: "\\f4fb"; }

.fa-user-check:before {
  content: "\\f4fc"; }

.fa-user-circle:before {
  content: "\\f2bd"; }

.fa-user-clock:before {
  content: "\\f4fd"; }

.fa-user-cog:before {
  content: "\\f4fe"; }

.fa-user-edit:before {
  content: "\\f4ff"; }

.fa-user-friends:before {
  content: "\\f500"; }

.fa-user-graduate:before {
  content: "\\f501"; }

.fa-user-injured:before {
  content: "\\f728"; }

.fa-user-lock:before {
  content: "\\f502"; }

.fa-user-md:before {
  content: "\\f0f0"; }

.fa-user-minus:before {
  content: "\\f503"; }

.fa-user-ninja:before {
  content: "\\f504"; }

.fa-user-nurse:before {
  content: "\\f82f"; }

.fa-user-plus:before {
  content: "\\f234"; }

.fa-user-secret:before {
  content: "\\f21b"; }

.fa-user-shield:before {
  content: "\\f505"; }

.fa-user-slash:before {
  content: "\\f506"; }

.fa-user-tag:before {
  content: "\\f507"; }

.fa-user-tie:before {
  content: "\\f508"; }

.fa-user-times:before {
  content: "\\f235"; }

.fa-users:before {
  content: "\\f0c0"; }

.fa-users-cog:before {
  content: "\\f509"; }

.fa-usps:before {
  content: "\\f7e1"; }

.fa-ussunnah:before {
  content: "\\f407"; }

.fa-utensil-spoon:before {
  content: "\\f2e5"; }

.fa-utensils:before {
  content: "\\f2e7"; }

.fa-vaadin:before {
  content: "\\f408"; }

.fa-vector-square:before {
  content: "\\f5cb"; }

.fa-venus:before {
  content: "\\f221"; }

.fa-venus-double:before {
  content: "\\f226"; }

.fa-venus-mars:before {
  content: "\\f228"; }

.fa-viacoin:before {
  content: "\\f237"; }

.fa-viadeo:before {
  content: "\\f2a9"; }

.fa-viadeo-square:before {
  content: "\\f2aa"; }

.fa-vial:before {
  content: "\\f492"; }

.fa-vials:before {
  content: "\\f493"; }

.fa-viber:before {
  content: "\\f409"; }

.fa-video:before {
  content: "\\f03d"; }

.fa-video-slash:before {
  content: "\\f4e2"; }

.fa-vihara:before {
  content: "\\f6a7"; }

.fa-vimeo:before {
  content: "\\f40a"; }

.fa-vimeo-square:before {
  content: "\\f194"; }

.fa-vimeo-v:before {
  content: "\\f27d"; }

.fa-vine:before {
  content: "\\f1ca"; }

.fa-vk:before {
  content: "\\f189"; }

.fa-vnv:before {
  content: "\\f40b"; }

.fa-voicemail:before {
  content: "\\f897"; }

.fa-volleyball-ball:before {
  content: "\\f45f"; }

.fa-volume-down:before {
  content: "\\f027"; }

.fa-volume-mute:before {
  content: "\\f6a9"; }

.fa-volume-off:before {
  content: "\\f026"; }

.fa-volume-up:before {
  content: "\\f028"; }

.fa-vote-yea:before {
  content: "\\f772"; }

.fa-vr-cardboard:before {
  content: "\\f729"; }

.fa-vuejs:before {
  content: "\\f41f"; }

.fa-walking:before {
  content: "\\f554"; }

.fa-wallet:before {
  content: "\\f555"; }

.fa-warehouse:before {
  content: "\\f494"; }

.fa-water:before {
  content: "\\f773"; }

.fa-wave-square:before {
  content: "\\f83e"; }

.fa-waze:before {
  content: "\\f83f"; }

.fa-weebly:before {
  content: "\\f5cc"; }

.fa-weibo:before {
  content: "\\f18a"; }

.fa-weight:before {
  content: "\\f496"; }

.fa-weight-hanging:before {
  content: "\\f5cd"; }

.fa-weixin:before {
  content: "\\f1d7"; }

.fa-whatsapp:before {
  content: "\\f232"; }

.fa-whatsapp-square:before {
  content: "\\f40c"; }

.fa-wheelchair:before {
  content: "\\f193"; }

.fa-whmcs:before {
  content: "\\f40d"; }

.fa-wifi:before {
  content: "\\f1eb"; }

.fa-wikipedia-w:before {
  content: "\\f266"; }

.fa-wind:before {
  content: "\\f72e"; }

.fa-window-close:before {
  content: "\\f410"; }

.fa-window-maximize:before {
  content: "\\f2d0"; }

.fa-window-minimize:before {
  content: "\\f2d1"; }

.fa-window-restore:before {
  content: "\\f2d2"; }

.fa-windows:before {
  content: "\\f17a"; }

.fa-wine-bottle:before {
  content: "\\f72f"; }

.fa-wine-glass:before {
  content: "\\f4e3"; }

.fa-wine-glass-alt:before {
  content: "\\f5ce"; }

.fa-wix:before {
  content: "\\f5cf"; }

.fa-wizards-of-the-coast:before {
  content: "\\f730"; }

.fa-wolf-pack-battalion:before {
  content: "\\f514"; }

.fa-won-sign:before {
  content: "\\f159"; }

.fa-wordpress:before {
  content: "\\f19a"; }

.fa-wordpress-simple:before {
  content: "\\f411"; }

.fa-wpbeginner:before {
  content: "\\f297"; }

.fa-wpexplorer:before {
  content: "\\f2de"; }

.fa-wpforms:before {
  content: "\\f298"; }

.fa-wpressr:before {
  content: "\\f3e4"; }

.fa-wrench:before {
  content: "\\f0ad"; }

.fa-x-ray:before {
  content: "\\f497"; }

.fa-xbox:before {
  content: "\\f412"; }

.fa-xing:before {
  content: "\\f168"; }

.fa-xing-square:before {
  content: "\\f169"; }

.fa-y-combinator:before {
  content: "\\f23b"; }

.fa-yahoo:before {
  content: "\\f19e"; }

.fa-yammer:before {
  content: "\\f840"; }

.fa-yandex:before {
  content: "\\f413"; }

.fa-yandex-international:before {
  content: "\\f414"; }

.fa-yarn:before {
  content: "\\f7e3"; }

.fa-yelp:before {
  content: "\\f1e9"; }

.fa-yen-sign:before {
  content: "\\f157"; }

.fa-yin-yang:before {
  content: "\\f6ad"; }

.fa-yoast:before {
  content: "\\f2b1"; }

.fa-youtube:before {
  content: "\\f167"; }

.fa-youtube-square:before {
  content: "\\f431"; }

.fa-zhihu:before {
  content: "\\f63f"; }

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px; }

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto; }

.fab {
  font-family: 'Font Awesome 5 Brands'; }

.far {
  font-family: 'Font Awesome 5 Free';
  font-weight: 400; }
.fa,
.fas {
  font-family: 'Font Awesome 5 Free';
  font-weight: 900; }
`;customElements.define("resume-jf-steps",class extends ce{static get styles(){return[se`
      :host {
        font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
      }
      `,fe,de,be]}static get properties(){return{activeStep:{type:String}}}constructor(){super(),this.activeStep="one"}connectedCallback(){super.connectedCallback()}render(){return O`
        <ul class="steps has-content-centered">
          <li class="steps-segment ${"one"==this.activeStep?"is-active":""}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 1</p>
              <p>Personal Information</p>
            </div>
          </li>
          <li class="steps-segment ${"two"==this.activeStep?"is-active":""}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 2</p>
              <p>Social Media</p>
            </div>
          </li>
          <li class="steps-segment ${"three"==this.activeStep?"is-active":""}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 3</p>
              <p>Professional Experience</p>
            </div>
          </li>
          <li class="steps-segment ${"four"==this.activeStep?"is-active":""}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 4</p>
              <p>Experience</p>
            </div>
          </li>
          <li class="steps-segment ${"five"==this.activeStep?"is-active":""}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 5</p>
              <p>Key Projects</p>
            </div>
          </li>
          <li class="steps-segment ${"six"==this.activeStep?"is-active":""}">
            <span class="steps-marker"></span>
            <div class="steps-content">
              <p class="is-size-4">Step 6</p>
              <p>Education</p>
            </div>
          </li>
        </ul>
    `}});customElements.define("resume-jf-form",class extends ce{static get styles(){return[fe,de,be,se`
      :host {
        font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !important;
      }
      .step-margin {
        margin-bottom: 20px;
      }
      .step-container {
        display: none;
      }
      .submit-btn { 
        display: none;
      }
      .active-step {
        display: block;
      }
      .action-control-container {
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        justify-content: space-between;
      }
      `]}static get properties(){return{socialLinks:{type:Array},professionalExperiences:{type:Array},experiences:{type:Array},keyProjects:{type:Array},education:{type:Array},response:{type:Object},submitted:{type:Boolean},copyPaste:{type:String},activeStep:{type:String}}}constructor(){super(),this.socialLinks=[],this.professionalExperiences=[],this.experiences=[],this.keyProjects=[],this.education=[],this.activeStep="one",this.response={firstName:"",lastName:"",email:"",phoneNumber:"",socialMedia:[],professionalSummary:[],experience:[],keyProjects:[],education:[]},this.submitted=!1}connectedCallback(){super.connectedCallback()}addSocialLinks(){let e=this.socialLinks;e.push(""),this.socialLinks=e,this.requestUpdate("socialLinks")}removeSocialLinks(){let e=this.socialLinks;e.splice(e.length-1,1),this.socialLinks=e,this.requestUpdate("socialLinks")}addProfessionalExperience(){let e=this.professionalExperiences;e.push({skill:"",bolded:""}),this.professionalExperiences=e,this.requestUpdate("professionalExperiences")}removeProfessionalExperience(){let e=this.professionalExperiences;e.splice(e.length-1,1),this.professionalExperiences=e,this.requestUpdate("professionalExperiences")}addExperience(){let e=this.experiences;e.push({jobTitle:"",role:"",duration:"",summaryOfCompany:"",bulletsOfRole:[]}),this.experiences=e,this.requestUpdate("experiences")}removeExperience(){let e=this.experiences;e.splice(e.length-1,1),this.experiences=e,this.requestUpdate("experiences")}addBulletsOfExperience(e){let t=e.target.getAttribute("data-index"),o=this.experiences[t].bulletsOfRole;o.push(""),this.experiences[t].bulletsOfRole=o,this.requestUpdate("experiences")}removeBulletsOfExperience(e){let t=e.target.getAttribute("data-index"),o=this.experiences[t].bulletsOfRole;o.splice(o.length-1,1),this.experiences[t].bulletsOfRole=o,this.requestUpdate("experiences")}addKeyProject(){let e=this.keyProjects;e.push({projectName:"",role:"",bulletsOfRole:[]}),this.keyProjects=e,this.requestUpdate("keyProjects")}removeKeyProject(){let e=this.keyProjects;e.splice(e.length-1,1),this.keyProjects=e,this.requestUpdate("keyProjects")}addBulletsOfKeyProject(e){let t=e.target.getAttribute("data-index"),o=this.keyProjects[t].bulletsOfRole;o.push(""),this.keyProjects[t].bulletsOfRole=o,this.requestUpdate("keyProjects")}removeBulletsOfKeyProject(e){let t=e.target.getAttribute("data-index"),o=this.keyProjects[t].bulletsOfRole;o.splice(o.length-1,1),this.keyProjects[t].bulletsOfRole=o,this.requestUpdate("keyProjects")}addEducation(){let e=this.education;e.push({schoolName:"",yearCompleted:"",educationCompleted:""}),this.education=e,this.requestUpdate("education")}removeEducation(){let e=this.education;e.splice(e.length-1,1),this.education=e,this.requestUpdate("education")}nextStep(){let e=["one","two","three","four","five","six"];if(this.validateStepForm())for(let t=0;t<e.length;t++)if(e[t]===this.activeStep){this.activeStep=e[t+1],this.requestUpdate("activeStep");break}}previousStep(){let e=["one","two","three","four","five","six"];for(let t=0;t<e.length;t++)if(e[t]===this.activeStep){this.activeStep=e[t-1],this.submitted=!1,this.copyPaste="",this.requestUpdate("activeStep");break}}validateStepForm(){let e=this.shadowRoot.querySelectorAll(".active-step .field"),t=this.shadowRoot.querySelectorAll(".active-step input"),o=!0;if(this.shadowRoot.querySelectorAll(".help").forEach(e=>e.remove()),t&&t.length)for(let a=0;a<t.length;a++)if(t[a].value)t[a].classList.remove("is-danger");else{let i=document.createElement("p");i.className="help is-danger",i.innerHTML=t[a].placeholder+" is required",t[a].classList.add("is-danger"),e[a].appendChild(i),o=!1}return o}deployResume(){location.href="http://myonlinecv.xyz"}createResume(){this.validateStepForm()&&(this.submitted=!0,this.response.socialLinks=this.socialLinks,this.response.professionalExperiences=this.professionalExperiences,this.response.experiences=this.experiences,this.response.keyProjects=this.keyProjects,this.response.education=this.education,this.copyPaste=`<resume-jf id='resume' theme='classic' resume='${JSON.stringify(this.response)}'></resume-jf>\n<script src="https://cdn.jsdelivr.net/npm/resume-jf@1.0.2/dist/resume-jf.js"><\/script>\n    `,this.requestUpdate("copyPaste"))}render(){return O`
    <div class="card">
      <div class="card-content">
        <h1 class="title">Resume JF Form</h1>
        <h3 class="subtitle">Fill in this form to quickly deploy your own online resume.</h3>
        
        <div class="step-margin">
          <resume-jf-steps activestep="${this.activeStep}"></resume-jf-steps>
        </div>

        <div class="content">
          <div class="step-container ${"one"==this.activeStep?"active-step":""}">
            <div class="field">
              <p class="control has-icons-left has-icons-right">
                <input class="input" @change="${e=>this.response.firstName=e.target.value}" value="${this.response.firstName}" type="text" placeholder="First Name">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
              </p>
            </div>
            
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" @change="${e=>this.response.lastName=e.target.value}" value="${this.response.lastName}" type="text" placeholder="Last Name">
                <span class="icon is-small is-left">
                  <i class="fas fa-lock"></i>
                </span>
              </p>
            </div>
            
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" @change="${e=>this.response.email=e.target.value}" value="${this.response.email}" type="email" placeholder="Email">
                <span class="icon is-small is-left">
                  <i class="fas fa-envelope"></i>
                </span>
              </p>
            </div>
            
            <div class="field">
              <p class="control has-icons-left">
                <input class="input" @change="${e=>this.response.phoneNumber=e.target.value}" value="${this.response.phoneNumber}" type="tel" placeholder="Phone Number">
                <span class="icon is-small is-left">
                  <i class="fas fa-phone-square"></i>
                </span>
              </p>
            </div>
          </div>

          <div class="step-container ${"two"==this.activeStep?"active-step":""}">
            <div class="field">
              <label class="label">Social Links</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addSocialLinks}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeSocialLinks}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.socialLinks.map(e=>O`
                  <div class="field">
                    <input value="${e}" class="input" type="text" placeholder="Social Links">
                  </div>
                `)}
              </div>
            </div>
          </div>

          <div class="step-container ${"three"==this.activeStep?"active-step":""}">
            <div class="field">
              <label class="label">Professional Experience</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addProfessionalExperience}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeProfessionalExperience}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.professionalExperiences.map(e=>O`
                  <div class="field">
                    <input value="${e.skill}" class="input" type="text" placeholder="Skill">
                  </div>
                  <div class="field">
                    <input value="${e.bolded}" class="input" type="text" placeholder="Bolded">
                  </div>
                `)}
              </div>
            </div>
          </div>

          <div class="step-container ${"four"==this.activeStep?"active-step":""}">
            <div class="field">
              <label class="label">Experience</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addExperience}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeExperience}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.experiences.map((e,t)=>O`
                  <div class="field">
                    <input value="${e.jobTitle}" class="input" type="text" placeholder="Job Title">
                  </div>
                  <div class="field">
                    <input value="${e.role}" class="input" type="text" placeholder="Role">
                  </div>
                  <div class="field">
                    <input value="${e.duration}" class="input" type="text" placeholder="Duration">
                  </div>
                  <div class="field">
                    <input value="${e.summaryOfCompany}" class="input" type="text" placeholder="Summary of Company">
                  </div>
                  <div class="field">
                    <p class="control">
                      <button class="button is-success" data-index="${t}" @click="${this.addBulletsOfExperience}">
                        Add Bullet
                      </button>
                      <button class="button is-danger" data-index="${t}" @click="${this.removeBulletsOfExperience}">
                        Remove Bullet
                      </button>
                    </p>
                  </div>
                  ${e.bulletsOfRole.map(e=>O`
                  <div class="field">
                    <input value="${e}" class="input" type="text" placeholder="What did you do?">
                  </div>
                  `)}
                `)}
              </div>
            </div>
          </div>

          <div class="step-container ${"five"==this.activeStep?"active-step":""}">
            <div class="field">
              <label class="label">Key Projects</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addKeyProject}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeKeyProject}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.keyProjects.map((e,t)=>O`
                  <div class="field">
                    <input value="${e.role}" class="input" type="text" placeholder="Job Title">
                  </div>
                  <div class="field">
                    <input value="${e.projectName}" class="input" type="text" placeholder="Role">
                  </div>
                  <div class="field">
                    <p class="control">
                      <button class="button is-success" data-index="${t}" @click="${this.addBulletsOfProjects}">
                        Add Bullet
                      </button>
                      <button class="button is-danger" data-index="${t}" @click="${this.removeBulletsOfProjects}">
                        Remove Bullet
                      </button>
                    </p>
                  </div>
                  ${e.bulletsOfRole.map(e=>O`
                  <div class="field">
                    <input value="${e}" class="input" type="text" placeholder="What did you do?">
                  </div>
                  `)}
                `)}
              </div>
            </div>
          </div>

          <div class="step-container ${"six"==this.activeStep?"active-step":""}">
            <div class="field">
              <label class="label">Education</label>
              <div class="control">
                <div class="field">
                  <p class="control">
                    <button class="button is-success" @click="${this.addEducation}">
                      Add
                    </button>
                    <button class="button is-danger" @click="${this.removeEducation}">
                      Remove
                    </button>
                  </p>
                </div>
                ${this.education.map((e,t)=>O`
                  <div class="field">
                    <input value="${e.schoolName}" class="input" type="text" placeholder="School">
                  </div>
                  <div class="field">
                    <input value="${e.yearCompleted}" class="input" type="text" placeholder="2017">
                  </div>
                  <div class="field">
                    <input value="${e.educationCompleted}" class="input" type="text" placeholder="Education Completed">
                  </div>
                `)}
              </div>
            </div>
            
          </div>
          
          
          <div class="action-control-container field">
            <p class="action-control previous">
              <button class="button is-success ${"one"!=this.activeStep?"active-step":"submit-btn"}" @click="${this.previousStep}">
                Previous Step
              </button>
            </p>

            <p class="action-control next">
              <button class="button is-success ${"six"==this.activeStep?"active-step":"submit-btn"}" @click="${this.createResume}">
                Submit
              </button>

              <button class="button is-success ${"six"!=this.activeStep?"active-step":"submit-btn"}" @click="${this.nextStep}">
                Next Step
              </button>
            </p>
          </div>
          
          ${this.submitted?O`
            <h1 class="title">Copy/Paste</h1>
            <h2 class="subtitle">Take this snippet and quickly deploy your online resume quickly.</h2>
            <div class="field">
              <div class="control">
                <textarea class="textarea is-info" readonly placeholder="Info textarea">${this.copyPaste}</textarea>
              </div>
            </div>
            <h2 class="subtitle">Or deploy on myonlinecv.xyz</h2>
            <div class="field">
              <div class="control">
                <button @click="${this.deployResume}" class="button is-success">
                  Deploy
                </button>
              </div>
            </div>`:null}
          
        </div>
      </div>
    </div>
    `}})}]);