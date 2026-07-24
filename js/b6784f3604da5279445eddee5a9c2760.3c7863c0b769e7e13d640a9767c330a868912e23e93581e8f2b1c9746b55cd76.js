(()=>{var Yu=Object.create;var zo=Object.defineProperty;var Uu=Object.getOwnPropertyDescriptor;var Ku=Object.getOwnPropertyNames;var Gu=Object.getPrototypeOf,Xu=Object.prototype.hasOwnProperty;var Yt=(_,w)=>()=>{try{return w||_((w={exports:{}}).exports,w),w.exports}catch(n){throw w=0,n}};var Qu=(_,w,n,s)=>{if(w&&typeof w=="object"||typeof w=="function")for(let h of Ku(w))!Xu.call(_,h)&&h!==n&&zo(_,h,{get:()=>w[h],enumerable:!(s=Uu(w,h))||s.enumerable});return _};var Ns=(_,w,n)=>(n=_!=null?Yu(Gu(_)):{},Qu(w||!_||!_.__esModule?zo(n,"default",{value:_,enumerable:!0}):n,_));var Is=Yt((jo,Ir)=>{(function(_,w){"use strict";typeof Ir=="object"&&typeof Ir.exports=="object"?Ir.exports=_.document?w(_,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return w(n)}:w(_)})(typeof window<"u"?window:jo,function(_,w){"use strict";var n=[],s=Object.getPrototypeOf,h=n.slice,v=n.flat?function(t){return n.flat.call(t)}:function(t){return n.concat.apply([],t)},m=n.push,x=n.indexOf,H={},G=H.toString,k=H.hasOwnProperty,N=k.toString,R=N.call(Object),B={},F=function(i){return typeof i=="function"&&typeof i.nodeType!="number"&&typeof i.item!="function"},C=function(i){return i!=null&&i===i.window},p=_.document,S={type:!0,src:!0,nonce:!0,noModule:!0};function z(t,i,r){r=r||p;var o,c,f=r.createElement("script");if(f.text=t,i)for(o in S)c=i[o]||i.getAttribute&&i.getAttribute(o),c&&f.setAttribute(o,c);r.head.appendChild(f).parentNode.removeChild(f)}function K(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?H[G.call(t)]||"object":typeof t}var tt="3.7.1",at=/HTML$/i,l=function(t,i){return new l.fn.init(t,i)};l.fn=l.prototype={jquery:tt,constructor:l,length:0,toArray:function(){return h.call(this)},get:function(t){return t==null?h.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var i=l.merge(this.constructor(),t);return i.prevObject=this,i},each:function(t){return l.each(this,t)},map:function(t){return this.pushStack(l.map(this,function(i,r){return t.call(i,r,i)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(t,i){return(i+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(t,i){return i%2}))},eq:function(t){var i=this.length,r=+t+(t<0?i:0);return this.pushStack(r>=0&&r<i?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:m,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var t,i,r,o,c,f,d=arguments[0]||{},T=1,b=arguments.length,O=!1;for(typeof d=="boolean"&&(O=d,d=arguments[T]||{},T++),typeof d!="object"&&!F(d)&&(d={}),T===b&&(d=this,T--);T<b;T++)if((t=arguments[T])!=null)for(i in t)o=t[i],!(i==="__proto__"||d===o)&&(O&&o&&(l.isPlainObject(o)||(c=Array.isArray(o)))?(r=d[i],c&&!Array.isArray(r)?f=[]:!c&&!l.isPlainObject(r)?f={}:f=r,c=!1,d[i]=l.extend(O,f,o)):o!==void 0&&(d[i]=o));return d},l.extend({expando:"jQuery"+(tt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var i,r;return!t||G.call(t)!=="[object Object]"?!1:(i=s(t),i?(r=k.call(i,"constructor")&&i.constructor,typeof r=="function"&&N.call(r)===R):!0)},isEmptyObject:function(t){var i;for(i in t)return!1;return!0},globalEval:function(t,i,r){z(t,{nonce:i&&i.nonce},r)},each:function(t,i){var r,o=0;if(wt(t))for(r=t.length;o<r&&i.call(t[o],o,t[o])!==!1;o++);else for(o in t)if(i.call(t[o],o,t[o])===!1)break;return t},text:function(t){var i,r="",o=0,c=t.nodeType;if(!c)for(;i=t[o++];)r+=l.text(i);return c===1||c===11?t.textContent:c===9?t.documentElement.textContent:c===3||c===4?t.nodeValue:r},makeArray:function(t,i){var r=i||[];return t!=null&&(wt(Object(t))?l.merge(r,typeof t=="string"?[t]:t):m.call(r,t)),r},inArray:function(t,i,r){return i==null?-1:x.call(i,t,r)},isXMLDoc:function(t){var i=t&&t.namespaceURI,r=t&&(t.ownerDocument||t).documentElement;return!at.test(i||r&&r.nodeName||"HTML")},merge:function(t,i){for(var r=+i.length,o=0,c=t.length;o<r;o++)t[c++]=i[o];return t.length=c,t},grep:function(t,i,r){for(var o,c=[],f=0,d=t.length,T=!r;f<d;f++)o=!i(t[f],f),o!==T&&c.push(t[f]);return c},map:function(t,i,r){var o,c,f=0,d=[];if(wt(t))for(o=t.length;f<o;f++)c=i(t[f],f,r),c!=null&&d.push(c);else for(f in t)c=i(t[f],f,r),c!=null&&d.push(c);return v(d)},guid:1,support:B}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,i){H["[object "+i+"]"]=i.toLowerCase()});function wt(t){var i=!!t&&"length"in t&&t.length,r=K(t);return F(t)||C(t)?!1:r==="array"||i===0||typeof i=="number"&&i>0&&i-1 in t}function ct(t,i){return t.nodeName&&t.nodeName.toLowerCase()===i.toLowerCase()}var pe=n.pop,Ze=n.sort,zi=n.splice,Tt="[\\x20\\t\\r\\n\\f]",ti=new RegExp("^"+Tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Tt+"+$","g");l.contains=function(t,i){var r=i&&i.parentNode;return t===r||!!(r&&r.nodeType===1&&(t.contains?t.contains(r):t.compareDocumentPosition&&t.compareDocumentPosition(r)&16))};var Yn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Yr(t,i){return i?t==="\0"?"\uFFFD":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}l.escapeSelector=function(t){return(t+"").replace(Yn,Yr)};var be=p,ji=m;(function(){var t,i,r,o,c,f=ji,d,T,b,O,M,j=l.expando,L=0,Y=0,st=Zi(),pt=Zi(),dt=Zi(),Mt=Zi(),Dt=function(y,A){return y===A&&(c=!0),0},ue="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Qt="(?:\\\\[\\da-fA-F]{1,6}"+Tt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",vt="\\["+Tt+"*("+Qt+")(?:"+Tt+"*([*^$|!~]?=)"+Tt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Qt+"))|)"+Tt+"*\\]",Me=":("+Qt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+vt+")*)|.*)\\)|)",bt=new RegExp(Tt+"+","g"),Lt=new RegExp("^"+Tt+"*,"+Tt+"*"),wi=new RegExp("^"+Tt+"*([>+~]|"+Tt+")"+Tt+"*"),Ln=new RegExp(Tt+"|>"),Se=new RegExp(Me),fi=new RegExp("^"+Qt+"$"),Bt={ID:new RegExp("^#("+Qt+")"),CLASS:new RegExp("^\\.("+Qt+")"),TAG:new RegExp("^("+Qt+"|[*])"),ATTR:new RegExp("^"+vt),PSEUDO:new RegExp("^"+Me),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Tt+"*(even|odd|(([+-]|)(\\d*)n|)"+Tt+"*(?:([+-]|)"+Tt+"*(\\d+)|))"+Tt+"*\\)|)","i"),bool:new RegExp("^(?:"+ue+")$","i"),needsContext:new RegExp("^"+Tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Tt+"*((?:-\\d)?\\d*)"+Tt+"*\\)|)(?=[^-]|$)","i")},He=/^(?:input|select|textarea|button)$/i,Re=/^h\d$/i,ne=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Nn=/[+~]/,ye=new RegExp("\\\\[\\da-fA-F]{1,6}"+Tt+"?|\\\\([^\\r\\n\\f])","g"),ce=function(y,A){var I="0x"+y.slice(1)-65536;return A||(I<0?String.fromCharCode(I+65536):String.fromCharCode(I>>10|55296,I&1023|56320))},fs=function(){de()},In=nn(function(y){return y.disabled===!0&&ct(y,"fieldset")},{dir:"parentNode",next:"legend"});function ds(){try{return d.activeElement}catch{}}try{f.apply(n=h.call(be.childNodes),be.childNodes),n[be.childNodes.length].nodeType}catch{f={apply:function(A,I){ji.apply(A,h.call(I))},call:function(A){ji.apply(A,h.call(arguments,1))}}}function St(y,A,I,P){var W,Q,J,et,Z,gt,lt,ut=A&&A.ownerDocument,mt=A?A.nodeType:9;if(I=I||[],typeof y!="string"||!y||mt!==1&&mt!==9&&mt!==11)return I;if(!P&&(de(A),A=A||d,b)){if(mt!==11&&(Z=ne.exec(y)))if(W=Z[1]){if(mt===9)if(J=A.getElementById(W)){if(J.id===W)return f.call(I,J),I}else return I;else if(ut&&(J=ut.getElementById(W))&&St.contains(A,J)&&J.id===W)return f.call(I,J),I}else{if(Z[2])return f.apply(I,A.getElementsByTagName(y)),I;if((W=Z[3])&&A.getElementsByClassName)return f.apply(I,A.getElementsByClassName(W)),I}if(!Mt[y+" "]&&(!O||!O.test(y))){if(lt=y,ut=A,mt===1&&(Ln.test(y)||wi.test(y))){for(ut=Nn.test(y)&&tn(A.parentNode)||A,(ut!=A||!B.scope)&&((et=A.getAttribute("id"))?et=l.escapeSelector(et):A.setAttribute("id",et=j)),gt=Ci(y),Q=gt.length;Q--;)gt[Q]=(et?"#"+et:":scope")+" "+Ai(gt[Q]);lt=gt.join(",")}try{return f.apply(I,ut.querySelectorAll(lt)),I}catch{Mt(y,!0)}finally{et===j&&A.removeAttribute("id")}}}return Rn(y.replace(ti,"$1"),A,I,P)}function Zi(){var y=[];function A(I,P){return y.push(I+" ")>i.cacheLength&&delete A[y.shift()],A[I+" "]=P}return A}function fe(y){return y[j]=!0,y}function ze(y){var A=d.createElement("fieldset");try{return!!y(A)}catch{return!1}finally{A.parentNode&&A.parentNode.removeChild(A),A=null}}function $n(y){return function(A){return ct(A,"input")&&A.type===y}}function hs(y){return function(A){return(ct(A,"input")||ct(A,"button"))&&A.type===y}}function yr(y){return function(A){return"form"in A?A.parentNode&&A.disabled===!1?"label"in A?"label"in A.parentNode?A.parentNode.disabled===y:A.disabled===y:A.isDisabled===y||A.isDisabled!==!y&&In(A)===y:A.disabled===y:"label"in A?A.disabled===y:!1}}function ke(y){return fe(function(A){return A=+A,fe(function(I,P){for(var W,Q=y([],I.length,A),J=Q.length;J--;)I[W=Q[J]]&&(I[W]=!(P[W]=I[W]))})})}function tn(y){return y&&typeof y.getElementsByTagName<"u"&&y}function de(y){var A,I=y?y.ownerDocument||y:be;return I==d||I.nodeType!==9||!I.documentElement||(d=I,T=d.documentElement,b=!l.isXMLDoc(d),M=T.matches||T.webkitMatchesSelector||T.msMatchesSelector,T.msMatchesSelector&&be!=d&&(A=d.defaultView)&&A.top!==A&&A.addEventListener("unload",fs),B.getById=ze(function(P){return T.appendChild(P).id=l.expando,!d.getElementsByName||!d.getElementsByName(l.expando).length}),B.disconnectedMatch=ze(function(P){return M.call(P,"*")}),B.scope=ze(function(){return d.querySelectorAll(":scope")}),B.cssHas=ze(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),B.getById?(i.filter.ID=function(P){var W=P.replace(ye,ce);return function(Q){return Q.getAttribute("id")===W}},i.find.ID=function(P,W){if(typeof W.getElementById<"u"&&b){var Q=W.getElementById(P);return Q?[Q]:[]}}):(i.filter.ID=function(P){var W=P.replace(ye,ce);return function(Q){var J=typeof Q.getAttributeNode<"u"&&Q.getAttributeNode("id");return J&&J.value===W}},i.find.ID=function(P,W){if(typeof W.getElementById<"u"&&b){var Q,J,et,Z=W.getElementById(P);if(Z){if(Q=Z.getAttributeNode("id"),Q&&Q.value===P)return[Z];for(et=W.getElementsByName(P),J=0;Z=et[J++];)if(Q=Z.getAttributeNode("id"),Q&&Q.value===P)return[Z]}return[]}}),i.find.TAG=function(P,W){return typeof W.getElementsByTagName<"u"?W.getElementsByTagName(P):W.querySelectorAll(P)},i.find.CLASS=function(P,W){if(typeof W.getElementsByClassName<"u"&&b)return W.getElementsByClassName(P)},O=[],ze(function(P){var W;T.appendChild(P).innerHTML="<a id='"+j+"' href='' disabled='disabled'></a><select id='"+j+"-\r\\' disabled='disabled'><option selected=''></option></select>",P.querySelectorAll("[selected]").length||O.push("\\["+Tt+"*(?:value|"+ue+")"),P.querySelectorAll("[id~="+j+"-]").length||O.push("~="),P.querySelectorAll("a#"+j+"+*").length||O.push(".#.+[+~]"),P.querySelectorAll(":checked").length||O.push(":checked"),W=d.createElement("input"),W.setAttribute("type","hidden"),P.appendChild(W).setAttribute("name","D"),T.appendChild(P).disabled=!0,P.querySelectorAll(":disabled").length!==2&&O.push(":enabled",":disabled"),W=d.createElement("input"),W.setAttribute("name",""),P.appendChild(W),P.querySelectorAll("[name='']").length||O.push("\\["+Tt+"*name"+Tt+"*="+Tt+`*(?:''|"")`)}),B.cssHas||O.push(":has"),O=O.length&&new RegExp(O.join("|")),Dt=function(P,W){if(P===W)return c=!0,0;var Q=!P.compareDocumentPosition-!W.compareDocumentPosition;return Q||(Q=(P.ownerDocument||P)==(W.ownerDocument||W)?P.compareDocumentPosition(W):1,Q&1||!B.sortDetached&&W.compareDocumentPosition(P)===Q?P===d||P.ownerDocument==be&&St.contains(be,P)?-1:W===d||W.ownerDocument==be&&St.contains(be,W)?1:o?x.call(o,P)-x.call(o,W):0:Q&4?-1:1)}),d}St.matches=function(y,A){return St(y,null,null,A)},St.matchesSelector=function(y,A){if(de(y),b&&!Mt[A+" "]&&(!O||!O.test(A)))try{var I=M.call(y,A);if(I||B.disconnectedMatch||y.document&&y.document.nodeType!==11)return I}catch{Mt(A,!0)}return St(A,d,null,[y]).length>0},St.contains=function(y,A){return(y.ownerDocument||y)!=d&&de(y),l.contains(y,A)},St.attr=function(y,A){(y.ownerDocument||y)!=d&&de(y);var I=i.attrHandle[A.toLowerCase()],P=I&&k.call(i.attrHandle,A.toLowerCase())?I(y,A,!b):void 0;return P!==void 0?P:y.getAttribute(A)},St.error=function(y){throw new Error("Syntax error, unrecognized expression: "+y)},l.uniqueSort=function(y){var A,I=[],P=0,W=0;if(c=!B.sortStable,o=!B.sortStable&&h.call(y,0),Ze.call(y,Dt),c){for(;A=y[W++];)A===y[W]&&(P=I.push(W));for(;P--;)zi.call(y,I[P],1)}return o=null,y},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(h.apply(this)))},i=l.expr={cacheLength:50,createPseudo:fe,match:Bt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(y){return y[1]=y[1].replace(ye,ce),y[3]=(y[3]||y[4]||y[5]||"").replace(ye,ce),y[2]==="~="&&(y[3]=" "+y[3]+" "),y.slice(0,4)},CHILD:function(y){return y[1]=y[1].toLowerCase(),y[1].slice(0,3)==="nth"?(y[3]||St.error(y[0]),y[4]=+(y[4]?y[5]+(y[6]||1):2*(y[3]==="even"||y[3]==="odd")),y[5]=+(y[7]+y[8]||y[3]==="odd")):y[3]&&St.error(y[0]),y},PSEUDO:function(y){var A,I=!y[6]&&y[2];return Bt.CHILD.test(y[0])?null:(y[3]?y[2]=y[4]||y[5]||"":I&&Se.test(I)&&(A=Ci(I,!0))&&(A=I.indexOf(")",I.length-A)-I.length)&&(y[0]=y[0].slice(0,A),y[2]=I.slice(0,A)),y.slice(0,3))}},filter:{TAG:function(y){var A=y.replace(ye,ce).toLowerCase();return y==="*"?function(){return!0}:function(I){return ct(I,A)}},CLASS:function(y){var A=st[y+" "];return A||(A=new RegExp("(^|"+Tt+")"+y+"("+Tt+"|$)"))&&st(y,function(I){return A.test(typeof I.className=="string"&&I.className||typeof I.getAttribute<"u"&&I.getAttribute("class")||"")})},ATTR:function(y,A,I){return function(P){var W=St.attr(P,y);return W==null?A==="!=":A?(W+="",A==="="?W===I:A==="!="?W!==I:A==="^="?I&&W.indexOf(I)===0:A==="*="?I&&W.indexOf(I)>-1:A==="$="?I&&W.slice(-I.length)===I:A==="~="?(" "+W.replace(bt," ")+" ").indexOf(I)>-1:A==="|="?W===I||W.slice(0,I.length+1)===I+"-":!1):!0}},CHILD:function(y,A,I,P,W){var Q=y.slice(0,3)!=="nth",J=y.slice(-4)!=="last",et=A==="of-type";return P===1&&W===0?function(Z){return!!Z.parentNode}:function(Z,gt,lt){var ut,mt,ot,At,Jt,zt=Q!==J?"nextSibling":"previousSibling",he=Z.parentNode,we=et&&Z.nodeName.toLowerCase(),Xe=!lt&&!et,jt=!1;if(he){if(Q){for(;zt;){for(ot=Z;ot=ot[zt];)if(et?ct(ot,we):ot.nodeType===1)return!1;Jt=zt=y==="only"&&!Jt&&"nextSibling"}return!0}if(Jt=[J?he.firstChild:he.lastChild],J&&Xe){for(mt=he[j]||(he[j]={}),ut=mt[y]||[],At=ut[0]===L&&ut[1],jt=At&&ut[2],ot=At&&he.childNodes[At];ot=++At&&ot&&ot[zt]||(jt=At=0)||Jt.pop();)if(ot.nodeType===1&&++jt&&ot===Z){mt[y]=[L,At,jt];break}}else if(Xe&&(mt=Z[j]||(Z[j]={}),ut=mt[y]||[],At=ut[0]===L&&ut[1],jt=At),jt===!1)for(;(ot=++At&&ot&&ot[zt]||(jt=At=0)||Jt.pop())&&!((et?ct(ot,we):ot.nodeType===1)&&++jt&&(Xe&&(mt=ot[j]||(ot[j]={}),mt[y]=[L,jt]),ot===Z)););return jt-=W,jt===P||jt%P===0&&jt/P>=0}}},PSEUDO:function(y,A){var I,P=i.pseudos[y]||i.setFilters[y.toLowerCase()]||St.error("unsupported pseudo: "+y);return P[j]?P(A):P.length>1?(I=[y,y,"",A],i.setFilters.hasOwnProperty(y.toLowerCase())?fe(function(W,Q){for(var J,et=P(W,A),Z=et.length;Z--;)J=x.call(W,et[Z]),W[J]=!(Q[J]=et[Z])}):function(W){return P(W,0,I)}):P}},pseudos:{not:fe(function(y){var A=[],I=[],P=rn(y.replace(ti,"$1"));return P[j]?fe(function(W,Q,J,et){for(var Z,gt=P(W,null,et,[]),lt=W.length;lt--;)(Z=gt[lt])&&(W[lt]=!(Q[lt]=Z))}):function(W,Q,J){return A[0]=W,P(A,null,J,I),A[0]=null,!I.pop()}}),has:fe(function(y){return function(A){return St(y,A).length>0}}),contains:fe(function(y){return y=y.replace(ye,ce),function(A){return(A.textContent||l.text(A)).indexOf(y)>-1}}),lang:fe(function(y){return fi.test(y||"")||St.error("unsupported lang: "+y),y=y.replace(ye,ce).toLowerCase(),function(A){var I;do if(I=b?A.lang:A.getAttribute("xml:lang")||A.getAttribute("lang"))return I=I.toLowerCase(),I===y||I.indexOf(y+"-")===0;while((A=A.parentNode)&&A.nodeType===1);return!1}}),target:function(y){var A=_.location&&_.location.hash;return A&&A.slice(1)===y.id},root:function(y){return y===T},focus:function(y){return y===ds()&&d.hasFocus()&&!!(y.type||y.href||~y.tabIndex)},enabled:yr(!1),disabled:yr(!0),checked:function(y){return ct(y,"input")&&!!y.checked||ct(y,"option")&&!!y.selected},selected:function(y){return y.parentNode&&y.parentNode.selectedIndex,y.selected===!0},empty:function(y){for(y=y.firstChild;y;y=y.nextSibling)if(y.nodeType<6)return!1;return!0},parent:function(y){return!i.pseudos.empty(y)},header:function(y){return Re.test(y.nodeName)},input:function(y){return He.test(y.nodeName)},button:function(y){return ct(y,"input")&&y.type==="button"||ct(y,"button")},text:function(y){var A;return ct(y,"input")&&y.type==="text"&&((A=y.getAttribute("type"))==null||A.toLowerCase()==="text")},first:ke(function(){return[0]}),last:ke(function(y,A){return[A-1]}),eq:ke(function(y,A,I){return[I<0?I+A:I]}),even:ke(function(y,A){for(var I=0;I<A;I+=2)y.push(I);return y}),odd:ke(function(y,A){for(var I=1;I<A;I+=2)y.push(I);return y}),lt:ke(function(y,A,I){var P;for(I<0?P=I+A:I>A?P=A:P=I;--P>=0;)y.push(P);return y}),gt:ke(function(y,A,I){for(var P=I<0?I+A:I;++P<A;)y.push(P);return y})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=$n(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=hs(t);function en(){}en.prototype=i.filters=i.pseudos,i.setFilters=new en;function Ci(y,A){var I,P,W,Q,J,et,Z,gt=pt[y+" "];if(gt)return A?0:gt.slice(0);for(J=y,et=[],Z=i.preFilter;J;){(!I||(P=Lt.exec(J)))&&(P&&(J=J.slice(P[0].length)||J),et.push(W=[])),I=!1,(P=wi.exec(J))&&(I=P.shift(),W.push({value:I,type:P[0].replace(ti," ")}),J=J.slice(I.length));for(Q in i.filter)(P=Bt[Q].exec(J))&&(!Z[Q]||(P=Z[Q](P)))&&(I=P.shift(),W.push({value:I,type:Q,matches:P}),J=J.slice(I.length));if(!I)break}return A?J.length:J?St.error(y):pt(y,et).slice(0)}function Ai(y){for(var A=0,I=y.length,P="";A<I;A++)P+=y[A].value;return P}function nn(y,A,I){var P=A.dir,W=A.next,Q=W||P,J=I&&Q==="parentNode",et=Y++;return A.first?function(Z,gt,lt){for(;Z=Z[P];)if(Z.nodeType===1||J)return y(Z,gt,lt);return!1}:function(Z,gt,lt){var ut,mt,ot=[L,et];if(lt){for(;Z=Z[P];)if((Z.nodeType===1||J)&&y(Z,gt,lt))return!0}else for(;Z=Z[P];)if(Z.nodeType===1||J)if(mt=Z[j]||(Z[j]={}),W&&ct(Z,W))Z=Z[P]||Z;else{if((ut=mt[Q])&&ut[0]===L&&ut[1]===et)return ot[2]=ut[2];if(mt[Q]=ot,ot[2]=y(Z,gt,lt))return!0}return!1}}function Pn(y){return y.length>1?function(A,I,P){for(var W=y.length;W--;)if(!y[W](A,I,P))return!1;return!0}:y[0]}function _r(y,A,I){for(var P=0,W=A.length;P<W;P++)St(y,A[P],I);return I}function De(y,A,I,P,W){for(var Q,J=[],et=0,Z=y.length,gt=A!=null;et<Z;et++)(Q=y[et])&&(!I||I(Q,P,W))&&(J.push(Q),gt&&A.push(et));return J}function Mn(y,A,I,P,W,Q){return P&&!P[j]&&(P=Mn(P)),W&&!W[j]&&(W=Mn(W,Q)),fe(function(J,et,Z,gt){var lt,ut,mt,ot,At=[],Jt=[],zt=et.length,he=J||_r(A||"*",Z.nodeType?[Z]:Z,[]),we=y&&(J||!A)?De(he,At,y,Z,gt):he;if(I?(ot=W||(J?y:zt||P)?[]:et,I(we,ot,Z,gt)):ot=we,P)for(lt=De(ot,Jt),P(lt,[],Z,gt),ut=lt.length;ut--;)(mt=lt[ut])&&(ot[Jt[ut]]=!(we[Jt[ut]]=mt));if(J){if(W||y){if(W){for(lt=[],ut=ot.length;ut--;)(mt=ot[ut])&&lt.push(we[ut]=mt);W(null,ot=[],lt,gt)}for(ut=ot.length;ut--;)(mt=ot[ut])&&(lt=W?x.call(J,mt):At[ut])>-1&&(J[lt]=!(et[lt]=mt))}}else ot=De(ot===et?ot.splice(zt,ot.length):ot),W?W(null,et,ot,gt):f.apply(et,ot)})}function Hn(y){for(var A,I,P,W=y.length,Q=i.relative[y[0].type],J=Q||i.relative[" "],et=Q?1:0,Z=nn(function(ut){return ut===A},J,!0),gt=nn(function(ut){return x.call(A,ut)>-1},J,!0),lt=[function(ut,mt,ot){var At=!Q&&(ot||mt!=r)||((A=mt).nodeType?Z(ut,mt,ot):gt(ut,mt,ot));return A=null,At}];et<W;et++)if(I=i.relative[y[et].type])lt=[nn(Pn(lt),I)];else{if(I=i.filter[y[et].type].apply(null,y[et].matches),I[j]){for(P=++et;P<W&&!i.relative[y[P].type];P++);return Mn(et>1&&Pn(lt),et>1&&Ai(y.slice(0,et-1).concat({value:y[et-2].type===" "?"*":""})).replace(ti,"$1"),I,et<P&&Hn(y.slice(et,P)),P<W&&Hn(y=y.slice(P)),P<W&&Ai(y))}lt.push(I)}return Pn(lt)}function ps(y,A){var I=A.length>0,P=y.length>0,W=function(Q,J,et,Z,gt){var lt,ut,mt,ot=0,At="0",Jt=Q&&[],zt=[],he=r,we=Q||P&&i.find.TAG("*",gt),Xe=L+=he==null?1:Math.random()||.1,jt=we.length;for(gt&&(r=J==d||J||gt);At!==jt&&(lt=we[At])!=null;At++){if(P&&lt){for(ut=0,!J&&lt.ownerDocument!=d&&(de(lt),et=!b);mt=y[ut++];)if(mt(lt,J||d,et)){f.call(Z,lt);break}gt&&(L=Xe)}I&&((lt=!mt&&lt)&&ot--,Q&&Jt.push(lt))}if(ot+=At,I&&At!==ot){for(ut=0;mt=A[ut++];)mt(Jt,zt,J,et);if(Q){if(ot>0)for(;At--;)Jt[At]||zt[At]||(zt[At]=pe.call(Z));zt=De(zt)}f.apply(Z,zt),gt&&!Q&&zt.length>0&&ot+A.length>1&&l.uniqueSort(Z)}return gt&&(L=Xe,r=he),Jt};return I?fe(W):W}function rn(y,A){var I,P=[],W=[],Q=dt[y+" "];if(!Q){for(A||(A=Ci(y)),I=A.length;I--;)Q=Hn(A[I]),Q[j]?P.push(Q):W.push(Q);Q=dt(y,ps(W,P)),Q.selector=y}return Q}function Rn(y,A,I,P){var W,Q,J,et,Z,gt=typeof y=="function"&&y,lt=!P&&Ci(y=gt.selector||y);if(I=I||[],lt.length===1){if(Q=lt[0]=lt[0].slice(0),Q.length>2&&(J=Q[0]).type==="ID"&&A.nodeType===9&&b&&i.relative[Q[1].type]){if(A=(i.find.ID(J.matches[0].replace(ye,ce),A)||[])[0],A)gt&&(A=A.parentNode);else return I;y=y.slice(Q.shift().value.length)}for(W=Bt.needsContext.test(y)?0:Q.length;W--&&(J=Q[W],!i.relative[et=J.type]);)if((Z=i.find[et])&&(P=Z(J.matches[0].replace(ye,ce),Nn.test(Q[0].type)&&tn(A.parentNode)||A))){if(Q.splice(W,1),y=P.length&&Ai(Q),!y)return f.apply(I,P),I;break}}return(gt||rn(y,lt))(P,A,!b,I,!A||Nn.test(y)&&tn(A.parentNode)||A),I}B.sortStable=j.split("").sort(Dt).join("")===j,de(),B.sortDetached=ze(function(y){return y.compareDocumentPosition(d.createElement("fieldset"))&1}),l.find=St,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,St.compile=rn,St.select=Rn,St.setDocument=de,St.tokenize=Ci,St.escape=l.escapeSelector,St.getText=l.text,St.isXML=l.isXMLDoc,St.selectors=l.expr,St.support=l.support,St.uniqueSort=l.uniqueSort})();var ei=function(t,i,r){for(var o=[],c=r!==void 0;(t=t[i])&&t.nodeType!==9;)if(t.nodeType===1){if(c&&l(t).is(r))break;o.push(t)}return o},Un=function(t,i){for(var r=[];t;t=t.nextSibling)t.nodeType===1&&t!==i&&r.push(t);return r},un=l.expr.match.needsContext,cn=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Wi(t,i,r){return F(i)?l.grep(t,function(o,c){return!!i.call(o,c,o)!==r}):i.nodeType?l.grep(t,function(o){return o===i!==r}):typeof i!="string"?l.grep(t,function(o){return x.call(i,o)>-1!==r}):l.filter(i,t,r)}l.filter=function(t,i,r){var o=i[0];return r&&(t=":not("+t+")"),i.length===1&&o.nodeType===1?l.find.matchesSelector(o,t)?[o]:[]:l.find.matches(t,l.grep(i,function(c){return c.nodeType===1}))},l.fn.extend({find:function(t){var i,r,o=this.length,c=this;if(typeof t!="string")return this.pushStack(l(t).filter(function(){for(i=0;i<o;i++)if(l.contains(c[i],this))return!0}));for(r=this.pushStack([]),i=0;i<o;i++)l.find(t,c[i],r);return o>1?l.uniqueSort(r):r},filter:function(t){return this.pushStack(Wi(this,t||[],!1))},not:function(t){return this.pushStack(Wi(this,t||[],!0))},is:function(t){return!!Wi(this,typeof t=="string"&&un.test(t)?l(t):t||[],!1).length}});var qi,Ur=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Kn=l.fn.init=function(t,i,r){var o,c;if(!t)return this;if(r=r||qi,typeof t=="string")if(t[0]==="<"&&t[t.length-1]===">"&&t.length>=3?o=[null,t,null]:o=Ur.exec(t),o&&(o[1]||!i))if(o[1]){if(i=i instanceof l?i[0]:i,l.merge(this,l.parseHTML(o[1],i&&i.nodeType?i.ownerDocument||i:p,!0)),cn.test(o[1])&&l.isPlainObject(i))for(o in i)F(this[o])?this[o](i[o]):this.attr(o,i[o]);return this}else return c=p.getElementById(o[2]),c&&(this[0]=c,this.length=1),this;else return!i||i.jquery?(i||r).find(t):this.constructor(i).find(t);else{if(t.nodeType)return this[0]=t,this.length=1,this;if(F(t))return r.ready!==void 0?r.ready(t):t(l)}return l.makeArray(t,this)};Kn.prototype=l.fn,qi=l(p);var V=/^(?:parents|prev(?:Until|All))/,fn={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(t){var i=l(t,this),r=i.length;return this.filter(function(){for(var o=0;o<r;o++)if(l.contains(this,i[o]))return!0})},closest:function(t,i){var r,o=0,c=this.length,f=[],d=typeof t!="string"&&l(t);if(!un.test(t)){for(;o<c;o++)for(r=this[o];r&&r!==i;r=r.parentNode)if(r.nodeType<11&&(d?d.index(r)>-1:r.nodeType===1&&l.find.matchesSelector(r,t))){f.push(r);break}}return this.pushStack(f.length>1?l.uniqueSort(f):f)},index:function(t){return t?typeof t=="string"?x.call(l(t),this[0]):x.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,i){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(t,i))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}});function dn(t,i){for(;(t=t[i])&&t.nodeType!==1;);return t}l.each({parent:function(t){var i=t.parentNode;return i&&i.nodeType!==11?i:null},parents:function(t){return ei(t,"parentNode")},parentsUntil:function(t,i,r){return ei(t,"parentNode",r)},next:function(t){return dn(t,"nextSibling")},prev:function(t){return dn(t,"previousSibling")},nextAll:function(t){return ei(t,"nextSibling")},prevAll:function(t){return ei(t,"previousSibling")},nextUntil:function(t,i,r){return ei(t,"nextSibling",r)},prevUntil:function(t,i,r){return ei(t,"previousSibling",r)},siblings:function(t){return Un((t.parentNode||{}).firstChild,t)},children:function(t){return Un(t.firstChild)},contents:function(t){return t.contentDocument!=null&&s(t.contentDocument)?t.contentDocument:(ct(t,"template")&&(t=t.content||t),l.merge([],t.childNodes))}},function(t,i){l.fn[t]=function(r,o){var c=l.map(this,i,r);return t.slice(-5)!=="Until"&&(o=r),o&&typeof o=="string"&&(c=l.filter(o,c)),this.length>1&&(fn[t]||l.uniqueSort(c),V.test(t)&&c.reverse()),this.pushStack(c)}});var se=/[^\x20\t\r\n\f]+/g;function Ae(t){var i={};return l.each(t.match(se)||[],function(r,o){i[o]=!0}),i}l.Callbacks=function(t){t=typeof t=="string"?Ae(t):l.extend({},t);var i,r,o,c,f=[],d=[],T=-1,b=function(){for(c=c||t.once,o=i=!0;d.length;T=-1)for(r=d.shift();++T<f.length;)f[T].apply(r[0],r[1])===!1&&t.stopOnFalse&&(T=f.length,r=!1);t.memory||(r=!1),i=!1,c&&(r?f=[]:f="")},O={add:function(){return f&&(r&&!i&&(T=f.length-1,d.push(r)),(function M(j){l.each(j,function(L,Y){F(Y)?(!t.unique||!O.has(Y))&&f.push(Y):Y&&Y.length&&K(Y)!=="string"&&M(Y)})})(arguments),r&&!i&&b()),this},remove:function(){return l.each(arguments,function(M,j){for(var L;(L=l.inArray(j,f,L))>-1;)f.splice(L,1),L<=T&&T--}),this},has:function(M){return M?l.inArray(M,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return c=d=[],f=r="",this},disabled:function(){return!f},lock:function(){return c=d=[],!r&&!i&&(f=r=""),this},locked:function(){return!!c},fireWith:function(M,j){return c||(j=j||[],j=[M,j.slice?j.slice():j],d.push(j),i||b()),this},fire:function(){return O.fireWith(this,arguments),this},fired:function(){return!!o}};return O};function Ee(t){return t}function Fi(t){throw t}function oe(t,i,r,o){var c;try{t&&F(c=t.promise)?c.call(t).done(i).fail(r):t&&F(c=t.then)?c.call(t,i,r):i.apply(void 0,[t].slice(o))}catch(f){r.apply(void 0,[f])}}l.extend({Deferred:function(t){var i=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],r="pending",o={state:function(){return r},always:function(){return c.done(arguments).fail(arguments),this},catch:function(f){return o.then(null,f)},pipe:function(){var f=arguments;return l.Deferred(function(d){l.each(i,function(T,b){var O=F(f[b[4]])&&f[b[4]];c[b[1]](function(){var M=O&&O.apply(this,arguments);M&&F(M.promise)?M.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[b[0]+"With"](this,O?[M]:arguments)})}),f=null}).promise()},then:function(f,d,T){var b=0;function O(M,j,L,Y){return function(){var st=this,pt=arguments,dt=function(){var Dt,ue;if(!(M<b)){if(Dt=L.apply(st,pt),Dt===j.promise())throw new TypeError("Thenable self-resolution");ue=Dt&&(typeof Dt=="object"||typeof Dt=="function")&&Dt.then,F(ue)?Y?ue.call(Dt,O(b,j,Ee,Y),O(b,j,Fi,Y)):(b++,ue.call(Dt,O(b,j,Ee,Y),O(b,j,Fi,Y),O(b,j,Ee,j.notifyWith))):(L!==Ee&&(st=void 0,pt=[Dt]),(Y||j.resolveWith)(st,pt))}},Mt=Y?dt:function(){try{dt()}catch(Dt){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Dt,Mt.error),M+1>=b&&(L!==Fi&&(st=void 0,pt=[Dt]),j.rejectWith(st,pt))}};M?Mt():(l.Deferred.getErrorHook?Mt.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Mt.error=l.Deferred.getStackHook()),_.setTimeout(Mt))}}return l.Deferred(function(M){i[0][3].add(O(0,M,F(T)?T:Ee,M.notifyWith)),i[1][3].add(O(0,M,F(f)?f:Ee)),i[2][3].add(O(0,M,F(d)?d:Fi))}).promise()},promise:function(f){return f!=null?l.extend(f,o):o}},c={};return l.each(i,function(f,d){var T=d[2],b=d[5];o[d[1]]=T.add,b&&T.add(function(){r=b},i[3-f][2].disable,i[3-f][3].disable,i[0][2].lock,i[0][3].lock),T.add(d[3].fire),c[d[0]]=function(){return c[d[0]+"With"](this===c?void 0:this,arguments),this},c[d[0]+"With"]=T.fireWith}),o.promise(c),t&&t.call(c,c),c},when:function(t){var i=arguments.length,r=i,o=Array(r),c=h.call(arguments),f=l.Deferred(),d=function(T){return function(b){o[T]=this,c[T]=arguments.length>1?h.call(arguments):b,--i||f.resolveWith(o,c)}};if(i<=1&&(oe(t,f.done(d(r)).resolve,f.reject,!i),f.state()==="pending"||F(c[r]&&c[r].then)))return f.then();for(;r--;)oe(c[r],d(r),f.reject);return f.promise()}});var hn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(t,i){_.console&&_.console.warn&&t&&hn.test(t.name)&&_.console.warn("jQuery.Deferred exception: "+t.message,t.stack,i)},l.readyException=function(t){_.setTimeout(function(){throw t})};var rt=l.Deferred();l.fn.ready=function(t){return rt.then(t).catch(function(i){l.readyException(i)}),this},l.extend({isReady:!1,readyWait:1,ready:function(t){(t===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(t!==!0&&--l.readyWait>0)&&rt.resolveWith(p,[l]))}}),l.ready.then=rt.then;function je(){p.removeEventListener("DOMContentLoaded",je),_.removeEventListener("load",je),l.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?_.setTimeout(l.ready):(p.addEventListener("DOMContentLoaded",je),_.addEventListener("load",je));var xe=function(t,i,r,o,c,f,d){var T=0,b=t.length,O=r==null;if(K(r)==="object"){c=!0;for(T in r)xe(t,i,T,r[T],!0,f,d)}else if(o!==void 0&&(c=!0,F(o)||(d=!0),O&&(d?(i.call(t,o),i=null):(O=i,i=function(M,j,L){return O.call(l(M),L)})),i))for(;T<b;T++)i(t[T],r,d?o:o.call(t[T],T,i(t[T],r)));return c?t:O?i.call(t):b?i(t[0],r):f},qs=/^-ms-/,Gn=/-([a-z])/g;function Kr(t,i){return i.toUpperCase()}function Te(t){return t.replace(qs,"ms-").replace(Gn,Kr)}var pi=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};function gi(){this.expando=l.expando+gi.uid++}gi.uid=1,gi.prototype={cache:function(t){var i=t[this.expando];return i||(i={},pi(t)&&(t.nodeType?t[this.expando]=i:Object.defineProperty(t,this.expando,{value:i,configurable:!0}))),i},set:function(t,i,r){var o,c=this.cache(t);if(typeof i=="string")c[Te(i)]=r;else for(o in i)c[Te(o)]=i[o];return c},get:function(t,i){return i===void 0?this.cache(t):t[this.expando]&&t[this.expando][Te(i)]},access:function(t,i,r){return i===void 0||i&&typeof i=="string"&&r===void 0?this.get(t,i):(this.set(t,i,r),r!==void 0?r:i)},remove:function(t,i){var r,o=t[this.expando];if(o!==void 0){if(i!==void 0)for(Array.isArray(i)?i=i.map(Te):(i=Te(i),i=i in o?[i]:i.match(se)||[]),r=i.length;r--;)delete o[i[r]];(i===void 0||l.isEmptyObject(o))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var i=t[this.expando];return i!==void 0&&!l.isEmptyObject(i)}};var it=new gi,Ut=new gi,Fs=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Gr=/[A-Z]/g;function Xr(t){return t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:Fs.test(t)?JSON.parse(t):t}function Xn(t,i,r){var o;if(r===void 0&&t.nodeType===1)if(o="data-"+i.replace(Gr,"-$&").toLowerCase(),r=t.getAttribute(o),typeof r=="string"){try{r=Xr(r)}catch{}Ut.set(t,i,r)}else r=void 0;return r}l.extend({hasData:function(t){return Ut.hasData(t)||it.hasData(t)},data:function(t,i,r){return Ut.access(t,i,r)},removeData:function(t,i){Ut.remove(t,i)},_data:function(t,i,r){return it.access(t,i,r)},_removeData:function(t,i){it.remove(t,i)}}),l.fn.extend({data:function(t,i){var r,o,c,f=this[0],d=f&&f.attributes;if(t===void 0){if(this.length&&(c=Ut.get(f),f.nodeType===1&&!it.get(f,"hasDataAttrs"))){for(r=d.length;r--;)d[r]&&(o=d[r].name,o.indexOf("data-")===0&&(o=Te(o.slice(5)),Xn(f,o,c[o])));it.set(f,"hasDataAttrs",!0)}return c}return typeof t=="object"?this.each(function(){Ut.set(this,t)}):xe(this,function(T){var b;if(f&&T===void 0)return b=Ut.get(f,t),b!==void 0||(b=Xn(f,t),b!==void 0)?b:void 0;this.each(function(){Ut.set(this,t,T)})},null,i,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Ut.remove(this,t)})}}),l.extend({queue:function(t,i,r){var o;if(t)return i=(i||"fx")+"queue",o=it.get(t,i),r&&(!o||Array.isArray(r)?o=it.access(t,i,l.makeArray(r)):o.push(r)),o||[]},dequeue:function(t,i){i=i||"fx";var r=l.queue(t,i),o=r.length,c=r.shift(),f=l._queueHooks(t,i),d=function(){l.dequeue(t,i)};c==="inprogress"&&(c=r.shift(),o--),c&&(i==="fx"&&r.unshift("inprogress"),delete f.stop,c.call(t,d,f)),!o&&f&&f.empty.fire()},_queueHooks:function(t,i){var r=i+"queueHooks";return it.get(t,r)||it.access(t,r,{empty:l.Callbacks("once memory").add(function(){it.remove(t,[i+"queue",r])})})}}),l.fn.extend({queue:function(t,i){var r=2;return typeof t!="string"&&(i=t,t="fx",r--),arguments.length<r?l.queue(this[0],t):i===void 0?this:this.each(function(){var o=l.queue(this,t,i);l._queueHooks(this,t),t==="fx"&&o[0]!=="inprogress"&&l.dequeue(this,t)})},dequeue:function(t){return this.each(function(){l.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,i){var r,o=1,c=l.Deferred(),f=this,d=this.length,T=function(){--o||c.resolveWith(f,[f])};for(typeof t!="string"&&(i=t,t=void 0),t=t||"fx";d--;)r=it.get(f[d],t+"queueHooks"),r&&r.empty&&(o++,r.empty.add(T));return T(),c.promise(i)}});var pn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,mi=new RegExp("^(?:([+-])=|)("+pn+")([a-z%]*)$","i"),te=["Top","Right","Bottom","Left"],We=p.documentElement,ge=function(t){return l.contains(t.ownerDocument,t)},Qr={composed:!0};We.getRootNode&&(ge=function(t){return l.contains(t.ownerDocument,t)||t.getRootNode(Qr)===t.ownerDocument});var Bi=function(t,i){return t=i||t,t.style.display==="none"||t.style.display===""&&ge(t)&&l.css(t,"display")==="none"};function Qn(t,i,r,o){var c,f,d=20,T=o?function(){return o.cur()}:function(){return l.css(t,i,"")},b=T(),O=r&&r[3]||(l.cssNumber[i]?"":"px"),M=t.nodeType&&(l.cssNumber[i]||O!=="px"&&+b)&&mi.exec(l.css(t,i));if(M&&M[3]!==O){for(b=b/2,O=O||M[3],M=+b||1;d--;)l.style(t,i,M+O),(1-f)*(1-(f=T()/b||.5))<=0&&(d=0),M=M/f;M=M*2,l.style(t,i,M+O),r=r||[]}return r&&(M=+M||+b||0,c=r[1]?M+(r[1]+1)*r[2]:+r[2],o&&(o.unit=O,o.start=M,o.end=c)),c}var Jn={};function Jr(t){var i,r=t.ownerDocument,o=t.nodeName,c=Jn[o];return c||(i=r.body.appendChild(r.createElement(o)),c=l.css(i,"display"),i.parentNode.removeChild(i),c==="none"&&(c="block"),Jn[o]=c,c)}function ii(t,i){for(var r,o,c=[],f=0,d=t.length;f<d;f++)o=t[f],o.style&&(r=o.style.display,i?(r==="none"&&(c[f]=it.get(o,"display")||null,c[f]||(o.style.display="")),o.style.display===""&&Bi(o)&&(c[f]=Jr(o))):r!=="none"&&(c[f]="none",it.set(o,"display",r)));for(f=0;f<d;f++)c[f]!=null&&(t[f].style.display=c[f]);return t}l.fn.extend({show:function(){return ii(this,!0)},hide:function(){return ii(this)},toggle:function(t){return typeof t=="boolean"?t?this.show():this.hide():this.each(function(){Bi(this)?l(this).show():l(this).hide()})}});var vi=/^(?:checkbox|radio)$/i,Zn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tr=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=p.createDocumentFragment(),i=t.appendChild(p.createElement("div")),r=p.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),i.appendChild(r),B.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,i.innerHTML="<textarea>x</textarea>",B.noCloneChecked=!!i.cloneNode(!0).lastChild.defaultValue,i.innerHTML="<option></option>",B.option=!!i.lastChild})();var ae={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ae.tbody=ae.tfoot=ae.colgroup=ae.caption=ae.thead,ae.th=ae.td,B.option||(ae.optgroup=ae.option=[1,"<select multiple='multiple'>","</select>"]);function Kt(t,i){var r;return typeof t.getElementsByTagName<"u"?r=t.getElementsByTagName(i||"*"):typeof t.querySelectorAll<"u"?r=t.querySelectorAll(i||"*"):r=[],i===void 0||i&&ct(t,i)?l.merge([t],r):r}function ni(t,i){for(var r=0,o=t.length;r<o;r++)it.set(t[r],"globalEval",!i||it.get(i[r],"globalEval"))}var Zr=/<|&#?\w+;/;function ts(t,i,r,o,c){for(var f,d,T,b,O,M,j=i.createDocumentFragment(),L=[],Y=0,st=t.length;Y<st;Y++)if(f=t[Y],f||f===0)if(K(f)==="object")l.merge(L,f.nodeType?[f]:f);else if(!Zr.test(f))L.push(i.createTextNode(f));else{for(d=d||j.appendChild(i.createElement("div")),T=(Zn.exec(f)||["",""])[1].toLowerCase(),b=ae[T]||ae._default,d.innerHTML=b[1]+l.htmlPrefilter(f)+b[2],M=b[0];M--;)d=d.lastChild;l.merge(L,d.childNodes),d=j.firstChild,d.textContent=""}for(j.textContent="",Y=0;f=L[Y++];){if(o&&l.inArray(f,o)>-1){c&&c.push(f);continue}if(O=ge(f),d=Kt(j.appendChild(f),"script"),O&&ni(d),r)for(M=0;f=d[M++];)tr.test(f.type||"")&&r.push(f)}return j}var Oe=/^([^.]*)(?:\.(.+)|)/;function qe(){return!0}function ri(){return!1}function gn(t,i,r,o,c,f){var d,T;if(typeof i=="object"){typeof r!="string"&&(o=o||r,r=void 0);for(T in i)gn(t,T,r,o,i[T],f);return t}if(o==null&&c==null?(c=r,o=r=void 0):c==null&&(typeof r=="string"?(c=o,o=void 0):(c=o,o=r,r=void 0)),c===!1)c=ri;else if(!c)return t;return f===1&&(d=c,c=function(b){return l().off(b),d.apply(this,arguments)},c.guid=d.guid||(d.guid=l.guid++)),t.each(function(){l.event.add(this,i,c,o,r)})}l.event={global:{},add:function(t,i,r,o,c){var f,d,T,b,O,M,j,L,Y,st,pt,dt=it.get(t);if(pi(t))for(r.handler&&(f=r,r=f.handler,c=f.selector),c&&l.find.matchesSelector(We,c),r.guid||(r.guid=l.guid++),(b=dt.events)||(b=dt.events=Object.create(null)),(d=dt.handle)||(d=dt.handle=function(Mt){return typeof l<"u"&&l.event.triggered!==Mt.type?l.event.dispatch.apply(t,arguments):void 0}),i=(i||"").match(se)||[""],O=i.length;O--;)T=Oe.exec(i[O])||[],Y=pt=T[1],st=(T[2]||"").split(".").sort(),Y&&(j=l.event.special[Y]||{},Y=(c?j.delegateType:j.bindType)||Y,j=l.event.special[Y]||{},M=l.extend({type:Y,origType:pt,data:o,handler:r,guid:r.guid,selector:c,needsContext:c&&l.expr.match.needsContext.test(c),namespace:st.join(".")},f),(L=b[Y])||(L=b[Y]=[],L.delegateCount=0,(!j.setup||j.setup.call(t,o,st,d)===!1)&&t.addEventListener&&t.addEventListener(Y,d)),j.add&&(j.add.call(t,M),M.handler.guid||(M.handler.guid=r.guid)),c?L.splice(L.delegateCount++,0,M):L.push(M),l.event.global[Y]=!0)},remove:function(t,i,r,o,c){var f,d,T,b,O,M,j,L,Y,st,pt,dt=it.hasData(t)&&it.get(t);if(!(!dt||!(b=dt.events))){for(i=(i||"").match(se)||[""],O=i.length;O--;){if(T=Oe.exec(i[O])||[],Y=pt=T[1],st=(T[2]||"").split(".").sort(),!Y){for(Y in b)l.event.remove(t,Y+i[O],r,o,!0);continue}for(j=l.event.special[Y]||{},Y=(o?j.delegateType:j.bindType)||Y,L=b[Y]||[],T=T[2]&&new RegExp("(^|\\.)"+st.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=f=L.length;f--;)M=L[f],(c||pt===M.origType)&&(!r||r.guid===M.guid)&&(!T||T.test(M.namespace))&&(!o||o===M.selector||o==="**"&&M.selector)&&(L.splice(f,1),M.selector&&L.delegateCount--,j.remove&&j.remove.call(t,M));d&&!L.length&&((!j.teardown||j.teardown.call(t,st,dt.handle)===!1)&&l.removeEvent(t,Y,dt.handle),delete b[Y])}l.isEmptyObject(b)&&it.remove(t,"handle events")}},dispatch:function(t){var i,r,o,c,f,d,T=new Array(arguments.length),b=l.event.fix(t),O=(it.get(this,"events")||Object.create(null))[b.type]||[],M=l.event.special[b.type]||{};for(T[0]=b,i=1;i<arguments.length;i++)T[i]=arguments[i];if(b.delegateTarget=this,!(M.preDispatch&&M.preDispatch.call(this,b)===!1)){for(d=l.event.handlers.call(this,b,O),i=0;(c=d[i++])&&!b.isPropagationStopped();)for(b.currentTarget=c.elem,r=0;(f=c.handlers[r++])&&!b.isImmediatePropagationStopped();)(!b.rnamespace||f.namespace===!1||b.rnamespace.test(f.namespace))&&(b.handleObj=f,b.data=f.data,o=((l.event.special[f.origType]||{}).handle||f.handler).apply(c.elem,T),o!==void 0&&(b.result=o)===!1&&(b.preventDefault(),b.stopPropagation()));return M.postDispatch&&M.postDispatch.call(this,b),b.result}},handlers:function(t,i){var r,o,c,f,d,T=[],b=i.delegateCount,O=t.target;if(b&&O.nodeType&&!(t.type==="click"&&t.button>=1)){for(;O!==this;O=O.parentNode||this)if(O.nodeType===1&&!(t.type==="click"&&O.disabled===!0)){for(f=[],d={},r=0;r<b;r++)o=i[r],c=o.selector+" ",d[c]===void 0&&(d[c]=o.needsContext?l(c,this).index(O)>-1:l.find(c,this,null,[O]).length),d[c]&&f.push(o);f.length&&T.push({elem:O,handlers:f})}}return O=this,b<i.length&&T.push({elem:O,handlers:i.slice(b)}),T},addProp:function(t,i){Object.defineProperty(l.Event.prototype,t,{enumerable:!0,configurable:!0,get:F(i)?function(){if(this.originalEvent)return i(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(r){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:r})}})},fix:function(t){return t[l.expando]?t:new l.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var i=this||t;return vi.test(i.type)&&i.click&&ct(i,"input")&&Vi(i,"click",!0),!1},trigger:function(t){var i=this||t;return vi.test(i.type)&&i.click&&ct(i,"input")&&Vi(i,"click"),!0},_default:function(t){var i=t.target;return vi.test(i.type)&&i.click&&ct(i,"input")&&it.get(i,"click")||ct(i,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}};function Vi(t,i,r){if(!r){it.get(t,i)===void 0&&l.event.add(t,i,qe);return}it.set(t,i,!1),l.event.add(t,i,{namespace:!1,handler:function(o){var c,f=it.get(this,i);if(o.isTrigger&1&&this[i]){if(f)(l.event.special[i]||{}).delegateType&&o.stopPropagation();else if(f=h.call(arguments),it.set(this,i,f),this[i](),c=it.get(this,i),it.set(this,i,!1),f!==c)return o.stopImmediatePropagation(),o.preventDefault(),c}else f&&(it.set(this,i,l.event.trigger(f[0],f.slice(1),this)),o.stopPropagation(),o.isImmediatePropagationStopped=qe)}})}l.removeEvent=function(t,i,r){t.removeEventListener&&t.removeEventListener(i,r)},l.Event=function(t,i){if(!(this instanceof l.Event))return new l.Event(t,i);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?qe:ri,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,i&&l.extend(this,i),this.timeStamp=t&&t.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:ri,isPropagationStopped:ri,isImmediatePropagationStopped:ri,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=qe,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=qe,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=qe,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(t,i){function r(o){if(p.documentMode){var c=it.get(this,"handle"),f=l.event.fix(o);f.type=o.type==="focusin"?"focus":"blur",f.isSimulated=!0,c(o),f.target===f.currentTarget&&c(f)}else l.event.simulate(i,o.target,l.event.fix(o))}l.event.special[t]={setup:function(){var o;if(Vi(this,t,!0),p.documentMode)o=it.get(this,i),o||this.addEventListener(i,r),it.set(this,i,(o||0)+1);else return!1},trigger:function(){return Vi(this,t),!0},teardown:function(){var o;if(p.documentMode)o=it.get(this,i)-1,o?it.set(this,i,o):(this.removeEventListener(i,r),it.remove(this,i));else return!1},_default:function(o){return it.get(o.target,t)},delegateType:i},l.event.special[i]={setup:function(){var o=this.ownerDocument||this.document||this,c=p.documentMode?this:o,f=it.get(c,i);f||(p.documentMode?this.addEventListener(i,r):o.addEventListener(t,r,!0)),it.set(c,i,(f||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,c=p.documentMode?this:o,f=it.get(c,i)-1;f?it.set(c,i,f):(p.documentMode?this.removeEventListener(i,r):o.removeEventListener(t,r,!0),it.remove(c,i))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,i){l.event.special[t]={delegateType:i,bindType:i,handle:function(r){var o,c=this,f=r.relatedTarget,d=r.handleObj;return(!f||f!==c&&!l.contains(c,f))&&(r.type=d.origType,o=d.handler.apply(this,arguments),r.type=i),o}}}),l.fn.extend({on:function(t,i,r,o){return gn(this,t,i,r,o)},one:function(t,i,r,o){return gn(this,t,i,r,o,1)},off:function(t,i,r){var o,c;if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,l(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof t=="object"){for(c in t)this.off(c,i,t[c]);return this}return(i===!1||typeof i=="function")&&(r=i,i=void 0),r===!1&&(r=ri),this.each(function(){l.event.remove(this,t,r,i)})}});var yi=/<script|<style|<link/i,si=/checked\s*(?:[^=]|=\s*.checked.)/i,oi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function _i(t,i){return ct(t,"table")&&ct(i.nodeType!==11?i:i.firstChild,"tr")&&l(t).children("tbody")[0]||t}function es(t){return t.type=(t.getAttribute("type")!==null)+"/"+t.type,t}function mn(t){return(t.type||"").slice(0,5)==="true/"?t.type=t.type.slice(5):t.removeAttribute("type"),t}function er(t,i){var r,o,c,f,d,T,b;if(i.nodeType===1){if(it.hasData(t)&&(f=it.get(t),b=f.events,b)){it.remove(i,"handle events");for(c in b)for(r=0,o=b[c].length;r<o;r++)l.event.add(i,c,b[c][r])}Ut.hasData(t)&&(d=Ut.access(t),T=l.extend({},d),Ut.set(i,T))}}function is(t,i){var r=i.nodeName.toLowerCase();r==="input"&&vi.test(t.type)?i.checked=t.checked:(r==="input"||r==="textarea")&&(i.defaultValue=t.defaultValue)}function ai(t,i,r,o){i=v(i);var c,f,d,T,b,O,M=0,j=t.length,L=j-1,Y=i[0],st=F(Y);if(st||j>1&&typeof Y=="string"&&!B.checkClone&&si.test(Y))return t.each(function(pt){var dt=t.eq(pt);st&&(i[0]=Y.call(this,pt,dt.html())),ai(dt,i,r,o)});if(j&&(c=ts(i,t[0].ownerDocument,!1,t,o),f=c.firstChild,c.childNodes.length===1&&(c=f),f||o)){for(d=l.map(Kt(c,"script"),es),T=d.length;M<j;M++)b=c,M!==L&&(b=l.clone(b,!0,!0),T&&l.merge(d,Kt(b,"script"))),r.call(t[M],b,M);if(T)for(O=d[d.length-1].ownerDocument,l.map(d,mn),M=0;M<T;M++)b=d[M],tr.test(b.type||"")&&!it.access(b,"globalEval")&&l.contains(O,b)&&(b.src&&(b.type||"").toLowerCase()!=="module"?l._evalUrl&&!b.noModule&&l._evalUrl(b.src,{nonce:b.nonce||b.getAttribute("nonce")},O):z(b.textContent.replace(oi,""),b,O))}return t}function ir(t,i,r){for(var o,c=i?l.filter(i,t):t,f=0;(o=c[f])!=null;f++)!r&&o.nodeType===1&&l.cleanData(Kt(o)),o.parentNode&&(r&&ge(o)&&ni(Kt(o,"script")),o.parentNode.removeChild(o));return t}l.extend({htmlPrefilter:function(t){return t},clone:function(t,i,r){var o,c,f,d,T=t.cloneNode(!0),b=ge(t);if(!B.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!l.isXMLDoc(t))for(d=Kt(T),f=Kt(t),o=0,c=f.length;o<c;o++)is(f[o],d[o]);if(i)if(r)for(f=f||Kt(t),d=d||Kt(T),o=0,c=f.length;o<c;o++)er(f[o],d[o]);else er(t,T);return d=Kt(T,"script"),d.length>0&&ni(d,!b&&Kt(t,"script")),T},cleanData:function(t){for(var i,r,o,c=l.event.special,f=0;(r=t[f])!==void 0;f++)if(pi(r)){if(i=r[it.expando]){if(i.events)for(o in i.events)c[o]?l.event.remove(r,o):l.removeEvent(r,o,i.handle);r[it.expando]=void 0}r[Ut.expando]&&(r[Ut.expando]=void 0)}}}),l.fn.extend({detach:function(t){return ir(this,t,!0)},remove:function(t){return ir(this,t)},text:function(t){return xe(this,function(i){return i===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=i)})},null,t,arguments.length)},append:function(){return ai(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=_i(this,t);i.appendChild(t)}})},prepend:function(){return ai(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=_i(this,t);i.insertBefore(t,i.firstChild)}})},before:function(){return ai(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return ai(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,i=0;(t=this[i])!=null;i++)t.nodeType===1&&(l.cleanData(Kt(t,!1)),t.textContent="");return this},clone:function(t,i){return t=t??!1,i=i??t,this.map(function(){return l.clone(this,t,i)})},html:function(t){return xe(this,function(i){var r=this[0]||{},o=0,c=this.length;if(i===void 0&&r.nodeType===1)return r.innerHTML;if(typeof i=="string"&&!yi.test(i)&&!ae[(Zn.exec(i)||["",""])[1].toLowerCase()]){i=l.htmlPrefilter(i);try{for(;o<c;o++)r=this[o]||{},r.nodeType===1&&(l.cleanData(Kt(r,!1)),r.innerHTML=i);r=0}catch{}}r&&this.empty().append(i)},null,t,arguments.length)},replaceWith:function(){var t=[];return ai(this,arguments,function(i){var r=this.parentNode;l.inArray(this,t)<0&&(l.cleanData(Kt(this)),r&&r.replaceChild(i,this))},t)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,i){l.fn[t]=function(r){for(var o,c=[],f=l(r),d=f.length-1,T=0;T<=d;T++)o=T===d?this:this.clone(!0),l(f[T])[i](o),m.apply(c,o.get());return this.pushStack(c)}});var vn=new RegExp("^("+pn+")(?!px)[a-z%]+$","i"),yn=/^--/,bi=function(t){var i=t.ownerDocument.defaultView;return(!i||!i.opener)&&(i=_),i.getComputedStyle(t)},Ei=function(t,i,r){var o,c,f={};for(c in i)f[c]=t.style[c],t.style[c]=i[c];o=r.call(t);for(c in i)t.style[c]=f[c];return o},ns=new RegExp(te.join("|"),"i");(function(){function t(){if(O){b.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",O.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",We.appendChild(b).appendChild(O);var M=_.getComputedStyle(O);r=M.top!=="1%",T=i(M.marginLeft)===12,O.style.right="60%",f=i(M.right)===36,o=i(M.width)===36,O.style.position="absolute",c=i(O.offsetWidth/3)===12,We.removeChild(b),O=null}}function i(M){return Math.round(parseFloat(M))}var r,o,c,f,d,T,b=p.createElement("div"),O=p.createElement("div");O.style&&(O.style.backgroundClip="content-box",O.cloneNode(!0).style.backgroundClip="",B.clearCloneStyle=O.style.backgroundClip==="content-box",l.extend(B,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),f},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),T},scrollboxSize:function(){return t(),c},reliableTrDimensions:function(){var M,j,L,Y;return d==null&&(M=p.createElement("table"),j=p.createElement("tr"),L=p.createElement("div"),M.style.cssText="position:absolute;left:-11111px;border-collapse:separate",j.style.cssText="box-sizing:content-box;border:1px solid",j.style.height="1px",L.style.height="9px",L.style.display="block",We.appendChild(M).appendChild(j).appendChild(L),Y=_.getComputedStyle(j),d=parseInt(Y.height,10)+parseInt(Y.borderTopWidth,10)+parseInt(Y.borderBottomWidth,10)===j.offsetHeight,We.removeChild(M)),d}}))})();function Ti(t,i,r){var o,c,f,d,T=yn.test(i),b=t.style;return r=r||bi(t),r&&(d=r.getPropertyValue(i)||r[i],T&&d&&(d=d.replace(ti,"$1")||void 0),d===""&&!ge(t)&&(d=l.style(t,i)),!B.pixelBoxStyles()&&vn.test(d)&&ns.test(i)&&(o=b.width,c=b.minWidth,f=b.maxWidth,b.minWidth=b.maxWidth=b.width=d,d=r.width,b.width=o,b.minWidth=c,b.maxWidth=f)),d!==void 0?d+"":d}function nr(t,i){return{get:function(){if(t()){delete this.get;return}return(this.get=i).apply(this,arguments)}}}var rr=["Webkit","Moz","ms"],sr=p.createElement("div").style,_n={};function or(t){for(var i=t[0].toUpperCase()+t.slice(1),r=rr.length;r--;)if(t=rr[r]+i,t in sr)return t}function bn(t){var i=l.cssProps[t]||_n[t];return i||(t in sr?t:_n[t]=or(t)||t)}var rs=/^(none|table(?!-c[ea]).+)/,ss={position:"absolute",visibility:"hidden",display:"block"},ar={letterSpacing:"0",fontWeight:"400"};function lr(t,i,r){var o=mi.exec(i);return o?Math.max(0,o[2]-(r||0))+(o[3]||"px"):i}function En(t,i,r,o,c,f){var d=i==="width"?1:0,T=0,b=0,O=0;if(r===(o?"border":"content"))return 0;for(;d<4;d+=2)r==="margin"&&(O+=l.css(t,r+te[d],!0,c)),o?(r==="content"&&(b-=l.css(t,"padding"+te[d],!0,c)),r!=="margin"&&(b-=l.css(t,"border"+te[d]+"Width",!0,c))):(b+=l.css(t,"padding"+te[d],!0,c),r!=="padding"?b+=l.css(t,"border"+te[d]+"Width",!0,c):T+=l.css(t,"border"+te[d]+"Width",!0,c));return!o&&f>=0&&(b+=Math.max(0,Math.ceil(t["offset"+i[0].toUpperCase()+i.slice(1)]-f-b-T-.5))||0),b+O}function ur(t,i,r){var o=bi(t),c=!B.boxSizingReliable()||r,f=c&&l.css(t,"boxSizing",!1,o)==="border-box",d=f,T=Ti(t,i,o),b="offset"+i[0].toUpperCase()+i.slice(1);if(vn.test(T)){if(!r)return T;T="auto"}return(!B.boxSizingReliable()&&f||!B.reliableTrDimensions()&&ct(t,"tr")||T==="auto"||!parseFloat(T)&&l.css(t,"display",!1,o)==="inline")&&t.getClientRects().length&&(f=l.css(t,"boxSizing",!1,o)==="border-box",d=b in t,d&&(T=t[b])),T=parseFloat(T)||0,T+En(t,i,r||(f?"border":"content"),d,o,T)+"px"}l.extend({cssHooks:{opacity:{get:function(t,i){if(i){var r=Ti(t,"opacity");return r===""?"1":r}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(t,i,r,o){if(!(!t||t.nodeType===3||t.nodeType===8||!t.style)){var c,f,d,T=Te(i),b=yn.test(i),O=t.style;if(b||(i=bn(T)),d=l.cssHooks[i]||l.cssHooks[T],r!==void 0){if(f=typeof r,f==="string"&&(c=mi.exec(r))&&c[1]&&(r=Qn(t,i,c),f="number"),r==null||r!==r)return;f==="number"&&!b&&(r+=c&&c[3]||(l.cssNumber[T]?"":"px")),!B.clearCloneStyle&&r===""&&i.indexOf("background")===0&&(O[i]="inherit"),(!d||!("set"in d)||(r=d.set(t,r,o))!==void 0)&&(b?O.setProperty(i,r):O[i]=r)}else return d&&"get"in d&&(c=d.get(t,!1,o))!==void 0?c:O[i]}},css:function(t,i,r,o){var c,f,d,T=Te(i),b=yn.test(i);return b||(i=bn(T)),d=l.cssHooks[i]||l.cssHooks[T],d&&"get"in d&&(c=d.get(t,!0,r)),c===void 0&&(c=Ti(t,i,o)),c==="normal"&&i in ar&&(c=ar[i]),r===""||r?(f=parseFloat(c),r===!0||isFinite(f)?f||0:c):c}}),l.each(["height","width"],function(t,i){l.cssHooks[i]={get:function(r,o,c){if(o)return rs.test(l.css(r,"display"))&&(!r.getClientRects().length||!r.getBoundingClientRect().width)?Ei(r,ss,function(){return ur(r,i,c)}):ur(r,i,c)},set:function(r,o,c){var f,d=bi(r),T=!B.scrollboxSize()&&d.position==="absolute",b=T||c,O=b&&l.css(r,"boxSizing",!1,d)==="border-box",M=c?En(r,i,c,O,d):0;return O&&T&&(M-=Math.ceil(r["offset"+i[0].toUpperCase()+i.slice(1)]-parseFloat(d[i])-En(r,i,"border",!1,d)-.5)),M&&(f=mi.exec(o))&&(f[3]||"px")!=="px"&&(r.style[i]=o,o=l.css(r,i)),lr(r,o,M)}}}),l.cssHooks.marginLeft=nr(B.reliableMarginLeft,function(t,i){if(i)return(parseFloat(Ti(t,"marginLeft"))||t.getBoundingClientRect().left-Ei(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(t,i){l.cssHooks[t+i]={expand:function(r){for(var o=0,c={},f=typeof r=="string"?r.split(" "):[r];o<4;o++)c[t+te[o]+i]=f[o]||f[o-2]||f[0];return c}},t!=="margin"&&(l.cssHooks[t+i].set=lr)}),l.fn.extend({css:function(t,i){return xe(this,function(r,o,c){var f,d,T={},b=0;if(Array.isArray(o)){for(f=bi(r),d=o.length;b<d;b++)T[o[b]]=l.css(r,o[b],!1,f);return T}return c!==void 0?l.style(r,o,c):l.css(r,o)},t,i,arguments.length>1)}});function Gt(t,i,r,o,c){return new Gt.prototype.init(t,i,r,o,c)}l.Tween=Gt,Gt.prototype={constructor:Gt,init:function(t,i,r,o,c,f){this.elem=t,this.prop=r,this.easing=c||l.easing._default,this.options=i,this.start=this.now=this.cur(),this.end=o,this.unit=f||(l.cssNumber[r]?"":"px")},cur:function(){var t=Gt.propHooks[this.prop];return t&&t.get?t.get(this):Gt.propHooks._default.get(this)},run:function(t){var i,r=Gt.propHooks[this.prop];return this.options.duration?this.pos=i=l.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=i=t,this.now=(this.end-this.start)*i+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),r&&r.set?r.set(this):Gt.propHooks._default.set(this),this}},Gt.prototype.init.prototype=Gt.prototype,Gt.propHooks={_default:{get:function(t){var i;return t.elem.nodeType!==1||t.elem[t.prop]!=null&&t.elem.style[t.prop]==null?t.elem[t.prop]:(i=l.css(t.elem,t.prop,""),!i||i==="auto"?0:i)},set:function(t){l.fx.step[t.prop]?l.fx.step[t.prop](t):t.elem.nodeType===1&&(l.cssHooks[t.prop]||t.elem.style[bn(t.prop)]!=null)?l.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},Gt.propHooks.scrollTop=Gt.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},l.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},l.fx=Gt.prototype.init,l.fx.step={};var me,Yi,Bs=/^(?:toggle|show|hide)$/,Si=/queueHooks$/;function Tn(){Yi&&(p.hidden===!1&&_.requestAnimationFrame?_.requestAnimationFrame(Tn):_.setTimeout(Tn,l.fx.interval),l.fx.tick())}function cr(){return _.setTimeout(function(){me=void 0}),me=Date.now()}function Ui(t,i){var r,o=0,c={height:t};for(i=i?1:0;o<4;o+=2-i)r=te[o],c["margin"+r]=c["padding"+r]=t;return i&&(c.opacity=c.width=t),c}function fr(t,i,r){for(var o,c=(ee.tweeners[i]||[]).concat(ee.tweeners["*"]),f=0,d=c.length;f<d;f++)if(o=c[f].call(r,i,t))return o}function os(t,i,r){var o,c,f,d,T,b,O,M,j="width"in i||"height"in i,L=this,Y={},st=t.style,pt=t.nodeType&&Bi(t),dt=it.get(t,"fxshow");r.queue||(d=l._queueHooks(t,"fx"),d.unqueued==null&&(d.unqueued=0,T=d.empty.fire,d.empty.fire=function(){d.unqueued||T()}),d.unqueued++,L.always(function(){L.always(function(){d.unqueued--,l.queue(t,"fx").length||d.empty.fire()})}));for(o in i)if(c=i[o],Bs.test(c)){if(delete i[o],f=f||c==="toggle",c===(pt?"hide":"show"))if(c==="show"&&dt&&dt[o]!==void 0)pt=!0;else continue;Y[o]=dt&&dt[o]||l.style(t,o)}if(b=!l.isEmptyObject(i),!(!b&&l.isEmptyObject(Y))){j&&t.nodeType===1&&(r.overflow=[st.overflow,st.overflowX,st.overflowY],O=dt&&dt.display,O==null&&(O=it.get(t,"display")),M=l.css(t,"display"),M==="none"&&(O?M=O:(ii([t],!0),O=t.style.display||O,M=l.css(t,"display"),ii([t]))),(M==="inline"||M==="inline-block"&&O!=null)&&l.css(t,"float")==="none"&&(b||(L.done(function(){st.display=O}),O==null&&(M=st.display,O=M==="none"?"":M)),st.display="inline-block")),r.overflow&&(st.overflow="hidden",L.always(function(){st.overflow=r.overflow[0],st.overflowX=r.overflow[1],st.overflowY=r.overflow[2]})),b=!1;for(o in Y)b||(dt?"hidden"in dt&&(pt=dt.hidden):dt=it.access(t,"fxshow",{display:O}),f&&(dt.hidden=!pt),pt&&ii([t],!0),L.done(function(){pt||ii([t]),it.remove(t,"fxshow");for(o in Y)l.style(t,o,Y[o])})),b=fr(pt?dt[o]:0,o,L),o in dt||(dt[o]=b.start,pt&&(b.end=b.start,b.start=0))}}function as(t,i){var r,o,c,f,d;for(r in t)if(o=Te(r),c=i[o],f=t[r],Array.isArray(f)&&(c=f[1],f=t[r]=f[0]),r!==o&&(t[o]=f,delete t[r]),d=l.cssHooks[o],d&&"expand"in d){f=d.expand(f),delete t[o];for(r in f)r in t||(t[r]=f[r],i[r]=c)}else i[o]=c}function ee(t,i,r){var o,c,f=0,d=ee.prefilters.length,T=l.Deferred().always(function(){delete b.elem}),b=function(){if(c)return!1;for(var j=me||cr(),L=Math.max(0,O.startTime+O.duration-j),Y=L/O.duration||0,st=1-Y,pt=0,dt=O.tweens.length;pt<dt;pt++)O.tweens[pt].run(st);return T.notifyWith(t,[O,st,L]),st<1&&dt?L:(dt||T.notifyWith(t,[O,1,0]),T.resolveWith(t,[O]),!1)},O=T.promise({elem:t,props:l.extend({},i),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},r),originalProperties:i,originalOptions:r,startTime:me||cr(),duration:r.duration,tweens:[],createTween:function(j,L){var Y=l.Tween(t,O.opts,j,L,O.opts.specialEasing[j]||O.opts.easing);return O.tweens.push(Y),Y},stop:function(j){var L=0,Y=j?O.tweens.length:0;if(c)return this;for(c=!0;L<Y;L++)O.tweens[L].run(1);return j?(T.notifyWith(t,[O,1,0]),T.resolveWith(t,[O,j])):T.rejectWith(t,[O,j]),this}}),M=O.props;for(as(M,O.opts.specialEasing);f<d;f++)if(o=ee.prefilters[f].call(O,t,M,O.opts),o)return F(o.stop)&&(l._queueHooks(O.elem,O.opts.queue).stop=o.stop.bind(o)),o;return l.map(M,fr,O),F(O.opts.start)&&O.opts.start.call(t,O),O.progress(O.opts.progress).done(O.opts.done,O.opts.complete).fail(O.opts.fail).always(O.opts.always),l.fx.timer(l.extend(b,{elem:t,anim:O,queue:O.opts.queue})),O}l.Animation=l.extend(ee,{tweeners:{"*":[function(t,i){var r=this.createTween(t,i);return Qn(r.elem,t,mi.exec(i),r),r}]},tweener:function(t,i){F(t)?(i=t,t=["*"]):t=t.match(se);for(var r,o=0,c=t.length;o<c;o++)r=t[o],ee.tweeners[r]=ee.tweeners[r]||[],ee.tweeners[r].unshift(i)},prefilters:[os],prefilter:function(t,i){i?ee.prefilters.unshift(t):ee.prefilters.push(t)}}),l.speed=function(t,i,r){var o=t&&typeof t=="object"?l.extend({},t):{complete:r||!r&&i||F(t)&&t,duration:t,easing:r&&i||i&&!F(i)&&i};return l.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in l.fx.speeds?o.duration=l.fx.speeds[o.duration]:o.duration=l.fx.speeds._default),(o.queue==null||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){F(o.old)&&o.old.call(this),o.queue&&l.dequeue(this,o.queue)},o},l.fn.extend({fadeTo:function(t,i,r,o){return this.filter(Bi).css("opacity",0).show().end().animate({opacity:i},t,r,o)},animate:function(t,i,r,o){var c=l.isEmptyObject(t),f=l.speed(i,r,o),d=function(){var T=ee(this,l.extend({},t),f);(c||it.get(this,"finish"))&&T.stop(!0)};return d.finish=d,c||f.queue===!1?this.each(d):this.queue(f.queue,d)},stop:function(t,i,r){var o=function(c){var f=c.stop;delete c.stop,f(r)};return typeof t!="string"&&(r=i,i=t,t=void 0),i&&this.queue(t||"fx",[]),this.each(function(){var c=!0,f=t!=null&&t+"queueHooks",d=l.timers,T=it.get(this);if(f)T[f]&&T[f].stop&&o(T[f]);else for(f in T)T[f]&&T[f].stop&&Si.test(f)&&o(T[f]);for(f=d.length;f--;)d[f].elem===this&&(t==null||d[f].queue===t)&&(d[f].anim.stop(r),c=!1,d.splice(f,1));(c||!r)&&l.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var i,r=it.get(this),o=r[t+"queue"],c=r[t+"queueHooks"],f=l.timers,d=o?o.length:0;for(r.finish=!0,l.queue(this,t,[]),c&&c.stop&&c.stop.call(this,!0),i=f.length;i--;)f[i].elem===this&&f[i].queue===t&&(f[i].anim.stop(!0),f.splice(i,1));for(i=0;i<d;i++)o[i]&&o[i].finish&&o[i].finish.call(this);delete r.finish})}}),l.each(["toggle","show","hide"],function(t,i){var r=l.fn[i];l.fn[i]=function(o,c,f){return o==null||typeof o=="boolean"?r.apply(this,arguments):this.animate(Ui(i,!0),o,c,f)}}),l.each({slideDown:Ui("show"),slideUp:Ui("hide"),slideToggle:Ui("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,i){l.fn[t]=function(r,o,c){return this.animate(i,r,o,c)}}),l.timers=[],l.fx.tick=function(){var t,i=0,r=l.timers;for(me=Date.now();i<r.length;i++)t=r[i],!t()&&r[i]===t&&r.splice(i--,1);r.length||l.fx.stop(),me=void 0},l.fx.timer=function(t){l.timers.push(t),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Yi||(Yi=!0,Tn())},l.fx.stop=function(){Yi=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(t,i){return t=l.fx&&l.fx.speeds[t]||t,i=i||"fx",this.queue(i,function(r,o){var c=_.setTimeout(r,t);o.stop=function(){_.clearTimeout(c)}})},(function(){var t=p.createElement("input"),i=p.createElement("select"),r=i.appendChild(p.createElement("option"));t.type="checkbox",B.checkOn=t.value!=="",B.optSelected=r.selected,t=p.createElement("input"),t.value="t",t.type="radio",B.radioValue=t.value==="t"})();var Fe,$e=l.expr.attrHandle;l.fn.extend({attr:function(t,i){return xe(this,l.attr,t,i,arguments.length>1)},removeAttr:function(t){return this.each(function(){l.removeAttr(this,t)})}}),l.extend({attr:function(t,i,r){var o,c,f=t.nodeType;if(!(f===3||f===8||f===2)){if(typeof t.getAttribute>"u")return l.prop(t,i,r);if((f!==1||!l.isXMLDoc(t))&&(c=l.attrHooks[i.toLowerCase()]||(l.expr.match.bool.test(i)?Fe:void 0)),r!==void 0){if(r===null){l.removeAttr(t,i);return}return c&&"set"in c&&(o=c.set(t,r,i))!==void 0?o:(t.setAttribute(i,r+""),r)}return c&&"get"in c&&(o=c.get(t,i))!==null?o:(o=l.find.attr(t,i),o??void 0)}},attrHooks:{type:{set:function(t,i){if(!B.radioValue&&i==="radio"&&ct(t,"input")){var r=t.value;return t.setAttribute("type",i),r&&(t.value=r),i}}}},removeAttr:function(t,i){var r,o=0,c=i&&i.match(se);if(c&&t.nodeType===1)for(;r=c[o++];)t.removeAttribute(r)}}),Fe={set:function(t,i,r){return i===!1?l.removeAttr(t,r):t.setAttribute(r,r),r}},l.each(l.expr.match.bool.source.match(/\w+/g),function(t,i){var r=$e[i]||l.find.attr;$e[i]=function(o,c,f){var d,T,b=c.toLowerCase();return f||(T=$e[b],$e[b]=d,d=r(o,c,f)!=null?b:null,$e[b]=T),d}});var ls=/^(?:input|select|textarea|button)$/i,us=/^(?:a|area)$/i;l.fn.extend({prop:function(t,i){return xe(this,l.prop,t,i,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[l.propFix[t]||t]})}}),l.extend({prop:function(t,i,r){var o,c,f=t.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!l.isXMLDoc(t))&&(i=l.propFix[i]||i,c=l.propHooks[i]),r!==void 0?c&&"set"in c&&(o=c.set(t,r,i))!==void 0?o:t[i]=r:c&&"get"in c&&(o=c.get(t,i))!==null?o:t[i]},propHooks:{tabIndex:{get:function(t){var i=l.find.attr(t,"tabindex");return i?parseInt(i,10):ls.test(t.nodeName)||us.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),B.optSelected||(l.propHooks.selected={get:function(t){var i=t.parentNode;return i&&i.parentNode&&i.parentNode.selectedIndex,null},set:function(t){var i=t.parentNode;i&&(i.selectedIndex,i.parentNode&&i.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Be(t){var i=t.match(se)||[];return i.join(" ")}function Ve(t){return t.getAttribute&&t.getAttribute("class")||""}function Sn(t){return Array.isArray(t)?t:typeof t=="string"?t.match(se)||[]:[]}l.fn.extend({addClass:function(t){var i,r,o,c,f,d;return F(t)?this.each(function(T){l(this).addClass(t.call(this,T,Ve(this)))}):(i=Sn(t),i.length?this.each(function(){if(o=Ve(this),r=this.nodeType===1&&" "+Be(o)+" ",r){for(f=0;f<i.length;f++)c=i[f],r.indexOf(" "+c+" ")<0&&(r+=c+" ");d=Be(r),o!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(t){var i,r,o,c,f,d;return F(t)?this.each(function(T){l(this).removeClass(t.call(this,T,Ve(this)))}):arguments.length?(i=Sn(t),i.length?this.each(function(){if(o=Ve(this),r=this.nodeType===1&&" "+Be(o)+" ",r){for(f=0;f<i.length;f++)for(c=i[f];r.indexOf(" "+c+" ")>-1;)r=r.replace(" "+c+" "," ");d=Be(r),o!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(t,i){var r,o,c,f,d=typeof t,T=d==="string"||Array.isArray(t);return F(t)?this.each(function(b){l(this).toggleClass(t.call(this,b,Ve(this),i),i)}):typeof i=="boolean"&&T?i?this.addClass(t):this.removeClass(t):(r=Sn(t),this.each(function(){if(T)for(f=l(this),c=0;c<r.length;c++)o=r[c],f.hasClass(o)?f.removeClass(o):f.addClass(o);else(t===void 0||d==="boolean")&&(o=Ve(this),o&&it.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||t===!1?"":it.get(this,"__className__")||""))}))},hasClass:function(t){var i,r,o=0;for(i=" "+t+" ";r=this[o++];)if(r.nodeType===1&&(" "+Be(Ve(r))+" ").indexOf(i)>-1)return!0;return!1}});var cs=/\r/g;l.fn.extend({val:function(t){var i,r,o,c=this[0];return arguments.length?(o=F(t),this.each(function(f){var d;this.nodeType===1&&(o?d=t.call(this,f,l(this).val()):d=t,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=l.map(d,function(T){return T==null?"":T+""})),i=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,d,"value")===void 0)&&(this.value=d))})):c?(i=l.valHooks[c.type]||l.valHooks[c.nodeName.toLowerCase()],i&&"get"in i&&(r=i.get(c,"value"))!==void 0?r:(r=c.value,typeof r=="string"?r.replace(cs,""):r??"")):void 0}}),l.extend({valHooks:{option:{get:function(t){var i=l.find.attr(t,"value");return i??Be(l.text(t))}},select:{get:function(t){var i,r,o,c=t.options,f=t.selectedIndex,d=t.type==="select-one",T=d?null:[],b=d?f+1:c.length;for(f<0?o=b:o=d?f:0;o<b;o++)if(r=c[o],(r.selected||o===f)&&!r.disabled&&(!r.parentNode.disabled||!ct(r.parentNode,"optgroup"))){if(i=l(r).val(),d)return i;T.push(i)}return T},set:function(t,i){for(var r,o,c=t.options,f=l.makeArray(i),d=c.length;d--;)o=c[d],(o.selected=l.inArray(l.valHooks.option.get(o),f)>-1)&&(r=!0);return r||(t.selectedIndex=-1),f}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(t,i){if(Array.isArray(i))return t.checked=l.inArray(l(t).val(),i)>-1}},B.checkOn||(l.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value})});var Ye=_.location,dr={guid:Date.now()},wn=/\?/;l.parseXML=function(t){var i,r;if(!t||typeof t!="string")return null;try{i=new _.DOMParser().parseFromString(t,"text/xml")}catch{}return r=i&&i.getElementsByTagName("parsererror")[0],(!i||r)&&l.error("Invalid XML: "+(r?l.map(r.childNodes,function(o){return o.textContent}).join(`
`):t)),i};var Ue=/^(?:focusinfocus|focusoutblur)$/,Rt=function(t){t.stopPropagation()};l.extend(l.event,{trigger:function(t,i,r,o){var c,f,d,T,b,O,M,j,L=[r||p],Y=k.call(t,"type")?t.type:t,st=k.call(t,"namespace")?t.namespace.split("."):[];if(f=j=d=r=r||p,!(r.nodeType===3||r.nodeType===8)&&!Ue.test(Y+l.event.triggered)&&(Y.indexOf(".")>-1&&(st=Y.split("."),Y=st.shift(),st.sort()),b=Y.indexOf(":")<0&&"on"+Y,t=t[l.expando]?t:new l.Event(Y,typeof t=="object"&&t),t.isTrigger=o?2:3,t.namespace=st.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+st.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),i=i==null?[t]:l.makeArray(i,[t]),M=l.event.special[Y]||{},!(!o&&M.trigger&&M.trigger.apply(r,i)===!1))){if(!o&&!M.noBubble&&!C(r)){for(T=M.delegateType||Y,Ue.test(T+Y)||(f=f.parentNode);f;f=f.parentNode)L.push(f),d=f;d===(r.ownerDocument||p)&&L.push(d.defaultView||d.parentWindow||_)}for(c=0;(f=L[c++])&&!t.isPropagationStopped();)j=f,t.type=c>1?T:M.bindType||Y,O=(it.get(f,"events")||Object.create(null))[t.type]&&it.get(f,"handle"),O&&O.apply(f,i),O=b&&f[b],O&&O.apply&&pi(f)&&(t.result=O.apply(f,i),t.result===!1&&t.preventDefault());return t.type=Y,!o&&!t.isDefaultPrevented()&&(!M._default||M._default.apply(L.pop(),i)===!1)&&pi(r)&&b&&F(r[Y])&&!C(r)&&(d=r[b],d&&(r[b]=null),l.event.triggered=Y,t.isPropagationStopped()&&j.addEventListener(Y,Rt),r[Y](),t.isPropagationStopped()&&j.removeEventListener(Y,Rt),l.event.triggered=void 0,d&&(r[b]=d)),t.result}},simulate:function(t,i,r){var o=l.extend(new l.Event,r,{type:t,isSimulated:!0});l.event.trigger(o,null,i)}}),l.fn.extend({trigger:function(t,i){return this.each(function(){l.event.trigger(t,i,this)})},triggerHandler:function(t,i){var r=this[0];if(r)return l.event.trigger(t,i,r,!0)}});var ie=/\[\]$/,Xt=/\r?\n/g,qt=/^(?:submit|button|image|reset|file)$/i,Ki=/^(?:input|select|textarea|keygen)/i;function Pe(t,i,r,o){var c;if(Array.isArray(i))l.each(i,function(f,d){r||ie.test(t)?o(t,d):Pe(t+"["+(typeof d=="object"&&d!=null?f:"")+"]",d,r,o)});else if(!r&&K(i)==="object")for(c in i)Pe(t+"["+c+"]",i[c],r,o);else o(t,i)}l.param=function(t,i){var r,o=[],c=function(f,d){var T=F(d)?d():d;o[o.length]=encodeURIComponent(f)+"="+encodeURIComponent(T??"")};if(t==null)return"";if(Array.isArray(t)||t.jquery&&!l.isPlainObject(t))l.each(t,function(){c(this.name,this.value)});else for(r in t)Pe(r,t[r],i,c);return o.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var t=l.prop(this,"elements");return t?l.makeArray(t):this}).filter(function(){var t=this.type;return this.name&&!l(this).is(":disabled")&&Ki.test(this.nodeName)&&!qt.test(t)&&(this.checked||!vi.test(t))}).map(function(t,i){var r=l(this).val();return r==null?null:Array.isArray(r)?l.map(r,function(o){return{name:i.name,value:o.replace(Xt,`\r
`)}}):{name:i.name,value:r.replace(Xt,`\r
`)}}).get()}});var Ke=/%20/g,li=/#.*$/,hr=/([?&])_=[^&]*/,Cn=/^(.*?):[ \t]*([^\r\n]*)$/mg,ui=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,pr=/^(?:GET|HEAD)$/,An=/^\/\//,Gi={},Xi={},xn="*/".concat("*"),Qi=p.createElement("a");Qi.href=Ye.href;function On(t){return function(i,r){typeof i!="string"&&(r=i,i="*");var o,c=0,f=i.toLowerCase().match(se)||[];if(F(r))for(;o=f[c++];)o[0]==="+"?(o=o.slice(1)||"*",(t[o]=t[o]||[]).unshift(r)):(t[o]=t[o]||[]).push(r)}}function kn(t,i,r,o){var c={},f=t===Xi;function d(T){var b;return c[T]=!0,l.each(t[T]||[],function(O,M){var j=M(i,r,o);if(typeof j=="string"&&!f&&!c[j])return i.dataTypes.unshift(j),d(j),!1;if(f)return!(b=j)}),b}return d(i.dataTypes[0])||!c["*"]&&d("*")}function Ji(t,i){var r,o,c=l.ajaxSettings.flatOptions||{};for(r in i)i[r]!==void 0&&((c[r]?t:o||(o={}))[r]=i[r]);return o&&l.extend(!0,t,o),t}function gr(t,i,r){for(var o,c,f,d,T=t.contents,b=t.dataTypes;b[0]==="*";)b.shift(),o===void 0&&(o=t.mimeType||i.getResponseHeader("Content-Type"));if(o){for(c in T)if(T[c]&&T[c].test(o)){b.unshift(c);break}}if(b[0]in r)f=b[0];else{for(c in r){if(!b[0]||t.converters[c+" "+b[0]]){f=c;break}d||(d=c)}f=f||d}if(f)return f!==b[0]&&b.unshift(f),r[f]}function mr(t,i,r,o){var c,f,d,T,b,O={},M=t.dataTypes.slice();if(M[1])for(d in t.converters)O[d.toLowerCase()]=t.converters[d];for(f=M.shift();f;)if(t.responseFields[f]&&(r[t.responseFields[f]]=i),!b&&o&&t.dataFilter&&(i=t.dataFilter(i,t.dataType)),b=f,f=M.shift(),f){if(f==="*")f=b;else if(b!=="*"&&b!==f){if(d=O[b+" "+f]||O["* "+f],!d){for(c in O)if(T=c.split(" "),T[1]===f&&(d=O[b+" "+T[0]]||O["* "+T[0]],d)){d===!0?d=O[c]:O[c]!==!0&&(f=T[0],M.unshift(T[1]));break}}if(d!==!0)if(d&&t.throws)i=d(i);else try{i=d(i)}catch(j){return{state:"parsererror",error:d?j:"No conversion from "+b+" to "+f}}}}return{state:"success",data:i}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ye.href,type:"GET",isLocal:ui.test(Ye.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":xn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(t,i){return i?Ji(Ji(t,l.ajaxSettings),i):Ji(l.ajaxSettings,t)},ajaxPrefilter:On(Gi),ajaxTransport:On(Xi),ajax:function(t,i){typeof t=="object"&&(i=t,t=void 0),i=i||{};var r,o,c,f,d,T,b,O,M,j,L=l.ajaxSetup({},i),Y=L.context||L,st=L.context&&(Y.nodeType||Y.jquery)?l(Y):l.event,pt=l.Deferred(),dt=l.Callbacks("once memory"),Mt=L.statusCode||{},Dt={},ue={},Qt="canceled",vt={readyState:0,getResponseHeader:function(bt){var Lt;if(b){if(!f)for(f={};Lt=Cn.exec(c);)f[Lt[1].toLowerCase()+" "]=(f[Lt[1].toLowerCase()+" "]||[]).concat(Lt[2]);Lt=f[bt.toLowerCase()+" "]}return Lt==null?null:Lt.join(", ")},getAllResponseHeaders:function(){return b?c:null},setRequestHeader:function(bt,Lt){return b==null&&(bt=ue[bt.toLowerCase()]=ue[bt.toLowerCase()]||bt,Dt[bt]=Lt),this},overrideMimeType:function(bt){return b==null&&(L.mimeType=bt),this},statusCode:function(bt){var Lt;if(bt)if(b)vt.always(bt[vt.status]);else for(Lt in bt)Mt[Lt]=[Mt[Lt],bt[Lt]];return this},abort:function(bt){var Lt=bt||Qt;return r&&r.abort(Lt),Me(0,Lt),this}};if(pt.promise(vt),L.url=((t||L.url||Ye.href)+"").replace(An,Ye.protocol+"//"),L.type=i.method||i.type||L.method||L.type,L.dataTypes=(L.dataType||"*").toLowerCase().match(se)||[""],L.crossDomain==null){T=p.createElement("a");try{T.href=L.url,T.href=T.href,L.crossDomain=Qi.protocol+"//"+Qi.host!=T.protocol+"//"+T.host}catch{L.crossDomain=!0}}if(L.data&&L.processData&&typeof L.data!="string"&&(L.data=l.param(L.data,L.traditional)),kn(Gi,L,i,vt),b)return vt;O=l.event&&L.global,O&&l.active++===0&&l.event.trigger("ajaxStart"),L.type=L.type.toUpperCase(),L.hasContent=!pr.test(L.type),o=L.url.replace(li,""),L.hasContent?L.data&&L.processData&&(L.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(L.data=L.data.replace(Ke,"+")):(j=L.url.slice(o.length),L.data&&(L.processData||typeof L.data=="string")&&(o+=(wn.test(o)?"&":"?")+L.data,delete L.data),L.cache===!1&&(o=o.replace(hr,"$1"),j=(wn.test(o)?"&":"?")+"_="+dr.guid+++j),L.url=o+j),L.ifModified&&(l.lastModified[o]&&vt.setRequestHeader("If-Modified-Since",l.lastModified[o]),l.etag[o]&&vt.setRequestHeader("If-None-Match",l.etag[o])),(L.data&&L.hasContent&&L.contentType!==!1||i.contentType)&&vt.setRequestHeader("Content-Type",L.contentType),vt.setRequestHeader("Accept",L.dataTypes[0]&&L.accepts[L.dataTypes[0]]?L.accepts[L.dataTypes[0]]+(L.dataTypes[0]!=="*"?", "+xn+"; q=0.01":""):L.accepts["*"]);for(M in L.headers)vt.setRequestHeader(M,L.headers[M]);if(L.beforeSend&&(L.beforeSend.call(Y,vt,L)===!1||b))return vt.abort();if(Qt="abort",dt.add(L.complete),vt.done(L.success),vt.fail(L.error),r=kn(Xi,L,i,vt),!r)Me(-1,"No Transport");else{if(vt.readyState=1,O&&st.trigger("ajaxSend",[vt,L]),b)return vt;L.async&&L.timeout>0&&(d=_.setTimeout(function(){vt.abort("timeout")},L.timeout));try{b=!1,r.send(Dt,Me)}catch(bt){if(b)throw bt;Me(-1,bt)}}function Me(bt,Lt,wi,Ln){var Se,fi,Bt,He,Re,ne=Lt;b||(b=!0,d&&_.clearTimeout(d),r=void 0,c=Ln||"",vt.readyState=bt>0?4:0,Se=bt>=200&&bt<300||bt===304,wi&&(He=gr(L,vt,wi)),!Se&&l.inArray("script",L.dataTypes)>-1&&l.inArray("json",L.dataTypes)<0&&(L.converters["text script"]=function(){}),He=mr(L,He,vt,Se),Se?(L.ifModified&&(Re=vt.getResponseHeader("Last-Modified"),Re&&(l.lastModified[o]=Re),Re=vt.getResponseHeader("etag"),Re&&(l.etag[o]=Re)),bt===204||L.type==="HEAD"?ne="nocontent":bt===304?ne="notmodified":(ne=He.state,fi=He.data,Bt=He.error,Se=!Bt)):(Bt=ne,(bt||!ne)&&(ne="error",bt<0&&(bt=0))),vt.status=bt,vt.statusText=(Lt||ne)+"",Se?pt.resolveWith(Y,[fi,ne,vt]):pt.rejectWith(Y,[vt,ne,Bt]),vt.statusCode(Mt),Mt=void 0,O&&st.trigger(Se?"ajaxSuccess":"ajaxError",[vt,L,Se?fi:Bt]),dt.fireWith(Y,[vt,ne]),O&&(st.trigger("ajaxComplete",[vt,L]),--l.active||l.event.trigger("ajaxStop")))}return vt},getJSON:function(t,i,r){return l.get(t,i,r,"json")},getScript:function(t,i){return l.get(t,void 0,i,"script")}}),l.each(["get","post"],function(t,i){l[i]=function(r,o,c,f){return F(o)&&(f=f||c,c=o,o=void 0),l.ajax(l.extend({url:r,type:i,dataType:f,data:o,success:c},l.isPlainObject(r)&&r))}}),l.ajaxPrefilter(function(t){var i;for(i in t.headers)i.toLowerCase()==="content-type"&&(t.contentType=t.headers[i]||"")}),l._evalUrl=function(t,i,r){return l.ajax({url:t,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(o){l.globalEval(o,i,r)}})},l.fn.extend({wrapAll:function(t){var i;return this[0]&&(F(t)&&(t=t.call(this[0])),i=l(t,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&i.insertBefore(this[0]),i.map(function(){for(var r=this;r.firstElementChild;)r=r.firstElementChild;return r}).append(this)),this},wrapInner:function(t){return F(t)?this.each(function(i){l(this).wrapInner(t.call(this,i))}):this.each(function(){var i=l(this),r=i.contents();r.length?r.wrapAll(t):i.append(t)})},wrap:function(t){var i=F(t);return this.each(function(r){l(this).wrapAll(i?t.call(this,r):t)})},unwrap:function(t){return this.parent(t).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(t){return!l.expr.pseudos.visible(t)},l.expr.pseudos.visible=function(t){return!!(t.offsetWidth||t.offsetHeight||t.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new _.XMLHttpRequest}catch{}};var vr={0:200,1223:204},ci=l.ajaxSettings.xhr();B.cors=!!ci&&"withCredentials"in ci,B.ajax=ci=!!ci,l.ajaxTransport(function(t){var i,r;if(B.cors||ci&&!t.crossDomain)return{send:function(o,c){var f,d=t.xhr();if(d.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(f in t.xhrFields)d[f]=t.xhrFields[f];t.mimeType&&d.overrideMimeType&&d.overrideMimeType(t.mimeType),!t.crossDomain&&!o["X-Requested-With"]&&(o["X-Requested-With"]="XMLHttpRequest");for(f in o)d.setRequestHeader(f,o[f]);i=function(T){return function(){i&&(i=r=d.onload=d.onerror=d.onabort=d.ontimeout=d.onreadystatechange=null,T==="abort"?d.abort():T==="error"?typeof d.status!="number"?c(0,"error"):c(d.status,d.statusText):c(vr[d.status]||d.status,d.statusText,(d.responseType||"text")!=="text"||typeof d.responseText!="string"?{binary:d.response}:{text:d.responseText},d.getAllResponseHeaders()))}},d.onload=i(),r=d.onerror=d.ontimeout=i("error"),d.onabort!==void 0?d.onabort=r:d.onreadystatechange=function(){d.readyState===4&&_.setTimeout(function(){i&&r()})},i=i("abort");try{d.send(t.hasContent&&t.data||null)}catch(T){if(i)throw T}},abort:function(){i&&i()}}}),l.ajaxPrefilter(function(t){t.crossDomain&&(t.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(t){return l.globalEval(t),t}}}),l.ajaxPrefilter("script",function(t){t.cache===void 0&&(t.cache=!1),t.crossDomain&&(t.type="GET")}),l.ajaxTransport("script",function(t){if(t.crossDomain||t.scriptAttrs){var i,r;return{send:function(o,c){i=l("<script>").attr(t.scriptAttrs||{}).prop({charset:t.scriptCharset,src:t.url}).on("load error",r=function(f){i.remove(),r=null,f&&c(f.type==="error"?404:200,f.type)}),p.head.appendChild(i[0])},abort:function(){r&&r()}}}});var ve=[],Ft=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var t=ve.pop()||l.expando+"_"+dr.guid++;return this[t]=!0,t}}),l.ajaxPrefilter("json jsonp",function(t,i,r){var o,c,f,d=t.jsonp!==!1&&(Ft.test(t.url)?"url":typeof t.data=="string"&&(t.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Ft.test(t.data)&&"data");if(d||t.dataTypes[0]==="jsonp")return o=t.jsonpCallback=F(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,d?t[d]=t[d].replace(Ft,"$1"+o):t.jsonp!==!1&&(t.url+=(wn.test(t.url)?"&":"?")+t.jsonp+"="+o),t.converters["script json"]=function(){return f||l.error(o+" was not called"),f[0]},t.dataTypes[0]="json",c=_[o],_[o]=function(){f=arguments},r.always(function(){c===void 0?l(_).removeProp(o):_[o]=c,t[o]&&(t.jsonpCallback=i.jsonpCallback,ve.push(o)),f&&F(c)&&c(f[0]),f=c=void 0}),"script"}),B.createHTMLDocument=(function(){var t=p.implementation.createHTMLDocument("").body;return t.innerHTML="<form></form><form></form>",t.childNodes.length===2})(),l.parseHTML=function(t,i,r){if(typeof t!="string")return[];typeof i=="boolean"&&(r=i,i=!1);var o,c,f;return i||(B.createHTMLDocument?(i=p.implementation.createHTMLDocument(""),o=i.createElement("base"),o.href=p.location.href,i.head.appendChild(o)):i=p),c=cn.exec(t),f=!r&&[],c?[i.createElement(c[1])]:(c=ts([t],i,f),f&&f.length&&l(f).remove(),l.merge([],c.childNodes))},l.fn.load=function(t,i,r){var o,c,f,d=this,T=t.indexOf(" ");return T>-1&&(o=Be(t.slice(T)),t=t.slice(0,T)),F(i)?(r=i,i=void 0):i&&typeof i=="object"&&(c="POST"),d.length>0&&l.ajax({url:t,type:c||"GET",dataType:"html",data:i}).done(function(b){f=arguments,d.html(o?l("<div>").append(l.parseHTML(b)).find(o):b)}).always(r&&function(b,O){d.each(function(){r.apply(this,f||[b.responseText,O,b])})}),this},l.expr.pseudos.animated=function(t){return l.grep(l.timers,function(i){return t===i.elem}).length},l.offset={setOffset:function(t,i,r){var o,c,f,d,T,b,O,M=l.css(t,"position"),j=l(t),L={};M==="static"&&(t.style.position="relative"),T=j.offset(),f=l.css(t,"top"),b=l.css(t,"left"),O=(M==="absolute"||M==="fixed")&&(f+b).indexOf("auto")>-1,O?(o=j.position(),d=o.top,c=o.left):(d=parseFloat(f)||0,c=parseFloat(b)||0),F(i)&&(i=i.call(t,r,l.extend({},T))),i.top!=null&&(L.top=i.top-T.top+d),i.left!=null&&(L.left=i.left-T.left+c),"using"in i?i.using.call(t,L):j.css(L)}},l.fn.extend({offset:function(t){if(arguments.length)return t===void 0?this:this.each(function(c){l.offset.setOffset(this,t,c)});var i,r,o=this[0];if(o)return o.getClientRects().length?(i=o.getBoundingClientRect(),r=o.ownerDocument.defaultView,{top:i.top+r.pageYOffset,left:i.left+r.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var t,i,r,o=this[0],c={top:0,left:0};if(l.css(o,"position")==="fixed")i=o.getBoundingClientRect();else{for(i=this.offset(),r=o.ownerDocument,t=o.offsetParent||r.documentElement;t&&(t===r.body||t===r.documentElement)&&l.css(t,"position")==="static";)t=t.parentNode;t&&t!==o&&t.nodeType===1&&(c=l(t).offset(),c.top+=l.css(t,"borderTopWidth",!0),c.left+=l.css(t,"borderLeftWidth",!0))}return{top:i.top-c.top-l.css(o,"marginTop",!0),left:i.left-c.left-l.css(o,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent;t&&l.css(t,"position")==="static";)t=t.offsetParent;return t||We})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var r=i==="pageYOffset";l.fn[t]=function(o){return xe(this,function(c,f,d){var T;if(C(c)?T=c:c.nodeType===9&&(T=c.defaultView),d===void 0)return T?T[i]:c[f];T?T.scrollTo(r?T.pageXOffset:d,r?d:T.pageYOffset):c[f]=d},t,o,arguments.length)}}),l.each(["top","left"],function(t,i){l.cssHooks[i]=nr(B.pixelPosition,function(r,o){if(o)return o=Ti(r,i),vn.test(o)?l(r).position()[i]+"px":o})}),l.each({Height:"height",Width:"width"},function(t,i){l.each({padding:"inner"+t,content:i,"":"outer"+t},function(r,o){l.fn[o]=function(c,f){var d=arguments.length&&(r||typeof c!="boolean"),T=r||(c===!0||f===!0?"margin":"border");return xe(this,function(b,O,M){var j;return C(b)?o.indexOf("outer")===0?b["inner"+t]:b.document.documentElement["client"+t]:b.nodeType===9?(j=b.documentElement,Math.max(b.body["scroll"+t],j["scroll"+t],b.body["offset"+t],j["offset"+t],j["client"+t])):M===void 0?l.css(b,O,T):l.style(b,O,M,T)},i,d?c:void 0,d)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(t,i){l.fn[i]=function(r){return this.on(i,r)}}),l.fn.extend({bind:function(t,i,r){return this.on(t,null,i,r)},unbind:function(t,i){return this.off(t,null,i)},delegate:function(t,i,r,o){return this.on(i,t,r,o)},undelegate:function(t,i,r){return arguments.length===1?this.off(t,"**"):this.off(i,t||"**",r)},hover:function(t,i){return this.on("mouseenter",t).on("mouseleave",i||t)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(t,i){l.fn[i]=function(r,o){return arguments.length>0?this.on(i,null,r,o):this.trigger(i)}});var Ge=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(t,i){var r,o,c;if(typeof i=="string"&&(r=t[i],i=t,t=r),!!F(t))return o=h.call(arguments,2),c=function(){return t.apply(i||this,o.concat(h.call(arguments)))},c.guid=t.guid=t.guid||l.guid++,c},l.holdReady=function(t){t?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=ct,l.isFunction=F,l.isWindow=C,l.camelCase=Te,l.type=K,l.now=Date.now,l.isNumeric=function(t){var i=l.type(t);return(i==="number"||i==="string")&&!isNaN(t-parseFloat(t))},l.trim=function(t){return t==null?"":(t+"").replace(Ge,"$1")},typeof define=="function"&&define.amd&&define("jquery",[],function(){return l});var le=_.jQuery,Dn=_.$;return l.noConflict=function(t){return _.$===l&&(_.$=Dn),t&&_.jQuery===l&&(_.jQuery=le),l},typeof w>"u"&&(_.jQuery=_.$=l),l})});var Wo=Yt((Ps,Ms)=>{(function(_,w){typeof Ps=="object"&&typeof Ms<"u"?Ms.exports=w():typeof define=="function"&&define.amd?define(w):(_=_||self,_.Headroom=w())})(Ps,function(){"use strict";function _(){return typeof window<"u"}function w(){var N=!1;try{var R={get passive(){N=!0}};window.addEventListener("test",R,R),window.removeEventListener("test",R,R)}catch{N=!1}return N}function n(){return!!(_()&&function(){}.bind&&"classList"in document.documentElement&&Object.assign&&Object.keys&&requestAnimationFrame)}function s(N){return N.nodeType===9}function h(N){return N&&N.document&&s(N.document)}function v(N){var R=N.document,B=R.body,F=R.documentElement;return{scrollHeight:function(){return Math.max(B.scrollHeight,F.scrollHeight,B.offsetHeight,F.offsetHeight,B.clientHeight,F.clientHeight)},height:function(){return N.innerHeight||F.clientHeight||B.clientHeight},scrollY:function(){return N.pageYOffset!==void 0?N.pageYOffset:(F||B.parentNode||B).scrollTop}}}function m(N){return{scrollHeight:function(){return Math.max(N.scrollHeight,N.offsetHeight,N.clientHeight)},height:function(){return Math.max(N.offsetHeight,N.clientHeight)},scrollY:function(){return N.scrollTop}}}function x(N){return h(N)?v(N):m(N)}function H(N,R,B){var F=w(),C,p=!1,S=x(N),z=S.scrollY(),K={};function tt(){var wt=Math.round(S.scrollY()),ct=S.height(),pe=S.scrollHeight();K.scrollY=wt,K.lastScrollY=z,K.direction=wt>z?"down":"up",K.distance=Math.abs(wt-z),K.isOutOfBounds=wt<0||wt+ct>pe,K.top=wt<=R.offset[K.direction],K.bottom=wt+ct>=pe,K.toleranceExceeded=K.distance>R.tolerance[K.direction],B(K),z=wt,p=!1}function at(){p||(p=!0,C=requestAnimationFrame(tt))}var l=F?{passive:!0,capture:!1}:!1;return N.addEventListener("scroll",at,l),tt(),{destroy:function(){cancelAnimationFrame(C),N.removeEventListener("scroll",at,l)}}}function G(N){return N===Object(N)?N:{down:N,up:N}}function k(N,R){R=R||{},Object.assign(this,k.options,R),this.classes=Object.assign({},k.options.classes,R.classes),this.elem=N,this.tolerance=G(this.tolerance),this.offset=G(this.offset),this.initialised=!1,this.frozen=!1}return k.prototype={constructor:k,init:function(){return k.cutsTheMustard&&!this.initialised&&(this.addClass("initial"),this.initialised=!0,setTimeout(function(N){N.scrollTracker=H(N.scroller,{offset:N.offset,tolerance:N.tolerance},N.update.bind(N))},100,this)),this},destroy:function(){this.initialised=!1,Object.keys(this.classes).forEach(this.removeClass,this),this.scrollTracker.destroy()},unpin:function(){(this.hasClass("pinned")||!this.hasClass("unpinned"))&&(this.addClass("unpinned"),this.removeClass("pinned"),this.onUnpin&&this.onUnpin.call(this))},pin:function(){this.hasClass("unpinned")&&(this.addClass("pinned"),this.removeClass("unpinned"),this.onPin&&this.onPin.call(this))},freeze:function(){this.frozen=!0,this.addClass("frozen")},unfreeze:function(){this.frozen=!1,this.removeClass("frozen")},top:function(){this.hasClass("top")||(this.addClass("top"),this.removeClass("notTop"),this.onTop&&this.onTop.call(this))},notTop:function(){this.hasClass("notTop")||(this.addClass("notTop"),this.removeClass("top"),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){this.hasClass("bottom")||(this.addClass("bottom"),this.removeClass("notBottom"),this.onBottom&&this.onBottom.call(this))},notBottom:function(){this.hasClass("notBottom")||(this.addClass("notBottom"),this.removeClass("bottom"),this.onNotBottom&&this.onNotBottom.call(this))},shouldUnpin:function(N){var R=N.direction==="down";return R&&!N.top&&N.toleranceExceeded},shouldPin:function(N){var R=N.direction==="up";return R&&N.toleranceExceeded||N.top},addClass:function(N){this.elem.classList.add.apply(this.elem.classList,this.classes[N].split(" "))},removeClass:function(N){this.elem.classList.remove.apply(this.elem.classList,this.classes[N].split(" "))},hasClass:function(N){return this.classes[N].split(" ").every(function(R){return this.classList.contains(R)},this.elem)},update:function(N){N.isOutOfBounds||this.frozen!==!0&&(N.top?this.top():this.notTop(),N.bottom?this.bottom():this.notBottom(),this.shouldUnpin(N)?this.unpin():this.shouldPin(N)&&this.pin())}},k.options={tolerance:{up:0,down:0},offset:0,scroller:_()?window:null,classes:{frozen:"headroom--frozen",pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},k.cutsTheMustard=n(),k})});var Hs=Yt((qo,$r)=>{(function(_,w){typeof define=="function"&&define.amd?define(w):typeof $r=="object"&&$r.exports?$r.exports=w():_.EvEmitter=w()})(typeof window<"u"?window:qo,function(){"use strict";function _(){}var w=_.prototype;return w.on=function(n,s){if(!(!n||!s)){var h=this._events=this._events||{},v=h[n]=h[n]||[];return v.indexOf(s)==-1&&v.push(s),this}},w.once=function(n,s){if(!(!n||!s)){this.on(n,s);var h=this._onceEvents=this._onceEvents||{},v=h[n]=h[n]||{};return v[s]=!0,this}},w.off=function(n,s){var h=this._events&&this._events[n];if(!(!h||!h.length)){var v=h.indexOf(s);return v!=-1&&h.splice(v,1),this}},w.emitEvent=function(n,s){var h=this._events&&this._events[n];if(!(!h||!h.length)){h=h.slice(0),s=s||[];for(var v=this._onceEvents&&this._onceEvents[n],m=0;m<h.length;m++){var x=h[m],H=v&&v[x];H&&(this.off(n,x),delete v[x]),x.apply(this,s)}return this}},w.allOff=function(){delete this._events,delete this._onceEvents},_})});var ln=Yt((cc,Pr)=>{(function(_,w){typeof define=="function"&&define.amd?define(w):typeof Pr=="object"&&Pr.exports?Pr.exports=w():_.getSize=w()})(window,function(){"use strict";function w(R){var B=parseFloat(R),F=R.indexOf("%")==-1&&!isNaN(B);return F&&B}function n(){}var s=typeof console>"u"?n:function(R){console.error(R)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],v=h.length;function m(){for(var R={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},B=0;B<v;B++){var F=h[B];R[F]=0}return R}function x(R){var B=getComputedStyle(R);return B||s("Style returned "+B+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),B}var H=!1,G;function k(){if(!H){H=!0;var R=document.createElement("div");R.style.width="200px",R.style.padding="1px 2px 3px 4px",R.style.borderStyle="solid",R.style.borderWidth="1px 2px 3px 4px",R.style.boxSizing="border-box";var B=document.body||document.documentElement;B.appendChild(R);var F=x(R);G=Math.round(w(F.width))==200,N.isBoxSizeOuter=G,B.removeChild(R)}}function N(R){if(k(),typeof R=="string"&&(R=document.querySelector(R)),!(!R||typeof R!="object"||!R.nodeType)){var B=x(R);if(B.display=="none")return m();var F={};F.width=R.offsetWidth,F.height=R.offsetHeight;for(var C=F.isBorderBox=B.boxSizing=="border-box",p=0;p<v;p++){var S=h[p],z=B[S],K=parseFloat(z);F[S]=isNaN(K)?0:K}var tt=F.paddingLeft+F.paddingRight,at=F.paddingTop+F.paddingBottom,l=F.marginLeft+F.marginRight,wt=F.marginTop+F.marginBottom,ct=F.borderLeftWidth+F.borderRightWidth,pe=F.borderTopWidth+F.borderBottomWidth,Ze=C&&G,zi=w(B.width);zi!==!1&&(F.width=zi+(Ze?0:tt+ct));var Tt=w(B.height);return Tt!==!1&&(F.height=Tt+(Ze?0:at+pe)),F.innerWidth=F.width-(tt+ct),F.innerHeight=F.height-(at+pe),F.outerWidth=F.width+l,F.outerHeight=F.height+wt,F}}return N})});var Rs=Yt((fc,Mr)=>{(function(_,w){"use strict";typeof define=="function"&&define.amd?define(w):typeof Mr=="object"&&Mr.exports?Mr.exports=w():_.matchesSelector=w()})(window,function(){"use strict";var w=(function(){var n=window.Element.prototype;if(n.matches)return"matches";if(n.matchesSelector)return"matchesSelector";for(var s=["webkit","moz","ms","o"],h=0;h<s.length;h++){var v=s[h],m=v+"MatchesSelector";if(n[m])return m}})();return function(s,h){return s[w](h)}})});var zs=Yt((dc,Hr)=>{(function(_,w){typeof define=="function"&&define.amd?define(["desandro-matches-selector/matches-selector"],function(n){return w(_,n)}):typeof Hr=="object"&&Hr.exports?Hr.exports=w(_,Rs()):_.fizzyUIUtils=w(_,_.matchesSelector)})(window,function(w,n){"use strict";var s={};s.extend=function(m,x){for(var H in x)m[H]=x[H];return m},s.modulo=function(m,x){return(m%x+x)%x};var h=Array.prototype.slice;s.makeArray=function(m){if(Array.isArray(m))return m;if(m==null)return[];var x=typeof m=="object"&&typeof m.length=="number";return x?h.call(m):[m]},s.removeFrom=function(m,x){var H=m.indexOf(x);H!=-1&&m.splice(H,1)},s.getParent=function(m,x){for(;m.parentNode&&m!=document.body;)if(m=m.parentNode,n(m,x))return m},s.getQueryElement=function(m){return typeof m=="string"?document.querySelector(m):m},s.handleEvent=function(m){var x="on"+m.type;this[x]&&this[x](m)},s.filterFindElements=function(m,x){m=s.makeArray(m);var H=[];return m.forEach(function(G){if(G instanceof HTMLElement){if(!x){H.push(G);return}n(G,x)&&H.push(G);for(var k=G.querySelectorAll(x),N=0;N<k.length;N++)H.push(k[N])}}),H},s.debounceMethod=function(m,x,H){H=H||100;var G=m.prototype[x],k=x+"Timeout";m.prototype[x]=function(){var N=this[k];clearTimeout(N);var R=arguments,B=this;this[k]=setTimeout(function(){G.apply(B,R),delete B[k]},H)}},s.docReady=function(m){var x=document.readyState;x=="complete"||x=="interactive"?setTimeout(m):document.addEventListener("DOMContentLoaded",m)},s.toDashed=function(m){return m.replace(/(.)([A-Z])/g,function(x,H,G){return H+"-"+G}).toLowerCase()};var v=w.console;return s.htmlInit=function(m,x){s.docReady(function(){var H=s.toDashed(x),G="data-"+H,k=document.querySelectorAll("["+G+"]"),N=document.querySelectorAll(".js-"+H),R=s.makeArray(k).concat(s.makeArray(N)),B=G+"-options",F=w.jQuery;R.forEach(function(C){var p=C.getAttribute(G)||C.getAttribute(B),S;try{S=p&&JSON.parse(p)}catch(K){v&&v.error("Error parsing "+G+" on "+C.className+": "+K);return}var z=new m(C,S);F&&F.data(C,x,z)})})},s})});var Fo=Yt((hc,Rr)=>{(function(_,w){typeof define=="function"&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size"],w):typeof Rr=="object"&&Rr.exports?Rr.exports=w(Hs(),ln()):(_.Outlayer={},_.Outlayer.Item=w(_.EvEmitter,_.getSize))})(window,function(w,n){"use strict";function s(C){for(var p in C)return!1;return p=null,!0}var h=document.documentElement.style,v=typeof h.transition=="string"?"transition":"WebkitTransition",m=typeof h.transform=="string"?"transform":"WebkitTransform",x={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[v],H={transform:m,transition:v,transitionDuration:v+"Duration",transitionProperty:v+"Property",transitionDelay:v+"Delay"};function G(C,p){C&&(this.element=C,this.layout=p,this.position={x:0,y:0},this._create())}var k=G.prototype=Object.create(w.prototype);k.constructor=G,k._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},k.handleEvent=function(C){var p="on"+C.type;this[p]&&this[p](C)},k.getSize=function(){this.size=n(this.element)},k.css=function(C){var p=this.element.style;for(var S in C){var z=H[S]||S;p[z]=C[S]}},k.getPosition=function(){var C=getComputedStyle(this.element),p=this.layout._getOption("originLeft"),S=this.layout._getOption("originTop"),z=C[p?"left":"right"],K=C[S?"top":"bottom"],tt=parseFloat(z),at=parseFloat(K),l=this.layout.size;z.indexOf("%")!=-1&&(tt=tt/100*l.width),K.indexOf("%")!=-1&&(at=at/100*l.height),tt=isNaN(tt)?0:tt,at=isNaN(at)?0:at,tt-=p?l.paddingLeft:l.paddingRight,at-=S?l.paddingTop:l.paddingBottom,this.position.x=tt,this.position.y=at},k.layoutPosition=function(){var C=this.layout.size,p={},S=this.layout._getOption("originLeft"),z=this.layout._getOption("originTop"),K=S?"paddingLeft":"paddingRight",tt=S?"left":"right",at=S?"right":"left",l=this.position.x+C[K];p[tt]=this.getXValue(l),p[at]="";var wt=z?"paddingTop":"paddingBottom",ct=z?"top":"bottom",pe=z?"bottom":"top",Ze=this.position.y+C[wt];p[ct]=this.getYValue(Ze),p[pe]="",this.css(p),this.emitEvent("layout",[this])},k.getXValue=function(C){var p=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!p?C/this.layout.size.width*100+"%":C+"px"},k.getYValue=function(C){var p=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&p?C/this.layout.size.height*100+"%":C+"px"},k._transitionTo=function(C,p){this.getPosition();var S=this.position.x,z=this.position.y,K=C==this.position.x&&p==this.position.y;if(this.setPosition(C,p),K&&!this.isTransitioning){this.layoutPosition();return}var tt=C-S,at=p-z,l={};l.transform=this.getTranslate(tt,at),this.transition({to:l,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},k.getTranslate=function(C,p){var S=this.layout._getOption("originLeft"),z=this.layout._getOption("originTop");return C=S?C:-C,p=z?p:-p,"translate3d("+C+"px, "+p+"px, 0)"},k.goTo=function(C,p){this.setPosition(C,p),this.layoutPosition()},k.moveTo=k._transitionTo,k.setPosition=function(C,p){this.position.x=parseFloat(C),this.position.y=parseFloat(p)},k._nonTransition=function(C){this.css(C.to),C.isCleaning&&this._removeStyles(C.to);for(var p in C.onTransitionEnd)C.onTransitionEnd[p].call(this)},k.transition=function(C){if(!parseFloat(this.layout.options.transitionDuration)){this._nonTransition(C);return}var p=this._transn;for(var S in C.onTransitionEnd)p.onEnd[S]=C.onTransitionEnd[S];for(S in C.to)p.ingProperties[S]=!0,C.isCleaning&&(p.clean[S]=!0);if(C.from){this.css(C.from);var z=this.element.offsetHeight;z=null}this.enableTransition(C.to),this.css(C.to),this.isTransitioning=!0};function N(C){return C.replace(/([A-Z])/g,function(p){return"-"+p.toLowerCase()})}var R="opacity,"+N(m);k.enableTransition=function(){if(!this.isTransitioning){var C=this.layout.options.transitionDuration;C=typeof C=="number"?C+"ms":C,this.css({transitionProperty:R,transitionDuration:C,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(x,this,!1)}},k.onwebkitTransitionEnd=function(C){this.ontransitionend(C)},k.onotransitionend=function(C){this.ontransitionend(C)};var B={"-webkit-transform":"transform"};k.ontransitionend=function(C){if(C.target===this.element){var p=this._transn,S=B[C.propertyName]||C.propertyName;if(delete p.ingProperties[S],s(p.ingProperties)&&this.disableTransition(),S in p.clean&&(this.element.style[C.propertyName]="",delete p.clean[S]),S in p.onEnd){var z=p.onEnd[S];z.call(this),delete p.onEnd[S]}this.emitEvent("transitionEnd",[this])}},k.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(x,this,!1),this.isTransitioning=!1},k._removeStyles=function(C){var p={};for(var S in C)p[S]="";this.css(p)};var F={transitionProperty:"",transitionDuration:"",transitionDelay:""};return k.removeTransitionStyles=function(){this.css(F)},k.stagger=function(C){C=isNaN(C)?0:C,this.staggerDelay=C+"ms"},k.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},k.remove=function(){if(!v||!parseFloat(this.layout.options.transitionDuration)){this.removeElem();return}this.once("transitionEnd",function(){this.removeElem()}),this.hide()},k.reveal=function(){delete this.isHidden,this.css({display:""});var C=this.layout.options,p={},S=this.getHideRevealTransitionEndProperty("visibleStyle");p[S]=this.onRevealTransitionEnd,this.transition({from:C.hiddenStyle,to:C.visibleStyle,isCleaning:!0,onTransitionEnd:p})},k.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},k.getHideRevealTransitionEndProperty=function(C){var p=this.layout.options[C];if(p.opacity)return"opacity";for(var S in p)return S},k.hide=function(){this.isHidden=!0,this.css({display:""});var C=this.layout.options,p={},S=this.getHideRevealTransitionEndProperty("hiddenStyle");p[S]=this.onHideTransitionEnd,this.transition({from:C.visibleStyle,to:C.hiddenStyle,isCleaning:!0,onTransitionEnd:p})},k.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},k.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},G})});var Bn=Yt((pc,zr)=>{(function(_,w){"use strict";typeof define=="function"&&define.amd?define(["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(n,s,h,v){return w(_,n,s,h,v)}):typeof zr=="object"&&zr.exports?zr.exports=w(_,Hs(),ln(),zs(),Fo()):_.Outlayer=w(_,_.EvEmitter,_.getSize,_.fizzyUIUtils,_.Outlayer.Item)})(window,function(w,n,s,h,v){"use strict";var m=w.console,x=w.jQuery,H=function(){},G=0,k={};function N(p,S){var z=h.getQueryElement(p);if(!z){m&&m.error("Bad element for "+this.constructor.namespace+": "+(z||p));return}this.element=z,x&&(this.$element=x(this.element)),this.options=h.extend({},this.constructor.defaults),this.option(S);var K=++G;this.element.outlayerGUID=K,k[K]=this,this._create();var tt=this._getOption("initLayout");tt&&this.layout()}N.namespace="outlayer",N.Item=v,N.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var R=N.prototype;h.extend(R,n.prototype),R.option=function(p){h.extend(this.options,p)},R._getOption=function(p){var S=this.constructor.compatOptions[p];return S&&this.options[S]!==void 0?this.options[S]:this.options[p]},N.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},R._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),h.extend(this.element.style,this.options.containerStyle);var p=this._getOption("resize");p&&this.bindResize()},R.reloadItems=function(){this.items=this._itemize(this.element.children)},R._itemize=function(p){for(var S=this._filterFindItemElements(p),z=this.constructor.Item,K=[],tt=0;tt<S.length;tt++){var at=S[tt],l=new z(at,this);K.push(l)}return K},R._filterFindItemElements=function(p){return h.filterFindElements(p,this.options.itemSelector)},R.getItemElements=function(){return this.items.map(function(p){return p.element})},R.layout=function(){this._resetLayout(),this._manageStamps();var p=this._getOption("layoutInstant"),S=p!==void 0?p:!this._isLayoutInited;this.layoutItems(this.items,S),this._isLayoutInited=!0},R._init=R.layout,R._resetLayout=function(){this.getSize()},R.getSize=function(){this.size=s(this.element)},R._getMeasurement=function(p,S){var z=this.options[p],K;z?(typeof z=="string"?K=this.element.querySelector(z):z instanceof HTMLElement&&(K=z),this[p]=K?s(K)[S]:z):this[p]=0},R.layoutItems=function(p,S){p=this._getItemsForLayout(p),this._layoutItems(p,S),this._postLayout()},R._getItemsForLayout=function(p){return p.filter(function(S){return!S.isIgnored})},R._layoutItems=function(p,S){if(this._emitCompleteOnItems("layout",p),!(!p||!p.length)){var z=[];p.forEach(function(K){var tt=this._getItemLayoutPosition(K);tt.item=K,tt.isInstant=S||K.isLayoutInstant,z.push(tt)},this),this._processLayoutQueue(z)}},R._getItemLayoutPosition=function(){return{x:0,y:0}},R._processLayoutQueue=function(p){this.updateStagger(),p.forEach(function(S,z){this._positionItem(S.item,S.x,S.y,S.isInstant,z)},this)},R.updateStagger=function(){var p=this.options.stagger;if(p==null){this.stagger=0;return}return this.stagger=C(p),this.stagger},R._positionItem=function(p,S,z,K,tt){K?p.goTo(S,z):(p.stagger(tt*this.stagger),p.moveTo(S,z))},R._postLayout=function(){this.resizeContainer()},R.resizeContainer=function(){var p=this._getOption("resizeContainer");if(p){var S=this._getContainerSize();S&&(this._setContainerMeasure(S.width,!0),this._setContainerMeasure(S.height,!1))}},R._getContainerSize=H,R._setContainerMeasure=function(p,S){if(p!==void 0){var z=this.size;z.isBorderBox&&(p+=S?z.paddingLeft+z.paddingRight+z.borderLeftWidth+z.borderRightWidth:z.paddingBottom+z.paddingTop+z.borderTopWidth+z.borderBottomWidth),p=Math.max(p,0),this.element.style[S?"width":"height"]=p+"px"}},R._emitCompleteOnItems=function(p,S){var z=this;function K(){z.dispatchEvent(p+"Complete",null,[S])}var tt=S.length;if(!S||!tt){K();return}var at=0;function l(){at++,at==tt&&K()}S.forEach(function(wt){wt.once(p,l)})},R.dispatchEvent=function(p,S,z){var K=S?[S].concat(z):z;if(this.emitEvent(p,K),x)if(this.$element=this.$element||x(this.element),S){var tt=x.Event(S);tt.type=p,this.$element.trigger(tt,z)}else this.$element.trigger(p,z)},R.ignore=function(p){var S=this.getItem(p);S&&(S.isIgnored=!0)},R.unignore=function(p){var S=this.getItem(p);S&&delete S.isIgnored},R.stamp=function(p){p=this._find(p),p&&(this.stamps=this.stamps.concat(p),p.forEach(this.ignore,this))},R.unstamp=function(p){p=this._find(p),p&&p.forEach(function(S){h.removeFrom(this.stamps,S),this.unignore(S)},this)},R._find=function(p){if(p)return typeof p=="string"&&(p=this.element.querySelectorAll(p)),p=h.makeArray(p),p},R._manageStamps=function(){!this.stamps||!this.stamps.length||(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},R._getBoundingRect=function(){var p=this.element.getBoundingClientRect(),S=this.size;this._boundingRect={left:p.left+S.paddingLeft+S.borderLeftWidth,top:p.top+S.paddingTop+S.borderTopWidth,right:p.right-(S.paddingRight+S.borderRightWidth),bottom:p.bottom-(S.paddingBottom+S.borderBottomWidth)}},R._manageStamp=H,R._getElementOffset=function(p){var S=p.getBoundingClientRect(),z=this._boundingRect,K=s(p),tt={left:S.left-z.left-K.marginLeft,top:S.top-z.top-K.marginTop,right:z.right-S.right-K.marginRight,bottom:z.bottom-S.bottom-K.marginBottom};return tt},R.handleEvent=h.handleEvent,R.bindResize=function(){w.addEventListener("resize",this),this.isResizeBound=!0},R.unbindResize=function(){w.removeEventListener("resize",this),this.isResizeBound=!1},R.onresize=function(){this.resize()},h.debounceMethod(N,"onresize",100),R.resize=function(){!this.isResizeBound||!this.needsResizeLayout()||this.layout()},R.needsResizeLayout=function(){var p=s(this.element),S=this.size&&p;return S&&p.innerWidth!==this.size.innerWidth},R.addItems=function(p){var S=this._itemize(p);return S.length&&(this.items=this.items.concat(S)),S},R.appended=function(p){var S=this.addItems(p);S.length&&(this.layoutItems(S,!0),this.reveal(S))},R.prepended=function(p){var S=this._itemize(p);if(S.length){var z=this.items.slice(0);this.items=S.concat(z),this._resetLayout(),this._manageStamps(),this.layoutItems(S,!0),this.reveal(S),this.layoutItems(z)}},R.reveal=function(p){if(this._emitCompleteOnItems("reveal",p),!(!p||!p.length)){var S=this.updateStagger();p.forEach(function(z,K){z.stagger(K*S),z.reveal()})}},R.hide=function(p){if(this._emitCompleteOnItems("hide",p),!(!p||!p.length)){var S=this.updateStagger();p.forEach(function(z,K){z.stagger(K*S),z.hide()})}},R.revealItemElements=function(p){var S=this.getItems(p);this.reveal(S)},R.hideItemElements=function(p){var S=this.getItems(p);this.hide(S)},R.getItem=function(p){for(var S=0;S<this.items.length;S++){var z=this.items[S];if(z.element==p)return z}},R.getItems=function(p){p=h.makeArray(p);var S=[];return p.forEach(function(z){var K=this.getItem(z);K&&S.push(K)},this),S},R.remove=function(p){var S=this.getItems(p);this._emitCompleteOnItems("remove",S),!(!S||!S.length)&&S.forEach(function(z){z.remove(),h.removeFrom(this.items,z)},this)},R.destroy=function(){var p=this.element.style;p.height="",p.position="",p.width="",this.items.forEach(function(z){z.destroy()}),this.unbindResize();var S=this.element.outlayerGUID;delete k[S],delete this.element.outlayerGUID,x&&x.removeData(this.element,this.constructor.namespace)},N.data=function(p){p=h.getQueryElement(p);var S=p&&p.outlayerGUID;return S&&k[S]},N.create=function(p,S){var z=B(N);return z.defaults=h.extend({},N.defaults),h.extend(z.defaults,S),z.compatOptions=h.extend({},N.compatOptions),z.namespace=p,z.data=N.data,z.Item=B(v),h.htmlInit(z,p),x&&x.bridget&&x.bridget(p,z),z};function B(p){function S(){p.apply(this,arguments)}return S.prototype=Object.create(p.prototype),S.prototype.constructor=S,S}var F={ms:1,s:1e3};function C(p){if(typeof p=="number")return p;var S=p.match(/(^\d*\.?\d*)(\w*)/),z=S&&S[1],K=S&&S[2];if(!z.length)return 0;z=parseFloat(z);var tt=F[K]||1;return z*tt}return N.Item=v,N})});var Bo=Yt((gc,jr)=>{(function(_,w){typeof define=="function"&&define.amd?define(["outlayer/outlayer"],w):typeof jr=="object"&&jr.exports?jr.exports=w(Bn()):(_.Isotope=_.Isotope||{},_.Isotope.Item=w(_.Outlayer))})(window,function(w){"use strict";function n(){w.Item.apply(this,arguments)}var s=n.prototype=Object.create(w.Item.prototype),h=s._create;s._create=function(){this.id=this.layout.itemGUID++,h.call(this),this.sortData={}},s.updateSortData=function(){if(!this.isIgnored){this.sortData.id=this.id,this.sortData["original-order"]=this.id,this.sortData.random=Math.random();var m=this.layout.options.getSortData,x=this.layout._sorters;for(var H in m){var G=x[H];this.sortData[H]=G(this.element,this)}}};var v=s.destroy;return s.destroy=function(){v.apply(this,arguments),this.css({display:""})},n})});var Vn=Yt((mc,Wr)=>{(function(_,w){typeof define=="function"&&define.amd?define(["get-size/get-size","outlayer/outlayer"],w):typeof Wr=="object"&&Wr.exports?Wr.exports=w(ln(),Bn()):(_.Isotope=_.Isotope||{},_.Isotope.LayoutMode=w(_.getSize,_.Outlayer))})(window,function(w,n){"use strict";function s(m){this.isotope=m,m&&(this.options=m.options[this.namespace],this.element=m.element,this.items=m.filteredItems,this.size=m.size)}var h=s.prototype,v=["_resetLayout","_getItemLayoutPosition","_manageStamp","_getContainerSize","_getElementOffset","needsResizeLayout","_getOption"];return v.forEach(function(m){h[m]=function(){return n.prototype[m].apply(this.isotope,arguments)}}),h.needsVerticalResizeLayout=function(){var m=w(this.isotope.element),x=this.isotope.size&&m;return x&&m.innerHeight!=this.isotope.size.innerHeight},h._getMeasurement=function(){this.isotope._getMeasurement.apply(this,arguments)},h.getColumnWidth=function(){this.getSegmentSize("column","Width")},h.getRowHeight=function(){this.getSegmentSize("row","Height")},h.getSegmentSize=function(m,x){var H=m+x,G="outer"+x;if(this._getMeasurement(H,G),!this[H]){var k=this.getFirstItemSize();this[H]=k&&k[G]||this.isotope.size["inner"+x]}},h.getFirstItemSize=function(){var m=this.isotope.filteredItems[0];return m&&m.element&&w(m.element)},h.layout=function(){this.isotope.layout.apply(this.isotope,arguments)},h.getSize=function(){this.isotope.getSize(),this.size=this.isotope.size},s.modes={},s.create=function(m,x){function H(){s.apply(this,arguments)}return H.prototype=Object.create(h),H.prototype.constructor=H,x&&(H.options=x),H.prototype.namespace=m,s.modes[m]=H,H},s})});var Vo=Yt((vc,qr)=>{(function(_,w){typeof define=="function"&&define.amd?define(["outlayer/outlayer","get-size/get-size"],w):typeof qr=="object"&&qr.exports?qr.exports=w(Bn(),ln()):_.Masonry=w(_.Outlayer,_.getSize)})(window,function(w,n){"use strict";var s=w.create("masonry");s.compatOptions.fitWidth="isFitWidth";var h=s.prototype;return h._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var v=0;v<this.cols;v++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},h.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var v=this.items[0],m=v&&v.element;this.columnWidth=m&&n(m).outerWidth||this.containerWidth}var x=this.columnWidth+=this.gutter,H=this.containerWidth+this.gutter,G=H/x,k=x-H%x,N=k&&k<1?"round":"floor";G=Math[N](G),this.cols=Math.max(G,1)},h.getContainerWidth=function(){var v=this._getOption("fitWidth"),m=v?this.element.parentNode:this.element,x=n(m);this.containerWidth=x&&x.innerWidth},h._getItemLayoutPosition=function(v){v.getSize();var m=v.size.outerWidth%this.columnWidth,x=m&&m<1?"round":"ceil",H=Math[x](v.size.outerWidth/this.columnWidth);H=Math.min(H,this.cols);for(var G=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",k=this[G](H,v),N={x:this.columnWidth*k.col,y:k.y},R=k.y+v.size.outerHeight,B=H+k.col,F=k.col;F<B;F++)this.colYs[F]=R;return N},h._getTopColPosition=function(v){var m=this._getTopColGroup(v),x=Math.min.apply(Math,m);return{col:m.indexOf(x),y:x}},h._getTopColGroup=function(v){if(v<2)return this.colYs;for(var m=[],x=this.cols+1-v,H=0;H<x;H++)m[H]=this._getColGroupY(H,v);return m},h._getColGroupY=function(v,m){if(m<2)return this.colYs[v];var x=this.colYs.slice(v,v+m);return Math.max.apply(Math,x)},h._getHorizontalColPosition=function(v,m){var x=this.horizontalColIndex%this.cols,H=v>1&&x+v>this.cols;x=H?0:x;var G=m.size.outerWidth&&m.size.outerHeight;return this.horizontalColIndex=G?x+v:this.horizontalColIndex,{col:x,y:this._getColGroupY(x,v)}},h._manageStamp=function(v){var m=n(v),x=this._getElementOffset(v),H=this._getOption("originLeft"),G=H?x.left:x.right,k=G+m.outerWidth,N=Math.floor(G/this.columnWidth);N=Math.max(0,N);var R=Math.floor(k/this.columnWidth);R-=k%this.columnWidth?0:1,R=Math.min(this.cols-1,R);for(var B=this._getOption("originTop"),F=(B?x.top:x.bottom)+m.outerHeight,C=N;C<=R;C++)this.colYs[C]=Math.max(F,this.colYs[C])},h._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var v={height:this.maxY};return this._getOption("fitWidth")&&(v.width=this._getContainerFitWidth()),v},h._getContainerFitWidth=function(){for(var v=0,m=this.cols;--m&&this.colYs[m]===0;)v++;return(this.cols-v)*this.columnWidth-this.gutter},h.needsResizeLayout=function(){var v=this.containerWidth;return this.getContainerWidth(),v!=this.containerWidth},s})});var Yo=Yt((yc,Fr)=>{(function(_,w){typeof define=="function"&&define.amd?define(["../layout-mode","masonry-layout/masonry"],w):typeof Fr=="object"&&Fr.exports?Fr.exports=w(Vn(),Vo()):w(_.Isotope.LayoutMode,_.Masonry)})(window,function(w,n){"use strict";var s=w.create("masonry"),h=s.prototype,v={_getElementOffset:!0,layout:!0,_getMeasurement:!0};for(var m in n.prototype)v[m]||(h[m]=n.prototype[m]);var x=h.measureColumns;h.measureColumns=function(){this.items=this.isotope.filteredItems,x.call(this)};var H=h._getOption;return h._getOption=function(G){return G=="fitWidth"?this.options.isFitWidth!==void 0?this.options.isFitWidth:this.options.fitWidth:H.apply(this.isotope,arguments)},s})});var Go=Yt((Uo,Ko)=>{(function(_,w){typeof define=="function"&&define.amd?define(["../layout-mode"],w):typeof Uo=="object"?Ko.exports=w(Vn()):w(_.Isotope.LayoutMode)})(window,function(w){"use strict";var n=w.create("fitRows"),s=n.prototype;return s._resetLayout=function(){this.x=0,this.y=0,this.maxY=0,this._getMeasurement("gutter","outerWidth")},s._getItemLayoutPosition=function(h){h.getSize();var v=h.size.outerWidth+this.gutter,m=this.isotope.size.innerWidth+this.gutter;this.x!==0&&v+this.x>m&&(this.x=0,this.y=this.maxY);var x={x:this.x,y:this.y};return this.maxY=Math.max(this.maxY,this.y+h.size.outerHeight),this.x+=v,x},s._getContainerSize=function(){return{height:this.maxY}},n})});var Xo=Yt((_c,Br)=>{(function(_,w){typeof define=="function"&&define.amd?define(["../layout-mode"],w):typeof Br=="object"&&Br.exports?Br.exports=w(Vn()):w(_.Isotope.LayoutMode)})(window,function(w){"use strict";var n=w.create("vertical",{horizontalAlignment:0}),s=n.prototype;return s._resetLayout=function(){this.y=0},s._getItemLayoutPosition=function(h){h.getSize();var v=(this.isotope.size.innerWidth-h.size.outerWidth)*this.options.horizontalAlignment,m=this.y;return this.y+=h.size.outerHeight,{x:v,y:m}},s._getContainerSize=function(){return{height:this.y}},n})});var Qo=Yt((bc,Vr)=>{(function(_,w){typeof define=="function"&&define.amd?define(["outlayer/outlayer","get-size/get-size","desandro-matches-selector/matches-selector","fizzy-ui-utils/utils","./item","./layout-mode","./layout-modes/masonry","./layout-modes/fit-rows","./layout-modes/vertical"],function(n,s,h,v,m,x){return w(_,n,s,h,v,m,x)}):typeof Vr=="object"&&Vr.exports?Vr.exports=w(_,Bn(),ln(),Rs(),zs(),Bo(),Vn(),Yo(),Go(),Xo()):_.Isotope=w(_,_.Outlayer,_.getSize,_.matchesSelector,_.fizzyUIUtils,_.Isotope.Item,_.Isotope.LayoutMode)})(window,function(w,n,s,h,v,m,x){"use strict";var H=w.jQuery,G=String.prototype.trim?function(C){return C.trim()}:function(C){return C.replace(/^\s+|\s+$/g,"")},k=n.create("isotope",{layoutMode:"masonry",isJQueryFiltering:!0,sortAscending:!0});k.Item=m,k.LayoutMode=x;var N=k.prototype;N._create=function(){this.itemGUID=0,this._sorters={},this._getSorters(),n.prototype._create.call(this),this.modes={},this.filteredItems=this.items,this.sortHistory=["original-order"];for(var C in x.modes)this._initLayoutMode(C)},N.reloadItems=function(){this.itemGUID=0,n.prototype.reloadItems.call(this)},N._itemize=function(){for(var C=n.prototype._itemize.apply(this,arguments),p=0;p<C.length;p++){var S=C[p];S.id=this.itemGUID++}return this._updateItemsSortData(C),C},N._initLayoutMode=function(C){var p=x.modes[C],S=this.options[C]||{};this.options[C]=p.options?v.extend(p.options,S):S,this.modes[C]=new p(this)},N.layout=function(){if(!this._isLayoutInited&&this._getOption("initLayout")){this.arrange();return}this._layout()},N._layout=function(){var C=this._getIsInstant();this._resetLayout(),this._manageStamps(),this.layoutItems(this.filteredItems,C),this._isLayoutInited=!0},N.arrange=function(C){this.option(C),this._getIsInstant();var p=this._filter(this.items);this.filteredItems=p.matches,this._bindArrangeComplete(),this._isInstant?this._noTransition(this._hideReveal,[p]):this._hideReveal(p),this._sort(),this._layout()},N._init=N.arrange,N._hideReveal=function(C){this.reveal(C.needReveal),this.hide(C.needHide)},N._getIsInstant=function(){var C=this._getOption("layoutInstant"),p=C!==void 0?C:!this._isLayoutInited;return this._isInstant=p,p},N._bindArrangeComplete=function(){var C,p,S,z=this;function K(){C&&p&&S&&z.dispatchEvent("arrangeComplete",null,[z.filteredItems])}this.once("layoutComplete",function(){C=!0,K()}),this.once("hideComplete",function(){p=!0,K()}),this.once("revealComplete",function(){S=!0,K()})},N._filter=function(C){var p=this.options.filter;p=p||"*";for(var S=[],z=[],K=[],tt=this._getFilterTest(p),at=0;at<C.length;at++){var l=C[at];if(!l.isIgnored){var wt=tt(l);wt&&S.push(l),wt&&l.isHidden?z.push(l):!wt&&!l.isHidden&&K.push(l)}}return{matches:S,needReveal:z,needHide:K}},N._getFilterTest=function(C){return H&&this.options.isJQueryFiltering?function(p){return H(p.element).is(C)}:typeof C=="function"?function(p){return C(p.element)}:function(p){return h(p.element,C)}},N.updateSortData=function(C){var p;C?(C=v.makeArray(C),p=this.getItems(C)):p=this.items,this._getSorters(),this._updateItemsSortData(p)},N._getSorters=function(){var C=this.options.getSortData;for(var p in C){var S=C[p];this._sorters[p]=R(S)}},N._updateItemsSortData=function(C){for(var p=C&&C.length,S=0;p&&S<p;S++){var z=C[S];z.updateSortData()}};var R=(function(){function C(S){if(typeof S!="string")return S;var z=G(S).split(" "),K=z[0],tt=K.match(/^\[(.+)\]$/),at=tt&&tt[1],l=p(at,K),wt=k.sortDataParsers[z[1]];return S=wt?function(ct){return ct&&wt(l(ct))}:function(ct){return ct&&l(ct)},S}function p(S,z){return S?function(tt){return tt.getAttribute(S)}:function(tt){var at=tt.querySelector(z);return at&&at.textContent}}return C})();k.sortDataParsers={parseInt:function(C){return parseInt(C,10)},parseFloat:function(C){return parseFloat(C)}},N._sort=function(){if(this.options.sortBy){var C=v.makeArray(this.options.sortBy);this._getIsSameSortBy(C)||(this.sortHistory=C.concat(this.sortHistory));var p=B(this.sortHistory,this.options.sortAscending);this.filteredItems.sort(p)}},N._getIsSameSortBy=function(C){for(var p=0;p<C.length;p++)if(C[p]!=this.sortHistory[p])return!1;return!0};function B(C,p){return function(z,K){for(var tt=0;tt<C.length;tt++){var at=C[tt],l=z.sortData[at],wt=K.sortData[at];if(l>wt||l<wt){var ct=p[at]!==void 0?p[at]:p,pe=ct?1:-1;return(l>wt?1:-1)*pe}}return 0}}N._mode=function(){var C=this.options.layoutMode,p=this.modes[C];if(!p)throw new Error("No layout mode: "+C);return p.options=this.options[C],p},N._resetLayout=function(){n.prototype._resetLayout.call(this),this._mode()._resetLayout()},N._getItemLayoutPosition=function(C){return this._mode()._getItemLayoutPosition(C)},N._manageStamp=function(C){this._mode()._manageStamp(C)},N._getContainerSize=function(){return this._mode()._getContainerSize()},N.needsResizeLayout=function(){return this._mode().needsResizeLayout()},N.appended=function(C){var p=this.addItems(C);if(p.length){var S=this._filterRevealAdded(p);this.filteredItems=this.filteredItems.concat(S)}},N.prepended=function(C){var p=this._itemize(C);if(p.length){this._resetLayout(),this._manageStamps();var S=this._filterRevealAdded(p);this.layoutItems(this.filteredItems),this.filteredItems=S.concat(this.filteredItems),this.items=p.concat(this.items)}},N._filterRevealAdded=function(C){var p=this._filter(C);return this.hide(p.needHide),this.reveal(p.matches),this.layoutItems(p.matches,!0),p.matches},N.insert=function(C){var p=this.addItems(C);if(p.length){var S,z,K=p.length;for(S=0;S<K;S++)z=p[S],this.element.appendChild(z.element);var tt=this._filter(p).matches;for(S=0;S<K;S++)p[S].isLayoutInstant=!0;for(this.arrange(),S=0;S<K;S++)delete p[S].isLayoutInstant;this.reveal(tt)}};var F=N.remove;return N.remove=function(C){C=v.makeArray(C);var p=this.getItems(C);F.call(this,C);for(var S=p&&p.length,z=0;S&&z<S;z++){var K=p[z];v.removeFrom(this.filteredItems,K)}},N.shuffle=function(){for(var C=0;C<this.items.length;C++){var p=this.items[C];p.sortData.random=Math.random()}this.options.sortBy="random",this._sort(),this._layout()},N._noTransition=function(C,p){var S=this.options.transitionDuration;this.options.transitionDuration=0;var z=C.apply(this,p);return this.options.transitionDuration=S,z},N.getFilteredItemElements=function(){return this.filteredItems.map(function(C){return C.element})},k})});var Jo=Yt((js,Ws)=>{(function(_,w){typeof js=="object"&&typeof Ws<"u"?Ws.exports=w():typeof define=="function"&&define.amd?define(w):(_=typeof globalThis<"u"?globalThis:_||self,_.bootstrap=w())})(js,(function(){"use strict";let _=new Map,w={set(u,e,a){_.has(u)||_.set(u,new Map);let g=_.get(u);if(!g.has(e)&&g.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(g.keys())[0]}.`);return}g.set(e,a)},get(u,e){return _.has(u)&&_.get(u).get(e)||null},remove(u,e){if(!_.has(u))return;let a=_.get(u);a.delete(e),a.size===0&&_.delete(u)}},n=1e6,s=1e3,h="transitionend",v=u=>(u&&window.CSS&&window.CSS.escape&&(u=u.replace(/#([^\s"#']+)/g,(e,a)=>`#${CSS.escape(a)}`)),u),m=u=>u==null?`${u}`:Object.prototype.toString.call(u).match(/\s([a-z]+)/i)[1].toLowerCase(),x=u=>{do u+=Math.floor(Math.random()*n);while(document.getElementById(u));return u},H=u=>{if(!u)return 0;let{transitionDuration:e,transitionDelay:a}=window.getComputedStyle(u),g=Number.parseFloat(e),E=Number.parseFloat(a);return!g&&!E?0:(e=e.split(",")[0],a=a.split(",")[0],(Number.parseFloat(e)+Number.parseFloat(a))*s)},G=u=>{u.dispatchEvent(new Event(h))},k=u=>!u||typeof u!="object"?!1:(typeof u.jquery<"u"&&(u=u[0]),typeof u.nodeType<"u"),N=u=>k(u)?u.jquery?u[0]:u:typeof u=="string"&&u.length>0?document.querySelector(v(u)):null,R=u=>{if(!k(u)||u.getClientRects().length===0)return!1;let e=getComputedStyle(u).getPropertyValue("visibility")==="visible",a=u.closest("details:not([open])");if(!a)return e;if(a!==u){let g=u.closest("summary");if(g&&g.parentNode!==a||g===null)return!1}return e},B=u=>!u||u.nodeType!==Node.ELEMENT_NODE||u.classList.contains("disabled")?!0:typeof u.disabled<"u"?u.disabled:u.hasAttribute("disabled")&&u.getAttribute("disabled")!=="false",F=u=>{if(!document.documentElement.attachShadow)return null;if(typeof u.getRootNode=="function"){let e=u.getRootNode();return e instanceof ShadowRoot?e:null}return u instanceof ShadowRoot?u:u.parentNode?F(u.parentNode):null},C=()=>{},p=u=>{u.offsetHeight},S=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,z=[],K=u=>{document.readyState==="loading"?(z.length||document.addEventListener("DOMContentLoaded",()=>{for(let e of z)e()}),z.push(u)):u()},tt=()=>document.documentElement.dir==="rtl",at=u=>{K(()=>{let e=S();if(e){let a=u.NAME,g=e.fn[a];e.fn[a]=u.jQueryInterface,e.fn[a].Constructor=u,e.fn[a].noConflict=()=>(e.fn[a]=g,u.jQueryInterface)}})},l=(u,e=[],a=u)=>typeof u=="function"?u.call(...e):a,wt=(u,e,a=!0)=>{if(!a){l(u);return}let E=H(e)+5,D=!1,$=({target:q})=>{q===e&&(D=!0,e.removeEventListener(h,$),l(u))};e.addEventListener(h,$),setTimeout(()=>{D||G(e)},E)},ct=(u,e,a,g)=>{let E=u.length,D=u.indexOf(e);return D===-1?!a&&g?u[E-1]:u[0]:(D+=a?1:-1,g&&(D=(D+E)%E),u[Math.max(0,Math.min(D,E-1))])},pe=/[^.]*(?=\..*)\.|.*/,Ze=/\..*/,zi=/::\d+$/,Tt={},ti=1,Yn={mouseenter:"mouseover",mouseleave:"mouseout"},Yr=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function be(u,e){return e&&`${e}::${ti++}`||u.uidEvent||ti++}function ji(u){let e=be(u);return u.uidEvent=e,Tt[e]=Tt[e]||{},Tt[e]}function ei(u,e){return function a(g){return fn(g,{delegateTarget:u}),a.oneOff&&V.off(u,g.type,e),e.apply(u,[g])}}function Un(u,e,a){return function g(E){let D=u.querySelectorAll(e);for(let{target:$}=E;$&&$!==this;$=$.parentNode)for(let q of D)if(q===$)return fn(E,{delegateTarget:$}),g.oneOff&&V.off(u,E.type,e,a),a.apply($,[E])}}function un(u,e,a=null){return Object.values(u).find(g=>g.callable===e&&g.delegationSelector===a)}function cn(u,e,a){let g=typeof e=="string",E=g?a:e||a,D=Kn(u);return Yr.has(D)||(D=u),[g,E,D]}function Wi(u,e,a,g,E){if(typeof e!="string"||!u)return;let[D,$,q]=cn(e,a,g);e in Yn&&($=(kt=>function(_t){if(!_t.relatedTarget||_t.relatedTarget!==_t.delegateTarget&&!_t.delegateTarget.contains(_t.relatedTarget))return kt.call(this,_t)})($));let U=ji(u),nt=U[q]||(U[q]={}),X=un(nt,$,D?a:null);if(X){X.oneOff=X.oneOff&&E;return}let ht=be($,e.replace(pe,"")),yt=D?Un(u,a,$):ei(u,$);yt.delegationSelector=D?a:null,yt.callable=$,yt.oneOff=E,yt.uidEvent=ht,nt[ht]=yt,u.addEventListener(q,yt,D)}function qi(u,e,a,g,E){let D=un(e[a],g,E);D&&(u.removeEventListener(a,D,!!E),delete e[a][D.uidEvent])}function Ur(u,e,a,g){let E=e[a]||{};for(let[D,$]of Object.entries(E))D.includes(g)&&qi(u,e,a,$.callable,$.delegationSelector)}function Kn(u){return u=u.replace(Ze,""),Yn[u]||u}let V={on(u,e,a,g){Wi(u,e,a,g,!1)},one(u,e,a,g){Wi(u,e,a,g,!0)},off(u,e,a,g){if(typeof e!="string"||!u)return;let[E,D,$]=cn(e,a,g),q=$!==e,U=ji(u),nt=U[$]||{},X=e.startsWith(".");if(typeof D<"u"){if(!Object.keys(nt).length)return;qi(u,U,$,D,E?a:null);return}if(X)for(let ht of Object.keys(U))Ur(u,U,ht,e.slice(1));for(let[ht,yt]of Object.entries(nt)){let ft=ht.replace(zi,"");(!q||e.includes(ft))&&qi(u,U,$,yt.callable,yt.delegationSelector)}},trigger(u,e,a){if(typeof e!="string"||!u)return null;let g=S(),E=Kn(e),D=e!==E,$=null,q=!0,U=!0,nt=!1;D&&g&&($=g.Event(e,a),g(u).trigger($),q=!$.isPropagationStopped(),U=!$.isImmediatePropagationStopped(),nt=$.isDefaultPrevented());let X=fn(new Event(e,{bubbles:q,cancelable:!0}),a);return nt&&X.preventDefault(),U&&u.dispatchEvent(X),X.defaultPrevented&&$&&$.preventDefault(),X}};function fn(u,e={}){for(let[a,g]of Object.entries(e))try{u[a]=g}catch{Object.defineProperty(u,a,{configurable:!0,get(){return g}})}return u}function dn(u){if(u==="true")return!0;if(u==="false")return!1;if(u===Number(u).toString())return Number(u);if(u===""||u==="null")return null;if(typeof u!="string")return u;try{return JSON.parse(decodeURIComponent(u))}catch{return u}}function se(u){return u.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}let Ae={setDataAttribute(u,e,a){u.setAttribute(`data-bs-${se(e)}`,a)},removeDataAttribute(u,e){u.removeAttribute(`data-bs-${se(e)}`)},getDataAttributes(u){if(!u)return{};let e={},a=Object.keys(u.dataset).filter(g=>g.startsWith("bs")&&!g.startsWith("bsConfig"));for(let g of a){let E=g.replace(/^bs/,"");E=E.charAt(0).toLowerCase()+E.slice(1),e[E]=dn(u.dataset[g])}return e},getDataAttribute(u,e){return dn(u.getAttribute(`data-bs-${se(e)}`))}};class Ee{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(e){return e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e}_mergeConfigObj(e,a){let g=k(a)?Ae.getDataAttribute(a,"config"):{};return{...this.constructor.Default,...typeof g=="object"?g:{},...k(a)?Ae.getDataAttributes(a):{},...typeof e=="object"?e:{}}}_typeCheckConfig(e,a=this.constructor.DefaultType){for(let[g,E]of Object.entries(a)){let D=e[g],$=k(D)?"element":m(D);if(!new RegExp(E).test($))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${g}" provided type "${$}" but expected type "${E}".`)}}}let Fi="5.3.8";class oe extends Ee{constructor(e,a){super(),e=N(e),e&&(this._element=e,this._config=this._getConfig(a),w.set(this._element,this.constructor.DATA_KEY,this))}dispose(){w.remove(this._element,this.constructor.DATA_KEY),V.off(this._element,this.constructor.EVENT_KEY);for(let e of Object.getOwnPropertyNames(this))this[e]=null}_queueCallback(e,a,g=!0){wt(e,a,g)}_getConfig(e){return e=this._mergeConfigObj(e,this._element),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}static getInstance(e){return w.get(N(e),this.DATA_KEY)}static getOrCreateInstance(e,a={}){return this.getInstance(e)||new this(e,typeof a=="object"?a:null)}static get VERSION(){return Fi}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(e){return`${e}${this.EVENT_KEY}`}}let hn=u=>{let e=u.getAttribute("data-bs-target");if(!e||e==="#"){let a=u.getAttribute("href");if(!a||!a.includes("#")&&!a.startsWith("."))return null;a.includes("#")&&!a.startsWith("#")&&(a=`#${a.split("#")[1]}`),e=a&&a!=="#"?a.trim():null}return e?e.split(",").map(a=>v(a)).join(","):null},rt={find(u,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,u))},findOne(u,e=document.documentElement){return Element.prototype.querySelector.call(e,u)},children(u,e){return[].concat(...u.children).filter(a=>a.matches(e))},parents(u,e){let a=[],g=u.parentNode.closest(e);for(;g;)a.push(g),g=g.parentNode.closest(e);return a},prev(u,e){let a=u.previousElementSibling;for(;a;){if(a.matches(e))return[a];a=a.previousElementSibling}return[]},next(u,e){let a=u.nextElementSibling;for(;a;){if(a.matches(e))return[a];a=a.nextElementSibling}return[]},focusableChildren(u){let e=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(a=>`${a}:not([tabindex^="-"])`).join(",");return this.find(e,u).filter(a=>!B(a)&&R(a))},getSelectorFromElement(u){let e=hn(u);return e&&rt.findOne(e)?e:null},getElementFromSelector(u){let e=hn(u);return e?rt.findOne(e):null},getMultipleElementsFromSelector(u){let e=hn(u);return e?rt.find(e):[]}},je=(u,e="hide")=>{let a=`click.dismiss${u.EVENT_KEY}`,g=u.NAME;V.on(document,a,`[data-bs-dismiss="${g}"]`,function(E){if(["A","AREA"].includes(this.tagName)&&E.preventDefault(),B(this))return;let D=rt.getElementFromSelector(this)||this.closest(`.${g}`);u.getOrCreateInstance(D)[e]()})},xe="alert",Gn=".bs.alert",Kr=`close${Gn}`,Te=`closed${Gn}`,pi="fade",gi="show";class it extends oe{static get NAME(){return xe}close(){if(V.trigger(this._element,Kr).defaultPrevented)return;this._element.classList.remove(gi);let a=this._element.classList.contains(pi);this._queueCallback(()=>this._destroyElement(),this._element,a)}_destroyElement(){this._element.remove(),V.trigger(this._element,Te),this.dispose()}static jQueryInterface(e){return this.each(function(){let a=it.getOrCreateInstance(this);if(typeof e=="string"){if(a[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);a[e](this)}})}}je(it,"close"),at(it);let Ut="button",Gr=".bs.button",Xr=".data-api",Xn="active",pn='[data-bs-toggle="button"]',mi=`click${Gr}${Xr}`;class te extends oe{static get NAME(){return Ut}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(Xn))}static jQueryInterface(e){return this.each(function(){let a=te.getOrCreateInstance(this);e==="toggle"&&a[e]()})}}V.on(document,mi,pn,u=>{u.preventDefault();let e=u.target.closest(pn);te.getOrCreateInstance(e).toggle()}),at(te);let We="swipe",ge=".bs.swipe",Qr=`touchstart${ge}`,Bi=`touchmove${ge}`,Qn=`touchend${ge}`,Jn=`pointerdown${ge}`,Jr=`pointerup${ge}`,ii="touch",vi="pen",Zn="pointer-event",tr=40,ae={endCallback:null,leftCallback:null,rightCallback:null},Kt={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class ni extends Ee{constructor(e,a){super(),this._element=e,!(!e||!ni.isSupported())&&(this._config=this._getConfig(a),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ae}static get DefaultType(){return Kt}static get NAME(){return We}dispose(){V.off(this._element,ge)}_start(e){if(!this._supportPointerEvents){this._deltaX=e.touches[0].clientX;return}this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX)}_end(e){this._eventIsPointerPenTouch(e)&&(this._deltaX=e.clientX-this._deltaX),this._handleSwipe(),l(this._config.endCallback)}_move(e){this._deltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this._deltaX}_handleSwipe(){let e=Math.abs(this._deltaX);if(e<=tr)return;let a=e/this._deltaX;this._deltaX=0,a&&l(a>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(V.on(this._element,Jn,e=>this._start(e)),V.on(this._element,Jr,e=>this._end(e)),this._element.classList.add(Zn)):(V.on(this._element,Qr,e=>this._start(e)),V.on(this._element,Bi,e=>this._move(e)),V.on(this._element,Qn,e=>this._end(e)))}_eventIsPointerPenTouch(e){return this._supportPointerEvents&&(e.pointerType===vi||e.pointerType===ii)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}let Zr="carousel",Oe=".bs.carousel",qe=".data-api",ri="ArrowLeft",gn="ArrowRight",Vi=500,yi="next",si="prev",oi="left",_i="right",es=`slide${Oe}`,mn=`slid${Oe}`,er=`keydown${Oe}`,is=`mouseenter${Oe}`,ai=`mouseleave${Oe}`,ir=`dragstart${Oe}`,vn=`load${Oe}${qe}`,yn=`click${Oe}${qe}`,bi="carousel",Ei="active",ns="slide",Ti="carousel-item-end",nr="carousel-item-start",rr="carousel-item-next",sr="carousel-item-prev",_n=".active",or=".carousel-item",bn=_n+or,rs=".carousel-item img",ss=".carousel-indicators",ar="[data-bs-slide], [data-bs-slide-to]",lr='[data-bs-ride="carousel"]',En={[ri]:_i,[gn]:oi},ur={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Gt={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class me extends oe{constructor(e,a){super(e,a),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=rt.findOne(ss,this._element),this._addEventListeners(),this._config.ride===bi&&this.cycle()}static get Default(){return ur}static get DefaultType(){return Gt}static get NAME(){return Zr}next(){this._slide(yi)}nextWhenVisible(){!document.hidden&&R(this._element)&&this.next()}prev(){this._slide(si)}pause(){this._isSliding&&G(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){V.one(this._element,mn,()=>this.cycle());return}this.cycle()}}to(e){let a=this._getItems();if(e>a.length-1||e<0)return;if(this._isSliding){V.one(this._element,mn,()=>this.to(e));return}let g=this._getItemIndex(this._getActive());if(g===e)return;let E=e>g?yi:si;this._slide(E,a[e])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(e){return e.defaultInterval=e.interval,e}_addEventListeners(){this._config.keyboard&&V.on(this._element,er,e=>this._keydown(e)),this._config.pause==="hover"&&(V.on(this._element,is,()=>this.pause()),V.on(this._element,ai,()=>this._maybeEnableCycle())),this._config.touch&&ni.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(let g of rt.find(rs,this._element))V.on(g,ir,E=>E.preventDefault());let a={leftCallback:()=>this._slide(this._directionToOrder(oi)),rightCallback:()=>this._slide(this._directionToOrder(_i)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),Vi+this._config.interval))}};this._swipeHelper=new ni(this._element,a)}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;let a=En[e.key];a&&(e.preventDefault(),this._slide(this._directionToOrder(a)))}_getItemIndex(e){return this._getItems().indexOf(e)}_setActiveIndicatorElement(e){if(!this._indicatorsElement)return;let a=rt.findOne(_n,this._indicatorsElement);a.classList.remove(Ei),a.removeAttribute("aria-current");let g=rt.findOne(`[data-bs-slide-to="${e}"]`,this._indicatorsElement);g&&(g.classList.add(Ei),g.setAttribute("aria-current","true"))}_updateInterval(){let e=this._activeElement||this._getActive();if(!e)return;let a=Number.parseInt(e.getAttribute("data-bs-interval"),10);this._config.interval=a||this._config.defaultInterval}_slide(e,a=null){if(this._isSliding)return;let g=this._getActive(),E=e===yi,D=a||ct(this._getItems(),g,E,this._config.wrap);if(D===g)return;let $=this._getItemIndex(D),q=ft=>V.trigger(this._element,ft,{relatedTarget:D,direction:this._orderToDirection(e),from:this._getItemIndex(g),to:$});if(q(es).defaultPrevented||!g||!D)return;let nt=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement($),this._activeElement=D;let X=E?nr:Ti,ht=E?rr:sr;D.classList.add(ht),p(D),g.classList.add(X),D.classList.add(X);let yt=()=>{D.classList.remove(X,ht),D.classList.add(Ei),g.classList.remove(Ei,ht,X),this._isSliding=!1,q(mn)};this._queueCallback(yt,g,this._isAnimated()),nt&&this.cycle()}_isAnimated(){return this._element.classList.contains(ns)}_getActive(){return rt.findOne(bn,this._element)}_getItems(){return rt.find(or,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(e){return tt()?e===oi?si:yi:e===oi?yi:si}_orderToDirection(e){return tt()?e===si?oi:_i:e===si?_i:oi}static jQueryInterface(e){return this.each(function(){let a=me.getOrCreateInstance(this,e);if(typeof e=="number"){a.to(e);return}if(typeof e=="string"){if(a[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);a[e]()}})}}V.on(document,yn,ar,function(u){let e=rt.getElementFromSelector(this);if(!e||!e.classList.contains(bi))return;u.preventDefault();let a=me.getOrCreateInstance(e),g=this.getAttribute("data-bs-slide-to");if(g){a.to(g),a._maybeEnableCycle();return}if(Ae.getDataAttribute(this,"slide")==="next"){a.next(),a._maybeEnableCycle();return}a.prev(),a._maybeEnableCycle()}),V.on(window,vn,()=>{let u=rt.find(lr);for(let e of u)me.getOrCreateInstance(e)}),at(me);let Yi="collapse",Si=".bs.collapse",Tn=".data-api",cr=`show${Si}`,Ui=`shown${Si}`,fr=`hide${Si}`,os=`hidden${Si}`,as=`click${Si}${Tn}`,ee="show",Fe="collapse",$e="collapsing",ls="collapsed",us=`:scope .${Fe} .${Fe}`,Be="collapse-horizontal",Ve="width",Sn="height",cs=".collapse.show, .collapse.collapsing",Ye='[data-bs-toggle="collapse"]',dr={parent:null,toggle:!0},wn={parent:"(null|element)",toggle:"boolean"};class Ue extends oe{constructor(e,a){super(e,a),this._isTransitioning=!1,this._triggerArray=[];let g=rt.find(Ye);for(let E of g){let D=rt.getSelectorFromElement(E),$=rt.find(D).filter(q=>q===this._element);D!==null&&$.length&&this._triggerArray.push(E)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return dr}static get DefaultType(){return wn}static get NAME(){return Yi}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e=[];if(this._config.parent&&(e=this._getFirstLevelChildren(cs).filter(q=>q!==this._element).map(q=>Ue.getOrCreateInstance(q,{toggle:!1}))),e.length&&e[0]._isTransitioning||V.trigger(this._element,cr).defaultPrevented)return;for(let q of e)q.hide();let g=this._getDimension();this._element.classList.remove(Fe),this._element.classList.add($e),this._element.style[g]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;let E=()=>{this._isTransitioning=!1,this._element.classList.remove($e),this._element.classList.add(Fe,ee),this._element.style[g]="",V.trigger(this._element,Ui)},$=`scroll${g[0].toUpperCase()+g.slice(1)}`;this._queueCallback(E,this._element,!0),this._element.style[g]=`${this._element[$]}px`}hide(){if(this._isTransitioning||!this._isShown()||V.trigger(this._element,fr).defaultPrevented)return;let a=this._getDimension();this._element.style[a]=`${this._element.getBoundingClientRect()[a]}px`,p(this._element),this._element.classList.add($e),this._element.classList.remove(Fe,ee);for(let E of this._triggerArray){let D=rt.getElementFromSelector(E);D&&!this._isShown(D)&&this._addAriaAndCollapsedClass([E],!1)}this._isTransitioning=!0;let g=()=>{this._isTransitioning=!1,this._element.classList.remove($e),this._element.classList.add(Fe),V.trigger(this._element,os)};this._element.style[a]="",this._queueCallback(g,this._element,!0)}_isShown(e=this._element){return e.classList.contains(ee)}_configAfterMerge(e){return e.toggle=!!e.toggle,e.parent=N(e.parent),e}_getDimension(){return this._element.classList.contains(Be)?Ve:Sn}_initializeChildren(){if(!this._config.parent)return;let e=this._getFirstLevelChildren(Ye);for(let a of e){let g=rt.getElementFromSelector(a);g&&this._addAriaAndCollapsedClass([a],this._isShown(g))}}_getFirstLevelChildren(e){let a=rt.find(us,this._config.parent);return rt.find(e,this._config.parent).filter(g=>!a.includes(g))}_addAriaAndCollapsedClass(e,a){if(e.length)for(let g of e)g.classList.toggle(ls,!a),g.setAttribute("aria-expanded",a)}static jQueryInterface(e){let a={};return typeof e=="string"&&/show|hide/.test(e)&&(a.toggle=!1),this.each(function(){let g=Ue.getOrCreateInstance(this,a);if(typeof e=="string"){if(typeof g[e]>"u")throw new TypeError(`No method named "${e}"`);g[e]()}})}}V.on(document,as,Ye,function(u){(u.target.tagName==="A"||u.delegateTarget&&u.delegateTarget.tagName==="A")&&u.preventDefault();for(let e of rt.getMultipleElementsFromSelector(this))Ue.getOrCreateInstance(e,{toggle:!1}).toggle()}),at(Ue);var Rt="top",ie="bottom",Xt="right",qt="left",Ki="auto",Pe=[Rt,ie,Xt,qt],Ke="start",li="end",hr="clippingParents",Cn="viewport",ui="popper",pr="reference",An=Pe.reduce(function(u,e){return u.concat([e+"-"+Ke,e+"-"+li])},[]),Gi=[].concat(Pe,[Ki]).reduce(function(u,e){return u.concat([e,e+"-"+Ke,e+"-"+li])},[]),Xi="beforeRead",xn="read",Qi="afterRead",On="beforeMain",kn="main",Ji="afterMain",gr="beforeWrite",mr="write",vr="afterWrite",ci=[Xi,xn,Qi,On,kn,Ji,gr,mr,vr];function ve(u){return u?(u.nodeName||"").toLowerCase():null}function Ft(u){if(u==null)return window;if(u.toString()!=="[object Window]"){var e=u.ownerDocument;return e&&e.defaultView||window}return u}function Ge(u){var e=Ft(u).Element;return u instanceof e||u instanceof Element}function le(u){var e=Ft(u).HTMLElement;return u instanceof e||u instanceof HTMLElement}function Dn(u){if(typeof ShadowRoot>"u")return!1;var e=Ft(u).ShadowRoot;return u instanceof e||u instanceof ShadowRoot}function t(u){var e=u.state;Object.keys(e.elements).forEach(function(a){var g=e.styles[a]||{},E=e.attributes[a]||{},D=e.elements[a];!le(D)||!ve(D)||(Object.assign(D.style,g),Object.keys(E).forEach(function($){var q=E[$];q===!1?D.removeAttribute($):D.setAttribute($,q===!0?"":q)}))})}function i(u){var e=u.state,a={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,a.popper),e.styles=a,e.elements.arrow&&Object.assign(e.elements.arrow.style,a.arrow),function(){Object.keys(e.elements).forEach(function(g){var E=e.elements[g],D=e.attributes[g]||{},$=Object.keys(e.styles.hasOwnProperty(g)?e.styles[g]:a[g]),q=$.reduce(function(U,nt){return U[nt]="",U},{});!le(E)||!ve(E)||(Object.assign(E.style,q),Object.keys(D).forEach(function(U){E.removeAttribute(U)}))})}}let r={name:"applyStyles",enabled:!0,phase:"write",fn:t,effect:i,requires:["computeStyles"]};function o(u){return u.split("-")[0]}var c=Math.max,f=Math.min,d=Math.round;function T(){var u=navigator.userAgentData;return u!=null&&u.brands&&Array.isArray(u.brands)?u.brands.map(function(e){return e.brand+"/"+e.version}).join(" "):navigator.userAgent}function b(){return!/^((?!chrome|android).)*safari/i.test(T())}function O(u,e,a){e===void 0&&(e=!1),a===void 0&&(a=!1);var g=u.getBoundingClientRect(),E=1,D=1;e&&le(u)&&(E=u.offsetWidth>0&&d(g.width)/u.offsetWidth||1,D=u.offsetHeight>0&&d(g.height)/u.offsetHeight||1);var $=Ge(u)?Ft(u):window,q=$.visualViewport,U=!b()&&a,nt=(g.left+(U&&q?q.offsetLeft:0))/E,X=(g.top+(U&&q?q.offsetTop:0))/D,ht=g.width/E,yt=g.height/D;return{width:ht,height:yt,top:X,right:nt+ht,bottom:X+yt,left:nt,x:nt,y:X}}function M(u){var e=O(u),a=u.offsetWidth,g=u.offsetHeight;return Math.abs(e.width-a)<=1&&(a=e.width),Math.abs(e.height-g)<=1&&(g=e.height),{x:u.offsetLeft,y:u.offsetTop,width:a,height:g}}function j(u,e){var a=e.getRootNode&&e.getRootNode();if(u.contains(e))return!0;if(a&&Dn(a)){var g=e;do{if(g&&u.isSameNode(g))return!0;g=g.parentNode||g.host}while(g)}return!1}function L(u){return Ft(u).getComputedStyle(u)}function Y(u){return["table","td","th"].indexOf(ve(u))>=0}function st(u){return((Ge(u)?u.ownerDocument:u.document)||window.document).documentElement}function pt(u){return ve(u)==="html"?u:u.assignedSlot||u.parentNode||(Dn(u)?u.host:null)||st(u)}function dt(u){return!le(u)||L(u).position==="fixed"?null:u.offsetParent}function Mt(u){var e=/firefox/i.test(T()),a=/Trident/i.test(T());if(a&&le(u)){var g=L(u);if(g.position==="fixed")return null}var E=pt(u);for(Dn(E)&&(E=E.host);le(E)&&["html","body"].indexOf(ve(E))<0;){var D=L(E);if(D.transform!=="none"||D.perspective!=="none"||D.contain==="paint"||["transform","perspective"].indexOf(D.willChange)!==-1||e&&D.willChange==="filter"||e&&D.filter&&D.filter!=="none")return E;E=E.parentNode}return null}function Dt(u){for(var e=Ft(u),a=dt(u);a&&Y(a)&&L(a).position==="static";)a=dt(a);return a&&(ve(a)==="html"||ve(a)==="body"&&L(a).position==="static")?e:a||Mt(u)||e}function ue(u){return["top","bottom"].indexOf(u)>=0?"x":"y"}function Qt(u,e,a){return c(u,f(e,a))}function vt(u,e,a){var g=Qt(u,e,a);return g>a?a:g}function Me(){return{top:0,right:0,bottom:0,left:0}}function bt(u){return Object.assign({},Me(),u)}function Lt(u,e){return e.reduce(function(a,g){return a[g]=u,a},{})}var wi=function(e,a){return e=typeof e=="function"?e(Object.assign({},a.rects,{placement:a.placement})):e,bt(typeof e!="number"?e:Lt(e,Pe))};function Ln(u){var e,a=u.state,g=u.name,E=u.options,D=a.elements.arrow,$=a.modifiersData.popperOffsets,q=o(a.placement),U=ue(q),nt=[qt,Xt].indexOf(q)>=0,X=nt?"height":"width";if(!(!D||!$)){var ht=wi(E.padding,a),yt=M(D),ft=U==="y"?Rt:qt,kt=U==="y"?ie:Xt,_t=a.rects.reference[X]+a.rects.reference[U]-$[U]-a.rects.popper[X],Ct=$[U]-a.rects.reference[U],Nt=Dt(D),$t=Nt?U==="y"?Nt.clientHeight||0:Nt.clientWidth||0:0,Pt=_t/2-Ct/2,Et=ht[ft],xt=$t-yt[X]-ht[kt],Ot=$t/2-yt[X]/2+Pt,It=Qt(Et,Ot,xt),Vt=U;a.modifiersData[g]=(e={},e[Vt]=It,e.centerOffset=It-Ot,e)}}function Se(u){var e=u.state,a=u.options,g=a.element,E=g===void 0?"[data-popper-arrow]":g;E!=null&&(typeof E=="string"&&(E=e.elements.popper.querySelector(E),!E)||j(e.elements.popper,E)&&(e.elements.arrow=E))}let fi={name:"arrow",enabled:!0,phase:"main",fn:Ln,effect:Se,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Bt(u){return u.split("-")[1]}var He={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Re(u,e){var a=u.x,g=u.y,E=e.devicePixelRatio||1;return{x:d(a*E)/E||0,y:d(g*E)/E||0}}function ne(u){var e,a=u.popper,g=u.popperRect,E=u.placement,D=u.variation,$=u.offsets,q=u.position,U=u.gpuAcceleration,nt=u.adaptive,X=u.roundOffsets,ht=u.isFixed,yt=$.x,ft=yt===void 0?0:yt,kt=$.y,_t=kt===void 0?0:kt,Ct=typeof X=="function"?X({x:ft,y:_t}):{x:ft,y:_t};ft=Ct.x,_t=Ct.y;var Nt=$.hasOwnProperty("x"),$t=$.hasOwnProperty("y"),Pt=qt,Et=Rt,xt=window;if(nt){var Ot=Dt(a),It="clientHeight",Vt="clientWidth";if(Ot===Ft(a)&&(Ot=st(a),L(Ot).position!=="static"&&q==="absolute"&&(It="scrollHeight",Vt="scrollWidth")),Ot=Ot,E===Rt||(E===qt||E===Xt)&&D===li){Et=ie;var Wt=ht&&Ot===xt&&xt.visualViewport?xt.visualViewport.height:Ot[It];_t-=Wt-g.height,_t*=U?1:-1}if(E===qt||(E===Rt||E===ie)&&D===li){Pt=Xt;var Ht=ht&&Ot===xt&&xt.visualViewport?xt.visualViewport.width:Ot[Vt];ft-=Ht-g.width,ft*=U?1:-1}}var Zt=Object.assign({position:q},nt&&He),Ne=X===!0?Re({x:ft,y:_t},Ft(a)):{x:ft,y:_t};if(ft=Ne.x,_t=Ne.y,U){var re;return Object.assign({},Zt,(re={},re[Et]=$t?"0":"",re[Pt]=Nt?"0":"",re.transform=(xt.devicePixelRatio||1)<=1?"translate("+ft+"px, "+_t+"px)":"translate3d("+ft+"px, "+_t+"px, 0)",re))}return Object.assign({},Zt,(e={},e[Et]=$t?_t+"px":"",e[Pt]=Nt?ft+"px":"",e.transform="",e))}function Nn(u){var e=u.state,a=u.options,g=a.gpuAcceleration,E=g===void 0?!0:g,D=a.adaptive,$=D===void 0?!0:D,q=a.roundOffsets,U=q===void 0?!0:q,nt={placement:o(e.placement),variation:Bt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:E,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,ne(Object.assign({},nt,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:$,roundOffsets:U})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,ne(Object.assign({},nt,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:U})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}let ye={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:Nn,data:{}};var ce={passive:!0};function fs(u){var e=u.state,a=u.instance,g=u.options,E=g.scroll,D=E===void 0?!0:E,$=g.resize,q=$===void 0?!0:$,U=Ft(e.elements.popper),nt=[].concat(e.scrollParents.reference,e.scrollParents.popper);return D&&nt.forEach(function(X){X.addEventListener("scroll",a.update,ce)}),q&&U.addEventListener("resize",a.update,ce),function(){D&&nt.forEach(function(X){X.removeEventListener("scroll",a.update,ce)}),q&&U.removeEventListener("resize",a.update,ce)}}let In={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fs,data:{}};var ds={left:"right",right:"left",bottom:"top",top:"bottom"};function St(u){return u.replace(/left|right|bottom|top/g,function(e){return ds[e]})}var Zi={start:"end",end:"start"};function fe(u){return u.replace(/start|end/g,function(e){return Zi[e]})}function ze(u){var e=Ft(u),a=e.pageXOffset,g=e.pageYOffset;return{scrollLeft:a,scrollTop:g}}function $n(u){return O(st(u)).left+ze(u).scrollLeft}function hs(u,e){var a=Ft(u),g=st(u),E=a.visualViewport,D=g.clientWidth,$=g.clientHeight,q=0,U=0;if(E){D=E.width,$=E.height;var nt=b();(nt||!nt&&e==="fixed")&&(q=E.offsetLeft,U=E.offsetTop)}return{width:D,height:$,x:q+$n(u),y:U}}function yr(u){var e,a=st(u),g=ze(u),E=(e=u.ownerDocument)==null?void 0:e.body,D=c(a.scrollWidth,a.clientWidth,E?E.scrollWidth:0,E?E.clientWidth:0),$=c(a.scrollHeight,a.clientHeight,E?E.scrollHeight:0,E?E.clientHeight:0),q=-g.scrollLeft+$n(u),U=-g.scrollTop;return L(E||a).direction==="rtl"&&(q+=c(a.clientWidth,E?E.clientWidth:0)-D),{width:D,height:$,x:q,y:U}}function ke(u){var e=L(u),a=e.overflow,g=e.overflowX,E=e.overflowY;return/auto|scroll|overlay|hidden/.test(a+E+g)}function tn(u){return["html","body","#document"].indexOf(ve(u))>=0?u.ownerDocument.body:le(u)&&ke(u)?u:tn(pt(u))}function de(u,e){var a;e===void 0&&(e=[]);var g=tn(u),E=g===((a=u.ownerDocument)==null?void 0:a.body),D=Ft(g),$=E?[D].concat(D.visualViewport||[],ke(g)?g:[]):g,q=e.concat($);return E?q:q.concat(de(pt($)))}function en(u){return Object.assign({},u,{left:u.x,top:u.y,right:u.x+u.width,bottom:u.y+u.height})}function Ci(u,e){var a=O(u,!1,e==="fixed");return a.top=a.top+u.clientTop,a.left=a.left+u.clientLeft,a.bottom=a.top+u.clientHeight,a.right=a.left+u.clientWidth,a.width=u.clientWidth,a.height=u.clientHeight,a.x=a.left,a.y=a.top,a}function Ai(u,e,a){return e===Cn?en(hs(u,a)):Ge(e)?Ci(e,a):en(yr(st(u)))}function nn(u){var e=de(pt(u)),a=["absolute","fixed"].indexOf(L(u).position)>=0,g=a&&le(u)?Dt(u):u;return Ge(g)?e.filter(function(E){return Ge(E)&&j(E,g)&&ve(E)!=="body"}):[]}function Pn(u,e,a,g){var E=e==="clippingParents"?nn(u):[].concat(e),D=[].concat(E,[a]),$=D[0],q=D.reduce(function(U,nt){var X=Ai(u,nt,g);return U.top=c(X.top,U.top),U.right=f(X.right,U.right),U.bottom=f(X.bottom,U.bottom),U.left=c(X.left,U.left),U},Ai(u,$,g));return q.width=q.right-q.left,q.height=q.bottom-q.top,q.x=q.left,q.y=q.top,q}function _r(u){var e=u.reference,a=u.element,g=u.placement,E=g?o(g):null,D=g?Bt(g):null,$=e.x+e.width/2-a.width/2,q=e.y+e.height/2-a.height/2,U;switch(E){case Rt:U={x:$,y:e.y-a.height};break;case ie:U={x:$,y:e.y+e.height};break;case Xt:U={x:e.x+e.width,y:q};break;case qt:U={x:e.x-a.width,y:q};break;default:U={x:e.x,y:e.y}}var nt=E?ue(E):null;if(nt!=null){var X=nt==="y"?"height":"width";switch(D){case Ke:U[nt]=U[nt]-(e[X]/2-a[X]/2);break;case li:U[nt]=U[nt]+(e[X]/2-a[X]/2);break}}return U}function De(u,e){e===void 0&&(e={});var a=e,g=a.placement,E=g===void 0?u.placement:g,D=a.strategy,$=D===void 0?u.strategy:D,q=a.boundary,U=q===void 0?hr:q,nt=a.rootBoundary,X=nt===void 0?Cn:nt,ht=a.elementContext,yt=ht===void 0?ui:ht,ft=a.altBoundary,kt=ft===void 0?!1:ft,_t=a.padding,Ct=_t===void 0?0:_t,Nt=bt(typeof Ct!="number"?Ct:Lt(Ct,Pe)),$t=yt===ui?pr:ui,Pt=u.rects.popper,Et=u.elements[kt?$t:yt],xt=Pn(Ge(Et)?Et:Et.contextElement||st(u.elements.popper),U,X,$),Ot=O(u.elements.reference),It=_r({reference:Ot,element:Pt,placement:E}),Vt=en(Object.assign({},Pt,It)),Wt=yt===ui?Vt:Ot,Ht={top:xt.top-Wt.top+Nt.top,bottom:Wt.bottom-xt.bottom+Nt.bottom,left:xt.left-Wt.left+Nt.left,right:Wt.right-xt.right+Nt.right},Zt=u.modifiersData.offset;if(yt===ui&&Zt){var Ne=Zt[E];Object.keys(Ht).forEach(function(re){var $i=[Xt,ie].indexOf(re)>=0?1:-1,Pi=[Rt,ie].indexOf(re)>=0?"y":"x";Ht[re]+=Ne[Pi]*$i})}return Ht}function Mn(u,e){e===void 0&&(e={});var a=e,g=a.placement,E=a.boundary,D=a.rootBoundary,$=a.padding,q=a.flipVariations,U=a.allowedAutoPlacements,nt=U===void 0?Gi:U,X=Bt(g),ht=X?q?An:An.filter(function(kt){return Bt(kt)===X}):Pe,yt=ht.filter(function(kt){return nt.indexOf(kt)>=0});yt.length===0&&(yt=ht);var ft=yt.reduce(function(kt,_t){return kt[_t]=De(u,{placement:_t,boundary:E,rootBoundary:D,padding:$})[o(_t)],kt},{});return Object.keys(ft).sort(function(kt,_t){return ft[kt]-ft[_t]})}function Hn(u){if(o(u)===Ki)return[];var e=St(u);return[fe(u),e,fe(e)]}function ps(u){var e=u.state,a=u.options,g=u.name;if(!e.modifiersData[g]._skip){for(var E=a.mainAxis,D=E===void 0?!0:E,$=a.altAxis,q=$===void 0?!0:$,U=a.fallbackPlacements,nt=a.padding,X=a.boundary,ht=a.rootBoundary,yt=a.altBoundary,ft=a.flipVariations,kt=ft===void 0?!0:ft,_t=a.allowedAutoPlacements,Ct=e.options.placement,Nt=o(Ct),$t=Nt===Ct,Pt=U||($t||!kt?[St(Ct)]:Hn(Ct)),Et=[Ct].concat(Pt).reduce(function(an,hi){return an.concat(o(hi)===Ki?Mn(e,{placement:hi,boundary:X,rootBoundary:ht,padding:nt,flipVariations:kt,allowedAutoPlacements:_t}):hi)},[]),xt=e.rects.reference,Ot=e.rects.popper,It=new Map,Vt=!0,Wt=Et[0],Ht=0;Ht<Et.length;Ht++){var Zt=Et[Ht],Ne=o(Zt),re=Bt(Zt)===Ke,$i=[Rt,ie].indexOf(Ne)>=0,Pi=$i?"width":"height",_e=De(e,{placement:Zt,boundary:X,rootBoundary:ht,altBoundary:yt,padding:nt}),Ie=$i?re?Xt:qt:re?ie:Rt;xt[Pi]>Ot[Pi]&&(Ie=St(Ie));var Or=St(Ie),Mi=[];if(D&&Mi.push(_e[Ne]<=0),q&&Mi.push(_e[Ie]<=0,_e[Or]<=0),Mi.every(function(an){return an})){Wt=Zt,Vt=!1;break}It.set(Zt,Mi)}if(Vt)for(var kr=kt?3:1,Os=function(hi){var Fn=Et.find(function(Lr){var Hi=It.get(Lr);if(Hi)return Hi.slice(0,hi).every(function(ks){return ks})});if(Fn)return Wt=Fn,"break"},qn=kr;qn>0;qn--){var Dr=Os(qn);if(Dr==="break")break}e.placement!==Wt&&(e.modifiersData[g]._skip=!0,e.placement=Wt,e.reset=!0)}}let rn={name:"flip",enabled:!0,phase:"main",fn:ps,requiresIfExists:["offset"],data:{_skip:!1}};function Rn(u,e,a){return a===void 0&&(a={x:0,y:0}),{top:u.top-e.height-a.y,right:u.right-e.width+a.x,bottom:u.bottom-e.height+a.y,left:u.left-e.width-a.x}}function y(u){return[Rt,Xt,ie,qt].some(function(e){return u[e]>=0})}function A(u){var e=u.state,a=u.name,g=e.rects.reference,E=e.rects.popper,D=e.modifiersData.preventOverflow,$=De(e,{elementContext:"reference"}),q=De(e,{altBoundary:!0}),U=Rn($,g),nt=Rn(q,E,D),X=y(U),ht=y(nt);e.modifiersData[a]={referenceClippingOffsets:U,popperEscapeOffsets:nt,isReferenceHidden:X,hasPopperEscaped:ht},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":X,"data-popper-escaped":ht})}let I={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:A};function P(u,e,a){var g=o(u),E=[qt,Rt].indexOf(g)>=0?-1:1,D=typeof a=="function"?a(Object.assign({},e,{placement:u})):a,$=D[0],q=D[1];return $=$||0,q=(q||0)*E,[qt,Xt].indexOf(g)>=0?{x:q,y:$}:{x:$,y:q}}function W(u){var e=u.state,a=u.options,g=u.name,E=a.offset,D=E===void 0?[0,0]:E,$=Gi.reduce(function(X,ht){return X[ht]=P(ht,e.rects,D),X},{}),q=$[e.placement],U=q.x,nt=q.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=U,e.modifiersData.popperOffsets.y+=nt),e.modifiersData[g]=$}let Q={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:W};function J(u){var e=u.state,a=u.name;e.modifiersData[a]=_r({reference:e.rects.reference,element:e.rects.popper,placement:e.placement})}let et={name:"popperOffsets",enabled:!0,phase:"read",fn:J,data:{}};function Z(u){return u==="x"?"y":"x"}function gt(u){var e=u.state,a=u.options,g=u.name,E=a.mainAxis,D=E===void 0?!0:E,$=a.altAxis,q=$===void 0?!1:$,U=a.boundary,nt=a.rootBoundary,X=a.altBoundary,ht=a.padding,yt=a.tether,ft=yt===void 0?!0:yt,kt=a.tetherOffset,_t=kt===void 0?0:kt,Ct=De(e,{boundary:U,rootBoundary:nt,padding:ht,altBoundary:X}),Nt=o(e.placement),$t=Bt(e.placement),Pt=!$t,Et=ue(Nt),xt=Z(Et),Ot=e.modifiersData.popperOffsets,It=e.rects.reference,Vt=e.rects.popper,Wt=typeof _t=="function"?_t(Object.assign({},e.rects,{placement:e.placement})):_t,Ht=typeof Wt=="number"?{mainAxis:Wt,altAxis:Wt}:Object.assign({mainAxis:0,altAxis:0},Wt),Zt=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,Ne={x:0,y:0};if(Ot){if(D){var re,$i=Et==="y"?Rt:qt,Pi=Et==="y"?ie:Xt,_e=Et==="y"?"height":"width",Ie=Ot[Et],Or=Ie+Ct[$i],Mi=Ie-Ct[Pi],kr=ft?-Vt[_e]/2:0,Os=$t===Ke?It[_e]:Vt[_e],qn=$t===Ke?-Vt[_e]:-It[_e],Dr=e.elements.arrow,an=ft&&Dr?M(Dr):{width:0,height:0},hi=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Me(),Fn=hi[$i],Lr=hi[Pi],Hi=Qt(0,It[_e],an[_e]),ks=Pt?It[_e]/2-kr-Hi-Fn-Ht.mainAxis:Os-Hi-Fn-Ht.mainAxis,ju=Pt?-It[_e]/2+kr+Hi+Lr+Ht.mainAxis:qn+Hi+Lr+Ht.mainAxis,Ds=e.elements.arrow&&Dt(e.elements.arrow),Wu=Ds?Et==="y"?Ds.clientTop||0:Ds.clientLeft||0:0,Do=(re=Zt?.[Et])!=null?re:0,qu=Ie+ks-Do-Wu,Fu=Ie+ju-Do,Lo=Qt(ft?f(Or,qu):Or,Ie,ft?c(Mi,Fu):Mi);Ot[Et]=Lo,Ne[Et]=Lo-Ie}if(q){var No,Bu=Et==="x"?Rt:qt,Vu=Et==="x"?ie:Xt,Ri=Ot[xt],Nr=xt==="y"?"height":"width",Io=Ri+Ct[Bu],$o=Ri-Ct[Vu],Ls=[Rt,qt].indexOf(Nt)!==-1,Po=(No=Zt?.[xt])!=null?No:0,Mo=Ls?Io:Ri-It[Nr]-Vt[Nr]-Po+Ht.altAxis,Ho=Ls?Ri+It[Nr]+Vt[Nr]-Po-Ht.altAxis:$o,Ro=ft&&Ls?vt(Mo,Ri,Ho):Qt(ft?Mo:Io,Ri,ft?Ho:$o);Ot[xt]=Ro,Ne[xt]=Ro-Ri}e.modifiersData[g]=Ne}}let lt={name:"preventOverflow",enabled:!0,phase:"main",fn:gt,requiresIfExists:["offset"]};function ut(u){return{scrollLeft:u.scrollLeft,scrollTop:u.scrollTop}}function mt(u){return u===Ft(u)||!le(u)?ze(u):ut(u)}function ot(u){var e=u.getBoundingClientRect(),a=d(e.width)/u.offsetWidth||1,g=d(e.height)/u.offsetHeight||1;return a!==1||g!==1}function At(u,e,a){a===void 0&&(a=!1);var g=le(e),E=le(e)&&ot(e),D=st(e),$=O(u,E,a),q={scrollLeft:0,scrollTop:0},U={x:0,y:0};return(g||!g&&!a)&&((ve(e)!=="body"||ke(D))&&(q=mt(e)),le(e)?(U=O(e,!0),U.x+=e.clientLeft,U.y+=e.clientTop):D&&(U.x=$n(D))),{x:$.left+q.scrollLeft-U.x,y:$.top+q.scrollTop-U.y,width:$.width,height:$.height}}function Jt(u){var e=new Map,a=new Set,g=[];u.forEach(function(D){e.set(D.name,D)});function E(D){a.add(D.name);var $=[].concat(D.requires||[],D.requiresIfExists||[]);$.forEach(function(q){if(!a.has(q)){var U=e.get(q);U&&E(U)}}),g.push(D)}return u.forEach(function(D){a.has(D.name)||E(D)}),g}function zt(u){var e=Jt(u);return ci.reduce(function(a,g){return a.concat(e.filter(function(E){return E.phase===g}))},[])}function he(u){var e;return function(){return e||(e=new Promise(function(a){Promise.resolve().then(function(){e=void 0,a(u())})})),e}}function we(u){var e=u.reduce(function(a,g){var E=a[g.name];return a[g.name]=E?Object.assign({},E,g,{options:Object.assign({},E.options,g.options),data:Object.assign({},E.data,g.data)}):g,a},{});return Object.keys(e).map(function(a){return e[a]})}var Xe={placement:"bottom",modifiers:[],strategy:"absolute"};function jt(){for(var u=arguments.length,e=new Array(u),a=0;a<u;a++)e[a]=arguments[a];return!e.some(function(g){return!(g&&typeof g.getBoundingClientRect=="function")})}function br(u){u===void 0&&(u={});var e=u,a=e.defaultModifiers,g=a===void 0?[]:a,E=e.defaultOptions,D=E===void 0?Xe:E;return function(q,U,nt){nt===void 0&&(nt=D);var X={placement:"bottom",orderedModifiers:[],options:Object.assign({},Xe,D),modifiersData:{},elements:{reference:q,popper:U},attributes:{},styles:{}},ht=[],yt=!1,ft={state:X,setOptions:function(Nt){var $t=typeof Nt=="function"?Nt(X.options):Nt;_t(),X.options=Object.assign({},D,X.options,$t),X.scrollParents={reference:Ge(q)?de(q):q.contextElement?de(q.contextElement):[],popper:de(U)};var Pt=zt(we([].concat(g,X.options.modifiers)));return X.orderedModifiers=Pt.filter(function(Et){return Et.enabled}),kt(),ft.update()},forceUpdate:function(){if(!yt){var Nt=X.elements,$t=Nt.reference,Pt=Nt.popper;if(jt($t,Pt)){X.rects={reference:At($t,Dt(Pt),X.options.strategy==="fixed"),popper:M(Pt)},X.reset=!1,X.placement=X.options.placement,X.orderedModifiers.forEach(function(Ht){return X.modifiersData[Ht.name]=Object.assign({},Ht.data)});for(var Et=0;Et<X.orderedModifiers.length;Et++){if(X.reset===!0){X.reset=!1,Et=-1;continue}var xt=X.orderedModifiers[Et],Ot=xt.fn,It=xt.options,Vt=It===void 0?{}:It,Wt=xt.name;typeof Ot=="function"&&(X=Ot({state:X,options:Vt,name:Wt,instance:ft})||X)}}}},update:he(function(){return new Promise(function(Ct){ft.forceUpdate(),Ct(X)})}),destroy:function(){_t(),yt=!0}};if(!jt(q,U))return ft;ft.setOptions(nt).then(function(Ct){!yt&&nt.onFirstUpdate&&nt.onFirstUpdate(Ct)});function kt(){X.orderedModifiers.forEach(function(Ct){var Nt=Ct.name,$t=Ct.options,Pt=$t===void 0?{}:$t,Et=Ct.effect;if(typeof Et=="function"){var xt=Et({state:X,name:Nt,instance:ft,options:Pt}),Ot=function(){};ht.push(xt||Ot)}})}function _t(){ht.forEach(function(Ct){return Ct()}),ht=[]}return ft}}var ra=br(),sa=[In,et,ye,r],oa=br({defaultModifiers:sa}),aa=[In,et,ye,r,Q,rn,lt,fi,I],gs=br({defaultModifiers:aa});let Vs=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Ji,afterRead:Qi,afterWrite:vr,applyStyles:r,arrow:fi,auto:Ki,basePlacements:Pe,beforeMain:On,beforeRead:Xi,beforeWrite:gr,bottom:ie,clippingParents:hr,computeStyles:ye,createPopper:gs,createPopperBase:ra,createPopperLite:oa,detectOverflow:De,end:li,eventListeners:In,flip:rn,hide:I,left:qt,main:kn,modifierPhases:ci,offset:Q,placements:Gi,popper:ui,popperGenerator:br,popperOffsets:et,preventOverflow:lt,read:xn,reference:pr,right:Xt,start:Ke,top:Rt,variationPlacements:An,viewport:Cn,write:mr},Symbol.toStringTag,{value:"Module"})),Ys="dropdown",xi=".bs.dropdown",ms=".data-api",la="Escape",Us="Tab",ua="ArrowUp",Ks="ArrowDown",ca=2,fa=`hide${xi}`,da=`hidden${xi}`,ha=`show${xi}`,pa=`shown${xi}`,Gs=`click${xi}${ms}`,Xs=`keydown${xi}${ms}`,ga=`keyup${xi}${ms}`,sn="show",ma="dropup",va="dropend",ya="dropstart",_a="dropup-center",ba="dropdown-center",Oi='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',Ea=`${Oi}.${sn}`,Er=".dropdown-menu",Ta=".navbar",Sa=".navbar-nav",wa=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Ca=tt()?"top-end":"top-start",Aa=tt()?"top-start":"top-end",xa=tt()?"bottom-end":"bottom-start",Oa=tt()?"bottom-start":"bottom-end",ka=tt()?"left-start":"right-start",Da=tt()?"right-start":"left-start",La="top",Na="bottom",Ia={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},$a={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Le extends oe{constructor(e,a){super(e,a),this._popper=null,this._parent=this._element.parentNode,this._menu=rt.next(this._element,Er)[0]||rt.prev(this._element,Er)[0]||rt.findOne(Er,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return Ia}static get DefaultType(){return $a}static get NAME(){return Ys}toggle(){return this._isShown()?this.hide():this.show()}show(){if(B(this._element)||this._isShown())return;let e={relatedTarget:this._element};if(!V.trigger(this._element,ha,e).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(Sa))for(let g of[].concat(...document.body.children))V.on(g,"mouseover",C);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(sn),this._element.classList.add(sn),V.trigger(this._element,pa,e)}}hide(){if(B(this._element)||!this._isShown())return;let e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){if(!V.trigger(this._element,fa,e).defaultPrevented){if("ontouchstart"in document.documentElement)for(let g of[].concat(...document.body.children))V.off(g,"mouseover",C);this._popper&&this._popper.destroy(),this._menu.classList.remove(sn),this._element.classList.remove(sn),this._element.setAttribute("aria-expanded","false"),Ae.removeDataAttribute(this._menu,"popper"),V.trigger(this._element,da,e)}}_getConfig(e){if(e=super._getConfig(e),typeof e.reference=="object"&&!k(e.reference)&&typeof e.reference.getBoundingClientRect!="function")throw new TypeError(`${Ys.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return e}_createPopper(){if(typeof Vs>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");let e=this._element;this._config.reference==="parent"?e=this._parent:k(this._config.reference)?e=N(this._config.reference):typeof this._config.reference=="object"&&(e=this._config.reference);let a=this._getPopperConfig();this._popper=gs(e,this._menu,a)}_isShown(){return this._menu.classList.contains(sn)}_getPlacement(){let e=this._parent;if(e.classList.contains(va))return ka;if(e.classList.contains(ya))return Da;if(e.classList.contains(_a))return La;if(e.classList.contains(ba))return Na;let a=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return e.classList.contains(ma)?a?Aa:Ca:a?Oa:xa}_detectNavbar(){return this._element.closest(Ta)!==null}_getOffset(){let{offset:e}=this._config;return typeof e=="string"?e.split(",").map(a=>Number.parseInt(a,10)):typeof e=="function"?a=>e(a,this._element):e}_getPopperConfig(){let e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(Ae.setDataAttribute(this._menu,"popper","static"),e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,...l(this._config.popperConfig,[void 0,e])}}_selectMenuItem({key:e,target:a}){let g=rt.find(wa,this._menu).filter(E=>R(E));g.length&&ct(g,a,e===Ks,!g.includes(a)).focus()}static jQueryInterface(e){return this.each(function(){let a=Le.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof a[e]>"u")throw new TypeError(`No method named "${e}"`);a[e]()}})}static clearMenus(e){if(e.button===ca||e.type==="keyup"&&e.key!==Us)return;let a=rt.find(Ea);for(let g of a){let E=Le.getInstance(g);if(!E||E._config.autoClose===!1)continue;let D=e.composedPath(),$=D.includes(E._menu);if(D.includes(E._element)||E._config.autoClose==="inside"&&!$||E._config.autoClose==="outside"&&$||E._menu.contains(e.target)&&(e.type==="keyup"&&e.key===Us||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;let q={relatedTarget:E._element};e.type==="click"&&(q.clickEvent=e),E._completeHide(q)}}static dataApiKeydownHandler(e){let a=/input|textarea/i.test(e.target.tagName),g=e.key===la,E=[ua,Ks].includes(e.key);if(!E&&!g||a&&!g)return;e.preventDefault();let D=this.matches(Oi)?this:rt.prev(this,Oi)[0]||rt.next(this,Oi)[0]||rt.findOne(Oi,e.delegateTarget.parentNode),$=Le.getOrCreateInstance(D);if(E){e.stopPropagation(),$.show(),$._selectMenuItem(e);return}$._isShown()&&(e.stopPropagation(),$.hide(),D.focus())}}V.on(document,Xs,Oi,Le.dataApiKeydownHandler),V.on(document,Xs,Er,Le.dataApiKeydownHandler),V.on(document,Gs,Le.clearMenus),V.on(document,ga,Le.clearMenus),V.on(document,Gs,Oi,function(u){u.preventDefault(),Le.getOrCreateInstance(this).toggle()}),at(Le);let Qs="backdrop",Pa="fade",Js="show",Zs=`mousedown.bs.${Qs}`,Ma={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},Ha={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class to extends Ee{constructor(e){super(),this._config=this._getConfig(e),this._isAppended=!1,this._element=null}static get Default(){return Ma}static get DefaultType(){return Ha}static get NAME(){return Qs}show(e){if(!this._config.isVisible){l(e);return}this._append();let a=this._getElement();this._config.isAnimated&&p(a),a.classList.add(Js),this._emulateAnimation(()=>{l(e)})}hide(e){if(!this._config.isVisible){l(e);return}this._getElement().classList.remove(Js),this._emulateAnimation(()=>{this.dispose(),l(e)})}dispose(){this._isAppended&&(V.off(this._element,Zs),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){let e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Pa),this._element=e}return this._element}_configAfterMerge(e){return e.rootElement=N(e.rootElement),e}_append(){if(this._isAppended)return;let e=this._getElement();this._config.rootElement.append(e),V.on(e,Zs,()=>{l(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(e){wt(e,this._getElement(),this._config.isAnimated)}}let Ra="focustrap",Tr=".bs.focustrap",za=`focusin${Tr}`,ja=`keydown.tab${Tr}`,Wa="Tab",qa="forward",eo="backward",Fa={autofocus:!0,trapElement:null},Ba={autofocus:"boolean",trapElement:"element"};class io extends Ee{constructor(e){super(),this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Fa}static get DefaultType(){return Ba}static get NAME(){return Ra}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),V.off(document,Tr),V.on(document,za,e=>this._handleFocusin(e)),V.on(document,ja,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,V.off(document,Tr))}_handleFocusin(e){let{trapElement:a}=this._config;if(e.target===document||e.target===a||a.contains(e.target))return;let g=rt.focusableChildren(a);g.length===0?a.focus():this._lastTabNavDirection===eo?g[g.length-1].focus():g[0].focus()}_handleKeydown(e){e.key===Wa&&(this._lastTabNavDirection=e.shiftKey?eo:qa)}}let no=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",ro=".sticky-top",Sr="padding-right",so="margin-right";class vs{constructor(){this._element=document.body}getWidth(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){let e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,Sr,a=>a+e),this._setElementAttributes(no,Sr,a=>a+e),this._setElementAttributes(ro,so,a=>a-e)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,Sr),this._resetElementAttributes(no,Sr),this._resetElementAttributes(ro,so)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,a,g){let E=this.getWidth(),D=$=>{if($!==this._element&&window.innerWidth>$.clientWidth+E)return;this._saveInitialAttribute($,a);let q=window.getComputedStyle($).getPropertyValue(a);$.style.setProperty(a,`${g(Number.parseFloat(q))}px`)};this._applyManipulationCallback(e,D)}_saveInitialAttribute(e,a){let g=e.style.getPropertyValue(a);g&&Ae.setDataAttribute(e,a,g)}_resetElementAttributes(e,a){let g=E=>{let D=Ae.getDataAttribute(E,a);if(D===null){E.style.removeProperty(a);return}Ae.removeDataAttribute(E,a),E.style.setProperty(a,D)};this._applyManipulationCallback(e,g)}_applyManipulationCallback(e,a){if(k(e)){a(e);return}for(let g of rt.find(e,this._element))a(g)}}let Va="modal",Ce=".bs.modal",Ya=".data-api",Ua="Escape",Ka=`hide${Ce}`,Ga=`hidePrevented${Ce}`,oo=`hidden${Ce}`,ao=`show${Ce}`,Xa=`shown${Ce}`,Qa=`resize${Ce}`,Ja=`click.dismiss${Ce}`,Za=`mousedown.dismiss${Ce}`,tl=`keydown.dismiss${Ce}`,el=`click${Ce}${Ya}`,lo="modal-open",il="fade",uo="show",ys="modal-static",nl=".modal.show",rl=".modal-dialog",sl=".modal-body",ol='[data-bs-toggle="modal"]',al={backdrop:!0,focus:!0,keyboard:!0},ll={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class ki extends oe{constructor(e,a){super(e,a),this._dialog=rt.findOne(rl,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new vs,this._addEventListeners()}static get Default(){return al}static get DefaultType(){return ll}static get NAME(){return Va}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){this._isShown||this._isTransitioning||V.trigger(this._element,ao,{relatedTarget:e}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(lo),this._adjustDialog(),this._backdrop.show(()=>this._showElement(e)))}hide(){!this._isShown||this._isTransitioning||V.trigger(this._element,Ka).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(uo),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){V.off(window,Ce),V.off(this._dialog,Ce),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new to({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new io({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;let a=rt.findOne(sl,this._dialog);a&&(a.scrollTop=0),p(this._element),this._element.classList.add(uo);let g=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,V.trigger(this._element,Xa,{relatedTarget:e})};this._queueCallback(g,this._dialog,this._isAnimated())}_addEventListeners(){V.on(this._element,tl,e=>{if(e.key===Ua){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),V.on(window,Qa,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),V.on(this._element,Za,e=>{V.one(this._element,Ja,a=>{if(!(this._element!==e.target||this._element!==a.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(lo),this._resetAdjustments(),this._scrollBar.reset(),V.trigger(this._element,oo)})}_isAnimated(){return this._element.classList.contains(il)}_triggerBackdropTransition(){if(V.trigger(this._element,Ga).defaultPrevented)return;let a=this._element.scrollHeight>document.documentElement.clientHeight,g=this._element.style.overflowY;g==="hidden"||this._element.classList.contains(ys)||(a||(this._element.style.overflowY="hidden"),this._element.classList.add(ys),this._queueCallback(()=>{this._element.classList.remove(ys),this._queueCallback(()=>{this._element.style.overflowY=g},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){let e=this._element.scrollHeight>document.documentElement.clientHeight,a=this._scrollBar.getWidth(),g=a>0;if(g&&!e){let E=tt()?"paddingLeft":"paddingRight";this._element.style[E]=`${a}px`}if(!g&&e){let E=tt()?"paddingRight":"paddingLeft";this._element.style[E]=`${a}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,a){return this.each(function(){let g=ki.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof g[e]>"u")throw new TypeError(`No method named "${e}"`);g[e](a)}})}}V.on(document,el,ol,function(u){let e=rt.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&u.preventDefault(),V.one(e,ao,E=>{E.defaultPrevented||V.one(e,oo,()=>{R(this)&&this.focus()})});let a=rt.findOne(nl);a&&ki.getInstance(a).hide(),ki.getOrCreateInstance(e).toggle(this)}),je(ki),at(ki);let ul="offcanvas",Qe=".bs.offcanvas",co=".data-api",cl=`load${Qe}${co}`,fl="Escape",fo="show",ho="showing",po="hiding",dl="offcanvas-backdrop",go=".offcanvas.show",hl=`show${Qe}`,pl=`shown${Qe}`,gl=`hide${Qe}`,mo=`hidePrevented${Qe}`,vo=`hidden${Qe}`,ml=`resize${Qe}`,vl=`click${Qe}${co}`,yl=`keydown.dismiss${Qe}`,_l='[data-bs-toggle="offcanvas"]',bl={backdrop:!0,keyboard:!0,scroll:!1},El={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Je extends oe{constructor(e,a){super(e,a),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return bl}static get DefaultType(){return El}static get NAME(){return ul}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||V.trigger(this._element,hl,{relatedTarget:e}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new vs().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(ho);let g=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(fo),this._element.classList.remove(ho),V.trigger(this._element,pl,{relatedTarget:e})};this._queueCallback(g,this._element,!0)}hide(){if(!this._isShown||V.trigger(this._element,gl).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(po),this._backdrop.hide();let a=()=>{this._element.classList.remove(fo,po),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new vs().reset(),V.trigger(this._element,vo)};this._queueCallback(a,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){let e=()=>{if(this._config.backdrop==="static"){V.trigger(this._element,mo);return}this.hide()},a=!!this._config.backdrop;return new to({className:dl,isVisible:a,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:a?e:null})}_initializeFocusTrap(){return new io({trapElement:this._element})}_addEventListeners(){V.on(this._element,yl,e=>{if(e.key===fl){if(this._config.keyboard){this.hide();return}V.trigger(this._element,mo)}})}static jQueryInterface(e){return this.each(function(){let a=Je.getOrCreateInstance(this,e);if(typeof e=="string"){if(a[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);a[e](this)}})}}V.on(document,vl,_l,function(u){let e=rt.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&u.preventDefault(),B(this))return;V.one(e,vo,()=>{R(this)&&this.focus()});let a=rt.findOne(go);a&&a!==e&&Je.getInstance(a).hide(),Je.getOrCreateInstance(e).toggle(this)}),V.on(window,cl,()=>{for(let u of rt.find(go))Je.getOrCreateInstance(u).show()}),V.on(window,ml,()=>{for(let u of rt.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(u).position!=="fixed"&&Je.getOrCreateInstance(u).hide()}),je(Je),at(Je);let yo={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Tl=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Sl=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,wl=(u,e)=>{let a=u.nodeName.toLowerCase();return e.includes(a)?Tl.has(a)?!!Sl.test(u.nodeValue):!0:e.filter(g=>g instanceof RegExp).some(g=>g.test(a))};function Cl(u,e,a){if(!u.length)return u;if(a&&typeof a=="function")return a(u);let E=new window.DOMParser().parseFromString(u,"text/html"),D=[].concat(...E.body.querySelectorAll("*"));for(let $ of D){let q=$.nodeName.toLowerCase();if(!Object.keys(e).includes(q)){$.remove();continue}let U=[].concat(...$.attributes),nt=[].concat(e["*"]||[],e[q]||[]);for(let X of U)wl(X,nt)||$.removeAttribute(X.nodeName)}return E.body.innerHTML}let Al="TemplateFactory",xl={allowList:yo,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},Ol={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},kl={entry:"(string|element|function|null)",selector:"(string|element)"};class Dl extends Ee{constructor(e){super(),this._config=this._getConfig(e)}static get Default(){return xl}static get DefaultType(){return Ol}static get NAME(){return Al}getContent(){return Object.values(this._config.content).map(e=>this._resolvePossibleFunction(e)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(e){return this._checkContent(e),this._config.content={...this._config.content,...e},this}toHtml(){let e=document.createElement("div");e.innerHTML=this._maybeSanitize(this._config.template);for(let[E,D]of Object.entries(this._config.content))this._setContent(e,D,E);let a=e.children[0],g=this._resolvePossibleFunction(this._config.extraClass);return g&&a.classList.add(...g.split(" ")),a}_typeCheckConfig(e){super._typeCheckConfig(e),this._checkContent(e.content)}_checkContent(e){for(let[a,g]of Object.entries(e))super._typeCheckConfig({selector:a,entry:g},kl)}_setContent(e,a,g){let E=rt.findOne(g,e);if(E){if(a=this._resolvePossibleFunction(a),!a){E.remove();return}if(k(a)){this._putElementInTemplate(N(a),E);return}if(this._config.html){E.innerHTML=this._maybeSanitize(a);return}E.textContent=a}}_maybeSanitize(e){return this._config.sanitize?Cl(e,this._config.allowList,this._config.sanitizeFn):e}_resolvePossibleFunction(e){return l(e,[void 0,this])}_putElementInTemplate(e,a){if(this._config.html){a.innerHTML="",a.append(e);return}a.textContent=e.textContent}}let Ll="tooltip",Nl=new Set(["sanitize","allowList","sanitizeFn"]),_s="fade",Il="modal",wr="show",$l=".tooltip-inner",_o=`.${Il}`,bo="hide.bs.modal",zn="hover",bs="focus",Es="click",Pl="manual",Ml="hide",Hl="hidden",Rl="show",zl="shown",jl="inserted",Wl="click",ql="focusin",Fl="focusout",Bl="mouseenter",Vl="mouseleave",Yl={AUTO:"auto",TOP:"top",RIGHT:tt()?"left":"right",BOTTOM:"bottom",LEFT:tt()?"right":"left"},Ul={allowList:yo,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},Kl={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Di extends oe{constructor(e,a){if(typeof Vs>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");super(e,a),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return Ul}static get DefaultType(){return Kl}static get NAME(){return Ll}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),V.off(this._element.closest(_o),bo,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;let e=V.trigger(this._element,this.constructor.eventName(Rl)),g=(F(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(e.defaultPrevented||!g)return;this._disposePopper();let E=this._getTipElement();this._element.setAttribute("aria-describedby",E.getAttribute("id"));let{container:D}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(D.append(E),V.trigger(this._element,this.constructor.eventName(jl))),this._popper=this._createPopper(E),E.classList.add(wr),"ontouchstart"in document.documentElement)for(let q of[].concat(...document.body.children))V.on(q,"mouseover",C);let $=()=>{V.trigger(this._element,this.constructor.eventName(zl)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback($,this.tip,this._isAnimated())}hide(){if(!this._isShown()||V.trigger(this._element,this.constructor.eventName(Ml)).defaultPrevented)return;if(this._getTipElement().classList.remove(wr),"ontouchstart"in document.documentElement)for(let E of[].concat(...document.body.children))V.off(E,"mouseover",C);this._activeTrigger[Es]=!1,this._activeTrigger[bs]=!1,this._activeTrigger[zn]=!1,this._isHovered=null;let g=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),V.trigger(this._element,this.constructor.eventName(Hl)))};this._queueCallback(g,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(e){let a=this._getTemplateFactory(e).toHtml();if(!a)return null;a.classList.remove(_s,wr),a.classList.add(`bs-${this.constructor.NAME}-auto`);let g=x(this.constructor.NAME).toString();return a.setAttribute("id",g),this._isAnimated()&&a.classList.add(_s),a}setContent(e){this._newContent=e,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(e){return this._templateFactory?this._templateFactory.changeContent(e):this._templateFactory=new Dl({...this._config,content:e,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[$l]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(e){return this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(_s)}_isShown(){return this.tip&&this.tip.classList.contains(wr)}_createPopper(e){let a=l(this._config.placement,[this,e,this._element]),g=Yl[a.toUpperCase()];return gs(this._element,e,this._getPopperConfig(g))}_getOffset(){let{offset:e}=this._config;return typeof e=="string"?e.split(",").map(a=>Number.parseInt(a,10)):typeof e=="function"?a=>e(a,this._element):e}_resolvePossibleFunction(e){return l(e,[this._element,this._element])}_getPopperConfig(e){let a={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:g=>{this._getTipElement().setAttribute("data-popper-placement",g.state.placement)}}]};return{...a,...l(this._config.popperConfig,[void 0,a])}}_setListeners(){let e=this._config.trigger.split(" ");for(let a of e)if(a==="click")V.on(this._element,this.constructor.eventName(Wl),this._config.selector,g=>{let E=this._initializeOnDelegatedTarget(g);E._activeTrigger[Es]=!(E._isShown()&&E._activeTrigger[Es]),E.toggle()});else if(a!==Pl){let g=a===zn?this.constructor.eventName(Bl):this.constructor.eventName(ql),E=a===zn?this.constructor.eventName(Vl):this.constructor.eventName(Fl);V.on(this._element,g,this._config.selector,D=>{let $=this._initializeOnDelegatedTarget(D);$._activeTrigger[D.type==="focusin"?bs:zn]=!0,$._enter()}),V.on(this._element,E,this._config.selector,D=>{let $=this._initializeOnDelegatedTarget(D);$._activeTrigger[D.type==="focusout"?bs:zn]=$._element.contains(D.relatedTarget),$._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},V.on(this._element.closest(_o),bo,this._hideModalHandler)}_fixTitle(){let e=this._element.getAttribute("title");e&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",e),this._element.setAttribute("data-bs-original-title",e),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(e,a){clearTimeout(this._timeout),this._timeout=setTimeout(e,a)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(e){let a=Ae.getDataAttributes(this._element);for(let g of Object.keys(a))Nl.has(g)&&delete a[g];return e={...a,...typeof e=="object"&&e?e:{}},e=this._mergeConfigObj(e),e=this._configAfterMerge(e),this._typeCheckConfig(e),e}_configAfterMerge(e){return e.container=e.container===!1?document.body:N(e.container),typeof e.delay=="number"&&(e.delay={show:e.delay,hide:e.delay}),typeof e.title=="number"&&(e.title=e.title.toString()),typeof e.content=="number"&&(e.content=e.content.toString()),e}_getDelegateConfig(){let e={};for(let[a,g]of Object.entries(this._config))this.constructor.Default[a]!==g&&(e[a]=g);return e.selector=!1,e.trigger="manual",e}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(e){return this.each(function(){let a=Di.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof a[e]>"u")throw new TypeError(`No method named "${e}"`);a[e]()}})}}at(Di);let Gl="popover",Xl=".popover-header",Ql=".popover-body",Jl={...Di.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},Zl={...Di.DefaultType,content:"(null|string|element|function)"};class Cr extends Di{static get Default(){return Jl}static get DefaultType(){return Zl}static get NAME(){return Gl}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[Xl]:this._getTitle(),[Ql]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(e){return this.each(function(){let a=Cr.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof a[e]>"u")throw new TypeError(`No method named "${e}"`);a[e]()}})}}at(Cr);let tu="scrollspy",Ts=".bs.scrollspy",eu=".data-api",iu=`activate${Ts}`,Eo=`click${Ts}`,nu=`load${Ts}${eu}`,ru="dropdown-item",on="active",su='[data-bs-spy="scroll"]',Ss="[href]",ou=".nav, .list-group",To=".nav-link",au=`${To}, .nav-item > ${To}, .list-group-item`,lu=".dropdown",uu=".dropdown-toggle",cu={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},fu={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class jn extends oe{constructor(e,a){super(e,a),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return cu}static get DefaultType(){return fu}static get NAME(){return tu}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(let e of this._observableSections.values())this._observer.observe(e)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(e){return e.target=N(e.target)||document.body,e.rootMargin=e.offset?`${e.offset}px 0px -30%`:e.rootMargin,typeof e.threshold=="string"&&(e.threshold=e.threshold.split(",").map(a=>Number.parseFloat(a))),e}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(V.off(this._config.target,Eo),V.on(this._config.target,Eo,Ss,e=>{let a=this._observableSections.get(e.target.hash);if(a){e.preventDefault();let g=this._rootElement||window,E=a.offsetTop-this._element.offsetTop;if(g.scrollTo){g.scrollTo({top:E,behavior:"smooth"});return}g.scrollTop=E}}))}_getNewObserver(){let e={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(a=>this._observerCallback(a),e)}_observerCallback(e){let a=$=>this._targetLinks.get(`#${$.target.id}`),g=$=>{this._previousScrollData.visibleEntryTop=$.target.offsetTop,this._process(a($))},E=(this._rootElement||document.documentElement).scrollTop,D=E>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=E;for(let $ of e){if(!$.isIntersecting){this._activeTarget=null,this._clearActiveClass(a($));continue}let q=$.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(D&&q){if(g($),!E)return;continue}!D&&!q&&g($)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;let e=rt.find(Ss,this._config.target);for(let a of e){if(!a.hash||B(a))continue;let g=rt.findOne(decodeURI(a.hash),this._element);R(g)&&(this._targetLinks.set(decodeURI(a.hash),a),this._observableSections.set(a.hash,g))}}_process(e){this._activeTarget!==e&&(this._clearActiveClass(this._config.target),this._activeTarget=e,e.classList.add(on),this._activateParents(e),V.trigger(this._element,iu,{relatedTarget:e}))}_activateParents(e){if(e.classList.contains(ru)){rt.findOne(uu,e.closest(lu)).classList.add(on);return}for(let a of rt.parents(e,ou))for(let g of rt.prev(a,au))g.classList.add(on)}_clearActiveClass(e){e.classList.remove(on);let a=rt.find(`${Ss}.${on}`,e);for(let g of a)g.classList.remove(on)}static jQueryInterface(e){return this.each(function(){let a=jn.getOrCreateInstance(this,e);if(typeof e=="string"){if(a[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);a[e]()}})}}V.on(window,nu,()=>{for(let u of rt.find(su))jn.getOrCreateInstance(u)}),at(jn);let du="tab",Li=".bs.tab",hu=`hide${Li}`,pu=`hidden${Li}`,gu=`show${Li}`,mu=`shown${Li}`,vu=`click${Li}`,yu=`keydown${Li}`,_u=`load${Li}`,bu="ArrowLeft",So="ArrowRight",Eu="ArrowUp",wo="ArrowDown",ws="Home",Co="End",Ni="active",Ao="fade",Cs="show",Tu="dropdown",xo=".dropdown-toggle",Su=".dropdown-menu",As=`:not(${xo})`,wu='.list-group, .nav, [role="tablist"]',Cu=".nav-item, .list-group-item",Au=`.nav-link${As}, .list-group-item${As}, [role="tab"]${As}`,Oo='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',xs=`${Au}, ${Oo}`,xu=`.${Ni}[data-bs-toggle="tab"], .${Ni}[data-bs-toggle="pill"], .${Ni}[data-bs-toggle="list"]`;class Ii extends oe{constructor(e){super(e),this._parent=this._element.closest(wu),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),V.on(this._element,yu,a=>this._keydown(a)))}static get NAME(){return du}show(){let e=this._element;if(this._elemIsActive(e))return;let a=this._getActiveElem(),g=a?V.trigger(a,hu,{relatedTarget:e}):null;V.trigger(e,gu,{relatedTarget:a}).defaultPrevented||g&&g.defaultPrevented||(this._deactivate(a,e),this._activate(e,a))}_activate(e,a){if(!e)return;e.classList.add(Ni),this._activate(rt.getElementFromSelector(e));let g=()=>{if(e.getAttribute("role")!=="tab"){e.classList.add(Cs);return}e.removeAttribute("tabindex"),e.setAttribute("aria-selected",!0),this._toggleDropDown(e,!0),V.trigger(e,mu,{relatedTarget:a})};this._queueCallback(g,e,e.classList.contains(Ao))}_deactivate(e,a){if(!e)return;e.classList.remove(Ni),e.blur(),this._deactivate(rt.getElementFromSelector(e));let g=()=>{if(e.getAttribute("role")!=="tab"){e.classList.remove(Cs);return}e.setAttribute("aria-selected",!1),e.setAttribute("tabindex","-1"),this._toggleDropDown(e,!1),V.trigger(e,pu,{relatedTarget:a})};this._queueCallback(g,e,e.classList.contains(Ao))}_keydown(e){if(![bu,So,Eu,wo,ws,Co].includes(e.key))return;e.stopPropagation(),e.preventDefault();let a=this._getChildren().filter(E=>!B(E)),g;if([ws,Co].includes(e.key))g=a[e.key===ws?0:a.length-1];else{let E=[So,wo].includes(e.key);g=ct(a,e.target,E,!0)}g&&(g.focus({preventScroll:!0}),Ii.getOrCreateInstance(g).show())}_getChildren(){return rt.find(xs,this._parent)}_getActiveElem(){return this._getChildren().find(e=>this._elemIsActive(e))||null}_setInitialAttributes(e,a){this._setAttributeIfNotExists(e,"role","tablist");for(let g of a)this._setInitialAttributesOnChild(g)}_setInitialAttributesOnChild(e){e=this._getInnerElement(e);let a=this._elemIsActive(e),g=this._getOuterElement(e);e.setAttribute("aria-selected",a),g!==e&&this._setAttributeIfNotExists(g,"role","presentation"),a||e.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(e,"role","tab"),this._setInitialAttributesOnTargetPanel(e)}_setInitialAttributesOnTargetPanel(e){let a=rt.getElementFromSelector(e);a&&(this._setAttributeIfNotExists(a,"role","tabpanel"),e.id&&this._setAttributeIfNotExists(a,"aria-labelledby",`${e.id}`))}_toggleDropDown(e,a){let g=this._getOuterElement(e);if(!g.classList.contains(Tu))return;let E=(D,$)=>{let q=rt.findOne(D,g);q&&q.classList.toggle($,a)};E(xo,Ni),E(Su,Cs),g.setAttribute("aria-expanded",a)}_setAttributeIfNotExists(e,a,g){e.hasAttribute(a)||e.setAttribute(a,g)}_elemIsActive(e){return e.classList.contains(Ni)}_getInnerElement(e){return e.matches(xs)?e:rt.findOne(xs,e)}_getOuterElement(e){return e.closest(Cu)||e}static jQueryInterface(e){return this.each(function(){let a=Ii.getOrCreateInstance(this);if(typeof e=="string"){if(a[e]===void 0||e.startsWith("_")||e==="constructor")throw new TypeError(`No method named "${e}"`);a[e]()}})}}V.on(document,vu,Oo,function(u){["A","AREA"].includes(this.tagName)&&u.preventDefault(),!B(this)&&Ii.getOrCreateInstance(this).show()}),V.on(window,_u,()=>{for(let u of rt.find(xu))Ii.getOrCreateInstance(u)}),at(Ii);let Ou="toast",di=".bs.toast",ku=`mouseover${di}`,Du=`mouseout${di}`,Lu=`focusin${di}`,Nu=`focusout${di}`,Iu=`hide${di}`,$u=`hidden${di}`,Pu=`show${di}`,Mu=`shown${di}`,Hu="fade",ko="hide",Ar="show",xr="showing",Ru={animation:"boolean",autohide:"boolean",delay:"number"},zu={animation:!0,autohide:!0,delay:5e3};class Wn extends oe{constructor(e,a){super(e,a),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return zu}static get DefaultType(){return Ru}static get NAME(){return Ou}show(){if(V.trigger(this._element,Pu).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Hu);let a=()=>{this._element.classList.remove(xr),V.trigger(this._element,Mu),this._maybeScheduleHide()};this._element.classList.remove(ko),p(this._element),this._element.classList.add(Ar,xr),this._queueCallback(a,this._element,this._config.animation)}hide(){if(!this.isShown()||V.trigger(this._element,Iu).defaultPrevented)return;let a=()=>{this._element.classList.add(ko),this._element.classList.remove(xr,Ar),V.trigger(this._element,$u)};this._element.classList.add(xr),this._queueCallback(a,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(Ar),super.dispose()}isShown(){return this._element.classList.contains(Ar)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,a){switch(e.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=a;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=a;break}}if(a){this._clearTimeout();return}let g=e.relatedTarget;this._element===g||this._element.contains(g)||this._maybeScheduleHide()}_setListeners(){V.on(this._element,ku,e=>this._onInteraction(e,!0)),V.on(this._element,Du,e=>this._onInteraction(e,!1)),V.on(this._element,Lu,e=>this._onInteraction(e,!0)),V.on(this._element,Nu,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each(function(){let a=Wn.getOrCreateInstance(this,e);if(typeof e=="string"){if(typeof a[e]>"u")throw new TypeError(`No method named "${e}"`);a[e](this)}})}}return je(Wn),at(Wn),{Alert:it,Button:te,Carousel:me,Collapse:Ue,Dropdown:Le,Modal:ki,Offcanvas:Je,Popover:Cr,ScrollSpy:jn,Tab:Ii,Toast:Wn,Tooltip:Di}}))});var ea=Yt((Zo,ta)=>{(function(_){"use strict";typeof define=="function"&&define.amd?define(["jquery"],_):typeof Zo<"u"?ta.exports=_(Is()):_(jQuery)})(function(_){"use strict";var w=window.Slick||{};w=(function(){var n=0;function s(h,v){var m=this,x;m.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:_(h),appendDots:_(h),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(H,G){return _('<button type="button" />').text(G+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},m.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},_.extend(m,m.initials),m.activeBreakpoint=null,m.animType=null,m.animProp=null,m.breakpoints=[],m.breakpointSettings=[],m.cssTransitions=!1,m.focussed=!1,m.interrupted=!1,m.hidden="hidden",m.paused=!0,m.positionProp=null,m.respondTo=null,m.rowCount=1,m.shouldClick=!0,m.$slider=_(h),m.$slidesCache=null,m.transformType=null,m.transitionType=null,m.visibilityChange="visibilitychange",m.windowWidth=0,m.windowTimer=null,x=_(h).data("slick")||{},m.options=_.extend({},m.defaults,v,x),m.currentSlide=m.options.initialSlide,m.originalSettings=m.options,typeof document.mozHidden<"u"?(m.hidden="mozHidden",m.visibilityChange="mozvisibilitychange"):typeof document.webkitHidden<"u"&&(m.hidden="webkitHidden",m.visibilityChange="webkitvisibilitychange"),m.autoPlay=_.proxy(m.autoPlay,m),m.autoPlayClear=_.proxy(m.autoPlayClear,m),m.autoPlayIterator=_.proxy(m.autoPlayIterator,m),m.changeSlide=_.proxy(m.changeSlide,m),m.clickHandler=_.proxy(m.clickHandler,m),m.selectHandler=_.proxy(m.selectHandler,m),m.setPosition=_.proxy(m.setPosition,m),m.swipeHandler=_.proxy(m.swipeHandler,m),m.dragHandler=_.proxy(m.dragHandler,m),m.keyHandler=_.proxy(m.keyHandler,m),m.instanceUid=n++,m.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,m.registerBreakpoints(),m.init(!0)}return s})(),w.prototype.activateADA=function(){var n=this;n.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},w.prototype.addSlide=w.prototype.slickAdd=function(n,s,h){var v=this;if(typeof s=="boolean")h=s,s=null;else if(s<0||s>=v.slideCount)return!1;v.unload(),typeof s=="number"?s===0&&v.$slides.length===0?_(n).appendTo(v.$slideTrack):h?_(n).insertBefore(v.$slides.eq(s)):_(n).insertAfter(v.$slides.eq(s)):h===!0?_(n).prependTo(v.$slideTrack):_(n).appendTo(v.$slideTrack),v.$slides=v.$slideTrack.children(this.options.slide),v.$slideTrack.children(this.options.slide).detach(),v.$slideTrack.append(v.$slides),v.$slides.each(function(m,x){_(x).attr("data-slick-index",m)}),v.$slidesCache=v.$slides,v.reinit()},w.prototype.animateHeight=function(){var n=this;if(n.options.slidesToShow===1&&n.options.adaptiveHeight===!0&&n.options.vertical===!1){var s=n.$slides.eq(n.currentSlide).outerHeight(!0);n.$list.animate({height:s},n.options.speed)}},w.prototype.animateSlide=function(n,s){var h={},v=this;v.animateHeight(),v.options.rtl===!0&&v.options.vertical===!1&&(n=-n),v.transformsEnabled===!1?v.options.vertical===!1?v.$slideTrack.animate({left:n},v.options.speed,v.options.easing,s):v.$slideTrack.animate({top:n},v.options.speed,v.options.easing,s):v.cssTransitions===!1?(v.options.rtl===!0&&(v.currentLeft=-v.currentLeft),_({animStart:v.currentLeft}).animate({animStart:n},{duration:v.options.speed,easing:v.options.easing,step:function(m){m=Math.ceil(m),v.options.vertical===!1?(h[v.animType]="translate("+m+"px, 0px)",v.$slideTrack.css(h)):(h[v.animType]="translate(0px,"+m+"px)",v.$slideTrack.css(h))},complete:function(){s&&s.call()}})):(v.applyTransition(),n=Math.ceil(n),v.options.vertical===!1?h[v.animType]="translate3d("+n+"px, 0px, 0px)":h[v.animType]="translate3d(0px,"+n+"px, 0px)",v.$slideTrack.css(h),s&&setTimeout(function(){v.disableTransition(),s.call()},v.options.speed))},w.prototype.getNavTarget=function(){var n=this,s=n.options.asNavFor;return s&&s!==null&&(s=_(s).not(n.$slider)),s},w.prototype.asNavFor=function(n){var s=this,h=s.getNavTarget();h!==null&&typeof h=="object"&&h.each(function(){var v=_(this).slick("getSlick");v.unslicked||v.slideHandler(n,!0)})},w.prototype.applyTransition=function(n){var s=this,h={};s.options.fade===!1?h[s.transitionType]=s.transformType+" "+s.options.speed+"ms "+s.options.cssEase:h[s.transitionType]="opacity "+s.options.speed+"ms "+s.options.cssEase,s.options.fade===!1?s.$slideTrack.css(h):s.$slides.eq(n).css(h)},w.prototype.autoPlay=function(){var n=this;n.autoPlayClear(),n.slideCount>n.options.slidesToShow&&(n.autoPlayTimer=setInterval(n.autoPlayIterator,n.options.autoplaySpeed))},w.prototype.autoPlayClear=function(){var n=this;n.autoPlayTimer&&clearInterval(n.autoPlayTimer)},w.prototype.autoPlayIterator=function(){var n=this,s=n.currentSlide+n.options.slidesToScroll;!n.paused&&!n.interrupted&&!n.focussed&&(n.options.infinite===!1&&(n.direction===1&&n.currentSlide+1===n.slideCount-1?n.direction=0:n.direction===0&&(s=n.currentSlide-n.options.slidesToScroll,n.currentSlide-1===0&&(n.direction=1))),n.slideHandler(s))},w.prototype.buildArrows=function(){var n=this;n.options.arrows===!0&&(n.$prevArrow=_(n.options.prevArrow).addClass("slick-arrow"),n.$nextArrow=_(n.options.nextArrow).addClass("slick-arrow"),n.slideCount>n.options.slidesToShow?(n.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),n.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.prependTo(n.options.appendArrows),n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.appendTo(n.options.appendArrows),n.options.infinite!==!0&&n.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):n.$prevArrow.add(n.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},w.prototype.buildDots=function(){var n=this,s,h;if(n.options.dots===!0&&n.slideCount>n.options.slidesToShow){for(n.$slider.addClass("slick-dotted"),h=_("<ul />").addClass(n.options.dotsClass),s=0;s<=n.getDotCount();s+=1)h.append(_("<li />").append(n.options.customPaging.call(this,n,s)));n.$dots=h.appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active")}},w.prototype.buildOut=function(){var n=this;n.$slides=n.$slider.children(n.options.slide+":not(.slick-cloned)").addClass("slick-slide"),n.slideCount=n.$slides.length,n.$slides.each(function(s,h){_(h).attr("data-slick-index",s).data("originalStyling",_(h).attr("style")||"")}),n.$slider.addClass("slick-slider"),n.$slideTrack=n.slideCount===0?_('<div class="slick-track"/>').appendTo(n.$slider):n.$slides.wrapAll('<div class="slick-track"/>').parent(),n.$list=n.$slideTrack.wrap('<div class="slick-list"/>').parent(),n.$slideTrack.css("opacity",0),(n.options.centerMode===!0||n.options.swipeToSlide===!0)&&(n.options.slidesToScroll=1),_("img[data-lazy]",n.$slider).not("[src]").addClass("slick-loading"),n.setupInfinite(),n.buildArrows(),n.buildDots(),n.updateDots(),n.setSlideClasses(typeof n.currentSlide=="number"?n.currentSlide:0),n.options.draggable===!0&&n.$list.addClass("draggable")},w.prototype.buildRows=function(){var n=this,s,h,v,m,x,H,G;if(m=document.createDocumentFragment(),H=n.$slider.children(),n.options.rows>0){for(G=n.options.slidesPerRow*n.options.rows,x=Math.ceil(H.length/G),s=0;s<x;s++){var k=document.createElement("div");for(h=0;h<n.options.rows;h++){var N=document.createElement("div");for(v=0;v<n.options.slidesPerRow;v++){var R=s*G+(h*n.options.slidesPerRow+v);H.get(R)&&N.appendChild(H.get(R))}k.appendChild(N)}m.appendChild(k)}n.$slider.empty().append(m),n.$slider.children().children().children().css({width:100/n.options.slidesPerRow+"%",display:"inline-block"})}},w.prototype.checkResponsive=function(n,s){var h=this,v,m,x,H=!1,G=h.$slider.width(),k=window.innerWidth||_(window).width();if(h.respondTo==="window"?x=k:h.respondTo==="slider"?x=G:h.respondTo==="min"&&(x=Math.min(k,G)),h.options.responsive&&h.options.responsive.length&&h.options.responsive!==null){m=null;for(v in h.breakpoints)h.breakpoints.hasOwnProperty(v)&&(h.originalSettings.mobileFirst===!1?x<h.breakpoints[v]&&(m=h.breakpoints[v]):x>h.breakpoints[v]&&(m=h.breakpoints[v]));m!==null?h.activeBreakpoint!==null?(m!==h.activeBreakpoint||s)&&(h.activeBreakpoint=m,h.breakpointSettings[m]==="unslick"?h.unslick(m):(h.options=_.extend({},h.originalSettings,h.breakpointSettings[m]),n===!0&&(h.currentSlide=h.options.initialSlide),h.refresh(n)),H=m):(h.activeBreakpoint=m,h.breakpointSettings[m]==="unslick"?h.unslick(m):(h.options=_.extend({},h.originalSettings,h.breakpointSettings[m]),n===!0&&(h.currentSlide=h.options.initialSlide),h.refresh(n)),H=m):h.activeBreakpoint!==null&&(h.activeBreakpoint=null,h.options=h.originalSettings,n===!0&&(h.currentSlide=h.options.initialSlide),h.refresh(n),H=m),!n&&H!==!1&&h.$slider.trigger("breakpoint",[h,H])}},w.prototype.changeSlide=function(n,s){var h=this,v=_(n.currentTarget),m,x,H;switch(v.is("a")&&n.preventDefault(),v.is("li")||(v=v.closest("li")),H=h.slideCount%h.options.slidesToScroll!==0,m=H?0:(h.slideCount-h.currentSlide)%h.options.slidesToScroll,n.data.message){case"previous":x=m===0?h.options.slidesToScroll:h.options.slidesToShow-m,h.slideCount>h.options.slidesToShow&&h.slideHandler(h.currentSlide-x,!1,s);break;case"next":x=m===0?h.options.slidesToScroll:m,h.slideCount>h.options.slidesToShow&&h.slideHandler(h.currentSlide+x,!1,s);break;case"index":var G=n.data.index===0?0:n.data.index||v.index()*h.options.slidesToScroll;h.slideHandler(h.checkNavigable(G),!1,s),v.children().trigger("focus");break;default:return}},w.prototype.checkNavigable=function(n){var s=this,h,v;if(h=s.getNavigableIndexes(),v=0,n>h[h.length-1])n=h[h.length-1];else for(var m in h){if(n<h[m]){n=v;break}v=h[m]}return n},w.prototype.cleanUpEvents=function(){var n=this;n.options.dots&&n.$dots!==null&&(_("li",n.$dots).off("click.slick",n.changeSlide).off("mouseenter.slick",_.proxy(n.interrupt,n,!0)).off("mouseleave.slick",_.proxy(n.interrupt,n,!1)),n.options.accessibility===!0&&n.$dots.off("keydown.slick",n.keyHandler)),n.$slider.off("focus.slick blur.slick"),n.options.arrows===!0&&n.slideCount>n.options.slidesToShow&&(n.$prevArrow&&n.$prevArrow.off("click.slick",n.changeSlide),n.$nextArrow&&n.$nextArrow.off("click.slick",n.changeSlide),n.options.accessibility===!0&&(n.$prevArrow&&n.$prevArrow.off("keydown.slick",n.keyHandler),n.$nextArrow&&n.$nextArrow.off("keydown.slick",n.keyHandler))),n.$list.off("touchstart.slick mousedown.slick",n.swipeHandler),n.$list.off("touchmove.slick mousemove.slick",n.swipeHandler),n.$list.off("touchend.slick mouseup.slick",n.swipeHandler),n.$list.off("touchcancel.slick mouseleave.slick",n.swipeHandler),n.$list.off("click.slick",n.clickHandler),_(document).off(n.visibilityChange,n.visibility),n.cleanUpSlideEvents(),n.options.accessibility===!0&&n.$list.off("keydown.slick",n.keyHandler),n.options.focusOnSelect===!0&&_(n.$slideTrack).children().off("click.slick",n.selectHandler),_(window).off("orientationchange.slick.slick-"+n.instanceUid,n.orientationChange),_(window).off("resize.slick.slick-"+n.instanceUid,n.resize),_("[draggable!=true]",n.$slideTrack).off("dragstart",n.preventDefault),_(window).off("load.slick.slick-"+n.instanceUid,n.setPosition)},w.prototype.cleanUpSlideEvents=function(){var n=this;n.$list.off("mouseenter.slick",_.proxy(n.interrupt,n,!0)),n.$list.off("mouseleave.slick",_.proxy(n.interrupt,n,!1))},w.prototype.cleanUpRows=function(){var n=this,s;n.options.rows>0&&(s=n.$slides.children().children(),s.removeAttr("style"),n.$slider.empty().append(s))},w.prototype.clickHandler=function(n){var s=this;s.shouldClick===!1&&(n.stopImmediatePropagation(),n.stopPropagation(),n.preventDefault())},w.prototype.destroy=function(n){var s=this;s.autoPlayClear(),s.touchObject={},s.cleanUpEvents(),_(".slick-cloned",s.$slider).detach(),s.$dots&&s.$dots.remove(),s.$prevArrow&&s.$prevArrow.length&&(s.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),s.htmlExpr.test(s.options.prevArrow)&&s.$prevArrow.remove()),s.$nextArrow&&s.$nextArrow.length&&(s.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),s.htmlExpr.test(s.options.nextArrow)&&s.$nextArrow.remove()),s.$slides&&(s.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){_(this).attr("style",_(this).data("originalStyling"))}),s.$slideTrack.children(this.options.slide).detach(),s.$slideTrack.detach(),s.$list.detach(),s.$slider.append(s.$slides)),s.cleanUpRows(),s.$slider.removeClass("slick-slider"),s.$slider.removeClass("slick-initialized"),s.$slider.removeClass("slick-dotted"),s.unslicked=!0,n||s.$slider.trigger("destroy",[s])},w.prototype.disableTransition=function(n){var s=this,h={};h[s.transitionType]="",s.options.fade===!1?s.$slideTrack.css(h):s.$slides.eq(n).css(h)},w.prototype.fadeSlide=function(n,s){var h=this;h.cssTransitions===!1?(h.$slides.eq(n).css({zIndex:h.options.zIndex}),h.$slides.eq(n).animate({opacity:1},h.options.speed,h.options.easing,s)):(h.applyTransition(n),h.$slides.eq(n).css({opacity:1,zIndex:h.options.zIndex}),s&&setTimeout(function(){h.disableTransition(n),s.call()},h.options.speed))},w.prototype.fadeSlideOut=function(n){var s=this;s.cssTransitions===!1?s.$slides.eq(n).animate({opacity:0,zIndex:s.options.zIndex-2},s.options.speed,s.options.easing):(s.applyTransition(n),s.$slides.eq(n).css({opacity:0,zIndex:s.options.zIndex-2}))},w.prototype.filterSlides=w.prototype.slickFilter=function(n){var s=this;n!==null&&(s.$slidesCache=s.$slides,s.unload(),s.$slideTrack.children(this.options.slide).detach(),s.$slidesCache.filter(n).appendTo(s.$slideTrack),s.reinit())},w.prototype.focusHandler=function(){var n=this;n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(s){s.stopImmediatePropagation();var h=_(this);setTimeout(function(){n.options.pauseOnFocus&&(n.focussed=h.is(":focus"),n.autoPlay())},0)})},w.prototype.getCurrent=w.prototype.slickCurrentSlide=function(){var n=this;return n.currentSlide},w.prototype.getDotCount=function(){var n=this,s=0,h=0,v=0;if(n.options.infinite===!0)if(n.slideCount<=n.options.slidesToShow)++v;else for(;s<n.slideCount;)++v,s=h+n.options.slidesToScroll,h+=n.options.slidesToScroll<=n.options.slidesToShow?n.options.slidesToScroll:n.options.slidesToShow;else if(n.options.centerMode===!0)v=n.slideCount;else if(!n.options.asNavFor)v=1+Math.ceil((n.slideCount-n.options.slidesToShow)/n.options.slidesToScroll);else for(;s<n.slideCount;)++v,s=h+n.options.slidesToScroll,h+=n.options.slidesToScroll<=n.options.slidesToShow?n.options.slidesToScroll:n.options.slidesToShow;return v-1},w.prototype.getLeft=function(n){var s=this,h,v,m=0,x,H;return s.slideOffset=0,v=s.$slides.first().outerHeight(!0),s.options.infinite===!0?(s.slideCount>s.options.slidesToShow&&(s.slideOffset=s.slideWidth*s.options.slidesToShow*-1,H=-1,s.options.vertical===!0&&s.options.centerMode===!0&&(s.options.slidesToShow===2?H=-1.5:s.options.slidesToShow===1&&(H=-2)),m=v*s.options.slidesToShow*H),s.slideCount%s.options.slidesToScroll!==0&&n+s.options.slidesToScroll>s.slideCount&&s.slideCount>s.options.slidesToShow&&(n>s.slideCount?(s.slideOffset=(s.options.slidesToShow-(n-s.slideCount))*s.slideWidth*-1,m=(s.options.slidesToShow-(n-s.slideCount))*v*-1):(s.slideOffset=s.slideCount%s.options.slidesToScroll*s.slideWidth*-1,m=s.slideCount%s.options.slidesToScroll*v*-1))):n+s.options.slidesToShow>s.slideCount&&(s.slideOffset=(n+s.options.slidesToShow-s.slideCount)*s.slideWidth,m=(n+s.options.slidesToShow-s.slideCount)*v),s.slideCount<=s.options.slidesToShow&&(s.slideOffset=0,m=0),s.options.centerMode===!0&&s.slideCount<=s.options.slidesToShow?s.slideOffset=s.slideWidth*Math.floor(s.options.slidesToShow)/2-s.slideWidth*s.slideCount/2:s.options.centerMode===!0&&s.options.infinite===!0?s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)-s.slideWidth:s.options.centerMode===!0&&(s.slideOffset=0,s.slideOffset+=s.slideWidth*Math.floor(s.options.slidesToShow/2)),s.options.vertical===!1?h=n*s.slideWidth*-1+s.slideOffset:h=n*v*-1+m,s.options.variableWidth===!0&&(s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?x=s.$slideTrack.children(".slick-slide").eq(n):x=s.$slideTrack.children(".slick-slide").eq(n+s.options.slidesToShow),s.options.rtl===!0?x[0]?h=(s.$slideTrack.width()-x[0].offsetLeft-x.width())*-1:h=0:h=x[0]?x[0].offsetLeft*-1:0,s.options.centerMode===!0&&(s.slideCount<=s.options.slidesToShow||s.options.infinite===!1?x=s.$slideTrack.children(".slick-slide").eq(n):x=s.$slideTrack.children(".slick-slide").eq(n+s.options.slidesToShow+1),s.options.rtl===!0?x[0]?h=(s.$slideTrack.width()-x[0].offsetLeft-x.width())*-1:h=0:h=x[0]?x[0].offsetLeft*-1:0,h+=(s.$list.width()-x.outerWidth())/2)),h},w.prototype.getOption=w.prototype.slickGetOption=function(n){var s=this;return s.options[n]},w.prototype.getNavigableIndexes=function(){var n=this,s=0,h=0,v=[],m;for(n.options.infinite===!1?m=n.slideCount:(s=n.options.slidesToScroll*-1,h=n.options.slidesToScroll*-1,m=n.slideCount*2);s<m;)v.push(s),s=h+n.options.slidesToScroll,h+=n.options.slidesToScroll<=n.options.slidesToShow?n.options.slidesToScroll:n.options.slidesToShow;return v},w.prototype.getSlick=function(){return this},w.prototype.getSlideCount=function(){var n=this,s,h,v;return v=n.options.centerMode===!0?n.slideWidth*Math.floor(n.options.slidesToShow/2):0,n.options.swipeToSlide===!0?(n.$slideTrack.find(".slick-slide").each(function(m,x){if(x.offsetLeft-v+_(x).outerWidth()/2>n.swipeLeft*-1)return h=x,!1}),s=Math.abs(_(h).attr("data-slick-index")-n.currentSlide)||1,s):n.options.slidesToScroll},w.prototype.goTo=w.prototype.slickGoTo=function(n,s){var h=this;h.changeSlide({data:{message:"index",index:parseInt(n)}},s)},w.prototype.init=function(n){var s=this;_(s.$slider).hasClass("slick-initialized")||(_(s.$slider).addClass("slick-initialized"),s.buildRows(),s.buildOut(),s.setProps(),s.startLoad(),s.loadSlider(),s.initializeEvents(),s.updateArrows(),s.updateDots(),s.checkResponsive(!0),s.focusHandler()),n&&s.$slider.trigger("init",[s]),s.options.accessibility===!0&&s.initADA(),s.options.autoplay&&(s.paused=!1,s.autoPlay())},w.prototype.initADA=function(){var n=this,s=Math.ceil(n.slideCount/n.options.slidesToShow),h=n.getNavigableIndexes().filter(function(x){return x>=0&&x<n.slideCount});n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),n.$dots!==null&&(n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(x){var H=h.indexOf(x);if(_(this).attr({role:"tabpanel",id:"slick-slide"+n.instanceUid+x,tabindex:-1}),H!==-1){var G="slick-slide-control"+n.instanceUid+H;_("#"+G).length&&_(this).attr({"aria-describedby":G})}}),n.$dots.attr("role","tablist").find("li").each(function(x){var H=h[x];_(this).attr({role:"presentation"}),_(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+n.instanceUid+x,"aria-controls":"slick-slide"+n.instanceUid+H,"aria-label":x+1+" of "+s,"aria-selected":null,tabindex:"-1"})}).eq(n.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var v=n.currentSlide,m=v+n.options.slidesToShow;v<m;v++)n.options.focusOnChange?n.$slides.eq(v).attr({tabindex:"0"}):n.$slides.eq(v).removeAttr("tabindex");n.activateADA()},w.prototype.initArrowEvents=function(){var n=this;n.options.arrows===!0&&n.slideCount>n.options.slidesToShow&&(n.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},n.changeSlide),n.$nextArrow.off("click.slick").on("click.slick",{message:"next"},n.changeSlide),n.options.accessibility===!0&&(n.$prevArrow.on("keydown.slick",n.keyHandler),n.$nextArrow.on("keydown.slick",n.keyHandler)))},w.prototype.initDotEvents=function(){var n=this;n.options.dots===!0&&n.slideCount>n.options.slidesToShow&&(_("li",n.$dots).on("click.slick",{message:"index"},n.changeSlide),n.options.accessibility===!0&&n.$dots.on("keydown.slick",n.keyHandler)),n.options.dots===!0&&n.options.pauseOnDotsHover===!0&&n.slideCount>n.options.slidesToShow&&_("li",n.$dots).on("mouseenter.slick",_.proxy(n.interrupt,n,!0)).on("mouseleave.slick",_.proxy(n.interrupt,n,!1))},w.prototype.initSlideEvents=function(){var n=this;n.options.pauseOnHover&&(n.$list.on("mouseenter.slick",_.proxy(n.interrupt,n,!0)),n.$list.on("mouseleave.slick",_.proxy(n.interrupt,n,!1)))},w.prototype.initializeEvents=function(){var n=this;n.initArrowEvents(),n.initDotEvents(),n.initSlideEvents(),n.$list.on("touchstart.slick mousedown.slick",{action:"start"},n.swipeHandler),n.$list.on("touchmove.slick mousemove.slick",{action:"move"},n.swipeHandler),n.$list.on("touchend.slick mouseup.slick",{action:"end"},n.swipeHandler),n.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},n.swipeHandler),n.$list.on("click.slick",n.clickHandler),_(document).on(n.visibilityChange,_.proxy(n.visibility,n)),n.options.accessibility===!0&&n.$list.on("keydown.slick",n.keyHandler),n.options.focusOnSelect===!0&&_(n.$slideTrack).children().on("click.slick",n.selectHandler),_(window).on("orientationchange.slick.slick-"+n.instanceUid,_.proxy(n.orientationChange,n)),_(window).on("resize.slick.slick-"+n.instanceUid,_.proxy(n.resize,n)),_("[draggable!=true]",n.$slideTrack).on("dragstart",n.preventDefault),_(window).on("load.slick.slick-"+n.instanceUid,n.setPosition),_(n.setPosition)},w.prototype.initUI=function(){var n=this;n.options.arrows===!0&&n.slideCount>n.options.slidesToShow&&(n.$prevArrow.show(),n.$nextArrow.show()),n.options.dots===!0&&n.slideCount>n.options.slidesToShow&&n.$dots.show()},w.prototype.keyHandler=function(n){var s=this;n.target.tagName.match("TEXTAREA|INPUT|SELECT")||(n.keyCode===37&&s.options.accessibility===!0?s.changeSlide({data:{message:s.options.rtl===!0?"next":"previous"}}):n.keyCode===39&&s.options.accessibility===!0&&s.changeSlide({data:{message:s.options.rtl===!0?"previous":"next"}}))},w.prototype.lazyLoad=function(){var n=this,s,h,v,m;function x(R){_("img[data-lazy]",R).each(function(){var B=_(this),F=_(this).attr("data-lazy"),C=_(this).attr("data-srcset"),p=_(this).attr("data-sizes")||n.$slider.attr("data-sizes"),S=document.createElement("img");S.onload=function(){B.animate({opacity:0},100,function(){C&&(B.attr("srcset",C),p&&B.attr("sizes",p)),B.attr("src",F).animate({opacity:1},200,function(){B.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),n.$slider.trigger("lazyLoaded",[n,B,F])})},S.onerror=function(){B.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),n.$slider.trigger("lazyLoadError",[n,B,F])},S.src=F})}if(n.options.centerMode===!0?n.options.infinite===!0?(v=n.currentSlide+(n.options.slidesToShow/2+1),m=v+n.options.slidesToShow+2):(v=Math.max(0,n.currentSlide-(n.options.slidesToShow/2+1)),m=2+(n.options.slidesToShow/2+1)+n.currentSlide):(v=n.options.infinite?n.options.slidesToShow+n.currentSlide:n.currentSlide,m=Math.ceil(v+n.options.slidesToShow),n.options.fade===!0&&(v>0&&v--,m<=n.slideCount&&m++)),s=n.$slider.find(".slick-slide").slice(v,m),n.options.lazyLoad==="anticipated")for(var H=v-1,G=m,k=n.$slider.find(".slick-slide"),N=0;N<n.options.slidesToScroll;N++)H<0&&(H=n.slideCount-1),s=s.add(k.eq(H)),s=s.add(k.eq(G)),H--,G++;x(s),n.slideCount<=n.options.slidesToShow?(h=n.$slider.find(".slick-slide"),x(h)):n.currentSlide>=n.slideCount-n.options.slidesToShow?(h=n.$slider.find(".slick-cloned").slice(0,n.options.slidesToShow),x(h)):n.currentSlide===0&&(h=n.$slider.find(".slick-cloned").slice(n.options.slidesToShow*-1),x(h))},w.prototype.loadSlider=function(){var n=this;n.setPosition(),n.$slideTrack.css({opacity:1}),n.$slider.removeClass("slick-loading"),n.initUI(),n.options.lazyLoad==="progressive"&&n.progressiveLazyLoad()},w.prototype.next=w.prototype.slickNext=function(){var n=this;n.changeSlide({data:{message:"next"}})},w.prototype.orientationChange=function(){var n=this;n.checkResponsive(),n.setPosition()},w.prototype.pause=w.prototype.slickPause=function(){var n=this;n.autoPlayClear(),n.paused=!0},w.prototype.play=w.prototype.slickPlay=function(){var n=this;n.autoPlay(),n.options.autoplay=!0,n.paused=!1,n.focussed=!1,n.interrupted=!1},w.prototype.postSlide=function(n){var s=this;if(!s.unslicked&&(s.$slider.trigger("afterChange",[s,n]),s.animating=!1,s.slideCount>s.options.slidesToShow&&s.setPosition(),s.swipeLeft=null,s.options.autoplay&&s.autoPlay(),s.options.accessibility===!0&&(s.initADA(),s.options.focusOnChange))){var h=_(s.$slides.get(s.currentSlide));h.attr("tabindex",0).focus()}},w.prototype.prev=w.prototype.slickPrev=function(){var n=this;n.changeSlide({data:{message:"previous"}})},w.prototype.preventDefault=function(n){n.preventDefault()},w.prototype.progressiveLazyLoad=function(n){n=n||1;var s=this,h=_("img[data-lazy]",s.$slider),v,m,x,H,G;h.length?(v=h.first(),m=v.attr("data-lazy"),x=v.attr("data-srcset"),H=v.attr("data-sizes")||s.$slider.attr("data-sizes"),G=document.createElement("img"),G.onload=function(){x&&(v.attr("srcset",x),H&&v.attr("sizes",H)),v.attr("src",m).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),s.options.adaptiveHeight===!0&&s.setPosition(),s.$slider.trigger("lazyLoaded",[s,v,m]),s.progressiveLazyLoad()},G.onerror=function(){n<3?setTimeout(function(){s.progressiveLazyLoad(n+1)},500):(v.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,v,m]),s.progressiveLazyLoad())},G.src=m):s.$slider.trigger("allImagesLoaded",[s])},w.prototype.refresh=function(n){var s=this,h,v;v=s.slideCount-s.options.slidesToShow,!s.options.infinite&&s.currentSlide>v&&(s.currentSlide=v),s.slideCount<=s.options.slidesToShow&&(s.currentSlide=0),h=s.currentSlide,s.destroy(!0),_.extend(s,s.initials,{currentSlide:h}),s.init(),n||s.changeSlide({data:{message:"index",index:h}},!1)},w.prototype.registerBreakpoints=function(){var n=this,s,h,v,m=n.options.responsive||null;if(_.type(m)==="array"&&m.length){n.respondTo=n.options.respondTo||"window";for(s in m)if(v=n.breakpoints.length-1,m.hasOwnProperty(s)){for(h=m[s].breakpoint;v>=0;)n.breakpoints[v]&&n.breakpoints[v]===h&&n.breakpoints.splice(v,1),v--;n.breakpoints.push(h),n.breakpointSettings[h]=m[s].settings}n.breakpoints.sort(function(x,H){return n.options.mobileFirst?x-H:H-x})}},w.prototype.reinit=function(){var n=this;n.$slides=n.$slideTrack.children(n.options.slide).addClass("slick-slide"),n.slideCount=n.$slides.length,n.currentSlide>=n.slideCount&&n.currentSlide!==0&&(n.currentSlide=n.currentSlide-n.options.slidesToScroll),n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),n.registerBreakpoints(),n.setProps(),n.setupInfinite(),n.buildArrows(),n.updateArrows(),n.initArrowEvents(),n.buildDots(),n.updateDots(),n.initDotEvents(),n.cleanUpSlideEvents(),n.initSlideEvents(),n.checkResponsive(!1,!0),n.options.focusOnSelect===!0&&_(n.$slideTrack).children().on("click.slick",n.selectHandler),n.setSlideClasses(typeof n.currentSlide=="number"?n.currentSlide:0),n.setPosition(),n.focusHandler(),n.paused=!n.options.autoplay,n.autoPlay(),n.$slider.trigger("reInit",[n])},w.prototype.resize=function(){var n=this;_(window).width()!==n.windowWidth&&(clearTimeout(n.windowDelay),n.windowDelay=window.setTimeout(function(){n.windowWidth=_(window).width(),n.checkResponsive(),n.unslicked||n.setPosition()},50))},w.prototype.removeSlide=w.prototype.slickRemove=function(n,s,h){var v=this;if(typeof n=="boolean"?(s=n,n=s===!0?0:v.slideCount-1):n=s===!0?--n:n,v.slideCount<1||n<0||n>v.slideCount-1)return!1;v.unload(),h===!0?v.$slideTrack.children().remove():v.$slideTrack.children(this.options.slide).eq(n).remove(),v.$slides=v.$slideTrack.children(this.options.slide),v.$slideTrack.children(this.options.slide).detach(),v.$slideTrack.append(v.$slides),v.$slidesCache=v.$slides,v.reinit()},w.prototype.setCSS=function(n){var s=this,h={},v,m;s.options.rtl===!0&&(n=-n),v=s.positionProp=="left"?Math.ceil(n)+"px":"0px",m=s.positionProp=="top"?Math.ceil(n)+"px":"0px",h[s.positionProp]=n,s.transformsEnabled===!1?s.$slideTrack.css(h):(h={},s.cssTransitions===!1?(h[s.animType]="translate("+v+", "+m+")",s.$slideTrack.css(h)):(h[s.animType]="translate3d("+v+", "+m+", 0px)",s.$slideTrack.css(h)))},w.prototype.setDimensions=function(){var n=this;n.options.vertical===!1?n.options.centerMode===!0&&n.$list.css({padding:"0px "+n.options.centerPadding}):(n.$list.height(n.$slides.first().outerHeight(!0)*n.options.slidesToShow),n.options.centerMode===!0&&n.$list.css({padding:n.options.centerPadding+" 0px"})),n.listWidth=n.$list.width(),n.listHeight=n.$list.height(),n.options.vertical===!1&&n.options.variableWidth===!1?(n.slideWidth=Math.ceil(n.listWidth/n.options.slidesToShow),n.$slideTrack.width(Math.ceil(n.slideWidth*n.$slideTrack.children(".slick-slide").length))):n.options.variableWidth===!0?n.$slideTrack.width(5e3*n.slideCount):(n.slideWidth=Math.ceil(n.listWidth),n.$slideTrack.height(Math.ceil(n.$slides.first().outerHeight(!0)*n.$slideTrack.children(".slick-slide").length)));var s=n.$slides.first().outerWidth(!0)-n.$slides.first().width();n.options.variableWidth===!1&&n.$slideTrack.children(".slick-slide").width(n.slideWidth-s)},w.prototype.setFade=function(){var n=this,s;n.$slides.each(function(h,v){s=n.slideWidth*h*-1,n.options.rtl===!0?_(v).css({position:"relative",right:s,top:0,zIndex:n.options.zIndex-2,opacity:0}):_(v).css({position:"relative",left:s,top:0,zIndex:n.options.zIndex-2,opacity:0})}),n.$slides.eq(n.currentSlide).css({zIndex:n.options.zIndex-1,opacity:1})},w.prototype.setHeight=function(){var n=this;if(n.options.slidesToShow===1&&n.options.adaptiveHeight===!0&&n.options.vertical===!1){var s=n.$slides.eq(n.currentSlide).outerHeight(!0);n.$list.css("height",s)}},w.prototype.setOption=w.prototype.slickSetOption=function(){var n=this,s,h,v,m,x=!1,H;if(_.type(arguments[0])==="object"?(v=arguments[0],x=arguments[1],H="multiple"):_.type(arguments[0])==="string"&&(v=arguments[0],m=arguments[1],x=arguments[2],arguments[0]==="responsive"&&_.type(arguments[1])==="array"?H="responsive":typeof arguments[1]<"u"&&(H="single")),H==="single")n.options[v]=m;else if(H==="multiple")_.each(v,function(G,k){n.options[G]=k});else if(H==="responsive")for(h in m)if(_.type(n.options.responsive)!=="array")n.options.responsive=[m[h]];else{for(s=n.options.responsive.length-1;s>=0;)n.options.responsive[s].breakpoint===m[h].breakpoint&&n.options.responsive.splice(s,1),s--;n.options.responsive.push(m[h])}x&&(n.unload(),n.reinit())},w.prototype.setPosition=function(){var n=this;n.setDimensions(),n.setHeight(),n.options.fade===!1?n.setCSS(n.getLeft(n.currentSlide)):n.setFade(),n.$slider.trigger("setPosition",[n])},w.prototype.setProps=function(){var n=this,s=document.body.style;n.positionProp=n.options.vertical===!0?"top":"left",n.positionProp==="top"?n.$slider.addClass("slick-vertical"):n.$slider.removeClass("slick-vertical"),(s.WebkitTransition!==void 0||s.MozTransition!==void 0||s.msTransition!==void 0)&&n.options.useCSS===!0&&(n.cssTransitions=!0),n.options.fade&&(typeof n.options.zIndex=="number"?n.options.zIndex<3&&(n.options.zIndex=3):n.options.zIndex=n.defaults.zIndex),s.OTransform!==void 0&&(n.animType="OTransform",n.transformType="-o-transform",n.transitionType="OTransition",s.perspectiveProperty===void 0&&s.webkitPerspective===void 0&&(n.animType=!1)),s.MozTransform!==void 0&&(n.animType="MozTransform",n.transformType="-moz-transform",n.transitionType="MozTransition",s.perspectiveProperty===void 0&&s.MozPerspective===void 0&&(n.animType=!1)),s.webkitTransform!==void 0&&(n.animType="webkitTransform",n.transformType="-webkit-transform",n.transitionType="webkitTransition",s.perspectiveProperty===void 0&&s.webkitPerspective===void 0&&(n.animType=!1)),s.msTransform!==void 0&&(n.animType="msTransform",n.transformType="-ms-transform",n.transitionType="msTransition",s.msTransform===void 0&&(n.animType=!1)),s.transform!==void 0&&n.animType!==!1&&(n.animType="transform",n.transformType="transform",n.transitionType="transition"),n.transformsEnabled=n.options.useTransform&&n.animType!==null&&n.animType!==!1},w.prototype.setSlideClasses=function(n){var s=this,h,v,m,x;if(v=s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true"),s.$slides.eq(n).addClass("slick-current"),s.options.centerMode===!0){var H=s.options.slidesToShow%2===0?1:0;h=Math.floor(s.options.slidesToShow/2),s.options.infinite===!0&&(n>=h&&n<=s.slideCount-1-h?s.$slides.slice(n-h+H,n+h+1).addClass("slick-active").attr("aria-hidden","false"):(m=s.options.slidesToShow+n,v.slice(m-h+1+H,m+h+2).addClass("slick-active").attr("aria-hidden","false")),n===0?v.eq(v.length-1-s.options.slidesToShow).addClass("slick-center"):n===s.slideCount-1&&v.eq(s.options.slidesToShow).addClass("slick-center")),s.$slides.eq(n).addClass("slick-center")}else n>=0&&n<=s.slideCount-s.options.slidesToShow?s.$slides.slice(n,n+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):v.length<=s.options.slidesToShow?v.addClass("slick-active").attr("aria-hidden","false"):(x=s.slideCount%s.options.slidesToShow,m=s.options.infinite===!0?s.options.slidesToShow+n:n,s.options.slidesToShow==s.options.slidesToScroll&&s.slideCount-n<s.options.slidesToShow?v.slice(m-(s.options.slidesToShow-x),m+x).addClass("slick-active").attr("aria-hidden","false"):v.slice(m,m+s.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"));(s.options.lazyLoad==="ondemand"||s.options.lazyLoad==="anticipated")&&s.lazyLoad()},w.prototype.setupInfinite=function(){var n=this,s,h,v;if(n.options.fade===!0&&(n.options.centerMode=!1),n.options.infinite===!0&&n.options.fade===!1&&(h=null,n.slideCount>n.options.slidesToShow)){for(n.options.centerMode===!0?v=n.options.slidesToShow+1:v=n.options.slidesToShow,s=n.slideCount;s>n.slideCount-v;s-=1)h=s-1,_(n.$slides[h]).clone(!0).attr("id","").attr("data-slick-index",h-n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");for(s=0;s<v+n.slideCount;s+=1)h=s,_(n.$slides[h]).clone(!0).attr("id","").attr("data-slick-index",h+n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");n.$slideTrack.find(".slick-cloned").find("[id]").each(function(){_(this).attr("id","")})}},w.prototype.interrupt=function(n){var s=this;n||s.autoPlay(),s.interrupted=n},w.prototype.selectHandler=function(n){var s=this,h=_(n.target).is(".slick-slide")?_(n.target):_(n.target).parents(".slick-slide"),v=parseInt(h.attr("data-slick-index"));if(v||(v=0),s.slideCount<=s.options.slidesToShow){s.slideHandler(v,!1,!0);return}s.slideHandler(v)},w.prototype.slideHandler=function(n,s,h){var v,m,x,H,G=null,k=this,N;if(s=s||!1,!(k.animating===!0&&k.options.waitForAnimate===!0)&&!(k.options.fade===!0&&k.currentSlide===n)){if(s===!1&&k.asNavFor(n),v=n,G=k.getLeft(v),H=k.getLeft(k.currentSlide),k.currentLeft=k.swipeLeft===null?H:k.swipeLeft,k.options.infinite===!1&&k.options.centerMode===!1&&(n<0||n>k.getDotCount()*k.options.slidesToScroll)){k.options.fade===!1&&(v=k.currentSlide,h!==!0&&k.slideCount>k.options.slidesToShow?k.animateSlide(H,function(){k.postSlide(v)}):k.postSlide(v));return}else if(k.options.infinite===!1&&k.options.centerMode===!0&&(n<0||n>k.slideCount-k.options.slidesToScroll)){k.options.fade===!1&&(v=k.currentSlide,h!==!0&&k.slideCount>k.options.slidesToShow?k.animateSlide(H,function(){k.postSlide(v)}):k.postSlide(v));return}if(k.options.autoplay&&clearInterval(k.autoPlayTimer),v<0?k.slideCount%k.options.slidesToScroll!==0?m=k.slideCount-k.slideCount%k.options.slidesToScroll:m=k.slideCount+v:v>=k.slideCount?k.slideCount%k.options.slidesToScroll!==0?m=0:m=v-k.slideCount:m=v,k.animating=!0,k.$slider.trigger("beforeChange",[k,k.currentSlide,m]),x=k.currentSlide,k.currentSlide=m,k.setSlideClasses(k.currentSlide),k.options.asNavFor&&(N=k.getNavTarget(),N=N.slick("getSlick"),N.slideCount<=N.options.slidesToShow&&N.setSlideClasses(k.currentSlide)),k.updateDots(),k.updateArrows(),k.options.fade===!0){h!==!0?(k.fadeSlideOut(x),k.fadeSlide(m,function(){k.postSlide(m)})):k.postSlide(m),k.animateHeight();return}h!==!0&&k.slideCount>k.options.slidesToShow?k.animateSlide(G,function(){k.postSlide(m)}):k.postSlide(m)}},w.prototype.startLoad=function(){var n=this;n.options.arrows===!0&&n.slideCount>n.options.slidesToShow&&(n.$prevArrow.hide(),n.$nextArrow.hide()),n.options.dots===!0&&n.slideCount>n.options.slidesToShow&&n.$dots.hide(),n.$slider.addClass("slick-loading")},w.prototype.swipeDirection=function(){var n,s,h,v,m=this;return n=m.touchObject.startX-m.touchObject.curX,s=m.touchObject.startY-m.touchObject.curY,h=Math.atan2(s,n),v=Math.round(h*180/Math.PI),v<0&&(v=360-Math.abs(v)),v<=45&&v>=0||v<=360&&v>=315?m.options.rtl===!1?"left":"right":v>=135&&v<=225?m.options.rtl===!1?"right":"left":m.options.verticalSwiping===!0?v>=35&&v<=135?"down":"up":"vertical"},w.prototype.swipeEnd=function(n){var s=this,h,v;if(s.dragging=!1,s.swiping=!1,s.scrolling)return s.scrolling=!1,!1;if(s.interrupted=!1,s.shouldClick=!(s.touchObject.swipeLength>10),s.touchObject.curX===void 0)return!1;if(s.touchObject.edgeHit===!0&&s.$slider.trigger("edge",[s,s.swipeDirection()]),s.touchObject.swipeLength>=s.touchObject.minSwipe){switch(v=s.swipeDirection(),v){case"left":case"down":h=s.options.swipeToSlide?s.checkNavigable(s.currentSlide+s.getSlideCount()):s.currentSlide+s.getSlideCount(),s.currentDirection=0;break;case"right":case"up":h=s.options.swipeToSlide?s.checkNavigable(s.currentSlide-s.getSlideCount()):s.currentSlide-s.getSlideCount(),s.currentDirection=1;break;default:}v!="vertical"&&(s.slideHandler(h),s.touchObject={},s.$slider.trigger("swipe",[s,v]))}else s.touchObject.startX!==s.touchObject.curX&&(s.slideHandler(s.currentSlide),s.touchObject={})},w.prototype.swipeHandler=function(n){var s=this;if(!(s.options.swipe===!1||"ontouchend"in document&&s.options.swipe===!1)&&!(s.options.draggable===!1&&n.type.indexOf("mouse")!==-1))switch(s.touchObject.fingerCount=n.originalEvent&&n.originalEvent.touches!==void 0?n.originalEvent.touches.length:1,s.touchObject.minSwipe=s.listWidth/s.options.touchThreshold,s.options.verticalSwiping===!0&&(s.touchObject.minSwipe=s.listHeight/s.options.touchThreshold),n.data.action){case"start":s.swipeStart(n);break;case"move":s.swipeMove(n);break;case"end":s.swipeEnd(n);break}},w.prototype.swipeMove=function(n){var s=this,h=!1,v,m,x,H,G,k;if(G=n.originalEvent!==void 0?n.originalEvent.touches:null,!s.dragging||s.scrolling||G&&G.length!==1)return!1;if(v=s.getLeft(s.currentSlide),s.touchObject.curX=G!==void 0?G[0].pageX:n.clientX,s.touchObject.curY=G!==void 0?G[0].pageY:n.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),k=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2))),!s.options.verticalSwiping&&!s.swiping&&k>4)return s.scrolling=!0,!1;if(s.options.verticalSwiping===!0&&(s.touchObject.swipeLength=k),m=s.swipeDirection(),n.originalEvent!==void 0&&s.touchObject.swipeLength>4&&(s.swiping=!0,n.preventDefault()),H=(s.options.rtl===!1?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),s.options.verticalSwiping===!0&&(H=s.touchObject.curY>s.touchObject.startY?1:-1),x=s.touchObject.swipeLength,s.touchObject.edgeHit=!1,s.options.infinite===!1&&(s.currentSlide===0&&m==="right"||s.currentSlide>=s.getDotCount()&&m==="left")&&(x=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),s.options.vertical===!1?s.swipeLeft=v+x*H:s.swipeLeft=v+x*(s.$list.height()/s.listWidth)*H,s.options.verticalSwiping===!0&&(s.swipeLeft=v+x*H),s.options.fade===!0||s.options.touchMove===!1)return!1;if(s.animating===!0)return s.swipeLeft=null,!1;s.setCSS(s.swipeLeft)},w.prototype.swipeStart=function(n){var s=this,h;if(s.interrupted=!0,s.touchObject.fingerCount!==1||s.slideCount<=s.options.slidesToShow)return s.touchObject={},!1;n.originalEvent!==void 0&&n.originalEvent.touches!==void 0&&(h=n.originalEvent.touches[0]),s.touchObject.startX=s.touchObject.curX=h!==void 0?h.pageX:n.clientX,s.touchObject.startY=s.touchObject.curY=h!==void 0?h.pageY:n.clientY,s.dragging=!0},w.prototype.unfilterSlides=w.prototype.slickUnfilter=function(){var n=this;n.$slidesCache!==null&&(n.unload(),n.$slideTrack.children(this.options.slide).detach(),n.$slidesCache.appendTo(n.$slideTrack),n.reinit())},w.prototype.unload=function(){var n=this;_(".slick-cloned",n.$slider).remove(),n.$dots&&n.$dots.remove(),n.$prevArrow&&n.htmlExpr.test(n.options.prevArrow)&&n.$prevArrow.remove(),n.$nextArrow&&n.htmlExpr.test(n.options.nextArrow)&&n.$nextArrow.remove(),n.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},w.prototype.unslick=function(n){var s=this;s.$slider.trigger("unslick",[s,n]),s.destroy()},w.prototype.updateArrows=function(){var n=this,s;s=Math.floor(n.options.slidesToShow/2),n.options.arrows===!0&&n.slideCount>n.options.slidesToShow&&!n.options.infinite&&(n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),n.currentSlide===0?(n.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),n.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(n.currentSlide>=n.slideCount-n.options.slidesToShow&&n.options.centerMode===!1||n.currentSlide>=n.slideCount-1&&n.options.centerMode===!0)&&(n.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),n.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},w.prototype.updateDots=function(){var n=this;n.$dots!==null&&(n.$dots.find("li").removeClass("slick-active").end(),n.$dots.find("li").eq(Math.floor(n.currentSlide/n.options.slidesToScroll)).addClass("slick-active"))},w.prototype.visibility=function(){var n=this;n.options.autoplay&&(document[n.hidden]?n.interrupted=!0:n.interrupted=!1)},_.fn.slick=function(){var n=this,s=arguments[0],h=Array.prototype.slice.call(arguments,1),v=n.length,m,x;for(m=0;m<v;m++)if(typeof s=="object"||typeof s>"u"?n[m].slick=new w(n[m],s):x=n[m].slick[s].apply(n[m].slick,h),typeof x<"u")return x;return n}})});var $s=Ns(Is());window.jQuery=$s.default;window.$=$s.default;var ia=Ns(Wo()),na=Ns(Qo());window.bootstrap=Jo();window.Headroom=ia.default;window.Isotope=na.default;ea();})();
/*! Bundled license information:

jquery/dist/jquery.js:
  (*!
   * jQuery JavaScript Library v3.7.1
   * https://jquery.com/
   *
   * Copyright OpenJS Foundation and other contributors
   * Released under the MIT license
   * https://jquery.org/license
   *
   * Date: 2023-08-28T13:37Z
   *)

headroom.js/dist/headroom.js:
  (*!
   * headroom.js v0.12.0 - Give your page some headroom. Hide your header until you need it
   * Copyright (c) 2020 Nick Williams - http://wicky.nillia.ms/headroom.js
   * License: MIT
   *)

get-size/get-size.js:
  (*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   *)

outlayer/outlayer.js:
  (*!
   * Outlayer v2.1.1
   * the brains and guts of a layout library
   * MIT license
   *)

masonry-layout/masonry.js:
  (*!
   * Masonry v4.2.2
   * Cascading grid layout library
   * https://masonry.desandro.com
   * MIT License
   * by David DeSandro
   *)

isotope-layout/js/layout-modes/masonry.js:
  (*!
   * Masonry layout mode
   * sub-classes Masonry
   * https://masonry.desandro.com
   *)

isotope-layout/js/isotope.js:
  (*!
   * Isotope v3.0.6
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * https://isotope.metafizzy.co
   * Copyright 2010-2018 Metafizzy
   *)

bootstrap/dist/js/bootstrap.bundle.js:
  (*!
    * Bootstrap v5.3.8 (https://getbootstrap.com/)
    * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
    * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
    *)
*/

;
(() => {
  // node_modules/tify/dist/tify.js
  var import_meta = {};
  function Nn(t) {
    const i = /* @__PURE__ */ Object.create(null);
    for (const e of t.split(",")) i[e] = 1;
    return (e) => e in i;
  }
  var Te = {};
  var Kt = [];
  var lt = () => {
  };
  var ar = () => false;
  var Zi = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && (t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97);
  var Un = (t) => t.startsWith("onUpdate:");
  var ze = Object.assign;
  var Wn = (t, i) => {
    const e = t.indexOf(i);
    e > -1 && t.splice(e, 1);
  };
  var jo = Object.prototype.hasOwnProperty;
  var _e = (t, i) => jo.call(t, i);
  var de = Array.isArray;
  var Xt = (t) => Ki(t) === "[object Map]";
  var lr = (t) => Ki(t) === "[object Set]";
  var fe = (t) => typeof t == "function";
  var De = (t) => typeof t == "string";
  var wt = (t) => typeof t == "symbol";
  var be = (t) => t !== null && typeof t == "object";
  var ur = (t) => (be(t) || fe(t)) && fe(t.then) && fe(t.catch);
  var cr = Object.prototype.toString;
  var Ki = (t) => cr.call(t);
  var Go = (t) => Ki(t).slice(8, -1);
  var hr = (t) => Ki(t) === "[object Object]";
  var Xi = (t) => De(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t;
  var ai = Nn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted");
  var Yi = (t) => {
    const i = /* @__PURE__ */ Object.create(null);
    return (e) => i[e] || (i[e] = t(e));
  };
  var qo = /-\w/g;
  var Je = Yi((t) => t.replace(qo, (i) => i.slice(1).toUpperCase()));
  var Zo = /\B([A-Z])/g;
  var Dt = Yi((t) => t.replace(Zo, "-$1").toLowerCase());
  var Ji = Yi((t) => t.charAt(0).toUpperCase() + t.slice(1));
  var dn = Yi((t) => t ? `on${Ji(t)}` : "");
  var Pt = (t, i) => !Object.is(t, i);
  var Pi = (t, ...i) => {
    for (let e = 0; e < t.length; e++) t[e](...i);
  };
  var dr = (t, i, e, n = false) => {
    Object.defineProperty(t, i, { configurable: true, enumerable: false, writable: n, value: e });
  };
  var jn = (t) => {
    const i = parseFloat(t);
    return isNaN(i) ? t : i;
  };
  var gs;
  var Qi = () => gs || (gs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
  function Rt(t) {
    if (de(t)) {
      const i = {};
      for (let e = 0; e < t.length; e++) {
        const n = t[e], r = De(n) ? Jo(n) : Rt(n);
        if (r) for (const s in r) i[s] = r[s];
      }
      return i;
    } else if (De(t) || be(t)) return t;
  }
  var Ko = /;(?![^(]*\))/g;
  var Xo = /:([^]+)/;
  var Yo = /\/\*[^]*?\*\//g;
  function Jo(t) {
    const i = {};
    return t.replace(Yo, "").split(Ko).forEach((e) => {
      if (e) {
        const n = e.split(Xo);
        n.length > 1 && (i[n[0].trim()] = n[1].trim());
      }
    }), i;
  }
  function Pe(t) {
    let i = "";
    if (De(t)) i = t;
    else if (de(t)) for (let e = 0; e < t.length; e++) {
      const n = Pe(t[e]);
      n && (i += n + " ");
    }
    else if (be(t)) for (const e in t) t[e] && (i += e + " ");
    return i.trim();
  }
  var Qo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly";
  var $o = Nn(Qo);
  function fr(t) {
    return !!t || t === "";
  }
  var pr = (t) => !!(t && t.__v_isRef === true);
  var B = (t) => De(t) ? t : t == null ? "" : de(t) || be(t) && (t.toString === cr || !fe(t.toString)) ? pr(t) ? B(t.value) : JSON.stringify(t, gr, 2) : String(t);
  var gr = (t, i) => pr(i) ? gr(t, i.value) : Xt(i) ? { [`Map(${i.size})`]: [...i.entries()].reduce((e, [n, r], s) => (e[fn(n, s) + " =>"] = r, e), {}) } : lr(i) ? { [`Set(${i.size})`]: [...i.values()].map((e) => fn(e)) } : wt(i) ? fn(i) : be(i) && !de(i) && !hr(i) ? String(i) : i;
  var fn = (t, i = "") => {
    var e;
    return wt(t) ? `Symbol(${(e = t.description) != null ? e : i})` : t;
  };
  var Fe;
  var ea = class {
    constructor(i = false) {
      this.detached = i, this._active = true, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = false, this.parent = Fe, !i && Fe && (this.index = (Fe.scopes || (Fe.scopes = [])).push(this) - 1);
    }
    get active() {
      return this._active;
    }
    pause() {
      if (this._active) {
        this._isPaused = true;
        let i, e;
        if (this.scopes) for (i = 0, e = this.scopes.length; i < e; i++) this.scopes[i].pause();
        for (i = 0, e = this.effects.length; i < e; i++) this.effects[i].pause();
      }
    }
    resume() {
      if (this._active && this._isPaused) {
        this._isPaused = false;
        let i, e;
        if (this.scopes) for (i = 0, e = this.scopes.length; i < e; i++) this.scopes[i].resume();
        for (i = 0, e = this.effects.length; i < e; i++) this.effects[i].resume();
      }
    }
    run(i) {
      if (this._active) {
        const e = Fe;
        try {
          return Fe = this, i();
        } finally {
          Fe = e;
        }
      }
    }
    on() {
      ++this._on === 1 && (this.prevScope = Fe, Fe = this);
    }
    off() {
      this._on > 0 && --this._on === 0 && (Fe = this.prevScope, this.prevScope = void 0);
    }
    stop(i) {
      if (this._active) {
        this._active = false;
        let e, n;
        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].stop();
        for (this.effects.length = 0, e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
        if (this.cleanups.length = 0, this.scopes) {
          for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(true);
          this.scopes.length = 0;
        }
        if (!this.detached && this.parent && !i) {
          const r = this.parent.scopes.pop();
          r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
        }
        this.parent = void 0;
      }
    }
  };
  function mr() {
    return Fe;
  }
  function ta(t, i = false) {
    Fe && Fe.cleanups.push(t);
  }
  var xe;
  var pn = /* @__PURE__ */ new WeakSet();
  var vr = class {
    constructor(i) {
      this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Fe && Fe.active && Fe.effects.push(this);
    }
    pause() {
      this.flags |= 64;
    }
    resume() {
      this.flags & 64 && (this.flags &= -65, pn.has(this) && (pn.delete(this), this.trigger()));
    }
    notify() {
      this.flags & 2 && !(this.flags & 32) || this.flags & 8 || wr(this);
    }
    run() {
      if (!(this.flags & 1)) return this.fn();
      this.flags |= 2, ms(this), _r(this);
      const i = xe, e = tt;
      xe = this, tt = true;
      try {
        return this.fn();
      } finally {
        Tr(this), xe = i, tt = e, this.flags &= -3;
      }
    }
    stop() {
      if (this.flags & 1) {
        for (let i = this.deps; i; i = i.nextDep) Zn(i);
        this.deps = this.depsTail = void 0, ms(this), this.onStop && this.onStop(), this.flags &= -2;
      }
    }
    trigger() {
      this.flags & 64 ? pn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
    }
    runIfDirty() {
      Rn(this) && this.run();
    }
    get dirty() {
      return Rn(this);
    }
  };
  var yr = 0;
  var li;
  var ui;
  function wr(t, i = false) {
    if (t.flags |= 8, i) {
      t.next = ui, ui = t;
      return;
    }
    t.next = li, li = t;
  }
  function Gn() {
    yr++;
  }
  function qn() {
    if (--yr > 0) return;
    if (ui) {
      let i = ui;
      for (ui = void 0; i; ) {
        const e = i.next;
        i.next = void 0, i.flags &= -9, i = e;
      }
    }
    let t;
    for (; li; ) {
      let i = li;
      for (li = void 0; i; ) {
        const e = i.next;
        if (i.next = void 0, i.flags &= -9, i.flags & 1) try {
          i.trigger();
        } catch (n) {
          t || (t = n);
        }
        i = e;
      }
    }
    if (t) throw t;
  }
  function _r(t) {
    for (let i = t.deps; i; i = i.nextDep) i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
  }
  function Tr(t) {
    let i, e = t.depsTail, n = e;
    for (; n; ) {
      const r = n.prevDep;
      n.version === -1 ? (n === e && (e = r), Zn(n), ia(n)) : i = n, n.dep.activeLink = n.prevActiveLink, n.prevActiveLink = void 0, n = r;
    }
    t.deps = i, t.depsTail = e;
  }
  function Rn(t) {
    for (let i = t.deps; i; i = i.nextDep) if (i.dep.version !== i.version || i.dep.computed && (xr(i.dep.computed) || i.dep.version !== i.version)) return true;
    return !!t._dirty;
  }
  function xr(t) {
    if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === fi) || (t.globalVersion = fi, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !Rn(t)))) return;
    t.flags |= 2;
    const i = t.dep, e = xe, n = tt;
    xe = t, tt = true;
    try {
      _r(t);
      const r = t.fn(t._value);
      (i.version === 0 || Pt(r, t._value)) && (t.flags |= 128, t._value = r, i.version++);
    } catch (r) {
      throw i.version++, r;
    } finally {
      xe = e, tt = n, Tr(t), t.flags &= -3;
    }
  }
  function Zn(t, i = false) {
    const { dep: e, prevSub: n, nextSub: r } = t;
    if (n && (n.nextSub = r, t.prevSub = void 0), r && (r.prevSub = n, t.nextSub = void 0), e.subs === t && (e.subs = n, !n && e.computed)) {
      e.computed.flags &= -5;
      for (let s = e.computed.deps; s; s = s.nextDep) Zn(s, true);
    }
    !i && !--e.sc && e.map && e.map.delete(e.key);
  }
  function ia(t) {
    const { prevDep: i, nextDep: e } = t;
    i && (i.nextDep = e, t.prevDep = void 0), e && (e.prevDep = i, t.nextDep = void 0);
  }
  var tt = true;
  var br = [];
  function gt() {
    br.push(tt), tt = false;
  }
  function mt() {
    const t = br.pop();
    tt = t === void 0 ? true : t;
  }
  function ms(t) {
    const { cleanup: i } = t;
    if (t.cleanup = void 0, i) {
      const e = xe;
      xe = void 0;
      try {
        i();
      } finally {
        xe = e;
      }
    }
  }
  var fi = 0;
  var na = class {
    constructor(i, e) {
      this.sub = i, this.dep = e, this.version = e.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
    }
  };
  var $i = class {
    constructor(i) {
      this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = true;
    }
    track(i) {
      if (!xe || !tt || xe === this.computed) return;
      let e = this.activeLink;
      if (e === void 0 || e.sub !== xe) e = this.activeLink = new na(xe, this), xe.deps ? (e.prevDep = xe.depsTail, xe.depsTail.nextDep = e, xe.depsTail = e) : xe.deps = xe.depsTail = e, Er(e);
      else if (e.version === -1 && (e.version = this.version, e.nextDep)) {
        const n = e.nextDep;
        n.prevDep = e.prevDep, e.prevDep && (e.prevDep.nextDep = n), e.prevDep = xe.depsTail, e.nextDep = void 0, xe.depsTail.nextDep = e, xe.depsTail = e, xe.deps === e && (xe.deps = n);
      }
      return e;
    }
    trigger(i) {
      this.version++, fi++, this.notify(i);
    }
    notify(i) {
      Gn();
      try {
        for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
      } finally {
        qn();
      }
    }
  };
  function Er(t) {
    if (t.dep.sc++, t.sub.flags & 4) {
      const i = t.dep.computed;
      if (i && !t.dep.subs) {
        i.flags |= 20;
        for (let n = i.deps; n; n = n.nextDep) Er(n);
      }
      const e = t.dep.subs;
      e !== t && (t.prevSub = e, e && (e.nextSub = t)), t.dep.subs = t;
    }
  }
  var Hi = /* @__PURE__ */ new WeakMap();
  var Bt = /* @__PURE__ */ Symbol("");
  var Dn = /* @__PURE__ */ Symbol("");
  var pi = /* @__PURE__ */ Symbol("");
  function Be(t, i, e) {
    if (tt && xe) {
      let n = Hi.get(t);
      n || Hi.set(t, n = /* @__PURE__ */ new Map());
      let r = n.get(e);
      r || (n.set(e, r = new $i()), r.map = n, r.key = e), r.track();
    }
  }
  function ft(t, i, e, n, r, s) {
    const o = Hi.get(t);
    if (!o) {
      fi++;
      return;
    }
    const l = (a) => {
      a && a.trigger();
    };
    if (Gn(), i === "clear") o.forEach(l);
    else {
      const a = de(t), u = a && Xi(e);
      if (a && e === "length") {
        const c = Number(n);
        o.forEach((h, f) => {
          (f === "length" || f === pi || !wt(f) && f >= c) && l(h);
        });
      } else switch ((e !== void 0 || o.has(void 0)) && l(o.get(e)), u && l(o.get(pi)), i) {
        case "add":
          a ? u && l(o.get("length")) : (l(o.get(Bt)), Xt(t) && l(o.get(Dn)));
          break;
        case "delete":
          a || (l(o.get(Bt)), Xt(t) && l(o.get(Dn)));
          break;
        case "set":
          Xt(t) && l(o.get(Bt));
          break;
      }
    }
    qn();
  }
  function sa(t, i) {
    const e = Hi.get(t);
    return e && e.get(i);
  }
  function Gt(t) {
    const i = we(t);
    return i === t ? i : (Be(i, "iterate", pi), Ke(t) ? i : i.map(it));
  }
  function en(t) {
    return Be(t = we(t), "iterate", pi), t;
  }
  function Et(t, i) {
    return vt(t) ? $t(Vt(t) ? it(i) : i) : it(i);
  }
  var ra = { __proto__: null, [Symbol.iterator]() {
    return gn(this, Symbol.iterator, (t) => Et(this, t));
  }, concat(...t) {
    return Gt(this).concat(...t.map((i) => de(i) ? Gt(i) : i));
  }, entries() {
    return gn(this, "entries", (t) => (t[1] = Et(this, t[1]), t));
  }, every(t, i) {
    return ht(this, "every", t, i, void 0, arguments);
  }, filter(t, i) {
    return ht(this, "filter", t, i, (e) => e.map((n) => Et(this, n)), arguments);
  }, find(t, i) {
    return ht(this, "find", t, i, (e) => Et(this, e), arguments);
  }, findIndex(t, i) {
    return ht(this, "findIndex", t, i, void 0, arguments);
  }, findLast(t, i) {
    return ht(this, "findLast", t, i, (e) => Et(this, e), arguments);
  }, findLastIndex(t, i) {
    return ht(this, "findLastIndex", t, i, void 0, arguments);
  }, forEach(t, i) {
    return ht(this, "forEach", t, i, void 0, arguments);
  }, includes(...t) {
    return mn(this, "includes", t);
  }, indexOf(...t) {
    return mn(this, "indexOf", t);
  }, join(t) {
    return Gt(this).join(t);
  }, lastIndexOf(...t) {
    return mn(this, "lastIndexOf", t);
  }, map(t, i) {
    return ht(this, "map", t, i, void 0, arguments);
  }, pop() {
    return ni(this, "pop");
  }, push(...t) {
    return ni(this, "push", t);
  }, reduce(t, ...i) {
    return vs(this, "reduce", t, i);
  }, reduceRight(t, ...i) {
    return vs(this, "reduceRight", t, i);
  }, shift() {
    return ni(this, "shift");
  }, some(t, i) {
    return ht(this, "some", t, i, void 0, arguments);
  }, splice(...t) {
    return ni(this, "splice", t);
  }, toReversed() {
    return Gt(this).toReversed();
  }, toSorted(t) {
    return Gt(this).toSorted(t);
  }, toSpliced(...t) {
    return Gt(this).toSpliced(...t);
  }, unshift(...t) {
    return ni(this, "unshift", t);
  }, values() {
    return gn(this, "values", (t) => Et(this, t));
  } };
  function gn(t, i, e) {
    const n = en(t), r = n[i]();
    return n !== t && !Ke(t) && (r._next = r.next, r.next = () => {
      const s = r._next();
      return s.done || (s.value = e(s.value)), s;
    }), r;
  }
  var oa = Array.prototype;
  function ht(t, i, e, n, r, s) {
    const o = en(t), l = o !== t && !Ke(t), a = o[i];
    if (a !== oa[i]) {
      const h = a.apply(t, s);
      return l ? it(h) : h;
    }
    let u = e;
    o !== t && (l ? u = function(h, f) {
      return e.call(this, Et(t, h), f, t);
    } : e.length > 2 && (u = function(h, f) {
      return e.call(this, h, f, t);
    }));
    const c = a.call(o, u, n);
    return l && r ? r(c) : c;
  }
  function vs(t, i, e, n) {
    const r = en(t);
    let s = e;
    return r !== t && (Ke(t) ? e.length > 3 && (s = function(o, l, a) {
      return e.call(this, o, l, a, t);
    }) : s = function(o, l, a) {
      return e.call(this, o, Et(t, l), a, t);
    }), r[i](s, ...n);
  }
  function mn(t, i, e) {
    const n = we(t);
    Be(n, "iterate", pi);
    const r = n[i](...e);
    return (r === -1 || r === false) && nn(e[0]) ? (e[0] = we(e[0]), n[i](...e)) : r;
  }
  function ni(t, i, e = []) {
    gt(), Gn();
    const n = we(t)[i].apply(t, e);
    return qn(), mt(), n;
  }
  var aa = Nn("__proto__,__v_isRef,__isVue");
  var Cr = new Set(Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(wt));
  function la(t) {
    wt(t) || (t = String(t));
    const i = we(this);
    return Be(i, "has", t), i.hasOwnProperty(t);
  }
  var Sr = class {
    constructor(i = false, e = false) {
      this._isReadonly = i, this._isShallow = e;
    }
    get(i, e, n) {
      if (e === "__v_skip") return i.__v_skip;
      const r = this._isReadonly, s = this._isShallow;
      if (e === "__v_isReactive") return !r;
      if (e === "__v_isReadonly") return r;
      if (e === "__v_isShallow") return s;
      if (e === "__v_raw") return n === (r ? s ? ya : Ar : s ? Dr : Rr).get(i) || Object.getPrototypeOf(i) === Object.getPrototypeOf(n) ? i : void 0;
      const o = de(i);
      if (!r) {
        let a;
        if (o && (a = ra[e])) return a;
        if (e === "hasOwnProperty") return la;
      }
      const l = Reflect.get(i, e, Le(i) ? i : n);
      if ((wt(e) ? Cr.has(e) : aa(e)) || (r || Be(i, "get", e), s)) return l;
      if (Le(l)) {
        const a = o && Xi(e) ? l : l.value;
        return r && be(a) ? Oi(a) : a;
      }
      return be(l) ? r ? Oi(l) : tn(l) : l;
    }
  };
  var Pr = class extends Sr {
    constructor(i = false) {
      super(false, i);
    }
    set(i, e, n, r) {
      let s = i[e];
      const o = de(i) && Xi(e);
      if (!this._isShallow) {
        const u = vt(s);
        if (!Ke(n) && !vt(n) && (s = we(s), n = we(n)), !o && Le(s) && !Le(n)) return u || (s.value = n), true;
      }
      const l = o ? Number(e) < i.length : _e(i, e), a = Reflect.set(i, e, n, Le(i) ? i : r);
      return i === we(r) && (l ? Pt(n, s) && ft(i, "set", e, n) : ft(i, "add", e, n)), a;
    }
    deleteProperty(i, e) {
      const n = _e(i, e);
      i[e];
      const r = Reflect.deleteProperty(i, e);
      return r && n && ft(i, "delete", e, void 0), r;
    }
    has(i, e) {
      const n = Reflect.has(i, e);
      return (!wt(e) || !Cr.has(e)) && Be(i, "has", e), n;
    }
    ownKeys(i) {
      return Be(i, "iterate", de(i) ? "length" : Bt), Reflect.ownKeys(i);
    }
  };
  var ua = class extends Sr {
    constructor(i = false) {
      super(true, i);
    }
    set(i, e) {
      return true;
    }
    deleteProperty(i, e) {
      return true;
    }
  };
  var ca = new Pr();
  var ha = new ua();
  var da = new Pr(true);
  var An = (t) => t;
  var Ei = (t) => Reflect.getPrototypeOf(t);
  function fa(t, i, e) {
    return function(...n) {
      const r = this.__v_raw, s = we(r), o = Xt(s), l = t === "entries" || t === Symbol.iterator && o, a = t === "keys" && o, u = r[t](...n), c = e ? An : i ? $t : it;
      return !i && Be(s, "iterate", a ? Dn : Bt), ze(Object.create(u), { next() {
        const { value: h, done: f } = u.next();
        return f ? { value: h, done: f } : { value: l ? [c(h[0]), c(h[1])] : c(h), done: f };
      } });
    };
  }
  function Ci(t) {
    return function(...i) {
      return t === "delete" ? false : t === "clear" ? void 0 : this;
    };
  }
  function pa(t, i) {
    const e = { get(r) {
      const s = this.__v_raw, o = we(s), l = we(r);
      t || (Pt(r, l) && Be(o, "get", r), Be(o, "get", l));
      const { has: a } = Ei(o), u = i ? An : t ? $t : it;
      if (a.call(o, r)) return u(s.get(r));
      if (a.call(o, l)) return u(s.get(l));
      s !== o && s.get(r);
    }, get size() {
      const r = this.__v_raw;
      return !t && Be(we(r), "iterate", Bt), r.size;
    }, has(r) {
      const s = this.__v_raw, o = we(s), l = we(r);
      return t || (Pt(r, l) && Be(o, "has", r), Be(o, "has", l)), r === l ? s.has(r) : s.has(r) || s.has(l);
    }, forEach(r, s) {
      const o = this, l = o.__v_raw, a = we(l), u = i ? An : t ? $t : it;
      return !t && Be(a, "iterate", Bt), l.forEach((c, h) => r.call(s, u(c), u(h), o));
    } };
    return ze(e, t ? { add: Ci("add"), set: Ci("set"), delete: Ci("delete"), clear: Ci("clear") } : { add(r) {
      !i && !Ke(r) && !vt(r) && (r = we(r));
      const s = we(this);
      return Ei(s).has.call(s, r) || (s.add(r), ft(s, "add", r, r)), this;
    }, set(r, s) {
      !i && !Ke(s) && !vt(s) && (s = we(s));
      const o = we(this), { has: l, get: a } = Ei(o);
      let u = l.call(o, r);
      u || (r = we(r), u = l.call(o, r));
      const c = a.call(o, r);
      return o.set(r, s), u ? Pt(s, c) && ft(o, "set", r, s) : ft(o, "add", r, s), this;
    }, delete(r) {
      const s = we(this), { has: o, get: l } = Ei(s);
      let a = o.call(s, r);
      a || (r = we(r), a = o.call(s, r)), l && l.call(s, r);
      const u = s.delete(r);
      return a && ft(s, "delete", r, void 0), u;
    }, clear() {
      const r = we(this), s = r.size !== 0, o = r.clear();
      return s && ft(r, "clear", void 0, void 0), o;
    } }), ["keys", "values", "entries", Symbol.iterator].forEach((r) => {
      e[r] = fa(r, t, i);
    }), e;
  }
  function Kn(t, i) {
    const e = pa(t, i);
    return (n, r, s) => r === "__v_isReactive" ? !t : r === "__v_isReadonly" ? t : r === "__v_raw" ? n : Reflect.get(_e(e, r) && r in n ? e : n, r, s);
  }
  var ga = { get: Kn(false, false) };
  var ma = { get: Kn(false, true) };
  var va = { get: Kn(true, false) };
  var Rr = /* @__PURE__ */ new WeakMap();
  var Dr = /* @__PURE__ */ new WeakMap();
  var Ar = /* @__PURE__ */ new WeakMap();
  var ya = /* @__PURE__ */ new WeakMap();
  function wa(t) {
    switch (t) {
      case "Object":
      case "Array":
        return 1;
      case "Map":
      case "Set":
      case "WeakMap":
      case "WeakSet":
        return 2;
      default:
        return 0;
    }
  }
  function _a(t) {
    return t.__v_skip || !Object.isExtensible(t) ? 0 : wa(Go(t));
  }
  function tn(t) {
    return vt(t) ? t : Xn(t, false, ca, ga, Rr);
  }
  function Ta(t) {
    return Xn(t, false, da, ma, Dr);
  }
  function Oi(t) {
    return Xn(t, true, ha, va, Ar);
  }
  function Xn(t, i, e, n, r) {
    if (!be(t) || t.__v_raw && !(i && t.__v_isReactive)) return t;
    const s = _a(t);
    if (s === 0) return t;
    const o = r.get(t);
    if (o) return o;
    const l = new Proxy(t, s === 2 ? n : e);
    return r.set(t, l), l;
  }
  function Vt(t) {
    return vt(t) ? Vt(t.__v_raw) : !!(t && t.__v_isReactive);
  }
  function vt(t) {
    return !!(t && t.__v_isReadonly);
  }
  function Ke(t) {
    return !!(t && t.__v_isShallow);
  }
  function nn(t) {
    return t ? !!t.__v_raw : false;
  }
  function we(t) {
    const i = t && t.__v_raw;
    return i ? we(i) : t;
  }
  function xa(t) {
    return !_e(t, "__v_skip") && Object.isExtensible(t) && dr(t, "__v_skip", true), t;
  }
  var it = (t) => be(t) ? tn(t) : t;
  var $t = (t) => be(t) ? Oi(t) : t;
  function Le(t) {
    return t ? t.__v_isRef === true : false;
  }
  function gi(t) {
    return Lr(t, false);
  }
  function Ue(t) {
    return Lr(t, true);
  }
  function Lr(t, i) {
    return Le(t) ? t : new ba(t, i);
  }
  var ba = class {
    constructor(i, e) {
      this.dep = new $i(), this.__v_isRef = true, this.__v_isShallow = false, this._rawValue = e ? i : we(i), this._value = e ? i : it(i), this.__v_isShallow = e;
    }
    get value() {
      return this.dep.track(), this._value;
    }
    set value(i) {
      const e = this._rawValue, n = this.__v_isShallow || Ke(i) || vt(i);
      i = n ? i : we(i), Pt(i, e) && (this._rawValue = i, this._value = n ? i : it(i), this.dep.trigger());
    }
  };
  function sn(t) {
    return Le(t) ? t.value : t;
  }
  function Se(t) {
    return fe(t) ? t() : sn(t);
  }
  var Ea = { get: (t, i, e) => i === "__v_raw" ? t : sn(Reflect.get(t, i, e)), set: (t, i, e, n) => {
    const r = t[i];
    return Le(r) && !Le(e) ? (r.value = e, true) : Reflect.set(t, i, e, n);
  } };
  function Ir(t) {
    return Vt(t) ? t : new Proxy(t, Ea);
  }
  var Ca = class {
    constructor(i) {
      this.__v_isRef = true, this._value = void 0;
      const e = this.dep = new $i(), { get: n, set: r } = i(e.track.bind(e), e.trigger.bind(e));
      this._get = n, this._set = r;
    }
    get value() {
      return this._value = this._get();
    }
    set value(i) {
      this._set(i);
    }
  };
  function Sa(t) {
    return new Ca(t);
  }
  var Pa = class {
    constructor(i, e, n) {
      this._object = i, this._key = e, this._defaultValue = n, this.__v_isRef = true, this._value = void 0, this._raw = we(i);
      let r = true, s = i;
      if (!de(i) || !Xi(String(e))) do
        r = !nn(s) || Ke(s);
      while (r && (s = s.__v_raw));
      this._shallow = r;
    }
    get value() {
      let i = this._object[this._key];
      return this._shallow && (i = sn(i)), this._value = i === void 0 ? this._defaultValue : i;
    }
    set value(i) {
      if (this._shallow && Le(this._raw[this._key])) {
        const e = this._object[this._key];
        if (Le(e)) {
          e.value = i;
          return;
        }
      }
      this._object[this._key] = i;
    }
    get dep() {
      return sa(this._raw, this._key);
    }
  };
  var Ra = class {
    constructor(i) {
      this._getter = i, this.__v_isRef = true, this.__v_isReadonly = true, this._value = void 0;
    }
    get value() {
      return this._value = this._getter();
    }
  };
  function Da(t, i, e) {
    return Le(t) ? t : fe(t) ? new Ra(t) : be(t) && arguments.length > 1 ? Aa(t, i, e) : gi(t);
  }
  function Aa(t, i, e) {
    return new Pa(t, i, e);
  }
  var La = class {
    constructor(i, e, n) {
      this.fn = i, this.setter = e, this._value = void 0, this.dep = new $i(this), this.__v_isRef = true, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = fi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !e, this.isSSR = n;
    }
    notify() {
      if (this.flags |= 16, !(this.flags & 8) && xe !== this) return wr(this, true), true;
    }
    get value() {
      const i = this.dep.track();
      return xr(this), i && (i.version = this.dep.version), this._value;
    }
    set value(i) {
      this.setter && this.setter(i);
    }
  };
  function Ia(t, i, e = false) {
    let n, r;
    return fe(t) ? n = t : (n = t.get, r = t.set), new La(n, r, e);
  }
  var Si = {};
  var Fi = /* @__PURE__ */ new WeakMap();
  var Mt;
  function Ma(t, i = false, e = Mt) {
    if (e) {
      let n = Fi.get(e);
      n || Fi.set(e, n = []), n.push(t);
    }
  }
  function Ha(t, i, e = Te) {
    const { immediate: n, deep: r, once: s, scheduler: o, augmentJob: l, call: a } = e, u = (k) => r ? k : Ke(k) || r === false || r === 0 ? pt(k, 1) : pt(k);
    let c, h, f, m, v = false, y = false;
    if (Le(t) ? (h = () => t.value, v = Ke(t)) : Vt(t) ? (h = () => u(t), v = true) : de(t) ? (y = true, v = t.some((k) => Vt(k) || Ke(k)), h = () => t.map((k) => {
      if (Le(k)) return k.value;
      if (Vt(k)) return u(k);
      if (fe(k)) return a ? a(k, 2) : k();
    })) : fe(t) ? i ? h = a ? () => a(t, 2) : t : h = () => {
      if (f) {
        gt();
        try {
          f();
        } finally {
          mt();
        }
      }
      const k = Mt;
      Mt = c;
      try {
        return a ? a(t, 3, [m]) : t(m);
      } finally {
        Mt = k;
      }
    } : h = lt, i && r) {
      const k = h, N = r === true ? 1 / 0 : r;
      h = () => pt(k(), N);
    }
    const x = mr(), T = () => {
      c.stop(), x && x.active && Wn(x.effects, c);
    };
    if (s && i) {
      const k = i;
      i = (...N) => {
        k(...N), T();
      };
    }
    let C = y ? new Array(t.length).fill(Si) : Si;
    const H = (k) => {
      if (!(!(c.flags & 1) || !c.dirty && !k)) if (i) {
        const N = c.run();
        if (r || v || (y ? N.some((Y, K) => Pt(Y, C[K])) : Pt(N, C))) {
          f && f();
          const Y = Mt;
          Mt = c;
          try {
            const K = [N, C === Si ? void 0 : y && C[0] === Si ? [] : C, m];
            C = N, a ? a(i, 3, K) : i(...K);
          } finally {
            Mt = Y;
          }
        }
      } else c.run();
    };
    return l && l(H), c = new vr(h), c.scheduler = o ? () => o(H, false) : H, m = (k) => Ma(k, false, c), f = c.onStop = () => {
      const k = Fi.get(c);
      if (k) {
        if (a) a(k, 4);
        else for (const N of k) N();
        Fi.delete(c);
      }
    }, i ? n ? H(true) : C = c.run() : o ? o(H.bind(null, true), true) : c.run(), T.pause = c.pause.bind(c), T.resume = c.resume.bind(c), T.stop = T, T;
  }
  function pt(t, i = 1 / 0, e) {
    if (i <= 0 || !be(t) || t.__v_skip || (e = e || /* @__PURE__ */ new Map(), (e.get(t) || 0) >= i)) return t;
    if (e.set(t, i), i--, Le(t)) pt(t.value, i, e);
    else if (de(t)) for (let n = 0; n < t.length; n++) pt(t[n], i, e);
    else if (lr(t) || Xt(t)) t.forEach((n) => {
      pt(n, i, e);
    });
    else if (hr(t)) {
      for (const n in t) pt(t[n], i, e);
      for (const n of Object.getOwnPropertySymbols(t)) Object.prototype.propertyIsEnumerable.call(t, n) && pt(t[n], i, e);
    }
    return t;
  }
  function Ti(t, i, e, n) {
    try {
      return n ? t(...n) : t();
    } catch (r) {
      rn(r, i, e);
    }
  }
  function ut(t, i, e, n) {
    if (fe(t)) {
      const r = Ti(t, i, e, n);
      return r && ur(r) && r.catch((s) => {
        rn(s, i, e);
      }), r;
    }
    if (de(t)) {
      const r = [];
      for (let s = 0; s < t.length; s++) r.push(ut(t[s], i, e, n));
      return r;
    }
  }
  function rn(t, i, e, n = true) {
    const r = i ? i.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: o } = i && i.appContext.config || Te;
    if (i) {
      let l = i.parent;
      const a = i.proxy, u = `https://vuejs.org/error-reference/#runtime-${e}`;
      for (; l; ) {
        const c = l.ec;
        if (c) {
          for (let h = 0; h < c.length; h++) if (c[h](t, a, u) === false) return;
        }
        l = l.parent;
      }
      if (s) {
        gt(), Ti(s, null, 10, [t, a, u]), mt();
        return;
      }
    }
    Oa(t, e, r, n, o);
  }
  function Oa(t, i, e, n = true, r = false) {
    if (r) throw t;
    console.error(t);
  }
  var We = [];
  var ot = -1;
  var Yt = [];
  var Ct = null;
  var qt = 0;
  var Mr = Promise.resolve();
  var ki = null;
  function Yn(t) {
    const i = ki || Mr;
    return t ? i.then(this ? t.bind(this) : t) : i;
  }
  function Fa(t) {
    let i = ot + 1, e = We.length;
    for (; i < e; ) {
      const n = i + e >>> 1, r = We[n], s = mi(r);
      s < t || s === t && r.flags & 2 ? i = n + 1 : e = n;
    }
    return i;
  }
  function Jn(t) {
    if (!(t.flags & 1)) {
      const i = mi(t), e = We[We.length - 1];
      !e || !(t.flags & 2) && i >= mi(e) ? We.push(t) : We.splice(Fa(i), 0, t), t.flags |= 1, Hr();
    }
  }
  function Hr() {
    ki || (ki = Mr.then(Fr));
  }
  function ka(t) {
    de(t) ? Yt.push(...t) : Ct && t.id === -1 ? Ct.splice(qt + 1, 0, t) : t.flags & 1 || (Yt.push(t), t.flags |= 1), Hr();
  }
  function ys(t, i, e = ot + 1) {
    for (; e < We.length; e++) {
      const n = We[e];
      if (n && n.flags & 2) {
        if (t && n.id !== t.uid) continue;
        We.splice(e, 1), e--, n.flags & 4 && (n.flags &= -2), n(), n.flags & 4 || (n.flags &= -2);
      }
    }
  }
  function Or(t) {
    if (Yt.length) {
      const i = [...new Set(Yt)].sort((e, n) => mi(e) - mi(n));
      if (Yt.length = 0, Ct) {
        Ct.push(...i);
        return;
      }
      for (Ct = i, qt = 0; qt < Ct.length; qt++) {
        const e = Ct[qt];
        e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
      }
      Ct = null, qt = 0;
    }
  }
  var mi = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
  function Fr(t) {
    try {
      for (ot = 0; ot < We.length; ot++) {
        const i = We[ot];
        i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), Ti(i, i.i, i.i ? 15 : 14), i.flags & 4 || (i.flags &= -2));
      }
    } finally {
      for (; ot < We.length; ot++) {
        const i = We[ot];
        i && (i.flags &= -2);
      }
      ot = -1, We.length = 0, Or(), ki = null, (We.length || Yt.length) && Fr();
    }
  }
  var He = null;
  var kr = null;
  function Bi(t) {
    const i = He;
    return He = t, kr = t && t.type.__scopeId || null, i;
  }
  function Ye(t, i = He, e) {
    if (!i || t._n) return t;
    const n = (...r) => {
      n._d && Ui(-1);
      const s = Bi(i);
      let o;
      try {
        o = t(...r);
      } finally {
        Bi(s), n._d && Ui(1);
      }
      return o;
    };
    return n._n = true, n._c = true, n._d = true, n;
  }
  function ke(t, i) {
    if (He === null) return t;
    const e = un(He), n = t.dirs || (t.dirs = []);
    for (let r = 0; r < i.length; r++) {
      let [s, o, l, a = Te] = i[r];
      s && (fe(s) && (s = { mounted: s, updated: s }), s.deep && pt(o), n.push({ dir: s, instance: e, value: o, oldValue: void 0, arg: l, modifiers: a }));
    }
    return t;
  }
  function Lt(t, i, e, n) {
    const r = t.dirs, s = i && i.dirs;
    for (let o = 0; o < r.length; o++) {
      const l = r[o];
      s && (l.oldValue = s[o].value);
      let a = l.dir[n];
      a && (gt(), ut(a, e, 8, [t.el, l, t, i]), mt());
    }
  }
  function Ba(t, i) {
    if (Ve) {
      let e = Ve.provides;
      const n = Ve.parent && Ve.parent.provides;
      n === e && (e = Ve.provides = Object.create(n)), e[t] = i;
    }
  }
  function Ri(t, i, e = false) {
    const n = xi();
    if (n || Qt) {
      let r = Qt ? Qt._context.provides : n ? n.parent == null || n.ce ? n.vnode.appContext && n.vnode.appContext.provides : n.parent.provides : void 0;
      if (r && t in r) return r[t];
      if (arguments.length > 1) return e && fe(i) ? i.call(n && n.proxy) : i;
    }
  }
  var Va = /* @__PURE__ */ Symbol.for("v-scx");
  var za = () => Ri(Va);
  function ws(t, i) {
    return Qn(t, null, i);
  }
  function et(t, i, e) {
    return Qn(t, i, e);
  }
  function Qn(t, i, e = Te) {
    const { immediate: n, deep: r, flush: s, once: o } = e, l = ze({}, e), a = i && n || !i && s !== "post";
    let u;
    if (wi) {
      if (s === "sync") {
        const m = za();
        u = m.__watcherHandles || (m.__watcherHandles = []);
      } else if (!a) {
        const m = () => {
        };
        return m.stop = lt, m.resume = lt, m.pause = lt, m;
      }
    }
    const c = Ve;
    l.call = (m, v, y) => ut(m, c, v, y);
    let h = false;
    s === "post" ? l.scheduler = (m) => {
      qe(m, c && c.suspense);
    } : s !== "sync" && (h = true, l.scheduler = (m, v) => {
      v ? m() : Jn(m);
    }), l.augmentJob = (m) => {
      i && (m.flags |= 4), h && (m.flags |= 2, c && (m.id = c.uid, m.i = c));
    };
    const f = Ha(t, i, l);
    return wi && (u ? u.push(f) : a && f()), f;
  }
  function Na(t, i, e) {
    const n = this.proxy, r = De(t) ? t.includes(".") ? Br(n, t) : () => n[t] : t.bind(n, n);
    let s;
    fe(i) ? s = i : (s = i.handler, e = i);
    const o = bi(this), l = Qn(r, s.bind(n), e);
    return o(), l;
  }
  function Br(t, i) {
    const e = i.split(".");
    return () => {
      let n = t;
      for (let r = 0; r < e.length && n; r++) n = n[e[r]];
      return n;
    };
  }
  var Ua = /* @__PURE__ */ Symbol("_vte");
  var Wa = (t) => t.__isTeleport;
  var ja = /* @__PURE__ */ Symbol("_leaveCb");
  function $n(t, i) {
    t.shapeFlag & 6 && t.component ? (t.transition = i, $n(t.component.subTree, i)) : t.shapeFlag & 128 ? (t.ssContent.transition = i.clone(t.ssContent), t.ssFallback.transition = i.clone(t.ssFallback)) : t.transition = i;
  }
  function Vi() {
    const t = xi();
    return t ? (t.appContext.config.idPrefix || "v") + "-" + t.ids[0] + t.ids[1]++ : "";
  }
  function Vr(t) {
    t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
  }
  function Ga(t) {
    const i = xi(), e = Ue(null);
    if (i) {
      const r = i.refs === Te ? i.refs = {} : i.refs;
      Object.defineProperty(r, t, { enumerable: true, get: () => e.value, set: (s) => e.value = s });
    }
    return e;
  }
  var zi = /* @__PURE__ */ new WeakMap();
  function ci(t, i, e, n, r = false) {
    if (de(t)) {
      t.forEach((v, y) => ci(v, i && (de(i) ? i[y] : i), e, n, r));
      return;
    }
    if (Jt(n) && !r) {
      n.shapeFlag & 512 && n.type.__asyncResolved && n.component.subTree.component && ci(t, i, e, n.component.subTree);
      return;
    }
    const s = n.shapeFlag & 4 ? un(n.component) : n.el, o = r ? null : s, { i: l, r: a } = t, u = i && i.r, c = l.refs === Te ? l.refs = {} : l.refs, h = l.setupState, f = we(h), m = h === Te ? ar : (v) => _e(f, v);
    if (u != null && u !== a) {
      if (_s(i), De(u)) c[u] = null, m(u) && (h[u] = null);
      else if (Le(u)) {
        u.value = null;
        const v = i;
        v.k && (c[v.k] = null);
      }
    }
    if (fe(a)) Ti(a, l, 12, [o, c]);
    else {
      const v = De(a), y = Le(a);
      if (v || y) {
        const x = () => {
          if (t.f) {
            const T = v ? m(a) ? h[a] : c[a] : a.value;
            if (r) de(T) && Wn(T, s);
            else if (de(T)) T.includes(s) || T.push(s);
            else if (v) c[a] = [s], m(a) && (h[a] = c[a]);
            else {
              const C = [s];
              a.value = C, t.k && (c[t.k] = C);
            }
          } else v ? (c[a] = o, m(a) && (h[a] = o)) : y && (a.value = o, t.k && (c[t.k] = o));
        };
        if (o) {
          const T = () => {
            x(), zi.delete(t);
          };
          T.id = -1, zi.set(t, T), qe(T, e);
        } else _s(t), x();
      }
    }
  }
  function _s(t) {
    const i = zi.get(t);
    i && (i.flags |= 8, zi.delete(t));
  }
  Qi().requestIdleCallback;
  Qi().cancelIdleCallback;
  var Jt = (t) => !!t.type.__asyncLoader;
  var zr = (t) => t.type.__isKeepAlive;
  function qa(t, i) {
    Nr(t, "a", i);
  }
  function Za(t, i) {
    Nr(t, "da", i);
  }
  function Nr(t, i, e = Ve) {
    const n = t.__wdc || (t.__wdc = () => {
      let r = e;
      for (; r; ) {
        if (r.isDeactivated) return;
        r = r.parent;
      }
      return t();
    });
    if (on(i, n, e), e) {
      let r = e.parent;
      for (; r && r.parent; ) zr(r.parent.vnode) && Ka(n, i, e, r), r = r.parent;
    }
  }
  function Ka(t, i, e, n) {
    const r = on(i, t, n, true);
    Ur(() => {
      Wn(n[i], r);
    }, e);
  }
  function on(t, i, e = Ve, n = false) {
    if (e) {
      const r = e[t] || (e[t] = []), s = i.__weh || (i.__weh = (...o) => {
        gt();
        const l = bi(e), a = ut(i, e, t, o);
        return l(), mt(), a;
      });
      return n ? r.unshift(s) : r.push(s), s;
    }
  }
  var _t = (t) => (i, e = Ve) => {
    (!wi || t === "sp") && on(t, (...n) => i(...n), e);
  };
  var Xa = _t("bm");
  var es = _t("m");
  var Ya = _t("bu");
  var Ja = _t("u");
  var Qa = _t("bum");
  var Ur = _t("um");
  var $a = _t("sp");
  var el = _t("rtg");
  var tl = _t("rtc");
  function il(t, i = Ve) {
    on("ec", t, i);
  }
  var Wr = "components";
  function jr(t, i) {
    return qr(Wr, t, true, i) || t;
  }
  var Gr = /* @__PURE__ */ Symbol.for("v-ndc");
  function nl(t) {
    return De(t) ? qr(Wr, t, false) || t : t || Gr;
  }
  function qr(t, i, e = true, n = false) {
    const r = He || Ve;
    if (r) {
      const s = r.type;
      {
        const l = Nl(s, false);
        if (l && (l === i || l === Je(i) || l === Ji(Je(i)))) return s;
      }
      const o = Ts(r[t] || s[t], i) || Ts(r.appContext[t], i);
      return !o && n ? s : o;
    }
  }
  function Ts(t, i) {
    return t && (t[i] || t[Je(i)] || t[Ji(Je(i))]);
  }
  function Ce(t, i, e, n) {
    let r;
    const s = e, o = de(t);
    if (o || De(t)) {
      const l = o && Vt(t);
      let a = false, u = false;
      l && (a = !Ke(t), u = vt(t), t = en(t)), r = new Array(t.length);
      for (let c = 0, h = t.length; c < h; c++) r[c] = i(a ? u ? $t(it(t[c])) : it(t[c]) : t[c], c, void 0, s);
    } else if (typeof t == "number") {
      r = new Array(t);
      for (let l = 0; l < t; l++) r[l] = i(l + 1, l, void 0, s);
    } else if (be(t)) if (t[Symbol.iterator]) r = Array.from(t, (l, a) => i(l, a, void 0, s));
    else {
      const l = Object.keys(t);
      r = new Array(l.length);
      for (let a = 0, u = l.length; a < u; a++) {
        const c = l[a];
        r[a] = i(t[c], c, a, s);
      }
    }
    else r = [];
    return r;
  }
  function xs(t, i, e = {}, n, r) {
    if (He.ce || He.parent && Jt(He.parent) && He.parent.ce) {
      const u = Object.keys(e).length > 0;
      return i !== "default" && (e.name = i), E(), le(ue, null, [ie("slot", e, n)], u ? -2 : 64);
    }
    let s = t[i];
    s && s._c && (s._d = false), E();
    const o = s && Zr(s(e)), l = e.key || o && o.key, a = le(ue, { key: (l && !wt(l) ? l : `_${i}`) + (!o && n ? "_fb" : "") }, o || [], o && t._ === 1 ? 64 : -2);
    return a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = true), a;
  }
  function Zr(t) {
    return t.some((i) => yi(i) ? !(i.type === yt || i.type === ue && !Zr(i.children)) : true) ? t : null;
  }
  var Ln = (t) => t ? fo(t) ? un(t) : Ln(t.parent) : null;
  var hi = ze(/* @__PURE__ */ Object.create(null), { $: (t) => t, $el: (t) => t.vnode.el, $data: (t) => t.data, $props: (t) => t.props, $attrs: (t) => t.attrs, $slots: (t) => t.slots, $refs: (t) => t.refs, $parent: (t) => Ln(t.parent), $root: (t) => Ln(t.root), $host: (t) => t.ce, $emit: (t) => t.emit, $options: (t) => Xr(t), $forceUpdate: (t) => t.f || (t.f = () => {
    Jn(t.update);
  }), $nextTick: (t) => t.n || (t.n = Yn.bind(t.proxy)), $watch: (t) => Na.bind(t) });
  var vn = (t, i) => t !== Te && !t.__isScriptSetup && _e(t, i);
  var sl = { get({ _: t }, i) {
    if (i === "__v_skip") return true;
    const { ctx: e, setupState: n, data: r, props: s, accessCache: o, type: l, appContext: a } = t;
    if (i[0] !== "$") {
      const f = o[i];
      if (f !== void 0) switch (f) {
        case 1:
          return n[i];
        case 2:
          return r[i];
        case 4:
          return e[i];
        case 3:
          return s[i];
      }
      else {
        if (vn(n, i)) return o[i] = 1, n[i];
        if (r !== Te && _e(r, i)) return o[i] = 2, r[i];
        if (_e(s, i)) return o[i] = 3, s[i];
        if (e !== Te && _e(e, i)) return o[i] = 4, e[i];
        In && (o[i] = 0);
      }
    }
    const u = hi[i];
    let c, h;
    if (u) return i === "$attrs" && Be(t.attrs, "get", ""), u(t);
    if ((c = l.__cssModules) && (c = c[i])) return c;
    if (e !== Te && _e(e, i)) return o[i] = 4, e[i];
    if (h = a.config.globalProperties, _e(h, i)) return h[i];
  }, set({ _: t }, i, e) {
    const { data: n, setupState: r, ctx: s } = t;
    return vn(r, i) ? (r[i] = e, true) : n !== Te && _e(n, i) ? (n[i] = e, true) : _e(t.props, i) || i[0] === "$" && i.slice(1) in t ? false : (s[i] = e, true);
  }, has({ _: { data: t, setupState: i, accessCache: e, ctx: n, appContext: r, props: s, type: o } }, l) {
    let a;
    return !!(e[l] || t !== Te && l[0] !== "$" && _e(t, l) || vn(i, l) || _e(s, l) || _e(n, l) || _e(hi, l) || _e(r.config.globalProperties, l) || (a = o.__cssModules) && a[l]);
  }, defineProperty(t, i, e) {
    return e.get != null ? t._.accessCache[i] = 0 : _e(e, "value") && this.set(t, i, e.value, null), Reflect.defineProperty(t, i, e);
  } };
  function bs(t) {
    return de(t) ? t.reduce((i, e) => (i[e] = null, i), {}) : t;
  }
  var In = true;
  function rl(t) {
    const i = Xr(t), e = t.proxy, n = t.ctx;
    In = false, i.beforeCreate && Es(i.beforeCreate, t, "bc");
    const { data: r, computed: s, methods: o, watch: l, provide: a, inject: u, created: c, beforeMount: h, mounted: f, beforeUpdate: m, updated: v, activated: y, deactivated: x, beforeDestroy: T, beforeUnmount: C, destroyed: H, unmounted: k, render: N, renderTracked: Y, renderTriggered: K, errorCaptured: q, serverPrefetch: ee, expose: ce, inheritAttrs: te, components: j, directives: ne, filters: he } = i;
    if (u && ol(u, n, null), o) for (const pe in o) {
      const ae = o[pe];
      fe(ae) && (n[pe] = ae.bind(e));
    }
    if (r) {
      const pe = r.call(e, e);
      be(pe) && (t.data = tn(pe));
    }
    if (In = true, s) for (const pe in s) {
      const ae = s[pe], Ae = fe(ae) ? ae.bind(e, e) : fe(ae.get) ? ae.get.bind(e, e) : lt, Re = !fe(ae) && fe(ae.set) ? ae.set.bind(e) : lt, Qe = Me({ get: Ae, set: Re });
      Object.defineProperty(n, pe, { enumerable: true, configurable: true, get: () => Qe.value, set: (je) => Qe.value = je });
    }
    if (l) for (const pe in l) Kr(l[pe], n, e, pe);
    if (a) {
      const pe = fe(a) ? a.call(e) : a;
      Reflect.ownKeys(pe).forEach((ae) => {
        Ba(ae, pe[ae]);
      });
    }
    c && Es(c, t, "c");
    function me(pe, ae) {
      de(ae) ? ae.forEach((Ae) => pe(Ae.bind(e))) : ae && pe(ae.bind(e));
    }
    if (me(Xa, h), me(es, f), me(Ya, m), me(Ja, v), me(qa, y), me(Za, x), me(il, q), me(tl, Y), me(el, K), me(Qa, C), me(Ur, k), me($a, ee), de(ce)) if (ce.length) {
      const pe = t.exposed || (t.exposed = {});
      ce.forEach((ae) => {
        Object.defineProperty(pe, ae, { get: () => e[ae], set: (Ae) => e[ae] = Ae, enumerable: true });
      });
    } else t.exposed || (t.exposed = {});
    N && t.render === lt && (t.render = N), te != null && (t.inheritAttrs = te), j && (t.components = j), ne && (t.directives = ne), ee && Vr(t);
  }
  function ol(t, i, e = lt) {
    de(t) && (t = Mn(t));
    for (const n in t) {
      const r = t[n];
      let s;
      be(r) ? "default" in r ? s = Ri(r.from || n, r.default, true) : s = Ri(r.from || n) : s = Ri(r), Le(s) ? Object.defineProperty(i, n, { enumerable: true, configurable: true, get: () => s.value, set: (o) => s.value = o }) : i[n] = s;
    }
  }
  function Es(t, i, e) {
    ut(de(t) ? t.map((n) => n.bind(i.proxy)) : t.bind(i.proxy), i, e);
  }
  function Kr(t, i, e, n) {
    let r = n.includes(".") ? Br(e, n) : () => e[n];
    if (De(t)) {
      const s = i[t];
      fe(s) && et(r, s);
    } else if (fe(t)) et(r, t.bind(e));
    else if (be(t)) if (de(t)) t.forEach((s) => Kr(s, i, e, n));
    else {
      const s = fe(t.handler) ? t.handler.bind(e) : i[t.handler];
      fe(s) && et(r, s, t);
    }
  }
  function Xr(t) {
    const i = t.type, { mixins: e, extends: n } = i, { mixins: r, optionsCache: s, config: { optionMergeStrategies: o } } = t.appContext, l = s.get(i);
    let a;
    return l ? a = l : !r.length && !e && !n ? a = i : (a = {}, r.length && r.forEach((u) => Ni(a, u, o, true)), Ni(a, i, o)), be(i) && s.set(i, a), a;
  }
  function Ni(t, i, e, n = false) {
    const { mixins: r, extends: s } = i;
    s && Ni(t, s, e, true), r && r.forEach((o) => Ni(t, o, e, true));
    for (const o in i) if (!(n && o === "expose")) {
      const l = al[o] || e && e[o];
      t[o] = l ? l(t[o], i[o]) : i[o];
    }
    return t;
  }
  var al = { data: Cs, props: Ss, emits: Ss, methods: oi, computed: oi, beforeCreate: Ne, created: Ne, beforeMount: Ne, mounted: Ne, beforeUpdate: Ne, updated: Ne, beforeDestroy: Ne, beforeUnmount: Ne, destroyed: Ne, unmounted: Ne, activated: Ne, deactivated: Ne, errorCaptured: Ne, serverPrefetch: Ne, components: oi, directives: oi, watch: ul, provide: Cs, inject: ll };
  function Cs(t, i) {
    return i ? t ? function() {
      return ze(fe(t) ? t.call(this, this) : t, fe(i) ? i.call(this, this) : i);
    } : i : t;
  }
  function ll(t, i) {
    return oi(Mn(t), Mn(i));
  }
  function Mn(t) {
    if (de(t)) {
      const i = {};
      for (let e = 0; e < t.length; e++) i[t[e]] = t[e];
      return i;
    }
    return t;
  }
  function Ne(t, i) {
    return t ? [...new Set([].concat(t, i))] : i;
  }
  function oi(t, i) {
    return t ? ze(/* @__PURE__ */ Object.create(null), t, i) : i;
  }
  function Ss(t, i) {
    return t ? de(t) && de(i) ? [.../* @__PURE__ */ new Set([...t, ...i])] : ze(/* @__PURE__ */ Object.create(null), bs(t), bs(i ?? {})) : i;
  }
  function ul(t, i) {
    if (!t) return i;
    if (!i) return t;
    const e = ze(/* @__PURE__ */ Object.create(null), t);
    for (const n in i) e[n] = Ne(t[n], i[n]);
    return e;
  }
  function Yr() {
    return { app: null, config: { isNativeTag: ar, performance: false, globalProperties: {}, optionMergeStrategies: {}, errorHandler: void 0, warnHandler: void 0, compilerOptions: {} }, mixins: [], components: {}, directives: {}, provides: /* @__PURE__ */ Object.create(null), optionsCache: /* @__PURE__ */ new WeakMap(), propsCache: /* @__PURE__ */ new WeakMap(), emitsCache: /* @__PURE__ */ new WeakMap() };
  }
  var cl = 0;
  function hl(t, i) {
    return function(n, r = null) {
      fe(n) || (n = ze({}, n)), r != null && !be(r) && (r = null);
      const s = Yr(), o = /* @__PURE__ */ new WeakSet(), l = [];
      let a = false;
      const u = s.app = { _uid: cl++, _component: n, _props: r, _container: null, _context: s, _instance: null, version: jl, get config() {
        return s.config;
      }, set config(c) {
      }, use(c, ...h) {
        return o.has(c) || (c && fe(c.install) ? (o.add(c), c.install(u, ...h)) : fe(c) && (o.add(c), c(u, ...h))), u;
      }, mixin(c) {
        return s.mixins.includes(c) || s.mixins.push(c), u;
      }, component(c, h) {
        return h ? (s.components[c] = h, u) : s.components[c];
      }, directive(c, h) {
        return h ? (s.directives[c] = h, u) : s.directives[c];
      }, mount(c, h, f) {
        if (!a) {
          const m = u._ceVNode || ie(n, r);
          return m.appContext = s, f === true ? f = "svg" : f === false && (f = void 0), t(m, c, f), a = true, u._container = c, c.__vue_app__ = u, un(m.component);
        }
      }, onUnmount(c) {
        l.push(c);
      }, unmount() {
        a && (ut(l, u._instance, 16), t(null, u._container), delete u._container.__vue_app__);
      }, provide(c, h) {
        return s.provides[c] = h, u;
      }, runWithContext(c) {
        const h = Qt;
        Qt = u;
        try {
          return c();
        } finally {
          Qt = h;
        }
      } };
      return u;
    };
  }
  var Qt = null;
  var dl = (t, i) => i === "modelValue" || i === "model-value" ? t.modelModifiers : t[`${i}Modifiers`] || t[`${Je(i)}Modifiers`] || t[`${Dt(i)}Modifiers`];
  function fl(t, i, ...e) {
    if (t.isUnmounted) return;
    const n = t.vnode.props || Te;
    let r = e;
    const s = i.startsWith("update:"), o = s && dl(n, i.slice(7));
    o && (o.trim && (r = e.map((c) => De(c) ? c.trim() : c)), o.number && (r = e.map(jn)));
    let l, a = n[l = dn(i)] || n[l = dn(Je(i))];
    !a && s && (a = n[l = dn(Dt(i))]), a && ut(a, t, 6, r);
    const u = n[l + "Once"];
    if (u) {
      if (!t.emitted) t.emitted = {};
      else if (t.emitted[l]) return;
      t.emitted[l] = true, ut(u, t, 6, r);
    }
  }
  var pl = /* @__PURE__ */ new WeakMap();
  function Jr(t, i, e = false) {
    const n = e ? pl : i.emitsCache, r = n.get(t);
    if (r !== void 0) return r;
    const s = t.emits;
    let o = {}, l = false;
    if (!fe(t)) {
      const a = (u) => {
        const c = Jr(u, i, true);
        c && (l = true, ze(o, c));
      };
      !e && i.mixins.length && i.mixins.forEach(a), t.extends && a(t.extends), t.mixins && t.mixins.forEach(a);
    }
    return !s && !l ? (be(t) && n.set(t, null), null) : (de(s) ? s.forEach((a) => o[a] = null) : ze(o, s), be(t) && n.set(t, o), o);
  }
  function an(t, i) {
    return !t || !Zi(i) ? false : (i = i.slice(2).replace(/Once$/, ""), _e(t, i[0].toLowerCase() + i.slice(1)) || _e(t, Dt(i)) || _e(t, i));
  }
  function Ps(t) {
    const { type: i, vnode: e, proxy: n, withProxy: r, propsOptions: [s], slots: o, attrs: l, emit: a, render: u, renderCache: c, props: h, data: f, setupState: m, ctx: v, inheritAttrs: y } = t, x = Bi(t);
    let T, C;
    try {
      if (e.shapeFlag & 4) {
        const k = r || n, N = k;
        T = at(u.call(N, k, c, h, m, f, v)), C = l;
      } else {
        const k = i;
        T = at(k.length > 1 ? k(h, { attrs: l, slots: o, emit: a }) : k(h, null)), C = i.props ? l : gl(l);
      }
    } catch (k) {
      di.length = 0, rn(k, t, 1), T = ie(yt);
    }
    let H = T;
    if (C && y !== false) {
      const k = Object.keys(C), { shapeFlag: N } = H;
      k.length && N & 7 && (s && k.some(Un) && (C = ml(C, s)), H = ei(H, C, false, true));
    }
    return e.dirs && (H = ei(H, null, false, true), H.dirs = H.dirs ? H.dirs.concat(e.dirs) : e.dirs), e.transition && $n(H, e.transition), T = H, Bi(x), T;
  }
  var gl = (t) => {
    let i;
    for (const e in t) (e === "class" || e === "style" || Zi(e)) && ((i || (i = {}))[e] = t[e]);
    return i;
  };
  var ml = (t, i) => {
    const e = {};
    for (const n in t) (!Un(n) || !(n.slice(9) in i)) && (e[n] = t[n]);
    return e;
  };
  function vl(t, i, e) {
    const { props: n, children: r, component: s } = t, { props: o, children: l, patchFlag: a } = i, u = s.emitsOptions;
    if (i.dirs || i.transition) return true;
    if (e && a >= 0) {
      if (a & 1024) return true;
      if (a & 16) return n ? Rs(n, o, u) : !!o;
      if (a & 8) {
        const c = i.dynamicProps;
        for (let h = 0; h < c.length; h++) {
          const f = c[h];
          if (o[f] !== n[f] && !an(u, f)) return true;
        }
      }
    } else return (r || l) && (!l || !l.$stable) ? true : n === o ? false : n ? o ? Rs(n, o, u) : true : !!o;
    return false;
  }
  function Rs(t, i, e) {
    const n = Object.keys(i);
    if (n.length !== Object.keys(t).length) return true;
    for (let r = 0; r < n.length; r++) {
      const s = n[r];
      if (i[s] !== t[s] && !an(e, s)) return true;
    }
    return false;
  }
  function yl({ vnode: t, parent: i }, e) {
    for (; i; ) {
      const n = i.subTree;
      if (n.suspense && n.suspense.activeBranch === t && (n.el = t.el), n === t) (t = i.vnode).el = e, i = i.parent;
      else break;
    }
  }
  var Qr = {};
  var $r = () => Object.create(Qr);
  var eo = (t) => Object.getPrototypeOf(t) === Qr;
  function wl(t, i, e, n = false) {
    const r = {}, s = $r();
    t.propsDefaults = /* @__PURE__ */ Object.create(null), to(t, i, r, s);
    for (const o in t.propsOptions[0]) o in r || (r[o] = void 0);
    e ? t.props = n ? r : Ta(r) : t.type.props ? t.props = r : t.props = s, t.attrs = s;
  }
  function _l(t, i, e, n) {
    const { props: r, attrs: s, vnode: { patchFlag: o } } = t, l = we(r), [a] = t.propsOptions;
    let u = false;
    if ((n || o > 0) && !(o & 16)) {
      if (o & 8) {
        const c = t.vnode.dynamicProps;
        for (let h = 0; h < c.length; h++) {
          let f = c[h];
          if (an(t.emitsOptions, f)) continue;
          const m = i[f];
          if (a) if (_e(s, f)) m !== s[f] && (s[f] = m, u = true);
          else {
            const v = Je(f);
            r[v] = Hn(a, l, v, m, t, false);
          }
          else m !== s[f] && (s[f] = m, u = true);
        }
      }
    } else {
      to(t, i, r, s) && (u = true);
      let c;
      for (const h in l) (!i || !_e(i, h) && ((c = Dt(h)) === h || !_e(i, c))) && (a ? e && (e[h] !== void 0 || e[c] !== void 0) && (r[h] = Hn(a, l, h, void 0, t, true)) : delete r[h]);
      if (s !== l) for (const h in s) (!i || !_e(i, h)) && (delete s[h], u = true);
    }
    u && ft(t.attrs, "set", "");
  }
  function to(t, i, e, n) {
    const [r, s] = t.propsOptions;
    let o = false, l;
    if (i) for (let a in i) {
      if (ai(a)) continue;
      const u = i[a];
      let c;
      r && _e(r, c = Je(a)) ? !s || !s.includes(c) ? e[c] = u : (l || (l = {}))[c] = u : an(t.emitsOptions, a) || (!(a in n) || u !== n[a]) && (n[a] = u, o = true);
    }
    if (s) {
      const a = we(e), u = l || Te;
      for (let c = 0; c < s.length; c++) {
        const h = s[c];
        e[h] = Hn(r, a, h, u[h], t, !_e(u, h));
      }
    }
    return o;
  }
  function Hn(t, i, e, n, r, s) {
    const o = t[e];
    if (o != null) {
      const l = _e(o, "default");
      if (l && n === void 0) {
        const a = o.default;
        if (o.type !== Function && !o.skipFactory && fe(a)) {
          const { propsDefaults: u } = r;
          if (e in u) n = u[e];
          else {
            const c = bi(r);
            n = u[e] = a.call(null, i), c();
          }
        } else n = a;
        r.ce && r.ce._setProp(e, n);
      }
      o[0] && (s && !l ? n = false : o[1] && (n === "" || n === Dt(e)) && (n = true));
    }
    return n;
  }
  var Tl = /* @__PURE__ */ new WeakMap();
  function io(t, i, e = false) {
    const n = e ? Tl : i.propsCache, r = n.get(t);
    if (r) return r;
    const s = t.props, o = {}, l = [];
    let a = false;
    if (!fe(t)) {
      const c = (h) => {
        a = true;
        const [f, m] = io(h, i, true);
        ze(o, f), m && l.push(...m);
      };
      !e && i.mixins.length && i.mixins.forEach(c), t.extends && c(t.extends), t.mixins && t.mixins.forEach(c);
    }
    if (!s && !a) return be(t) && n.set(t, Kt), Kt;
    if (de(s)) for (let c = 0; c < s.length; c++) {
      const h = Je(s[c]);
      Ds(h) && (o[h] = Te);
    }
    else if (s) for (const c in s) {
      const h = Je(c);
      if (Ds(h)) {
        const f = s[c], m = o[h] = de(f) || fe(f) ? { type: f } : ze({}, f), v = m.type;
        let y = false, x = true;
        if (de(v)) for (let T = 0; T < v.length; ++T) {
          const C = v[T], H = fe(C) && C.name;
          if (H === "Boolean") {
            y = true;
            break;
          } else H === "String" && (x = false);
        }
        else y = fe(v) && v.name === "Boolean";
        m[0] = y, m[1] = x, (y || _e(m, "default")) && l.push(h);
      }
    }
    const u = [o, l];
    return be(t) && n.set(t, u), u;
  }
  function Ds(t) {
    return t[0] !== "$" && !ai(t);
  }
  var ts = (t) => t === "_" || t === "_ctx" || t === "$stable";
  var is = (t) => de(t) ? t.map(at) : [at(t)];
  var xl = (t, i, e) => {
    if (i._n) return i;
    const n = Ye((...r) => is(i(...r)), e);
    return n._c = false, n;
  };
  var no = (t, i, e) => {
    const n = t._ctx;
    for (const r in t) {
      if (ts(r)) continue;
      const s = t[r];
      if (fe(s)) i[r] = xl(r, s, n);
      else if (s != null) {
        const o = is(s);
        i[r] = () => o;
      }
    }
  };
  var so = (t, i) => {
    const e = is(i);
    t.slots.default = () => e;
  };
  var ro = (t, i, e) => {
    for (const n in i) (e || !ts(n)) && (t[n] = i[n]);
  };
  var bl = (t, i, e) => {
    const n = t.slots = $r();
    if (t.vnode.shapeFlag & 32) {
      const r = i._;
      r ? (ro(n, i, e), e && dr(n, "_", r, true)) : no(i, n);
    } else i && so(t, i);
  };
  var El = (t, i, e) => {
    const { vnode: n, slots: r } = t;
    let s = true, o = Te;
    if (n.shapeFlag & 32) {
      const l = i._;
      l ? e && l === 1 ? s = false : ro(r, i, e) : (s = !i.$stable, no(i, r)), o = i;
    } else i && (so(t, i), o = { default: 1 });
    if (s) for (const l in r) !ts(l) && o[l] == null && delete r[l];
  };
  var qe = Dl;
  function Cl(t) {
    return Sl(t);
  }
  function Sl(t, i) {
    const e = Qi();
    e.__VUE__ = true;
    const { insert: n, remove: r, patchProp: s, createElement: o, createText: l, createComment: a, setText: u, setElementText: c, parentNode: h, nextSibling: f, setScopeId: m = lt, insertStaticContent: v } = t, y = (P, D, F, U = null, z = null, d = null, w = void 0, S = null, L = !!D.dynamicChildren) => {
      if (P === D) return;
      P && !si(P, D) && (U = $e(P), je(P, z, d, true), P = null), D.patchFlag === -2 && (L = false, D.dynamicChildren = null);
      const { type: I, ref: V, shapeFlag: M } = D;
      switch (I) {
        case ln:
          x(P, D, F, U);
          break;
        case yt:
          T(P, D, F, U);
          break;
        case Di:
          P == null && C(D, F, U, w);
          break;
        case ue:
          j(P, D, F, U, z, d, w, S, L);
          break;
        default:
          M & 1 ? N(P, D, F, U, z, d, w, S, L) : M & 6 ? ne(P, D, F, U, z, d, w, S, L) : (M & 64 || M & 128) && I.process(P, D, F, U, z, d, w, S, L, st);
      }
      V != null && z ? ci(V, P && P.ref, d, D || P, !D) : V == null && P && P.ref != null && ci(P.ref, null, d, P, true);
    }, x = (P, D, F, U) => {
      if (P == null) n(D.el = l(D.children), F, U);
      else {
        const z = D.el = P.el;
        D.children !== P.children && u(z, D.children);
      }
    }, T = (P, D, F, U) => {
      P == null ? n(D.el = a(D.children || ""), F, U) : D.el = P.el;
    }, C = (P, D, F, U) => {
      [P.el, P.anchor] = v(P.children, D, F, U, P.el, P.anchor);
    }, H = ({ el: P, anchor: D }, F, U) => {
      let z;
      for (; P && P !== D; ) z = f(P), n(P, F, U), P = z;
      n(D, F, U);
    }, k = ({ el: P, anchor: D }) => {
      let F;
      for (; P && P !== D; ) F = f(P), r(P), P = F;
      r(D);
    }, N = (P, D, F, U, z, d, w, S, L) => {
      if (D.type === "svg" ? w = "svg" : D.type === "math" && (w = "mathml"), P == null) Y(D, F, U, z, d, w, S, L);
      else {
        const I = P.el && P.el._isVueCE ? P.el : null;
        try {
          I && I._beginPatch(), ee(P, D, z, d, w, S, L);
        } finally {
          I && I._endPatch();
        }
      }
    }, Y = (P, D, F, U, z, d, w, S) => {
      let L, I;
      const { props: V, shapeFlag: M, transition: W, dirs: Z } = P;
      if (L = P.el = o(P.type, d, V && V.is, V), M & 8 ? c(L, P.children) : M & 16 && q(P.children, L, null, U, z, yn(P, d), w, S), Z && Lt(P, null, U, "created"), K(L, P, P.scopeId, w, U), V) {
        for (const X in V) X !== "value" && !ai(X) && s(L, X, null, V[X], d, U);
        "value" in V && s(L, "value", null, V.value, d), (I = V.onVnodeBeforeMount) && rt(I, U, P);
      }
      Z && Lt(P, null, U, "beforeMount");
      const se = Pl(z, W);
      se && W.beforeEnter(L), n(L, D, F), ((I = V && V.onVnodeMounted) || se || Z) && qe(() => {
        I && rt(I, U, P), se && W.enter(L), Z && Lt(P, null, U, "mounted");
      }, z);
    }, K = (P, D, F, U, z) => {
      if (F && m(P, F), U) for (let d = 0; d < U.length; d++) m(P, U[d]);
      if (z) {
        let d = z.subTree;
        if (D === d || uo(d.type) && (d.ssContent === D || d.ssFallback === D)) {
          const w = z.vnode;
          K(P, w, w.scopeId, w.slotScopeIds, z.parent);
        }
      }
    }, q = (P, D, F, U, z, d, w, S, L = 0) => {
      for (let I = L; I < P.length; I++) {
        const V = P[I] = S ? St(P[I]) : at(P[I]);
        y(null, V, D, F, U, z, d, w, S);
      }
    }, ee = (P, D, F, U, z, d, w) => {
      const S = D.el = P.el;
      let { patchFlag: L, dynamicChildren: I, dirs: V } = D;
      L |= P.patchFlag & 16;
      const M = P.props || Te, W = D.props || Te;
      let Z;
      if (F && It(F, false), (Z = W.onVnodeBeforeUpdate) && rt(Z, F, D, P), V && Lt(D, P, F, "beforeUpdate"), F && It(F, true), (M.innerHTML && W.innerHTML == null || M.textContent && W.textContent == null) && c(S, ""), I ? ce(P.dynamicChildren, I, S, F, U, yn(D, z), d) : w || ae(P, D, S, null, F, U, yn(D, z), d, false), L > 0) {
        if (L & 16) te(S, M, W, F, z);
        else if (L & 2 && M.class !== W.class && s(S, "class", null, W.class, z), L & 4 && s(S, "style", M.style, W.style, z), L & 8) {
          const se = D.dynamicProps;
          for (let X = 0; X < se.length; X++) {
            const oe = se[X], g = M[oe], p = W[oe];
            (p !== g || oe === "value") && s(S, oe, g, p, z, F);
          }
        }
        L & 1 && P.children !== D.children && c(S, D.children);
      } else !w && I == null && te(S, M, W, F, z);
      ((Z = W.onVnodeUpdated) || V) && qe(() => {
        Z && rt(Z, F, D, P), V && Lt(D, P, F, "updated");
      }, U);
    }, ce = (P, D, F, U, z, d, w) => {
      for (let S = 0; S < D.length; S++) {
        const L = P[S], I = D[S], V = L.el && (L.type === ue || !si(L, I) || L.shapeFlag & 198) ? h(L.el) : F;
        y(L, I, V, null, U, z, d, w, true);
      }
    }, te = (P, D, F, U, z) => {
      if (D !== F) {
        if (D !== Te) for (const d in D) !ai(d) && !(d in F) && s(P, d, D[d], null, z, U);
        for (const d in F) {
          if (ai(d)) continue;
          const w = F[d], S = D[d];
          w !== S && d !== "value" && s(P, d, S, w, z, U);
        }
        "value" in F && s(P, "value", D.value, F.value, z);
      }
    }, j = (P, D, F, U, z, d, w, S, L) => {
      const I = D.el = P ? P.el : l(""), V = D.anchor = P ? P.anchor : l("");
      let { patchFlag: M, dynamicChildren: W, slotScopeIds: Z } = D;
      Z && (S = S ? S.concat(Z) : Z), P == null ? (n(I, F, U), n(V, F, U), q(D.children || [], F, V, z, d, w, S, L)) : M > 0 && M & 64 && W && P.dynamicChildren && P.dynamicChildren.length === W.length ? (ce(P.dynamicChildren, W, F, z, d, w, S), (D.key != null || z && D === z.subTree) && oo(P, D, true)) : ae(P, D, F, V, z, d, w, S, L);
    }, ne = (P, D, F, U, z, d, w, S, L) => {
      D.slotScopeIds = S, P == null ? D.shapeFlag & 512 ? z.ctx.activate(D, F, U, w, L) : he(D, F, U, z, d, w, L) : ye(P, D, L);
    }, he = (P, D, F, U, z, d, w) => {
      const S = P.component = Fl(P, U, z);
      if (zr(P) && (S.ctx.renderer = st), kl(S, false, w), S.asyncDep) {
        if (z && z.registerDep(S, me, w), !P.el) {
          const L = S.subTree = ie(yt);
          T(null, L, D, F), P.placeholder = L.el;
        }
      } else me(S, P, D, F, z, d, w);
    }, ye = (P, D, F) => {
      const U = D.component = P.component;
      if (vl(P, D, F)) if (U.asyncDep && !U.asyncResolved) {
        pe(U, D, F);
        return;
      } else U.next = D, U.update();
      else D.el = P.el, U.vnode = D;
    }, me = (P, D, F, U, z, d, w) => {
      const S = () => {
        if (P.isMounted) {
          let { next: M, bu: W, u: Z, parent: se, vnode: X } = P;
          {
            const b = ao(P);
            if (b) {
              M && (M.el = X.el, pe(P, M, w)), b.asyncDep.then(() => {
                P.isUnmounted || S();
              });
              return;
            }
          }
          let oe = M, g;
          It(P, false), M ? (M.el = X.el, pe(P, M, w)) : M = X, W && Pi(W), (g = M.props && M.props.onVnodeBeforeUpdate) && rt(g, se, M, X), It(P, true);
          const p = Ps(P), _ = P.subTree;
          P.subTree = p, y(_, p, h(_.el), $e(_), P, z, d), M.el = p.el, oe === null && yl(P, p.el), Z && qe(Z, z), (g = M.props && M.props.onVnodeUpdated) && qe(() => rt(g, se, M, X), z);
        } else {
          let M;
          const { el: W, props: Z } = D, { bm: se, m: X, parent: oe, root: g, type: p } = P, _ = Jt(D);
          It(P, false), se && Pi(se), !_ && (M = Z && Z.onVnodeBeforeMount) && rt(M, oe, D), It(P, true);
          {
            g.ce && g.ce._def.shadowRoot !== false && g.ce._injectChildStyle(p);
            const b = P.subTree = Ps(P);
            y(null, b, F, U, P, z, d), D.el = b.el;
          }
          if (X && qe(X, z), !_ && (M = Z && Z.onVnodeMounted)) {
            const b = D;
            qe(() => rt(M, oe, b), z);
          }
          (D.shapeFlag & 256 || oe && Jt(oe.vnode) && oe.vnode.shapeFlag & 256) && P.a && qe(P.a, z), P.isMounted = true, D = F = U = null;
        }
      };
      P.scope.on();
      const L = P.effect = new vr(S);
      P.scope.off();
      const I = P.update = L.run.bind(L), V = P.job = L.runIfDirty.bind(L);
      V.i = P, V.id = P.uid, L.scheduler = () => Jn(V), It(P, true), I();
    }, pe = (P, D, F) => {
      D.component = P;
      const U = P.vnode.props;
      P.vnode = D, P.next = null, _l(P, D.props, U, F), El(P, D.children, F), gt(), ys(P), mt();
    }, ae = (P, D, F, U, z, d, w, S, L = false) => {
      const I = P && P.children, V = P ? P.shapeFlag : 0, M = D.children, { patchFlag: W, shapeFlag: Z } = D;
      if (W > 0) {
        if (W & 128) {
          Re(I, M, F, U, z, d, w, S, L);
          return;
        } else if (W & 256) {
          Ae(I, M, F, U, z, d, w, S, L);
          return;
        }
      }
      Z & 8 ? (V & 16 && nt(I, z, d), M !== I && c(F, M)) : V & 16 ? Z & 16 ? Re(I, M, F, U, z, d, w, S, L) : nt(I, z, d, true) : (V & 8 && c(F, ""), Z & 16 && q(M, F, U, z, d, w, S, L));
    }, Ae = (P, D, F, U, z, d, w, S, L) => {
      P = P || Kt, D = D || Kt;
      const I = P.length, V = D.length, M = Math.min(I, V);
      let W;
      for (W = 0; W < M; W++) {
        const Z = D[W] = L ? St(D[W]) : at(D[W]);
        y(P[W], Z, F, null, z, d, w, S, L);
      }
      I > V ? nt(P, z, d, true, false, M) : q(D, F, U, z, d, w, S, L, M);
    }, Re = (P, D, F, U, z, d, w, S, L) => {
      let I = 0;
      const V = D.length;
      let M = P.length - 1, W = V - 1;
      for (; I <= M && I <= W; ) {
        const Z = P[I], se = D[I] = L ? St(D[I]) : at(D[I]);
        if (si(Z, se)) y(Z, se, F, null, z, d, w, S, L);
        else break;
        I++;
      }
      for (; I <= M && I <= W; ) {
        const Z = P[M], se = D[W] = L ? St(D[W]) : at(D[W]);
        if (si(Z, se)) y(Z, se, F, null, z, d, w, S, L);
        else break;
        M--, W--;
      }
      if (I > M) {
        if (I <= W) {
          const Z = W + 1, se = Z < V ? D[Z].el : U;
          for (; I <= W; ) y(null, D[I] = L ? St(D[I]) : at(D[I]), F, se, z, d, w, S, L), I++;
        }
      } else if (I > W) for (; I <= M; ) je(P[I], z, d, true), I++;
      else {
        const Z = I, se = I, X = /* @__PURE__ */ new Map();
        for (I = se; I <= W; I++) {
          const Q = D[I] = L ? St(D[I]) : at(D[I]);
          Q.key != null && X.set(Q.key, I);
        }
        let oe, g = 0;
        const p = W - se + 1;
        let _ = false, b = 0;
        const O = new Array(p);
        for (I = 0; I < p; I++) O[I] = 0;
        for (I = Z; I <= M; I++) {
          const Q = P[I];
          if (g >= p) {
            je(Q, z, d, true);
            continue;
          }
          let ve;
          if (Q.key != null) ve = X.get(Q.key);
          else for (oe = se; oe <= W; oe++) if (O[oe - se] === 0 && si(Q, D[oe])) {
            ve = oe;
            break;
          }
          ve === void 0 ? je(Q, z, d, true) : (O[ve - se] = I + 1, ve >= b ? b = ve : _ = true, y(Q, D[ve], F, null, z, d, w, S, L), g++);
        }
        const G = _ ? Rl(O) : Kt;
        for (oe = G.length - 1, I = p - 1; I >= 0; I--) {
          const Q = se + I, ve = D[Q], re = D[Q + 1], Oe = Q + 1 < V ? re.el || lo(re) : U;
          O[I] === 0 ? y(null, ve, F, Oe, z, d, w, S, L) : _ && (oe < 0 || I !== G[oe] ? Qe(ve, F, Oe, 2) : oe--);
        }
      }
    }, Qe = (P, D, F, U, z = null) => {
      const { el: d, type: w, transition: S, children: L, shapeFlag: I } = P;
      if (I & 6) {
        Qe(P.component.subTree, D, F, U);
        return;
      }
      if (I & 128) {
        P.suspense.move(D, F, U);
        return;
      }
      if (I & 64) {
        w.move(P, D, F, st);
        return;
      }
      if (w === ue) {
        n(d, D, F);
        for (let M = 0; M < L.length; M++) Qe(L[M], D, F, U);
        n(P.anchor, D, F);
        return;
      }
      if (w === Di) {
        H(P, D, F);
        return;
      }
      if (U !== 2 && I & 1 && S) if (U === 0) S.beforeEnter(d), n(d, D, F), qe(() => S.enter(d), z);
      else {
        const { leave: M, delayLeave: W, afterLeave: Z } = S, se = () => {
          P.ctx.isUnmounted ? r(d) : n(d, D, F);
        }, X = () => {
          d._isLeaving && d[ja](true), M(d, () => {
            se(), Z && Z();
          });
        };
        W ? W(d, se, X) : X();
      }
      else n(d, D, F);
    }, je = (P, D, F, U = false, z = false) => {
      const { type: d, props: w, ref: S, children: L, dynamicChildren: I, shapeFlag: V, patchFlag: M, dirs: W, cacheIndex: Z } = P;
      if (M === -2 && (z = false), S != null && (gt(), ci(S, null, F, P, true), mt()), Z != null && (D.renderCache[Z] = void 0), V & 256) {
        D.ctx.deactivate(P);
        return;
      }
      const se = V & 1 && W, X = !Jt(P);
      let oe;
      if (X && (oe = w && w.onVnodeBeforeUnmount) && rt(oe, D, P), V & 6) Ut(P.component, F, U);
      else {
        if (V & 128) {
          P.suspense.unmount(F, U);
          return;
        }
        se && Lt(P, null, D, "beforeUnmount"), V & 64 ? P.type.remove(P, D, F, st, U) : I && !I.hasOnce && (d !== ue || M > 0 && M & 64) ? nt(I, D, F, false, true) : (d === ue && M & 384 || !z && V & 16) && nt(L, D, F), U && ge(P);
      }
      (X && (oe = w && w.onVnodeUnmounted) || se) && qe(() => {
        oe && rt(oe, D, P), se && Lt(P, null, D, "unmounted");
      }, F);
    }, ge = (P) => {
      const { type: D, el: F, anchor: U, transition: z } = P;
      if (D === ue) {
        Nt(F, U);
        return;
      }
      if (D === Di) {
        k(P);
        return;
      }
      const d = () => {
        r(F), z && !z.persisted && z.afterLeave && z.afterLeave();
      };
      if (P.shapeFlag & 1 && z && !z.persisted) {
        const { leave: w, delayLeave: S } = z, L = () => w(F, d);
        S ? S(P.el, d, L) : L();
      } else d();
    }, Nt = (P, D) => {
      let F;
      for (; P !== D; ) F = f(P), r(P), P = F;
      r(D);
    }, Ut = (P, D, F) => {
      const { bum: U, scope: z, job: d, subTree: w, um: S, m: L, a: I } = P;
      As(L), As(I), U && Pi(U), z.stop(), d && (d.flags |= 8, je(w, P, D, F)), S && qe(S, D), qe(() => {
        P.isUnmounted = true;
      }, D);
    }, nt = (P, D, F, U = false, z = false, d = 0) => {
      for (let w = d; w < P.length; w++) je(P[w], D, F, U, z);
    }, $e = (P) => {
      if (P.shapeFlag & 6) return $e(P.component.subTree);
      if (P.shapeFlag & 128) return P.suspense.next();
      const D = f(P.anchor || P.el), F = D && D[Ua];
      return F ? f(F) : D;
    };
    let bt = false;
    const Wt = (P, D, F) => {
      let U;
      P == null ? D._vnode && (je(D._vnode, null, null, true), U = D._vnode.component) : y(D._vnode || null, P, D, null, null, null, F), D._vnode = P, bt || (bt = true, ys(U), Or(), bt = false);
    }, st = { p: y, um: je, m: Qe, r: ge, mt: he, mc: q, pc: ae, pbc: ce, n: $e, o: t };
    return { render: Wt, hydrate: void 0, createApp: hl(Wt) };
  }
  function yn({ type: t, props: i }, e) {
    return e === "svg" && t === "foreignObject" || e === "mathml" && t === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : e;
  }
  function It({ effect: t, job: i }, e) {
    e ? (t.flags |= 32, i.flags |= 4) : (t.flags &= -33, i.flags &= -5);
  }
  function Pl(t, i) {
    return (!t || t && !t.pendingBranch) && i && !i.persisted;
  }
  function oo(t, i, e = false) {
    const n = t.children, r = i.children;
    if (de(n) && de(r)) for (let s = 0; s < n.length; s++) {
      const o = n[s];
      let l = r[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = r[s] = St(r[s]), l.el = o.el), !e && l.patchFlag !== -2 && oo(o, l)), l.type === ln && (l.patchFlag !== -1 ? l.el = o.el : l.__elIndex = s + (t.type === ue ? 1 : 0)), l.type === yt && !l.el && (l.el = o.el);
    }
  }
  function Rl(t) {
    const i = t.slice(), e = [0];
    let n, r, s, o, l;
    const a = t.length;
    for (n = 0; n < a; n++) {
      const u = t[n];
      if (u !== 0) {
        if (r = e[e.length - 1], t[r] < u) {
          i[n] = r, e.push(n);
          continue;
        }
        for (s = 0, o = e.length - 1; s < o; ) l = s + o >> 1, t[e[l]] < u ? s = l + 1 : o = l;
        u < t[e[s]] && (s > 0 && (i[n] = e[s - 1]), e[s] = n);
      }
    }
    for (s = e.length, o = e[s - 1]; s-- > 0; ) e[s] = o, o = i[o];
    return e;
  }
  function ao(t) {
    const i = t.subTree.component;
    if (i) return i.asyncDep && !i.asyncResolved ? i : ao(i);
  }
  function As(t) {
    if (t) for (let i = 0; i < t.length; i++) t[i].flags |= 8;
  }
  function lo(t) {
    if (t.placeholder) return t.placeholder;
    const i = t.component;
    return i ? lo(i.subTree) : null;
  }
  var uo = (t) => t.__isSuspense;
  function Dl(t, i) {
    i && i.pendingBranch ? de(t) ? i.effects.push(...t) : i.effects.push(t) : ka(t);
  }
  var ue = /* @__PURE__ */ Symbol.for("v-fgt");
  var ln = /* @__PURE__ */ Symbol.for("v-txt");
  var yt = /* @__PURE__ */ Symbol.for("v-cmt");
  var Di = /* @__PURE__ */ Symbol.for("v-stc");
  var di = [];
  var Ze = null;
  function E(t = false) {
    di.push(Ze = t ? null : []);
  }
  function Al() {
    di.pop(), Ze = di[di.length - 1] || null;
  }
  var vi = 1;
  function Ui(t, i = false) {
    vi += t, t < 0 && Ze && i && (Ze.hasOnce = true);
  }
  function co(t) {
    return t.dynamicChildren = vi > 0 ? Ze || Kt : null, Al(), vi > 0 && Ze && Ze.push(t), t;
  }
  function A(t, i, e, n, r, s) {
    return co(R(t, i, e, n, r, s, true));
  }
  function le(t, i, e, n, r) {
    return co(ie(t, i, e, n, r, true));
  }
  function yi(t) {
    return t ? t.__v_isVNode === true : false;
  }
  function si(t, i) {
    return t.type === i.type && t.key === i.key;
  }
  var ho = ({ key: t }) => t ?? null;
  var Ai = ({ ref: t, ref_key: i, ref_for: e }) => (typeof t == "number" && (t = "" + t), t != null ? De(t) || Le(t) || fe(t) ? { i: He, r: t, k: i, f: !!e } : t : null);
  function R(t, i = null, e = null, n = 0, r = null, s = t === ue ? 0 : 1, o = false, l = false) {
    const a = { __v_isVNode: true, __v_skip: true, type: t, props: i, key: i && ho(i), ref: i && Ai(i), scopeId: kr, slotScopeIds: null, children: e, component: null, suspense: null, ssContent: null, ssFallback: null, dirs: null, transition: null, el: null, anchor: null, target: null, targetStart: null, targetAnchor: null, staticCount: 0, shapeFlag: s, patchFlag: n, dynamicProps: r, dynamicChildren: null, appContext: null, ctx: He };
    return l ? (ns(a, e), s & 128 && t.normalize(a)) : e && (a.shapeFlag |= De(e) ? 8 : 16), vi > 0 && !o && Ze && (a.patchFlag > 0 || s & 6) && a.patchFlag !== 32 && Ze.push(a), a;
  }
  var ie = Ll;
  function Ll(t, i = null, e = null, n = 0, r = null, s = false) {
    if ((!t || t === Gr) && (t = yt), yi(t)) {
      const l = ei(t, i, true);
      return e && ns(l, e), vi > 0 && !s && Ze && (l.shapeFlag & 6 ? Ze[Ze.indexOf(t)] = l : Ze.push(l)), l.patchFlag = -2, l;
    }
    if (Ul(t) && (t = t.__vccOpts), i) {
      i = Il(i);
      let { class: l, style: a } = i;
      l && !De(l) && (i.class = Pe(l)), be(a) && (nn(a) && !de(a) && (a = ze({}, a)), i.style = Rt(a));
    }
    const o = De(t) ? 1 : uo(t) ? 128 : Wa(t) ? 64 : be(t) ? 4 : fe(t) ? 2 : 0;
    return R(t, i, e, n, r, o, s, true);
  }
  function Il(t) {
    return t ? nn(t) || eo(t) ? ze({}, t) : t : null;
  }
  function ei(t, i, e = false, n = false) {
    const { props: r, ref: s, patchFlag: o, children: l, transition: a } = t, u = i ? Ml(r || {}, i) : r, c = { __v_isVNode: true, __v_skip: true, type: t.type, props: u, key: u && ho(u), ref: i && i.ref ? e && s ? de(s) ? s.concat(Ai(i)) : [s, Ai(i)] : Ai(i) : s, scopeId: t.scopeId, slotScopeIds: t.slotScopeIds, children: l, target: t.target, targetStart: t.targetStart, targetAnchor: t.targetAnchor, staticCount: t.staticCount, shapeFlag: t.shapeFlag, patchFlag: i && t.type !== ue ? o === -1 ? 16 : o | 16 : o, dynamicProps: t.dynamicProps, dynamicChildren: t.dynamicChildren, appContext: t.appContext, dirs: t.dirs, transition: a, component: t.component, suspense: t.suspense, ssContent: t.ssContent && ei(t.ssContent), ssFallback: t.ssFallback && ei(t.ssFallback), placeholder: t.placeholder, el: t.el, anchor: t.anchor, ctx: t.ctx, ce: t.ce };
    return a && n && $n(c, a.clone(c)), c;
  }
  function Ge(t = " ", i = 0) {
    return ie(ln, null, t, i);
  }
  function J(t = "", i = false) {
    return i ? (E(), le(yt, null, t)) : ie(yt, null, t);
  }
  function at(t) {
    return t == null || typeof t == "boolean" ? ie(yt) : de(t) ? ie(ue, null, t.slice()) : yi(t) ? St(t) : ie(ln, null, String(t));
  }
  function St(t) {
    return t.el === null && t.patchFlag !== -1 || t.memo ? t : ei(t);
  }
  function ns(t, i) {
    let e = 0;
    const { shapeFlag: n } = t;
    if (i == null) i = null;
    else if (de(i)) e = 16;
    else if (typeof i == "object") if (n & 65) {
      const r = i.default;
      r && (r._c && (r._d = false), ns(t, r()), r._c && (r._d = true));
      return;
    } else {
      e = 32;
      const r = i._;
      !r && !eo(i) ? i._ctx = He : r === 3 && He && (He.slots._ === 1 ? i._ = 1 : (i._ = 2, t.patchFlag |= 1024));
    }
    else fe(i) ? (i = { default: i, _ctx: He }, e = 32) : (i = String(i), n & 64 ? (e = 16, i = [Ge(i)]) : e = 8);
    t.children = i, t.shapeFlag |= e;
  }
  function Ml(...t) {
    const i = {};
    for (let e = 0; e < t.length; e++) {
      const n = t[e];
      for (const r in n) if (r === "class") i.class !== n.class && (i.class = Pe([i.class, n.class]));
      else if (r === "style") i.style = Rt([i.style, n.style]);
      else if (Zi(r)) {
        const s = i[r], o = n[r];
        o && s !== o && !(de(s) && s.includes(o)) && (i[r] = s ? [].concat(s, o) : o);
      } else r !== "" && (i[r] = n[r]);
    }
    return i;
  }
  function rt(t, i, e, n = null) {
    ut(t, i, 7, [e, n]);
  }
  var Hl = Yr();
  var Ol = 0;
  function Fl(t, i, e) {
    const n = t.type, r = (i ? i.appContext : t.appContext) || Hl, s = { uid: Ol++, vnode: t, type: n, parent: i, appContext: r, root: null, next: null, subTree: null, effect: null, update: null, job: null, scope: new ea(true), render: null, proxy: null, exposed: null, exposeProxy: null, withProxy: null, provides: i ? i.provides : Object.create(r.provides), ids: i ? i.ids : ["", 0, 0], accessCache: null, renderCache: [], components: null, directives: null, propsOptions: io(n, r), emitsOptions: Jr(n, r), emit: null, emitted: null, propsDefaults: Te, inheritAttrs: n.inheritAttrs, ctx: Te, data: Te, props: Te, attrs: Te, slots: Te, refs: Te, setupState: Te, setupContext: null, suspense: e, suspenseId: e ? e.pendingId : 0, asyncDep: null, asyncResolved: false, isMounted: false, isUnmounted: false, isDeactivated: false, bc: null, c: null, bm: null, m: null, bu: null, u: null, um: null, bum: null, da: null, a: null, rtg: null, rtc: null, ec: null, sp: null };
    return s.ctx = { _: s }, s.root = i ? i.root : s, s.emit = fl.bind(null, s), t.ce && t.ce(s), s;
  }
  var Ve = null;
  var xi = () => Ve || He;
  var Wi;
  var On;
  {
    const t = Qi(), i = (e, n) => {
      let r;
      return (r = t[e]) || (r = t[e] = []), r.push(n), (s) => {
        r.length > 1 ? r.forEach((o) => o(s)) : r[0](s);
      };
    };
    Wi = i("__VUE_INSTANCE_SETTERS__", (e) => Ve = e), On = i("__VUE_SSR_SETTERS__", (e) => wi = e);
  }
  var bi = (t) => {
    const i = Ve;
    return Wi(t), t.scope.on(), () => {
      t.scope.off(), Wi(i);
    };
  };
  var Ls = () => {
    Ve && Ve.scope.off(), Wi(null);
  };
  function fo(t) {
    return t.vnode.shapeFlag & 4;
  }
  var wi = false;
  function kl(t, i = false, e = false) {
    i && On(i);
    const { props: n, children: r } = t.vnode, s = fo(t);
    wl(t, n, s, i), bl(t, r, e || i);
    const o = s ? Bl(t, i) : void 0;
    return i && On(false), o;
  }
  function Bl(t, i) {
    const e = t.type;
    t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, sl);
    const { setup: n } = e;
    if (n) {
      gt();
      const r = t.setupContext = n.length > 1 ? zl(t) : null, s = bi(t), o = Ti(n, t, 0, [t.props, r]), l = ur(o);
      if (mt(), s(), (l || t.sp) && !Jt(t) && Vr(t), l) {
        if (o.then(Ls, Ls), i) return o.then((a) => {
          Is(t, a);
        }).catch((a) => {
          rn(a, t, 0);
        });
        t.asyncDep = o;
      } else Is(t, o);
    } else po(t);
  }
  function Is(t, i, e) {
    fe(i) ? t.type.__ssrInlineRender ? t.ssrRender = i : t.render = i : be(i) && (t.setupState = Ir(i)), po(t);
  }
  function po(t, i, e) {
    const n = t.type;
    t.render || (t.render = n.render || lt);
    {
      const r = bi(t);
      gt();
      try {
        rl(t);
      } finally {
        mt(), r();
      }
    }
  }
  var Vl = { get(t, i) {
    return Be(t, "get", ""), t[i];
  } };
  function zl(t) {
    const i = (e) => {
      t.exposed = e || {};
    };
    return { attrs: new Proxy(t.attrs, Vl), slots: t.slots, emit: t.emit, expose: i };
  }
  function un(t) {
    return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Ir(xa(t.exposed)), { get(i, e) {
      if (e in i) return i[e];
      if (e in hi) return hi[e](t);
    }, has(i, e) {
      return e in i || e in hi;
    } })) : t.proxy;
  }
  function Nl(t, i = true) {
    return fe(t) ? t.displayName || t.name : t.name || i && t.__name;
  }
  function Ul(t) {
    return fe(t) && "__vccOpts" in t;
  }
  var Me = (t, i) => Ia(t, i, wi);
  function Wl(t, i, e) {
    try {
      Ui(-1);
      const n = arguments.length;
      return n === 2 ? be(i) && !de(i) ? yi(i) ? ie(t, null, [i]) : ie(t, i) : ie(t, null, i) : (n > 3 ? e = Array.prototype.slice.call(arguments, 2) : n === 3 && yi(e) && (e = [e]), ie(t, i, e));
    } finally {
      Ui(1);
    }
  }
  var jl = "3.5.27";
  var Fn;
  var Ms = typeof window < "u" && window.trustedTypes;
  if (Ms) try {
    Fn = Ms.createPolicy("vue", { createHTML: (t) => t });
  } catch {
  }
  var go = Fn ? (t) => Fn.createHTML(t) : (t) => t;
  var Gl = "http://www.w3.org/2000/svg";
  var ql = "http://www.w3.org/1998/Math/MathML";
  var dt = typeof document < "u" ? document : null;
  var Hs = dt && dt.createElement("template");
  var Zl = { insert: (t, i, e) => {
    i.insertBefore(t, e || null);
  }, remove: (t) => {
    const i = t.parentNode;
    i && i.removeChild(t);
  }, createElement: (t, i, e, n) => {
    const r = i === "svg" ? dt.createElementNS(Gl, t) : i === "mathml" ? dt.createElementNS(ql, t) : e ? dt.createElement(t, { is: e }) : dt.createElement(t);
    return t === "select" && n && n.multiple != null && r.setAttribute("multiple", n.multiple), r;
  }, createText: (t) => dt.createTextNode(t), createComment: (t) => dt.createComment(t), setText: (t, i) => {
    t.nodeValue = i;
  }, setElementText: (t, i) => {
    t.textContent = i;
  }, parentNode: (t) => t.parentNode, nextSibling: (t) => t.nextSibling, querySelector: (t) => dt.querySelector(t), setScopeId(t, i) {
    t.setAttribute(i, "");
  }, insertStaticContent(t, i, e, n, r, s) {
    const o = e ? e.previousSibling : i.lastChild;
    if (r && (r === s || r.nextSibling)) for (; i.insertBefore(r.cloneNode(true), e), !(r === s || !(r = r.nextSibling)); ) ;
    else {
      Hs.innerHTML = go(n === "svg" ? `<svg>${t}</svg>` : n === "mathml" ? `<math>${t}</math>` : t);
      const l = Hs.content;
      if (n === "svg" || n === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; ) l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      i.insertBefore(l, e);
    }
    return [o ? o.nextSibling : i.firstChild, e ? e.previousSibling : i.lastChild];
  } };
  var Kl = /* @__PURE__ */ Symbol("_vtc");
  function Xl(t, i, e) {
    const n = t[Kl];
    n && (i = (i ? [i, ...n] : [...n]).join(" ")), i == null ? t.removeAttribute("class") : e ? t.setAttribute("class", i) : t.className = i;
  }
  var ji = /* @__PURE__ */ Symbol("_vod");
  var mo = /* @__PURE__ */ Symbol("_vsh");
  var Xe = { name: "show", beforeMount(t, { value: i }, { transition: e }) {
    t[ji] = t.style.display === "none" ? "" : t.style.display, e && i ? e.beforeEnter(t) : ri(t, i);
  }, mounted(t, { value: i }, { transition: e }) {
    e && i && e.enter(t);
  }, updated(t, { value: i, oldValue: e }, { transition: n }) {
    !i != !e && (n ? i ? (n.beforeEnter(t), ri(t, true), n.enter(t)) : n.leave(t, () => {
      ri(t, false);
    }) : ri(t, i));
  }, beforeUnmount(t, { value: i }) {
    ri(t, i);
  } };
  function ri(t, i) {
    t.style.display = i ? t[ji] : "none", t[mo] = !i;
  }
  var Yl = /* @__PURE__ */ Symbol("");
  var Jl = /(?:^|;)\s*display\s*:/;
  function Ql(t, i, e) {
    const n = t.style, r = De(e);
    let s = false;
    if (e && !r) {
      if (i) if (De(i)) for (const o of i.split(";")) {
        const l = o.slice(0, o.indexOf(":")).trim();
        e[l] == null && Li(n, l, "");
      }
      else for (const o in i) e[o] == null && Li(n, o, "");
      for (const o in e) o === "display" && (s = true), Li(n, o, e[o]);
    } else if (r) {
      if (i !== e) {
        const o = n[Yl];
        o && (e += ";" + o), n.cssText = e, s = Jl.test(e);
      }
    } else i && t.removeAttribute("style");
    ji in t && (t[ji] = s ? n.display : "", t[mo] && (n.display = "none"));
  }
  var Os = /\s*!important$/;
  function Li(t, i, e) {
    if (de(e)) e.forEach((n) => Li(t, i, n));
    else if (e == null && (e = ""), i.startsWith("--")) t.setProperty(i, e);
    else {
      const n = $l(t, i);
      Os.test(e) ? t.setProperty(Dt(n), e.replace(Os, ""), "important") : t[n] = e;
    }
  }
  var Fs = ["Webkit", "Moz", "ms"];
  var wn = {};
  function $l(t, i) {
    const e = wn[i];
    if (e) return e;
    let n = Je(i);
    if (n !== "filter" && n in t) return wn[i] = n;
    n = Ji(n);
    for (let r = 0; r < Fs.length; r++) {
      const s = Fs[r] + n;
      if (s in t) return wn[i] = s;
    }
    return i;
  }
  var ks = "http://www.w3.org/1999/xlink";
  function Bs(t, i, e, n, r, s = $o(i)) {
    n && i.startsWith("xlink:") ? e == null ? t.removeAttributeNS(ks, i.slice(6, i.length)) : t.setAttributeNS(ks, i, e) : e == null || s && !fr(e) ? t.removeAttribute(i) : t.setAttribute(i, s ? "" : wt(e) ? String(e) : e);
  }
  function Vs(t, i, e, n, r) {
    if (i === "innerHTML" || i === "textContent") {
      e != null && (t[i] = i === "innerHTML" ? go(e) : e);
      return;
    }
    const s = t.tagName;
    if (i === "value" && s !== "PROGRESS" && !s.includes("-")) {
      const l = s === "OPTION" ? t.getAttribute("value") || "" : t.value, a = e == null ? t.type === "checkbox" ? "on" : "" : String(e);
      (l !== a || !("_value" in t)) && (t.value = a), e == null && t.removeAttribute(i), t._value = e;
      return;
    }
    let o = false;
    if (e === "" || e == null) {
      const l = typeof t[i];
      l === "boolean" ? e = fr(e) : e == null && l === "string" ? (e = "", o = true) : l === "number" && (e = 0, o = true);
    }
    try {
      t[i] = e;
    } catch {
    }
    o && t.removeAttribute(r || i);
  }
  function Zt(t, i, e, n) {
    t.addEventListener(i, e, n);
  }
  function eu(t, i, e, n) {
    t.removeEventListener(i, e, n);
  }
  var zs = /* @__PURE__ */ Symbol("_vei");
  function tu(t, i, e, n, r = null) {
    const s = t[zs] || (t[zs] = {}), o = s[i];
    if (n && o) o.value = n;
    else {
      const [l, a] = iu(i);
      if (n) {
        const u = s[i] = ru(n, r);
        Zt(t, l, u, a);
      } else o && (eu(t, l, o, a), s[i] = void 0);
    }
  }
  var Ns = /(?:Once|Passive|Capture)$/;
  function iu(t) {
    let i;
    if (Ns.test(t)) {
      i = {};
      let n;
      for (; n = t.match(Ns); ) t = t.slice(0, t.length - n[0].length), i[n[0].toLowerCase()] = true;
    }
    return [t[2] === ":" ? t.slice(3) : Dt(t.slice(2)), i];
  }
  var _n = 0;
  var nu = Promise.resolve();
  var su = () => _n || (nu.then(() => _n = 0), _n = Date.now());
  function ru(t, i) {
    const e = (n) => {
      if (!n._vts) n._vts = Date.now();
      else if (n._vts <= e.attached) return;
      ut(ou(n, e.value), i, 5, [n]);
    };
    return e.value = t, e.attached = su(), e;
  }
  function ou(t, i) {
    if (de(i)) {
      const e = t.stopImmediatePropagation;
      return t.stopImmediatePropagation = () => {
        e.call(t), t._stopped = true;
      }, i.map((n) => (r) => !r._stopped && n && n(r));
    } else return i;
  }
  var Us = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123;
  var au = (t, i, e, n, r, s) => {
    const o = r === "svg";
    i === "class" ? Xl(t, n, o) : i === "style" ? Ql(t, e, n) : Zi(i) ? Un(i) || tu(t, i, e, n, s) : (i[0] === "." ? (i = i.slice(1), true) : i[0] === "^" ? (i = i.slice(1), false) : lu(t, i, n, o)) ? (Vs(t, i, n), !t.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && Bs(t, i, n, o, s, i !== "value")) : t._isVueCE && (/[A-Z]/.test(i) || !De(n)) ? Vs(t, Je(i), n, s, i) : (i === "true-value" ? t._trueValue = n : i === "false-value" && (t._falseValue = n), Bs(t, i, n, o));
  };
  function lu(t, i, e, n) {
    if (n) return !!(i === "innerHTML" || i === "textContent" || i in t && Us(i) && fe(e));
    if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "sandbox" && t.tagName === "IFRAME" || i === "form" || i === "list" && t.tagName === "INPUT" || i === "type" && t.tagName === "TEXTAREA") return false;
    if (i === "width" || i === "height") {
      const r = t.tagName;
      if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE") return false;
    }
    return Us(i) && De(e) ? false : i in t;
  }
  var Ws = (t) => {
    const i = t.props["onUpdate:modelValue"] || false;
    return de(i) ? (e) => Pi(i, e) : i;
  };
  function uu(t) {
    t.target.composing = true;
  }
  function js(t) {
    const i = t.target;
    i.composing && (i.composing = false, i.dispatchEvent(new Event("input")));
  }
  var Tn = /* @__PURE__ */ Symbol("_assign");
  function Gs(t, i, e) {
    return i && (t = t.trim()), e && (t = jn(t)), t;
  }
  var Gi = { created(t, { modifiers: { lazy: i, trim: e, number: n } }, r) {
    t[Tn] = Ws(r);
    const s = n || r.props && r.props.type === "number";
    Zt(t, i ? "change" : "input", (o) => {
      o.target.composing || t[Tn](Gs(t.value, e, s));
    }), (e || s) && Zt(t, "change", () => {
      t.value = Gs(t.value, e, s);
    }), i || (Zt(t, "compositionstart", uu), Zt(t, "compositionend", js), Zt(t, "change", js));
  }, mounted(t, { value: i }) {
    t.value = i ?? "";
  }, beforeUpdate(t, { value: i, oldValue: e, modifiers: { lazy: n, trim: r, number: s } }, o) {
    if (t[Tn] = Ws(o), t.composing) return;
    const l = (s || t.type === "number") && !/^0\d/.test(t.value) ? jn(t.value) : t.value, a = i ?? "";
    l !== a && (document.activeElement === t && t.type !== "range" && (n && i === e || r && t.value.trim() === a) || (t.value = a));
  } };
  var cu = ["ctrl", "shift", "alt", "meta"];
  var hu = { stop: (t) => t.stopPropagation(), prevent: (t) => t.preventDefault(), self: (t) => t.target !== t.currentTarget, ctrl: (t) => !t.ctrlKey, shift: (t) => !t.shiftKey, alt: (t) => !t.altKey, meta: (t) => !t.metaKey, left: (t) => "button" in t && t.button !== 0, middle: (t) => "button" in t && t.button !== 1, right: (t) => "button" in t && t.button !== 2, exact: (t, i) => cu.some((e) => t[`${e}Key`] && !i.includes(e)) };
  var zt = (t, i) => {
    const e = t._withMods || (t._withMods = {}), n = i.join(".");
    return e[n] || (e[n] = (r, ...s) => {
      for (let o = 0; o < i.length; o++) {
        const l = hu[i[o]];
        if (l && l(r, i)) return;
      }
      return t(r, ...s);
    });
  };
  var du = { esc: "escape", space: " ", up: "arrow-up", left: "arrow-left", right: "arrow-right", down: "arrow-down", delete: "backspace" };
  var Ot = (t, i) => {
    const e = t._withKeys || (t._withKeys = {}), n = i.join(".");
    return e[n] || (e[n] = (r) => {
      if (!("key" in r)) return;
      const s = Dt(r.key);
      if (i.some((o) => o === s || du[o] === s)) return t(r);
    });
  };
  var fu = ze({ patchProp: au }, Zl);
  var qs;
  function pu() {
    return qs || (qs = Cl(fu));
  }
  var gu = (...t) => {
    const i = pu().createApp(...t), { mount: e } = i;
    return i.mount = (n) => {
      const r = vu(n);
      if (!r) return;
      const s = i._component;
      !fe(s) && !s.render && !s.template && (s.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
      const o = e(r, false, mu(r));
      return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
    }, i;
  };
  function mu(t) {
    if (t instanceof SVGElement) return "svg";
    if (typeof MathMLElement == "function" && t instanceof MathMLElement) return "mathml";
  }
  function vu(t) {
    return De(t) ? document.querySelector(t) : t;
  }
  var $ = (t, i) => {
    const e = t.__vccOpts || t;
    for (const [n, r] of i) e[n] = r;
    return e;
  };
  var yu = {};
  var wu = { class: "tify-icon -close", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function _u(t, i) {
    return E(), A("svg", wu, [...i[0] || (i[0] = [R("path", { d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" }, null, -1)])]);
  }
  var vo = $(yu, [["render", _u]]);
  var Tu = { blobBaseUrl: "https://github.com/tify-iiif-viewer/tify/blob/v0.35.0", bugsUrl: "https://github.com/tify-iiif-viewer/tify/issues", license: "AGPL-3.0", repositoryUrl: "https://github.com/tify-iiif-viewer/tify", version: "0.35.0" };
  var xu = { computed: { env: () => Tu } };
  var bu = { class: "tify-help", tabindex: "0" };
  var Eu = { class: "tify-sr-only" };
  var Cu = ["innerHTML"];
  var Su = { class: "tify-list" };
  var Pu = ["href"];
  var Ru = ["href"];
  var Du = ["href"];
  var Au = ["href"];
  var Lu = { class: "tify-help-footer" };
  var Iu = ["innerHTML"];
  function Mu(t, i, e, n, r, s) {
    return E(), A("section", bu, [R("h2", Eu, B(t.$translate("Help")), 1), R("h3", null, B(t.$translate("About TIFY")), 1), R("p", { innerHTML: t.$translate("$info") }, null, 8, Cu), R("ul", Su, [R("li", null, [R("a", { href: s.env.repositoryUrl }, B(t.$translate("Source code")), 9, Pu)]), R("li", null, [R("a", { href: `${s.env.blobBaseUrl}/doc` }, B(t.$translate("Documentation")), 9, Ru)]), R("li", null, [R("a", { href: `${s.env.blobBaseUrl}/CONTRIBUTORS.md` }, B(t.$translate("Contributors")), 9, Du)]), R("li", null, [R("a", { href: s.env.bugsUrl }, B(t.$translate("Report a bug")), 9, Au)])]), R("footer", Lu, [R("p", { innerHTML: t.$translate("$copyright") }, null, 8, Iu), R("p", null, [Ge(B(t.$translate("Version")) + " ", 1), R("b", null, B(s.env.version), 1)])])]);
  }
  var Hu = $(xu, [["render", Mu]]);
  var Ou = {};
  var Fu = { class: "tify-icon -plus", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function ku(t, i) {
    return E(), A("svg", Fu, [...i[0] || (i[0] = [R("path", { d: "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" }, null, -1)])]);
  }
  var ss = $(Ou, [["render", ku]]);
  var Bu = {};
  var Vu = { class: "tify-icon -minus", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function zu(t, i) {
    return E(), A("svg", Vu, [...i[0] || (i[0] = [R("path", { d: "M19,13H5V11H19V13Z" }, null, -1)])]);
  }
  var rs = $(Bu, [["render", zu]]);
  var Nu = { name: "CollectionNode", props: { item: { type: Object, default: () => {
  } } }, data() {
    return { children: null, expanded: false };
  }, computed: { id() {
    return this.$getId(Vi());
  } }, methods: { toggleChildren() {
    if (this.expanded) {
      this.expanded = false;
      return;
    }
    if (this.children) {
      this.expanded = true;
      return;
    }
    if (this.item.children) {
      this.children = this.item.children, this.expanded = true;
      return;
    }
    this.$store.fetchJson(this.item["@id"] || this.item.id).then((t) => {
      this.children = t.collections || t.items || t.manifests || [], this.expanded = true;
    }, (t) => {
      const i = t.response && (t.response.statusText || t.response.data) || t.message;
      this.$store.addError(`Error loading IIIF manifest: ${i}`), this.children = false;
    });
  } } };
  var Uu = ["aria-controls", "aria-expanded", "aria-label"];
  var Wu = ["id"];
  var ju = ["id"];
  function Gu(t, i, e, n, r, s) {
    const o = rs, l = ss, a = jr("CollectionNode", true);
    return E(), A("li", { class: Pe(["tify-collection-item", { "-current": t.$store.manifest && t.$store.manifest.id === (e.item["@id"] || e.item.id) }]) }, [e.item.type === "Collection" ? (E(), A("button", { key: 0, type: "button", class: "tify-collection-link -has-children", "aria-controls": s.id, "aria-expanded": r.expanded, "aria-label": t.$translate(r.expanded ? "Collapse" : "Expand"), onClick: i[0] || (i[0] = (u) => s.toggleChildren()) }, [r.expanded ? (E(), le(o, { key: 0 })) : (E(), le(l, { key: 1 })), Ge(" " + B(t.$store.localize(e.item.label)), 1)], 8, Uu)) : (E(), A("a", { key: 1, href: "javascript:;", class: "tify-collection-link", onClick: i[1] || (i[1] = (u) => t.$store.loadManifest(e.item["@id"] || e.item.id, { expectedType: e.item.type, reset: true })) }, B(t.$store.localize(e.item.label)), 1)), r.children !== false ? ke((E(), A("ol", { key: 2, id: s.id, class: "tify-collection-list" }, [(E(true), A(ue, null, Ce(r.children, (u) => (E(), le(a, { key: u.id, item: u }, null, 8, ["item"]))), 128))], 8, Wu)), [[Xe, r.expanded]]) : ke((E(), A("p", { key: 3, id: s.id, class: "tify-collection-error" }, B(t.$translate("Could not load child manifest")), 9, ju)), [[Xe, r.expanded]])], 2);
  }
  var qu = $(Nu, [["render", Gu]]);
  var Zu = { data() {
    return { filter: "" };
  }, computed: { filteredItems() {
    const t = this.filter.trim().toLowerCase().split(/\s+/);
    return this.$store.collection.items.filter((i) => {
      const e = this.$store.localize(i.label).toLowerCase();
      return t.every((n) => e.includes(n));
    });
  } } };
  var Ku = { class: "tify-collection", tabindex: "0" };
  var Xu = { class: "tify-collection-header" };
  var Yu = { class: "tify-sr-only" };
  var Ju = { key: 0, class: "tify-collection-controls" };
  var Qu = ["aria-label", "placeholder"];
  var $u = ["disabled"];
  var ec = { key: 0, class: "tify-collection-list" };
  var tc = { key: 1, class: "tify-collection-no-results" };
  function ic(t, i, e, n, r, s) {
    const o = qu;
    return E(), A("section", Ku, [R("header", Xu, [R("h2", Yu, B(t.$translate("Collection")), 1), t.$store.collection.items.length > 5 ? (E(), A("div", Ju, [ke(R("input", { "onUpdate:modelValue": i[0] || (i[0] = (l) => r.filter = l), "aria-label": t.$translate("Filter collection"), class: "tify-collection-filter", placeholder: t.$translate("Filter collection"), type: "text", onKeydown: [i[1] || (i[1] = Ot(zt((l) => r.filter ? r.filter = "" : l.target.blur(), ["prevent"]), ["esc"])), i[2] || (i[2] = zt(() => {
    }, ["stop"]))] }, null, 40, Qu), [[Gi, r.filter]]), R("button", { type: "button", class: "tify-collection-reset", disabled: !r.filter, onClick: i[3] || (i[3] = (l) => r.filter = "") }, B(t.$translate("Reset")), 9, $u)])) : J("", true)]), s.filteredItems.length ? (E(), A("ol", ec, [(E(true), A(ue, null, Ce(s.filteredItems, (l) => (E(), le(o, { key: l.id, item: l }, null, 8, ["item"]))), 128))])) : (E(), A("p", tc, B(t.$translate("No results")), 1))]);
  }
  var nc = $(Zu, [["render", ic]]);
  function yo(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
  }
  var Ii = { exports: {} };
  var sc = Ii.exports;
  var Zs;
  function rc() {
    return Zs || (Zs = 1, (function(t) {
      (function(i) {
        if (typeof e != "function") {
          var e = function(v) {
            return v;
          };
          e.nonNative = true;
        }
        const n = e("plaintext"), r = e("html"), s = e("comment"), o = /<(\w*)>/g, l = /<\/?([^\s\/>]+)/;
        function a(v, y, x) {
          v = v || "", y = y || [], x = x || "";
          let T = c(y, x);
          return h(v, T);
        }
        function u(v, y) {
          v = v || [], y = y || "";
          let x = c(v, y);
          return function(C) {
            return h(C || "", x);
          };
        }
        a.init_streaming_mode = u;
        function c(v, y) {
          return v = f(v), { allowable_tags: v, tag_replacement: y, state: n, tag_buffer: "", depth: 0, in_quote_char: "" };
        }
        function h(v, y) {
          if (typeof v != "string") throw new TypeError("'html' parameter must be a string");
          let x = y.allowable_tags, T = y.tag_replacement, C = y.state, H = y.tag_buffer, k = y.depth, N = y.in_quote_char, Y = "";
          for (let K = 0, q = v.length; K < q; K++) {
            let ee = v[K];
            if (C === n) switch (ee) {
              case "<":
                C = r, H += ee;
                break;
              default:
                Y += ee;
                break;
            }
            else if (C === r) switch (ee) {
              case "<":
                if (N) break;
                k++;
                break;
              case ">":
                if (N) break;
                if (k) {
                  k--;
                  break;
                }
                N = "", C = n, H += ">", x.has(m(H)) ? Y += H : Y += T, H = "";
                break;
              case '"':
              case "'":
                ee === N ? N = "" : N = N || ee, H += ee;
                break;
              case "-":
                H === "<!-" && (C = s), H += ee;
                break;
              case " ":
              case `
`:
                if (H === "<") {
                  C = n, Y += "< ", H = "";
                  break;
                }
                H += ee;
                break;
              default:
                H += ee;
                break;
            }
            else if (C === s) switch (ee) {
              case ">":
                H.slice(-2) == "--" && (C = n), H = "";
                break;
              default:
                H += ee;
                break;
            }
          }
          return y.state = C, y.tag_buffer = H, y.depth = k, y.in_quote_char = N, Y;
        }
        function f(v) {
          let y = /* @__PURE__ */ new Set();
          if (typeof v == "string") {
            let x;
            for (; x = o.exec(v); ) y.add(x[1]);
          } else !e.nonNative && typeof v[e.iterator] == "function" ? y = new Set(v) : typeof v.forEach == "function" && v.forEach(y.add, y);
          return y;
        }
        function m(v) {
          let y = l.exec(v);
          return y ? y[1].toLowerCase() : null;
        }
        t.exports ? t.exports = a : i.striptags = a;
      })(sc);
    })(Ii)), Ii.exports;
  }
  var oc = rc();
  var wo = yo(oc);
  var ac = { props: { number: { type: Number, required: true }, wrap: { type: Boolean, default: false } }, computed: { classes() {
    return { L: "tify-page-name-label", P: "tify-page-name-number" };
  }, label() {
    return wo(this.$store.localize(this.$store.manifest.items[this.number - 1].label)) || this.$translate("$n/a");
  }, html() {
    return `<span>${this.$store.options.pageLabelFormat}</span>`.replace("P", `${this.number}`).replace("L", `</span>${this.label}<span>`).replace("<span></span>", "");
  } } };
  var lc = ["innerHTML"];
  function uc(t, i, e, n, r, s) {
    return E(), A("span", { class: Pe(["tify-page-name", { "-wrap": e.wrap }]), innerHTML: s.html }, null, 10, lc);
  }
  var ti = $(ac, [["render", uc]]);
  var cc = {};
  var hc = { class: "tify-icon -chevron-up", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function dc(t, i) {
    return E(), A("svg", hc, [...i[0] || (i[0] = [R("path", { d: "M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" }, null, -1)])]);
  }
  var _o = $(cc, [["render", dc]]);
  var fc = {};
  var pc = { class: "tify-icon -chevron-down", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gc(t, i) {
    return E(), A("svg", pc, [...i[0] || (i[0] = [R("path", { d: "M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" }, null, -1)])]);
  }
  var To = $(fc, [["render", gc]]);
  function cn(t) {
    const i = ["a", "b", "br", "i", "img", "p", "span"], e = { a: ["href"], img: ["alt", "src"] };
    let n = wo(t, i);
    const r = /<(\w+)((\s+.+?(\s*=\s*(?:".*?"|'.*?'|.*?|[\^'">\s]+))?)+\s*|\s*)>/g;
    return n = n.replace(r, (s, o, l) => {
      if (!l) return `<${o}>`;
      const a = /(?:([^\s"'=]+)(?:=(?:"(.*?)"|'(.*?)'|([^\s>]+)))?)/g, u = [];
      return l.replace(a, (c, h) => {
        var f;
        (f = e[o]) != null && f.includes(h) && u.push(c);
      }), u.length > 0 ? `<${o} ${u.join(" ")}>` : `<${o}>`;
    }), n;
  }
  function Ks(t, i) {
    if (!(t instanceof Array) || !i || new Set(t).size !== t.length) return false;
    for (let e = 0, n = t.length; e < n; e += 1) if (!Number.isInteger(t[e]) || e > 0 && t[e] > 0 && t[e] <= t[e - 1] || t[e] < -1 || t[e] > i) return false;
    return true;
  }
  function os(t, i = ["https:", "http:"]) {
    let e;
    try {
      e = new URL(t);
    } catch {
      return false;
    }
    return i.includes(e.protocol);
  }
  var mc = { props: { metadata: { type: Array, default: () => [] } }, data() {
    return { infoItems: [] };
  }, watch: { metadata() {
    this.init();
  }, "$store.options.view": { handler(t) {
    t === "info" && this.init();
  }, immediate: true } }, methods: { init() {
    this.$nextTick(() => {
      var t;
      (t = this.$refs.contents) == null || t.forEach((i, e) => {
        const n = i.offsetHeight;
        this.infoItems[e] = { collapsed: true, exceedsHeight: true }, this.$nextTick(() => {
          const r = i.offsetHeight, s = n >= r;
          this.infoItems[e] = { collapsed: s, exceedsHeight: s };
        });
      });
    });
  }, filterHtml: cn, isValidUrl: os } };
  var vc = { class: "tify-info-metadata" };
  var yc = { key: 0 };
  var wc = { class: "tify-info-value" };
  var _c = ["href"];
  var Tc = ["innerHTML"];
  var xc = ["onClick"];
  function bc(t, i, e, n, r, s) {
    const o = To, l = _o;
    return E(), A("div", vc, [(E(true), A(ue, null, Ce(e.metadata, (a, u) => (E(), A("div", { key: u }, [a.label ? (E(), A("h4", yc, B(t.$store.localize(a.label)), 1)) : J("", true), R("div", { ref_for: true, ref: "contents", class: Pe(["tify-info-content", { "-collapsed": r.infoItems[u] && r.infoItems[u].collapsed }]) }, [R("div", wc, [s.isValidUrl(a.value) ? (E(), A("p", { key: `url-${u}` }, [R("a", { href: a.value }, B(a.value), 9, _c)])) : (E(), A("div", { key: `html-${u}`, innerHTML: s.filterHtml(t.$store.localize(a.value)) || t.$translate("$n/a") }, null, 8, Tc))]), r.infoItems[u] && r.infoItems[u].exceedsHeight ? (E(), A("button", { key: 0, type: "button", class: "tify-info-toggle", onClick: (c) => r.infoItems[u].collapsed = !r.infoItems[u].collapsed }, [r.infoItems[u].collapsed ? (E(), A(ue, { key: 0 }, [ie(o), Ge(" " + B(t.$translate("Expand")), 1)], 64)) : (E(), A(ue, { key: 1 }, [ie(l), Ge(" " + B(t.$translate("Collapse")), 1)], 64))], 8, xc)) : J("", true)], 2)]))), 128))]);
  }
  var Ec = $(mc, [["render", bc]]);
  function Cc(t, i) {
    try {
      return new Date(t).toLocaleDateString(i, { month: "long", day: "numeric", year: "numeric" });
    } catch {
      return t;
    }
  }
  var Sc = { data() {
    return { collectionDataShown: false };
  }, computed: { hasProvider() {
    var t;
    return (t = this.manifestOrCollection.provider) == null ? void 0 : t.some((i) => {
      var e;
      return this.$store.localize(i.label) || ((e = i.homepage) == null ? void 0 : e.length);
    });
  }, homepages() {
    return [].concat(this.manifestOrCollection.homepage || []);
  }, logos() {
    var i;
    let t = [].concat(this.manifestOrCollection.logo || []);
    return (i = this.manifestOrCollection.provider) == null || i.forEach((e) => {
      e.logo && (t = t.concat(e.logo));
    }), t = [...new Map(t.map((e) => [e.id, e])).values()], t = t.map((e) => {
      var n, r, s, o;
      return { id: e.id, link: ((r = (n = e.service) == null ? void 0 : n[0]) == null ? void 0 : r.id) || ((o = (s = e.service) == null ? void 0 : s[0]) == null ? void 0 : o["@id"]) };
    }), t;
  }, manifestOrCollection() {
    return this.collectionDataShown ? this.$store.collection : this.$store.manifest || this.$store.collection || {};
  }, metadataItems() {
    return this.$store.manifest.items.map((t, i) => ({ metadata: t.metadata, number: i + 1 })).filter(({ metadata: t, number: i }) => (t == null ? void 0 : t.length) && this.$store.options.pages.includes(i));
  }, pages() {
    return this.$store.options.pages.filter((t) => t > 0).map((t) => {
      var n, r;
      const i = { page: t, media: [] }, e = (r = (n = this.$store.manifest.items[t - 1].items) == null ? void 0 : n[0]) == null ? void 0 : r.items;
      return e == null || e.forEach((s) => {
        var l;
        const o = ((l = s.body) == null ? void 0 : l.items) || [s.body];
        i.media.push(...o.filter((a) => a.label).map((a) => ({ label: a.label })));
      }), i;
    });
  } }, methods: { filterHtml: cn, formatDate: Cc, isValidUrl: os } };
  var Pc = { class: "tify-info", tabindex: "0" };
  var Rc = { class: "tify-sr-only" };
  var Dc = { key: 0, class: "tify-info-header" };
  var Ac = ["aria-pressed"];
  var Lc = ["aria-pressed"];
  var Ic = { key: 1, class: "tify-info-section -title" };
  var Mc = { key: 2, class: "tify-info-section -time" };
  var Hc = { key: 3, class: "tify-info-section -place" };
  var Oc = { key: 4, class: "tify-info-section -metadata" };
  var Fc = { key: 5, class: "tify-info-section -description" };
  var kc = { key: 6, class: "tify-info-section -metadata -structure" };
  var Bc = { key: 0, class: "tify-info-structure" };
  var Vc = { key: 7, class: "tify-info-section -pages" };
  var zc = { class: "tify-list -unstyled" };
  var Nc = { key: 0, class: "tify-info-image-labels" };
  var Uc = { key: 8, class: "tify-info-section -related" };
  var Wc = { class: "tify-list" };
  var jc = ["href"];
  var Gc = ["href"];
  var qc = { key: 9, class: "tify-info-section -attribution" };
  var Zc = ["innerHTML"];
  var Kc = { key: 10, class: "tify-info-section -license" };
  var Xc = ["href"];
  var Yc = { key: 11, class: "tify-info-section -provider" };
  var Jc = { key: 0 };
  var Qc = { key: 1, class: "tify-list" };
  var $c = ["href"];
  var eh = { key: 12, class: "tify-info-section -logo" };
  var th = ["href"];
  var ih = ["src", "alt"];
  var nh = ["src", "alt"];
  function sh(t, i, e, n, r, s) {
    var a, u, c, h;
    const o = Ec, l = ti;
    return E(), A("section", Pc, [R("h2", Rc, B(t.$translate("Info")), 1), t.$store.collection && t.$store.manifest ? (E(), A("div", Dc, [R("button", { type: "button", class: "tify-info-button", "aria-pressed": !r.collectionDataShown, onClick: i[0] || (i[0] = (f) => r.collectionDataShown = false) }, B(t.$translate("Document")), 9, Ac), R("button", { type: "button", class: "tify-info-button", "aria-pressed": r.collectionDataShown, onClick: i[1] || (i[1] = (f) => r.collectionDataShown = true) }, B(t.$translate("Collection")), 9, Lc)])) : J("", true), s.manifestOrCollection.label ? (E(), A("div", Ic, [R("h3", null, B(t.$translate("Title")), 1), R("p", null, B(t.$store.localize(s.manifestOrCollection.label)), 1)])) : J("", true), s.manifestOrCollection.navDate ? (E(), A("div", Mc, [R("h3", null, B(t.$translate("Date")), 1), R("p", null, B(s.formatDate(s.manifestOrCollection.navDate, t.$store.options.language)), 1)])) : J("", true), s.manifestOrCollection.navPlace ? (E(), A("div", Hc, [R("h3", null, B(t.$translate("Place")), 1), (E(true), A(ue, null, Ce(s.manifestOrCollection.navPlace.features, (f) => (E(), A("p", { key: f.id }, B(t.$store.localize(f.properties.label)), 1))), 128))])) : J("", true), s.manifestOrCollection.metadata && s.manifestOrCollection.metadata.length ? (E(), A("div", Oc, [R("h3", null, B(t.$translate("Metadata")), 1), t.$store.options.view === "info" ? (E(), le(o, { key: 0, metadata: s.manifestOrCollection.metadata }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.summary ? (E(), A("div", Fc, [R("h3", null, B(t.$translate("Description")), 1), t.$store.options.view === "info" ? (E(), le(o, { key: 0, metadata: [{ value: s.manifestOrCollection.summary }] }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.structures && ((a = t.$store.currentStructure) != null && a.label || (u = t.$store.currentStructure) != null && u.metadata) ? (E(), A("div", kc, [R("h3", null, B(t.$translate("Current Section")), 1), (c = t.$store.currentStructure) != null && c.label ? (E(), A("p", Bc, B(t.$store.localize(t.$store.currentStructure.label)), 1)) : J("", true), t.$store.options.view === "info" && ((h = t.$store.currentStructure) != null && h.metadata) ? (E(), le(o, { key: 1, class: "tify-info-section -metadata", metadata: t.$store.currentStructure.metadata }, null, 8, ["metadata"])) : J("", true)])) : J("", true), s.manifestOrCollection.type === "Manifest" ? (E(), A("div", Vc, [R("h3", null, B(t.$translate(s.pages.length > 1 ? "Current Pages" : "Current Page")), 1), R("ol", zc, [(E(true), A(ue, null, Ce(s.pages, (f) => (E(), A("li", { key: f }, [ie(l, { number: f.page, wrap: "" }, null, 8, ["number"]), f.media.length ? (E(), A("ul", Nc, [(E(true), A(ue, null, Ce(f.media, (m, v) => (E(), A("li", { key: v }, B(t.$store.localize(m.label)), 1))), 128))])) : J("", true), t.$store.manifest.items[f.page - 1].metadata ? (E(), le(o, { key: 1, class: "tify-info-section -metadata", metadata: t.$store.manifest.items[f.page - 1].metadata }, null, 8, ["metadata"])) : J("", true)]))), 128))])])) : J("", true), s.homepages.length ? (E(), A("div", Uc, [R("h3", null, B(t.$translate("Related Resources")), 1), R("ul", Wc, [(E(true), A(ue, null, Ce(s.homepages, (f, m) => (E(), A("li", { key: m }, [typeof f == "string" ? (E(), A("a", { key: 0, href: f }, B(f), 9, jc)) : (E(), A("a", { key: 1, href: f.id }, B(f.label ? t.$store.localize(f.label) : f.id), 9, Gc))]))), 128))])])) : J("", true), s.manifestOrCollection.requiredStatement ? (E(), A("div", qc, [R("h3", null, B(t.$store.localize(s.manifestOrCollection.requiredStatement.label)), 1), R("div", { innerHTML: s.filterHtml(t.$store.localize(s.manifestOrCollection.requiredStatement.value)) }, null, 8, Zc)])) : J("", true), s.manifestOrCollection.rights ? (E(), A("div", Kc, [R("h3", null, B(t.$translate("License")), 1), R("p", null, [R("a", { href: s.manifestOrCollection.rights }, B(s.manifestOrCollection.rights), 9, Xc)])])) : J("", true), s.hasProvider ? (E(), A("div", Yc, [R("h3", null, B(t.$translate("Provided by")), 1), (E(true), A(ue, null, Ce(s.manifestOrCollection.provider, (f) => {
      var m, v;
      return E(), A("div", { key: f.id }, [f.label ? (E(), A("p", Jc, B(t.$store.localize(f.label)), 1)) : J("", true), (m = f.homepage) != null && m.length || (v = f.seeAlso) != null && v.length ? (E(), A("ul", Qc, [(E(true), A(ue, null, Ce([...f.homepage || [], ...f.seeAlso || []], (y) => (E(), A("li", { key: y.id }, [R("a", { href: y.id }, B(y.label ? t.$store.localize(y.label) : y.id), 9, $c)]))), 128))])) : J("", true)]);
    }), 128))])) : J("", true), s.logos.length ? (E(), A("div", eh, [(E(true), A(ue, null, Ce(s.logos, (f, m) => (E(), A("p", { key: m }, [f.link ? (E(), A("a", { key: 0, href: f.link }, [R("img", { class: "tify-info-logo", src: f.id, alt: t.$translate("Logo") }, null, 8, ih)], 8, th)) : (E(), A("img", { key: 1, class: "tify-info-logo", src: f.id, alt: t.$translate("Logo") }, null, 8, nh))]))), 128))])) : J("", true)]);
  }
  var rh = $(Sc, [["render", sh]]);
  var oh = { name: "TocList", props: { level: { type: Number, default: 0 }, structures: { type: Array, default: () => [] }, purpose: { type: String, default: "" } }, data() {
    var t;
    return { expandedStructures: this.level === 0 && this.structures.length === 1 && ((t = this.structures[0].items) != null && t.some((i) => i.items)) ? [true] : [] };
  }, computed: { id() {
    return this.$getId(Vi());
  } }, methods: { getFirstPage(t) {
    if (t.items) return this.getFirstPage(t.items[0]);
    const i = this.$store.manifest.items.findIndex((e) => e.id === t.id);
    return i < 0 ? 1 : i + 1;
  }, getFirstPageLabel(t) {
    var e;
    const i = this.getFirstPage(t);
    return this.$store.localize((e = this.$store.manifest.items[i - 1]) == null ? void 0 : e.label);
  }, getLastPage(t) {
    if (t.items) return this.getLastPage(t.items.at(-1));
    const i = this.$store.manifest.items.findLastIndex((e) => e.id === t.id);
    return i < 0 ? this.$store.manifest.items.length : i + 1;
  }, isCurrentPageInStructure(t) {
    if (this.$store.manifest.items.filter((r, s) => this.$store.options.pages.includes(s + 1)).map((r) => r.id).some((r) => {
      var s;
      return (s = t.items) == null ? void 0 : s.some((o) => o.id === r);
    })) return true;
    const e = t.firstPage || this.getFirstPage(t), n = t.lastPage || this.getLastPage(t);
    return this.$store.options.pages.some((r) => r >= e && r <= n);
  }, setPage(t) {
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, toggleAllChildren(t = null) {
    if (this.$refs.children) {
      for (let i = this.structures.length - 1; i >= 0; i -= 1) this.toggleChildren(i, t);
      this.$refs.children.forEach((i) => {
        i.toggleAllChildren(t);
      });
    }
  }, toggleChildren(t, i = null) {
    var n;
    (n = this.structures[t].items) != null && n.some((r) => r.items) && (this.expandedStructures[t] = i !== null ? i : !this.expandedStructures[t]);
  } } };
  var ah = { class: "tify-toc-list" };
  var lh = ["aria-controls", "aria-expanded", "aria-label", "title", "onClick"];
  var uh = ["href"];
  var ch = ["onClick"];
  var hh = { class: "tify-toc-label" };
  var dh = { class: "tify-toc-page" };
  var fh = ["onClick"];
  var ph = { class: "tify-toc-label" };
  function gh(t, i, e, n, r, s) {
    const o = rs, l = ss, a = jr("TocList", true);
    return E(), A("ul", ah, [(E(true), A(ue, null, Ce(e.structures, (u, c) => {
      var h, f;
      return E(), A("li", { key: c, class: Pe(["tify-toc-structure", { "-current": s.isCurrentPageInStructure(u), "-expanded": r.expandedStructures[c] }]) }, [(h = u.items) != null && h.some((m) => m.items) ? (E(), A("button", { key: 0, type: "button", class: "tify-toc-toggle", "aria-controls": `${s.id}-${c}`, "aria-expanded": !!r.expandedStructures[c], "aria-label": t.$translate(r.expandedStructures[c] ? "Collapse" : "Expand"), title: t.$translate(r.expandedStructures[c] ? "Collapse" : "Expand"), onClick: (m) => s.toggleChildren(c) }, [r.expandedStructures[c] ? (E(), le(o, { key: 0 })) : (E(), le(l, { key: 1 }))], 8, lh)) : J("", true), e.purpose === "pdf" ? (E(), A("a", { key: 1, class: "tify-toc-link", href: u.rendering[0].id, download: "" }, B(t.$store.localize(u.label)) + " (" + B(u.items.length) + "\xA0" + B(t.$translate(u.items.length === 1 ? "page" : "pages")) + ") ", 9, uh)) : u.label && t.$store.localize(u.label) !== s.getFirstPageLabel(u) ? (E(), A("a", { key: 2, class: "tify-toc-link -dots", href: "javascript:;", onClick: (m) => s.setPage(u.firstPage || s.getFirstPage(u)) }, [R("span", hh, B(t.$store.localize(u.label)), 1), R("span", dh, B(s.getFirstPageLabel(u) || "\u2014"), 1)], 8, ch)) : (E(), A("a", { key: 3, class: "tify-toc-link", href: "javascript:;", onClick: (m) => s.setPage(u.firstPage || s.getFirstPage(u)) }, [R("span", ph, B(t.$store.localize(u.label, "string") || s.getFirstPageLabel(u) || t.$translate("$n/a")), 1)], 8, fh)), (f = u.items) != null && f.some((m) => m.items) ? ke((E(), le(a, { key: 4, id: `${s.id}-${c}`, ref_for: true, ref: "children", level: e.level + 1, purpose: e.purpose, structures: u.items }, null, 8, ["id", "level", "purpose", "structures"])), [[Xe, r.expandedStructures[c]]]) : J("", true)], 2);
    }), 128))]);
  }
  var xo = $(oh, [["render", gh]]);
  var mh = {};
  var vh = { class: "tify-icon -filmstrip", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function yh(t, i) {
    return E(), A("svg", vh, [...i[0] || (i[0] = [R("path", { d: "M18,9H16V7H18M18,13H16V11H18M18,17H16V15H18M8,9H6V7H8M8,13H6V11H8M8,17H6V15H8M18,3V5H16V3H8V5H6V3H4V21H6V19H8V21H16V19H18V21H20V3H18Z" }, null, -1)])]);
  }
  var wh = $(mh, [["render", yh]]);
  var _h = {};
  var Th = { class: "tify-icon -waveform", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function xh(t, i) {
    return E(), A("svg", Th, [...i[0] || (i[0] = [R("path", { d: "M22 12L20 13L19 14L18 13L17 16L16 13L15 21L14 13L13 15L12 13L11 17L10 13L9 22L8 13L7 19L6 13L5 14L4 13L2 12L4 11L5 10L6 11L7 5L8 11L9 2L10 11L11 7L12 11L13 9L14 11L15 3L16 11L17 8L18 11L19 10L20 11L22 12Z" }, null, -1)])]);
  }
  var bh = $(_h, [["render", xh]]);
  var Eh = { data() {
    return { otherItems: [], perElementPdfLinksVisible: false };
  }, computed: { hasElementPdfLinks() {
    var i, e;
    return (e = (i = this.$store.manifest.structures) == null ? void 0 : i[0]) != null && e.rendering ? this.$store.manifest.structures[0].rendering.some((n) => n.format && n.format === "application/pdf") : false;
  }, media() {
    const t = [];
    return this.$store.options.pages.filter((i) => i > 0).forEach((i) => {
      var n, r;
      const e = (r = (n = this.$store.manifest.items[i - 1].items) == null ? void 0 : n[0]) == null ? void 0 : r.items;
      e == null || e.forEach((s, o) => {
        var a;
        (((a = s.body) == null ? void 0 : a.items) || [s.body]).forEach((u, c) => {
          var m;
          const h = (m = u.format) == null ? void 0 : m.split("/")[1], f = { fileName: u.id.split("/").at(-1), format: h == null ? void 0 : h.toUpperCase(), label: u.label, type: u.type, url: u.id, page: i, itemIndex: o, layerIndex: c };
          if (u.service) {
            const v = [].concat(u.service)[0], y = ["ImageService2", "ImageService3"].includes(v.type || v["@type"]) ? "default" : "native", x = v.type === "ImageService3" ? "max" : "full", T = v.id || v["@id"], C = T.at(-1) === "/" ? "" : "/";
            f.url = `${T}${C}full/${x}/0/${y}.${h === "jpeg" ? "jpg" : h}`;
          }
          t.push(f);
        });
      });
    }), t;
  }, pages() {
    return this.$store.options.pages.filter((t) => t > 0);
  }, renderings() {
    return [].concat(this.$store.manifest.rendering || []);
  } } };
  var Ch = { class: "tify-export", tabindex: "0" };
  var Sh = { class: "tify-sr-only" };
  var Ph = { key: 0, class: "tify-export-section -links" };
  var Rh = { class: "tify-export-list" };
  var Dh = ["href"];
  var Ah = { class: "tify-export-link-media" };
  var Lh = ["src"];
  var Ih = { class: "tify-export-link-text" };
  var Mh = { key: 0, class: "tify-export-link-hint" };
  var Hh = { class: "tify-export-link-format" };
  var Oh = { key: 1, class: "tify-export-section -renderings" };
  var Fh = { class: "tify-list" };
  var kh = ["href"];
  var Bh = { key: 0, class: "tify-export-container" };
  var Vh = ["aria-controls", "aria-expanded", "aria-label"];
  var zh = ["id"];
  var Nh = { class: "tify-export-section -iiif" };
  var Uh = { class: "tify-list" };
  var Wh = { key: 0 };
  var jh = ["href"];
  var Gh = ["href"];
  var qh = { key: 2, class: "tify-export-section -other" };
  var Zh = { class: "tify-list" };
  var Kh = ["href"];
  function Xh(t, i, e, n, r, s) {
    var h, f, m;
    const o = bh, l = wh, a = ti, u = vo, c = xo;
    return E(), A("section", Ch, [R("h2", Sh, B(t.$translate("Export [noun]")), 1), t.$store.manifest ? (E(), A("div", Ph, [R("h3", null, B(t.$translate("Media Files")), 1), R("ul", Rh, [(E(true), A(ue, null, Ce(s.media, (v) => (E(), A("li", { key: v.url }, [R("a", { href: v.url, class: "tify-export-link", download: "", rel: "noopener noreferrer", target: "_blank" }, [R("span", Ah, [t.$store.getThumbnailUrl(v.page, 96, v.itemIndex, v.layerIndex) ? (E(), A("img", { key: 0, src: t.$store.getThumbnailUrl(v.page, 96, v.itemIndex, v.layerIndex), alt: "" }, null, 8, Lh)) : v.type === "Sound" ? (E(), le(o, { key: 1 })) : v.type === "Video" ? (E(), le(l, { key: 2 })) : J("", true)]), R("span", Ih, [ie(a, { number: v.page, wrap: true }, null, 8, ["number"]), v.label ? (E(), A("span", Mh, B(t.$store.localize(v.label)), 1)) : J("", true), R("span", Hh, [v.type === "Sound" ? (E(), A(ue, { key: 0 }, [Ge(B(t.$translate("Audio")) + " \xB7 ", 1)], 64)) : v.type === "Video" ? (E(), A(ue, { key: 1 }, [Ge(B(t.$translate("Video")) + " \xB7 ", 1)], 64)) : v.type === "Image" ? (E(), A(ue, { key: 2 }, [Ge(B(t.$translate("Image")) + " \xB7 ", 1)], 64)) : J("", true), Ge(" " + B(v.format), 1)])])], 8, Dh)]))), 128))])])) : J("", true), (h = t.$store.manifest) != null && h.rendering ? (E(), A("div", Oh, [R("h3", null, B(t.$translate("Renderings")), 1), R("ul", Fh, [(E(true), A(ue, null, Ce(s.renderings, (v) => (E(), A("li", { key: v.id }, [R("a", { href: v.id }, B(t.$store.localize(v.label)), 9, kh)]))), 128))]), s.hasElementPdfLinks ? (E(), A("div", Bh, [R("button", { type: "button", class: Pe(["tify-export-toggle", { "-close": r.perElementPdfLinksVisible }]), "aria-controls": t.$getId("export-pdf-list"), "aria-expanded": r.perElementPdfLinksVisible, "aria-label": r.perElementPdfLinksVisible ? t.$translate("Close PDF list") : null, onClick: i[0] || (i[0] = (v) => r.perElementPdfLinksVisible = !r.perElementPdfLinksVisible) }, [r.perElementPdfLinksVisible ? (E(), le(u, { key: 1 })) : (E(), A(ue, { key: 0 }, [Ge(B(t.$translate("PDFs for each element")), 1)], 64))], 10, Vh), ke(R("div", { id: t.$getId("export-pdf-list"), class: "tify-export-toc" }, [R("h4", null, B(t.$translate("PDFs for each element")), 1), ie(c, { ref: "children", purpose: "pdf", level: 0, structures: t.$store.structures }, null, 8, ["structures"])], 8, zh), [[Xe, r.perElementPdfLinksVisible]])])) : J("", true)])) : J("", true), R("div", Nh, [i[1] || (i[1] = R("h3", null, "IIIF", -1)), R("ul", Uh, [t.$store.options.childManifestUrl ? (E(), A("li", Wh, [R("a", { href: t.$store.options.childManifestUrl, download: "manifest.json" }, B(t.$translate("IIIF manifest (current document)")), 9, jh)])) : J("", true), R("li", null, [R("a", { href: t.$store.options.manifestUrl, download: "manifest.json" }, B(t.$translate(t.$store.collection ? "IIIF manifest (collection)" : "IIIF manifest")), 9, Gh)])])]), (m = (f = t.$store.manifest) == null ? void 0 : f.seeAlso) != null && m.length ? (E(), A("div", qh, [R("h3", null, B(t.$translate("Other Formats")), 1), R("ul", Zh, [(E(true), A(ue, null, Ce(t.$store.manifest.seeAlso, (v) => (E(), A("li", { key: v.id }, [R("a", { href: v.id, download: "" }, B(v.label ? t.$store.localize(v.label) : v.id), 9, Kh)]))), 128))])])) : J("", true)]);
  }
  var Yh = $(Eh, [["render", Xh]]);
  function qi(t, i, e = 120) {
    const n = t, r = e === true ? 120 : e;
    if (!r || r < 0) {
      n.scrollTop = i;
      return;
    }
    const o = (i - t.scrollTop) / r / 0.1;
    setTimeout(() => {
      n.scrollTop += o, n.scrollTop !== i && qi(n, i, r - 10);
    }, 10);
  }
  function kn(t, i, e = true) {
    const n = i.querySelectorAll(t);
    if (!n.length) return;
    let r = n[0];
    const s = n[n.length - 1];
    Array.prototype.forEach.call(n, (u) => {
      u.dataset.level >= r.dataset.level && (r = u);
    });
    const o = i.getBoundingClientRect(), l = r.getBoundingClientRect(), a = s.getBoundingClientRect();
    if (l.top < o.top) {
      const u = l.top - o.top + i.scrollTop;
      qi(i, u - 50, e);
    } else if (a.bottom > o.bottom) {
      const u = a.bottom - o.bottom + i.scrollTop;
      qi(i, u + 50, e);
    }
  }
  var Xs = ".tify-toc-structure.-current";
  var Jh = { data() {
    return { isInited: false };
  }, computed: { isNested() {
    return this.$store.structures.filter((t) => {
      var i;
      return (i = t.items) == null ? void 0 : i.some((e) => e.items);
    }).length;
  } }, watch: { "$store.options.pages": function() {
    this.$nextTick(() => kn(Xs, this.$el));
  }, "$store.options.view": { handler(t) {
    t === "toc" && this.$nextTick(this.init);
  }, immediate: true } }, methods: { init() {
    this.isInited = true, this.$nextTick(() => kn(Xs, this.$el, false));
  } } };
  var Qh = { class: "tify-toc", tabindex: "0" };
  var $h = { class: "tify-sr-only" };
  var ed = { key: 0, class: "tify-toc-header" };
  function td(t, i, e, n, r, s) {
    const o = xo;
    return E(), A("section", Qh, [R("h2", $h, B(t.$translate("Table of Contents")), 1), s.isNested ? (E(), A("div", ed, [R("button", { type: "button", class: "tify-toc-toggle-all", onClick: i[0] || (i[0] = (l) => t.$refs.children.toggleAllChildren(true)) }, B(t.$translate("Expand all")), 1), R("button", { type: "button", class: "tify-toc-toggle-all", onClick: i[1] || (i[1] = (l) => t.$refs.children.toggleAllChildren(false)) }, B(t.$translate("Collapse all")), 1)])) : J("", true), r.isInited ? (E(), le(o, { key: 1, ref: "children", level: 0, structures: t.$store.structures }, null, 8, ["structures"])) : J("", true)]);
  }
  var id = $(Jh, [["render", td]]);
  var nd = {};
  var sd = { class: "tify-icon -image-broken-variant", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function rd(t, i) {
    return E(), A("svg", sd, [...i[0] || (i[0] = [R("path", { d: "M21,5V11.59L18,8.58L14,12.59L10,8.59L6,12.59L3,9.58V5A2,2 0 0,1 5,3H19A2,2 0 0,1 21,5M18,11.42L21,14.43V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V12.42L6,15.41L10,11.41L14,15.41" }, null, -1)])]);
  }
  var od = $(nd, [["render", rd]]);
  var ad = 750;
  var ld = { data() {
    return { itemHeight: 0, itemVMargin: 0, items: [{}], itemsPerRow: 0, lastScrollTop: 0, resizeObserver: null, resizeTimeout: null, style: {}, thumbnailWidth: 0, touchTimeout: null };
  }, watch: { "$store.options.pages": function(t) {
    this.$nextTick(() => {
      const i = ".tify-thumbnails-item.-current";
      t.length > 2 || t.length > 1 && t[1] !== t[0] + 1 || (this.$refs.container.querySelector(i) ? kn(i, this.$el) : this.scrollToCurrentPage());
    });
  }, "$store.options.view": { handler(t) {
    t === "thumbnails" && this.$nextTick(this.init);
  }, immediate: true } }, mounted() {
    this.style.flex = this.$el.style.flex;
  }, unmounted() {
    var t;
    (t = this.resizeObserver) == null || t.disconnect(), clearTimeout(this.resizeTimeout);
  }, methods: { init() {
    this.updateDimensions(), this.scrollToCurrentPage(false), this.resizeObserver = new ResizeObserver(this.onResize), this.resizeObserver.observe(this.$el);
  }, onResize() {
    clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(() => {
      this.$store.options.view === "thumbnails" && this.updateDimensions();
    }, 200);
  }, updateDimensions() {
    if (!this.$refs.container) return;
    const t = this.$refs.container.querySelector(".tify-thumbnails-item"), i = t.currentStyle || window.getComputedStyle(t), e = parseInt(i.marginTop, 10) + parseFloat(i.marginBottom, 10);
    this.itemHeight = t.offsetHeight + e, this.itemVerticalMargin = e;
    const n = parseInt(i.marginLeft, 10) + parseFloat(i.marginRight, 10), r = t.offsetWidth + n;
    this.thumbnailWidth = t.offsetWidth, this.itemsPerRow = Math.floor(this.$refs.container.clientWidth / r);
    const o = Math.ceil(this.$store.manifest.items.length / this.itemsPerRow) * this.itemHeight;
    this.$refs.container.style.height = `${o}px`, this.redrawThumbnails(), this.scrollToCurrentPage(false);
  }, redrawThumbnails() {
    const t = this.$el.scrollTop, i = Math.floor(t / this.itemHeight) * this.itemsPerRow + 1, n = Math.ceil(this.$el.offsetHeight / this.itemHeight) * this.itemsPerRow, r = i + this.itemsPerRow + n, s = Math.min(this.$store.manifest.items.length, r), o = [];
    for (let l = i; l <= s; l += 1) o.push({ thumbnailUrl: this.$store.getThumbnailUrl(l, this.thumbnailWidth), page: l });
    this.items = o, this.$nextTick(() => {
      const l = Math.floor(i / this.itemsPerRow);
      this.$refs.container.style.paddingTop = `${l * this.itemHeight}px`;
    });
  }, scrollToCurrentPage(t = true) {
    const e = Math.floor((this.$store.options.pages[0] - 1) / this.itemsPerRow) * this.itemHeight + (this.itemVMargin - 50);
    t ? qi(this.$el, e) : this.$el.scrollTop = e;
  }, setPageAndSwitchView(t, i = false) {
    if (i) {
      const e = this.$store.options.pages.slice(0), n = e.indexOf(t);
      n < 0 ? (e.push(t), e.sort((r, s) => r - s), e[0] === 0 && e.shift()) : e.length > 1 && e.splice(n, 1), this.$store.updateOptions({ pages: e });
      return;
    }
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, touchStartTogglePage(t) {
    this.lastScrollTop = this.$el.scrollTop, this.touchTimeout = setTimeout(() => {
      this.$el.scrollTop === this.lastScrollTop && this.setPageAndSwitchView(t, true);
    }, ad);
  }, touchEnd() {
    clearTimeout(this.touchTimeout);
  } } };
  var ud = { class: "tify-sr-only" };
  var cd = { ref: "container", class: "tify-thumbnails-list" };
  var hd = ["onClick", "onTouchstart"];
  var dd = ["src"];
  var fd = { key: 1, class: "tify-thumbnails-image" };
  var pd = { class: "tify-sr-only" };
  function gd(t, i, e, n, r, s) {
    const o = od, l = ti;
    return E(), A("section", { class: "tify-thumbnails", tabindex: "0", onScroll: i[1] || (i[1] = (...a) => s.redrawThumbnails && s.redrawThumbnails(...a)) }, [R("h2", ud, B(t.$translate("Pages")), 1), R("ol", cd, [(E(true), A(ue, null, Ce(r.items, (a) => (E(), A("li", { key: a.page, class: Pe(["tify-thumbnails-item", { "-current": t.$store.options.pages.includes(a.page) }]) }, [R("button", { type: "button", class: "tify-thumbnails-button", onClick: zt((u) => s.setPageAndSwitchView(a.page, u.ctrlKey), ["prevent"]), onTouchstart: (u) => s.touchStartTogglePage(a.page), onTouchend: i[0] || (i[0] = (...u) => s.touchEnd && s.touchEnd(...u)) }, [a.thumbnailUrl ? (E(), A("img", { key: 0, class: "tify-thumbnails-image", alt: "", src: a.thumbnailUrl }, null, 8, dd)) : (E(), A("span", fd, [ie(o), R("span", pd, B(t.$translate("Image missing")), 1)])), ie(l, { number: a.page || 1 }, null, 8, ["number"])], 40, hd)], 2))), 128))], 512)], 32);
  }
  var md = $(ld, [["render", gd]]);
  var vd = { computed: { pages() {
    return this.$store.options.pages.filter((t) => t > 0);
  } }, watch: { "$store.options.annotationId": function() {
    this.scrollToCurrentAnnotation();
  }, "$store.annotationsAvailable": function() {
    this.$store.options.annotationId && this.scrollToCurrentAnnotation();
  } }, mounted() {
    this.$store.options.annotationId && this.$store.annotationsAvailable && this.scrollToCurrentAnnotation();
  }, methods: { filterHtml: cn, scrollToCurrentAnnotation() {
    this.$nextTick(() => {
      var i;
      const t = (i = this.$refs.currentItem) == null ? void 0 : i[0];
      t && t.scrollIntoView({ behavior: "smooth", block: t.offsetHeight < this.$refs.panel.offsetHeight / 2 ? "center" : "start" });
    });
  } } };
  var yd = { ref: "panel", class: "tify-text", tabindex: "0" };
  var wd = { class: "tify-sr-only" };
  var _d = { key: 0, class: "tify-text-pages" };
  var Td = { key: 0 };
  var xd = { class: "tify-text-list" };
  var bd = ["onClick", "onKeydown", "innerHTML"];
  var Ed = { key: 1, class: "tify-text-none" };
  function Cd(t, i, e, n, r, s) {
    const o = ti;
    return E(), A("section", yd, [R("h2", wd, B(t.$translate("Text")), 1), t.$store.annotationsAvailable !== false ? (E(), A("div", _d, [(E(true), A(ue, null, Ce(s.pages, (l) => (E(), A("div", { key: l, class: "tify-text-page" }, [t.$store.pageCount > 1 ? (E(), A("h3", Td, [ie(o, { number: l }, null, 8, ["number"])])) : J("", true), R("ul", xd, [(E(true), A(ue, null, Ce(t.$store.annotations[l], (a, u) => (E(), A("li", { key: `${l}-${u}`, ref_for: true, ref: t.$store.options.annotationId === a.id ? "currentItem" : "", class: Pe(["tify-text-item", { "-current": t.$store.options.annotationId === a.id }]) }, [R("div", { role: "button", tabindex: "0", class: "tify-text-toggle", onClick: (c) => t.$store.toggleAnnotationId(a.id), onKeydown: Ot((c) => t.$store.toggleAnnotationId(a.id), ["enter", "space"]), innerHTML: s.filterHtml(a.html) }, null, 40, bd)], 2))), 128))])]))), 128))])) : (E(), A("p", Ed, B(t.$translate("Text not available for this page")), 1))], 512);
  }
  var Sd = $(vd, [["render", Cd]]);
  var Pd = {};
  var Rd = { class: "tify-icon -volume-high", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Dd(t, i) {
    return E(), A("svg", Rd, [...i[0] || (i[0] = [R("path", { d: "M14,3.23V5.29C16.89,6.15 19,8.83 19,12C19,15.17 16.89,17.84 14,18.7V20.77C18,19.86 21,16.28 21,12C21,7.72 18,4.14 14,3.23M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16C15.5,15.29 16.5,13.76 16.5,12M3,9V15H7L12,20V4L7,9H3Z" }, null, -1)])]);
  }
  var Ad = $(Pd, [["render", Dd]]);
  var Ld = {};
  var Id = { class: "tify-icon -volume-medium", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Md(t, i) {
    return E(), A("svg", Id, [...i[0] || (i[0] = [R("path", { d: "M5,9V15H9L14,20V4L9,9M18.5,12C18.5,10.23 17.5,8.71 16,7.97V16C17.5,15.29 18.5,13.76 18.5,12Z" }, null, -1)])]);
  }
  var Hd = $(Ld, [["render", Md]]);
  var Od = {};
  var Fd = { class: "tify-icon -volume-low", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function kd(t, i) {
    return E(), A("svg", Fd, [...i[0] || (i[0] = [R("path", { d: "M7,9V15H11L16,20V4L11,9H7Z" }, null, -1)])]);
  }
  var Bd = $(Od, [["render", kd]]);
  var Vd = {};
  var zd = { class: "tify-icon -volume-variant-off", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Nd(t, i) {
    return E(), A("svg", zd, [...i[0] || (i[0] = [R("path", { d: "M5.64,3.64L21.36,19.36L19.95,20.78L16,16.83V20L11,15H7V9H8.17L4.22,5.05L5.64,3.64M16,4V11.17L12.41,7.58L16,4Z" }, null, -1)])]);
  }
  var Ud = $(Vd, [["render", Nd]]);
  var Wd = {};
  var jd = { class: "tify-icon -closed-caption-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gd(t, i) {
    return E(), A("svg", jd, [...i[0] || (i[0] = [R("path", { d: "M5,4C4.45,4 4,4.18 3.59,4.57C3.2,4.96 3,5.44 3,6V18C3,18.56 3.2,19.04 3.59,19.43C4,19.82 4.45,20 5,20H19C19.5,20 20,19.81 20.39,19.41C20.8,19 21,18.53 21,18V6C21,5.47 20.8,5 20.39,4.59C20,4.19 19.5,4 19,4H5M4.5,5.5H19.5V18.5H4.5V5.5M7,9C6.7,9 6.47,9.09 6.28,9.28C6.09,9.47 6,9.7 6,10V14C6,14.3 6.09,14.53 6.28,14.72C6.47,14.91 6.7,15 7,15H10C10.27,15 10.5,14.91 10.71,14.72C10.91,14.53 11,14.3 11,14V13H9.5V13.5H7.5V10.5H9.5V11H11V10C11,9.7 10.91,9.47 10.71,9.28C10.5,9.09 10.27,9 10,9H7M14,9C13.73,9 13.5,9.09 13.29,9.28C13.09,9.47 13,9.7 13,10V14C13,14.3 13.09,14.53 13.29,14.72C13.5,14.91 13.73,15 14,15H17C17.3,15 17.53,14.91 17.72,14.72C17.91,14.53 18,14.3 18,14V13H16.5V13.5H14.5V10.5H16.5V11H18V10C18,9.7 17.91,9.47 17.72,9.28C17.53,9.09 17.3,9 17,9H14Z" }, null, -1)])]);
  }
  var qd = $(Wd, [["render", Gd]]);
  var Zd = {};
  var Kd = { class: "tify-icon -closed-caption", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xd(t, i) {
    return E(), A("svg", Kd, [...i[0] || (i[0] = [R("path", { d: "M18,11H16.5V10.5H14.5V13.5H16.5V13H18V14A1,1 0 0,1 17,15H14A1,1 0 0,1 13,14V10A1,1 0 0,1 14,9H17A1,1 0 0,1 18,10M11,11H9.5V10.5H7.5V13.5H9.5V13H11V14A1,1 0 0,1 10,15H7A1,1 0 0,1 6,14V10A1,1 0 0,1 7,9H10A1,1 0 0,1 11,10M19,4H5C3.89,4 3,4.89 3,6V18A2,2 0 0,0 5,20H19A2,2 0 0,0 21,18V6C21,4.89 20.1,4 19,4Z" }, null, -1)])]);
  }
  var Yd = $(Zd, [["render", Xd]]);
  function hn(t) {
    return mr() ? (ta(t), true) : false;
  }
  function Ys() {
    const t = /* @__PURE__ */ new Set(), i = (s) => {
      t.delete(s);
    };
    return { on: (s) => {
      t.add(s);
      const o = () => i(s);
      return hn(o), { off: o };
    }, off: i, trigger: (...s) => Promise.all(Array.from(t).map((o) => o(...s))), clear: () => {
      t.clear();
    } };
  }
  var as = typeof window < "u" && typeof document < "u";
  typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
  var Jd = Object.prototype.toString;
  var bo = (t) => Jd.call(t) === "[object Object]";
  var Ht = () => {
  };
  var Qd = $d();
  function $d() {
    var t, i;
    return as && ((t = window == null ? void 0 : window.navigator) == null ? void 0 : t.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((i = window == null ? void 0 : window.navigator) == null ? void 0 : i.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window == null ? void 0 : window.navigator.userAgent));
  }
  function ef(...t) {
    if (t.length !== 1) return Da(...t);
    const i = t[0];
    return typeof i == "function" ? Oi(Sa(() => ({ get: i, set: Ht }))) : gi(i);
  }
  function tf(t, i) {
    function e(...n) {
      return new Promise((r, s) => {
        Promise.resolve(t(() => i.apply(this, n), { fn: i, thisArg: this, args: n })).then(r).catch(s);
      });
    }
    return e;
  }
  var nf = (t) => t();
  function xn(t) {
    return Array.isArray(t) ? t : [t];
  }
  function sf(t) {
    return xi();
  }
  function rf(t, i = true, e) {
    sf() ? es(t, e) : i ? t() : Yn(t);
  }
  function Js(t, i, e = {}) {
    const { eventFilter: n = nf, ...r } = e, s = tf(n, i);
    let o, l, a;
    if (r.flush === "sync") {
      let u = false;
      l = () => {
      }, o = (c) => {
        u = true, c(), u = false;
      }, a = et(t, (...c) => {
        u || s(...c);
      }, r);
    } else {
      const u = [];
      let c = 0, h = 0;
      l = () => {
        c = h;
      }, u.push(et(t, () => {
        h++;
      }, { ...r, flush: "sync" })), o = (f) => {
        const m = h;
        f(), c += h - m;
      }, u.push(et(t, (...f) => {
        const m = c > 0 && c === h;
        c = 0, h = 0, !m && s(...f);
      }, r)), a = () => {
        u.forEach((f) => f());
      };
    }
    return { stop: a, ignoreUpdates: o, ignorePrevAsyncUpdates: l };
  }
  function of(t, i, e) {
    return et(t, i, { ...e, immediate: true });
  }
  var Eo = as ? window : void 0;
  var Co = as ? window.document : void 0;
  function Ft(t) {
    var i;
    const e = Se(t);
    return (i = e == null ? void 0 : e.$el) != null ? i : e;
  }
  function Ee(...t) {
    const i = [], e = () => {
      i.forEach((l) => l()), i.length = 0;
    }, n = (l, a, u, c) => (l.addEventListener(a, u, c), () => l.removeEventListener(a, u, c)), r = Me(() => {
      const l = xn(Se(t[0])).filter((a) => a != null);
      return l.every((a) => typeof a != "string") ? l : void 0;
    }), s = of(() => {
      var l, a;
      return [(a = (l = r.value) == null ? void 0 : l.map((u) => Ft(u))) != null ? a : [Eo].filter((u) => u != null), xn(Se(r.value ? t[1] : t[0])), xn(sn(r.value ? t[2] : t[1])), Se(r.value ? t[3] : t[2])];
    }, ([l, a, u, c]) => {
      if (e(), !(l != null && l.length) || !(a != null && a.length) || !(u != null && u.length)) return;
      const h = bo(c) ? { ...c } : c;
      i.push(...l.flatMap((f) => a.flatMap((m) => u.map((v) => n(f, m, v, h)))));
    }, { flush: "post" }), o = () => {
      s(), e();
    };
    return hn(e), o;
  }
  var Qs = false;
  function So(t, i, e = {}) {
    const { window: n = Eo, ignore: r = [], capture: s = true, detectIframe: o = false, controls: l = false } = e;
    if (!n) return l ? { stop: Ht, cancel: Ht, trigger: Ht } : Ht;
    if (Qd && !Qs) {
      Qs = true;
      const x = { passive: true };
      Array.from(n.document.body.children).forEach((T) => T.addEventListener("click", Ht, x)), n.document.documentElement.addEventListener("click", Ht, x);
    }
    let a = true;
    const u = (x) => Se(r).some((T) => {
      if (typeof T == "string") return Array.from(n.document.querySelectorAll(T)).some((C) => C === x.target || x.composedPath().includes(C));
      {
        const C = Ft(T);
        return C && (x.target === C || x.composedPath().includes(C));
      }
    });
    function c(x) {
      const T = Se(x);
      return T && T.$.subTree.shapeFlag === 16;
    }
    function h(x, T) {
      const C = Se(x), H = C.$.subTree && C.$.subTree.children;
      return H == null || !Array.isArray(H) ? false : H.some((k) => k.el === T.target || T.composedPath().includes(k.el));
    }
    const f = (x) => {
      const T = Ft(t);
      if (x.target != null && !(!(T instanceof Element) && c(t) && h(t, x)) && !(!T || T === x.target || x.composedPath().includes(T))) {
        if ("detail" in x && x.detail === 0 && (a = !u(x)), !a) {
          a = true;
          return;
        }
        i(x);
      }
    };
    let m = false;
    const v = [Ee(n, "click", (x) => {
      m || (m = true, setTimeout(() => {
        m = false;
      }, 0), f(x));
    }, { passive: true, capture: s }), Ee(n, "pointerdown", (x) => {
      const T = Ft(t);
      a = !u(x) && !!(T && !x.composedPath().includes(T));
    }, { passive: true }), o && Ee(n, "blur", (x) => {
      setTimeout(() => {
        var T;
        const C = Ft(t);
        ((T = n.document.activeElement) == null ? void 0 : T.tagName) === "IFRAME" && !(C != null && C.contains(n.document.activeElement)) && i(x);
      }, 0);
    }, { passive: true })].filter(Boolean), y = () => v.forEach((x) => x());
    return l ? { stop: y, cancel: () => {
      a = false;
    }, trigger: (x) => {
      a = true, f(x), a = false;
    } } : y;
  }
  function af() {
    const t = Ue(false), i = xi();
    return i && es(() => {
      t.value = true;
    }, i), t;
  }
  function lf(t) {
    const i = af();
    return Me(() => (i.value, !!t()));
  }
  var $s = ["fullscreenchange", "webkitfullscreenchange", "webkitendfullscreen", "mozfullscreenchange", "MSFullscreenChange"];
  function uf(t, i = {}) {
    const { document: e = Co, autoExit: n = false } = i, r = Me(() => {
      var C;
      return (C = Ft(t)) != null ? C : e == null ? void 0 : e.documentElement;
    }), s = Ue(false), o = Me(() => ["requestFullscreen", "webkitRequestFullscreen", "webkitEnterFullscreen", "webkitEnterFullScreen", "webkitRequestFullScreen", "mozRequestFullScreen", "msRequestFullscreen"].find((C) => e && C in e || r.value && C in r.value)), l = Me(() => ["exitFullscreen", "webkitExitFullscreen", "webkitExitFullScreen", "webkitCancelFullScreen", "mozCancelFullScreen", "msExitFullscreen"].find((C) => e && C in e || r.value && C in r.value)), a = Me(() => ["fullScreen", "webkitIsFullScreen", "webkitDisplayingFullscreen", "mozFullScreen", "msFullscreenElement"].find((C) => e && C in e || r.value && C in r.value)), u = ["fullscreenElement", "webkitFullscreenElement", "mozFullScreenElement", "msFullscreenElement"].find((C) => e && C in e), c = lf(() => r.value && e && o.value !== void 0 && l.value !== void 0 && a.value !== void 0), h = () => u ? (e == null ? void 0 : e[u]) === r.value : false, f = () => {
      if (a.value) {
        if (e && e[a.value] != null) return e[a.value];
        {
          const C = r.value;
          if ((C == null ? void 0 : C[a.value]) != null) return !!C[a.value];
        }
      }
      return false;
    };
    async function m() {
      if (!(!c.value || !s.value)) {
        if (l.value) if ((e == null ? void 0 : e[l.value]) != null) await e[l.value]();
        else {
          const C = r.value;
          (C == null ? void 0 : C[l.value]) != null && await C[l.value]();
        }
        s.value = false;
      }
    }
    async function v() {
      if (!c.value || s.value) return;
      f() && await m();
      const C = r.value;
      o.value && (C == null ? void 0 : C[o.value]) != null && (await C[o.value](), s.value = true);
    }
    async function y() {
      await (s.value ? m() : v());
    }
    const x = () => {
      const C = f();
      (!C || C && h()) && (s.value = C);
    }, T = { capture: false, passive: true };
    return Ee(e, $s, x, T), Ee(() => Ft(r), $s, x, T), rf(x, false), n && hn(m), { isSupported: c, isFullscreen: s, enter: v, exit: m, toggle: y };
  }
  function bn(t, i) {
    Se(t) && i(Se(t));
  }
  function cf(t) {
    let i = [];
    for (let e = 0; e < t.length; ++e) i = [...i, [t.start(e), t.end(e)]];
    return i;
  }
  function En(t) {
    return Array.from(t).map(({ label: i, kind: e, language: n, mode: r, activeCues: s, cues: o, inBandMetadataTrackDispatchType: l }, a) => ({ id: a, label: i, kind: e, language: n, mode: r, activeCues: s, cues: o, inBandMetadataTrackDispatchType: l }));
  }
  var hf = { src: "", tracks: [] };
  function df(t, i = {}) {
    t = ef(t), i = { ...hf, ...i };
    const { document: e = Co } = i, n = { passive: true }, r = Ue(0), s = Ue(0), o = Ue(false), l = Ue(1), a = Ue(false), u = Ue(false), c = Ue(false), h = Ue(1), f = Ue(false), m = gi([]), v = gi([]), y = Ue(-1), x = Ue(false), T = Ue(false), C = e && "pictureInPictureEnabled" in e, H = Ys(), k = Ys(), N = (j) => {
      bn(t, (ne) => {
        if (j) {
          const he = typeof j == "number" ? j : j.id;
          ne.textTracks[he].mode = "disabled";
        } else for (let he = 0; he < ne.textTracks.length; ++he) ne.textTracks[he].mode = "disabled";
        y.value = -1;
      });
    }, Y = (j, ne = true) => {
      bn(t, (he) => {
        const ye = typeof j == "number" ? j : j.id;
        ne && N(), he.textTracks[ye].mode = "showing", y.value = ye;
      });
    }, K = () => new Promise((j, ne) => {
      bn(t, async (he) => {
        C && (x.value ? e.exitPictureInPicture().then(j).catch(ne) : he.requestPictureInPicture().then(j).catch(ne));
      });
    });
    ws(() => {
      if (!e) return;
      const j = Se(t);
      if (!j) return;
      const ne = Se(i.src);
      let he = [];
      ne && (typeof ne == "string" ? he = [{ src: ne }] : Array.isArray(ne) ? he = ne : bo(ne) && (he = [ne]), j.querySelectorAll("source").forEach((ye) => {
        ye.remove();
      }), he.forEach(({ src: ye, type: me, media: pe }) => {
        const ae = e.createElement("source");
        ae.setAttribute("src", ye), ae.setAttribute("type", me || ""), ae.setAttribute("media", pe || ""), Ee(ae, "error", H.trigger, n), j.appendChild(ae);
      }), j.load());
    }), et([t, l], () => {
      const j = Se(t);
      j && (j.volume = l.value);
    }), et([t, T], () => {
      const j = Se(t);
      j && (j.muted = T.value);
    }), et([t, h], () => {
      const j = Se(t);
      j && (j.playbackRate = h.value);
    }), ws(() => {
      if (!e) return;
      const j = Se(i.tracks), ne = Se(t);
      !j || !j.length || !ne || (ne.querySelectorAll("track").forEach((he) => he.remove()), j.forEach(({ default: he, kind: ye, label: me, src: pe, srcLang: ae }, Ae) => {
        const Re = e.createElement("track");
        Re.default = he || false, Re.kind = ye, Re.label = me, Re.src = pe, Re.srclang = ae, Re.default && (y.value = Ae), ne.appendChild(Re);
      }));
    });
    const { ignoreUpdates: q } = Js(r, (j) => {
      const ne = Se(t);
      ne && (ne.currentTime = j);
    }), { ignoreUpdates: ee } = Js(c, (j) => {
      const ne = Se(t);
      ne && (j ? ne.play().catch((he) => {
        throw k.trigger(he), he;
      }) : ne.pause());
    });
    Ee(t, "timeupdate", () => q(() => r.value = Se(t).currentTime), n), Ee(t, "durationchange", () => s.value = Se(t).duration, n), Ee(t, "progress", () => m.value = cf(Se(t).buffered), n), Ee(t, "seeking", () => o.value = true, n), Ee(t, "seeked", () => o.value = false, n), Ee(t, ["waiting", "loadstart"], () => {
      a.value = true, ee(() => c.value = false);
    }, n), Ee(t, "loadeddata", () => a.value = false, n), Ee(t, "playing", () => {
      a.value = false, u.value = false, ee(() => c.value = true);
    }, n), Ee(t, "ratechange", () => h.value = Se(t).playbackRate, n), Ee(t, "stalled", () => f.value = true, n), Ee(t, "ended", () => u.value = true, n), Ee(t, "pause", () => ee(() => c.value = false), n), Ee(t, "play", () => ee(() => c.value = true), n), Ee(t, "enterpictureinpicture", () => x.value = true, n), Ee(t, "leavepictureinpicture", () => x.value = false, n), Ee(t, "volumechange", () => {
      const j = Se(t);
      j && (l.value = j.volume, T.value = j.muted);
    }, n);
    const ce = [], te = et([t], () => {
      const j = Se(t);
      j && (te(), ce[0] = Ee(j.textTracks, "addtrack", () => v.value = En(j.textTracks), n), ce[1] = Ee(j.textTracks, "removetrack", () => v.value = En(j.textTracks), n), ce[2] = Ee(j.textTracks, "change", () => v.value = En(j.textTracks), n));
    });
    return hn(() => ce.forEach((j) => j())), { currentTime: r, duration: s, waiting: a, seeking: o, ended: u, stalled: f, buffered: m, playing: c, rate: h, volume: l, muted: T, tracks: v, selectedTrack: y, enableTrack: Y, disableTrack: N, supportsPictureInPicture: C, togglePictureInPicture: K, isPictureInPicture: x, onSourceError: H.on, onPlaybackError: k.on };
  }
  function ls(t) {
    return !!(t.altKey || t.ctrlKey || t.metaKey || ["INPUT", "SELECT", "TEXTAREA"].includes(t.target.nodeName) && t.target.type !== "range");
  }
  var ff = { props: { label: { default: null, type: String }, position: { default: "bottom", type: String }, shortcut: { default: null, type: String } }, emits: ["open"], data() {
    return { open: false };
  }, computed: { id() {
    return this.$.appContext.config.globalProperties.$getId ? this.$getId(Vi()) : Vi();
  } }, mounted() {
    var t;
    (((t = this.$store) == null ? void 0 : t.rootElement) || document.documentElement).addEventListener("keydown", this.onKeydown), So(this.$el, () => {
      this.open = false;
    });
  }, beforeUnmount() {
    var t;
    (((t = this.$store) == null ? void 0 : t.rootElement) || document.documentElement).removeEventListener("keydown", this.onKeydown);
  }, methods: { onKeydown(t) {
    if (!ls(t)) {
      if (t.key === "Escape") {
        this.open = false;
        return;
      }
      t.key === this.shortcut && (this.open = !this.open, this.open && this.$emit("open"), t.preventDefault());
    }
  } } };
  var pf = { class: "tify-dropdown" };
  var gf = ["aria-controls", "aria-expanded", "aria-label", "title"];
  var mf = ["id"];
  function vf(t, i, e, n, r, s) {
    return E(), A("div", pf, [R("button", { type: "button", class: "tify-dropdown-button", "aria-controls": s.id, "aria-expanded": r.open, "aria-label": e.label, title: e.label, onClick: i[0] || (i[0] = (o) => {
      r.open = !r.open, r.open && t.$emit("open");
    }) }, [xs(t.$slots, "button")], 8, gf), ke(R("div", { id: s.id, class: Pe(`tify-dropdown-content -${e.position}`), onClick: i[1] || (i[1] = (o) => o.target.closest("a, button") && (r.open = false)) }, [xs(t.$slots, "default")], 10, mf), [[Xe, r.open]])]);
  }
  var us = $(ff, [["render", vf]]);
  var yf = {};
  var wf = { class: "tify-icon -play-speed", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function _f(t, i) {
    return E(), A("svg", wf, [...i[0] || (i[0] = [R("path", { d: "M13,2.05V4.05C17.39,4.59 20.5,8.58 19.96,12.97C19.5,16.61 16.64,19.5 13,19.93V21.93C18.5,21.38 22.5,16.5 21.95,11C21.5,6.25 17.73,2.5 13,2.03V2.05M5.67,19.74C7.18,21 9.04,21.79 11,22V20C9.58,19.82 8.23,19.25 7.1,18.37L5.67,19.74M7.1,5.74C8.22,4.84 9.57,4.26 11,4.06V2.06C9.05,2.25 7.19,3 5.67,4.26L7.1,5.74M5.69,7.1L4.26,5.67C3,7.19 2.25,9.04 2.05,11H4.05C4.24,9.58 4.8,8.23 5.69,7.1M4.06,13H2.06C2.26,14.96 3.03,16.81 4.27,18.33L5.69,16.9C4.81,15.77 4.24,14.42 4.06,13M10,16.5L16,12L10,7.5V16.5Z" }, null, -1)])]);
  }
  var Tf = $(yf, [["render", _f]]);
  var xf = {};
  var bf = { class: "tify-icon -pause", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Ef(t, i) {
    return E(), A("svg", bf, [...i[0] || (i[0] = [R("path", { d: "M14,19H18V5H14M6,19H10V5H6V19Z" }, null, -1)])]);
  }
  var Cf = $(xf, [["render", Ef]]);
  var Sf = {};
  var Pf = { class: "tify-icon -play", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Rf(t, i) {
    return E(), A("svg", Pf, [...i[0] || (i[0] = [R("path", { d: "M8,5.14V19.14L19,12.14L8,5.14Z" }, null, -1)])]);
  }
  var Df = $(Sf, [["render", Rf]]);
  var Af = {};
  var Lf = { class: "tify-icon -loading", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function If(t, i) {
    return E(), A("svg", Lf, [...i[0] || (i[0] = [R("path", { d: "M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z" }, null, -1)])]);
  }
  var Mf = $(Af, [["render", If]]);
  var Hf = { props: { src: { required: true, type: String }, format: { required: true, type: String }, hasImage: { type: Boolean, default: false } }, data() {
    return { currentSubtitle: null, media: df(Ga("av")), mouseInterval: null, mouseMoving: true, rates: [0.5, 0.75, 1, 1.25, 1.5, 2] };
  }, computed: { type() {
    var t;
    return (t = this.format) == null ? void 0 : t.split("/")[0];
  }, subtitles() {
    var i, e;
    const t = (e = (i = this.$store.manifest.items[this.$store.options.pages[0] - 1].annotations) == null ? void 0 : i[0].items) == null ? void 0 : e[0].body;
    return t ? t.items || [t] : [];
  } }, watch: { currentSubtitle(t) {
    Object.values(this.$refs.av.textTracks).forEach((i) => {
      i.mode = i.language === (t == null ? void 0 : t.language) ? "showing" : "disabled";
    });
  } }, beforeUnmount() {
    clearInterval(this.mouseInterval);
  }, mounted() {
    window.addEventListener("mousemove", this.onMouseMove);
  }, unmounted() {
    window.removeEventListener("mousemove", this.onMouseMove);
  }, methods: { formatTime(t) {
    const i = Math.floor(t / 3600), e = Math.floor(t % 3600 / 60), n = Math.floor(t % 60);
    return [...this.media.duration > 3600 ? [i.toString().padStart(2, "0")] : [], e.toString().padStart(2, "0"), n.toString().padStart(2, "0")].join(":");
  }, onMouseMove() {
    clearTimeout(this.mouseInterval), this.mouseMoving = true, this.mouseInterval = setInterval(() => {
      this.mouseMoving = this.$store.options.view || this.media.paused;
    }, 2e3);
  } } };
  var Of = ["src", "type"];
  var Ff = ["srclang", "src"];
  var kf = { class: "tify-player-controls" };
  var Bf = ["aria-label"];
  var Vf = ["max", "aria-label"];
  var zf = { class: "tify-player-time" };
  var Nf = { class: "tify-player-elapsed" };
  var Uf = { class: "tify-player-duration" };
  var Wf = { class: "tify-sr-only" };
  var jf = { key: 0, class: "tify-player-select-badge" };
  var Gf = { class: "tify-player-select-title" };
  var qf = { class: "tify-button-list" };
  var Zf = ["aria-pressed", "onClick"];
  var Kf = { class: "tify-sr-only" };
  var Xf = { class: "tify-player-select-title" };
  var Yf = { class: "tify-button-list" };
  var Jf = ["aria-pressed", "onClick"];
  var Qf = ["aria-pressed"];
  var $f = ["aria-label", "disabled"];
  var ep = ["aria-label"];
  function tp(t, i, e, n, r, s) {
    const o = Mf, l = Df, a = Cf, u = Tf, c = us, h = Yd, f = qd, m = Ud, v = Bd, y = Hd, x = Ad;
    return E(), A("div", { class: Pe(["tify-player", `
			-${s.type}
			${r.mouseMoving || r.media.paused ? "-mousing" : ""}
			${r.media.playing || r.media.waiting ? "-playing" : ""}
			${e.hasImage && (s.type === "audio" || !r.media.currentTime) ? "-bottom" : ""}
		`]), onKeydown: i[7] || (i[7] = Ot(zt((T) => r.media.playing = !r.media.playing, ["prevent"]), ["space"])) }, [(E(), le(nl(s.type), { ref: "av", class: "tify-player-av", poster: t.$store.getThumbnailUrl(t.$store.options.pages[0], 0), preload: "metadata", crossorigin: "anonymous", onClick: i[0] || (i[0] = (T) => {
      r.media.playing = !r.media.playing, s.onMouseMove();
    }) }, { default: Ye(() => [R("source", { src: e.src, type: e.format }, null, 8, Of), (E(true), A(ue, null, Ce(s.subtitles, (T) => (E(), A("track", { key: T.id, kind: "captions", srclang: T.language, src: T.id }, null, 8, Ff))), 128))]), _: 1 }, 8, ["poster"])), s.type === "video" ? (E(), A("div", { key: 0, class: Pe(["tify-player-overlay", { "-hidden": r.media.playing || e.hasImage && !r.media.currentTime }]) }, [r.media.waiting ? (E(), le(o, { key: 0, class: "-spin" })) : r.media.currentTime ? J("", true) : (E(), le(l, { key: 1 }))], 2)) : J("", true), R("div", kf, [R("div", null, [R("button", { type: "button", class: "tify-player-play-pause", "aria-label": t.$translate(r.media.paused ? "Play [verb]" : "Pause [verb]"), onClick: i[1] || (i[1] = (T) => r.media.playing = !r.media.playing) }, [r.media.playing || r.media.seeking && r.media.waiting ? (E(), le(a, { key: 0 })) : (E(), le(l, { key: 1 }))], 8, Bf), ke(R("input", { "onUpdate:modelValue": i[2] || (i[2] = (T) => r.media.currentTime = T), type: "range", class: "tify-player-seekbar", min: "0", max: r.media.duration, step: "any", "aria-label": t.$translate("Current time"), style: Rt(`--value: ${r.media.currentTime / r.media.duration * 100}%`) }, null, 12, Vf), [[Gi, r.media.currentTime, void 0, { number: true }]]), R("span", zf, [R("span", Nf, B(s.formatTime(r.media.currentTime)), 1), R("span", Uf, " / " + B(s.formatTime(r.media.duration)), 1)]), ie(c, { class: "tify-player-select -rate", alignment: "center", position: "top", shortcut: "r" }, { button: Ye(() => [R("span", Wf, B(t.$translate("Playback rate")), 1), ie(u), r.media.rate !== 1 ? (E(), A("span", jf, B(r.media.rate.toLocaleString(t.$store.options.language)) + "x ", 1)) : J("", true)]), default: Ye(() => [R("h3", Gf, B(t.$translate("Playback rate")), 1), R("ol", qf, [(E(true), A(ue, null, Ce(r.rates, (T) => (E(), A("li", { key: T }, [R("button", { type: "button", "aria-pressed": T === r.media.rate, onClick: (C) => r.media.rate = T }, B(T === 1 ? t.$translate("Normal") : `${T.toLocaleString(t.$store.options.language)}x`), 9, Zf)]))), 128))])]), _: 1 }), s.subtitles.length ? (E(), le(c, { key: 0, class: "tify-player-select -captions", alignment: "center", position: "top", shortcut: "c" }, { button: Ye(() => [R("span", Kf, B(t.$translate("Closed Captions")), 1), r.currentSubtitle ? (E(), le(h, { key: 0 })) : (E(), le(f, { key: 1 }))]), default: Ye(() => [R("h3", Xf, B(t.$translate("Closed Captions")), 1), R("ol", Yf, [(E(true), A(ue, null, Ce(s.subtitles, (T) => (E(), A("li", { key: T.id }, [R("button", { type: "button", "aria-pressed": T === r.currentSubtitle, onClick: (C) => r.currentSubtitle = T }, B(t.$store.localize(T.label) || T.language), 9, Jf)]))), 128)), R("li", null, [R("button", { type: "button", "aria-pressed": !r.currentSubtitle, onClick: i[3] || (i[3] = (T) => r.currentSubtitle = null) }, B(t.$translate("None")), 9, Qf)])])]), _: 1 })) : J("", true)]), R("div", null, [R("button", { type: "button", class: "tify-player-mute", "aria-label": t.$translate("Toggle mute"), disabled: r.media.volume === 0, onClick: i[4] || (i[4] = (T) => r.media.muted = !r.media.muted) }, [r.media.muted ? (E(), le(m, { key: 0 })) : r.media.volume < 0.34 ? (E(), le(v, { key: 1 })) : r.media.volume < 0.67 ? (E(), le(y, { key: 2 })) : (E(), le(x, { key: 3 }))], 8, $f), ke(R("input", { "onUpdate:modelValue": i[5] || (i[5] = (T) => r.media.volume = T), type: "range", class: "tify-player-volume", min: "0", max: "1", step: "0.01", "aria-label": t.$translate("Volume"), style: Rt(`--value: ${r.media.volume * 100}%`), onInput: i[6] || (i[6] = (T) => r.media.muted = r.media.volume === 0) }, null, 44, ep), [[Gi, r.media.volume, void 0, { number: true }]])])])], 34);
  }
  var ip = $(Hf, [["render", tp]]);
  var np = {};
  var sp = { class: "tify-icon -chevron-right", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function rp(t, i) {
    return E(), A("svg", sp, [...i[0] || (i[0] = [R("path", { d: "M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" }, null, -1)])]);
  }
  var Po = $(np, [["render", rp]]);
  var op = {};
  var ap = { class: "tify-icon -chevron-left", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function lp(t, i) {
    return E(), A("svg", ap, [...i[0] || (i[0] = [R("path", { d: "M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z" }, null, -1)])]);
  }
  var Ro = $(op, [["render", lp]]);
  var up = {};
  var cp = { class: "tify-icon -layers-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function hp(t, i) {
    return E(), A("svg", cp, [...i[0] || (i[0] = [R("path", { d: "M12,18.54L19.37,12.8L21,14.07L12,21.07L3,14.07L4.62,12.81L12,18.54M12,16L3,9L12,2L21,9L12,16M12,4.53L6.26,9L12,13.47L17.74,9L12,4.53Z" }, null, -1)])]);
  }
  var dp = $(up, [["render", hp]]);
  var fp = {};
  var pp = { class: "tify-icon -comment-off-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gp(t, i) {
    return E(), A("svg", pp, [...i[0] || (i[0] = [R("path", { d: "M7.2 4L5.2 2H20C21.11 2 22 2.9 22 4V16C22 16.76 21.57 17.41 20.95 17.75L19.2 16H20V4H7.2M22.11 21.46L20.84 22.73L16.11 18H13.9L10.2 21.71C10 21.9 9.75 22 9.5 22H9C8.45 22 8 21.55 8 21V18H4C2.9 18 2 17.11 2 16V4C2 3.97 2 3.93 2 3.9L1.11 3L2.39 1.73L22.11 21.46M14.11 16L4 5.89V16H10V19.08L13.08 16H14.11Z" }, null, -1)])]);
  }
  var mp = $(fp, [["render", gp]]);
  var vp = {};
  var yp = { class: "tify-icon -comment-text-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function wp(t, i) {
    return E(), A("svg", yp, [...i[0] || (i[0] = [R("path", { d: "M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10M6,7H18V9H6V7M6,11H15V13H6V11Z" }, null, -1)])]);
  }
  var _p = $(vp, [["render", wp]]);
  var Tp = {};
  var xp = { class: "tify-icon -backup-restore", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function bp(t, i) {
    return E(), A("svg", xp, [...i[0] || (i[0] = [R("path", { d: "M12,3A9,9 0 0,0 3,12H0L4,16L8,12H5A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19C10.5,19 9.09,18.5 7.94,17.7L6.5,19.14C8.04,20.3 9.94,21 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M14,12A2,2 0 0,0 12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12Z" }, null, -1)])]);
  }
  var Ep = $(Tp, [["render", bp]]);
  var Cp = {};
  var Sp = { class: "tify-icon -palette-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Pp(t, i) {
    return E(), A("svg", Sp, [...i[0] || (i[0] = [R("path", { d: "M12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2C17.5,2 22,6 22,11A6,6 0 0,1 16,17H14.2C13.9,17 13.7,17.2 13.7,17.5C13.7,17.6 13.8,17.7 13.8,17.8C14.2,18.3 14.4,18.9 14.4,19.5C14.5,20.9 13.4,22 12,22M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C12.3,20 12.5,19.8 12.5,19.5C12.5,19.3 12.4,19.2 12.4,19.1C12,18.6 11.8,18.1 11.8,17.5C11.8,16.1 12.9,15 14.3,15H16A4,4 0 0,0 20,11C20,7.1 16.4,4 12,4M6.5,10C7.3,10 8,10.7 8,11.5C8,12.3 7.3,13 6.5,13C5.7,13 5,12.3 5,11.5C5,10.7 5.7,10 6.5,10M9.5,6C10.3,6 11,6.7 11,7.5C11,8.3 10.3,9 9.5,9C8.7,9 8,8.3 8,7.5C8,6.7 8.7,6 9.5,6M14.5,6C15.3,6 16,6.7 16,7.5C16,8.3 15.3,9 14.5,9C13.7,9 13,8.3 13,7.5C13,6.7 13.7,6 14.5,6M17.5,10C18.3,10 19,10.7 19,11.5C19,12.3 18.3,13 17.5,13C16.7,13 16,12.3 16,11.5C16,10.7 16.7,10 17.5,10Z" }, null, -1)])]);
  }
  var Rp = $(Cp, [["render", Pp]]);
  var Dp = {};
  var Ap = { class: "tify-icon -circle-half-full", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Lp(t, i) {
    return E(), A("svg", Ap, [...i[0] || (i[0] = [R("path", { d: "M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 4A8 8 0 0 1 20 12A8 8 0 0 1 12 20V4Z" }, null, -1)])]);
  }
  var Ip = $(Dp, [["render", Lp]]);
  var Mp = {};
  var Hp = { class: "tify-icon -lightbulb-on-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Op(t, i) {
    return E(), A("svg", Hp, [...i[0] || (i[0] = [R("path", { d: "M20,11H23V13H20V11M1,11H4V13H1V11M13,1V4H11V1H13M4.92,3.5L7.05,5.64L5.63,7.05L3.5,4.93L4.92,3.5M16.95,5.63L19.07,3.5L20.5,4.93L18.37,7.05L16.95,5.63M12,6A6,6 0 0,1 18,12C18,14.22 16.79,16.16 15,17.2V19A1,1 0 0,1 14,20H10A1,1 0 0,1 9,19V17.2C7.21,16.16 6,14.22 6,12A6,6 0 0,1 12,6M14,21V22A1,1 0 0,1 13,23H11A1,1 0 0,1 10,22V21H14M11,18H13V15.87C14.73,15.43 16,13.86 16,12A4,4 0 0,0 12,8A4,4 0 0,0 8,12C8,13.86 9.27,15.43 11,15.87V18Z" }, null, -1)])]);
  }
  var Fp = $(Mp, [["render", Op]]);
  var kp = { emits: ["update"], computed: { saturation() {
    const t = this.$store.options.filters.saturate;
    return typeof t == "number" ? t : 1;
  } } };
  var Bp = ["value"];
  var Vp = ["value"];
  var zp = ["value"];
  function Np(t, i, e, n, r, s) {
    const o = Fp, l = Ip, a = Rp;
    return E(), A(ue, null, [R("p", null, [R("label", null, [ie(o), Ge(" " + B(t.$translate("Brightness")) + " ", 1), R("b", null, B(Math.round((t.$store.options.filters.brightness || 1) * 100)) + "\xA0%", 1), R("input", { ref: "firstSlider", max: "2", min: ".5", step: ".01", type: "range", value: t.$store.options.filters.brightness || 1, style: Rt(`--value: ${((t.$store.options.filters.brightness || 1) - 0.5) * 0.66667 * 100}%`), onInput: i[0] || (i[0] = (u) => t.$emit("update", "brightness", u)) }, null, 44, Bp)])]), R("p", null, [R("label", null, [ie(l), Ge(" " + B(t.$translate("Contrast")) + " ", 1), R("b", null, B(Math.round((t.$store.options.filters.contrast || 1) * 100)) + "\xA0%", 1), R("input", { max: "2", min: ".5", step: ".01", type: "range", value: t.$store.options.filters.contrast || 1, style: Rt(`--value: ${((t.$store.options.filters.contrast || 1) - 0.5) * 0.66667 * 100}%`), onInput: i[1] || (i[1] = (u) => t.$emit("update", "contrast", u)) }, null, 44, Vp)])]), R("p", null, [R("label", null, [ie(a), Ge(" " + B(t.$translate("Saturation")) + " ", 1), R("b", null, B(Math.round(s.saturation * 100)) + "\xA0%", 1), R("input", { max: "3", min: "0", step: ".01", type: "range", value: s.saturation, style: Rt(`--value: ${s.saturation / 3 * 100}%`), onInput: i[2] || (i[2] = (u) => t.$emit("update", "saturate", u)) }, null, 44, zp)])])], 64);
  }
  var Up = $(kp, [["render", Np]]);
  var Wp = {};
  var jp = { class: "tify-icon -tune", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gp(t, i) {
    return E(), A("svg", jp, [...i[0] || (i[0] = [R("path", { d: "M3,17V19H9V17H3M3,5V7H13V5H3M13,21V19H21V17H13V15H11V21H13M7,9V11H3V13H7V15H9V9H7M21,13V11H11V13H21M15,9H17V7H21V5H17V3H15V9Z" }, null, -1)])]);
  }
  var qp = $(Wp, [["render", Gp]]);
  var Zp = {};
  var Kp = { class: "tify-icon -rotate-right", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xp(t, i) {
    return E(), A("svg", Kp, [...i[0] || (i[0] = [R("path", { d: "M16.89,15.5L18.31,16.89C19.21,15.73 19.76,14.39 19.93,13H17.91C17.77,13.87 17.43,14.72 16.89,15.5M13,17.9V19.92C14.39,19.75 15.74,19.21 16.9,18.31L15.46,16.87C14.71,17.41 13.87,17.76 13,17.9M19.93,11C19.76,9.61 19.21,8.27 18.31,7.11L16.89,8.53C17.43,9.28 17.77,10.13 17.91,11M15.55,5.55L11,1V4.07C7.06,4.56 4,7.92 4,12C4,16.08 7.05,19.44 11,19.93V17.91C8.16,17.43 6,14.97 6,12C6,9.03 8.16,6.57 11,6.09V10L15.55,5.55Z" }, null, -1)])]);
  }
  var Yp = $(Zp, [["render", Xp]]);
  var Jp = {};
  var Qp = { class: "tify-icon -aspect-ratio", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function $p(t, i) {
    return E(), A("svg", Qp, [...i[0] || (i[0] = [R("path", { d: "M19,12H17V15H14V17H19V12M7,9H10V7H5V12H7V9M21,3H3A2,2 0 0,0 1,5V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V5A2,2 0 0,0 21,3M21,19H3V5H21V19Z" }, null, -1)])]);
  }
  var eg = $(Jp, [["render", $p]]);
  var Mi = { exports: {} };
  var tg = Mi.exports;
  var er;
  function ig() {
    return er || (er = 1, (function(t) {
      function i(e) {
        return new i.Viewer(e);
      }
      (function(e) {
        e.version = { versionStr: "5.0.1", major: parseInt("5", 10), minor: parseInt("0", 10), revision: parseInt("1", 10) };
        var n = { "[object Boolean]": "boolean", "[object Number]": "number", "[object String]": "string", "[object Function]": "function", "[object AsyncFunction]": "function", "[object Promise]": "promise", "[object Array]": "array", "[object Date]": "date", "[object RegExp]": "regexp", "[object Object]": "object" }, r = Object.prototype.toString, s = Object.prototype.hasOwnProperty;
        e.isFunction = function(o) {
          return e.type(o) === "function";
        }, e.isArray = Array.isArray || function(o) {
          return e.type(o) === "array";
        }, e.isWindow = function(o) {
          return o && typeof o == "object" && "setInterval" in o;
        }, e.type = function(o) {
          return o == null ? String(o) : n[r.call(o)] || "object";
        }, e.isPlainObject = function(o) {
          if (!o || i.type(o) !== "object" || o.nodeType || e.isWindow(o) || o.constructor && !s.call(o, "constructor") && !s.call(o.constructor.prototype, "isPrototypeOf")) return false;
          var l;
          for (var a in o) l = a;
          return l === void 0 || s.call(o, l);
        }, e.isEmptyObject = function(o) {
          for (var l in o) return false;
          return true;
        }, e.freezeObject = function(o) {
          return Object.freeze ? e.freezeObject = Object.freeze : e.freezeObject = function(l) {
            return l;
          }, e.freezeObject(o);
        }, e.supportsCanvas = (function() {
          var o = document.createElement("canvas");
          return !!(e.isFunction(o.getContext) && o.getContext("2d"));
        })(), e.isCanvasTainted = function(o) {
          var l = false;
          try {
            o.getContext("2d").getImageData(0, 0, 1, 1);
          } catch {
            l = true;
          }
          return l;
        }, e.supportsAddEventListener = (function() {
          return !!(document.documentElement.addEventListener && document.addEventListener);
        })(), e.supportsRemoveEventListener = (function() {
          return !!(document.documentElement.removeEventListener && document.removeEventListener);
        })(), e.supportsEventListenerOptions = (function() {
          var o = 0;
          if (e.supportsAddEventListener) try {
            var l = { get capture() {
              return o++, false;
            }, get once() {
              return o++, false;
            }, get passive() {
              return o++, false;
            } };
            window.addEventListener("test", null, l), window.removeEventListener("test", null, l);
          } catch {
            o = 0;
          }
          return o >= 3;
        })(), e.getCurrentPixelDensityRatio = function() {
          if (e.supportsCanvas) {
            var o = document.createElement("canvas").getContext("2d"), l = window.devicePixelRatio || 1, a = o.webkitBackingStorePixelRatio || o.mozBackingStorePixelRatio || o.msBackingStorePixelRatio || o.oBackingStorePixelRatio || o.backingStorePixelRatio || 1;
            return Math.max(l, 1) / a;
          } else return 1;
        }, e.pixelDensityRatio = e.getCurrentPixelDensityRatio();
      })(i), (function(e) {
        e.extend = function() {
          var a, u, c, h, f, m, v = arguments[0] || {}, y = arguments.length, x = false, T = 1;
          for (typeof v == "boolean" && (x = v, v = arguments[1] || {}, T = 2), typeof v != "object" && !i.isFunction(v) && (v = {}), y === T && (v = this, --T); T < y; T++) if (a = arguments[T], a !== null || a !== void 0) for (u in a) {
            var C = Object.getOwnPropertyDescriptor(a, u);
            if (C !== void 0) {
              if (C.get || C.set) {
                Object.defineProperty(v, u, C);
                continue;
              }
              h = C.value;
            } else {
              e.console.warn('Could not copy inherited property "' + u + '".');
              continue;
            }
            v !== h && (x && h && (i.isPlainObject(h) || (f = i.isArray(h))) ? (c = v[u], f ? (f = false, m = c && i.isArray(c) ? c : []) : m = c && i.isPlainObject(c) ? c : {}, v[u] = i.extend(x, m, h)) : h !== void 0 && (v[u] = h));
          }
          return v;
        };
        var n = function() {
          if (typeof navigator != "object") return false;
          var a = navigator.userAgent;
          return typeof a != "string" ? false : a.indexOf("iPhone") !== -1 || a.indexOf("iPad") !== -1 || a.indexOf("iPod") !== -1;
        };
        e.extend(e, { DEFAULT_SETTINGS: { xmlPath: null, tileSources: null, tileHost: null, initialPage: 0, crossOriginPolicy: false, ajaxWithCredentials: false, loadTilesWithAjax: false, ajaxHeaders: {}, splitHashDataForPost: false, panHorizontal: true, panVertical: true, constrainDuringPan: false, wrapHorizontal: false, wrapVertical: false, visibilityRatio: 0.5, minPixelRatio: 0.5, defaultZoomLevel: 0, minZoomLevel: null, maxZoomLevel: null, homeFillsViewer: false, clickTimeThreshold: 300, clickDistThreshold: 5, dblClickTimeThreshold: 300, dblClickDistThreshold: 20, springStiffness: 6.5, animationTime: 1.2, gestureSettingsMouse: { dragToPan: true, scrollToZoom: true, clickToZoom: true, dblClickToZoom: false, dblClickDragToZoom: false, pinchToZoom: false, zoomToRefPoint: true, flickEnabled: false, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsTouch: { dragToPan: true, scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dblClickDragToZoom: true, pinchToZoom: true, zoomToRefPoint: true, flickEnabled: true, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsPen: { dragToPan: true, scrollToZoom: false, clickToZoom: true, dblClickToZoom: false, dblClickDragToZoom: false, pinchToZoom: false, zoomToRefPoint: true, flickEnabled: false, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, gestureSettingsUnknown: { dragToPan: true, scrollToZoom: false, clickToZoom: false, dblClickToZoom: true, dblClickDragToZoom: false, pinchToZoom: true, zoomToRefPoint: true, flickEnabled: true, flickMinSpeed: 120, flickMomentum: 0.25, pinchRotate: false }, zoomPerClick: 2, zoomPerScroll: 1.2, zoomPerDblClickDrag: 1.2, zoomPerSecond: 1, blendTime: 0, alwaysBlend: false, autoHideControls: true, immediateRender: false, minZoomImageRatio: 0.9, maxZoomPixelRatio: 1.1, smoothTileEdgesMinZoom: 1.1, iOSDevice: n(), pixelsPerWheelLine: 40, pixelsPerArrowPress: 40, autoResize: true, preserveImageSizeOnResize: false, minScrollDeltaTime: 50, rotationIncrement: 90, maxTilesPerFrame: 1, showSequenceControl: true, sequenceControlAnchor: null, preserveViewport: false, preserveOverlays: false, navPrevNextWrap: false, showNavigationControl: true, navigationControlAnchor: null, showZoomControl: true, showHomeControl: true, showFullPageControl: true, showRotationControl: false, showFlipControl: false, controlsFadeDelay: 2e3, controlsFadeLength: 1500, mouseNavEnabled: true, showNavigator: false, navigatorElement: null, navigatorId: null, navigatorPosition: null, navigatorSizeRatio: 0.2, navigatorMaintainSizeRatio: false, navigatorTop: null, navigatorLeft: null, navigatorHeight: null, navigatorWidth: null, navigatorAutoResize: true, navigatorAutoFade: true, navigatorRotate: true, navigatorBackground: "#000", navigatorOpacity: 0.8, navigatorBorderColor: "#555", navigatorDisplayRegionColor: "#900", degrees: 0, flipped: false, overlayPreserveContentDirection: true, opacity: 1, compositeOperation: null, drawer: ["webgl", "canvas", "html"], drawerOptions: { webgl: {}, canvas: {}, html: {}, custom: {} }, preload: false, imageSmoothingEnabled: true, placeholderFillStyle: null, subPixelRoundingForTransparency: null, showReferenceStrip: false, referenceStripScroll: "horizontal", referenceStripElement: null, referenceStripHeight: null, referenceStripWidth: null, referenceStripPosition: "BOTTOM_LEFT", referenceStripSizeRatio: 0.2, collectionRows: 3, collectionColumns: 0, collectionLayout: "horizontal", collectionMode: false, collectionTileSize: 800, collectionTileMargin: 80, imageLoaderLimit: 0, maxImageCacheCount: 200, timeout: 3e4, tileRetryMax: 0, tileRetryDelay: 2500, prefixUrl: "/images/", navImages: { zoomIn: { REST: "zoomin_rest.png", GROUP: "zoomin_grouphover.png", HOVER: "zoomin_hover.png", DOWN: "zoomin_pressed.png" }, zoomOut: { REST: "zoomout_rest.png", GROUP: "zoomout_grouphover.png", HOVER: "zoomout_hover.png", DOWN: "zoomout_pressed.png" }, home: { REST: "home_rest.png", GROUP: "home_grouphover.png", HOVER: "home_hover.png", DOWN: "home_pressed.png" }, fullpage: { REST: "fullpage_rest.png", GROUP: "fullpage_grouphover.png", HOVER: "fullpage_hover.png", DOWN: "fullpage_pressed.png" }, rotateleft: { REST: "rotateleft_rest.png", GROUP: "rotateleft_grouphover.png", HOVER: "rotateleft_hover.png", DOWN: "rotateleft_pressed.png" }, rotateright: { REST: "rotateright_rest.png", GROUP: "rotateright_grouphover.png", HOVER: "rotateright_hover.png", DOWN: "rotateright_pressed.png" }, flip: { REST: "flip_rest.png", GROUP: "flip_grouphover.png", HOVER: "flip_hover.png", DOWN: "flip_pressed.png" }, previous: { REST: "previous_rest.png", GROUP: "previous_grouphover.png", HOVER: "previous_hover.png", DOWN: "previous_pressed.png" }, next: { REST: "next_rest.png", GROUP: "next_grouphover.png", HOVER: "next_hover.png", DOWN: "next_pressed.png" } }, debugMode: false, debugGridColor: ["#437AB2", "#1B9E77", "#D95F02", "#7570B3", "#E7298A", "#66A61E", "#E6AB02", "#A6761D", "#666666"], silenceMultiImageWarnings: false }, delegate: function(a, u) {
          return function() {
            var c = arguments;
            return c === void 0 && (c = []), u.apply(a, c);
          };
        }, BROWSERS: { UNKNOWN: 0, IE: 1, FIREFOX: 2, SAFARI: 3, CHROME: 4, OPERA: 5, EDGE: 6, CHROMEEDGE: 7 }, SUBPIXEL_ROUNDING_OCCURRENCES: { NEVER: 0, ONLY_AT_REST: 1, ALWAYS: 2 }, _viewers: /* @__PURE__ */ new Map(), getViewer: function(a) {
          return e._viewers.get(this.getElement(a));
        }, getElement: function(a) {
          return typeof a == "string" && (a = document.getElementById(a)), a;
        }, getElementPosition: function(a) {
          var u = new e.Point(), c, h;
          for (a = e.getElement(a), c = e.getElementStyle(a).position === "fixed", h = l(a, c); h; ) u.x += a.offsetLeft, u.y += a.offsetTop, c && (u = u.plus(e.getPageScroll())), a = h, c = e.getElementStyle(a).position === "fixed", h = l(a, c);
          return u;
        }, getElementOffset: function(a) {
          a = e.getElement(a);
          var u = a && a.ownerDocument, c, h, f = { top: 0, left: 0 };
          return u ? (c = u.documentElement, typeof a.getBoundingClientRect < "u" && (f = a.getBoundingClientRect()), h = u === u.window ? u : u.nodeType === 9 ? u.defaultView || u.parentWindow : false, new e.Point(f.left + (h.pageXOffset || c.scrollLeft) - (c.clientLeft || 0), f.top + (h.pageYOffset || c.scrollTop) - (c.clientTop || 0))) : new e.Point();
        }, getElementSize: function(a) {
          return a = e.getElement(a), new e.Point(a.clientWidth, a.clientHeight);
        }, getElementStyle: document.documentElement.currentStyle ? function(a) {
          return a = e.getElement(a), a.currentStyle;
        } : function(a) {
          return a = e.getElement(a), window.getComputedStyle(a, "");
        }, getCssPropertyWithVendorPrefix: function(a) {
          var u = {};
          return e.getCssPropertyWithVendorPrefix = function(c) {
            if (u[c] !== void 0) return u[c];
            var h = document.createElement("div").style, f = null;
            if (h[c] !== void 0) f = c;
            else for (var m = ["Webkit", "Moz", "MS", "O", "webkit", "moz", "ms", "o"], v = e.capitalizeFirstLetter(c), y = 0; y < m.length; y++) {
              var x = m[y] + v;
              if (h[x] !== void 0) {
                f = x;
                break;
              }
            }
            return u[c] = f, f;
          }, e.getCssPropertyWithVendorPrefix(a);
        }, capitalizeFirstLetter: function(a) {
          return a.charAt(0).toUpperCase() + a.slice(1);
        }, positiveModulo: function(a, u) {
          var c = a % u;
          return c < 0 && (c += u), c;
        }, pointInElement: function(a, u) {
          a = e.getElement(a);
          var c = e.getElementOffset(a), h = e.getElementSize(a);
          return u.x >= c.x && u.x < c.x + h.x && u.y < c.y + h.y && u.y >= c.y;
        }, getMousePosition: function(a) {
          if (typeof a.pageX == "number") e.getMousePosition = function(u) {
            var c = new e.Point();
            return c.x = u.pageX, c.y = u.pageY, c;
          };
          else if (typeof a.clientX == "number") e.getMousePosition = function(u) {
            var c = new e.Point();
            return c.x = u.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, c.y = u.clientY + document.body.scrollTop + document.documentElement.scrollTop, c;
          };
          else throw new Error("Unknown event mouse position, no known technique.");
          return e.getMousePosition(a);
        }, getPageScroll: function() {
          var a = document.documentElement || {}, u = document.body || {};
          if (typeof window.pageXOffset == "number") e.getPageScroll = function() {
            return new e.Point(window.pageXOffset, window.pageYOffset);
          };
          else if (u.scrollLeft || u.scrollTop) e.getPageScroll = function() {
            return new e.Point(document.body.scrollLeft, document.body.scrollTop);
          };
          else if (a.scrollLeft || a.scrollTop) e.getPageScroll = function() {
            return new e.Point(document.documentElement.scrollLeft, document.documentElement.scrollTop);
          };
          else return new e.Point(0, 0);
          return e.getPageScroll();
        }, setPageScroll: function(a) {
          if (typeof window.scrollTo < "u") e.setPageScroll = function(h) {
            window.scrollTo(h.x, h.y);
          };
          else {
            var u = e.getPageScroll();
            if (u.x === a.x && u.y === a.y) return;
            document.body.scrollLeft = a.x, document.body.scrollTop = a.y;
            var c = e.getPageScroll();
            if (c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.body.scrollLeft = h.x, document.body.scrollTop = h.y;
              };
              return;
            }
            if (document.documentElement.scrollLeft = a.x, document.documentElement.scrollTop = a.y, c = e.getPageScroll(), c.x !== u.x && c.y !== u.y) {
              e.setPageScroll = function(h) {
                document.documentElement.scrollLeft = h.x, document.documentElement.scrollTop = h.y;
              };
              return;
            }
            e.setPageScroll = function(h) {
            };
          }
          e.setPageScroll(a);
        }, getWindowSize: function() {
          var a = document.documentElement || {}, u = document.body || {};
          if (typeof window.innerWidth == "number") e.getWindowSize = function() {
            return new e.Point(window.innerWidth, window.innerHeight);
          };
          else if (a.clientWidth || a.clientHeight) e.getWindowSize = function() {
            return new e.Point(document.documentElement.clientWidth, document.documentElement.clientHeight);
          };
          else if (u.clientWidth || u.clientHeight) e.getWindowSize = function() {
            return new e.Point(document.body.clientWidth, document.body.clientHeight);
          };
          else throw new Error("Unknown window size, no known technique.");
          return e.getWindowSize();
        }, makeCenteredNode: function(a) {
          a = e.getElement(a);
          var u = [e.makeNeutralElement("div"), e.makeNeutralElement("div"), e.makeNeutralElement("div")];
          return e.extend(u[0].style, { display: "table", height: "100%", width: "100%" }), e.extend(u[1].style, { display: "table-row" }), e.extend(u[2].style, { display: "table-cell", verticalAlign: "middle", textAlign: "center" }), u[0].appendChild(u[1]), u[1].appendChild(u[2]), u[2].appendChild(a), u[0];
        }, makeNeutralElement: function(a) {
          var u = document.createElement(a), c = u.style;
          return c.background = "transparent none", c.border = "none", c.margin = "0px", c.padding = "0px", c.position = "static", u;
        }, now: function() {
          return Date.now ? e.now = Date.now : e.now = function() {
            return (/* @__PURE__ */ new Date()).getTime();
          }, e.now();
        }, makeTransparentImage: function(a) {
          var u = e.makeNeutralElement("img");
          return u.src = a, u;
        }, setElementOpacity: function(a, u, c) {
          var h, f;
          a = e.getElement(a), c && !e.Browser.alpha && (u = Math.round(u)), e.Browser.opacity ? a.style.opacity = u < 1 ? u : "" : u < 1 ? (h = Math.round(100 * u), f = "alpha(opacity=" + h + ")", a.style.filter = f) : a.style.filter = "";
        }, setElementTouchActionNone: function(a) {
          a = e.getElement(a), typeof a.style.touchAction < "u" ? a.style.touchAction = "none" : typeof a.style.msTouchAction < "u" && (a.style.msTouchAction = "none");
        }, setElementPointerEvents: function(a, u) {
          a = e.getElement(a), typeof a.style < "u" && typeof a.style.pointerEvents < "u" && (a.style.pointerEvents = u);
        }, setElementPointerEventsNone: function(a) {
          e.setElementPointerEvents(a, "none");
        }, addClass: function(a, u) {
          a = e.getElement(a), a.className ? (" " + a.className + " ").indexOf(" " + u + " ") === -1 && (a.className += " " + u) : a.className = u;
        }, indexOf: function(a, u, c) {
          return Array.prototype.indexOf ? this.indexOf = function(h, f, m) {
            return h.indexOf(f, m);
          } : this.indexOf = function(h, f, m) {
            var v, y = m || 0, x;
            if (!h) throw new TypeError();
            if (x = h.length, x === 0 || y >= x) return -1;
            for (y < 0 && (y = x - Math.abs(y)), v = y; v < x; v++) if (h[v] === f) return v;
            return -1;
          }, this.indexOf(a, u, c);
        }, removeClass: function(a, u) {
          var c, h = [], f;
          for (a = e.getElement(a), c = a.className.split(/\s+/), f = 0; f < c.length; f++) c[f] && c[f] !== u && h.push(c[f]);
          a.className = h.join(" ");
        }, normalizeEventListenerOptions: function(a) {
          var u;
          return typeof a < "u" ? typeof a == "boolean" ? u = e.supportsEventListenerOptions ? { capture: a } : a : u = e.supportsEventListenerOptions ? a : typeof a.capture < "u" ? a.capture : false : u = e.supportsEventListenerOptions ? { capture: false } : false, u;
        }, addEvent: (function() {
          if (e.supportsAddEventListener) return function(a, u, c, h) {
            h = e.normalizeEventListenerOptions(h), a = e.getElement(a), a.addEventListener(u, c, h);
          };
          if (document.documentElement.attachEvent && document.attachEvent) return function(a, u, c) {
            a = e.getElement(a), a.attachEvent("on" + u, c);
          };
          throw new Error("No known event model.");
        })(), removeEvent: (function() {
          if (e.supportsRemoveEventListener) return function(a, u, c, h) {
            h = e.normalizeEventListenerOptions(h), a = e.getElement(a), a.removeEventListener(u, c, h);
          };
          if (document.documentElement.detachEvent && document.detachEvent) return function(a, u, c) {
            a = e.getElement(a), a.detachEvent("on" + u, c);
          };
          throw new Error("No known event model.");
        })(), cancelEvent: function(a) {
          a.preventDefault();
        }, eventIsCanceled: function(a) {
          return a.defaultPrevented;
        }, stopEvent: function(a) {
          a.stopPropagation();
        }, createCallback: function(a, u) {
          console.error("The createCallback function is deprecated and will be removed in future versions. Please use alternativeFunction instead.");
          var c = [], h;
          for (h = 2; h < arguments.length; h++) c.push(arguments[h]);
          return function() {
            var f = c.concat([]), m;
            for (m = 0; m < arguments.length; m++) f.push(arguments[m]);
            return u.apply(a, f);
          };
        }, getUrlParameter: function(a) {
          var u = o[a];
          return u || null;
        }, getUrlProtocol: function(a) {
          var u = a.match(/^([a-z]+:)\/\//i);
          return u === null ? window.location.protocol : u[1].toLowerCase();
        }, createAjaxRequest: function() {
          if (window.XMLHttpRequest) return e.createAjaxRequest = function() {
            return new XMLHttpRequest();
          }, new XMLHttpRequest();
          throw new Error("Browser doesn't support XMLHttpRequest.");
        }, makeAjaxRequest: function(a, u, c) {
          var h, f, m, v;
          e.isPlainObject(a) && (u = a.success, c = a.error, h = a.withCredentials, f = a.headers, m = a.responseType || null, v = a.postData || null, a = a.url);
          var y = e.getUrlProtocol(a), x = e.createAjaxRequest();
          if (!e.isFunction(u)) throw new Error("makeAjaxRequest requires a success callback");
          x.onreadystatechange = function() {
            x.readyState === 4 && (x.onreadystatechange = function() {
            }, x.status >= 200 && x.status < 300 || x.status === 0 && y !== "http:" && y !== "https:" ? u(x) : e.isFunction(c) ? c(x) : e.console.error("AJAX request returned %d: %s", x.status, a));
          };
          var T = v ? "POST" : "GET";
          try {
            if (x.open(T, a, true), m && (x.responseType = m), f) for (var C in f) Object.prototype.hasOwnProperty.call(f, C) && f[C] && x.setRequestHeader(C, f[C]);
            h && (x.withCredentials = true), x.send(v);
          } catch (H) {
            e.console.error("%s while making AJAX request: %s", H.name, H.message), x.onreadystatechange = function() {
            }, e.isFunction(c) && c(x, H);
          }
          return x;
        }, jsonp: function(a) {
          var u, c = a.url, h = document.head || document.getElementsByTagName("head")[0] || document.documentElement, f = a.callbackName || "openseadragon" + e.now(), m = window[f], v = "$1" + f + "$2", y = a.param || "callback", x = a.callback;
          c = c.replace(/(=)\?(&|$)|\?\?/i, v), c += (/\?/.test(c) ? "&" : "?") + y + "=" + f, window[f] = function(T) {
            if (m) window[f] = m;
            else try {
              delete window[f];
            } catch {
            }
            x && e.isFunction(x) && x(T);
          }, u = document.createElement("script"), (a.async !== void 0 || a.async !== false) && (u.async = "async"), a.scriptCharset && (u.charset = a.scriptCharset), u.src = c, u.onload = u.onreadystatechange = function(T, C) {
            (C || !u.readyState || /loaded|complete/.test(u.readyState)) && (u.onload = u.onreadystatechange = null, h && u.parentNode && h.removeChild(u), u = void 0);
          }, h.insertBefore(u, h.firstChild);
        }, createFromDZI: function() {
          throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
        }, parseXml: function(a) {
          if (window.DOMParser) e.parseXml = function(u) {
            var c = null, h;
            return h = new DOMParser(), c = h.parseFromString(u, "text/xml"), c;
          };
          else throw new Error("Browser doesn't support XML DOM.");
          return e.parseXml(a);
        }, parseJSON: function(a) {
          return e.parseJSON = window.JSON.parse, e.parseJSON(a);
        }, imageFormatSupported: function(a) {
          return a = a || "", !!s[a.toLowerCase()];
        }, setImageFormatsSupported: function(a) {
          e.extend(s, a);
        } });
        var r = function(a) {
        };
        e.console = window.console || { log: r, debug: r, info: r, warn: r, error: r, assert: r }, e.Browser = { vendor: e.BROWSERS.UNKNOWN, version: 0, alpha: true };
        var s = { avif: true, bmp: false, jpeg: true, jpg: true, png: true, tif: false, wdp: false, webp: true }, o = {};
        (function() {
          var a = navigator.appVersion, u = navigator.userAgent, c;
          switch (navigator.appName) {
            case "Microsoft Internet Explorer":
              window.attachEvent && window.ActiveXObject && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(u.substring(u.indexOf("MSIE") + 5, u.indexOf(";", u.indexOf("MSIE")))));
              break;
            case "Netscape":
              window.addEventListener && (u.indexOf("Edge") >= 0 ? (e.Browser.vendor = e.BROWSERS.EDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edge") + 5))) : u.indexOf("Edg") >= 0 ? (e.Browser.vendor = e.BROWSERS.CHROMEEDGE, e.Browser.version = parseFloat(u.substring(u.indexOf("Edg") + 4))) : u.indexOf("Firefox") >= 0 ? (e.Browser.vendor = e.BROWSERS.FIREFOX, e.Browser.version = parseFloat(u.substring(u.indexOf("Firefox") + 8))) : u.indexOf("Safari") >= 0 ? (e.Browser.vendor = u.indexOf("Chrome") >= 0 ? e.BROWSERS.CHROME : e.BROWSERS.SAFARI, e.Browser.version = parseFloat(u.substring(u.substring(0, u.indexOf("Safari")).lastIndexOf("/") + 1, u.indexOf("Safari")))) : (c = new RegExp("Trident/.*rv:([0-9]{1,}[.0-9]{0,})"), c.exec(u) !== null && (e.Browser.vendor = e.BROWSERS.IE, e.Browser.version = parseFloat(RegExp.$1))));
              break;
            case "Opera":
              e.Browser.vendor = e.BROWSERS.OPERA, e.Browser.version = parseFloat(a);
              break;
          }
          var h = window.location.search.substring(1), f = h.split("&"), m, v, y;
          for (y = 0; y < f.length; y++) if (m = f[y], v = m.indexOf("="), v > 0) {
            var x = m.substring(0, v), T = m.substring(v + 1);
            try {
              o[x] = decodeURIComponent(T);
            } catch {
              e.console.error("Ignoring malformed URL parameter: %s=%s", x, T);
            }
          }
          e.Browser.alpha = !(e.Browser.vendor === e.BROWSERS.CHROME && e.Browser.version < 2), e.Browser.opacity = true, e.Browser.vendor === e.BROWSERS.IE && e.console.error("Internet Explorer is not supported by OpenSeadragon");
        })(), (function(a) {
          var u = a.requestAnimationFrame || a.mozRequestAnimationFrame || a.webkitRequestAnimationFrame || a.msRequestAnimationFrame, c = a.cancelAnimationFrame || a.mozCancelAnimationFrame || a.webkitCancelAnimationFrame || a.msCancelAnimationFrame;
          if (u && c) e.requestAnimationFrame = function() {
            return u.apply(a, arguments);
          }, e.cancelAnimationFrame = function() {
            return c.apply(a, arguments);
          };
          else {
            var h = [], f = [], m = 0, v;
            e.requestAnimationFrame = function(y) {
              return h.push([++m, y]), v || (v = setInterval(function() {
                if (h.length) {
                  var x = e.now(), T = f;
                  for (f = h, h = T; f.length; ) f.shift()[1](x);
                } else clearInterval(v), v = void 0;
              }, 1e3 / 50)), m;
            }, e.cancelAnimationFrame = function(y) {
              var x, T;
              for (x = 0, T = h.length; x < T; x += 1) if (h[x][0] === y) {
                h.splice(x, 1);
                return;
              }
              for (x = 0, T = f.length; x < T; x += 1) if (f[x][0] === y) {
                f.splice(x, 1);
                return;
              }
            };
          }
        })(window);
        function l(a, u) {
          return u && a !== document.body ? document.body : a.offsetParent;
        }
      })(i), (function(e, n) {
        t.exports ? t.exports = n() : e.OpenSeadragon = n();
      })(tg, function() {
        return i;
      }), (function(e) {
        class n {
          constructor(s) {
            s || (s = [0, 0, 0, 0, 0, 0, 0, 0, 0]), this.values = s;
          }
          static makeIdentity() {
            return new n([1, 0, 0, 0, 1, 0, 0, 0, 1]);
          }
          static makeTranslation(s, o) {
            return new n([1, 0, 0, 0, 1, 0, s, o, 1]);
          }
          static makeRotation(s) {
            var o = Math.cos(s), l = Math.sin(s);
            return new n([o, -l, 0, l, o, 0, 0, 0, 1]);
          }
          static makeScaling(s, o) {
            return new n([s, 0, 0, 0, o, 0, 0, 0, 1]);
          }
          multiply(s) {
            let o = this.values, l = s.values;
            var a = o[0], u = o[1], c = o[2], h = o[3], f = o[4], m = o[5], v = o[6], y = o[7], x = o[8], T = l[0], C = l[1], H = l[2], k = l[3], N = l[4], Y = l[5], K = l[6], q = l[7], ee = l[8];
            return new n([T * a + C * h + H * v, T * u + C * f + H * y, T * c + C * m + H * x, k * a + N * h + Y * v, k * u + N * f + Y * y, k * c + N * m + Y * x, K * a + q * h + ee * v, K * u + q * f + ee * y, K * c + q * m + ee * x]);
          }
        }
        e.Mat3 = n;
      })(i), (function(e) {
        var n = { supportsFullScreen: false, isFullScreen: function() {
          return false;
        }, getFullScreenElement: function() {
          return null;
        }, requestFullScreen: function() {
        }, exitFullScreen: function() {
        }, cancelFullScreen: function() {
        }, fullScreenEventName: "", fullScreenErrorEventName: "" };
        document.exitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.fullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.requestFullscreen().catch(function(s) {
            e.console.error("Fullscreen request failed: ", s);
          });
        }, n.exitFullScreen = function() {
          document.exitFullscreen().catch(function(r) {
            e.console.error("Error while exiting fullscreen: ", r);
          });
        }, n.fullScreenEventName = "fullscreenchange", n.fullScreenErrorEventName = "fullscreenerror") : document.msExitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.msFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.msRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.msExitFullscreen();
        }, n.fullScreenEventName = "MSFullscreenChange", n.fullScreenErrorEventName = "MSFullscreenError") : document.webkitExitFullscreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.webkitFullscreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullscreen();
        }, n.exitFullScreen = function() {
          document.webkitExitFullscreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.webkitCancelFullScreen ? (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.webkitCurrentFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.webkitRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.webkitCancelFullScreen();
        }, n.fullScreenEventName = "webkitfullscreenchange", n.fullScreenErrorEventName = "webkitfullscreenerror") : document.mozCancelFullScreen && (n.supportsFullScreen = true, n.getFullScreenElement = function() {
          return document.mozFullScreenElement;
        }, n.requestFullScreen = function(r) {
          return r.mozRequestFullScreen();
        }, n.exitFullScreen = function() {
          document.mozCancelFullScreen();
        }, n.fullScreenEventName = "mozfullscreenchange", n.fullScreenErrorEventName = "mozfullscreenerror"), n.isFullScreen = function() {
          return n.getFullScreenElement() !== null;
        }, n.cancelFullScreen = function() {
          e.console.error("cancelFullScreen is deprecated. Use exitFullScreen instead."), n.exitFullScreen();
        }, e.extend(e, n);
      })(i), (function(e) {
        e.EventSource = function() {
          this.events = {}, this._rejectedEventList = {};
        }, e.EventSource.prototype = { addOnceHandler: function(n, r, s, o, l) {
          var a = this;
          o = o || 1;
          var u = 0, c = function(h) {
            return u++, u === o && a.removeHandler(n, c), r(h);
          };
          return this.addHandler(n, c, s, l);
        }, addHandler: function(n, r, s, o) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, n)) return e.console.error(`Error adding handler for ${n}. ${this._rejectedEventList[n]}`), false;
          var l = this.events[n];
          if (l || (this.events[n] = l = []), r && e.isFunction(r)) {
            var a = l.length, u = { handler: r, userData: s || null, priority: o || 0 };
            for (l[a] = u; a > 0 && l[a - 1].priority < l[a].priority; ) l[a] = l[a - 1], l[a - 1] = u, a--;
          }
          return true;
        }, removeHandler: function(n, r) {
          var s = this.events[n], o = [], l;
          if (s && e.isArray(s)) {
            for (l = 0; l < s.length; l++) s[l].handler !== r && o.push(s[l]);
            this.events[n] = o;
          }
        }, numberOfHandlers: function(n) {
          var r = this.events[n];
          return r ? r.length : 0;
        }, removeAllHandlers: function(n) {
          if (n) this.events[n] = [];
          else for (var r in this.events) this.events[r] = [];
        }, getHandler: function(n) {
          var r = this.events[n];
          return !r || !r.length ? null : (r = r.length === 1 ? [r[0]] : Array.apply(null, r), function(s, o) {
            var l, a = r.length;
            for (l = 0; l < a; l++) r[l] && (o.eventSource = s, o.userData = r[l].userData, r[l].handler(o));
          });
        }, raiseEvent: function(n, r) {
          if (Object.prototype.hasOwnProperty.call(this._rejectedEventList, n)) return e.console.error(`Error adding handler for ${n}. ${this._rejectedEventList[n]}`), false;
          var s = this.getHandler(n);
          return s && s(this, r || {}), true;
        }, rejectEventHandler(n, r = "") {
          this._rejectedEventList[n] = r;
        }, allowEventHandler(n) {
          delete this._rejectedEventList[n];
        } };
      })(i), (function(e) {
        var n = {};
        e.MouseTracker = function(g) {
          var p = arguments;
          e.isPlainObject(g) || (g = { element: p[0], clickTimeThreshold: p[1], clickDistThreshold: p[2] }), this.hash = Math.random(), this.element = e.getElement(g.element), this.clickTimeThreshold = g.clickTimeThreshold || e.DEFAULT_SETTINGS.clickTimeThreshold, this.clickDistThreshold = g.clickDistThreshold || e.DEFAULT_SETTINGS.clickDistThreshold, this.dblClickTimeThreshold = g.dblClickTimeThreshold || e.DEFAULT_SETTINGS.dblClickTimeThreshold, this.dblClickDistThreshold = g.dblClickDistThreshold || e.DEFAULT_SETTINGS.dblClickDistThreshold, this.userData = g.userData || null, this.stopDelay = g.stopDelay || 50, this.preProcessEventHandler = g.preProcessEventHandler || null, this.contextMenuHandler = g.contextMenuHandler || null, this.enterHandler = g.enterHandler || null, this.leaveHandler = g.leaveHandler || null, this.exitHandler = g.exitHandler || null, this.overHandler = g.overHandler || null, this.outHandler = g.outHandler || null, this.pressHandler = g.pressHandler || null, this.nonPrimaryPressHandler = g.nonPrimaryPressHandler || null, this.releaseHandler = g.releaseHandler || null, this.nonPrimaryReleaseHandler = g.nonPrimaryReleaseHandler || null, this.moveHandler = g.moveHandler || null, this.scrollHandler = g.scrollHandler || null, this.clickHandler = g.clickHandler || null, this.dblClickHandler = g.dblClickHandler || null, this.dragHandler = g.dragHandler || null, this.dragEndHandler = g.dragEndHandler || null, this.pinchHandler = g.pinchHandler || null, this.stopHandler = g.stopHandler || null, this.keyDownHandler = g.keyDownHandler || null, this.keyUpHandler = g.keyUpHandler || null, this.keyHandler = g.keyHandler || null, this.focusHandler = g.focusHandler || null, this.blurHandler = g.blurHandler || null;
          var _ = this;
          n[this.hash] = { click: function(b) {
            H(_, b);
          }, dblclick: function(b) {
            k(_, b);
          }, keydown: function(b) {
            N(_, b);
          }, keyup: function(b) {
            Y(_, b);
          }, keypress: function(b) {
            K(_, b);
          }, focus: function(b) {
            q(_, b);
          }, blur: function(b) {
            ee(_, b);
          }, contextmenu: function(b) {
            ce(_, b);
          }, wheel: function(b) {
            te(_, b);
          }, mousewheel: function(b) {
            j(_, b);
          }, DOMMouseScroll: function(b) {
            j(_, b);
          }, MozMousePixelScroll: function(b) {
            j(_, b);
          }, losecapture: function(b) {
            he(_, b);
          }, mouseenter: function(b) {
            ge(_, b);
          }, mouseleave: function(b) {
            Nt(_, b);
          }, mouseover: function(b) {
            Ut(_, b);
          }, mouseout: function(b) {
            nt(_, b);
          }, mousedown: function(b) {
            $e(_, b);
          }, mouseup: function(b) {
            bt(_, b);
          }, mousemove: function(b) {
            ii(_, b);
          }, touchstart: function(b) {
            ye(_, b);
          }, touchend: function(b) {
            me(_, b);
          }, touchmove: function(b) {
            pe(_, b);
          }, touchcancel: function(b) {
            ae(_, b);
          }, gesturestart: function(b) {
            Ae(_, b);
          }, gesturechange: function(b) {
            Re(_, b);
          }, gotpointercapture: function(b) {
            Qe(_, b);
          }, lostpointercapture: function(b) {
            je(_, b);
          }, pointerenter: function(b) {
            ge(_, b);
          }, pointerleave: function(b) {
            Nt(_, b);
          }, pointerover: function(b) {
            Ut(_, b);
          }, pointerout: function(b) {
            nt(_, b);
          }, pointerdown: function(b) {
            $e(_, b);
          }, pointerup: function(b) {
            bt(_, b);
          }, pointermove: function(b) {
            ii(_, b);
          }, pointercancel: function(b) {
            F(_, b);
          }, pointerupcaptured: function(b) {
            Wt(_, b);
          }, pointermovecaptured: function(b) {
            P(_, b);
          }, tracking: false, activePointersLists: [], lastClickPos: null, dblClickTimeOut: null, pinchGPoints: [], lastPinchDist: 0, currentPinchDist: 0, lastPinchCenter: null, currentPinchCenter: null, sentDragEvent: false }, this.hasGestureHandlers = !!(this.pressHandler || this.nonPrimaryPressHandler || this.releaseHandler || this.nonPrimaryReleaseHandler || this.clickHandler || this.dblClickHandler || this.dragHandler || this.dragEndHandler || this.pinchHandler), this.hasScrollHandler = !!this.scrollHandler, e.MouseTracker.havePointerEvents && e.setElementPointerEvents(this.element, "auto"), this.exitHandler && e.console.error("MouseTracker.exitHandler is deprecated. Use MouseTracker.leaveHandler instead."), g.startDisabled || this.setTracking(true);
        }, e.MouseTracker.prototype = { destroy: function() {
          a(this), this.element = null, n[this.hash] = null, delete n[this.hash];
        }, isTracking: function() {
          return n[this.hash].tracking;
        }, setTracking: function(g) {
          return g ? l(this) : a(this), this;
        }, getActivePointersListByType: function(g) {
          var p = n[this.hash], _, b = p ? p.activePointersLists.length : 0, O;
          for (_ = 0; _ < b; _++) if (p.activePointersLists[_].type === g) return p.activePointersLists[_];
          return O = new e.MouseTracker.GesturePointList(g), p && p.activePointersLists.push(O), O;
        }, getActivePointerCount: function() {
          var g = n[this.hash], p, _ = g.activePointersLists.length, b = 0;
          for (p = 0; p < _; p++) b += g.activePointersLists[p].getLength();
          return b;
        }, preProcessEventHandler: function() {
        }, contextMenuHandler: function() {
        }, enterHandler: function() {
        }, leaveHandler: function() {
        }, exitHandler: function() {
        }, overHandler: function() {
        }, outHandler: function() {
        }, pressHandler: function() {
        }, nonPrimaryPressHandler: function() {
        }, releaseHandler: function() {
        }, nonPrimaryReleaseHandler: function() {
        }, moveHandler: function() {
        }, scrollHandler: function() {
        }, clickHandler: function() {
        }, dblClickHandler: function() {
        }, dragHandler: function() {
        }, dragEndHandler: function() {
        }, pinchHandler: function() {
        }, stopHandler: function() {
        }, keyDownHandler: function() {
        }, keyUpHandler: function() {
        }, keyHandler: function() {
        }, focusHandler: function() {
        }, blurHandler: function() {
        } };
        var r = (function() {
          try {
            return window.self !== window.top;
          } catch {
            return true;
          }
        })();
        function s(g) {
          try {
            return g.addEventListener && g.removeEventListener;
          } catch {
            return false;
          }
        }
        e.MouseTracker.gesturePointVelocityTracker = /* @__PURE__ */ (function() {
          var g = [], p = 0, _ = 0, b = function(ve, re) {
            return ve.hash.toString() + re.type + re.id.toString();
          }, O = function() {
            var ve, re = g.length, Oe, Ie, jt = e.now(), ds, fs, ps;
            for (ds = jt - _, _ = jt, ve = 0; ve < re; ve++) Oe = g[ve], Ie = Oe.gPoint, Ie.direction = Math.atan2(Ie.currentPos.y - Oe.lastPos.y, Ie.currentPos.x - Oe.lastPos.x), fs = Oe.lastPos.distanceTo(Ie.currentPos), Oe.lastPos = Ie.currentPos, ps = 1e3 * fs / (ds + 1), Ie.speed = 0.75 * ps + 0.25 * Ie.speed;
          }, G = function(ve, re) {
            var Oe = b(ve, re);
            g.push({ guid: Oe, gPoint: re, lastPos: re.currentPos }), g.length === 1 && (_ = e.now(), p = window.setInterval(O, 50));
          }, Q = function(ve, re) {
            var Oe = b(ve, re), Ie, jt = g.length;
            for (Ie = 0; Ie < jt; Ie++) if (g[Ie].guid === Oe) {
              g.splice(Ie, 1), jt--, jt === 0 && window.clearInterval(p);
              break;
            }
          };
          return { addPoint: G, removePoint: Q };
        })(), e.MouseTracker.captureElement = document, e.MouseTracker.wheelEventName = "onwheel" in document.createElement("div") ? "wheel" : document.onmousewheel !== void 0 ? "mousewheel" : "DOMMouseScroll", e.MouseTracker.subscribeEvents = ["click", "dblclick", "keydown", "keyup", "keypress", "focus", "blur", "contextmenu", e.MouseTracker.wheelEventName], e.MouseTracker.wheelEventName === "DOMMouseScroll" && e.MouseTracker.subscribeEvents.push("MozMousePixelScroll"), window.PointerEvent ? (e.MouseTracker.havePointerEvents = true, e.MouseTracker.subscribeEvents.push("pointerenter", "pointerleave", "pointerover", "pointerout", "pointerdown", "pointerup", "pointermove", "pointercancel"), e.MouseTracker.havePointerCapture = (function() {
          var g = document.createElement("div");
          return e.isFunction(g.setPointerCapture) && e.isFunction(g.releasePointerCapture);
        })(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("gotpointercapture", "lostpointercapture")) : (e.MouseTracker.havePointerEvents = false, e.MouseTracker.subscribeEvents.push("mouseenter", "mouseleave", "mouseover", "mouseout", "mousedown", "mouseup", "mousemove"), e.MouseTracker.mousePointerId = "legacy-mouse", e.MouseTracker.havePointerCapture = (function() {
          var g = document.createElement("div");
          return e.isFunction(g.setCapture) && e.isFunction(g.releaseCapture);
        })(), e.MouseTracker.havePointerCapture && e.MouseTracker.subscribeEvents.push("losecapture"), "ontouchstart" in window && e.MouseTracker.subscribeEvents.push("touchstart", "touchend", "touchmove", "touchcancel"), "ongesturestart" in window && e.MouseTracker.subscribeEvents.push("gesturestart", "gesturechange")), e.MouseTracker.GesturePointList = function(g) {
          this._gPoints = [], this.type = g, this.buttons = 0, this.contacts = 0, this.clicks = 0, this.captureCount = 0;
        }, e.MouseTracker.GesturePointList.prototype = { getLength: function() {
          return this._gPoints.length;
        }, asArray: function() {
          return this._gPoints;
        }, add: function(g) {
          return this._gPoints.push(g);
        }, removeById: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].id === g) {
            this._gPoints.splice(p, 1);
            break;
          }
          return this._gPoints.length;
        }, getByIndex: function(g) {
          return g < this._gPoints.length ? this._gPoints[g] : null;
        }, getById: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].id === g) return this._gPoints[p];
          return null;
        }, getPrimary: function(g) {
          var p, _ = this._gPoints.length;
          for (p = 0; p < _; p++) if (this._gPoints[p].isPrimary) return this._gPoints[p];
          return null;
        }, addContact: function() {
          ++this.contacts, this.contacts > 1 && (this.type === "mouse" || this.type === "pen") && (e.console.warn("GesturePointList.addContact() Implausible contacts value"), this.contacts = 1);
        }, removeContact: function() {
          --this.contacts, this.contacts < 0 && (this.contacts = 0);
        } };
        function o(g) {
          var p = n[g.hash], _, b, O, G, Q, ve = p.activePointersLists.length;
          for (_ = 0; _ < ve; _++) if (O = p.activePointersLists[_], O.getLength() > 0) {
            for (Q = [], G = O.asArray(), b = 0; b < G.length; b++) Q.push(G[b]);
            for (b = 0; b < Q.length; b++) z(g, O, Q[b]);
          }
          for (_ = 0; _ < ve; _++) p.activePointersLists.pop();
          p.sentDragEvent = false;
        }
        function l(g) {
          var p = n[g.hash], _, b;
          if (!p.tracking) {
            for (b = 0; b < e.MouseTracker.subscribeEvents.length; b++) _ = e.MouseTracker.subscribeEvents[b], e.addEvent(g.element, _, p[_], _ === e.MouseTracker.wheelEventName ? { passive: false, capture: false } : false);
            o(g), p.tracking = true;
          }
        }
        function a(g) {
          var p = n[g.hash], _, b;
          if (p.tracking) {
            for (b = 0; b < e.MouseTracker.subscribeEvents.length; b++) _ = e.MouseTracker.subscribeEvents[b], e.removeEvent(g.element, _, p[_], false);
            o(g), p.tracking = false;
          }
        }
        function u(g, p) {
          var _ = n[g.hash];
          if (p === "pointerevent") return { upName: "pointerup", upHandler: _.pointerupcaptured, moveName: "pointermove", moveHandler: _.pointermovecaptured };
          if (p === "mouse") return { upName: "pointerup", upHandler: _.pointerupcaptured, moveName: "pointermove", moveHandler: _.pointermovecaptured };
          if (p === "touch") return { upName: "touchend", upHandler: _.touchendcaptured, moveName: "touchmove", moveHandler: _.touchmovecaptured };
          throw new Error("MouseTracker.getCaptureEventParams: Unknown pointer type.");
        }
        function c(g, p) {
          var _;
          if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) try {
            g.element.setPointerCapture(p.id);
          } catch {
            e.console.warn("setPointerCapture() called on invalid pointer ID");
            return;
          }
          else g.element.setCapture(true);
          else _ = u(g, e.MouseTracker.havePointerEvents ? "pointerevent" : p.type), r && s(window.top) && e.addEvent(window.top, _.upName, _.upHandler, true), e.addEvent(e.MouseTracker.captureElement, _.upName, _.upHandler, true), e.addEvent(e.MouseTracker.captureElement, _.moveName, _.moveHandler, true);
          S(g, p, true);
        }
        function h(g, p) {
          var _, b, O;
          if (e.MouseTracker.havePointerCapture) if (e.MouseTracker.havePointerEvents) {
            if (b = g.getActivePointersListByType(p.type), O = b.getById(p.id), !O || !O.captured) return;
            try {
              g.element.releasePointerCapture(p.id);
            } catch {
            }
          } else g.element.releaseCapture();
          else _ = u(g, e.MouseTracker.havePointerEvents ? "pointerevent" : p.type), r && s(window.top) && e.removeEvent(window.top, _.upName, _.upHandler, true), e.removeEvent(e.MouseTracker.captureElement, _.moveName, _.moveHandler, true), e.removeEvent(e.MouseTracker.captureElement, _.upName, _.upHandler, true);
          S(g, p, false);
        }
        function f(g) {
          return e.MouseTracker.havePointerEvents ? g.pointerId : e.MouseTracker.mousePointerId;
        }
        function m(g) {
          return e.MouseTracker.havePointerEvents && g.pointerType ? g.pointerType : "mouse";
        }
        function v(g) {
          return e.MouseTracker.havePointerEvents ? g.isPrimary : true;
        }
        function y(g) {
          return e.getMousePosition(g);
        }
        function x(g, p) {
          return T(y(g), p);
        }
        function T(g, p) {
          var _ = e.getElementOffset(p);
          return g.minus(_);
        }
        function C(g, p) {
          return new e.Point((g.x + p.x) / 2, (g.y + p.y) / 2);
        }
        function H(g, p) {
          var _ = { originalEvent: p, eventType: "click", pointerType: "mouse", isEmulated: false };
          w(g, _), _.preventDefault && !_.defaultPrevented && e.cancelEvent(p), _.stopPropagation && e.stopEvent(p);
        }
        function k(g, p) {
          var _ = { originalEvent: p, eventType: "dblclick", pointerType: "mouse", isEmulated: false };
          w(g, _), _.preventDefault && !_.defaultPrevented && e.cancelEvent(p), _.stopPropagation && e.stopEvent(p);
        }
        function N(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keydown", pointerType: "", isEmulated: false };
          w(g, b), g.keyDownHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyDownHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function Y(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keyup", pointerType: "", isEmulated: false };
          w(g, b), g.keyUpHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyUpHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function K(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "keypress", pointerType: "", isEmulated: false };
          w(g, b), g.keyHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, keyCode: p.keyCode ? p.keyCode : p.charCode, ctrl: p.ctrlKey, shift: p.shiftKey, alt: p.altKey, meta: p.metaKey, originalEvent: p, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.keyHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function q(g, p) {
          var _ = { originalEvent: p, eventType: "focus", pointerType: "", isEmulated: false };
          w(g, _), g.focusHandler && !_.preventGesture && g.focusHandler({ eventSource: g, originalEvent: p, userData: g.userData });
        }
        function ee(g, p) {
          var _ = { originalEvent: p, eventType: "blur", pointerType: "", isEmulated: false };
          w(g, _), g.blurHandler && !_.preventGesture && g.blurHandler({ eventSource: g, originalEvent: p, userData: g.userData });
        }
        function ce(g, p) {
          var _ = null, b = { originalEvent: p, eventType: "contextmenu", pointerType: "mouse", isEmulated: false };
          w(g, b), g.contextMenuHandler && !b.preventGesture && !b.defaultPrevented && (_ = { eventSource: g, position: T(y(p), g.element), originalEvent: b.originalEvent, preventDefault: b.preventDefault || b.defaultPrevented, userData: g.userData }, g.contextMenuHandler(_)), (_ && _.preventDefault || b.preventDefault && !b.defaultPrevented) && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function te(g, p) {
          ne(g, p, p);
        }
        function j(g, p) {
          var _ = { target: p.target || p.srcElement, type: "wheel", shiftKey: p.shiftKey || false, clientX: p.clientX, clientY: p.clientY, pageX: p.pageX ? p.pageX : p.clientX, pageY: p.pageY ? p.pageY : p.clientY, deltaMode: p.type === "MozMousePixelScroll" ? 0 : 1, deltaX: 0, deltaZ: 0 };
          e.MouseTracker.wheelEventName === "mousewheel" ? _.deltaY = -p.wheelDelta / e.DEFAULT_SETTINGS.pixelsPerWheelLine : _.deltaY = p.detail, ne(g, _, p);
        }
        function ne(g, p, _) {
          var b = 0, O, G = null;
          b = p.deltaY ? p.deltaY < 0 ? 1 : -1 : 0, O = { originalEvent: p, eventType: "wheel", pointerType: "mouse", isEmulated: p !== _ }, w(g, O), g.scrollHandler && !O.preventGesture && !O.defaultPrevented && (G = { eventSource: g, pointerType: "mouse", position: x(p, g.element), scroll: b, shift: p.shiftKey, isTouchEvent: false, originalEvent: _, preventDefault: O.preventDefault || O.defaultPrevented, userData: g.userData }, g.scrollHandler(G)), O.stopPropagation && e.stopEvent(_), (G && G.preventDefault || O.preventDefault && !O.defaultPrevented) && e.cancelEvent(_);
        }
        function he(g, p) {
          var _ = { id: e.MouseTracker.mousePointerId, type: "mouse" }, b = { originalEvent: p, eventType: "lostpointercapture", pointerType: "mouse", isEmulated: false };
          w(g, b), p.target === g.element && S(g, _, false), b.stopPropagation && e.stopEvent(p);
        }
        function ye(g, p) {
          var _, b, O = p.changedTouches.length, G, Q = g.getActivePointersListByType("touch");
          _ = e.now(), Q.getLength() > p.touches.length - O && e.console.warn("Tracked touch contact count doesn't match event.touches.length");
          var ve = { originalEvent: p, eventType: "pointerdown", pointerType: "touch", isEmulated: false };
          for (w(g, ve), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", isPrimary: Q.getLength() === 0, currentPos: y(p.changedTouches[b]), currentTime: _ }, L(g, ve, G), W(g, ve, G, 0), S(g, G, true);
          ve.preventDefault && !ve.defaultPrevented && e.cancelEvent(p), ve.stopPropagation && e.stopEvent(p);
        }
        function me(g, p) {
          var _, b, O = p.changedTouches.length, G;
          _ = e.now();
          var Q = { originalEvent: p, eventType: "pointerup", pointerType: "touch", isEmulated: false };
          for (w(g, Q), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", currentPos: y(p.changedTouches[b]), currentTime: _ }, Z(g, Q, G, 0), S(g, G, false), I(g, Q, G);
          Q.preventDefault && !Q.defaultPrevented && e.cancelEvent(p), Q.stopPropagation && e.stopEvent(p);
        }
        function pe(g, p) {
          var _, b, O = p.changedTouches.length, G;
          _ = e.now();
          var Q = { originalEvent: p, eventType: "pointermove", pointerType: "touch", isEmulated: false };
          for (w(g, Q), b = 0; b < O; b++) G = { id: p.changedTouches[b].identifier, type: "touch", currentPos: y(p.changedTouches[b]), currentTime: _ }, se(g, Q, G);
          Q.preventDefault && !Q.defaultPrevented && e.cancelEvent(p), Q.stopPropagation && e.stopEvent(p);
        }
        function ae(g, p) {
          var _ = p.changedTouches.length, b, O, G = { originalEvent: p, eventType: "pointercancel", pointerType: "touch", isEmulated: false };
          for (w(g, G), b = 0; b < _; b++) O = { id: p.changedTouches[b].identifier, type: "touch" }, X(g, G, O);
          G.stopPropagation && e.stopEvent(p);
        }
        function Ae(g, p) {
          return e.eventIsCanceled(p) || p.preventDefault(), false;
        }
        function Re(g, p) {
          return e.eventIsCanceled(p) || p.preventDefault(), false;
        }
        function Qe(g, p) {
          var _ = { originalEvent: p, eventType: "gotpointercapture", pointerType: m(p), isEmulated: false };
          w(g, _), p.target === g.element && S(g, { id: p.pointerId, type: m(p) }, true), _.stopPropagation && e.stopEvent(p);
        }
        function je(g, p) {
          var _ = { originalEvent: p, eventType: "lostpointercapture", pointerType: m(p), isEmulated: false };
          w(g, _), p.target === g.element && S(g, { id: p.pointerId, type: m(p) }, false), _.stopPropagation && e.stopEvent(p);
        }
        function ge(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerenter", pointerType: _.type, isEmulated: false };
          w(g, b), L(g, b, _);
        }
        function Nt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerleave", pointerType: _.type, isEmulated: false };
          w(g, b), I(g, b, _);
        }
        function Ut(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerover", pointerType: _.type, isEmulated: false };
          w(g, b), V(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function nt(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointerout", pointerType: _.type, isEmulated: false };
          w(g, b), M(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function $e(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = e.MouseTracker.havePointerEvents && _.type === "touch", O = { originalEvent: p, eventType: "pointerdown", pointerType: _.type, isEmulated: false };
          w(g, O), W(g, O, _, p.button), O.preventDefault && !O.defaultPrevented && e.cancelEvent(p), O.stopPropagation && e.stopEvent(p), O.shouldCapture && (b ? S(g, _, true) : c(g, _));
        }
        function bt(g, p) {
          st(g, p);
        }
        function Wt(g, p) {
          var _ = g.getActivePointersListByType(m(p));
          _.getById(p.pointerId) && st(g, p), e.stopEvent(p);
        }
        function st(g, p) {
          var _;
          _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() };
          var b = { originalEvent: p, eventType: "pointerup", pointerType: _.type, isEmulated: false };
          w(g, b), Z(g, b, _, p.button), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p), b.shouldReleaseCapture && (p.target === g.element ? h(g, _) : S(g, _, false));
        }
        function ii(g, p) {
          D(g, p);
        }
        function P(g, p) {
          var _ = g.getActivePointersListByType(m(p));
          _.getById(p.pointerId) && D(g, p), e.stopEvent(p);
        }
        function D(g, p) {
          var _ = { id: f(p), type: m(p), isPrimary: v(p), currentPos: y(p), currentTime: e.now() }, b = { originalEvent: p, eventType: "pointermove", pointerType: _.type, isEmulated: false };
          w(g, b), se(g, b, _), b.preventDefault && !b.defaultPrevented && e.cancelEvent(p), b.stopPropagation && e.stopEvent(p);
        }
        function F(g, p) {
          var _ = { id: p.pointerId, type: m(p) }, b = { originalEvent: p, eventType: "pointercancel", pointerType: _.type, isEmulated: false };
          w(g, b), X(g, b, _), b.stopPropagation && e.stopEvent(p);
        }
        function U(g, p) {
          return p.speed = 0, p.direction = 0, p.contactPos = p.currentPos, p.contactTime = p.currentTime, p.lastPos = p.currentPos, p.lastTime = p.currentTime, g.add(p);
        }
        function z(g, p, _) {
          var b, O = p.getById(_.id);
          return O ? (O.captured && (e.console.warn("stopTrackingPointer() called on captured pointer"), h(g, O)), p.removeContact(), b = p.removeById(_.id)) : b = p.getLength(), b;
        }
        function d(g, p) {
          switch (p.eventType) {
            case "pointermove":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "pointerover":
            case "pointerout":
            case "contextmenu":
            case "keydown":
            case "keyup":
            case "keypress":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "pointerdown":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "pointerup":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasGestureHandlers, p.stopPropagation = false;
              break;
            case "wheel":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = false, p.preventGesture = !g.hasScrollHandler, p.stopPropagation = false;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
              p.isStoppable = true, p.isCancelable = false, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "click":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = !!g.clickHandler, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "dblclick":
              p.isStoppable = true, p.isCancelable = true, p.preventDefault = !!g.dblClickHandler, p.preventGesture = false, p.stopPropagation = false;
              break;
            case "focus":
            case "blur":
            case "pointerenter":
            case "pointerleave":
            default:
              p.isStoppable = false, p.isCancelable = false, p.preventDefault = false, p.preventGesture = false, p.stopPropagation = false;
              break;
          }
        }
        function w(g, p) {
          p.eventSource = g, p.eventPhase = p.originalEvent && typeof p.originalEvent.eventPhase < "u" ? p.originalEvent.eventPhase : 0, p.defaultPrevented = e.eventIsCanceled(p.originalEvent), p.shouldCapture = false, p.shouldReleaseCapture = false, p.userData = g.userData, d(g, p), g.preProcessEventHandler && g.preProcessEventHandler(p);
        }
        function S(g, p, _) {
          var b = g.getActivePointersListByType(p.type), O = b.getById(p.id);
          O ? _ && !O.captured ? (O.captured = true, b.captureCount++) : !_ && O.captured && (O.captured = false, b.captureCount--, b.captureCount < 0 && (b.captureCount = 0, e.console.warn("updatePointerCaptured() - pointsList.captureCount went negative"))) : e.console.warn("updatePointerCaptured() called on untracked pointer");
        }
        function L(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O;
          O = b.getById(_.id), O ? (O.insideElement = true, O.lastPos = O.currentPos, O.lastTime = O.currentTime, O.currentPos = _.currentPos, O.currentTime = _.currentTime, _ = O) : (_.captured = false, _.insideElementPressed = false, _.insideElement = true, U(b, _)), g.enterHandler && g.enterHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function I(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O, G;
          O = b.getById(_.id), O ? (O.captured ? (O.insideElement = false, O.lastPos = O.currentPos, O.lastTime = O.currentTime, O.currentPos = _.currentPos, O.currentTime = _.currentTime) : z(g, b, O), _ = O) : (_.captured = false, _.insideElementPressed = false), (g.leaveHandler || g.exitHandler) && (G = { eventSource: g, pointerType: _.type, position: _.currentPos && T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }, g.leaveHandler && g.leaveHandler(G), g.exitHandler && g.exitHandler(G));
        }
        function V(g, p, _) {
          var b, O;
          b = g.getActivePointersListByType(_.type), O = b.getById(_.id), O ? _ = O : (_.captured = false, _.insideElementPressed = false), g.overHandler && g.overHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function M(g, p, _) {
          var b, O;
          b = g.getActivePointersListByType(_.type), O = b.getById(_.id), O ? _ = O : (_.captured = false, _.insideElementPressed = false), g.outHandler && g.outHandler({ eventSource: g, pointerType: _.type, position: _.currentPos && T(_.currentPos, g.element), buttons: b.buttons, pointers: g.getActivePointerCount(), insideElementPressed: _.insideElementPressed, buttonDownAny: b.buttons !== 0, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData });
        }
        function W(g, p, _, b) {
          var O = n[g.hash], G = g.getActivePointersListByType(_.type), Q;
          if (typeof p.originalEvent.buttons < "u" ? G.buttons = p.originalEvent.buttons : b === 0 ? G.buttons |= 1 : b === 1 ? G.buttons |= 4 : b === 2 ? G.buttons |= 2 : b === 3 ? G.buttons |= 8 : b === 4 ? G.buttons |= 16 : b === 5 && (G.buttons |= 32), b !== 0) {
            p.shouldCapture = false, p.shouldReleaseCapture = false, g.nonPrimaryPressHandler && !p.preventGesture && !p.defaultPrevented && (p.preventDefault = true, g.nonPrimaryPressHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), button: b, buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }));
            return;
          }
          Q = G.getById(_.id), Q ? (Q.insideElementPressed = true, Q.insideElement = true, Q.originalTarget = p.originalEvent.target, Q.contactPos = _.currentPos, Q.contactTime = _.currentTime, Q.lastPos = Q.currentPos, Q.lastTime = Q.currentTime, Q.currentPos = _.currentPos, Q.currentTime = _.currentTime, _ = Q) : (_.captured = false, _.insideElementPressed = true, _.insideElement = true, _.originalTarget = p.originalEvent.target, U(G, _)), G.addContact(), !p.preventGesture && !p.defaultPrevented ? (p.shouldCapture = true, p.shouldReleaseCapture = false, p.preventDefault = true, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.addPoint(g, _), G.contacts === 1 ? g.pressHandler && !p.preventGesture && g.pressHandler({ eventSource: g, pointerType: _.type, position: T(_.contactPos, g.element), buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }) : G.contacts === 2 && g.pinchHandler && _.type === "touch" && (O.pinchGPoints = G.asArray(), O.lastPinchDist = O.currentPinchDist = O.pinchGPoints[0].currentPos.distanceTo(O.pinchGPoints[1].currentPos), O.lastPinchCenter = O.currentPinchCenter = C(O.pinchGPoints[0].currentPos, O.pinchGPoints[1].currentPos))) : (p.shouldCapture = false, p.shouldReleaseCapture = false);
        }
        function Z(g, p, _, b) {
          var O = n[g.hash], G = g.getActivePointersListByType(_.type), Q, ve, re, Oe = false, Ie;
          if (typeof p.originalEvent.buttons < "u" ? G.buttons = p.originalEvent.buttons : b === 0 ? G.buttons ^= -2 : b === 1 ? G.buttons ^= -5 : b === 2 ? G.buttons ^= -3 : b === 3 ? G.buttons ^= -9 : b === 4 ? G.buttons ^= -17 : b === 5 && (G.buttons ^= -33), p.shouldCapture = false, b !== 0) {
            p.shouldReleaseCapture = false, g.nonPrimaryReleaseHandler && !p.preventGesture && !p.defaultPrevented && (p.preventDefault = true, g.nonPrimaryReleaseHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), button: b, buttons: G.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }));
            return;
          }
          re = G.getById(_.id), re ? (G.removeContact(), re.captured && (Oe = true), re.lastPos = re.currentPos, re.lastTime = re.currentTime, re.currentPos = _.currentPos, re.currentTime = _.currentTime, re.insideElement || z(g, G, re), Q = re.currentPos, ve = re.currentTime) : (_.captured = false, _.insideElementPressed = false, _.insideElement = true, U(G, _), re = _), !p.preventGesture && !p.defaultPrevented && (Oe ? (p.shouldReleaseCapture = true, p.preventDefault = true, (g.dragHandler || g.dragEndHandler || g.pinchHandler) && e.MouseTracker.gesturePointVelocityTracker.removePoint(g, re), G.contacts === 0 ? (g.releaseHandler && Q && g.releaseHandler({ eventSource: g, pointerType: re.type, position: T(Q, g.element), buttons: G.buttons, insideElementPressed: re.insideElementPressed, insideElementReleased: re.insideElement, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), g.dragEndHandler && O.sentDragEvent && g.dragEndHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), speed: re.speed, direction: re.direction, shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), O.sentDragEvent = false, (g.clickHandler || g.dblClickHandler) && re.insideElement && (Ie = ve - re.contactTime <= g.clickTimeThreshold && re.contactPos.distanceTo(Q) <= g.clickDistThreshold, g.clickHandler && g.clickHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), quick: Ie, shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, originalTarget: re.originalTarget, userData: g.userData }), g.dblClickHandler && Ie && (G.clicks++, G.clicks === 1 ? (O.lastClickPos = Q, O.dblClickTimeOut = setTimeout(function() {
            G.clicks = 0;
          }, g.dblClickTimeThreshold)) : G.clicks === 2 && (clearTimeout(O.dblClickTimeOut), G.clicks = 0, O.lastClickPos.distanceTo(Q) <= g.dblClickDistThreshold && g.dblClickHandler({ eventSource: g, pointerType: re.type, position: T(re.currentPos, g.element), shift: p.originalEvent.shiftKey, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), O.lastClickPos = null)))) : G.contacts === 2 && g.pinchHandler && re.type === "touch" && (O.pinchGPoints = G.asArray(), O.lastPinchDist = O.currentPinchDist = O.pinchGPoints[0].currentPos.distanceTo(O.pinchGPoints[1].currentPos), O.lastPinchCenter = O.currentPinchCenter = C(O.pinchGPoints[0].currentPos, O.pinchGPoints[1].currentPos))) : (p.shouldReleaseCapture = false, g.releaseHandler && Q && (g.releaseHandler({ eventSource: g, pointerType: re.type, position: T(Q, g.element), buttons: G.buttons, insideElementPressed: re.insideElementPressed, insideElementReleased: re.insideElement, isTouchEvent: re.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true)));
        }
        function se(g, p, _) {
          var b = n[g.hash], O = g.getActivePointersListByType(_.type), G, Q, ve;
          if (typeof p.originalEvent.buttons < "u" && (O.buttons = p.originalEvent.buttons), G = O.getById(_.id), G) G.lastPos = G.currentPos, G.lastTime = G.currentTime, G.currentPos = _.currentPos, G.currentTime = _.currentTime;
          else return;
          p.shouldCapture = false, p.shouldReleaseCapture = false, g.stopHandler && _.type === "mouse" && (clearTimeout(g.stopTimeOut), g.stopTimeOut = setTimeout(function() {
            oe(g, p.originalEvent, _.type);
          }, g.stopDelay)), O.contacts === 0 ? g.moveHandler && g.moveHandler({ eventSource: g, pointerType: _.type, position: T(_.currentPos, g.element), buttons: O.buttons, isTouchEvent: _.type === "touch", originalEvent: p.originalEvent, userData: g.userData }) : O.contacts === 1 ? (g.moveHandler && (G = O.asArray()[0], g.moveHandler({ eventSource: g, pointerType: G.type, position: T(G.currentPos, g.element), buttons: O.buttons, isTouchEvent: G.type === "touch", originalEvent: p.originalEvent, userData: g.userData })), g.dragHandler && !p.preventGesture && !p.defaultPrevented && (G = O.asArray()[0], ve = G.currentPos.minus(G.lastPos), g.dragHandler({ eventSource: g, pointerType: G.type, position: T(G.currentPos, g.element), buttons: O.buttons, delta: ve, speed: G.speed, direction: G.direction, shift: p.originalEvent.shiftKey, isTouchEvent: G.type === "touch", originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true, b.sentDragEvent = true)) : O.contacts === 2 && (g.moveHandler && (Q = O.asArray(), g.moveHandler({ eventSource: g, pointerType: Q[0].type, position: T(C(Q[0].currentPos, Q[1].currentPos), g.element), buttons: O.buttons, isTouchEvent: Q[0].type === "touch", originalEvent: p.originalEvent, userData: g.userData })), g.pinchHandler && _.type === "touch" && !p.preventGesture && !p.defaultPrevented && (ve = b.pinchGPoints[0].currentPos.distanceTo(b.pinchGPoints[1].currentPos), ve !== b.currentPinchDist && (b.lastPinchDist = b.currentPinchDist, b.currentPinchDist = ve, b.lastPinchCenter = b.currentPinchCenter, b.currentPinchCenter = C(b.pinchGPoints[0].currentPos, b.pinchGPoints[1].currentPos), g.pinchHandler({ eventSource: g, pointerType: "touch", gesturePoints: b.pinchGPoints, lastCenter: T(b.lastPinchCenter, g.element), center: T(b.currentPinchCenter, g.element), lastDistance: b.lastPinchDist, distance: b.currentPinchDist, shift: p.originalEvent.shiftKey, originalEvent: p.originalEvent, userData: g.userData }), p.preventDefault = true)));
        }
        function X(g, p, _) {
          var b = g.getActivePointersListByType(_.type), O;
          O = b.getById(_.id), O && z(g, b, O);
        }
        function oe(g, p, _) {
          g.stopHandler && g.stopHandler({ eventSource: g, pointerType: _, position: x(p, g.element), buttons: g.getActivePointersListByType(_).buttons, isTouchEvent: _ === "touch", originalEvent: p, userData: g.userData });
        }
      })(i), (function(e) {
        e.ControlAnchor = { NONE: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, ABSOLUTE: 5 }, e.Control = function(n, r, s) {
          var o = n.parentNode;
          typeof r == "number" && (e.console.error("Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"), r = { anchor: r }), r.attachToViewer = typeof r.attachToViewer > "u" ? true : r.attachToViewer, this.autoFade = typeof r.autoFade > "u" ? true : r.autoFade, this.element = n, this.anchor = r.anchor, this.container = s, this.anchor === e.ControlAnchor.ABSOLUTE ? (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.position = "absolute", this.wrapper.style.top = typeof r.top == "number" ? r.top + "px" : r.top, this.wrapper.style.left = typeof r.left == "number" ? r.left + "px" : r.left, this.wrapper.style.height = typeof r.height == "number" ? r.height + "px" : r.height, this.wrapper.style.width = typeof r.width == "number" ? r.width + "px" : r.width, this.wrapper.style.margin = "0px", this.wrapper.style.padding = "0px", this.element.style.position = "relative", this.element.style.top = "0px", this.element.style.left = "0px", this.element.style.height = "100%", this.element.style.width = "100%") : (this.wrapper = e.makeNeutralElement("div"), this.wrapper.style.display = "inline-block", this.anchor === e.ControlAnchor.NONE && (this.wrapper.style.width = this.wrapper.style.height = "100%")), this.wrapper.appendChild(this.element), r.attachToViewer ? this.anchor === e.ControlAnchor.TOP_RIGHT || this.anchor === e.ControlAnchor.BOTTOM_RIGHT ? this.container.insertBefore(this.wrapper, this.container.firstChild) : this.container.appendChild(this.wrapper) : o.appendChild(this.wrapper);
        }, e.Control.prototype = { destroy: function() {
          this.wrapper.removeChild(this.element), this.anchor !== e.ControlAnchor.NONE && this.container.removeChild(this.wrapper);
        }, isVisible: function() {
          return this.wrapper.style.display !== "none";
        }, setVisible: function(n) {
          this.wrapper.style.display = n ? this.anchor === e.ControlAnchor.ABSOLUTE ? "block" : "inline-block" : "none";
        }, setOpacity: function(n) {
          e.setElementOpacity(this.wrapper, n, true);
        } };
      })(i), (function(e) {
        e.ControlDock = function(r) {
          var s = ["topleft", "topright", "bottomright", "bottomleft"], o, l;
          for (e.extend(true, this, { id: "controldock-" + e.now() + "-" + Math.floor(Math.random() * 1e6), container: e.makeNeutralElement("div"), controls: [] }, r), this.container.onsubmit = function() {
            return false;
          }, this.element && (this.element = e.getElement(this.element), this.element.appendChild(this.container), e.getElementStyle(this.element).position === "static" && (this.element.style.position = "relative"), this.container.style.width = "100%", this.container.style.height = "100%"), l = 0; l < s.length; l++) o = s[l], this.controls[o] = e.makeNeutralElement("div"), this.controls[o].style.position = "absolute", o.match("left") && (this.controls[o].style.left = "0px"), o.match("right") && (this.controls[o].style.right = "0px"), o.match("top") && (this.controls[o].style.top = "0px"), o.match("bottom") && (this.controls[o].style.bottom = "0px");
          this.container.appendChild(this.controls.topleft), this.container.appendChild(this.controls.topright), this.container.appendChild(this.controls.bottomright), this.container.appendChild(this.controls.bottomleft);
        }, e.ControlDock.prototype = { addControl: function(r, s) {
          r = e.getElement(r);
          var o = null;
          if (!(n(this, r) >= 0)) {
            switch (s.anchor) {
              case e.ControlAnchor.TOP_RIGHT:
                o = this.controls.topright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.BOTTOM_RIGHT:
                o = this.controls.bottomright, r.style.position = "relative", r.style.paddingRight = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.BOTTOM_LEFT:
                o = this.controls.bottomleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingBottom = "0px";
                break;
              case e.ControlAnchor.TOP_LEFT:
                o = this.controls.topleft, r.style.position = "relative", r.style.paddingLeft = "0px", r.style.paddingTop = "0px";
                break;
              case e.ControlAnchor.ABSOLUTE:
                o = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
              default:
              case e.ControlAnchor.NONE:
                o = this.container, r.style.margin = "0px", r.style.padding = "0px";
                break;
            }
            this.controls.push(new e.Control(r, s, o)), r.style.display = "inline-block";
          }
        }, removeControl: function(r) {
          r = e.getElement(r);
          var s = n(this, r);
          return s >= 0 && (this.controls[s].destroy(), this.controls.splice(s, 1)), this;
        }, clearControls: function() {
          for (; this.controls.length > 0; ) this.controls.pop().destroy();
          return this;
        }, areControlsEnabled: function() {
          var r;
          for (r = this.controls.length - 1; r >= 0; r--) if (this.controls[r].isVisible()) return true;
          return false;
        }, setControlsEnabled: function(r) {
          var s;
          for (s = this.controls.length - 1; s >= 0; s--) this.controls[s].setVisible(r);
          return this;
        } };
        function n(r, s) {
          var o = r.controls, l;
          for (l = o.length - 1; l >= 0; l--) if (o[l].element === s) return l;
          return -1;
        }
      })(i), (function(e) {
        e.Placement = e.freezeObject({ CENTER: 0, TOP_LEFT: 1, TOP: 2, TOP_RIGHT: 3, RIGHT: 4, BOTTOM_RIGHT: 5, BOTTOM: 6, BOTTOM_LEFT: 7, LEFT: 8, properties: { 0: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: false, isVerticallyCentered: true, isBottom: false }, 1: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: true, isVerticallyCentered: false, isBottom: false }, 2: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: true, isVerticallyCentered: false, isBottom: false }, 3: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: true, isVerticallyCentered: false, isBottom: false }, 4: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: false, isVerticallyCentered: true, isBottom: false }, 5: { isLeft: false, isHorizontallyCentered: false, isRight: true, isTop: false, isVerticallyCentered: false, isBottom: true }, 6: { isLeft: false, isHorizontallyCentered: true, isRight: false, isTop: false, isVerticallyCentered: false, isBottom: true }, 7: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: false, isVerticallyCentered: false, isBottom: true }, 8: { isLeft: true, isHorizontallyCentered: false, isRight: false, isTop: false, isVerticallyCentered: true, isBottom: false } } });
      })(i), (function(e) {
        var n = {}, r = 1;
        e.Viewer = function(d) {
          var w = arguments, S = this, L;
          e.isPlainObject(d) || (d = { id: w[0], xmlPath: w.length > 1 ? w[1] : void 0, prefixUrl: w.length > 2 ? w[2] : void 0, controls: w.length > 3 ? w[3] : void 0, overlays: w.length > 4 ? w[4] : void 0 }), d.config && (e.extend(true, d, d.config), delete d.config);
          let I = ["useCanvas"];
          if (d.drawerOptions = Object.assign({}, I.reduce((M, W) => (M[W] = d[W], delete d[W], M), {}), d.drawerOptions), e.extend(true, this, { id: d.id, hash: d.hash || r++, initialPage: 0, element: null, container: null, canvas: null, overlays: [], overlaysContainer: null, previousBody: [], customControls: [], source: null, drawer: null, world: null, viewport: null, navigator: null, collectionViewport: null, collectionDrawer: null, navImages: null, buttonGroup: null, profiler: null }, e.DEFAULT_SETTINGS, d), typeof this.hash > "u") throw new Error("A hash must be defined, either by specifying options.id or options.hash.");
          typeof n[this.hash] < "u" && e.console.warn("Hash " + this.hash + " has already been used."), n[this.hash] = { fsBoundsDelta: new e.Point(1, 1), prevContainerSize: null, animating: false, forceRedraw: false, needsResize: false, forceResize: false, mouseInside: false, group: null, zooming: false, zoomFactor: null, lastZoomTime: null, fullPage: false, onfullscreenchange: null, lastClickTime: null, draggingToZoom: false }, this._sequenceIndex = 0, this._firstOpen = true, this._updateRequestId = null, this._loadQueue = [], this.currentOverlays = [], this._updatePixelDensityRatioBind = null, this._lastScrollTime = e.now(), e.EventSource.call(this), this.addHandler("open-failed", function(M) {
            var W = e.getString("Errors.OpenFailed", M.eventSource, M.message);
            S._showMessage(W);
          }), e.ControlDock.call(this, d), this.xmlPath && (this.tileSources = [this.xmlPath]), this.element = this.element || document.getElementById(this.id), this.canvas = e.makeNeutralElement("div"), this.canvas.className = "openseadragon-canvas", (function(M) {
            M.width = "100%", M.height = "100%", M.overflow = "hidden", M.position = "absolute", M.top = "0px", M.left = "0px";
          })(this.canvas.style), e.setElementTouchActionNone(this.canvas), d.tabIndex !== "" && (this.canvas.tabIndex = d.tabIndex === void 0 ? 0 : d.tabIndex), this.container.className = "openseadragon-container", (function(M) {
            M.width = "100%", M.height = "100%", M.position = "relative", M.overflow = "hidden", M.left = "0px", M.top = "0px", M.textAlign = "left";
          })(this.container.style), e.setElementTouchActionNone(this.container), this.container.insertBefore(this.canvas, this.container.firstChild), this.element.appendChild(this.container), this.bodyWidth = document.body.style.width, this.bodyHeight = document.body.style.height, this.bodyOverflow = document.body.style.overflow, this.docOverflow = document.documentElement.style.overflow, this.innerTracker = new e.MouseTracker({ userData: "Viewer.innerTracker", element: this.canvas, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, contextMenuHandler: e.delegate(this, x), keyDownHandler: e.delegate(this, T), keyHandler: e.delegate(this, C), clickHandler: e.delegate(this, H), dblClickHandler: e.delegate(this, k), dragHandler: e.delegate(this, N), dragEndHandler: e.delegate(this, Y), enterHandler: e.delegate(this, K), leaveHandler: e.delegate(this, q), pressHandler: e.delegate(this, ee), releaseHandler: e.delegate(this, ce), nonPrimaryPressHandler: e.delegate(this, te), nonPrimaryReleaseHandler: e.delegate(this, j), scrollHandler: e.delegate(this, me), pinchHandler: e.delegate(this, ne), focusHandler: e.delegate(this, he), blurHandler: e.delegate(this, ye) }), this.outerTracker = new e.MouseTracker({ userData: "Viewer.outerTracker", element: this.container, startDisabled: !this.mouseNavEnabled, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, dblClickTimeThreshold: this.dblClickTimeThreshold, dblClickDistThreshold: this.dblClickDistThreshold, enterHandler: e.delegate(this, pe), leaveHandler: e.delegate(this, ae) }), this.toolbar && (this.toolbar = new e.ControlDock({ element: this.toolbar })), this.bindStandardControls(), n[this.hash].prevContainerSize = s(this.container), window.ResizeObserver ? (this._autoResizePolling = false, this._resizeObserver = new ResizeObserver(function() {
            n[S.hash].needsResize = true;
          }), this._resizeObserver.observe(this.container, {})) : this._autoResizePolling = true, this.world = new e.World({ viewer: this }), this.world.addHandler("add-item", function(M) {
            S.source = S.world.getItemAt(0).source, n[S.hash].forceRedraw = true, S._updateRequestId || (S._updateRequestId = u(S, Ae));
          }), this.world.addHandler("remove-item", function(M) {
            S.world.getItemCount() ? S.source = S.world.getItemAt(0).source : S.source = null, n[S.hash].forceRedraw = true;
          }), this.world.addHandler("metrics-change", function(M) {
            S.viewport && S.viewport._setContentBounds(S.world.getHomeBounds(), S.world.getContentFactor());
          }), this.world.addHandler("item-index-change", function(M) {
            S.source = S.world.getItemAt(0).source;
          }), this.viewport = new e.Viewport({ containerSize: n[this.hash].prevContainerSize, springStiffness: this.springStiffness, animationTime: this.animationTime, minZoomImageRatio: this.minZoomImageRatio, maxZoomPixelRatio: this.maxZoomPixelRatio, visibilityRatio: this.visibilityRatio, wrapHorizontal: this.wrapHorizontal, wrapVertical: this.wrapVertical, defaultZoomLevel: this.defaultZoomLevel, minZoomLevel: this.minZoomLevel, maxZoomLevel: this.maxZoomLevel, viewer: this, degrees: this.degrees, flipped: this.flipped, overlayPreserveContentDirection: this.overlayPreserveContentDirection, navigatorRotate: this.navigatorRotate, homeFillsViewer: this.homeFillsViewer, margins: this.viewportMargins, silenceMultiImageWarnings: this.silenceMultiImageWarnings }), this.viewport._setContentBounds(this.world.getHomeBounds(), this.world.getContentFactor()), this.imageLoader = new e.ImageLoader({ jobLimit: this.imageLoaderLimit, timeout: d.timeout, tileRetryMax: this.tileRetryMax, tileRetryDelay: this.tileRetryDelay }), this.tileCache = new e.TileCache({ maxImageCacheCount: this.maxImageCacheCount }), Object.prototype.hasOwnProperty.call(this.drawerOptions, "useCanvas") && (e.console.error('useCanvas is deprecated, use the "drawer" option to indicate preferred drawer(s)'), this.drawerOptions.useCanvas || (this.drawer = e.HTMLDrawer), delete this.drawerOptions.useCanvas);
          let V = Array.isArray(this.drawer) ? this.drawer : [this.drawer];
          V.length === 0 && (V = [e.DEFAULT_SETTINGS.drawer].flat(), e.console.warn("No valid drawers were selected. Using the default value.")), this.drawer = null;
          for (const M of V) if (this.requestDrawer(M, { mainDrawer: true, redrawImmediately: false })) break;
          if (!this.drawer) throw e.console.error("No drawer could be created!"), "Error with creating the selected drawer(s)";
          for (this.drawer.setImageSmoothingEnabled(this.imageSmoothingEnabled), this.overlaysContainer = e.makeNeutralElement("div"), this.canvas.appendChild(this.overlaysContainer), this.drawer.canRotate() || (this.rotateLeft && (L = this.buttonGroup.buttons.indexOf(this.rotateLeft), this.buttonGroup.buttons.splice(L, 1), this.buttonGroup.element.removeChild(this.rotateLeft.element)), this.rotateRight && (L = this.buttonGroup.buttons.indexOf(this.rotateRight), this.buttonGroup.buttons.splice(L, 1), this.buttonGroup.element.removeChild(this.rotateRight.element))), this._addUpdatePixelDensityRatioEvent(), this.showNavigator && (this.navigator = new e.Navigator({ element: this.navigatorElement, id: this.navigatorId, position: this.navigatorPosition, sizeRatio: this.navigatorSizeRatio, maintainSizeRatio: this.navigatorMaintainSizeRatio, top: this.navigatorTop, left: this.navigatorLeft, width: this.navigatorWidth, height: this.navigatorHeight, autoResize: this.navigatorAutoResize, autoFade: this.navigatorAutoFade, prefixUrl: this.prefixUrl, viewer: this, navigatorRotate: this.navigatorRotate, background: this.navigatorBackground, opacity: this.navigatorOpacity, borderColor: this.navigatorBorderColor, displayRegionColor: this.navigatorDisplayRegionColor, crossOriginPolicy: this.crossOriginPolicy, animationTime: this.animationTime, drawer: this.drawer.getType(), loadTilesWithAjax: this.loadTilesWithAjax, ajaxHeaders: this.ajaxHeaders, ajaxWithCredentials: this.ajaxWithCredentials })), this.sequenceMode && this.bindSequenceControls(), this.tileSources && this.open(this.tileSources), L = 0; L < this.customControls.length; L++) this.addControl(this.customControls[L].id, { anchor: this.customControls[L].anchor });
          e.requestAnimationFrame(function() {
            h(S);
          }), e._viewers.set(this.element, this);
        }, e.extend(e.Viewer.prototype, e.EventSource.prototype, e.ControlDock.prototype, { isOpen: function() {
          return !!this.world.getItemCount();
        }, openDzi: function(d) {
          return e.console.error("[Viewer.openDzi] this function is deprecated; use Viewer.open() instead."), this.open(d);
        }, openTileSource: function(d) {
          return e.console.error("[Viewer.openTileSource] this function is deprecated; use Viewer.open() instead."), this.open(d);
        }, get buttons() {
          return e.console.warn("Viewer.buttons is deprecated; Please use Viewer.buttonGroup"), this.buttonGroup;
        }, open: function(d, w) {
          var S = this;
          if (this.close(), !d) return this;
          if (this.sequenceMode && e.isArray(d)) return this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), typeof w < "u" && !isNaN(w) && (this.initialPage = w), this.tileSources = d, this._sequenceIndex = Math.max(0, Math.min(this.tileSources.length - 1, this.initialPage)), this.tileSources.length && (this.open(this.tileSources[this._sequenceIndex]), this.showReferenceStrip && this.addReferenceStrip()), this._updateSequenceButtons(this._sequenceIndex), this;
          if (e.isArray(d) || (d = [d]), !d.length) return this;
          this._opening = true;
          for (var L = d.length, I = 0, V = 0, M, W = function() {
            if (I + V === L) if (I) {
              (S._firstOpen || !S.preserveViewport) && (S.viewport.goHome(true), S.viewport.update()), S._firstOpen = false;
              var X = d[0];
              if (X.tileSource && (X = X.tileSource), S.overlays && !S.preserveOverlays) for (var oe = 0; oe < S.overlays.length; oe++) S.currentOverlays[oe] = l(S, S.overlays[oe]);
              S._drawOverlays(), S._opening = false, S.raiseEvent("open", { source: X });
            } else S._opening = false, S.raiseEvent("open-failed", M);
          }, Z = function(X) {
            (!e.isPlainObject(X) || !X.tileSource) && (X = { tileSource: X }), X.index !== void 0 && (e.console.error("[Viewer.open] setting indexes here is not supported; use addTiledImage instead"), delete X.index), X.collectionImmediately === void 0 && (X.collectionImmediately = true);
            var oe = X.success;
            X.success = function(p) {
              if (I++, X.tileSource.overlays) for (var _ = 0; _ < X.tileSource.overlays.length; _++) S.addOverlay(X.tileSource.overlays[_]);
              oe && oe(p), W();
            };
            var g = X.error;
            X.error = function(p) {
              V++, M || (M = p), g && g(p), W();
            }, S.addTiledImage(X);
          }, se = 0; se < d.length; se++) Z(d[se]);
          return this;
        }, close: function() {
          return n[this.hash] ? (this._opening = false, this.navigator && this.navigator.close(), this.preserveOverlays || (this.clearOverlays(), this.overlaysContainer.innerHTML = ""), n[this.hash].animating = false, this.world.removeAll(), this.imageLoader.clear(), this.raiseEvent("close"), this) : this;
        }, destroy: function() {
          if (n[this.hash]) {
            if (this.raiseEvent("before-destroy"), this._removeUpdatePixelDensityRatioEvent(), this.close(), this.clearOverlays(), this.overlaysContainer.innerHTML = "", this._resizeObserver && this._resizeObserver.disconnect(), this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null), this._updateRequestId !== null && (e.cancelAnimationFrame(this._updateRequestId), this._updateRequestId = null), this.drawer && this.drawer.destroy(), this.navigator && (this.navigator.destroy(), n[this.navigator.hash] = null, delete n[this.navigator.hash], this.navigator = null), this.buttonGroup) this.buttonGroup.destroy();
            else if (this.customButtons) for (; this.customButtons.length; ) this.customButtons.pop().destroy();
            if (this.paging && this.paging.destroy(), this.element) for (; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
            this.container.onsubmit = null, this.clearControls(), this.innerTracker && this.innerTracker.destroy(), this.outerTracker && this.outerTracker.destroy(), n[this.hash] = null, delete n[this.hash], this.canvas = null, this.container = null, e._viewers.delete(this.element), this.element = null, this.raiseEvent("destroy"), this.removeAllHandlers();
          }
        }, requestDrawer(d, w) {
          const S = { mainDrawer: true, redrawImmediately: true, drawerOptions: null };
          w = e.extend(true, S, w);
          const L = w.mainDrawer, I = w.redrawImmediately, V = w.drawerOptions, M = this.drawer;
          let W = null;
          if (d && d.prototype instanceof e.DrawerBase ? (W = d, d = "custom") : typeof d == "string" && (W = e.determineDrawer(d)), W || e.console.warn("Unsupported drawer! Drawer must be an existing string type, or a class that extends OpenSeadragon.DrawerBase."), W && W.isSupported()) {
            M && L && M.destroy();
            const Z = new W({ viewer: this, viewport: this.viewport, element: this.canvas, debugGridColor: this.debugGridColor, options: V || this.drawerOptions[d] });
            return L && (this.drawer = Z, I && this.forceRedraw()), Z;
          }
          return false;
        }, isMouseNavEnabled: function() {
          return this.innerTracker.isTracking();
        }, setMouseNavEnabled: function(d) {
          return this.innerTracker.setTracking(d), this.outerTracker.setTracking(d), this.raiseEvent("mouse-enabled", { enabled: d }), this;
        }, areControlsEnabled: function() {
          var d = this.controls.length, w;
          for (w = 0; w < this.controls.length; w++) d = d && this.controls[w].isVisible();
          return d;
        }, setControlsEnabled: function(d) {
          return d ? m(this) : h(this), this.raiseEvent("controls-enabled", { enabled: d }), this;
        }, setDebugMode: function(d) {
          for (var w = 0; w < this.world.getItemCount(); w++) this.world.getItemAt(w).debugMode = d;
          this.debugMode = d, this.forceRedraw();
        }, setAjaxHeaders: function(d, w) {
          if (d === null && (d = {}), !e.isPlainObject(d)) {
            console.error("[Viewer.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          if (w === void 0 && (w = true), this.ajaxHeaders = d, w) {
            for (var S = 0; S < this.world.getItemCount(); S++) this.world.getItemAt(S)._updateAjaxHeaders(true);
            if (this.navigator && this.navigator.setAjaxHeaders(this.ajaxHeaders, true), this.referenceStrip && this.referenceStrip.miniViewers) for (var L in this.referenceStrip.miniViewers) this.referenceStrip.miniViewers[L].setAjaxHeaders(this.ajaxHeaders, true);
          }
        }, addButton: function(d) {
          this.buttonGroup.addButton(d);
        }, isFullPage: function() {
          return n[this.hash] && n[this.hash].fullPage;
        }, setFullPage: function(d) {
          var w = document.body, S = w.style, L = document.documentElement.style, I = this, V, M;
          if (d === this.isFullPage()) return this;
          var W = { fullPage: d, preventDefaultAction: false };
          if (this.raiseEvent("pre-full-page", W), W.preventDefaultAction) return this;
          if (d && this.element) {
            for (this.elementSize = e.getElementSize(this.element), this.pageScroll = e.getPageScroll(), this.elementMargin = this.element.style.margin, this.element.style.margin = "0", this.elementPadding = this.element.style.padding, this.element.style.padding = "0", this.bodyMargin = S.margin, this.docMargin = L.margin, S.margin = "0", L.margin = "0", this.bodyPadding = S.padding, this.docPadding = L.padding, S.padding = "0", L.padding = "0", this.bodyWidth = S.width, this.docWidth = L.width, S.width = "100%", L.width = "100%", this.bodyHeight = S.height, this.docHeight = L.height, S.height = "100%", L.height = "100%", this.bodyDisplay = S.display, S.display = "block", this.previousBody = [], n[this.hash].prevElementParent = this.element.parentNode, n[this.hash].prevNextSibling = this.element.nextSibling, n[this.hash].prevElementWidth = this.element.style.width, n[this.hash].prevElementHeight = this.element.style.height, V = w.childNodes.length, M = 0; M < V; M++) this.previousBody.push(w.childNodes[0]), w.removeChild(w.childNodes[0]);
            this.toolbar && this.toolbar.element && (this.toolbar.parentNode = this.toolbar.element.parentNode, this.toolbar.nextSibling = this.toolbar.element.nextSibling, w.appendChild(this.toolbar.element), e.addClass(this.toolbar.element, "fullpage")), e.addClass(this.element, "fullpage"), w.appendChild(this.element), this.element.style.height = "100vh", this.element.style.width = "100vw", this.toolbar && this.toolbar.element && (this.element.style.height = e.getElementSize(this.element).y - e.getElementSize(this.toolbar.element).y + "px"), n[this.hash].fullPage = true, e.delegate(this, pe)({});
          } else {
            for (this.element.style.margin = this.elementMargin, this.element.style.padding = this.elementPadding, S.margin = this.bodyMargin, L.margin = this.docMargin, S.padding = this.bodyPadding, L.padding = this.docPadding, S.width = this.bodyWidth, L.width = this.docWidth, S.height = this.bodyHeight, L.height = this.docHeight, S.display = this.bodyDisplay, w.removeChild(this.element), V = this.previousBody.length, M = 0; M < V; M++) w.appendChild(this.previousBody.shift());
            e.removeClass(this.element, "fullpage"), n[this.hash].prevElementParent.insertBefore(this.element, n[this.hash].prevNextSibling), this.toolbar && this.toolbar.element && (w.removeChild(this.toolbar.element), e.removeClass(this.toolbar.element, "fullpage"), this.toolbar.parentNode.insertBefore(this.toolbar.element, this.toolbar.nextSibling), delete this.toolbar.parentNode, delete this.toolbar.nextSibling), this.element.style.width = n[this.hash].prevElementWidth, this.element.style.height = n[this.hash].prevElementHeight;
            var Z = 0, se = function() {
              e.setPageScroll(I.pageScroll);
              var X = e.getPageScroll();
              Z++, Z < 10 && (X.x !== I.pageScroll.x || X.y !== I.pageScroll.y) && e.requestAnimationFrame(se);
            };
            e.requestAnimationFrame(se), n[this.hash].fullPage = false, e.delegate(this, ae)({});
          }
          return this.navigator && this.viewport && this.navigator.update(this.viewport), this.raiseEvent("full-page", { fullPage: d }), this;
        }, setFullScreen: function(d) {
          var w = this;
          if (!e.supportsFullScreen) return this.setFullPage(d);
          if (e.isFullScreen() === d) return this;
          var S = { fullScreen: d, preventDefaultAction: false };
          if (this.raiseEvent("pre-full-screen", S), S.preventDefaultAction) return this;
          if (d) {
            if (this.setFullPage(true), !this.isFullPage()) return this;
            this.fullPageStyleWidth = this.element.style.width, this.fullPageStyleHeight = this.element.style.height, this.element.style.width = "100%", this.element.style.height = "100%";
            var L = function() {
              var I = e.isFullScreen();
              I || (e.removeEvent(document, e.fullScreenEventName, L), e.removeEvent(document, e.fullScreenErrorEventName, L), w.setFullPage(false), w.isFullPage() && (w.element.style.width = w.fullPageStyleWidth, w.element.style.height = w.fullPageStyleHeight)), w.navigator && w.viewport && setTimeout(function() {
                w.navigator.update(w.viewport);
              }), w.raiseEvent("full-screen", { fullScreen: I });
            };
            e.addEvent(document, e.fullScreenEventName, L), e.addEvent(document, e.fullScreenErrorEventName, L), e.requestFullScreen(document.body);
          } else e.exitFullScreen();
          return this;
        }, isVisible: function() {
          return this.container.style.visibility !== "hidden";
        }, isFullScreen: function() {
          return e.isFullScreen() && this.isFullPage();
        }, setVisible: function(d) {
          return this.container.style.visibility = d ? "" : "hidden", this.raiseEvent("visible", { visible: d }), this;
        }, addTiledImage: function(d) {
          e.console.assert(d, "[Viewer.addTiledImage] options is required"), e.console.assert(d.tileSource, "[Viewer.addTiledImage] options.tileSource is required"), e.console.assert(!d.replace || d.index > -1 && d.index < this.world.getItemCount(), "[Viewer.addTiledImage] if options.replace is used, options.index must be a valid index in Viewer.world");
          var w = this;
          d.replace && (d.replaceItem = w.world.getItemAt(d.index)), this._hideMessage(), d.placeholderFillStyle === void 0 && (d.placeholderFillStyle = this.placeholderFillStyle), d.opacity === void 0 && (d.opacity = this.opacity), d.preload === void 0 && (d.preload = this.preload), d.compositeOperation === void 0 && (d.compositeOperation = this.compositeOperation), d.crossOriginPolicy === void 0 && (d.crossOriginPolicy = d.tileSource.crossOriginPolicy !== void 0 ? d.tileSource.crossOriginPolicy : this.crossOriginPolicy), d.ajaxWithCredentials === void 0 && (d.ajaxWithCredentials = this.ajaxWithCredentials), d.loadTilesWithAjax === void 0 && (d.loadTilesWithAjax = this.loadTilesWithAjax), e.isPlainObject(d.ajaxHeaders) || (d.ajaxHeaders = {});
          var S = { options: d };
          function L(M) {
            for (var W = 0; W < w._loadQueue.length; W++) if (w._loadQueue[W] === S) {
              w._loadQueue.splice(W, 1);
              break;
            }
            w._loadQueue.length === 0 && I(S), w.raiseEvent("add-item-failed", M), d.error && d.error(M);
          }
          function I(M) {
            w.collectionMode && (w.world.arrange({ immediately: M.options.collectionImmediately, rows: w.collectionRows, columns: w.collectionColumns, layout: w.collectionLayout, tileSize: w.collectionTileSize, tileMargin: w.collectionTileMargin }), w.world.setAutoRefigureSizes(true));
          }
          if (e.isArray(d.tileSource)) {
            setTimeout(function() {
              L({ message: "[Viewer.addTiledImage] Sequences can not be added; add them one at a time instead.", source: d.tileSource, options: d });
            });
            return;
          }
          this._loadQueue.push(S);
          function V() {
            for (var M, W, Z; w._loadQueue.length && (M = w._loadQueue[0], !!M.tileSource); ) {
              if (w._loadQueue.splice(0, 1), M.options.replace) {
                var se = w.world.getIndexOfItem(M.options.replaceItem);
                se !== -1 && (M.options.index = se), w.world.removeItem(M.options.replaceItem);
              }
              W = new e.TiledImage({ viewer: w, source: M.tileSource, viewport: w.viewport, drawer: w.drawer, tileCache: w.tileCache, imageLoader: w.imageLoader, x: M.options.x, y: M.options.y, width: M.options.width, height: M.options.height, fitBounds: M.options.fitBounds, fitBoundsPlacement: M.options.fitBoundsPlacement, clip: M.options.clip, placeholderFillStyle: M.options.placeholderFillStyle, opacity: M.options.opacity, preload: M.options.preload, degrees: M.options.degrees, flipped: M.options.flipped, compositeOperation: M.options.compositeOperation, springStiffness: w.springStiffness, animationTime: w.animationTime, minZoomImageRatio: w.minZoomImageRatio, wrapHorizontal: w.wrapHorizontal, wrapVertical: w.wrapVertical, maxTilesPerFrame: w.maxTilesPerFrame, immediateRender: w.immediateRender, blendTime: w.blendTime, alwaysBlend: w.alwaysBlend, minPixelRatio: w.minPixelRatio, smoothTileEdgesMinZoom: w.smoothTileEdgesMinZoom, iOSDevice: w.iOSDevice, crossOriginPolicy: M.options.crossOriginPolicy, ajaxWithCredentials: M.options.ajaxWithCredentials, loadTilesWithAjax: M.options.loadTilesWithAjax, ajaxHeaders: M.options.ajaxHeaders, debugMode: w.debugMode, subPixelRoundingForTransparency: w.subPixelRoundingForTransparency }), w.collectionMode && w.world.setAutoRefigureSizes(false), w.navigator && (Z = e.extend({}, M.options, { replace: false, originalTiledImage: W, tileSource: M.tileSource }), w.navigator.addTiledImage(Z)), w.world.addItem(W, { index: M.options.index }), w._loadQueue.length === 0 && I(M), w.world.getItemCount() === 1 && !w.preserveViewport && w.viewport.goHome(true), M.options.success && M.options.success({ item: W });
            }
          }
          o(this, d.tileSource, d, function(M) {
            S.tileSource = M, V();
          }, function(M) {
            M.options = d, L(M), V();
          });
        }, addSimpleImage: function(d) {
          e.console.assert(d, "[Viewer.addSimpleImage] options is required"), e.console.assert(d.url, "[Viewer.addSimpleImage] options.url is required");
          var w = e.extend({}, d, { tileSource: { type: "image", url: d.url } });
          delete w.url, this.addTiledImage(w);
        }, addLayer: function(d) {
          var w = this;
          e.console.error("[Viewer.addLayer] this function is deprecated; use Viewer.addTiledImage() instead.");
          var S = e.extend({}, d, { success: function(L) {
            w.raiseEvent("add-layer", { options: d, drawer: L.item });
          }, error: function(L) {
            w.raiseEvent("add-layer-failed", L);
          } });
          return this.addTiledImage(S), this;
        }, getLayerAtLevel: function(d) {
          return e.console.error("[Viewer.getLayerAtLevel] this function is deprecated; use World.getItemAt() instead."), this.world.getItemAt(d);
        }, getLevelOfLayer: function(d) {
          return e.console.error("[Viewer.getLevelOfLayer] this function is deprecated; use World.getIndexOfItem() instead."), this.world.getIndexOfItem(d);
        }, getLayersCount: function() {
          return e.console.error("[Viewer.getLayersCount] this function is deprecated; use World.getItemCount() instead."), this.world.getItemCount();
        }, setLayerLevel: function(d, w) {
          return e.console.error("[Viewer.setLayerLevel] this function is deprecated; use World.setItemIndex() instead."), this.world.setItemIndex(d, w);
        }, removeLayer: function(d) {
          return e.console.error("[Viewer.removeLayer] this function is deprecated; use World.removeItem() instead."), this.world.removeItem(d);
        }, forceRedraw: function() {
          return n[this.hash].forceRedraw = true, this;
        }, forceResize: function() {
          n[this.hash].needsResize = true, n[this.hash].forceResize = true;
        }, bindSequenceControls: function() {
          var d = e.delegate(this, v), w = e.delegate(this, y), S = e.delegate(this, this.goToNextPage), L = e.delegate(this, this.goToPreviousPage), I = this.navImages, V = true;
          return this.showSequenceControl && ((this.previousButton || this.nextButton) && (V = false), this.previousButton = new e.Button({ element: this.previousButton ? e.getElement(this.previousButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.PreviousPage"), srcRest: ge(this.prefixUrl, I.previous.REST), srcGroup: ge(this.prefixUrl, I.previous.GROUP), srcHover: ge(this.prefixUrl, I.previous.HOVER), srcDown: ge(this.prefixUrl, I.previous.DOWN), onRelease: L, onFocus: d, onBlur: w }), this.nextButton = new e.Button({ element: this.nextButton ? e.getElement(this.nextButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.NextPage"), srcRest: ge(this.prefixUrl, I.next.REST), srcGroup: ge(this.prefixUrl, I.next.GROUP), srcHover: ge(this.prefixUrl, I.next.HOVER), srcDown: ge(this.prefixUrl, I.next.DOWN), onRelease: S, onFocus: d, onBlur: w }), this.navPrevNextWrap || this.previousButton.disable(), (!this.tileSources || !this.tileSources.length) && this.nextButton.disable(), V && (this.paging = new e.ButtonGroup({ buttons: [this.previousButton, this.nextButton], clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.pagingControl = this.paging.element, this.toolbar ? this.toolbar.addControl(this.pagingControl, { anchor: e.ControlAnchor.BOTTOM_RIGHT }) : this.addControl(this.pagingControl, { anchor: this.sequenceControlAnchor || e.ControlAnchor.TOP_LEFT }))), this;
        }, bindStandardControls: function() {
          var d = e.delegate(this, Nt), w = e.delegate(this, nt), S = e.delegate(this, Wt), L = e.delegate(this, Ut), I = e.delegate(this, st), V = e.delegate(this, P), M = e.delegate(this, D), W = e.delegate(this, F), Z = e.delegate(this, U), se = e.delegate(this, z), X = e.delegate(this, v), oe = e.delegate(this, y), g = this.navImages, p = [], _ = true;
          return this.showNavigationControl && ((this.zoomInButton || this.zoomOutButton || this.homeButton || this.fullPageButton || this.rotateLeftButton || this.rotateRightButton || this.flipButton) && (_ = false), this.showZoomControl && (p.push(this.zoomInButton = new e.Button({ element: this.zoomInButton ? e.getElement(this.zoomInButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomIn"), srcRest: ge(this.prefixUrl, g.zoomIn.REST), srcGroup: ge(this.prefixUrl, g.zoomIn.GROUP), srcHover: ge(this.prefixUrl, g.zoomIn.HOVER), srcDown: ge(this.prefixUrl, g.zoomIn.DOWN), onPress: d, onRelease: w, onClick: S, onEnter: d, onExit: w, onFocus: X, onBlur: oe })), p.push(this.zoomOutButton = new e.Button({ element: this.zoomOutButton ? e.getElement(this.zoomOutButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.ZoomOut"), srcRest: ge(this.prefixUrl, g.zoomOut.REST), srcGroup: ge(this.prefixUrl, g.zoomOut.GROUP), srcHover: ge(this.prefixUrl, g.zoomOut.HOVER), srcDown: ge(this.prefixUrl, g.zoomOut.DOWN), onPress: L, onRelease: w, onClick: I, onEnter: L, onExit: w, onFocus: X, onBlur: oe }))), this.showHomeControl && p.push(this.homeButton = new e.Button({ element: this.homeButton ? e.getElement(this.homeButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Home"), srcRest: ge(this.prefixUrl, g.home.REST), srcGroup: ge(this.prefixUrl, g.home.GROUP), srcHover: ge(this.prefixUrl, g.home.HOVER), srcDown: ge(this.prefixUrl, g.home.DOWN), onRelease: V, onFocus: X, onBlur: oe })), this.showFullPageControl && p.push(this.fullPageButton = new e.Button({ element: this.fullPageButton ? e.getElement(this.fullPageButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.FullPage"), srcRest: ge(this.prefixUrl, g.fullpage.REST), srcGroup: ge(this.prefixUrl, g.fullpage.GROUP), srcHover: ge(this.prefixUrl, g.fullpage.HOVER), srcDown: ge(this.prefixUrl, g.fullpage.DOWN), onRelease: M, onFocus: X, onBlur: oe })), this.showRotationControl && (p.push(this.rotateLeftButton = new e.Button({ element: this.rotateLeftButton ? e.getElement(this.rotateLeftButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateLeft"), srcRest: ge(this.prefixUrl, g.rotateleft.REST), srcGroup: ge(this.prefixUrl, g.rotateleft.GROUP), srcHover: ge(this.prefixUrl, g.rotateleft.HOVER), srcDown: ge(this.prefixUrl, g.rotateleft.DOWN), onRelease: W, onFocus: X, onBlur: oe })), p.push(this.rotateRightButton = new e.Button({ element: this.rotateRightButton ? e.getElement(this.rotateRightButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.RotateRight"), srcRest: ge(this.prefixUrl, g.rotateright.REST), srcGroup: ge(this.prefixUrl, g.rotateright.GROUP), srcHover: ge(this.prefixUrl, g.rotateright.HOVER), srcDown: ge(this.prefixUrl, g.rotateright.DOWN), onRelease: Z, onFocus: X, onBlur: oe }))), this.showFlipControl && p.push(this.flipButton = new e.Button({ element: this.flipButton ? e.getElement(this.flipButton) : null, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, tooltip: e.getString("Tooltips.Flip"), srcRest: ge(this.prefixUrl, g.flip.REST), srcGroup: ge(this.prefixUrl, g.flip.GROUP), srcHover: ge(this.prefixUrl, g.flip.HOVER), srcDown: ge(this.prefixUrl, g.flip.DOWN), onRelease: se, onFocus: X, onBlur: oe })), _ ? (this.buttonGroup = new e.ButtonGroup({ buttons: p, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold }), this.navControl = this.buttonGroup.element, this.addHandler("open", e.delegate(this, ii)), this.toolbar ? this.toolbar.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT }) : this.addControl(this.navControl, { anchor: this.navigationControlAnchor || e.ControlAnchor.TOP_LEFT })) : this.customButtons = p), this;
        }, currentPage: function() {
          return this._sequenceIndex;
        }, goToPage: function(d) {
          return this.tileSources && d >= 0 && d < this.tileSources.length && (this._sequenceIndex = d, this._updateSequenceButtons(d), this.open(this.tileSources[d]), this.referenceStrip && this.referenceStrip.setFocus(d), this.raiseEvent("page", { page: d })), this;
        }, addOverlay: function(d, w, S, L) {
          var I;
          if (e.isPlainObject(d) ? I = d : I = { element: d, location: w, placement: S, onDraw: L }, d = e.getElement(I.element), a(this.currentOverlays, d) >= 0) return this;
          var V = l(this, I);
          return this.currentOverlays.push(V), V.drawHTML(this.overlaysContainer, this.viewport), this.raiseEvent("add-overlay", { element: d, location: I.location, placement: I.placement }), this;
        }, updateOverlay: function(d, w, S) {
          var L;
          return d = e.getElement(d), L = a(this.currentOverlays, d), L >= 0 && (this.currentOverlays[L].update(w, S), n[this.hash].forceRedraw = true, this.raiseEvent("update-overlay", { element: d, location: w, placement: S })), this;
        }, removeOverlay: function(d) {
          var w;
          return d = e.getElement(d), w = a(this.currentOverlays, d), w >= 0 && (this.currentOverlays[w].destroy(), this.currentOverlays.splice(w, 1), n[this.hash].forceRedraw = true, this.raiseEvent("remove-overlay", { element: d })), this;
        }, clearOverlays: function() {
          for (; this.currentOverlays.length > 0; ) this.currentOverlays.pop().destroy();
          return n[this.hash].forceRedraw = true, this.raiseEvent("clear-overlay", {}), this;
        }, getOverlayById: function(d) {
          var w;
          return d = e.getElement(d), w = a(this.currentOverlays, d), w >= 0 ? this.currentOverlays[w] : null;
        }, _updateSequenceButtons: function(d) {
          this.nextButton && (!this.tileSources || this.tileSources.length - 1 === d ? this.navPrevNextWrap || this.nextButton.disable() : this.nextButton.enable()), this.previousButton && (d > 0 ? this.previousButton.enable() : this.navPrevNextWrap || this.previousButton.disable());
        }, _showMessage: function(d) {
          this._hideMessage();
          var w = e.makeNeutralElement("div");
          w.appendChild(document.createTextNode(d)), this.messageDiv = e.makeCenteredNode(w), e.addClass(this.messageDiv, "openseadragon-message"), this.container.appendChild(this.messageDiv);
        }, _hideMessage: function() {
          var d = this.messageDiv;
          d && (d.parentNode.removeChild(d), delete this.messageDiv);
        }, gestureSettingsByDeviceType: function(d) {
          switch (d) {
            case "mouse":
              return this.gestureSettingsMouse;
            case "touch":
              return this.gestureSettingsTouch;
            case "pen":
              return this.gestureSettingsPen;
            default:
              return this.gestureSettingsUnknown;
          }
        }, _drawOverlays: function() {
          var d, w = this.currentOverlays.length;
          for (d = 0; d < w; d++) this.currentOverlays[d].drawHTML(this.overlaysContainer, this.viewport);
        }, _cancelPendingImages: function() {
          this._loadQueue = [];
        }, removeReferenceStrip: function() {
          this.showReferenceStrip = false, this.referenceStrip && (this.referenceStrip.destroy(), this.referenceStrip = null);
        }, addReferenceStrip: function() {
          if (this.showReferenceStrip = true, this.sequenceMode) {
            if (this.referenceStrip) return;
            this.tileSources.length && this.tileSources.length > 1 && (this.referenceStrip = new e.ReferenceStrip({ id: this.referenceStripElement, position: this.referenceStripPosition, sizeRatio: this.referenceStripSizeRatio, scroll: this.referenceStripScroll, height: this.referenceStripHeight, width: this.referenceStripWidth, tileSources: this.tileSources, prefixUrl: this.prefixUrl, viewer: this }), this.referenceStrip.setFocus(this._sequenceIndex));
          } else e.console.warn('Attempting to display a reference strip while "sequenceMode" is off.');
        }, _addUpdatePixelDensityRatioEvent: function() {
          this._updatePixelDensityRatioBind = this._updatePixelDensityRatio.bind(this), e.addEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _removeUpdatePixelDensityRatioEvent: function() {
          e.removeEvent(window, "resize", this._updatePixelDensityRatioBind);
        }, _updatePixelDensityRatio: function() {
          var d = e.pixelDensityRatio, w = e.getCurrentPixelDensityRatio();
          d !== w && (e.pixelDensityRatio = w, this.forceResize());
        }, goToPreviousPage: function() {
          var d = this._sequenceIndex - 1;
          this.navPrevNextWrap && d < 0 && (d += this.tileSources.length), this.goToPage(d);
        }, goToNextPage: function() {
          var d = this._sequenceIndex + 1;
          this.navPrevNextWrap && d >= this.tileSources.length && (d = 0), this.goToPage(d);
        }, isAnimating: function() {
          return n[this.hash].animating;
        } });
        function s(d) {
          return d = e.getElement(d), new e.Point(d.clientWidth === 0 ? 1 : d.clientWidth, d.clientHeight === 0 ? 1 : d.clientHeight);
        }
        function o(d, w, S, L, I) {
          var V = d;
          if (e.type(w) === "string") {
            if (w.match(/^\s*<.*>\s*$/)) w = e.parseXml(w);
            else if (w.match(/^\s*[{[].*[}\]]\s*$/)) try {
              var M = e.parseJSON(w);
              w = M;
            } catch {
            }
          }
          function W(Z, se) {
            Z.ready ? L(Z) : (Z.addHandler("ready", function() {
              L(Z);
            }), Z.addHandler("open-failed", function(X) {
              I({ message: X.message, source: se });
            }));
          }
          setTimeout(function() {
            if (e.type(w) === "string") w = new e.TileSource({ url: w, crossOriginPolicy: S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : d.crossOriginPolicy, ajaxWithCredentials: d.ajaxWithCredentials, ajaxHeaders: S.ajaxHeaders ? S.ajaxHeaders : d.ajaxHeaders, splitHashDataForPost: d.splitHashDataForPost, success: function(oe) {
              L(oe.tileSource);
            } }), w.addHandler("open-failed", function(oe) {
              I(oe);
            });
            else if (e.isPlainObject(w) || w.nodeType) if (w.crossOriginPolicy === void 0 && (S.crossOriginPolicy !== void 0 || d.crossOriginPolicy !== void 0) && (w.crossOriginPolicy = S.crossOriginPolicy !== void 0 ? S.crossOriginPolicy : d.crossOriginPolicy), w.ajaxWithCredentials === void 0 && (w.ajaxWithCredentials = d.ajaxWithCredentials), e.isFunction(w.getTileUrl)) {
              var Z = new e.TileSource(w);
              Z.getTileUrl = w.getTileUrl, L(Z);
            } else {
              var se = e.TileSource.determineType(V, w);
              if (!se) {
                I({ message: "Unable to load TileSource", source: w });
                return;
              }
              var X = se.prototype.configure.apply(V, [w]);
              W(new se(X), w);
            }
            else W(w, w);
          });
        }
        function l(d, w) {
          if (w instanceof e.Overlay) return w;
          var S = null;
          if (w.element) S = e.getElement(w.element);
          else {
            var L = w.id ? w.id : "openseadragon-overlay-" + Math.floor(Math.random() * 1e7);
            S = e.getElement(w.id), S || (S = document.createElement("a"), S.href = "#/overlay/" + L), S.id = L, e.addClass(S, w.className ? w.className : "openseadragon-overlay");
          }
          var I = w.location, V = w.width, M = w.height;
          if (!I) {
            var W = w.x, Z = w.y;
            if (w.px !== void 0) {
              var se = d.viewport.imageToViewportRectangle(new e.Rect(w.px, w.py, V || 0, M || 0));
              W = se.x, Z = se.y, V = V !== void 0 ? se.width : void 0, M = M !== void 0 ? se.height : void 0;
            }
            I = new e.Point(W, Z);
          }
          var X = w.placement;
          return X && e.type(X) === "string" && (X = e.Placement[w.placement.toUpperCase()]), new e.Overlay({ element: S, location: I, placement: X, onDraw: w.onDraw, checkResize: w.checkResize, width: V, height: M, rotationMode: w.rotationMode });
        }
        function a(d, w) {
          var S;
          for (S = d.length - 1; S >= 0; S--) if (d[S].element === w) return S;
          return -1;
        }
        function u(d, w) {
          return e.requestAnimationFrame(function() {
            w(d);
          });
        }
        function c(d) {
          e.requestAnimationFrame(function() {
            f(d);
          });
        }
        function h(d) {
          d.autoHideControls && (d.controlsShouldFade = true, d.controlsFadeBeginTime = e.now() + d.controlsFadeDelay, window.setTimeout(function() {
            c(d);
          }, d.controlsFadeDelay));
        }
        function f(d) {
          var w, S, L, I;
          if (d.controlsShouldFade) {
            for (w = e.now(), S = w - d.controlsFadeBeginTime, L = 1 - S / d.controlsFadeLength, L = Math.min(1, L), L = Math.max(0, L), I = d.controls.length - 1; I >= 0; I--) d.controls[I].autoFade && d.controls[I].setOpacity(L);
            L > 0 && c(d);
          }
        }
        function m(d) {
          var w;
          for (d.controlsShouldFade = false, w = d.controls.length - 1; w >= 0; w--) d.controls[w].setOpacity(1);
        }
        function v() {
          m(this);
        }
        function y() {
          h(this);
        }
        function x(d) {
          var w = { tracker: d.eventSource, position: d.position, originalEvent: d.originalEvent, preventDefault: d.preventDefault };
          this.raiseEvent("canvas-contextmenu", w), d.preventDefault = w.preventDefault;
        }
        function T(d) {
          var w = { originalEvent: d.originalEvent, preventDefaultAction: false, preventVerticalPan: d.preventVerticalPan || !this.panVertical, preventHorizontalPan: d.preventHorizontalPan || !this.panHorizontal };
          if (this.raiseEvent("canvas-key", w), !w.preventDefaultAction && !d.ctrl && !d.alt && !d.meta) switch (d.keyCode) {
            case 38:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -this.pixelsPerArrowPress))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 40:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, this.pixelsPerArrowPress))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 37:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 39:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(this.pixelsPerArrowPress, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 187:
              this.viewport.zoomBy(1.1), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 189:
              this.viewport.zoomBy(0.9), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 48:
              this.viewport.goHome(), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 87:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(1.1) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, -40))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 83:
              w.preventVerticalPan || (d.shift ? this.viewport.zoomBy(0.9) : this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(0, 40))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 65:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(-40, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 68:
              w.preventHorizontalPan || (this.viewport.panBy(this.viewport.deltaPointsFromPixels(new e.Point(40, 0))), this.viewport.applyConstraints()), d.preventDefault = true;
              break;
            case 82:
              d.shift ? this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.flipped ? this.viewport.setRotation(this.viewport.getRotation() - this.rotationIncrement) : this.viewport.setRotation(this.viewport.getRotation() + this.rotationIncrement), this.viewport.applyConstraints(), d.preventDefault = true;
              break;
            case 70:
              this.viewport.toggleFlip(), d.preventDefault = true;
              break;
            case 74:
              this.goToPreviousPage();
              break;
            case 75:
              this.goToNextPage();
              break;
            default:
              d.preventDefault = false;
              break;
          }
          else d.preventDefault = false;
        }
        function C(d) {
          var w = { originalEvent: d.originalEvent };
          this.raiseEvent("canvas-key-press", w);
        }
        function H(d) {
          var w, S = document.activeElement === this.canvas;
          S || this.canvas.focus(), this.viewport.flipped && (d.position.x = this.viewport.getContainerSize().x - d.position.x);
          var L = { tracker: d.eventSource, position: d.position, quick: d.quick, shift: d.shift, originalEvent: d.originalEvent, originalTarget: d.originalTarget, preventDefaultAction: false };
          this.raiseEvent("canvas-click", L), !L.preventDefaultAction && this.viewport && d.quick && (w = this.gestureSettingsByDeviceType(d.pointerType), w.clickToZoom === true && (this.viewport.zoomBy(d.shift ? 1 / this.zoomPerClick : this.zoomPerClick, w.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints()), w.dblClickDragToZoom && (n[this.hash].draggingToZoom === true ? (n[this.hash].lastClickTime = null, n[this.hash].draggingToZoom = false) : n[this.hash].lastClickTime = e.now()));
        }
        function k(d) {
          var w, S = { tracker: d.eventSource, position: d.position, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          this.raiseEvent("canvas-double-click", S), !S.preventDefaultAction && this.viewport && (w = this.gestureSettingsByDeviceType(d.pointerType), w.dblClickToZoom && (this.viewport.zoomBy(d.shift ? 1 / this.zoomPerClick : this.zoomPerClick, w.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints()));
        }
        function N(d) {
          var w, S = { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, delta: d.delta, speed: d.speed, direction: d.direction, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          if (this.raiseEvent("canvas-drag", S), w = this.gestureSettingsByDeviceType(d.pointerType), !S.preventDefaultAction && this.viewport) {
            if (w.dblClickDragToZoom && n[this.hash].draggingToZoom) {
              var L = Math.pow(this.zoomPerDblClickDrag, d.delta.y / 50);
              this.viewport.zoomBy(L);
            } else if (w.dragToPan && !n[this.hash].draggingToZoom) {
              if (this.panHorizontal || (d.delta.x = 0), this.panVertical || (d.delta.y = 0), this.viewport.flipped && (d.delta.x = -d.delta.x), this.constrainDuringPan) {
                var I = this.viewport.deltaPointsFromPixels(d.delta.negate());
                this.viewport.centerSpringX.target.value += I.x, this.viewport.centerSpringY.target.value += I.y;
                var V = this.viewport.getConstrainedBounds();
                this.viewport.centerSpringX.target.value -= I.x, this.viewport.centerSpringY.target.value -= I.y, V.xConstrained && (d.delta.x = 0), V.yConstrained && (d.delta.y = 0);
              }
              this.viewport.panBy(this.viewport.deltaPointsFromPixels(d.delta.negate()), w.flickEnabled && !this.constrainDuringPan);
            }
          }
        }
        function Y(d) {
          var w, S = { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, speed: d.speed, direction: d.direction, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false };
          if (this.raiseEvent("canvas-drag-end", S), w = this.gestureSettingsByDeviceType(d.pointerType), !S.preventDefaultAction && this.viewport) {
            if (!n[this.hash].draggingToZoom && w.dragToPan && w.flickEnabled && d.speed >= w.flickMinSpeed) {
              var L = 0;
              this.panHorizontal && (L = w.flickMomentum * d.speed * Math.cos(d.direction));
              var I = 0;
              this.panVertical && (I = w.flickMomentum * d.speed * Math.sin(d.direction));
              var V = this.viewport.pixelFromPoint(this.viewport.getCenter(true)), M = this.viewport.pointFromPixel(new e.Point(V.x - L, V.y - I));
              this.viewport.panTo(M, false);
            }
            this.viewport.applyConstraints();
          }
          w.dblClickDragToZoom && n[this.hash].draggingToZoom === true && (n[this.hash].draggingToZoom = false);
        }
        function K(d) {
          this.raiseEvent("canvas-enter", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function q(d) {
          this.raiseEvent("canvas-exit", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function ee(d) {
          var w;
          if (this.raiseEvent("canvas-press", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, insideElementPressed: d.insideElementPressed, insideElementReleased: d.insideElementReleased, originalEvent: d.originalEvent }), w = this.gestureSettingsByDeviceType(d.pointerType), w.dblClickDragToZoom) {
            var S = n[this.hash].lastClickTime, L = e.now();
            if (S === null) return;
            L - S < this.dblClickTimeThreshold && (n[this.hash].draggingToZoom = true), n[this.hash].lastClickTime = null;
          }
        }
        function ce(d) {
          this.raiseEvent("canvas-release", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, insideElementPressed: d.insideElementPressed, insideElementReleased: d.insideElementReleased, originalEvent: d.originalEvent });
        }
        function te(d) {
          this.raiseEvent("canvas-nonprimary-press", { tracker: d.eventSource, position: d.position, pointerType: d.pointerType, button: d.button, buttons: d.buttons, originalEvent: d.originalEvent });
        }
        function j(d) {
          this.raiseEvent("canvas-nonprimary-release", { tracker: d.eventSource, position: d.position, pointerType: d.pointerType, button: d.button, buttons: d.buttons, originalEvent: d.originalEvent });
        }
        function ne(d) {
          var w, S, L, I, V = { tracker: d.eventSource, pointerType: d.pointerType, gesturePoints: d.gesturePoints, lastCenter: d.lastCenter, center: d.center, lastDistance: d.lastDistance, distance: d.distance, shift: d.shift, originalEvent: d.originalEvent, preventDefaultPanAction: false, preventDefaultZoomAction: false, preventDefaultRotateAction: false };
          if (this.raiseEvent("canvas-pinch", V), this.viewport && (w = this.gestureSettingsByDeviceType(d.pointerType), w.pinchToZoom && (!V.preventDefaultPanAction || !V.preventDefaultZoomAction) && (S = this.viewport.pointFromPixel(d.center, true), w.zoomToRefPoint && !V.preventDefaultPanAction && (L = this.viewport.pointFromPixel(d.lastCenter, true), I = L.minus(S), this.panHorizontal || (I.x = 0), this.panVertical || (I.y = 0), this.viewport.panBy(I, true)), V.preventDefaultZoomAction || this.viewport.zoomBy(d.distance / d.lastDistance, S, true), this.viewport.applyConstraints()), w.pinchRotate && !V.preventDefaultRotateAction)) {
            var M = Math.atan2(d.gesturePoints[0].currentPos.y - d.gesturePoints[1].currentPos.y, d.gesturePoints[0].currentPos.x - d.gesturePoints[1].currentPos.x), W = Math.atan2(d.gesturePoints[0].lastPos.y - d.gesturePoints[1].lastPos.y, d.gesturePoints[0].lastPos.x - d.gesturePoints[1].lastPos.x);
            S = this.viewport.pointFromPixel(d.center, true), this.viewport.rotateTo(this.viewport.getRotation(true) + (M - W) * (180 / Math.PI), S, true);
          }
        }
        function he(d) {
          this.raiseEvent("canvas-focus", { tracker: d.eventSource, originalEvent: d.originalEvent });
        }
        function ye(d) {
          this.raiseEvent("canvas-blur", { tracker: d.eventSource, originalEvent: d.originalEvent });
        }
        function me(d) {
          var w, S, L, I, V;
          I = e.now(), V = I - this._lastScrollTime, V > this.minScrollDeltaTime ? (this._lastScrollTime = I, w = { tracker: d.eventSource, position: d.position, scroll: d.scroll, shift: d.shift, originalEvent: d.originalEvent, preventDefaultAction: false, preventDefault: true }, this.raiseEvent("canvas-scroll", w), !w.preventDefaultAction && this.viewport && (this.viewport.flipped && (d.position.x = this.viewport.getContainerSize().x - d.position.x), S = this.gestureSettingsByDeviceType(d.pointerType), S.scrollToZoom && (L = Math.pow(this.zoomPerScroll, d.scroll), this.viewport.zoomBy(L, S.zoomToRefPoint ? this.viewport.pointFromPixel(d.position, true) : null), this.viewport.applyConstraints())), d.preventDefault = w.preventDefault) : d.preventDefault = true;
        }
        function pe(d) {
          n[this.hash].mouseInside = true, m(this), this.raiseEvent("container-enter", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function ae(d) {
          d.pointers < 1 && (n[this.hash].mouseInside = false, n[this.hash].animating || h(this)), this.raiseEvent("container-exit", { tracker: d.eventSource, pointerType: d.pointerType, position: d.position, buttons: d.buttons, pointers: d.pointers, insideElementPressed: d.insideElementPressed, buttonDownAny: d.buttonDownAny, originalEvent: d.originalEvent });
        }
        function Ae(d) {
          Qe(d), d.isOpen() ? d._updateRequestId = u(d, Ae) : d._updateRequestId = false;
        }
        function Re(d, w) {
          var S = d.viewport, L = S.getZoom(), I = S.getCenter();
          S.resize(w, d.preserveImageSizeOnResize), S.panTo(I, true);
          var V;
          if (d.preserveImageSizeOnResize) V = n[d.hash].prevContainerSize.x / w.x;
          else {
            var M = new e.Point(0, 0), W = new e.Point(n[d.hash].prevContainerSize.x, n[d.hash].prevContainerSize.y).distanceTo(M), Z = new e.Point(w.x, w.y).distanceTo(M);
            V = Z / W * n[d.hash].prevContainerSize.x / w.x;
          }
          S.zoomTo(L * V, null, true), n[d.hash].prevContainerSize = w, n[d.hash].forceRedraw = true, n[d.hash].needsResize = false, n[d.hash].forceResize = false;
        }
        function Qe(d) {
          if (!(d._opening || !n[d.hash])) {
            if (d.autoResize || n[d.hash].forceResize) {
              var w;
              if (d._autoResizePolling) {
                w = s(d.container);
                var S = n[d.hash].prevContainerSize;
                w.equals(S) || (n[d.hash].needsResize = true);
              }
              n[d.hash].needsResize && Re(d, w || s(d.container));
            }
            var L = d.viewport.update(), I = d.world.update(L) || L;
            L && d.raiseEvent("viewport-change"), d.referenceStrip && (I = d.referenceStrip.update(d.viewport) || I);
            var V = n[d.hash].animating;
            !V && I && (d.raiseEvent("animation-start"), m(d));
            var M = V && !I;
            M && (n[d.hash].animating = false), (I || M || n[d.hash].forceRedraw || d.world.needsDraw()) && (je(d), d._drawOverlays(), d.navigator && d.navigator.update(d.viewport), n[d.hash].forceRedraw = false, I && d.raiseEvent("animation")), M && (d.raiseEvent("animation-finish"), n[d.hash].mouseInside || h(d)), n[d.hash].animating = I;
          }
        }
        function je(d) {
          d.imageLoader.clear(), d.world.draw(), d.raiseEvent("update-viewport", {});
        }
        function ge(d, w) {
          return d ? d + w : w;
        }
        function Nt() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = this.zoomPerSecond, n[this.hash].zooming = true, $e(this);
        }
        function Ut() {
          n[this.hash].lastZoomTime = e.now(), n[this.hash].zoomFactor = 1 / this.zoomPerSecond, n[this.hash].zooming = true, $e(this);
        }
        function nt() {
          n[this.hash].zooming = false;
        }
        function $e(d) {
          e.requestAnimationFrame(e.delegate(d, bt));
        }
        function bt() {
          var d, w, S;
          n[this.hash].zooming && this.viewport && (d = e.now(), w = d - n[this.hash].lastZoomTime, S = Math.pow(n[this.hash].zoomFactor, w / 1e3), this.viewport.zoomBy(S), this.viewport.applyConstraints(), n[this.hash].lastZoomTime = d, $e(this));
        }
        function Wt() {
          this.viewport && (n[this.hash].zooming = false, this.viewport.zoomBy(this.zoomPerClick / 1), this.viewport.applyConstraints());
        }
        function st() {
          this.viewport && (n[this.hash].zooming = false, this.viewport.zoomBy(1 / this.zoomPerClick), this.viewport.applyConstraints());
        }
        function ii() {
          this.buttonGroup && (this.buttonGroup.emulateEnter(), this.buttonGroup.emulateLeave());
        }
        function P() {
          this.viewport && this.viewport.goHome();
        }
        function D() {
          this.isFullPage() && !e.isFullScreen() ? this.setFullPage(false) : this.setFullScreen(!this.isFullPage()), this.buttonGroup && this.buttonGroup.emulateLeave(), this.fullPageButton.element.focus(), this.viewport && this.viewport.applyConstraints();
        }
        function F() {
          if (this.viewport) {
            var d = this.viewport.getRotation();
            this.viewport.flipped ? d += this.rotationIncrement : d -= this.rotationIncrement, this.viewport.setRotation(d);
          }
        }
        function U() {
          if (this.viewport) {
            var d = this.viewport.getRotation();
            this.viewport.flipped ? d -= this.rotationIncrement : d += this.rotationIncrement, this.viewport.setRotation(d);
          }
        }
        function z() {
          this.viewport.toggleFlip();
        }
        e.determineDrawer = function(d) {
          for (let w in i) {
            const S = i[w], L = S.prototype;
            if (L && L instanceof i.DrawerBase && e.isFunction(L.getType) && L.getType.call(S) === d) return S;
          }
          return null;
        };
      })(i), (function(e) {
        e.Navigator = function(u) {
          var c = u.viewer, h = this, f, m;
          u.element || u.id ? (u.element ? (u.id && e.console.warn("Given option.id for Navigator was ignored since option.element was provided and is being used instead."), u.element.id ? u.id = u.element.id : u.id = "navigator-" + e.now(), this.element = u.element) : this.element = document.getElementById(u.id), u.controlOptions = { anchor: e.ControlAnchor.NONE, attachToViewer: false, autoFade: false }) : (u.id = "navigator-" + e.now(), this.element = e.makeNeutralElement("div"), u.controlOptions = { anchor: e.ControlAnchor.TOP_RIGHT, attachToViewer: true, autoFade: u.autoFade }, u.position && (u.position === "BOTTOM_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_RIGHT : u.position === "BOTTOM_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.BOTTOM_LEFT : u.position === "TOP_RIGHT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_RIGHT : u.position === "TOP_LEFT" ? u.controlOptions.anchor = e.ControlAnchor.TOP_LEFT : u.position === "ABSOLUTE" && (u.controlOptions.anchor = e.ControlAnchor.ABSOLUTE, u.controlOptions.top = u.top, u.controlOptions.left = u.left, u.controlOptions.height = u.height, u.controlOptions.width = u.width))), this.element.id = u.id, this.element.className += " navigator", u = e.extend(true, { sizeRatio: e.DEFAULT_SETTINGS.navigatorSizeRatio }, u, { element: this.element, tabIndex: -1, showNavigator: false, mouseNavEnabled: false, showNavigationControl: false, showSequenceControl: false, immediateRender: true, blendTime: 0, animationTime: u.animationTime, autoResize: false, minZoomImageRatio: 1, background: u.background, opacity: u.opacity, borderColor: u.borderColor, displayRegionColor: u.displayRegionColor }), u.minPixelRatio = this.minPixelRatio = c.minPixelRatio, e.setElementTouchActionNone(this.element), this.borderWidth = 2, this.fudge = new e.Point(1, 1), this.totalBorderWidths = new e.Point(this.borderWidth * 2, this.borderWidth * 2).minus(this.fudge), u.controlOptions.anchor !== e.ControlAnchor.NONE && (function(x, T) {
            x.margin = "0px", x.border = T + "px solid " + u.borderColor, x.padding = "0px", x.background = u.background, x.opacity = u.opacity, x.overflow = "hidden";
          })(this.element.style, this.borderWidth), this.displayRegion = e.makeNeutralElement("div"), this.displayRegion.id = this.element.id + "-displayregion", this.displayRegion.className = "displayregion", (function(x, T) {
            x.position = "relative", x.top = "0px", x.left = "0px", x.fontSize = "0px", x.overflow = "hidden", x.border = T + "px solid " + u.displayRegionColor, x.margin = "0px", x.padding = "0px", x.background = "transparent", x.float = "left", x.cssFloat = "left", x.zIndex = 999999999, x.cursor = "default", x.boxSizing = "content-box";
          })(this.displayRegion.style, this.borderWidth), e.setElementPointerEventsNone(this.displayRegion), e.setElementTouchActionNone(this.displayRegion), this.displayRegionContainer = e.makeNeutralElement("div"), this.displayRegionContainer.id = this.element.id + "-displayregioncontainer", this.displayRegionContainer.className = "displayregioncontainer", this.displayRegionContainer.style.width = "100%", this.displayRegionContainer.style.height = "100%", e.setElementPointerEventsNone(this.displayRegionContainer), e.setElementTouchActionNone(this.displayRegionContainer), c.addControl(this.element, u.controlOptions), this._resizeWithViewer = u.controlOptions.anchor !== e.ControlAnchor.ABSOLUTE && u.controlOptions.anchor !== e.ControlAnchor.NONE, u.width && u.height ? (this.setWidth(u.width), this.setHeight(u.height)) : this._resizeWithViewer && (f = e.getElementSize(c.element), this.element.style.height = Math.round(f.y * u.sizeRatio) + "px", this.element.style.width = Math.round(f.x * u.sizeRatio) + "px", this.oldViewerSize = f, m = e.getElementSize(this.element), this.elementArea = m.x * m.y), this.oldContainerSize = new e.Point(0, 0), e.Viewer.apply(this, [u]), this.displayRegionContainer.appendChild(this.displayRegion), this.element.getElementsByTagName("div")[0].appendChild(this.displayRegionContainer);
          function v(x, T) {
            l(h.displayRegionContainer, x), l(h.displayRegion, -x), h.viewport.setRotation(x, T);
          }
          if (u.navigatorRotate) {
            var y = u.viewer.viewport ? u.viewer.viewport.getRotation() : u.viewer.degrees || 0;
            v(y, true), u.viewer.addHandler("rotate", function(x) {
              v(x.degrees, x.immediately);
            });
          }
          this.innerTracker.destroy(), this.innerTracker = new e.MouseTracker({ userData: "Navigator.innerTracker", element: this.element, dragHandler: e.delegate(this, r), clickHandler: e.delegate(this, n), releaseHandler: e.delegate(this, s), scrollHandler: e.delegate(this, o), preProcessEventHandler: function(x) {
            x.eventType === "wheel" && (x.preventDefault = true);
          } }), this.outerTracker.userData = "Navigator.outerTracker", e.setElementPointerEventsNone(this.canvas), e.setElementPointerEventsNone(this.container), this.addHandler("reset-size", function() {
            h.viewport && h.viewport.goHome(true);
          }), c.world.addHandler("item-index-change", function(x) {
            window.setTimeout(function() {
              var T = h.world.getItemAt(x.previousIndex);
              h.world.setItemIndex(T, x.newIndex);
            }, 1);
          }), c.world.addHandler("remove-item", function(x) {
            var T = x.item, C = h._getMatchingItem(T);
            C && h.world.removeItem(C);
          }), this.update(c.viewport);
        }, e.extend(e.Navigator.prototype, e.EventSource.prototype, e.Viewer.prototype, { updateSize: function() {
          if (this.viewport) {
            var u = new e.Point(this.container.clientWidth === 0 ? 1 : this.container.clientWidth, this.container.clientHeight === 0 ? 1 : this.container.clientHeight);
            u.equals(this.oldContainerSize) || (this.viewport.resize(u, true), this.viewport.goHome(true), this.oldContainerSize = u, this.world.update(), this.world.draw(), this.update(this.viewer.viewport));
          }
        }, setWidth: function(u) {
          this.width = u, this.element.style.width = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = false, this.updateSize();
        }, setHeight: function(u) {
          this.height = u, this.element.style.height = typeof u == "number" ? u + "px" : u, this._resizeWithViewer = false, this.updateSize();
        }, setFlip: function(u) {
          return this.viewport.setFlip(u), this.setDisplayTransform(this.viewer.viewport.getFlip() ? "scale(-1,1)" : "scale(1,1)"), this;
        }, setDisplayTransform: function(u) {
          a(this.canvas, u), a(this.element, u);
        }, update: function(u) {
          var c, h, f, m, v, y;
          if (u || (u = this.viewer.viewport), c = e.getElementSize(this.viewer.element), this._resizeWithViewer && c.x && c.y && !c.equals(this.oldViewerSize) && (this.oldViewerSize = c, this.maintainSizeRatio || !this.elementArea ? (h = c.x * this.sizeRatio, f = c.y * this.sizeRatio) : (h = Math.sqrt(this.elementArea * (c.x / c.y)), f = this.elementArea / h), this.element.style.width = Math.round(h) + "px", this.element.style.height = Math.round(f) + "px", this.elementArea || (this.elementArea = h * f), this.updateSize()), u && this.viewport) {
            if (m = u.getBoundsNoRotate(true), v = this.viewport.pixelFromPointNoRotate(m.getTopLeft(), false), y = this.viewport.pixelFromPointNoRotate(m.getBottomRight(), false).minus(this.totalBorderWidths), !this.navigatorRotate) {
              var x = u.getRotation(true);
              l(this.displayRegion, -x);
            }
            var T = this.displayRegion.style;
            T.display = this.world.getItemCount() ? "block" : "none", T.top = v.y.toFixed(2) + "px", T.left = v.x.toFixed(2) + "px";
            var C = y.x - v.x, H = y.y - v.y;
            T.width = Math.round(Math.max(C, 0)) + "px", T.height = Math.round(Math.max(H, 0)) + "px";
          }
        }, addTiledImage: function(u) {
          var c = this, h = u.originalTiledImage;
          delete u.original;
          var f = e.extend({}, u, { success: function(m) {
            var v = m.item;
            v._originalForNavigator = h, c._matchBounds(v, h, true), c._matchOpacity(v, h), c._matchCompositeOperation(v, h);
            function y() {
              c._matchBounds(v, h);
            }
            function x() {
              c._matchOpacity(v, h);
            }
            function T() {
              c._matchCompositeOperation(v, h);
            }
            h.addHandler("bounds-change", y), h.addHandler("clip-change", y), h.addHandler("opacity-change", x), h.addHandler("composite-operation-change", T);
          } });
          return e.Viewer.prototype.addTiledImage.apply(this, [f]);
        }, destroy: function() {
          return e.Viewer.prototype.destroy.apply(this);
        }, _getMatchingItem: function(u) {
          for (var c = this.world.getItemCount(), h, f = 0; f < c; f++) if (h = this.world.getItemAt(f), h._originalForNavigator === u) return h;
          return null;
        }, _matchBounds: function(u, c, h) {
          var f = c.getBoundsNoRotate();
          u.setPosition(f.getTopLeft(), h), u.setWidth(f.width, h), u.setRotation(c.getRotation(), h), u.setClip(c.getClip()), u.setFlip(c.getFlip());
        }, _matchOpacity: function(u, c) {
          u.setOpacity(c.opacity);
        }, _matchCompositeOperation: function(u, c) {
          u.setCompositeOperation(c.compositeOperation);
        } });
        function n(u) {
          var c = { tracker: u.eventSource, position: u.position, quick: u.quick, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: false };
          if (this.viewer.raiseEvent("navigator-click", c), !c.preventDefaultAction && u.quick && this.viewer.viewport && (this.panVertical || this.panHorizontal)) {
            this.viewer.viewport.flipped && (u.position.x = this.viewport.getContainerSize().x - u.position.x);
            var h = this.viewport.pointFromPixel(u.position);
            this.panVertical ? this.panHorizontal || (h.x = this.viewer.viewport.getCenter(true).x) : h.y = this.viewer.viewport.getCenter(true).y, this.viewer.viewport.panTo(h), this.viewer.viewport.applyConstraints();
          }
        }
        function r(u) {
          var c = { tracker: u.eventSource, position: u.position, delta: u.delta, speed: u.speed, direction: u.direction, shift: u.shift, originalEvent: u.originalEvent, preventDefaultAction: false };
          this.viewer.raiseEvent("navigator-drag", c), !c.preventDefaultAction && this.viewer.viewport && (this.panHorizontal || (u.delta.x = 0), this.panVertical || (u.delta.y = 0), this.viewer.viewport.flipped && (u.delta.x = -u.delta.x), this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(u.delta)), this.viewer.constrainDuringPan && this.viewer.viewport.applyConstraints());
        }
        function s(u) {
          u.insideElementPressed && this.viewer.viewport && this.viewer.viewport.applyConstraints();
        }
        function o(u) {
          var c = { tracker: u.eventSource, position: u.position, scroll: u.scroll, shift: u.shift, originalEvent: u.originalEvent, preventDefault: u.preventDefault };
          this.viewer.raiseEvent("navigator-scroll", c), u.preventDefault = c.preventDefault;
        }
        function l(u, c) {
          a(u, "rotate(" + c + "deg)");
        }
        function a(u, c) {
          u.style.webkitTransform = c, u.style.mozTransform = c, u.style.msTransform = c, u.style.oTransform = c, u.style.transform = c;
        }
      })(i), (function(e) {
        var n = { Errors: { Dzc: "Sorry, we don't support Deep Zoom Collections!", Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.", ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.", Security: "It looks like a security restriction stopped us from loading this Deep Zoom Image.", Status: "This space unintentionally left blank ({0} {1}).", OpenFailed: "Unable to open {0}: {1}" }, Tooltips: { FullPage: "Toggle full page", Home: "Go home", ZoomIn: "Zoom in", ZoomOut: "Zoom out", NextPage: "Next page", PreviousPage: "Previous page", RotateLeft: "Rotate left", RotateRight: "Rotate right", Flip: "Flip Horizontally" } };
        e.extend(e, { getString: function(r) {
          var s = r.split("."), o = null, l = arguments, a = n, u;
          for (u = 0; u < s.length - 1; u++) a = a[s[u]] || {};
          return o = a[s[u]], typeof o != "string" && (e.console.error("Untranslated source string:", r), o = ""), o.replace(/\{\d+\}/g, function(c) {
            var h = parseInt(c.match(/\d+/), 10) + 1;
            return h < l.length ? l[h] : "";
          });
        }, setString: function(r, s) {
          var o = r.split("."), l = n, a;
          for (a = 0; a < o.length - 1; a++) l[o[a]] || (l[o[a]] = {}), l = l[o[a]];
          l[o[a]] = s;
        } });
      })(i), (function(e) {
        e.Point = function(n, r) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0;
        }, e.Point.prototype = { clone: function() {
          return new e.Point(this.x, this.y);
        }, plus: function(n) {
          return new e.Point(this.x + n.x, this.y + n.y);
        }, minus: function(n) {
          return new e.Point(this.x - n.x, this.y - n.y);
        }, times: function(n) {
          return new e.Point(this.x * n, this.y * n);
        }, divide: function(n) {
          return new e.Point(this.x / n, this.y / n);
        }, negate: function() {
          return new e.Point(-this.x, -this.y);
        }, distanceTo: function(n) {
          return Math.sqrt(Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2));
        }, squaredDistanceTo: function(n) {
          return Math.pow(this.x - n.x, 2) + Math.pow(this.y - n.y, 2);
        }, apply: function(n) {
          return new e.Point(n(this.x), n(this.y));
        }, equals: function(n) {
          return n instanceof e.Point && this.x === n.x && this.y === n.y;
        }, rotate: function(n, r) {
          r = r || new e.Point(0, 0);
          var s, o;
          if (n % 90 === 0) {
            var l = e.positiveModulo(n, 360);
            switch (l) {
              case 0:
                s = 1, o = 0;
                break;
              case 90:
                s = 0, o = 1;
                break;
              case 180:
                s = -1, o = 0;
                break;
              case 270:
                s = 0, o = -1;
                break;
            }
          } else {
            var a = n * Math.PI / 180;
            s = Math.cos(a), o = Math.sin(a);
          }
          var u = s * (this.x - r.x) - o * (this.y - r.y) + r.x, c = o * (this.x - r.x) + s * (this.y - r.y) + r.y;
          return new e.Point(u, c);
        }, toString: function() {
          return "(" + Math.round(this.x * 100) / 100 + "," + Math.round(this.y * 100) / 100 + ")";
        } };
      })(i), (function(e) {
        e.TileSource = function(r, s, o, l, a, u) {
          var c = this, h = arguments, f, m;
          if (e.isPlainObject(r) ? f = r : f = { width: h[0], height: h[1], tileSize: h[2], tileOverlap: h[3], minLevel: h[4], maxLevel: h[5] }, e.EventSource.call(this), e.extend(true, this, f), !this.success) {
            for (m = 0; m < arguments.length; m++) if (e.isFunction(arguments[m])) {
              this.success = arguments[m];
              break;
            }
          }
          this.success && this.addHandler("ready", function(v) {
            c.success(v);
          }), e.type(arguments[0]) === "string" && (this.url = arguments[0]), this.url ? (this.aspectRatio = 1, this.dimensions = new e.Point(10, 10), this._tileWidth = 0, this._tileHeight = 0, this.tileOverlap = 0, this.minLevel = 0, this.maxLevel = 0, this.ready = false, this.getImageInfo(this.url)) : (this.ready = true, this.aspectRatio = f.width && f.height ? f.width / f.height : 1, this.dimensions = new e.Point(f.width, f.height), this.tileSize ? (this._tileWidth = this._tileHeight = this.tileSize, delete this.tileSize) : (this.tileWidth ? (this._tileWidth = this.tileWidth, delete this.tileWidth) : this._tileWidth = 0, this.tileHeight ? (this._tileHeight = this.tileHeight, delete this.tileHeight) : this._tileHeight = 0), this.tileOverlap = f.tileOverlap ? f.tileOverlap : 0, this.minLevel = f.minLevel ? f.minLevel : 0, this.maxLevel = f.maxLevel !== void 0 && f.maxLevel !== null ? f.maxLevel : f.width && f.height ? Math.ceil(Math.log(Math.max(f.width, f.height)) / Math.log(2)) : 0, this.success && e.isFunction(this.success) && this.success(this));
        }, e.TileSource.prototype = { getTileSize: function(r) {
          return e.console.error("[TileSource.getTileSize] is deprecated. Use TileSource.getTileWidth() and TileSource.getTileHeight() instead"), this._tileWidth;
        }, getTileWidth: function(r) {
          return this._tileWidth ? this._tileWidth : this.getTileSize(r);
        }, getTileHeight: function(r) {
          return this._tileHeight ? this._tileHeight : this.getTileSize(r);
        }, setMaxLevel: function(r) {
          this.maxLevel = r, this._memoizeLevelScale();
        }, getLevelScale: function(r) {
          return this._memoizeLevelScale(), this.getLevelScale(r);
        }, _memoizeLevelScale: function() {
          var r = {}, s;
          for (s = 0; s <= this.maxLevel; s++) r[s] = 1 / Math.pow(2, this.maxLevel - s);
          this.getLevelScale = function(o) {
            return r[o];
          };
        }, getNumTiles: function(r) {
          var s = this.getLevelScale(r), o = Math.ceil(s * this.dimensions.x / this.getTileWidth(r)), l = Math.ceil(s * this.dimensions.y / this.getTileHeight(r));
          return new e.Point(o, l);
        }, getPixelRatio: function(r) {
          var s = this.dimensions.times(this.getLevelScale(r)), o = 1 / s.x * e.pixelDensityRatio, l = 1 / s.y * e.pixelDensityRatio;
          return new e.Point(o, l);
        }, getClosestLevel: function() {
          var r, s;
          for (r = this.minLevel + 1; r <= this.maxLevel && (s = this.getNumTiles(r), !(s.x > 1 || s.y > 1)); r++) ;
          return r - 1;
        }, getTileAtPoint: function(r, s) {
          var o = s.x >= 0 && s.x <= 1 && s.y >= 0 && s.y <= 1 / this.aspectRatio;
          e.console.assert(o, "[TileSource.getTileAtPoint] must be called with a valid point.");
          var l = this.dimensions.x * this.getLevelScale(r), a = s.x * l, u = s.y * l, c = Math.floor(a / this.getTileWidth(r)), h = Math.floor(u / this.getTileHeight(r));
          s.x >= 1 && (c = this.getNumTiles(r).x - 1);
          var f = 1e-15;
          return s.y >= 1 / this.aspectRatio - f && (h = this.getNumTiles(r).y - 1), new e.Point(c, h);
        }, getTileBounds: function(r, s, o, l) {
          var a = this.dimensions.times(this.getLevelScale(r)), u = this.getTileWidth(r), c = this.getTileHeight(r), h = s === 0 ? 0 : u * s - this.tileOverlap, f = o === 0 ? 0 : c * o - this.tileOverlap, m = u + (s === 0 ? 1 : 2) * this.tileOverlap, v = c + (o === 0 ? 1 : 2) * this.tileOverlap, y = 1 / a.x;
          return m = Math.min(m, a.x - h), v = Math.min(v, a.y - f), l ? new e.Rect(0, 0, m, v) : new e.Rect(h * y, f * y, m * y, v * y);
        }, getImageInfo: function(r) {
          var s = this, o, l, a, u, c, h, f;
          r && (c = r.split("/"), h = c[c.length - 1], f = h.lastIndexOf("."), f > -1 && (c[c.length - 1] = h.slice(0, f)));
          var m = null;
          if (this.splitHashDataForPost) {
            var v = r.indexOf("#");
            v !== -1 && (m = r.substring(v + 1), r = r.substr(0, v));
          }
          l = function(y) {
            typeof y == "string" && (y = e.parseXml(y));
            var x = e.TileSource.determineType(s, y, r);
            if (!x) {
              s.raiseEvent("open-failed", { message: "Unable to load TileSource", source: r });
              return;
            }
            u = x.prototype.configure.apply(s, [y, r, m]), u.ajaxWithCredentials === void 0 && (u.ajaxWithCredentials = s.ajaxWithCredentials), a = new x(u), s.ready = true, s.raiseEvent("ready", { tileSource: a });
          }, r.match(/\.js$/) ? (o = r.split("/").pop().replace(".js", ""), e.jsonp({ url: r, async: false, callbackName: o, callback: l })) : e.makeAjaxRequest({ url: r, postData: m, withCredentials: this.ajaxWithCredentials, headers: this.ajaxHeaders, success: function(y) {
            var x = n(y);
            l(x);
          }, error: function(y, x) {
            var T;
            try {
              T = "HTTP " + y.status + " attempting to load TileSource: " + r;
            } catch {
              var C;
              typeof x > "u" || !x.toString ? C = "Unknown error" : C = x.toString(), T = C + " attempting to load TileSource: " + r;
            }
            e.console.error(T), s.raiseEvent("open-failed", { message: T, source: r, postData: m });
          } });
        }, supports: function(r, s) {
          return false;
        }, configure: function(r, s, o) {
          throw new Error("Method not implemented.");
        }, getTileUrl: function(r, s, o) {
          throw new Error("Method not implemented.");
        }, getTilePostData: function(r, s, o) {
          return null;
        }, getTileAjaxHeaders: function(r, s, o) {
          return {};
        }, getTileHashKey: function(r, s, o, l, a, u) {
          function c(h) {
            return a ? h + "+" + JSON.stringify(a) : h;
          }
          return c(typeof l != "string" ? r + "/" + s + "_" + o : l);
        }, tileExists: function(r, s, o) {
          var l = this.getNumTiles(r);
          return r >= this.minLevel && r <= this.maxLevel && s >= 0 && o >= 0 && s < l.x && o < l.y;
        }, hasTransparency: function(r, s, o, l) {
          return !!r || s.match(".png");
        }, downloadTileStart: function(r) {
          var s = r.userData, o = new Image();
          s.image = o, s.request = null;
          var l = function(a) {
            if (!o) {
              r.finish(null, s.request, "Image load failed: undefined Image instance.");
              return;
            }
            o.onload = o.onerror = o.onabort = null, r.finish(a ? null : o, s.request, a);
          };
          o.onload = function() {
            l();
          }, o.onabort = o.onerror = function() {
            l("Image load aborted.");
          }, r.loadWithAjax ? s.request = e.makeAjaxRequest({ url: r.src, withCredentials: r.ajaxWithCredentials, headers: r.ajaxHeaders, responseType: "arraybuffer", postData: r.postData, success: function(a) {
            var u;
            try {
              u = new window.Blob([a.response]);
            } catch (f) {
              var c = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder;
              if (f.name === "TypeError" && c) {
                var h = new c();
                h.append(a.response), u = h.getBlob();
              }
            }
            u.size === 0 ? l("Empty image response.") : o.src = (window.URL || window.webkitURL).createObjectURL(u);
          }, error: function(a) {
            l("Image load aborted - XHR error");
          } }) : (r.crossOriginPolicy !== false && (o.crossOrigin = r.crossOriginPolicy), o.src = r.src);
        }, downloadTileAbort: function(r) {
          r.userData.request && r.userData.request.abort();
          var s = r.userData.image;
          r.userData.image && (s.onload = s.onerror = s.onabort = null);
        }, createTileCache: function(r, s, o) {
          r._data = s;
        }, destroyTileCache: function(r) {
          r._data = null, r._renderedContext = null;
        }, getTileCacheData: function(r) {
          return r._data;
        }, getTileCacheDataAsImage: function(r) {
          return r._data;
        }, getTileCacheDataAsContext2D: function(r) {
          if (!r._renderedContext) {
            var s = document.createElement("canvas");
            s.width = r._data.width, s.height = r._data.height, r._renderedContext = s.getContext("2d"), r._renderedContext.drawImage(r._data, 0, 0), r._data = null;
          }
          return r._renderedContext;
        } }, e.extend(true, e.TileSource.prototype, e.EventSource.prototype);
        function n(r) {
          var s = r.responseText, o = r.status, l, a;
          if (r) {
            if (r.status !== 200 && r.status !== 0) throw o = r.status, l = o === 404 ? "Not Found" : r.statusText, new Error(e.getString("Errors.Status", o, l));
          } else throw new Error(e.getString("Errors.Security"));
          if (s.match(/^\s*<.*/)) try {
            a = r.responseXML && r.responseXML.documentElement ? r.responseXML : e.parseXml(s);
          } catch {
            a = r.responseText;
          }
          else if (s.match(/\s*[{[].*/)) try {
            a = e.parseJSON(s);
          } catch {
            a = s;
          }
          else a = s;
          return a;
        }
        e.TileSource.determineType = function(r, s, o) {
          var l;
          for (l in i) if (l.match(/.+TileSource$/) && e.isFunction(i[l]) && e.isFunction(i[l].prototype.supports) && i[l].prototype.supports.call(r, s, o)) return i[l];
          return e.console.error("No TileSource was able to open %s %s", o, s), null;
        };
      })(i), (function(e) {
        e.DziTileSource = function(s, o, l, a, u, c, h, f, m) {
          var v, y, x, T;
          if (e.isPlainObject(s) ? T = s : T = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4], fileFormat: arguments[5], displayRects: arguments[6], minLevel: arguments[7], maxLevel: arguments[8] }, this._levelRects = {}, this.tilesUrl = T.tilesUrl, this.fileFormat = T.fileFormat, this.displayRects = T.displayRects, this.displayRects) for (v = this.displayRects.length - 1; v >= 0; v--) for (y = this.displayRects[v], x = y.minLevel; x <= y.maxLevel; x++) this._levelRects[x] || (this._levelRects[x] = []), this._levelRects[x].push(y);
          e.TileSource.apply(this, [T]);
        }, e.extend(e.DziTileSource.prototype, e.TileSource.prototype, { supports: function(s, o) {
          var l;
          return s.Image ? l = s.Image.xmlns : s.documentElement && (s.documentElement.localName === "Image" || s.documentElement.tagName === "Image") && (l = s.documentElement.namespaceURI), l = (l || "").toLowerCase(), l.indexOf("schemas.microsoft.com/deepzoom/2008") !== -1 || l.indexOf("schemas.microsoft.com/deepzoom/2009") !== -1;
        }, configure: function(s, o, l) {
          var a;
          return e.isPlainObject(s) ? a = r(this, s) : a = n(this, s), o && !a.tilesUrl && (a.tilesUrl = o.replace(/([^/]+?)(\.(dzi|xml|js)?(\?[^/]*)?)?\/?$/, "$1_files/"), o.search(/\.(dzi|xml|js)\?/) !== -1 ? a.queryParams = o.match(/\?.*/) : a.queryParams = ""), a;
        }, getTileUrl: function(s, o, l) {
          return [this.tilesUrl, s, "/", o, "_", l, ".", this.fileFormat, this.queryParams].join("");
        }, tileExists: function(s, o, l) {
          var a = this._levelRects[s], u, c, h, f, m, v, y;
          if (this.minLevel && s < this.minLevel || this.maxLevel && s > this.maxLevel) return false;
          if (!a || !a.length) return true;
          for (y = a.length - 1; y >= 0; y--) if (u = a[y], !(s < u.minLevel || s > u.maxLevel) && (c = this.getLevelScale(s), h = u.x * c, f = u.y * c, m = h + u.width * c, v = f + u.height * c, h = Math.floor(h / this._tileWidth), f = Math.floor(f / this._tileWidth), m = Math.ceil(m / this._tileWidth), v = Math.ceil(v / this._tileWidth), h <= o && o < m && f <= l && l < v)) return true;
          return false;
        } });
        function n(s, o) {
          if (!o || !o.documentElement) throw new Error(e.getString("Errors.Xml"));
          var l = o.documentElement, a = l.localName || l.tagName, u = o.documentElement.namespaceURI, c = null, h = [], f, m, v, y, x;
          if (a === "Image") try {
            if (y = l.getElementsByTagName("Size")[0], y === void 0 && (y = l.getElementsByTagNameNS(u, "Size")[0]), c = { Image: { xmlns: "http://schemas.microsoft.com/deepzoom/2008", Url: l.getAttribute("Url"), Format: l.getAttribute("Format"), DisplayRect: null, Overlap: parseInt(l.getAttribute("Overlap"), 10), TileSize: parseInt(l.getAttribute("TileSize"), 10), Size: { Height: parseInt(y.getAttribute("Height"), 10), Width: parseInt(y.getAttribute("Width"), 10) } } }, !e.imageFormatSupported(c.Image.Format)) throw new Error(e.getString("Errors.ImageFormat", c.Image.Format.toUpperCase()));
            for (f = l.getElementsByTagName("DisplayRect"), f === void 0 && (f = l.getElementsByTagNameNS(u, "DisplayRect")[0]), x = 0; x < f.length; x++) m = f[x], v = m.getElementsByTagName("Rect")[0], v === void 0 && (v = m.getElementsByTagNameNS(u, "Rect")[0]), h.push({ Rect: { X: parseInt(v.getAttribute("X"), 10), Y: parseInt(v.getAttribute("Y"), 10), Width: parseInt(v.getAttribute("Width"), 10), Height: parseInt(v.getAttribute("Height"), 10), MinLevel: parseInt(m.getAttribute("MinLevel"), 10), MaxLevel: parseInt(m.getAttribute("MaxLevel"), 10) } });
            return h.length && (c.Image.DisplayRect = h), r(s, c);
          } catch (H) {
            throw H instanceof Error ? H : new Error(e.getString("Errors.Dzi"));
          }
          else {
            if (a === "Collection") throw new Error(e.getString("Errors.Dzc"));
            if (a === "Error") {
              var T = l.getElementsByTagName("Message")[0], C = T.firstChild.nodeValue;
              throw new Error(C);
            }
          }
          throw new Error(e.getString("Errors.Dzi"));
        }
        function r(s, o) {
          var l = o.Image, a = l.Url, u = l.Format, c = l.Size, h = l.DisplayRect || [], f = parseInt(c.Width, 10), m = parseInt(c.Height, 10), v = parseInt(l.TileSize, 10), y = parseInt(l.Overlap, 10), x = [], T, C;
          for (C = 0; C < h.length; C++) T = h[C].Rect, x.push(new e.DisplayRect(parseInt(T.X, 10), parseInt(T.Y, 10), parseInt(T.Width, 10), parseInt(T.Height, 10), parseInt(T.MinLevel, 10), parseInt(T.MaxLevel, 10)));
          return e.extend(true, { width: f, height: m, tileSize: v, tileOverlap: y, minLevel: null, maxLevel: null, tilesUrl: a, fileFormat: u, displayRects: x }, o);
        }
      })(i), (function(e) {
        e.IIIFTileSource = function(l) {
          if (e.extend(true, this, l), this._id = this["@id"] || this.id || this.identifier || null, !(this.height && this.width && this._id)) throw new Error("IIIF required parameters (width, height, or id) not provided.");
          if (l.tileSizePerScaleFactor = {}, this.tileFormat = this.tileFormat || "jpg", this.version = l.version, this.tile_width && this.tile_height) l.tileWidth = this.tile_width, l.tileHeight = this.tile_height;
          else if (this.tile_width) l.tileSize = this.tile_width;
          else if (this.tile_height) l.tileSize = this.tile_height;
          else if (this.tiles) if (this.tiles.length === 1) l.tileWidth = this.tiles[0].width, l.tileHeight = this.tiles[0].height || this.tiles[0].width, this.scale_factors = this.tiles[0].scaleFactors;
          else {
            this.scale_factors = [];
            for (var a = 0; a < this.tiles.length; a++) for (var u = 0; u < this.tiles[a].scaleFactors.length; u++) {
              var c = this.tiles[a].scaleFactors[u];
              this.scale_factors.push(c), l.tileSizePerScaleFactor[c] = { width: this.tiles[a].width, height: this.tiles[a].height || this.tiles[a].width };
            }
          }
          else if (n(l)) {
            for (var h = Math.min(this.height, this.width), f = [256, 512, 1024], m = [], v = 0; v < f.length; v++) f[v] <= h && m.push(f[v]);
            m.length > 0 ? l.tileSize = Math.max.apply(null, m) : l.tileSize = h;
          } else this.sizes && this.sizes.length > 0 ? (this.emulateLegacyImagePyramid = true, l.levels = r(this), e.extend(true, l, { width: l.levels[l.levels.length - 1].width, height: l.levels[l.levels.length - 1].height, tileSize: Math.max(l.height, l.width), tileOverlap: 0, minLevel: 0, maxLevel: l.levels.length - 1 }), this.levels = l.levels) : e.console.error("Nothing in the info.json to construct image pyramids from");
          if (!l.maxLevel && !this.emulateLegacyImagePyramid) if (!this.scale_factors) l.maxLevel = Number(Math.round(Math.log(Math.max(this.width, this.height), 2)));
          else {
            var y = Math.max.apply(null, this.scale_factors);
            l.maxLevel = Math.round(Math.log(y) * Math.LOG2E);
          }
          if (this.sizes) {
            var x = this.sizes.length;
            (x === l.maxLevel || x === l.maxLevel + 1) && (this.levelSizes = this.sizes.slice().sort((T, C) => T.width - C.width), x === l.maxLevel && this.levelSizes.push({ width: this.width, height: this.height }));
          }
          e.TileSource.apply(this, [l]);
        }, e.extend(e.IIIFTileSource.prototype, e.TileSource.prototype, { supports: function(l, a) {
          return l.protocol && l.protocol === "http://iiif.io/api/image" || l["@context"] && (l["@context"] === "http://library.stanford.edu/iiif/image-api/1.1/context.json" || l["@context"] === "http://iiif.io/api/image/1/context.json") || l.profile && l.profile.indexOf("http://library.stanford.edu/iiif/image-api/compliance.html") === 0 || l.identifier && l.width && l.height ? true : !!(l.documentElement && l.documentElement.tagName === "info" && l.documentElement.namespaceURI === "http://library.stanford.edu/iiif/image-api/ns/");
        }, configure: function(l, a, u) {
          if (e.isPlainObject(l)) {
            if (!l["@context"]) l["@context"] = "http://iiif.io/api/image/1.0/context.json", l["@id"] = a.replace("/info.json", ""), l.version = 1;
            else {
              var h = l["@context"];
              if (Array.isArray(h)) {
                for (var f = 0; f < h.length; f++) if (typeof h[f] == "string" && (/^http:\/\/iiif\.io\/api\/image\/[1-3]\/context\.json$/.test(h[f]) || h[f] === "http://library.stanford.edu/iiif/image-api/1.1/context.json")) {
                  h = h[f];
                  break;
                }
              }
              switch (h) {
                case "http://iiif.io/api/image/1/context.json":
                case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
                  l.version = 1;
                  break;
                case "http://iiif.io/api/image/2/context.json":
                  l.version = 2;
                  break;
                case "http://iiif.io/api/image/3/context.json":
                  l.version = 3;
                  break;
                default:
                  e.console.error("Data has a @context property which contains no known IIIF context URI.");
              }
            }
            if (l.preferredFormats) {
              for (var m = 0; m < l.preferredFormats.length; m++) if (i.imageFormatSupported(l.preferredFormats[m])) {
                l.tileFormat = l.preferredFormats[m];
                break;
              }
            }
            return l;
          } else {
            var c = s(l);
            return c["@context"] = "http://iiif.io/api/image/1.0/context.json", c["@id"] = a.replace("/info.xml", ""), c.version = 1, c;
          }
        }, getTileWidth: function(l) {
          if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileWidth.call(this, l);
          var a = Math.pow(2, this.maxLevel - l);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[a] ? this.tileSizePerScaleFactor[a].width : this._tileWidth;
        }, getTileHeight: function(l) {
          if (this.emulateLegacyImagePyramid) return e.TileSource.prototype.getTileHeight.call(this, l);
          var a = Math.pow(2, this.maxLevel - l);
          return this.tileSizePerScaleFactor && this.tileSizePerScaleFactor[a] ? this.tileSizePerScaleFactor[a].height : this._tileHeight;
        }, getLevelScale: function(l) {
          if (this.emulateLegacyImagePyramid) {
            var a = NaN;
            return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (a = this.levels[l].width / this.levels[this.maxLevel].width), a;
          }
          return e.TileSource.prototype.getLevelScale.call(this, l);
        }, getNumTiles: function(l) {
          if (this.emulateLegacyImagePyramid) {
            var a = this.getLevelScale(l);
            return a ? new e.Point(1, 1) : new e.Point(0, 0);
          }
          if (this.levelSizes) {
            var u = this.levelSizes[l], c = Math.ceil(u.width / this.getTileWidth(l)), h = Math.ceil(u.height / this.getTileHeight(l));
            return new e.Point(c, h);
          } else return e.TileSource.prototype.getNumTiles.call(this, l);
        }, getTileAtPoint: function(l, a) {
          if (this.emulateLegacyImagePyramid) return new e.Point(0, 0);
          if (this.levelSizes) {
            var u = a.x >= 0 && a.x <= 1 && a.y >= 0 && a.y <= 1 / this.aspectRatio;
            e.console.assert(u, "[TileSource.getTileAtPoint] must be called with a valid point.");
            var c = this.levelSizes[l].width, h = a.x * c, f = a.y * c, m = Math.floor(h / this.getTileWidth(l)), v = Math.floor(f / this.getTileHeight(l));
            a.x >= 1 && (m = this.getNumTiles(l).x - 1);
            var y = 1e-15;
            return a.y >= 1 / this.aspectRatio - y && (v = this.getNumTiles(l).y - 1), new e.Point(m, v);
          }
          return e.TileSource.prototype.getTileAtPoint.call(this, l, a);
        }, getTileUrl: function(l, a, u) {
          if (this.emulateLegacyImagePyramid) {
            var c = null;
            return this.levels.length > 0 && l >= this.minLevel && l <= this.maxLevel && (c = this.levels[l].url), c;
          }
          var h = "0", f = Math.pow(0.5, this.maxLevel - l), m, v, y, x, T, C, H, k, N, Y, K, q, ee, ce, te, j;
          return this.levelSizes ? (m = this.levelSizes[l].width, v = this.levelSizes[l].height) : (m = Math.ceil(this.width * f), v = Math.ceil(this.height * f)), y = this.getTileWidth(l), x = this.getTileHeight(l), T = Math.round(y / f), C = Math.round(x / f), this.version === 1 ? te = "native." + this.tileFormat : te = "default." + this.tileFormat, m < y && v < x ? (this.version === 2 && m === this.width ? q = "full" : this.version === 3 && m === this.width && v === this.height ? q = "max" : this.version === 3 ? q = m + "," + v : q = m + ",", H = "full") : (k = a * T, N = u * C, Y = Math.min(T, this.width - k), K = Math.min(C, this.height - N), a === 0 && u === 0 && Y === this.width && K === this.height ? H = "full" : H = [k, N, Y, K].join(","), ee = Math.min(y, m - a * y), ce = Math.min(x, v - u * x), this.version === 2 && ee === this.width ? q = "full" : this.version === 3 && ee === this.width && ce === this.height ? q = "max" : this.version === 3 ? q = ee + "," + ce : q = ee + ","), j = [this._id, H, q, h, te].join("/"), j;
        }, __testonly__: { canBeTiled: n, constructLevels: r } });
        function n(l) {
          var a = ["http://library.stanford.edu/iiif/image-api/compliance.html#level0", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0", "http://iiif.io/api/image/2/level0.json", "level0", "https://iiif.io/api/image/3/level0.json"], u = Array.isArray(l.profile) ? l.profile[0] : l.profile, c = a.indexOf(u) !== -1, h = false;
          return l.version === 2 && l.profile.length > 1 && l.profile[1].supports && (h = l.profile[1].supports.indexOf("sizeByW") !== -1), l.version === 3 && l.extraFeatures && (h = l.extraFeatures.indexOf("sizeByWh") !== -1), !c || h;
        }
        function r(l) {
          for (var a = [], u = 0; u < l.sizes.length; u++) a.push({ url: l._id + "/full/" + l.sizes[u].width + "," + (l.version === 3 ? l.sizes[u].height : "") + "/0/default." + l.tileFormat, width: l.sizes[u].width, height: l.sizes[u].height });
          return a.sort(function(c, h) {
            return c.width - h.width;
          });
        }
        function s(l) {
          if (!l || !l.documentElement) throw new Error(e.getString("Errors.Xml"));
          var a = l.documentElement, u = a.tagName, c = null;
          if (u === "info") try {
            return c = {}, o(a, c), c;
          } catch (h) {
            throw h instanceof Error ? h : new Error(e.getString("Errors.IIIF"));
          }
          throw new Error(e.getString("Errors.IIIF"));
        }
        function o(l, a, u) {
          var c, h;
          if (l.nodeType === 3 && u) h = l.nodeValue.trim(), h.match(/^\d*$/) && (h = Number(h)), a[u] ? (e.isArray(a[u]) || (a[u] = [a[u]]), a[u].push(h)) : a[u] = h;
          else if (l.nodeType === 1) for (c = 0; c < l.childNodes.length; c++) o(l.childNodes[c], a, l.nodeName);
        }
      })(i), (function(e) {
        e.OsmTileSource = function(n, r, s, o, l) {
          var a;
          e.isPlainObject(n) ? a = n : a = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] }, (!a.width || !a.height) && (a.width = 65572864, a.height = 65572864), a.tileSize || (a.tileSize = 256, a.tileOverlap = 0), a.tilesUrl || (a.tilesUrl = "http://tile.openstreetmap.org/"), a.minLevel = 8, e.TileSource.apply(this, [a]);
        }, e.extend(e.OsmTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "openstreetmaps";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          return this.tilesUrl + (n - 8) + "/" + r + "/" + s + ".png";
        } });
      })(i), (function(e) {
        e.TmsTileSource = function(n, r, s, o, l) {
          var a;
          e.isPlainObject(n) ? a = n : a = { width: arguments[0], height: arguments[1], tileSize: arguments[2], tileOverlap: arguments[3], tilesUrl: arguments[4] };
          var u = Math.ceil(a.width / 256) * 256, c = Math.ceil(a.height / 256) * 256, h;
          u > c ? h = u / 256 : h = c / 256, a.maxLevel = Math.ceil(Math.log(h) / Math.log(2)) - 1, a.tileSize = 256, a.width = u, a.height = c, e.TileSource.apply(this, [a]);
        }, e.extend(e.TmsTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "tiledmapservice";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          var o = this.getNumTiles(n).y - 1;
          return this.tilesUrl + n + "/" + r + "/" + (o - s) + ".png";
        } });
      })(i), (function(e) {
        e.ZoomifyTileSource = function(n) {
          typeof n.tileSize > "u" && (n.tileSize = 256), typeof n.fileFormat > "u" && (n.fileFormat = "jpg", this.fileFormat = n.fileFormat);
          var r = { x: n.width, y: n.height };
          for (n.imageSizes = [{ x: n.width, y: n.height }], n.gridSize = [this._getGridSize(n.width, n.height, n.tileSize)]; parseInt(r.x, 10) > n.tileSize || parseInt(r.y, 10) > n.tileSize; ) r.x = Math.floor(r.x / 2), r.y = Math.floor(r.y / 2), n.imageSizes.push({ x: r.x, y: r.y }), n.gridSize.push(this._getGridSize(r.x, r.y, n.tileSize));
          n.imageSizes.reverse(), n.gridSize.reverse(), n.minLevel = 0, n.maxLevel = n.gridSize.length - 1, i.TileSource.apply(this, [n]);
        }, e.extend(e.ZoomifyTileSource.prototype, e.TileSource.prototype, { _getGridSize: function(n, r, s) {
          return { x: Math.ceil(n / s), y: Math.ceil(r / s) };
        }, _calculateAbsoluteTileNumber: function(n, r, s) {
          for (var o = 0, l = {}, a = 0; a < n; a++) l = this.gridSize[a], o += l.x * l.y;
          return l = this.gridSize[n], o += l.x * s + r, o;
        }, supports: function(n, r) {
          return n.type && n.type === "zoomifytileservice";
        }, configure: function(n, r, s) {
          return n;
        }, getTileUrl: function(n, r, s) {
          var o = 0, l = this._calculateAbsoluteTileNumber(n, r, s);
          return o = Math.floor(l / 256), this.tilesUrl + "TileGroup" + o + "/" + n + "-" + r + "-" + s + "." + this.fileFormat;
        } });
      })(i), (function(e) {
        e.LegacyTileSource = function(o) {
          var l, a, u;
          e.isArray(o) && (l = { type: "legacy-image-pyramid", levels: o }), l.levels = n(l.levels), l.levels.length > 0 ? (a = l.levels[l.levels.length - 1].width, u = l.levels[l.levels.length - 1].height) : (a = 0, u = 0, e.console.error("No supported image formats found")), e.extend(true, l, { width: a, height: u, tileSize: Math.max(u, a), tileOverlap: 0, minLevel: 0, maxLevel: l.levels.length > 0 ? l.levels.length - 1 : 0 }), e.TileSource.apply(this, [l]), this.levels = l.levels;
        }, e.extend(e.LegacyTileSource.prototype, e.TileSource.prototype, { supports: function(o, l) {
          return o.type && o.type === "legacy-image-pyramid" || o.documentElement && o.documentElement.getAttribute("type") === "legacy-image-pyramid";
        }, configure: function(o, l, a) {
          var u;
          return e.isPlainObject(o) ? u = s(this, o) : u = r(this, o), u;
        }, getLevelScale: function(o) {
          var l = NaN;
          return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (l = this.levels[o].width / this.levels[this.maxLevel].width), l;
        }, getNumTiles: function(o) {
          var l = this.getLevelScale(o);
          return l ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(o, l, a) {
          var u = null;
          return this.levels.length > 0 && o >= this.minLevel && o <= this.maxLevel && (u = this.levels[o].url), u;
        } });
        function n(o) {
          var l = [], a, u;
          for (u = 0; u < o.length; u++) a = o[u], a.height && a.width && a.url ? l.push({ url: a.url, width: Number(a.width), height: Number(a.height) }) : e.console.error("Unsupported image format: %s", a.url ? a.url : "<no URL>");
          return l.sort(function(c, h) {
            return c.height - h.height;
          });
        }
        function r(o, l) {
          if (!l || !l.documentElement) throw new Error(e.getString("Errors.Xml"));
          var a = l.documentElement, u = a.tagName, c = null, h = [], f, m;
          if (u === "image") try {
            for (c = { type: a.getAttribute("type"), levels: [] }, h = a.getElementsByTagName("level"), m = 0; m < h.length; m++) f = h[m], c.levels.push({ url: f.getAttribute("url"), width: parseInt(f.getAttribute("width"), 10), height: parseInt(f.getAttribute("height"), 10) });
            return s(o, c);
          } catch (v) {
            throw v instanceof Error ? v : new Error("Unknown error parsing Legacy Image Pyramid XML.");
          }
          else {
            if (u === "collection") throw new Error("Legacy Image Pyramid Collections not yet supported.");
            if (u === "error") throw new Error("Error: " + l);
          }
          throw new Error("Unknown element " + u);
        }
        function s(o, l) {
          return l.levels;
        }
      })(i), (function(e) {
        e.ImageTileSource = function(n) {
          n = e.extend({ buildPyramid: true, crossOriginPolicy: false, ajaxWithCredentials: false }, n), e.TileSource.apply(this, [n]);
        }, e.extend(e.ImageTileSource.prototype, e.TileSource.prototype, { supports: function(n, r) {
          return n.type && n.type === "image";
        }, configure: function(n, r, s) {
          return n;
        }, getImageInfo: function(n) {
          var r = this._image = new Image(), s = this;
          this.crossOriginPolicy && (r.crossOrigin = this.crossOriginPolicy), this.ajaxWithCredentials && (r.useCredentials = this.ajaxWithCredentials), e.addEvent(r, "load", function() {
            s.width = r.naturalWidth, s.height = r.naturalHeight, s.aspectRatio = s.width / s.height, s.dimensions = new e.Point(s.width, s.height), s._tileWidth = s.width, s._tileHeight = s.height, s.tileOverlap = 0, s.minLevel = 0, s.levels = s._buildLevels(), s.maxLevel = s.levels.length - 1, s.ready = true, s.raiseEvent("ready", { tileSource: s });
          }), e.addEvent(r, "error", function() {
            s.raiseEvent("open-failed", { message: "Error loading image at " + n, source: n });
          }), r.src = n;
        }, getLevelScale: function(n) {
          var r = NaN;
          return n >= this.minLevel && n <= this.maxLevel && (r = this.levels[n].width / this.levels[this.maxLevel].width), r;
        }, getNumTiles: function(n) {
          var r = this.getLevelScale(n);
          return r ? new e.Point(1, 1) : new e.Point(0, 0);
        }, getTileUrl: function(n, r, s) {
          var o = null;
          return n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].url), o;
        }, getContext2D: function(n, r, s) {
          var o = null;
          return n >= this.minLevel && n <= this.maxLevel && (o = this.levels[n].context2D), o;
        }, destroy: function(n) {
          this._freeupCanvasMemory(n);
        }, _buildLevels: function() {
          var n = [{ url: this._image.src, width: this._image.naturalWidth, height: this._image.naturalHeight }];
          if (!this.buildPyramid || !e.supportsCanvas) return delete this._image, n;
          var r = this._image.naturalWidth, s = this._image.naturalHeight, o = document.createElement("canvas"), l = o.getContext("2d");
          if (o.width = r, o.height = s, l.drawImage(this._image, 0, 0, r, s), n[0].context2D = l, delete this._image, e.isCanvasTainted(o)) return n;
          for (; r >= 2 && s >= 2; ) {
            r = Math.floor(r / 2), s = Math.floor(s / 2);
            var a = document.createElement("canvas"), u = a.getContext("2d");
            a.width = r, a.height = s, u.drawImage(o, 0, 0, r, s), n.splice(0, 0, { context2D: u, width: r, height: s }), o = a, l = u;
          }
          return n;
        }, _freeupCanvasMemory: function(n) {
          for (var r = 0; r < this.levels.length; r++) this.levels[r].context2D && (this.levels[r].context2D.canvas.height = 0, this.levels[r].context2D.canvas.width = 0, n && n.raiseEvent("image-unloaded", { context2D: this.levels[r].context2D }));
        } });
      })(i), (function(e) {
        e.TileSourceCollection = function(n, r, s, o) {
          e.console.error("TileSourceCollection is deprecated; use World instead");
        };
      })(i), (function(e) {
        e.ButtonState = { REST: 0, GROUP: 1, HOVER: 2, DOWN: 3 }, e.Button = function(u) {
          var c = this;
          e.EventSource.call(this), e.extend(true, this, { tooltip: null, srcRest: null, srcGroup: null, srcHover: null, srcDown: null, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, fadeDelay: 0, fadeLength: 2e3, onPress: null, onRelease: null, onClick: null, onEnter: null, onExit: null, onFocus: null, onBlur: null, userData: null }, u), this.element = u.element || e.makeNeutralElement("div"), u.element || (this.imgRest = e.makeTransparentImage(this.srcRest), this.imgGroup = e.makeTransparentImage(this.srcGroup), this.imgHover = e.makeTransparentImage(this.srcHover), this.imgDown = e.makeTransparentImage(this.srcDown), this.imgRest.alt = this.imgGroup.alt = this.imgHover.alt = this.imgDown.alt = this.tooltip, e.setElementPointerEventsNone(this.imgRest), e.setElementPointerEventsNone(this.imgGroup), e.setElementPointerEventsNone(this.imgHover), e.setElementPointerEventsNone(this.imgDown), this.element.style.position = "relative", e.setElementTouchActionNone(this.element), this.imgGroup.style.position = this.imgHover.style.position = this.imgDown.style.position = "absolute", this.imgGroup.style.top = this.imgHover.style.top = this.imgDown.style.top = "0px", this.imgGroup.style.left = this.imgHover.style.left = this.imgDown.style.left = "0px", this.imgHover.style.visibility = this.imgDown.style.visibility = "hidden", this.element.appendChild(this.imgRest), this.element.appendChild(this.imgGroup), this.element.appendChild(this.imgHover), this.element.appendChild(this.imgDown)), this.addHandler("press", this.onPress), this.addHandler("release", this.onRelease), this.addHandler("click", this.onClick), this.addHandler("enter", this.onEnter), this.addHandler("exit", this.onExit), this.addHandler("focus", this.onFocus), this.addHandler("blur", this.onBlur), this.currentState = e.ButtonState.GROUP, this.fadeBeginTime = null, this.shouldFade = false, this.element.style.display = "inline-block", this.element.style.position = "relative", this.element.title = this.tooltip, this.tracker = new e.MouseTracker({ userData: "Button.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(h) {
            h.insideElementPressed ? (l(c, e.ButtonState.DOWN), c.raiseEvent("enter", { originalEvent: h.originalEvent })) : h.buttonDownAny || l(c, e.ButtonState.HOVER);
          }, focusHandler: function(h) {
            c.tracker.enterHandler(h), c.raiseEvent("focus", { originalEvent: h.originalEvent });
          }, leaveHandler: function(h) {
            a(c, e.ButtonState.GROUP), h.insideElementPressed && c.raiseEvent("exit", { originalEvent: h.originalEvent });
          }, blurHandler: function(h) {
            c.tracker.leaveHandler(h), c.raiseEvent("blur", { originalEvent: h.originalEvent });
          }, pressHandler: function(h) {
            l(c, e.ButtonState.DOWN), c.raiseEvent("press", { originalEvent: h.originalEvent });
          }, releaseHandler: function(h) {
            h.insideElementPressed && h.insideElementReleased ? (a(c, e.ButtonState.HOVER), c.raiseEvent("release", { originalEvent: h.originalEvent })) : h.insideElementPressed ? a(c, e.ButtonState.GROUP) : l(c, e.ButtonState.HOVER);
          }, clickHandler: function(h) {
            h.quick && c.raiseEvent("click", { originalEvent: h.originalEvent });
          }, keyHandler: function(h) {
            h.keyCode === 13 ? (c.raiseEvent("click", { originalEvent: h.originalEvent }), c.raiseEvent("release", { originalEvent: h.originalEvent }), h.preventDefault = true) : h.preventDefault = false;
          } }), a(this, e.ButtonState.REST);
        }, e.extend(e.Button.prototype, e.EventSource.prototype, { notifyGroupEnter: function() {
          l(this, e.ButtonState.GROUP);
        }, notifyGroupExit: function() {
          a(this, e.ButtonState.REST);
        }, disable: function() {
          this.notifyGroupExit(), this.element.disabled = true, this.tracker.setTracking(false), e.setElementOpacity(this.element, 0.2, true);
        }, enable: function() {
          this.element.disabled = false, this.tracker.setTracking(true), e.setElementOpacity(this.element, 1, true), this.notifyGroupEnter();
        }, destroy: function() {
          this.imgRest && (this.element.removeChild(this.imgRest), this.imgRest = null), this.imgGroup && (this.element.removeChild(this.imgGroup), this.imgGroup = null), this.imgHover && (this.element.removeChild(this.imgHover), this.imgHover = null), this.imgDown && (this.element.removeChild(this.imgDown), this.imgDown = null), this.removeAllHandlers(), this.tracker.destroy(), this.element = null;
        } });
        function n(u) {
          e.requestAnimationFrame(function() {
            r(u);
          });
        }
        function r(u) {
          var c, h, f;
          u.shouldFade && (c = e.now(), h = c - u.fadeBeginTime, f = 1 - h / u.fadeLength, f = Math.min(1, f), f = Math.max(0, f), u.imgGroup && e.setElementOpacity(u.imgGroup, f, true), f > 0 && n(u));
        }
        function s(u) {
          u.shouldFade = true, u.fadeBeginTime = e.now() + u.fadeDelay, window.setTimeout(function() {
            n(u);
          }, u.fadeDelay);
        }
        function o(u) {
          u.shouldFade = false, u.imgGroup && e.setElementOpacity(u.imgGroup, 1, true);
        }
        function l(u, c) {
          u.element.disabled || (c >= e.ButtonState.GROUP && u.currentState === e.ButtonState.REST && (o(u), u.currentState = e.ButtonState.GROUP), c >= e.ButtonState.HOVER && u.currentState === e.ButtonState.GROUP && (u.imgHover && (u.imgHover.style.visibility = ""), u.currentState = e.ButtonState.HOVER), c >= e.ButtonState.DOWN && u.currentState === e.ButtonState.HOVER && (u.imgDown && (u.imgDown.style.visibility = ""), u.currentState = e.ButtonState.DOWN));
        }
        function a(u, c) {
          u.element.disabled || (c <= e.ButtonState.HOVER && u.currentState === e.ButtonState.DOWN && (u.imgDown && (u.imgDown.style.visibility = "hidden"), u.currentState = e.ButtonState.HOVER), c <= e.ButtonState.GROUP && u.currentState === e.ButtonState.HOVER && (u.imgHover && (u.imgHover.style.visibility = "hidden"), u.currentState = e.ButtonState.GROUP), c <= e.ButtonState.REST && u.currentState === e.ButtonState.GROUP && (s(u), u.currentState = e.ButtonState.REST));
        }
      })(i), (function(e) {
        e.ButtonGroup = function(n) {
          e.extend(true, this, { buttons: [], clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold, clickDistThreshold: e.DEFAULT_SETTINGS.clickDistThreshold, labelText: "" }, n);
          var r = this.buttons.concat([]), s = this, o;
          if (this.element = n.element || e.makeNeutralElement("div"), !n.group) for (this.element.style.display = "inline-block", o = 0; o < r.length; o++) this.element.appendChild(r[o].element);
          e.setElementTouchActionNone(this.element), this.tracker = new e.MouseTracker({ userData: "ButtonGroup.tracker", element: this.element, clickTimeThreshold: this.clickTimeThreshold, clickDistThreshold: this.clickDistThreshold, enterHandler: function(l) {
            var a;
            for (a = 0; a < s.buttons.length; a++) s.buttons[a].notifyGroupEnter();
          }, leaveHandler: function(l) {
            var a;
            if (!l.insideElementPressed) for (a = 0; a < s.buttons.length; a++) s.buttons[a].notifyGroupExit();
          } });
        }, e.ButtonGroup.prototype = { addButton: function(n) {
          this.buttons.push(n), this.element.appendChild(n.element);
        }, emulateEnter: function() {
          this.tracker.enterHandler({ eventSource: this.tracker });
        }, emulateLeave: function() {
          this.tracker.leaveHandler({ eventSource: this.tracker });
        }, destroy: function() {
          for (; this.buttons.length; ) {
            var n = this.buttons.pop();
            this.element.removeChild(n.element), n.destroy();
          }
          this.tracker.destroy(), this.element = null;
        } };
      })(i), (function(e) {
        e.Rect = function(n, r, s, o, l) {
          this.x = typeof n == "number" ? n : 0, this.y = typeof r == "number" ? r : 0, this.width = typeof s == "number" ? s : 0, this.height = typeof o == "number" ? o : 0, this.degrees = typeof l == "number" ? l : 0, this.degrees = e.positiveModulo(this.degrees, 360);
          var a, u;
          this.degrees >= 270 ? (a = this.getTopRight(), this.x = a.x, this.y = a.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 270) : this.degrees >= 180 ? (a = this.getBottomRight(), this.x = a.x, this.y = a.y, this.degrees -= 180) : this.degrees >= 90 && (a = this.getBottomLeft(), this.x = a.x, this.y = a.y, u = this.height, this.height = this.width, this.width = u, this.degrees -= 90);
        }, e.Rect.fromSummits = function(n, r, s) {
          var o = n.distanceTo(r), l = n.distanceTo(s), a = r.minus(n), u = Math.atan(a.y / a.x);
          return a.x < 0 ? u += Math.PI : a.y < 0 && (u += 2 * Math.PI), new e.Rect(n.x, n.y, o, l, u / Math.PI * 180);
        }, e.Rect.prototype = { clone: function() {
          return new e.Rect(this.x, this.y, this.width, this.height, this.degrees);
        }, getAspectRatio: function() {
          return this.width / this.height;
        }, getTopLeft: function() {
          return new e.Point(this.x, this.y);
        }, getBottomRight: function() {
          return new e.Point(this.x + this.width, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getTopRight: function() {
          return new e.Point(this.x + this.width, this.y).rotate(this.degrees, this.getTopLeft());
        }, getBottomLeft: function() {
          return new e.Point(this.x, this.y + this.height).rotate(this.degrees, this.getTopLeft());
        }, getCenter: function() {
          return new e.Point(this.x + this.width / 2, this.y + this.height / 2).rotate(this.degrees, this.getTopLeft());
        }, getSize: function() {
          return new e.Point(this.width, this.height);
        }, equals: function(n) {
          return n instanceof e.Rect && this.x === n.x && this.y === n.y && this.width === n.width && this.height === n.height && this.degrees === n.degrees;
        }, times: function(n) {
          return new e.Rect(this.x * n, this.y * n, this.width * n, this.height * n, this.degrees);
        }, translate: function(n) {
          return new e.Rect(this.x + n.x, this.y + n.y, this.width, this.height, this.degrees);
        }, union: function(n) {
          var r = this.getBoundingBox(), s = n.getBoundingBox(), o = Math.min(r.x, s.x), l = Math.min(r.y, s.y), a = Math.max(r.x + r.width, s.x + s.width), u = Math.max(r.y + r.height, s.y + s.height);
          return new e.Rect(o, l, a - o, u - l);
        }, intersection: function(n) {
          var r = 1e-10, s = [], o = this.getTopLeft();
          n.containsPoint(o, r) && s.push(o);
          var l = this.getTopRight();
          n.containsPoint(l, r) && s.push(l);
          var a = this.getBottomLeft();
          n.containsPoint(a, r) && s.push(a);
          var u = this.getBottomRight();
          n.containsPoint(u, r) && s.push(u);
          var c = n.getTopLeft();
          this.containsPoint(c, r) && s.push(c);
          var h = n.getTopRight();
          this.containsPoint(h, r) && s.push(h);
          var f = n.getBottomLeft();
          this.containsPoint(f, r) && s.push(f);
          var m = n.getBottomRight();
          this.containsPoint(m, r) && s.push(m);
          for (var v = this._getSegments(), y = n._getSegments(), x = 0; x < v.length; x++) for (var T = v[x], C = 0; C < y.length; C++) {
            var H = y[C], k = N(T[0], T[1], H[0], H[1]);
            k && s.push(k);
          }
          function N(j, ne, he, ye) {
            var me = ne.minus(j), pe = ye.minus(he), ae = -pe.x * me.y + me.x * pe.y;
            if (ae === 0) return null;
            var Ae = (me.x * (j.y - he.y) - me.y * (j.x - he.x)) / ae, Re = (pe.x * (j.y - he.y) - pe.y * (j.x - he.x)) / ae;
            return -r <= Ae && Ae <= 1 - r && -r <= Re && Re <= 1 - r ? new e.Point(j.x + Re * me.x, j.y + Re * me.y) : null;
          }
          if (s.length === 0) return null;
          for (var Y = s[0].x, K = s[0].x, q = s[0].y, ee = s[0].y, ce = 1; ce < s.length; ce++) {
            var te = s[ce];
            te.x < Y && (Y = te.x), te.x > K && (K = te.x), te.y < q && (q = te.y), te.y > ee && (ee = te.y);
          }
          return new e.Rect(Y, q, K - Y, ee - q);
        }, _getSegments: function() {
          var n = this.getTopLeft(), r = this.getTopRight(), s = this.getBottomLeft(), o = this.getBottomRight();
          return [[n, r], [r, o], [o, s], [s, n]];
        }, rotate: function(n, r) {
          if (n = e.positiveModulo(n, 360), n === 0) return this.clone();
          r = r || this.getCenter();
          var s = this.getTopLeft().rotate(n, r), o = this.getTopRight().rotate(n, r), l = o.minus(s);
          l = l.apply(function(u) {
            var c = 1e-15;
            return Math.abs(u) < c ? 0 : u;
          });
          var a = Math.atan(l.y / l.x);
          return l.x < 0 ? a += Math.PI : l.y < 0 && (a += 2 * Math.PI), new e.Rect(s.x, s.y, this.width, this.height, a / Math.PI * 180);
        }, getBoundingBox: function() {
          if (this.degrees === 0) return this.clone();
          var n = this.getTopLeft(), r = this.getTopRight(), s = this.getBottomLeft(), o = this.getBottomRight(), l = Math.min(n.x, r.x, s.x, o.x), a = Math.max(n.x, r.x, s.x, o.x), u = Math.min(n.y, r.y, s.y, o.y), c = Math.max(n.y, r.y, s.y, o.y);
          return new e.Rect(l, u, a - l, c - u);
        }, getIntegerBoundingBox: function() {
          var n = this.getBoundingBox(), r = Math.floor(n.x), s = Math.floor(n.y), o = Math.ceil(n.width + n.x - r), l = Math.ceil(n.height + n.y - s);
          return new e.Rect(r, s, o, l);
        }, containsPoint: function(n, r) {
          r = r || 0;
          var s = this.getTopLeft(), o = this.getTopRight(), l = this.getBottomLeft(), a = o.minus(s), u = l.minus(s);
          return (n.x - s.x) * a.x + (n.y - s.y) * a.y >= -r && (n.x - o.x) * a.x + (n.y - o.y) * a.y <= r && (n.x - s.x) * u.x + (n.y - s.y) * u.y >= -r && (n.x - l.x) * u.x + (n.y - l.y) * u.y <= r;
        }, toString: function() {
          return "[" + Math.round(this.x * 100) / 100 + ", " + Math.round(this.y * 100) / 100 + ", " + Math.round(this.width * 100) / 100 + "x" + Math.round(this.height * 100) / 100 + ", " + Math.round(this.degrees * 100) / 100 + "deg]";
        } };
      })(i), (function(e) {
        var n = {};
        e.ReferenceStrip = function(f) {
          var m = this, v = f.viewer, y = e.getElementSize(v.element), x, T, C;
          for (f.id || (f.id = "referencestrip-" + e.now(), this.element = e.makeNeutralElement("div"), this.element.id = f.id, this.element.className = "referencestrip"), f = e.extend(true, { sizeRatio: e.DEFAULT_SETTINGS.referenceStripSizeRatio, position: e.DEFAULT_SETTINGS.referenceStripPosition, scroll: e.DEFAULT_SETTINGS.referenceStripScroll, clickTimeThreshold: e.DEFAULT_SETTINGS.clickTimeThreshold }, f, { element: this.element }), e.extend(this, f), n[this.id] = { animating: false }, this.minPixelRatio = this.viewer.minPixelRatio, this.element.tabIndex = 0, T = this.element.style, T.marginTop = "0px", T.marginRight = "0px", T.marginBottom = "0px", T.marginLeft = "0px", T.left = "0px", T.bottom = "0px", T.border = "0px", T.background = "#000", T.position = "relative", e.setElementTouchActionNone(this.element), e.setElementOpacity(this.element, 0.8), this.viewer = v, this.tracker = new e.MouseTracker({ userData: "ReferenceStrip.tracker", element: this.element, clickHandler: e.delegate(this, r), dragHandler: e.delegate(this, s), scrollHandler: e.delegate(this, o), enterHandler: e.delegate(this, a), leaveHandler: e.delegate(this, u), keyDownHandler: e.delegate(this, c), keyHandler: e.delegate(this, h), preProcessEventHandler: function(H) {
            H.eventType === "wheel" && (H.preventDefault = true);
          } }), f.width && f.height ? (this.element.style.width = f.width + "px", this.element.style.height = f.height + "px", v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : f.scroll === "horizontal" ? (this.element.style.width = y.x * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.height = y.y * f.sizeRatio + "px", v.addControl(this.element, { anchor: e.ControlAnchor.BOTTOM_LEFT })) : (this.element.style.height = y.y * f.sizeRatio * v.tileSources.length + 12 * v.tileSources.length + "px", this.element.style.width = y.x * f.sizeRatio + "px", v.addControl(this.element, { anchor: e.ControlAnchor.TOP_LEFT })), this.panelWidth = y.x * this.sizeRatio + 8, this.panelHeight = y.y * this.sizeRatio + 8, this.panels = [], this.miniViewers = {}, C = 0; C < v.tileSources.length; C++) x = e.makeNeutralElement("div"), x.id = this.element.id + "-" + C, x.style.width = m.panelWidth + "px", x.style.height = m.panelHeight + "px", x.style.display = "inline", x.style.float = "left", x.style.cssFloat = "left", x.style.padding = "2px", e.setElementTouchActionNone(x), e.setElementPointerEventsNone(x), this.element.appendChild(x), x.activePanel = false, this.panels.push(x);
          l(this, this.scroll === "vertical" ? y.y : y.x, 0), this.setFocus(0);
        }, e.ReferenceStrip.prototype = { setFocus: function(f) {
          var m = this.element.querySelector("#" + this.element.id + "-" + f), v = e.getElementSize(this.viewer.canvas), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = -Number(this.element.style.marginLeft.replace("px", "")), C = -Number(this.element.style.marginTop.replace("px", "")), H;
          this.currentSelected !== m && (this.currentSelected && (this.currentSelected.style.background = "#000"), this.currentSelected = m, this.currentSelected.style.background = "#999", this.scroll === "horizontal" ? (H = Number(f) * (this.panelWidth + 3), H > T + v.x - this.panelWidth ? (H = Math.min(H, y - v.x), this.element.style.marginLeft = -H + "px", l(this, v.x, -H)) : H < T && (H = Math.max(0, H - v.x / 2), this.element.style.marginLeft = -H + "px", l(this, v.x, -H))) : (H = Number(f) * (this.panelHeight + 3), H > C + v.y - this.panelHeight ? (H = Math.min(H, x - v.y), this.element.style.marginTop = -H + "px", l(this, v.y, -H)) : H < C && (H = Math.max(0, H - v.y / 2), this.element.style.marginTop = -H + "px", l(this, v.y, -H))), this.currentPage = f, a.call(this, { eventSource: this.tracker }));
        }, update: function() {
          return !!n[this.id].animating;
        }, destroy: function() {
          if (this.miniViewers) for (var f in this.miniViewers) this.miniViewers[f].destroy();
          this.tracker.destroy(), this.element && this.viewer.removeControl(this.element);
        } };
        function r(f) {
          if (f.quick) {
            var m;
            this.scroll === "horizontal" ? m = Math.floor(f.position.x / (this.panelWidth + 4)) : m = Math.floor(f.position.y / this.panelHeight), this.viewer.goToPage(m);
          }
          this.element.focus();
        }
        function s(f) {
          if (this.dragging = true, this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? -f.delta.x > 0 ? m > -(y - T.x) && (this.element.style.marginLeft = m + f.delta.x * 2 + "px", l(this, T.x, m + f.delta.x * 2)) : -f.delta.x < 0 && m < 0 && (this.element.style.marginLeft = m + f.delta.x * 2 + "px", l(this, T.x, m + f.delta.x * 2)) : -f.delta.y > 0 ? v > -(x - T.y) && (this.element.style.marginTop = v + f.delta.y * 2 + "px", l(this, T.y, v + f.delta.y * 2)) : -f.delta.y < 0 && v < 0 && (this.element.style.marginTop = v + f.delta.y * 2 + "px", l(this, T.y, v + f.delta.y * 2));
          }
        }
        function o(f) {
          if (this.element) {
            var m = Number(this.element.style.marginLeft.replace("px", "")), v = Number(this.element.style.marginTop.replace("px", "")), y = Number(this.element.style.width.replace("px", "")), x = Number(this.element.style.height.replace("px", "")), T = e.getElementSize(this.viewer.canvas);
            this.scroll === "horizontal" ? f.scroll > 0 ? m > -(y - T.x) && (this.element.style.marginLeft = m - f.scroll * 60 + "px", l(this, T.x, m - f.scroll * 60)) : f.scroll < 0 && m < 0 && (this.element.style.marginLeft = m - f.scroll * 60 + "px", l(this, T.x, m - f.scroll * 60)) : f.scroll < 0 ? v > T.y - x && (this.element.style.marginTop = v + f.scroll * 60 + "px", l(this, T.y, v + f.scroll * 60)) : f.scroll > 0 && v < 0 && (this.element.style.marginTop = v + f.scroll * 60 + "px", l(this, T.y, v + f.scroll * 60)), f.preventDefault = true;
          }
        }
        function l(f, m, v) {
          var y, x, T, C, H, k;
          for (f.scroll === "horizontal" ? y = f.panelWidth : y = f.panelHeight, x = Math.ceil(m / y) + 5, T = Math.ceil((Math.abs(v) + m) / y) + 1, x = T - x, x = x < 0 ? 0 : x, H = x; H < T && H < f.panels.length; H++) if (k = f.panels[H], !k.activePanel) {
            var N, Y = f.viewer.tileSources[H];
            Y.referenceStripThumbnailUrl ? N = { type: "image", url: Y.referenceStripThumbnailUrl } : N = Y, C = new e.Viewer({ id: k.id, tileSources: [N], element: k, navigatorSizeRatio: f.sizeRatio, showNavigator: false, mouseNavEnabled: false, showNavigationControl: false, showSequenceControl: false, immediateRender: true, blendTime: 0, animationTime: 0, loadTilesWithAjax: f.viewer.loadTilesWithAjax, ajaxHeaders: f.viewer.ajaxHeaders, drawer: "canvas" }), e.setElementPointerEventsNone(C.canvas), e.setElementPointerEventsNone(C.container), C.innerTracker.setTracking(false), C.outerTracker.setTracking(false), f.miniViewers[k.id] = C, k.activePanel = true;
          }
        }
        function a(f) {
          var m = f.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "0px" : m.style.marginLeft = "0px";
        }
        function u(f) {
          var m = f.eventSource.element;
          this.scroll === "horizontal" ? m.style.marginBottom = "-" + e.getElementSize(m).y / 2 + "px" : m.style.marginLeft = "-" + e.getElementSize(m).x / 2 + "px";
        }
        function c(f) {
          if (!f.ctrl && !f.alt && !f.meta) switch (f.keyCode) {
            case 38:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 40:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 37:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 39:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            default:
              f.preventDefault = false;
              break;
          }
          else f.preventDefault = false;
        }
        function h(f) {
          if (!f.ctrl && !f.alt && !f.meta) switch (f.keyCode) {
            case 61:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 45:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 48:
            case 119:
            case 87:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            case 115:
            case 83:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 97:
              o.call(this, { eventSource: this.tracker, position: null, scroll: -1, shift: null }), f.preventDefault = true;
              break;
            case 100:
              o.call(this, { eventSource: this.tracker, position: null, scroll: 1, shift: null }), f.preventDefault = true;
              break;
            default:
              f.preventDefault = false;
              break;
          }
          else f.preventDefault = false;
        }
      })(i), (function(e) {
        e.DisplayRect = function(n, r, s, o, l, a) {
          e.Rect.apply(this, [n, r, s, o]), this.minLevel = l, this.maxLevel = a;
        }, e.extend(e.DisplayRect.prototype, e.Rect.prototype);
      })(i), (function(e) {
        e.Spring = function(r) {
          var s = arguments;
          typeof r != "object" && (r = { initial: s.length && typeof s[0] == "number" ? s[0] : void 0, springStiffness: s.length > 1 ? s[1].springStiffness : 5, animationTime: s.length > 1 ? s[1].animationTime : 1.5 }), e.console.assert(typeof r.springStiffness == "number" && r.springStiffness !== 0, "[OpenSeadragon.Spring] options.springStiffness must be a non-zero number"), e.console.assert(typeof r.animationTime == "number" && r.animationTime >= 0, "[OpenSeadragon.Spring] options.animationTime must be a number greater than or equal to 0"), r.exponential && (this._exponential = true, delete r.exponential), e.extend(true, this, r), this.current = { value: typeof this.initial == "number" ? this.initial : this._exponential ? 0 : 1, time: e.now() }, e.console.assert(!this._exponential || this.current.value !== 0, "[OpenSeadragon.Spring] value must be non-zero for exponential springs"), this.start = { value: this.current.value, time: this.current.time }, this.target = { value: this.current.value, time: this.current.time }, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, e.Spring.prototype = { resetTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.resetTo] target must be non-zero for exponential springs"), this.start.value = this.target.value = this.current.value = r, this.start.time = this.target.time = this.current.time = e.now(), this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, springTo: function(r) {
          e.console.assert(!this._exponential || r !== 0, "[OpenSeadragon.Spring.springTo] target must be non-zero for exponential springs"), this.start.value = this.current.value, this.start.time = this.current.time, this.target.value = r, this.target.time = this.start.time + 1e3 * this.animationTime, this._exponential && (this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, shiftBy: function(r) {
          this.start.value += r, this.target.value += r, this._exponential && (e.console.assert(this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.shiftBy] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value));
        }, setExponential: function(r) {
          this._exponential = r, this._exponential && (e.console.assert(this.current.value !== 0 && this.target.value !== 0 && this.start.value !== 0, "[OpenSeadragon.Spring.setExponential] spring value must be non-zero for exponential springs"), this.start._logValue = Math.log(this.start.value), this.target._logValue = Math.log(this.target.value), this.current._logValue = Math.log(this.current.value));
        }, update: function() {
          this.current.time = e.now();
          let r, s;
          if (this._exponential ? (r = this.start._logValue, s = this.target._logValue) : (r = this.start.value, s = this.target.value), this.current.time >= this.target.time) this.current.value = this.target.value;
          else {
            let o = r + (s - r) * n(this.springStiffness, (this.current.time - this.start.time) / (this.target.time - this.start.time));
            this._exponential ? this.current.value = Math.exp(o) : this.current.value = o;
          }
          return this.current.value !== this.target.value;
        }, isAtTargetValue: function() {
          return this.current.value === this.target.value;
        } };
        function n(r, s) {
          return (1 - Math.exp(r * -s)) / (1 - Math.exp(-r));
        }
      })(i), (function(e) {
        e.ImageJob = function(r) {
          e.extend(true, this, { timeout: e.DEFAULT_SETTINGS.timeout, jobId: null, tries: 0 }, r), this.data = null, this.userData = {}, this.errorMsg = null;
        }, e.ImageJob.prototype = { start: function() {
          this.tries++;
          var r = this, s = this.abort;
          this.jobId = window.setTimeout(function() {
            r.finish(null, null, "Image load exceeded timeout (" + r.timeout + " ms)");
          }, this.timeout), this.abort = function() {
            r.source.downloadTileAbort(r), typeof s == "function" && s();
          }, this.source.downloadTileStart(this);
        }, finish: function(r, s, o) {
          this.data = r, this.request = s, this.errorMsg = o, this.jobId && window.clearTimeout(this.jobId), this.callback(this);
        } }, e.ImageLoader = function(r) {
          e.extend(true, this, { jobLimit: e.DEFAULT_SETTINGS.imageLoaderLimit, timeout: e.DEFAULT_SETTINGS.timeout, jobQueue: [], failedTiles: [], jobsInProgress: 0 }, r);
        }, e.ImageLoader.prototype = { addJob: function(r) {
          if (!r.source) {
            e.console.error("ImageLoader.prototype.addJob() requires [options.source]. TileSource since new API defines how images are fetched. Creating a dummy TileSource.");
            var s = e.TileSource.prototype;
            r.source = { downloadTileStart: s.downloadTileStart, downloadTileAbort: s.downloadTileAbort };
          }
          var o = this, l = function(c) {
            n(o, c, r.callback);
          }, a = { src: r.src, tile: r.tile || {}, source: r.source, loadWithAjax: r.loadWithAjax, ajaxHeaders: r.loadWithAjax ? r.ajaxHeaders : null, crossOriginPolicy: r.crossOriginPolicy, ajaxWithCredentials: r.ajaxWithCredentials, postData: r.postData, callback: l, abort: r.abort, timeout: this.timeout }, u = new e.ImageJob(a);
          !this.jobLimit || this.jobsInProgress < this.jobLimit ? (u.start(), this.jobsInProgress++) : this.jobQueue.push(u);
        }, clear: function() {
          for (var r = 0; r < this.jobQueue.length; r++) {
            var s = this.jobQueue[r];
            typeof s.abort == "function" && s.abort();
          }
          this.jobQueue = [];
        } };
        function n(r, s, o) {
          s.errorMsg !== "" && (s.data === null || s.data === void 0) && s.tries < 1 + r.tileRetryMax && r.failedTiles.push(s);
          var l;
          r.jobsInProgress--, (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.jobQueue.length > 0 && (l = r.jobQueue.shift(), l.start(), r.jobsInProgress++), r.tileRetryMax > 0 && r.jobQueue.length === 0 && (!r.jobLimit || r.jobsInProgress < r.jobLimit) && r.failedTiles.length > 0 && (l = r.failedTiles.shift(), setTimeout(function() {
            l.start();
          }, r.tileRetryDelay), r.jobsInProgress++), o(s.data, s.errorMsg, s.request);
        }
      })(i), (function(e) {
        e.Tile = function(n, r, s, o, l, a, u, c, h, f, m, v) {
          this.level = n, this.x = r, this.y = s, this.bounds = o, this.positionedBounds = new i.Rect(o.x, o.y, o.width, o.height), this.sourceBounds = f, this.exists = l, this._url = a, this.postData = m, this.context2D = u, this.loadWithAjax = c, this.ajaxHeaders = h, v === void 0 && (e.console.warn("Tile constructor needs 'cacheKey' variable: creation tile cache in Tile class is deprecated. TileSource.prototype.getTileHashKey will be used."), v = e.TileSource.prototype.getTileHashKey(n, r, s, a, h, m)), this.cacheKey = v, this.loaded = false, this.loading = false, this.element = null, this.imgElement = null, this.style = null, this.position = null, this.size = null, this.flipped = false, this.blendStart = null, this.opacity = null, this.squaredDistance = null, this.visibility = null, this.hasTransparency = false, this.beingDrawn = false, this.lastTouchTime = 0, this.isRightMost = false, this.isBottomMost = false;
        }, e.Tile.prototype = { toString: function() {
          return this.level + "/" + this.x + "_" + this.y;
        }, _hasTransparencyChannel: function() {
          return console.warn("Tile.prototype._hasTransparencyChannel() has been deprecated and will be removed in the future. Use TileSource.prototype.hasTransparency() instead."), !!this.context2D || this.getUrl().match(".png");
        }, get image() {
          return e.console.error("[Tile.image] property has been deprecated. Use [Tile.prototype.getImage] instead."), this.getImage();
        }, get url() {
          return e.console.error("[Tile.url] property has been deprecated. Use [Tile.prototype.getUrl] instead."), this.getUrl();
        }, getImage: function() {
          return this.cacheImageRecord.getImage();
        }, getUrl: function() {
          return typeof this._url == "function" ? this._url() : this._url;
        }, getCanvasContext: function() {
          return this.context2D || this.cacheImageRecord && this.cacheImageRecord.getRenderedContext();
        }, getScaleForEdgeSmoothing: function() {
          var n;
          if (this.cacheImageRecord) n = this.cacheImageRecord.getRenderedContext();
          else if (this.context2D) n = this.context2D;
          else return e.console.warn("[Tile.drawCanvas] attempting to get tile scale %s when tile's not cached", this.toString()), 1;
          return n.canvas.width / (this.size.x * e.pixelDensityRatio);
        }, getTranslationForEdgeSmoothing: function(n, r, s) {
          var o = Math.max(1, Math.ceil((s.x - r.x) / 2)), l = Math.max(1, Math.ceil((s.y - r.y) / 2));
          return new e.Point(o, l).minus(this.position.times(e.pixelDensityRatio).times(n || 1).apply(function(a) {
            return a % 1;
          }));
        }, unload: function() {
          this.imgElement && this.imgElement.parentNode && this.imgElement.parentNode.removeChild(this.imgElement), this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = null, this.imgElement = null, this.loaded = false, this.loading = false;
        } };
      })(i), (function(e) {
        e.OverlayPlacement = e.Placement, e.OverlayRotationMode = e.freezeObject({ NO_ROTATION: 1, EXACT: 2, BOUNDING_BOX: 3 }), e.Overlay = function(n, r, s) {
          var o;
          e.isPlainObject(n) ? o = n : o = { element: n, location: r, placement: s }, this.elementWrapper = document.createElement("div"), this.element = o.element, this.elementWrapper.appendChild(this.element), this.element.id ? this.elementWrapper.id = "overlay-wrapper-" + this.element.id : this.elementWrapper.id = "overlay-wrapper", this.style = this.elementWrapper.style, this._init(o);
        }, e.Overlay.prototype = { _init: function(n) {
          this.location = n.location, this.placement = n.placement === void 0 ? e.Placement.TOP_LEFT : n.placement, this.onDraw = n.onDraw, this.checkResize = n.checkResize === void 0 ? true : n.checkResize, this.width = n.width === void 0 ? null : n.width, this.height = n.height === void 0 ? null : n.height, this.rotationMode = n.rotationMode || e.OverlayRotationMode.EXACT, this.location instanceof e.Rect && (this.width = this.location.width, this.height = this.location.height, this.location = this.location.getTopLeft(), this.placement = e.Placement.TOP_LEFT), this.scales = this.width !== null && this.height !== null, this.bounds = new e.Rect(this.location.x, this.location.y, this.width, this.height), this.position = this.location;
        }, adjust: function(n, r) {
          var s = e.Placement.properties[this.placement];
          s && (s.isHorizontallyCentered ? n.x -= r.x / 2 : s.isRight && (n.x -= r.x), s.isVerticallyCentered ? n.y -= r.y / 2 : s.isBottom && (n.y -= r.y));
        }, destroy: function() {
          var n = this.elementWrapper, r = this.style;
          n.parentNode && (n.parentNode.removeChild(n), n.prevElementParent && (r.display = "none", document.body.appendChild(n))), this.onDraw = null, r.top = "", r.left = "", r.position = "", this.width !== null && (r.width = ""), this.height !== null && (r.height = "");
          var s = e.getCssPropertyWithVendorPrefix("transformOrigin"), o = e.getCssPropertyWithVendorPrefix("transform");
          s && o && (r[s] = "", r[o] = "");
        }, drawHTML: function(n, r) {
          var s = this.elementWrapper;
          s.parentNode !== n && (s.prevElementParent = s.parentNode, s.prevNextSibling = s.nextSibling, n.appendChild(s), this.style.position = "absolute", this.size = e.getElementSize(this.elementWrapper));
          var o = this._getOverlayPositionAndSize(r), l = o.position, a = this.size = o.size, u = "";
          r.overlayPreserveContentDirection && (u = r.flipped ? " scaleX(-1)" : " scaleX(1)");
          var c = r.flipped ? -o.rotate : o.rotate, h = r.flipped ? " scaleX(-1)" : "";
          if (this.onDraw) this.onDraw(l, a, this.element);
          else {
            var f = this.style, m = this.element.style;
            m.display = "block", f.left = l.x + "px", f.top = l.y + "px", this.width !== null && (m.width = a.x + "px"), this.height !== null && (m.height = a.y + "px");
            var v = e.getCssPropertyWithVendorPrefix("transformOrigin"), y = e.getCssPropertyWithVendorPrefix("transform");
            v && y && (c && !r.flipped ? (m[y] = "", f[v] = this._getTransformOrigin(), f[y] = "rotate(" + c + "deg)") : !c && r.flipped ? (m[y] = u, f[v] = this._getTransformOrigin(), f[y] = h) : c && r.flipped ? (m[y] = u, f[v] = this._getTransformOrigin(), f[y] = "rotate(" + c + "deg)" + h) : (m[y] = "", f[v] = "", f[y] = "")), f.display = "flex";
          }
        }, _getOverlayPositionAndSize: function(n) {
          var r = n.pixelFromPoint(this.location, true), s = this._getSizeInPixels(n);
          this.adjust(r, s);
          var o = 0;
          if (n.getRotation(true) && this.rotationMode !== e.OverlayRotationMode.NO_ROTATION) if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX && this.width !== null && this.height !== null) {
            var l = new e.Rect(r.x, r.y, s.x, s.y), a = this._getBoundingBox(l, n.getRotation(true));
            r = a.getTopLeft(), s = a.getSize();
          } else o = n.getRotation(true);
          return n.flipped && (r.x = n.getContainerSize().x - r.x), { position: r, size: s, rotate: o };
        }, _getSizeInPixels: function(n) {
          var r = this.size.x, s = this.size.y;
          if (this.width !== null || this.height !== null) {
            var o = n.deltaPixelsFromPointsNoRotate(new e.Point(this.width || 0, this.height || 0), true);
            this.width !== null && (r = o.x), this.height !== null && (s = o.y);
          }
          if (this.checkResize && (this.width === null || this.height === null)) {
            var l = this.size = e.getElementSize(this.elementWrapper);
            this.width === null && (r = l.x), this.height === null && (s = l.y);
          }
          return new e.Point(r, s);
        }, _getBoundingBox: function(n, r) {
          var s = this._getPlacementPoint(n);
          return n.rotate(r, s).getBoundingBox();
        }, _getPlacementPoint: function(n) {
          var r = new e.Point(n.x, n.y), s = e.Placement.properties[this.placement];
          return s && (s.isHorizontallyCentered ? r.x += n.width / 2 : s.isRight && (r.x += n.width), s.isVerticallyCentered ? r.y += n.height / 2 : s.isBottom && (r.y += n.height)), r;
        }, _getTransformOrigin: function() {
          var n = "", r = e.Placement.properties[this.placement];
          return r && (r.isLeft ? n = "left" : r.isRight && (n = "right"), r.isTop ? n += " top" : r.isBottom && (n += " bottom")), n;
        }, update: function(n, r) {
          var s = e.isPlainObject(n) ? n : { location: n, placement: r };
          this._init({ location: s.location || this.location, placement: s.placement !== void 0 ? s.placement : this.placement, onDraw: s.onDraw || this.onDraw, checkResize: s.checkResize || this.checkResize, width: s.width !== void 0 ? s.width : this.width, height: s.height !== void 0 ? s.height : this.height, rotationMode: s.rotationMode || this.rotationMode });
        }, getBounds: function(n) {
          e.console.assert(n, "A viewport must now be passed to Overlay.getBounds.");
          var r = this.width, s = this.height;
          if (r === null || s === null) {
            var o = n.deltaPointsFromPixelsNoRotate(this.size, true);
            r === null && (r = o.x), s === null && (s = o.y);
          }
          var l = this.location.clone();
          return this.adjust(l, new e.Point(r, s)), this._adjustBoundsForRotation(n, new e.Rect(l.x, l.y, r, s));
        }, _adjustBoundsForRotation: function(n, r) {
          if (!n || n.getRotation(true) === 0 || this.rotationMode === e.OverlayRotationMode.EXACT) return r;
          if (this.rotationMode === e.OverlayRotationMode.BOUNDING_BOX) {
            if (this.width === null || this.height === null) return r;
            var s = this._getOverlayPositionAndSize(n);
            return n.viewerElementToViewportRectangle(new e.Rect(s.position.x, s.position.y, s.size.x, s.size.y));
          }
          return r.rotate(-n.getRotation(true), this._getPlacementPoint(r));
        } };
      })(i), (function(e) {
        const n = e;
        n.DrawerBase = class {
          constructor(s) {
            e.console.assert(s.viewer, "[Drawer] options.viewer is required"), e.console.assert(s.viewport, "[Drawer] options.viewport is required"), e.console.assert(s.element, "[Drawer] options.element is required"), this.viewer = s.viewer, this.viewport = s.viewport, this.debugGridColor = typeof s.debugGridColor == "string" ? [s.debugGridColor] : s.debugGridColor || e.DEFAULT_SETTINGS.debugGridColor, this.options = s.options || {}, this.container = e.getElement(s.element), this._renderingTarget = this._createDrawingElement(), this.canvas.style.width = "100%", this.canvas.style.height = "100%", this.canvas.style.position = "absolute", this.canvas.style.left = "0", e.setElementOpacity(this.canvas, this.viewer.opacity, true), e.setElementPointerEventsNone(this.canvas), e.setElementTouchActionNone(this.canvas), this.container.style.textAlign = "left", this.container.appendChild(this.canvas), this._checkForAPIOverrides();
          }
          get canvas() {
            return this._renderingTarget;
          }
          get element() {
            return e.console.error("Drawer.element is deprecated. Use Drawer.container instead."), this.container;
          }
          getType() {
            e.console.error("Drawer.getType must be implemented by child class");
          }
          static isSupported() {
            e.console.error("Drawer.isSupported must be implemented by child class");
          }
          _createDrawingElement() {
            return e.console.error("Drawer._createDrawingElement must be implemented by child class"), null;
          }
          draw(s) {
            e.console.error("Drawer.draw must be implemented by child class");
          }
          canRotate() {
            e.console.error("Drawer.canRotate must be implemented by child class");
          }
          destroy() {
            e.console.error("Drawer.destroy must be implemented by child class");
          }
          minimumOverlapRequired(s) {
            return false;
          }
          setImageSmoothingEnabled(s) {
            e.console.error("Drawer.setImageSmoothingEnabled must be implemented by child class");
          }
          drawDebuggingRect(s) {
            e.console.warn("[drawer].drawDebuggingRect is not implemented by this drawer");
          }
          clear() {
            e.console.warn("[drawer].clear() is deprecated. The drawer is responsible for clearing itself as needed before drawing tiles.");
          }
          _checkForAPIOverrides() {
            if (this._createDrawingElement === e.DrawerBase.prototype._createDrawingElement) throw new Error("[drawer]._createDrawingElement must be implemented by child class");
            if (this.draw === e.DrawerBase.prototype.draw) throw new Error("[drawer].draw must be implemented by child class");
            if (this.canRotate === e.DrawerBase.prototype.canRotate) throw new Error("[drawer].canRotate must be implemented by child class");
            if (this.destroy === e.DrawerBase.prototype.destroy) throw new Error("[drawer].destroy must be implemented by child class");
            if (this.setImageSmoothingEnabled === e.DrawerBase.prototype.setImageSmoothingEnabled) throw new Error("[drawer].setImageSmoothingEnabled must be implemented by child class");
          }
          viewportToDrawerRectangle(s) {
            var o = this.viewport.pixelFromPointNoRotate(s.getTopLeft(), true), l = this.viewport.deltaPixelsFromPointsNoRotate(s.getSize(), true);
            return new e.Rect(o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio, l.x * e.pixelDensityRatio, l.y * e.pixelDensityRatio);
          }
          viewportCoordToDrawerCoord(s) {
            var o = this.viewport.pixelFromPointNoRotate(s, true);
            return new e.Point(o.x * e.pixelDensityRatio, o.y * e.pixelDensityRatio);
          }
          _calculateCanvasSize() {
            var s = e.pixelDensityRatio, o = this.viewport.getContainerSize();
            return new n.Point(Math.round(o.x * s), Math.round(o.y * s));
          }
          _raiseTiledImageDrawnEvent(s, o) {
            this.viewer && this.viewer.raiseEvent("tiled-image-drawn", { tiledImage: s, tiles: o });
          }
          _raiseDrawerErrorEvent(s, o) {
            this.viewer && this.viewer.raiseEvent("drawer-error", { tiledImage: s, drawer: this, error: o });
          }
        };
      })(i), (function(e) {
        const n = e;
        class r extends n.DrawerBase {
          constructor(o) {
            super(o), this.viewer.rejectEventHandler("tile-drawing", "The HTMLDrawer does not raise the tile-drawing event"), this.viewer.allowEventHandler("tile-drawn");
          }
          static isSupported() {
            return true;
          }
          getType() {
            return "html";
          }
          minimumOverlapRequired(o) {
            return true;
          }
          _createDrawingElement() {
            return e.makeNeutralElement("div");
          }
          draw(o) {
            var l = this;
            this._prepareNewFrame(), o.forEach(function(a) {
              a.opacity !== 0 && l._drawTiles(a);
            });
          }
          canRotate() {
            return false;
          }
          destroy() {
            this.container.removeChild(this.canvas);
          }
          setImageSmoothingEnabled() {
          }
          _prepareNewFrame() {
            this.canvas.innerHTML = "";
          }
          _drawTiles(o) {
            var l = o.getTilesToDraw().map((c) => c.tile);
            if (!(o.opacity === 0 || l.length === 0 && !o.placeholderFillStyle)) for (var a = l.length - 1; a >= 0; a--) {
              var u = l[a];
              this._drawTile(u), this.viewer && this.viewer.raiseEvent("tile-drawn", { tiledImage: o, tile: u });
            }
          }
          _drawTile(o) {
            e.console.assert(o, "[Drawer._drawTile] tile is required");
            let l = this.canvas;
            if (!o.cacheImageRecord) {
              e.console.warn("[Drawer._drawTileToHTML] attempting to draw tile %s when it's not cached", o.toString());
              return;
            }
            if (!o.loaded) {
              e.console.warn("Attempting to draw tile %s when it's not yet loaded.", o.toString());
              return;
            }
            if (!o.element) {
              var a = o.getImage();
              if (!a) return;
              o.element = e.makeNeutralElement("div"), o.imgElement = a.cloneNode(), o.imgElement.style.msInterpolationMode = "nearest-neighbor", o.imgElement.style.width = "100%", o.imgElement.style.height = "100%", o.style = o.element.style, o.style.position = "absolute";
            }
            o.element.parentNode !== l && l.appendChild(o.element), o.imgElement.parentNode !== o.element && o.element.appendChild(o.imgElement), o.style.top = o.position.y + "px", o.style.left = o.position.x + "px", o.style.height = o.size.y + "px", o.style.width = o.size.x + "px", o.flipped && (o.style.transform = "scaleX(-1)"), e.setElementOpacity(o.element, o.opacity);
          }
        }
        e.HTMLDrawer = r;
      })(i), (function(e) {
        const n = e;
        class r extends n.DrawerBase {
          constructor(c) {
            super(c), this.context = this.canvas.getContext("2d"), this.sketchCanvas = null, this.sketchContext = null, this._imageSmoothingEnabled = true, this.viewer.allowEventHandler("tile-drawn"), this.viewer.allowEventHandler("tile-drawing");
          }
          static isSupported() {
            return e.supportsCanvas;
          }
          getType() {
            return "canvas";
          }
          _createDrawingElement() {
            let c = e.makeNeutralElement("canvas"), h = this._calculateCanvasSize();
            return c.width = h.x, c.height = h.y, c;
          }
          draw(c) {
            this._prepareNewFrame(), this.viewer.viewport.getFlip() !== this._viewportFlipped && this._flip();
            for (const h of c) h.opacity !== 0 && this._drawTiles(h);
          }
          canRotate() {
            return true;
          }
          destroy() {
            this.canvas.width = 1, this.canvas.height = 1, this.sketchCanvas = null, this.sketchContext = null, this.container.removeChild(this.canvas);
          }
          minimumOverlapRequired(c) {
            return true;
          }
          setImageSmoothingEnabled(c) {
            this._imageSmoothingEnabled = !!c, this._updateImageSmoothingEnabled(this.context), this.viewer.forceRedraw();
          }
          drawDebuggingRect(c) {
            var h = this.context;
            h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.strokeStyle = this.debugGridColor[0], h.fillStyle = this.debugGridColor[0], h.strokeRect(c.x * e.pixelDensityRatio, c.y * e.pixelDensityRatio, c.width * e.pixelDensityRatio, c.height * e.pixelDensityRatio), h.restore();
          }
          get _viewportFlipped() {
            return this.context.getTransform().a < 0;
          }
          _raiseTileDrawingEvent(c, h, f, m) {
            this.viewer.raiseEvent("tile-drawing", { tiledImage: c, context: h, tile: f, rendered: m });
          }
          _prepareNewFrame() {
            var c = this._calculateCanvasSize();
            if ((this.canvas.width !== c.x || this.canvas.height !== c.y) && (this.canvas.width = c.x, this.canvas.height = c.y, this._updateImageSmoothingEnabled(this.context), this.sketchCanvas !== null)) {
              var h = this._calculateSketchCanvasSize();
              this.sketchCanvas.width = h.x, this.sketchCanvas.height = h.y, this._updateImageSmoothingEnabled(this.sketchContext);
            }
            this._clear();
          }
          _clear(c, h) {
            var f = this._getContext(c);
            if (h) f.clearRect(h.x, h.y, h.width, h.height);
            else {
              var m = f.canvas;
              f.clearRect(0, 0, m.width, m.height);
            }
          }
          _drawTiles(c) {
            var h = c.getTilesToDraw().map((j) => j.tile);
            if (!(c.opacity === 0 || h.length === 0 && !c.placeholderFillStyle)) {
              var f = h[0], m;
              f && (m = c.opacity < 1 || c.compositeOperation && c.compositeOperation !== "source-over" || !c._isBottomItem() && c.source.hasTransparency(f.context2D, f.getUrl(), f.ajaxHeaders, f.postData));
              var v, y, x = this.viewport.getZoom(true), T = c.viewportToImageZoom(x);
              h.length > 1 && T > c.smoothTileEdgesMinZoom && !c.iOSDevice && c.getRotation(true) % 360 === 0 && (m = true, v = f.getScaleForEdgeSmoothing(), y = f.getTranslationForEdgeSmoothing(v, this._getCanvasSize(false), this._getCanvasSize(true)));
              var C;
              m && (v || (C = this.viewport.viewportToViewerElementRectangle(c.getClippedBounds(true)).getIntegerBoundingBox(), C = C.times(e.pixelDensityRatio)), this._clear(true, C)), v || this._setRotations(c, m);
              var H = false;
              if (c._clip) {
                this._saveContext(m);
                var k = c.imageToViewportRectangle(c._clip, true);
                k = k.rotate(-c.getRotation(true), c._getRotationPoint(true));
                var N = this.viewportToDrawerRectangle(k);
                v && (N = N.times(v)), y && (N = N.translate(y)), this._setClip(N, m), H = true;
              }
              if (c._croppingPolygons) {
                var Y = this;
                H || this._saveContext(m);
                try {
                  var K = c._croppingPolygons.map(function(j) {
                    return j.map(function(ne) {
                      var he = c.imageToViewportCoordinates(ne.x, ne.y, true).rotate(-c.getRotation(true), c._getRotationPoint(true)), ye = Y.viewportCoordToDrawerCoord(he);
                      return v && (ye = ye.times(v)), y && (ye = ye.plus(y)), ye;
                    });
                  });
                  this._clipWithPolygons(K, m);
                } catch (j) {
                  e.console.error(j);
                }
                H = true;
              }
              if (c._hasOpaqueTile = false, c.placeholderFillStyle && c._hasOpaqueTile === false) {
                let j = this.viewportToDrawerRectangle(c.getBoundsNoRotate(true));
                v && (j = j.times(v)), y && (j = j.translate(y));
                let ne = null;
                typeof c.placeholderFillStyle == "function" ? ne = c.placeholderFillStyle(c, this.context) : ne = c.placeholderFillStyle, this._drawRectangle(j, ne, m);
              }
              var q = a(c.subPixelRoundingForTransparency), ee = false;
              if (q === e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS) ee = true;
              else if (q === e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST) {
                var ce = this.viewer && this.viewer.isAnimating();
                ee = !ce;
              }
              for (var te = 0; te < h.length; te++) f = h[te], this._drawTile(f, c, m, v, y, ee, c.source), this.viewer && this.viewer.raiseEvent("tile-drawn", { tiledImage: c, tile: f });
              H && this._restoreContext(m), v || (c.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(m), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(m)), m && (v && this._setRotations(c), this.blendSketch({ opacity: c.opacity, scale: v, translate: y, compositeOperation: c.compositeOperation, bounds: C }), v && (c.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(false), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(false))), this._drawDebugInfo(c, h), this._raiseTiledImageDrawnEvent(c, h);
            }
          }
          _drawDebugInfo(c, h) {
            if (c.debugMode) for (var f = h.length - 1; f >= 0; f--) {
              var m = h[f];
              try {
                this._drawDebugInfoOnTile(m, h.length, f, c);
              } catch (v) {
                e.console.error(v);
              }
            }
          }
          _clipWithPolygons(c, h) {
            var f = this._getContext(h);
            f.beginPath();
            for (const m of c) for (const [v, y] of m.entries()) f[v === 0 ? "moveTo" : "lineTo"](y.x, y.y);
            f.clip();
          }
          _drawTile(c, h, f, m, v, y, x) {
            e.console.assert(c, "[Drawer._drawTile] tile is required"), e.console.assert(h, "[Drawer._drawTile] drawingHandler is required");
            var T = this._getContext(f);
            m = m || 1, this._drawTileToCanvas(c, T, h, m, v, y, x);
          }
          _drawTileToCanvas(c, h, f, m, v, y, x) {
            var T = c.position.times(e.pixelDensityRatio), C = c.size.times(e.pixelDensityRatio), H;
            if (!c.context2D && !c.cacheImageRecord) {
              e.console.warn("[Drawer._drawTileToCanvas] attempting to draw tile %s when it's not cached", c.toString());
              return;
            }
            if (H = c.getCanvasContext(), !c.loaded || !H) {
              e.console.warn("Attempting to draw tile %s when it's not yet loaded.", c.toString());
              return;
            }
            h.save(), typeof m == "number" && m !== 1 && (T = T.times(m), C = C.times(m)), v instanceof e.Point && (T = T.plus(v)), h.globalAlpha === 1 && c.hasTransparency && (y && (T.x = Math.round(T.x), T.y = Math.round(T.y), C.x = Math.round(C.x), C.y = Math.round(C.y)), h.clearRect(T.x, T.y, C.x, C.y)), this._raiseTileDrawingEvent(f, h, c, H);
            var k, N;
            c.sourceBounds ? (k = Math.min(c.sourceBounds.width, H.canvas.width), N = Math.min(c.sourceBounds.height, H.canvas.height)) : (k = H.canvas.width, N = H.canvas.height), h.translate(T.x + C.x / 2, 0), c.flipped && h.scale(-1, 1), h.drawImage(H.canvas, 0, 0, k, N, -C.x / 2, T.y, C.x, C.y), h.restore();
          }
          _getContext(c) {
            var h = this.context;
            if (c) {
              if (this.sketchCanvas === null) {
                this.sketchCanvas = document.createElement("canvas");
                var f = this._calculateSketchCanvasSize();
                if (this.sketchCanvas.width = f.x, this.sketchCanvas.height = f.y, this.sketchContext = this.sketchCanvas.getContext("2d"), this.viewport.getRotation() === 0) {
                  var m = this;
                  this.viewer.addHandler("rotate", function v() {
                    if (m.viewport.getRotation() !== 0) {
                      m.viewer.removeHandler("rotate", v);
                      var y = m._calculateSketchCanvasSize();
                      m.sketchCanvas.width = y.x, m.sketchCanvas.height = y.y;
                    }
                  });
                }
                this._updateImageSmoothingEnabled(this.sketchContext);
              }
              h = this.sketchContext;
            }
            return h;
          }
          _saveContext(c) {
            this._getContext(c).save();
          }
          _restoreContext(c) {
            this._getContext(c).restore();
          }
          _setClip(c, h) {
            var f = this._getContext(h);
            f.beginPath(), f.rect(c.x, c.y, c.width, c.height), f.clip();
          }
          _drawRectangle(c, h, f) {
            var m = this._getContext(f);
            m.save(), m.fillStyle = h, m.fillRect(c.x, c.y, c.width, c.height), m.restore();
          }
          blendSketch(c, h, f, m) {
            var v = c;
            e.isPlainObject(v) || (v = { opacity: c, scale: h, translate: f, compositeOperation: m }), c = v.opacity, m = v.compositeOperation;
            var y = v.bounds;
            if (this.context.save(), this.context.globalAlpha = c, m && (this.context.globalCompositeOperation = m), y) y.x < 0 && (y.width += y.x, y.x = 0), y.x + y.width > this.canvas.width && (y.width = this.canvas.width - y.x), y.y < 0 && (y.height += y.y, y.y = 0), y.y + y.height > this.canvas.height && (y.height = this.canvas.height - y.y), this.context.drawImage(this.sketchCanvas, y.x, y.y, y.width, y.height, y.x, y.y, y.width, y.height);
            else {
              h = v.scale || 1, f = v.translate;
              var x = f instanceof e.Point ? f : new e.Point(0, 0), T = 0, C = 0;
              if (f) {
                var H = this.sketchCanvas.width - this.canvas.width, k = this.sketchCanvas.height - this.canvas.height;
                T = Math.round(H / 2), C = Math.round(k / 2);
              }
              this.context.drawImage(this.sketchCanvas, x.x - T * h, x.y - C * h, (this.canvas.width + 2 * T) * h, (this.canvas.height + 2 * C) * h, -T, -C, this.canvas.width + 2 * T, this.canvas.height + 2 * C);
            }
            this.context.restore();
          }
          _drawDebugInfoOnTile(c, h, f, m) {
            var v = this.viewer.world.getIndexOfItem(m) % this.debugGridColor.length, y = this.context;
            y.save(), y.lineWidth = 2 * e.pixelDensityRatio, y.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", y.strokeStyle = this.debugGridColor[v], y.fillStyle = this.debugGridColor[v], this._setRotations(m), this._viewportFlipped && this._flip({ point: c.position.plus(c.size.divide(2)) }), y.strokeRect(c.position.x * e.pixelDensityRatio, c.position.y * e.pixelDensityRatio, c.size.x * e.pixelDensityRatio, c.size.y * e.pixelDensityRatio);
            var x = (c.position.x + c.size.x / 2) * e.pixelDensityRatio, T = (c.position.y + c.size.y / 2) * e.pixelDensityRatio;
            y.translate(x, T);
            const C = this.viewport.getRotation(true);
            y.rotate(Math.PI / 180 * -C), y.translate(-x, -T), c.x === 0 && c.y === 0 && (y.fillText("Zoom: " + this.viewport.getZoom(), c.position.x * e.pixelDensityRatio, (c.position.y - 30) * e.pixelDensityRatio), y.fillText("Pan: " + this.viewport.getBounds().toString(), c.position.x * e.pixelDensityRatio, (c.position.y - 20) * e.pixelDensityRatio)), y.fillText("Level: " + c.level, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 20) * e.pixelDensityRatio), y.fillText("Column: " + c.x, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 30) * e.pixelDensityRatio), y.fillText("Row: " + c.y, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 40) * e.pixelDensityRatio), y.fillText("Order: " + f + " of " + h, (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 50) * e.pixelDensityRatio), y.fillText("Size: " + c.size.toString(), (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 60) * e.pixelDensityRatio), y.fillText("Position: " + c.position.toString(), (c.position.x + 10) * e.pixelDensityRatio, (c.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), m.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), y.restore();
          }
          _updateImageSmoothingEnabled(c) {
            c.msImageSmoothingEnabled = this._imageSmoothingEnabled, c.imageSmoothingEnabled = this._imageSmoothingEnabled;
          }
          _getCanvasSize(c) {
            var h = this._getContext(c).canvas;
            return new e.Point(h.width, h.height);
          }
          _getCanvasCenter() {
            return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
          }
          _setRotations(c, h = false) {
            var f = false;
            this.viewport.getRotation(true) % 360 !== 0 && (this._offsetForRotation({ degrees: this.viewport.getRotation(true), useSketch: h, saveContext: f }), f = false), c.getRotation(true) % 360 !== 0 && this._offsetForRotation({ degrees: c.getRotation(true), point: this.viewport.pixelFromPointNoRotate(c._getRotationPoint(true), true), useSketch: h, saveContext: f });
          }
          _offsetForRotation(c) {
            var h = c.point ? c.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), f = this._getContext(c.useSketch);
            f.save(), f.translate(h.x, h.y), f.rotate(Math.PI / 180 * c.degrees), f.translate(-h.x, -h.y);
          }
          _flip(c) {
            c = c || {};
            var h = c.point ? c.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), f = this._getContext(c.useSketch);
            f.translate(h.x, 0), f.scale(-1, 1), f.translate(-h.x, 0);
          }
          _restoreRotationChanges(c) {
            var h = this._getContext(c);
            h.restore();
          }
          _calculateCanvasSize() {
            var c = e.pixelDensityRatio, h = this.viewport.getContainerSize();
            return { x: Math.round(h.x * c), y: Math.round(h.y * c) };
          }
          _calculateSketchCanvasSize() {
            var c = this._calculateCanvasSize();
            if (this.viewport.getRotation() === 0) return c;
            var h = Math.ceil(Math.sqrt(c.x * c.x + c.y * c.y));
            return { x: h, y: h };
          }
        }
        e.CanvasDrawer = r;
        var s = e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        function o(u) {
          return u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ALWAYS && u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.ONLY_AT_REST && u !== e.SUBPIXEL_ROUNDING_OCCURRENCES.NEVER;
        }
        function l(u) {
          return o(u) ? s : u;
        }
        function a(u) {
          if (typeof u == "number") return l(u);
          if (!u || !e.Browser) return s;
          var c = u[e.Browser.vendor];
          return o(c) && (c = u["*"]), l(c);
        }
      })(i), (function(e) {
        const n = e;
        n.WebGLDrawer = class extends n.DrawerBase {
          constructor(s) {
            super(s), this._destroyed = false, this._TextureMap = /* @__PURE__ */ new Map(), this._TileMap = /* @__PURE__ */ new Map(), this._gl = null, this._firstPass = null, this._secondPass = null, this._glFrameBuffer = null, this._renderToTexture = null, this._glFramebufferToCanvasTransform = null, this._outputCanvas = null, this._outputContext = null, this._clippingCanvas = null, this._clippingContext = null, this._renderingCanvas = null, this._backupCanvasDrawer = null, this._imageSmoothingEnabled = true, this._boundToTileReady = (o) => this._tileReadyHandler(o), this._boundToImageUnloaded = (o) => this._imageUnloadedHandler(o), this.viewer.addHandler("tile-ready", this._boundToTileReady), this.viewer.addHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.rejectEventHandler("tile-drawn", "The WebGLDrawer does not raise the tile-drawn event"), this.viewer.rejectEventHandler("tile-drawing", "The WebGLDrawer does not raise the tile-drawing event"), this._setupCanvases(), this._setupRenderer(), this.context = this._outputContext;
          }
          destroy() {
            if (this._destroyed) return;
            let s = this._gl;
            var o = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS);
            for (let a = 0; a < o; ++a) s.activeTexture(s.TEXTURE0 + a), s.bindTexture(s.TEXTURE_2D, null), s.bindTexture(s.TEXTURE_CUBE_MAP, null);
            s.bindBuffer(s.ARRAY_BUFFER, null), s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, null), s.bindRenderbuffer(s.RENDERBUFFER, null), s.bindFramebuffer(s.FRAMEBUFFER, null), this._unloadTextures(), s.deleteBuffer(this._secondPass.bufferOutputPosition), s.deleteFramebuffer(this._glFrameBuffer), this._renderingCanvas.width = this._renderingCanvas.height = 1, this._clippingCanvas.width = this._clippingCanvas.height = 1, this._outputCanvas.width = this._outputCanvas.height = 1, this._renderingCanvas = null, this._clippingCanvas = this._clippingContext = null, this._outputCanvas = this._outputContext = null;
            let l = s.getExtension("WEBGL_lose_context");
            l && l.loseContext(), this.viewer.removeHandler("tile-ready", this._boundToTileReady), this.viewer.removeHandler("image-unloaded", this._boundToImageUnloaded), this.viewer.removeHandler("resize", this._resizeHandler), this._gl = null, this._backupCanvasDrawer && (this._backupCanvasDrawer.destroy(), this._backupCanvasDrawer = null), this.container.removeChild(this.canvas), this.viewer.drawer === this && (this.viewer.drawer = null), this._destroyed = true;
          }
          canRotate() {
            return true;
          }
          static isSupported() {
            let s = document.createElement("canvas"), o = e.isFunction(s.getContext) && s.getContext("webgl"), l = o && o.getExtension("WEBGL_lose_context");
            return l && l.loseContext(), !!o;
          }
          getType() {
            return "webgl";
          }
          minimumOverlapRequired(s) {
            return s.isTainted();
          }
          _createDrawingElement() {
            let s = e.makeNeutralElement("canvas"), o = this._calculateCanvasSize();
            return s.width = o.x, s.height = o.y, s;
          }
          _getBackupCanvasDrawer() {
            return this._backupCanvasDrawer || (this._backupCanvasDrawer = this.viewer.requestDrawer("canvas", { mainDrawer: false }), this._backupCanvasDrawer.canvas.style.setProperty("visibility", "hidden")), this._backupCanvasDrawer;
          }
          draw(s) {
            let o = this._gl;
            const l = this.viewport.getBoundsNoRotateWithMargins(true);
            let a = { bounds: l, center: new n.Point(l.x + l.width / 2, l.y + l.height / 2), rotation: this.viewport.getRotation(true) * Math.PI / 180 }, u = this.viewport.flipped ? -1 : 1, c = e.Mat3.makeTranslation(-a.center.x, -a.center.y), h = e.Mat3.makeScaling(2 / a.bounds.width * u, -2 / a.bounds.height), f = e.Mat3.makeRotation(-a.rotation), m = h.multiply(f).multiply(c);
            o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT), this._outputContext.clearRect(0, 0, this._outputCanvas.width, this._outputCanvas.height);
            let v = false;
            s.forEach((y, x) => {
              if (y.isTainted()) {
                v && (this._outputContext.drawImage(this._renderingCanvas, 0, 0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT), v = false);
                const T = this._getBackupCanvasDrawer();
                T.draw([y]), this._outputContext.drawImage(T.canvas, 0, 0);
              } else {
                let T = y.getTilesToDraw();
                if (y.placeholderFillStyle && y._hasOpaqueTile === false && this._drawPlaceholder(y), T.length === 0 || y.getOpacity() === 0) return;
                let C = T[0], H = y.compositeOperation || this.viewer.compositeOperation || y._clip || y._croppingPolygons || y.debugMode, k = H || y.opacity < 1 || C.hasTransparency;
                H && (v && this._outputContext.drawImage(this._renderingCanvas, 0, 0), o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT)), o.useProgram(this._firstPass.shaderProgram), k ? (o.bindFramebuffer(o.FRAMEBUFFER, this._glFrameBuffer), o.clear(o.COLOR_BUFFER_BIT)) : o.bindFramebuffer(o.FRAMEBUFFER, null);
                let N = m, Y = y.getRotation(true);
                if (Y % 360 !== 0) {
                  let j = e.Mat3.makeRotation(-Y * Math.PI / 180), ne = y.getBoundsNoRotate(true).getCenter(), he = e.Mat3.makeTranslation(ne.x, ne.y), ye = e.Mat3.makeTranslation(-ne.x, -ne.y), me = he.multiply(j).multiply(ye);
                  N = m.multiply(me);
                }
                let K = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS);
                if (K <= 0) throw new Error(`WegGL error: bad value for gl parameter MAX_TEXTURE_IMAGE_UNITS (${K}). This could happen
                        if too many contexts have been created and not released, or there is another problem with the graphics card.`);
                let q = new Float32Array(K * 12), ee = new Array(K), ce = new Array(K), te = new Array(K);
                for (let j = 0; j < T.length; j++) {
                  let ne = T[j].tile, he = j % K, ye = he + 1, me = ne.getCanvasContext(), pe = me ? this._TextureMap.get(me.canvas) : null;
                  if (pe || (this._tileReadyHandler({ tile: ne, tiledImage: y }), pe = me ? this._TextureMap.get(me.canvas) : null), pe && this._getTileData(ne, y, pe, N, he, q, ee, ce, te), ye === K || j === T.length - 1) {
                    for (let ae = 0; ae <= ye; ae++) o.activeTexture(o.TEXTURE0 + ae), o.bindTexture(o.TEXTURE_2D, ee[ae]);
                    o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), o.bufferData(o.ARRAY_BUFFER, q, o.DYNAMIC_DRAW), ce.forEach((ae, Ae) => {
                      o.uniformMatrix3fv(this._firstPass.uTransformMatrices[Ae], false, ae);
                    }), o.uniform1fv(this._firstPass.uOpacities, new Float32Array(te)), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), o.vertexAttribPointer(this._firstPass.aOutputPosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), o.vertexAttribPointer(this._firstPass.aTexturePosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._firstPass.bufferIndex), o.vertexAttribPointer(this._firstPass.aIndex, 1, o.FLOAT, false, 0, 0), o.drawArrays(o.TRIANGLES, 0, 6 * ye);
                  }
                }
                k && (o.useProgram(this._secondPass.shaderProgram), o.bindFramebuffer(o.FRAMEBUFFER, null), o.activeTexture(o.TEXTURE0), o.bindTexture(o.TEXTURE_2D, this._renderToTexture), this._gl.uniform1f(this._secondPass.uOpacityMultiplier, y.opacity), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), o.vertexAttribPointer(this._secondPass.aTexturePosition, 2, o.FLOAT, false, 0, 0), o.bindBuffer(o.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), o.vertexAttribPointer(this._secondPass.aOutputPosition, 2, o.FLOAT, false, 0, 0), o.drawArrays(o.TRIANGLES, 0, 6)), v = true, H && (this._applyContext2dPipeline(y, T, x), v = false, o.bindFramebuffer(o.FRAMEBUFFER, null), o.clear(o.COLOR_BUFFER_BIT)), x === 0 && this._raiseTiledImageDrawnEvent(y, T.map((j) => j.tile));
              }
            }), v && this._outputContext.drawImage(this._renderingCanvas, 0, 0);
          }
          setImageSmoothingEnabled(s) {
            this._imageSmoothingEnabled !== s && (this._imageSmoothingEnabled = s, this._unloadTextures(), this.viewer.world.draw());
          }
          drawDebuggingRect(s) {
            let o = this._outputContext;
            o.save(), o.lineWidth = 2 * e.pixelDensityRatio, o.strokeStyle = this.debugGridColor[0], o.fillStyle = this.debugGridColor[0], o.strokeRect(s.x * e.pixelDensityRatio, s.y * e.pixelDensityRatio, s.width * e.pixelDensityRatio, s.height * e.pixelDensityRatio), o.restore();
          }
          _getTextureDataFromTile(s) {
            return s.getCanvasContext().canvas;
          }
          _applyContext2dPipeline(s, o, l) {
            if (this._outputContext.save(), this._outputContext.globalCompositeOperation = l === 0 ? null : s.compositeOperation || this.viewer.compositeOperation, s._croppingPolygons || s._clip ? (this._renderToClippingCanvas(s), this._outputContext.drawImage(this._clippingCanvas, 0, 0)) : this._outputContext.drawImage(this._renderingCanvas, 0, 0), this._outputContext.restore(), s.debugMode) {
              const a = this.viewer.viewport.getFlip();
              a && this._flip(), this._drawDebugInfo(o, s, a), a && this._flip();
            }
          }
          _getTileData(s, o, l, a, u, c, h, f, m) {
            let v = l.texture, y = l.position;
            c.set(y, u * 12);
            let x = this._calculateOverlapFraction(s, o), T = s.positionedBounds.width * x.x, C = s.positionedBounds.height * x.y, H = s.positionedBounds.x + (s.x === 0 ? 0 : T), k = s.positionedBounds.y + (s.y === 0 ? 0 : C), N = s.positionedBounds.x + s.positionedBounds.width - (s.isRightMost ? 0 : T), Y = s.positionedBounds.y + s.positionedBounds.height - (s.isBottomMost ? 0 : C), K = N - H, q = Y - k, ee = new e.Mat3([K, 0, 0, 0, q, 0, H, k, 1]);
            if (s.flipped) {
              let te = e.Mat3.makeTranslation(0.5, 0), j = e.Mat3.makeTranslation(-0.5, 0), ne = te.multiply(e.Mat3.makeScaling(-1, 1)).multiply(j);
              ee = ee.multiply(ne);
            }
            let ce = a.multiply(ee);
            m[u] = s.opacity, h[u] = v, f[u] = ce.values;
          }
          _textureFilter() {
            return this._imageSmoothingEnabled ? this._gl.LINEAR : this._gl.NEAREST;
          }
          _setupRenderer() {
            let s = this._gl;
            s || e.console.error("_setupCanvases must be called before _setupRenderer"), this._unitQuad = this._makeQuadVertexBuffer(0, 1, 0, 1), this._makeFirstPassShaderProgram(), this._makeSecondPassShaderProgram(), this._renderToTexture = s.createTexture(), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this._renderToTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, this._renderingCanvas.width, this._renderingCanvas.height, 0, s.RGBA, s.UNSIGNED_BYTE, null), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, this._textureFilter()), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), this._glFrameBuffer = s.createFramebuffer(), s.bindFramebuffer(s.FRAMEBUFFER, this._glFrameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._renderToTexture, 0), s.enable(s.BLEND), s.blendFunc(s.ONE, s.ONE_MINUS_SRC_ALPHA);
          }
          _makeFirstPassShaderProgram() {
            let s = this._glNumTextures = this._gl.getParameter(this._gl.MAX_TEXTURE_IMAGE_UNITS), o = () => [...Array(s).keys()].map((v) => `uniform mat3 u_matrix_${v};`).join(`
`), l = () => [...Array(s).keys()].map((v) => `${v > 0 ? "else " : ""}if(int(a_index) == ${v}) { transform_matrix = u_matrix_${v}; }`).join(`
`);
            const a = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;
            attribute float a_index;

            ${o()} // create a uniform mat3 for each potential tile to draw

            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {

                mat3 transform_matrix; // value will be set by the if/elses in makeConditional()

                ${l()}

                gl_Position = vec4(transform_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
                v_image_index = a_index;
            }
            `, u = `
            precision mediump float;

            // our textures
            uniform sampler2D u_images[${s}];
            // our opacities
            uniform float u_opacities[${s}];

            // the varyings passed in from the vertex shader.
            varying vec2 v_texture_position;
            varying float v_image_index;

            void main() {
                // can't index directly with a variable, need to use a loop iterator hack
                for(int i = 0; i < ${s}; ++i){
                    if(i == int(v_image_index)){
                        gl_FragColor = texture2D(u_images[i], v_texture_position) * u_opacities[i];
                    }
                }
            }
            `;
            let c = this._gl, h = this.constructor.initShaderProgram(c, a, u);
            c.useProgram(h), this._firstPass = { shaderProgram: h, aOutputPosition: c.getAttribLocation(h, "a_output_position"), aTexturePosition: c.getAttribLocation(h, "a_texture_position"), aIndex: c.getAttribLocation(h, "a_index"), uTransformMatrices: [...Array(this._glNumTextures).keys()].map((v) => c.getUniformLocation(h, `u_matrix_${v}`)), uImages: c.getUniformLocation(h, "u_images"), uOpacities: c.getUniformLocation(h, "u_opacities"), bufferOutputPosition: c.createBuffer(), bufferTexturePosition: c.createBuffer(), bufferIndex: c.createBuffer() }, c.uniform1iv(this._firstPass.uImages, [...Array(s).keys()]);
            let f = new Float32Array(s * 12);
            for (let v = 0; v < s; ++v) f.set(Float32Array.from(this._unitQuad), v * 12);
            c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferOutputPosition), c.bufferData(c.ARRAY_BUFFER, f, c.STATIC_DRAW), c.enableVertexAttribArray(this._firstPass.aOutputPosition), c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferTexturePosition), c.enableVertexAttribArray(this._firstPass.aTexturePosition), c.bindBuffer(c.ARRAY_BUFFER, this._firstPass.bufferIndex);
            let m = [...Array(this._glNumTextures).keys()].map((v) => Array(6).fill(v)).flat();
            c.bufferData(c.ARRAY_BUFFER, new Float32Array(m), c.STATIC_DRAW), c.enableVertexAttribArray(this._firstPass.aIndex);
          }
          _makeSecondPassShaderProgram() {
            const s = `
            attribute vec2 a_output_position;
            attribute vec2 a_texture_position;

            uniform mat3 u_matrix;

            varying vec2 v_texture_position;

            void main() {
                gl_Position = vec4(u_matrix * vec3(a_output_position, 1), 1);

                v_texture_position = a_texture_position;
            }
            `, o = `
            precision mediump float;

            // our texture
            uniform sampler2D u_image;

            // the texCoords passed in from the vertex shader.
            varying vec2 v_texture_position;

            // the opacity multiplier for the image
            uniform float u_opacity_multiplier;

            void main() {
                gl_FragColor = texture2D(u_image, v_texture_position);
                gl_FragColor *= u_opacity_multiplier;
            }
            `;
            let l = this._gl, a = this.constructor.initShaderProgram(l, s, o);
            l.useProgram(a), this._secondPass = { shaderProgram: a, aOutputPosition: l.getAttribLocation(a, "a_output_position"), aTexturePosition: l.getAttribLocation(a, "a_texture_position"), uMatrix: l.getUniformLocation(a, "u_matrix"), uImage: l.getUniformLocation(a, "u_image"), uOpacityMultiplier: l.getUniformLocation(a, "u_opacity_multiplier"), bufferOutputPosition: l.createBuffer(), bufferTexturePosition: l.createBuffer() }, l.bindBuffer(l.ARRAY_BUFFER, this._secondPass.bufferOutputPosition), l.bufferData(l.ARRAY_BUFFER, this._unitQuad, l.STATIC_DRAW), l.enableVertexAttribArray(this._secondPass.aOutputPosition), l.bindBuffer(l.ARRAY_BUFFER, this._secondPass.bufferTexturePosition), l.bufferData(l.ARRAY_BUFFER, this._unitQuad, l.DYNAMIC_DRAW), l.enableVertexAttribArray(this._secondPass.aTexturePosition);
            let u = e.Mat3.makeScaling(2, 2).multiply(e.Mat3.makeTranslation(-0.5, -0.5));
            l.uniformMatrix3fv(this._secondPass.uMatrix, false, u.values);
          }
          _resizeRenderer() {
            let s = this._gl, o = this._renderingCanvas.width, l = this._renderingCanvas.height;
            s.viewport(0, 0, o, l), s.deleteTexture(this._renderToTexture), this._renderToTexture = s.createTexture(), s.activeTexture(s.TEXTURE0), s.bindTexture(s.TEXTURE_2D, this._renderToTexture), s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, o, l, 0, s.RGBA, s.UNSIGNED_BYTE, null), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, this._textureFilter()), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE), s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE), s.bindFramebuffer(s.FRAMEBUFFER, this._glFrameBuffer), s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.TEXTURE_2D, this._renderToTexture, 0);
          }
          _setupCanvases() {
            let s = this;
            this._outputCanvas = this.canvas, this._outputContext = this._outputCanvas.getContext("2d"), this._renderingCanvas = document.createElement("canvas"), this._clippingCanvas = document.createElement("canvas"), this._clippingContext = this._clippingCanvas.getContext("2d"), this._renderingCanvas.width = this._clippingCanvas.width = this._outputCanvas.width, this._renderingCanvas.height = this._clippingCanvas.height = this._outputCanvas.height, this._gl = this._renderingCanvas.getContext("webgl"), this._resizeHandler = function() {
              s._outputCanvas !== s.viewer.drawer.canvas && (s._outputCanvas.style.width = s.viewer.drawer.canvas.clientWidth + "px", s._outputCanvas.style.height = s.viewer.drawer.canvas.clientHeight + "px");
              let o = s._calculateCanvasSize();
              (s._outputCanvas.width !== o.x || s._outputCanvas.height !== o.y) && (s._outputCanvas.width = o.x, s._outputCanvas.height = o.y), s._renderingCanvas.style.width = s._outputCanvas.clientWidth + "px", s._renderingCanvas.style.height = s._outputCanvas.clientHeight + "px", s._renderingCanvas.width = s._clippingCanvas.width = s._outputCanvas.width, s._renderingCanvas.height = s._clippingCanvas.height = s._outputCanvas.height, s._resizeRenderer();
            }, this.viewer.addHandler("resize", this._resizeHandler);
          }
          _makeQuadVertexBuffer(s, o, l, a) {
            return new Float32Array([s, a, o, a, s, l, s, l, o, a, o, l]);
          }
          _tileReadyHandler(s) {
            let o = s.tile, l = s.tiledImage;
            if (l.isTainted()) return;
            let a = o.getCanvasContext(), u = a && a.canvas;
            if (!u || e.isCanvasTainted(u)) {
              l.isTainted() || (l.setTainted(true), e.console.warn("WebGL cannot be used to draw this TiledImage because it has tainted data. Does crossOriginPolicy need to be set?"), this._raiseDrawerErrorEvent(l, "Tainted data cannot be used by the WebGLDrawer. Falling back to CanvasDrawer for this TiledImage."));
              return;
            }
            if (!this._TextureMap.get(u)) {
              let h = this._gl, f = h.createTexture(), m, v = l.source.tileOverlap, y, x;
              if (o.sourceBounds ? (y = Math.min(o.sourceBounds.width, u.width) / u.width, x = Math.min(o.sourceBounds.height, u.height) / u.height) : (y = 1, x = 1), v > 0) {
                let C = this._calculateOverlapFraction(o, l), H = (o.x === 0 ? 0 : C.x) * y, k = (o.y === 0 ? 0 : C.y) * x, N = (o.isRightMost ? 1 : 1 - C.x) * y, Y = (o.isBottomMost ? 1 : 1 - C.y) * x;
                m = this._makeQuadVertexBuffer(H, N, k, Y);
              } else y === 1 && x === 1 ? m = this._unitQuad : m = this._makeQuadVertexBuffer(0, y, 0, x);
              let T = { texture: f, position: m };
              this._TextureMap.set(u, T), h.activeTexture(h.TEXTURE0), h.bindTexture(h.TEXTURE_2D, f), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_S, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_WRAP_T, h.CLAMP_TO_EDGE), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MIN_FILTER, this._textureFilter()), h.texParameteri(h.TEXTURE_2D, h.TEXTURE_MAG_FILTER, this._textureFilter()), this._uploadImageData(a);
            }
          }
          _calculateOverlapFraction(s, o) {
            let l = o.source.tileOverlap, a = s.sourceBounds.width, u = s.sourceBounds.height, c = (s.x === 0 ? 0 : l) + (s.isRightMost ? 0 : l), h = (s.y === 0 ? 0 : l) + (s.isBottomMost ? 0 : l), f = l / (a + c), m = l / (u + h);
            return { x: f, y: m };
          }
          _unloadTextures() {
            Array.from(this._TextureMap.keys()).forEach((o) => {
              this._cleanupImageData(o);
            });
          }
          _uploadImageData(s) {
            let o = this._gl, l = s.canvas;
            try {
              if (!l) throw s;
              o.texImage2D(o.TEXTURE_2D, 0, o.RGBA, o.RGBA, o.UNSIGNED_BYTE, l);
            } catch (a) {
              e.console.error("Error uploading image data to WebGL", a);
            }
          }
          _imageUnloadedHandler(s) {
            let o = s.context2D.canvas;
            this._cleanupImageData(o);
          }
          _cleanupImageData(s) {
            let o = this._TextureMap.get(s);
            this._TextureMap.delete(s), o && this._gl.deleteTexture(o.texture);
          }
          _setClip() {
          }
          _renderToClippingCanvas(s) {
            if (this._clippingContext.clearRect(0, 0, this._clippingCanvas.width, this._clippingCanvas.height), this._clippingContext.save(), this.viewer.viewport.getFlip()) {
              const o = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
              this._clippingContext.translate(o.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-o.x, 0);
            }
            if (s._clip) {
              let l = [{ x: s._clip.x, y: s._clip.y }, { x: s._clip.x + s._clip.width, y: s._clip.y }, { x: s._clip.x + s._clip.width, y: s._clip.y + s._clip.height }, { x: s._clip.x, y: s._clip.y + s._clip.height }].map((a) => {
                let u = s.imageToViewportCoordinates(a.x, a.y, true).rotate(this.viewer.viewport.getRotation(true), this.viewer.viewport.getCenter(true));
                return this.viewportCoordToDrawerCoord(u);
              });
              this._clippingContext.beginPath(), l.forEach((a, u) => {
                this._clippingContext[u === 0 ? "moveTo" : "lineTo"](a.x, a.y);
              }), this._clippingContext.clip(), this._setClip();
            }
            if (s._croppingPolygons) {
              let o = s._croppingPolygons.map((l) => l.map((a) => {
                let u = s.imageToViewportCoordinates(a.x, a.y, true).rotate(this.viewer.viewport.getRotation(true), this.viewer.viewport.getCenter(true));
                return this.viewportCoordToDrawerCoord(u);
              }));
              this._clippingContext.beginPath(), o.forEach((l) => {
                l.forEach((a, u) => {
                  this._clippingContext[u === 0 ? "moveTo" : "lineTo"](a.x, a.y);
                });
              }), this._clippingContext.clip();
            }
            if (this.viewer.viewport.getFlip()) {
              const o = new e.Point(this.canvas.width / 2, this.canvas.height / 2);
              this._clippingContext.translate(o.x, 0), this._clippingContext.scale(-1, 1), this._clippingContext.translate(-o.x, 0);
            }
            this._clippingContext.drawImage(this._renderingCanvas, 0, 0), this._clippingContext.restore();
          }
          _setRotations(s) {
            var o = false;
            this.viewport.getRotation(true) % 360 !== 0 && (this._offsetForRotation({ degrees: this.viewport.getRotation(true), saveContext: o }), o = false), s.getRotation(true) % 360 !== 0 && this._offsetForRotation({ degrees: s.getRotation(true), point: this.viewport.pixelFromPointNoRotate(s._getRotationPoint(true), true), saveContext: o });
          }
          _offsetForRotation(s) {
            var o = s.point ? s.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), l = this._outputContext;
            l.save(), l.translate(o.x, o.y), l.rotate(Math.PI / 180 * s.degrees), l.translate(-o.x, -o.y);
          }
          _flip(s) {
            s = s || {};
            var o = s.point ? s.point.times(e.pixelDensityRatio) : this._getCanvasCenter(), l = this._outputContext;
            l.translate(o.x, 0), l.scale(-1, 1), l.translate(-o.x, 0);
          }
          _drawDebugInfo(s, o, l) {
            for (var a = s.length - 1; a >= 0; a--) {
              var u = s[a].tile;
              try {
                this._drawDebugInfoOnTile(u, s.length, a, o, l);
              } catch (c) {
                e.console.error(c);
              }
            }
          }
          _drawDebugInfoOnTile(s, o, l, a, u) {
            var c = this.viewer.world.getIndexOfItem(a) % this.debugGridColor.length, h = this.context;
            h.save(), h.lineWidth = 2 * e.pixelDensityRatio, h.font = "small-caps bold " + 13 * e.pixelDensityRatio + "px arial", h.strokeStyle = this.debugGridColor[c], h.fillStyle = this.debugGridColor[c], this._setRotations(a), u && this._flip({ point: s.position.plus(s.size.divide(2)) }), h.strokeRect(s.position.x * e.pixelDensityRatio, s.position.y * e.pixelDensityRatio, s.size.x * e.pixelDensityRatio, s.size.y * e.pixelDensityRatio);
            var f = (s.position.x + s.size.x / 2) * e.pixelDensityRatio, m = (s.position.y + s.size.y / 2) * e.pixelDensityRatio;
            h.translate(f, m);
            const v = this.viewport.getRotation(true);
            h.rotate(Math.PI / 180 * -v), h.translate(-f, -m), s.x === 0 && s.y === 0 && (h.fillText("Zoom: " + this.viewport.getZoom(), s.position.x * e.pixelDensityRatio, (s.position.y - 30) * e.pixelDensityRatio), h.fillText("Pan: " + this.viewport.getBounds().toString(), s.position.x * e.pixelDensityRatio, (s.position.y - 20) * e.pixelDensityRatio)), h.fillText("Level: " + s.level, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 20) * e.pixelDensityRatio), h.fillText("Column: " + s.x, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 30) * e.pixelDensityRatio), h.fillText("Row: " + s.y, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 40) * e.pixelDensityRatio), h.fillText("Order: " + l + " of " + o, (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 50) * e.pixelDensityRatio), h.fillText("Size: " + s.size.toString(), (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 60) * e.pixelDensityRatio), h.fillText("Position: " + s.position.toString(), (s.position.x + 10) * e.pixelDensityRatio, (s.position.y + 70) * e.pixelDensityRatio), this.viewport.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), a.getRotation(true) % 360 !== 0 && this._restoreRotationChanges(), h.restore();
          }
          _drawPlaceholder(s) {
            const o = s.getBounds(true), l = this.viewportToDrawerRectangle(s.getBounds(true)), a = this._outputContext;
            let u;
            typeof s.placeholderFillStyle == "function" ? u = s.placeholderFillStyle(s, a) : u = s.placeholderFillStyle, this._offsetForRotation({ degrees: this.viewer.viewport.getRotation(true) }), a.fillStyle = u, a.translate(l.x, l.y), a.rotate(Math.PI / 180 * o.degrees), a.translate(-l.x, -l.y), a.fillRect(l.x, l.y, l.width, l.height), this._restoreRotationChanges();
          }
          _getCanvasCenter() {
            return new e.Point(this.canvas.width / 2, this.canvas.height / 2);
          }
          _restoreRotationChanges() {
            var s = this._outputContext;
            s.restore();
          }
          static initShaderProgram(s, o, l) {
            function a(f, m, v) {
              const y = f.createShader(m);
              return f.shaderSource(y, v), f.compileShader(y), f.getShaderParameter(y, f.COMPILE_STATUS) ? y : (e.console.error(`An error occurred compiling the shaders: ${f.getShaderInfoLog(y)}`), f.deleteShader(y), null);
            }
            const u = a(s, s.VERTEX_SHADER, o), c = a(s, s.FRAGMENT_SHADER, l), h = s.createProgram();
            return s.attachShader(h, u), s.attachShader(h, c), s.linkProgram(h), s.getProgramParameter(h, s.LINK_STATUS) ? h : (e.console.error(`Unable to initialize the shader program: ${s.getProgramInfoLog(h)}`), null);
          }
        };
      })(i), (function(e) {
        e.Viewport = function(n) {
          var r = arguments;
          r.length && r[0] instanceof e.Point && (n = { containerSize: r[0], contentSize: r[1], config: r[2] }), n.config && (e.extend(true, n, n.config), delete n.config), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n.margins || {}), delete n.margins, n.initialDegrees = n.degrees, delete n.degrees, e.extend(true, this, { containerSize: null, contentSize: null, zoomPoint: null, rotationPivot: null, viewer: null, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, maxZoomPixelRatio: e.DEFAULT_SETTINGS.maxZoomPixelRatio, visibilityRatio: e.DEFAULT_SETTINGS.visibilityRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, defaultZoomLevel: e.DEFAULT_SETTINGS.defaultZoomLevel, minZoomLevel: e.DEFAULT_SETTINGS.minZoomLevel, maxZoomLevel: e.DEFAULT_SETTINGS.maxZoomLevel, initialDegrees: e.DEFAULT_SETTINGS.degrees, flipped: e.DEFAULT_SETTINGS.flipped, homeFillsViewer: e.DEFAULT_SETTINGS.homeFillsViewer, silenceMultiImageWarnings: e.DEFAULT_SETTINGS.silenceMultiImageWarnings }, n), this._updateContainerInnerSize(), this.centerSpringX = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.centerSpringY = new e.Spring({ initial: 0, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.zoomSpring = new e.Spring({ exponential: true, initial: 1, springStiffness: this.springStiffness, animationTime: this.animationTime }), this.degreesSpring = new e.Spring({ initial: n.initialDegrees, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value, this._setContentBounds(new e.Rect(0, 0, 1, 1), 1), this.goHome(true), this.update();
        }, e.Viewport.prototype = { get degrees() {
          return e.console.warn("Accessing [Viewport.degrees] is deprecated. Use viewport.getRotation instead."), this.getRotation();
        }, set degrees(n) {
          e.console.warn("Setting [Viewport.degrees] is deprecated. Use viewport.rotateTo, viewport.rotateBy, or viewport.setRotation instead."), this.rotateTo(n);
        }, resetContentSize: function(n) {
          return e.console.assert(n, "[Viewport.resetContentSize] contentSize is required"), e.console.assert(n instanceof e.Point, "[Viewport.resetContentSize] contentSize must be an OpenSeadragon.Point"), e.console.assert(n.x > 0, "[Viewport.resetContentSize] contentSize.x must be greater than 0"), e.console.assert(n.y > 0, "[Viewport.resetContentSize] contentSize.y must be greater than 0"), this._setContentBounds(new e.Rect(0, 0, 1, n.y / n.x), n.x), this;
        }, setHomeBounds: function(n, r) {
          e.console.error("[Viewport.setHomeBounds] this function is deprecated; The content bounds should not be set manually."), this._setContentBounds(n, r);
        }, _setContentBounds: function(n, r) {
          e.console.assert(n, "[Viewport._setContentBounds] bounds is required"), e.console.assert(n instanceof e.Rect, "[Viewport._setContentBounds] bounds must be an OpenSeadragon.Rect"), e.console.assert(n.width > 0, "[Viewport._setContentBounds] bounds.width must be greater than 0"), e.console.assert(n.height > 0, "[Viewport._setContentBounds] bounds.height must be greater than 0"), this._contentBoundsNoRotate = n.clone(), this._contentSizeNoRotate = this._contentBoundsNoRotate.getSize().times(r), this._contentBounds = n.rotate(this.getRotation()).getBoundingBox(), this._contentSize = this._contentBounds.getSize().times(r), this._contentAspectRatio = this._contentSize.x / this._contentSize.y, this.viewer && this.viewer.raiseEvent("reset-size", { contentSize: this._contentSizeNoRotate.clone(), contentFactor: r, homeBounds: this._contentBoundsNoRotate.clone(), contentBounds: this._contentBounds.clone() });
        }, getHomeZoom: function() {
          if (this.defaultZoomLevel) return this.defaultZoomLevel;
          var n = this._contentAspectRatio / this.getAspectRatio(), r;
          return this.homeFillsViewer ? r = n >= 1 ? n : 1 : r = n >= 1 ? 1 : n, r / this._contentBounds.width;
        }, getHomeBounds: function() {
          return this.getHomeBoundsNoRotate().rotate(-this.getRotation());
        }, getHomeBoundsNoRotate: function() {
          var n = this._contentBounds.getCenter(), r = 1 / this.getHomeZoom(), s = r / this.getAspectRatio();
          return new e.Rect(n.x - r / 2, n.y - s / 2, r, s);
        }, goHome: function(n) {
          return this.viewer && this.viewer.raiseEvent("home", { immediately: n }), this.fitBounds(this.getHomeBounds(), n);
        }, getMinZoom: function() {
          var n = this.getHomeZoom(), r = this.minZoomLevel ? this.minZoomLevel : this.minZoomImageRatio * n;
          return r;
        }, getMaxZoom: function() {
          var n = this.maxZoomLevel;
          return n || (n = this._contentSize.x * this.maxZoomPixelRatio / this._containerInnerSize.x, n /= this._contentBounds.width), Math.max(n, this.getHomeZoom());
        }, getAspectRatio: function() {
          return this._containerInnerSize.x / this._containerInnerSize.y;
        }, getContainerSize: function() {
          return new e.Point(this.containerSize.x, this.containerSize.y);
        }, getMargins: function() {
          return e.extend({}, this._margins);
        }, setMargins: function(n) {
          e.console.assert(e.type(n) === "object", "[Viewport.setMargins] margins must be an object"), this._margins = e.extend({ left: 0, top: 0, right: 0, bottom: 0 }, n), this._updateContainerInnerSize(), this.viewer && this.viewer.forceRedraw();
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(-this.getRotation(n));
        }, getBoundsNoRotate: function(n) {
          var r = this.getCenter(n), s = 1 / this.getZoom(n), o = s / this.getAspectRatio();
          return new e.Rect(r.x - s / 2, r.y - o / 2, s, o);
        }, getBoundsWithMargins: function(n) {
          return this.getBoundsNoRotateWithMargins(n).rotate(-this.getRotation(n), this.getCenter(n));
        }, getBoundsNoRotateWithMargins: function(n) {
          var r = this.getBoundsNoRotate(n), s = this._containerInnerSize.x * this.getZoom(n);
          return r.x -= this._margins.left / s, r.y -= this._margins.top / s, r.width += (this._margins.left + this._margins.right) / s, r.height += (this._margins.top + this._margins.bottom) / s, r;
        }, getCenter: function(n) {
          var r = new e.Point(this.centerSpringX.current.value, this.centerSpringY.current.value), s = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value), o, l, a, u, c, h, f, m;
          return n ? r : this.zoomPoint ? (o = this.pixelFromPoint(this.zoomPoint, true), l = this.getZoom(), a = 1 / l, u = a / this.getAspectRatio(), c = new e.Rect(r.x - a / 2, r.y - u / 2, a, u), h = this._pixelFromPoint(this.zoomPoint, c), f = h.minus(o).rotate(-this.getRotation(true)), m = f.divide(this._containerInnerSize.x * l), s.plus(m)) : s;
        }, getZoom: function(n) {
          return n ? this.zoomSpring.current.value : this.zoomSpring.target.value;
        }, _applyZoomConstraints: function(n) {
          return Math.max(Math.min(n, this.getMaxZoom()), this.getMinZoom());
        }, _applyBoundaryConstraints: function(n) {
          var r = this.viewportToViewerElementRectangle(n).getBoundingBox(), s = this.viewportToViewerElementRectangle(this._contentBoundsNoRotate).getBoundingBox(), o = false, l = false;
          if (!this.wrapHorizontal) {
            var a = r.x + r.width, u = s.x + s.width, c, h, f;
            r.width > s.width ? c = this.visibilityRatio * s.width : c = this.visibilityRatio * r.width, h = s.x - a + c, f = u - r.x - c, c > s.width ? (r.x += (h + f) / 2, o = true) : f < 0 ? (r.x += f, o = true) : h > 0 && (r.x += h, o = true);
          }
          if (!this.wrapVertical) {
            var m = r.y + r.height, v = s.y + s.height, y, x, T;
            r.height > s.height ? y = this.visibilityRatio * s.height : y = this.visibilityRatio * r.height, x = s.y - m + y, T = v - r.y - y, y > s.height ? (r.y += (x + T) / 2, l = true) : T < 0 ? (r.y += T, l = true) : x > 0 && (r.y += x, l = true);
          }
          var C = o || l, H = C ? this.viewerElementToViewportRectangle(r) : n.clone();
          return H.xConstrained = o, H.yConstrained = l, H.constraintApplied = C, H;
        }, _raiseConstraintsEvent: function(n) {
          this.viewer && this.viewer.raiseEvent("constrain", { immediately: n });
        }, applyConstraints: function(n) {
          var r = this.getZoom(), s = this._applyZoomConstraints(r);
          r !== s && this.zoomTo(s, this.zoomPoint, n);
          var o = this.getConstrainedBounds(false);
          return o.constraintApplied && (this.fitBounds(o, n), this._raiseConstraintsEvent(n)), this;
        }, ensureVisible: function(n) {
          return this.applyConstraints(n);
        }, _fitBounds: function(n, r) {
          r = r || {};
          var s = r.immediately || false, o = r.constraints || false, l = this.getAspectRatio(), a = n.getCenter(), u = new e.Rect(n.x, n.y, n.width, n.height, n.degrees + this.getRotation()).getBoundingBox();
          u.getAspectRatio() >= l ? u.height = u.width / l : u.width = u.height * l, u.x = a.x - u.width / 2, u.y = a.y - u.height / 2;
          var c = 1 / u.width;
          if (s) return this.panTo(a, true), this.zoomTo(c, null, true), o && this.applyConstraints(true), this;
          var h = this.getCenter(true), f = this.getZoom(true);
          this.panTo(h, true), this.zoomTo(f, null, true);
          var m = this.getBounds(), v = this.getZoom();
          if (v === 0 || Math.abs(c / v - 1) < 1e-8) return this.zoomTo(c, null, true), this.panTo(a, s), o && this.applyConstraints(false), this;
          if (o) {
            this.panTo(a, false), c = this._applyZoomConstraints(c), this.zoomTo(c, null, false);
            var y = this.getConstrainedBounds();
            this.panTo(h, true), this.zoomTo(f, null, true), this.fitBounds(y);
          } else {
            var x = u.rotate(-this.getRotation()), T = x.getTopLeft().times(c).minus(m.getTopLeft().times(v)).divide(c - v);
            this.zoomTo(c, T, s);
          }
          return this;
        }, fitBounds: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: false });
        }, fitBoundsWithConstraints: function(n, r) {
          return this._fitBounds(n, { immediately: r, constraints: true });
        }, fitVertically: function(n) {
          var r = new e.Rect(this._contentBounds.x + this._contentBounds.width / 2, this._contentBounds.y, 0, this._contentBounds.height);
          return this.fitBounds(r, n);
        }, fitHorizontally: function(n) {
          var r = new e.Rect(this._contentBounds.x, this._contentBounds.y + this._contentBounds.height / 2, this._contentBounds.width, 0);
          return this.fitBounds(r, n);
        }, getConstrainedBounds: function(n) {
          var r, s;
          return r = this.getBounds(n), s = this._applyBoundaryConstraints(r), s;
        }, panBy: function(n, r) {
          var s = new e.Point(this.centerSpringX.target.value, this.centerSpringY.target.value);
          return this.panTo(s.plus(n), r);
        }, panTo: function(n, r) {
          return r ? (this.centerSpringX.resetTo(n.x), this.centerSpringY.resetTo(n.y)) : (this.centerSpringX.springTo(n.x), this.centerSpringY.springTo(n.y)), this.viewer && this.viewer.raiseEvent("pan", { center: n, immediately: r }), this;
        }, zoomBy: function(n, r, s) {
          return this.zoomTo(this.zoomSpring.target.value * n, r, s);
        }, zoomTo: function(n, r, s) {
          var o = this;
          return this.zoomPoint = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, s ? this._adjustCenterSpringsForZoomPoint(function() {
            o.zoomSpring.resetTo(n);
          }) : this.zoomSpring.springTo(n), this.viewer && this.viewer.raiseEvent("zoom", { zoom: n, refPoint: r, immediately: s }), this;
        }, setRotation: function(n, r) {
          return this.rotateTo(n, null, r);
        }, getRotation: function(n) {
          return n ? this.degreesSpring.current.value : this.degreesSpring.target.value;
        }, setRotationWithPivot: function(n, r, s) {
          return this.rotateTo(n, r, s);
        }, rotateTo: function(n, r, s) {
          if (!this.viewer || !this.viewer.drawer.canRotate()) return this;
          if (this.degreesSpring.target.value === n && this.degreesSpring.isAtTargetValue()) return this;
          if (this.rotationPivot = r instanceof e.Point && !isNaN(r.x) && !isNaN(r.y) ? r : null, s) if (this.rotationPivot) {
            var o = n - this._oldDegrees;
            if (!o) return this.rotationPivot = null, this;
            this._rotateAboutPivot(n);
          } else this.degreesSpring.resetTo(n);
          else {
            var l = e.positiveModulo(this.degreesSpring.current.value, 360), a = e.positiveModulo(n, 360), u = a - l;
            u > 180 ? a -= 360 : u < -180 && (a += 360);
            var c = l - a;
            this.degreesSpring.resetTo(n + c), this.degreesSpring.springTo(n);
          }
          return this._setContentBounds(this.viewer.world.getHomeBounds(), this.viewer.world.getContentFactor()), this.viewer.forceRedraw(), this.viewer.raiseEvent("rotate", { degrees: n, immediately: !!s, pivot: this.rotationPivot || this.getCenter() }), this;
        }, rotateBy: function(n, r, s) {
          return this.rotateTo(this.degreesSpring.target.value + n, r, s);
        }, resize: function(n, r) {
          var s = this.getBoundsNoRotate(), o = s, l;
          this.containerSize.x = n.x, this.containerSize.y = n.y, this._updateContainerInnerSize(), r && (l = n.x / this.containerSize.x, o.width = s.width * l, o.height = o.width / this.getAspectRatio()), this.viewer && this.viewer.raiseEvent("resize", { newContainerSize: n, maintain: r });
          var a = this.fitBounds(o, true);
          return this.viewer && this.viewer.raiseEvent("after-resize", { newContainerSize: n, maintain: r }), a;
        }, _updateContainerInnerSize: function() {
          this._containerInnerSize = new e.Point(Math.max(1, this.containerSize.x - (this._margins.left + this._margins.right)), Math.max(1, this.containerSize.y - (this._margins.top + this._margins.bottom)));
        }, update: function() {
          var n = this;
          this._adjustCenterSpringsForZoomPoint(function() {
            n.zoomSpring.update();
          }), this.degreesSpring.isAtTargetValue() && (this.rotationPivot = null), this.centerSpringX.update(), this.centerSpringY.update(), this.rotationPivot ? this._rotateAboutPivot(true) : this.degreesSpring.update();
          var r = this.centerSpringX.current.value !== this._oldCenterX || this.centerSpringY.current.value !== this._oldCenterY || this.zoomSpring.current.value !== this._oldZoom || this.degreesSpring.current.value !== this._oldDegrees;
          this._oldCenterX = this.centerSpringX.current.value, this._oldCenterY = this.centerSpringY.current.value, this._oldZoom = this.zoomSpring.current.value, this._oldDegrees = this.degreesSpring.current.value;
          var s = r || !this.zoomSpring.isAtTargetValue() || !this.centerSpringX.isAtTargetValue() || !this.centerSpringY.isAtTargetValue() || !this.degreesSpring.isAtTargetValue();
          return s;
        }, _rotateAboutPivot: function(n) {
          var r = n === true, s = this.rotationPivot.minus(this.getCenter());
          this.centerSpringX.shiftBy(s.x), this.centerSpringY.shiftBy(s.y), r ? this.degreesSpring.update() : this.degreesSpring.resetTo(n);
          var o = this.degreesSpring.current.value - this._oldDegrees, l = s.rotate(o * -1).times(-1);
          this.centerSpringX.shiftBy(l.x), this.centerSpringY.shiftBy(l.y);
        }, _adjustCenterSpringsForZoomPoint: function(n) {
          if (this.zoomPoint) {
            var r = this.pixelFromPoint(this.zoomPoint, true);
            n();
            var s = this.pixelFromPoint(this.zoomPoint, true), o = s.minus(r), l = this.deltaPointsFromPixels(o, true);
            this.centerSpringX.shiftBy(l.x), this.centerSpringY.shiftBy(l.y), this.zoomSpring.isAtTargetValue() && (this.zoomPoint = null);
          } else n();
        }, deltaPixelsFromPointsNoRotate: function(n, r) {
          return n.times(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPixelsFromPoints: function(n, r) {
          return this.deltaPixelsFromPointsNoRotate(n.rotate(this.getRotation(r)), r);
        }, deltaPointsFromPixelsNoRotate: function(n, r) {
          return n.divide(this._containerInnerSize.x * this.getZoom(r));
        }, deltaPointsFromPixels: function(n, r) {
          return this.deltaPointsFromPixelsNoRotate(n, r).rotate(-this.getRotation(r));
        }, pixelFromPointNoRotate: function(n, r) {
          return this._pixelFromPointNoRotate(n, this.getBoundsNoRotate(r));
        }, pixelFromPoint: function(n, r) {
          return this._pixelFromPoint(n, this.getBoundsNoRotate(r));
        }, _pixelFromPointNoRotate: function(n, r) {
          return n.minus(r.getTopLeft()).times(this._containerInnerSize.x / r.width).plus(new e.Point(this._margins.left, this._margins.top));
        }, _pixelFromPoint: function(n, r) {
          return this._pixelFromPointNoRotate(n.rotate(this.getRotation(true), this.getCenter(true)), r);
        }, pointFromPixelNoRotate: function(n, r) {
          var s = this.getBoundsNoRotate(r);
          return n.minus(new e.Point(this._margins.left, this._margins.top)).divide(this._containerInnerSize.x / s.width).plus(s.getTopLeft());
        }, pointFromPixel: function(n, r) {
          return this.pointFromPixelNoRotate(n, r).rotate(-this.getRotation(r), this.getCenter(r));
        }, _viewportToImageDelta: function(n, r) {
          var s = this._contentBoundsNoRotate.width;
          return new e.Point(n * this._contentSizeNoRotate.x / s, r * this._contentSizeNoRotate.x / s);
        }, viewportToImageCoordinates: function(n, r) {
          if (n instanceof e.Point) return this.viewportToImageCoordinates(n.x, n.y);
          if (this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageCoordinates] is not accurate with multi-image; use TiledImage.viewportToImageCoordinates instead.");
            else if (s === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.viewportToImageCoordinates(n, r, true);
            }
          }
          return this._viewportToImageDelta(n - this._contentBoundsNoRotate.x, r - this._contentBoundsNoRotate.y);
        }, _imageToViewportDelta: function(n, r) {
          var s = this._contentBoundsNoRotate.width;
          return new e.Point(n / this._contentSizeNoRotate.x * s, r / this._contentSizeNoRotate.x * s);
        }, imageToViewportCoordinates: function(n, r) {
          if (n instanceof e.Point) return this.imageToViewportCoordinates(n.x, n.y);
          if (this.viewer) {
            var s = this.viewer.world.getItemCount();
            if (s > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportCoordinates] is not accurate with multi-image; use TiledImage.imageToViewportCoordinates instead.");
            else if (s === 1) {
              var o = this.viewer.world.getItemAt(0);
              return o.imageToViewportCoordinates(n, r, true);
            }
          }
          var l = this._imageToViewportDelta(n, r);
          return l.x += this._contentBoundsNoRotate.x, l.y += this._contentBoundsNoRotate.y, l;
        }, imageToViewportRectangle: function(n, r, s, o) {
          var l = n;
          if (l instanceof e.Rect || (l = new e.Rect(n, r, s, o)), this.viewer) {
            var a = this.viewer.world.getItemCount();
            if (a > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportRectangle] is not accurate with multi-image; use TiledImage.imageToViewportRectangle instead.");
            else if (a === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.imageToViewportRectangle(n, r, s, o, true);
            }
          }
          var c = this.imageToViewportCoordinates(l.x, l.y), h = this._imageToViewportDelta(l.width, l.height);
          return new e.Rect(c.x, c.y, h.x, h.y, l.degrees);
        }, viewportToImageRectangle: function(n, r, s, o) {
          var l = n;
          if (l instanceof e.Rect || (l = new e.Rect(n, r, s, o)), this.viewer) {
            var a = this.viewer.world.getItemCount();
            if (a > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageRectangle] is not accurate with multi-image; use TiledImage.viewportToImageRectangle instead.");
            else if (a === 1) {
              var u = this.viewer.world.getItemAt(0);
              return u.viewportToImageRectangle(n, r, s, o, true);
            }
          }
          var c = this.viewportToImageCoordinates(l.x, l.y), h = this._viewportToImageDelta(l.width, l.height);
          return new e.Rect(c.x, c.y, h.x, h.y, l.degrees);
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.pointFromPixel(n, true);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.pixelFromPoint(r, true);
        }, windowToImageCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToImageCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.imageToWindowCoordinates] the viewport must have a viewer.");
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewerElementToViewportCoordinates: function(n) {
          return this.pointFromPixel(n, true);
        }, viewportToViewerElementCoordinates: function(n) {
          return this.pixelFromPoint(n, true);
        }, viewerElementToViewportRectangle: function(n) {
          return e.Rect.fromSummits(this.pointFromPixel(n.getTopLeft(), true), this.pointFromPixel(n.getTopRight(), true), this.pointFromPixel(n.getBottomLeft(), true));
        }, viewportToViewerElementRectangle: function(n) {
          return e.Rect.fromSummits(this.pixelFromPoint(n.getTopLeft(), true), this.pixelFromPoint(n.getTopRight(), true), this.pixelFromPoint(n.getBottomLeft(), true));
        }, windowToViewportCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.windowToViewportCoordinates] the viewport must have a viewer.");
          var r = n.minus(e.getElementPosition(this.viewer.element));
          return this.viewerElementToViewportCoordinates(r);
        }, viewportToWindowCoordinates: function(n) {
          e.console.assert(this.viewer, "[Viewport.viewportToWindowCoordinates] the viewport must have a viewer.");
          var r = this.viewportToViewerElementCoordinates(n);
          return r.plus(e.getElementPosition(this.viewer.element));
        }, viewportToImageZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.viewportToImageZoom] is not accurate with multi-image.");
            else if (r === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.viewportToImageZoom(n);
            }
          }
          var o = this._contentSizeNoRotate.x, l = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width, u = l / o * a;
          return n * u;
        }, imageToViewportZoom: function(n) {
          if (this.viewer) {
            var r = this.viewer.world.getItemCount();
            if (r > 1) this.silenceMultiImageWarnings || e.console.error("[Viewport.imageToViewportZoom] is not accurate with multi-image. Instead, use [TiledImage.imageToViewportZoom] for the specific image of interest");
            else if (r === 1) {
              var s = this.viewer.world.getItemAt(0);
              return s.imageToViewportZoom(n);
            }
          }
          var o = this._contentSizeNoRotate.x, l = this._containerInnerSize.x, a = this._contentBoundsNoRotate.width, u = o / l / a;
          return n * u;
        }, toggleFlip: function() {
          return this.setFlip(!this.getFlip()), this;
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          return this.flipped === n ? this : (this.flipped = n, this.viewer.navigator && this.viewer.navigator.setFlip(this.getFlip()), this.viewer.forceRedraw(), this.viewer.raiseEvent("flip", { flipped: n }), this);
        }, getMaxZoomPixelRatio: function() {
          return this.maxZoomPixelRatio;
        }, setMaxZoomPixelRatio: function(n, r = true, s = false) {
          e.console.assert(!isNaN(n), "[Viewport.setMaxZoomPixelRatio] ratio must be a number"), !isNaN(n) && (this.maxZoomPixelRatio = n, r && this.getZoom() > this.getMaxZoom() && this.applyConstraints(s));
        } };
      })(i), (function(e) {
        e.TiledImage = function(n) {
          this._initialized = false, e.console.assert(n.tileCache, "[TiledImage] options.tileCache is required"), e.console.assert(n.drawer, "[TiledImage] options.drawer is required"), e.console.assert(n.viewer, "[TiledImage] options.viewer is required"), e.console.assert(n.imageLoader, "[TiledImage] options.imageLoader is required"), e.console.assert(n.source, "[TiledImage] options.source is required"), e.console.assert(!n.clip || n.clip instanceof e.Rect, "[TiledImage] options.clip must be an OpenSeadragon.Rect if present"), e.EventSource.call(this), this._tileCache = n.tileCache, delete n.tileCache, this._drawer = n.drawer, delete n.drawer, this._imageLoader = n.imageLoader, delete n.imageLoader, n.clip instanceof e.Rect && (this._clip = n.clip.clone()), delete n.clip;
          var r = n.x || 0;
          delete n.x;
          var s = n.y || 0;
          delete n.y, this.normHeight = n.source.dimensions.y / n.source.dimensions.x, this.contentAspectX = n.source.dimensions.x / n.source.dimensions.y;
          var o = 1;
          n.width ? (o = n.width, delete n.width, n.height && (e.console.error("specifying both width and height to a tiledImage is not supported"), delete n.height)) : n.height && (o = n.height / this.normHeight, delete n.height);
          var l = n.fitBounds;
          delete n.fitBounds;
          var a = n.fitBoundsPlacement || i.Placement.CENTER;
          delete n.fitBoundsPlacement;
          var u = n.degrees || 0;
          delete n.degrees;
          var c = n.ajaxHeaders;
          delete n.ajaxHeaders, e.extend(true, this, { viewer: null, tilesMatrix: {}, coverage: {}, loadingCoverage: {}, lastDrawn: [], lastResetTime: 0, _needsDraw: true, _needsUpdate: true, _hasOpaqueTile: false, _tilesLoading: 0, _tilesToDraw: [], _lastDrawn: [], _isBlending: false, _wasBlending: false, _isTainted: false, springStiffness: e.DEFAULT_SETTINGS.springStiffness, animationTime: e.DEFAULT_SETTINGS.animationTime, minZoomImageRatio: e.DEFAULT_SETTINGS.minZoomImageRatio, wrapHorizontal: e.DEFAULT_SETTINGS.wrapHorizontal, wrapVertical: e.DEFAULT_SETTINGS.wrapVertical, immediateRender: e.DEFAULT_SETTINGS.immediateRender, blendTime: e.DEFAULT_SETTINGS.blendTime, alwaysBlend: e.DEFAULT_SETTINGS.alwaysBlend, minPixelRatio: e.DEFAULT_SETTINGS.minPixelRatio, smoothTileEdgesMinZoom: e.DEFAULT_SETTINGS.smoothTileEdgesMinZoom, iOSDevice: e.DEFAULT_SETTINGS.iOSDevice, debugMode: e.DEFAULT_SETTINGS.debugMode, crossOriginPolicy: e.DEFAULT_SETTINGS.crossOriginPolicy, ajaxWithCredentials: e.DEFAULT_SETTINGS.ajaxWithCredentials, placeholderFillStyle: e.DEFAULT_SETTINGS.placeholderFillStyle, opacity: e.DEFAULT_SETTINGS.opacity, preload: e.DEFAULT_SETTINGS.preload, compositeOperation: e.DEFAULT_SETTINGS.compositeOperation, subPixelRoundingForTransparency: e.DEFAULT_SETTINGS.subPixelRoundingForTransparency, maxTilesPerFrame: e.DEFAULT_SETTINGS.maxTilesPerFrame }, n), this._preload = this.preload, delete this.preload, this._fullyLoaded = false, this._xSpring = new e.Spring({ initial: r, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._ySpring = new e.Spring({ initial: s, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._scaleSpring = new e.Spring({ initial: o, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._degreesSpring = new e.Spring({ initial: u, springStiffness: this.springStiffness, animationTime: this.animationTime }), this._updateForScale(), l && this.fitBounds(l, a, true), this._ownAjaxHeaders = {}, this.setAjaxHeaders(c, false), this._initialized = true;
        }, e.extend(e.TiledImage.prototype, e.EventSource.prototype, { needsDraw: function() {
          return this._needsDraw;
        }, redraw: function() {
          this._needsDraw = true;
        }, getFullyLoaded: function() {
          return this._fullyLoaded;
        }, _setFullyLoaded: function(n) {
          n !== this._fullyLoaded && (this._fullyLoaded = n, this.raiseEvent("fully-loaded-change", { fullyLoaded: this._fullyLoaded }));
        }, reset: function() {
          this._tileCache.clearTilesFor(this), this.lastResetTime = e.now(), this._needsDraw = true;
        }, update: function(n) {
          let r = this._xSpring.update(), s = this._ySpring.update(), o = this._scaleSpring.update(), l = this._degreesSpring.update(), a = r || s || o || l || this._needsUpdate;
          if (a || n || !this._fullyLoaded) {
            let u = this._updateLevelsForViewport();
            this._setFullyLoaded(u);
          }
          return this._needsUpdate = false, a ? (this._updateForScale(), this._raiseBoundsChange(), this._needsDraw = true, true) : false;
        }, setDrawn: function() {
          return this._needsDraw = this._isBlending || this._wasBlending, this._needsDraw;
        }, setTainted(n) {
          this._isTainted = n;
        }, isTainted() {
          return this._isTainted;
        }, destroy: function() {
          this.reset(), this.source.destroy && this.source.destroy(this.viewer);
        }, getBounds: function(n) {
          return this.getBoundsNoRotate(n).rotate(this.getRotation(n), this._getRotationPoint(n));
        }, getBoundsNoRotate: function(n) {
          return n ? new e.Rect(this._xSpring.current.value, this._ySpring.current.value, this._worldWidthCurrent, this._worldHeightCurrent) : new e.Rect(this._xSpring.target.value, this._ySpring.target.value, this._worldWidthTarget, this._worldHeightTarget);
        }, getWorldBounds: function() {
          return e.console.error("[TiledImage.getWorldBounds] is deprecated; use TiledImage.getBounds instead"), this.getBounds();
        }, getClippedBounds: function(n) {
          var r = this.getBoundsNoRotate(n);
          if (this._clip) {
            var s = n ? this._worldWidthCurrent : this._worldWidthTarget, o = s / this.source.dimensions.x, l = this._clip.times(o);
            r = new e.Rect(r.x + l.x, r.y + l.y, l.width, l.height);
          }
          return r.rotate(this.getRotation(n), this._getRotationPoint(n));
        }, getTileBounds: function(n, r, s) {
          var o = this.source.getNumTiles(n), l = (o.x + r % o.x) % o.x, a = (o.y + s % o.y) % o.y, u = this.source.getTileBounds(n, l, a);
          return this.getFlip() && (u.x = Math.max(0, 1 - u.x - u.width)), u.x += (r - l) / o.x, u.y += this._worldHeightCurrent / this._worldWidthCurrent * ((s - a) / o.y), u;
        }, getContentSize: function() {
          return new e.Point(this.source.dimensions.x, this.source.dimensions.y);
        }, getSizeInWindowCoordinates: function() {
          var n = this.imageToWindowCoordinates(new e.Point(0, 0)), r = this.imageToWindowCoordinates(this.getContentSize());
          return new e.Point(r.x - n.x, r.y - n.y);
        }, _viewportToImageDelta: function(n, r, s) {
          var o = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(n * (this.source.dimensions.x / o), r * (this.source.dimensions.y * this.contentAspectX / o));
        }, viewportToImageCoordinates: function(n, r, s) {
          var o;
          return n instanceof e.Point ? (s = r, o = n) : o = new e.Point(n, r), o = o.rotate(-this.getRotation(s), this._getRotationPoint(s)), s ? this._viewportToImageDelta(o.x - this._xSpring.current.value, o.y - this._ySpring.current.value) : this._viewportToImageDelta(o.x - this._xSpring.target.value, o.y - this._ySpring.target.value);
        }, _imageToViewportDelta: function(n, r, s) {
          var o = s ? this._scaleSpring.current.value : this._scaleSpring.target.value;
          return new e.Point(n / this.source.dimensions.x * o, r / this.source.dimensions.y / this.contentAspectX * o);
        }, imageToViewportCoordinates: function(n, r, s) {
          n instanceof e.Point && (s = r, r = n.y, n = n.x);
          var o = this._imageToViewportDelta(n, r, s);
          return s ? (o.x += this._xSpring.current.value, o.y += this._ySpring.current.value) : (o.x += this._xSpring.target.value, o.y += this._ySpring.target.value), o.rotate(this.getRotation(s), this._getRotationPoint(s));
        }, imageToViewportRectangle: function(n, r, s, o, l) {
          var a = n;
          a instanceof e.Rect ? l = r : a = new e.Rect(n, r, s, o);
          var u = this.imageToViewportCoordinates(a.getTopLeft(), l), c = this._imageToViewportDelta(a.width, a.height, l);
          return new e.Rect(u.x, u.y, c.x, c.y, a.degrees + this.getRotation(l));
        }, viewportToImageRectangle: function(n, r, s, o, l) {
          var a = n;
          n instanceof e.Rect ? l = r : a = new e.Rect(n, r, s, o);
          var u = this.viewportToImageCoordinates(a.getTopLeft(), l), c = this._viewportToImageDelta(a.width, a.height, l);
          return new e.Rect(u.x, u.y, c.x, c.y, a.degrees - this.getRotation(l));
        }, viewerElementToImageCoordinates: function(n) {
          var r = this.viewport.pointFromPixel(n, true);
          return this.viewportToImageCoordinates(r);
        }, imageToViewerElementCoordinates: function(n) {
          var r = this.imageToViewportCoordinates(n);
          return this.viewport.pixelFromPoint(r, true);
        }, windowToImageCoordinates: function(n) {
          var r = n.minus(i.getElementPosition(this.viewer.element));
          return this.viewerElementToImageCoordinates(r);
        }, imageToWindowCoordinates: function(n) {
          var r = this.imageToViewerElementCoordinates(n);
          return r.plus(i.getElementPosition(this.viewer.element));
        }, _viewportToTiledImageRectangle: function(n) {
          var r = this._scaleSpring.current.value;
          return n = n.rotate(-this.getRotation(true), this._getRotationPoint(true)), new e.Rect((n.x - this._xSpring.current.value) / r, (n.y - this._ySpring.current.value) / r, n.width / r, n.height / r, n.degrees);
        }, viewportToImageZoom: function(n) {
          var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return r * n;
        }, imageToViewportZoom: function(n) {
          var r = this._scaleSpring.current.value * this.viewport._containerInnerSize.x / this.source.dimensions.x;
          return n / r;
        }, setPosition: function(n, r) {
          var s = this._xSpring.target.value === n.x && this._ySpring.target.value === n.y;
          if (r) {
            if (s && this._xSpring.current.value === n.x && this._ySpring.current.value === n.y) return;
            this._xSpring.resetTo(n.x), this._ySpring.resetTo(n.y), this._needsDraw = true, this._needsUpdate = true;
          } else {
            if (s) return;
            this._xSpring.springTo(n.x), this._ySpring.springTo(n.y), this._needsDraw = true, this._needsUpdate = true;
          }
          s || this._raiseBoundsChange();
        }, setWidth: function(n, r) {
          this._setScale(n, r);
        }, setHeight: function(n, r) {
          this._setScale(n / this.normHeight, r);
        }, setCroppingPolygons: function(n) {
          var r = function(o) {
            return o instanceof e.Point || typeof o.x == "number" && typeof o.y == "number";
          }, s = function(o) {
            return o.map(function(l) {
              try {
                if (r(l)) return { x: l.x, y: l.y };
                throw new Error();
              } catch {
                throw new Error("A Provided cropping polygon point is not supported");
              }
            });
          };
          try {
            if (!e.isArray(n)) throw new Error("Provided cropping polygon is not an array");
            this._croppingPolygons = n.map(function(o) {
              return s(o);
            }), this._needsDraw = true;
          } catch (o) {
            e.console.error("[TiledImage.setCroppingPolygons] Cropping polygon format not supported"), e.console.error(o), this.resetCroppingPolygons();
          }
        }, resetCroppingPolygons: function() {
          this._croppingPolygons = null, this._needsDraw = true;
        }, fitBounds: function(n, r, s) {
          r = r || e.Placement.CENTER;
          var o = e.Placement.properties[r], l = this.contentAspectX, a = 0, u = 0, c = 1, h = 1;
          if (this._clip && (l = this._clip.getAspectRatio(), c = this._clip.width / this.source.dimensions.x, h = this._clip.height / this.source.dimensions.y, n.getAspectRatio() > l ? (a = this._clip.x / this._clip.height * n.height, u = this._clip.y / this._clip.height * n.height) : (a = this._clip.x / this._clip.width * n.width, u = this._clip.y / this._clip.width * n.width)), n.getAspectRatio() > l) {
            var f = n.height / h, m = 0;
            o.isHorizontallyCentered ? m = (n.width - n.height * l) / 2 : o.isRight && (m = n.width - n.height * l), this.setPosition(new e.Point(n.x - a + m, n.y - u), s), this.setHeight(f, s);
          } else {
            var v = n.width / c, y = 0;
            o.isVerticallyCentered ? y = (n.height - n.width / l) / 2 : o.isBottom && (y = n.height - n.width / l), this.setPosition(new e.Point(n.x - a, n.y - u + y), s), this.setWidth(v, s);
          }
        }, getClip: function() {
          return this._clip ? this._clip.clone() : null;
        }, setClip: function(n) {
          e.console.assert(!n || n instanceof e.Rect, "[TiledImage.setClip] newClip must be an OpenSeadragon.Rect or null"), n instanceof e.Rect ? this._clip = n.clone() : this._clip = null, this._needsUpdate = true, this._needsDraw = true, this.raiseEvent("clip-change");
        }, getFlip: function() {
          return this.flipped;
        }, setFlip: function(n) {
          this.flipped = n;
        }, get flipped() {
          return this._flipped;
        }, set flipped(n) {
          let r = this._flipped !== !!n;
          this._flipped = !!n, r && (this.update(true), this._needsDraw = true, this._raiseBoundsChange());
        }, get wrapHorizontal() {
          return this._wrapHorizontal;
        }, set wrapHorizontal(n) {
          let r = this._wrapHorizontal !== !!n;
          this._wrapHorizontal = !!n, this._initialized && r && (this.update(true), this._needsDraw = true);
        }, get wrapVertical() {
          return this._wrapVertical;
        }, set wrapVertical(n) {
          let r = this._wrapVertical !== !!n;
          this._wrapVertical = !!n, this._initialized && r && (this.update(true), this._needsDraw = true);
        }, get debugMode() {
          return this._debugMode;
        }, set debugMode(n) {
          this._debugMode = !!n, this._needsDraw = true;
        }, getOpacity: function() {
          return this.opacity;
        }, setOpacity: function(n) {
          this.opacity = n;
        }, get opacity() {
          return this._opacity;
        }, set opacity(n) {
          n !== this.opacity && (this._opacity = n, this._needsDraw = true, this.raiseEvent("opacity-change", { opacity: this.opacity }));
        }, getPreload: function() {
          return this._preload;
        }, setPreload: function(n) {
          this._preload = !!n, this._needsDraw = true;
        }, getRotation: function(n) {
          return n ? this._degreesSpring.current.value : this._degreesSpring.target.value;
        }, setRotation: function(n, r) {
          this._degreesSpring.target.value === n && this._degreesSpring.isAtTargetValue() || (r ? this._degreesSpring.resetTo(n) : this._degreesSpring.springTo(n), this._needsDraw = true, this._needsUpdate = true, this._raiseBoundsChange());
        }, getDrawArea: function() {
          if (this._opacity === 0 && !this._preload) return false;
          var n = this._viewportToTiledImageRectangle(this.viewport.getBoundsWithMargins(true));
          if (!this.wrapHorizontal && !this.wrapVertical) {
            var r = this._viewportToTiledImageRectangle(this.getClippedBounds(true));
            n = n.intersection(r);
          }
          return n;
        }, getTilesToDraw: function() {
          let n = this._tilesToDraw.flat();
          return this._updateTilesInViewport(n), n = this._tilesToDraw.flat(), n.forEach((r) => {
            r.tile.beingDrawn = true;
          }), this._lastDrawn = n, n;
        }, _getRotationPoint: function(n) {
          return this.getBoundsNoRotate(n).getCenter();
        }, get compositeOperation() {
          return this._compositeOperation;
        }, set compositeOperation(n) {
          n !== this._compositeOperation && (this._compositeOperation = n, this._needsDraw = true, this.raiseEvent("composite-operation-change", { compositeOperation: this._compositeOperation }));
        }, getCompositeOperation: function() {
          return this._compositeOperation;
        }, setCompositeOperation: function(n) {
          this.compositeOperation = n;
        }, setAjaxHeaders: function(n, r) {
          if (n === null && (n = {}), !e.isPlainObject(n)) {
            console.error("[TiledImage.setAjaxHeaders] Ignoring invalid headers, must be a plain object");
            return;
          }
          this._ownAjaxHeaders = n, this._updateAjaxHeaders(r);
        }, _updateAjaxHeaders: function(n) {
          if (n === void 0 && (n = true), e.isPlainObject(this.viewer.ajaxHeaders) ? this.ajaxHeaders = e.extend({}, this.viewer.ajaxHeaders, this._ownAjaxHeaders) : this.ajaxHeaders = this._ownAjaxHeaders, n) {
            var r, s, o, l;
            for (var a in this.tilesMatrix) {
              r = this.source.getNumTiles(a);
              for (var u in this.tilesMatrix[a]) {
                s = (r.x + u % r.x) % r.x;
                for (var c in this.tilesMatrix[a][u]) if (o = (r.y + c % r.y) % r.y, l = this.tilesMatrix[a][u][c], l.loadWithAjax = this.loadTilesWithAjax, l.loadWithAjax) {
                  var h = this.source.getTileAjaxHeaders(a, s, o);
                  l.ajaxHeaders = e.extend({}, this.ajaxHeaders, h);
                } else l.ajaxHeaders = null;
              }
            }
            for (var f = 0; f < this._imageLoader.jobQueue.length; f++) {
              var m = this._imageLoader.jobQueue[f];
              m.loadWithAjax = m.tile.loadWithAjax, m.ajaxHeaders = m.tile.loadWithAjax ? m.tile.ajaxHeaders : null;
            }
          }
        }, _setScale: function(n, r) {
          var s = this._scaleSpring.target.value === n;
          if (r) {
            if (s && this._scaleSpring.current.value === n) return;
            this._scaleSpring.resetTo(n), this._updateForScale(), this._needsDraw = true, this._needsUpdate = true;
          } else {
            if (s) return;
            this._scaleSpring.springTo(n), this._updateForScale(), this._needsDraw = true, this._needsUpdate = true;
          }
          s || this._raiseBoundsChange();
        }, _updateForScale: function() {
          this._worldWidthTarget = this._scaleSpring.target.value, this._worldHeightTarget = this.normHeight * this._scaleSpring.target.value, this._worldWidthCurrent = this._scaleSpring.current.value, this._worldHeightCurrent = this.normHeight * this._scaleSpring.current.value;
        }, _raiseBoundsChange: function() {
          this.raiseEvent("bounds-change");
        }, _isBottomItem: function() {
          return this.viewer.world.getItemAt(0) === this;
        }, _getLevelsInterval: function() {
          var n = Math.max(this.source.minLevel, Math.floor(Math.log(this.minZoomImageRatio) / Math.log(2))), r = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(0), true).x * this._scaleSpring.current.value, s = Math.min(Math.abs(this.source.maxLevel), Math.abs(Math.floor(Math.log(r / this.minPixelRatio) / Math.log(2))));
          return s = Math.max(s, this.source.minLevel || 0), n = Math.min(n, s), { lowestLevel: n, highestLevel: s };
        }, _updateLevelsForViewport: function() {
          var n = this._getLevelsInterval(), r = n.lowestLevel, s = n.highestLevel, o = [], l = this.getDrawArea(), a = e.now();
          if (this._lastDrawn.forEach((N) => {
            N.tile.beingDrawn = false;
          }), this._tilesToDraw = [], this._tilesLoading = 0, this.loadingCoverage = {}, !l) return this._needsDraw = false, this._fullyLoaded;
          var u = new Array(s - r + 1);
          for (let N = 0, Y = s; Y >= r; Y--, N++) u[N] = Y;
          for (let N = s + 1; N <= this.source.maxLevel; N++) {
            var c = this.tilesMatrix[N] && this.tilesMatrix[N][0] && this.tilesMatrix[N][0][0];
            if (c && c.isBottomMost && c.isRightMost && c.loaded) {
              u.push(N);
              break;
            }
          }
          let h = false;
          for (let N = 0; N < u.length; N++) {
            let Y = u[N];
            var f = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Y), true).x * this._scaleSpring.current.value;
            if (N === u.length - 1 || f >= this.minPixelRatio) h = true;
            else if (!h) continue;
            var m = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Y), false).x * this._scaleSpring.current.value, v = this.viewport.deltaPixelsFromPointsNoRotate(this.source.getPixelRatio(Math.max(this.source.getClosestLevel(), 0)), false).x * this._scaleSpring.current.value, y = this.immediateRender ? 1 : v, x = Math.min(1, (f - 0.5) / 0.5), T = y / Math.abs(y - m), C = this._updateLevel(Y, x, T, l, a, o);
            o = C.bestTiles;
            var H = C.updatedTiles.filter((K) => K.loaded), k = /* @__PURE__ */ (function(K, q, ee) {
              return function(ce) {
                return { tile: ce, level: K, levelOpacity: q, currentTime: ee };
              };
            })(Y, x, a);
            if (this._tilesToDraw[Y] = H.map(k), this._providesCoverage(this.coverage, Y)) break;
          }
          return o && o.length > 0 ? (o.forEach(function(N) {
            N && !N.context2D && this._loadTile(N, a);
          }, this), this._needsDraw = true, false) : this._tilesLoading === 0;
        }, _updateTilesInViewport: function(n) {
          let r = e.now(), s = this;
          this._tilesLoading = 0, this._wasBlending = this._isBlending, this._isBlending = false, this.loadingCoverage = {};
          let o = n.length ? n[0].level : 0;
          if (!this.getDrawArea()) return;
          function a(c) {
            let h = c.tile;
            if (h && h.loaded) {
              let f = s._blendTile(h, h.x, h.y, c.level, c.levelOpacity, r, o);
              s._isBlending = s._isBlending || f, s._needsDraw = s._needsDraw || f || s._wasBlending;
            }
          }
          let u = 0;
          for (let c = 0; c < n.length; c++) {
            let h = n[c];
            a(h), this._providesCoverage(this.coverage, h.level) && (u = Math.max(u, h.level));
          }
          if (u > 0) for (let c in this._tilesToDraw) c < u && delete this._tilesToDraw[c];
        }, _blendTile: function(n, r, s, o, l, a, u) {
          let c = 1e3 * this.blendTime, h, f;
          return n.blendStart || (n.blendStart = a), h = a - n.blendStart, f = c ? Math.min(1, h / c) : 1, o === u && (f = 1, h = c), this.alwaysBlend && (f *= l), n.opacity = f, f === 1 && (this._setCoverage(this.coverage, o, r, s, true), this._hasOpaqueTile = true), h < c;
        }, _updateLevel: function(n, r, s, o, l, a) {
          var u = o.getBoundingBox().getTopLeft(), c = o.getBoundingBox().getBottomRight();
          this.viewer && this.viewer.raiseEvent("update-level", { tiledImage: this, havedrawn: true, level: n, opacity: r, visibility: s, drawArea: o, topleft: u, bottomright: c, currenttime: l, best: a }), this._resetCoverage(this.coverage, n), this._resetCoverage(this.loadingCoverage, n);
          var h = this._getCornerTiles(n, u, c), f = h.topLeft, m = h.bottomRight, v = this.source.getNumTiles(n), y = this.viewport.pixelFromPoint(this.viewport.getCenter());
          this.getFlip() && (m.x += 1, this.wrapHorizontal || (m.x = Math.min(m.x, v.x - 1)));
          for (var x = Math.max(0, (m.x - f.x) * (m.y - f.y)), T = new Array(x), C = 0, H = f.x; H <= m.x; H++) for (var k = f.y; k <= m.y; k++) {
            var N;
            if (this.getFlip()) {
              var Y = (v.x + H % v.x) % v.x;
              N = H + v.x - Y - Y - 1;
            } else N = H;
            if (o.intersection(this.getTileBounds(n, N, k)) !== null) {
              var K = this._updateTile(N, k, n, s, y, v, l, a);
              a = K.bestTiles, T[C] = K.tile, C += 1;
            }
          }
          return { bestTiles: a, updatedTiles: T };
        }, _positionTile: function(n, r, s, o, l) {
          var a = n.bounds.getTopLeft();
          a.x *= this._scaleSpring.current.value, a.y *= this._scaleSpring.current.value, a.x += this._xSpring.current.value, a.y += this._ySpring.current.value;
          var u = n.bounds.getSize();
          u.x *= this._scaleSpring.current.value, u.y *= this._scaleSpring.current.value, n.positionedBounds.x = a.x, n.positionedBounds.y = a.y, n.positionedBounds.width = u.x, n.positionedBounds.height = u.y;
          var c = s.pixelFromPointNoRotate(a, true), h = s.pixelFromPointNoRotate(a, false), f = s.deltaPixelsFromPointsNoRotate(u, true), m = s.deltaPixelsFromPointsNoRotate(u, false), v = h.plus(m.divide(2)), y = o.squaredDistanceTo(v);
          this.viewer.drawer.minimumOverlapRequired(this) && (r || (f = f.plus(new e.Point(1, 1))), n.isRightMost && this.wrapHorizontal && (f.x += 0.75), n.isBottomMost && this.wrapVertical && (f.y += 0.75)), n.position = c, n.size = f, n.squaredDistance = y, n.visibility = l;
        }, _updateTile: function(n, r, s, o, l, a, u, c) {
          var h = this._getTile(n, r, s, u, a);
          this.viewer && this.viewer.raiseEvent("update-tile", { tiledImage: this, tile: h }), this._setCoverage(this.coverage, s, n, r, false);
          var f = h.loaded || h.loading || this._isCovered(this.loadingCoverage, s, n, r);
          if (this._setCoverage(this.loadingCoverage, s, n, r, f), !h.exists) return { bestTiles: c, tile: h };
          if (h.loaded && h.opacity === 1 && this._setCoverage(this.coverage, s, n, r, true), this._positionTile(h, this.source.tileOverlap, this.viewport, l, o), !h.loaded) if (h.context2D) this._setTileLoaded(h);
          else {
            var m = this._tileCache.getImageRecord(h.cacheKey);
            m && this._setTileLoaded(h, m.getData());
          }
          return h.loading ? this._tilesLoading++ : f || (c = this._compareTiles(c, h, this.maxTilesPerFrame)), { bestTiles: c, tile: h };
        }, _getCornerTiles: function(n, r, s) {
          var o, l;
          this.wrapHorizontal ? (o = e.positiveModulo(r.x, 1), l = e.positiveModulo(s.x, 1)) : (o = Math.max(0, r.x), l = Math.min(1, s.x));
          var a, u, c = 1 / this.source.aspectRatio;
          this.wrapVertical ? (a = e.positiveModulo(r.y, c), u = e.positiveModulo(s.y, c)) : (a = Math.max(0, r.y), u = Math.min(c, s.y));
          var h = this.source.getTileAtPoint(n, new e.Point(o, a)), f = this.source.getTileAtPoint(n, new e.Point(l, u)), m = this.source.getNumTiles(n);
          return this.wrapHorizontal && (h.x += m.x * Math.floor(r.x), f.x += m.x * Math.floor(s.x)), this.wrapVertical && (h.y += m.y * Math.floor(r.y / c), f.y += m.y * Math.floor(s.y / c)), { topLeft: h, bottomRight: f };
        }, _getTile: function(n, r, s, o, l) {
          var a, u, c, h, f, m, v, y, x, T, C = this.tilesMatrix, H = this.source;
          return C[s] || (C[s] = {}), C[s][n] || (C[s][n] = {}), (!C[s][n][r] || !C[s][n][r].flipped != !this.flipped) && (a = (l.x + n % l.x) % l.x, u = (l.y + r % l.y) % l.y, c = this.getTileBounds(s, n, r), h = H.getTileBounds(s, a, u, true), f = H.tileExists(s, a, u), m = H.getTileUrl(s, a, u), v = H.getTilePostData(s, a, u), this.loadTilesWithAjax ? (y = H.getTileAjaxHeaders(s, a, u), e.isPlainObject(this.ajaxHeaders) && (y = e.extend({}, this.ajaxHeaders, y))) : y = null, x = H.getContext2D ? H.getContext2D(s, a, u) : void 0, T = new e.Tile(s, n, r, c, f, m, x, this.loadTilesWithAjax, y, h, v, H.getTileHashKey(s, a, u, m, y, v)), this.getFlip() ? a === 0 && (T.isRightMost = true) : a === l.x - 1 && (T.isRightMost = true), u === l.y - 1 && (T.isBottomMost = true), T.flipped = this.flipped, C[s][n][r] = T), T = C[s][n][r], T.lastTouchTime = o, T;
        }, _loadTile: function(n, r) {
          var s = this;
          n.loading = true, this._imageLoader.addJob({ src: n.getUrl(), tile: n, source: this.source, postData: n.postData, loadWithAjax: n.loadWithAjax, ajaxHeaders: n.ajaxHeaders, crossOriginPolicy: this.crossOriginPolicy, ajaxWithCredentials: this.ajaxWithCredentials, callback: function(o, l, a) {
            s._onTileLoad(n, r, o, l, a);
          }, abort: function() {
            n.loading = false;
          } });
        }, _onTileLoad: function(n, r, s, o, l) {
          if (s) n.exists = true;
          else {
            e.console.error("Tile %s failed to load: %s - error: %s", n, n.getUrl(), o), this.viewer.raiseEvent("tile-load-failed", { tile: n, tiledImage: this, time: r, message: o, tileRequest: l }), n.loading = false, n.exists = false;
            return;
          }
          if (r < this.lastResetTime) {
            e.console.warn("Ignoring tile %s loaded before reset: %s", n, n.getUrl()), n.loading = false;
            return;
          }
          var a = this, u = function() {
            var c = a.source, h = c.getClosestLevel();
            a._setTileLoaded(n, s, h, l);
          };
          u();
        }, _setTileLoaded: function(n, r, s, o) {
          var l = 0, a = false, u = this;
          function c() {
            return a && e.console.error("Event 'tile-loaded' argument getCompletionCallback must be called synchronously. Its return value should be called asynchronously."), l++, h;
          }
          function h() {
            l--, l === 0 && (n.loading = false, n.loaded = true, n.hasTransparency = u.source.hasTransparency(n.context2D, n.getUrl(), n.ajaxHeaders, n.postData), n.context2D || u._tileCache.cacheTile({ data: r, tile: n, cutoff: s, tiledImage: u }), u.viewer.raiseEvent("tile-ready", { tile: n, tiledImage: u, tileRequest: o }), u._needsDraw = true);
          }
          var f = c();
          this.viewer.raiseEvent("tile-loaded", { tile: n, tiledImage: this, tileRequest: o, get image() {
            return e.console.error("[tile-loaded] event 'image' has been deprecated. Use 'data' property instead."), r;
          }, data: r, getCompletionCallback: c }), a = true, f();
        }, _compareTiles: function(n, r, s) {
          return n ? (n.push(r), this._sortTiles(n), n.length > s && n.pop(), n) : [r];
        }, _sortTiles: function(n) {
          n.sort(function(r, s) {
            return r === null ? 1 : s === null ? -1 : r.visibility === s.visibility ? r.squaredDistance - s.squaredDistance : s.visibility - r.visibility;
          });
        }, _providesCoverage: function(n, r, s, o) {
          var l, a, u, c;
          if (!n[r]) return false;
          if (s === void 0 || o === void 0) {
            l = n[r];
            for (u in l) if (Object.prototype.hasOwnProperty.call(l, u)) {
              a = l[u];
              for (c in a) if (Object.prototype.hasOwnProperty.call(a, c) && !a[c]) return false;
            }
            return true;
          }
          return n[r][s] === void 0 || n[r][s][o] === void 0 || n[r][s][o] === true;
        }, _isCovered: function(n, r, s, o) {
          return s === void 0 || o === void 0 ? this._providesCoverage(n, r + 1) : this._providesCoverage(n, r + 1, 2 * s, 2 * o) && this._providesCoverage(n, r + 1, 2 * s, 2 * o + 1) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * o) && this._providesCoverage(n, r + 1, 2 * s + 1, 2 * o + 1);
        }, _setCoverage: function(n, r, s, o, l) {
          if (!n[r]) {
            e.console.warn("Setting coverage for a tile before its level's coverage has been reset: %s", r);
            return;
          }
          n[r][s] || (n[r][s] = {}), n[r][s][o] = l;
        }, _resetCoverage: function(n, r) {
          n[r] = {};
        } });
      })(i), (function(e) {
        var n = function(s) {
          e.console.assert(s, "[TileCache.cacheTile] options is required"), e.console.assert(s.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(s.tiledImage, "[TileCache.cacheTile] options.tiledImage is required"), this.tile = s.tile, this.tiledImage = s.tiledImage;
        }, r = function(s) {
          e.console.assert(s, "[ImageRecord] options is required"), e.console.assert(s.data, "[ImageRecord] options.data is required"), this._tiles = [], s.create.apply(null, [this, s.data, s.ownerTile]), this._destroyImplementation = s.destroy.bind(null, this), this.getImage = s.getImage.bind(null, this), this.getData = s.getData.bind(null, this), this.getRenderedContext = s.getRenderedContext.bind(null, this);
        };
        r.prototype = { destroy: function() {
          this._destroyImplementation(), this._tiles = null;
        }, addTile: function(s) {
          e.console.assert(s, "[ImageRecord.addTile] tile is required"), this._tiles.push(s);
        }, removeTile: function(s) {
          for (var o = 0; o < this._tiles.length; o++) if (this._tiles[o] === s) {
            this._tiles.splice(o, 1);
            return;
          }
          e.console.warn("[ImageRecord.removeTile] trying to remove unknown tile", s);
        }, getTileCount: function() {
          return this._tiles.length;
        } }, e.TileCache = function(s) {
          s = s || {}, this._maxImageCacheCount = s.maxImageCacheCount || e.DEFAULT_SETTINGS.maxImageCacheCount, this._tilesLoaded = [], this._imagesLoaded = [], this._imagesLoadedCount = 0;
        }, e.TileCache.prototype = { numTilesLoaded: function() {
          return this._tilesLoaded.length;
        }, cacheTile: function(s) {
          e.console.assert(s, "[TileCache.cacheTile] options is required"), e.console.assert(s.tile, "[TileCache.cacheTile] options.tile is required"), e.console.assert(s.tile.cacheKey, "[TileCache.cacheTile] options.tile.cacheKey is required"), e.console.assert(s.tiledImage, "[TileCache.cacheTile] options.tiledImage is required");
          var o = s.cutoff || 0, l = this._tilesLoaded.length, a = this._imagesLoaded[s.tile.cacheKey];
          if (a || (s.data || (e.console.error("[TileCache.cacheTile] options.image was renamed to options.data. '.image' attribute has been deprecated and will be removed in the future."), s.data = s.image), e.console.assert(s.data, "[TileCache.cacheTile] options.data is required to create an ImageRecord"), a = this._imagesLoaded[s.tile.cacheKey] = new r({ data: s.data, ownerTile: s.tile, create: s.tiledImage.source.createTileCache, destroy: s.tiledImage.source.destroyTileCache, getImage: s.tiledImage.source.getTileCacheDataAsImage, getData: s.tiledImage.source.getTileCacheData, getRenderedContext: s.tiledImage.source.getTileCacheDataAsContext2D }), this._imagesLoadedCount++), a.addTile(s.tile), s.tile.cacheImageRecord = a, this._imagesLoadedCount > this._maxImageCacheCount) {
            for (var u = null, c = -1, h = null, f, m, v, y, x, T, C = this._tilesLoaded.length - 1; C >= 0; C--) if (T = this._tilesLoaded[C], f = T.tile, !(f.level <= o || f.beingDrawn)) {
              if (!u) {
                u = f, c = C, h = T;
                continue;
              }
              y = f.lastTouchTime, m = u.lastTouchTime, x = f.level, v = u.level, (y < m || y === m && x > v) && (u = f, c = C, h = T);
            }
            u && c >= 0 && (this._unloadTile(h), l = c);
          }
          this._tilesLoaded[l] = new n({ tile: s.tile, tiledImage: s.tiledImage });
        }, clearTilesFor: function(s) {
          e.console.assert(s, "[TileCache.clearTilesFor] tiledImage is required");
          for (var o, l = 0; l < this._tilesLoaded.length; ++l) o = this._tilesLoaded[l], o.tiledImage === s && (this._unloadTile(o), this._tilesLoaded.splice(l, 1), l--);
        }, getImageRecord: function(s) {
          return e.console.assert(s, "[TileCache.getImageRecord] cacheKey is required"), this._imagesLoaded[s];
        }, _unloadTile: function(s) {
          e.console.assert(s, "[TileCache._unloadTile] tileRecord is required");
          var o = s.tile, l = s.tiledImage;
          let a = o.getCanvasContext && o.getCanvasContext();
          o.unload(), o.cacheImageRecord = null;
          var u = this._imagesLoaded[o.cacheKey];
          u && (u.removeTile(o), u.getTileCount() || (u.destroy(), delete this._imagesLoaded[o.cacheKey], this._imagesLoadedCount--, a && (a.canvas.width = 0, a.canvas.height = 0, l.viewer.raiseEvent("image-unloaded", { context2D: a, tile: o }))), l.viewer.raiseEvent("tile-unloaded", { tile: o, tiledImage: l }));
        } };
      })(i), (function(e) {
        e.World = function(n) {
          var r = this;
          e.console.assert(n.viewer, "[World] options.viewer is required"), e.EventSource.call(this), this.viewer = n.viewer, this._items = [], this._needsDraw = false, this._autoRefigureSizes = true, this._needsSizesFigured = false, this._delegatedFigureSizes = function(s) {
            r._autoRefigureSizes ? r._figureSizes() : r._needsSizesFigured = true;
          }, this._figureSizes();
        }, e.extend(e.World.prototype, e.EventSource.prototype, { addItem: function(n, r) {
          if (e.console.assert(n, "[World.addItem] item is required"), e.console.assert(n instanceof e.TiledImage, "[World.addItem] only TiledImages supported at this time"), r = r || {}, r.index !== void 0) {
            var s = Math.max(0, Math.min(this._items.length, r.index));
            this._items.splice(s, 0, n);
          } else this._items.push(n);
          this._autoRefigureSizes ? this._figureSizes() : this._needsSizesFigured = true, this._needsDraw = true, n.addHandler("bounds-change", this._delegatedFigureSizes), n.addHandler("clip-change", this._delegatedFigureSizes), this.raiseEvent("add-item", { item: n });
        }, getItemAt: function(n) {
          return e.console.assert(n !== void 0, "[World.getItemAt] index is required"), this._items[n];
        }, getIndexOfItem: function(n) {
          return e.console.assert(n, "[World.getIndexOfItem] item is required"), e.indexOf(this._items, n);
        }, getItemCount: function() {
          return this._items.length;
        }, setItemIndex: function(n, r) {
          e.console.assert(n, "[World.setItemIndex] item is required"), e.console.assert(r !== void 0, "[World.setItemIndex] index is required");
          var s = this.getIndexOfItem(n);
          if (r >= this._items.length) throw new Error("Index bigger than number of layers.");
          r === s || s === -1 || (this._items.splice(s, 1), this._items.splice(r, 0, n), this._needsDraw = true, this.raiseEvent("item-index-change", { item: n, previousIndex: s, newIndex: r }));
        }, removeItem: function(n) {
          e.console.assert(n, "[World.removeItem] item is required");
          var r = e.indexOf(this._items, n);
          r !== -1 && (n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy(), this._items.splice(r, 1), this._figureSizes(), this._needsDraw = true, this._raiseRemoveItem(n));
        }, removeAll: function() {
          this.viewer._cancelPendingImages();
          var n, r;
          for (r = 0; r < this._items.length; r++) n = this._items[r], n.removeHandler("bounds-change", this._delegatedFigureSizes), n.removeHandler("clip-change", this._delegatedFigureSizes), n.destroy();
          var s = this._items;
          for (this._items = [], this._figureSizes(), this._needsDraw = true, r = 0; r < s.length; r++) n = s[r], this._raiseRemoveItem(n);
        }, resetItems: function() {
          for (var n = 0; n < this._items.length; n++) this._items[n].reset();
        }, update: function(n) {
          for (var r = false, s = 0; s < this._items.length; s++) r = this._items[s].update(n) || r;
          return r;
        }, draw: function() {
          this.viewer.drawer.draw(this._items), this._needsDraw = false, this._items.forEach((n) => {
            this._needsDraw = n.setDrawn() || this._needsDraw;
          });
        }, needsDraw: function() {
          for (var n = 0; n < this._items.length; n++) if (this._items[n].needsDraw()) return true;
          return this._needsDraw;
        }, getHomeBounds: function() {
          return this._homeBounds.clone();
        }, getContentFactor: function() {
          return this._contentFactor;
        }, setAutoRefigureSizes: function(n) {
          this._autoRefigureSizes = n, n & this._needsSizesFigured && (this._figureSizes(), this._needsSizesFigured = false);
        }, arrange: function(n) {
          n = n || {};
          var r = n.immediately || false, s = n.layout || e.DEFAULT_SETTINGS.collectionLayout, o = n.rows || e.DEFAULT_SETTINGS.collectionRows, l = n.columns || e.DEFAULT_SETTINGS.collectionColumns, a = n.tileSize || e.DEFAULT_SETTINGS.collectionTileSize, u = n.tileMargin || e.DEFAULT_SETTINGS.collectionTileMargin, c = a + u, h;
          !n.rows && l ? h = l : h = Math.ceil(this._items.length / o);
          var f = 0, m = 0, v, y, x, T, C;
          this.setAutoRefigureSizes(false);
          for (var H = 0; H < this._items.length; H++) H && H % h === 0 && (s === "horizontal" ? (m += c, f = 0) : (f += c, m = 0)), v = this._items[H], y = v.getBounds(), y.width > y.height ? x = a : x = a * (y.width / y.height), T = x * (y.height / y.width), C = new e.Point(f + (a - x) / 2, m + (a - T) / 2), v.setPosition(C, r), v.setWidth(x, r), s === "horizontal" ? f += c : m += c;
          this.setAutoRefigureSizes(true);
        }, _figureSizes: function() {
          var n = this._homeBounds ? this._homeBounds.clone() : null, r = this._contentSize ? this._contentSize.clone() : null, s = this._contentFactor || 0;
          if (!this._items.length) this._homeBounds = new e.Rect(0, 0, 1, 1), this._contentSize = new e.Point(1, 1), this._contentFactor = 1;
          else {
            var o = this._items[0], l = o.getBounds();
            this._contentFactor = o.getContentSize().x / l.width;
            for (var a = o.getClippedBounds().getBoundingBox(), u = a.x, c = a.y, h = a.x + a.width, f = a.y + a.height, m = 1; m < this._items.length; m++) o = this._items[m], l = o.getBounds(), this._contentFactor = Math.max(this._contentFactor, o.getContentSize().x / l.width), a = o.getClippedBounds().getBoundingBox(), u = Math.min(u, a.x), c = Math.min(c, a.y), h = Math.max(h, a.x + a.width), f = Math.max(f, a.y + a.height);
            this._homeBounds = new e.Rect(u, c, h - u, f - c), this._contentSize = new e.Point(this._homeBounds.width * this._contentFactor, this._homeBounds.height * this._contentFactor);
          }
          (this._contentFactor !== s || !this._homeBounds.equals(n) || !this._contentSize.equals(r)) && this.raiseEvent("metrics-change", {});
        }, _raiseRemoveItem: function(n) {
          this.raiseEvent("remove-item", { item: n });
        } });
      })(i);
    })(Mi)), Mi.exports;
  }
  var ng = ig();
  var Cn = yo(ng);
  function Do(t) {
    if (typeof t != "string") return null;
    const i = t.match(/xywh=(\d+),(\d+),(\d+),(\d+)$/);
    return i ? i.slice(1).map(Number) : null;
  }
  function cs() {
    let t, i;
    const e = new Promise((n, r) => {
      t = n, i = r;
    });
    return e.resolve = t, e.reject = i, e;
  }
  var Sn = 5e-3;
  var tr = 1.5;
  var sg = { data() {
    return { defaultCanvasCss: "", loadingTimeout: null, avResource: null, overlayElements: [], promise: cs(), tileSources: [], viewer: null, viewerState: { isReset: true } };
  }, computed: { filtersActive() {
    return Object.keys(this.$store.options.filters).length > 0;
  }, paginationButtons() {
    var e;
    const t = ((e = this.$store.manifest.viewingDirection) == null ? void 0 : e.split("-to-")) || ["left", "right"], i = [{ hidden: this.$store.isFirstPage, title: this.$translate("Previous page"), onClick: this.$store.goToPreviousPage, position: t[0] }, { hidden: this.$store.isLastPage, title: this.$translate("Next page"), onClick: this.$store.goToNextPage, position: t[1] }];
    return this.$store.isReversed && i.reverse(), i.filter((n) => !n.hidden);
  }, multiLayerResources() {
    return this.$store.options.pages.filter((t) => t > 0).map((t, i) => {
      var e, n, r, s, o;
      return { pageIndex: i, items: (o = (s = (r = (n = (e = this.$store.manifest.items[t - 1].items) == null ? void 0 : e[0]) == null ? void 0 : n.items) == null ? void 0 : r[0]) == null ? void 0 : s.body) == null ? void 0 : o.items };
    }).filter((t) => {
      var i;
      return ((i = t.items) == null ? void 0 : i.length) > 1;
    });
  } }, watch: { "$store.annotations": { handler() {
    this.updateOverlays();
  }, deep: true }, "$store.options.annotationId": function(t) {
    var s;
    if (!this.viewer || ((s = this.overlayElements.find((o) => o.classList.contains("-current"))) == null || s.classList.remove("-current"), !t)) return;
    const i = this.viewer.viewport.getBounds(), e = this.overlayElements.find((o) => o.id === t);
    if (!e) return;
    e.classList.add("-current");
    const r = this.viewer.getOverlayById(e).getBounds(this.viewer.viewport);
    i.intersection(r) || (r.x -= 0.03, r.y -= 0.03, r.width += 0.06, r.height += 0.06, this.viewer.viewport.fitBoundsWithConstraints(r));
  }, "$store.options.pages": function(t, i) {
    const e = t.length !== i.length;
    this.loadInfo(e);
  }, "$store.options.view": function() {
    this.updateOverlays();
  } }, mounted() {
    this.loadInfo(), this.$store.readyPromises.push(this.promise), this.$store.rootElement.addEventListener("keydown", this.onKeydown), this.$store.rootElement.addEventListener("keypress", this.onKeypress);
  }, beforeUnmount() {
    this.viewer && this.viewer.destroy(), this.$store.rootElement.removeEventListener("keydown", this.onKeydown), this.$store.rootElement.removeEventListener("keypress", this.onKeypress);
  }, methods: { initViewer(t) {
    const i = [];
    let e = 0, n = 0;
    const r = this.$store.isReversed ? this.$store.options.pages.toReversed() : this.$store.options.pages;
    if (r.filter((s) => s > 0).forEach((s, o) => {
      this.tileSources.filter((a) => a.$meta.page === s && a.$meta.layerIndex === (this.$store.options.layers[o] || 0)).forEach((a, u) => {
        var v;
        e = e || a[this.$store.isVertical ? "height" : "width"];
        const c = a[this.$store.isVertical ? "height" : "width"] / e;
        this.$store.options.pages[0] === 0 && (!this.$store.isReversed && s === 1 || this.$store.isReversed && s === this.$store.pageCount) && (i.push({ opacity: 0, tileSource: a, [this.$store.isVertical ? "y" : "x"]: 0, [this.$store.isVertical ? "height" : "width"]: c }), n += 1 + Sn);
        const h = { tileSource: a, [this.$store.isVertical ? "y" : "x"]: n, [this.$store.isVertical ? "height" : "width"]: c }, { target: f } = ((v = this.$store.manifest.items[s - 1].items[0]) == null ? void 0 : v.items[u]) || {}, m = Do((f == null ? void 0 : f.id) || f);
        m ? [h.x, h.y, h.width] = m.map((y) => y / e) : n += c + Sn, this.$store.options.pages[0] === 0 && (!this.$store.isReversed && s === this.$store.pageCount || this.$store.isReversed && s === 1) && i.push({ opacity: 0, tileSource: a, [this.$store.isVertical ? "y" : "x"]: n, [this.$store.isVertical ? "height" : "width"]: c }), i.push(h);
      });
    }), this.viewer) {
      this.viewer.addOnceHandler("open", () => {
        if (this.viewerState.isReset || t) this.resetImage();
        else {
          if (this.viewer.viewport.applyConstraints(true), !this.$store.options.optionsResetOnPageChange) return;
          this.$store.options.optionsResetOnPageChange.forEach((s) => {
            if (s === "filters") this.resetFilters();
            else if (s === "pan") {
              const o = this.viewer.viewport.getBounds();
              if (o.x <= 0 && o.y <= 0) return;
              const l = r[0] ? 0 : 1;
              this.viewer.viewport.panTo({ x: o.x > 0 ? o.width / 2 + l : this.$store.options.pan.x, y: o.y > 0 ? o.height / 2 : this.$store.options.pan.y }), this.$store.updateOptions({ pan: {} });
            } else s === "rotation" ? (this.viewer.viewport.setRotation(0), this.$store.updateOptions({ rotation: null })) : s === "zoom" && (this.viewer.viewport.goHome(), this.$store.updateOptions({ zoom: null }));
          });
        }
      }), this.viewer.open(i);
      return;
    }
    this.viewer = Cn({ animationTime: 0.4, drawer: "canvas", element: this.$refs.image, immediateRender: this.$store.isContainerWidthAtLeast("small"), placeholderFillStyle: "grey", preserveImageSizeOnResize: true, preserveViewport: true, showNavigationControl: false, showZoomControl: false, tileSources: i, visibilityRatio: 0.2, ...this.$store.options.viewer }), this.viewer.addHandler("canvas-key", (s) => {
      var o;
      ["f", "F", "r", "R", "S", "W", "+", "=", "-", "_"].includes((o = s.originalEvent) == null ? void 0 : o.key) && (s.preventDefaultAction = true);
    }), this.viewer.gestureSettingsMouse.clickToZoom = false, this.viewer.addHandler("animation-finish", () => {
      if (this.viewerState.isReset) {
        this.removeImageOptions();
        return;
      }
      const s = this.viewer.viewport.getCenter();
      this.$store.updateOptions({ pan: { x: Math.round(s.x * 1e3) / 1e3, y: Math.round(s.y * 1e3) / 1e3 }, zoom: Math.round(this.viewer.viewport.getZoom() * 1e3) / 1e3 });
    }), this.viewer.addHandler("open", () => {
      this.startLoadingWatch(), this.$store.options.pan.x !== void 0 || this.$store.options.pan.y !== void 0 || this.$store.options.zoom ? ((this.$store.options.pan.x !== void 0 || this.$store.options.pan.y !== void 0) && this.viewer.viewport.panTo({ x: this.$store.options.pan.x, y: this.$store.options.pan.y }, true), this.$store.options.zoom && this.viewer.viewport.zoomTo(this.$store.options.zoom, null, true)) : this.viewer.viewport.goHome(), this.$store.options.rotation !== null && this.viewer.viewport.setRotation(this.$store.options.rotation), this.updateOverlays();
    }), this.viewer.addHandler("pan", this.updateViewerState), this.viewer.addHandler("resize", () => {
      this.viewerState.isReset && this.$nextTick(() => this.viewer.viewport.goHome(true)), this.updateViewerState();
    }), this.viewer.addHandler("rotate", this.updateViewerState), this.viewer.addHandler("zoom", this.updateViewerState), this.viewer.addHandler("tile-load-failed", (s) => {
      this.$store.addError(`Error loading image: ${s.message}`);
    }), this.defaultCanvasCss = this.viewer.drawer.canvas.style.cssText, this.updateFilterStyle(), this.$api.expose(this.resetImage), this.$api.expose(this.viewer, "viewer"), this.promise.resolve();
  }, loadInfo(t = false) {
    this.stopLoadingWatch(), this.avResource = null;
    let i, e;
    const n = [];
    this.$store.options.pages.filter((r) => r > 0).forEach((r, s) => {
      var a, u, c;
      const o = this.$store.manifest.items[r - 1], l = this.$store.options.layers[s] || 0;
      (c = (u = (a = o.items) == null ? void 0 : a[0]) == null ? void 0 : u.items) == null || c.forEach((h, f) => {
        var y, x, T, C, H, k, N, Y;
        const m = ((x = (y = h.body) == null ? void 0 : y.items) == null ? void 0 : x[l]) || h.body;
        if (!m) {
          this.$store.addError(`Resource missing for page ${r}`);
          return;
        }
        if (["Sound", "Video"].includes(m == null ? void 0 : m.type)) {
          if (this.$store.options.pages[1] > -1) {
            this.$store.updateOptions({ pages: [r] });
            return;
          }
          this.avResource = {}, e = { format: m.format, type: m.type, url: m.id }, this.$nextTick(() => {
            this.avResource = e;
          });
          const K = o.accompanyingCanvas || o.placeholderCanvas, q = (k = (H = (C = (T = K == null ? void 0 : K.items) == null ? void 0 : T[0]) == null ? void 0 : C.items) == null ? void 0 : H[0]) == null ? void 0 : k.body;
          i = ((N = q == null ? void 0 : q.items) == null ? void 0 : N[l]) || q;
        } else i = m;
        if (i && this.tileSources.find((K) => K.$meta.page === r && K.$meta.itemIndex === f && K.$meta.layerIndex === l)) return;
        const v = ((Y = i == null ? void 0 : i.source) == null ? void 0 : Y.service) || (i == null ? void 0 : i.service);
        if (v) {
          const K = [].concat(v)[0], q = K.id || K["@id"], ee = `${q}${q.at(-1) === "/" ? "" : "/"}info.json`;
          n.push(this.$store.fetchJson(ee).then((ce) => ({ ...ce, $meta: { page: r, itemIndex: f, layerIndex: l } }), (ce) => {
            let te;
            ce.response && ce.response.statusText ? te = ce.response.statusText : ce.message && (te = ce.message), this.$store.addError(`Error loading info file for page ${r}${te ? `: ${te}` : ""}`);
          }));
        } else i != null && i.id && this.tileSources.push({ $meta: { page: r, itemIndex: f, layerIndex: l }, type: "image", url: i.id, width: i.width, height: i.height });
      }), !i && !e && this.$store.addError(`Image missing for page ${r}`);
    }), n.length ? Promise.all(n).then((r) => {
      r.filter(Boolean).forEach((o) => {
        var l, a;
        if (this.$store.options.preferredImageFormat) {
          const u = o.extraFormats || ((a = (l = o.profile) == null ? void 0 : l[1]) == null ? void 0 : a.formats);
          u != null && u.includes(this.$store.options.preferredImageFormat) && (o.tileFormat = this.$store.options.preferredImageFormat);
        }
        this.tileSources.push(o);
      }), this.$store.options.pages.filter((o) => o > 0).every((o, l) => {
        var a;
        return ((a = r[l]) == null ? void 0 : a.$meta.page) === o;
      }) && this.initViewer(t);
    }) : i && this.initViewer(t);
  }, onKeydown(t) {
    t.key === "Escape" && this.$store.rootElement.focus(), [45, 48, 96].includes(t.keyCode) && (t.shiftKey ? this.resetImage(t) : this.viewer.viewport.goHome());
  }, onKeypress(t) {
    if (!ls(t)) switch (t.key) {
      case "I":
        this.resetFilters();
        break;
      case "r":
      case "R":
        this.rotateRight(t);
        break;
      case "+":
      case "=":
      case "W":
        this.zoomIn();
        break;
      case "-":
      case "_":
      case "S":
        this.zoomOut();
        break;
    }
  }, removeImageOptions() {
    this.$store.updateOptions({ pan: {}, zoom: null });
  }, resetFilters() {
    this.viewer.drawer.canvas.style.cssText = this.defaultCanvasCss, this.$store.updateOptions({ filters: {} });
  }, resetImage(t) {
    t && (this.viewer.viewport.setRotation(0), this.$store.updateOptions({ rotation: null }), this.filtersActive && this.resetFilters()), this.viewer.viewport.goHome(), this.removeImageOptions();
  }, rotateRight(t) {
    const { viewport: i } = this.viewer, e = t && t.shiftKey ? 0 : (i.getRotation() + 90) % 360;
    i.setRotation(e), this.$store.updateOptions({ rotation: e || null });
  }, setFilter(t, i) {
    const e = i.target.valueAsNumber;
    e === 1 ? delete this.$store.options.filters[t] : this.$store.options.filters[t] = e, this.$store.updateOptions({ filters: this.$store.options.filters }), this.updateFilterStyle();
  }, startLoadingWatch() {
    this.$store.loading = 0;
    for (let t = this.viewer.world.getItemCount() - 1; t >= 0; t -= 1) {
      const i = this.viewer.world.getItemAt(t);
      if (i && i._tilesLoading) {
        this.$store.loading = 1;
        break;
      }
    }
    this.loadingTimeout = setTimeout(this.startLoadingWatch, 200);
  }, stopLoadingWatch() {
    clearTimeout(this.loadingTimeout);
  }, toggleOverlays() {
    this.$store.updateOptions({ annotationsVisible: this.$store.options.annotationsVisible !== false ? false : null });
  }, updateFilterStyle() {
    if (!this.filtersActive) return;
    const t = [];
    Object.keys(this.$store.options.filters).forEach((e) => {
      t.push(`${e}(${this.$store.options.filters[e]})`);
    });
    const i = t.join(" ");
    this.viewer.drawer.canvas.style.cssText = `${this.defaultCanvasCss} filter: ${i}`;
  }, updateOverlays() {
    if (!this.viewer || !this.$store.options.pages.filter((e) => e > 0).every((e) => this.tileSources.some((n) => n.$meta.page === e)) || (this.viewer.clearOverlays(), this.overlayElements = [], !this.$store.annotationsActive)) return;
    let t, i = 0;
    this.$store.options.pages.filter((e) => e > -1).forEach((e, n) => {
      var s, o, l, a;
      const r = this.tileSources.find((u) => u.$meta.page === (e === 0 ? 1 : e) && u.$meta.layerIndex === (this.$store.options.layers[n] || 0));
      if (n === 0) {
        if (t = r[this.$store.isVertical ? "height" : "width"], e === 0) return;
      } else {
        const u = this.$store.options.pages[n - 1], c = ((s = this.$store.manifest.items[u - 1]) == null ? void 0 : s[this.$store.isVertical ? "height" : "width"]) || t;
        i += (Sn + c / t) * (this.$store.isReversed ? -1 : 1);
      }
      (l = (o = this.$store.annotations[e]) == null ? void 0 : o[0]) != null && l.coords && ((a = this.$store.annotations[e]) == null || a.forEach((u, c) => {
        const h = document.createElement("button");
        h.ariaLabel = `${e}/${c}`, h.className = `tify-media-overlay${this.$store.options.annotationId === u.id ? " -current" : ""}`, h.id = u.id, h.type = "button", new Cn.MouseTracker({ element: h, clickHandler: (f) => {
          f.quick && setTimeout(() => this.$store.toggleAnnotationId(u.id), 5);
        }, keyDownHandler: (f) => f.keyCode === 13 && this.$store.toggleAnnotationId(u.id) }), this.viewer.addOverlay({ element: h, location: new Cn.Rect(u.coords[0] / t + (this.$store.isVertical ? 0 : i), u.coords[1] / t + (this.$store.isVertical ? i : 0), u.coords[2] / t, u.coords[3] / t) }), this.overlayElements.push(h);
      }));
    });
  }, updateViewerState() {
    const t = this.viewer.viewport.getZoom();
    this.viewerState.isMaxZoom = t >= this.viewer.viewport.getMaxZoom(), this.viewerState.isMinZoom = t <= this.viewer.viewport.getMinZoom();
    const i = this.viewer.viewport.getHomeBounds(), e = this.viewer.viewport.getBounds();
    this.viewerState.isReset = Math.abs(i.height - e.height) < 1e-9 && Math.abs(i.width - e.width) < 1e-9 && Math.abs(i.x - e.x) < 1e-9 && Math.abs(i.y - e.y) < 1e-9;
  }, zoomIn() {
    this.viewer.viewport.zoomBy(tr), this.viewer.viewport.applyConstraints();
  }, zoomOut() {
    this.viewer.viewport.zoomBy(1 / tr), this.viewer.viewport.applyConstraints();
  } } };
  var rg = { class: "tify-media", "aria-live": "polite" };
  var og = { class: "tify-sr-only" };
  var ag = { key: 0, class: "tify-media-buttons -controls" };
  var lg = ["disabled", "title", "aria-label"];
  var ug = ["disabled", "title", "aria-label"];
  var cg = ["disabled", "title", "aria-label"];
  var hg = ["title", "aria-label"];
  var dg = { class: "tify-sr-only" };
  var fg = ["disabled"];
  var pg = ["title", "aria-label"];
  var gg = { class: "tify-sr-only" };
  var mg = { key: 0 };
  var vg = { class: "tify-button-list" };
  var yg = ["aria-pressed", "onClick"];
  var wg = { class: "tify-media-buttons -pagination" };
  var _g = ["title", "aria-label", "onClick"];
  function Tg(t, i, e, n, r, s) {
    var K;
    const o = ss, l = rs, a = eg, u = Yp, c = qp, h = Up, f = Ep, m = us, v = _p, y = mp, x = dp, T = ti, C = Ro, H = Po, k = _o, N = To, Y = ip;
    return E(), A("section", rg, [R("h2", og, B(t.$translate("Media")), 1), R("div", { ref: "image", class: Pe(["tify-media-image", { "-annotations-hidden": t.$store.options.annotationsVisible === false }]) }, null, 2), r.viewer ? (E(), A("div", ag, [R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isMaxZoom, title: t.$translate("Zoom in"), "aria-label": t.$translate("Zoom in"), onClick: i[0] || (i[0] = (q) => s.zoomIn()) }, [ie(o)], 8, lg), R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isMinZoom, title: t.$translate("Zoom out"), "aria-label": t.$translate("Zoom out"), onClick: i[1] || (i[1] = (q) => s.zoomOut()) }, [ie(l)], 8, ug), R("button", { type: "button", class: "tify-media-button", disabled: r.viewerState.isReset, title: t.$translate("Reset"), "aria-label": t.$translate("Reset"), onClick: i[2] || (i[2] = (q) => s.resetImage(!!q.shiftKey)) }, [ie(a)], 8, cg), R("button", { type: "button", class: Pe(["tify-media-button", { "-active": !!t.$store.options.rotation }]), title: t.$translate("Rotate"), "aria-label": t.$translate("Rotate"), onClick: i[3] || (i[3] = (q) => s.rotateRight(q)) }, [ie(u)], 10, hg), ie(m, { class: Pe(["tify-media-dropdown -filters", { "-active": s.filtersActive }]), alignment: "center", position: "right", label: t.$translate("Toggle image filters"), shortcut: "i" }, { button: Ye(() => [ie(c)]), default: Ye(() => [R("h3", dg, B(t.$translate("Image filters")), 1), ie(h, { onUpdate: i[4] || (i[4] = (q, ee) => s.setFilter(q, ee)) }), R("p", null, [R("button", { type: "button", class: "tify-media-reset", disabled: !s.filtersActive, onClick: i[5] || (i[5] = zt((q) => s.resetFilters(), ["stop"])) }, [ie(f), Ge(" " + B(t.$translate("Reset")), 1)], 8, fg)])]), _: 1 }, 8, ["class", "label"]), t.$store.annotations.length && (t.$store.options.view === "text" || !t.$store.isContainerWidthAtLeast("medium")) ? (E(), A("button", { key: 0, type: "button", class: "tify-media-button", title: t.$translate("Toggle annotations"), "aria-label": t.$translate("Toggle annotations"), onClick: i[6] || (i[6] = (q) => s.toggleOverlays()) }, [t.$store.options.annotationsVisible !== false ? (E(), le(v, { key: 0 })) : (E(), le(y, { key: 1 }))], 8, pg)) : J("", true), s.multiLayerResources.length ? (E(), le(m, { key: 1, class: Pe(["tify-media-dropdown -layers", { "-active": t.$store.options.layers.some(Boolean) }]), alignment: "center", position: "right", label: t.$translate("Toggle image layer select"), shortcut: "c" }, { button: Ye(() => [ie(x)]), default: Ye(() => [R("h3", gg, B(t.$translate("Layer")), 1), (E(true), A(ue, null, Ce(s.multiLayerResources, (q) => (E(), A(ue, { key: q.pageIndex }, [t.$store.options.pages.filter((ee) => ee > 0).length > 1 ? (E(), A("h4", mg, [ie(T, { number: t.$store.options.pages[q.pageIndex], wrap: true }, null, 8, ["number"])])) : J("", true), R("ol", vg, [(E(true), A(ue, null, Ce(q.items, (ee, ce) => (E(), A("li", { key: ee.id }, [R("button", { type: "button", "aria-pressed": ce === (t.$store.options.layers[q.pageIndex] || 0), onClick: (te) => {
      t.$store.options.layers[q.pageIndex] = ce, s.loadInfo();
    } }, B(t.$store.localize(ee.label)), 9, yg)]))), 128))])], 64))), 128))]), _: 1 }, 8, ["class", "label"])) : J("", true)])) : J("", true), R("div", wg, [(E(true), A(ue, null, Ce(s.paginationButtons, (q) => (E(), A("button", { key: q.position, type: "button", class: Pe(["tify-media-button", `-${q.position}`]), title: q.title, "aria-label": q.title, onClick: q.onClick }, [q.position === "left" ? (E(), le(C, { key: 0 })) : q.position === "right" ? (E(), le(H, { key: 1 })) : q.position === "top" ? (E(), le(k, { key: 2 })) : q.position === "bottom" ? (E(), le(N, { key: 3 })) : J("", true)], 10, _g))), 128))]), (K = r.avResource) != null && K.url ? (E(), le(Y, { key: 1, src: r.avResource.url, format: r.avResource.format, hasImage: !!r.viewer }, null, 8, ["src", "format", "hasImage"])) : J("", true)]);
  }
  var xg = $(sg, [["render", Tg]]);
  var bg = {};
  var Eg = { class: "tify-icon -fullscreen-exit", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Cg(t, i) {
    return E(), A("svg", Eg, [...i[0] || (i[0] = [R("path", { d: "M14,14H19V16H16V19H14V14M5,14H10V19H8V16H5V14M8,5H10V10H5V8H8V5M19,8V10H14V5H16V8H19Z" }, null, -1)])]);
  }
  var Sg = $(bg, [["render", Cg]]);
  var Pg = {};
  var Rg = { class: "tify-icon -fullscreen", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Dg(t, i) {
    return E(), A("svg", Rg, [...i[0] || (i[0] = [R("path", { d: "M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z" }, null, -1)])]);
  }
  var Ag = $(Pg, [["render", Dg]]);
  var Lg = {};
  var Ig = { class: "tify-icon -help-circle-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Mg(t, i) {
    return E(), A("svg", Ig, [...i[0] || (i[0] = [R("path", { d: "M11,18H13V16H11V18M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,16.41 16.41,20 12,20M12,6A4,4 0 0,0 8,10H10A2,2 0 0,1 12,8A2,2 0 0,1 14,10C14,12 11,11.75 11,15H13C13,12.75 16,12.5 16,10A4,4 0 0,0 12,6Z" }, null, -1)])]);
  }
  var Hg = $(Lg, [["render", Mg]]);
  var Og = {};
  var Fg = { class: "tify-icon -list-box-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function kg(t, i) {
    return E(), A("svg", Fg, [...i[0] || (i[0] = [R("path", { d: "M11 15H17V17H11V15M9 7H7V9H9V7M11 13H17V11H11V13M11 9H17V7H11V9M9 11H7V13H9V11M21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H19C20.1 3 21 3.9 21 5M19 5H5V19H19V5M9 15H7V17H9V15Z" }, null, -1)])]);
  }
  var Bg = $(Og, [["render", kg]]);
  var Vg = {};
  var zg = { class: "tify-icon -tray-arrow-down", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Ng(t, i) {
    return E(), A("svg", zg, [...i[0] || (i[0] = [R("path", { d: "M2 12H4V17H20V12H22V17C22 18.11 21.11 19 20 19H4C2.9 19 2 18.11 2 17V12M12 15L17.55 9.54L16.13 8.13L13 11.25V2H11V11.25L7.88 8.13L6.46 9.55L12 15Z" }, null, -1)])]);
  }
  var Ug = $(Vg, [["render", Ng]]);
  var Wg = {};
  var jg = { class: "tify-icon -information-variant", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Gg(t, i) {
    return E(), A("svg", jg, [...i[0] || (i[0] = [R("path", { d: "M13.5,4A1.5,1.5 0 0,0 12,5.5A1.5,1.5 0 0,0 13.5,7A1.5,1.5 0 0,0 15,5.5A1.5,1.5 0 0,0 13.5,4M13.14,8.77C11.95,8.87 8.7,11.46 8.7,11.46C8.5,11.61 8.56,11.6 8.72,11.88C8.88,12.15 8.86,12.17 9.05,12.04C9.25,11.91 9.58,11.7 10.13,11.36C12.25,10 10.47,13.14 9.56,18.43C9.2,21.05 11.56,19.7 12.17,19.3C12.77,18.91 14.38,17.8 14.54,17.69C14.76,17.54 14.6,17.42 14.43,17.17C14.31,17 14.19,17.12 14.19,17.12C13.54,17.55 12.35,18.45 12.19,17.88C12,17.31 13.22,13.4 13.89,10.71C14,10.07 14.3,8.67 13.14,8.77Z" }, null, -1)])]);
  }
  var qg = $(Wg, [["render", Gg]]);
  var Zg = {};
  var Kg = { class: "tify-icon -table-of-contents", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Xg(t, i) {
    return E(), A("svg", Kg, [...i[0] || (i[0] = [R("path", { d: "M3,9H17V7H3V9M3,13H17V11H3V13M3,17H17V15H3V17M19,17H21V15H19V17M19,7V9H21V7H19M19,13H21V11H19V13Z" }, null, -1)])]);
  }
  var Yg = $(Zg, [["render", Xg]]);
  var Jg = {};
  var Qg = { class: "tify-icon -text", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function $g(t, i) {
    return E(), A("svg", Qg, [...i[0] || (i[0] = [R("path", { d: "M21,6V8H3V6H21M3,18H12V16H3V18M3,13H21V11H3V13Z" }, null, -1)])]);
  }
  var em = $(Jg, [["render", $g]]);
  var tm = {};
  var im = { class: "tify-icon -image-area", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function nm(t, i) {
    return E(), A("svg", im, [...i[0] || (i[0] = [R("path", { d: "M20,5A2,2 0 0,1 22,7V17A2,2 0 0,1 20,19H4C2.89,19 2,18.1 2,17V7C2,5.89 2.89,5 4,5H20M5,16H19L14.5,10L11,14.5L8.5,11.5L5,16Z" }, null, -1)])]);
  }
  var sm = $(tm, [["render", nm]]);
  var rm = {};
  var om = { class: "tify-icon -dots-grid", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function am(t, i) {
    return E(), A("svg", om, [...i[0] || (i[0] = [R("path", { d: "M12 16C13.1 16 14 16.9 14 18S13.1 20 12 20 10 19.1 10 18 10.9 16 12 16M12 10C13.1 10 14 10.9 14 12S13.1 14 12 14 10 13.1 10 12 10.9 10 12 10M12 4C13.1 4 14 4.9 14 6S13.1 8 12 8 10 7.1 10 6 10.9 4 12 4M6 16C7.1 16 8 16.9 8 18S7.1 20 6 20 4 19.1 4 18 4.9 16 6 16M6 10C7.1 10 8 10.9 8 12S7.1 14 6 14 4 13.1 4 12 4.9 10 6 10M6 4C7.1 4 8 4.9 8 6S7.1 8 6 8 4 7.1 4 6 4.9 4 6 4M18 16C19.1 16 20 16.9 20 18S19.1 20 18 20 16 19.1 16 18 16.9 16 18 16M18 10C19.1 10 20 10.9 20 12S19.1 14 18 14 16 13.1 16 12 16.9 10 18 10M18 4C19.1 4 20 4.9 20 6S19.1 8 18 8 16 7.1 16 6 16.9 4 18 4Z" }, null, -1)])]);
  }
  var lm = $(rm, [["render", am]]);
  var um = {};
  var cm = { class: "tify-icon -page-last", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function hm(t, i) {
    return E(), A("svg", cm, [...i[0] || (i[0] = [R("path", { d: "M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z" }, null, -1)])]);
  }
  var dm = $(um, [["render", hm]]);
  var fm = {};
  var pm = { class: "tify-icon -skip-next", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function gm(t, i) {
    return E(), A("svg", pm, [...i[0] || (i[0] = [R("path", { d: "M16,18H18V6H16M6,18L14.5,12L6,6V18Z" }, null, -1)])]);
  }
  var mm = $(fm, [["render", gm]]);
  var vm = {};
  var ym = { class: "tify-icon -skip-previous", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function wm(t, i) {
    return E(), A("svg", ym, [...i[0] || (i[0] = [R("path", { d: "M6,18V6H8V18H6M9.5,12L18,6V18L9.5,12Z" }, null, -1)])]);
  }
  var _m = $(vm, [["render", wm]]);
  var Tm = {};
  var xm = { class: "tify-icon -page-first", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function bm(t, i) {
    return E(), A("svg", xm, [...i[0] || (i[0] = [R("path", { d: "M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z" }, null, -1)])]);
  }
  var Em = $(Tm, [["render", bm]]);
  var Cm = {};
  var Sm = ["disabled", "title", "aria-label"];
  var Pm = ["disabled", "title", "aria-label"];
  var Rm = ["disabled", "title", "aria-label"];
  var Dm = ["disabled", "title", "aria-label"];
  var Am = ["disabled", "title", "aria-label"];
  var Lm = ["disabled", "title", "aria-label"];
  function Im(t, i) {
    const e = Em, n = _m, r = Ro, s = Po, o = mm, l = dm;
    return E(), A("div", { class: Pe(["tify-header-button-group -pagination", { "-reversed": t.$store.isReversed, "-vertical": t.$store.isVertical }]) }, [R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("First page"), "aria-label": t.$translate("First page"), onClick: i[0] || (i[0] = (a) => t.$store.goToFirstPage()) }, [ie(e)], 8, Sm), t.$store.sections.length > 1 ? (E(), A("button", { key: 0, type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("Previous section"), "aria-label": t.$translate("Previous section"), onClick: i[1] || (i[1] = (a) => t.$store.goToPreviousSection()) }, [ie(n)], 8, Pm)) : J("", true), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isFirstPage, title: t.$translate("Previous page"), "aria-label": t.$translate("Previous page"), onClick: i[2] || (i[2] = (a) => t.$store.goToPreviousPage()) }, [ie(r)], 8, Rm), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isLastPage, title: t.$translate("Next page"), "aria-label": t.$translate("Next page"), onClick: i[3] || (i[3] = (a) => t.$store.goToNextPage()) }, [ie(s)], 8, Dm), t.$store.sections.length > 1 ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button", disabled: t.$store.isLastSection, title: t.$translate("Next section"), "aria-label": t.$translate("Next section"), onClick: i[4] || (i[4] = (a) => t.$store.goToNextSection()) }, [ie(o)], 8, Am)) : J("", true), R("button", { type: "button", class: "tify-header-button", disabled: t.$store.isLastPage, title: t.$translate("Last page"), "aria-label": t.$translate("Last page"), onClick: i[5] || (i[5] = (a) => t.$store.goToLastPage()) }, [ie(l)], 8, Lm)], 2);
  }
  var Mm = $(Cm, [["render", Im]]);
  var Hm = {};
  var Om = { class: "tify-icon -book-open-blank-outline", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function Fm(t, i) {
    return E(), A("svg", Om, [...i[0] || (i[0] = [R("path", { d: "M21,4H3A2,2 0 0,0 1,6V19A2,2 0 0,0 3,21H21A2,2 0 0,0 23,19V6A2,2 0 0,0 21,4M3,19V6H11V19H3M21,19H13V6H21V19Z" }, null, -1)])]);
  }
  var km = $(Hm, [["render", Fm]]);
  var Bm = {};
  var Vm = { class: "tify-icon -view-module", "aria-hidden": "true", viewBox: "0 0 24 24" };
  function zm(t, i) {
    return E(), A("svg", Vm, [...i[0] || (i[0] = [R("path", { d: "M16,5V11H21V5M10,11H15V5H10M16,18H21V12H16M10,18H15V12H10M4,18H9V12H4M4,11H9V5H4V11Z" }, null, -1)])]);
  }
  var Nm = $(Bm, [["render", zm]]);
  var Um = { data() {
    return { filter: "", filteredCanvases: [], highlightIndex: 0 };
  }, watch: { filter() {
    this.updateFilteredCanvases(), this.$nextTick(() => this.updateScroll());
  } }, mounted() {
    this.updateFilteredCanvases();
  }, methods: { onKeyDownArrow() {
    this.highlightIndex < this.filteredCanvases.length - 1 && (this.highlightIndex += 1, this.updateScroll());
  }, onKeyUpArrow() {
    this.highlightIndex > 0 && (this.highlightIndex -= 1, this.updateScroll());
  }, onOpen() {
    this.filter = "", this.highlightIndex = this.$store.options.pages.at(-1) - 1, this.$nextTick(() => {
      window.matchMedia("(pointer: coarse)").matches || this.$refs.search.focus(), this.updateScroll();
    });
  }, resetFilter(t) {
    this.filter && (this.filter = "", t.stopPropagation());
  }, setPage(t) {
    this.$store.setPage(t), this.$store.isContainerWidthAtLeast("medium") || this.$store.updateOptions({ view: null });
  }, updateFilteredCanvases() {
    const t = [], i = this.filter.toLowerCase();
    let e = -1;
    this.$store.manifest.items.forEach((n, r) => {
      const o = this.$store.localize(n.label).toLowerCase().includes(i), l = (r + 1).toFixed().includes(i);
      if (o || l) {
        const a = n;
        a.page = r + 1, a.page === this.$store.options.pages[0] && (e = t.length), t.push(a);
      }
    }), this.highlightIndex = e < 0 ? 0 : e, this.filteredCanvases = t;
  }, updateScroll() {
    const { list: t } = this.$refs, i = t.children[this.highlightIndex];
    t && i && (t.scrollTop = i.offsetTop - t.offsetHeight / 2 + i.offsetHeight / 2);
  } } };
  var Wm = { class: "tify-sr-only" };
  var jm = { class: "tify-sr-only" };
  var Gm = { class: "tify-page-select-filter" };
  var qm = ["aria-label"];
  var Zm = { ref: "list", class: "tify-button-list tify-page-select-list" };
  var Km = ["onClick"];
  function Xm(t, i, e, n, r, s) {
    const o = ti, l = us;
    return E(), le(l, { class: "tify-page-select", shortcut: "x", onOpen: s.onOpen }, { button: Ye(() => [R("span", Wm, B(`${t.$translate("Current Page")} `), 1), ie(o, { number: t.$store.options.pages.find((a) => a > 0) }, null, 8, ["number"]), R("span", jm, " / " + B(t.$translate("Toggle page select")), 1)]), default: Ye(() => [R("div", Gm, [ke(R("input", { ref: "search", "onUpdate:modelValue": i[0] || (i[0] = (a) => r.filter = a), "aria-label": t.$translate("Filter pages"), type: "text", class: "tify-page-select-input", onKeyup: i[1] || (i[1] = Ot((a) => t.$refs.list.querySelectorAll("a")[r.highlightIndex].click(), ["enter"])), onKeydown: [i[2] || (i[2] = Ot((a) => s.resetFilter(), ["esc"])), i[3] || (i[3] = Ot(zt((a) => s.onKeyUpArrow(), ["prevent"]), ["up"])), i[4] || (i[4] = Ot(zt((a) => s.onKeyDownArrow(), ["prevent"]), ["down"]))] }, null, 40, qm), [[Gi, r.filter]])]), R("ol", Zm, [(E(true), A(ue, null, Ce(r.filteredCanvases, (a, u) => (E(), A("li", { key: u }, [R("a", { href: "javascript:;", class: Pe({ "-current": t.$store.options.pages.includes(a.page), "-highlighted": r.highlightIndex === u }), onClick: (c) => s.setPage(a.page) }, [ie(o, { number: a.page, wrap: true }, null, 8, ["number"])], 10, Km)]))), 128))], 512)]), _: 1 }, 8, ["onOpen"]);
  }
  var Ym = $(Um, [["render", Xm]]);
  var Jm = { props: { textEnabled: Boolean, tocEnabled: Boolean }, data() {
    return { controlsVisible: false, fullscreen: uf(this.$store.rootElement.parentNode) };
  }, computed: { doublePageEnabled() {
    var t;
    return (t = this.$store.manifest.behavior) != null && t.some((i) => ["continuous", "individuals"].includes(i)) ? false : this.$store.manifest.items.some((i) => {
      var e, n, r, s, o;
      return ((o = (s = (r = (n = (e = i.items) == null ? void 0 : e[0]) == null ? void 0 : n.items) == null ? void 0 : r[0]) == null ? void 0 : s.body) == null ? void 0 : o.type) === "Image";
    });
  }, title() {
    return this.$store.localize((this.$store.manifest || this.$store.collection || {}).label).replace(/(\S{1,10})\s+(\S{1,10})$/, "$1\xA0$2");
  } }, created() {
    this.$api.expose(this.setView), this.$api.expose(this.toggleDoublePage), this.$api.expose(this.fullscreen.toggle, "toggleFullscreen");
  }, mounted() {
    this.$store.rootElement.addEventListener("keydown", this.onKeyDown), So(this.$refs.controls, () => {
      this.closeControlsPopup();
    });
  }, beforeUnmount() {
    this.$store.rootElement.removeEventListener("keydown", this.onKeyDown);
  }, methods: { closeControlsPopup() {
    this.controlsVisible = false;
  }, onKeyDown(t) {
    if (ls(t)) return;
    if (t.key === "Escape") {
      this.controlsVisible = false;
      return;
    }
    switch (t.key) {
      case "Backspace":
        this.$refs.switchViewSmall.offsetParent && this.toggleView(null);
        break;
      case "1":
        this.$store.manifest && this.textEnabled && this.toggleView("text");
        break;
      case "2":
        this.$store.manifest && this.toggleView("thumbnails");
        break;
      case "3":
        this.$store.manifest && this.tocEnabled && this.toggleView("toc");
        break;
      case "4":
        this.toggleView("info");
        break;
      case "5":
        (this.$store.collection || this.$store.manifest) && this.toggleView("export");
        break;
      case "6":
        this.$store.collection && this.toggleView("collection");
        break;
      case "7":
        this.toggleView("help");
        break;
      case "b":
        this.$store.manifest && this.toggleDoublePage();
        break;
      case "f":
        this.fullscreen.toggle();
        break;
    }
    if (!this.$store.manifest) return;
    const { pages: i } = this.$store.options;
    switch (t.key) {
      case "q":
      case ",":
        i[0] > 1 && this.$store.goToPreviousPage();
        break;
      case "e":
      case ".":
        this.isLastPage || this.$store.goToNextPage();
        break;
      case "Q":
        i[0] > 1 && this.$store.goToFirstPage();
        break;
      case "E":
        this.isLastPage || this.$store.goToLastPage();
        break;
    }
  }, setView(t) {
    this.$store.updateOptions({ view: t });
  }, toggleControlsPopup() {
    this.controlsVisible = !this.controlsVisible;
  }, toggleDoublePage(t) {
    const { pages: i } = this.$store.options;
    if (!this.doublePageEnabled) return i[0];
    let e;
    return i.length > 1 && t !== true || t === false ? e = [i[1] > 0 ? i[1] : i[0]] : e = [i[0], this.$store.getFacingPage(i[0])].sort(), this.$store.updateOptions({ pages: e }), e;
  }, toggleView(t) {
    this.closeControlsPopup();
    const i = t === this.$store.options.view && this.$store.manifest && this.$store.isContainerWidthAtLeast("medium") ? null : t;
    return this.$store.updateOptions({ view: i }), i;
  } } };
  var Qm = { class: "tify-header" };
  var $m = { class: "tify-header-column -title" };
  var ev = ["title"];
  var tv = { key: 0, class: "tify-header-column -pagination" };
  var iv = { class: "tify-sr-only" };
  var nv = { class: "tify-header-button-group -page-select" };
  var sv = ["title", "aria-label", "aria-pressed"];
  var rv = { ref: "controls", class: "tify-header-column -controls" };
  var ov = { class: "tify-sr-only" };
  var av = { ref: "switchViewSmall", class: "tify-header-button-group -toggle" };
  var lv = ["aria-controls", "aria-expanded", "title", "aria-label"];
  var uv = ["id"];
  var cv = { class: "tify-header-button-group -view" };
  var hv = ["aria-controls", "aria-expanded"];
  var dv = { class: "tify-header-button-label" };
  var fv = ["aria-controls", "aria-expanded"];
  var pv = { class: "tify-header-button-label" };
  var gv = ["aria-controls", "aria-expanded"];
  var mv = { class: "tify-header-button-label" };
  var vv = ["aria-controls", "aria-expanded"];
  var yv = { class: "tify-header-button-label" };
  var wv = ["aria-controls", "aria-expanded"];
  var _v = { class: "tify-header-button-label" };
  var Tv = ["aria-controls", "aria-expanded"];
  var xv = { class: "tify-header-button-label" };
  var bv = ["aria-controls", "aria-expanded"];
  var Ev = { class: "tify-header-button-label" };
  var Cv = { class: "tify-header-button-group -view" };
  var Sv = ["aria-controls", "aria-expanded", "title", "aria-label"];
  var Pv = { class: "tify-header-button-label" };
  var Rv = ["title", "aria-label"];
  var Dv = { class: "tify-header-button-label" };
  var Av = ["title", "aria-label"];
  var Lv = { class: "tify-header-button-label" };
  function Iv(t, i, e, n, r, s) {
    const o = Ym, l = Nm, a = km, u = Mm, c = lm, h = sm, f = em, m = Yg, v = qg, y = Ug, x = Bg, T = Hg, C = Ag, H = Sg;
    return E(), A("header", Qm, [R("div", $m, [R("h1", { class: "tify-header-title", title: s.title }, B(s.title), 9, ev)]), t.$store.pageCount > 1 ? (E(), A("div", tv, [R("h2", iv, B(t.$translate("Page")), 1), R("div", nv, [ie(o), s.doublePageEnabled ? (E(), A("button", { key: 0, type: "button", class: Pe(["tify-header-button", { "-vertical": t.$store.isVertical }]), title: t.$translate("Toggle double-page"), "aria-label": t.$translate("Toggle double-page"), "aria-pressed": t.$store.options.pages.length > 1, onClick: i[0] || (i[0] = (...k) => s.toggleDoublePage && s.toggleDoublePage(...k)) }, [t.$store.isCustomPageView ? (E(), le(l, { key: 0 })) : (E(), le(a, { key: 1 }))], 10, sv)) : J("", true)]), t.$store.pageCount > 1 ? (E(), le(u, { key: 0 })) : J("", true)])) : J("", true), R("div", rv, [R("h2", ov, B(t.$translate("View [noun]")), 1), R("div", av, [R("button", { type: "button", "aria-controls": t.$getId("controls"), "aria-expanded": r.controlsVisible, class: "tify-header-button", title: t.$translate("View [noun]"), "aria-label": t.$translate("View [noun]"), onClick: i[1] || (i[1] = (...k) => s.toggleControlsPopup && s.toggleControlsPopup(...k)) }, [ie(c)], 8, lv)], 512), R("div", { id: t.$getId("controls"), class: Pe(["tify-dropdown-content -bottom -mobile-only", { "-visible": r.controlsVisible }]) }, [R("div", cv, [t.$store.manifest ? (E(), A("button", { key: 0, type: "button", class: "tify-header-button -media", "aria-controls": t.$getId("media"), "aria-expanded": !t.$store.options.view, onClick: i[2] || (i[2] = (k) => s.toggleView(null)) }, [ie(h), R("span", dv, B(t.$translate("Media")), 1)], 8, hv)) : J("", true), e.textEnabled ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button", "aria-controls": t.$getId("text"), "aria-expanded": t.$store.options.view === "text", onClick: i[3] || (i[3] = (k) => s.toggleView("text")) }, [ie(f), R("span", pv, B(t.$translate("Text")), 1)], 8, fv)) : J("", true), t.$store.manifest ? (E(), A("button", { key: 2, type: "button", class: "tify-header-button", "aria-controls": t.$getId("thumbnails"), "aria-expanded": t.$store.options.view === "thumbnails", onClick: i[4] || (i[4] = (k) => s.toggleView("thumbnails")) }, [ie(l), R("span", mv, B(t.$translate("Pages")), 1)], 8, gv)) : J("", true), e.tocEnabled ? (E(), A("button", { key: 3, type: "button", class: "tify-header-button", "aria-controls": t.$getId("toc"), "aria-expanded": t.$store.options.view === "toc", onClick: i[5] || (i[5] = (k) => s.toggleView("toc")) }, [ie(m), R("span", yv, B(t.$translate("Contents")), 1)], 8, vv)) : J("", true), R("button", { type: "button", class: "tify-header-button", "aria-controls": t.$getId("info"), "aria-expanded": t.$store.options.view === "info", onClick: i[6] || (i[6] = (k) => s.toggleView("info")) }, [ie(v), R("span", _v, B(t.$translate("Info")), 1)], 8, wv), t.$store.collection || t.$store.manifest ? (E(), A("button", { key: 4, type: "button", class: "tify-header-button", "aria-controls": t.$getId("export"), "aria-expanded": t.$store.options.view === "export", onClick: i[7] || (i[7] = (k) => s.toggleView("export")) }, [ie(y), R("span", xv, B(t.$translate("Export [noun]")), 1)], 8, Tv)) : J("", true), t.$store.collection ? (E(), A("button", { key: 5, type: "button", class: "tify-header-button", "aria-controls": t.$getId("collection"), "aria-expanded": t.$store.options.view === "collection", onClick: i[8] || (i[8] = (k) => s.toggleView("collection")) }, [ie(x), R("span", Ev, B(t.$translate("Collection")), 1)], 8, bv)) : J("", true)]), R("div", Cv, [R("button", { type: "button", class: "tify-header-button -icon-only", "aria-controls": t.$getId("help"), "aria-expanded": t.$store.options.view === "help", title: t.$translate("Help"), "aria-label": t.$translate("Help"), onClick: i[9] || (i[9] = (k) => s.toggleView("help")) }, [ie(T), R("span", Pv, B(t.$translate("Help")), 1)], 8, Sv), r.fullscreen.isFullscreen ? (E(), A("button", { key: 1, type: "button", class: "tify-header-button -icon-only", title: t.$translate("Exit fullscreen"), "aria-label": t.$translate("Exit fullscreen"), onClick: i[11] || (i[11] = (k) => r.fullscreen.toggle()) }, [ie(H), R("span", Lv, B(t.$translate("Exit fullscreen")), 1)], 8, Av)) : (E(), A("button", { key: 0, type: "button", class: "tify-header-button -icon-only", title: t.$translate("Fullscreen"), "aria-label": t.$translate("Fullscreen"), onClick: i[10] || (i[10] = (k) => r.fullscreen.toggle()) }, [ie(C), R("span", Dv, B(t.$translate("Fullscreen")), 1)], 8, Rv))]), t.$store.pageCount > 1 ? (E(), le(u, { key: 0 })) : J("", true)], 10, uv)], 512)]);
  }
  var Mv = $(Jm, [["render", Iv]]);
  var Hv = { version: "0.35.0" };
  var Ov = { props: { readyPromise: { type: Object, default: null, required: true } }, data() {
    return { readyToRender: false };
  }, computed: { hasText() {
    var t, i;
    return (i = (t = this.$store.manifest) == null ? void 0 : t.items) == null ? void 0 : i.some((e) => "annotations" in e);
  }, hasToc() {
    return this.$store.structures.length > 0;
  } }, watch: { "$store.options.pages": function(t, i) {
    i && (this.$store.options.layers = []), this.$store.annotationsActive && this.$store.loadAnnotations();
  }, "$store.options.view": function() {
    this.$store.annotationsActive && this.$store.loadAnnotations();
  } }, created() {
    this.$api.expose(this.setLanguage), this.$api.expose(this.$store.setPage), this.$api.expose(this.$store.updateOptions);
  }, mounted() {
    if (this.$store.rootElement = this.$el, !this.$store.options.manifestUrl) {
      if (this.$store.options.contentStateEnabled) {
        const t = new URLSearchParams(window.location.search);
        this.$store.options.manifestUrl = t.get("iiif-content") || "";
      }
      if (!this.$store.options.manifestUrl) {
        this.$store.addError("Missing IIIF manifest URL");
        return;
      }
    }
    Promise.all([this.$store.loadManifest(this.$store.options.manifestUrl), this.setLanguage(this.$store.options.language)]).then(() => {
      this.readyToRender = true, this.$nextTick(() => {
        Promise.all(this.$store.readyPromises).then(() => {
          setTimeout(this.readyPromise.resolve);
        });
      });
    }, (t) => {
      this.readyPromise.reject(t);
    });
  }, beforeUnmount() {
    clearTimeout(this.$store.urlUpdateTimeout), window.removeEventListener("popstate", this.$store.initOptions);
  }, methods: { setLanguage(t) {
    const i = cs();
    if (t === "en") return this.$store.options.language = "en", this.$translate.setTranslation(null), i.resolve(t), i;
    if (this.$store.options.translationsDirUrl === null) return i.reject(new Error("Could not determine translationsDirUrl")), i;
    const e = `${this.$store.options.translationsDirUrl}/${t}.json?${Hv.version}`;
    return this.$store.fetchJson(e).then((n) => {
      this.$store.options.language = t, this.$translate.setTranslation(n), i.resolve(t);
    }, (n) => {
      const r = n.response ? n.response.statusText : n.message;
      this.$store.addError(`Error loading translation \u201C${t}\u201D: ${r}`), i.resolve(this.$store.options.language);
    }), i;
  } } };
  var Fv = { key: 1, class: "tify-main" };
  var kv = { key: 2, class: "tify-loading", role: "status" };
  var Bv = { class: "tify-sr-only" };
  var Vv = { key: 3, class: "tify-error" };
  var zv = ["aria-label"];
  var Nv = { class: "tify-error-messages" };
  function Uv(t, i, e, n, r, s) {
    const o = Mv, l = xg, a = Sd, u = md, c = id, h = Yh, f = rh, m = nc, v = Hu, y = vo;
    return E(), A("article", { class: Pe(["tify", t.$store.options.colorMode === "auto" ? "" : `-${t.$store.options.colorMode}`]), tabindex: "-1" }, [r.readyToRender && (t.$store.collection || t.$store.manifest) ? (E(), le(o, { key: 0, textEnabled: s.hasText, tocEnabled: s.hasToc }, null, 8, ["textEnabled", "tocEnabled"])) : J("", true), r.readyToRender ? (E(), A("div", Fv, [t.$store.manifest ? (E(), A(ue, { key: 0 }, [ie(l, { id: t.$getId("media") }, null, 8, ["id"]), s.hasText ? ke((E(), le(a, { key: 0, id: t.$getId("text") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "text"]]) : J("", true), ke(ie(u, { id: t.$getId("thumbnails") }, null, 8, ["id"]), [[Xe, t.$store.options.view === "thumbnails"]]), s.hasToc ? ke((E(), le(c, { key: 1, id: t.$getId("toc") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "toc"]]) : J("", true)], 64)) : J("", true), t.$store.collection || t.$store.manifest ? ke((E(), le(h, { key: 1, id: t.$getId("export") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "export"]]) : J("", true), t.$store.collection || t.$store.manifest ? ke((E(), le(f, { key: 2, id: t.$getId("info") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "info"]]) : J("", true), t.$store.collection ? ke((E(), le(m, { key: 3, id: t.$getId("collection") }, null, 8, ["id"])), [[Xe, t.$store.options.view === "collection"]]) : J("", true), ke(ie(v, { id: t.$getId("help") }, null, 8, ["id"]), [[Xe, t.$store.options.view === "help"]])])) : J("", true), t.$store.loading ? (E(), A("div", kv, [R("span", Bv, B(t.$translate("Loading")), 1)])) : J("", true), t.$store.errors.size ? (E(), A("section", Vv, [R("button", { type: "button", class: "tify-error-close", "aria-label": t.$translate("Dismiss"), onClick: i[0] || (i[0] = (x) => t.$store.clearErrors()) }, [ie(y)], 8, zv), R("div", Nv, [(E(true), A(ue, null, Ce(t.$store.errors, (x) => (E(), A("p", { key: x }, B(x), 1))), 128))])])) : J("", true)], 2);
  }
  var Wv = $(Ov, [["render", Uv]]);
  var jv = { annotationId: null, annotationsVisible: null, childManifestAutoloaded: true, childManifestUrl: null, colorMode: "auto", container: null, contentStateEnabled: false, fallbackLanguage: "en", filters: {}, language: "en", layers: [], manifestUrl: null, optionsResetOnPageChange: ["pan"], pageLabelFormat: "P&nbsp;\xB7 L", pages: null, pan: {}, preferredImageFormat: null, rotation: null, translationsDirUrl: null, urlQueryKey: null, urlQueryParams: ["annotationId", "annotationsVisible", "childManifestUrl", "layers", "filters", "pages", "pan", "rotation", "view", "zoom"], view: null, viewer: {}, zoom: null };
  function Gv(t) {
    return { expose(i, e) {
      t[e || i.name.replace("bound ", "")] = i;
    } };
  }
  var qv = { install: (t, i) => {
    t.config.globalProperties.$api = new Gv(i.instance);
  } };
  var Zv = "TIFY is a slim and mobile-friendly IIIF document viewer, released under the <a href='https://www.gnu.org/licenses/agpl-3.0.html.en'>GNU Affero General Public License 3.0</a>.";
  var Kv = "Copyright &copy; 2017&ndash;2026 <a href='https://www.uni-goettingen.de/en/'>G\xF6ttingen University</a>&nbsp;/ <a href='https://www.sub.uni-goettingen.de/en/'>G\xF6ttingen State and University Library</a>";
  var Xv = { $info: Zv, $copyright: Kv, "$n/a": "\u2012" };
  var Yv = { install: (t) => {
    const i = gi(null);
    t.config.globalProperties.$translate = (e) => {
      var s, o, l;
      const { language: n } = t.config.globalProperties.$store.options, r = (o = (s = t.config.globalProperties.$store.options.translations) == null ? void 0 : s[n]) == null ? void 0 : o[e];
      return r || ((l = i.value) != null && l[e] ? i.value[e] : Xv[e] || e.replace(/\s*\[.+?\]/g, ""));
    }, t.config.globalProperties.$translate.setTranslation = (e) => {
      i.value = e;
    };
  } };
  var Jv = { install: (t) => {
    const i = crypto != null && crypto.randomUUID ? crypto.randomUUID() : Math.random().toString().slice(2);
    t.config.globalProperties.$getId = (e) => `${i}-${e}`;
  } };
  function _i(t) {
    "@babel/helpers - typeof";
    return _i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
      return typeof i;
    } : function(i) {
      return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
    }, _i(t);
  }
  function Qv(t, i) {
    if (_i(t) != "object" || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (e !== void 0) {
      var n = e.call(t, i);
      if (_i(n) != "object") return n;
      throw TypeError("@@toPrimitive must return a primitive value.");
    }
    return (i === "string" ? String : Number)(t);
  }
  function $v(t) {
    var i = Qv(t, "string");
    return _i(i) == "symbol" ? i : i + "";
  }
  function ir(t, i, e) {
    return (i = $v(i)) in t ? Object.defineProperty(t, i, { value: e, enumerable: true, configurable: true, writable: true }) : t[i] = e, t;
  }
  function ey(t) {
    return Array.isArray(t) ? t : t ? [t] : [];
  }
  function ct(t) {
    for (let i in t) (t[i] === void 0 || t[i] === null) && delete t[i];
    return t;
  }
  var ty = "http://library.stanford.edu/iiif/image-api/compliance.html#level0";
  var iy = "http://library.stanford.edu/iiif/image-api/compliance.html#level1";
  var Ao = "http://library.stanford.edu/iiif/image-api/compliance.html#level2";
  var ny = "http://library.stanford.edu/iiif/image-api/conformance.html#level0";
  var sy = "http://library.stanford.edu/iiif/image-api/conformance.html#level1";
  var Lo = "http://library.stanford.edu/iiif/image-api/conformance.html#level2";
  var ry = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level0";
  var oy = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1";
  var Io = "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2";
  var ay = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level0";
  var ly = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1";
  var Mo = "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2";
  var uy = "http://iiif.io/api/image/1/level0.json";
  var cy = "http://iiif.io/api/image/1/profiles/level0.json";
  var hy = "http://iiif.io/api/image/1/level1.json";
  var dy = "http://iiif.io/api/image/1/profiles/level1.json";
  var Ho = "http://iiif.io/api/image/1/level2.json";
  var Oo = "http://iiif.io/api/image/1/profiles/level2.json";
  var fy = "http://iiif.io/api/image/2/level0.json";
  var py = "http://iiif.io/api/image/2/profiles/level0.json";
  var gy = "http://iiif.io/api/image/2/level1.json";
  var my = "http://iiif.io/api/image/2/profiles/level1.json";
  var Fo = "http://iiif.io/api/image/2/level2.json";
  var ko = "http://iiif.io/api/image/2/profiles/level2.json";
  var vy = "level0";
  var yy = "level1";
  var Bo = "level2";
  var wy = "http://iiif.io/api/image/2/level0";
  var _y = "http://iiif.io/api/image/2/level1";
  var Vo = "http://iiif.io/api/image/2/level2";
  var Ty = [Vo, Ao, Lo, Io, Mo, Ho, Oo, Fo, ko, Bo];
  var xy = [wy, _y, Vo, ty, iy, Ao, ny, sy, Lo, ry, oy, Io, ay, ly, Mo, uy, cy, hy, dy, Ho, Oo, fy, py, gy, my, Fo, ko, vy, yy, Bo];
  var by = xy;
  var nr = ["sc:Collection", "sc:Manifest", "sc:Canvas", "sc:AnnotationList", "oa:Annotation", "sc:Range", "sc:Layer", "sc:Sequence", "oa:Choice", "Service", "ContentResource"];
  function Ey(t) {
    if (t == null) throw Error("Null or undefined is not a valid entity.");
    if (Array.isArray(t)) throw Error("Array is not a valid entity");
    if (typeof t != "object") throw Error(`${typeof t} is not a valid entity`);
    if (typeof t["@type"] == "string") {
      let i = nr.indexOf(t["@type"]);
      if (i !== -1) return nr[i];
    }
    if (t.profile) return "Service";
    if (t.format || t["@type"]) return "ContentResource";
    throw Error("Resource type is not known");
  }
  var Cy = class zo {
    constructor(i, e = {}) {
      ir(this, "traversals", void 0), ir(this, "options", void 0), this.traversals = { collection: [], manifest: [], canvas: [], annotationList: [], sequence: [], annotation: [], contentResource: [], choice: [], range: [], service: [], layer: [], ...i }, this.options = { convertPropsToArray: true, mergeMemberProperties: true, allowUndefinedReturn: false, ...e };
    }
    static all(i) {
      return new zo({ collection: [i], manifest: [i], canvas: [i], annotationList: [i], sequence: [i], annotation: [i], contentResource: [i], choice: [i], range: [i], service: [i], layer: [i] });
    }
    traverseCollection(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseCollectionItems(i))), this.traversals.collection);
    }
    traverseCollectionItems(i) {
      if (this.options.mergeMemberProperties) {
        let e = [...(i.manifests || []).map((s) => typeof s == "string" ? { "@id": s, "@type": "sc:Manifest" } : s), ...(i.collections || []).map((s) => typeof s == "string" ? { "@id": s, "@type": "sc:Collection" } : s), ...i.members || []], n = [], r = e.filter((s) => n.includes(s["@id"]) ? false : (n.push(s["@id"]), true));
        delete i.collections, delete i.manifests, i.members = r;
      }
      return i.manifests && (i.manifests = i.manifests.map((e) => this.traverseManifest(typeof e == "string" ? { "@id": e, "@type": "sc:Manifest" } : e))), i.collections && (i.collections = i.collections.map((e) => this.traverseCollection(typeof e == "string" ? { "@id": e, "@type": "sc:Collection" } : e))), i.members && (i.members = i.members.map((e) => typeof e == "string" ? e : e["@type"] === "sc:Collection" ? this.traverseCollection(e) : e["@type"] === "sc:Manifest" ? this.traverseManifest(e) : this.traverseUnknown(e))), i;
    }
    traverseManifest(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseManifestItems(i))), this.traversals.manifest);
    }
    traverseManifestItems(i) {
      return i.sequences && (i.sequences = i.sequences.map((e) => this.traverseSequence(e))), i.structures && (i.structures = i.structures.map((e) => this.traverseRange(e))), i;
    }
    traverseSequence(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseSequenceItems(i))), this.traversals.sequence);
    }
    traverseSequenceItems(i) {
      return i.canvases && (i.canvases = i.canvases.map((e) => this.traverseCanvas(e))), i;
    }
    traverseCanvas(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseCanvasItems(i))), this.traversals.canvas);
    }
    traverseCanvasItems(i) {
      return i.images && (i.images = i.images.map((e) => (e.on && e["@type"] !== "oa:Annotation" && e["@type"] !== "Annotation" && (e["@type"] = "oa:Annotation"), this.traverseAnnotation(e)))), i.otherContent && (i.otherContent = i.otherContent.map((e) => this.traverseAnnotationList(e))), i;
    }
    traverseRange(i) {
      return i["@type"] !== "sc:Range" && (i["@type"] = "sc:Range"), this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseRangeItems(i))), this.traversals.range);
    }
    traverseRangeItems(i) {
      if (this.options.mergeMemberProperties) {
        let e = [...(i.ranges || []).map((n) => typeof n == "string" ? { "@id": n, "@type": "sc:Range" } : n), ...(i.canvases || []).map((n) => typeof n == "string" ? { "@id": n, "@type": "sc:Canvas" } : n), ...i.members || []];
        delete i.ranges, delete i.canvases, i.members = e.length ? e.map((n) => this.traverseUnknown(n)) : void 0;
      }
      return i;
    }
    traverseAnnotationList(i) {
      let e = typeof i == "string" ? { "@id": i, "@type": "sc:AnnotationList" } : i;
      return this.traverseType(this.traverseDescriptive(this.traverseAnnotationListItems(e)), this.traversals.annotationList);
    }
    traverseAnnotationListItems(i) {
      return i.resources && (i.resources = i.resources.map((e) => this.traverseAnnotation(e))), i;
    }
    traverseAnnotation(i) {
      return this.traverseType(this.traverseDescriptive(this.traverseLinking(this.traverseAnnotationItems(i))), this.traversals.annotation);
    }
    traverseAnnotationItems(i) {
      return i.resource && (Array.isArray(i.resource) ? i.resource = i.resource.map((e) => this.traverseContentResource(e)) : i.resource = this.traverseContentResource(i.resource)), i.on, i;
    }
    traverseLayer(i) {
      return this.traverseType(this.traverseLinking(this.traverseLayerItems(i)), this.traversals.layer);
    }
    traverseLayerItems(i) {
      return i.otherContent && (i.otherContent = i.otherContent.map((e) => this.traverseAnnotationList(e))), i;
    }
    traverseChoice(i) {
      return this.traverseType(this.traverseChoiceItems(i), this.traversals.choice);
    }
    traverseChoiceItems(i) {
      return i.default && i.default !== "rdf:nil" && (i.default = this.traverseContentResource(i.default)), i.item && i.item !== "rdf:nil" && (i.item = i.item.map((e) => this.traverseContentResource(e))), i;
    }
    traverseService(i) {
      return this.traverseType(this.traverseLinking(i), this.traversals.service);
    }
    traverseContentResource(i) {
      return i["@type"] === "oa:Choice" ? this.traverseChoice(i) : this.traverseType(this.traverseDescriptive(this.traverseLinking(i)), this.traversals.contentResource);
    }
    traverseUnknown(i) {
      if (!i["@type"] || typeof i == "string") return i;
      switch (Ey(i)) {
        case "sc:Collection":
          return this.traverseCollection(i);
        case "sc:Manifest":
          return this.traverseManifest(i);
        case "sc:Canvas":
          return this.traverseCanvas(i);
        case "sc:Sequence":
          return this.traverseSequence(i);
        case "sc:Range":
          return this.traverseRange(i);
        case "oa:Annotation":
          return this.traverseAnnotation(i);
        case "sc:AnnotationList":
          return this.traverseAnnotationList(i);
        case "sc:Layer":
          return this.traverseLayer(i);
        case "Service":
          return this.traverseService(i);
        case "oa:Choice":
          return this.traverseChoice(i);
        case "ContentResource":
          return this.traverseContentResource(i);
      }
      return i.profile ? this.traverseService(i) : i;
    }
    traverseImageResource(i) {
      let e = Array.isArray(i), n = Array.isArray(i) ? i : [i], r = [];
      for (let s of n) typeof s == "string" ? r.push(this.traverseContentResource({ "@id": s, "@type": "dctypes:Image" })) : r.push(this.traverseContentResource(s));
      return !e && !this.options.convertPropsToArray ? r[0] : r;
    }
    traverseDescriptive(i) {
      return i.thumbnail && (i.thumbnail = this.traverseImageResource(i.thumbnail)), i.logo && (i.logo = this.traverseImageResource(i.logo)), i;
    }
    traverseOneOrMoreServices(i) {
      let e = Array.isArray(i), n = Array.isArray(i) ? i : [i], r = [];
      for (let s of n) r.push(this.traverseService(s));
      return !e && !this.options.convertPropsToArray ? r[0] : r;
    }
    traverseLinking(i) {
      return i.related && (i.related = this.traverseOneOrManyType(i.related, this.traversals.contentResource)), i.rendering && (i.rendering = this.traverseOneOrManyType(i.rendering, this.traversals.contentResource)), i.service && (i.service = this.traverseOneOrMoreServices(i.service)), i.seeAlso && (i.seeAlso = this.traverseOneOrManyType(i.seeAlso, this.traversals.contentResource)), i.within && (typeof i.within == "string" || (i.within = this.traverseOneOrManyType(i.within, this.traversals.contentResource))), i.startCanvas && (typeof i.startCanvas == "string" ? i.startCanvas = this.traverseType({ "@id": i.startCanvas, "@type": "sc:Canvas" }, this.traversals.canvas) : i.startCanvas && this.traverseType(i.startCanvas, this.traversals.canvas)), i.contentLayer && (typeof i.contentLayer == "string" ? i.contentLayer = this.traverseLayer({ "@id": i.contentLayer, "@type": "sc:Layer" }) : i.contentLayer = this.traverseLayer(i.contentLayer)), i;
    }
    traverseOneOrManyType(i, e) {
      if (!Array.isArray(i)) if (this.options.convertPropsToArray) i = [i];
      else return this.traverseType(i, e);
      return i.map((n) => this.traverseType(n, e));
    }
    traverseType(i, e) {
      return e.reduce((n, r) => {
        let s = r(n);
        return s === void 0 && !this.options.allowUndefinedReturn ? n : s;
      }, i);
    }
  };
  var Sy = ["http://iiif.io/api/image/2/level1", "http://iiif.io/api/image/2/level2", "http://library.stanford.edu/iiif/image-api/compliance.html#level1", "http://library.stanford.edu/iiif/image-api/compliance.html#level2", "http://library.stanford.edu/iiif/image-api/conformance.html#level1", "http://library.stanford.edu/iiif/image-api/conformance.html#level2", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level1", "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2", "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level1", "http://library.stanford.edu/iiif/image-api/1.1/conformance.html#level2", "http://iiif.io/api/image/1/level1.json", "http://iiif.io/api/image/1/profiles/level1.json", "http://iiif.io/api/image/1/level2.json", "http://iiif.io/api/image/1/profiles/level2.json", "http://iiif.io/api/image/2/level1.json", "http://iiif.io/api/image/2/profiles/level1.json", "http://iiif.io/api/image/2/level2.json", "http://iiif.io/api/image/2/profiles/level2.json", "level1", "level2"];
  var Bn = { attributionLabel: "Attribution", providerId: "http://example.org/provider", providerName: "" };
  function Py(t) {
    if (typeof t == "string") return [t];
    if (!t) return [];
    let i = Array.isArray(t) ? t : [t], e = [];
    for (let n of i) {
      if (typeof n == "string") {
        e.push(n);
        continue;
      }
      e.push({ "@language": n["@language"] || n.language, "@value": n["@value"] || n.value });
    }
    return e;
  }
  function kt(t, i = "none") {
    if (!t) return { none: [""] };
    let e = Py(t), n = {};
    for (let r of e) {
      if (typeof r == "string") {
        n[i] = n[i] ? n[i] : [], n[i].push(r || "");
        continue;
      }
      if (!r["@language"]) {
        n[i] = n[i] ? n[i] : [], n[i].push(r["@value"] || "");
        continue;
      }
      let s = r["@language"];
      n[s] = n[s] ? n[s] : [], n[s].push(r["@value"] || "");
    }
    return Object.keys(n).length === 0 ? { none: [""] } : n;
  }
  function No(t) {
    if (Array.isArray(t)) return No(t.find((i) => typeof i == "string"));
    if (Ty.indexOf(t) !== -1) return "level2";
    if (Sy.indexOf(t) !== -1) return "level1";
    if (by.indexOf(t) !== -1) return "level0";
    if (typeof t == "string") return t;
  }
  function Ry(t) {
    let i = Array.isArray(t) ? t : [t];
    for (let e of i) switch (e) {
      case "http://iiif.io/api/image/2/context.json":
      case "http://library.stanford.edu/iiif/image-api/1.1/compliance.html#level2":
        return "ImageService2";
      case "http://iiif.io/api/image/1/context.json":
      case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
        return "ImageService1";
      case "http://iiif.io/api/annex/openannotation/context.json":
        return "ImageApiSelector";
    }
  }
  function Dy(t) {
    switch (t) {
      case "http://iiif.io/api/image/2/level0.json":
      case "http://iiif.io/api/image/2/level1.json":
      case "http://iiif.io/api/image/2/level2.json":
        return "ImageService2";
      case "http://iiif.io/api/auth/1/kiosk":
      case "http://iiif.io/api/auth/1/login":
      case "http://iiif.io/api/auth/1/clickthrough":
      case "http://iiif.io/api/auth/1/external":
      case "http://iiif.io/api/auth/0/kiosk":
      case "http://iiif.io/api/auth/0/login":
      case "http://iiif.io/api/auth/0/clickthrough":
      case "http://iiif.io/api/auth/0/external":
        return "AuthCookieService1";
      case "http://iiif.io/api/auth/1/token":
      case "http://iiif.io/api/auth/0/token":
        return "AuthTokenService1";
      case "http://iiif.io/api/auth/1/logout":
      case "http://iiif.io/api/auth/0/logout":
        return "AuthLogoutService1";
      case "http://iiif.io/api/search/1/search":
      case "http://iiif.io/api/search/0/search":
        return "SearchService1";
      case "http://iiif.io/api/search/1/autocomplete":
      case "http://iiif.io/api/search/0/autocomplete":
        return "AutoCompleteService1";
    }
  }
  function sr(t) {
    for (let i of ["sc", "oa", "dcterms", "dctypes", "iiif"]) if (t.startsWith(`${i}:`)) return t.slice(i.length + 1);
    return t;
  }
  var Ay = ["Collection", "Manifest", "Annotation", "AnnotationPage", "Range", "Service"];
  function hs(t) {
    let i = t["@id"] || t.id, e = t["@type"] || t.type, n = t.profile || void 0, r = t["@context"] || void 0;
    if (n) {
      let s = Dy(n);
      if (s) return s;
    }
    if (r) {
      let s = Ry(r);
      if (s) return s;
    }
    if (e) {
      if (Array.isArray(e)) {
        if (e.indexOf("oa:CssStylesheet") !== -1) return "CssStylesheet";
        if (e.indexOf("cnt:ContentAsText") !== -1) return "TextualBody";
        e = e[0];
      }
      for (let s of ["sc", "oa", "dcterms", "dctypes", "iiif"]) if (e.startsWith(`${s}:`)) {
        e = e.slice(s.length + 1);
        break;
      }
      switch (e) {
        case "Layer":
          return "AnnotationCollection";
        case "AnnotationList":
          return "AnnotationPage";
        case "cnt:ContentAsText":
          return "TextualBody";
      }
    }
    if (e && Ay.indexOf(e) !== -1) return e;
    if (t.format) {
      if (t.format.startsWith("image/")) return "Image";
      if (t.format.startsWith("text/") || t.format === "application/pdf") return "Text";
      if (t.format.startsWith("application/")) return "Dataset";
    }
    return i && (i.endsWith(".jpg") || i.endsWith(".png") || i.endsWith(".jpeg")) ? "Image" : e || "unknown";
  }
  var Ly = /^|["'\\>]http(s)?:\/\/(creativecommons.org|rightsstatements.org)\/[^"'\\<\n]+/gm;
  function Iy(t) {
    let i = t.match(Ly);
    return i ? i[0] : t;
  }
  function My(t, i = "Rights/License", e = "none") {
    let n = null, r = [], s = Array.isArray(t) ? t : [t];
    for (let o of s) {
      let l = o ? Iy(o) : void 0;
      if (l && (l.indexOf("creativecommons.org") !== -1 || l.indexOf("rightsstatements.org") !== -1)) {
        n = l.startsWith("https://") ? `http://${l.slice(8)}` : l;
        continue;
      }
      l && r.push({ label: { [e]: [i] }, value: { [e]: [l] } });
    }
    return [n, r];
  }
  var Hy = ["http://iiif.io/api/presentation/2/context.json", "http://iiif.io/api/image/2/context.json", "http://iiif.io/api/image/1/context.json", "http://library.stanford.edu/iiif/image-api/1.1/context.json", "http://iiif.io/api/search/1/context.json", "http://iiif.io/api/search/0/context.json", "http://iiif.io/api/auth/1/context.json", "http://iiif.io/api/auth/0/context.json", "http://iiif.io/api/annex/openannotation/context.json"];
  function Oy(t) {
    if (t) {
      let i = Array.isArray(t) ? t : [t], e = [];
      for (let n of i) n === "http://iiif.io/api/presentation/2/context.json" && e.push("http://iiif.io/api/presentation/3/context.json"), Hy.indexOf(n) === -1 && e.push(n);
      if (i.length) return e.length === 1 ? e[0] : e;
    }
  }
  function Fy(t) {
    return t ? t.map((i) => ({ label: kt(i.label), value: kt(i.value) })) : [];
  }
  var rr = 0;
  function Uo(t, i) {
    let e = encodeURI(t.id || t["@id"] || "").trim();
    return e && i ? `${e}/${i}` : e || (rr++, `http://example.org/${t["@type"]}${i ? `/${i}` : ""}/${rr}`);
  }
  function Tt(t) {
    let i = [...t.behavior || []];
    t.viewingHint && i.push(t.viewingHint);
    let e;
    return Array.isArray(t.motivation) ? e = t.motivation.map(sr) : t.motivation && (e = sr(t.motivation)), { "@context": t["@context"] ? Oy(t["@context"]) : void 0, id: (t["@id"] || Uo(t)).trim(), type: hs(t), behavior: i.length ? i : void 0, height: t.height ? t.height : void 0, width: t.width ? t.width : void 0, motivation: e, viewingDirection: t.viewingDirection, profile: t.profile, format: t.format ? t.format : void 0, duration: void 0, timeMode: void 0 };
  }
  function xt(t) {
    let [i, e] = My(t.license), n = [...t.metadata ? Fy(t.metadata) : [], ...e];
    return { rights: i, metadata: n.length ? n : void 0, label: t.label ? kt(t.label) : void 0, requiredStatement: t.attribution ? { label: kt(Bn.attributionLabel), value: kt(t.attribution) } : void 0, navDate: t.navDate, summary: t.description ? kt(t.description) : void 0, thumbnail: ky(t.thumbnail) };
  }
  function ky(t) {
    return t && (Array.isArray(t) ? t : [t]).map((e) => typeof e == "string" ? { id: e, type: "Image" } : (e.type === "unknown" && (e.type = "Image"), e));
  }
  function By(t) {
    if (!t.within) return;
    let i = Array.isArray(t.within) ? t.within : [t.within], e = [];
    for (let n of i) if (typeof n == "string") {
      if (n) switch (t["@type"]) {
        case "sc:Manifest":
          e.push({ id: n, type: "Collection" });
          break;
      }
    } else n["@id"] && e.push({ id: n["@id"], type: hs(n) });
    return e.length ? e : void 0;
  }
  function At(t) {
    let i = t.related ? Array.isArray(t.related) ? t.related : [t.related] : [], e = t.contentLayer;
    return { provider: t.logo || i.length ? [{ id: Bn.providerId, type: "Agent", homepage: i.length ? [i[0]] : void 0, logo: t.logo ? Array.isArray(t.logo) ? t.logo : [t.logo] : void 0, label: kt(Bn.providerName) }] : void 0, partOf: By(t), rendering: t.rendering, seeAlso: t.seeAlso, start: t.startCanvas, service: t.service ? ey(t.service) : void 0, supplementary: e ? [e] : void 0 };
  }
  function Vy(t) {
    return { chars: t.chars, format: t.format ? t.format : void 0, language: t.language };
  }
  function Pn(t, i) {
    return t ? typeof t == "string" ? { id: t, type: i } : typeof (t == null ? void 0 : t["@id"]) == "string" ? { id: t["@id"], type: i } : typeof t.id == "string" ? { id: t.id, type: i } : null : null;
  }
  function zy(t) {
    let i = {};
    if (t.first) {
      let e = Pn(t.first, "Collection");
      e && (i.first = e);
    }
    if ((t.total || t.total === 0) && (i.total = t.total), t.prev) {
      let e = Pn(t.prev, "Collection");
      e && (i.prev = e);
    }
    if (t.next) {
      let e = Pn(t.next, "Collection");
      e && (i.next = e);
    }
    return i;
  }
  function Ny(t) {
    let i = [];
    for (let e of t) {
      let n = { ...e };
      n.items && n.items.length === 0 && delete n.items, i.push(n);
    }
    return i;
  }
  function Uy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), ...zy(t), items: Ny(t.members) });
  }
  function Wy(t) {
    let i = [], e = [], n, r;
    for (let o of t.sequences || []) o.canvases.length && i.push(...o.canvases), o.behavior && e.push(...o.behavior), o.viewingDirection && (r = o.viewingDirection), o.startCanvas && (n = o.startCanvas);
    let s = Tt(t);
    return e.length && (s.behavior ? s.behavior.push(...e) : s.behavior = e), ct({ ...s, ...xt(t), ...At(t), viewingDirection: r, start: n, items: i, structures: jy(t.structures) });
  }
  function jy(t) {
    if (!t) return t;
    let i = /* @__PURE__ */ new Map();
    for (let n of t) i.set(n.id, n);
    let e = [];
    for (let n of t) if (n.items) {
      let r = n.items.map((s) => typeof s == "string" ? (e.push(s), i.get(s) || s) : s && s.id ? (e.push(s.id), i.get(s.id) || s) : s);
      n.items = r;
    }
    return t.filter((n) => e.indexOf(n.id) === -1);
  }
  function Gy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), annotations: t.otherContent && t.otherContent.length ? t.otherContent : void 0, items: t.images && t.images.length ? [{ id: Uo(t, "annotation-page"), type: "AnnotationPage", items: t.images }] : void 0 });
  }
  function qy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), items: t.resources && t.resources.length ? t.resources : void 0 });
  }
  function Zy(t) {
    return !t.canvases || t.canvases.length === 0 ? { canvases: [], behavior: [] } : { canvases: t.canvases, behavior: t.viewingHint ? [t.viewingHint] : [], viewingDirection: t.viewingDirection, startCanvas: t.startCanvas };
  }
  function Ky(t) {
    function i(e) {
      if (Array.isArray(e)) {
        if (e.length > 1) return { type: "List", items: e.map(i) };
        e = e[0];
      }
      if (typeof e == "string") return encodeURI(e).trim();
      if ("@type" in e) {
        let n;
        if (typeof e.full == "string") n = e.full;
        else if (e.full["@type"] === "dctypes:Image") n = { id: e.full["@id"], type: "Image" };
        else if (e.full["@type"] === "sc:Canvas") n = { id: e.full["@id"], type: "Canvas" };
        else throw Error(`Unsupported source type on annotation: ${e.full["@type"]}`);
        return { type: "SpecificResource", source: n, selector: Vn(e.selector) };
      } else return encodeURI(e["@id"]).trim();
    }
    return ct({ ...Tt(t), ...xt(t), ...At(t), target: i(t.on), body: Array.isArray(t.resource) ? t.resource.map(or) : or(t.resource) });
  }
  function or(t) {
    return t.type === "Choice" ? t : Wo(t);
  }
  function Wo(t) {
    let i = t;
    return ct({ ...Tt(i), ...xt(i), ...At(i), ...Vy(i) });
  }
  function Xy(t) {
    let i = [];
    return t.default && t.default !== "rdf:nil" && i.push(t.default), t.item && t.item !== "rdf:nil" && i.push(...t.item), ct({ ...Tt(t), ...xt(t), items: i });
  }
  function Yy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t), items: t.members });
  }
  function Jy(t) {
    let { "@id": i, "@type": e, "@context": n, profile: r, ...s } = t, o = {};
    return i && (o["@id"] = i), o["@type"] = hs(t), o["@type"] === "unknown" && (n && n.length && (o["@context"] = n), o["@type"] = "Service"), r && (o.profile = No(r)), ct({ ...o, ...s });
  }
  function Qy(t) {
    return ct({ ...Tt(t), ...xt(t), ...At(t) });
  }
  var $y = new Cy({ collection: [Uy], manifest: [Wy], canvas: [Gy], annotationList: [qy], sequence: [Zy], annotation: [Ky], contentResource: [Wo], choice: [Xy], range: [Yy], service: [Jy], layer: [Qy] });
  function e1(t) {
    return t && t["@context"] && (t["@context"] === "http://iiif.io/api/presentation/2/context.json" || Array.isArray(t["@context"]) && t["@context"].indexOf("http://iiif.io/api/presentation/2/context.json") !== -1 || t["@context"] === "http://www.shared-canvas.org/ns/context.json") || t["@context"] === "http://iiif.io/api/image/2/context.json" || t["@id"] && t["@type"] === "sc:Collection" || t["@id"] && t["@type"] === "sc:Manifest" ? (t["@context"] || (t["@context"] = "http://iiif.io/api/presentation/2/context.json"), $y.traverseUnknown(t)) : t;
  }
  function Vn(t) {
    if ((Array.isArray(t["@type"]) && t["@type"].includes("oa:SvgSelector") || t["@type"] == "oa:SvgSelector") && ("chars" in t || "value" in t)) return { type: "SvgSelector", value: "chars" in t ? t.chars : t.value };
    if (t["@type"] === "oa:FragmentSelector") return { type: "FragmentSelector", value: t.value };
    if (t["@type"] === "oa:Choice") return [Vn(t.default), ...(Array.isArray(t.item) ? t.item : [t.item]).map(Vn)];
    if (t["@type"] == "iiif:ImageApiSelector") return { type: "ImageApiSelector", region: "region" in t ? t.region : void 0, rotation: "rotation" in t ? t.rotation : void 0 };
    throw Error(`Unsupported selector type: ${t["@type"]}`);
  }
  var t1 = e1;
  function zn(t) {
    var s, o, l, a, u;
    const { related: i } = t, { requiredStatement: e } = t, { viewingDirection: n } = t, r = t1(t);
    return t["@context"] === "http://iiif.io/api/presentation/2/context.json" && ([].concat(i || []).forEach((c) => {
      r.homepage = r.homepage || [], r.homepage.push(typeof c == "string" ? c : { id: c["@id"], label: c.label, format: c.format });
    }), (s = r.provider) == null || s.forEach((c, h) => {
      c.homepage && (r.provider[h].homepage = c.homepage.filter((f) => f.id !== "http://example.org/undefined/1" && !r.homepage.find((m) => m.id === f.id)));
    }), ((u = (a = (l = (o = r.provider) == null ? void 0 : o[0]) == null ? void 0 : l.label) == null ? void 0 : a.none) == null ? void 0 : u[0]) === "Unknown" && (delete r.provider[0].label, e && !r.requiredStatement && (r.requiredStatement = e)), r.viewingDirection = n), r;
  }
  function i1(t = {}) {
    const i = tn({ annotations: [], annotationsAvailable: null, collection: null, errors: /* @__PURE__ */ new Set(), loading: 0, manifest: t.manifest ? zn(t.manifest) : null, options: t.options || {}, readyPromises: [], rootElement: t.rootElement || null, urlUpdateTimeout: null, annotationsActive: Me(() => i.options.view === "text" || !i.options.view && !i.isContainerWidthAtLeast("medium")), currentStructure: Me(() => {
      if (!(i.manifest.structures instanceof Array)) return false;
      const e = [];
      i.options.pages.filter((o) => o > 0).forEach((o) => {
        e.push(i.manifest.items[o - 1].id);
      });
      const { length: n } = i.manifest.structures;
      let r, s;
      for (let o = n - 1; o >= 0; o -= 1) {
        const l = i.manifest.structures[o], { items: a } = l;
        if (a != null && a.some((u) => e.includes(u.id))) {
          const u = l.items.length;
          if ((u < s || !s) && (r = o, s = u, s === 0)) break;
        }
      }
      return typeof r == "number" && r >= 0 ? i.manifest.structures[r] : false;
    }), isCustomPageView: Me(() => {
      const { pages: e } = i.options;
      return e.length === 1 ? false : e.length > 2 ? true : e[0] < 1 || e[1] < 1 ? false : e[1] - e[0] !== 1;
    }), isFirstPage: Me(() => i.options.pages[0] === 1 || i.options.pages[1] === 1), isLastPage: Me(() => i.options.pages.at(-1) === i.pageCount), isLastSection: Me(() => {
      var s;
      const { pages: e } = i.options, n = e.length - 1;
      return (e[n] ? e[n] : e[n - 1]) >= ((s = i.sections[i.sections.length - 1]) == null ? void 0 : s.firstPage);
    }), isReversed: Me(() => ["right-to-left", "bottom-to-top"].includes(i.manifest.viewingDirection)), isVertical: Me(() => ["top-to-bottom", "bottom-to-top"].includes(i.manifest.viewingDirection)), pageCount: Me(() => {
      var e, n;
      return (n = (e = i.manifest) == null ? void 0 : e.items) == null ? void 0 : n.length;
    }), sections: Me(() => {
      if (!i.manifest.structures) return [];
      const e = [];
      return i.manifest.structures.forEach((n) => {
        if (!n.items) {
          e.push({ firstPage: 1, lastPage: i.pageCount });
          return;
        }
        const r = n.items[0].id, s = i.manifest.items.findIndex((a) => a.id === r) + 1, o = n.items[n.items.length - 1].id, l = i.manifest.items.findIndex((a) => a.id === o) + 1;
        e.push({ firstPage: s, lastPage: l });
      }), e;
    }), structures: Me(() => {
      var a, u, c;
      if (!((a = i.manifest) != null && a.structures)) return [];
      const e = (c = (u = i.manifest.structures[0]) == null ? void 0 : u.behavior) != null && c.includes("top") ? i.manifest.structures[0].items || [] : i.manifest.structures, n = [], r = i.manifest.items, s = e.length;
      for (let h = 0; h < s; h += 1) {
        const f = { ...e[h] };
        if (f.items) {
          const m = f.items[0].id;
          f.firstPage = r.findIndex((y) => y.id === m) + 1;
          const v = f.items.at(-1).id;
          f.lastPage = r.findIndex((y) => y.id === v) + 1;
        }
        f.level = 0, n.push(f);
      }
      let o = 0;
      for (let h = 0; h < n.length; h += 1) {
        const f = n[h];
        for (let m = h + 1; m < n.length; m += 1) {
          const v = n[m];
          v.firstPage >= f.firstPage && v.lastPage <= f.lastPage && (f.items = (f.items || []).filter((y) => y.label), f.items.push(v), v.level += 1, o = Math.max(o, v.level));
        }
      }
      const l = (h, f = 0) => {
        for (let m = 0; m < h.length; m += 1) {
          const v = h[m];
          v.level > f ? h.splice(m, 1) : v.items && l(v.items, f + 1);
        }
      };
      for (let h = 0; h < o; h += 1) l(n);
      return n;
    }), addError(e) {
      i.errors.add(e), console.warn(e);
    }, clearErrors() {
      i.errors.clear();
    }, async fetchJson(e) {
      i.loading += 1;
      const n = await fetch(e).catch((s) => (i.loading = 0, Promise.reject(s)));
      if (!n.ok) return i.loading = 0, Promise.reject(new Error(n.status));
      const r = await n.json().catch((s) => (i.loading = 0, Promise.reject(s)));
      return i.loading > 0 && (i.loading -= 1), r;
    }, async fetchText(e) {
      i.loading += 1;
      const n = await fetch(e).catch((s) => (i.loading = 0, Promise.reject(s)));
      if (!n.ok) return console.warn("Error loading annotation"), "";
      const r = await n.text().catch((s) => (i.loading = 0, Promise.reject(s)));
      return i.loading > 0 && (i.loading -= 1), r;
    }, getFacingPage(e) {
      var s, o, l, a, u;
      if ((s = i.manifest.items[e - 1].behavior) != null && s.includes("non-paged")) return -1;
      if (e === 1) return 0;
      const n = i.manifest.items.slice(0, e - 1).filter((c) => {
        var h;
        return (h = c.behavior) == null ? void 0 : h.includes("non-paged");
      });
      return (e + n.length % 2) % 2 === 1 ? (l = (o = i.manifest.items[e - 1 - 1]) == null ? void 0 : o.behavior) != null && l.includes("non-paged") ? -1 : e - 1 : (u = (a = i.manifest.items[e - 1 + 1]) == null ? void 0 : a.behavior) != null && u.includes("non-paged") ? -1 : e < i.pageCount ? e + 1 : 0;
    }, getPageLabel(e, n) {
      const r = i.localize(n, "");
      return r ? i.options.pageLabelFormat.replace("P", e).replace("L", r) : i.options.pageLabelFormat.includes("P") ? `${e}` : "\u2014";
    }, getStartPages() {
      var n;
      let e = 1;
      if (i.manifest.items && i.manifest.start) {
        const r = i.manifest.items.findIndex((s) => s.id === i.manifest.start.id);
        e = r >= 0 ? r + 1 : 1;
      }
      return i.isContainerWidthAtLeast("medium") && ((n = i.manifest.behavior) != null && n.includes("paged")) ? [e, i.getFacingPage(e)].sort() : [e];
    }, getThumbnailUrl(e, n, r = 0, s = 0) {
      var h, f, m, v, y, x, T;
      const o = i.manifest.items[e - 1], l = (h = o.thumbnail) == null ? void 0 : h[0];
      if (l != null && l.id && (l == null ? void 0 : l.width) >= n) return l.id;
      const a = (y = (v = (m = (f = o.items) == null ? void 0 : f[0]) == null ? void 0 : m.items) == null ? void 0 : v[r]) == null ? void 0 : y.body, u = a != null && a.items ? a.items[s] : a, c = (l == null ? void 0 : l.service) || ((x = u == null ? void 0 : u.source) == null ? void 0 : x.service) || (u == null ? void 0 : u.service);
      if (c) {
        const C = [].concat(c)[0], H = ["ImageService2", "ImageService3"].includes(C.type || C["@type"]) ? "default" : "native", k = C.id || C["@id"];
        let N = n;
        l != null && l.service && ((T = C.sizes) == null || T.forEach((q) => {
          q.width >= N && q.width <= N * 2 && (N = q.width);
        }));
        const Y = "jpg", K = k.at(-1) === "/" ? "" : "/";
        return `${k}${K}full/${N},/0/${H}.${Y}`;
      }
      return (u == null ? void 0 : u.type) === "Image" ? (l == null ? void 0 : l.id) || (u == null ? void 0 : u.id) : "";
    }, goToFirstPage() {
      i.setPage(1);
    }, goToNextPage() {
      const e = i.options.pages.at(-1);
      e < i.pageCount && i.setPage(e + 1);
    }, goToNextSection() {
      const { pages: e } = i.options, n = e.length - 1, r = e[n] ? e[n] : e[n - 1];
      let s = 0;
      for (; r >= i.sections[s].firstPage || r && r >= i.sections[s].firstPage; ) s += 1;
      i.setPage(i.sections[s].firstPage);
    }, goToLastPage() {
      i.setPage(i.pageCount);
    }, goToPreviousPage() {
      const e = i.options.pages.find((n) => n > 0);
      e > 1 && i.setPage(e - 1);
    }, goToPreviousSection() {
      const { pages: e } = i.options, n = e[0] ? e[0] : e[1];
      let r = i.sections.length - 1;
      for (; n <= i.sections[r].firstPage || n && n <= i.sections[r].firstPage; ) r -= 1;
      i.setPage(i.sections[r].firstPage);
    }, isContainerWidthAtLeast(e) {
      return i.rootElement && window.getComputedStyle(i.rootElement, "::after").content.includes(e);
    }, loadAnnotations() {
      var e;
      i.annotationsAvailable = null, (e = i.options.pages) == null || e.filter((n) => n > 0).forEach(async (n) => {
        if (i.annotations[n]) return;
        const r = i.manifest.items[n - 1];
        if (!("annotations" in r)) {
          i.annotationsAvailable = false;
          return;
        }
        i.annotations[n] = [];
        let s = r.annotations[0].items;
        if (!s) {
          const o = r.annotations[0].id;
          try {
            const l = await i.fetchJson(o);
            s = l.resources || l.items;
          } catch (l) {
            const a = l.response ? l.response.statusText : l.message;
            console.warn(`Could not load annotations: ${a}`), i.annotationsAvailable = false;
            return;
          }
        }
        s instanceof Array && s.forEach(async (o, l) => {
          var m, v, y, x, T, C, H, k, N, Y, K, q;
          let a;
          const u = o.id || o["@id"] || ((m = o.resource) == null ? void 0 : m.id) || ((v = o.resource) == null ? void 0 : v["@id"]);
          if ((y = o.resource) != null && y.chars) a = o.resource.chars;
          else if ((T = (x = o.resource) == null ? void 0 : x[0]) != null && T.chars) a = (H = (C = o.resource) == null ? void 0 : C[0]) == null ? void 0 : H.chars;
          else if ((k = o.resource) != null && k.label) a = `<i>${o.resource.label}</i>`;
          else {
            const ee = [].concat(o.body);
            a = (await Promise.all(ee.map(async (te) => {
              var ne, he, ye, me;
              if ((te == null ? void 0 : te.type) === "Image") return `<img src="${te.id}" alt="">`;
              if (te != null && te.value) return te.value;
              if ((ne = te == null ? void 0 : te.body) != null && ne.value) return te.body.value;
              const j = ((he = te == null ? void 0 : te.items) == null ? void 0 : he[0].id) || ((ye = te == null ? void 0 : te.body) == null ? void 0 : ye.id) || ((me = te == null ? void 0 : te.body) == null ? void 0 : me["@id"]) || (te == null ? void 0 : te.id) || u;
              return os(j) ? i.fetchText(j) : "";
            }))).join("<br>");
          }
          if (!a) return;
          (o.format || ((N = o.body) == null ? void 0 : N.format)) === "text/plain" && (a = a.replace(/\n/g, " <br>")), i.annotationsAvailable = true;
          const c = { id: u, html: cn(a) }, h = ((K = (Y = o.on) == null ? void 0 : Y.selector) == null ? void 0 : K.value) || (typeof o.on == "string" ? o.on : null) || ((q = o.target) == null ? void 0 : q.id) || o.target, f = Do(h);
          f && (c.coords = f), i.annotations[n][l] = c;
        });
      });
    }, initOptions(e) {
      let n = {};
      if (i.options.urlQueryKey) try {
        const r = new URLSearchParams(window.location.search);
        n = JSON.parse(r.get(i.options.urlQueryKey)) || {};
      } catch {
      }
      n.view === "fulltext" ? n.view = "text" : ["scan", ""].includes(n.view) && (n.view = null), n.pages && !Ks(n.pages, i.pageCount) && (i.addError("Invalid pages, reset to start page"), n.pages = null), i.options.urlQueryParams.forEach((r) => {
        i.options[r] = n[r] ?? i.options[r];
      }), i.options.pages = e && e.type === "popstate" ? n.pages || i.getStartPages() : n.pages || i.options.pages || i.getStartPages(), i.options.pan = n.panX || n.panY ? { x: n.panX, y: n.panY } : n.pan || i.options.pan, i.options.rotation = parseInt(n.rotation, 10) || i.options.rotation, i.options.view = n.view || n.view === "" ? n.view : i.options.view, i.options.zoom = parseFloat(n.zoom) || i.options.zoom;
    }, loadManifest(e, n = {}) {
      const r = cs();
      return i.fetchJson(e).then(async (s) => {
        const o = zn(s);
        if (n.expectedType && o.type !== n.expectedType) {
          const a = `Expected manifest of type ${n.expectedType}, but got ${o.type}`;
          return i.addError(a), r.reject(a), r;
        }
        if (i.manifest = null, await Yn(), o.type === "Manifest") return i.manifest = o, i.initOptions(), window.addEventListener("popstate", i.initOptions), n.reset && i.updateOptions({ childManifestUrl: e, pages: i.getStartPages(), pan: {}, rotation: null, view: i.isContainerWidthAtLeast("medium") ? "collection" : null, zoom: null }), r.resolve(), r;
        if (o.type === "Collection") {
          i.collection = o;
          const a = new URLSearchParams(window.location.search);
          let u = {};
          try {
            u = JSON.parse(a.get(i.options.urlQueryKey)) || {};
          } catch {
          }
          let c = "";
          if (i.options.urlQueryParams.includes("childManifestUrl") && u.childManifestUrl ? c = u.childManifestUrl : i.collection.manifests && i.options.childManifestAutoloaded && (c = i.collection.manifests[0].id), c) await i.loadManifest(c, { expectedType: "Manifest" }), i.updateOptions({ childManifestUrl: c });
          else {
            const h = u.view || i.options.view;
            i.updateOptions({ view: ["collection", "help", "info"].includes(h) ? h : "collection" });
          }
          return r.resolve(), r;
        }
        const l = "Please provide a valid IIIF Presentation API manifest";
        return i.addError(l), r.reject(l), r;
      }, (s) => {
        const l = `Error loading IIIF manifest: ${s.response && (s.response.statusText || s.response.data) || s.message}`;
        return i.addError(l), r.reject(l), r;
      });
    }, localize(e) {
      if (!i.options.language) throw new Error("language not set");
      if (!e) return "";
      if (typeof e == "string") return e;
      const s = e[i.options.language] || e[i.options.fallbackLanguage] || Object.values(e)[0] || "";
      return ([].concat(s).join("\xA0\xB7 ") || "").trim();
    }, setPage(e) {
      var r;
      let n = [].concat(e);
      if (!Ks(n, i.pageCount)) throw new RangeError("Invalid pages");
      return n.length === 1 && ((r = i.options.pages) == null ? void 0 : r.length) === 2 && !this.isCustomPageView && (n = [n[0], i.getFacingPage(n[0])].sort()), i.updateOptions({ pages: n }), n;
    }, toggleAnnotationId(e) {
      const n = { annotationId: i.options.annotationId === e ? null : e, annotationsVisible: i.options.annotationId ? null : i.annotationsVisible };
      n.annotationId && !i.isContainerWidthAtLeast("medium") && (n.view = i.options.view ? null : "text"), i.updateOptions(n);
    }, updateOptions(e) {
      clearTimeout(i.urlUpdateTimeout), Object.assign(i.options, e), e.pages && i.clearErrors(), i.options.urlQueryKey && (i.urlUpdateTimeout = setTimeout(() => {
        const n = {};
        i.options.urlQueryParams.forEach((s) => {
          const o = i.options[s];
          o === null || s === "layers" && !o.some(Boolean) || s === "pages" && o.toString() === i.getStartPages().toString() || typeof o == "object" && !Object.keys(o).length ? delete n[s] : n[s] = i.options[s];
        });
        const r = new URL(window.location);
        Object.keys(n).length ? r.searchParams.set(i.options.urlQueryKey, JSON.stringify(n)) : r.searchParams.delete(i.options.urlQueryKey), window.history && (e.pages || e.view ? window.history.pushState({}, "", r) : window.history.replaceState({}, "", r));
      }, 100));
    } });
    return i;
  }
  var n1 = { convertManifest: zn, install: (t, i = {}) => {
    t.config.globalProperties.$store = new i1(i);
  } };
  window.Tify = function(i = {}) {
    if (this.options = { ...JSON.parse(JSON.stringify(jv)), ...i }, !this.options.translationsDirUrl) try {
      const { url: s } = import_meta;
      this.options.translationsDirUrl = `${s.slice(0, s.lastIndexOf("/"))}/translations`;
    } catch {
    }
    let e = null;
    this.ready = new Promise((s, o) => {
      e = { resolve: s, reject: o };
    });
    const n = this;
    this.app = gu({ render: () => Wl(Wv, { readyPromise: e }) }).use(qv, { instance: n }).use(Yv).use(Jv).use(n1, { options: this.options });
    let r = false;
    this.mount = (s) => {
      if (r) throw new Error("TIFY is already mounted");
      const o = typeof s == "string" ? document.querySelector(s) : s;
      if (!o) throw new Error("Container element not found");
      this.app.mount(o), r = true;
    }, this.destroy = () => {
      this.app.unmount();
    }, this.options.container && this.mount(this.options.container);
  };
  var a1 = window.Tify;

  // <stdin>
  function addTify(selector, uri, lang = "en") {
    if (document.documentElement.lang !== void 0) {
      lang = document.documentElement.lang;
    }
    const tify = new Tify({
      container: selector,
      manifestUrl: uri,
      language: lang,
      translationsDirUrl: "/tify/translations/"
    });
    return tify;
  }
  window.iiifPresentationViewer = addTify;
})();
/*! Bundled license information:

tify/dist/tify.js:
  (*!
  TIFY v0.35.0
  (c) 2017-2026 Göttingen State and University Library (https://www.sub.uni-goettingen.de/)
  AGPL-3.0
  https://tify.rocks/
  *)
  (**
  * @vue/shared v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/reactivity v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (**
  * @vue/runtime-core v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)

tify/dist/tify.js:
  (**
  * @vue/runtime-dom v3.5.27
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
  (*! openseadragon 5.0.1 *)
  (*! Built on 2024-12-09 *)
  (*! Git commit: v5.0.1-0-480de92d *)
  (*! http://openseadragon.github.io *)
  (*! License: http://openseadragon.github.io/license/ *)
*/
