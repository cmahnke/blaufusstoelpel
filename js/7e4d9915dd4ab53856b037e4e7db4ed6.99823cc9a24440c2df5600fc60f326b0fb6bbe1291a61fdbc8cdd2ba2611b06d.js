(()=>{var Yu=Object.create;var zo=Object.defineProperty;var Uu=Object.getOwnPropertyDescriptor;var Ku=Object.getOwnPropertyNames;var Gu=Object.getPrototypeOf,Xu=Object.prototype.hasOwnProperty;var Yt=(_,w)=>()=>(w||_((w={exports:{}}).exports,w),w.exports);var Qu=(_,w,n,s)=>{if(w&&typeof w=="object"||typeof w=="function")for(let h of Ku(w))!Xu.call(_,h)&&h!==n&&zo(_,h,{get:()=>w[h],enumerable:!(s=Uu(w,h))||s.enumerable});return _};var Ns=(_,w,n)=>(n=_!=null?Yu(Gu(_)):{},Qu(w||!_||!_.__esModule?zo(n,"default",{value:_,enumerable:!0}):n,_));var Is=Yt((jo,Ir)=>{(function(_,w){"use strict";typeof Ir=="object"&&typeof Ir.exports=="object"?Ir.exports=_.document?w(_,!0):function(n){if(!n.document)throw new Error("jQuery requires a window with a document");return w(n)}:w(_)})(typeof window<"u"?window:jo,function(_,w){"use strict";var n=[],s=Object.getPrototypeOf,h=n.slice,v=n.flat?function(t){return n.flat.call(t)}:function(t){return n.concat.apply([],t)},m=n.push,x=n.indexOf,H={},G=H.toString,k=H.hasOwnProperty,N=k.toString,R=N.call(Object),B={},F=function(i){return typeof i=="function"&&typeof i.nodeType!="number"&&typeof i.item!="function"},C=function(i){return i!=null&&i===i.window},p=_.document,S={type:!0,src:!0,nonce:!0,noModule:!0};function z(t,i,r){r=r||p;var o,c,f=r.createElement("script");if(f.text=t,i)for(o in S)c=i[o]||i.getAttribute&&i.getAttribute(o),c&&f.setAttribute(o,c);r.head.appendChild(f).parentNode.removeChild(f)}function K(t){return t==null?t+"":typeof t=="object"||typeof t=="function"?H[G.call(t)]||"object":typeof t}var tt="3.7.1",at=/HTML$/i,l=function(t,i){return new l.fn.init(t,i)};l.fn=l.prototype={jquery:tt,constructor:l,length:0,toArray:function(){return h.call(this)},get:function(t){return t==null?h.call(this):t<0?this[t+this.length]:this[t]},pushStack:function(t){var i=l.merge(this.constructor(),t);return i.prevObject=this,i},each:function(t){return l.each(this,t)},map:function(t){return this.pushStack(l.map(this,function(i,r){return t.call(i,r,i)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(t,i){return(i+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(t,i){return i%2}))},eq:function(t){var i=this.length,r=+t+(t<0?i:0);return this.pushStack(r>=0&&r<i?[this[r]]:[])},end:function(){return this.prevObject||this.constructor()},push:m,sort:n.sort,splice:n.splice},l.extend=l.fn.extend=function(){var t,i,r,o,c,f,d=arguments[0]||{},T=1,b=arguments.length,O=!1;for(typeof d=="boolean"&&(O=d,d=arguments[T]||{},T++),typeof d!="object"&&!F(d)&&(d={}),T===b&&(d=this,T--);T<b;T++)if((t=arguments[T])!=null)for(i in t)o=t[i],!(i==="__proto__"||d===o)&&(O&&o&&(l.isPlainObject(o)||(c=Array.isArray(o)))?(r=d[i],c&&!Array.isArray(r)?f=[]:!c&&!l.isPlainObject(r)?f={}:f=r,c=!1,d[i]=l.extend(O,f,o)):o!==void 0&&(d[i]=o));return d},l.extend({expando:"jQuery"+(tt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(t){throw new Error(t)},noop:function(){},isPlainObject:function(t){var i,r;return!t||G.call(t)!=="[object Object]"?!1:(i=s(t),i?(r=k.call(i,"constructor")&&i.constructor,typeof r=="function"&&N.call(r)===R):!0)},isEmptyObject:function(t){var i;for(i in t)return!1;return!0},globalEval:function(t,i,r){z(t,{nonce:i&&i.nonce},r)},each:function(t,i){var r,o=0;if(wt(t))for(r=t.length;o<r&&i.call(t[o],o,t[o])!==!1;o++);else for(o in t)if(i.call(t[o],o,t[o])===!1)break;return t},text:function(t){var i,r="",o=0,c=t.nodeType;if(!c)for(;i=t[o++];)r+=l.text(i);return c===1||c===11?t.textContent:c===9?t.documentElement.textContent:c===3||c===4?t.nodeValue:r},makeArray:function(t,i){var r=i||[];return t!=null&&(wt(Object(t))?l.merge(r,typeof t=="string"?[t]:t):m.call(r,t)),r},inArray:function(t,i,r){return i==null?-1:x.call(i,t,r)},isXMLDoc:function(t){var i=t&&t.namespaceURI,r=t&&(t.ownerDocument||t).documentElement;return!at.test(i||r&&r.nodeName||"HTML")},merge:function(t,i){for(var r=+i.length,o=0,c=t.length;o<r;o++)t[c++]=i[o];return t.length=c,t},grep:function(t,i,r){for(var o,c=[],f=0,d=t.length,T=!r;f<d;f++)o=!i(t[f],f),o!==T&&c.push(t[f]);return c},map:function(t,i,r){var o,c,f=0,d=[];if(wt(t))for(o=t.length;f<o;f++)c=i(t[f],f,r),c!=null&&d.push(c);else for(f in t)c=i(t[f],f,r),c!=null&&d.push(c);return v(d)},guid:1,support:B}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=n[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(t,i){H["[object "+i+"]"]=i.toLowerCase()});function wt(t){var i=!!t&&"length"in t&&t.length,r=K(t);return F(t)||C(t)?!1:r==="array"||i===0||typeof i=="number"&&i>0&&i-1 in t}function ct(t,i){return t.nodeName&&t.nodeName.toLowerCase()===i.toLowerCase()}var pe=n.pop,Ze=n.sort,zi=n.splice,Tt="[\\x20\\t\\r\\n\\f]",ti=new RegExp("^"+Tt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Tt+"+$","g");l.contains=function(t,i){var r=i&&i.parentNode;return t===r||!!(r&&r.nodeType===1&&(t.contains?t.contains(r):t.compareDocumentPosition&&t.compareDocumentPosition(r)&16))};var Yn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function Yr(t,i){return i?t==="\0"?"\uFFFD":t.slice(0,-1)+"\\"+t.charCodeAt(t.length-1).toString(16)+" ":"\\"+t}l.escapeSelector=function(t){return(t+"").replace(Yn,Yr)};var be=p,ji=m;(function(){var t,i,r,o,c,f=ji,d,T,b,O,M,j=l.expando,L=0,Y=0,st=Zi(),pt=Zi(),dt=Zi(),Mt=Zi(),Dt=function(y,A){return y===A&&(c=!0),0},ue="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Qt="(?:\\\\[\\da-fA-F]{1,6}"+Tt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",vt="\\["+Tt+"*("+Qt+")(?:"+Tt+"*([*^$|!~]?=)"+Tt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Qt+"))|)"+Tt+"*\\]",Me=":("+Qt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+vt+")*)|.*)\\)|)",bt=new RegExp(Tt+"+","g"),Lt=new RegExp("^"+Tt+"*,"+Tt+"*"),wi=new RegExp("^"+Tt+"*([>+~]|"+Tt+")"+Tt+"*"),Ln=new RegExp(Tt+"|>"),Se=new RegExp(Me),fi=new RegExp("^"+Qt+"$"),Bt={ID:new RegExp("^#("+Qt+")"),CLASS:new RegExp("^\\.("+Qt+")"),TAG:new RegExp("^("+Qt+"|[*])"),ATTR:new RegExp("^"+vt),PSEUDO:new RegExp("^"+Me),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Tt+"*(even|odd|(([+-]|)(\\d*)n|)"+Tt+"*(?:([+-]|)"+Tt+"*(\\d+)|))"+Tt+"*\\)|)","i"),bool:new RegExp("^(?:"+ue+")$","i"),needsContext:new RegExp("^"+Tt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Tt+"*((?:-\\d)?\\d*)"+Tt+"*\\)|)(?=[^-]|$)","i")},He=/^(?:input|select|textarea|button)$/i,Re=/^h\d$/i,ne=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Nn=/[+~]/,ye=new RegExp("\\\\[\\da-fA-F]{1,6}"+Tt+"?|\\\\([^\\r\\n\\f])","g"),ce=function(y,A){var I="0x"+y.slice(1)-65536;return A||(I<0?String.fromCharCode(I+65536):String.fromCharCode(I>>10|55296,I&1023|56320))},fs=function(){de()},In=nn(function(y){return y.disabled===!0&&ct(y,"fieldset")},{dir:"parentNode",next:"legend"});function ds(){try{return d.activeElement}catch{}}try{f.apply(n=h.call(be.childNodes),be.childNodes),n[be.childNodes.length].nodeType}catch{f={apply:function(A,I){ji.apply(A,h.call(I))},call:function(A){ji.apply(A,h.call(arguments,1))}}}function St(y,A,I,P){var W,Q,J,et,Z,gt,lt,ut=A&&A.ownerDocument,mt=A?A.nodeType:9;if(I=I||[],typeof y!="string"||!y||mt!==1&&mt!==9&&mt!==11)return I;if(!P&&(de(A),A=A||d,b)){if(mt!==11&&(Z=ne.exec(y)))if(W=Z[1]){if(mt===9)if(J=A.getElementById(W)){if(J.id===W)return f.call(I,J),I}else return I;else if(ut&&(J=ut.getElementById(W))&&St.contains(A,J)&&J.id===W)return f.call(I,J),I}else{if(Z[2])return f.apply(I,A.getElementsByTagName(y)),I;if((W=Z[3])&&A.getElementsByClassName)return f.apply(I,A.getElementsByClassName(W)),I}if(!Mt[y+" "]&&(!O||!O.test(y))){if(lt=y,ut=A,mt===1&&(Ln.test(y)||wi.test(y))){for(ut=Nn.test(y)&&tn(A.parentNode)||A,(ut!=A||!B.scope)&&((et=A.getAttribute("id"))?et=l.escapeSelector(et):A.setAttribute("id",et=j)),gt=Ci(y),Q=gt.length;Q--;)gt[Q]=(et?"#"+et:":scope")+" "+Ai(gt[Q]);lt=gt.join(",")}try{return f.apply(I,ut.querySelectorAll(lt)),I}catch{Mt(y,!0)}finally{et===j&&A.removeAttribute("id")}}}return Rn(y.replace(ti,"$1"),A,I,P)}function Zi(){var y=[];function A(I,P){return y.push(I+" ")>i.cacheLength&&delete A[y.shift()],A[I+" "]=P}return A}function fe(y){return y[j]=!0,y}function ze(y){var A=d.createElement("fieldset");try{return!!y(A)}catch{return!1}finally{A.parentNode&&A.parentNode.removeChild(A),A=null}}function $n(y){return function(A){return ct(A,"input")&&A.type===y}}function hs(y){return function(A){return(ct(A,"input")||ct(A,"button"))&&A.type===y}}function yr(y){return function(A){return"form"in A?A.parentNode&&A.disabled===!1?"label"in A?"label"in A.parentNode?A.parentNode.disabled===y:A.disabled===y:A.isDisabled===y||A.isDisabled!==!y&&In(A)===y:A.disabled===y:"label"in A?A.disabled===y:!1}}function ke(y){return fe(function(A){return A=+A,fe(function(I,P){for(var W,Q=y([],I.length,A),J=Q.length;J--;)I[W=Q[J]]&&(I[W]=!(P[W]=I[W]))})})}function tn(y){return y&&typeof y.getElementsByTagName<"u"&&y}function de(y){var A,I=y?y.ownerDocument||y:be;return I==d||I.nodeType!==9||!I.documentElement||(d=I,T=d.documentElement,b=!l.isXMLDoc(d),M=T.matches||T.webkitMatchesSelector||T.msMatchesSelector,T.msMatchesSelector&&be!=d&&(A=d.defaultView)&&A.top!==A&&A.addEventListener("unload",fs),B.getById=ze(function(P){return T.appendChild(P).id=l.expando,!d.getElementsByName||!d.getElementsByName(l.expando).length}),B.disconnectedMatch=ze(function(P){return M.call(P,"*")}),B.scope=ze(function(){return d.querySelectorAll(":scope")}),B.cssHas=ze(function(){try{return d.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),B.getById?(i.filter.ID=function(P){var W=P.replace(ye,ce);return function(Q){return Q.getAttribute("id")===W}},i.find.ID=function(P,W){if(typeof W.getElementById<"u"&&b){var Q=W.getElementById(P);return Q?[Q]:[]}}):(i.filter.ID=function(P){var W=P.replace(ye,ce);return function(Q){var J=typeof Q.getAttributeNode<"u"&&Q.getAttributeNode("id");return J&&J.value===W}},i.find.ID=function(P,W){if(typeof W.getElementById<"u"&&b){var Q,J,et,Z=W.getElementById(P);if(Z){if(Q=Z.getAttributeNode("id"),Q&&Q.value===P)return[Z];for(et=W.getElementsByName(P),J=0;Z=et[J++];)if(Q=Z.getAttributeNode("id"),Q&&Q.value===P)return[Z]}return[]}}),i.find.TAG=function(P,W){return typeof W.getElementsByTagName<"u"?W.getElementsByTagName(P):W.querySelectorAll(P)},i.find.CLASS=function(P,W){if(typeof W.getElementsByClassName<"u"&&b)return W.getElementsByClassName(P)},O=[],ze(function(P){var W;T.appendChild(P).innerHTML="<a id='"+j+"' href='' disabled='disabled'></a><select id='"+j+"-\r\\' disabled='disabled'><option selected=''></option></select>",P.querySelectorAll("[selected]").length||O.push("\\["+Tt+"*(?:value|"+ue+")"),P.querySelectorAll("[id~="+j+"-]").length||O.push("~="),P.querySelectorAll("a#"+j+"+*").length||O.push(".#.+[+~]"),P.querySelectorAll(":checked").length||O.push(":checked"),W=d.createElement("input"),W.setAttribute("type","hidden"),P.appendChild(W).setAttribute("name","D"),T.appendChild(P).disabled=!0,P.querySelectorAll(":disabled").length!==2&&O.push(":enabled",":disabled"),W=d.createElement("input"),W.setAttribute("name",""),P.appendChild(W),P.querySelectorAll("[name='']").length||O.push("\\["+Tt+"*name"+Tt+"*="+Tt+`*(?:''|"")`)}),B.cssHas||O.push(":has"),O=O.length&&new RegExp(O.join("|")),Dt=function(P,W){if(P===W)return c=!0,0;var Q=!P.compareDocumentPosition-!W.compareDocumentPosition;return Q||(Q=(P.ownerDocument||P)==(W.ownerDocument||W)?P.compareDocumentPosition(W):1,Q&1||!B.sortDetached&&W.compareDocumentPosition(P)===Q?P===d||P.ownerDocument==be&&St.contains(be,P)?-1:W===d||W.ownerDocument==be&&St.contains(be,W)?1:o?x.call(o,P)-x.call(o,W):0:Q&4?-1:1)}),d}St.matches=function(y,A){return St(y,null,null,A)},St.matchesSelector=function(y,A){if(de(y),b&&!Mt[A+" "]&&(!O||!O.test(A)))try{var I=M.call(y,A);if(I||B.disconnectedMatch||y.document&&y.document.nodeType!==11)return I}catch{Mt(A,!0)}return St(A,d,null,[y]).length>0},St.contains=function(y,A){return(y.ownerDocument||y)!=d&&de(y),l.contains(y,A)},St.attr=function(y,A){(y.ownerDocument||y)!=d&&de(y);var I=i.attrHandle[A.toLowerCase()],P=I&&k.call(i.attrHandle,A.toLowerCase())?I(y,A,!b):void 0;return P!==void 0?P:y.getAttribute(A)},St.error=function(y){throw new Error("Syntax error, unrecognized expression: "+y)},l.uniqueSort=function(y){var A,I=[],P=0,W=0;if(c=!B.sortStable,o=!B.sortStable&&h.call(y,0),Ze.call(y,Dt),c){for(;A=y[W++];)A===y[W]&&(P=I.push(W));for(;P--;)zi.call(y,I[P],1)}return o=null,y},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(h.apply(this)))},i=l.expr={cacheLength:50,createPseudo:fe,match:Bt,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(y){return y[1]=y[1].replace(ye,ce),y[3]=(y[3]||y[4]||y[5]||"").replace(ye,ce),y[2]==="~="&&(y[3]=" "+y[3]+" "),y.slice(0,4)},CHILD:function(y){return y[1]=y[1].toLowerCase(),y[1].slice(0,3)==="nth"?(y[3]||St.error(y[0]),y[4]=+(y[4]?y[5]+(y[6]||1):2*(y[3]==="even"||y[3]==="odd")),y[5]=+(y[7]+y[8]||y[3]==="odd")):y[3]&&St.error(y[0]),y},PSEUDO:function(y){var A,I=!y[6]&&y[2];return Bt.CHILD.test(y[0])?null:(y[3]?y[2]=y[4]||y[5]||"":I&&Se.test(I)&&(A=Ci(I,!0))&&(A=I.indexOf(")",I.length-A)-I.length)&&(y[0]=y[0].slice(0,A),y[2]=I.slice(0,A)),y.slice(0,3))}},filter:{TAG:function(y){var A=y.replace(ye,ce).toLowerCase();return y==="*"?function(){return!0}:function(I){return ct(I,A)}},CLASS:function(y){var A=st[y+" "];return A||(A=new RegExp("(^|"+Tt+")"+y+"("+Tt+"|$)"))&&st(y,function(I){return A.test(typeof I.className=="string"&&I.className||typeof I.getAttribute<"u"&&I.getAttribute("class")||"")})},ATTR:function(y,A,I){return function(P){var W=St.attr(P,y);return W==null?A==="!=":A?(W+="",A==="="?W===I:A==="!="?W!==I:A==="^="?I&&W.indexOf(I)===0:A==="*="?I&&W.indexOf(I)>-1:A==="$="?I&&W.slice(-I.length)===I:A==="~="?(" "+W.replace(bt," ")+" ").indexOf(I)>-1:A==="|="?W===I||W.slice(0,I.length+1)===I+"-":!1):!0}},CHILD:function(y,A,I,P,W){var Q=y.slice(0,3)!=="nth",J=y.slice(-4)!=="last",et=A==="of-type";return P===1&&W===0?function(Z){return!!Z.parentNode}:function(Z,gt,lt){var ut,mt,ot,At,Jt,zt=Q!==J?"nextSibling":"previousSibling",he=Z.parentNode,we=et&&Z.nodeName.toLowerCase(),Xe=!lt&&!et,jt=!1;if(he){if(Q){for(;zt;){for(ot=Z;ot=ot[zt];)if(et?ct(ot,we):ot.nodeType===1)return!1;Jt=zt=y==="only"&&!Jt&&"nextSibling"}return!0}if(Jt=[J?he.firstChild:he.lastChild],J&&Xe){for(mt=he[j]||(he[j]={}),ut=mt[y]||[],At=ut[0]===L&&ut[1],jt=At&&ut[2],ot=At&&he.childNodes[At];ot=++At&&ot&&ot[zt]||(jt=At=0)||Jt.pop();)if(ot.nodeType===1&&++jt&&ot===Z){mt[y]=[L,At,jt];break}}else if(Xe&&(mt=Z[j]||(Z[j]={}),ut=mt[y]||[],At=ut[0]===L&&ut[1],jt=At),jt===!1)for(;(ot=++At&&ot&&ot[zt]||(jt=At=0)||Jt.pop())&&!((et?ct(ot,we):ot.nodeType===1)&&++jt&&(Xe&&(mt=ot[j]||(ot[j]={}),mt[y]=[L,jt]),ot===Z)););return jt-=W,jt===P||jt%P===0&&jt/P>=0}}},PSEUDO:function(y,A){var I,P=i.pseudos[y]||i.setFilters[y.toLowerCase()]||St.error("unsupported pseudo: "+y);return P[j]?P(A):P.length>1?(I=[y,y,"",A],i.setFilters.hasOwnProperty(y.toLowerCase())?fe(function(W,Q){for(var J,et=P(W,A),Z=et.length;Z--;)J=x.call(W,et[Z]),W[J]=!(Q[J]=et[Z])}):function(W){return P(W,0,I)}):P}},pseudos:{not:fe(function(y){var A=[],I=[],P=rn(y.replace(ti,"$1"));return P[j]?fe(function(W,Q,J,et){for(var Z,gt=P(W,null,et,[]),lt=W.length;lt--;)(Z=gt[lt])&&(W[lt]=!(Q[lt]=Z))}):function(W,Q,J){return A[0]=W,P(A,null,J,I),A[0]=null,!I.pop()}}),has:fe(function(y){return function(A){return St(y,A).length>0}}),contains:fe(function(y){return y=y.replace(ye,ce),function(A){return(A.textContent||l.text(A)).indexOf(y)>-1}}),lang:fe(function(y){return fi.test(y||"")||St.error("unsupported lang: "+y),y=y.replace(ye,ce).toLowerCase(),function(A){var I;do if(I=b?A.lang:A.getAttribute("xml:lang")||A.getAttribute("lang"))return I=I.toLowerCase(),I===y||I.indexOf(y+"-")===0;while((A=A.parentNode)&&A.nodeType===1);return!1}}),target:function(y){var A=_.location&&_.location.hash;return A&&A.slice(1)===y.id},root:function(y){return y===T},focus:function(y){return y===ds()&&d.hasFocus()&&!!(y.type||y.href||~y.tabIndex)},enabled:yr(!1),disabled:yr(!0),checked:function(y){return ct(y,"input")&&!!y.checked||ct(y,"option")&&!!y.selected},selected:function(y){return y.parentNode&&y.parentNode.selectedIndex,y.selected===!0},empty:function(y){for(y=y.firstChild;y;y=y.nextSibling)if(y.nodeType<6)return!1;return!0},parent:function(y){return!i.pseudos.empty(y)},header:function(y){return Re.test(y.nodeName)},input:function(y){return He.test(y.nodeName)},button:function(y){return ct(y,"input")&&y.type==="button"||ct(y,"button")},text:function(y){var A;return ct(y,"input")&&y.type==="text"&&((A=y.getAttribute("type"))==null||A.toLowerCase()==="text")},first:ke(function(){return[0]}),last:ke(function(y,A){return[A-1]}),eq:ke(function(y,A,I){return[I<0?I+A:I]}),even:ke(function(y,A){for(var I=0;I<A;I+=2)y.push(I);return y}),odd:ke(function(y,A){for(var I=1;I<A;I+=2)y.push(I);return y}),lt:ke(function(y,A,I){var P;for(I<0?P=I+A:I>A?P=A:P=I;--P>=0;)y.push(P);return y}),gt:ke(function(y,A,I){for(var P=I<0?I+A:I;++P<A;)y.push(P);return y})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=$n(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=hs(t);function en(){}en.prototype=i.filters=i.pseudos,i.setFilters=new en;function Ci(y,A){var I,P,W,Q,J,et,Z,gt=pt[y+" "];if(gt)return A?0:gt.slice(0);for(J=y,et=[],Z=i.preFilter;J;){(!I||(P=Lt.exec(J)))&&(P&&(J=J.slice(P[0].length)||J),et.push(W=[])),I=!1,(P=wi.exec(J))&&(I=P.shift(),W.push({value:I,type:P[0].replace(ti," ")}),J=J.slice(I.length));for(Q in i.filter)(P=Bt[Q].exec(J))&&(!Z[Q]||(P=Z[Q](P)))&&(I=P.shift(),W.push({value:I,type:Q,matches:P}),J=J.slice(I.length));if(!I)break}return A?J.length:J?St.error(y):pt(y,et).slice(0)}function Ai(y){for(var A=0,I=y.length,P="";A<I;A++)P+=y[A].value;return P}function nn(y,A,I){var P=A.dir,W=A.next,Q=W||P,J=I&&Q==="parentNode",et=Y++;return A.first?function(Z,gt,lt){for(;Z=Z[P];)if(Z.nodeType===1||J)return y(Z,gt,lt);return!1}:function(Z,gt,lt){var ut,mt,ot=[L,et];if(lt){for(;Z=Z[P];)if((Z.nodeType===1||J)&&y(Z,gt,lt))return!0}else for(;Z=Z[P];)if(Z.nodeType===1||J)if(mt=Z[j]||(Z[j]={}),W&&ct(Z,W))Z=Z[P]||Z;else{if((ut=mt[Q])&&ut[0]===L&&ut[1]===et)return ot[2]=ut[2];if(mt[Q]=ot,ot[2]=y(Z,gt,lt))return!0}return!1}}function Pn(y){return y.length>1?function(A,I,P){for(var W=y.length;W--;)if(!y[W](A,I,P))return!1;return!0}:y[0]}function _r(y,A,I){for(var P=0,W=A.length;P<W;P++)St(y,A[P],I);return I}function De(y,A,I,P,W){for(var Q,J=[],et=0,Z=y.length,gt=A!=null;et<Z;et++)(Q=y[et])&&(!I||I(Q,P,W))&&(J.push(Q),gt&&A.push(et));return J}function Mn(y,A,I,P,W,Q){return P&&!P[j]&&(P=Mn(P)),W&&!W[j]&&(W=Mn(W,Q)),fe(function(J,et,Z,gt){var lt,ut,mt,ot,At=[],Jt=[],zt=et.length,he=J||_r(A||"*",Z.nodeType?[Z]:Z,[]),we=y&&(J||!A)?De(he,At,y,Z,gt):he;if(I?(ot=W||(J?y:zt||P)?[]:et,I(we,ot,Z,gt)):ot=we,P)for(lt=De(ot,Jt),P(lt,[],Z,gt),ut=lt.length;ut--;)(mt=lt[ut])&&(ot[Jt[ut]]=!(we[Jt[ut]]=mt));if(J){if(W||y){if(W){for(lt=[],ut=ot.length;ut--;)(mt=ot[ut])&&lt.push(we[ut]=mt);W(null,ot=[],lt,gt)}for(ut=ot.length;ut--;)(mt=ot[ut])&&(lt=W?x.call(J,mt):At[ut])>-1&&(J[lt]=!(et[lt]=mt))}}else ot=De(ot===et?ot.splice(zt,ot.length):ot),W?W(null,et,ot,gt):f.apply(et,ot)})}function Hn(y){for(var A,I,P,W=y.length,Q=i.relative[y[0].type],J=Q||i.relative[" "],et=Q?1:0,Z=nn(function(ut){return ut===A},J,!0),gt=nn(function(ut){return x.call(A,ut)>-1},J,!0),lt=[function(ut,mt,ot){var At=!Q&&(ot||mt!=r)||((A=mt).nodeType?Z(ut,mt,ot):gt(ut,mt,ot));return A=null,At}];et<W;et++)if(I=i.relative[y[et].type])lt=[nn(Pn(lt),I)];else{if(I=i.filter[y[et].type].apply(null,y[et].matches),I[j]){for(P=++et;P<W&&!i.relative[y[P].type];P++);return Mn(et>1&&Pn(lt),et>1&&Ai(y.slice(0,et-1).concat({value:y[et-2].type===" "?"*":""})).replace(ti,"$1"),I,et<P&&Hn(y.slice(et,P)),P<W&&Hn(y=y.slice(P)),P<W&&Ai(y))}lt.push(I)}return Pn(lt)}function ps(y,A){var I=A.length>0,P=y.length>0,W=function(Q,J,et,Z,gt){var lt,ut,mt,ot=0,At="0",Jt=Q&&[],zt=[],he=r,we=Q||P&&i.find.TAG("*",gt),Xe=L+=he==null?1:Math.random()||.1,jt=we.length;for(gt&&(r=J==d||J||gt);At!==jt&&(lt=we[At])!=null;At++){if(P&&lt){for(ut=0,!J&&lt.ownerDocument!=d&&(de(lt),et=!b);mt=y[ut++];)if(mt(lt,J||d,et)){f.call(Z,lt);break}gt&&(L=Xe)}I&&((lt=!mt&&lt)&&ot--,Q&&Jt.push(lt))}if(ot+=At,I&&At!==ot){for(ut=0;mt=A[ut++];)mt(Jt,zt,J,et);if(Q){if(ot>0)for(;At--;)Jt[At]||zt[At]||(zt[At]=pe.call(Z));zt=De(zt)}f.apply(Z,zt),gt&&!Q&&zt.length>0&&ot+A.length>1&&l.uniqueSort(Z)}return gt&&(L=Xe,r=he),Jt};return I?fe(W):W}function rn(y,A){var I,P=[],W=[],Q=dt[y+" "];if(!Q){for(A||(A=Ci(y)),I=A.length;I--;)Q=Hn(A[I]),Q[j]?P.push(Q):W.push(Q);Q=dt(y,ps(W,P)),Q.selector=y}return Q}function Rn(y,A,I,P){var W,Q,J,et,Z,gt=typeof y=="function"&&y,lt=!P&&Ci(y=gt.selector||y);if(I=I||[],lt.length===1){if(Q=lt[0]=lt[0].slice(0),Q.length>2&&(J=Q[0]).type==="ID"&&A.nodeType===9&&b&&i.relative[Q[1].type]){if(A=(i.find.ID(J.matches[0].replace(ye,ce),A)||[])[0],A)gt&&(A=A.parentNode);else return I;y=y.slice(Q.shift().value.length)}for(W=Bt.needsContext.test(y)?0:Q.length;W--&&(J=Q[W],!i.relative[et=J.type]);)if((Z=i.find[et])&&(P=Z(J.matches[0].replace(ye,ce),Nn.test(Q[0].type)&&tn(A.parentNode)||A))){if(Q.splice(W,1),y=P.length&&Ai(Q),!y)return f.apply(I,P),I;break}}return(gt||rn(y,lt))(P,A,!b,I,!A||Nn.test(y)&&tn(A.parentNode)||A),I}B.sortStable=j.split("").sort(Dt).join("")===j,de(),B.sortDetached=ze(function(y){return y.compareDocumentPosition(d.createElement("fieldset"))&1}),l.find=St,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,St.compile=rn,St.select=Rn,St.setDocument=de,St.tokenize=Ci,St.escape=l.escapeSelector,St.getText=l.text,St.isXML=l.isXMLDoc,St.selectors=l.expr,St.support=l.support,St.uniqueSort=l.uniqueSort})();var ei=function(t,i,r){for(var o=[],c=r!==void 0;(t=t[i])&&t.nodeType!==9;)if(t.nodeType===1){if(c&&l(t).is(r))break;o.push(t)}return o},Un=function(t,i){for(var r=[];t;t=t.nextSibling)t.nodeType===1&&t!==i&&r.push(t);return r},un=l.expr.match.needsContext,cn=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Wi(t,i,r){return F(i)?l.grep(t,function(o,c){return!!i.call(o,c,o)!==r}):i.nodeType?l.grep(t,function(o){return o===i!==r}):typeof i!="string"?l.grep(t,function(o){return x.call(i,o)>-1!==r}):l.filter(i,t,r)}l.filter=function(t,i,r){var o=i[0];return r&&(t=":not("+t+")"),i.length===1&&o.nodeType===1?l.find.matchesSelector(o,t)?[o]:[]:l.find.matches(t,l.grep(i,function(c){return c.nodeType===1}))},l.fn.extend({find:function(t){var i,r,o=this.length,c=this;if(typeof t!="string")return this.pushStack(l(t).filter(function(){for(i=0;i<o;i++)if(l.contains(c[i],this))return!0}));for(r=this.pushStack([]),i=0;i<o;i++)l.find(t,c[i],r);return o>1?l.uniqueSort(r):r},filter:function(t){return this.pushStack(Wi(this,t||[],!1))},not:function(t){return this.pushStack(Wi(this,t||[],!0))},is:function(t){return!!Wi(this,typeof t=="string"&&un.test(t)?l(t):t||[],!1).length}});var qi,Ur=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Kn=l.fn.init=function(t,i,r){var o,c;if(!t)return this;if(r=r||qi,typeof t=="string")if(t[0]==="<"&&t[t.length-1]===">"&&t.length>=3?o=[null,t,null]:o=Ur.exec(t),o&&(o[1]||!i))if(o[1]){if(i=i instanceof l?i[0]:i,l.merge(this,l.parseHTML(o[1],i&&i.nodeType?i.ownerDocument||i:p,!0)),cn.test(o[1])&&l.isPlainObject(i))for(o in i)F(this[o])?this[o](i[o]):this.attr(o,i[o]);return this}else return c=p.getElementById(o[2]),c&&(this[0]=c,this.length=1),this;else return!i||i.jquery?(i||r).find(t):this.constructor(i).find(t);else{if(t.nodeType)return this[0]=t,this.length=1,this;if(F(t))return r.ready!==void 0?r.ready(t):t(l)}return l.makeArray(t,this)};Kn.prototype=l.fn,qi=l(p);var V=/^(?:parents|prev(?:Until|All))/,fn={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(t){var i=l(t,this),r=i.length;return this.filter(function(){for(var o=0;o<r;o++)if(l.contains(this,i[o]))return!0})},closest:function(t,i){var r,o=0,c=this.length,f=[],d=typeof t!="string"&&l(t);if(!un.test(t)){for(;o<c;o++)for(r=this[o];r&&r!==i;r=r.parentNode)if(r.nodeType<11&&(d?d.index(r)>-1:r.nodeType===1&&l.find.matchesSelector(r,t))){f.push(r);break}}return this.pushStack(f.length>1?l.uniqueSort(f):f)},index:function(t){return t?typeof t=="string"?x.call(l(t),this[0]):x.call(this,t.jquery?t[0]:t):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(t,i){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(t,i))))},addBack:function(t){return this.add(t==null?this.prevObject:this.prevObject.filter(t))}});function dn(t,i){for(;(t=t[i])&&t.nodeType!==1;);return t}l.each({parent:function(t){var i=t.parentNode;return i&&i.nodeType!==11?i:null},parents:function(t){return ei(t,"parentNode")},parentsUntil:function(t,i,r){return ei(t,"parentNode",r)},next:function(t){return dn(t,"nextSibling")},prev:function(t){return dn(t,"previousSibling")},nextAll:function(t){return ei(t,"nextSibling")},prevAll:function(t){return ei(t,"previousSibling")},nextUntil:function(t,i,r){return ei(t,"nextSibling",r)},prevUntil:function(t,i,r){return ei(t,"previousSibling",r)},siblings:function(t){return Un((t.parentNode||{}).firstChild,t)},children:function(t){return Un(t.firstChild)},contents:function(t){return t.contentDocument!=null&&s(t.contentDocument)?t.contentDocument:(ct(t,"template")&&(t=t.content||t),l.merge([],t.childNodes))}},function(t,i){l.fn[t]=function(r,o){var c=l.map(this,i,r);return t.slice(-5)!=="Until"&&(o=r),o&&typeof o=="string"&&(c=l.filter(o,c)),this.length>1&&(fn[t]||l.uniqueSort(c),V.test(t)&&c.reverse()),this.pushStack(c)}});var se=/[^\x20\t\r\n\f]+/g;function Ae(t){var i={};return l.each(t.match(se)||[],function(r,o){i[o]=!0}),i}l.Callbacks=function(t){t=typeof t=="string"?Ae(t):l.extend({},t);var i,r,o,c,f=[],d=[],T=-1,b=function(){for(c=c||t.once,o=i=!0;d.length;T=-1)for(r=d.shift();++T<f.length;)f[T].apply(r[0],r[1])===!1&&t.stopOnFalse&&(T=f.length,r=!1);t.memory||(r=!1),i=!1,c&&(r?f=[]:f="")},O={add:function(){return f&&(r&&!i&&(T=f.length-1,d.push(r)),(function M(j){l.each(j,function(L,Y){F(Y)?(!t.unique||!O.has(Y))&&f.push(Y):Y&&Y.length&&K(Y)!=="string"&&M(Y)})})(arguments),r&&!i&&b()),this},remove:function(){return l.each(arguments,function(M,j){for(var L;(L=l.inArray(j,f,L))>-1;)f.splice(L,1),L<=T&&T--}),this},has:function(M){return M?l.inArray(M,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return c=d=[],f=r="",this},disabled:function(){return!f},lock:function(){return c=d=[],!r&&!i&&(f=r=""),this},locked:function(){return!!c},fireWith:function(M,j){return c||(j=j||[],j=[M,j.slice?j.slice():j],d.push(j),i||b()),this},fire:function(){return O.fireWith(this,arguments),this},fired:function(){return!!o}};return O};function Ee(t){return t}function Fi(t){throw t}function oe(t,i,r,o){var c;try{t&&F(c=t.promise)?c.call(t).done(i).fail(r):t&&F(c=t.then)?c.call(t,i,r):i.apply(void 0,[t].slice(o))}catch(f){r.apply(void 0,[f])}}l.extend({Deferred:function(t){var i=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],r="pending",o={state:function(){return r},always:function(){return c.done(arguments).fail(arguments),this},catch:function(f){return o.then(null,f)},pipe:function(){var f=arguments;return l.Deferred(function(d){l.each(i,function(T,b){var O=F(f[b[4]])&&f[b[4]];c[b[1]](function(){var M=O&&O.apply(this,arguments);M&&F(M.promise)?M.promise().progress(d.notify).done(d.resolve).fail(d.reject):d[b[0]+"With"](this,O?[M]:arguments)})}),f=null}).promise()},then:function(f,d,T){var b=0;function O(M,j,L,Y){return function(){var st=this,pt=arguments,dt=function(){var Dt,ue;if(!(M<b)){if(Dt=L.apply(st,pt),Dt===j.promise())throw new TypeError("Thenable self-resolution");ue=Dt&&(typeof Dt=="object"||typeof Dt=="function")&&Dt.then,F(ue)?Y?ue.call(Dt,O(b,j,Ee,Y),O(b,j,Fi,Y)):(b++,ue.call(Dt,O(b,j,Ee,Y),O(b,j,Fi,Y),O(b,j,Ee,j.notifyWith))):(L!==Ee&&(st=void 0,pt=[Dt]),(Y||j.resolveWith)(st,pt))}},Mt=Y?dt:function(){try{dt()}catch(Dt){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(Dt,Mt.error),M+1>=b&&(L!==Fi&&(st=void 0,pt=[Dt]),j.rejectWith(st,pt))}};M?Mt():(l.Deferred.getErrorHook?Mt.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Mt.error=l.Deferred.getStackHook()),_.setTimeout(Mt))}}return l.Deferred(function(M){i[0][3].add(O(0,M,F(T)?T:Ee,M.notifyWith)),i[1][3].add(O(0,M,F(f)?f:Ee)),i[2][3].add(O(0,M,F(d)?d:Fi))}).promise()},promise:function(f){return f!=null?l.extend(f,o):o}},c={};return l.each(i,function(f,d){var T=d[2],b=d[5];o[d[1]]=T.add,b&&T.add(function(){r=b},i[3-f][2].disable,i[3-f][3].disable,i[0][2].lock,i[0][3].lock),T.add(d[3].fire),c[d[0]]=function(){return c[d[0]+"With"](this===c?void 0:this,arguments),this},c[d[0]+"With"]=T.fireWith}),o.promise(c),t&&t.call(c,c),c},when:function(t){var i=arguments.length,r=i,o=Array(r),c=h.call(arguments),f=l.Deferred(),d=function(T){return function(b){o[T]=this,c[T]=arguments.length>1?h.call(arguments):b,--i||f.resolveWith(o,c)}};if(i<=1&&(oe(t,f.done(d(r)).resolve,f.reject,!i),f.state()==="pending"||F(c[r]&&c[r].then)))return f.then();for(;r--;)oe(c[r],d(r),f.reject);return f.promise()}});var hn=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(t,i){_.console&&_.console.warn&&t&&hn.test(t.name)&&_.console.warn("jQuery.Deferred exception: "+t.message,t.stack,i)},l.readyException=function(t){_.setTimeout(function(){throw t})};var rt=l.Deferred();l.fn.ready=function(t){return rt.then(t).catch(function(i){l.readyException(i)}),this},l.extend({isReady:!1,readyWait:1,ready:function(t){(t===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(t!==!0&&--l.readyWait>0)&&rt.resolveWith(p,[l]))}}),l.ready.then=rt.then;function je(){p.removeEventListener("DOMContentLoaded",je),_.removeEventListener("load",je),l.ready()}p.readyState==="complete"||p.readyState!=="loading"&&!p.documentElement.doScroll?_.setTimeout(l.ready):(p.addEventListener("DOMContentLoaded",je),_.addEventListener("load",je));var xe=function(t,i,r,o,c,f,d){var T=0,b=t.length,O=r==null;if(K(r)==="object"){c=!0;for(T in r)xe(t,i,T,r[T],!0,f,d)}else if(o!==void 0&&(c=!0,F(o)||(d=!0),O&&(d?(i.call(t,o),i=null):(O=i,i=function(M,j,L){return O.call(l(M),L)})),i))for(;T<b;T++)i(t[T],r,d?o:o.call(t[T],T,i(t[T],r)));return c?t:O?i.call(t):b?i(t[0],r):f},qs=/^-ms-/,Gn=/-([a-z])/g;function Kr(t,i){return i.toUpperCase()}function Te(t){return t.replace(qs,"ms-").replace(Gn,Kr)}var pi=function(t){return t.nodeType===1||t.nodeType===9||!+t.nodeType};function gi(){this.expando=l.expando+gi.uid++}gi.uid=1,gi.prototype={cache:function(t){var i=t[this.expando];return i||(i={},pi(t)&&(t.nodeType?t[this.expando]=i:Object.defineProperty(t,this.expando,{value:i,configurable:!0}))),i},set:function(t,i,r){var o,c=this.cache(t);if(typeof i=="string")c[Te(i)]=r;else for(o in i)c[Te(o)]=i[o];return c},get:function(t,i){return i===void 0?this.cache(t):t[this.expando]&&t[this.expando][Te(i)]},access:function(t,i,r){return i===void 0||i&&typeof i=="string"&&r===void 0?this.get(t,i):(this.set(t,i,r),r!==void 0?r:i)},remove:function(t,i){var r,o=t[this.expando];if(o!==void 0){if(i!==void 0)for(Array.isArray(i)?i=i.map(Te):(i=Te(i),i=i in o?[i]:i.match(se)||[]),r=i.length;r--;)delete o[i[r]];(i===void 0||l.isEmptyObject(o))&&(t.nodeType?t[this.expando]=void 0:delete t[this.expando])}},hasData:function(t){var i=t[this.expando];return i!==void 0&&!l.isEmptyObject(i)}};var it=new gi,Ut=new gi,Fs=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Gr=/[A-Z]/g;function Xr(t){return t==="true"?!0:t==="false"?!1:t==="null"?null:t===+t+""?+t:Fs.test(t)?JSON.parse(t):t}function Xn(t,i,r){var o;if(r===void 0&&t.nodeType===1)if(o="data-"+i.replace(Gr,"-$&").toLowerCase(),r=t.getAttribute(o),typeof r=="string"){try{r=Xr(r)}catch{}Ut.set(t,i,r)}else r=void 0;return r}l.extend({hasData:function(t){return Ut.hasData(t)||it.hasData(t)},data:function(t,i,r){return Ut.access(t,i,r)},removeData:function(t,i){Ut.remove(t,i)},_data:function(t,i,r){return it.access(t,i,r)},_removeData:function(t,i){it.remove(t,i)}}),l.fn.extend({data:function(t,i){var r,o,c,f=this[0],d=f&&f.attributes;if(t===void 0){if(this.length&&(c=Ut.get(f),f.nodeType===1&&!it.get(f,"hasDataAttrs"))){for(r=d.length;r--;)d[r]&&(o=d[r].name,o.indexOf("data-")===0&&(o=Te(o.slice(5)),Xn(f,o,c[o])));it.set(f,"hasDataAttrs",!0)}return c}return typeof t=="object"?this.each(function(){Ut.set(this,t)}):xe(this,function(T){var b;if(f&&T===void 0)return b=Ut.get(f,t),b!==void 0||(b=Xn(f,t),b!==void 0)?b:void 0;this.each(function(){Ut.set(this,t,T)})},null,i,arguments.length>1,null,!0)},removeData:function(t){return this.each(function(){Ut.remove(this,t)})}}),l.extend({queue:function(t,i,r){var o;if(t)return i=(i||"fx")+"queue",o=it.get(t,i),r&&(!o||Array.isArray(r)?o=it.access(t,i,l.makeArray(r)):o.push(r)),o||[]},dequeue:function(t,i){i=i||"fx";var r=l.queue(t,i),o=r.length,c=r.shift(),f=l._queueHooks(t,i),d=function(){l.dequeue(t,i)};c==="inprogress"&&(c=r.shift(),o--),c&&(i==="fx"&&r.unshift("inprogress"),delete f.stop,c.call(t,d,f)),!o&&f&&f.empty.fire()},_queueHooks:function(t,i){var r=i+"queueHooks";return it.get(t,r)||it.access(t,r,{empty:l.Callbacks("once memory").add(function(){it.remove(t,[i+"queue",r])})})}}),l.fn.extend({queue:function(t,i){var r=2;return typeof t!="string"&&(i=t,t="fx",r--),arguments.length<r?l.queue(this[0],t):i===void 0?this:this.each(function(){var o=l.queue(this,t,i);l._queueHooks(this,t),t==="fx"&&o[0]!=="inprogress"&&l.dequeue(this,t)})},dequeue:function(t){return this.each(function(){l.dequeue(this,t)})},clearQueue:function(t){return this.queue(t||"fx",[])},promise:function(t,i){var r,o=1,c=l.Deferred(),f=this,d=this.length,T=function(){--o||c.resolveWith(f,[f])};for(typeof t!="string"&&(i=t,t=void 0),t=t||"fx";d--;)r=it.get(f[d],t+"queueHooks"),r&&r.empty&&(o++,r.empty.add(T));return T(),c.promise(i)}});var pn=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,mi=new RegExp("^(?:([+-])=|)("+pn+")([a-z%]*)$","i"),te=["Top","Right","Bottom","Left"],We=p.documentElement,ge=function(t){return l.contains(t.ownerDocument,t)},Qr={composed:!0};We.getRootNode&&(ge=function(t){return l.contains(t.ownerDocument,t)||t.getRootNode(Qr)===t.ownerDocument});var Bi=function(t,i){return t=i||t,t.style.display==="none"||t.style.display===""&&ge(t)&&l.css(t,"display")==="none"};function Qn(t,i,r,o){var c,f,d=20,T=o?function(){return o.cur()}:function(){return l.css(t,i,"")},b=T(),O=r&&r[3]||(l.cssNumber[i]?"":"px"),M=t.nodeType&&(l.cssNumber[i]||O!=="px"&&+b)&&mi.exec(l.css(t,i));if(M&&M[3]!==O){for(b=b/2,O=O||M[3],M=+b||1;d--;)l.style(t,i,M+O),(1-f)*(1-(f=T()/b||.5))<=0&&(d=0),M=M/f;M=M*2,l.style(t,i,M+O),r=r||[]}return r&&(M=+M||+b||0,c=r[1]?M+(r[1]+1)*r[2]:+r[2],o&&(o.unit=O,o.start=M,o.end=c)),c}var Jn={};function Jr(t){var i,r=t.ownerDocument,o=t.nodeName,c=Jn[o];return c||(i=r.body.appendChild(r.createElement(o)),c=l.css(i,"display"),i.parentNode.removeChild(i),c==="none"&&(c="block"),Jn[o]=c,c)}function ii(t,i){for(var r,o,c=[],f=0,d=t.length;f<d;f++)o=t[f],o.style&&(r=o.style.display,i?(r==="none"&&(c[f]=it.get(o,"display")||null,c[f]||(o.style.display="")),o.style.display===""&&Bi(o)&&(c[f]=Jr(o))):r!=="none"&&(c[f]="none",it.set(o,"display",r)));for(f=0;f<d;f++)c[f]!=null&&(t[f].style.display=c[f]);return t}l.fn.extend({show:function(){return ii(this,!0)},hide:function(){return ii(this)},toggle:function(t){return typeof t=="boolean"?t?this.show():this.hide():this.each(function(){Bi(this)?l(this).show():l(this).hide()})}});var vi=/^(?:checkbox|radio)$/i,Zn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tr=/^$|^module$|\/(?:java|ecma)script/i;(function(){var t=p.createDocumentFragment(),i=t.appendChild(p.createElement("div")),r=p.createElement("input");r.setAttribute("type","radio"),r.setAttribute("checked","checked"),r.setAttribute("name","t"),i.appendChild(r),B.checkClone=i.cloneNode(!0).cloneNode(!0).lastChild.checked,i.innerHTML="<textarea>x</textarea>",B.noCloneChecked=!!i.cloneNode(!0).lastChild.defaultValue,i.innerHTML="<option></option>",B.option=!!i.lastChild})();var ae={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ae.tbody=ae.tfoot=ae.colgroup=ae.caption=ae.thead,ae.th=ae.td,B.option||(ae.optgroup=ae.option=[1,"<select multiple='multiple'>","</select>"]);function Kt(t,i){var r;return typeof t.getElementsByTagName<"u"?r=t.getElementsByTagName(i||"*"):typeof t.querySelectorAll<"u"?r=t.querySelectorAll(i||"*"):r=[],i===void 0||i&&ct(t,i)?l.merge([t],r):r}function ni(t,i){for(var r=0,o=t.length;r<o;r++)it.set(t[r],"globalEval",!i||it.get(i[r],"globalEval"))}var Zr=/<|&#?\w+;/;function ts(t,i,r,o,c){for(var f,d,T,b,O,M,j=i.createDocumentFragment(),L=[],Y=0,st=t.length;Y<st;Y++)if(f=t[Y],f||f===0)if(K(f)==="object")l.merge(L,f.nodeType?[f]:f);else if(!Zr.test(f))L.push(i.createTextNode(f));else{for(d=d||j.appendChild(i.createElement("div")),T=(Zn.exec(f)||["",""])[1].toLowerCase(),b=ae[T]||ae._default,d.innerHTML=b[1]+l.htmlPrefilter(f)+b[2],M=b[0];M--;)d=d.lastChild;l.merge(L,d.childNodes),d=j.firstChild,d.textContent=""}for(j.textContent="",Y=0;f=L[Y++];){if(o&&l.inArray(f,o)>-1){c&&c.push(f);continue}if(O=ge(f),d=Kt(j.appendChild(f),"script"),O&&ni(d),r)for(M=0;f=d[M++];)tr.test(f.type||"")&&r.push(f)}return j}var Oe=/^([^.]*)(?:\.(.+)|)/;function qe(){return!0}function ri(){return!1}function gn(t,i,r,o,c,f){var d,T;if(typeof i=="object"){typeof r!="string"&&(o=o||r,r=void 0);for(T in i)gn(t,T,r,o,i[T],f);return t}if(o==null&&c==null?(c=r,o=r=void 0):c==null&&(typeof r=="string"?(c=o,o=void 0):(c=o,o=r,r=void 0)),c===!1)c=ri;else if(!c)return t;return f===1&&(d=c,c=function(b){return l().off(b),d.apply(this,arguments)},c.guid=d.guid||(d.guid=l.guid++)),t.each(function(){l.event.add(this,i,c,o,r)})}l.event={global:{},add:function(t,i,r,o,c){var f,d,T,b,O,M,j,L,Y,st,pt,dt=it.get(t);if(pi(t))for(r.handler&&(f=r,r=f.handler,c=f.selector),c&&l.find.matchesSelector(We,c),r.guid||(r.guid=l.guid++),(b=dt.events)||(b=dt.events=Object.create(null)),(d=dt.handle)||(d=dt.handle=function(Mt){return typeof l<"u"&&l.event.triggered!==Mt.type?l.event.dispatch.apply(t,arguments):void 0}),i=(i||"").match(se)||[""],O=i.length;O--;)T=Oe.exec(i[O])||[],Y=pt=T[1],st=(T[2]||"").split(".").sort(),Y&&(j=l.event.special[Y]||{},Y=(c?j.delegateType:j.bindType)||Y,j=l.event.special[Y]||{},M=l.extend({type:Y,origType:pt,data:o,handler:r,guid:r.guid,selector:c,needsContext:c&&l.expr.match.needsContext.test(c),namespace:st.join(".")},f),(L=b[Y])||(L=b[Y]=[],L.delegateCount=0,(!j.setup||j.setup.call(t,o,st,d)===!1)&&t.addEventListener&&t.addEventListener(Y,d)),j.add&&(j.add.call(t,M),M.handler.guid||(M.handler.guid=r.guid)),c?L.splice(L.delegateCount++,0,M):L.push(M),l.event.global[Y]=!0)},remove:function(t,i,r,o,c){var f,d,T,b,O,M,j,L,Y,st,pt,dt=it.hasData(t)&&it.get(t);if(!(!dt||!(b=dt.events))){for(i=(i||"").match(se)||[""],O=i.length;O--;){if(T=Oe.exec(i[O])||[],Y=pt=T[1],st=(T[2]||"").split(".").sort(),!Y){for(Y in b)l.event.remove(t,Y+i[O],r,o,!0);continue}for(j=l.event.special[Y]||{},Y=(o?j.delegateType:j.bindType)||Y,L=b[Y]||[],T=T[2]&&new RegExp("(^|\\.)"+st.join("\\.(?:.*\\.|)")+"(\\.|$)"),d=f=L.length;f--;)M=L[f],(c||pt===M.origType)&&(!r||r.guid===M.guid)&&(!T||T.test(M.namespace))&&(!o||o===M.selector||o==="**"&&M.selector)&&(L.splice(f,1),M.selector&&L.delegateCount--,j.remove&&j.remove.call(t,M));d&&!L.length&&((!j.teardown||j.teardown.call(t,st,dt.handle)===!1)&&l.removeEvent(t,Y,dt.handle),delete b[Y])}l.isEmptyObject(b)&&it.remove(t,"handle events")}},dispatch:function(t){var i,r,o,c,f,d,T=new Array(arguments.length),b=l.event.fix(t),O=(it.get(this,"events")||Object.create(null))[b.type]||[],M=l.event.special[b.type]||{};for(T[0]=b,i=1;i<arguments.length;i++)T[i]=arguments[i];if(b.delegateTarget=this,!(M.preDispatch&&M.preDispatch.call(this,b)===!1)){for(d=l.event.handlers.call(this,b,O),i=0;(c=d[i++])&&!b.isPropagationStopped();)for(b.currentTarget=c.elem,r=0;(f=c.handlers[r++])&&!b.isImmediatePropagationStopped();)(!b.rnamespace||f.namespace===!1||b.rnamespace.test(f.namespace))&&(b.handleObj=f,b.data=f.data,o=((l.event.special[f.origType]||{}).handle||f.handler).apply(c.elem,T),o!==void 0&&(b.result=o)===!1&&(b.preventDefault(),b.stopPropagation()));return M.postDispatch&&M.postDispatch.call(this,b),b.result}},handlers:function(t,i){var r,o,c,f,d,T=[],b=i.delegateCount,O=t.target;if(b&&O.nodeType&&!(t.type==="click"&&t.button>=1)){for(;O!==this;O=O.parentNode||this)if(O.nodeType===1&&!(t.type==="click"&&O.disabled===!0)){for(f=[],d={},r=0;r<b;r++)o=i[r],c=o.selector+" ",d[c]===void 0&&(d[c]=o.needsContext?l(c,this).index(O)>-1:l.find(c,this,null,[O]).length),d[c]&&f.push(o);f.length&&T.push({elem:O,handlers:f})}}return O=this,b<i.length&&T.push({elem:O,handlers:i.slice(b)}),T},addProp:function(t,i){Object.defineProperty(l.Event.prototype,t,{enumerable:!0,configurable:!0,get:F(i)?function(){if(this.originalEvent)return i(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(r){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:r})}})},fix:function(t){return t[l.expando]?t:new l.Event(t)},special:{load:{noBubble:!0},click:{setup:function(t){var i=this||t;return vi.test(i.type)&&i.click&&ct(i,"input")&&Vi(i,"click",!0),!1},trigger:function(t){var i=this||t;return vi.test(i.type)&&i.click&&ct(i,"input")&&Vi(i,"click"),!0},_default:function(t){var i=t.target;return vi.test(i.type)&&i.click&&ct(i,"input")&&it.get(i,"click")||ct(i,"a")}},beforeunload:{postDispatch:function(t){t.result!==void 0&&t.originalEvent&&(t.originalEvent.returnValue=t.result)}}}};function Vi(t,i,r){if(!r){it.get(t,i)===void 0&&l.event.add(t,i,qe);return}it.set(t,i,!1),l.event.add(t,i,{namespace:!1,handler:function(o){var c,f=it.get(this,i);if(o.isTrigger&1&&this[i]){if(f)(l.event.special[i]||{}).delegateType&&o.stopPropagation();else if(f=h.call(arguments),it.set(this,i,f),this[i](),c=it.get(this,i),it.set(this,i,!1),f!==c)return o.stopImmediatePropagation(),o.preventDefault(),c}else f&&(it.set(this,i,l.event.trigger(f[0],f.slice(1),this)),o.stopPropagation(),o.isImmediatePropagationStopped=qe)}})}l.removeEvent=function(t,i,r){t.removeEventListener&&t.removeEventListener(i,r)},l.Event=function(t,i){if(!(this instanceof l.Event))return new l.Event(t,i);t&&t.type?(this.originalEvent=t,this.type=t.type,this.isDefaultPrevented=t.defaultPrevented||t.defaultPrevented===void 0&&t.returnValue===!1?qe:ri,this.target=t.target&&t.target.nodeType===3?t.target.parentNode:t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget):this.type=t,i&&l.extend(this,i),this.timeStamp=t&&t.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:ri,isPropagationStopped:ri,isImmediatePropagationStopped:ri,isSimulated:!1,preventDefault:function(){var t=this.originalEvent;this.isDefaultPrevented=qe,t&&!this.isSimulated&&t.preventDefault()},stopPropagation:function(){var t=this.originalEvent;this.isPropagationStopped=qe,t&&!this.isSimulated&&t.stopPropagation()},stopImmediatePropagation:function(){var t=this.originalEvent;this.isImmediatePropagationStopped=qe,t&&!this.isSimulated&&t.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(t,i){function r(o){if(p.documentMode){var c=it.get(this,"handle"),f=l.event.fix(o);f.type=o.type==="focusin"?"focus":"blur",f.isSimulated=!0,c(o),f.target===f.currentTarget&&c(f)}else l.event.simulate(i,o.target,l.event.fix(o))}l.event.special[t]={setup:function(){var o;if(Vi(this,t,!0),p.documentMode)o=it.get(this,i),o||this.addEventListener(i,r),it.set(this,i,(o||0)+1);else return!1},trigger:function(){return Vi(this,t),!0},teardown:function(){var o;if(p.documentMode)o=it.get(this,i)-1,o?it.set(this,i,o):(this.removeEventListener(i,r),it.remove(this,i));else return!1},_default:function(o){return it.get(o.target,t)},delegateType:i},l.event.special[i]={setup:function(){var o=this.ownerDocument||this.document||this,c=p.documentMode?this:o,f=it.get(c,i);f||(p.documentMode?this.addEventListener(i,r):o.addEventListener(t,r,!0)),it.set(c,i,(f||0)+1)},teardown:function(){var o=this.ownerDocument||this.document||this,c=p.documentMode?this:o,f=it.get(c,i)-1;f?it.set(c,i,f):(p.documentMode?this.removeEventListener(i,r):o.removeEventListener(t,r,!0),it.remove(c,i))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(t,i){l.event.special[t]={delegateType:i,bindType:i,handle:function(r){var o,c=this,f=r.relatedTarget,d=r.handleObj;return(!f||f!==c&&!l.contains(c,f))&&(r.type=d.origType,o=d.handler.apply(this,arguments),r.type=i),o}}}),l.fn.extend({on:function(t,i,r,o){return gn(this,t,i,r,o)},one:function(t,i,r,o){return gn(this,t,i,r,o,1)},off:function(t,i,r){var o,c;if(t&&t.preventDefault&&t.handleObj)return o=t.handleObj,l(t.delegateTarget).off(o.namespace?o.origType+"."+o.namespace:o.origType,o.selector,o.handler),this;if(typeof t=="object"){for(c in t)this.off(c,i,t[c]);return this}return(i===!1||typeof i=="function")&&(r=i,i=void 0),r===!1&&(r=ri),this.each(function(){l.event.remove(this,t,r,i)})}});var yi=/<script|<style|<link/i,si=/checked\s*(?:[^=]|=\s*.checked.)/i,oi=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function _i(t,i){return ct(t,"table")&&ct(i.nodeType!==11?i:i.firstChild,"tr")&&l(t).children("tbody")[0]||t}function es(t){return t.type=(t.getAttribute("type")!==null)+"/"+t.type,t}function mn(t){return(t.type||"").slice(0,5)==="true/"?t.type=t.type.slice(5):t.removeAttribute("type"),t}function er(t,i){var r,o,c,f,d,T,b;if(i.nodeType===1){if(it.hasData(t)&&(f=it.get(t),b=f.events,b)){it.remove(i,"handle events");for(c in b)for(r=0,o=b[c].length;r<o;r++)l.event.add(i,c,b[c][r])}Ut.hasData(t)&&(d=Ut.access(t),T=l.extend({},d),Ut.set(i,T))}}function is(t,i){var r=i.nodeName.toLowerCase();r==="input"&&vi.test(t.type)?i.checked=t.checked:(r==="input"||r==="textarea")&&(i.defaultValue=t.defaultValue)}function ai(t,i,r,o){i=v(i);var c,f,d,T,b,O,M=0,j=t.length,L=j-1,Y=i[0],st=F(Y);if(st||j>1&&typeof Y=="string"&&!B.checkClone&&si.test(Y))return t.each(function(pt){var dt=t.eq(pt);st&&(i[0]=Y.call(this,pt,dt.html())),ai(dt,i,r,o)});if(j&&(c=ts(i,t[0].ownerDocument,!1,t,o),f=c.firstChild,c.childNodes.length===1&&(c=f),f||o)){for(d=l.map(Kt(c,"script"),es),T=d.length;M<j;M++)b=c,M!==L&&(b=l.clone(b,!0,!0),T&&l.merge(d,Kt(b,"script"))),r.call(t[M],b,M);if(T)for(O=d[d.length-1].ownerDocument,l.map(d,mn),M=0;M<T;M++)b=d[M],tr.test(b.type||"")&&!it.access(b,"globalEval")&&l.contains(O,b)&&(b.src&&(b.type||"").toLowerCase()!=="module"?l._evalUrl&&!b.noModule&&l._evalUrl(b.src,{nonce:b.nonce||b.getAttribute("nonce")},O):z(b.textContent.replace(oi,""),b,O))}return t}function ir(t,i,r){for(var o,c=i?l.filter(i,t):t,f=0;(o=c[f])!=null;f++)!r&&o.nodeType===1&&l.cleanData(Kt(o)),o.parentNode&&(r&&ge(o)&&ni(Kt(o,"script")),o.parentNode.removeChild(o));return t}l.extend({htmlPrefilter:function(t){return t},clone:function(t,i,r){var o,c,f,d,T=t.cloneNode(!0),b=ge(t);if(!B.noCloneChecked&&(t.nodeType===1||t.nodeType===11)&&!l.isXMLDoc(t))for(d=Kt(T),f=Kt(t),o=0,c=f.length;o<c;o++)is(f[o],d[o]);if(i)if(r)for(f=f||Kt(t),d=d||Kt(T),o=0,c=f.length;o<c;o++)er(f[o],d[o]);else er(t,T);return d=Kt(T,"script"),d.length>0&&ni(d,!b&&Kt(t,"script")),T},cleanData:function(t){for(var i,r,o,c=l.event.special,f=0;(r=t[f])!==void 0;f++)if(pi(r)){if(i=r[it.expando]){if(i.events)for(o in i.events)c[o]?l.event.remove(r,o):l.removeEvent(r,o,i.handle);r[it.expando]=void 0}r[Ut.expando]&&(r[Ut.expando]=void 0)}}}),l.fn.extend({detach:function(t){return ir(this,t,!0)},remove:function(t){return ir(this,t)},text:function(t){return xe(this,function(i){return i===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=i)})},null,t,arguments.length)},append:function(){return ai(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=_i(this,t);i.appendChild(t)}})},prepend:function(){return ai(this,arguments,function(t){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=_i(this,t);i.insertBefore(t,i.firstChild)}})},before:function(){return ai(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this)})},after:function(){return ai(this,arguments,function(t){this.parentNode&&this.parentNode.insertBefore(t,this.nextSibling)})},empty:function(){for(var t,i=0;(t=this[i])!=null;i++)t.nodeType===1&&(l.cleanData(Kt(t,!1)),t.textContent="");return this},clone:function(t,i){return t=t??!1,i=i??t,this.map(function(){return l.clone(this,t,i)})},html:function(t){return xe(this,function(i){var r=this[0]||{},o=0,c=this.length;if(i===void 0&&r.nodeType===1)return r.innerHTML;if(typeof i=="string"&&!yi.test(i)&&!ae[(Zn.exec(i)||["",""])[1].toLowerCase()]){i=l.htmlPrefilter(i);try{for(;o<c;o++)r=this[o]||{},r.nodeType===1&&(l.cleanData(Kt(r,!1)),r.innerHTML=i);r=0}catch{}}r&&this.empty().append(i)},null,t,arguments.length)},replaceWith:function(){var t=[];return ai(this,arguments,function(i){var r=this.parentNode;l.inArray(this,t)<0&&(l.cleanData(Kt(this)),r&&r.replaceChild(i,this))},t)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(t,i){l.fn[t]=function(r){for(var o,c=[],f=l(r),d=f.length-1,T=0;T<=d;T++)o=T===d?this:this.clone(!0),l(f[T])[i](o),m.apply(c,o.get());return this.pushStack(c)}});var vn=new RegExp("^("+pn+")(?!px)[a-z%]+$","i"),yn=/^--/,bi=function(t){var i=t.ownerDocument.defaultView;return(!i||!i.opener)&&(i=_),i.getComputedStyle(t)},Ei=function(t,i,r){var o,c,f={};for(c in i)f[c]=t.style[c],t.style[c]=i[c];o=r.call(t);for(c in i)t.style[c]=f[c];return o},ns=new RegExp(te.join("|"),"i");(function(){function t(){if(O){b.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",O.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",We.appendChild(b).appendChild(O);var M=_.getComputedStyle(O);r=M.top!=="1%",T=i(M.marginLeft)===12,O.style.right="60%",f=i(M.right)===36,o=i(M.width)===36,O.style.position="absolute",c=i(O.offsetWidth/3)===12,We.removeChild(b),O=null}}function i(M){return Math.round(parseFloat(M))}var r,o,c,f,d,T,b=p.createElement("div"),O=p.createElement("div");O.style&&(O.style.backgroundClip="content-box",O.cloneNode(!0).style.backgroundClip="",B.clearCloneStyle=O.style.backgroundClip==="content-box",l.extend(B,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),f},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),T},scrollboxSize:function(){return t(),c},reliableTrDimensions:function(){var M,j,L,Y;return d==null&&(M=p.createElement("table"),j=p.createElement("tr"),L=p.createElement("div"),M.style.cssText="position:absolute;left:-11111px;border-collapse:separate",j.style.cssText="box-sizing:content-box;border:1px solid",j.style.height="1px",L.style.height="9px",L.style.display="block",We.appendChild(M).appendChild(j).appendChild(L),Y=_.getComputedStyle(j),d=parseInt(Y.height,10)+parseInt(Y.borderTopWidth,10)+parseInt(Y.borderBottomWidth,10)===j.offsetHeight,We.removeChild(M)),d}}))})();function Ti(t,i,r){var o,c,f,d,T=yn.test(i),b=t.style;return r=r||bi(t),r&&(d=r.getPropertyValue(i)||r[i],T&&d&&(d=d.replace(ti,"$1")||void 0),d===""&&!ge(t)&&(d=l.style(t,i)),!B.pixelBoxStyles()&&vn.test(d)&&ns.test(i)&&(o=b.width,c=b.minWidth,f=b.maxWidth,b.minWidth=b.maxWidth=b.width=d,d=r.width,b.width=o,b.minWidth=c,b.maxWidth=f)),d!==void 0?d+"":d}function nr(t,i){return{get:function(){if(t()){delete this.get;return}return(this.get=i).apply(this,arguments)}}}var rr=["Webkit","Moz","ms"],sr=p.createElement("div").style,_n={};function or(t){for(var i=t[0].toUpperCase()+t.slice(1),r=rr.length;r--;)if(t=rr[r]+i,t in sr)return t}function bn(t){var i=l.cssProps[t]||_n[t];return i||(t in sr?t:_n[t]=or(t)||t)}var rs=/^(none|table(?!-c[ea]).+)/,ss={position:"absolute",visibility:"hidden",display:"block"},ar={letterSpacing:"0",fontWeight:"400"};function lr(t,i,r){var o=mi.exec(i);return o?Math.max(0,o[2]-(r||0))+(o[3]||"px"):i}function En(t,i,r,o,c,f){var d=i==="width"?1:0,T=0,b=0,O=0;if(r===(o?"border":"content"))return 0;for(;d<4;d+=2)r==="margin"&&(O+=l.css(t,r+te[d],!0,c)),o?(r==="content"&&(b-=l.css(t,"padding"+te[d],!0,c)),r!=="margin"&&(b-=l.css(t,"border"+te[d]+"Width",!0,c))):(b+=l.css(t,"padding"+te[d],!0,c),r!=="padding"?b+=l.css(t,"border"+te[d]+"Width",!0,c):T+=l.css(t,"border"+te[d]+"Width",!0,c));return!o&&f>=0&&(b+=Math.max(0,Math.ceil(t["offset"+i[0].toUpperCase()+i.slice(1)]-f-b-T-.5))||0),b+O}function ur(t,i,r){var o=bi(t),c=!B.boxSizingReliable()||r,f=c&&l.css(t,"boxSizing",!1,o)==="border-box",d=f,T=Ti(t,i,o),b="offset"+i[0].toUpperCase()+i.slice(1);if(vn.test(T)){if(!r)return T;T="auto"}return(!B.boxSizingReliable()&&f||!B.reliableTrDimensions()&&ct(t,"tr")||T==="auto"||!parseFloat(T)&&l.css(t,"display",!1,o)==="inline")&&t.getClientRects().length&&(f=l.css(t,"boxSizing",!1,o)==="border-box",d=b in t,d&&(T=t[b])),T=parseFloat(T)||0,T+En(t,i,r||(f?"border":"content"),d,o,T)+"px"}l.extend({cssHooks:{opacity:{get:function(t,i){if(i){var r=Ti(t,"opacity");return r===""?"1":r}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(t,i,r,o){if(!(!t||t.nodeType===3||t.nodeType===8||!t.style)){var c,f,d,T=Te(i),b=yn.test(i),O=t.style;if(b||(i=bn(T)),d=l.cssHooks[i]||l.cssHooks[T],r!==void 0){if(f=typeof r,f==="string"&&(c=mi.exec(r))&&c[1]&&(r=Qn(t,i,c),f="number"),r==null||r!==r)return;f==="number"&&!b&&(r+=c&&c[3]||(l.cssNumber[T]?"":"px")),!B.clearCloneStyle&&r===""&&i.indexOf("background")===0&&(O[i]="inherit"),(!d||!("set"in d)||(r=d.set(t,r,o))!==void 0)&&(b?O.setProperty(i,r):O[i]=r)}else return d&&"get"in d&&(c=d.get(t,!1,o))!==void 0?c:O[i]}},css:function(t,i,r,o){var c,f,d,T=Te(i),b=yn.test(i);return b||(i=bn(T)),d=l.cssHooks[i]||l.cssHooks[T],d&&"get"in d&&(c=d.get(t,!0,r)),c===void 0&&(c=Ti(t,i,o)),c==="normal"&&i in ar&&(c=ar[i]),r===""||r?(f=parseFloat(c),r===!0||isFinite(f)?f||0:c):c}}),l.each(["height","width"],function(t,i){l.cssHooks[i]={get:function(r,o,c){if(o)return rs.test(l.css(r,"display"))&&(!r.getClientRects().length||!r.getBoundingClientRect().width)?Ei(r,ss,function(){return ur(r,i,c)}):ur(r,i,c)},set:function(r,o,c){var f,d=bi(r),T=!B.scrollboxSize()&&d.position==="absolute",b=T||c,O=b&&l.css(r,"boxSizing",!1,d)==="border-box",M=c?En(r,i,c,O,d):0;return O&&T&&(M-=Math.ceil(r["offset"+i[0].toUpperCase()+i.slice(1)]-parseFloat(d[i])-En(r,i,"border",!1,d)-.5)),M&&(f=mi.exec(o))&&(f[3]||"px")!=="px"&&(r.style[i]=o,o=l.css(r,i)),lr(r,o,M)}}}),l.cssHooks.marginLeft=nr(B.reliableMarginLeft,function(t,i){if(i)return(parseFloat(Ti(t,"marginLeft"))||t.getBoundingClientRect().left-Ei(t,{marginLeft:0},function(){return t.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(t,i){l.cssHooks[t+i]={expand:function(r){for(var o=0,c={},f=typeof r=="string"?r.split(" "):[r];o<4;o++)c[t+te[o]+i]=f[o]||f[o-2]||f[0];return c}},t!=="margin"&&(l.cssHooks[t+i].set=lr)}),l.fn.extend({css:function(t,i){return xe(this,function(r,o,c){var f,d,T={},b=0;if(Array.isArray(o)){for(f=bi(r),d=o.length;b<d;b++)T[o[b]]=l.css(r,o[b],!1,f);return T}return c!==void 0?l.style(r,o,c):l.css(r,o)},t,i,arguments.length>1)}});function Gt(t,i,r,o,c){return new Gt.prototype.init(t,i,r,o,c)}l.Tween=Gt,Gt.prototype={constructor:Gt,init:function(t,i,r,o,c,f){this.elem=t,this.prop=r,this.easing=c||l.easing._default,this.options=i,this.start=this.now=this.cur(),this.end=o,this.unit=f||(l.cssNumber[r]?"":"px")},cur:function(){var t=Gt.propHooks[this.prop];return t&&t.get?t.get(this):Gt.propHooks._default.get(this)},run:function(t){var i,r=Gt.propHooks[this.prop];return this.options.duration?this.pos=i=l.easing[this.easing](t,this.options.duration*t,0,1,this.options.duration):this.pos=i=t,this.now=(this.end-this.start)*i+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),r&&r.set?r.set(this):Gt.propHooks._default.set(this),this}},Gt.prototype.init.prototype=Gt.prototype,Gt.propHooks={_default:{get:function(t){var i;return t.elem.nodeType!==1||t.elem[t.prop]!=null&&t.elem.style[t.prop]==null?t.elem[t.prop]:(i=l.css(t.elem,t.prop,""),!i||i==="auto"?0:i)},set:function(t){l.fx.step[t.prop]?l.fx.step[t.prop](t):t.elem.nodeType===1&&(l.cssHooks[t.prop]||t.elem.style[bn(t.prop)]!=null)?l.style(t.elem,t.prop,t.now+t.unit):t.elem[t.prop]=t.now}}},Gt.propHooks.scrollTop=Gt.propHooks.scrollLeft={set:function(t){t.elem.nodeType&&t.elem.parentNode&&(t.elem[t.prop]=t.now)}},l.easing={linear:function(t){return t},swing:function(t){return .5-Math.cos(t*Math.PI)/2},_default:"swing"},l.fx=Gt.prototype.init,l.fx.step={};var me,Yi,Bs=/^(?:toggle|show|hide)$/,Si=/queueHooks$/;function Tn(){Yi&&(p.hidden===!1&&_.requestAnimationFrame?_.requestAnimationFrame(Tn):_.setTimeout(Tn,l.fx.interval),l.fx.tick())}function cr(){return _.setTimeout(function(){me=void 0}),me=Date.now()}function Ui(t,i){var r,o=0,c={height:t};for(i=i?1:0;o<4;o+=2-i)r=te[o],c["margin"+r]=c["padding"+r]=t;return i&&(c.opacity=c.width=t),c}function fr(t,i,r){for(var o,c=(ee.tweeners[i]||[]).concat(ee.tweeners["*"]),f=0,d=c.length;f<d;f++)if(o=c[f].call(r,i,t))return o}function os(t,i,r){var o,c,f,d,T,b,O,M,j="width"in i||"height"in i,L=this,Y={},st=t.style,pt=t.nodeType&&Bi(t),dt=it.get(t,"fxshow");r.queue||(d=l._queueHooks(t,"fx"),d.unqueued==null&&(d.unqueued=0,T=d.empty.fire,d.empty.fire=function(){d.unqueued||T()}),d.unqueued++,L.always(function(){L.always(function(){d.unqueued--,l.queue(t,"fx").length||d.empty.fire()})}));for(o in i)if(c=i[o],Bs.test(c)){if(delete i[o],f=f||c==="toggle",c===(pt?"hide":"show"))if(c==="show"&&dt&&dt[o]!==void 0)pt=!0;else continue;Y[o]=dt&&dt[o]||l.style(t,o)}if(b=!l.isEmptyObject(i),!(!b&&l.isEmptyObject(Y))){j&&t.nodeType===1&&(r.overflow=[st.overflow,st.overflowX,st.overflowY],O=dt&&dt.display,O==null&&(O=it.get(t,"display")),M=l.css(t,"display"),M==="none"&&(O?M=O:(ii([t],!0),O=t.style.display||O,M=l.css(t,"display"),ii([t]))),(M==="inline"||M==="inline-block"&&O!=null)&&l.css(t,"float")==="none"&&(b||(L.done(function(){st.display=O}),O==null&&(M=st.display,O=M==="none"?"":M)),st.display="inline-block")),r.overflow&&(st.overflow="hidden",L.always(function(){st.overflow=r.overflow[0],st.overflowX=r.overflow[1],st.overflowY=r.overflow[2]})),b=!1;for(o in Y)b||(dt?"hidden"in dt&&(pt=dt.hidden):dt=it.access(t,"fxshow",{display:O}),f&&(dt.hidden=!pt),pt&&ii([t],!0),L.done(function(){pt||ii([t]),it.remove(t,"fxshow");for(o in Y)l.style(t,o,Y[o])})),b=fr(pt?dt[o]:0,o,L),o in dt||(dt[o]=b.start,pt&&(b.end=b.start,b.start=0))}}function as(t,i){var r,o,c,f,d;for(r in t)if(o=Te(r),c=i[o],f=t[r],Array.isArray(f)&&(c=f[1],f=t[r]=f[0]),r!==o&&(t[o]=f,delete t[r]),d=l.cssHooks[o],d&&"expand"in d){f=d.expand(f),delete t[o];for(r in f)r in t||(t[r]=f[r],i[r]=c)}else i[o]=c}function ee(t,i,r){var o,c,f=0,d=ee.prefilters.length,T=l.Deferred().always(function(){delete b.elem}),b=function(){if(c)return!1;for(var j=me||cr(),L=Math.max(0,O.startTime+O.duration-j),Y=L/O.duration||0,st=1-Y,pt=0,dt=O.tweens.length;pt<dt;pt++)O.tweens[pt].run(st);return T.notifyWith(t,[O,st,L]),st<1&&dt?L:(dt||T.notifyWith(t,[O,1,0]),T.resolveWith(t,[O]),!1)},O=T.promise({elem:t,props:l.extend({},i),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},r),originalProperties:i,originalOptions:r,startTime:me||cr(),duration:r.duration,tweens:[],createTween:function(j,L){var Y=l.Tween(t,O.opts,j,L,O.opts.specialEasing[j]||O.opts.easing);return O.tweens.push(Y),Y},stop:function(j){var L=0,Y=j?O.tweens.length:0;if(c)return this;for(c=!0;L<Y;L++)O.tweens[L].run(1);return j?(T.notifyWith(t,[O,1,0]),T.resolveWith(t,[O,j])):T.rejectWith(t,[O,j]),this}}),M=O.props;for(as(M,O.opts.specialEasing);f<d;f++)if(o=ee.prefilters[f].call(O,t,M,O.opts),o)return F(o.stop)&&(l._queueHooks(O.elem,O.opts.queue).stop=o.stop.bind(o)),o;return l.map(M,fr,O),F(O.opts.start)&&O.opts.start.call(t,O),O.progress(O.opts.progress).done(O.opts.done,O.opts.complete).fail(O.opts.fail).always(O.opts.always),l.fx.timer(l.extend(b,{elem:t,anim:O,queue:O.opts.queue})),O}l.Animation=l.extend(ee,{tweeners:{"*":[function(t,i){var r=this.createTween(t,i);return Qn(r.elem,t,mi.exec(i),r),r}]},tweener:function(t,i){F(t)?(i=t,t=["*"]):t=t.match(se);for(var r,o=0,c=t.length;o<c;o++)r=t[o],ee.tweeners[r]=ee.tweeners[r]||[],ee.tweeners[r].unshift(i)},prefilters:[os],prefilter:function(t,i){i?ee.prefilters.unshift(t):ee.prefilters.push(t)}}),l.speed=function(t,i,r){var o=t&&typeof t=="object"?l.extend({},t):{complete:r||!r&&i||F(t)&&t,duration:t,easing:r&&i||i&&!F(i)&&i};return l.fx.off?o.duration=0:typeof o.duration!="number"&&(o.duration in l.fx.speeds?o.duration=l.fx.speeds[o.duration]:o.duration=l.fx.speeds._default),(o.queue==null||o.queue===!0)&&(o.queue="fx"),o.old=o.complete,o.complete=function(){F(o.old)&&o.old.call(this),o.queue&&l.dequeue(this,o.queue)},o},l.fn.extend({fadeTo:function(t,i,r,o){return this.filter(Bi).css("opacity",0).show().end().animate({opacity:i},t,r,o)},animate:function(t,i,r,o){var c=l.isEmptyObject(t),f=l.speed(i,r,o),d=function(){var T=ee(this,l.extend({},t),f);(c||it.get(this,"finish"))&&T.stop(!0)};return d.finish=d,c||f.queue===!1?this.each(d):this.queue(f.queue,d)},stop:function(t,i,r){var o=function(c){var f=c.stop;delete c.stop,f(r)};return typeof t!="string"&&(r=i,i=t,t=void 0),i&&this.queue(t||"fx",[]),this.each(function(){var c=!0,f=t!=null&&t+"queueHooks",d=l.timers,T=it.get(this);if(f)T[f]&&T[f].stop&&o(T[f]);else for(f in T)T[f]&&T[f].stop&&Si.test(f)&&o(T[f]);for(f=d.length;f--;)d[f].elem===this&&(t==null||d[f].queue===t)&&(d[f].anim.stop(r),c=!1,d.splice(f,1));(c||!r)&&l.dequeue(this,t)})},finish:function(t){return t!==!1&&(t=t||"fx"),this.each(function(){var i,r=it.get(this),o=r[t+"queue"],c=r[t+"queueHooks"],f=l.timers,d=o?o.length:0;for(r.finish=!0,l.queue(this,t,[]),c&&c.stop&&c.stop.call(this,!0),i=f.length;i--;)f[i].elem===this&&f[i].queue===t&&(f[i].anim.stop(!0),f.splice(i,1));for(i=0;i<d;i++)o[i]&&o[i].finish&&o[i].finish.call(this);delete r.finish})}}),l.each(["toggle","show","hide"],function(t,i){var r=l.fn[i];l.fn[i]=function(o,c,f){return o==null||typeof o=="boolean"?r.apply(this,arguments):this.animate(Ui(i,!0),o,c,f)}}),l.each({slideDown:Ui("show"),slideUp:Ui("hide"),slideToggle:Ui("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(t,i){l.fn[t]=function(r,o,c){return this.animate(i,r,o,c)}}),l.timers=[],l.fx.tick=function(){var t,i=0,r=l.timers;for(me=Date.now();i<r.length;i++)t=r[i],!t()&&r[i]===t&&r.splice(i--,1);r.length||l.fx.stop(),me=void 0},l.fx.timer=function(t){l.timers.push(t),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Yi||(Yi=!0,Tn())},l.fx.stop=function(){Yi=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(t,i){return t=l.fx&&l.fx.speeds[t]||t,i=i||"fx",this.queue(i,function(r,o){var c=_.setTimeout(r,t);o.stop=function(){_.clearTimeout(c)}})},(function(){var t=p.createElement("input"),i=p.createElement("select"),r=i.appendChild(p.createElement("option"));t.type="checkbox",B.checkOn=t.value!=="",B.optSelected=r.selected,t=p.createElement("input"),t.value="t",t.type="radio",B.radioValue=t.value==="t"})();var Fe,$e=l.expr.attrHandle;l.fn.extend({attr:function(t,i){return xe(this,l.attr,t,i,arguments.length>1)},removeAttr:function(t){return this.each(function(){l.removeAttr(this,t)})}}),l.extend({attr:function(t,i,r){var o,c,f=t.nodeType;if(!(f===3||f===8||f===2)){if(typeof t.getAttribute>"u")return l.prop(t,i,r);if((f!==1||!l.isXMLDoc(t))&&(c=l.attrHooks[i.toLowerCase()]||(l.expr.match.bool.test(i)?Fe:void 0)),r!==void 0){if(r===null){l.removeAttr(t,i);return}return c&&"set"in c&&(o=c.set(t,r,i))!==void 0?o:(t.setAttribute(i,r+""),r)}return c&&"get"in c&&(o=c.get(t,i))!==null?o:(o=l.find.attr(t,i),o??void 0)}},attrHooks:{type:{set:function(t,i){if(!B.radioValue&&i==="radio"&&ct(t,"input")){var r=t.value;return t.setAttribute("type",i),r&&(t.value=r),i}}}},removeAttr:function(t,i){var r,o=0,c=i&&i.match(se);if(c&&t.nodeType===1)for(;r=c[o++];)t.removeAttribute(r)}}),Fe={set:function(t,i,r){return i===!1?l.removeAttr(t,r):t.setAttribute(r,r),r}},l.each(l.expr.match.bool.source.match(/\w+/g),function(t,i){var r=$e[i]||l.find.attr;$e[i]=function(o,c,f){var d,T,b=c.toLowerCase();return f||(T=$e[b],$e[b]=d,d=r(o,c,f)!=null?b:null,$e[b]=T),d}});var ls=/^(?:input|select|textarea|button)$/i,us=/^(?:a|area)$/i;l.fn.extend({prop:function(t,i){return xe(this,l.prop,t,i,arguments.length>1)},removeProp:function(t){return this.each(function(){delete this[l.propFix[t]||t]})}}),l.extend({prop:function(t,i,r){var o,c,f=t.nodeType;if(!(f===3||f===8||f===2))return(f!==1||!l.isXMLDoc(t))&&(i=l.propFix[i]||i,c=l.propHooks[i]),r!==void 0?c&&"set"in c&&(o=c.set(t,r,i))!==void 0?o:t[i]=r:c&&"get"in c&&(o=c.get(t,i))!==null?o:t[i]},propHooks:{tabIndex:{get:function(t){var i=l.find.attr(t,"tabindex");return i?parseInt(i,10):ls.test(t.nodeName)||us.test(t.nodeName)&&t.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),B.optSelected||(l.propHooks.selected={get:function(t){var i=t.parentNode;return i&&i.parentNode&&i.parentNode.selectedIndex,null},set:function(t){var i=t.parentNode;i&&(i.selectedIndex,i.parentNode&&i.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Be(t){var i=t.match(se)||[];return i.join(" ")}function Ve(t){return t.getAttribute&&t.getAttribute("class")||""}function Sn(t){return Array.isArray(t)?t:typeof t=="string"?t.match(se)||[]:[]}l.fn.extend({addClass:function(t){var i,r,o,c,f,d;return F(t)?this.each(function(T){l(this).addClass(t.call(this,T,Ve(this)))}):(i=Sn(t),i.length?this.each(function(){if(o=Ve(this),r=this.nodeType===1&&" "+Be(o)+" ",r){for(f=0;f<i.length;f++)c=i[f],r.indexOf(" "+c+" ")<0&&(r+=c+" ");d=Be(r),o!==d&&this.setAttribute("class",d)}}):this)},removeClass:function(t){var i,r,o,c,f,d;return F(t)?this.each(function(T){l(this).removeClass(t.call(this,T,Ve(this)))}):arguments.length?(i=Sn(t),i.length?this.each(function(){if(o=Ve(this),r=this.nodeType===1&&" "+Be(o)+" ",r){for(f=0;f<i.length;f++)for(c=i[f];r.indexOf(" "+c+" ")>-1;)r=r.replace(" "+c+" "," ");d=Be(r),o!==d&&this.setAttribute("class",d)}}):this):this.attr("class","")},toggleClass:function(t,i){var r,o,c,f,d=typeof t,T=d==="string"||Array.isArray(t);return F(t)?this.each(function(b){l(this).toggleClass(t.call(this,b,Ve(this),i),i)}):typeof i=="boolean"&&T?i?this.addClass(t):this.removeClass(t):(r=Sn(t),this.each(function(){if(T)for(f=l(this),c=0;c<r.length;c++)o=r[c],f.hasClass(o)?f.removeClass(o):f.addClass(o);else(t===void 0||d==="boolean")&&(o=Ve(this),o&&it.set(this,"__className__",o),this.setAttribute&&this.setAttribute("class",o||t===!1?"":it.get(this,"__className__")||""))}))},hasClass:function(t){var i,r,o=0;for(i=" "+t+" ";r=this[o++];)if(r.nodeType===1&&(" "+Be(Ve(r))+" ").indexOf(i)>-1)return!0;return!1}});var cs=/\r/g;l.fn.extend({val:function(t){var i,r,o,c=this[0];return arguments.length?(o=F(t),this.each(function(f){var d;this.nodeType===1&&(o?d=t.call(this,f,l(this).val()):d=t,d==null?d="":typeof d=="number"?d+="":Array.isArray(d)&&(d=l.map(d,function(T){return T==null?"":T+""})),i=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!i||!("set"in i)||i.set(this,d,"value")===void 0)&&(this.value=d))})):c?(i=l.valHooks[c.type]||l.valHooks[c.nodeName.toLowerCase()],i&&"get"in i&&(r=i.get(c,"value"))!==void 0?r:(r=c.value,typeof r=="string"?r.replace(cs,""):r??"")):void 0}}),l.extend({valHooks:{option:{get:function(t){var i=l.find.attr(t,"value");return i??Be(l.text(t))}},select:{get:function(t){var i,r,o,c=t.options,f=t.selectedIndex,d=t.type==="select-one",T=d?null:[],b=d?f+1:c.length;for(f<0?o=b:o=d?f:0;o<b;o++)if(r=c[o],(r.selected||o===f)&&!r.disabled&&(!r.parentNode.disabled||!ct(r.parentNode,"optgroup"))){if(i=l(r).val(),d)return i;T.push(i)}return T},set:function(t,i){for(var r,o,c=t.options,f=l.makeArray(i),d=c.length;d--;)o=c[d],(o.selected=l.inArray(l.valHooks.option.get(o),f)>-1)&&(r=!0);return r||(t.selectedIndex=-1),f}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(t,i){if(Array.isArray(i))return t.checked=l.inArray(l(t).val(),i)>-1}},B.checkOn||(l.valHooks[this].get=function(t){return t.getAttribute("value")===null?"on":t.value})});var Ye=_.location,dr={guid:Date.now()},wn=/\?/;l.parseXML=function(t){var i,r;if(!t||typeof t!="string")return null;try{i=new _.DOMParser().parseFromString(t,"text/xml")}catch{}return r=i&&i.getElementsByTagName("parsererror")[0],(!i||r)&&l.error("Invalid XML: "+(r?l.map(r.childNodes,function(o){return o.textContent}).join(`
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
  // node_modules/ol/asserts.js
  function assert(assertion, errorMessage) {
    if (!assertion) {
      throw new Error(errorMessage);
    }
  }

  // node_modules/ol/extent/Relationship.js
  var Relationship_default = {
    UNKNOWN: 0,
    INTERSECTING: 1,
    ABOVE: 2,
    RIGHT: 4,
    BELOW: 8,
    LEFT: 16
  };

  // node_modules/ol/extent.js
  function boundingExtent(coordinates2) {
    const extent = createEmpty();
    for (let i = 0, ii = coordinates2.length; i < ii; ++i) {
      extendCoordinate(extent, coordinates2[i]);
    }
    return extent;
  }
  function _boundingExtentXYs(xs, ys, dest) {
    const minX = Math.min.apply(null, xs);
    const minY = Math.min.apply(null, ys);
    const maxX = Math.max.apply(null, xs);
    const maxY = Math.max.apply(null, ys);
    return createOrUpdate(minX, minY, maxX, maxY, dest);
  }
  function clone(extent, dest) {
    if (dest) {
      dest[0] = extent[0];
      dest[1] = extent[1];
      dest[2] = extent[2];
      dest[3] = extent[3];
      return dest;
    }
    return extent.slice();
  }
  function closestSquaredDistanceXY(extent, x, y) {
    let dx, dy;
    if (x < extent[0]) {
      dx = extent[0] - x;
    } else if (extent[2] < x) {
      dx = x - extent[2];
    } else {
      dx = 0;
    }
    if (y < extent[1]) {
      dy = extent[1] - y;
    } else if (extent[3] < y) {
      dy = y - extent[3];
    } else {
      dy = 0;
    }
    return dx * dx + dy * dy;
  }
  function containsCoordinate(extent, coordinate) {
    return containsXY(extent, coordinate[0], coordinate[1]);
  }
  function containsXY(extent, x, y) {
    return extent[0] <= x && x <= extent[2] && extent[1] <= y && y <= extent[3];
  }
  function coordinateRelationship(extent, coordinate) {
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const x = coordinate[0];
    const y = coordinate[1];
    let relationship = Relationship_default.UNKNOWN;
    if (x < minX) {
      relationship = relationship | Relationship_default.LEFT;
    } else if (x > maxX) {
      relationship = relationship | Relationship_default.RIGHT;
    }
    if (y < minY) {
      relationship = relationship | Relationship_default.BELOW;
    } else if (y > maxY) {
      relationship = relationship | Relationship_default.ABOVE;
    }
    if (relationship === Relationship_default.UNKNOWN) {
      relationship = Relationship_default.INTERSECTING;
    }
    return relationship;
  }
  function createEmpty() {
    return [Infinity, Infinity, -Infinity, -Infinity];
  }
  function createOrUpdate(minX, minY, maxX, maxY, dest) {
    if (dest) {
      dest[0] = minX;
      dest[1] = minY;
      dest[2] = maxX;
      dest[3] = maxY;
      return dest;
    }
    return [minX, minY, maxX, maxY];
  }
  function createOrUpdateEmpty(dest) {
    return createOrUpdate(Infinity, Infinity, -Infinity, -Infinity, dest);
  }
  function createOrUpdateFromCoordinate(coordinate, dest) {
    const x = coordinate[0];
    const y = coordinate[1];
    return createOrUpdate(x, y, x, y, dest);
  }
  function createOrUpdateFromFlatCoordinates(flatCoordinates, offset, end, stride, dest) {
    const extent = createOrUpdateEmpty(dest);
    return extendFlatCoordinates(extent, flatCoordinates, offset, end, stride);
  }
  function equals(extent1, extent2) {
    return extent1[0] == extent2[0] && extent1[2] == extent2[2] && extent1[1] == extent2[1] && extent1[3] == extent2[3];
  }
  function extend(extent1, extent2) {
    if (extent2[0] < extent1[0]) {
      extent1[0] = extent2[0];
    }
    if (extent2[2] > extent1[2]) {
      extent1[2] = extent2[2];
    }
    if (extent2[1] < extent1[1]) {
      extent1[1] = extent2[1];
    }
    if (extent2[3] > extent1[3]) {
      extent1[3] = extent2[3];
    }
    return extent1;
  }
  function extendCoordinate(extent, coordinate) {
    if (coordinate[0] < extent[0]) {
      extent[0] = coordinate[0];
    }
    if (coordinate[0] > extent[2]) {
      extent[2] = coordinate[0];
    }
    if (coordinate[1] < extent[1]) {
      extent[1] = coordinate[1];
    }
    if (coordinate[1] > extent[3]) {
      extent[3] = coordinate[1];
    }
  }
  function extendFlatCoordinates(extent, flatCoordinates, offset, end, stride) {
    for (; offset < end; offset += stride) {
      extendXY(extent, flatCoordinates[offset], flatCoordinates[offset + 1]);
    }
    return extent;
  }
  function extendXY(extent, x, y) {
    extent[0] = Math.min(extent[0], x);
    extent[1] = Math.min(extent[1], y);
    extent[2] = Math.max(extent[2], x);
    extent[3] = Math.max(extent[3], y);
  }
  function forEachCorner(extent, callback) {
    let val;
    val = callback(getBottomLeft(extent));
    if (val) {
      return val;
    }
    val = callback(getBottomRight(extent));
    if (val) {
      return val;
    }
    val = callback(getTopRight(extent));
    if (val) {
      return val;
    }
    val = callback(getTopLeft(extent));
    if (val) {
      return val;
    }
    return false;
  }
  function getArea(extent) {
    let area = 0;
    if (!isEmpty(extent)) {
      area = getWidth(extent) * getHeight(extent);
    }
    return area;
  }
  function getBottomLeft(extent) {
    return [extent[0], extent[1]];
  }
  function getBottomRight(extent) {
    return [extent[2], extent[1]];
  }
  function getCenter(extent) {
    return [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
  }
  function getCorner(extent, corner) {
    let coordinate;
    if (corner === "bottom-left") {
      coordinate = getBottomLeft(extent);
    } else if (corner === "bottom-right") {
      coordinate = getBottomRight(extent);
    } else if (corner === "top-left") {
      coordinate = getTopLeft(extent);
    } else if (corner === "top-right") {
      coordinate = getTopRight(extent);
    } else {
      throw new Error("Invalid corner");
    }
    return coordinate;
  }
  function getForViewAndSize(center, resolution, rotation, size, dest) {
    const [x0, y0, x1, y1, x2, y2, x3, y3] = getRotatedViewport(
      center,
      resolution,
      rotation,
      size
    );
    return createOrUpdate(
      Math.min(x0, x1, x2, x3),
      Math.min(y0, y1, y2, y3),
      Math.max(x0, x1, x2, x3),
      Math.max(y0, y1, y2, y3),
      dest
    );
  }
  function getRotatedViewport(center, resolution, rotation, size) {
    const dx = resolution * size[0] / 2;
    const dy = resolution * size[1] / 2;
    const cosRotation = Math.cos(rotation);
    const sinRotation = Math.sin(rotation);
    const xCos = dx * cosRotation;
    const xSin = dx * sinRotation;
    const yCos = dy * cosRotation;
    const ySin = dy * sinRotation;
    const x = center[0];
    const y = center[1];
    return [
      x - xCos + ySin,
      y - xSin - yCos,
      x - xCos - ySin,
      y - xSin + yCos,
      x + xCos - ySin,
      y + xSin + yCos,
      x + xCos + ySin,
      y + xSin - yCos,
      x - xCos + ySin,
      y - xSin - yCos
    ];
  }
  function getHeight(extent) {
    return extent[3] - extent[1];
  }
  function getIntersection(extent1, extent2, dest) {
    const intersection = dest ? dest : createEmpty();
    if (intersects(extent1, extent2)) {
      if (extent1[0] > extent2[0]) {
        intersection[0] = extent1[0];
      } else {
        intersection[0] = extent2[0];
      }
      if (extent1[1] > extent2[1]) {
        intersection[1] = extent1[1];
      } else {
        intersection[1] = extent2[1];
      }
      if (extent1[2] < extent2[2]) {
        intersection[2] = extent1[2];
      } else {
        intersection[2] = extent2[2];
      }
      if (extent1[3] < extent2[3]) {
        intersection[3] = extent1[3];
      } else {
        intersection[3] = extent2[3];
      }
    } else {
      createOrUpdateEmpty(intersection);
    }
    return intersection;
  }
  function getTopLeft(extent) {
    return [extent[0], extent[3]];
  }
  function getTopRight(extent) {
    return [extent[2], extent[3]];
  }
  function getWidth(extent) {
    return extent[2] - extent[0];
  }
  function intersects(extent1, extent2) {
    return extent1[0] <= extent2[2] && extent1[2] >= extent2[0] && extent1[1] <= extent2[3] && extent1[3] >= extent2[1];
  }
  function isEmpty(extent) {
    return extent[2] < extent[0] || extent[3] < extent[1];
  }
  function returnOrUpdate(extent, dest) {
    if (dest) {
      dest[0] = extent[0];
      dest[1] = extent[1];
      dest[2] = extent[2];
      dest[3] = extent[3];
      return dest;
    }
    return extent;
  }
  function intersectsSegment(extent, start, end) {
    let intersects3 = false;
    const startRel = coordinateRelationship(extent, start);
    const endRel = coordinateRelationship(extent, end);
    if (startRel === Relationship_default.INTERSECTING || endRel === Relationship_default.INTERSECTING) {
      intersects3 = true;
    } else {
      const minX = extent[0];
      const minY = extent[1];
      const maxX = extent[2];
      const maxY = extent[3];
      const startX = start[0];
      const startY = start[1];
      const endX = end[0];
      const endY = end[1];
      const slope = (endY - startY) / (endX - startX);
      let x, y;
      if (!!(endRel & Relationship_default.ABOVE) && !(startRel & Relationship_default.ABOVE)) {
        x = endX - (endY - maxY) / slope;
        intersects3 = x >= minX && x <= maxX;
      }
      if (!intersects3 && !!(endRel & Relationship_default.RIGHT) && !(startRel & Relationship_default.RIGHT)) {
        y = endY - (endX - maxX) * slope;
        intersects3 = y >= minY && y <= maxY;
      }
      if (!intersects3 && !!(endRel & Relationship_default.BELOW) && !(startRel & Relationship_default.BELOW)) {
        x = endX - (endY - minY) / slope;
        intersects3 = x >= minX && x <= maxX;
      }
      if (!intersects3 && !!(endRel & Relationship_default.LEFT) && !(startRel & Relationship_default.LEFT)) {
        y = endY - (endX - minX) * slope;
        intersects3 = y >= minY && y <= maxY;
      }
    }
    return intersects3;
  }
  function applyTransform(extent, transformFn, dest, stops) {
    if (isEmpty(extent)) {
      return createOrUpdateEmpty(dest);
    }
    let coordinates2 = [];
    if (stops > 1) {
      const width = extent[2] - extent[0];
      const height = extent[3] - extent[1];
      for (let i = 0; i < stops; ++i) {
        coordinates2.push(
          extent[0] + width * i / stops,
          extent[1],
          extent[2],
          extent[1] + height * i / stops,
          extent[2] - width * i / stops,
          extent[3],
          extent[0],
          extent[3] - height * i / stops
        );
      }
    } else {
      coordinates2 = [
        extent[0],
        extent[1],
        extent[2],
        extent[1],
        extent[2],
        extent[3],
        extent[0],
        extent[3]
      ];
    }
    transformFn(coordinates2, coordinates2, 2);
    const xs = [];
    const ys = [];
    for (let i = 0, l = coordinates2.length; i < l; i += 2) {
      xs.push(coordinates2[i]);
      ys.push(coordinates2[i + 1]);
    }
    return _boundingExtentXYs(xs, ys, dest);
  }
  function wrapX(extent, projection) {
    const projectionExtent = projection.getExtent();
    const center = getCenter(extent);
    if (projection.canWrapX() && (center[0] < projectionExtent[0] || center[0] >= projectionExtent[2])) {
      const worldWidth = getWidth(projectionExtent);
      const worldsAway = Math.floor(
        (center[0] - projectionExtent[0]) / worldWidth
      );
      const offset = worldsAway * worldWidth;
      extent[0] -= offset;
      extent[2] -= offset;
    }
    return extent;
  }
  function wrapAndSliceX(extent, projection, multiWorld) {
    if (projection.canWrapX()) {
      const projectionExtent = projection.getExtent();
      if (!isFinite(extent[0]) || !isFinite(extent[2])) {
        return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
      }
      wrapX(extent, projection);
      const worldWidth = getWidth(projectionExtent);
      if (getWidth(extent) > worldWidth && !multiWorld) {
        return [[projectionExtent[0], extent[1], projectionExtent[2], extent[3]]];
      }
      if (extent[0] < projectionExtent[0]) {
        return [
          [extent[0] + worldWidth, extent[1], projectionExtent[2], extent[3]],
          [projectionExtent[0], extent[1], extent[2], extent[3]]
        ];
      }
      if (extent[2] > projectionExtent[2]) {
        return [
          [extent[0], extent[1], projectionExtent[2], extent[3]],
          [projectionExtent[0], extent[1], extent[2] - worldWidth, extent[3]]
        ];
      }
    }
    return [extent];
  }

  // node_modules/ol/format/IIIFInfo.js
  var Versions = {
    VERSION1: "version1",
    VERSION2: "version2",
    VERSION3: "version3"
  };
  var IIIF_PROFILE_VALUES = {};
  IIIF_PROFILE_VALUES[Versions.VERSION1] = {
    "level0": {
      supports: [],
      formats: [],
      qualities: ["native"]
    },
    "level1": {
      supports: ["regionByPx", "sizeByW", "sizeByH", "sizeByPct"],
      formats: ["jpg"],
      qualities: ["native"]
    },
    "level2": {
      supports: [
        "regionByPx",
        "regionByPct",
        "sizeByW",
        "sizeByH",
        "sizeByPct",
        "sizeByConfinedWh",
        "sizeByWh"
      ],
      formats: ["jpg", "png"],
      qualities: ["native", "color", "grey", "bitonal"]
    }
  };
  IIIF_PROFILE_VALUES[Versions.VERSION2] = {
    "level0": {
      supports: [],
      formats: ["jpg"],
      qualities: ["default"]
    },
    "level1": {
      supports: ["regionByPx", "sizeByW", "sizeByH", "sizeByPct"],
      formats: ["jpg"],
      qualities: ["default"]
    },
    "level2": {
      supports: [
        "regionByPx",
        "regionByPct",
        "sizeByW",
        "sizeByH",
        "sizeByPct",
        "sizeByConfinedWh",
        "sizeByDistortedWh",
        "sizeByWh"
      ],
      formats: ["jpg", "png"],
      qualities: ["default", "bitonal"]
    }
  };
  IIIF_PROFILE_VALUES[Versions.VERSION3] = {
    "level0": {
      supports: [],
      formats: ["jpg"],
      qualities: ["default"]
    },
    "level1": {
      supports: ["regionByPx", "regionSquare", "sizeByW", "sizeByH", "sizeByWh"],
      formats: ["jpg"],
      qualities: ["default"]
    },
    "level2": {
      supports: [
        "regionByPx",
        "regionSquare",
        "regionByPct",
        "sizeByW",
        "sizeByH",
        "sizeByPct",
        "sizeByConfinedWh",
        "sizeByWh"
      ],
      formats: ["jpg", "png"],
      qualities: ["default"]
    }
  };
  IIIF_PROFILE_VALUES["none"] = {
    "none": {
      supports: [],
      formats: [],
      qualities: []
    }
  };
  var COMPLIANCE_VERSION1 = /^https?:\/\/library\.stanford\.edu\/iiif\/image-api\/(?:1\.1\/)?compliance\.html#level[0-2]$/;
  var COMPLIANCE_VERSION2 = /^https?:\/\/iiif\.io\/api\/image\/2\/level[0-2](?:\.json)?$/;
  var COMPLIANCE_VERSION3 = /(^https?:\/\/iiif\.io\/api\/image\/3\/level[0-2](?:\.json)?$)|(^level[0-2]$)/;
  function generateVersion1Options(iiifInfo) {
    let levelProfile = iiifInfo.getComplianceLevelSupportedFeatures();
    if (levelProfile === void 0) {
      levelProfile = IIIF_PROFILE_VALUES[Versions.VERSION1]["level0"];
    }
    return {
      url: iiifInfo.imageInfo["@id"] === void 0 ? void 0 : iiifInfo.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g, ""),
      supports: levelProfile.supports,
      formats: [
        ...levelProfile.formats,
        iiifInfo.imageInfo.formats === void 0 ? [] : iiifInfo.imageInfo.formats
      ],
      qualities: [
        ...levelProfile.qualities,
        iiifInfo.imageInfo.qualities === void 0 ? [] : iiifInfo.imageInfo.qualities
      ],
      resolutions: iiifInfo.imageInfo.scale_factors,
      tileSize: iiifInfo.imageInfo.tile_width !== void 0 ? iiifInfo.imageInfo.tile_height !== void 0 ? [iiifInfo.imageInfo.tile_width, iiifInfo.imageInfo.tile_height] : [iiifInfo.imageInfo.tile_width, iiifInfo.imageInfo.tile_width] : iiifInfo.imageInfo.tile_height != void 0 ? [iiifInfo.imageInfo.tile_height, iiifInfo.imageInfo.tile_height] : void 0
    };
  }
  function generateVersion2Options(iiifInfo) {
    const levelProfile = iiifInfo.getComplianceLevelSupportedFeatures(), additionalProfile = Array.isArray(iiifInfo.imageInfo.profile) && iiifInfo.imageInfo.profile.length > 1, profileSupports = additionalProfile && iiifInfo.imageInfo.profile[1].supports ? iiifInfo.imageInfo.profile[1].supports : [], profileFormats = additionalProfile && iiifInfo.imageInfo.profile[1].formats ? iiifInfo.imageInfo.profile[1].formats : [], profileQualities = additionalProfile && iiifInfo.imageInfo.profile[1].qualities ? iiifInfo.imageInfo.profile[1].qualities : [];
    return {
      url: iiifInfo.imageInfo["@id"].replace(/\/?(?:info\.json)?$/g, ""),
      sizes: iiifInfo.imageInfo.sizes === void 0 ? void 0 : iiifInfo.imageInfo.sizes.map(function(size) {
        return [size.width, size.height];
      }),
      tileSize: iiifInfo.imageInfo.tiles === void 0 ? void 0 : [
        iiifInfo.imageInfo.tiles.map(function(tile) {
          return tile.width;
        })[0],
        iiifInfo.imageInfo.tiles.map(function(tile) {
          return tile.height === void 0 ? tile.width : tile.height;
        })[0]
      ],
      resolutions: iiifInfo.imageInfo.tiles === void 0 ? void 0 : iiifInfo.imageInfo.tiles.map(function(tile) {
        return tile.scaleFactors;
      })[0],
      supports: [...levelProfile.supports, ...profileSupports],
      formats: [...levelProfile.formats, ...profileFormats],
      qualities: [...levelProfile.qualities, ...profileQualities]
    };
  }
  function generateVersion3Options(iiifInfo) {
    const levelProfile = iiifInfo.getComplianceLevelSupportedFeatures(), formats = iiifInfo.imageInfo.extraFormats === void 0 ? levelProfile.formats : [...levelProfile.formats, ...iiifInfo.imageInfo.extraFormats], preferredFormat = iiifInfo.imageInfo.preferredFormats !== void 0 && Array.isArray(iiifInfo.imageInfo.preferredFormats) && iiifInfo.imageInfo.preferredFormats.length > 0 ? iiifInfo.imageInfo.preferredFormats.filter(function(format) {
      return ["jpg", "png", "gif"].includes(format);
    }).reduce(function(acc, format) {
      return acc === void 0 && formats.includes(format) ? format : acc;
    }, void 0) : void 0;
    return {
      url: iiifInfo.imageInfo["id"],
      sizes: iiifInfo.imageInfo.sizes === void 0 ? void 0 : iiifInfo.imageInfo.sizes.map(function(size) {
        return [size.width, size.height];
      }),
      tileSize: iiifInfo.imageInfo.tiles === void 0 ? void 0 : [
        iiifInfo.imageInfo.tiles.map(function(tile) {
          return tile.width;
        })[0],
        iiifInfo.imageInfo.tiles.map(function(tile) {
          return tile.height;
        })[0]
      ],
      resolutions: iiifInfo.imageInfo.tiles === void 0 ? void 0 : iiifInfo.imageInfo.tiles.map(function(tile) {
        return tile.scaleFactors;
      })[0],
      supports: iiifInfo.imageInfo.extraFeatures === void 0 ? levelProfile.supports : [...levelProfile.supports, ...iiifInfo.imageInfo.extraFeatures],
      formats,
      qualities: iiifInfo.imageInfo.extraQualities === void 0 ? levelProfile.qualities : [...levelProfile.qualities, ...iiifInfo.imageInfo.extraQualities],
      preferredFormat
    };
  }
  var versionFunctions = {};
  versionFunctions[Versions.VERSION1] = generateVersion1Options;
  versionFunctions[Versions.VERSION2] = generateVersion2Options;
  versionFunctions[Versions.VERSION3] = generateVersion3Options;
  var IIIFInfo = class {
    /**
     * @param {string|ImageInformationResponse} imageInfo
     * Deserialized image information JSON response object or JSON response as string
     */
    constructor(imageInfo) {
      this.setImageInfo(imageInfo);
    }
    /**
     * @param {string|ImageInformationResponse} imageInfo
     * Deserialized image information JSON response object or JSON response as string
     * @api
     */
    setImageInfo(imageInfo) {
      if (typeof imageInfo == "string") {
        this.imageInfo = JSON.parse(imageInfo);
      } else {
        this.imageInfo = imageInfo;
      }
    }
    /**
     * @return {Versions|undefined} Major IIIF version.
     * @api
     */
    getImageApiVersion() {
      if (this.imageInfo === void 0) {
        return void 0;
      }
      let context = this.imageInfo["@context"] || "ol-no-context";
      if (typeof context == "string") {
        context = [context];
      }
      for (let i = 0; i < context.length; i++) {
        switch (context[i]) {
          case "http://library.stanford.edu/iiif/image-api/1.1/context.json":
          case "http://iiif.io/api/image/1/context.json":
            return Versions.VERSION1;
          case "http://iiif.io/api/image/2/context.json":
            return Versions.VERSION2;
          case "http://iiif.io/api/image/3/context.json":
            return Versions.VERSION3;
          case "ol-no-context":
            if (this.getComplianceLevelEntryFromProfile(Versions.VERSION1) && this.imageInfo.identifier) {
              return Versions.VERSION1;
            }
            break;
          default:
        }
      }
      assert(
        false,
        "Cannot determine IIIF Image API version from provided image information JSON"
      );
    }
    /**
     * @param {Versions} version Optional IIIF image API version
     * @return {string|undefined} Compliance level as it appears in the IIIF image information
     * response.
     */
    getComplianceLevelEntryFromProfile(version) {
      if (this.imageInfo === void 0 || this.imageInfo.profile === void 0) {
        return void 0;
      }
      if (version === void 0) {
        version = this.getImageApiVersion();
      }
      switch (version) {
        case Versions.VERSION1:
          if (COMPLIANCE_VERSION1.test(this.imageInfo.profile)) {
            return this.imageInfo.profile;
          }
          break;
        case Versions.VERSION3:
          if (COMPLIANCE_VERSION3.test(this.imageInfo.profile)) {
            return this.imageInfo.profile;
          }
          break;
        case Versions.VERSION2:
          if (typeof this.imageInfo.profile === "string" && COMPLIANCE_VERSION2.test(this.imageInfo.profile)) {
            return this.imageInfo.profile;
          }
          if (Array.isArray(this.imageInfo.profile) && this.imageInfo.profile.length > 0 && typeof this.imageInfo.profile[0] === "string" && COMPLIANCE_VERSION2.test(this.imageInfo.profile[0])) {
            return this.imageInfo.profile[0];
          }
          break;
        default:
      }
      return void 0;
    }
    /**
     * @param {Versions} version Optional IIIF image API version
     * @return {string} Compliance level, on of 'level0', 'level1' or 'level2' or undefined
     */
    getComplianceLevelFromProfile(version) {
      const complianceLevel = this.getComplianceLevelEntryFromProfile(version);
      if (complianceLevel === void 0) {
        return void 0;
      }
      const level2 = complianceLevel.match(/level[0-2](?:\.json)?$/g);
      return Array.isArray(level2) ? level2[0].replace(".json", "") : void 0;
    }
    /**
     * @return {SupportedFeatures|undefined} Image formats, qualities and region / size calculation
     * methods that are supported by the IIIF service.
     */
    getComplianceLevelSupportedFeatures() {
      if (this.imageInfo === void 0) {
        return void 0;
      }
      const version = this.getImageApiVersion();
      const level2 = this.getComplianceLevelFromProfile(version);
      if (level2 === void 0) {
        return IIIF_PROFILE_VALUES["none"]["none"];
      }
      return IIIF_PROFILE_VALUES[version][level2];
    }
    /**
     * @param {PreferredOptions} [preferredOptions] Optional options for preferred format and quality.
     * @return {import("../source/IIIF.js").Options|undefined} IIIF tile source ready constructor options.
     * @api
     */
    getTileSourceOptions(preferredOptions) {
      const options = preferredOptions || {}, version = this.getImageApiVersion();
      if (version === void 0) {
        return void 0;
      }
      const imageOptions = version === void 0 ? void 0 : versionFunctions[version](this);
      if (imageOptions === void 0) {
        return void 0;
      }
      return {
        url: imageOptions.url,
        version,
        size: [this.imageInfo.width, this.imageInfo.height],
        sizes: imageOptions.sizes,
        format: options.format !== void 0 && imageOptions.formats.includes(options.format) ? options.format : imageOptions.preferredFormat !== void 0 ? imageOptions.preferredFormat : "jpg",
        supports: imageOptions.supports,
        quality: options.quality && imageOptions.qualities.includes(options.quality) ? options.quality : imageOptions.qualities.includes("native") ? "native" : "default",
        resolutions: Array.isArray(imageOptions.resolutions) ? imageOptions.resolutions.sort(function(a, b) {
          return b - a;
        }) : void 0,
        tileSize: imageOptions.tileSize
      };
    }
  };
  var IIIFInfo_default = IIIFInfo;

  // node_modules/ol/size.js
  function hasArea(size) {
    return size[0] > 0 && size[1] > 0;
  }
  function scale(size, ratio, dest) {
    if (dest === void 0) {
      dest = [0, 0];
    }
    dest[0] = size[0] * ratio + 0.5 | 0;
    dest[1] = size[1] * ratio + 0.5 | 0;
    return dest;
  }
  function toSize(size, dest) {
    if (Array.isArray(size)) {
      return size;
    }
    if (dest === void 0) {
      dest = [size, size];
    } else {
      dest[0] = size;
      dest[1] = size;
    }
    return dest;
  }

  // node_modules/ol/TileRange.js
  var TileRange = class {
    /**
     * @param {number} minX Minimum X.
     * @param {number} maxX Maximum X.
     * @param {number} minY Minimum Y.
     * @param {number} maxY Maximum Y.
     */
    constructor(minX, maxX, minY, maxY) {
      this.minX = minX;
      this.maxX = maxX;
      this.minY = minY;
      this.maxY = maxY;
    }
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {boolean} Contains tile coordinate.
     */
    contains(tileCoord) {
      return this.containsXY(tileCoord[1], tileCoord[2]);
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Contains.
     */
    containsTileRange(tileRange) {
      return this.minX <= tileRange.minX && tileRange.maxX <= this.maxX && this.minY <= tileRange.minY && tileRange.maxY <= this.maxY;
    }
    /**
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @return {boolean} Contains coordinate.
     */
    containsXY(x, y) {
      return this.minX <= x && x <= this.maxX && this.minY <= y && y <= this.maxY;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Equals.
     */
    equals(tileRange) {
      return this.minX == tileRange.minX && this.minY == tileRange.minY && this.maxX == tileRange.maxX && this.maxY == tileRange.maxY;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     */
    extend(tileRange) {
      if (tileRange.minX < this.minX) {
        this.minX = tileRange.minX;
      }
      if (tileRange.maxX > this.maxX) {
        this.maxX = tileRange.maxX;
      }
      if (tileRange.minY < this.minY) {
        this.minY = tileRange.minY;
      }
      if (tileRange.maxY > this.maxY) {
        this.maxY = tileRange.maxY;
      }
    }
    /**
     * @return {number} Height.
     */
    getHeight() {
      return this.maxY - this.minY + 1;
    }
    /**
     * @return {import("./size.js").Size} Size.
     */
    getSize() {
      return [this.getWidth(), this.getHeight()];
    }
    /**
     * @return {number} Width.
     */
    getWidth() {
      return this.maxX - this.minX + 1;
    }
    /**
     * @param {TileRange} tileRange Tile range.
     * @return {boolean} Intersects.
     */
    intersects(tileRange) {
      return this.minX <= tileRange.maxX && this.maxX >= tileRange.minX && this.minY <= tileRange.maxY && this.maxY >= tileRange.minY;
    }
  };
  function createOrUpdate2(minX, maxX, minY, maxY, tileRange) {
    if (tileRange !== void 0) {
      tileRange.minX = minX;
      tileRange.maxX = maxX;
      tileRange.minY = minY;
      tileRange.maxY = maxY;
      return tileRange;
    }
    return new TileRange(minX, maxX, minY, maxY);
  }
  var TileRange_default = TileRange;

  // node_modules/ol/array.js
  function ascending(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
  }
  function linearFindNearest(arr, target, direction) {
    if (arr[0] <= target) {
      return 0;
    }
    const n = arr.length;
    if (target <= arr[n - 1]) {
      return n - 1;
    }
    if (typeof direction === "function") {
      for (let i = 1; i < n; ++i) {
        const candidate = arr[i];
        if (candidate === target) {
          return i;
        }
        if (candidate < target) {
          if (direction(target, arr[i - 1], candidate) > 0) {
            return i - 1;
          }
          return i;
        }
      }
      return n - 1;
    }
    if (direction > 0) {
      for (let i = 1; i < n; ++i) {
        if (arr[i] < target) {
          return i - 1;
        }
      }
      return n - 1;
    }
    if (direction < 0) {
      for (let i = 1; i < n; ++i) {
        if (arr[i] <= target) {
          return i;
        }
      }
      return n - 1;
    }
    for (let i = 1; i < n; ++i) {
      if (arr[i] == target) {
        return i;
      }
      if (arr[i] < target) {
        if (arr[i - 1] - target < target - arr[i]) {
          return i - 1;
        }
        return i;
      }
    }
    return n - 1;
  }
  function extend2(arr, data) {
    const extension = Array.isArray(data) ? data : [data];
    const length = extension.length;
    for (let i = 0; i < length; i++) {
      arr[arr.length] = extension[i];
    }
  }
  function equals2(arr1, arr2) {
    const len1 = arr1.length;
    if (len1 !== arr2.length) {
      return false;
    }
    for (let i = 0; i < len1; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
  function isSorted(arr, func, strict) {
    const compare = func || ascending;
    return arr.every(function(currentVal, index) {
      if (index === 0) {
        return true;
      }
      const res = compare(arr[index - 1], currentVal);
      return !(res > 0 || strict && res === 0);
    });
  }

  // node_modules/ol/geom/flat/contains.js
  function linearRingContainsExtent(flatCoordinates, offset, end, stride, extent) {
    const outside = forEachCorner(
      extent,
      /**
       * @param {import("../../coordinate.js").Coordinate} coordinate Coordinate.
       * @return {boolean} Contains (x, y).
       */
      function(coordinate) {
        return !linearRingContainsXY(
          flatCoordinates,
          offset,
          end,
          stride,
          coordinate[0],
          coordinate[1]
        );
      }
    );
    return !outside;
  }
  function linearRingContainsXY(flatCoordinates, offset, end, stride, x, y) {
    let wn = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for (; offset < end; offset += stride) {
      const x2 = flatCoordinates[offset];
      const y2 = flatCoordinates[offset + 1];
      if (y1 <= y) {
        if (y2 > y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) > 0) {
          wn++;
        }
      } else if (y2 <= y && (x2 - x1) * (y - y1) - (x - x1) * (y2 - y1) < 0) {
        wn--;
      }
      x1 = x2;
      y1 = y2;
    }
    return wn !== 0;
  }
  function linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y) {
    if (ends.length === 0) {
      return false;
    }
    if (!linearRingContainsXY(flatCoordinates, offset, ends[0], stride, x, y)) {
      return false;
    }
    for (let i = 1, ii = ends.length; i < ii; ++i) {
      if (linearRingContainsXY(flatCoordinates, ends[i - 1], ends[i], stride, x, y)) {
        return false;
      }
    }
    return true;
  }

  // node_modules/ol/geom/flat/segments.js
  function forEach(flatCoordinates, offset, end, stride, callback) {
    let ret;
    offset += stride;
    for (; offset < end; offset += stride) {
      ret = callback(
        flatCoordinates.slice(offset - stride, offset),
        flatCoordinates.slice(offset, offset + stride)
      );
      if (ret) {
        return ret;
      }
    }
    return false;
  }

  // node_modules/ol/geom/flat/intersectsextent.js
  function intersectsLineString(flatCoordinates, offset, end, stride, extent, coordinatesExtent) {
    coordinatesExtent = coordinatesExtent ?? extendFlatCoordinates(createEmpty(), flatCoordinates, offset, end, stride);
    if (!intersects(extent, coordinatesExtent)) {
      return false;
    }
    if (coordinatesExtent[0] >= extent[0] && coordinatesExtent[2] <= extent[2] || coordinatesExtent[1] >= extent[1] && coordinatesExtent[3] <= extent[3]) {
      return true;
    }
    return forEach(
      flatCoordinates,
      offset,
      end,
      stride,
      /**
       * @param {import("../../coordinate.js").Coordinate} point1 Start point.
       * @param {import("../../coordinate.js").Coordinate} point2 End point.
       * @return {boolean} `true` if the segment and the extent intersect,
       *     `false` otherwise.
       */
      function(point1, point2) {
        return intersectsSegment(extent, point1, point2);
      }
    );
  }
  function intersectsLinearRing(flatCoordinates, offset, end, stride, extent) {
    if (intersectsLineString(flatCoordinates, offset, end, stride, extent)) {
      return true;
    }
    if (linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[0],
      extent[1]
    )) {
      return true;
    }
    if (linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[0],
      extent[3]
    )) {
      return true;
    }
    if (linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[2],
      extent[1]
    )) {
      return true;
    }
    if (linearRingContainsXY(
      flatCoordinates,
      offset,
      end,
      stride,
      extent[2],
      extent[3]
    )) {
      return true;
    }
    return false;
  }
  function intersectsLinearRingArray(flatCoordinates, offset, ends, stride, extent) {
    if (!intersectsLinearRing(flatCoordinates, offset, ends[0], stride, extent)) {
      return false;
    }
    if (ends.length === 1) {
      return true;
    }
    for (let i = 1, ii = ends.length; i < ii; ++i) {
      if (linearRingContainsExtent(
        flatCoordinates,
        ends[i - 1],
        ends[i],
        stride,
        extent
      )) {
        if (!intersectsLineString(
          flatCoordinates,
          ends[i - 1],
          ends[i],
          stride,
          extent
        )) {
          return false;
        }
      }
    }
    return true;
  }

  // node_modules/ol/math.js
  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }
  function squaredSegmentDistance(x, y, x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    if (dx !== 0 || dy !== 0) {
      const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        x1 = x2;
        y1 = y2;
      } else if (t > 0) {
        x1 += dx * t;
        y1 += dy * t;
      }
    }
    return squaredDistance(x, y, x1, y1);
  }
  function squaredDistance(x1, y1, x2, y2) {
    const dx = x2 - x1;
    const dy = y2 - y1;
    return dx * dx + dy * dy;
  }
  function solveLinearSystem(mat) {
    const n = mat.length;
    for (let i = 0; i < n; i++) {
      let maxRow = i;
      let maxEl = Math.abs(mat[i][i]);
      for (let r = i + 1; r < n; r++) {
        const absValue = Math.abs(mat[r][i]);
        if (absValue > maxEl) {
          maxEl = absValue;
          maxRow = r;
        }
      }
      if (maxEl === 0) {
        return null;
      }
      const tmp = mat[maxRow];
      mat[maxRow] = mat[i];
      mat[i] = tmp;
      for (let j = i + 1; j < n; j++) {
        const coef = -mat[j][i] / mat[i][i];
        for (let k = i; k < n + 1; k++) {
          if (i == k) {
            mat[j][k] = 0;
          } else {
            mat[j][k] += coef * mat[i][k];
          }
        }
      }
    }
    const x = new Array(n);
    for (let l = n - 1; l >= 0; l--) {
      x[l] = mat[l][n] / mat[l][l];
      for (let m = l - 1; m >= 0; m--) {
        mat[m][n] -= mat[m][l] * x[l];
      }
    }
    return x;
  }
  function toDegrees(angleInRadians) {
    return angleInRadians * 180 / Math.PI;
  }
  function toRadians(angleInDegrees) {
    return angleInDegrees * Math.PI / 180;
  }
  function modulo(a, b) {
    const r = a % b;
    return r * b < 0 ? r + b : r;
  }
  function lerp(a, b, x) {
    return a + x * (b - a);
  }
  function toFixed(n, decimals) {
    const factor = Math.pow(10, decimals);
    return Math.round(n * factor) / factor;
  }
  function floor(n, decimals) {
    return Math.floor(toFixed(n, decimals));
  }
  function ceil(n, decimals) {
    return Math.ceil(toFixed(n, decimals));
  }
  function wrap(n, min, max) {
    if (n >= min && n < max) {
      return n;
    }
    const range = max - min;
    return ((n - min) % range + range) % range + min;
  }

  // node_modules/ol/util.js
  function abstract() {
    throw new Error("Unimplemented abstract method.");
  }
  var uidCounter_ = 0;
  function getUid(obj) {
    return obj.ol_uid || (obj.ol_uid = String(++uidCounter_));
  }

  // node_modules/ol/tilecoord.js
  function createOrUpdate3(z, x, y, tileCoord) {
    if (tileCoord !== void 0) {
      tileCoord[0] = z;
      tileCoord[1] = x;
      tileCoord[2] = y;
      return tileCoord;
    }
    return [z, x, y];
  }
  function getKeyZXY(z, x, y) {
    return z + "/" + x + "/" + y;
  }
  function getCacheKey(source, sourceKey, z, x, y) {
    return `${getUid(source)},${sourceKey},${getKeyZXY(z, x, y)}`;
  }
  function hash(tileCoord) {
    return hashZXY(tileCoord[0], tileCoord[1], tileCoord[2]);
  }
  function hashZXY(z, x, y) {
    return (x << z) + y;
  }
  function withinExtentAndZ(tileCoord, tileGrid) {
    const z = tileCoord[0];
    const x = tileCoord[1];
    const y = tileCoord[2];
    if (tileGrid.getMinZoom() > z || z > tileGrid.getMaxZoom()) {
      return false;
    }
    const tileRange = tileGrid.getFullTileRange(z);
    if (!tileRange) {
      return true;
    }
    return tileRange.containsXY(x, y);
  }

  // node_modules/ol/tilegrid/common.js
  var DEFAULT_MAX_ZOOM = 42;
  var DEFAULT_TILE_SIZE = 256;

  // node_modules/ol/tilegrid/TileGrid.js
  var tmpTileCoord = [0, 0, 0];
  var DECIMALS = 5;
  var TileGrid = class {
    /**
     * @param {Options} options Tile grid options.
     */
    constructor(options) {
      this.minZoom = options.minZoom !== void 0 ? options.minZoom : 0;
      this.resolutions_ = options.resolutions;
      assert(
        isSorted(
          this.resolutions_,
          /**
           * @param {number} a First resolution
           * @param {number} b Second resolution
           * @return {number} Comparison result
           */
          (a, b) => b - a,
          true
        ),
        "`resolutions` must be sorted in descending order"
      );
      let zoomFactor;
      if (!options.origins) {
        for (let i = 0, ii = this.resolutions_.length - 1; i < ii; ++i) {
          if (!zoomFactor) {
            zoomFactor = this.resolutions_[i] / this.resolutions_[i + 1];
          } else {
            if (this.resolutions_[i] / this.resolutions_[i + 1] !== zoomFactor) {
              zoomFactor = void 0;
              break;
            }
          }
        }
      }
      this.zoomFactor_ = zoomFactor;
      this.maxZoom = this.resolutions_.length - 1;
      this.origin_ = options.origin !== void 0 ? options.origin : null;
      this.origins_ = null;
      if (options.origins !== void 0) {
        this.origins_ = options.origins;
        assert(
          this.origins_.length == this.resolutions_.length,
          "Number of `origins` and `resolutions` must be equal"
        );
      }
      const extent = options.extent;
      if (extent !== void 0 && !this.origin_ && !this.origins_) {
        this.origin_ = getTopLeft(extent);
      }
      assert(
        !this.origin_ && this.origins_ || this.origin_ && !this.origins_,
        "Either `origin` or `origins` must be configured, never both"
      );
      this.tileSizes_ = null;
      if (options.tileSizes !== void 0) {
        this.tileSizes_ = options.tileSizes;
        assert(
          this.tileSizes_.length == this.resolutions_.length,
          "Number of `tileSizes` and `resolutions` must be equal"
        );
      }
      this.tileSize_ = options.tileSize !== void 0 ? options.tileSize : !this.tileSizes_ ? DEFAULT_TILE_SIZE : null;
      assert(
        !this.tileSize_ && this.tileSizes_ || this.tileSize_ && !this.tileSizes_,
        "Either `tileSize` or `tileSizes` must be configured, never both"
      );
      this.extent_ = extent !== void 0 ? extent : null;
      this.fullTileRanges_ = null;
      this.tmpSize_ = [0, 0];
      this.tmpExtent_ = [0, 0, 0, 0];
      if (options.sizes !== void 0) {
        this.fullTileRanges_ = options.sizes.map((size, z) => {
          const tileRange = new TileRange_default(
            Math.min(0, size[0]),
            Math.max(size[0] - 1, -1),
            Math.min(0, size[1]),
            Math.max(size[1] - 1, -1)
          );
          if (extent) {
            const restrictedTileRange = this.getTileRangeForExtentAndZ(extent, z);
            tileRange.minX = Math.max(restrictedTileRange.minX, tileRange.minX);
            tileRange.maxX = Math.min(restrictedTileRange.maxX, tileRange.maxX);
            tileRange.minY = Math.max(restrictedTileRange.minY, tileRange.minY);
            tileRange.maxY = Math.min(restrictedTileRange.maxY, tileRange.maxY);
          }
          return tileRange;
        });
      } else if (extent) {
        this.calculateTileRanges_(extent);
      }
    }
    /**
     * Call a function with each tile coordinate for a given extent and zoom level.
     *
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} zoom Integer zoom level.
     * @param {function(import("../tilecoord.js").TileCoord): void} callback Function called with each tile coordinate.
     * @api
     */
    forEachTileCoord(extent, zoom, callback) {
      const tileRange = this.getTileRangeForExtentAndZ(extent, zoom);
      for (let i = tileRange.minX, ii = tileRange.maxX; i <= ii; ++i) {
        for (let j = tileRange.minY, jj = tileRange.maxY; j <= jj; ++j) {
          callback([zoom, i, j]);
        }
      }
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {function(number, import("../TileRange.js").default): boolean} callback Callback.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
     * @return {boolean} Callback succeeded.
     */
    forEachTileCoordParentTileRange(tileCoord, callback, tempTileRange, tempExtent) {
      let tileRange, x, y;
      let tileCoordExtent = null;
      let z = tileCoord[0] - 1;
      if (this.zoomFactor_ === 2) {
        x = tileCoord[1];
        y = tileCoord[2];
      } else {
        tileCoordExtent = this.getTileCoordExtent(tileCoord, tempExtent);
      }
      while (z >= this.minZoom) {
        if (x !== void 0 && y !== void 0) {
          x = Math.floor(x / 2);
          y = Math.floor(y / 2);
          tileRange = createOrUpdate2(x, x, y, y, tempTileRange);
        } else {
          tileRange = this.getTileRangeForExtentAndZ(
            tileCoordExtent,
            z,
            tempTileRange
          );
        }
        if (callback(z, tileRange)) {
          return true;
        }
        --z;
      }
      return false;
    }
    /**
     * Get the extent for this tile grid, if it was configured.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent() {
      return this.extent_;
    }
    /**
     * Get the maximum zoom level for the grid.
     * @return {number} Max zoom.
     * @api
     */
    getMaxZoom() {
      return this.maxZoom;
    }
    /**
     * Get the minimum zoom level for the grid.
     * @return {number} Min zoom.
     * @api
     */
    getMinZoom() {
      return this.minZoom;
    }
    /**
     * Get the origin for the grid at the given zoom level.
     * @param {number} z Integer zoom level.
     * @return {import("../coordinate.js").Coordinate} Origin.
     * @api
     */
    getOrigin(z) {
      if (this.origin_) {
        return this.origin_;
      }
      return this.origins_[z];
    }
    /**
     * Get the list of origins for the grid.
     * @return {Array<import("../coordinate.js").Coordinate>|null} Origin.
     */
    getOrigins() {
      return this.origins_;
    }
    /**
     * Get the resolution for the given zoom level.
     * @param {number} z Integer zoom level.
     * @return {number} Resolution.
     * @api
     */
    getResolution(z) {
      return this.resolutions_[z];
    }
    /**
     * Get the list of resolutions for the tile grid.
     * @return {Array<number>} Resolutions.
     * @api
     */
    getResolutions() {
      return this.resolutions_;
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary import("../extent.js").Extent object.
     * @return {import("../TileRange.js").default|null} Tile range.
     */
    getTileCoordChildTileRange(tileCoord, tempTileRange, tempExtent) {
      if (tileCoord[0] < this.maxZoom) {
        if (this.zoomFactor_ === 2) {
          const minX = tileCoord[1] * 2;
          const minY = tileCoord[2] * 2;
          return createOrUpdate2(
            minX,
            minX + 1,
            minY,
            minY + 1,
            tempTileRange
          );
        }
        const tileCoordExtent = this.getTileCoordExtent(
          tileCoord,
          tempExtent || this.tmpExtent_
        );
        return this.getTileRangeForExtentAndZ(
          tileCoordExtent,
          tileCoord[0] + 1,
          tempTileRange
        );
      }
      return null;
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary import("../TileRange.js").default object.
     * @return {import("../TileRange.js").default|null} Tile range.
     */
    getTileRangeForTileCoordAndZ(tileCoord, z, tempTileRange) {
      if (z > this.maxZoom || z < this.minZoom) {
        return null;
      }
      const tileCoordZ = tileCoord[0];
      const tileCoordX = tileCoord[1];
      const tileCoordY = tileCoord[2];
      if (z === tileCoordZ) {
        return createOrUpdate2(
          tileCoordX,
          tileCoordY,
          tileCoordX,
          tileCoordY,
          tempTileRange
        );
      }
      if (this.zoomFactor_) {
        const factor = Math.pow(this.zoomFactor_, z - tileCoordZ);
        const minX = Math.floor(tileCoordX * factor);
        const minY = Math.floor(tileCoordY * factor);
        if (z < tileCoordZ) {
          return createOrUpdate2(minX, minX, minY, minY, tempTileRange);
        }
        const maxX = Math.floor(factor * (tileCoordX + 1)) - 1;
        const maxY = Math.floor(factor * (tileCoordY + 1)) - 1;
        return createOrUpdate2(minX, maxX, minY, maxY, tempTileRange);
      }
      const tileCoordExtent = this.getTileCoordExtent(tileCoord, this.tmpExtent_);
      return this.getTileRangeForExtentAndZ(tileCoordExtent, z, tempTileRange);
    }
    /**
     * Get a tile range for the given extent and integer zoom level.
     * @param {import("../extent.js").Extent} extent Extent.
     * @param {number} z Integer zoom level.
     * @param {import("../TileRange.js").default} [tempTileRange] Temporary tile range object.
     * @return {import("../TileRange.js").default} Tile range.
     */
    getTileRangeForExtentAndZ(extent, z, tempTileRange) {
      this.getTileCoordForXYAndZ_(extent[0], extent[3], z, false, tmpTileCoord);
      const minX = tmpTileCoord[1];
      const minY = tmpTileCoord[2];
      this.getTileCoordForXYAndZ_(extent[2], extent[1], z, true, tmpTileCoord);
      const maxX = tmpTileCoord[1];
      const maxY = tmpTileCoord[2];
      return createOrUpdate2(minX, maxX, minY, maxY, tempTileRange);
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {import("../coordinate.js").Coordinate} Tile center.
     */
    getTileCoordCenter(tileCoord) {
      const origin = this.getOrigin(tileCoord[0]);
      const resolution = this.getResolution(tileCoord[0]);
      const tileSize = toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
      return [
        origin[0] + (tileCoord[1] + 0.5) * tileSize[0] * resolution,
        origin[1] - (tileCoord[2] + 0.5) * tileSize[1] * resolution
      ];
    }
    /**
     * Get the extent of a tile coordinate.
     *
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../extent.js").Extent} [tempExtent] Temporary extent object.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getTileCoordExtent(tileCoord, tempExtent) {
      const origin = this.getOrigin(tileCoord[0]);
      const resolution = this.getResolution(tileCoord[0]);
      const tileSize = toSize(this.getTileSize(tileCoord[0]), this.tmpSize_);
      const minX = origin[0] + tileCoord[1] * tileSize[0] * resolution;
      const minY = origin[1] - (tileCoord[2] + 1) * tileSize[1] * resolution;
      const maxX = minX + tileSize[0] * resolution;
      const maxY = minY + tileSize[1] * resolution;
      return createOrUpdate(minX, minY, maxX, maxY, tempExtent);
    }
    /**
     * Get the tile coordinate for the given map coordinate and resolution.  This
     * method considers that coordinates that intersect tile boundaries should be
     * assigned the higher tile coordinate.
     *
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} resolution Resolution.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @api
     */
    getTileCoordForCoordAndResolution(coordinate, resolution, opt_tileCoord) {
      return this.getTileCoordForXYAndResolution_(
        coordinate[0],
        coordinate[1],
        resolution,
        false,
        opt_tileCoord
      );
    }
    /**
     * Note that this method should not be called for resolutions that correspond
     * to an integer zoom level.  Instead call the `getTileCoordForXYAndZ_` method.
     * @param {number} x X.
     * @param {number} y Y.
     * @param {number} resolution Resolution (for a non-integer zoom level).
     * @param {boolean} reverseIntersectionPolicy Instead of letting edge
     *     intersections go to the higher tile coordinate, let edge intersections
     *     go to the lower tile coordinate.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @private
     */
    getTileCoordForXYAndResolution_(x, y, resolution, reverseIntersectionPolicy, opt_tileCoord) {
      const z = this.getZForResolution(resolution);
      const scale4 = resolution / this.getResolution(z);
      const origin = this.getOrigin(z);
      const tileSize = toSize(this.getTileSize(z), this.tmpSize_);
      let tileCoordX = scale4 * (x - origin[0]) / resolution / tileSize[0];
      let tileCoordY = scale4 * (origin[1] - y) / resolution / tileSize[1];
      if (reverseIntersectionPolicy) {
        tileCoordX = ceil(tileCoordX, DECIMALS) - 1;
        tileCoordY = ceil(tileCoordY, DECIMALS) - 1;
      } else {
        tileCoordX = floor(tileCoordX, DECIMALS);
        tileCoordY = floor(tileCoordY, DECIMALS);
      }
      return createOrUpdate3(z, tileCoordX, tileCoordY, opt_tileCoord);
    }
    /**
     * Although there is repetition between this method and `getTileCoordForXYAndResolution_`,
     * they should have separate implementations.  This method is for integer zoom
     * levels.  The other method should only be called for resolutions corresponding
     * to non-integer zoom levels.
     * @param {number} x Map x coordinate.
     * @param {number} y Map y coordinate.
     * @param {number} z Integer zoom level.
     * @param {boolean} reverseIntersectionPolicy Instead of letting edge
     *     intersections go to the higher tile coordinate, let edge intersections
     *     go to the lower tile coordinate.
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Temporary import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @private
     */
    getTileCoordForXYAndZ_(x, y, z, reverseIntersectionPolicy, opt_tileCoord) {
      const origin = this.getOrigin(z);
      const resolution = this.getResolution(z);
      const tileSize = toSize(this.getTileSize(z), this.tmpSize_);
      let tileCoordX = (x - origin[0]) / resolution / tileSize[0];
      let tileCoordY = (origin[1] - y) / resolution / tileSize[1];
      if (reverseIntersectionPolicy) {
        tileCoordX = ceil(tileCoordX, DECIMALS) - 1;
        tileCoordY = ceil(tileCoordY, DECIMALS) - 1;
      } else {
        tileCoordX = floor(tileCoordX, DECIMALS);
        tileCoordY = floor(tileCoordY, DECIMALS);
      }
      return createOrUpdate3(z, tileCoordX, tileCoordY, opt_tileCoord);
    }
    /**
     * Get a tile coordinate given a map coordinate and zoom level.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {number} z Integer zoom level, e.g. the result of a `getZForResolution()` method call
     * @param {import("../tilecoord.js").TileCoord} [opt_tileCoord] Destination import("../tilecoord.js").TileCoord object.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate.
     * @api
     */
    getTileCoordForCoordAndZ(coordinate, z, opt_tileCoord) {
      return this.getTileCoordForXYAndZ_(
        coordinate[0],
        coordinate[1],
        z,
        false,
        opt_tileCoord
      );
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @return {number} Tile resolution.
     */
    getTileCoordResolution(tileCoord) {
      return this.resolutions_[tileCoord[0]];
    }
    /**
     * Get the tile size for a zoom level. The type of the return value matches the
     * `tileSize` or `tileSizes` that the tile grid was configured with. To always
     * get an {@link import("../size.js").Size}, run the result through {@link module:ol/size.toSize}.
     * @param {number} z Z.
     * @return {number|import("../size.js").Size} Tile size.
     * @api
     */
    getTileSize(z) {
      if (this.tileSize_) {
        return this.tileSize_;
      }
      return this.tileSizes_[z];
    }
    /**
     * @param {number} z Zoom level.
     * @return {import("../TileRange.js").default|null} Extent tile range for the specified zoom level.
     */
    getFullTileRange(z) {
      if (!this.fullTileRanges_) {
        return this.extent_ ? this.getTileRangeForExtentAndZ(this.extent_, z) : null;
      }
      return this.fullTileRanges_[z];
    }
    /**
     * @param {number} resolution Resolution.
     * @param {number|import("../array.js").NearestDirectionFunction} [opt_direction]
     *     If 0, the nearest resolution will be used.
     *     If 1, the nearest higher resolution (lower Z) will be used. If -1, the
     *     nearest lower resolution (higher Z) will be used. Default is 0.
     *     Use a {@link module:ol/array~NearestDirectionFunction} for more precise control.
     *
     * For example to change tile Z at the midpoint of zoom levels
     * ```js
     * function(value, high, low) {
     *   return value - low * Math.sqrt(high / low);
     * }
     * ```
     * @return {number} Z.
     * @api
     */
    getZForResolution(resolution, opt_direction) {
      const z = linearFindNearest(
        this.resolutions_,
        resolution,
        opt_direction || 0
      );
      return clamp(z, this.minZoom, this.maxZoom);
    }
    /**
     * The tile with the provided tile coordinate intersects the given viewport.
     * @param {import('../tilecoord.js').TileCoord} tileCoord Tile coordinate.
     * @param {Array<number>} viewport Viewport as returned from {@link module:ol/extent.getRotatedViewport}.
     * @return {boolean} The tile with the provided tile coordinate intersects the given viewport.
     */
    tileCoordIntersectsViewport(tileCoord, viewport) {
      return intersectsLinearRing(
        viewport,
        0,
        viewport.length,
        2,
        this.getTileCoordExtent(tileCoord)
      );
    }
    /**
     * @param {!import("../extent.js").Extent} extent Extent for this tile grid.
     * @private
     */
    calculateTileRanges_(extent) {
      const length = this.resolutions_.length;
      const fullTileRanges = new Array(length);
      for (let z = this.minZoom; z < length; ++z) {
        fullTileRanges[z] = this.getTileRangeForExtentAndZ(extent, z);
      }
      this.fullTileRanges_ = fullTileRanges;
    }
  };
  var TileGrid_default = TileGrid;

  // node_modules/ol/ImageState.js
  var ImageState_default = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    ERROR: 3,
    EMPTY: 4
  };

  // node_modules/ol/obj.js
  function clear(object) {
    for (const property in object) {
      delete object[property];
    }
  }
  function isEmpty2(object) {
    let property;
    for (property in object) {
      return false;
    }
    return !property;
  }

  // node_modules/ol/events.js
  function listen(target, type, listener, thisArg, once) {
    if (once) {
      const originalListener = listener;
      listener = function(event) {
        target.removeEventListener(type, listener);
        return originalListener.call(thisArg ?? this, event);
      };
    } else if (thisArg && thisArg !== target) {
      listener = listener.bind(thisArg);
    }
    const eventsKey = {
      target,
      type,
      listener
    };
    target.addEventListener(type, listener);
    return eventsKey;
  }
  function listenOnce(target, type, listener, thisArg) {
    return listen(target, type, listener, thisArg, true);
  }
  function unlistenByKey(key) {
    if (key && key.target) {
      key.target.removeEventListener(key.type, key.listener);
      clear(key);
    }
  }

  // node_modules/ol/events/EventType.js
  var EventType_default = {
    /**
     * Generic change event. Triggered when the revision counter is increased.
     * @event module:ol/events/Event~BaseEvent#change
     * @api
     */
    CHANGE: "change",
    /**
     * Generic error event. Triggered when an error occurs.
     * @event module:ol/events/Event~BaseEvent#error
     * @api
     */
    ERROR: "error",
    BLUR: "blur",
    CLEAR: "clear",
    CONTEXTMENU: "contextmenu",
    CLICK: "click",
    DBLCLICK: "dblclick",
    DRAGENTER: "dragenter",
    DRAGOVER: "dragover",
    DROP: "drop",
    FOCUS: "focus",
    KEYDOWN: "keydown",
    KEYPRESS: "keypress",
    LOAD: "load",
    RESIZE: "resize",
    TOUCHMOVE: "touchmove",
    WHEEL: "wheel"
  };

  // node_modules/ol/Disposable.js
  var Disposable = class {
    constructor() {
      this.disposed = false;
    }
    /**
     * Clean up.
     */
    dispose() {
      if (!this.disposed) {
        this.disposed = true;
        this.disposeInternal();
      }
    }
    /**
     * Extension point for disposable objects.
     * @protected
     */
    disposeInternal() {
    }
  };
  var Disposable_default = Disposable;

  // node_modules/ol/functions.js
  function TRUE() {
    return true;
  }
  function FALSE() {
    return false;
  }
  function VOID() {
  }
  function memoizeOne(fn) {
    let lastResult;
    let lastArgs;
    let lastThis;
    return function() {
      const nextArgs = Array.prototype.slice.call(arguments);
      if (!lastArgs || this !== lastThis || !equals2(nextArgs, lastArgs)) {
        lastThis = this;
        lastArgs = nextArgs;
        lastResult = fn.apply(this, arguments);
      }
      return lastResult;
    };
  }
  function toPromise(getter) {
    function promiseGetter() {
      let value;
      try {
        value = getter();
      } catch (err) {
        return Promise.reject(err);
      }
      if (value instanceof Promise) {
        return value;
      }
      return Promise.resolve(value);
    }
    return promiseGetter();
  }

  // node_modules/ol/events/Event.js
  var BaseEvent = class {
    /**
     * @param {string} type Type.
     */
    constructor(type) {
      this.propagationStopped;
      this.defaultPrevented;
      this.type = type;
      this.target = null;
    }
    /**
     * Prevent default. This means that no emulated `click`, `singleclick` or `doubleclick` events
     * will be fired.
     * @api
     */
    preventDefault() {
      this.defaultPrevented = true;
    }
    /**
     * Stop event propagation.
     * @api
     */
    stopPropagation() {
      this.propagationStopped = true;
    }
  };
  var Event_default = BaseEvent;

  // node_modules/ol/events/Target.js
  var Target = class extends Disposable_default {
    /**
     * @param {*} [target] Default event target for dispatched events.
     */
    constructor(target) {
      super();
      this.eventTarget_ = target;
      this.pendingRemovals_ = null;
      this.dispatching_ = null;
      this.listeners_ = null;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */
    addEventListener(type, listener) {
      if (!type || !listener) {
        return;
      }
      const listeners = this.listeners_ || (this.listeners_ = {});
      const listenersForType = listeners[type] || (listeners[type] = []);
      if (!listenersForType.includes(listener)) {
        listenersForType.push(listener);
      }
    }
    /**
     * Dispatches an event and calls all listeners listening for events
     * of this type. The event parameter can either be a string or an
     * Object with a `type` property.
     *
     * @param {import("./Event.js").default|string} event Event object.
     * @return {boolean|undefined} `false` if anyone called preventDefault on the
     *     event object or if any of the listeners returned false.
     * @api
     */
    dispatchEvent(event) {
      const isString = typeof event === "string";
      const type = isString ? event : event.type;
      const listeners = this.listeners_ && this.listeners_[type];
      if (!listeners) {
        return;
      }
      const evt = isString ? new Event_default(event) : (
        /** @type {Event} */
        event
      );
      if (!evt.target) {
        evt.target = this.eventTarget_ || this;
      }
      const dispatching = this.dispatching_ || (this.dispatching_ = {});
      const pendingRemovals = this.pendingRemovals_ || (this.pendingRemovals_ = {});
      if (!(type in dispatching)) {
        dispatching[type] = 0;
        pendingRemovals[type] = 0;
      }
      ++dispatching[type];
      let propagate;
      for (let i = 0, ii = listeners.length; i < ii; ++i) {
        if ("handleEvent" in listeners[i]) {
          propagate = /** @type {import("../events.js").ListenerObject} */
          listeners[i].handleEvent(evt);
        } else {
          propagate = /** @type {import("../events.js").ListenerFunction} */
          listeners[i].call(this, evt);
        }
        if (propagate === false || evt.propagationStopped) {
          propagate = false;
          break;
        }
      }
      if (--dispatching[type] === 0) {
        let pr = pendingRemovals[type];
        delete pendingRemovals[type];
        while (pr--) {
          this.removeEventListener(type, VOID);
        }
        delete dispatching[type];
      }
      return propagate;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.listeners_ && clear(this.listeners_);
    }
    /**
     * Get the listeners for a specified event type. Listeners are returned in the
     * order that they will be called in.
     *
     * @param {string} type Type.
     * @return {Array<import("../events.js").Listener>|undefined} Listeners.
     */
    getListeners(type) {
      return this.listeners_ && this.listeners_[type] || void 0;
    }
    /**
     * @param {string} [type] Type. If not provided,
     *     `true` will be returned if this event target has any listeners.
     * @return {boolean} Has listeners.
     */
    hasListener(type) {
      if (!this.listeners_) {
        return false;
      }
      return type ? type in this.listeners_ : Object.keys(this.listeners_).length > 0;
    }
    /**
     * @param {string} type Type.
     * @param {import("../events.js").Listener} listener Listener.
     */
    removeEventListener(type, listener) {
      if (!this.listeners_) {
        return;
      }
      const listeners = this.listeners_[type];
      if (!listeners) {
        return;
      }
      const index = listeners.indexOf(listener);
      if (index !== -1) {
        if (this.pendingRemovals_ && type in this.pendingRemovals_) {
          listeners[index] = VOID;
          ++this.pendingRemovals_[type];
        } else {
          listeners.splice(index, 1);
          if (listeners.length === 0) {
            delete this.listeners_[type];
          }
        }
      }
    }
  };
  var Target_default = Target;

  // node_modules/ol/has.js
  var ua = typeof navigator !== "undefined" && typeof navigator.userAgent !== "undefined" ? navigator.userAgent.toLowerCase() : "";
  var SAFARI = ua.includes("safari") && !ua.includes("chrom");
  var SAFARI_BUG_237906 = SAFARI && (ua.includes("version/15.4") || /cpu (os|iphone os) 15_4 like mac os x/.test(ua));
  var WEBKIT = ua.includes("webkit") && !ua.includes("edge");
  var MAC = ua.includes("macintosh");
  var DEVICE_PIXEL_RATIO = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1;
  var WORKER_OFFSCREEN_CANVAS = typeof WorkerGlobalScope !== "undefined" && typeof OffscreenCanvas !== "undefined" && self instanceof WorkerGlobalScope;
  var IMAGE_DECODE = typeof Image !== "undefined" && Image.prototype.decode;
  var PASSIVE_EVENT_LISTENERS = (function() {
    let passive = false;
    try {
      const options = Object.defineProperty({}, "passive", {
        get: function() {
          passive = true;
        }
      });
      window.addEventListener("_", null, options);
      window.removeEventListener("_", null, options);
    } catch {
    }
    return passive;
  })();

  // node_modules/ol/Image.js
  function listenImage(image, loadHandler, errorHandler) {
    const img = (
      /** @type {HTMLImageElement} */
      image
    );
    let listening = true;
    let decoding = false;
    let loaded = false;
    const listenerKeys = [
      listenOnce(img, EventType_default.LOAD, function() {
        loaded = true;
        if (!decoding) {
          loadHandler();
        }
      })
    ];
    if (img.src && IMAGE_DECODE) {
      decoding = true;
      img.decode().then(function() {
        if (listening) {
          loadHandler();
        }
      }).catch(function(error) {
        if (listening) {
          if (loaded) {
            loadHandler();
          } else {
            errorHandler();
          }
        }
      });
    } else {
      listenerKeys.push(listenOnce(img, EventType_default.ERROR, errorHandler));
    }
    return function unlisten() {
      listening = false;
      listenerKeys.forEach(unlistenByKey);
    };
  }
  function load(image, src) {
    return new Promise((resolve, reject) => {
      function handleLoad() {
        unlisten();
        resolve(image);
      }
      function handleError() {
        unlisten();
        reject(new Error("Image load error"));
      }
      function unlisten() {
        image.removeEventListener("load", handleLoad);
        image.removeEventListener("error", handleError);
      }
      image.addEventListener("load", handleLoad);
      image.addEventListener("error", handleError);
      if (src) {
        image.src = src;
      }
    });
  }
  function decodeFallback(image, src) {
    if (src) {
      image.src = src;
    }
    return image.src && IMAGE_DECODE ? new Promise(
      (resolve, reject) => image.decode().then(() => resolve(image)).catch(
        (e) => image.complete && image.width ? resolve(image) : reject(e)
      )
    ) : load(image);
  }

  // node_modules/ol/TileState.js
  var TileState_default = {
    IDLE: 0,
    LOADING: 1,
    LOADED: 2,
    /**
     * Indicates that tile loading failed
     * @type {number}
     */
    ERROR: 3,
    EMPTY: 4
  };

  // node_modules/ol/easing.js
  function easeIn(t) {
    return Math.pow(t, 3);
  }
  function easeOut(t) {
    return 1 - easeIn(1 - t);
  }
  function inAndOut(t) {
    return 3 * t * t - 2 * t * t * t;
  }
  function linear(t) {
    return t;
  }

  // node_modules/ol/Tile.js
  var Tile = class extends Target_default {
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {Options} [options] Tile options.
     */
    constructor(tileCoord, state, options) {
      super();
      options = options ? options : {};
      this.tileCoord = tileCoord;
      this.state = state;
      this.key = "";
      this.transition_ = options.transition === void 0 ? 250 : options.transition;
      this.transitionStarts_ = {};
      this.interpolate = !!options.interpolate;
    }
    /**
     * @protected
     */
    changed() {
      this.dispatchEvent(EventType_default.CHANGE);
    }
    /**
     * Called by the tile cache when the tile is removed from the cache due to expiry
     */
    release() {
      this.setState(TileState_default.EMPTY);
    }
    /**
     * @return {string} Key.
     */
    getKey() {
      return this.key + "/" + this.tileCoord;
    }
    /**
     * Get the tile coordinate for this tile.
     * @return {import("./tilecoord.js").TileCoord} The tile coordinate.
     * @api
     */
    getTileCoord() {
      return this.tileCoord;
    }
    /**
     * @return {import("./TileState.js").default} State.
     */
    getState() {
      return this.state;
    }
    /**
     * Sets the state of this tile. If you write your own {@link module:ol/Tile~LoadFunction tileLoadFunction} ,
     * it is important to set the state correctly to {@link module:ol/TileState~ERROR}
     * when the tile cannot be loaded. Otherwise the tile cannot be removed from
     * the tile queue and will block other requests.
     * @param {import("./TileState.js").default} state State.
     * @api
     */
    setState(state) {
      if (this.state === TileState_default.EMPTY) {
        return;
      }
      if (this.state !== TileState_default.ERROR && this.state > state) {
        throw new Error("Tile load sequence violation");
      }
      this.state = state;
      this.changed();
    }
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     * @abstract
     * @api
     */
    load() {
      abstract();
    }
    /**
     * Get the alpha value for rendering.
     * @param {string} id An id for the renderer.
     * @param {number} time The render frame time.
     * @return {number} A number between 0 and 1.
     */
    getAlpha(id, time) {
      if (!this.transition_) {
        return 1;
      }
      let start = this.transitionStarts_[id];
      if (!start) {
        start = time;
        this.transitionStarts_[id] = start;
      } else if (start === -1) {
        return 1;
      }
      const delta = time - start + 1e3 / 60;
      if (delta >= this.transition_) {
        return 1;
      }
      return easeIn(delta / this.transition_);
    }
    /**
     * Determine if a tile is in an alpha transition.  A tile is considered in
     * transition if tile.getAlpha() has not yet been called or has been called
     * and returned 1.
     * @param {string} id An id for the renderer.
     * @return {boolean} The tile is in transition.
     */
    inTransition(id) {
      if (!this.transition_) {
        return false;
      }
      return this.transitionStarts_[id] !== -1;
    }
    /**
     * Mark a transition as complete.
     * @param {string} id An id for the renderer.
     */
    endTransition(id) {
      if (this.transition_) {
        this.transitionStarts_[id] = -1;
      }
    }
    /**
     * @override
     */
    disposeInternal() {
      this.release();
      super.disposeInternal();
    }
  };
  var Tile_default = Tile;

  // node_modules/ol/dom.js
  function createCanvasContext2D(width, height, canvasPool2, settings) {
    let canvas;
    if (canvasPool2 && canvasPool2.length) {
      canvas = /** @type {HTMLCanvasElement} */
      canvasPool2.shift();
    } else if (WORKER_OFFSCREEN_CANVAS) {
      canvas = new class extends OffscreenCanvas {
        style = {};
      }(width ?? 300, height ?? 150);
    } else {
      canvas = document.createElement("canvas");
    }
    if (width) {
      canvas.width = width;
    }
    if (height) {
      canvas.height = height;
    }
    return (
      /** @type {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} */
      canvas.getContext("2d", settings)
    );
  }
  var sharedCanvasContext;
  function getSharedCanvasContext2D() {
    if (!sharedCanvasContext) {
      sharedCanvasContext = createCanvasContext2D(1, 1);
    }
    return sharedCanvasContext;
  }
  function releaseCanvas(context) {
    const canvas = context.canvas;
    canvas.width = 1;
    canvas.height = 1;
    context.clearRect(0, 0, 1, 1);
  }
  function replaceNode(newNode, oldNode) {
    const parent = oldNode.parentNode;
    if (parent) {
      parent.replaceChild(newNode, oldNode);
    }
  }
  function removeChildren(node) {
    while (node.lastChild) {
      node.lastChild.remove();
    }
  }
  function replaceChildren(node, children) {
    const oldChildren = node.childNodes;
    for (let i = 0; true; ++i) {
      const oldChild = oldChildren[i];
      const newChild = children[i];
      if (!oldChild && !newChild) {
        break;
      }
      if (oldChild === newChild) {
        continue;
      }
      if (!oldChild) {
        node.appendChild(newChild);
        continue;
      }
      if (!newChild) {
        node.removeChild(oldChild);
        --i;
        continue;
      }
      node.insertBefore(newChild, oldChild);
    }
  }
  function createMockDiv() {
    const mockedDiv = new Proxy(
      {
        /**
         * @type {Array<HTMLElement>}
         */
        childNodes: [],
        /**
         * @param {HTMLElement} node html node.
         * @return {HTMLElement} html node.
         */
        appendChild: function(node) {
          this.childNodes.push(node);
          return node;
        },
        /**
         * dummy function, as this structure is not supposed to have a parent.
         */
        remove: function() {
        },
        /**
         * @param {HTMLElement} node html node.
         * @return {HTMLElement} html node.
         */
        removeChild: function(node) {
          const index = this.childNodes.indexOf(node);
          if (index === -1) {
            throw new Error("Node to remove was not found");
          }
          this.childNodes.splice(index, 1);
          return node;
        },
        /**
         * @param {HTMLElement} newNode new html node.
         * @param {HTMLElement} referenceNode reference html node.
         * @return {HTMLElement} new html node.
         */
        insertBefore: function(newNode, referenceNode) {
          const index = this.childNodes.indexOf(referenceNode);
          if (index === -1) {
            throw new Error("Reference node not found");
          }
          this.childNodes.splice(index, 0, newNode);
          return newNode;
        },
        style: {}
      },
      {
        get(target, prop, receiver) {
          if (prop === "firstElementChild") {
            return target.childNodes.length > 0 ? target.childNodes[0] : null;
          }
          return Reflect.get(target, prop, receiver);
        }
      }
    );
    return (
      /** @type {HTMLDivElement} */
      /** @type {*} */
      mockedDiv
    );
  }
  function isCanvas(obj) {
    return typeof HTMLCanvasElement !== "undefined" && obj instanceof HTMLCanvasElement || typeof OffscreenCanvas !== "undefined" && obj instanceof OffscreenCanvas;
  }

  // node_modules/ol/ImageTile.js
  var ImageTile = class extends Tile_default {
    /**
     * @param {import("./tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("./TileState.js").default} state State.
     * @param {string} src Image source URI.
     * @param {import('./dom.js').ImageAttributes} imageAttributes Image attributes options.
     * @param {import("./Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @param {import("./Tile.js").Options} [options] Tile options.
     */
    constructor(tileCoord, state, src, imageAttributes, tileLoadFunction, options) {
      super(tileCoord, state, options);
      this.crossOrigin_ = imageAttributes?.crossOrigin;
      this.referrerPolicy_ = imageAttributes?.referrerPolicy;
      this.src_ = src;
      this.key = src;
      this.image_;
      if (WORKER_OFFSCREEN_CANVAS) {
        this.image_ = new OffscreenCanvas(1, 1);
      } else {
        this.image_ = new Image();
        if (this.crossOrigin_ !== null) {
          this.image_.crossOrigin = this.crossOrigin_;
        }
        if (this.referrerPolicy_ !== void 0) {
          this.image_.referrerPolicy = this.referrerPolicy_;
        }
      }
      this.unlisten_ = null;
      this.tileLoadFunction_ = tileLoadFunction;
    }
    /**
     * Get the HTML image element for this tile (may be a Canvas, OffscreenCanvas, Image, or Video).
     * @return {HTMLCanvasElement|OffscreenCanvas|HTMLImageElement|HTMLVideoElement} Image.
     * @api
     */
    getImage() {
      return this.image_;
    }
    /**
     * Sets an HTML image element for this tile (may be a Canvas or preloaded Image).
     * @param {HTMLCanvasElement|OffscreenCanvas|HTMLImageElement} element Element.
     */
    setImage(element) {
      this.image_ = element;
      this.state = TileState_default.LOADED;
      this.unlistenImage_();
      this.changed();
    }
    /**
     * Get the cross origin of the ImageTile.
     * @return {string} Cross origin.
     */
    getCrossOrigin() {
      return this.crossOrigin_;
    }
    /**
     * Get the referrer policy of the ImageTile.
     * @return {ReferrerPolicy} Referrer policy.
     */
    getReferrerPolicy() {
      return this.referrerPolicy_;
    }
    /**
     * Tracks loading or read errors.
     *
     * @private
     */
    handleImageError_() {
      this.state = TileState_default.ERROR;
      this.unlistenImage_();
      this.image_ = getBlankImage();
      this.changed();
    }
    /**
     * Tracks successful image load.
     *
     * @private
     */
    handleImageLoad_() {
      if (WORKER_OFFSCREEN_CANVAS) {
        this.state = TileState_default.LOADED;
      } else {
        const image = (
          /** @type {HTMLImageElement} */
          this.image_
        );
        if (image.naturalWidth && image.naturalHeight) {
          this.state = TileState_default.LOADED;
        } else {
          this.state = TileState_default.EMPTY;
        }
      }
      this.unlistenImage_();
      this.changed();
    }
    /**
     * Load the image or retry if loading previously failed.
     * Loading is taken care of by the tile queue, and calling this method is
     * only needed for preloading or for reloading in case of an error.
     *
     * To retry loading tiles on failed requests, use a custom `tileLoadFunction`
     * that checks for error status codes and reloads only when the status code is
     * 408, 429, 500, 502, 503 and 504, and only when not too many retries have been
     * made already:
     *
     * ```js
     * const retryCodes = [408, 429, 500, 502, 503, 504];
     * const retries = {};
     * source.setTileLoadFunction((tile, src) => {
     *   const image = tile.getImage();
     *   fetch(src)
     *     .then((response) => {
     *       if (retryCodes.includes(response.status)) {
     *         retries[src] = (retries[src] || 0) + 1;
     *         if (retries[src] <= 3) {
     *           setTimeout(() => tile.load(), retries[src] * 1000);
     *         }
     *         return Promise.reject();
     *       }
     *       return response.blob();
     *     })
     *     .then((blob) => {
     *       const imageUrl = URL.createObjectURL(blob);
     *       image.src = imageUrl;
     *       setTimeout(() => URL.revokeObjectURL(imageUrl), 5000);
     *     })
     *     .catch(() => tile.setState(3)); // error
     * });
     * ```
     * @api
     * @override
     */
    load() {
      if (this.state == TileState_default.ERROR) {
        this.state = TileState_default.IDLE;
        this.image_ = new Image();
        if (this.crossOrigin_ !== null) {
          this.image_.crossOrigin = this.crossOrigin_;
        }
        if (this.referrerPolicy_ !== void 0) {
          this.image_.referrerPolicy = this.referrerPolicy_;
        }
      }
      if (this.state == TileState_default.IDLE) {
        this.state = TileState_default.LOADING;
        this.changed();
        this.tileLoadFunction_(this, this.src_);
        this.unlisten_ = listenImage(
          this.image_,
          this.handleImageLoad_.bind(this),
          this.handleImageError_.bind(this)
        );
      }
    }
    /**
     * Discards event handlers which listen for load completion or errors.
     *
     * @private
     */
    unlistenImage_() {
      if (this.unlisten_) {
        this.unlisten_();
        this.unlisten_ = null;
      }
    }
    /**
     * @override
     */
    disposeInternal() {
      this.unlistenImage_();
      this.image_ = null;
      super.disposeInternal();
    }
  };
  function getBlankImage() {
    const ctx = createCanvasContext2D(1, 1);
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, 1, 1);
    return ctx.canvas;
  }
  var ImageTile_default = ImageTile;

  // node_modules/ol/console.js
  var levels = {
    info: 1,
    warn: 2,
    error: 3,
    none: 4
  };
  var level = levels.info;
  function warn(...args) {
    if (level > levels.warn) {
      return;
    }
    console.warn(...args);
  }

  // node_modules/ol/coordinate.js
  function add(coordinate, delta) {
    coordinate[0] += +delta[0];
    coordinate[1] += +delta[1];
    return coordinate;
  }
  function equals3(coordinate1, coordinate2) {
    let equals4 = true;
    for (let i = coordinate1.length - 1; i >= 0; --i) {
      if (coordinate1[i] != coordinate2[i]) {
        equals4 = false;
        break;
      }
    }
    return equals4;
  }
  function rotate(coordinate, angle) {
    const cosAngle = Math.cos(angle);
    const sinAngle = Math.sin(angle);
    const x = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    const y = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    coordinate[0] = x;
    coordinate[1] = y;
    return coordinate;
  }
  function scale2(coordinate, scale4) {
    coordinate[0] *= scale4;
    coordinate[1] *= scale4;
    return coordinate;
  }
  function wrapX2(coordinate, projection) {
    if (projection.canWrapX()) {
      const worldWidth = getWidth(projection.getExtent());
      const worldsAway = getWorldsAway(coordinate, projection, worldWidth);
      if (worldsAway) {
        coordinate[0] -= worldsAway * worldWidth;
      }
    }
    return coordinate;
  }
  function getWorldsAway(coordinate, projection, sourceExtentWidth) {
    const projectionExtent = projection.getExtent();
    let worldsAway = 0;
    if (projection.canWrapX() && (coordinate[0] < projectionExtent[0] || coordinate[0] > projectionExtent[2])) {
      sourceExtentWidth = sourceExtentWidth || getWidth(projectionExtent);
      worldsAway = Math.floor(
        (coordinate[0] - projectionExtent[0]) / sourceExtentWidth
      );
    }
    return worldsAway;
  }

  // node_modules/ol/proj/Units.js
  var METERS_PER_UNIT = {
    // use the radius of the Normal sphere
    "radians": 6370997 / (2 * Math.PI),
    "degrees": 2 * Math.PI * 6370997 / 360,
    "ft": 0.3048,
    "m": 1,
    "us-ft": 1200 / 3937
  };

  // node_modules/ol/proj/Projection.js
  var Projection = class {
    /**
     * @param {Options} options Projection options.
     */
    constructor(options) {
      this.code_ = options.code;
      this.units_ = /** @type {import("./Units.js").Units} */
      options.units;
      this.extent_ = options.extent !== void 0 ? options.extent : null;
      this.worldExtent_ = options.worldExtent !== void 0 ? options.worldExtent : null;
      this.axisOrientation_ = options.axisOrientation !== void 0 ? options.axisOrientation : "enu";
      this.global_ = options.global !== void 0 ? options.global : false;
      this.canWrapX_ = !!(this.global_ && this.extent_);
      this.getPointResolutionFunc_ = options.getPointResolution;
      this.defaultTileGrid_ = null;
      this.metersPerUnit_ = options.metersPerUnit;
    }
    /**
     * @return {boolean} The projection is suitable for wrapping the x-axis
     */
    canWrapX() {
      return this.canWrapX_;
    }
    /**
     * Get the code for this projection, e.g. 'EPSG:4326'.
     * @return {string} Code.
     * @api
     */
    getCode() {
      return this.code_;
    }
    /**
     * Get the validity extent for this projection.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getExtent() {
      return this.extent_;
    }
    /**
     * Get the units of this projection.
     * @return {import("./Units.js").Units} Units.
     * @api
     */
    getUnits() {
      return this.units_;
    }
    /**
     * Get the amount of meters per unit of this projection.  If the projection is
     * not configured with `metersPerUnit` or a units identifier, the return is
     * `undefined`.
     * @return {number|undefined} Meters.
     * @api
     */
    getMetersPerUnit() {
      return this.metersPerUnit_ || METERS_PER_UNIT[this.units_];
    }
    /**
     * Get the world extent for this projection.
     * @return {import("../extent.js").Extent} Extent.
     * @api
     */
    getWorldExtent() {
      return this.worldExtent_;
    }
    /**
     * Get the axis orientation of this projection.
     * Example values are:
     * enu - the default easting, northing, elevation.
     * neu - northing, easting, up - useful for "lat/long" geographic coordinates,
     *     or south orientated transverse mercator.
     * wnu - westing, northing, up - some planetary coordinate systems have
     *     "west positive" coordinate systems
     * @return {string} Axis orientation.
     * @api
     */
    getAxisOrientation() {
      return this.axisOrientation_;
    }
    /**
     * Is this projection a global projection which spans the whole world?
     * @return {boolean} Whether the projection is global.
     * @api
     */
    isGlobal() {
      return this.global_;
    }
    /**
     * Set if the projection is a global projection which spans the whole world
     * @param {boolean} global Whether the projection is global.
     * @api
     */
    setGlobal(global) {
      this.global_ = global;
      this.canWrapX_ = !!(global && this.extent_);
    }
    /**
     * @return {import("../tilegrid/TileGrid.js").default} The default tile grid.
     */
    getDefaultTileGrid() {
      return this.defaultTileGrid_;
    }
    /**
     * @param {import("../tilegrid/TileGrid.js").default} tileGrid The default tile grid.
     */
    setDefaultTileGrid(tileGrid) {
      this.defaultTileGrid_ = tileGrid;
    }
    /**
     * Set the validity extent for this projection.
     * @param {import("../extent.js").Extent} extent Extent.
     * @api
     */
    setExtent(extent) {
      this.extent_ = extent;
      this.canWrapX_ = !!(this.global_ && extent);
    }
    /**
     * Set the world extent for this projection.
     * @param {import("../extent.js").Extent} worldExtent World extent
     *     [minlon, minlat, maxlon, maxlat].
     * @api
     */
    setWorldExtent(worldExtent) {
      this.worldExtent_ = worldExtent;
    }
    /**
     * Set the getPointResolution function (see {@link module:ol/proj.getPointResolution}
     * for this projection.
     * @param {function(number, import("../coordinate.js").Coordinate):number} func Function
     * @api
     */
    setGetPointResolution(func) {
      this.getPointResolutionFunc_ = func;
    }
    /**
     * Get the custom point resolution function for this projection (if set).
     * @return {GetPointResolution|undefined} The custom point
     * resolution function (if set).
     */
    getPointResolutionFunc() {
      return this.getPointResolutionFunc_;
    }
  };
  var Projection_default = Projection;

  // node_modules/ol/proj/epsg3857.js
  var RADIUS = 6378137;
  var HALF_SIZE = Math.PI * RADIUS;
  var EXTENT = [-HALF_SIZE, -HALF_SIZE, HALF_SIZE, HALF_SIZE];
  var WORLD_EXTENT = [-180, -85, 180, 85];
  var MAX_SAFE_Y = RADIUS * Math.log(Math.tan(Math.PI / 2));
  var EPSG3857Projection = class extends Projection_default {
    /**
     * @param {string} code Code.
     */
    constructor(code) {
      super({
        code,
        units: "m",
        extent: EXTENT,
        global: true,
        worldExtent: WORLD_EXTENT,
        getPointResolution: function(resolution, point) {
          return resolution / Math.cosh(point[1] / RADIUS);
        }
      });
    }
  };
  var PROJECTIONS = [
    new EPSG3857Projection("EPSG:3857"),
    new EPSG3857Projection("EPSG:102100"),
    new EPSG3857Projection("EPSG:102113"),
    new EPSG3857Projection("EPSG:900913"),
    new EPSG3857Projection("http://www.opengis.net/def/crs/EPSG/0/3857"),
    new EPSG3857Projection("http://www.opengis.net/gml/srs/epsg.xml#3857")
  ];
  function fromEPSG4326(input, output, dimension, stride) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    stride = stride ?? dimension;
    if (output === void 0) {
      if (dimension > 2) {
        output = input.slice();
      } else {
        output = new Array(length);
      }
    }
    for (let i = 0; i < length; i += stride) {
      output[i] = HALF_SIZE * input[i] / 180;
      let y = RADIUS * Math.log(Math.tan(Math.PI * (+input[i + 1] + 90) / 360));
      if (y > MAX_SAFE_Y) {
        y = MAX_SAFE_Y;
      } else if (y < -MAX_SAFE_Y) {
        y = -MAX_SAFE_Y;
      }
      output[i + 1] = y;
    }
    return output;
  }
  function toEPSG4326(input, output, dimension, stride) {
    const length = input.length;
    dimension = dimension > 1 ? dimension : 2;
    stride = stride ?? dimension;
    if (output === void 0) {
      if (dimension > 2) {
        output = input.slice();
      } else {
        output = new Array(length);
      }
    }
    for (let i = 0; i < length; i += stride) {
      output[i] = 180 * input[i] / HALF_SIZE;
      output[i + 1] = 360 * Math.atan(Math.exp(input[i + 1] / RADIUS)) / Math.PI - 90;
    }
    return output;
  }

  // node_modules/ol/proj/epsg4326.js
  var RADIUS2 = 6378137;
  var EXTENT2 = [-180, -90, 180, 90];
  var METERS_PER_UNIT2 = Math.PI * RADIUS2 / 180;
  var EPSG4326Projection = class extends Projection_default {
    /**
     * @param {string} code Code.
     * @param {string} [axisOrientation] Axis orientation.
     */
    constructor(code, axisOrientation) {
      super({
        code,
        units: "degrees",
        extent: EXTENT2,
        axisOrientation,
        global: true,
        metersPerUnit: METERS_PER_UNIT2,
        worldExtent: EXTENT2
      });
    }
  };
  var PROJECTIONS2 = [
    new EPSG4326Projection("CRS:84"),
    new EPSG4326Projection("EPSG:4326", "neu"),
    new EPSG4326Projection("urn:ogc:def:crs:OGC:1.3:CRS84"),
    new EPSG4326Projection("urn:ogc:def:crs:OGC:2:84"),
    new EPSG4326Projection("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),
    new EPSG4326Projection("http://www.opengis.net/gml/srs/epsg.xml#4326", "neu"),
    new EPSG4326Projection("http://www.opengis.net/def/crs/EPSG/0/4326", "neu")
  ];

  // node_modules/ol/proj/projections.js
  var cache = {};
  function get(code) {
    return cache[code] || cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/, "EPSG:$3")] || null;
  }
  function add2(code, projection) {
    cache[code] = projection;
  }

  // node_modules/ol/proj/transforms.js
  var transforms = {};
  function add3(source, destination, transformFn) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    if (!(sourceCode in transforms)) {
      transforms[sourceCode] = {};
    }
    transforms[sourceCode][destinationCode] = transformFn;
  }
  function get2(sourceCode, destinationCode) {
    if (sourceCode in transforms && destinationCode in transforms[sourceCode]) {
      return transforms[sourceCode][destinationCode];
    }
    return null;
  }

  // node_modules/ol/proj/utm.js
  var K0 = 0.9996;
  var E = 669438e-8;
  var E2 = E * E;
  var E3 = E2 * E;
  var E_P2 = E / (1 - E);
  var SQRT_E = Math.sqrt(1 - E);
  var _E = (1 - SQRT_E) / (1 + SQRT_E);
  var _E2 = _E * _E;
  var _E3 = _E2 * _E;
  var _E4 = _E3 * _E;
  var _E5 = _E4 * _E;
  var M1 = 1 - E / 4 - 3 * E2 / 64 - 5 * E3 / 256;
  var M2 = 3 * E / 8 + 3 * E2 / 32 + 45 * E3 / 1024;
  var M3 = 15 * E2 / 256 + 45 * E3 / 1024;
  var M4 = 35 * E3 / 3072;
  var P2 = 3 / 2 * _E - 27 / 32 * _E3 + 269 / 512 * _E5;
  var P3 = 21 / 16 * _E2 - 55 / 32 * _E4;
  var P4 = 151 / 96 * _E3 - 417 / 128 * _E5;
  var P5 = 1097 / 512 * _E4;
  var R = 6378137;
  function toLonLat(easting, northing, zone) {
    const x = easting - 5e5;
    const y = zone.north ? northing : northing - 1e7;
    const m = y / K0;
    const mu = m / (R * M1);
    const pRad = mu + P2 * Math.sin(2 * mu) + P3 * Math.sin(4 * mu) + P4 * Math.sin(6 * mu) + P5 * Math.sin(8 * mu);
    const pSin = Math.sin(pRad);
    const pSin2 = pSin * pSin;
    const pCos = Math.cos(pRad);
    const pTan = pSin / pCos;
    const pTan2 = pTan * pTan;
    const pTan4 = pTan2 * pTan2;
    const epSin = 1 - E * pSin2;
    const epSinSqrt = Math.sqrt(1 - E * pSin2);
    const n = R / epSinSqrt;
    const r = (1 - E) / epSin;
    const c = E_P2 * pCos ** 2;
    const c2 = c * c;
    const d = x / (n * K0);
    const d2 = d * d;
    const d3 = d2 * d;
    const d4 = d3 * d;
    const d5 = d4 * d;
    const d6 = d5 * d;
    const latitude = pRad - pTan / r * (d2 / 2 - d4 / 24 * (5 + 3 * pTan2 + 10 * c - 4 * c2 - 9 * E_P2)) + d6 / 720 * (61 + 90 * pTan2 + 298 * c + 45 * pTan4 - 252 * E_P2 - 3 * c2);
    let longitude = (d - d3 / 6 * (1 + 2 * pTan2 + c) + d5 / 120 * (5 - 2 * c + 28 * pTan2 - 3 * c2 + 8 * E_P2 + 24 * pTan4)) / pCos;
    longitude = wrap(
      longitude + toRadians(zoneToCentralLongitude(zone.number)),
      -Math.PI,
      Math.PI
    );
    return [toDegrees(longitude), toDegrees(latitude)];
  }
  var MIN_LATITUDE = -80;
  var MAX_LATITUDE = 84;
  var MIN_LONGITUDE = -180;
  var MAX_LONGITUDE = 180;
  function fromLonLat(longitude, latitude, zone) {
    longitude = wrap(longitude, MIN_LONGITUDE, MAX_LONGITUDE);
    if (latitude < MIN_LATITUDE) {
      latitude = MIN_LATITUDE;
    } else if (latitude > MAX_LATITUDE) {
      latitude = MAX_LATITUDE;
    }
    const latRad = toRadians(latitude);
    const latSin = Math.sin(latRad);
    const latCos = Math.cos(latRad);
    const latTan = latSin / latCos;
    const latTan2 = latTan * latTan;
    const latTan4 = latTan2 * latTan2;
    const lonRad = toRadians(longitude);
    const centralLon = zoneToCentralLongitude(zone.number);
    const centralLonRad = toRadians(centralLon);
    const n = R / Math.sqrt(1 - E * latSin ** 2);
    const c = E_P2 * latCos ** 2;
    const a = latCos * wrap(lonRad - centralLonRad, -Math.PI, Math.PI);
    const a22 = a * a;
    const a3 = a22 * a;
    const a4 = a3 * a;
    const a5 = a4 * a;
    const a6 = a5 * a;
    const m = R * (M1 * latRad - M2 * Math.sin(2 * latRad) + M3 * Math.sin(4 * latRad) - M4 * Math.sin(6 * latRad));
    const easting = K0 * n * (a + a3 / 6 * (1 - latTan2 + c) + a5 / 120 * (5 - 18 * latTan2 + latTan4 + 72 * c - 58 * E_P2)) + 5e5;
    let northing = K0 * (m + n * latTan * (a22 / 2 + a4 / 24 * (5 - latTan2 + 9 * c + 4 * c ** 2) + a6 / 720 * (61 - 58 * latTan2 + latTan4 + 600 * c - 330 * E_P2)));
    if (!zone.north) {
      northing += 1e7;
    }
    return [easting, northing];
  }
  function zoneToCentralLongitude(zone) {
    return (zone - 1) * 6 - 180 + 3;
  }
  var epsgRegExes = [
    /^EPSG:(\d+)$/,
    /^urn:ogc:def:crs:EPSG::(\d+)$/,
    /^http:\/\/www\.opengis\.net\/def\/crs\/EPSG\/0\/(\d+)$/
  ];
  function zoneFromCode(code) {
    let epsgId = 0;
    for (const re of epsgRegExes) {
      const match = code.match(re);
      if (match) {
        epsgId = parseInt(match[1]);
        break;
      }
    }
    if (!epsgId) {
      return null;
    }
    let number = 0;
    let north = false;
    if (epsgId > 32700 && epsgId < 32761) {
      number = epsgId - 32700;
    } else if (epsgId > 32600 && epsgId < 32661) {
      north = true;
      number = epsgId - 32600;
    }
    if (!number) {
      return null;
    }
    return { number, north };
  }
  function makeTransformFunction(transformer, zone) {
    return function(input, output, dimension, stride) {
      const length = input.length;
      dimension = dimension > 1 ? dimension : 2;
      stride = stride ?? dimension;
      if (!output) {
        if (dimension > 2) {
          output = input.slice();
        } else {
          output = new Array(length);
        }
      }
      for (let i = 0; i < length; i += stride) {
        const x = input[i];
        const y = input[i + 1];
        const coord = transformer(x, y, zone);
        output[i] = coord[0];
        output[i + 1] = coord[1];
      }
      return output;
    };
  }
  function makeProjection(code) {
    const zone = zoneFromCode(code);
    if (!zone) {
      return null;
    }
    return new Projection_default({ code, units: "m" });
  }
  function makeTransforms(projection) {
    const zone = zoneFromCode(projection.getCode());
    if (!zone) {
      return null;
    }
    return {
      forward: makeTransformFunction(fromLonLat, zone),
      inverse: makeTransformFunction(toLonLat, zone)
    };
  }

  // node_modules/ol/sphere.js
  var DEFAULT_RADIUS = 63710088e-1;
  function getDistance(c1, c2, radius) {
    radius = radius || DEFAULT_RADIUS;
    const lat1 = toRadians(c1[1]);
    const lat2 = toRadians(c2[1]);
    const deltaLatBy2 = (lat2 - lat1) / 2;
    const deltaLonBy2 = toRadians(c2[0] - c1[0]) / 2;
    const a = Math.sin(deltaLatBy2) * Math.sin(deltaLatBy2) + Math.sin(deltaLonBy2) * Math.sin(deltaLonBy2) * Math.cos(lat1) * Math.cos(lat2);
    return 2 * radius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  }

  // node_modules/ol/proj.js
  var transformFactories = [makeTransforms];
  var projectionFactories = [makeProjection];
  var showCoordinateWarning = true;
  function disableCoordinateWarning(disable2) {
    const hide = disable2 === void 0 ? true : disable2;
    showCoordinateWarning = !hide;
  }
  function cloneTransform(input, output) {
    if (output !== void 0) {
      for (let i = 0, ii = input.length; i < ii; ++i) {
        output[i] = input[i];
      }
      output = output;
    } else {
      output = input.slice();
    }
    return output;
  }
  function addProjection(projection) {
    add2(projection.getCode(), projection);
    add3(projection, projection, cloneTransform);
  }
  function addProjections(projections) {
    projections.forEach(addProjection);
  }
  function get3(projectionLike) {
    if (!(typeof projectionLike === "string")) {
      return projectionLike;
    }
    const projection = get(projectionLike);
    if (projection) {
      return projection;
    }
    for (const makeProjection2 of projectionFactories) {
      const projection2 = makeProjection2(projectionLike);
      if (projection2) {
        return projection2;
      }
    }
    return null;
  }
  function getPointResolution(projection, resolution, point, units) {
    projection = get3(projection);
    let pointResolution;
    const getter = projection.getPointResolutionFunc();
    if (getter) {
      pointResolution = getter(resolution, point);
      if (units && units !== projection.getUnits()) {
        const metersPerUnit = projection.getMetersPerUnit();
        if (metersPerUnit) {
          pointResolution = pointResolution * metersPerUnit / METERS_PER_UNIT[units];
        }
      }
    } else {
      const projUnits = projection.getUnits();
      if (projUnits == "degrees" && !units || units == "degrees") {
        pointResolution = resolution;
      } else {
        const toEPSG43262 = getTransformFromProjections(
          projection,
          get3("EPSG:4326")
        );
        if (!toEPSG43262 && projUnits !== "degrees") {
          pointResolution = resolution * projection.getMetersPerUnit();
        } else {
          let vertices = [
            point[0] - resolution / 2,
            point[1],
            point[0] + resolution / 2,
            point[1],
            point[0],
            point[1] - resolution / 2,
            point[0],
            point[1] + resolution / 2
          ];
          vertices = toEPSG43262(vertices, vertices, 2);
          const width = getDistance(vertices.slice(0, 2), vertices.slice(2, 4));
          const height = getDistance(vertices.slice(4, 6), vertices.slice(6, 8));
          pointResolution = (width + height) / 2;
        }
        const metersPerUnit = units ? METERS_PER_UNIT[units] : projection.getMetersPerUnit();
        if (metersPerUnit !== void 0) {
          pointResolution /= metersPerUnit;
        }
      }
    }
    return pointResolution;
  }
  function addEquivalentProjections(projections) {
    addProjections(projections);
    projections.forEach(function(source) {
      projections.forEach(function(destination) {
        if (source !== destination) {
          add3(source, destination, cloneTransform);
        }
      });
    });
  }
  function addEquivalentTransforms(projections1, projections2, forwardTransform, inverseTransform) {
    projections1.forEach(function(projection1) {
      projections2.forEach(function(projection2) {
        add3(projection1, projection2, forwardTransform);
        add3(projection2, projection1, inverseTransform);
      });
    });
  }
  function createProjection(projection, defaultCode) {
    if (!projection) {
      return get3(defaultCode);
    }
    if (typeof projection === "string") {
      return get3(projection);
    }
    return (
      /** @type {Projection} */
      projection
    );
  }
  function createTransformFromCoordinateTransform(coordTransform) {
    return (
      /**
       * @param {Array<number>} input Input.
       * @param {Array<number>} [output] Output.
       * @param {number} [dimension] Dimensions that should be transformed.
       * @param {number} [stride] Stride.
       * @return {Array<number>} Output.
       */
      (function(input, output, dimension, stride) {
        const length = input.length;
        dimension = dimension !== void 0 ? dimension : 2;
        stride = stride ?? dimension;
        output = output !== void 0 ? output : new Array(length);
        for (let i = 0; i < length; i += stride) {
          const point = coordTransform(input.slice(i, i + dimension));
          const pointLength = point.length;
          for (let j = 0, jj = stride; j < jj; ++j) {
            output[i + j] = j >= pointLength ? input[i + j] : point[j];
          }
        }
        return output;
      })
    );
  }
  function equivalent(projection1, projection2) {
    if (projection1 === projection2) {
      return true;
    }
    const equalUnits = projection1.getUnits() === projection2.getUnits();
    if (projection1.getCode() === projection2.getCode()) {
      return equalUnits;
    }
    const transformFunc = getTransformFromProjections(projection1, projection2);
    return transformFunc === cloneTransform && equalUnits;
  }
  function getTransformFromProjections(source, destination) {
    const sourceCode = source.getCode();
    const destinationCode = destination.getCode();
    let transformFunc = get2(sourceCode, destinationCode);
    if (transformFunc) {
      return transformFunc;
    }
    let sourceTransforms = null;
    let destinationTransforms = null;
    for (const makeTransforms2 of transformFactories) {
      if (!sourceTransforms) {
        sourceTransforms = makeTransforms2(source);
      }
      if (!destinationTransforms) {
        destinationTransforms = makeTransforms2(destination);
      }
    }
    if (!sourceTransforms && !destinationTransforms) {
      return null;
    }
    const intermediateCode = "EPSG:4326";
    if (!destinationTransforms) {
      const toDestination = get2(intermediateCode, destinationCode);
      if (toDestination) {
        transformFunc = composeTransformFuncs(
          sourceTransforms.inverse,
          toDestination
        );
      }
    } else if (!sourceTransforms) {
      const fromSource = get2(sourceCode, intermediateCode);
      if (fromSource) {
        transformFunc = composeTransformFuncs(
          fromSource,
          destinationTransforms.forward
        );
      }
    } else {
      transformFunc = composeTransformFuncs(
        sourceTransforms.inverse,
        destinationTransforms.forward
      );
    }
    if (transformFunc) {
      addProjection(source);
      addProjection(destination);
      add3(source, destination, transformFunc);
    }
    return transformFunc;
  }
  function composeTransformFuncs(t1, t2) {
    return function(input, output, dimensions, stride) {
      output = t1(input, output, dimensions, stride);
      return t2(output, output, dimensions, stride);
    };
  }
  function getTransform(source, destination) {
    const sourceProjection = get3(source);
    const destinationProjection = get3(destination);
    return getTransformFromProjections(sourceProjection, destinationProjection);
  }
  function transform(coordinate, source, destination) {
    const transformFunc = getTransform(source, destination);
    if (!transformFunc) {
      const sourceCode = get3(source).getCode();
      const destinationCode = get3(destination).getCode();
      throw new Error(
        `No transform available between ${sourceCode} and ${destinationCode}`
      );
    }
    return transformFunc(coordinate, void 0, coordinate.length);
  }
  function transformExtent(extent, source, destination, stops) {
    const transformFunc = getTransform(source, destination);
    return applyTransform(extent, transformFunc, void 0, stops);
  }
  var userProjection = null;
  function getUserProjection() {
    return userProjection;
  }
  function toUserCoordinate(coordinate, sourceProjection) {
    if (!userProjection) {
      return coordinate;
    }
    return transform(coordinate, sourceProjection, userProjection);
  }
  function fromUserCoordinate(coordinate, destProjection) {
    if (!userProjection) {
      if (showCoordinateWarning && !equals3(coordinate, [0, 0]) && coordinate[0] >= -180 && coordinate[0] <= 180 && coordinate[1] >= -90 && coordinate[1] <= 90) {
        showCoordinateWarning = false;
        warn(
          "Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates."
        );
      }
      return coordinate;
    }
    return transform(coordinate, userProjection, destProjection);
  }
  function toUserExtent(extent, sourceProjection) {
    if (!userProjection) {
      return extent;
    }
    return transformExtent(extent, sourceProjection, userProjection);
  }
  function fromUserExtent(extent, destProjection) {
    if (!userProjection) {
      return extent;
    }
    return transformExtent(extent, userProjection, destProjection);
  }
  function addCommon() {
    addEquivalentProjections(PROJECTIONS);
    addEquivalentProjections(PROJECTIONS2);
    addEquivalentTransforms(
      PROJECTIONS2,
      PROJECTIONS,
      fromEPSG4326,
      toEPSG4326
    );
  }
  addCommon();

  // node_modules/ol/reproj.js
  var brokenDiagonalRendering_;
  var canvasPool = [];
  function drawTestTriangle(ctx, u1, v1, u2, v2) {
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(u1, v1);
    ctx.lineTo(u2, v2);
    ctx.closePath();
    ctx.save();
    ctx.clip();
    ctx.fillRect(0, 0, Math.max(u1, u2) + 1, Math.max(v1, v2));
    ctx.restore();
  }
  function verifyBrokenDiagonalRendering(data, offset) {
    return Math.abs(data[offset * 4] - 210) > 2 || Math.abs(data[offset * 4 + 3] - 0.75 * 255) > 2;
  }
  function isBrokenDiagonalRendering() {
    if (brokenDiagonalRendering_ === void 0) {
      const ctx = createCanvasContext2D(6, 6, canvasPool);
      ctx.globalCompositeOperation = "lighter";
      ctx.fillStyle = "rgba(210, 0, 0, 0.75)";
      drawTestTriangle(ctx, 4, 5, 4, 0);
      drawTestTriangle(ctx, 4, 5, 0, 5);
      const data = ctx.getImageData(0, 0, 3, 3).data;
      brokenDiagonalRendering_ = verifyBrokenDiagonalRendering(data, 0) || verifyBrokenDiagonalRendering(data, 4) || verifyBrokenDiagonalRendering(data, 8);
      releaseCanvas(ctx);
      canvasPool.push(ctx.canvas);
    }
    return brokenDiagonalRendering_;
  }
  function calculateSourceResolution(sourceProj, targetProj, targetCenter, targetResolution) {
    const sourceCenter = transform(targetCenter, targetProj, sourceProj);
    let sourceResolution = getPointResolution(
      targetProj,
      targetResolution,
      targetCenter
    );
    const targetMetersPerUnit = targetProj.getMetersPerUnit();
    if (targetMetersPerUnit !== void 0) {
      sourceResolution *= targetMetersPerUnit;
    }
    const sourceMetersPerUnit = sourceProj.getMetersPerUnit();
    if (sourceMetersPerUnit !== void 0) {
      sourceResolution /= sourceMetersPerUnit;
    }
    const sourceExtent = sourceProj.getExtent();
    if (!sourceExtent || containsCoordinate(sourceExtent, sourceCenter)) {
      const compensationFactor = getPointResolution(sourceProj, sourceResolution, sourceCenter) / sourceResolution;
      if (isFinite(compensationFactor) && compensationFactor > 0) {
        sourceResolution /= compensationFactor;
      }
    }
    return sourceResolution;
  }
  function calculateSourceExtentResolution(sourceProj, targetProj, targetExtent, targetResolution) {
    const targetCenter = getCenter(targetExtent);
    let sourceResolution = calculateSourceResolution(
      sourceProj,
      targetProj,
      targetCenter,
      targetResolution
    );
    if (!isFinite(sourceResolution) || sourceResolution <= 0) {
      forEachCorner(targetExtent, function(corner) {
        sourceResolution = calculateSourceResolution(
          sourceProj,
          targetProj,
          corner,
          targetResolution
        );
        return isFinite(sourceResolution) && sourceResolution > 0;
      });
    }
    return sourceResolution;
  }
  function render(width, height, pixelRatio, sourceResolution, sourceExtent, targetResolution, targetExtent, triangulation, sources, gutter, renderEdges, interpolate, drawSingle, clipExtent) {
    const context = createCanvasContext2D(
      Math.round(pixelRatio * width),
      Math.round(pixelRatio * height),
      canvasPool
    );
    if (!interpolate) {
      context.imageSmoothingEnabled = false;
    }
    if (sources.length === 0) {
      return context.canvas;
    }
    context.scale(pixelRatio, pixelRatio);
    function pixelRound(value) {
      return Math.round(value * pixelRatio) / pixelRatio;
    }
    context.globalCompositeOperation = "lighter";
    const sourceDataExtent = createEmpty();
    sources.forEach(function(src, i, arr) {
      extend(sourceDataExtent, src.extent);
    });
    let stitchContext;
    const stitchScale = pixelRatio / sourceResolution;
    const inverseScale = (interpolate ? 1 : 1 + Math.pow(2, -24)) / stitchScale;
    if (!drawSingle || sources.length !== 1 || gutter !== 0) {
      stitchContext = createCanvasContext2D(
        Math.round(getWidth(sourceDataExtent) * stitchScale),
        Math.round(getHeight(sourceDataExtent) * stitchScale),
        canvasPool
      );
      if (!interpolate) {
        stitchContext.imageSmoothingEnabled = false;
      }
      if (sourceExtent && clipExtent) {
        const xPos = (sourceExtent[0] - sourceDataExtent[0]) * stitchScale;
        const yPos = -(sourceExtent[3] - sourceDataExtent[3]) * stitchScale;
        const width2 = getWidth(sourceExtent) * stitchScale;
        const height2 = getHeight(sourceExtent) * stitchScale;
        stitchContext.rect(xPos, yPos, width2, height2);
        stitchContext.clip();
      }
      sources.forEach(function(src, i, arr) {
        if (src.image.width > 0 && src.image.height > 0) {
          if (src.clipExtent) {
            stitchContext.save();
            const xPos2 = (src.clipExtent[0] - sourceDataExtent[0]) * stitchScale;
            const yPos2 = -(src.clipExtent[3] - sourceDataExtent[3]) * stitchScale;
            const width2 = getWidth(src.clipExtent) * stitchScale;
            const height2 = getHeight(src.clipExtent) * stitchScale;
            stitchContext.rect(
              interpolate ? xPos2 : Math.round(xPos2),
              interpolate ? yPos2 : Math.round(yPos2),
              interpolate ? width2 : Math.round(xPos2 + width2) - Math.round(xPos2),
              interpolate ? height2 : Math.round(yPos2 + height2) - Math.round(yPos2)
            );
            stitchContext.clip();
          }
          const xPos = (src.extent[0] - sourceDataExtent[0]) * stitchScale;
          const yPos = -(src.extent[3] - sourceDataExtent[3]) * stitchScale;
          const srcWidth = getWidth(src.extent) * stitchScale;
          const srcHeight = getHeight(src.extent) * stitchScale;
          stitchContext.drawImage(
            src.image,
            gutter,
            gutter,
            src.image.width - 2 * gutter,
            src.image.height - 2 * gutter,
            interpolate ? xPos : Math.round(xPos),
            interpolate ? yPos : Math.round(yPos),
            interpolate ? srcWidth : Math.round(xPos + srcWidth) - Math.round(xPos),
            interpolate ? srcHeight : Math.round(yPos + srcHeight) - Math.round(yPos)
          );
          if (src.clipExtent) {
            stitchContext.restore();
          }
        }
      });
    }
    const targetTopLeft = getTopLeft(targetExtent);
    triangulation.getTriangles().forEach(function(triangle, i, arr) {
      const source = triangle.source;
      const target = triangle.target;
      let x0 = source[0][0], y0 = source[0][1];
      let x1 = source[1][0], y1 = source[1][1];
      let x2 = source[2][0], y2 = source[2][1];
      const u0 = pixelRound((target[0][0] - targetTopLeft[0]) / targetResolution);
      const v0 = pixelRound(
        -(target[0][1] - targetTopLeft[1]) / targetResolution
      );
      const u1 = pixelRound((target[1][0] - targetTopLeft[0]) / targetResolution);
      const v1 = pixelRound(
        -(target[1][1] - targetTopLeft[1]) / targetResolution
      );
      const u2 = pixelRound((target[2][0] - targetTopLeft[0]) / targetResolution);
      const v2 = pixelRound(
        -(target[2][1] - targetTopLeft[1]) / targetResolution
      );
      const sourceNumericalShiftX = x0;
      const sourceNumericalShiftY = y0;
      x0 = 0;
      y0 = 0;
      x1 -= sourceNumericalShiftX;
      y1 -= sourceNumericalShiftY;
      x2 -= sourceNumericalShiftX;
      y2 -= sourceNumericalShiftY;
      const augmentedMatrix = [
        [x1, y1, 0, 0, u1 - u0],
        [x2, y2, 0, 0, u2 - u0],
        [0, 0, x1, y1, v1 - v0],
        [0, 0, x2, y2, v2 - v0]
      ];
      const affineCoefs = solveLinearSystem(augmentedMatrix);
      if (!affineCoefs) {
        return;
      }
      context.save();
      context.beginPath();
      if (isBrokenDiagonalRendering() || !interpolate) {
        context.moveTo(u1, v1);
        const steps = 4;
        const ud = u0 - u1;
        const vd = v0 - v1;
        for (let step = 0; step < steps; step++) {
          context.lineTo(
            u1 + pixelRound((step + 1) * ud / steps),
            v1 + pixelRound(step * vd / (steps - 1))
          );
          if (step != steps - 1) {
            context.lineTo(
              u1 + pixelRound((step + 1) * ud / steps),
              v1 + pixelRound((step + 1) * vd / (steps - 1))
            );
          }
        }
        context.lineTo(u2, v2);
      } else {
        context.moveTo(u1, v1);
        context.lineTo(u0, v0);
        context.lineTo(u2, v2);
      }
      context.clip();
      context.transform(
        affineCoefs[0],
        affineCoefs[2],
        affineCoefs[1],
        affineCoefs[3],
        u0,
        v0
      );
      context.translate(
        sourceDataExtent[0] - sourceNumericalShiftX,
        sourceDataExtent[3] - sourceNumericalShiftY
      );
      let image;
      if (stitchContext) {
        image = stitchContext.canvas;
        context.scale(inverseScale, -inverseScale);
      } else {
        const source2 = sources[0];
        const extent = source2.extent;
        image = source2.image;
        context.scale(
          getWidth(extent) / image.width,
          -getHeight(extent) / image.height
        );
      }
      context.drawImage(image, 0, 0);
      context.restore();
    });
    if (stitchContext) {
      releaseCanvas(stitchContext);
      canvasPool.push(stitchContext.canvas);
    }
    if (renderEdges) {
      context.save();
      context.globalCompositeOperation = "source-over";
      context.strokeStyle = "black";
      context.lineWidth = 1;
      triangulation.getTriangles().forEach(function(triangle, i, arr) {
        const target = triangle.target;
        const u0 = (target[0][0] - targetTopLeft[0]) / targetResolution;
        const v0 = -(target[0][1] - targetTopLeft[1]) / targetResolution;
        const u1 = (target[1][0] - targetTopLeft[0]) / targetResolution;
        const v1 = -(target[1][1] - targetTopLeft[1]) / targetResolution;
        const u2 = (target[2][0] - targetTopLeft[0]) / targetResolution;
        const v2 = -(target[2][1] - targetTopLeft[1]) / targetResolution;
        context.beginPath();
        context.moveTo(u1, v1);
        context.lineTo(u0, v0);
        context.lineTo(u2, v2);
        context.closePath();
        context.stroke();
      });
      context.restore();
    }
    return context.canvas;
  }

  // node_modules/ol/transform.js
  var tmp_ = new Array(6);
  function create() {
    return [1, 0, 0, 1, 0, 0];
  }
  function apply(transform2, coordinate) {
    const x = coordinate[0];
    const y = coordinate[1];
    coordinate[0] = transform2[0] * x + transform2[2] * y + transform2[4];
    coordinate[1] = transform2[1] * x + transform2[3] * y + transform2[5];
    return coordinate;
  }
  function compose(transform2, dx1, dy1, sx, sy, angle, dx2, dy2) {
    const sin = Math.sin(angle);
    const cos = Math.cos(angle);
    transform2[0] = sx * cos;
    transform2[1] = sy * sin;
    transform2[2] = -sx * sin;
    transform2[3] = sy * cos;
    transform2[4] = dx2 * sx * cos - dy2 * sx * sin + dx1;
    transform2[5] = dx2 * sy * sin + dy2 * sy * cos + dy1;
    return transform2;
  }
  function makeInverse(target, source) {
    const det = determinant(source);
    assert(det !== 0, "Transformation matrix cannot be inverted");
    const a = source[0];
    const b = source[1];
    const c = source[2];
    const d = source[3];
    const e = source[4];
    const f = source[5];
    target[0] = d / det;
    target[1] = -b / det;
    target[2] = -c / det;
    target[3] = a / det;
    target[4] = (c * f - d * e) / det;
    target[5] = -(a * f - b * e) / det;
    return target;
  }
  function determinant(mat) {
    return mat[0] * mat[3] - mat[1] * mat[2];
  }
  var matrixPrecision = [1e5, 1e5, 1e5, 1e5, 2, 2];
  function toString(mat) {
    const transformString = "matrix(" + mat.join(", ") + ")";
    return transformString;
  }
  function fromString(cssTransform) {
    const values = cssTransform.substring(7, cssTransform.length - 1).split(",");
    return values.map(parseFloat);
  }
  function equivalent2(cssTransform1, cssTransform2) {
    const mat1 = fromString(cssTransform1);
    const mat2 = fromString(cssTransform2);
    for (let i = 0; i < 6; ++i) {
      if (Math.round((mat1[i] - mat2[i]) * matrixPrecision[i]) !== 0) {
        return false;
      }
    }
    return true;
  }

  // node_modules/ol/reproj/Triangulation.js
  var MAX_SUBDIVISION = 10;
  var MAX_TRIANGLE_WIDTH = 0.25;
  var Triangulation = class {
    /**
     * @param {import("../proj/Projection.js").default} sourceProj Source projection.
     * @param {import("../proj/Projection.js").default} targetProj Target projection.
     * @param {import("../extent.js").Extent} targetExtent Target extent to triangulate.
     * @param {import("../extent.js").Extent} maxSourceExtent Maximal source extent that can be used.
     * @param {number} errorThreshold Acceptable error (in source units).
     * @param {?number} destinationResolution The (optional) resolution of the destination.
     * @param {import("../transform.js").Transform} [sourceMatrix] Source transform matrix.
     */
    constructor(sourceProj, targetProj, targetExtent, maxSourceExtent, errorThreshold, destinationResolution, sourceMatrix) {
      this.sourceProj_ = sourceProj;
      this.targetProj_ = targetProj;
      let transformInvCache = {};
      const transformInv = sourceMatrix ? createTransformFromCoordinateTransform(
        (input) => apply(
          sourceMatrix,
          transform(input, this.targetProj_, this.sourceProj_)
        )
      ) : getTransform(this.targetProj_, this.sourceProj_);
      this.transformInv_ = function(c) {
        const key = c[0] + "/" + c[1];
        if (!transformInvCache[key]) {
          transformInvCache[key] = transformInv(c);
        }
        return transformInvCache[key];
      };
      this.maxSourceExtent_ = maxSourceExtent;
      this.errorThresholdSquared_ = errorThreshold * errorThreshold;
      this.triangles_ = [];
      this.wrapsXInSource_ = false;
      this.canWrapXInSource_ = this.sourceProj_.canWrapX() && !!maxSourceExtent && !!this.sourceProj_.getExtent() && getWidth(maxSourceExtent) >= getWidth(this.sourceProj_.getExtent());
      this.sourceWorldWidth_ = this.sourceProj_.getExtent() ? getWidth(this.sourceProj_.getExtent()) : null;
      this.targetWorldWidth_ = this.targetProj_.getExtent() ? getWidth(this.targetProj_.getExtent()) : null;
      const destinationTopLeft = getTopLeft(targetExtent);
      const destinationTopRight = getTopRight(targetExtent);
      const destinationBottomRight = getBottomRight(targetExtent);
      const destinationBottomLeft = getBottomLeft(targetExtent);
      const sourceTopLeft = this.transformInv_(destinationTopLeft);
      const sourceTopRight = this.transformInv_(destinationTopRight);
      const sourceBottomRight = this.transformInv_(destinationBottomRight);
      const sourceBottomLeft = this.transformInv_(destinationBottomLeft);
      const maxSubdivision = MAX_SUBDIVISION + (destinationResolution ? Math.max(
        0,
        Math.ceil(
          Math.log2(
            getArea(targetExtent) / (destinationResolution * destinationResolution * 256 * 256)
          )
        )
      ) : 0);
      this.addQuad_(
        destinationTopLeft,
        destinationTopRight,
        destinationBottomRight,
        destinationBottomLeft,
        sourceTopLeft,
        sourceTopRight,
        sourceBottomRight,
        sourceBottomLeft,
        maxSubdivision
      );
      if (this.wrapsXInSource_) {
        let leftBound = Infinity;
        this.triangles_.forEach(function(triangle, i, arr) {
          leftBound = Math.min(
            leftBound,
            triangle.source[0][0],
            triangle.source[1][0],
            triangle.source[2][0]
          );
        });
        this.triangles_.forEach((triangle) => {
          if (Math.max(
            triangle.source[0][0],
            triangle.source[1][0],
            triangle.source[2][0]
          ) - leftBound > this.sourceWorldWidth_ / 2) {
            const newTriangle = [
              [triangle.source[0][0], triangle.source[0][1]],
              [triangle.source[1][0], triangle.source[1][1]],
              [triangle.source[2][0], triangle.source[2][1]]
            ];
            if (newTriangle[0][0] - leftBound > this.sourceWorldWidth_ / 2) {
              newTriangle[0][0] -= this.sourceWorldWidth_;
            }
            if (newTriangle[1][0] - leftBound > this.sourceWorldWidth_ / 2) {
              newTriangle[1][0] -= this.sourceWorldWidth_;
            }
            if (newTriangle[2][0] - leftBound > this.sourceWorldWidth_ / 2) {
              newTriangle[2][0] -= this.sourceWorldWidth_;
            }
            const minX = Math.min(
              newTriangle[0][0],
              newTriangle[1][0],
              newTriangle[2][0]
            );
            const maxX = Math.max(
              newTriangle[0][0],
              newTriangle[1][0],
              newTriangle[2][0]
            );
            if (maxX - minX < this.sourceWorldWidth_ / 2) {
              triangle.source = newTriangle;
            }
          }
        });
      }
      transformInvCache = {};
    }
    /**
     * Adds triangle to the triangulation.
     * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
     * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
     * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
     * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
     * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
     * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
     * @private
     */
    addTriangle_(a, b, c, aSrc, bSrc, cSrc) {
      this.triangles_.push({
        source: [aSrc, bSrc, cSrc],
        target: [a, b, c]
      });
    }
    /**
     * Adds quad (points in clock-wise order) to the triangulation
     * (and reprojects the vertices) if valid.
     * Performs quad subdivision if needed to increase precision.
     *
     * @param {import("../coordinate.js").Coordinate} a The target a coordinate.
     * @param {import("../coordinate.js").Coordinate} b The target b coordinate.
     * @param {import("../coordinate.js").Coordinate} c The target c coordinate.
     * @param {import("../coordinate.js").Coordinate} d The target d coordinate.
     * @param {import("../coordinate.js").Coordinate} aSrc The source a coordinate.
     * @param {import("../coordinate.js").Coordinate} bSrc The source b coordinate.
     * @param {import("../coordinate.js").Coordinate} cSrc The source c coordinate.
     * @param {import("../coordinate.js").Coordinate} dSrc The source d coordinate.
     * @param {number} maxSubdivision Maximal allowed subdivision of the quad.
     * @private
     */
    addQuad_(a, b, c, d, aSrc, bSrc, cSrc, dSrc, maxSubdivision) {
      const sourceQuadExtent = boundingExtent([aSrc, bSrc, cSrc, dSrc]);
      const sourceCoverageX = this.sourceWorldWidth_ ? getWidth(sourceQuadExtent) / this.sourceWorldWidth_ : null;
      const sourceWorldWidth = (
        /** @type {number} */
        this.sourceWorldWidth_
      );
      const wrapsX = this.sourceProj_.canWrapX() && sourceCoverageX > 0.5 && sourceCoverageX < 1;
      let needsSubdivision = false;
      if (maxSubdivision > 0) {
        if (this.targetProj_.isGlobal() && this.targetWorldWidth_) {
          const targetQuadExtent = boundingExtent([a, b, c, d]);
          const targetCoverageX = getWidth(targetQuadExtent) / this.targetWorldWidth_;
          needsSubdivision = targetCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
        }
        if (!wrapsX && this.sourceProj_.isGlobal() && sourceCoverageX) {
          needsSubdivision = sourceCoverageX > MAX_TRIANGLE_WIDTH || needsSubdivision;
        }
      }
      if (!needsSubdivision && this.maxSourceExtent_) {
        if (isFinite(sourceQuadExtent[0]) && isFinite(sourceQuadExtent[1]) && isFinite(sourceQuadExtent[2]) && isFinite(sourceQuadExtent[3])) {
          if (!intersects(sourceQuadExtent, this.maxSourceExtent_)) {
            return;
          }
        }
      }
      let isNotFinite = 0;
      if (!needsSubdivision) {
        if (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) || !isFinite(bSrc[0]) || !isFinite(bSrc[1]) || !isFinite(cSrc[0]) || !isFinite(cSrc[1]) || !isFinite(dSrc[0]) || !isFinite(dSrc[1])) {
          if (maxSubdivision > 0) {
            needsSubdivision = true;
          } else {
            isNotFinite = (!isFinite(aSrc[0]) || !isFinite(aSrc[1]) ? 8 : 0) + (!isFinite(bSrc[0]) || !isFinite(bSrc[1]) ? 4 : 0) + (!isFinite(cSrc[0]) || !isFinite(cSrc[1]) ? 2 : 0) + (!isFinite(dSrc[0]) || !isFinite(dSrc[1]) ? 1 : 0);
            if (isNotFinite != 1 && isNotFinite != 2 && isNotFinite != 4 && isNotFinite != 8) {
              return;
            }
          }
        }
      }
      if (maxSubdivision > 0) {
        if (!needsSubdivision) {
          const center = [(a[0] + c[0]) / 2, (a[1] + c[1]) / 2];
          const centerSrc = this.transformInv_(center);
          let dx;
          if (wrapsX) {
            const centerSrcEstimX = (modulo(aSrc[0], sourceWorldWidth) + modulo(cSrc[0], sourceWorldWidth)) / 2;
            dx = centerSrcEstimX - modulo(centerSrc[0], sourceWorldWidth);
          } else {
            dx = (aSrc[0] + cSrc[0]) / 2 - centerSrc[0];
          }
          const dy = (aSrc[1] + cSrc[1]) / 2 - centerSrc[1];
          const centerSrcErrorSquared = dx * dx + dy * dy;
          needsSubdivision = centerSrcErrorSquared > this.errorThresholdSquared_;
        }
        if (needsSubdivision) {
          if (Math.abs(a[0] - c[0]) <= Math.abs(a[1] - c[1])) {
            const bc = [(b[0] + c[0]) / 2, (b[1] + c[1]) / 2];
            const bcSrc = this.transformInv_(bc);
            const da = [(d[0] + a[0]) / 2, (d[1] + a[1]) / 2];
            const daSrc = this.transformInv_(da);
            this.addQuad_(
              a,
              b,
              bc,
              da,
              aSrc,
              bSrc,
              bcSrc,
              daSrc,
              maxSubdivision - 1
            );
            this.addQuad_(
              da,
              bc,
              c,
              d,
              daSrc,
              bcSrc,
              cSrc,
              dSrc,
              maxSubdivision - 1
            );
          } else {
            const ab = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
            const abSrc = this.transformInv_(ab);
            const cd = [(c[0] + d[0]) / 2, (c[1] + d[1]) / 2];
            const cdSrc = this.transformInv_(cd);
            this.addQuad_(
              a,
              ab,
              cd,
              d,
              aSrc,
              abSrc,
              cdSrc,
              dSrc,
              maxSubdivision - 1
            );
            this.addQuad_(
              ab,
              b,
              c,
              cd,
              abSrc,
              bSrc,
              cSrc,
              cdSrc,
              maxSubdivision - 1
            );
          }
          return;
        }
      }
      if (wrapsX) {
        if (!this.canWrapXInSource_) {
          return;
        }
        this.wrapsXInSource_ = true;
      }
      if ((isNotFinite & 11) == 0) {
        this.addTriangle_(a, c, d, aSrc, cSrc, dSrc);
      }
      if ((isNotFinite & 14) == 0) {
        this.addTriangle_(a, c, b, aSrc, cSrc, bSrc);
      }
      if (isNotFinite) {
        if ((isNotFinite & 13) == 0) {
          this.addTriangle_(b, d, a, bSrc, dSrc, aSrc);
        }
        if ((isNotFinite & 7) == 0) {
          this.addTriangle_(b, d, c, bSrc, dSrc, cSrc);
        }
      }
    }
    /**
     * Calculates extent of the `source` coordinates from all the triangles.
     *
     * @return {import("../extent.js").Extent} Calculated extent.
     */
    calculateSourceExtent() {
      const extent = createEmpty();
      this.triangles_.forEach(function(triangle, i, arr) {
        const src = triangle.source;
        extendCoordinate(extent, src[0]);
        extendCoordinate(extent, src[1]);
        extendCoordinate(extent, src[2]);
      });
      return extent;
    }
    /**
     * @return {Array<Triangle>} Array of the calculated triangles.
     */
    getTriangles() {
      return this.triangles_;
    }
  };
  var Triangulation_default = Triangulation;

  // node_modules/ol/reproj/common.js
  var ERROR_THRESHOLD = 0.5;

  // node_modules/ol/reproj/Tile.js
  var ReprojTile = class extends Tile_default {
    /**
     * @param {import("../proj/Projection.js").default} sourceProj Source projection.
     * @param {import("../tilegrid/TileGrid.js").default} sourceTileGrid Source tile grid.
     * @param {import("../proj/Projection.js").default} targetProj Target projection.
     * @param {import("../tilegrid/TileGrid.js").default} targetTileGrid Target tile grid.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Coordinate of the tile.
     * @param {import("../tilecoord.js").TileCoord} wrappedTileCoord Coordinate of the tile wrapped in X.
     * @param {number} pixelRatio Pixel ratio.
     * @param {number} gutter Gutter of the source tiles.
     * @param {FunctionType} getTileFunction
     *     Function returning source tiles (z, x, y, pixelRatio).
     * @param {number} [errorThreshold] Acceptable reprojection error (in px).
     * @param {boolean} [renderEdges] Render reprojection edges.
     * @param {import("../Tile.js").Options} [options] Tile options.
     */
    constructor(sourceProj, sourceTileGrid, targetProj, targetTileGrid, tileCoord, wrappedTileCoord, pixelRatio, gutter, getTileFunction, errorThreshold, renderEdges, options) {
      super(tileCoord, TileState_default.IDLE, options);
      this.renderEdges_ = renderEdges !== void 0 ? renderEdges : false;
      this.pixelRatio_ = pixelRatio;
      this.gutter_ = gutter;
      this.canvas_ = null;
      this.sourceTileGrid_ = sourceTileGrid;
      this.targetTileGrid_ = targetTileGrid;
      this.wrappedTileCoord_ = wrappedTileCoord ? wrappedTileCoord : tileCoord;
      this.sourceTiles_ = [];
      this.sourcesListenerKeys_ = null;
      this.sourceZ_ = 0;
      this.clipExtent_ = sourceProj.canWrapX() ? sourceProj.getExtent() : void 0;
      const targetExtent = targetTileGrid.getTileCoordExtent(
        this.wrappedTileCoord_
      );
      const maxTargetExtent = this.targetTileGrid_.getExtent();
      let maxSourceExtent = this.sourceTileGrid_.getExtent();
      const limitedTargetExtent = maxTargetExtent ? getIntersection(targetExtent, maxTargetExtent) : targetExtent;
      if (getArea(limitedTargetExtent) === 0) {
        this.state = TileState_default.EMPTY;
        return;
      }
      const sourceProjExtent = sourceProj.getExtent();
      if (sourceProjExtent) {
        if (!maxSourceExtent) {
          maxSourceExtent = sourceProjExtent;
        } else {
          maxSourceExtent = getIntersection(maxSourceExtent, sourceProjExtent);
        }
      }
      const targetResolution = targetTileGrid.getResolution(
        this.wrappedTileCoord_[0]
      );
      const sourceResolution = calculateSourceExtentResolution(
        sourceProj,
        targetProj,
        limitedTargetExtent,
        targetResolution
      );
      if (!isFinite(sourceResolution) || sourceResolution <= 0) {
        this.state = TileState_default.EMPTY;
        return;
      }
      const errorThresholdInPixels = errorThreshold !== void 0 ? errorThreshold : ERROR_THRESHOLD;
      this.triangulation_ = new Triangulation_default(
        sourceProj,
        targetProj,
        limitedTargetExtent,
        maxSourceExtent,
        sourceResolution * errorThresholdInPixels,
        targetResolution
      );
      if (this.triangulation_.getTriangles().length === 0) {
        this.state = TileState_default.EMPTY;
        return;
      }
      this.sourceZ_ = sourceTileGrid.getZForResolution(sourceResolution);
      let sourceExtent = this.triangulation_.calculateSourceExtent();
      if (maxSourceExtent) {
        if (sourceProj.canWrapX()) {
          sourceExtent[1] = clamp(
            sourceExtent[1],
            maxSourceExtent[1],
            maxSourceExtent[3]
          );
          sourceExtent[3] = clamp(
            sourceExtent[3],
            maxSourceExtent[1],
            maxSourceExtent[3]
          );
        } else {
          sourceExtent = getIntersection(sourceExtent, maxSourceExtent);
        }
      }
      if (!getArea(sourceExtent)) {
        this.state = TileState_default.EMPTY;
      } else {
        let worldWidth = 0;
        let worldsAway = 0;
        if (sourceProj.canWrapX()) {
          worldWidth = getWidth(sourceProjExtent);
          worldsAway = Math.floor(
            (sourceExtent[0] - sourceProjExtent[0]) / worldWidth
          );
        }
        const sourceExtents = wrapAndSliceX(
          sourceExtent.slice(),
          sourceProj,
          true
        );
        sourceExtents.forEach((extent) => {
          const sourceRange = sourceTileGrid.getTileRangeForExtentAndZ(
            extent,
            this.sourceZ_
          );
          for (let srcX = sourceRange.minX; srcX <= sourceRange.maxX; srcX++) {
            for (let srcY = sourceRange.minY; srcY <= sourceRange.maxY; srcY++) {
              const offset = worldsAway * worldWidth;
              this.sourceTiles_.push({
                getTile: () => getTileFunction(this.sourceZ_, srcX, srcY, pixelRatio),
                offset
              });
            }
          }
          ++worldsAway;
        });
        if (this.sourceTiles_.length === 0) {
          this.state = TileState_default.EMPTY;
        }
      }
    }
    /**
     * Get the HTML Canvas element for this tile.
     * @return {HTMLCanvasElement|OffscreenCanvas} Canvas.
     */
    getImage() {
      return this.canvas_;
    }
    /**
     * @private
     */
    reproject_() {
      const sources = [];
      this.sourceTiles_.forEach((source) => {
        const tile = source.tile;
        if (tile && tile.getState() == TileState_default.LOADED) {
          const extent = this.sourceTileGrid_.getTileCoordExtent(tile.tileCoord);
          extent[0] += source.offset;
          extent[2] += source.offset;
          const clipExtent = this.clipExtent_?.slice();
          if (clipExtent) {
            clipExtent[0] += source.offset;
            clipExtent[2] += source.offset;
          }
          sources.push({
            extent,
            clipExtent,
            image: tile.getImage()
          });
        }
      });
      this.sourceTiles_.length = 0;
      if (sources.length === 0) {
        this.state = TileState_default.ERROR;
      } else {
        const z = this.wrappedTileCoord_[0];
        const size = this.targetTileGrid_.getTileSize(z);
        const width = typeof size === "number" ? size : size[0];
        const height = typeof size === "number" ? size : size[1];
        const targetResolution = this.targetTileGrid_.getResolution(z);
        const sourceResolution = this.sourceTileGrid_.getResolution(
          this.sourceZ_
        );
        const targetExtent = this.targetTileGrid_.getTileCoordExtent(
          this.wrappedTileCoord_
        );
        this.canvas_ = render(
          width,
          height,
          this.pixelRatio_,
          sourceResolution,
          this.sourceTileGrid_.getExtent(),
          targetResolution,
          targetExtent,
          this.triangulation_,
          sources,
          this.gutter_,
          this.renderEdges_,
          this.interpolate
        );
        this.state = TileState_default.LOADED;
      }
      this.changed();
    }
    /**
     * Load not yet loaded URI.
     * @override
     */
    load() {
      for (const sourceTile of this.sourceTiles_) {
        sourceTile.tile = sourceTile.getTile();
      }
      if (this.state == TileState_default.IDLE) {
        this.state = TileState_default.LOADING;
        this.changed();
        let leftToLoad = 0;
        this.sourcesListenerKeys_ = [];
        this.sourceTiles_.forEach(({ tile }) => {
          const state = tile.getState();
          if (state == TileState_default.IDLE || state == TileState_default.LOADING) {
            leftToLoad++;
            const sourceListenKey = listen(tile, EventType_default.CHANGE, (e) => {
              const state2 = tile.getState();
              if (state2 == TileState_default.LOADED || state2 == TileState_default.ERROR || state2 == TileState_default.EMPTY) {
                unlistenByKey(sourceListenKey);
                leftToLoad--;
                if (leftToLoad === 0) {
                  this.unlistenSources_();
                  this.reproject_();
                }
              }
            });
            this.sourcesListenerKeys_.push(sourceListenKey);
          }
        });
        if (leftToLoad === 0) {
          setTimeout(this.reproject_.bind(this), 0);
        } else {
          this.sourceTiles_.forEach(function({ tile }, i, arr) {
            const state = tile.getState();
            if (state == TileState_default.IDLE) {
              tile.load();
            }
          });
        }
      }
    }
    /**
     * @private
     */
    unlistenSources_() {
      this.sourcesListenerKeys_.forEach(unlistenByKey);
      this.sourcesListenerKeys_ = null;
    }
    /**
     * Remove from the cache due to expiry
     * @override
     */
    release() {
      if (this.canvas_) {
        releaseCanvas(
          /** @type {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} */
          this.canvas_.getContext("2d")
        );
        canvasPool.push(this.canvas_);
        this.canvas_ = null;
      }
      this.sourceTiles_.length = 0;
      super.release();
    }
  };
  var Tile_default2 = ReprojTile;

  // node_modules/ol/tilegrid.js
  function getForProjection(projection) {
    let tileGrid = projection.getDefaultTileGrid();
    if (!tileGrid) {
      tileGrid = createForProjection(projection);
      projection.setDefaultTileGrid(tileGrid);
    }
    return tileGrid;
  }
  function wrapX3(tileGrid, tileCoord, projection) {
    const z = tileCoord[0];
    const center = tileGrid.getTileCoordCenter(tileCoord);
    const projectionExtent = extentFromProjection(projection);
    if (!containsCoordinate(projectionExtent, center)) {
      const worldWidth = getWidth(projectionExtent);
      const worldsAway = Math.ceil(
        (projectionExtent[0] - center[0]) / worldWidth
      );
      center[0] += worldWidth * worldsAway;
      return tileGrid.getTileCoordForCoordAndZ(center, z);
    }
    return tileCoord;
  }
  function createForExtent(extent, maxZoom, tileSize, corner) {
    corner = corner !== void 0 ? corner : "top-left";
    const resolutions = resolutionsFromExtent(extent, maxZoom, tileSize);
    return new TileGrid_default({
      extent,
      origin: getCorner(extent, corner),
      resolutions,
      tileSize
    });
  }
  function resolutionsFromExtent(extent, maxZoom, tileSize, maxResolution) {
    maxZoom = maxZoom !== void 0 ? maxZoom : DEFAULT_MAX_ZOOM;
    tileSize = toSize(tileSize !== void 0 ? tileSize : DEFAULT_TILE_SIZE);
    const height = getHeight(extent);
    const width = getWidth(extent);
    maxResolution = maxResolution > 0 ? maxResolution : Math.max(width / tileSize[0], height / tileSize[1]);
    const length = maxZoom + 1;
    const resolutions = new Array(length);
    for (let z = 0; z < length; ++z) {
      resolutions[z] = maxResolution / Math.pow(2, z);
    }
    return resolutions;
  }
  function createForProjection(projection, maxZoom, tileSize, corner) {
    const extent = extentFromProjection(projection);
    return createForExtent(extent, maxZoom, tileSize, corner);
  }
  function extentFromProjection(projection) {
    projection = get3(projection);
    let extent = projection.getExtent();
    if (!extent) {
      const half = 180 * METERS_PER_UNIT.degrees / projection.getMetersPerUnit();
      extent = createOrUpdate(-half, -half, half, half);
    }
    return extent;
  }

  // node_modules/ol/uri.js
  var zRegEx = /\{z\}/g;
  var xRegEx = /\{x\}/g;
  var yRegEx = /\{y\}/g;
  var dashYRegEx = /\{-y\}/g;
  function renderXYZTemplate(template, z, x, y, maxY) {
    return template.replace(zRegEx, z.toString()).replace(xRegEx, x.toString()).replace(yRegEx, y.toString()).replace(dashYRegEx, function() {
      if (maxY === void 0) {
        throw new Error(
          "If the URL template has a {-y} placeholder, the grid extent must be known"
        );
      }
      return (maxY - y).toString();
    });
  }
  function expandUrl(url) {
    const urls = [];
    let match = /\{([a-z])-([a-z])\}/.exec(url);
    if (match) {
      const startCharCode = match[1].charCodeAt(0);
      const stopCharCode = match[2].charCodeAt(0);
      let charCode;
      for (charCode = startCharCode; charCode <= stopCharCode; ++charCode) {
        urls.push(url.replace(match[0], String.fromCharCode(charCode)));
      }
      return urls;
    }
    match = /\{(\d+)-(\d+)\}/.exec(url);
    if (match) {
      const stop = parseInt(match[2], 10);
      for (let i = parseInt(match[1], 10); i <= stop; i++) {
        urls.push(url.replace(match[0], i.toString()));
      }
      return urls;
    }
    urls.push(url);
    return urls;
  }

  // node_modules/ol/tileurlfunction.js
  function createFromTemplate(template, tileGrid) {
    return (
      /**
       * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
       * @param {number} pixelRatio Pixel ratio.
       * @param {import("./proj/Projection.js").default} projection Projection.
       * @return {string|undefined} Tile URL.
       */
      (function(tileCoord, pixelRatio, projection) {
        if (!tileCoord) {
          return void 0;
        }
        let maxY;
        const z = tileCoord[0];
        if (tileGrid) {
          const range = tileGrid.getFullTileRange(z);
          if (range) {
            maxY = range.getHeight() - 1;
          }
        }
        return renderXYZTemplate(template, z, tileCoord[1], tileCoord[2], maxY);
      })
    );
  }
  function createFromTemplates(templates, tileGrid) {
    const len = templates.length;
    const tileUrlFunctions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tileUrlFunctions[i] = createFromTemplate(templates[i], tileGrid);
    }
    return createFromTileUrlFunctions(tileUrlFunctions);
  }
  function createFromTileUrlFunctions(tileUrlFunctions) {
    if (tileUrlFunctions.length === 1) {
      return tileUrlFunctions[0];
    }
    return (
      /**
       * @param {import("./tilecoord.js").TileCoord} tileCoord Tile Coordinate.
       * @param {number} pixelRatio Pixel ratio.
       * @param {import("./proj/Projection.js").default} projection Projection.
       * @return {string|undefined} Tile URL.
       */
      (function(tileCoord, pixelRatio, projection) {
        if (!tileCoord) {
          return void 0;
        }
        const h = hash(tileCoord);
        const index = modulo(h, tileUrlFunctions.length);
        return tileUrlFunctions[index](tileCoord, pixelRatio, projection);
      })
    );
  }

  // node_modules/ol/ObjectEventType.js
  var ObjectEventType_default = {
    /**
     * Triggered when a property is changed.
     * @event module:ol/Object.ObjectEvent#propertychange
     * @api
     */
    PROPERTYCHANGE: "propertychange"
  };

  // node_modules/ol/Observable.js
  var Observable = class extends Target_default {
    constructor() {
      super();
      this.on = /** @type {ObservableOnSignature<import("./events.js").EventsKey>} */
      this.onInternal;
      this.once = /** @type {ObservableOnSignature<import("./events.js").EventsKey>} */
      this.onceInternal;
      this.un = /** @type {ObservableOnSignature<void>} */
      this.unInternal;
      this.revision_ = 0;
    }
    /**
     * Increases the revision counter and dispatches a 'change' event.
     * @api
     */
    changed() {
      ++this.revision_;
      this.dispatchEvent(EventType_default.CHANGE);
    }
    /**
     * Get the version number for this object.  Each time the object is modified,
     * its version number will be incremented.
     * @return {number} Revision.
     * @api
     */
    getRevision() {
      return this.revision_;
    }
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event.js").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */
    onInternal(type, listener) {
      if (Array.isArray(type)) {
        const len = type.length;
        const keys = new Array(len);
        for (let i = 0; i < len; ++i) {
          keys[i] = listen(this, type[i], listener);
        }
        return keys;
      }
      return listen(
        this,
        /** @type {string} */
        type,
        listener
      );
    }
    /**
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event.js").default)): ?} listener Listener.
     * @return {import("./events.js").EventsKey|Array<import("./events.js").EventsKey>} Event key.
     * @protected
     */
    onceInternal(type, listener) {
      let key;
      if (Array.isArray(type)) {
        const len = type.length;
        key = new Array(len);
        for (let i = 0; i < len; ++i) {
          key[i] = listenOnce(this, type[i], listener);
        }
      } else {
        key = listenOnce(
          this,
          /** @type {string} */
          type,
          listener
        );
      }
      listener.ol_key = key;
      return key;
    }
    /**
     * Unlisten for a certain type of event.
     * @param {string|Array<string>} type Type.
     * @param {function((Event|import("./events/Event.js").default)): ?} listener Listener.
     * @protected
     */
    unInternal(type, listener) {
      const key = (
        /** @type {Object} */
        listener.ol_key
      );
      if (key) {
        unByKey(key);
      } else if (Array.isArray(type)) {
        for (let i = 0, ii = type.length; i < ii; ++i) {
          this.removeEventListener(type[i], listener);
        }
      } else {
        this.removeEventListener(type, listener);
      }
    }
  };
  Observable.prototype.on;
  Observable.prototype.once;
  Observable.prototype.un;
  function unByKey(key) {
    if (Array.isArray(key)) {
      for (let i = 0, ii = key.length; i < ii; ++i) {
        unlistenByKey(key[i]);
      }
    } else {
      unlistenByKey(
        /** @type {import("./events.js").EventsKey} */
        key
      );
    }
  }
  var Observable_default = Observable;

  // node_modules/ol/Object.js
  var ObjectEvent = class extends Event_default {
    /**
     * @param {string} type The event type.
     * @param {string} key The property name.
     * @param {*} oldValue The old value for `key`.
     */
    constructor(type, key, oldValue) {
      super(type);
      this.key = key;
      this.oldValue = oldValue;
    }
  };
  var BaseObject = class extends Observable_default {
    /**
     * @param {NoInfer<Properties>} [values] An object with key-value pairs.
     */
    constructor(values) {
      super();
      this.on;
      this.once;
      this.un;
      getUid(this);
      this.values_ = null;
      if (values !== void 0) {
        this.setProperties(values);
      }
    }
    /**
     * Gets a value.
     * @param {string} key Key name.
     * @return {*} Value.
     * @api
     */
    get(key) {
      let value;
      if (this.values_ && this.values_.hasOwnProperty(key)) {
        value = this.values_[key];
      }
      return value;
    }
    /**
     * Get a list of object property names.
     * @return {Array<string>} List of property names.
     * @api
     */
    getKeys() {
      return this.values_ && Object.keys(this.values_) || [];
    }
    /**
     * Get an object of all property names and values.
     * @return {NoInfer<Properties>} Object.
     * @api
     */
    getProperties() {
      return (
        /** @type {NoInfer<Properties>} */
        this.values_ && Object.assign({}, this.values_) || {}
      );
    }
    /**
     * Get an object of all property names and values.
     * @return {Partial<NoInfer<Properties>>?} Object.
     */
    getPropertiesInternal() {
      return this.values_;
    }
    /**
     * @return {boolean} The object has properties.
     */
    hasProperties() {
      return !!this.values_;
    }
    /**
     * @param {string} key Key name.
     * @param {*} oldValue Old value.
     */
    notify(key, oldValue) {
      let eventType;
      eventType = `change:${key}`;
      if (this.hasListener(eventType)) {
        this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
      }
      eventType = ObjectEventType_default.PROPERTYCHANGE;
      if (this.hasListener(eventType)) {
        this.dispatchEvent(new ObjectEvent(eventType, key, oldValue));
      }
    }
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */
    addChangeListener(key, listener) {
      this.addEventListener(`change:${key}`, listener);
    }
    /**
     * @param {string} key Key name.
     * @param {import("./events.js").Listener} listener Listener.
     */
    removeChangeListener(key, listener) {
      this.removeEventListener(`change:${key}`, listener);
    }
    /**
     * Sets a value.
     * @param {string} key Key name.
     * @param {*} value Value.
     * @param {boolean} [silent] Update without triggering an event.
     * @api
     */
    set(key, value, silent) {
      const values = this.values_ || (this.values_ = {});
      if (silent) {
        values[key] = value;
      } else {
        const oldValue = values[key];
        values[key] = value;
        if (oldValue !== value) {
          this.notify(key, oldValue);
        }
      }
    }
    /**
     * Sets a collection of key-value pairs.  Note that this changes any existing
     * properties and adds new ones (it does not remove any existing properties).
     * @param {Partial<NoInfer<Properties>>} values Values.
     * @param {boolean} [silent] Update without triggering an event.
     * @api
     */
    setProperties(values, silent) {
      for (const key in values) {
        this.set(key, values[key], silent);
      }
    }
    /**
     * Apply any properties from another object without triggering events.
     * @param {BaseObject} source The source object.
     * @protected
     */
    applyProperties(source) {
      if (!source.values_) {
        return;
      }
      Object.assign(this.values_ || (this.values_ = {}), source.values_);
    }
    /**
     * Unsets a property.
     * @param {string} key Key name.
     * @param {boolean} [silent] Unset without triggering an event.
     * @api
     */
    unset(key, silent) {
      if (this.values_ && key in this.values_) {
        const oldValue = this.values_[key];
        delete this.values_[key];
        if (isEmpty2(this.values_)) {
          this.values_ = null;
        }
        if (!silent) {
          this.notify(key, oldValue);
        }
      }
    }
  };
  var Object_default = BaseObject;

  // node_modules/ol/source/Source.js
  var Source = class extends Object_default {
    /**
     * @param {Options} options Source options.
     */
    constructor(options) {
      super();
      this.projection = get3(options.projection);
      this.attributions_ = adaptAttributions(options.attributions);
      this.attributionsCollapsible_ = options.attributionsCollapsible ?? true;
      this.loading = false;
      this.state_ = options.state !== void 0 ? options.state : "ready";
      this.wrapX_ = options.wrapX !== void 0 ? options.wrapX : false;
      this.interpolate_ = !!options.interpolate;
      this.viewResolver = null;
      this.viewRejector = null;
      const self2 = this;
      this.viewPromise_ = new Promise(function(resolve, reject) {
        self2.viewResolver = resolve;
        self2.viewRejector = reject;
      });
    }
    /**
     * Get the attribution function for the source.
     * @return {?Attribution} Attribution function.
     * @api
     */
    getAttributions() {
      return this.attributions_;
    }
    /**
     * @return {boolean} Attributions are collapsible.
     * @api
     */
    getAttributionsCollapsible() {
      return this.attributionsCollapsible_;
    }
    /**
     * Get the projection of the source.
     * @return {import("../proj/Projection.js").default|null} Projection.
     * @api
     */
    getProjection() {
      return this.projection;
    }
    /**
     * @param {import("../proj/Projection.js").default} [projection] Projection.
     * @return {Array<number>|null} Resolutions.
     */
    getResolutions(projection) {
      return null;
    }
    /**
     * @return {Promise<import("../View.js").ViewOptions>} A promise for view-related properties.
     */
    getView() {
      return this.viewPromise_;
    }
    /**
     * Get the state of the source, see {@link import("./Source.js").State} for possible states.
     * @return {import("./Source.js").State} State.
     * @api
     */
    getState() {
      return this.state_;
    }
    /**
     * @return {boolean|undefined} Wrap X.
     */
    getWrapX() {
      return this.wrapX_;
    }
    /**
     * @return {boolean} Use linear interpolation when resampling.
     */
    getInterpolate() {
      return this.interpolate_;
    }
    /**
     * Refreshes the source. The source will be cleared, and data from the server will be reloaded.
     * @api
     */
    refresh() {
      this.changed();
    }
    /**
     * Set the attributions of the source.
     * @param {AttributionLike|undefined} attributions Attributions.
     *     Can be passed as `string`, `Array<string>`, {@link module:ol/source/Source~Attribution},
     *     or `undefined`.
     * @api
     */
    setAttributions(attributions) {
      this.attributions_ = adaptAttributions(attributions);
      this.changed();
    }
    /**
     * Set the state of the source.
     * @param {import("./Source.js").State} state State.
     */
    setState(state) {
      this.state_ = state;
      this.changed();
    }
  };
  function adaptAttributions(attributionLike) {
    if (!attributionLike) {
      return null;
    }
    if (typeof attributionLike === "function") {
      return attributionLike;
    }
    if (!Array.isArray(attributionLike)) {
      attributionLike = [attributionLike];
    }
    return (frameState) => attributionLike;
  }
  var Source_default = Source;

  // node_modules/ol/source/Tile.js
  var TileSource = class extends Source_default {
    /**
     * @param {Options} options SourceTile source options.
     */
    constructor(options) {
      super({
        attributions: options.attributions,
        attributionsCollapsible: options.attributionsCollapsible,
        projection: options.projection,
        state: options.state,
        wrapX: options.wrapX,
        interpolate: options.interpolate
      });
      this.on;
      this.once;
      this.un;
      this.tilePixelRatio_ = options.tilePixelRatio !== void 0 ? options.tilePixelRatio : 1;
      this.tileGrid = options.tileGrid !== void 0 ? options.tileGrid : null;
      const tileSize = [256, 256];
      if (this.tileGrid) {
        toSize(this.tileGrid.getTileSize(this.tileGrid.getMinZoom()), tileSize);
      }
      this.tmpSize = [0, 0];
      this.key_ = options.key || getUid(this);
      this.tileOptions = {
        transition: options.transition,
        interpolate: options.interpolate
      };
      this.zDirection = options.zDirection ? options.zDirection : 0;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     */
    getGutterForProjection(projection) {
      return 0;
    }
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     */
    getKey() {
      return this.key_;
    }
    /**
     * Set the value to be used as the key for all tiles in the source.
     * @param {string} key The key for tiles.
     * @protected
     */
    setKey(key) {
      if (this.key_ !== key) {
        this.key_ = key;
        this.changed();
      }
    }
    /**
     * @param {import("../proj/Projection.js").default} [projection] Projection.
     * @return {Array<number>|null} Resolutions.
     * @override
     */
    getResolutions(projection) {
      const tileGrid = projection ? this.getTileGridForProjection(projection) : this.tileGrid;
      if (!tileGrid) {
        return null;
      }
      return tileGrid.getResolutions();
    }
    /**
     * @abstract
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {import("../structs/LRUCache.js").default<import("../Tile.js").default>} [tileCache] Tile cache.
     * @return {TileType|null} Tile.
     */
    getTile(z, x, y, pixelRatio, projection, tileCache) {
      return abstract();
    }
    /**
     * Return the tile grid of the tile source.
     * @return {import("../tilegrid/TileGrid.js").default|null} Tile grid.
     * @api
     */
    getTileGrid() {
      return this.tileGrid;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     */
    getTileGridForProjection(projection) {
      if (!this.tileGrid) {
        return getForProjection(projection);
      }
      return this.tileGrid;
    }
    /**
     * Get the tile pixel ratio for this source. Subclasses may override this
     * method, which is meant to return a supported pixel ratio that matches the
     * provided `pixelRatio` as close as possible.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Tile pixel ratio.
     */
    getTilePixelRatio(pixelRatio) {
      return this.tilePixelRatio_;
    }
    /**
     * @param {number} z Z.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {import("../size.js").Size} Tile size.
     */
    getTilePixelSize(z, pixelRatio, projection) {
      const tileGrid = this.getTileGridForProjection(projection);
      const tilePixelRatio = this.getTilePixelRatio(pixelRatio);
      const tileSize = toSize(tileGrid.getTileSize(z), this.tmpSize);
      if (tilePixelRatio == 1) {
        return tileSize;
      }
      return scale(tileSize, tilePixelRatio, this.tmpSize);
    }
    /**
     * Returns a tile coordinate wrapped around the x-axis. When the tile coordinate
     * is outside the resolution and extent range of the tile grid, `null` will be
     * returned.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../proj/Projection.js").default} [projection] Projection.
     * @return {import("../tilecoord.js").TileCoord} Tile coordinate to be passed to the tileUrlFunction or
     *     null if no tile URL should be created for the passed `tileCoord`.
     */
    getTileCoordForTileUrlFunction(tileCoord, projection) {
      const gridProjection = projection !== void 0 ? projection : this.getProjection();
      const tileGrid = projection !== void 0 ? this.getTileGridForProjection(gridProjection) : this.tileGrid || this.getTileGridForProjection(gridProjection);
      if (this.getWrapX() && gridProjection.isGlobal()) {
        tileCoord = wrapX3(tileGrid, tileCoord, gridProjection);
      }
      return withinExtentAndZ(tileCoord, tileGrid) ? tileCoord : null;
    }
    /**
     * Remove all cached reprojected tiles from the source. The next render cycle will create new tiles.
     * @api
     */
    clear() {
    }
    /**
     * @override
     */
    refresh() {
      this.clear();
      super.refresh();
    }
  };
  var TileSourceEvent = class extends Event_default {
    /**
     * @param {string} type Type.
     * @param {import("../Tile.js").default} tile The tile.
     */
    constructor(type, tile) {
      super(type);
      this.tile = tile;
    }
  };
  var Tile_default3 = TileSource;

  // node_modules/ol/source/TileEventType.js
  var TileEventType_default = {
    /**
     * Triggered when a tile starts loading.
     * @event module:ol/source/Tile.TileSourceEvent#tileloadstart
     * @api
     */
    TILELOADSTART: "tileloadstart",
    /**
     * Triggered when a tile finishes loading, either when its data is loaded,
     * or when loading was aborted because the tile is no longer needed.
     * @event module:ol/source/Tile.TileSourceEvent#tileloadend
     * @api
     */
    TILELOADEND: "tileloadend",
    /**
     * Triggered if tile loading results in an error. Note that this is not the
     * right place to re-fetch tiles. See {@link module:ol/ImageTile~ImageTile#load}
     * for details.
     * @event module:ol/source/Tile.TileSourceEvent#tileloaderror
     * @api
     */
    TILELOADERROR: "tileloaderror"
  };

  // node_modules/ol/source/UrlTile.js
  var UrlTile = class _UrlTile extends Tile_default3 {
    /**
     * @param {Options} options Image tile options.
     */
    constructor(options) {
      super({
        attributions: options.attributions,
        cacheSize: options.cacheSize,
        projection: options.projection,
        state: options.state,
        tileGrid: options.tileGrid,
        tilePixelRatio: options.tilePixelRatio,
        wrapX: options.wrapX,
        transition: options.transition,
        interpolate: options.interpolate,
        key: options.key,
        attributionsCollapsible: options.attributionsCollapsible,
        zDirection: options.zDirection
      });
      this.generateTileUrlFunction_ = this.tileUrlFunction === _UrlTile.prototype.tileUrlFunction;
      this.tileLoadFunction = options.tileLoadFunction;
      if (options.tileUrlFunction) {
        this.tileUrlFunction = options.tileUrlFunction;
      }
      this.urls = null;
      if (options.urls) {
        this.setUrls(options.urls);
      } else if (options.url) {
        this.setUrl(options.url);
      }
      this.tileLoadingKeys_ = {};
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the tile load function of the source.
     * @return {import("../Tile.js").LoadFunction} TileLoadFunction
     * @api
     */
    getTileLoadFunction() {
      return this.tileLoadFunction;
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the tile URL function of the source.
     * @return {import("../Tile.js").UrlFunction} TileUrlFunction
     * @api
     */
    getTileUrlFunction() {
      return Object.getPrototypeOf(this).tileUrlFunction === this.tileUrlFunction ? this.tileUrlFunction.bind(this) : this.tileUrlFunction;
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Return the URLs used for this source.
     * When a tileUrlFunction is used instead of url or urls,
     * null will be returned.
     * @return {!Array<string>|null} URLs.
     * @api
     */
    getUrls() {
      return this.urls;
    }
    /**
     * Handle tile change events.
     * @param {import("../events/Event.js").default} event Event.
     * @protected
     */
    handleTileChange(event) {
      const tile = (
        /** @type {import("../Tile.js").default} */
        event.target
      );
      const uid = getUid(tile);
      const tileState = tile.getState();
      let type;
      if (tileState == TileState_default.LOADING) {
        this.tileLoadingKeys_[uid] = true;
        type = TileEventType_default.TILELOADSTART;
      } else if (uid in this.tileLoadingKeys_) {
        delete this.tileLoadingKeys_[uid];
        type = tileState == TileState_default.ERROR ? TileEventType_default.TILELOADERROR : tileState == TileState_default.LOADED ? TileEventType_default.TILELOADEND : void 0;
      }
      if (type != void 0) {
        this.dispatchEvent(new TileSourceEvent(type, tile));
      }
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the tile load function of the source.
     * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @api
     */
    setTileLoadFunction(tileLoadFunction) {
      this.tileLoadFunction = tileLoadFunction;
      this.changed();
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the tile URL function of the source.
     * @param {import("../Tile.js").UrlFunction} tileUrlFunction Tile URL function.
     * @param {string} [key] Optional new tile key for the source.
     * @api
     */
    setTileUrlFunction(tileUrlFunction, key) {
      this.tileUrlFunction = tileUrlFunction;
      if (typeof key !== "undefined") {
        this.setKey(key);
      } else {
        this.changed();
      }
    }
    /**
     * Set the URL to use for requests.
     * @param {string} url URL.
     * @api
     */
    setUrl(url) {
      const urls = expandUrl(url);
      this.urls = urls;
      this.setUrls(urls);
    }
    /**
     * Deprecated.  Use an ImageTile source instead.
     * Set the URLs to use for requests.
     * @param {Array<string>} urls URLs.
     * @api
     */
    setUrls(urls) {
      this.urls = urls;
      const key = urls.join("\n");
      if (this.generateTileUrlFunction_) {
        this.setTileUrlFunction(createFromTemplates(urls, this.tileGrid), key);
      } else {
        this.setKey(key);
      }
    }
    /**
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {string|undefined} Tile URL.
     */
    tileUrlFunction(tileCoord, pixelRatio, projection) {
      return void 0;
    }
  };
  var UrlTile_default = UrlTile;

  // node_modules/ol/source/TileImage.js
  var TileImage = class extends UrlTile_default {
    /**
     * @param {!Options} options Image tile options.
     */
    constructor(options) {
      super({
        attributions: options.attributions,
        cacheSize: options.cacheSize,
        projection: options.projection,
        state: options.state,
        tileGrid: options.tileGrid,
        tileLoadFunction: options.tileLoadFunction ? options.tileLoadFunction : defaultTileLoadFunction,
        tilePixelRatio: options.tilePixelRatio,
        tileUrlFunction: options.tileUrlFunction,
        url: options.url,
        urls: options.urls,
        wrapX: options.wrapX,
        transition: options.transition,
        interpolate: options.interpolate !== void 0 ? options.interpolate : true,
        key: options.key,
        attributionsCollapsible: options.attributionsCollapsible,
        zDirection: options.zDirection
      });
      this.crossOrigin = options.crossOrigin !== void 0 ? options.crossOrigin : null;
      this.referrerPolicy = options.referrerPolicy;
      this.tileClass = options.tileClass !== void 0 ? options.tileClass : ImageTile_default;
      this.tileGridForProjection = {};
      this.reprojectionErrorThreshold_ = options.reprojectionErrorThreshold;
      this.renderReprojectionEdges_ = false;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {number} Gutter.
     * @override
     */
    getGutterForProjection(projection) {
      if (this.getProjection() && projection && !equivalent(this.getProjection(), projection)) {
        return 0;
      }
      return this.getGutter();
    }
    /**
     * @return {number} Gutter.
     */
    getGutter() {
      return 0;
    }
    /**
     * Return the key to be used for all tiles in the source.
     * @return {string} The key for all tiles.
     * @override
     */
    getKey() {
      let key = super.getKey();
      if (!this.getInterpolate()) {
        key += ":disable-interpolation";
      }
      return key;
    }
    /**
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @return {!import("../tilegrid/TileGrid.js").default} Tile grid.
     * @override
     */
    getTileGridForProjection(projection) {
      const thisProj = this.getProjection();
      if (this.tileGrid && (!thisProj || equivalent(thisProj, projection))) {
        return this.tileGrid;
      }
      const projKey = getUid(projection);
      if (!(projKey in this.tileGridForProjection)) {
        this.tileGridForProjection[projKey] = getForProjection(projection);
      }
      return this.tileGridForProjection[projKey];
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {string} key The key set on the tile.
     * @return {!ImageTile} Tile.
     * @private
     */
    createTile_(z, x, y, pixelRatio, projection, key) {
      const tileCoord = [z, x, y];
      const urlTileCoord = this.getTileCoordForTileUrlFunction(
        tileCoord,
        projection
      );
      const tileUrl = urlTileCoord ? this.tileUrlFunction(urlTileCoord, pixelRatio, projection) : void 0;
      const tile = new this.tileClass(
        tileCoord,
        tileUrl !== void 0 ? TileState_default.IDLE : TileState_default.EMPTY,
        tileUrl !== void 0 ? tileUrl : "",
        {
          crossOrigin: this.crossOrigin,
          referrerPolicy: this.referrerPolicy
        },
        this.tileLoadFunction,
        this.tileOptions
      );
      tile.key = key;
      tile.addEventListener(EventType_default.CHANGE, this.handleTileChange.bind(this));
      return tile;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {import("../proj/Projection.js").default} projection Projection.
     * @param {import("../structs/LRUCache.js").default<import("../Tile.js").default>} [tileCache] Tile cache.
     * @return {!(ImageTile|ReprojTile)} Tile.
     * @override
     */
    getTile(z, x, y, pixelRatio, projection, tileCache) {
      const sourceProjection = this.getProjection();
      if (!sourceProjection || !projection || equivalent(sourceProjection, projection)) {
        return this.getTileInternal(
          z,
          x,
          y,
          pixelRatio,
          sourceProjection || projection
        );
      }
      const tileCoord = [z, x, y];
      const key = this.getKey();
      const sourceTileGrid = this.getTileGridForProjection(sourceProjection);
      const targetTileGrid = this.getTileGridForProjection(projection);
      const wrappedTileCoord = this.getTileCoordForTileUrlFunction(
        tileCoord,
        projection
      );
      const tile = new Tile_default2(
        sourceProjection,
        sourceTileGrid,
        projection,
        targetTileGrid,
        tileCoord,
        wrappedTileCoord,
        this.getTilePixelRatio(pixelRatio),
        this.getGutter(),
        (z2, x2, y2, pixelRatio2) => this.getTileInternal(z2, x2, y2, pixelRatio2, sourceProjection, tileCache),
        this.reprojectionErrorThreshold_,
        this.renderReprojectionEdges_,
        this.tileOptions
      );
      tile.key = key;
      return tile;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {number} pixelRatio Pixel ratio.
     * @param {!import("../proj/Projection.js").default} projection Projection.
     * @param {import("../structs/LRUCache.js").default<import("../Tile.js").default>} [tileCache] Tile cache.
     * @return {!ImageTile} Tile.
     * @protected
     */
    getTileInternal(z, x, y, pixelRatio, projection, tileCache) {
      const key = this.getKey();
      const cacheKey = getCacheKey(this, key, z, x, y);
      if (tileCache && tileCache.containsKey(cacheKey)) {
        const tile2 = (
          /** @type {!ImageTile} */
          tileCache.get(cacheKey)
        );
        return tile2;
      }
      const tile = this.createTile_(z, x, y, pixelRatio, projection, key);
      tileCache?.set(cacheKey, tile);
      return tile;
    }
    /**
     * Sets whether to render reprojection edges or not (usually for debugging).
     * @param {boolean} render Render the edges.
     * @api
     */
    setRenderReprojectionEdges(render2) {
      if (this.renderReprojectionEdges_ == render2) {
        return;
      }
      this.renderReprojectionEdges_ = render2;
      this.changed();
    }
    /**
     * Sets the tile grid to use when reprojecting the tiles to the given
     * projection instead of the default tile grid for the projection.
     *
     * This can be useful when the default tile grid cannot be created
     * (e.g. projection has no extent defined) or
     * for optimization reasons (custom tile size, resolutions, ...).
     *
     * @param {import("../proj.js").ProjectionLike} projection Projection.
     * @param {import("../tilegrid/TileGrid.js").default} tilegrid Tile grid to use for the projection.
     * @api
     */
    setTileGridForProjection(projection, tilegrid) {
      const proj = get3(projection);
      if (proj) {
        const projKey = getUid(proj);
        if (!(projKey in this.tileGridForProjection)) {
          this.tileGridForProjection[projKey] = tilegrid;
        }
      }
    }
  };
  function defaultTileLoadFunction(imageTile, src) {
    if (WORKER_OFFSCREEN_CANVAS) {
      const crossOrigin = imageTile.getCrossOrigin();
      let mode = "same-origin";
      let credentials = "same-origin";
      if (crossOrigin === "anonymous" || crossOrigin === "") {
        mode = "cors";
        credentials = "omit";
      } else if (crossOrigin === "use-credentials") {
        mode = "cors";
        credentials = "include";
      }
      const options = {
        mode,
        credentials,
        referrerPolicy: imageTile.getReferrerPolicy()
      };
      fetch(src, options).then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        return response.blob();
      }).then((blob) => {
        return createImageBitmap(blob);
      }).then((imageBitmap) => {
        const canvas = imageTile.getImage();
        canvas.width = imageBitmap.width;
        canvas.height = imageBitmap.height;
        const ctx = (
          /** @type {OffscreenCanvas} */
          canvas.getContext("2d")
        );
        ctx.drawImage(imageBitmap, 0, 0);
        imageBitmap.close?.();
        canvas.dispatchEvent(new Event("load"));
      }).catch(() => {
        const canvas = imageTile.getImage();
        canvas.dispatchEvent(new Event("error"));
      });
      return;
    }
    imageTile.getImage().src = src;
  }
  var TileImage_default = TileImage;

  // node_modules/ol/source/Zoomify.js
  var CustomTile = class extends ImageTile_default {
    /**
     * @param {import("../size.js").Size} tileSize Full tile size.
     * @param {import("../tilecoord.js").TileCoord} tileCoord Tile coordinate.
     * @param {import("../TileState.js").default} state State.
     * @param {string} src Image source URI.
     * @param {import('../dom.js').ImageAttributes} imageAttributes Image attributes options.
     * @param {import("../Tile.js").LoadFunction} tileLoadFunction Tile load function.
     * @param {import("../Tile.js").Options} [options] Tile options.
     */
    constructor(tileSize, tileCoord, state, src, imageAttributes, tileLoadFunction, options) {
      super(tileCoord, state, src, imageAttributes, tileLoadFunction, options);
      this.zoomifyImage_ = null;
      this.tileSize_ = tileSize;
    }
    /**
     * Get the image element for this tile.
     * @return {HTMLCanvasElement|OffscreenCanvas|HTMLImageElement|HTMLVideoElement} Image.
     * @override
     */
    getImage() {
      if (this.zoomifyImage_) {
        return this.zoomifyImage_;
      }
      const image = super.getImage();
      if (this.state == TileState_default.LOADED) {
        const tileSize = this.tileSize_;
        if (image.width == tileSize[0] && image.height == tileSize[1]) {
          this.zoomifyImage_ = image;
          return image;
        }
        const context = createCanvasContext2D(tileSize[0], tileSize[1]);
        context.drawImage(image, 0, 0);
        this.zoomifyImage_ = context.canvas;
        return context.canvas;
      }
      return image;
    }
  };

  // node_modules/ol/source/IIIF.js
  function formatPercentage(percentage) {
    return percentage.toLocaleString("en", { maximumFractionDigits: 10 });
  }
  var IIIF = class extends TileImage_default {
    /**
     * @param {Options} [options] Tile source options. Use {@link import("../format/IIIFInfo.js").IIIFInfo}
     * to parse Image API service information responses into constructor options.
     * @api
     */
    constructor(options) {
      const partialOptions = options || {};
      let baseUrl = partialOptions.url || "";
      baseUrl = baseUrl + (baseUrl.lastIndexOf("/") === baseUrl.length - 1 || baseUrl === "" ? "" : "/");
      const version = partialOptions.version || Versions.VERSION2;
      const sizes = partialOptions.sizes || [];
      const size = partialOptions.size;
      assert(
        size != void 0 && Array.isArray(size) && size.length == 2 && !isNaN(size[0]) && size[0] > 0 && !isNaN(size[1]) && size[1] > 0,
        "Missing or invalid `size`"
      );
      const width = size[0];
      const height = size[1];
      const tileSize = partialOptions.tileSize;
      const tilePixelRatio = partialOptions.tilePixelRatio || 1;
      const format = partialOptions.format || "jpg";
      const quality = partialOptions.quality || (partialOptions.version == Versions.VERSION1 ? "native" : "default");
      let resolutions = partialOptions.resolutions || [];
      const supports = partialOptions.supports || [];
      const extent = partialOptions.extent || [0, -height, width, 0];
      const supportsListedSizes = sizes != void 0 && Array.isArray(sizes) && sizes.length > 0;
      const supportsListedTiles = tileSize !== void 0 && (typeof tileSize === "number" && Number.isInteger(tileSize) && tileSize > 0 || Array.isArray(tileSize) && tileSize.length > 0);
      const supportsArbitraryTiling = supports != void 0 && Array.isArray(supports) && (supports.includes("regionByPx") || supports.includes("regionByPct")) && (supports.includes("sizeByWh") || supports.includes("sizeByH") || supports.includes("sizeByW") || supports.includes("sizeByPct"));
      let tileWidth, tileHeight, maxZoom;
      resolutions.sort(function(a, b) {
        return b - a;
      });
      if (supportsListedTiles || supportsArbitraryTiling) {
        if (tileSize != void 0) {
          if (typeof tileSize === "number" && Number.isInteger(tileSize) && tileSize > 0) {
            tileWidth = tileSize;
            tileHeight = tileSize;
          } else if (Array.isArray(tileSize) && tileSize.length > 0) {
            if (tileSize.length == 1 || tileSize[1] == void 0 && Number.isInteger(tileSize[0])) {
              tileWidth = tileSize[0];
              tileHeight = tileSize[0];
            }
            if (tileSize.length == 2) {
              if (Number.isInteger(tileSize[0]) && Number.isInteger(tileSize[1])) {
                tileWidth = tileSize[0];
                tileHeight = tileSize[1];
              } else if (tileSize[0] == void 0 && Number.isInteger(tileSize[1])) {
                tileWidth = tileSize[1];
                tileHeight = tileSize[1];
              }
            }
          }
        }
        if (tileWidth === void 0 || tileHeight === void 0) {
          tileWidth = DEFAULT_TILE_SIZE;
          tileHeight = DEFAULT_TILE_SIZE;
        }
        if (resolutions.length == 0) {
          maxZoom = Math.max(
            Math.ceil(Math.log(width / tileWidth) / Math.LN2),
            Math.ceil(Math.log(height / tileHeight) / Math.LN2)
          );
          for (let i = maxZoom; i >= 0; i--) {
            resolutions.push(Math.pow(2, i));
          }
        } else {
          const maxScaleFactor = Math.max(...resolutions);
          maxZoom = Math.round(Math.log(maxScaleFactor) / Math.LN2);
        }
      } else {
        tileWidth = width;
        tileHeight = height;
        resolutions = [];
        if (supportsListedSizes) {
          sizes.sort(function(a, b) {
            return a[0] - b[0];
          });
          maxZoom = -1;
          const ignoredSizesIndex = [];
          for (let i = 0; i < sizes.length; i++) {
            const resolution = width / sizes[i][0];
            if (resolutions.length > 0 && resolutions[resolutions.length - 1] == resolution) {
              ignoredSizesIndex.push(i);
              continue;
            }
            resolutions.push(resolution);
            maxZoom++;
          }
          if (ignoredSizesIndex.length > 0) {
            for (let i = 0; i < ignoredSizesIndex.length; i++) {
              sizes.splice(ignoredSizesIndex[i] - i, 1);
            }
          }
        } else {
          resolutions.push(1);
          sizes.push([width, height]);
          maxZoom = 0;
        }
      }
      const tileGrid = new TileGrid_default({
        tileSize: [tileWidth, tileHeight],
        extent,
        origin: getTopLeft(extent),
        resolutions
      });
      const tileUrlFunction = function(tileCoord, pixelRatio, projection) {
        let regionParam, sizeParam;
        const zoom = tileCoord[0];
        if (zoom > maxZoom) {
          return;
        }
        const tileX = tileCoord[1], tileY = tileCoord[2], scale4 = resolutions[zoom];
        if (tileX === void 0 || tileY === void 0 || scale4 === void 0 || tileX < 0 || Math.ceil(width / scale4 / tileWidth) <= tileX || tileY < 0 || Math.ceil(height / scale4 / tileHeight) <= tileY) {
          return;
        }
        if (supportsArbitraryTiling || supportsListedTiles) {
          const regionX = tileX * tileWidth * scale4, regionY = tileY * tileHeight * scale4;
          let regionW = tileWidth * scale4, regionH = tileHeight * scale4, sizeW = tileWidth, sizeH = tileHeight;
          if (regionX + regionW > width) {
            regionW = width - regionX;
          }
          if (regionY + regionH > height) {
            regionH = height - regionY;
          }
          if (regionX + tileWidth * scale4 > width) {
            sizeW = Math.floor((width - regionX + scale4 - 1) / scale4);
          }
          if (regionY + tileHeight * scale4 > height) {
            sizeH = Math.floor((height - regionY + scale4 - 1) / scale4);
          }
          if (regionX == 0 && regionW == width && regionY == 0 && regionH == height) {
            regionParam = "full";
          } else if (!supportsArbitraryTiling || supports.includes("regionByPx")) {
            regionParam = regionX + "," + regionY + "," + regionW + "," + regionH;
          } else if (supports.includes("regionByPct")) {
            const pctX = formatPercentage(regionX / width * 100), pctY = formatPercentage(regionY / height * 100), pctW = formatPercentage(regionW / width * 100), pctH = formatPercentage(regionH / height * 100);
            regionParam = "pct:" + pctX + "," + pctY + "," + pctW + "," + pctH;
          }
          if (version == Versions.VERSION3 && (!supportsArbitraryTiling || supports.includes("sizeByWh"))) {
            sizeParam = sizeW + "," + sizeH;
          } else if (!supportsArbitraryTiling || supports.includes("sizeByW")) {
            sizeParam = sizeW + ",";
          } else if (supports.includes("sizeByH")) {
            sizeParam = "," + sizeH;
          } else if (supports.includes("sizeByWh")) {
            sizeParam = sizeW + "," + sizeH;
          } else if (supports.includes("sizeByPct")) {
            sizeParam = "pct:" + formatPercentage(100 / scale4);
          }
        } else {
          regionParam = "full";
          if (supportsListedSizes) {
            const regionWidth = sizes[zoom][0], regionHeight = sizes[zoom][1];
            if (version == Versions.VERSION3) {
              if (regionWidth == width && regionHeight == height) {
                sizeParam = "max";
              } else {
                sizeParam = regionWidth + "," + regionHeight;
              }
            } else {
              if (regionWidth == width) {
                sizeParam = "full";
              } else {
                sizeParam = regionWidth + ",";
              }
            }
          } else {
            sizeParam = version == Versions.VERSION3 ? "max" : "full";
          }
        }
        return baseUrl + regionParam + "/" + sizeParam + "/0/" + quality + "." + format;
      };
      const IiifTileClass = CustomTile.bind(
        null,
        toSize(tileSize || 256).map(function(size2) {
          return size2 * tilePixelRatio;
        })
      );
      super({
        attributions: partialOptions.attributions,
        attributionsCollapsible: partialOptions.attributionsCollapsible,
        cacheSize: partialOptions.cacheSize,
        crossOrigin: partialOptions.crossOrigin,
        interpolate: partialOptions.interpolate,
        projection: partialOptions.projection,
        reprojectionErrorThreshold: partialOptions.reprojectionErrorThreshold,
        state: partialOptions.state,
        tileClass: IiifTileClass,
        tileGrid,
        tilePixelRatio: partialOptions.tilePixelRatio,
        tileUrlFunction,
        transition: partialOptions.transition
      });
      this.zDirection = partialOptions.zDirection;
    }
  };
  var IIIF_default = IIIF;

  // node_modules/ol/CollectionEventType.js
  var CollectionEventType_default = {
    /**
     * Triggered when an item is added to the collection.
     * @event module:ol/Collection.CollectionEvent#add
     * @api
     */
    ADD: "add",
    /**
     * Triggered when an item is removed from the collection.
     * @event module:ol/Collection.CollectionEvent#remove
     * @api
     */
    REMOVE: "remove"
  };

  // node_modules/ol/Collection.js
  var Property = {
    LENGTH: "length"
  };
  var CollectionEvent = class extends Event_default {
    /**
     * @param {import("./CollectionEventType.js").default} type Type.
     * @param {T} element Element.
     * @param {number} index The index of the added or removed element.
     */
    constructor(type, element, index) {
      super(type);
      this.element = element;
      this.index = index;
    }
  };
  var Collection = class extends Object_default {
    /**
     * @param {Array<T>} [array] Array.
     * @param {Options} [options] Collection options.
     */
    constructor(array, options) {
      super();
      this.on;
      this.once;
      this.un;
      options = options || {};
      this.unique_ = !!options.unique;
      this.array_ = array ?? [];
      if (this.unique_) {
        for (let i = 1, ii = this.array_.length; i < ii; ++i) {
          this.assertUnique_(this.array_[i], i);
        }
      }
      this.updateLength_();
    }
    /**
     * Remove all elements from the collection.
     * @api
     */
    clear() {
      while (this.getLength() > 0) {
        this.pop();
      }
    }
    /**
     * Add elements to the collection.  This pushes each item in the provided array
     * to the end of the collection.
     * @param {!Array<T>} arr Array.
     * @return {Collection<T>} This collection.
     * @api
     */
    extend(arr) {
      for (let i = 0, ii = arr.length; i < ii; ++i) {
        this.push(arr[i]);
      }
      return this;
    }
    /**
     * Iterate over each element, calling the provided callback.
     * @param {function(T, number, Array<T>): *} f The function to call
     *     for every element. This function takes 3 arguments (the element, the
     *     index and the array). The return value is ignored.
     * @api
     */
    forEach(f) {
      const array = this.array_;
      for (let i = 0, ii = array.length; i < ii; ++i) {
        f(array[i], i, array);
      }
    }
    /**
     * Get a reference to the underlying Array object. Warning: if the array
     * is mutated, no events will be dispatched by the collection, and the
     * collection's "length" property won't be in sync with the actual length
     * of the array.
     * @return {!Array<T>} Array.
     * @api
     */
    getArray() {
      return this.array_;
    }
    /**
     * Get the element at the provided index.
     * @param {number} index Index.
     * @return {T} Element.
     * @api
     */
    item(index) {
      return this.array_[index];
    }
    /**
     * Get the length of this collection.
     * @return {number} The length of the array.
     * @observable
     * @api
     */
    getLength() {
      return this.get(Property.LENGTH);
    }
    /**
     * Insert an element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */
    insertAt(index, elem) {
      if (index < 0 || index > this.getLength()) {
        throw new Error("Index out of bounds: " + index);
      }
      if (this.unique_) {
        this.assertUnique_(elem);
      }
      this.array_.splice(index, 0, elem);
      this.updateLength_();
      this.dispatchEvent(
        new CollectionEvent(CollectionEventType_default.ADD, elem, index)
      );
    }
    /**
     * Remove the last element of the collection and return it.
     * Return `undefined` if the collection is empty.
     * @return {T|undefined} Element.
     * @api
     */
    pop() {
      return this.removeAt(this.getLength() - 1);
    }
    /**
     * Insert the provided element at the end of the collection.
     * @param {T} elem Element.
     * @return {number} New length of the collection.
     * @api
     */
    push(elem) {
      const n = this.getLength();
      this.insertAt(n, elem);
      return this.getLength();
    }
    /**
     * Remove the first occurrence of an element from the collection.
     * @param {T} elem Element.
     * @return {T|undefined} The removed element or undefined if none found.
     * @api
     */
    remove(elem) {
      const arr = this.array_;
      for (let i = 0, ii = arr.length; i < ii; ++i) {
        if (arr[i] === elem) {
          return this.removeAt(i);
        }
      }
      return void 0;
    }
    /**
     * Remove the element at the provided index and return it.
     * Return `undefined` if the collection does not contain this index.
     * @param {number} index Index.
     * @return {T|undefined} Value.
     * @api
     */
    removeAt(index) {
      if (index < 0 || index >= this.getLength()) {
        return void 0;
      }
      const prev = this.array_[index];
      this.array_.splice(index, 1);
      this.updateLength_();
      this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new CollectionEvent(CollectionEventType_default.REMOVE, prev, index)
      );
      return prev;
    }
    /**
     * Set the element at the provided index.
     * @param {number} index Index.
     * @param {T} elem Element.
     * @api
     */
    setAt(index, elem) {
      const n = this.getLength();
      if (index >= n) {
        this.insertAt(index, elem);
        return;
      }
      if (index < 0) {
        throw new Error("Index out of bounds: " + index);
      }
      if (this.unique_) {
        this.assertUnique_(elem, index);
      }
      const prev = this.array_[index];
      this.array_[index] = elem;
      this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new CollectionEvent(CollectionEventType_default.REMOVE, prev, index)
      );
      this.dispatchEvent(
        /** @type {CollectionEvent<T>} */
        new CollectionEvent(CollectionEventType_default.ADD, elem, index)
      );
    }
    /**
     * @private
     */
    updateLength_() {
      this.set(Property.LENGTH, this.array_.length);
    }
    /**
     * @private
     * @param {T} elem Element.
     * @param {number} [except] Optional index to ignore.
     */
    assertUnique_(elem, except) {
      const array = this.array_;
      for (let i = 0, ii = array.length; i < ii; ++i) {
        if (array[i] === elem && i !== except) {
          throw new Error("Duplicate item added to a unique collection");
        }
      }
    }
  };
  var Collection_default = Collection;

  // node_modules/ol/MapEvent.js
  var MapEvent = class extends Event_default {
    /**
     * @param {string} type Event type.
     * @param {import("./Map.js").default} map Map.
     * @param {?import("./Map.js").FrameState} [frameState] Frame state.
     */
    constructor(type, map, frameState) {
      super(type);
      this.map = map;
      this.frameState = frameState !== void 0 ? frameState : null;
    }
  };
  var MapEvent_default = MapEvent;

  // node_modules/ol/MapBrowserEvent.js
  var MapBrowserEvent = class extends MapEvent_default {
    /**
     * @param {string} type Event type.
     * @param {import("./Map.js").default} map Map.
     * @param {EVENT} originalEvent Original event.
     * @param {boolean} [dragging] Is the map currently being dragged?
     * @param {import("./Map.js").FrameState} [frameState] Frame state.
     * @param {Array<PointerEvent>} [activePointers] Active pointers.
     */
    constructor(type, map, originalEvent, dragging, frameState, activePointers) {
      super(type, map, frameState);
      this.originalEvent = originalEvent;
      this.pixel_ = null;
      this.coordinate_ = null;
      this.dragging = dragging !== void 0 ? dragging : false;
      this.activePointers = activePointers;
    }
    /**
     * The map pixel relative to the viewport corresponding to the original event.
     * @type {import("./pixel.js").Pixel}
     * @api
     */
    get pixel() {
      if (!this.pixel_) {
        this.pixel_ = this.map.getEventPixel(this.originalEvent);
      }
      return this.pixel_;
    }
    set pixel(pixel) {
      this.pixel_ = pixel;
    }
    /**
     * The coordinate corresponding to the original browser event.  This will be in the user
     * projection if one is set.  Otherwise it will be in the view projection.
     * @type {import("./coordinate.js").Coordinate}
     * @api
     */
    get coordinate() {
      if (!this.coordinate_) {
        this.coordinate_ = this.map.getCoordinateFromPixel(this.pixel);
      }
      return this.coordinate_;
    }
    set coordinate(coordinate) {
      this.coordinate_ = coordinate;
    }
    /**
     * Prevents the default browser action.
     * See https://developer.mozilla.org/en-US/docs/Web/API/event.preventDefault.
     * @api
     * @override
     */
    preventDefault() {
      super.preventDefault();
      if ("preventDefault" in this.originalEvent) {
        this.originalEvent.preventDefault();
      }
    }
    /**
     * Prevents further propagation of the current event.
     * See https://developer.mozilla.org/en-US/docs/Web/API/event.stopPropagation.
     * @api
     * @override
     */
    stopPropagation() {
      super.stopPropagation();
      if ("stopPropagation" in this.originalEvent) {
        this.originalEvent.stopPropagation();
      }
    }
  };
  var MapBrowserEvent_default = MapBrowserEvent;

  // node_modules/ol/MapBrowserEventType.js
  var MapBrowserEventType_default = {
    /**
     * A true single click with no dragging and no double click. Note that this
     * event is delayed by 250 ms to ensure that it is not a double click.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#singleclick
     * @api
     */
    SINGLECLICK: "singleclick",
    /**
     * A click with no dragging. A double click will fire two of this.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#click
     * @api
     */
    CLICK: EventType_default.CLICK,
    /**
     * A true double click, with no dragging.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#dblclick
     * @api
     */
    DBLCLICK: EventType_default.DBLCLICK,
    /**
     * Triggered when a pointer is dragged.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointerdrag
     * @api
     */
    POINTERDRAG: "pointerdrag",
    /**
     * Triggered when a pointer is moved. Note that on touch devices this is
     * triggered when the map is panned, so is not the same as mousemove.
     * @event module:ol/MapBrowserEvent~MapBrowserEvent#pointermove
     * @api
     */
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
  };

  // node_modules/ol/pointer/EventType.js
  var EventType_default2 = {
    POINTERMOVE: "pointermove",
    POINTERDOWN: "pointerdown",
    POINTERUP: "pointerup",
    POINTEROVER: "pointerover",
    POINTEROUT: "pointerout",
    POINTERENTER: "pointerenter",
    POINTERLEAVE: "pointerleave",
    POINTERCANCEL: "pointercancel"
  };

  // node_modules/ol/MapBrowserEventHandler.js
  var MapBrowserEventHandler = class extends Target_default {
    /**
     * @param {import("./Map.js").default} map The map with the viewport to listen to events on.
     * @param {number} [moveTolerance] The minimal distance the pointer must travel to trigger a move.
     */
    constructor(map, moveTolerance) {
      super(map);
      this.map_ = map;
      this.clickTimeoutId_;
      this.emulateClicks_ = false;
      this.dragging_ = false;
      this.dragListenerKeys_ = [];
      this.moveTolerance_ = moveTolerance === void 0 ? 1 : moveTolerance;
      this.down_ = null;
      const element = this.map_.getViewport();
      this.activePointers_ = [];
      this.trackedTouches_ = {};
      this.element_ = element;
      this.pointerdownListenerKey_ = listen(
        element,
        EventType_default2.POINTERDOWN,
        this.handlePointerDown_,
        this
      );
      this.originalPointerMoveEvent_;
      this.relayedListenerKey_ = listen(
        element,
        EventType_default2.POINTERMOVE,
        this.relayMoveEvent_,
        this
      );
      this.boundHandleTouchMove_ = this.handleTouchMove_.bind(this);
      this.element_.addEventListener(
        EventType_default.TOUCHMOVE,
        this.boundHandleTouchMove_,
        PASSIVE_EVENT_LISTENERS ? { passive: false } : false
      );
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    emulateClick_(pointerEvent) {
      let newEvent = new MapBrowserEvent_default(
        MapBrowserEventType_default.CLICK,
        this.map_,
        pointerEvent
      );
      this.dispatchEvent(newEvent);
      if (this.clickTimeoutId_ !== void 0) {
        clearTimeout(this.clickTimeoutId_);
        this.clickTimeoutId_ = void 0;
        newEvent = new MapBrowserEvent_default(
          MapBrowserEventType_default.DBLCLICK,
          this.map_,
          pointerEvent
        );
        this.dispatchEvent(newEvent);
      } else {
        this.clickTimeoutId_ = setTimeout(() => {
          this.clickTimeoutId_ = void 0;
          const newEvent2 = new MapBrowserEvent_default(
            MapBrowserEventType_default.SINGLECLICK,
            this.map_,
            pointerEvent
          );
          this.dispatchEvent(newEvent2);
        }, 250);
      }
    }
    /**
     * Keeps track on how many pointers are currently active.
     *
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    updateActivePointers_(pointerEvent) {
      const event = pointerEvent;
      const id = event.pointerId;
      if (event.type == MapBrowserEventType_default.POINTERUP || event.type == MapBrowserEventType_default.POINTERCANCEL) {
        delete this.trackedTouches_[id];
        for (const pointerId in this.trackedTouches_) {
          if (this.trackedTouches_[pointerId].target !== event.target) {
            delete this.trackedTouches_[pointerId];
            break;
          }
        }
      } else if (event.type == MapBrowserEventType_default.POINTERDOWN || event.type == MapBrowserEventType_default.POINTERMOVE) {
        this.trackedTouches_[id] = event;
      }
      this.activePointers_ = Object.values(this.trackedTouches_);
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerUp_(pointerEvent) {
      this.updateActivePointers_(pointerEvent);
      const newEvent = new MapBrowserEvent_default(
        MapBrowserEventType_default.POINTERUP,
        this.map_,
        pointerEvent,
        void 0,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(newEvent);
      if (this.emulateClicks_ && !newEvent.defaultPrevented && !this.dragging_ && this.isMouseActionButton_(pointerEvent)) {
        this.emulateClick_(this.down_);
      }
      if (this.activePointers_.length === 0) {
        this.dragListenerKeys_.forEach(unlistenByKey);
        this.dragListenerKeys_.length = 0;
        this.dragging_ = false;
        this.down_ = null;
      }
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @return {boolean} If the left mouse button was pressed.
     * @private
     */
    isMouseActionButton_(pointerEvent) {
      return pointerEvent.button === 0;
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerDown_(pointerEvent) {
      this.emulateClicks_ = this.activePointers_.length === 0;
      this.updateActivePointers_(pointerEvent);
      const newEvent = new MapBrowserEvent_default(
        MapBrowserEventType_default.POINTERDOWN,
        this.map_,
        pointerEvent,
        void 0,
        void 0,
        this.activePointers_
      );
      this.dispatchEvent(newEvent);
      this.down_ = new PointerEvent(pointerEvent.type, pointerEvent);
      Object.defineProperty(this.down_, "target", {
        writable: false,
        value: pointerEvent.target
      });
      if (this.dragListenerKeys_.length === 0) {
        const doc = this.map_.getOwnerDocument();
        this.dragListenerKeys_.push(
          listen(
            doc,
            MapBrowserEventType_default.POINTERMOVE,
            this.handlePointerMove_,
            this
          ),
          listen(doc, MapBrowserEventType_default.POINTERUP, this.handlePointerUp_, this),
          /* Note that the listener for `pointercancel is set up on
           * `pointerEventHandler_` and not `documentPointerEventHandler_` like
           * the `pointerup` and `pointermove` listeners.
           *
           * The reason for this is the following: `TouchSource.vacuumTouches_()`
           * issues `pointercancel` events, when there was no `touchend` for a
           * `touchstart`. Now, let's say a first `touchstart` is registered on
           * `pointerEventHandler_`. The `documentPointerEventHandler_` is set up.
           * But `documentPointerEventHandler_` doesn't know about the first
           * `touchstart`. If there is no `touchend` for the `touchstart`, we can
           * only receive a `touchcancel` from `pointerEventHandler_`, because it is
           * only registered there.
           */
          listen(
            this.element_,
            MapBrowserEventType_default.POINTERCANCEL,
            this.handlePointerUp_,
            this
          )
        );
        if (this.element_.getRootNode && this.element_.getRootNode() !== doc) {
          this.dragListenerKeys_.push(
            listen(
              this.element_.getRootNode(),
              MapBrowserEventType_default.POINTERUP,
              this.handlePointerUp_,
              this
            )
          );
        }
      }
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    handlePointerMove_(pointerEvent) {
      if (this.isMoving_(pointerEvent)) {
        this.updateActivePointers_(pointerEvent);
        this.dragging_ = true;
        const newEvent = new MapBrowserEvent_default(
          MapBrowserEventType_default.POINTERDRAG,
          this.map_,
          pointerEvent,
          this.dragging_,
          void 0,
          this.activePointers_
        );
        this.dispatchEvent(newEvent);
      }
    }
    /**
     * Wrap and relay a pointermove event.
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @private
     */
    relayMoveEvent_(pointerEvent) {
      this.originalPointerMoveEvent_ = pointerEvent;
      const dragging = !!(this.down_ && this.isMoving_(pointerEvent));
      this.dispatchEvent(
        new MapBrowserEvent_default(
          MapBrowserEventType_default.POINTERMOVE,
          this.map_,
          pointerEvent,
          dragging
        )
      );
    }
    /**
     * Flexible handling of a `touch-action: none` css equivalent: because calling
     * `preventDefault()` on a `pointermove` event does not stop native page scrolling
     * and zooming, we also listen for `touchmove` and call `preventDefault()` on it
     * when an interaction (currently `DragPan` handles the event.
     * @param {TouchEvent} event Event.
     * @private
     */
    handleTouchMove_(event) {
      const originalEvent = this.originalPointerMoveEvent_;
      if ((!originalEvent || originalEvent.defaultPrevented) && (typeof event.cancelable !== "boolean" || event.cancelable === true)) {
        event.preventDefault();
      }
    }
    /**
     * @param {PointerEvent} pointerEvent Pointer
     * event.
     * @return {boolean} Is moving.
     * @private
     */
    isMoving_(pointerEvent) {
      return this.dragging_ || Math.abs(pointerEvent.clientX - this.down_.clientX) > this.moveTolerance_ || Math.abs(pointerEvent.clientY - this.down_.clientY) > this.moveTolerance_;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      if (this.relayedListenerKey_) {
        unlistenByKey(this.relayedListenerKey_);
        this.relayedListenerKey_ = null;
      }
      this.element_.removeEventListener(
        EventType_default.TOUCHMOVE,
        this.boundHandleTouchMove_
      );
      if (this.pointerdownListenerKey_) {
        unlistenByKey(this.pointerdownListenerKey_);
        this.pointerdownListenerKey_ = null;
      }
      this.dragListenerKeys_.forEach(unlistenByKey);
      this.dragListenerKeys_.length = 0;
      this.element_ = null;
      super.disposeInternal();
    }
  };
  var MapBrowserEventHandler_default = MapBrowserEventHandler;

  // node_modules/ol/MapEventType.js
  var MapEventType_default = {
    /**
     * Triggered after a map frame is rendered.
     * @event module:ol/MapEvent~MapEvent#postrender
     * @api
     */
    POSTRENDER: "postrender",
    /**
     * Triggered when the map starts moving.
     * @event module:ol/MapEvent~MapEvent#movestart
     * @api
     */
    MOVESTART: "movestart",
    /**
     * Triggered after the map is moved.
     * @event module:ol/MapEvent~MapEvent#moveend
     * @api
     */
    MOVEEND: "moveend",
    /**
     * Triggered when loading of additional map data (tiles, images, features) starts.
     * @event module:ol/MapEvent~MapEvent#loadstart
     * @api
     */
    LOADSTART: "loadstart",
    /**
     * Triggered when loading of additional map data has completed.
     * @event module:ol/MapEvent~MapEvent#loadend
     * @api
     */
    LOADEND: "loadend"
  };

  // node_modules/ol/MapProperty.js
  var MapProperty_default = {
    LAYERGROUP: "layergroup",
    SIZE: "size",
    TARGET: "target",
    VIEW: "view"
  };

  // node_modules/ol/structs/PriorityQueue.js
  var DROP = Infinity;
  var PriorityQueue = class {
    /**
     * @param {function(T): number} priorityFunction Priority function.
     * @param {function(T): string} keyFunction Key function.
     */
    constructor(priorityFunction, keyFunction) {
      this.priorityFunction_ = priorityFunction;
      this.keyFunction_ = keyFunction;
      this.elements_ = [];
      this.priorities_ = [];
      this.queuedElements_ = {};
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      this.elements_.length = 0;
      this.priorities_.length = 0;
      clear(this.queuedElements_);
    }
    /**
     * Remove and return the highest-priority element. O(log N).
     * @return {T} Element.
     */
    dequeue() {
      const elements = this.elements_;
      const priorities = this.priorities_;
      const element = elements[0];
      if (elements.length == 1) {
        elements.length = 0;
        priorities.length = 0;
      } else {
        elements[0] = /** @type {T} */
        elements.pop();
        priorities[0] = /** @type {number} */
        priorities.pop();
        this.siftUp_(0);
      }
      const elementKey = this.keyFunction_(element);
      delete this.queuedElements_[elementKey];
      return element;
    }
    /**
     * Enqueue an element. O(log N).
     * @param {T} element Element.
     * @return {boolean} The element was added to the queue.
     */
    enqueue(element) {
      assert(
        !(this.keyFunction_(element) in this.queuedElements_),
        "Tried to enqueue an `element` that was already added to the queue"
      );
      const priority = this.priorityFunction_(element);
      if (priority != DROP) {
        this.elements_.push(element);
        this.priorities_.push(priority);
        this.queuedElements_[this.keyFunction_(element)] = true;
        this.siftDown_(0, this.elements_.length - 1);
        return true;
      }
      return false;
    }
    /**
     * @return {number} Count.
     */
    getCount() {
      return this.elements_.length;
    }
    /**
     * Gets the index of the left child of the node at the given index.
     * @param {number} index The index of the node to get the left child for.
     * @return {number} The index of the left child.
     * @private
     */
    getLeftChildIndex_(index) {
      return index * 2 + 1;
    }
    /**
     * Gets the index of the right child of the node at the given index.
     * @param {number} index The index of the node to get the right child for.
     * @return {number} The index of the right child.
     * @private
     */
    getRightChildIndex_(index) {
      return index * 2 + 2;
    }
    /**
     * Gets the index of the parent of the node at the given index.
     * @param {number} index The index of the node to get the parent for.
     * @return {number} The index of the parent.
     * @private
     */
    getParentIndex_(index) {
      return index - 1 >> 1;
    }
    /**
     * Make this a heap. O(N).
     * @private
     */
    heapify_() {
      let i;
      for (i = (this.elements_.length >> 1) - 1; i >= 0; i--) {
        this.siftUp_(i);
      }
    }
    /**
     * @return {boolean} Is empty.
     */
    isEmpty() {
      return this.elements_.length === 0;
    }
    /**
     * @param {string} key Key.
     * @return {boolean} Is key queued.
     */
    isKeyQueued(key) {
      return key in this.queuedElements_;
    }
    /**
     * @param {T} element Element.
     * @return {boolean} Is queued.
     */
    isQueued(element) {
      return this.isKeyQueued(this.keyFunction_(element));
    }
    /**
     * @param {number} index The index of the node to move down.
     * @private
     */
    siftUp_(index) {
      const elements = this.elements_;
      const priorities = this.priorities_;
      const count = elements.length;
      const element = elements[index];
      const priority = priorities[index];
      const startIndex = index;
      while (index < count >> 1) {
        const lIndex = this.getLeftChildIndex_(index);
        const rIndex = this.getRightChildIndex_(index);
        const smallerChildIndex = rIndex < count && priorities[rIndex] < priorities[lIndex] ? rIndex : lIndex;
        elements[index] = elements[smallerChildIndex];
        priorities[index] = priorities[smallerChildIndex];
        index = smallerChildIndex;
      }
      elements[index] = element;
      priorities[index] = priority;
      this.siftDown_(startIndex, index);
    }
    /**
     * @param {number} startIndex The index of the root.
     * @param {number} index The index of the node to move up.
     * @private
     */
    siftDown_(startIndex, index) {
      const elements = this.elements_;
      const priorities = this.priorities_;
      const element = elements[index];
      const priority = priorities[index];
      while (index > startIndex) {
        const parentIndex = this.getParentIndex_(index);
        if (priorities[parentIndex] > priority) {
          elements[index] = elements[parentIndex];
          priorities[index] = priorities[parentIndex];
          index = parentIndex;
        } else {
          break;
        }
      }
      elements[index] = element;
      priorities[index] = priority;
    }
    /**
     * FIXME empty description for jsdoc
     */
    reprioritize() {
      const priorityFunction = this.priorityFunction_;
      const elements = this.elements_;
      const priorities = this.priorities_;
      let index = 0;
      const n = elements.length;
      let element, i, priority;
      for (i = 0; i < n; ++i) {
        element = elements[i];
        priority = priorityFunction(element);
        if (priority == DROP) {
          delete this.queuedElements_[this.keyFunction_(element)];
        } else {
          priorities[index] = priority;
          elements[index++] = element;
        }
      }
      elements.length = index;
      priorities.length = index;
      this.heapify_();
    }
  };
  var PriorityQueue_default = PriorityQueue;

  // node_modules/ol/TileQueue.js
  var TileQueue = class extends PriorityQueue_default {
    /**
     * @param {PriorityFunction} tilePriorityFunction Tile priority function.
     * @param {function(): ?} tileChangeCallback Function called on each tile change event.
     */
    constructor(tilePriorityFunction, tileChangeCallback) {
      super(
        (element) => tilePriorityFunction.apply(null, element),
        (element) => element[0].getKey()
      );
      this.boundHandleTileChange_ = this.handleTileChange.bind(this);
      this.tileChangeCallback_ = tileChangeCallback;
      this.tilesLoading_ = 0;
      this.tilesLoadingKeys_ = {};
    }
    /**
     * @param {TileQueueElement} element Element.
     * @return {boolean} The element was added to the queue.
     * @override
     */
    enqueue(element) {
      const added = super.enqueue(element);
      if (added) {
        const tile = element[0];
        tile.addEventListener(EventType_default.CHANGE, this.boundHandleTileChange_);
      }
      return added;
    }
    /**
     * @return {number} Number of tiles loading.
     */
    getTilesLoading() {
      return this.tilesLoading_;
    }
    /**
     * @param {import("./events/Event.js").default} event Event.
     * @protected
     */
    handleTileChange(event) {
      const tile = (
        /** @type {import("./Tile.js").default} */
        event.target
      );
      const state = tile.getState();
      if (state === TileState_default.LOADED || state === TileState_default.ERROR || state === TileState_default.EMPTY) {
        if (state !== TileState_default.ERROR) {
          tile.removeEventListener(EventType_default.CHANGE, this.boundHandleTileChange_);
        }
        const tileKey = tile.getKey();
        if (tileKey in this.tilesLoadingKeys_) {
          delete this.tilesLoadingKeys_[tileKey];
          --this.tilesLoading_;
        }
        this.tileChangeCallback_();
      }
    }
    /**
     * @param {number} maxTotalLoading Maximum number tiles to load simultaneously.
     * @param {number} maxNewLoads Maximum number of new tiles to load.
     */
    loadMoreTiles(maxTotalLoading, maxNewLoads) {
      let newLoads = 0;
      while (this.tilesLoading_ < maxTotalLoading && newLoads < maxNewLoads && this.getCount() > 0) {
        const tile = this.dequeue()[0];
        const tileKey = tile.getKey();
        const state = tile.getState();
        if (state === TileState_default.IDLE && !(tileKey in this.tilesLoadingKeys_)) {
          this.tilesLoadingKeys_[tileKey] = true;
          ++this.tilesLoading_;
          ++newLoads;
          tile.load();
        }
      }
    }
  };
  var TileQueue_default = TileQueue;
  function getTilePriority(frameState, tile, tileSourceKey, tileCenter, tileResolution) {
    if (!frameState || !(tileSourceKey in frameState.wantedTiles)) {
      return DROP;
    }
    if (!frameState.wantedTiles[tileSourceKey][tile.getKey()]) {
      return DROP;
    }
    const center = frameState.viewState.center;
    const deltaX = tileCenter[0] - center[0];
    const deltaY = tileCenter[1] - center[1];
    return 65536 * Math.log(tileResolution) + Math.sqrt(deltaX * deltaX + deltaY * deltaY) / tileResolution;
  }

  // node_modules/ol/ViewHint.js
  var ViewHint_default = {
    ANIMATING: 0,
    INTERACTING: 1
  };

  // node_modules/ol/ViewProperty.js
  var ViewProperty_default = {
    CENTER: "center",
    RESOLUTION: "resolution",
    ROTATION: "rotation"
  };

  // node_modules/ol/centerconstraint.js
  function createExtent(extent, onlyCenter, smooth) {
    return (
      /**
       * @param {import("./coordinate.js").Coordinate|undefined} center Center.
       * @param {number|undefined} resolution Resolution.
       * @param {import("./size.js").Size} size Viewport size; unused if `onlyCenter` was specified.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @param {Array<number>} [centerShift] Shift between map center and viewport center.
       * @return {import("./coordinate.js").Coordinate|undefined} Center.
       */
      (function(center, resolution, size, isMoving, centerShift) {
        if (!center) {
          return void 0;
        }
        if (!resolution && !onlyCenter) {
          return center;
        }
        const viewWidth = onlyCenter ? 0 : size[0] * resolution;
        const viewHeight = onlyCenter ? 0 : size[1] * resolution;
        const shiftX = centerShift ? centerShift[0] : 0;
        const shiftY = centerShift ? centerShift[1] : 0;
        let minX = extent[0] + viewWidth / 2 + shiftX;
        let maxX = extent[2] - viewWidth / 2 + shiftX;
        let minY = extent[1] + viewHeight / 2 + shiftY;
        let maxY = extent[3] - viewHeight / 2 + shiftY;
        if (minX > maxX) {
          minX = (maxX + minX) / 2;
          maxX = minX;
        }
        if (minY > maxY) {
          minY = (maxY + minY) / 2;
          maxY = minY;
        }
        let x = clamp(center[0], minX, maxX);
        let y = clamp(center[1], minY, maxY);
        if (isMoving && smooth && resolution) {
          const ratio = 30 * resolution;
          x += -ratio * Math.log(1 + Math.max(0, minX - center[0]) / ratio) + ratio * Math.log(1 + Math.max(0, center[0] - maxX) / ratio);
          y += -ratio * Math.log(1 + Math.max(0, minY - center[1]) / ratio) + ratio * Math.log(1 + Math.max(0, center[1] - maxY) / ratio);
        }
        return [x, y];
      })
    );
  }
  function none(center) {
    return center;
  }

  // node_modules/ol/geom/flat/transform.js
  function transform2D(flatCoordinates, offset, end, stride, transform2, dest, destinationStride) {
    dest = dest ? dest : [];
    destinationStride = destinationStride ? destinationStride : 2;
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      const x = flatCoordinates[j];
      const y = flatCoordinates[j + 1];
      dest[i++] = transform2[0] * x + transform2[2] * y + transform2[4];
      dest[i++] = transform2[1] * x + transform2[3] * y + transform2[5];
      for (let k = 2; k < destinationStride; k++) {
        dest[i++] = flatCoordinates[j + k];
      }
    }
    if (dest && dest.length != i) {
      dest.length = i;
    }
    return dest;
  }
  function rotate2(flatCoordinates, offset, end, stride, angle, anchor, dest) {
    dest = dest ? dest : [];
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      const deltaX = flatCoordinates[j] - anchorX;
      const deltaY = flatCoordinates[j + 1] - anchorY;
      dest[i++] = anchorX + deltaX * cos - deltaY * sin;
      dest[i++] = anchorY + deltaX * sin + deltaY * cos;
      for (let k = j + 2; k < j + stride; ++k) {
        dest[i++] = flatCoordinates[k];
      }
    }
    if (dest && dest.length != i) {
      dest.length = i;
    }
    return dest;
  }
  function scale3(flatCoordinates, offset, end, stride, sx, sy, anchor, dest) {
    dest = dest ? dest : [];
    const anchorX = anchor[0];
    const anchorY = anchor[1];
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      const deltaX = flatCoordinates[j] - anchorX;
      const deltaY = flatCoordinates[j + 1] - anchorY;
      dest[i++] = anchorX + sx * deltaX;
      dest[i++] = anchorY + sy * deltaY;
      for (let k = j + 2; k < j + stride; ++k) {
        dest[i++] = flatCoordinates[k];
      }
    }
    if (dest && dest.length != i) {
      dest.length = i;
    }
    return dest;
  }
  function translate(flatCoordinates, offset, end, stride, deltaX, deltaY, dest) {
    dest = dest ? dest : [];
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      dest[i++] = flatCoordinates[j] + deltaX;
      dest[i++] = flatCoordinates[j + 1] + deltaY;
      for (let k = j + 2; k < j + stride; ++k) {
        dest[i++] = flatCoordinates[k];
      }
    }
    if (dest && dest.length != i) {
      dest.length = i;
    }
    return dest;
  }

  // node_modules/ol/geom/Geometry.js
  var tmpTransform = create();
  var tmpPoint = [NaN, NaN];
  var Geometry = class extends Object_default {
    constructor() {
      super();
      this.extent_ = createEmpty();
      this.extentRevision_ = -1;
      this.simplifiedGeometryMaxMinSquaredTolerance = 0;
      this.simplifiedGeometryRevision = 0;
      this.simplifyTransformedInternal = memoizeOne(
        (revision, squaredTolerance, transform2) => {
          if (!transform2) {
            return this.getSimplifiedGeometry(squaredTolerance);
          }
          const clone2 = this.clone();
          clone2.applyTransform(transform2);
          return clone2.getSimplifiedGeometry(squaredTolerance);
        }
      );
    }
    /**
     * Get a transformed and simplified version of the geometry.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @param {import("../proj.js").TransformFunction} [transform] Optional transform function.
     * @return {Geometry} Simplified geometry.
     */
    simplifyTransformed(squaredTolerance, transform2) {
      return this.simplifyTransformedInternal(
        this.getRevision(),
        squaredTolerance,
        transform2
      );
    }
    /**
     * Make a complete copy of the geometry.
     * @abstract
     * @return {!Geometry} Clone.
     */
    clone() {
      return abstract();
    }
    /**
     * @abstract
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     */
    closestPointXY(x, y, closestPoint, minSquaredDistance) {
      return abstract();
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     */
    containsXY(x, y) {
      return this.closestPointXY(x, y, tmpPoint, Number.MIN_VALUE) === 0;
    }
    /**
     * Return the closest point of the geometry to the passed point as
     * {@link module:ol/coordinate~Coordinate coordinate}.
     * @param {import("../coordinate.js").Coordinate} point Point.
     * @param {import("../coordinate.js").Coordinate} [closestPoint] Closest point.
     * @return {import("../coordinate.js").Coordinate} Closest point.
     * @api
     */
    getClosestPoint(point, closestPoint) {
      closestPoint = closestPoint ? closestPoint : [NaN, NaN];
      this.closestPointXY(point[0], point[1], closestPoint, Infinity);
      return closestPoint;
    }
    /**
     * Returns true if this geometry includes the specified coordinate. If the
     * coordinate is on the boundary of the geometry, returns false.
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @return {boolean} Contains coordinate.
     * @api
     */
    intersectsCoordinate(coordinate) {
      return this.containsXY(coordinate[0], coordinate[1]);
    }
    /**
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     */
    computeExtent(extent) {
      return abstract();
    }
    /**
     * Get the extent of the geometry.
     * @param {import("../extent.js").Extent} [extent] Extent.
     * @return {import("../extent.js").Extent} extent Extent.
     * @api
     */
    getExtent(extent) {
      if (this.extentRevision_ != this.getRevision()) {
        const extent2 = this.computeExtent(this.extent_);
        if (isNaN(extent2[0]) || isNaN(extent2[1])) {
          createOrUpdateEmpty(extent2);
        }
        this.extentRevision_ = this.getRevision();
      }
      return returnOrUpdate(this.extent_, extent);
    }
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     * @abstract
     * @param {number} angle Rotation angle in radians.
     * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
     * @api
     */
    rotate(angle, anchor) {
      abstract();
    }
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     * @abstract
     * @param {number} sx The scaling factor in the x-direction.
     * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
     * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
     *     of the geometry extent).
     * @api
     */
    scale(sx, sy, anchor) {
      abstract();
    }
    /**
     * Create a simplified version of this geometry.  For linestrings, this uses
     * the [Douglas Peucker](https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm)
     * algorithm.  For polygons, a quantization-based
     * simplification is used to preserve topology.
     * @param {number} tolerance The tolerance distance for simplification.
     * @return {Geometry} A new, simplified version of the original geometry.
     * @api
     */
    simplify(tolerance) {
      return this.getSimplifiedGeometry(tolerance * tolerance);
    }
    /**
     * Create a simplified version of this geometry using the Douglas Peucker
     * algorithm.
     * See https://en.wikipedia.org/wiki/Ramer-Douglas-Peucker_algorithm.
     * @abstract
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Geometry} Simplified geometry.
     */
    getSimplifiedGeometry(squaredTolerance) {
      return abstract();
    }
    /**
     * Get the type of this geometry.
     * @abstract
     * @return {Type} Geometry type.
     */
    getType() {
      return abstract();
    }
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @abstract
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     * Called with a flat array of geometry coordinates.
     */
    applyTransform(transformFn) {
      abstract();
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @abstract
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     */
    intersectsExtent(extent) {
      return abstract();
    }
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first `clone()` this geometry.
     * @abstract
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @api
     */
    translate(deltaX, deltaY) {
      abstract();
    }
    /**
     * Transform each coordinate of the geometry from one coordinate reference
     * system to another. The geometry is modified in place.
     * For example, a line will be transformed to a line and a circle to a circle.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     *
     * @param {import("../proj.js").ProjectionLike} source The current projection.  Can be a
     *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
     * @param {import("../proj.js").ProjectionLike} destination The desired projection.  Can be a
     *     string identifier or a {@link module:ol/proj/Projection~Projection} object.
     * @return {this} This geometry.  Note that original geometry is
     *     modified in place.
     * @api
     */
    transform(source, destination) {
      const sourceProj = get3(source);
      const transformFn = sourceProj.getUnits() == "tile-pixels" ? function(inCoordinates, outCoordinates, stride) {
        const pixelExtent = sourceProj.getExtent();
        const projectedExtent = sourceProj.getWorldExtent();
        const scale4 = getHeight(projectedExtent) / getHeight(pixelExtent);
        compose(
          tmpTransform,
          projectedExtent[0],
          projectedExtent[3],
          scale4,
          -scale4,
          0,
          0,
          0
        );
        const transformed = transform2D(
          inCoordinates,
          0,
          inCoordinates.length,
          stride,
          tmpTransform,
          outCoordinates
        );
        const projTransform = getTransform(sourceProj, destination);
        if (projTransform) {
          return projTransform(transformed, transformed, stride);
        }
        return transformed;
      } : getTransform(sourceProj, destination);
      this.applyTransform(transformFn);
      return this;
    }
  };
  var Geometry_default = Geometry;

  // node_modules/ol/geom/SimpleGeometry.js
  var SimpleGeometry = class extends Geometry_default {
    constructor() {
      super();
      this.layout = "XY";
      this.stride = 2;
      this.flatCoordinates;
    }
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     * @override
     */
    computeExtent(extent) {
      return createOrUpdateFromFlatCoordinates(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        extent
      );
    }
    /**
     * @abstract
     * @return {Array<*> | null} Coordinates.
     */
    getCoordinates() {
      return abstract();
    }
    /**
     * Return the first coordinate of the geometry.
     * @return {import("../coordinate.js").Coordinate} First coordinate.
     * @api
     */
    getFirstCoordinate() {
      return this.flatCoordinates.slice(0, this.stride);
    }
    /**
     * @return {Array<number>} Flat coordinates.
     */
    getFlatCoordinates() {
      return this.flatCoordinates;
    }
    /**
     * Return the last coordinate of the geometry.
     * @return {import("../coordinate.js").Coordinate} Last point.
     * @api
     */
    getLastCoordinate() {
      return this.flatCoordinates.slice(
        this.flatCoordinates.length - this.stride
      );
    }
    /**
     * Return the {@link import("./Geometry.js").GeometryLayout layout} of the geometry.
     * @return {import("./Geometry.js").GeometryLayout} Layout.
     * @api
     */
    getLayout() {
      return this.layout;
    }
    /**
     * Create a simplified version of this geometry using the Douglas Peucker algorithm.
     * @param {number} squaredTolerance Squared tolerance.
     * @return {SimpleGeometry} Simplified geometry.
     * @override
     */
    getSimplifiedGeometry(squaredTolerance) {
      if (this.simplifiedGeometryRevision !== this.getRevision()) {
        this.simplifiedGeometryMaxMinSquaredTolerance = 0;
        this.simplifiedGeometryRevision = this.getRevision();
      }
      if (squaredTolerance < 0 || this.simplifiedGeometryMaxMinSquaredTolerance !== 0 && squaredTolerance <= this.simplifiedGeometryMaxMinSquaredTolerance) {
        return this;
      }
      const simplifiedGeometry = this.getSimplifiedGeometryInternal(squaredTolerance);
      const simplifiedFlatCoordinates = simplifiedGeometry.getFlatCoordinates();
      if (simplifiedFlatCoordinates.length < this.flatCoordinates.length) {
        return simplifiedGeometry;
      }
      this.simplifiedGeometryMaxMinSquaredTolerance = squaredTolerance;
      return this;
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {SimpleGeometry} Simplified geometry.
     * @protected
     */
    getSimplifiedGeometryInternal(squaredTolerance) {
      return this;
    }
    /**
     * @return {number} Stride.
     */
    getStride() {
      return this.stride;
    }
    /**
     * @param {import("./Geometry.js").GeometryLayout} layout Layout.
     * @param {Array<number>} flatCoordinates Flat coordinates.
     */
    setFlatCoordinates(layout, flatCoordinates) {
      this.stride = getStrideForLayout(layout);
      this.layout = layout;
      this.flatCoordinates = flatCoordinates;
    }
    /**
     * @abstract
     * @param {!Array<*>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    setCoordinates(coordinates2, layout) {
      abstract();
    }
    /**
     * @param {import("./Geometry.js").GeometryLayout|undefined} layout Layout.
     * @param {Array<*>} coordinates Coordinates.
     * @param {number} nesting Nesting.
     * @protected
     */
    setLayout(layout, coordinates2, nesting) {
      let stride;
      if (layout) {
        stride = getStrideForLayout(layout);
      } else {
        for (let i = 0; i < nesting; ++i) {
          if (coordinates2.length === 0) {
            this.layout = "XY";
            this.stride = 2;
            return;
          }
          coordinates2 = /** @type {Array<unknown>} */
          coordinates2[0];
        }
        stride = coordinates2.length;
        layout = getLayoutForStride(stride);
      }
      this.layout = layout;
      this.stride = stride;
    }
    /**
     * Apply a transform function to the coordinates of the geometry.
     * The geometry is modified in place.
     * If you do not want the geometry modified in place, first `clone()` it and
     * then use this function on the clone.
     * @param {import("../proj.js").TransformFunction} transformFn Transform function.
     * Called with a flat array of geometry coordinates.
     * @api
     * @override
     */
    applyTransform(transformFn) {
      if (this.flatCoordinates) {
        transformFn(
          this.flatCoordinates,
          this.flatCoordinates,
          this.layout.startsWith("XYZ") ? 3 : 2,
          this.stride
        );
        this.changed();
      }
    }
    /**
     * Rotate the geometry around a given coordinate. This modifies the geometry
     * coordinates in place.
     * @param {number} angle Rotation angle in counter-clockwise radians.
     * @param {import("../coordinate.js").Coordinate} anchor The rotation center.
     * @api
     * @override
     */
    rotate(angle, anchor) {
      const flatCoordinates = this.getFlatCoordinates();
      if (flatCoordinates) {
        const stride = this.getStride();
        rotate2(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride,
          angle,
          anchor,
          flatCoordinates
        );
        this.changed();
      }
    }
    /**
     * Scale the geometry (with an optional origin).  This modifies the geometry
     * coordinates in place.
     * @param {number} sx The scaling factor in the x-direction.
     * @param {number} [sy] The scaling factor in the y-direction (defaults to sx).
     * @param {import("../coordinate.js").Coordinate} [anchor] The scale origin (defaults to the center
     *     of the geometry extent).
     * @api
     * @override
     */
    scale(sx, sy, anchor) {
      if (sy === void 0) {
        sy = sx;
      }
      if (!anchor) {
        anchor = getCenter(this.getExtent());
      }
      const flatCoordinates = this.getFlatCoordinates();
      if (flatCoordinates) {
        const stride = this.getStride();
        scale3(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride,
          sx,
          sy,
          anchor,
          flatCoordinates
        );
        this.changed();
      }
    }
    /**
     * Translate the geometry.  This modifies the geometry coordinates in place.  If
     * instead you want a new geometry, first `clone()` this geometry.
     * @param {number} deltaX Delta X.
     * @param {number} deltaY Delta Y.
     * @api
     * @override
     */
    translate(deltaX, deltaY) {
      const flatCoordinates = this.getFlatCoordinates();
      if (flatCoordinates) {
        const stride = this.getStride();
        translate(
          flatCoordinates,
          0,
          flatCoordinates.length,
          stride,
          deltaX,
          deltaY,
          flatCoordinates
        );
        this.changed();
      }
    }
  };
  function getLayoutForStride(stride) {
    let layout;
    if (stride == 2) {
      layout = "XY";
    } else if (stride == 3) {
      layout = "XYZ";
    } else if (stride == 4) {
      layout = "XYZM";
    }
    return (
      /** @type {import("./Geometry.js").GeometryLayout} */
      layout
    );
  }
  function getStrideForLayout(layout) {
    let stride;
    if (layout == "XY") {
      stride = 2;
    } else if (layout == "XYZ" || layout == "XYM") {
      stride = 3;
    } else if (layout == "XYZM") {
      stride = 4;
    }
    return (
      /** @type {number} */
      stride
    );
  }
  var SimpleGeometry_default = SimpleGeometry;

  // node_modules/ol/geom/flat/area.js
  function linearRing(flatCoordinates, offset, end, stride) {
    let twiceArea = 0;
    const x0 = flatCoordinates[end - stride];
    const y0 = flatCoordinates[end - stride + 1];
    let dx1 = 0;
    let dy1 = 0;
    for (; offset < end; offset += stride) {
      const dx2 = flatCoordinates[offset] - x0;
      const dy2 = flatCoordinates[offset + 1] - y0;
      twiceArea += dy1 * dx2 - dx1 * dy2;
      dx1 = dx2;
      dy1 = dy2;
    }
    return twiceArea / 2;
  }
  function linearRings(flatCoordinates, offset, ends, stride) {
    let area = 0;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      area += linearRing(flatCoordinates, offset, end, stride);
      offset = end;
    }
    return area;
  }

  // node_modules/ol/geom/flat/closest.js
  function assignClosest(flatCoordinates, offset1, offset2, stride, x, y, closestPoint) {
    const x1 = flatCoordinates[offset1];
    const y1 = flatCoordinates[offset1 + 1];
    const dx = flatCoordinates[offset2] - x1;
    const dy = flatCoordinates[offset2 + 1] - y1;
    let offset;
    if (dx === 0 && dy === 0) {
      offset = offset1;
    } else {
      const t = ((x - x1) * dx + (y - y1) * dy) / (dx * dx + dy * dy);
      if (t > 1) {
        offset = offset2;
      } else if (t > 0) {
        for (let i = 0; i < stride; ++i) {
          closestPoint[i] = lerp(
            flatCoordinates[offset1 + i],
            flatCoordinates[offset2 + i],
            t
          );
        }
        closestPoint.length = stride;
        return;
      } else {
        offset = offset1;
      }
    }
    for (let i = 0; i < stride; ++i) {
      closestPoint[i] = flatCoordinates[offset + i];
    }
    closestPoint.length = stride;
  }
  function maxSquaredDelta(flatCoordinates, offset, end, stride, max) {
    let x1 = flatCoordinates[offset];
    let y1 = flatCoordinates[offset + 1];
    for (offset += stride; offset < end; offset += stride) {
      const x2 = flatCoordinates[offset];
      const y2 = flatCoordinates[offset + 1];
      const squaredDelta = squaredDistance(x1, y1, x2, y2);
      if (squaredDelta > max) {
        max = squaredDelta;
      }
      x1 = x2;
      y1 = y2;
    }
    return max;
  }
  function arrayMaxSquaredDelta(flatCoordinates, offset, ends, stride, max) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      max = maxSquaredDelta(flatCoordinates, offset, end, stride, max);
      offset = end;
    }
    return max;
  }
  function assignClosestPoint(flatCoordinates, offset, end, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint2) {
    if (offset == end) {
      return minSquaredDistance;
    }
    let i, squaredDistance2;
    if (maxDelta === 0) {
      squaredDistance2 = squaredDistance(
        x,
        y,
        flatCoordinates[offset],
        flatCoordinates[offset + 1]
      );
      if (squaredDistance2 < minSquaredDistance) {
        for (i = 0; i < stride; ++i) {
          closestPoint[i] = flatCoordinates[offset + i];
        }
        closestPoint.length = stride;
        return squaredDistance2;
      }
      return minSquaredDistance;
    }
    tmpPoint2 = tmpPoint2 ? tmpPoint2 : [NaN, NaN];
    let index = offset + stride;
    while (index < end) {
      assignClosest(
        flatCoordinates,
        index - stride,
        index,
        stride,
        x,
        y,
        tmpPoint2
      );
      squaredDistance2 = squaredDistance(x, y, tmpPoint2[0], tmpPoint2[1]);
      if (squaredDistance2 < minSquaredDistance) {
        minSquaredDistance = squaredDistance2;
        for (i = 0; i < stride; ++i) {
          closestPoint[i] = tmpPoint2[i];
        }
        closestPoint.length = stride;
        index += stride;
      } else {
        index += stride * Math.max(
          (Math.sqrt(squaredDistance2) - Math.sqrt(minSquaredDistance)) / maxDelta | 0,
          1
        );
      }
    }
    if (isRing) {
      assignClosest(
        flatCoordinates,
        end - stride,
        offset,
        stride,
        x,
        y,
        tmpPoint2
      );
      squaredDistance2 = squaredDistance(x, y, tmpPoint2[0], tmpPoint2[1]);
      if (squaredDistance2 < minSquaredDistance) {
        minSquaredDistance = squaredDistance2;
        for (i = 0; i < stride; ++i) {
          closestPoint[i] = tmpPoint2[i];
        }
        closestPoint.length = stride;
      }
    }
    return minSquaredDistance;
  }
  function assignClosestArrayPoint(flatCoordinates, offset, ends, stride, maxDelta, isRing, x, y, closestPoint, minSquaredDistance, tmpPoint2) {
    tmpPoint2 = tmpPoint2 ? tmpPoint2 : [NaN, NaN];
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      minSquaredDistance = assignClosestPoint(
        flatCoordinates,
        offset,
        end,
        stride,
        maxDelta,
        isRing,
        x,
        y,
        closestPoint,
        minSquaredDistance,
        tmpPoint2
      );
      offset = end;
    }
    return minSquaredDistance;
  }

  // node_modules/ol/geom/flat/deflate.js
  function deflateCoordinate(flatCoordinates, offset, coordinate, stride) {
    for (let i = 0, ii = coordinate.length; i < ii; ++i) {
      flatCoordinates[offset++] = coordinate[i];
    }
    return offset;
  }
  function deflateCoordinates(flatCoordinates, offset, coordinates2, stride) {
    for (let i = 0, ii = coordinates2.length; i < ii; ++i) {
      const coordinate = coordinates2[i];
      for (let j = 0; j < stride; ++j) {
        flatCoordinates[offset++] = coordinate[j];
      }
    }
    return offset;
  }
  function deflateCoordinatesArray(flatCoordinates, offset, coordinatess, stride, ends) {
    ends = ends ? ends : [];
    let i = 0;
    for (let j = 0, jj = coordinatess.length; j < jj; ++j) {
      const end = deflateCoordinates(
        flatCoordinates,
        offset,
        coordinatess[j],
        stride
      );
      ends[i++] = end;
      offset = end;
    }
    ends.length = i;
    return ends;
  }

  // node_modules/ol/geom/flat/inflate.js
  function inflateCoordinates(flatCoordinates, offset, end, stride, coordinates2) {
    coordinates2 = coordinates2 !== void 0 ? coordinates2 : [];
    let i = 0;
    for (let j = offset; j < end; j += stride) {
      coordinates2[i++] = flatCoordinates.slice(j, j + stride);
    }
    coordinates2.length = i;
    return coordinates2;
  }
  function inflateCoordinatesArray(flatCoordinates, offset, ends, stride, coordinatess) {
    coordinatess = coordinatess !== void 0 ? coordinatess : [];
    let i = 0;
    for (let j = 0, jj = ends.length; j < jj; ++j) {
      const end = ends[j];
      coordinatess[i++] = inflateCoordinates(
        flatCoordinates,
        offset,
        end,
        stride,
        coordinatess[i]
      );
      offset = end;
    }
    coordinatess.length = i;
    return coordinatess;
  }

  // node_modules/ol/geom/flat/simplify.js
  function douglasPeucker(flatCoordinates, offset, end, stride, squaredTolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    const n = (end - offset) / stride;
    if (n < 3) {
      for (; offset < end; offset += stride) {
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset];
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + 1];
      }
      return simplifiedOffset;
    }
    const markers = new Array(n);
    markers[0] = 1;
    markers[n - 1] = 1;
    const stack = [offset, end - stride];
    let index = 0;
    while (stack.length > 0) {
      const last = stack.pop();
      const first = stack.pop();
      let maxSquaredDistance = 0;
      const x1 = flatCoordinates[first];
      const y1 = flatCoordinates[first + 1];
      const x2 = flatCoordinates[last];
      const y2 = flatCoordinates[last + 1];
      for (let i = first + stride; i < last; i += stride) {
        const x = flatCoordinates[i];
        const y = flatCoordinates[i + 1];
        const squaredDistance2 = squaredSegmentDistance(x, y, x1, y1, x2, y2);
        if (squaredDistance2 > maxSquaredDistance) {
          index = i;
          maxSquaredDistance = squaredDistance2;
        }
      }
      if (maxSquaredDistance > squaredTolerance) {
        markers[(index - offset) / stride] = 1;
        if (first + stride < index) {
          stack.push(first, index);
        }
        if (index + stride < last) {
          stack.push(index, last);
        }
      }
    }
    for (let i = 0; i < n; ++i) {
      if (markers[i]) {
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride];
        simplifiedFlatCoordinates[simplifiedOffset++] = flatCoordinates[offset + i * stride + 1];
      }
    }
    return simplifiedOffset;
  }
  function snap(value, tolerance) {
    return tolerance * Math.round(value / tolerance);
  }
  function quantize(flatCoordinates, offset, end, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset) {
    if (offset == end) {
      return simplifiedOffset;
    }
    let x1 = snap(flatCoordinates[offset], tolerance);
    let y1 = snap(flatCoordinates[offset + 1], tolerance);
    offset += stride;
    simplifiedFlatCoordinates[simplifiedOffset++] = x1;
    simplifiedFlatCoordinates[simplifiedOffset++] = y1;
    let x2, y2;
    do {
      x2 = snap(flatCoordinates[offset], tolerance);
      y2 = snap(flatCoordinates[offset + 1], tolerance);
      offset += stride;
      if (offset == end) {
        simplifiedFlatCoordinates[simplifiedOffset++] = x2;
        simplifiedFlatCoordinates[simplifiedOffset++] = y2;
        return simplifiedOffset;
      }
    } while (x2 == x1 && y2 == y1);
    while (offset < end) {
      const x3 = snap(flatCoordinates[offset], tolerance);
      const y3 = snap(flatCoordinates[offset + 1], tolerance);
      offset += stride;
      if (x3 == x2 && y3 == y2) {
        continue;
      }
      const dx1 = x2 - x1;
      const dy1 = y2 - y1;
      const dx2 = x3 - x1;
      const dy2 = y3 - y1;
      if (dx1 * dy2 == dy1 * dx2 && (dx1 < 0 && dx2 < dx1 || dx1 == dx2 || dx1 > 0 && dx2 > dx1) && (dy1 < 0 && dy2 < dy1 || dy1 == dy2 || dy1 > 0 && dy2 > dy1)) {
        x2 = x3;
        y2 = y3;
        continue;
      }
      simplifiedFlatCoordinates[simplifiedOffset++] = x2;
      simplifiedFlatCoordinates[simplifiedOffset++] = y2;
      x1 = x2;
      y1 = y2;
      x2 = x3;
      y2 = y3;
    }
    simplifiedFlatCoordinates[simplifiedOffset++] = x2;
    simplifiedFlatCoordinates[simplifiedOffset++] = y2;
    return simplifiedOffset;
  }
  function quantizeArray(flatCoordinates, offset, ends, stride, tolerance, simplifiedFlatCoordinates, simplifiedOffset, simplifiedEnds) {
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      simplifiedOffset = quantize(
        flatCoordinates,
        offset,
        end,
        stride,
        tolerance,
        simplifiedFlatCoordinates,
        simplifiedOffset
      );
      simplifiedEnds.push(simplifiedOffset);
      offset = end;
    }
    return simplifiedOffset;
  }

  // node_modules/ol/geom/LinearRing.js
  var LinearRing = class _LinearRing extends SimpleGeometry_default {
    /**
     * @param {Array<import("../coordinate.js").Coordinate>|Array<number>} coordinates Coordinates.
     *     For internal use, flat coordinates in combination with `layout` are also accepted.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(coordinates2, layout) {
      super();
      this.maxDelta_ = -1;
      this.maxDeltaRevision_ = -1;
      if (layout !== void 0 && !Array.isArray(coordinates2[0])) {
        this.setFlatCoordinates(
          layout,
          /** @type {Array<number>} */
          coordinates2
        );
      } else {
        this.setCoordinates(
          /** @type {Array<import("../coordinate.js").Coordinate>} */
          coordinates2,
          layout
        );
      }
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!LinearRing} Clone.
     * @api
     * @override
     */
    clone() {
      return new _LinearRing(this.flatCoordinates.slice(), this.layout);
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(x, y, closestPoint, minSquaredDistance) {
      if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
        return minSquaredDistance;
      }
      if (this.maxDeltaRevision_ != this.getRevision()) {
        this.maxDelta_ = Math.sqrt(
          maxSquaredDelta(
            this.flatCoordinates,
            0,
            this.flatCoordinates.length,
            this.stride,
            0
          )
        );
        this.maxDeltaRevision_ = this.getRevision();
      }
      return assignClosestPoint(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        this.maxDelta_,
        true,
        x,
        y,
        closestPoint,
        minSquaredDistance
      );
    }
    /**
     * Return the area of the linear ring on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    getArea() {
      return linearRing(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride
      );
    }
    /**
     * Return the coordinates of the linear ring.
     * @return {Array<import("../coordinate.js").Coordinate>} Coordinates.
     * @api
     * @override
     */
    getCoordinates() {
      return inflateCoordinates(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride
      );
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {LinearRing} Simplified LinearRing.
     * @protected
     * @override
     */
    getSimplifiedGeometryInternal(squaredTolerance) {
      const simplifiedFlatCoordinates = [];
      simplifiedFlatCoordinates.length = douglasPeucker(
        this.flatCoordinates,
        0,
        this.flatCoordinates.length,
        this.stride,
        squaredTolerance,
        simplifiedFlatCoordinates,
        0
      );
      return new _LinearRing(simplifiedFlatCoordinates, "XY");
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "LinearRing";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(extent) {
      return false;
    }
    /**
     * Set the coordinates of the linear ring.
     * @param {!Array<import("../coordinate.js").Coordinate>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(coordinates2, layout) {
      this.setLayout(layout, coordinates2, 1);
      if (!this.flatCoordinates) {
        this.flatCoordinates = [];
      }
      this.flatCoordinates.length = deflateCoordinates(
        this.flatCoordinates,
        0,
        coordinates2,
        this.stride
      );
      this.changed();
    }
  };
  var LinearRing_default = LinearRing;

  // node_modules/ol/geom/Point.js
  var Point = class _Point extends SimpleGeometry_default {
    /**
     * @param {import("../coordinate.js").Coordinate} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     */
    constructor(coordinates2, layout) {
      super();
      this.setCoordinates(coordinates2, layout);
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!Point} Clone.
     * @api
     * @override
     */
    clone() {
      const point = new _Point(this.flatCoordinates.slice(), this.layout);
      point.applyProperties(this);
      return point;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(x, y, closestPoint, minSquaredDistance) {
      const flatCoordinates = this.flatCoordinates;
      const squaredDistance2 = squaredDistance(
        x,
        y,
        flatCoordinates[0],
        flatCoordinates[1]
      );
      if (squaredDistance2 < minSquaredDistance) {
        const stride = this.stride;
        for (let i = 0; i < stride; ++i) {
          closestPoint[i] = flatCoordinates[i];
        }
        closestPoint.length = stride;
        return squaredDistance2;
      }
      return minSquaredDistance;
    }
    /**
     * Return the coordinate of the point.
     * @return {import("../coordinate.js").Coordinate} Coordinates.
     * @api
     * @override
     */
    getCoordinates() {
      return this.flatCoordinates.slice();
    }
    /**
     * @param {import("../extent.js").Extent} extent Extent.
     * @protected
     * @return {import("../extent.js").Extent} extent Extent.
     * @override
     */
    computeExtent(extent) {
      return createOrUpdateFromCoordinate(this.flatCoordinates, extent);
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "Point";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(extent) {
      return containsXY(extent, this.flatCoordinates[0], this.flatCoordinates[1]);
    }
    /**
     * @param {!Array<*>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(coordinates2, layout) {
      this.setLayout(layout, coordinates2, 0);
      if (!this.flatCoordinates) {
        this.flatCoordinates = [];
      }
      this.flatCoordinates.length = deflateCoordinate(
        this.flatCoordinates,
        0,
        coordinates2,
        this.stride
      );
      this.changed();
    }
  };
  var Point_default = Point;

  // node_modules/ol/geom/flat/interiorpoint.js
  function getInteriorPointOfArray(flatCoordinates, offset, ends, stride, flatCenters, flatCentersOffset, dest) {
    let i, ii, x, x1, x2, y1, y2;
    const y = flatCenters[flatCentersOffset + 1];
    const intersections = [];
    for (let r = 0, rr = ends.length; r < rr; ++r) {
      const end = ends[r];
      x1 = flatCoordinates[end - stride];
      y1 = flatCoordinates[end - stride + 1];
      for (i = offset; i < end; i += stride) {
        x2 = flatCoordinates[i];
        y2 = flatCoordinates[i + 1];
        if (y <= y1 && y2 <= y || y1 <= y && y <= y2) {
          x = (y - y1) / (y2 - y1) * (x2 - x1) + x1;
          intersections.push(x);
        }
        x1 = x2;
        y1 = y2;
      }
    }
    let pointX = NaN;
    let maxSegmentLength = -Infinity;
    intersections.sort(ascending);
    x1 = intersections[0];
    for (i = 1, ii = intersections.length; i < ii; ++i) {
      x2 = intersections[i];
      const segmentLength = Math.abs(x2 - x1);
      if (segmentLength > maxSegmentLength) {
        x = (x1 + x2) / 2;
        if (linearRingsContainsXY(flatCoordinates, offset, ends, stride, x, y)) {
          pointX = x;
          maxSegmentLength = segmentLength;
        }
      }
      x1 = x2;
    }
    if (isNaN(pointX)) {
      pointX = flatCenters[flatCentersOffset];
    }
    if (dest) {
      dest.push(pointX, y, maxSegmentLength);
      return dest;
    }
    return [pointX, y, maxSegmentLength];
  }

  // node_modules/ol/geom/flat/reverse.js
  function coordinates(flatCoordinates, offset, end, stride) {
    while (offset < end - stride) {
      for (let i = 0; i < stride; ++i) {
        const tmp = flatCoordinates[offset + i];
        flatCoordinates[offset + i] = flatCoordinates[end - stride + i];
        flatCoordinates[end - stride + i] = tmp;
      }
      offset += stride;
      end -= stride;
    }
  }

  // node_modules/ol/geom/flat/orient.js
  function linearRingIsClockwise(flatCoordinates, offset, end, stride) {
    let edge = 0;
    let x1 = flatCoordinates[end - stride];
    let y1 = flatCoordinates[end - stride + 1];
    for (; offset < end; offset += stride) {
      const x2 = flatCoordinates[offset];
      const y2 = flatCoordinates[offset + 1];
      edge += (x2 - x1) * (y2 + y1);
      x1 = x2;
      y1 = y2;
    }
    return edge === 0 ? void 0 : edge > 0;
  }
  function linearRingsAreOriented(flatCoordinates, offset, ends, stride, right) {
    right = right !== void 0 ? right : false;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      const isClockwise = linearRingIsClockwise(
        flatCoordinates,
        offset,
        end,
        stride
      );
      if (i === 0) {
        if (right && isClockwise || !right && !isClockwise) {
          return false;
        }
      } else {
        if (right && !isClockwise || !right && isClockwise) {
          return false;
        }
      }
      offset = end;
    }
    return true;
  }
  function orientLinearRings(flatCoordinates, offset, ends, stride, right) {
    right = right !== void 0 ? right : false;
    for (let i = 0, ii = ends.length; i < ii; ++i) {
      const end = ends[i];
      const isClockwise = linearRingIsClockwise(
        flatCoordinates,
        offset,
        end,
        stride
      );
      const reverse = i === 0 ? right && isClockwise || !right && !isClockwise : right && !isClockwise || !right && isClockwise;
      if (reverse) {
        coordinates(flatCoordinates, offset, end, stride);
      }
      offset = end;
    }
    return offset;
  }

  // node_modules/ol/geom/Polygon.js
  var Polygon = class _Polygon extends SimpleGeometry_default {
    /**
     * @param {!Array<Array<import("../coordinate.js").Coordinate>>|!Array<number>} coordinates
     *     Array of linear rings that define the polygon. The first linear ring of the
     *     array defines the outer-boundary or surface of the polygon. Each subsequent
     *     linear ring defines a hole in the surface of the polygon. A linear ring is
     *     an array of vertices' coordinates where the first coordinate and the last are
     *     equivalent. (For internal use, flat coordinates in combination with
     *     `layout` and `ends` are also accepted.)
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @param {Array<number>} [ends] Ends (for internal use with flat coordinates).
     */
    constructor(coordinates2, layout, ends) {
      super();
      this.ends_ = [];
      this.flatInteriorPointRevision_ = -1;
      this.flatInteriorPoint_ = null;
      this.maxDelta_ = -1;
      this.maxDeltaRevision_ = -1;
      this.orientedRevision_ = -1;
      this.orientedFlatCoordinates_ = null;
      if (layout !== void 0 && ends) {
        this.setFlatCoordinates(
          layout,
          /** @type {Array<number>} */
          coordinates2
        );
        this.ends_ = ends;
      } else {
        this.setCoordinates(
          /** @type {Array<Array<import("../coordinate.js").Coordinate>>} */
          coordinates2,
          layout
        );
      }
    }
    /**
     * Append the passed linear ring to this polygon.
     * @param {LinearRing} linearRing Linear ring.
     * @api
     */
    appendLinearRing(linearRing2) {
      if (!this.flatCoordinates) {
        this.flatCoordinates = linearRing2.getFlatCoordinates().slice();
      } else {
        extend2(this.flatCoordinates, linearRing2.getFlatCoordinates());
      }
      this.ends_.push(this.flatCoordinates.length);
      this.changed();
    }
    /**
     * Make a complete copy of the geometry.
     * @return {!Polygon} Clone.
     * @api
     * @override
     */
    clone() {
      const polygon = new _Polygon(
        this.flatCoordinates.slice(),
        this.layout,
        this.ends_.slice()
      );
      polygon.applyProperties(this);
      return polygon;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @param {import("../coordinate.js").Coordinate} closestPoint Closest point.
     * @param {number} minSquaredDistance Minimum squared distance.
     * @return {number} Minimum squared distance.
     * @override
     */
    closestPointXY(x, y, closestPoint, minSquaredDistance) {
      if (minSquaredDistance < closestSquaredDistanceXY(this.getExtent(), x, y)) {
        return minSquaredDistance;
      }
      if (this.maxDeltaRevision_ != this.getRevision()) {
        this.maxDelta_ = Math.sqrt(
          arrayMaxSquaredDelta(
            this.flatCoordinates,
            0,
            this.ends_,
            this.stride,
            0
          )
        );
        this.maxDeltaRevision_ = this.getRevision();
      }
      return assignClosestArrayPoint(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        this.maxDelta_,
        true,
        x,
        y,
        closestPoint,
        minSquaredDistance
      );
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     * @return {boolean} Contains (x, y).
     * @override
     */
    containsXY(x, y) {
      return linearRingsContainsXY(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        x,
        y
      );
    }
    /**
     * Return the area of the polygon on projected plane.
     * @return {number} Area (on projected plane).
     * @api
     */
    getArea() {
      return linearRings(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride
      );
    }
    /**
     * Get the coordinate array for this geometry.  This array has the structure
     * of a GeoJSON coordinate array for polygons.
     *
     * @param {boolean} [right] Orient coordinates according to the right-hand
     *     rule (counter-clockwise for exterior and clockwise for interior rings).
     *     If `false`, coordinates will be oriented according to the left-hand rule
     *     (clockwise for exterior and counter-clockwise for interior rings).
     *     By default, coordinate orientation will depend on how the geometry was
     *     constructed.
     * @return {Array<Array<import("../coordinate.js").Coordinate>>} Coordinates.
     * @api
     * @override
     */
    getCoordinates(right) {
      let flatCoordinates;
      if (right !== void 0) {
        flatCoordinates = this.getOrientedFlatCoordinates().slice();
        orientLinearRings(flatCoordinates, 0, this.ends_, this.stride, right);
      } else {
        flatCoordinates = this.flatCoordinates;
      }
      return inflateCoordinatesArray(flatCoordinates, 0, this.ends_, this.stride);
    }
    /**
     * @return {Array<number>} Ends.
     */
    getEnds() {
      return this.ends_;
    }
    /**
     * @return {Array<number>} Interior point.
     */
    getFlatInteriorPoint() {
      if (this.flatInteriorPointRevision_ != this.getRevision()) {
        const flatCenter = getCenter(this.getExtent());
        this.flatInteriorPoint_ = getInteriorPointOfArray(
          this.getOrientedFlatCoordinates(),
          0,
          this.ends_,
          this.stride,
          flatCenter,
          0
        );
        this.flatInteriorPointRevision_ = this.getRevision();
      }
      return (
        /** @type {import("../coordinate.js").Coordinate} */
        this.flatInteriorPoint_
      );
    }
    /**
     * Return an interior point of the polygon.
     * @return {Point} Interior point as XYM coordinate, where M is the
     * length of the horizontal intersection that the point belongs to.
     * @api
     */
    getInteriorPoint() {
      return new Point_default(this.getFlatInteriorPoint(), "XYM");
    }
    /**
     * Return the number of rings of the polygon,  this includes the exterior
     * ring and any interior rings.
     *
     * @return {number} Number of rings.
     * @api
     */
    getLinearRingCount() {
      return this.ends_.length;
    }
    /**
     * Return the Nth linear ring of the polygon geometry. Return `null` if the
     * given index is out of range.
     * The exterior linear ring is available at index `0` and the interior rings
     * at index `1` and beyond.
     *
     * @param {number} index Index.
     * @return {LinearRing|null} Linear ring.
     * @api
     */
    getLinearRing(index) {
      if (index < 0 || this.ends_.length <= index) {
        return null;
      }
      return new LinearRing_default(
        this.flatCoordinates.slice(
          index === 0 ? 0 : this.ends_[index - 1],
          this.ends_[index]
        ),
        this.layout
      );
    }
    /**
     * Return the linear rings of the polygon.
     * @return {Array<LinearRing>} Linear rings.
     * @api
     */
    getLinearRings() {
      const layout = this.layout;
      const flatCoordinates = this.flatCoordinates;
      const ends = this.ends_;
      const linearRings2 = [];
      let offset = 0;
      for (let i = 0, ii = ends.length; i < ii; ++i) {
        const end = ends[i];
        const linearRing2 = new LinearRing_default(
          flatCoordinates.slice(offset, end),
          layout
        );
        linearRings2.push(linearRing2);
        offset = end;
      }
      return linearRings2;
    }
    /**
     * @return {Array<number>} Oriented flat coordinates.
     */
    getOrientedFlatCoordinates() {
      if (this.orientedRevision_ != this.getRevision()) {
        const flatCoordinates = this.flatCoordinates;
        if (linearRingsAreOriented(flatCoordinates, 0, this.ends_, this.stride)) {
          this.orientedFlatCoordinates_ = flatCoordinates;
        } else {
          this.orientedFlatCoordinates_ = flatCoordinates.slice();
          this.orientedFlatCoordinates_.length = orientLinearRings(
            this.orientedFlatCoordinates_,
            0,
            this.ends_,
            this.stride
          );
        }
        this.orientedRevision_ = this.getRevision();
      }
      return (
        /** @type {Array<number>} */
        this.orientedFlatCoordinates_
      );
    }
    /**
     * @param {number} squaredTolerance Squared tolerance.
     * @return {Polygon} Simplified Polygon.
     * @protected
     * @override
     */
    getSimplifiedGeometryInternal(squaredTolerance) {
      const simplifiedFlatCoordinates = [];
      const simplifiedEnds = [];
      simplifiedFlatCoordinates.length = quantizeArray(
        this.flatCoordinates,
        0,
        this.ends_,
        this.stride,
        Math.sqrt(squaredTolerance),
        simplifiedFlatCoordinates,
        0,
        simplifiedEnds
      );
      return new _Polygon(simplifiedFlatCoordinates, "XY", simplifiedEnds);
    }
    /**
     * Get the type of this geometry.
     * @return {import("./Geometry.js").Type} Geometry type.
     * @api
     * @override
     */
    getType() {
      return "Polygon";
    }
    /**
     * Test if the geometry and the passed extent intersect.
     * @param {import("../extent.js").Extent} extent Extent.
     * @return {boolean} `true` if the geometry and the extent intersect.
     * @api
     * @override
     */
    intersectsExtent(extent) {
      return intersectsLinearRingArray(
        this.getOrientedFlatCoordinates(),
        0,
        this.ends_,
        this.stride,
        extent
      );
    }
    /**
     * Set the coordinates of the polygon.
     * @param {!Array<Array<import("../coordinate.js").Coordinate>>} coordinates Coordinates.
     * @param {import("./Geometry.js").GeometryLayout} [layout] Layout.
     * @api
     * @override
     */
    setCoordinates(coordinates2, layout) {
      this.setLayout(layout, coordinates2, 2);
      if (!this.flatCoordinates) {
        this.flatCoordinates = [];
      }
      const ends = deflateCoordinatesArray(
        this.flatCoordinates,
        0,
        coordinates2,
        this.stride,
        this.ends_
      );
      this.flatCoordinates.length = ends.length === 0 ? 0 : ends[ends.length - 1];
      this.changed();
    }
  };
  var Polygon_default = Polygon;
  function fromExtent(extent) {
    if (isEmpty(extent)) {
      throw new Error("Cannot create polygon from empty extent");
    }
    const minX = extent[0];
    const minY = extent[1];
    const maxX = extent[2];
    const maxY = extent[3];
    const flatCoordinates = [
      minX,
      minY,
      minX,
      maxY,
      maxX,
      maxY,
      maxX,
      minY,
      minX,
      minY
    ];
    return new Polygon(flatCoordinates, "XY", [flatCoordinates.length]);
  }

  // node_modules/ol/resolutionconstraint.js
  function getViewportClampedResolution(resolution, maxExtent, viewportSize, showFullExtent) {
    const xResolution = getWidth(maxExtent) / viewportSize[0];
    const yResolution = getHeight(maxExtent) / viewportSize[1];
    if (showFullExtent) {
      return Math.min(resolution, Math.max(xResolution, yResolution));
    }
    return Math.min(resolution, Math.min(xResolution, yResolution));
  }
  function getSmoothClampedResolution(resolution, maxResolution, minResolution) {
    let result = Math.min(resolution, maxResolution);
    const ratio = 50;
    result *= Math.log(1 + ratio * Math.max(0, resolution / maxResolution - 1)) / ratio + 1;
    if (minResolution) {
      result = Math.max(result, minResolution);
      result /= Math.log(1 + ratio * Math.max(0, minResolution / resolution - 1)) / ratio + 1;
    }
    return clamp(result, minResolution / 2, maxResolution * 2);
  }
  function createSnapToResolutions(resolutions, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== void 0 ? smooth : true;
    return (
      /**
       * @param {number|undefined} resolution Resolution.
       * @param {number} direction Direction.
       * @param {import("./size.js").Size} size Viewport size.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Resolution.
       */
      (function(resolution, direction, size, isMoving) {
        if (resolution !== void 0) {
          const maxResolution = resolutions[0];
          const minResolution = resolutions[resolutions.length - 1];
          const cappedMaxRes = maxExtent ? getViewportClampedResolution(
            maxResolution,
            maxExtent,
            size,
            showFullExtent
          ) : maxResolution;
          if (isMoving) {
            if (!smooth) {
              return clamp(resolution, minResolution, cappedMaxRes);
            }
            return getSmoothClampedResolution(
              resolution,
              cappedMaxRes,
              minResolution
            );
          }
          const capped = Math.min(cappedMaxRes, resolution);
          const z = Math.floor(linearFindNearest(resolutions, capped, direction));
          if (resolutions[z] > cappedMaxRes && z < resolutions.length - 1) {
            return resolutions[z + 1];
          }
          return resolutions[z];
        }
        return void 0;
      })
    );
  }
  function createSnapToPower(power, maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== void 0 ? smooth : true;
    minResolution = minResolution !== void 0 ? minResolution : 0;
    return (
      /**
       * @param {number|undefined} resolution Resolution.
       * @param {number} direction Direction.
       * @param {import("./size.js").Size} size Viewport size.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Resolution.
       */
      (function(resolution, direction, size, isMoving) {
        if (resolution !== void 0) {
          const cappedMaxRes = maxExtent ? getViewportClampedResolution(
            maxResolution,
            maxExtent,
            size,
            showFullExtent
          ) : maxResolution;
          if (isMoving) {
            if (!smooth) {
              return clamp(resolution, minResolution, cappedMaxRes);
            }
            return getSmoothClampedResolution(
              resolution,
              cappedMaxRes,
              minResolution
            );
          }
          const tolerance = 1e-9;
          const minZoomLevel = Math.ceil(
            Math.log(maxResolution / cappedMaxRes) / Math.log(power) - tolerance
          );
          const offset = -direction * (0.5 - tolerance) + 0.5;
          const capped = Math.min(cappedMaxRes, resolution);
          const cappedZoomLevel = Math.floor(
            Math.log(maxResolution / capped) / Math.log(power) + offset
          );
          const zoomLevel = Math.max(minZoomLevel, cappedZoomLevel);
          const newResolution = maxResolution / Math.pow(power, zoomLevel);
          return clamp(newResolution, minResolution, cappedMaxRes);
        }
        return void 0;
      })
    );
  }
  function createMinMaxResolution(maxResolution, minResolution, smooth, maxExtent, showFullExtent) {
    smooth = smooth !== void 0 ? smooth : true;
    return (
      /**
       * @param {number|undefined} resolution Resolution.
       * @param {number} direction Direction.
       * @param {import("./size.js").Size} size Viewport size.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Resolution.
       */
      (function(resolution, direction, size, isMoving) {
        if (resolution !== void 0) {
          const cappedMaxRes = maxExtent ? getViewportClampedResolution(
            maxResolution,
            maxExtent,
            size,
            showFullExtent
          ) : maxResolution;
          if (!smooth || !isMoving) {
            return clamp(resolution, minResolution, cappedMaxRes);
          }
          return getSmoothClampedResolution(
            resolution,
            cappedMaxRes,
            minResolution
          );
        }
        return void 0;
      })
    );
  }

  // node_modules/ol/rotationconstraint.js
  function disable(rotation) {
    if (rotation !== void 0) {
      return 0;
    }
    return void 0;
  }
  function none2(rotation) {
    if (rotation !== void 0) {
      return rotation;
    }
    return void 0;
  }
  function createSnapToN(n) {
    const theta = 2 * Math.PI / n;
    return (
      /**
       * @param {number|undefined} rotation Rotation.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Rotation.
       */
      (function(rotation, isMoving) {
        if (isMoving) {
          return rotation;
        }
        if (rotation !== void 0) {
          rotation = Math.floor(rotation / theta + 0.5) * theta;
          return rotation;
        }
        return void 0;
      })
    );
  }
  function createSnapToZero(tolerance) {
    const t = tolerance === void 0 ? toRadians(5) : tolerance;
    return (
      /**
       * @param {number|undefined} rotation Rotation.
       * @param {boolean} [isMoving] True if an interaction or animation is in progress.
       * @return {number|undefined} Rotation.
       */
      (function(rotation, isMoving) {
        if (isMoving || rotation === void 0) {
          return rotation;
        }
        if (Math.abs(rotation) <= t) {
          return 0;
        }
        return rotation;
      })
    );
  }

  // node_modules/ol/View.js
  var DEFAULT_MIN_ZOOM = 0;
  var View = class extends Object_default {
    /**
     * @param {ViewOptions} [options] View options.
     */
    constructor(options) {
      super();
      this.on;
      this.once;
      this.un;
      options = Object.assign({}, options);
      this.hints_ = [0, 0];
      this.animations_ = [];
      this.updateAnimationKey_;
      this.projection_ = createProjection(options.projection, "EPSG:3857");
      this.viewportSize_ = [100, 100];
      this.targetCenter_ = null;
      this.targetResolution_;
      this.targetRotation_;
      this.nextCenter_ = null;
      this.nextResolution_;
      this.nextRotation_;
      this.cancelAnchor_ = void 0;
      if (options.projection) {
        disableCoordinateWarning();
      }
      if (options.center) {
        options.center = fromUserCoordinate(options.center, this.projection_);
      }
      if (options.extent) {
        options.extent = fromUserExtent(options.extent, this.projection_);
      }
      this.applyOptions_(options);
    }
    /**
     * Set up the view with the given options.
     * @param {ViewOptions} options View options.
     */
    applyOptions_(options) {
      const properties = Object.assign({}, options);
      for (const key in ViewProperty_default) {
        delete properties[key];
      }
      this.setProperties(properties, true);
      const resolutionConstraintInfo = createResolutionConstraint(options);
      this.maxResolution_ = resolutionConstraintInfo.maxResolution;
      this.minResolution_ = resolutionConstraintInfo.minResolution;
      this.zoomFactor_ = resolutionConstraintInfo.zoomFactor;
      this.resolutions_ = options.resolutions;
      this.padding_ = options.padding;
      this.minZoom_ = resolutionConstraintInfo.minZoom;
      const centerConstraint = createCenterConstraint(options);
      const resolutionConstraint = resolutionConstraintInfo.constraint;
      const rotationConstraint = createRotationConstraint(options);
      this.constraints_ = {
        center: centerConstraint,
        resolution: resolutionConstraint,
        rotation: rotationConstraint
      };
      this.setRotation(options.rotation !== void 0 ? options.rotation : 0);
      this.setCenterInternal(
        options.center !== void 0 ? options.center : null
      );
      if (options.resolution !== void 0) {
        this.setResolution(options.resolution);
      } else if (options.zoom !== void 0) {
        this.setZoom(options.zoom);
      }
    }
    /**
     * Padding (in css pixels).
     * If the map viewport is partially covered with other content (overlays) along
     * its edges, this setting allows to shift the center of the viewport away from that
     * content. The order of the values in the array is top, right, bottom, left.
     * The default is no padding, which is equivalent to `[0, 0, 0, 0]`.
     * @type {Array<number>|undefined}
     * @api
     */
    get padding() {
      return this.padding_;
    }
    set padding(padding) {
      let oldPadding = this.padding_;
      this.padding_ = padding;
      const center = this.getCenterInternal();
      if (center) {
        const newPadding = padding || [0, 0, 0, 0];
        oldPadding = oldPadding || [0, 0, 0, 0];
        const resolution = this.getResolution();
        const offsetX = resolution / 2 * (newPadding[3] - oldPadding[3] + oldPadding[1] - newPadding[1]);
        const offsetY = resolution / 2 * (newPadding[0] - oldPadding[0] + oldPadding[2] - newPadding[2]);
        this.setCenterInternal([center[0] + offsetX, center[1] - offsetY]);
      }
    }
    /**
     * Get an updated version of the view options used to construct the view.  The
     * current resolution (or zoom), center, and rotation are applied to any stored
     * options.  The provided options can be used to apply new min/max zoom or
     * resolution limits.
     * @param {ViewOptions} newOptions New options to be applied.
     * @return {ViewOptions} New options updated with the current view state.
     */
    getUpdatedOptions_(newOptions) {
      const options = this.getProperties();
      if (options.resolution !== void 0) {
        options.resolution = this.getResolution();
      } else {
        options.zoom = this.getZoom();
      }
      options.center = this.getCenterInternal();
      options.rotation = this.getRotation();
      return Object.assign({}, options, newOptions);
    }
    /**
     * Animate the view.  The view's center, zoom (or resolution), and rotation
     * can be animated for smooth transitions between view states.  For example,
     * to animate the view to a new zoom level:
     *
     *     view.animate({zoom: view.getZoom() + 1});
     *
     * By default, the animation lasts one second and uses in-and-out easing.  You
     * can customize this behavior by including `duration` (in milliseconds) and
     * `easing` options (see {@link module:ol/easing}).
     *
     * To chain together multiple animations, call the method with multiple
     * animation objects.  For example, to first zoom and then pan:
     *
     *     view.animate({zoom: 10}, {center: [0, 0]});
     *
     * If you provide a function as the last argument to the animate method, it
     * will get called at the end of an animation series.  The callback will be
     * called with `true` if the animation series completed on its own or `false`
     * if it was cancelled.
     *
     * Animations are cancelled by user interactions (e.g. dragging the map) or by
     * calling `view.setCenter()`, `view.setResolution()`, or `view.setRotation()`
     * (or another method that calls one of these).
     *
     * @param {...(AnimationOptions|function(boolean): void)} var_args Animation
     *     options.  Multiple animations can be run in series by passing multiple
     *     options objects.  To run multiple animations in parallel, call the method
     *     multiple times.  An optional callback can be provided as a final
     *     argument.  The callback will be called with a boolean indicating whether
     *     the animation completed without being cancelled.
     * @api
     */
    animate(var_args) {
      if (this.isDef() && !this.getAnimating()) {
        this.resolveConstraints(0);
      }
      const args = new Array(arguments.length);
      for (let i = 0; i < args.length; ++i) {
        let options = arguments[i];
        if (options.center) {
          options = Object.assign({}, options);
          options.center = fromUserCoordinate(
            options.center,
            this.getProjection()
          );
        }
        if (options.anchor) {
          options = Object.assign({}, options);
          options.anchor = fromUserCoordinate(
            options.anchor,
            this.getProjection()
          );
        }
        args[i] = options;
      }
      this.animateInternal.apply(this, args);
    }
    /**
     * @param {...(AnimationOptions|function(boolean): void)} var_args Animation options.
     */
    animateInternal(var_args) {
      let animationCount = arguments.length;
      let callback;
      if (animationCount > 1 && typeof arguments[animationCount - 1] === "function") {
        callback = arguments[animationCount - 1];
        --animationCount;
      }
      let i = 0;
      for (; i < animationCount && !this.isDef(); ++i) {
        const state = arguments[i];
        if (state.center) {
          this.setCenterInternal(state.center);
        }
        if (state.zoom !== void 0) {
          this.setZoom(state.zoom);
        } else if (state.resolution) {
          this.setResolution(state.resolution);
        }
        if (state.rotation !== void 0) {
          this.setRotation(state.rotation);
        }
      }
      if (i === animationCount) {
        if (callback) {
          animationCallback(callback, true);
        }
        return;
      }
      let start = Date.now();
      let center = this.targetCenter_.slice();
      let resolution = this.targetResolution_;
      let rotation = this.targetRotation_;
      const series = [];
      for (; i < animationCount; ++i) {
        const options = (
          /** @type {AnimationOptions} */
          arguments[i]
        );
        const animation = {
          start,
          complete: false,
          anchor: options.anchor,
          duration: options.duration !== void 0 ? options.duration : 1e3,
          easing: options.easing || inAndOut,
          callback
        };
        if (options.center) {
          animation.sourceCenter = center;
          animation.targetCenter = options.center.slice();
          center = animation.targetCenter;
        }
        if (options.zoom !== void 0) {
          animation.sourceResolution = resolution;
          animation.targetResolution = this.getResolutionForZoom(options.zoom);
          resolution = animation.targetResolution;
        } else if (options.resolution) {
          animation.sourceResolution = resolution;
          animation.targetResolution = options.resolution;
          resolution = animation.targetResolution;
        }
        if (options.rotation !== void 0) {
          animation.sourceRotation = rotation;
          const delta = modulo(options.rotation - rotation + Math.PI, 2 * Math.PI) - Math.PI;
          animation.targetRotation = rotation + delta;
          rotation = animation.targetRotation;
        }
        if (isNoopAnimation(animation)) {
          animation.complete = true;
        } else {
          start += animation.duration;
        }
        series.push(animation);
      }
      this.animations_.push(series);
      this.setHint(ViewHint_default.ANIMATING, 1);
      this.updateAnimations_();
    }
    /**
     * Determine if the view is being animated.
     * @return {boolean} The view is being animated.
     * @api
     */
    getAnimating() {
      return this.hints_[ViewHint_default.ANIMATING] > 0;
    }
    /**
     * Determine if the user is interacting with the view, such as panning or zooming.
     * @return {boolean} The view is being interacted with.
     * @api
     */
    getInteracting() {
      return this.hints_[ViewHint_default.INTERACTING] > 0;
    }
    /**
     * Cancel any ongoing animations.
     * @api
     */
    cancelAnimations() {
      this.setHint(ViewHint_default.ANIMATING, -this.hints_[ViewHint_default.ANIMATING]);
      let anchor;
      for (let i = 0, ii = this.animations_.length; i < ii; ++i) {
        const series = this.animations_[i];
        if (series[0].callback) {
          animationCallback(series[0].callback, false);
        }
        if (!anchor) {
          for (let j = 0, jj = series.length; j < jj; ++j) {
            const animation = series[j];
            if (!animation.complete) {
              anchor = animation.anchor;
              break;
            }
          }
        }
      }
      this.animations_.length = 0;
      this.cancelAnchor_ = anchor;
      this.nextCenter_ = null;
      this.nextResolution_ = NaN;
      this.nextRotation_ = NaN;
    }
    /**
     * Update all animations.
     */
    updateAnimations_() {
      if (this.updateAnimationKey_ !== void 0) {
        cancelAnimationFrame(this.updateAnimationKey_);
        this.updateAnimationKey_ = void 0;
      }
      if (!this.getAnimating()) {
        return;
      }
      const now = Date.now();
      let more = false;
      for (let i = this.animations_.length - 1; i >= 0; --i) {
        const series = this.animations_[i];
        let seriesComplete = true;
        for (let j = 0, jj = series.length; j < jj; ++j) {
          const animation = series[j];
          if (animation.complete) {
            continue;
          }
          const elapsed = now - animation.start;
          let fraction = animation.duration > 0 ? elapsed / animation.duration : 1;
          if (fraction >= 1) {
            animation.complete = true;
            fraction = 1;
          } else {
            seriesComplete = false;
          }
          const progress = animation.easing(fraction);
          if (animation.sourceCenter) {
            const x0 = animation.sourceCenter[0];
            const y0 = animation.sourceCenter[1];
            const x1 = animation.targetCenter[0];
            const y1 = animation.targetCenter[1];
            this.nextCenter_ = animation.targetCenter;
            const x = x0 + progress * (x1 - x0);
            const y = y0 + progress * (y1 - y0);
            this.targetCenter_ = [x, y];
          }
          if (animation.sourceResolution && animation.targetResolution) {
            const resolution = progress === 1 ? animation.targetResolution : animation.sourceResolution + progress * (animation.targetResolution - animation.sourceResolution);
            if (animation.anchor) {
              const size = this.getViewportSize_(this.getRotation());
              const constrainedResolution = this.constraints_.resolution(
                resolution,
                0,
                size,
                true
              );
              this.targetCenter_ = this.calculateCenterZoom(
                constrainedResolution,
                animation.anchor
              );
            }
            this.nextResolution_ = animation.targetResolution;
            this.targetResolution_ = resolution;
            this.applyTargetState_(true);
          }
          if (animation.sourceRotation !== void 0 && animation.targetRotation !== void 0) {
            const rotation = progress === 1 ? modulo(animation.targetRotation + Math.PI, 2 * Math.PI) - Math.PI : animation.sourceRotation + progress * (animation.targetRotation - animation.sourceRotation);
            if (animation.anchor) {
              const constrainedRotation = this.constraints_.rotation(
                rotation,
                true
              );
              this.targetCenter_ = this.calculateCenterRotate(
                constrainedRotation,
                animation.anchor
              );
            }
            this.nextRotation_ = animation.targetRotation;
            this.targetRotation_ = rotation;
          }
          this.applyTargetState_(true);
          more = true;
          if (!animation.complete) {
            break;
          }
        }
        if (seriesComplete) {
          this.animations_[i] = null;
          this.setHint(ViewHint_default.ANIMATING, -1);
          this.nextCenter_ = null;
          this.nextResolution_ = NaN;
          this.nextRotation_ = NaN;
          const callback = series[0].callback;
          if (callback) {
            animationCallback(callback, true);
          }
        }
      }
      this.animations_ = this.animations_.filter(Boolean);
      if (more && this.updateAnimationKey_ === void 0) {
        this.updateAnimationKey_ = requestAnimationFrame(
          this.updateAnimations_.bind(this)
        );
      }
    }
    /**
     * @param {number} rotation Target rotation.
     * @param {import("./coordinate.js").Coordinate} anchor Rotation anchor.
     * @return {import("./coordinate.js").Coordinate|undefined} Center for rotation and anchor.
     */
    calculateCenterRotate(rotation, anchor) {
      let center;
      const currentCenter = this.getCenterInternal();
      if (currentCenter !== void 0) {
        center = [currentCenter[0] - anchor[0], currentCenter[1] - anchor[1]];
        rotate(center, rotation - this.getRotation());
        add(center, anchor);
      }
      return center;
    }
    /**
     * @param {number} resolution Target resolution.
     * @param {import("./coordinate.js").Coordinate} anchor Zoom anchor.
     * @return {import("./coordinate.js").Coordinate|undefined} Center for resolution and anchor.
     */
    calculateCenterZoom(resolution, anchor) {
      let center;
      const currentCenter = this.getCenterInternal();
      const currentResolution = this.getResolution();
      if (currentCenter !== void 0 && currentResolution !== void 0) {
        const x = anchor[0] - resolution * (anchor[0] - currentCenter[0]) / currentResolution;
        const y = anchor[1] - resolution * (anchor[1] - currentCenter[1]) / currentResolution;
        center = [x, y];
      }
      return center;
    }
    /**
     * Returns the current viewport size.
     * @private
     * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
     * @return {import("./size.js").Size} Viewport size or `[100, 100]` when no viewport is found.
     */
    getViewportSize_(rotation) {
      const size = this.viewportSize_;
      if (rotation) {
        const w = size[0];
        const h = size[1];
        return [
          Math.abs(w * Math.cos(rotation)) + Math.abs(h * Math.sin(rotation)),
          Math.abs(w * Math.sin(rotation)) + Math.abs(h * Math.cos(rotation))
        ];
      }
      return size;
    }
    /**
     * Stores the viewport size on the view. The viewport size is not read every time from the DOM
     * to avoid performance hit and layout reflow.
     * This should be done on map size change.
     * Note: the constraints are not resolved during an animation to avoid stopping it
     * @param {import("./size.js").Size} [size] Viewport size; if undefined, [100, 100] is assumed
     */
    setViewportSize(size) {
      this.viewportSize_ = Array.isArray(size) ? size.slice() : [100, 100];
      if (!this.getAnimating()) {
        this.resolveConstraints(0);
      }
    }
    /**
     * Get the view center.
     * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
     * @observable
     * @api
     */
    getCenter() {
      const center = this.getCenterInternal();
      if (!center) {
        return center;
      }
      return toUserCoordinate(center, this.getProjection());
    }
    /**
     * Get the view center without transforming to user projection.
     * @return {import("./coordinate.js").Coordinate|undefined} The center of the view.
     */
    getCenterInternal() {
      return (
        /** @type {import("./coordinate.js").Coordinate|undefined} */
        this.get(ViewProperty_default.CENTER)
      );
    }
    /**
     * @return {Constraints} Constraints.
     */
    getConstraints() {
      return this.constraints_;
    }
    /**
     * @return {boolean} Resolution constraint is set
     */
    getConstrainResolution() {
      return this.get("constrainResolution");
    }
    /**
     * @param {Array<number>} [hints] Destination array.
     * @return {Array<number>} Hint.
     */
    getHints(hints) {
      if (hints !== void 0) {
        hints[0] = this.hints_[0];
        hints[1] = this.hints_[1];
        return hints;
      }
      return this.hints_.slice();
    }
    /**
     * Calculate the extent for the current view state and the passed box size.
     * @param {import("./size.js").Size} [size] The pixel dimensions of the box
     * into which the calculated extent should fit. Defaults to the size of the
     * map the view is associated with.
     * If no map or multiple maps are connected to the view, provide the desired
     * box size (e.g. `map.getSize()`).
     * @return {import("./extent.js").Extent} Extent.
     * @api
     */
    calculateExtent(size) {
      const extent = this.calculateExtentInternal(size);
      return toUserExtent(extent, this.getProjection());
    }
    /**
     * @param {import("./size.js").Size} [size] Box pixel size. If not provided,
     * the map's last known viewport size will be used.
     * @return {import("./extent.js").Extent} Extent.
     */
    calculateExtentInternal(size) {
      size = size || this.getViewportSizeMinusPadding_();
      const center = (
        /** @type {!import("./coordinate.js").Coordinate} */
        this.getCenterInternal()
      );
      assert(center, "The view center is not defined");
      const resolution = (
        /** @type {!number} */
        this.getResolution()
      );
      assert(resolution !== void 0, "The view resolution is not defined");
      const rotation = (
        /** @type {!number} */
        this.getRotation()
      );
      assert(rotation !== void 0, "The view rotation is not defined");
      return getForViewAndSize(center, resolution, rotation, size);
    }
    /**
     * Get the maximum resolution of the view.
     * @return {number} The maximum resolution of the view.
     * @api
     */
    getMaxResolution() {
      return this.maxResolution_;
    }
    /**
     * Get the minimum resolution of the view.
     * @return {number} The minimum resolution of the view.
     * @api
     */
    getMinResolution() {
      return this.minResolution_;
    }
    /**
     * Get the maximum zoom level for the view.
     * @return {number} The maximum zoom level.
     * @api
     */
    getMaxZoom() {
      return (
        /** @type {number} */
        this.getZoomForResolution(this.minResolution_)
      );
    }
    /**
     * Set a new maximum zoom level for the view.
     * @param {number} zoom The maximum zoom level.
     * @api
     */
    setMaxZoom(zoom) {
      this.applyOptions_(this.getUpdatedOptions_({ maxZoom: zoom }));
    }
    /**
     * Get the minimum zoom level for the view.
     * @return {number} The minimum zoom level.
     * @api
     */
    getMinZoom() {
      return (
        /** @type {number} */
        this.getZoomForResolution(this.maxResolution_)
      );
    }
    /**
     * Set a new minimum zoom level for the view.
     * @param {number} zoom The minimum zoom level.
     * @api
     */
    setMinZoom(zoom) {
      this.applyOptions_(this.getUpdatedOptions_({ minZoom: zoom }));
    }
    /**
     * Set whether the view should allow intermediary zoom levels.
     * @param {boolean} enabled Whether the resolution is constrained.
     * @api
     */
    setConstrainResolution(enabled) {
      this.applyOptions_(this.getUpdatedOptions_({ constrainResolution: enabled }));
    }
    /**
     * Get the view projection.
     * @return {import("./proj/Projection.js").default} The projection of the view.
     * @api
     */
    getProjection() {
      return this.projection_;
    }
    /**
     * Get the view resolution.
     * @return {number|undefined} The resolution of the view.
     * @observable
     * @api
     */
    getResolution() {
      return (
        /** @type {number|undefined} */
        this.get(ViewProperty_default.RESOLUTION)
      );
    }
    /**
     * Get the resolutions for the view. This returns the array of resolutions
     * passed to the constructor of the View, or undefined if none were given.
     * @return {Array<number>|undefined} The resolutions of the view.
     * @api
     */
    getResolutions() {
      return this.resolutions_;
    }
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {import("./size.js").Size} [size] Box pixel size.
     * @return {number} The resolution at which the provided extent will render at
     *     the given size.
     * @api
     */
    getResolutionForExtent(extent, size) {
      return this.getResolutionForExtentInternal(
        fromUserExtent(extent, this.getProjection()),
        size
      );
    }
    /**
     * Get the resolution for a provided extent (in map units) and size (in pixels).
     * @param {import("./extent.js").Extent} extent Extent.
     * @param {import("./size.js").Size} [size] Box pixel size.
     * @return {number} The resolution at which the provided extent will render at
     *     the given size.
     */
    getResolutionForExtentInternal(extent, size) {
      size = size || this.getViewportSizeMinusPadding_();
      const xResolution = getWidth(extent) / size[0];
      const yResolution = getHeight(extent) / size[1];
      return Math.max(xResolution, yResolution);
    }
    /**
     * Return a function that returns a value between 0 and 1 for a
     * resolution. Exponential scaling is assumed.
     * @param {number} [power] Power.
     * @return {function(number): number} Resolution for value function.
     */
    getResolutionForValueFunction(power) {
      power = power || 2;
      const maxResolution = this.getConstrainedResolution(this.maxResolution_);
      const minResolution = this.minResolution_;
      const max = Math.log(maxResolution / minResolution) / Math.log(power);
      return (
        /**
         * @param {number} value Value.
         * @return {number} Resolution.
         */
        (function(value) {
          const resolution = maxResolution / Math.pow(power, value * max);
          return resolution;
        })
      );
    }
    /**
     * Get the view rotation.
     * @return {number} The rotation of the view in radians.
     * @observable
     * @api
     */
    getRotation() {
      return (
        /** @type {number} */
        this.get(ViewProperty_default.ROTATION)
      );
    }
    /**
     * Return a function that returns a resolution for a value between
     * 0 and 1. Exponential scaling is assumed.
     * @param {number} [power] Power.
     * @return {function(number): number} Value for resolution function.
     */
    getValueForResolutionFunction(power) {
      const logPower = Math.log(power || 2);
      const maxResolution = this.getConstrainedResolution(this.maxResolution_);
      const minResolution = this.minResolution_;
      const max = Math.log(maxResolution / minResolution) / logPower;
      return (
        /**
         * @param {number} resolution Resolution.
         * @return {number} Value.
         */
        (function(resolution) {
          const value = Math.log(maxResolution / resolution) / logPower / max;
          return value;
        })
      );
    }
    /**
     * Returns the size of the viewport minus padding.
     * @private
     * @param {number} [rotation] Take into account the rotation of the viewport when giving the size
     * @return {import("./size.js").Size} Viewport size reduced by the padding.
     */
    getViewportSizeMinusPadding_(rotation) {
      let size = this.getViewportSize_(rotation);
      const padding = this.padding_;
      if (padding) {
        size = [
          size[0] - padding[1] - padding[3],
          size[1] - padding[0] - padding[2]
        ];
      }
      return size;
    }
    /**
     * @return {State} View state.
     */
    getState() {
      const projection = this.getProjection();
      const resolution = this.getResolution();
      const rotation = this.getRotation();
      let center = (
        /** @type {import("./coordinate.js").Coordinate} */
        this.getCenterInternal()
      );
      const padding = this.padding_;
      if (padding) {
        const reducedSize = this.getViewportSizeMinusPadding_();
        center = calculateCenterOn(
          center,
          this.getViewportSize_(),
          [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]],
          resolution,
          rotation
        );
      }
      return {
        center: center.slice(0),
        projection: projection !== void 0 ? projection : null,
        resolution,
        nextCenter: this.nextCenter_,
        nextResolution: this.nextResolution_,
        nextRotation: this.nextRotation_,
        rotation,
        zoom: this.getZoom()
      };
    }
    /**
     * @return {ViewStateLayerStateExtent} Like `FrameState`, but just `viewState` and `extent`.
     */
    getViewStateAndExtent() {
      return {
        viewState: this.getState(),
        extent: this.calculateExtent()
      };
    }
    /**
     * Get the current zoom level. This method may return non-integer zoom levels
     * if the view does not constrain the resolution, or if an interaction or
     * animation is underway.
     * @return {number|undefined} Zoom.
     * @api
     */
    getZoom() {
      let zoom;
      const resolution = this.getResolution();
      if (resolution !== void 0) {
        zoom = this.getZoomForResolution(resolution);
      }
      return zoom;
    }
    /**
     * Get the zoom level for a resolution.
     * @param {number} resolution The resolution.
     * @return {number|undefined} The zoom level for the provided resolution.
     * @api
     */
    getZoomForResolution(resolution) {
      let offset = this.minZoom_ || 0;
      let max, zoomFactor;
      if (this.resolutions_) {
        const nearest = linearFindNearest(this.resolutions_, resolution, 1);
        offset = nearest;
        max = this.resolutions_[nearest];
        if (nearest == this.resolutions_.length - 1) {
          zoomFactor = 2;
        } else {
          zoomFactor = max / this.resolutions_[nearest + 1];
        }
      } else {
        max = this.maxResolution_;
        zoomFactor = this.zoomFactor_;
      }
      return offset + Math.log(max / resolution) / Math.log(zoomFactor);
    }
    /**
     * Get the resolution for a zoom level.
     * @param {number} zoom Zoom level.
     * @return {number} The view resolution for the provided zoom level.
     * @api
     */
    getResolutionForZoom(zoom) {
      if (this.resolutions_?.length) {
        if (this.resolutions_.length === 1) {
          return this.resolutions_[0];
        }
        const baseLevel = clamp(
          Math.floor(zoom),
          0,
          this.resolutions_.length - 2
        );
        const zoomFactor = this.resolutions_[baseLevel] / this.resolutions_[baseLevel + 1];
        return this.resolutions_[baseLevel] / Math.pow(zoomFactor, clamp(zoom - baseLevel, 0, 1));
      }
      return this.maxResolution_ / Math.pow(this.zoomFactor_, zoom - this.minZoom_);
    }
    /**
     * Fit the given geometry or extent based on the given map size and border.
     * The size is pixel dimensions of the box to fit the extent into.
     * In most cases you will want to use the map size, that is `map.getSize()`.
     * Takes care of the map angle.
     * @param {import("./geom/SimpleGeometry.js").default|import("./extent.js").Extent} geometryOrExtent The geometry or
     *     extent to fit the view to.
     * @param {FitOptions} [options] Options.
     * @api
     */
    fit(geometryOrExtent, options) {
      let geometry;
      assert(
        Array.isArray(geometryOrExtent) || typeof /** @type {?} */
        geometryOrExtent.getSimplifiedGeometry === "function",
        "Invalid extent or geometry provided as `geometry`"
      );
      if (Array.isArray(geometryOrExtent)) {
        assert(
          !isEmpty(geometryOrExtent),
          "Cannot fit empty extent provided as `geometry`"
        );
        const extent = fromUserExtent(geometryOrExtent, this.getProjection());
        geometry = fromExtent(extent);
      } else if (geometryOrExtent.getType() === "Circle") {
        const extent = fromUserExtent(
          geometryOrExtent.getExtent(),
          this.getProjection()
        );
        geometry = fromExtent(extent);
        geometry.rotate(this.getRotation(), getCenter(extent));
      } else {
        const userProjection2 = getUserProjection();
        if (userProjection2) {
          geometry = /** @type {import("./geom/SimpleGeometry.js").default} */
          geometryOrExtent.clone().transform(userProjection2, this.getProjection());
        } else {
          geometry = geometryOrExtent;
        }
      }
      this.fitInternal(geometry, options);
    }
    /**
     * Calculate rotated extent
     * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
     * @return {import("./extent.js").Extent} The rotated extent for the geometry.
     */
    rotatedExtentForGeometry(geometry) {
      const rotation = this.getRotation();
      const cosAngle = Math.cos(rotation);
      const sinAngle = Math.sin(-rotation);
      const coords = geometry.getFlatCoordinates();
      const stride = geometry.getStride();
      let minRotX = Infinity;
      let minRotY = Infinity;
      let maxRotX = -Infinity;
      let maxRotY = -Infinity;
      for (let i = 0, ii = coords.length; i < ii; i += stride) {
        const rotX = coords[i] * cosAngle - coords[i + 1] * sinAngle;
        const rotY = coords[i] * sinAngle + coords[i + 1] * cosAngle;
        minRotX = Math.min(minRotX, rotX);
        minRotY = Math.min(minRotY, rotY);
        maxRotX = Math.max(maxRotX, rotX);
        maxRotY = Math.max(maxRotY, rotY);
      }
      return [minRotX, minRotY, maxRotX, maxRotY];
    }
    /**
     * @param {import("./geom/SimpleGeometry.js").default} geometry The geometry.
     * @param {FitOptions} [options] Options.
     */
    fitInternal(geometry, options) {
      options = options || {};
      let size = options.size;
      if (!size) {
        size = this.getViewportSizeMinusPadding_();
      }
      const padding = options.padding !== void 0 ? options.padding : [0, 0, 0, 0];
      const nearest = options.nearest !== void 0 ? options.nearest : false;
      let minResolution;
      if (options.minResolution !== void 0) {
        minResolution = options.minResolution;
      } else if (options.maxZoom !== void 0) {
        minResolution = this.getResolutionForZoom(options.maxZoom);
      } else {
        minResolution = 0;
      }
      const rotatedExtent = this.rotatedExtentForGeometry(geometry);
      let resolution = this.getResolutionForExtentInternal(rotatedExtent, [
        size[0] - padding[1] - padding[3],
        size[1] - padding[0] - padding[2]
      ]);
      resolution = isNaN(resolution) ? minResolution : Math.max(resolution, minResolution);
      resolution = this.getConstrainedResolution(resolution, nearest ? 0 : 1);
      const rotation = this.getRotation();
      const sinAngle = Math.sin(rotation);
      const cosAngle = Math.cos(rotation);
      const centerRot = getCenter(rotatedExtent);
      centerRot[0] += (padding[1] - padding[3]) / 2 * resolution;
      centerRot[1] += (padding[0] - padding[2]) / 2 * resolution;
      const centerX = centerRot[0] * cosAngle - centerRot[1] * sinAngle;
      const centerY = centerRot[1] * cosAngle + centerRot[0] * sinAngle;
      const center = this.getConstrainedCenter([centerX, centerY], resolution);
      const callback = options.callback ? options.callback : VOID;
      if (options.duration !== void 0) {
        this.animateInternal(
          {
            resolution,
            center,
            duration: options.duration,
            easing: options.easing
          },
          callback
        );
      } else {
        this.targetResolution_ = resolution;
        this.targetCenter_ = center;
        this.applyTargetState_(false, true);
        animationCallback(callback, true);
      }
    }
    /**
     * Center on coordinate and view position.
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     * @api
     */
    centerOn(coordinate, size, position) {
      this.centerOnInternal(
        fromUserCoordinate(coordinate, this.getProjection()),
        size,
        position
      );
    }
    /**
     * @param {import("./coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("./size.js").Size} size Box pixel size.
     * @param {import("./pixel.js").Pixel} position Position on the view to center on.
     */
    centerOnInternal(coordinate, size, position) {
      this.setCenterInternal(
        calculateCenterOn(
          coordinate,
          size,
          position,
          this.getResolution(),
          this.getRotation()
        )
      );
    }
    /**
     * Calculates the shift between map and viewport center.
     * @param {import("./coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {import("./size.js").Size} size Size.
     * @return {Array<number>|undefined} Center shift.
     */
    calculateCenterShift(center, resolution, rotation, size) {
      let centerShift;
      const padding = this.padding_;
      if (padding && center) {
        const reducedSize = this.getViewportSizeMinusPadding_(-rotation);
        const shiftedCenter = calculateCenterOn(
          center,
          size,
          [reducedSize[0] / 2 + padding[3], reducedSize[1] / 2 + padding[0]],
          resolution,
          rotation
        );
        centerShift = [
          center[0] - shiftedCenter[0],
          center[1] - shiftedCenter[1]
        ];
      }
      return centerShift;
    }
    /**
     * @return {boolean} Is defined.
     */
    isDef() {
      return !!this.getCenterInternal() && this.getResolution() !== void 0;
    }
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
     * @api
     */
    adjustCenter(deltaCoordinates) {
      const center = toUserCoordinate(this.targetCenter_, this.getProjection());
      this.setCenter([
        center[0] + deltaCoordinates[0],
        center[1] + deltaCoordinates[1]
      ]);
    }
    /**
     * Adds relative coordinates to the center of the view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate} deltaCoordinates Relative value to add.
     */
    adjustCenterInternal(deltaCoordinates) {
      const center = this.targetCenter_;
      this.setCenterInternal([
        center[0] + deltaCoordinates[0],
        center[1] + deltaCoordinates[1]
      ]);
    }
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} ratio The ratio to apply on the view resolution.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    adjustResolution(ratio, anchor) {
      anchor = anchor && fromUserCoordinate(anchor, this.getProjection());
      this.adjustResolutionInternal(ratio, anchor);
    }
    /**
     * Multiply the view resolution by a ratio, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} ratio The ratio to apply on the view resolution.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    adjustResolutionInternal(ratio, anchor) {
      const isMoving = this.getAnimating() || this.getInteracting();
      const size = this.getViewportSize_(this.getRotation());
      const newResolution = this.constraints_.resolution(
        this.targetResolution_ * ratio,
        0,
        size,
        isMoving
      );
      if (anchor) {
        this.targetCenter_ = this.calculateCenterZoom(newResolution, anchor);
      }
      this.targetResolution_ *= ratio;
      this.applyTargetState_();
    }
    /**
     * Adds a value to the view zoom level, optionally using an anchor. Any resolution
     * constraint will apply.
     * @param {number} delta Relative value to add to the zoom level.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    adjustZoom(delta, anchor) {
      this.adjustResolution(Math.pow(this.zoomFactor_, -delta), anchor);
    }
    /**
     * Adds a value to the view rotation, optionally using an anchor. Any rotation
     * constraint will apply.
     * @param {number} delta Relative value to add to the zoom rotation, in radians.
     * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
     * @api
     */
    adjustRotation(delta, anchor) {
      if (anchor) {
        anchor = fromUserCoordinate(anchor, this.getProjection());
      }
      this.adjustRotationInternal(delta, anchor);
    }
    /**
     * @param {number} delta Relative value to add to the zoom rotation, in radians.
     * @param {import("./coordinate.js").Coordinate} [anchor] The rotation center.
     */
    adjustRotationInternal(delta, anchor) {
      const isMoving = this.getAnimating() || this.getInteracting();
      const newRotation = this.constraints_.rotation(
        this.targetRotation_ + delta,
        isMoving
      );
      if (anchor) {
        this.targetCenter_ = this.calculateCenterRotate(newRotation, anchor);
      }
      this.targetRotation_ += delta;
      this.applyTargetState_();
    }
    /**
     * Set the center of the current view. Any extent constraint will apply.
     * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
     * @observable
     * @api
     */
    setCenter(center) {
      this.setCenterInternal(
        center ? fromUserCoordinate(center, this.getProjection()) : center
      );
    }
    /**
     * Set the center using the view projection (not the user projection).
     * @param {import("./coordinate.js").Coordinate|undefined} center The center of the view.
     */
    setCenterInternal(center) {
      this.targetCenter_ = center;
      this.applyTargetState_();
    }
    /**
     * @param {import("./ViewHint.js").default} hint Hint.
     * @param {number} delta Delta.
     * @return {number} New value.
     */
    setHint(hint, delta) {
      this.hints_[hint] += delta;
      this.changed();
      return this.hints_[hint];
    }
    /**
     * Set the resolution for this view. Any resolution constraint will apply.
     * @param {number|undefined} resolution The resolution of the view.
     * @observable
     * @api
     */
    setResolution(resolution) {
      this.targetResolution_ = resolution;
      this.applyTargetState_();
    }
    /**
     * Set the rotation for this view. Any rotation constraint will apply.
     * @param {number} rotation The rotation of the view in radians.
     * @observable
     * @api
     */
    setRotation(rotation) {
      this.targetRotation_ = rotation;
      this.applyTargetState_();
    }
    /**
     * Zoom to a specific zoom level. Any resolution constrain will apply.
     * @param {number} zoom Zoom level.
     * @api
     */
    setZoom(zoom) {
      this.setResolution(this.getResolutionForZoom(zoom));
    }
    /**
     * Recompute rotation/resolution/center based on target values.
     * Note: we have to compute rotation first, then resolution and center considering that
     * parameters can influence one another in case a view extent constraint is present.
     * @param {boolean} [doNotCancelAnims] Do not cancel animations.
     * @param {boolean} [forceMoving] Apply constraints as if the view is moving.
     * @private
     */
    applyTargetState_(doNotCancelAnims, forceMoving) {
      const isMoving = this.getAnimating() || this.getInteracting() || forceMoving;
      const newRotation = this.constraints_.rotation(
        this.targetRotation_,
        isMoving
      );
      const size = this.getViewportSize_(newRotation);
      const newResolution = this.constraints_.resolution(
        this.targetResolution_,
        0,
        size,
        isMoving
      );
      const newCenter = this.constraints_.center(
        this.targetCenter_,
        newResolution,
        size,
        isMoving,
        this.calculateCenterShift(
          this.targetCenter_,
          newResolution,
          newRotation,
          size
        )
      );
      if (this.get(ViewProperty_default.ROTATION) !== newRotation) {
        this.set(ViewProperty_default.ROTATION, newRotation);
      }
      if (this.get(ViewProperty_default.RESOLUTION) !== newResolution) {
        this.set(ViewProperty_default.RESOLUTION, newResolution);
        this.set("zoom", this.getZoom(), true);
      }
      if (!newCenter || !this.get(ViewProperty_default.CENTER) || !equals3(this.get(ViewProperty_default.CENTER), newCenter)) {
        this.set(ViewProperty_default.CENTER, newCenter);
      }
      if (this.getAnimating() && !doNotCancelAnims) {
        this.cancelAnimations();
      }
      this.cancelAnchor_ = void 0;
    }
    /**
     * If any constraints need to be applied, an animation will be triggered.
     * This is typically done on interaction end.
     * Note: calling this with a duration of 0 will apply the constrained values straight away,
     * without animation.
     * @param {number} [duration] The animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    resolveConstraints(duration, resolutionDirection, anchor) {
      duration = duration !== void 0 ? duration : 200;
      const direction = resolutionDirection || 0;
      const newRotation = this.constraints_.rotation(this.targetRotation_);
      const size = this.getViewportSize_(newRotation);
      const newResolution = this.constraints_.resolution(
        this.targetResolution_,
        direction,
        size
      );
      const newCenter = this.constraints_.center(
        this.targetCenter_,
        newResolution,
        size,
        false,
        this.calculateCenterShift(
          this.targetCenter_,
          newResolution,
          newRotation,
          size
        )
      );
      if (duration === 0 && !this.cancelAnchor_) {
        this.targetResolution_ = newResolution;
        this.targetRotation_ = newRotation;
        this.targetCenter_ = newCenter;
        this.applyTargetState_();
        return;
      }
      anchor = anchor || (duration === 0 ? this.cancelAnchor_ : void 0);
      this.cancelAnchor_ = void 0;
      if (this.getResolution() !== newResolution || this.getRotation() !== newRotation || !this.getCenterInternal() || !equals3(this.getCenterInternal(), newCenter)) {
        if (this.getAnimating()) {
          this.cancelAnimations();
        }
        this.animateInternal({
          rotation: newRotation,
          center: newCenter,
          resolution: newResolution,
          duration,
          easing: easeOut,
          anchor
        });
      }
    }
    /**
     * Notify the View that an interaction has started.
     * The view state will be resolved to a stable one if needed
     * (depending on its constraints).
     * @api
     */
    beginInteraction() {
      this.resolveConstraints(0);
      this.setHint(ViewHint_default.INTERACTING, 1);
    }
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     * @param {number} [duration] Animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     * @api
     */
    endInteraction(duration, resolutionDirection, anchor) {
      anchor = anchor && fromUserCoordinate(anchor, this.getProjection());
      this.endInteractionInternal(duration, resolutionDirection, anchor);
    }
    /**
     * Notify the View that an interaction has ended. The view state will be resolved
     * to a stable one if needed (depending on its constraints).
     * @param {number} [duration] Animation duration in ms.
     * @param {number} [resolutionDirection] Which direction to zoom.
     * @param {import("./coordinate.js").Coordinate} [anchor] The origin of the transformation.
     */
    endInteractionInternal(duration, resolutionDirection, anchor) {
      if (!this.getInteracting()) {
        return;
      }
      this.setHint(ViewHint_default.INTERACTING, -1);
      this.resolveConstraints(duration, resolutionDirection, anchor);
    }
    /**
     * Get a valid position for the view center according to the current constraints.
     * @param {import("./coordinate.js").Coordinate|undefined} targetCenter Target center position.
     * @param {number} [targetResolution] Target resolution. If not supplied, the current one will be used.
     * This is useful to guess a valid center position at a different zoom level.
     * @return {import("./coordinate.js").Coordinate|undefined} Valid center position.
     */
    getConstrainedCenter(targetCenter, targetResolution) {
      const size = this.getViewportSize_(this.getRotation());
      return this.constraints_.center(
        targetCenter,
        targetResolution || this.getResolution(),
        size
      );
    }
    /**
     * Get a valid zoom level according to the current view constraints.
     * @param {number|undefined} targetZoom Target zoom.
     * @param {number} [direction] Indicate which resolution should be used
     * by a renderer if the view resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @return {number|undefined} Valid zoom level.
     */
    getConstrainedZoom(targetZoom, direction) {
      const targetRes = this.getResolutionForZoom(targetZoom);
      return this.getZoomForResolution(
        this.getConstrainedResolution(targetRes, direction)
      );
    }
    /**
     * Get a valid resolution according to the current view constraints.
     * @param {number|undefined} targetResolution Target resolution.
     * @param {number} [direction] Indicate which resolution should be used
     * by a renderer if the view resolution does not match any resolution of the tile source.
     * If 0, the nearest resolution will be used. If 1, the nearest lower resolution
     * will be used. If -1, the nearest higher resolution will be used.
     * @return {number|undefined} Valid resolution.
     */
    getConstrainedResolution(targetResolution, direction) {
      direction = direction || 0;
      const size = this.getViewportSize_(this.getRotation());
      return this.constraints_.resolution(targetResolution, direction, size);
    }
  };
  function animationCallback(callback, returnValue) {
    setTimeout(function() {
      callback(returnValue);
    }, 0);
  }
  function createCenterConstraint(options) {
    if (options.extent !== void 0) {
      const smooth = options.smoothExtentConstraint !== void 0 ? options.smoothExtentConstraint : true;
      return createExtent(options.extent, options.constrainOnlyCenter, smooth);
    }
    const projection = createProjection(options.projection, "EPSG:3857");
    if (options.multiWorld !== true && projection.isGlobal()) {
      const extent = projection.getExtent().slice();
      extent[0] = -Infinity;
      extent[2] = Infinity;
      return createExtent(extent, false, false);
    }
    return none;
  }
  function createResolutionConstraint(options) {
    let resolutionConstraint;
    let maxResolution;
    let minResolution;
    const defaultMaxZoom = 28;
    const defaultZoomFactor = 2;
    let minZoom = options.minZoom !== void 0 ? options.minZoom : DEFAULT_MIN_ZOOM;
    let maxZoom = options.maxZoom !== void 0 ? options.maxZoom : defaultMaxZoom;
    const zoomFactor = options.zoomFactor !== void 0 ? options.zoomFactor : defaultZoomFactor;
    const multiWorld = options.multiWorld !== void 0 ? options.multiWorld : false;
    const smooth = options.smoothResolutionConstraint !== void 0 ? options.smoothResolutionConstraint : true;
    const showFullExtent = options.showFullExtent !== void 0 ? options.showFullExtent : false;
    const projection = createProjection(options.projection, "EPSG:3857");
    const projExtent = projection.getExtent();
    let constrainOnlyCenter = options.constrainOnlyCenter;
    let extent = options.extent;
    if (!multiWorld && !extent && projection.isGlobal()) {
      constrainOnlyCenter = false;
      extent = projExtent;
    }
    if (options.resolutions !== void 0) {
      const resolutions = options.resolutions;
      maxResolution = resolutions[minZoom];
      minResolution = resolutions[maxZoom] !== void 0 ? resolutions[maxZoom] : resolutions[resolutions.length - 1];
      if (options.constrainResolution) {
        resolutionConstraint = createSnapToResolutions(
          resolutions,
          smooth,
          !constrainOnlyCenter && extent,
          showFullExtent
        );
      } else {
        resolutionConstraint = createMinMaxResolution(
          maxResolution,
          minResolution,
          smooth,
          !constrainOnlyCenter && extent,
          showFullExtent
        );
      }
    } else {
      const size = !projExtent ? (
        // use an extent that can fit the whole world if need be
        360 * METERS_PER_UNIT.degrees / projection.getMetersPerUnit()
      ) : Math.max(getWidth(projExtent), getHeight(projExtent));
      const defaultMaxResolution = size / DEFAULT_TILE_SIZE / Math.pow(defaultZoomFactor, DEFAULT_MIN_ZOOM);
      const defaultMinResolution = defaultMaxResolution / Math.pow(defaultZoomFactor, defaultMaxZoom - DEFAULT_MIN_ZOOM);
      maxResolution = options.maxResolution;
      if (maxResolution !== void 0) {
        minZoom = 0;
      } else {
        maxResolution = defaultMaxResolution / Math.pow(zoomFactor, minZoom);
      }
      minResolution = options.minResolution;
      if (minResolution === void 0) {
        if (options.maxZoom !== void 0) {
          if (options.maxResolution !== void 0) {
            minResolution = maxResolution / Math.pow(zoomFactor, maxZoom);
          } else {
            minResolution = defaultMaxResolution / Math.pow(zoomFactor, maxZoom);
          }
        } else {
          minResolution = defaultMinResolution;
        }
      }
      maxZoom = minZoom + Math.floor(
        Math.log(maxResolution / minResolution) / Math.log(zoomFactor)
      );
      minResolution = maxResolution / Math.pow(zoomFactor, maxZoom - minZoom);
      if (options.constrainResolution) {
        resolutionConstraint = createSnapToPower(
          zoomFactor,
          maxResolution,
          minResolution,
          smooth,
          !constrainOnlyCenter && extent,
          showFullExtent
        );
      } else {
        resolutionConstraint = createMinMaxResolution(
          maxResolution,
          minResolution,
          smooth,
          !constrainOnlyCenter && extent,
          showFullExtent
        );
      }
    }
    return {
      constraint: resolutionConstraint,
      maxResolution,
      minResolution,
      minZoom,
      zoomFactor
    };
  }
  function createRotationConstraint(options) {
    const enableRotation = options.enableRotation !== void 0 ? options.enableRotation : true;
    if (enableRotation) {
      const constrainRotation = options.constrainRotation;
      if (constrainRotation === void 0 || constrainRotation === true) {
        return createSnapToZero();
      }
      if (constrainRotation === false) {
        return none2;
      }
      if (typeof constrainRotation === "number") {
        return createSnapToN(constrainRotation);
      }
      return none2;
    }
    return disable;
  }
  function isNoopAnimation(animation) {
    if (animation.sourceCenter && animation.targetCenter) {
      if (!equals3(animation.sourceCenter, animation.targetCenter)) {
        return false;
      }
    }
    if (animation.sourceResolution !== animation.targetResolution) {
      return false;
    }
    if (animation.sourceRotation !== animation.targetRotation) {
      return false;
    }
    return true;
  }
  function calculateCenterOn(coordinate, size, position, resolution, rotation) {
    const cosAngle = Math.cos(-rotation);
    let sinAngle = Math.sin(-rotation);
    let rotX = coordinate[0] * cosAngle - coordinate[1] * sinAngle;
    let rotY = coordinate[1] * cosAngle + coordinate[0] * sinAngle;
    rotX += (size[0] / 2 - position[0]) * resolution;
    rotY += (position[1] - size[1] / 2) * resolution;
    sinAngle = -sinAngle;
    const centerX = rotX * cosAngle - rotY * sinAngle;
    const centerY = rotY * cosAngle + rotX * sinAngle;
    return [centerX, centerY];
  }
  var View_default = View;

  // node_modules/ol/css.js
  var CLASS_HIDDEN = "ol-hidden";
  var CLASS_UNSELECTABLE = "ol-unselectable";
  var CLASS_UNSUPPORTED = "ol-unsupported";
  var CLASS_CONTROL = "ol-control";
  var CLASS_COLLAPSED = "ol-collapsed";
  var fontRegEx = new RegExp(
    [
      "^\\s*(?=(?:(?:[-a-z]+\\s*){0,2}(italic|oblique))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(small-caps))?)",
      "(?=(?:(?:[-a-z]+\\s*){0,2}(bold(?:er)?|lighter|[1-9]00 ))?)",
      "(?:(?:normal|\\1|\\2|\\3)\\s*){0,3}((?:xx?-)?",
      "(?:small|large)|medium|smaller|larger|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx]))",
      "(?:\\s*\\/\\s*(normal|[\\.\\d]+(?:\\%|in|[cem]m|ex|p[ctx])?))",
      `?\\s*([-,\\"\\'\\sa-z0-9]+?)\\s*$`
    ].join(""),
    "i"
  );

  // node_modules/ol/control/Control.js
  var Control = class extends Object_default {
    /**
     * @param {Options} options Control options.
     */
    constructor(options) {
      super();
      const element = options.element;
      if (element && !options.target && !element.style.pointerEvents) {
        element.style.pointerEvents = "auto";
      }
      this.element = element ? element : null;
      this.target_ = null;
      this.map_ = null;
      this.listenerKeys = [];
      if (options.render) {
        this.render = options.render;
      }
      if (options.target) {
        this.setTarget(options.target);
      }
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.element?.remove();
      super.disposeInternal();
    }
    /**
     * Get the map associated with this control.
     * @return {import("../Map.js").default|null} Map.
     * @api
     */
    getMap() {
      return this.map_;
    }
    /**
     * Remove the control from its current map and attach it to the new map.
     * Pass `null` to just remove the control from the current map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../Map.js").default|null} map Map.
     * @api
     */
    setMap(map) {
      if (this.map_) {
        this.element?.remove();
      }
      for (let i = 0, ii = this.listenerKeys.length; i < ii; ++i) {
        unlistenByKey(this.listenerKeys[i]);
      }
      this.listenerKeys.length = 0;
      this.map_ = map;
      if (map) {
        const target = this.target_ ?? map.getOverlayContainerStopEvent();
        if (this.element) {
          target.appendChild(this.element);
        }
        if (this.render !== VOID) {
          this.listenerKeys.push(
            listen(map, MapEventType_default.POSTRENDER, this.render, this)
          );
        }
        map.render();
      }
    }
    /**
     * Renders the control.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @api
     */
    render(mapEvent) {
    }
    /**
     * This function is used to set a target element for the control. It has no
     * effect if it is called after the control has been added to the map (i.e.
     * after `setMap` is called on the control). If no `target` is set in the
     * options passed to the control constructor and if `setTarget` is not called
     * then the control is added to the map's overlay container.
     * @param {HTMLElement|string} target Target.
     * @api
     */
    setTarget(target) {
      this.target_ = typeof target === "string" ? document.getElementById(target) : target;
    }
  };
  var Control_default = Control;

  // node_modules/ol/control/Attribution.js
  var Attribution = class extends Control_default {
    /**
     * @param {Options} [options] Attribution options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        element: document.createElement("div"),
        render: options.render,
        target: options.target
      });
      this.ulElement_ = document.createElement("ul");
      this.collapsed_ = options.collapsed !== void 0 ? options.collapsed : true;
      this.userCollapsed_ = this.collapsed_;
      this.overrideCollapsible_ = options.collapsible !== void 0;
      this.collapsible_ = options.collapsible !== void 0 ? options.collapsible : true;
      if (!this.collapsible_) {
        this.collapsed_ = false;
      }
      this.attributions_ = options.attributions;
      const className = options.className !== void 0 ? options.className : "ol-attribution";
      const tipLabel = options.tipLabel !== void 0 ? options.tipLabel : "Attributions";
      const expandClassName = options.expandClassName !== void 0 ? options.expandClassName : className + "-expand";
      const collapseLabel = options.collapseLabel !== void 0 ? options.collapseLabel : "\u203A";
      const collapseClassName = options.collapseClassName !== void 0 ? options.collapseClassName : className + "-collapse";
      if (typeof collapseLabel === "string") {
        this.collapseLabel_ = document.createElement("span");
        this.collapseLabel_.textContent = collapseLabel;
        this.collapseLabel_.className = collapseClassName;
      } else {
        this.collapseLabel_ = collapseLabel;
      }
      const label = options.label !== void 0 ? options.label : "i";
      if (typeof label === "string") {
        this.label_ = document.createElement("span");
        this.label_.textContent = label;
        this.label_.className = expandClassName;
      } else {
        this.label_ = label;
      }
      const activeLabel = this.collapsible_ && !this.collapsed_ ? this.collapseLabel_ : this.label_;
      this.toggleButton_ = document.createElement("button");
      this.toggleButton_.setAttribute("type", "button");
      this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
      this.toggleButton_.title = tipLabel;
      this.toggleButton_.appendChild(activeLabel);
      this.toggleButton_.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this),
        false
      );
      const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL + (this.collapsed_ && this.collapsible_ ? " " + CLASS_COLLAPSED : "") + (this.collapsible_ ? "" : " ol-uncollapsible");
      const element = this.element;
      element.className = cssClasses;
      element.appendChild(this.toggleButton_);
      element.appendChild(this.ulElement_);
      this.renderedAttributions_ = [];
      this.renderedVisible_ = true;
    }
    /**
     * Collect a list of visible attributions and set the collapsible state.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @return {Array<string>} Attributions.
     * @private
     */
    collectSourceAttributions_(frameState) {
      const layers = this.getMap().getAllLayers();
      const visibleAttributions = new Set(
        layers.flatMap((layer) => layer.getAttributions(frameState))
      );
      if (this.attributions_ !== void 0) {
        Array.isArray(this.attributions_) ? this.attributions_.forEach((item) => visibleAttributions.add(item)) : visibleAttributions.add(this.attributions_);
      }
      if (!this.overrideCollapsible_) {
        const collapsible = !layers.some(
          (layer) => layer.getSource()?.getAttributionsCollapsible() === false
        );
        this.setCollapsible(collapsible);
      }
      return Array.from(visibleAttributions);
    }
    /**
     * @private
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     */
    async updateElement_(frameState) {
      if (!frameState) {
        if (this.renderedVisible_) {
          this.element.style.display = "none";
          this.renderedVisible_ = false;
        }
        return;
      }
      const attributions = await Promise.all(
        this.collectSourceAttributions_(frameState).map(
          (attribution) => toPromise(() => attribution)
        )
      );
      const visible = attributions.length > 0;
      if (this.renderedVisible_ != visible) {
        this.element.style.display = visible ? "" : "none";
        this.renderedVisible_ = visible;
      }
      if (equals2(attributions, this.renderedAttributions_)) {
        return;
      }
      removeChildren(this.ulElement_);
      for (let i = 0, ii = attributions.length; i < ii; ++i) {
        const element = document.createElement("li");
        element.innerHTML = attributions[i];
        this.ulElement_.appendChild(element);
      }
      this.renderedAttributions_ = attributions;
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(event) {
      event.preventDefault();
      this.handleToggle_();
      this.userCollapsed_ = this.collapsed_;
    }
    /**
     * @private
     */
    handleToggle_() {
      this.element.classList.toggle(CLASS_COLLAPSED);
      if (this.collapsed_) {
        replaceNode(this.collapseLabel_, this.label_);
      } else {
        replaceNode(this.label_, this.collapseLabel_);
      }
      this.collapsed_ = !this.collapsed_;
      this.toggleButton_.setAttribute("aria-expanded", String(!this.collapsed_));
    }
    /**
     * Return `true` if the attribution is collapsible, `false` otherwise.
     * @return {boolean} True if the widget is collapsible.
     * @api
     */
    getCollapsible() {
      return this.collapsible_;
    }
    /**
     * Set whether the attribution should be collapsible.
     * @param {boolean} collapsible True if the widget is collapsible.
     * @api
     */
    setCollapsible(collapsible) {
      if (this.collapsible_ === collapsible) {
        return;
      }
      this.collapsible_ = collapsible;
      this.element.classList.toggle("ol-uncollapsible");
      if (this.userCollapsed_) {
        this.handleToggle_();
      }
    }
    /**
     * Collapse or expand the attribution according to the passed parameter. Will
     * not do anything if the attribution isn't collapsible or if the current
     * collapsed state is already the one requested.
     * @param {boolean} collapsed True if the widget is collapsed.
     * @api
     */
    setCollapsed(collapsed) {
      this.userCollapsed_ = collapsed;
      if (!this.collapsible_ || this.collapsed_ === collapsed) {
        return;
      }
      this.handleToggle_();
    }
    /**
     * Return `true` when the attribution is currently collapsed or `false`
     * otherwise.
     * @return {boolean} True if the widget is collapsed.
     * @api
     */
    getCollapsed() {
      return this.collapsed_;
    }
    /**
     * Update the attribution element.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @override
     */
    render(mapEvent) {
      this.updateElement_(mapEvent.frameState);
    }
  };
  var Attribution_default = Attribution;

  // node_modules/ol/control/Rotate.js
  var Rotate = class extends Control_default {
    /**
     * @param {Options} [options] Rotate options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        element: document.createElement("div"),
        render: options.render,
        target: options.target
      });
      const className = options.className !== void 0 ? options.className : "ol-rotate";
      const label = options.label !== void 0 ? options.label : "\u21E7";
      const compassClassName = options.compassClassName !== void 0 ? options.compassClassName : "ol-compass";
      this.label_ = null;
      if (typeof label === "string") {
        this.label_ = document.createElement("span");
        this.label_.className = compassClassName;
        this.label_.textContent = label;
      } else {
        this.label_ = label;
        this.label_.classList.add(compassClassName);
      }
      const tipLabel = options.tipLabel ? options.tipLabel : "Reset rotation";
      const button = document.createElement("button");
      button.className = className + "-reset";
      button.setAttribute("type", "button");
      button.title = tipLabel;
      button.appendChild(this.label_);
      button.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this),
        false
      );
      const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL;
      const element = this.element;
      element.className = cssClasses;
      element.appendChild(button);
      this.callResetNorth_ = options.resetNorth ? options.resetNorth : void 0;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
      this.autoHide_ = options.autoHide !== void 0 ? options.autoHide : true;
      this.rotation_ = void 0;
      if (this.autoHide_) {
        this.element.classList.add(CLASS_HIDDEN);
      }
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(event) {
      event.preventDefault();
      if (this.callResetNorth_ !== void 0) {
        this.callResetNorth_();
      } else {
        this.resetNorth_();
      }
    }
    /**
     * @private
     */
    resetNorth_() {
      const map = this.getMap();
      const view = map.getView();
      if (!view) {
        return;
      }
      const rotation = view.getRotation();
      if (rotation !== void 0) {
        if (this.duration_ > 0 && rotation % (2 * Math.PI) !== 0) {
          view.animate({
            rotation: 0,
            duration: this.duration_,
            easing: easeOut
          });
        } else {
          view.setRotation(0);
        }
      }
    }
    /**
     * Update the rotate control element.
     * @param {import("../MapEvent.js").default} mapEvent Map event.
     * @override
     */
    render(mapEvent) {
      const frameState = mapEvent.frameState;
      if (!frameState) {
        return;
      }
      const rotation = frameState.viewState.rotation;
      if (rotation != this.rotation_) {
        const transform2 = "rotate(" + rotation + "rad)";
        if (this.autoHide_) {
          const contains2 = this.element.classList.contains(CLASS_HIDDEN);
          if (!contains2 && rotation === 0) {
            this.element.classList.add(CLASS_HIDDEN);
          } else if (contains2 && rotation !== 0) {
            this.element.classList.remove(CLASS_HIDDEN);
          }
        }
        this.label_.style.transform = transform2;
      }
      this.rotation_ = rotation;
    }
  };
  var Rotate_default = Rotate;

  // node_modules/ol/control/Zoom.js
  var Zoom = class extends Control_default {
    /**
     * @param {Options} [options] Zoom options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        element: document.createElement("div"),
        target: options.target
      });
      const className = options.className !== void 0 ? options.className : "ol-zoom";
      const delta = options.delta !== void 0 ? options.delta : 1;
      const zoomInClassName = options.zoomInClassName !== void 0 ? options.zoomInClassName : className + "-in";
      const zoomOutClassName = options.zoomOutClassName !== void 0 ? options.zoomOutClassName : className + "-out";
      const zoomInLabel = options.zoomInLabel !== void 0 ? options.zoomInLabel : "+";
      const zoomOutLabel = options.zoomOutLabel !== void 0 ? options.zoomOutLabel : "\u2013";
      const zoomInTipLabel = options.zoomInTipLabel !== void 0 ? options.zoomInTipLabel : "Zoom in";
      const zoomOutTipLabel = options.zoomOutTipLabel !== void 0 ? options.zoomOutTipLabel : "Zoom out";
      const inElement = document.createElement("button");
      inElement.className = zoomInClassName;
      inElement.setAttribute("type", "button");
      inElement.title = zoomInTipLabel;
      inElement.appendChild(
        typeof zoomInLabel === "string" ? document.createTextNode(zoomInLabel) : zoomInLabel
      );
      inElement.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this, delta),
        false
      );
      const outElement = document.createElement("button");
      outElement.className = zoomOutClassName;
      outElement.setAttribute("type", "button");
      outElement.title = zoomOutTipLabel;
      outElement.appendChild(
        typeof zoomOutLabel === "string" ? document.createTextNode(zoomOutLabel) : zoomOutLabel
      );
      outElement.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this, -delta),
        false
      );
      const cssClasses = className + " " + CLASS_UNSELECTABLE + " " + CLASS_CONTROL;
      const element = this.element;
      element.className = cssClasses;
      element.appendChild(inElement);
      element.appendChild(outElement);
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
    }
    /**
     * @param {number} delta Zoom delta.
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(delta, event) {
      event.preventDefault();
      this.zoomByDelta_(delta);
    }
    /**
     * @param {number} delta Zoom delta.
     * @private
     */
    zoomByDelta_(delta) {
      const map = this.getMap();
      const view = map.getView();
      if (!view) {
        return;
      }
      const currentZoom = view.getZoom();
      if (currentZoom !== void 0) {
        const newZoom = view.getConstrainedZoom(currentZoom + delta);
        if (this.duration_ > 0) {
          if (view.getAnimating()) {
            view.cancelAnimations();
          }
          view.animate({
            zoom: newZoom,
            duration: this.duration_,
            easing: easeOut
          });
        } else {
          view.setZoom(newZoom);
        }
      }
    }
  };
  var Zoom_default = Zoom;

  // node_modules/ol/control/defaults.js
  function defaults(options) {
    options = options ? options : {};
    const controls = new Collection_default();
    const zoomControl = options.zoom !== void 0 ? options.zoom : true;
    if (zoomControl) {
      controls.push(new Zoom_default(options.zoomOptions));
    }
    const rotateControl = options.rotate !== void 0 ? options.rotate : true;
    if (rotateControl) {
      controls.push(new Rotate_default(options.rotateOptions));
    }
    const attributionControl = options.attribution !== void 0 ? options.attribution : true;
    if (attributionControl) {
      controls.push(new Attribution_default(options.attributionOptions));
    }
    return controls;
  }

  // node_modules/ol/Kinetic.js
  var Kinetic = class {
    /**
     * @param {number} decay Rate of decay (must be negative).
     * @param {number} minVelocity Minimum velocity (pixels/millisecond).
     * @param {number} delay Delay to consider to calculate the kinetic
     *     initial values (milliseconds).
     */
    constructor(decay, minVelocity, delay) {
      this.decay_ = decay;
      this.minVelocity_ = minVelocity;
      this.delay_ = delay;
      this.points_ = [];
      this.angle_ = 0;
      this.initialVelocity_ = 0;
    }
    /**
     * FIXME empty description for jsdoc
     */
    begin() {
      this.points_.length = 0;
      this.angle_ = 0;
      this.initialVelocity_ = 0;
    }
    /**
     * @param {number} x X.
     * @param {number} y Y.
     */
    update(x, y) {
      this.points_.push(x, y, Date.now());
    }
    /**
     * @return {boolean} Whether we should do kinetic animation.
     */
    end() {
      if (this.points_.length < 6) {
        return false;
      }
      const delay = Date.now() - this.delay_;
      const lastIndex = this.points_.length - 3;
      if (this.points_[lastIndex + 2] < delay) {
        return false;
      }
      let firstIndex = lastIndex - 3;
      while (firstIndex > 0 && this.points_[firstIndex + 2] > delay) {
        firstIndex -= 3;
      }
      const duration = this.points_[lastIndex + 2] - this.points_[firstIndex + 2];
      if (duration < 1e3 / 60) {
        return false;
      }
      const dx = this.points_[lastIndex] - this.points_[firstIndex];
      const dy = this.points_[lastIndex + 1] - this.points_[firstIndex + 1];
      this.angle_ = Math.atan2(dy, dx);
      this.initialVelocity_ = Math.sqrt(dx * dx + dy * dy) / duration;
      return this.initialVelocity_ > this.minVelocity_;
    }
    /**
     * @return {number} Total distance travelled (pixels).
     */
    getDistance() {
      return (this.minVelocity_ - this.initialVelocity_) / this.decay_;
    }
    /**
     * @return {number} Angle of the kinetic panning animation (radians).
     */
    getAngle() {
      return this.angle_;
    }
  };
  var Kinetic_default = Kinetic;

  // node_modules/ol/interaction/Property.js
  var Property_default = {
    ACTIVE: "active"
  };

  // node_modules/ol/interaction/Interaction.js
  var Interaction = class extends Object_default {
    /**
     * @param {InteractionOptions} [options] Options.
     */
    constructor(options) {
      super();
      this.on;
      this.once;
      this.un;
      if (options && options.handleEvent) {
        this.handleEvent = options.handleEvent;
      }
      this.map_ = null;
      this.setActive(true);
    }
    /**
     * Return whether the interaction is currently active.
     * @return {boolean} `true` if the interaction is active, `false` otherwise.
     * @observable
     * @api
     */
    getActive() {
      return (
        /** @type {boolean} */
        this.get(Property_default.ACTIVE)
      );
    }
    /**
     * Get the map associated with this interaction.
     * @return {import("../Map.js").default|null} Map.
     * @api
     */
    getMap() {
      return this.map_;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event}.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @api
     */
    handleEvent(mapBrowserEvent) {
      return true;
    }
    /**
     * Activate or deactivate the interaction.
     * @param {boolean} active Active.
     * @observable
     * @api
     */
    setActive(active) {
      this.set(Property_default.ACTIVE, active);
    }
    /**
     * Remove the interaction from its current map and attach it to the new map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../Map.js").default|null} map Map.
     */
    setMap(map) {
      this.map_ = map;
    }
  };
  function pan(view, delta, duration) {
    const currentCenter = view.getCenterInternal();
    if (currentCenter) {
      const center = [currentCenter[0] + delta[0], currentCenter[1] + delta[1]];
      view.animateInternal({
        duration: duration !== void 0 ? duration : 250,
        easing: linear,
        center: view.getConstrainedCenter(center)
      });
    }
  }
  function zoomByDelta(view, delta, anchor, duration) {
    const currentZoom = view.getZoom();
    if (currentZoom === void 0) {
      return;
    }
    const newZoom = view.getConstrainedZoom(currentZoom + delta);
    const newResolution = view.getResolutionForZoom(newZoom);
    if (view.getAnimating()) {
      view.cancelAnimations();
    }
    view.animate({
      resolution: newResolution,
      anchor,
      duration: duration !== void 0 ? duration : 250,
      easing: easeOut
    });
  }
  var Interaction_default = Interaction;

  // node_modules/ol/interaction/DoubleClickZoom.js
  var DoubleClickZoom = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super();
      options = options ? options : {};
      this.delta_ = options.delta ? options.delta : 1;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a
     * doubleclick) and eventually zooms the map.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(mapBrowserEvent) {
      let stopEvent = false;
      if (mapBrowserEvent.type == MapBrowserEventType_default.DBLCLICK) {
        const browserEvent = (
          /** @type {MouseEvent} */
          mapBrowserEvent.originalEvent
        );
        const map = mapBrowserEvent.map;
        const anchor = mapBrowserEvent.coordinate;
        const delta = browserEvent.shiftKey ? -this.delta_ : this.delta_;
        const view = map.getView();
        zoomByDelta(view, delta, anchor, this.duration_);
        browserEvent.preventDefault();
        stopEvent = true;
      }
      return !stopEvent;
    }
  };
  var DoubleClickZoom_default = DoubleClickZoom;

  // node_modules/ol/events/condition.js
  function all(var_args) {
    const conditions = arguments;
    return function(event) {
      let pass = true;
      for (let i = 0, ii = conditions.length; i < ii; ++i) {
        pass = pass && conditions[i](event);
        if (!pass) {
          break;
        }
      }
      return pass;
    };
  }
  var altShiftKeysOnly = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
  };
  var focus = function(event) {
    const targetElement = event.map.getTargetElement();
    const rootNode = targetElement.getRootNode();
    const activeElement = event.map.getOwnerDocument().activeElement;
    return rootNode instanceof ShadowRoot ? rootNode.host.contains(activeElement) : targetElement.contains(activeElement);
  };
  var focusWithTabindex = function(event) {
    const targetElement = event.map.getTargetElement();
    const rootNode = targetElement.getRootNode();
    const tabIndexCandidate = rootNode instanceof ShadowRoot ? rootNode.host : targetElement;
    return tabIndexCandidate.hasAttribute("tabindex") ? focus(event) : true;
  };
  var always = TRUE;
  var mouseActionButton = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return "pointerId" in originalEvent && originalEvent.button == 0 && !(WEBKIT && MAC && originalEvent.ctrlKey);
  };
  var noModifierKeys = function(mapBrowserEvent) {
    const originalEvent = (
      /** @type {KeyboardEvent|MouseEvent|TouchEvent} */
      mapBrowserEvent.originalEvent
    );
    return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && !originalEvent.shiftKey;
  };
  var platformModifierKey = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return MAC ? originalEvent.metaKey : originalEvent.ctrlKey;
  };
  var shiftKeyOnly = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    return !originalEvent.altKey && !(originalEvent.metaKey || originalEvent.ctrlKey) && originalEvent.shiftKey;
  };
  var targetNotEditable = function(mapBrowserEvent) {
    const originalEvent = mapBrowserEvent.originalEvent;
    const tagName = (
      /** @type {Element} */
      originalEvent.target.tagName
    );
    return tagName !== "INPUT" && tagName !== "SELECT" && tagName !== "TEXTAREA" && // `isContentEditable` is only available on `HTMLElement`, but it may also be a
    // different type like `SVGElement`.
    // @ts-ignore
    !originalEvent.target.isContentEditable;
  };
  var mouseOnly = function(mapBrowserEvent) {
    const pointerEvent = mapBrowserEvent.originalEvent;
    return "pointerId" in pointerEvent && pointerEvent.pointerType == "mouse";
  };
  var primaryAction = function(mapBrowserEvent) {
    const pointerEvent = mapBrowserEvent.originalEvent;
    return "pointerId" in pointerEvent && pointerEvent.isPrimary && pointerEvent.button === 0;
  };

  // node_modules/ol/interaction/Pointer.js
  var PointerInteraction = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      super(
        /** @type {import("./Interaction.js").InteractionOptions} */
        options
      );
      if (options.handleDownEvent) {
        this.handleDownEvent = options.handleDownEvent;
      }
      if (options.handleDragEvent) {
        this.handleDragEvent = options.handleDragEvent;
      }
      if (options.handleMoveEvent) {
        this.handleMoveEvent = options.handleMoveEvent;
      }
      if (options.handleUpEvent) {
        this.handleUpEvent = options.handleUpEvent;
      }
      if (options.stopDown) {
        this.stopDown = options.stopDown;
      }
      this.handlingDownUpSequence = false;
      this.targetPointers = [];
    }
    /**
     * Returns the current number of pointers involved in the interaction,
     * e.g. `2` when two fingers are used.
     * @return {number} The number of pointers.
     * @api
     */
    getPointerCount() {
      return this.targetPointers.length;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @protected
     */
    handleDownEvent(mapBrowserEvent) {
      return false;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @protected
     */
    handleDragEvent(mapBrowserEvent) {
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} and may call into
     * other functions, if event sequences like e.g. 'drag' or 'down-up' etc. are
     * detected.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @api
     * @override
     */
    handleEvent(mapBrowserEvent) {
      if (!mapBrowserEvent.originalEvent) {
        return true;
      }
      let stopEvent = false;
      this.updateTrackedPointers_(mapBrowserEvent);
      if (this.handlingDownUpSequence) {
        if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERDRAG) {
          this.handleDragEvent(mapBrowserEvent);
          mapBrowserEvent.originalEvent.preventDefault();
        } else if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERUP) {
          const handledUp = this.handleUpEvent(mapBrowserEvent);
          this.handlingDownUpSequence = handledUp && this.targetPointers.length > 0;
        }
      } else {
        if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERDOWN) {
          const handled = this.handleDownEvent(mapBrowserEvent);
          this.handlingDownUpSequence = handled;
          stopEvent = this.stopDown(handled);
        } else if (mapBrowserEvent.type == MapBrowserEventType_default.POINTERMOVE) {
          this.handleMoveEvent(mapBrowserEvent);
        }
      }
      return !stopEvent;
    }
    /**
     * Handle pointer move events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @protected
     */
    handleMoveEvent(mapBrowserEvent) {
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @protected
     */
    handleUpEvent(mapBrowserEvent) {
      return false;
    }
    /**
     * This function is used to determine if "down" events should be propagated
     * to other interactions or should be stopped.
     * @param {boolean} handled Was the event handled by the interaction?
     * @return {boolean} Should the `down` event be stopped?
     */
    stopDown(handled) {
      return handled;
    }
    /**
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @private
     */
    updateTrackedPointers_(mapBrowserEvent) {
      if (mapBrowserEvent.activePointers) {
        this.targetPointers = mapBrowserEvent.activePointers;
      }
    }
  };
  function centroid(pointerEvents) {
    const length = pointerEvents.length;
    let clientX = 0;
    let clientY = 0;
    for (let i = 0; i < length; i++) {
      clientX += pointerEvents[i].clientX;
      clientY += pointerEvents[i].clientY;
    }
    return { clientX: clientX / length, clientY: clientY / length };
  }
  var Pointer_default = PointerInteraction;

  // node_modules/ol/interaction/DragPan.js
  var DragPan = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super({
        stopDown: FALSE
      });
      options = options ? options : {};
      this.kinetic_ = options.kinetic;
      this.lastCentroid = null;
      this.lastPointersCount_;
      this.panning_ = false;
      const condition = options.condition ? options.condition : all(noModifierKeys, primaryAction);
      this.condition_ = options.onFocusOnly ? all(focusWithTabindex, condition) : condition;
      this.noKinetic_ = false;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      const map = mapBrowserEvent.map;
      if (!this.panning_) {
        this.panning_ = true;
        map.getView().beginInteraction();
      }
      const targetPointers = this.targetPointers;
      const centroid2 = map.getEventPixel(centroid(targetPointers));
      if (targetPointers.length == this.lastPointersCount_) {
        if (this.kinetic_) {
          this.kinetic_.update(centroid2[0], centroid2[1]);
        }
        if (this.lastCentroid) {
          const delta = [
            this.lastCentroid[0] - centroid2[0],
            centroid2[1] - this.lastCentroid[1]
          ];
          const map2 = mapBrowserEvent.map;
          const view = map2.getView();
          scale2(delta, view.getResolution());
          rotate(delta, view.getRotation());
          view.adjustCenterInternal(delta);
        }
      } else if (this.kinetic_) {
        this.kinetic_.begin();
      }
      this.lastCentroid = centroid2;
      this.lastPointersCount_ = targetPointers.length;
      mapBrowserEvent.originalEvent.preventDefault();
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      const map = mapBrowserEvent.map;
      const view = map.getView();
      if (this.targetPointers.length === 0) {
        if (!this.noKinetic_ && this.kinetic_ && this.kinetic_.end()) {
          const distance = this.kinetic_.getDistance();
          const angle = this.kinetic_.getAngle();
          const center = view.getCenterInternal();
          const centerpx = map.getPixelFromCoordinateInternal(center);
          const dest = map.getCoordinateFromPixelInternal([
            centerpx[0] - distance * Math.cos(angle),
            centerpx[1] - distance * Math.sin(angle)
          ]);
          view.animateInternal({
            center: view.getConstrainedCenter(dest),
            duration: 500,
            easing: easeOut
          });
        }
        if (this.panning_) {
          this.panning_ = false;
          view.endInteraction();
        }
        return false;
      }
      if (this.kinetic_) {
        this.kinetic_.begin();
      }
      this.lastCentroid = null;
      return true;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (this.targetPointers.length > 0 && this.condition_(mapBrowserEvent)) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        this.lastCentroid = null;
        if (view.getAnimating()) {
          view.cancelAnimations();
        }
        if (this.kinetic_) {
          this.kinetic_.begin();
        }
        this.noKinetic_ = this.targetPointers.length > 1;
        return true;
      }
      return false;
    }
  };
  var DragPan_default = DragPan;

  // node_modules/ol/interaction/DragRotate.js
  var DragRotate = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        stopDown: FALSE
      });
      this.condition_ = options.condition ? options.condition : altShiftKeysOnly;
      this.lastAngle_ = void 0;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      if (!mouseOnly(mapBrowserEvent)) {
        return;
      }
      const map = mapBrowserEvent.map;
      const view = map.getView();
      if (view.getConstraints().rotation === disable) {
        return;
      }
      const size = map.getSize();
      const offset = mapBrowserEvent.pixel;
      const theta = Math.atan2(size[1] / 2 - offset[1], offset[0] - size[0] / 2);
      if (this.lastAngle_ !== void 0) {
        const delta = theta - this.lastAngle_;
        view.adjustRotationInternal(-delta);
      }
      this.lastAngle_ = theta;
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      if (!mouseOnly(mapBrowserEvent)) {
        return true;
      }
      const map = mapBrowserEvent.map;
      const view = map.getView();
      view.endInteraction(this.duration_);
      return false;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (!mouseOnly(mapBrowserEvent)) {
        return false;
      }
      if (mouseActionButton(mapBrowserEvent) && this.condition_(mapBrowserEvent)) {
        const map = mapBrowserEvent.map;
        map.getView().beginInteraction();
        this.lastAngle_ = void 0;
        return true;
      }
      return false;
    }
  };
  var DragRotate_default = DragRotate;

  // node_modules/ol/render/Box.js
  var RenderBox = class extends Disposable_default {
    /**
     * @param {string} className CSS class name.
     */
    constructor(className) {
      super();
      this.geometry_ = null;
      this.element_ = document.createElement("div");
      this.element_.style.position = "absolute";
      this.element_.style.pointerEvents = "auto";
      this.element_.className = "ol-box " + className;
      this.map_ = null;
      this.startPixel_ = null;
      this.endPixel_ = null;
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.setMap(null);
    }
    /**
     * @private
     */
    render_() {
      const startPixel = this.startPixel_;
      const endPixel = this.endPixel_;
      const px = "px";
      const style = this.element_.style;
      style.left = Math.min(startPixel[0], endPixel[0]) + px;
      style.top = Math.min(startPixel[1], endPixel[1]) + px;
      style.width = Math.abs(endPixel[0] - startPixel[0]) + px;
      style.height = Math.abs(endPixel[1] - startPixel[1]) + px;
    }
    /**
     * @param {import("../Map.js").default|null} map Map.
     */
    setMap(map) {
      if (this.map_) {
        this.map_.getOverlayContainer().removeChild(this.element_);
        const style = this.element_.style;
        style.left = "inherit";
        style.top = "inherit";
        style.width = "inherit";
        style.height = "inherit";
      }
      this.map_ = map;
      if (this.map_) {
        this.map_.getOverlayContainer().appendChild(this.element_);
      }
    }
    /**
     * @param {import("../pixel.js").Pixel} startPixel Start pixel.
     * @param {import("../pixel.js").Pixel} endPixel End pixel.
     */
    setPixels(startPixel, endPixel) {
      this.startPixel_ = startPixel;
      this.endPixel_ = endPixel;
      this.createOrUpdateGeometry();
      this.render_();
    }
    /**
     * Creates or updates the cached geometry.
     */
    createOrUpdateGeometry() {
      if (!this.map_) {
        return;
      }
      const startPixel = this.startPixel_;
      const endPixel = this.endPixel_;
      const pixels = [
        startPixel,
        [startPixel[0], endPixel[1]],
        endPixel,
        [endPixel[0], startPixel[1]]
      ];
      const coordinates2 = pixels.map(
        this.map_.getCoordinateFromPixelInternal,
        this.map_
      );
      coordinates2[4] = coordinates2[0].slice();
      if (!this.geometry_) {
        this.geometry_ = new Polygon_default([coordinates2]);
      } else {
        this.geometry_.setCoordinates([coordinates2]);
      }
    }
    /**
     * @return {import("../geom/Polygon.js").default} Geometry.
     */
    getGeometry() {
      return this.geometry_;
    }
  };
  var Box_default = RenderBox;

  // node_modules/ol/interaction/DragBox.js
  var DragBoxEventType = {
    /**
     * Triggered upon drag box start.
     * @event DragBoxEvent#boxstart
     * @api
     */
    BOXSTART: "boxstart",
    /**
     * Triggered on drag when box is active.
     * @event DragBoxEvent#boxdrag
     * @api
     */
    BOXDRAG: "boxdrag",
    /**
     * Triggered upon drag box end.
     * @event DragBoxEvent#boxend
     * @api
     */
    BOXEND: "boxend",
    /**
     * Triggered upon drag box canceled.
     * @event DragBoxEvent#boxcancel
     * @api
     */
    BOXCANCEL: "boxcancel"
  };
  var DragBoxEvent = class extends Event_default {
    /**
     * @param {string} type The event type.
     * @param {import("../coordinate.js").Coordinate} coordinate The event coordinate.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Originating event.
     */
    constructor(type, coordinate, mapBrowserEvent) {
      super(type);
      this.coordinate = coordinate;
      this.mapBrowserEvent = mapBrowserEvent;
    }
  };
  var DragBox = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super();
      this.on;
      this.once;
      this.un;
      options = options ?? {};
      this.box_ = new Box_default(options.className || "ol-dragbox");
      this.minArea_ = options.minArea ?? 64;
      if (options.onBoxEnd) {
        this.onBoxEnd = options.onBoxEnd;
      }
      this.startPixel_ = null;
      this.condition_ = options.condition ?? mouseActionButton;
      this.boxEndCondition_ = options.boxEndCondition ?? this.defaultBoxEndCondition;
    }
    /**
     * The default condition for determining whether the boxend event
     * should fire.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent The originating MapBrowserEvent
     *     leading to the box end.
     * @param {import("../pixel.js").Pixel} startPixel The starting pixel of the box.
     * @param {import("../pixel.js").Pixel} endPixel The end pixel of the box.
     * @return {boolean} Whether or not the boxend condition should be fired.
     */
    defaultBoxEndCondition(mapBrowserEvent, startPixel, endPixel) {
      const width = endPixel[0] - startPixel[0];
      const height = endPixel[1] - startPixel[1];
      return width * width + height * height >= this.minArea_;
    }
    /**
     * Returns geometry of last drawn box.
     * @return {import("../geom/Polygon.js").default} Geometry.
     * @api
     */
    getGeometry() {
      return this.box_.getGeometry();
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      if (!this.startPixel_) {
        return;
      }
      this.box_.setPixels(this.startPixel_, mapBrowserEvent.pixel);
      this.dispatchEvent(
        new DragBoxEvent(
          DragBoxEventType.BOXDRAG,
          mapBrowserEvent.coordinate,
          mapBrowserEvent
        )
      );
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      if (!this.startPixel_) {
        return false;
      }
      const completeBox = this.boxEndCondition_(
        mapBrowserEvent,
        this.startPixel_,
        mapBrowserEvent.pixel
      );
      if (completeBox) {
        this.onBoxEnd(mapBrowserEvent);
      }
      this.dispatchEvent(
        new DragBoxEvent(
          completeBox ? DragBoxEventType.BOXEND : DragBoxEventType.BOXCANCEL,
          mapBrowserEvent.coordinate,
          mapBrowserEvent
        )
      );
      this.box_.setMap(null);
      this.startPixel_ = null;
      return false;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (this.condition_(mapBrowserEvent)) {
        this.startPixel_ = mapBrowserEvent.pixel;
        this.box_.setMap(mapBrowserEvent.map);
        this.box_.setPixels(this.startPixel_, this.startPixel_);
        this.dispatchEvent(
          new DragBoxEvent(
            DragBoxEventType.BOXSTART,
            mapBrowserEvent.coordinate,
            mapBrowserEvent
          )
        );
        return true;
      }
      return false;
    }
    /**
     * Function to execute just before `onboxend` is fired
     * @param {import("../MapBrowserEvent.js").default} event Event.
     */
    onBoxEnd(event) {
    }
    /**
     * Activate or deactivate the interaction.
     * @param {boolean} active Active.
     * @observable
     * @api
     * @override
     */
    setActive(active) {
      if (!active) {
        this.box_.setMap(null);
        if (this.startPixel_) {
          this.dispatchEvent(
            new DragBoxEvent(DragBoxEventType.BOXCANCEL, this.startPixel_, null)
          );
          this.startPixel_ = null;
        }
      }
      super.setActive(active);
    }
    /**
     * @param {import("../Map.js").default|null} map Map.
     * @override
     */
    setMap(map) {
      const oldMap = this.getMap();
      if (oldMap) {
        this.box_.setMap(null);
        if (this.startPixel_) {
          this.dispatchEvent(
            new DragBoxEvent(DragBoxEventType.BOXCANCEL, this.startPixel_, null)
          );
          this.startPixel_ = null;
        }
      }
      super.setMap(map);
    }
  };
  var DragBox_default = DragBox;

  // node_modules/ol/interaction/DragZoom.js
  var DragZoom = class extends DragBox_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      const condition = options.condition ? options.condition : shiftKeyOnly;
      super({
        condition,
        className: options.className || "ol-dragzoom",
        minArea: options.minArea
      });
      this.duration_ = options.duration !== void 0 ? options.duration : 200;
      this.out_ = options.out !== void 0 ? options.out : false;
    }
    /**
     * Function to execute just before `onboxend` is fired
     * @param {import("../MapBrowserEvent.js").default} event Event.
     * @override
     */
    onBoxEnd(event) {
      const map = this.getMap();
      const view = (
        /** @type {!import("../View.js").default} */
        map.getView()
      );
      let geometry = this.getGeometry();
      if (this.out_) {
        const rotatedExtent = view.rotatedExtentForGeometry(geometry);
        const resolution = view.getResolutionForExtentInternal(rotatedExtent);
        const factor = view.getResolution() / resolution;
        geometry = geometry.clone();
        geometry.scale(factor * factor);
      }
      view.fitInternal(geometry, {
        duration: this.duration_,
        easing: easeOut
      });
    }
  };
  var DragZoom_default = DragZoom;

  // node_modules/ol/events/Key.js
  var Key_default = {
    LEFT: "ArrowLeft",
    UP: "ArrowUp",
    RIGHT: "ArrowRight",
    DOWN: "ArrowDown"
  };

  // node_modules/ol/interaction/KeyboardPan.js
  var KeyboardPan = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super();
      options = options || {};
      this.defaultCondition_ = function(mapBrowserEvent) {
        return noModifierKeys(mapBrowserEvent) && targetNotEditable(mapBrowserEvent);
      };
      this.condition_ = options.condition !== void 0 ? options.condition : this.defaultCondition_;
      this.duration_ = options.duration !== void 0 ? options.duration : 100;
      this.pixelDelta_ = options.pixelDelta !== void 0 ? options.pixelDelta : 128;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
     * `KeyEvent`, and decides the direction to pan to (if an arrow key was
     * pressed).
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(mapBrowserEvent) {
      let stopEvent = false;
      if (mapBrowserEvent.type == EventType_default.KEYDOWN) {
        const keyEvent = (
          /** @type {KeyboardEvent} */
          mapBrowserEvent.originalEvent
        );
        const key = keyEvent.key;
        if (this.condition_(mapBrowserEvent) && (key == Key_default.DOWN || key == Key_default.LEFT || key == Key_default.RIGHT || key == Key_default.UP)) {
          const map = mapBrowserEvent.map;
          const view = map.getView();
          const mapUnitsDelta = view.getResolution() * this.pixelDelta_;
          let deltaX = 0, deltaY = 0;
          if (key == Key_default.DOWN) {
            deltaY = -mapUnitsDelta;
          } else if (key == Key_default.LEFT) {
            deltaX = -mapUnitsDelta;
          } else if (key == Key_default.RIGHT) {
            deltaX = mapUnitsDelta;
          } else {
            deltaY = mapUnitsDelta;
          }
          const delta = [deltaX, deltaY];
          rotate(delta, view.getRotation());
          pan(view, delta, this.duration_);
          keyEvent.preventDefault();
          stopEvent = true;
        }
      }
      return !stopEvent;
    }
  };
  var KeyboardPan_default = KeyboardPan;

  // node_modules/ol/interaction/KeyboardZoom.js
  var KeyboardZoom = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      super();
      options = options ? options : {};
      this.condition_ = options.condition ? options.condition : function(mapBrowserEvent) {
        return !platformModifierKey(mapBrowserEvent) && targetNotEditable(mapBrowserEvent);
      };
      this.delta_ = options.delta ? options.delta : 1;
      this.duration_ = options.duration !== void 0 ? options.duration : 100;
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} if it was a
     * `KeyEvent`, and decides whether to zoom in or out (depending on whether the
     * key pressed was '+' or '-').
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(mapBrowserEvent) {
      let stopEvent = false;
      if (mapBrowserEvent.type == EventType_default.KEYDOWN || mapBrowserEvent.type == EventType_default.KEYPRESS) {
        const keyEvent = (
          /** @type {KeyboardEvent} */
          mapBrowserEvent.originalEvent
        );
        const key = keyEvent.key;
        if (this.condition_(mapBrowserEvent) && (key === "+" || key === "-")) {
          const map = mapBrowserEvent.map;
          const delta = key === "+" ? this.delta_ : -this.delta_;
          const view = map.getView();
          zoomByDelta(view, delta, void 0, this.duration_);
          keyEvent.preventDefault();
          stopEvent = true;
        }
      }
      return !stopEvent;
    }
  };
  var KeyboardZoom_default = KeyboardZoom;

  // node_modules/ol/interaction/MouseWheelZoom.js
  var DELTA_LINE_MULTIPLIER = 40;
  var DELTA_PAGE_MULTIPLIER = 300;
  var DELTA_TRACKPAD_PINCH_TO_ZOOM_MULTIPLIER = 3;
  var MouseWheelZoom = class extends Interaction_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      super(
        /** @type {import("./Interaction.js").InteractionOptions} */
        options
      );
      this.totalDelta_ = 0;
      this.lastDelta_ = 0;
      this.maxDelta_ = options.maxDelta !== void 0 ? options.maxDelta : 1;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
      this.timeout_ = options.timeout !== void 0 ? options.timeout : 80;
      this.useAnchor_ = options.useAnchor !== void 0 ? options.useAnchor : true;
      this.constrainResolution_ = options.constrainResolution !== void 0 ? options.constrainResolution : false;
      const condition = options.condition ? options.condition : always;
      this.condition_ = options.onFocusOnly ? all(focusWithTabindex, condition) : condition;
      this.lastAnchor_ = null;
      this.startTime_ = void 0;
      this.timeoutId_;
      this.mode_ = void 0;
      this.trackpadEventGap_ = 400;
      this.trackpadTimeoutId_;
      this.deltaPerZoom_ = 300;
      this.ctrlKeyPressed_ = false;
      this.ctrlKeyListenerKeys_ = [];
    }
    /**
     * @param {import('../Map.js').default|null} map Map.
     * @override
     */
    setMap(map) {
      this.ctrlKeyListenerKeys_.forEach(unlistenByKey);
      this.ctrlKeyListenerKeys_.length = 0;
      this.ctrlKeyPressed_ = false;
      super.setMap(map);
      if (map) {
        const doc = map.getOwnerDocument();
        this.ctrlKeyListenerKeys_.push(
          listen(doc, "keydown", (e) => {
            if (e.key === "Control") {
              this.ctrlKeyPressed_ = true;
            }
          }),
          listen(doc, "keyup", (e) => {
            if (e.key === "Control") {
              this.ctrlKeyPressed_ = false;
            }
          })
        );
      }
    }
    /**
     * @private
     */
    endInteraction_() {
      this.trackpadTimeoutId_ = void 0;
      const map = this.getMap();
      if (!map) {
        return;
      }
      const view = map.getView();
      const direction = this.lastDelta_ ? this.lastDelta_ > 0 ? 1 : -1 : 0;
      view.endInteraction(
        this.constrainResolution_ || view.getConstrainResolution() ? 100 : void 0,
        direction,
        this.lastAnchor_ ? map.getCoordinateFromPixel(this.lastAnchor_) : null
      );
    }
    /**
     * Handles the {@link module:ol/MapBrowserEvent~MapBrowserEvent map browser event} (if it was a mousewheel-event) and eventually
     * zooms the map.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Map browser event.
     * @return {boolean} `false` to stop event propagation.
     * @override
     */
    handleEvent(mapBrowserEvent) {
      if (!this.condition_(mapBrowserEvent)) {
        return true;
      }
      const type = mapBrowserEvent.type;
      if (type !== EventType_default.WHEEL) {
        return true;
      }
      const map = mapBrowserEvent.map;
      const wheelEvent = (
        /** @type {WheelEvent} */
        mapBrowserEvent.originalEvent
      );
      wheelEvent.preventDefault();
      const isPinchToZoom = wheelEvent.ctrlKey && !this.ctrlKeyPressed_;
      if (!wheelEvent.ctrlKey) {
        this.ctrlKeyPressed_ = false;
      }
      if (this.useAnchor_) {
        this.lastAnchor_ = mapBrowserEvent.pixel;
      }
      let delta = wheelEvent.deltaY;
      switch (wheelEvent.deltaMode) {
        case WheelEvent.DOM_DELTA_LINE:
          delta *= DELTA_LINE_MULTIPLIER;
          break;
        case WheelEvent.DOM_DELTA_PAGE:
          delta *= DELTA_PAGE_MULTIPLIER;
          break;
        default:
      }
      if (delta === 0) {
        return false;
      }
      this.lastDelta_ = delta;
      const now = Date.now();
      if (this.startTime_ === void 0) {
        this.startTime_ = now;
      }
      if (!this.mode_ || now - this.startTime_ > this.trackpadEventGap_) {
        this.mode_ = Math.abs(delta) < 4 ? "trackpad" : "wheel";
      }
      const view = map.getView();
      if (this.mode_ === "trackpad") {
        if (this.trackpadTimeoutId_) {
          clearTimeout(this.trackpadTimeoutId_);
        } else {
          if (view.getAnimating()) {
            view.cancelAnimations();
          }
          view.beginInteraction();
        }
        this.trackpadTimeoutId_ = setTimeout(
          this.endInteraction_.bind(this),
          this.timeout_
        );
        if (isPinchToZoom) {
          delta = delta * DELTA_TRACKPAD_PINCH_TO_ZOOM_MULTIPLIER;
        }
        view.adjustZoom(
          -delta / this.deltaPerZoom_,
          this.lastAnchor_ ? map.getCoordinateFromPixel(this.lastAnchor_) : null
        );
        this.startTime_ = now;
        return false;
      }
      this.totalDelta_ += delta;
      const timeLeft = Math.max(this.timeout_ - (now - this.startTime_), 0);
      clearTimeout(this.timeoutId_);
      this.timeoutId_ = setTimeout(
        this.handleWheelZoom_.bind(this, map),
        timeLeft
      );
      return false;
    }
    /**
     * @private
     * @param {import("../Map.js").default} map Map.
     */
    handleWheelZoom_(map) {
      const view = map.getView();
      if (view.getAnimating()) {
        view.cancelAnimations();
      }
      let delta = -clamp(
        this.totalDelta_,
        -this.maxDelta_ * this.deltaPerZoom_,
        this.maxDelta_ * this.deltaPerZoom_
      ) / this.deltaPerZoom_;
      if (view.getConstrainResolution() || this.constrainResolution_) {
        delta = delta ? delta > 0 ? 1 : -1 : 0;
      }
      zoomByDelta(
        view,
        delta,
        this.lastAnchor_ ? map.getCoordinateFromPixel(this.lastAnchor_) : null,
        this.duration_
      );
      this.mode_ = void 0;
      this.totalDelta_ = 0;
      this.lastAnchor_ = null;
      this.startTime_ = void 0;
      this.timeoutId_ = void 0;
    }
    /**
     * Enable or disable using the mouse's location as an anchor when zooming
     * @param {boolean} useAnchor true to zoom to the mouse's location, false
     * to zoom to the center of the map
     * @api
     */
    setMouseAnchor(useAnchor) {
      this.useAnchor_ = useAnchor;
      if (!useAnchor) {
        this.lastAnchor_ = null;
      }
    }
  };
  var MouseWheelZoom_default = MouseWheelZoom;

  // node_modules/ol/interaction/PinchRotate.js
  var PinchRotate = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      const pointerOptions = (
        /** @type {import("./Pointer.js").Options} */
        options
      );
      if (!pointerOptions.stopDown) {
        pointerOptions.stopDown = FALSE;
      }
      super(pointerOptions);
      this.anchor_ = null;
      this.lastAngle_ = void 0;
      this.rotating_ = false;
      this.rotationDelta_ = 0;
      this.threshold_ = options.threshold !== void 0 ? options.threshold : 0.3;
      this.duration_ = options.duration !== void 0 ? options.duration : 250;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      let rotationDelta = 0;
      const touch0 = this.targetPointers[0];
      const touch1 = this.targetPointers[1];
      const angle = Math.atan2(
        touch1.clientY - touch0.clientY,
        touch1.clientX - touch0.clientX
      );
      if (this.lastAngle_ !== void 0) {
        const delta = angle - this.lastAngle_;
        this.rotationDelta_ += delta;
        if (!this.rotating_ && Math.abs(this.rotationDelta_) > this.threshold_) {
          this.rotating_ = true;
        }
        rotationDelta = delta;
      }
      this.lastAngle_ = angle;
      const map = mapBrowserEvent.map;
      const view = map.getView();
      if (view.getConstraints().rotation === disable) {
        return;
      }
      this.anchor_ = map.getCoordinateFromPixelInternal(
        map.getEventPixel(centroid(this.targetPointers))
      );
      if (this.rotating_) {
        map.render();
        view.adjustRotationInternal(rotationDelta, this.anchor_);
      }
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      if (this.targetPointers.length < 2) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        view.endInteraction(this.duration_);
        return false;
      }
      return true;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (this.targetPointers.length >= 2) {
        const map = mapBrowserEvent.map;
        this.anchor_ = null;
        this.lastAngle_ = void 0;
        this.rotating_ = false;
        this.rotationDelta_ = 0;
        if (!this.handlingDownUpSequence) {
          map.getView().beginInteraction();
        }
        return true;
      }
      return false;
    }
  };
  var PinchRotate_default = PinchRotate;

  // node_modules/ol/interaction/PinchZoom.js
  var PinchZoom = class extends Pointer_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      const pointerOptions = (
        /** @type {import("./Pointer.js").Options} */
        options
      );
      if (!pointerOptions.stopDown) {
        pointerOptions.stopDown = FALSE;
      }
      super(pointerOptions);
      this.anchor_ = null;
      this.duration_ = options.duration !== void 0 ? options.duration : 400;
      this.lastDistance_ = void 0;
      this.lastScaleDelta_ = 1;
    }
    /**
     * Handle pointer drag events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @override
     */
    handleDragEvent(mapBrowserEvent) {
      let scaleDelta = 1;
      const touch0 = this.targetPointers[0];
      const touch1 = this.targetPointers[1];
      const dx = touch0.clientX - touch1.clientX;
      const dy = touch0.clientY - touch1.clientY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      if (this.lastDistance_ !== void 0) {
        scaleDelta = this.lastDistance_ / distance;
      }
      this.lastDistance_ = distance;
      const map = mapBrowserEvent.map;
      const view = map.getView();
      if (scaleDelta != 1) {
        this.lastScaleDelta_ = scaleDelta;
      }
      this.anchor_ = map.getCoordinateFromPixelInternal(
        map.getEventPixel(centroid(this.targetPointers))
      );
      map.render();
      view.adjustResolutionInternal(scaleDelta, this.anchor_);
    }
    /**
     * Handle pointer up events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleUpEvent(mapBrowserEvent) {
      if (this.targetPointers.length < 2) {
        const map = mapBrowserEvent.map;
        const view = map.getView();
        const direction = this.lastScaleDelta_ > 1 ? 1 : -1;
        view.endInteraction(this.duration_, direction);
        return false;
      }
      return true;
    }
    /**
     * Handle pointer down events.
     * @param {import("../MapBrowserEvent.js").default} mapBrowserEvent Event.
     * @return {boolean} If the event was consumed.
     * @override
     */
    handleDownEvent(mapBrowserEvent) {
      if (this.targetPointers.length >= 2) {
        const map = mapBrowserEvent.map;
        this.anchor_ = null;
        this.lastDistance_ = void 0;
        this.lastScaleDelta_ = 1;
        if (!this.handlingDownUpSequence) {
          map.getView().beginInteraction();
        }
        return true;
      }
      return false;
    }
  };
  var PinchZoom_default = PinchZoom;

  // node_modules/ol/interaction/defaults.js
  function defaults2(options) {
    options = options ? options : {};
    const interactions = new Collection_default();
    const kinetic = new Kinetic_default(-5e-3, 0.05, 100);
    const altShiftDragRotate = options.altShiftDragRotate !== void 0 ? options.altShiftDragRotate : true;
    if (altShiftDragRotate) {
      interactions.push(new DragRotate_default());
    }
    const doubleClickZoom = options.doubleClickZoom !== void 0 ? options.doubleClickZoom : true;
    if (doubleClickZoom) {
      interactions.push(
        new DoubleClickZoom_default({
          delta: options.zoomDelta,
          duration: options.zoomDuration
        })
      );
    }
    const dragPan = options.dragPan !== void 0 ? options.dragPan : true;
    if (dragPan) {
      interactions.push(
        new DragPan_default({
          onFocusOnly: options.onFocusOnly,
          kinetic
        })
      );
    }
    const pinchRotate = options.pinchRotate !== void 0 ? options.pinchRotate : true;
    if (pinchRotate) {
      interactions.push(new PinchRotate_default());
    }
    const pinchZoom = options.pinchZoom !== void 0 ? options.pinchZoom : true;
    if (pinchZoom) {
      interactions.push(
        new PinchZoom_default({
          duration: options.zoomDuration
        })
      );
    }
    const keyboard = options.keyboard !== void 0 ? options.keyboard : true;
    if (keyboard) {
      interactions.push(new KeyboardPan_default());
      interactions.push(
        new KeyboardZoom_default({
          delta: options.zoomDelta,
          duration: options.zoomDuration
        })
      );
    }
    const mouseWheelZoom = options.mouseWheelZoom !== void 0 ? options.mouseWheelZoom : true;
    if (mouseWheelZoom) {
      interactions.push(
        new MouseWheelZoom_default({
          onFocusOnly: options.onFocusOnly,
          duration: options.zoomDuration
        })
      );
    }
    const shiftDragZoom = options.shiftDragZoom !== void 0 ? options.shiftDragZoom : true;
    if (shiftDragZoom) {
      interactions.push(
        new DragZoom_default({
          duration: options.zoomDuration
        })
      );
    }
    return interactions;
  }

  // node_modules/ol/layer/Property.js
  var Property_default2 = {
    OPACITY: "opacity",
    VISIBLE: "visible",
    EXTENT: "extent",
    Z_INDEX: "zIndex",
    MAX_RESOLUTION: "maxResolution",
    MIN_RESOLUTION: "minResolution",
    MAX_ZOOM: "maxZoom",
    MIN_ZOOM: "minZoom",
    SOURCE: "source",
    MAP: "map"
  };

  // node_modules/ol/layer/Base.js
  var BaseLayer = class extends Object_default {
    /**
     * @param {Options<NoInfer<Properties>>} options Layer options.
     */
    constructor(options) {
      super();
      this.on;
      this.once;
      this.un;
      this.background_ = options.background;
      const properties = Object.assign({}, options);
      if (typeof options.properties === "object") {
        delete properties.properties;
        Object.assign(properties, options.properties);
      }
      properties[Property_default2.OPACITY] = options.opacity !== void 0 ? options.opacity : 1;
      assert(
        typeof properties[Property_default2.OPACITY] === "number",
        "Layer opacity must be a number"
      );
      properties[Property_default2.VISIBLE] = options.visible !== void 0 ? options.visible : true;
      properties[Property_default2.Z_INDEX] = options.zIndex;
      properties[Property_default2.MAX_RESOLUTION] = options.maxResolution !== void 0 ? options.maxResolution : Infinity;
      properties[Property_default2.MIN_RESOLUTION] = options.minResolution !== void 0 ? options.minResolution : 0;
      properties[Property_default2.MIN_ZOOM] = options.minZoom !== void 0 ? options.minZoom : -Infinity;
      properties[Property_default2.MAX_ZOOM] = options.maxZoom !== void 0 ? options.maxZoom : Infinity;
      this.className_ = properties.className !== void 0 ? properties.className : "ol-layer";
      delete properties.className;
      this.setProperties(properties);
      this.state_ = null;
    }
    /**
     * Get the background for this layer.
     * @return {BackgroundColor|false} Layer background.
     */
    getBackground() {
      return this.background_;
    }
    /**
     * @return {string} CSS class name.
     */
    getClassName() {
      return this.className_;
    }
    /**
     * This method is not meant to be called by layers or layer renderers because the state
     * is incorrect if the layer is included in a layer group.
     *
     * @param {boolean} [managed] Layer is managed.
     * @return {import("./Layer.js").State} Layer state.
     */
    getLayerState(managed) {
      const state = this.state_ || /** @type {?} */
      {
        layer: this,
        managed: managed === void 0 ? true : managed
      };
      const zIndex = this.getZIndex();
      state.opacity = clamp(Math.round(this.getOpacity() * 100) / 100, 0, 1);
      state.visible = this.getVisible();
      state.extent = this.getExtent();
      state.zIndex = zIndex === void 0 && !state.managed ? Infinity : zIndex;
      state.maxResolution = this.getMaxResolution();
      state.minResolution = Math.max(this.getMinResolution(), 0);
      state.minZoom = this.getMinZoom();
      state.maxZoom = this.getMaxZoom();
      this.state_ = state;
      return state;
    }
    /**
     * @abstract
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be
     *     modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     */
    getLayersArray(array) {
      return abstract();
    }
    /**
     * @abstract
     * @param {Array<import("./Layer.js").State>} [states] Optional list of layer
     *     states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     */
    getLayerStatesArray(states) {
      return abstract();
    }
    /**
     * Return the {@link module:ol/extent~Extent extent} of the layer or `undefined` if it
     * will be visible regardless of extent.
     * @return {import("../extent.js").Extent|undefined} The layer extent.
     * @observable
     * @api
     */
    getExtent() {
      return (
        /** @type {import("../extent.js").Extent|undefined} */
        this.get(Property_default2.EXTENT)
      );
    }
    /**
     * Return the maximum resolution of the layer. Returns Infinity if
     * the layer has no maximum resolution set.
     * @return {number} The maximum resolution of the layer.
     * @observable
     * @api
     */
    getMaxResolution() {
      return (
        /** @type {number} */
        this.get(Property_default2.MAX_RESOLUTION)
      );
    }
    /**
     * Return the minimum resolution of the layer. Returns 0 if
     * the layer has no minimum resolution set.
     * @return {number} The minimum resolution of the layer.
     * @observable
     * @api
     */
    getMinResolution() {
      return (
        /** @type {number} */
        this.get(Property_default2.MIN_RESOLUTION)
      );
    }
    /**
     * Return the minimum zoom level of the layer. Returns -Infinity if
     * the layer has no minimum zoom set.
     * @return {number} The minimum zoom level of the layer.
     * @observable
     * @api
     */
    getMinZoom() {
      return (
        /** @type {number} */
        this.get(Property_default2.MIN_ZOOM)
      );
    }
    /**
     * Return the maximum zoom level of the layer. Returns Infinity if
     * the layer has no maximum zoom set.
     * @return {number} The maximum zoom level of the layer.
     * @observable
     * @api
     */
    getMaxZoom() {
      return (
        /** @type {number} */
        this.get(Property_default2.MAX_ZOOM)
      );
    }
    /**
     * Return the opacity of the layer (between 0 and 1).
     * @return {number} The opacity of the layer.
     * @observable
     * @api
     */
    getOpacity() {
      return (
        /** @type {number} */
        this.get(Property_default2.OPACITY)
      );
    }
    /**
     * @abstract
     * @return {import("../source/Source.js").State} Source state.
     */
    getSourceState() {
      return abstract();
    }
    /**
     * Return the value of this layer's `visible` property. To find out whether the layer
     * is visible on a map, use `isVisible()` instead.
     * @return {boolean} The value of the `visible` property of the layer.
     * @observable
     * @api
     */
    getVisible() {
      return (
        /** @type {boolean} */
        this.get(Property_default2.VISIBLE)
      );
    }
    /**
     * Return the Z-index of the layer, which is used to order layers before
     * rendering. Returns undefined if the layer is unmanaged.
     * @return {number|undefined} The Z-index of the layer.
     * @observable
     * @api
     */
    getZIndex() {
      return (
        /** @type {number|undefined} */
        this.get(Property_default2.Z_INDEX)
      );
    }
    /**
     * Sets the background color.
     * @param {BackgroundColor} [background] Background color.
     */
    setBackground(background) {
      this.background_ = background;
      this.changed();
    }
    /**
     * Set the extent at which the layer is visible.  If `undefined`, the layer
     * will be visible at all extents.
     * @param {import("../extent.js").Extent|undefined} extent The extent of the layer.
     * @observable
     * @api
     */
    setExtent(extent) {
      this.set(Property_default2.EXTENT, extent);
    }
    /**
     * Set the maximum resolution at which the layer is visible.
     * @param {number} maxResolution The maximum resolution of the layer.
     * @observable
     * @api
     */
    setMaxResolution(maxResolution) {
      this.set(Property_default2.MAX_RESOLUTION, maxResolution);
    }
    /**
     * Set the minimum resolution at which the layer is visible.
     * @param {number} minResolution The minimum resolution of the layer.
     * @observable
     * @api
     */
    setMinResolution(minResolution) {
      this.set(Property_default2.MIN_RESOLUTION, minResolution);
    }
    /**
     * Set the maximum zoom (exclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} maxZoom The maximum zoom of the layer.
     * @observable
     * @api
     */
    setMaxZoom(maxZoom) {
      this.set(Property_default2.MAX_ZOOM, maxZoom);
    }
    /**
     * Set the minimum zoom (inclusive) at which the layer is visible.
     * Note that the zoom levels for layer visibility are based on the
     * view zoom level, which may be different from a tile source zoom level.
     * @param {number} minZoom The minimum zoom of the layer.
     * @observable
     * @api
     */
    setMinZoom(minZoom) {
      this.set(Property_default2.MIN_ZOOM, minZoom);
    }
    /**
     * Set the opacity of the layer, allowed values range from 0 to 1.
     * @param {number} opacity The opacity of the layer.
     * @observable
     * @api
     */
    setOpacity(opacity) {
      assert(typeof opacity === "number", "Layer opacity must be a number");
      this.set(Property_default2.OPACITY, opacity);
    }
    /**
     * Set the visibility of the layer (`true` or `false`).
     * @param {boolean} visible The visibility of the layer.
     * @observable
     * @api
     */
    setVisible(visible) {
      this.set(Property_default2.VISIBLE, visible);
    }
    /**
     * Set Z-index of the layer, which is used to order layers before rendering.
     * The default Z-index is 0.
     * @param {number} zindex The z-index of the layer.
     * @observable
     * @api
     */
    setZIndex(zindex) {
      this.set(Property_default2.Z_INDEX, zindex);
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      if (this.state_) {
        this.state_.layer = null;
        this.state_ = null;
      }
      super.disposeInternal();
    }
  };
  var Base_default = BaseLayer;

  // node_modules/ol/layer/Group.js
  var GroupEventType = {
    /**
     * Triggered when a layer is added
     * @event GroupEvent#addlayer
     * @api
     */
    ADDLAYER: "addlayer",
    /**
     * Triggered when a layer is removed
     * @event GroupEvent#removelayer
     * @api
     */
    REMOVELAYER: "removelayer"
  };
  var GroupEvent = class extends Event_default {
    /**
     * @param {GroupEventType} type The event type.
     * @param {BaseLayer} layer The layer.
     */
    constructor(type, layer) {
      super(type);
      this.layer = layer;
    }
  };
  var Property2 = {
    LAYERS: "layers"
  };
  var LayerGroup = class _LayerGroup extends Base_default {
    /**
     * @param {Options} [options] Layer options.
     */
    constructor(options) {
      options = options || {};
      const baseOptions = (
        /** @type {Options} */
        Object.assign({}, options)
      );
      delete baseOptions.layers;
      let layers = options.layers;
      super(baseOptions);
      this.on;
      this.once;
      this.un;
      this.layersListenerKeys_ = [];
      this.listenerKeys_ = {};
      this.addChangeListener(Property2.LAYERS, this.handleLayersChanged_);
      if (layers) {
        if (Array.isArray(layers)) {
          layers = new Collection_default(layers.slice(), { unique: true });
        } else {
          assert(
            typeof /** @type {?} */
            layers.getArray === "function",
            "Expected `layers` to be an array or a `Collection`"
          );
        }
      } else {
        layers = new Collection_default(void 0, { unique: true });
      }
      this.setLayers(layers);
    }
    /**
     * @private
     */
    handleLayerChange_() {
      this.changed();
    }
    /**
     * @private
     */
    handleLayersChanged_() {
      this.layersListenerKeys_.forEach(unlistenByKey);
      this.layersListenerKeys_.length = 0;
      const layers = this.getLayers();
      this.layersListenerKeys_.push(
        listen(layers, CollectionEventType_default.ADD, this.handleLayersAdd_, this),
        listen(
          layers,
          CollectionEventType_default.REMOVE,
          this.handleLayersRemove_,
          this
        )
      );
      for (const id in this.listenerKeys_) {
        this.listenerKeys_[id].forEach(unlistenByKey);
      }
      clear(this.listenerKeys_);
      const layersArray = layers.getArray();
      for (let i = 0, ii = layersArray.length; i < ii; i++) {
        const layer = layersArray[i];
        this.registerLayerListeners_(layer);
        this.dispatchEvent(new GroupEvent(GroupEventType.ADDLAYER, layer));
      }
      this.changed();
    }
    /**
     * @param {BaseLayer} layer The layer.
     */
    registerLayerListeners_(layer) {
      const listenerKeys = [
        listen(
          layer,
          ObjectEventType_default.PROPERTYCHANGE,
          this.handleLayerChange_,
          this
        ),
        listen(layer, EventType_default.CHANGE, this.handleLayerChange_, this)
      ];
      if (layer instanceof _LayerGroup) {
        listenerKeys.push(
          listen(layer, GroupEventType.ADDLAYER, this.handleLayerGroupAdd_, this),
          listen(
            layer,
            GroupEventType.REMOVELAYER,
            this.handleLayerGroupRemove_,
            this
          )
        );
      }
      this.listenerKeys_[getUid(layer)] = listenerKeys;
    }
    /**
     * @param {GroupEvent} event The layer group event.
     */
    handleLayerGroupAdd_(event) {
      this.dispatchEvent(new GroupEvent(GroupEventType.ADDLAYER, event.layer));
    }
    /**
     * @param {GroupEvent} event The layer group event.
     */
    handleLayerGroupRemove_(event) {
      this.dispatchEvent(new GroupEvent(GroupEventType.REMOVELAYER, event.layer));
    }
    /**
     * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
     * @private
     */
    handleLayersAdd_(collectionEvent) {
      const layer = collectionEvent.element;
      this.registerLayerListeners_(layer);
      this.dispatchEvent(new GroupEvent(GroupEventType.ADDLAYER, layer));
      this.changed();
    }
    /**
     * @param {import("../Collection.js").CollectionEvent<import("./Base.js").default>} collectionEvent CollectionEvent.
     * @private
     */
    handleLayersRemove_(collectionEvent) {
      const layer = collectionEvent.element;
      const key = getUid(layer);
      this.listenerKeys_[key].forEach(unlistenByKey);
      delete this.listenerKeys_[key];
      this.dispatchEvent(new GroupEvent(GroupEventType.REMOVELAYER, layer));
      this.changed();
    }
    /**
     * Returns the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @return {!Collection<import("./Base.js").default>} Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */
    getLayers() {
      return (
        /** @type {!Collection<import("./Base.js").default>} */
        this.get(Property2.LAYERS)
      );
    }
    /**
     * Set the {@link module:ol/Collection~Collection collection} of {@link module:ol/layer/Layer~Layer layers}
     * in this group.
     * @param {!Collection<import("./Base.js").default>} layers Collection of
     *   {@link module:ol/layer/Base~BaseLayer layers} that are part of this group.
     * @observable
     * @api
     */
    setLayers(layers) {
      const collection = this.getLayers();
      if (collection) {
        const currentLayers = collection.getArray();
        for (let i = 0, ii = currentLayers.length; i < ii; ++i) {
          this.dispatchEvent(
            new GroupEvent(GroupEventType.REMOVELAYER, currentLayers[i])
          );
        }
      }
      this.set(Property2.LAYERS, layers);
    }
    /**
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     * @override
     */
    getLayersArray(array) {
      array = array !== void 0 ? array : [];
      this.getLayers().forEach(function(layer) {
        layer.getLayersArray(array);
      });
      return array;
    }
    /**
     * Get the layer states list and use this groups z-index as the default
     * for all layers in this and nested groups, if it is unset at this point.
     * If dest is not provided and this group's z-index is undefined
     * 0 is used a the default z-index.
     * @param {Array<import("./Layer.js").State>} [dest] Optional list
     * of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     * @override
     */
    getLayerStatesArray(dest) {
      const states = dest !== void 0 ? dest : [];
      const pos = states.length;
      this.getLayers().forEach(function(layer) {
        layer.getLayerStatesArray(states);
      });
      const ownLayerState = this.getLayerState();
      let defaultZIndex = ownLayerState.zIndex;
      if (!dest && ownLayerState.zIndex === void 0) {
        defaultZIndex = 0;
      }
      for (let i = pos, ii = states.length; i < ii; i++) {
        const layerState = states[i];
        layerState.opacity *= ownLayerState.opacity;
        layerState.visible = layerState.visible && ownLayerState.visible;
        layerState.maxResolution = Math.min(
          layerState.maxResolution,
          ownLayerState.maxResolution
        );
        layerState.minResolution = Math.max(
          layerState.minResolution,
          ownLayerState.minResolution
        );
        layerState.minZoom = Math.max(layerState.minZoom, ownLayerState.minZoom);
        layerState.maxZoom = Math.min(layerState.maxZoom, ownLayerState.maxZoom);
        if (ownLayerState.extent !== void 0) {
          if (layerState.extent !== void 0) {
            layerState.extent = getIntersection(
              layerState.extent,
              ownLayerState.extent
            );
          } else {
            layerState.extent = ownLayerState.extent;
          }
        }
        if (layerState.zIndex === void 0) {
          layerState.zIndex = defaultZIndex;
        }
      }
      return states;
    }
    /**
     * @return {import("../source/Source.js").State} Source state.
     * @override
     */
    getSourceState() {
      return "ready";
    }
  };
  var Group_default = LayerGroup;

  // node_modules/ol/render/EventType.js
  var EventType_default3 = {
    /**
     * Triggered before a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#prerender
     * @api
     */
    PRERENDER: "prerender",
    /**
     * Triggered after a layer is rendered.
     * @event module:ol/render/Event~RenderEvent#postrender
     * @api
     */
    POSTRENDER: "postrender",
    /**
     * Triggered before layers are composed.  When dispatched by the map, the event object will not have
     * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
     * WebGL layers currently dispatch this event.
     * @event module:ol/render/Event~RenderEvent#precompose
     * @api
     */
    PRECOMPOSE: "precompose",
    /**
     * Triggered after layers are composed.  When dispatched by the map, the event object will not have
     * a `context` set.  When dispatched by a layer, the event object will have a `context` set.  Only
     * WebGL layers currently dispatch this event.
     * @event module:ol/render/Event~RenderEvent#postcompose
     * @api
     */
    POSTCOMPOSE: "postcompose",
    /**
     * Triggered when rendering is complete, i.e. all sources and tiles have
     * finished loading for the current viewport, and all tiles are faded in.
     * The event object will not have a `context` set.
     * @event module:ol/render/Event~RenderEvent#rendercomplete
     * @api
     */
    RENDERCOMPLETE: "rendercomplete"
  };

  // node_modules/ol/layer/Layer.js
  var Layer = class extends Base_default {
    /**
     * @param {Options<SourceType, NoInfer<Properties>>} options Layer options.
     */
    constructor(options) {
      const baseOptions = Object.assign({}, options);
      delete baseOptions.source;
      super(baseOptions);
      this.on;
      this.once;
      this.un;
      this.mapPrecomposeKey_ = null;
      this.mapRenderKey_ = null;
      this.sourceChangeKey_ = null;
      this.renderer_ = null;
      this.sourceReady_ = false;
      this.rendered = false;
      if (options.render) {
        this.render = options.render;
      }
      if (options.map) {
        this.setMap(options.map);
      }
      this.addChangeListener(
        Property_default2.SOURCE,
        this.handleSourcePropertyChange_
      );
      const source = options.source ? (
        /** @type {SourceType} */
        options.source
      ) : null;
      this.setSource(source);
    }
    /**
     * @param {Array<import("./Layer.js").default>} [array] Array of layers (to be modified in place).
     * @return {Array<import("./Layer.js").default>} Array of layers.
     * @override
     */
    getLayersArray(array) {
      array = array ? array : [];
      array.push(this);
      return array;
    }
    /**
     * @param {Array<import("./Layer.js").State>} [states] Optional list of layer states (to be modified in place).
     * @return {Array<import("./Layer.js").State>} List of layer states.
     * @override
     */
    getLayerStatesArray(states) {
      states = states ? states : [];
      states.push(this.getLayerState());
      return states;
    }
    /**
     * Get the layer source.
     * @return {SourceType|null} The layer source (or `null` if not yet set).
     * @observable
     * @api
     */
    getSource() {
      return (
        /** @type {SourceType} */
        this.get(Property_default2.SOURCE) || null
      );
    }
    /**
     * @return {SourceType|null} The source being rendered.
     */
    getRenderSource() {
      return this.getSource();
    }
    /**
     * @return {import("../source/Source.js").State} Source state.
     * @override
     */
    getSourceState() {
      const source = this.getSource();
      return !source ? "undefined" : source.getState();
    }
    /**
     * @private
     */
    handleSourceChange_() {
      this.changed();
      if (this.sourceReady_ || this.getSource().getState() !== "ready") {
        return;
      }
      this.sourceReady_ = true;
      this.dispatchEvent("sourceready");
    }
    /**
     * @private
     */
    handleSourcePropertyChange_() {
      if (this.sourceChangeKey_) {
        unlistenByKey(this.sourceChangeKey_);
        this.sourceChangeKey_ = null;
      }
      this.sourceReady_ = false;
      const source = this.getSource();
      if (source) {
        this.sourceChangeKey_ = listen(
          source,
          EventType_default.CHANGE,
          this.handleSourceChange_,
          this
        );
        if (source.getState() === "ready") {
          this.sourceReady_ = true;
          setTimeout(() => {
            this.dispatchEvent("sourceready");
          }, 0);
        }
      }
      this.changed();
    }
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature.js").FeatureLike>>} Promise that resolves with
     * an array of features.
     */
    getFeatures(pixel) {
      if (!this.renderer_) {
        return Promise.resolve([]);
      }
      return this.renderer_.getFeatures(pixel);
    }
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     */
    getData(pixel) {
      if (!this.renderer_ || !this.rendered) {
        return null;
      }
      return this.renderer_.getData(pixel);
    }
    /**
     * The layer is visible on the map view, i.e. within its min/max resolution or zoom and
     * extent, not set to `visible: false`, and not inside a layer group that is set
     * to `visible: false`.
     * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
     * Only required when the layer is not added to a map.
     * @return {boolean} The layer is visible in the map view.
     * @api
     */
    isVisible(view) {
      let frameState;
      const map = this.getMapInternal();
      if (!view && map) {
        view = map.getView();
      }
      if (view instanceof View_default) {
        frameState = {
          viewState: view.getState(),
          extent: view.calculateExtent()
        };
      } else {
        frameState = view;
      }
      if (!frameState.layerStatesArray && map) {
        frameState.layerStatesArray = map.getLayerGroup().getLayerStatesArray();
      }
      let layerState;
      if (frameState.layerStatesArray) {
        layerState = frameState.layerStatesArray.find(
          (layerState2) => layerState2.layer === this
        );
        if (!layerState) {
          return false;
        }
      } else {
        layerState = this.getLayerState();
      }
      const layerExtent = this.getExtent();
      return inView(layerState, frameState.viewState) && (!layerExtent || intersects(layerExtent, frameState.extent));
    }
    /**
     * Get the attributions of the source of this layer for the given view.
     * @param {View|import("../View.js").ViewStateLayerStateExtent} [view] View or {@link import("../Map.js").FrameState}.
     * Only required when the layer is not added to a map.
     * @return {Array<string>} Attributions for this layer at the given view.
     * @api
     */
    getAttributions(view) {
      if (!this.isVisible(view)) {
        return [];
      }
      const getAttributions = this.getSource()?.getAttributions();
      if (!getAttributions) {
        return [];
      }
      const frameState = view instanceof View_default ? view.getViewStateAndExtent() : view;
      let attributions = getAttributions(frameState);
      if (!Array.isArray(attributions)) {
        attributions = [attributions];
      }
      return attributions;
    }
    /**
     * In charge to manage the rendering of the layer. One layer type is
     * bounded with one layer renderer.
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target which the renderer may (but need not) use
     * for rendering its content.
     * @return {HTMLElement|null} The rendered element.
     */
    render(frameState, target) {
      const layerRenderer = this.getRenderer();
      if (layerRenderer.prepareFrame(frameState)) {
        this.rendered = true;
        return layerRenderer.renderFrame(frameState, target);
      }
      return null;
    }
    /**
     * Called when a layer is not visible during a map render.
     */
    unrender() {
      this.rendered = false;
    }
    /** @return {string} Declutter */
    getDeclutter() {
      return void 0;
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {import("../layer/Layer.js").State} layerState Layer state.
     */
    renderDeclutter(frameState, layerState) {
    }
    /**
     * When the renderer follows a layout -> render approach, do the final rendering here.
     * @param {import('../Map.js').FrameState} frameState Frame state
     */
    renderDeferred(frameState) {
      const layerRenderer = this.getRenderer();
      if (!layerRenderer) {
        return;
      }
      layerRenderer.renderDeferred(frameState);
    }
    /**
     * For use inside the library only.
     * @param {import("../Map.js").default|null} map Map.
     */
    setMapInternal(map) {
      if (!map) {
        this.unrender();
      }
      this.set(Property_default2.MAP, map);
    }
    /**
     * For use inside the library only.
     * @return {import("../Map.js").default|null} Map.
     */
    getMapInternal() {
      return this.get(Property_default2.MAP);
    }
    /**
     * Sets the layer to be rendered on top of other layers on a map. The map will
     * not manage this layer in its layers collection. This
     * is useful for temporary layers. To remove an unmanaged layer from the map,
     * use `#setMap(null)`.
     *
     * To add the layer to a map and have it managed by the map, use
     * {@link module:ol/Map~Map#addLayer} instead.
     * @param {import("../Map.js").default|null} map Map.
     * @api
     */
    setMap(map) {
      if (this.mapPrecomposeKey_) {
        unlistenByKey(this.mapPrecomposeKey_);
        this.mapPrecomposeKey_ = null;
      }
      if (!map) {
        this.changed();
      }
      if (this.mapRenderKey_) {
        unlistenByKey(this.mapRenderKey_);
        this.mapRenderKey_ = null;
      }
      if (map) {
        this.mapPrecomposeKey_ = listen(
          map,
          EventType_default3.PRECOMPOSE,
          this.handlePrecompose_,
          this
        );
        this.mapRenderKey_ = listen(this, EventType_default.CHANGE, map.render, map);
        this.changed();
      }
    }
    /**
     * @param {import("../events/Event.js").default} renderEvent Render event
     * @private
     */
    handlePrecompose_(renderEvent) {
      const layerStatesArray = (
        /** @type {import("../render/Event.js").default} */
        renderEvent.frameState.layerStatesArray
      );
      const layerState = this.getLayerState(false);
      assert(
        !layerStatesArray.some(
          (arrayLayerState) => arrayLayerState.layer === layerState.layer
        ),
        "A layer can only be added to the map once. Use either `layer.setMap()` or `map.addLayer()`, not both."
      );
      layerStatesArray.push(layerState);
    }
    /**
     * Set the layer source.
     * @param {SourceType|null} source The layer source.
     * @observable
     * @api
     */
    setSource(source) {
      this.set(Property_default2.SOURCE, source);
    }
    /**
     * Get the renderer for this layer.
     * @return {RendererType|null} The layer renderer.
     */
    getRenderer() {
      if (!this.renderer_) {
        this.renderer_ = this.createRenderer();
      }
      return this.renderer_;
    }
    /**
     * @return {boolean} The layer has a renderer.
     */
    hasRenderer() {
      return !!this.renderer_;
    }
    /**
     * Create a renderer for this layer.
     * @return {RendererType} A layer renderer.
     * @protected
     */
    createRenderer() {
      return null;
    }
    /**
     * This will clear the renderer so that a new one can be created next time it is needed
     */
    clearRenderer() {
      if (this.renderer_) {
        this.renderer_.dispose();
        delete this.renderer_;
      }
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.clearRenderer();
      this.setSource(null);
      super.disposeInternal();
    }
  };
  function inView(layerState, viewState) {
    if (!layerState.visible) {
      return false;
    }
    const resolution = viewState.resolution;
    if (resolution < layerState.minResolution || resolution >= layerState.maxResolution) {
      return false;
    }
    const zoom = viewState.zoom;
    return zoom > layerState.minZoom && zoom <= layerState.maxZoom;
  }
  var Layer_default = Layer;

  // node_modules/quickselect/index.js
  function quickselect(arr, k, left = 0, right = arr.length - 1, compare = defaultCompare) {
    while (right > left) {
      if (right - left > 600) {
        const n = right - left + 1;
        const m = k - left + 1;
        const z = Math.log(n);
        const s = 0.5 * Math.exp(2 * z / 3);
        const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
        const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
        const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
        quickselect(arr, k, newLeft, newRight, compare);
      }
      const t = arr[k];
      let i = left;
      let j = right;
      swap(arr, left, k);
      if (compare(arr[right], t) > 0) swap(arr, left, right);
      while (i < j) {
        swap(arr, i, j);
        i++;
        j--;
        while (compare(arr[i], t) < 0) i++;
        while (compare(arr[j], t) > 0) j--;
      }
      if (compare(arr[left], t) === 0) swap(arr, left, j);
      else {
        j++;
        swap(arr, j, right);
      }
      if (j <= k) left = j + 1;
      if (k <= j) right = j - 1;
    }
  }
  function swap(arr, i, j) {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }
  function defaultCompare(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }

  // node_modules/rbush/index.js
  var RBush = class {
    constructor(maxEntries = 9) {
      this._maxEntries = Math.max(4, maxEntries);
      this._minEntries = Math.max(2, Math.ceil(this._maxEntries * 0.4));
      this.clear();
    }
    all() {
      return this._all(this.data, []);
    }
    search(bbox) {
      let node = this.data;
      const result = [];
      if (!intersects2(bbox, node)) return result;
      const toBBox = this.toBBox;
      const nodesToSearch = [];
      while (node) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const childBBox = node.leaf ? toBBox(child) : child;
          if (intersects2(bbox, childBBox)) {
            if (node.leaf) result.push(child);
            else if (contains(bbox, childBBox)) this._all(child, result);
            else nodesToSearch.push(child);
          }
        }
        node = nodesToSearch.pop();
      }
      return result;
    }
    collides(bbox) {
      let node = this.data;
      if (!intersects2(bbox, node)) return false;
      const nodesToSearch = [];
      while (node) {
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const childBBox = node.leaf ? this.toBBox(child) : child;
          if (intersects2(bbox, childBBox)) {
            if (node.leaf || contains(bbox, childBBox)) return true;
            nodesToSearch.push(child);
          }
        }
        node = nodesToSearch.pop();
      }
      return false;
    }
    load(data) {
      if (!(data && data.length)) return this;
      if (data.length < this._minEntries) {
        for (let i = 0; i < data.length; i++) {
          this.insert(data[i]);
        }
        return this;
      }
      let node = this._build(data.slice(), 0, data.length - 1, 0);
      if (!this.data.children.length) {
        this.data = node;
      } else if (this.data.height === node.height) {
        this._splitRoot(this.data, node);
      } else {
        if (this.data.height < node.height) {
          const tmpNode = this.data;
          this.data = node;
          node = tmpNode;
        }
        this._insert(node, this.data.height - node.height - 1, true);
      }
      return this;
    }
    insert(item) {
      if (item) this._insert(item, this.data.height - 1);
      return this;
    }
    clear() {
      this.data = createNode([]);
      return this;
    }
    remove(item, equalsFn) {
      if (!item) return this;
      let node = this.data;
      const bbox = this.toBBox(item);
      const path = [];
      const indexes = [];
      let i, parent, goingUp;
      while (node || path.length) {
        if (!node) {
          node = path.pop();
          parent = path[path.length - 1];
          i = indexes.pop();
          goingUp = true;
        }
        if (node.leaf) {
          const index = findItem(item, node.children, equalsFn);
          if (index !== -1) {
            node.children.splice(index, 1);
            path.push(node);
            this._condense(path);
            return this;
          }
        }
        if (!goingUp && !node.leaf && contains(node, bbox)) {
          path.push(node);
          indexes.push(i);
          i = 0;
          parent = node;
          node = node.children[0];
        } else if (parent) {
          i++;
          node = parent.children[i];
          goingUp = false;
        } else node = null;
      }
      return this;
    }
    toBBox(item) {
      return item;
    }
    compareMinX(a, b) {
      return a.minX - b.minX;
    }
    compareMinY(a, b) {
      return a.minY - b.minY;
    }
    toJSON() {
      return this.data;
    }
    fromJSON(data) {
      this.data = data;
      return this;
    }
    _all(node, result) {
      const nodesToSearch = [];
      while (node) {
        if (node.leaf) result.push(...node.children);
        else nodesToSearch.push(...node.children);
        node = nodesToSearch.pop();
      }
      return result;
    }
    _build(items, left, right, height) {
      const N = right - left + 1;
      let M = this._maxEntries;
      let node;
      if (N <= M) {
        node = createNode(items.slice(left, right + 1));
        calcBBox(node, this.toBBox);
        return node;
      }
      if (!height) {
        height = Math.ceil(Math.log(N) / Math.log(M));
        M = Math.ceil(N / Math.pow(M, height - 1));
      }
      node = createNode([]);
      node.leaf = false;
      node.height = height;
      const N2 = Math.ceil(N / M);
      const N1 = N2 * Math.ceil(Math.sqrt(M));
      multiSelect(items, left, right, N1, this.compareMinX);
      for (let i = left; i <= right; i += N1) {
        const right2 = Math.min(i + N1 - 1, right);
        multiSelect(items, i, right2, N2, this.compareMinY);
        for (let j = i; j <= right2; j += N2) {
          const right3 = Math.min(j + N2 - 1, right2);
          node.children.push(this._build(items, j, right3, height - 1));
        }
      }
      calcBBox(node, this.toBBox);
      return node;
    }
    _chooseSubtree(bbox, node, level2, path) {
      while (true) {
        path.push(node);
        if (node.leaf || path.length - 1 === level2) break;
        let minArea = Infinity;
        let minEnlargement = Infinity;
        let targetNode;
        for (let i = 0; i < node.children.length; i++) {
          const child = node.children[i];
          const area = bboxArea(child);
          const enlargement = enlargedArea(bbox, child) - area;
          if (enlargement < minEnlargement) {
            minEnlargement = enlargement;
            minArea = area < minArea ? area : minArea;
            targetNode = child;
          } else if (enlargement === minEnlargement) {
            if (area < minArea) {
              minArea = area;
              targetNode = child;
            }
          }
        }
        node = targetNode || node.children[0];
      }
      return node;
    }
    _insert(item, level2, isNode) {
      const bbox = isNode ? item : this.toBBox(item);
      const insertPath = [];
      const node = this._chooseSubtree(bbox, this.data, level2, insertPath);
      node.children.push(item);
      extend3(node, bbox);
      while (level2 >= 0) {
        if (insertPath[level2].children.length > this._maxEntries) {
          this._split(insertPath, level2);
          level2--;
        } else break;
      }
      this._adjustParentBBoxes(bbox, insertPath, level2);
    }
    // split overflowed node into two
    _split(insertPath, level2) {
      const node = insertPath[level2];
      const M = node.children.length;
      const m = this._minEntries;
      this._chooseSplitAxis(node, m, M);
      const splitIndex = this._chooseSplitIndex(node, m, M);
      const newNode = createNode(node.children.splice(splitIndex, node.children.length - splitIndex));
      newNode.height = node.height;
      newNode.leaf = node.leaf;
      calcBBox(node, this.toBBox);
      calcBBox(newNode, this.toBBox);
      if (level2) insertPath[level2 - 1].children.push(newNode);
      else this._splitRoot(node, newNode);
    }
    _splitRoot(node, newNode) {
      this.data = createNode([node, newNode]);
      this.data.height = node.height + 1;
      this.data.leaf = false;
      calcBBox(this.data, this.toBBox);
    }
    _chooseSplitIndex(node, m, M) {
      let index;
      let minOverlap = Infinity;
      let minArea = Infinity;
      for (let i = m; i <= M - m; i++) {
        const bbox1 = distBBox(node, 0, i, this.toBBox);
        const bbox2 = distBBox(node, i, M, this.toBBox);
        const overlap = intersectionArea(bbox1, bbox2);
        const area = bboxArea(bbox1) + bboxArea(bbox2);
        if (overlap < minOverlap) {
          minOverlap = overlap;
          index = i;
          minArea = area < minArea ? area : minArea;
        } else if (overlap === minOverlap) {
          if (area < minArea) {
            minArea = area;
            index = i;
          }
        }
      }
      return index || M - m;
    }
    // sorts node children by the best axis for split
    _chooseSplitAxis(node, m, M) {
      const compareMinX = node.leaf ? this.compareMinX : compareNodeMinX;
      const compareMinY = node.leaf ? this.compareMinY : compareNodeMinY;
      const xMargin = this._allDistMargin(node, m, M, compareMinX);
      const yMargin = this._allDistMargin(node, m, M, compareMinY);
      if (xMargin < yMargin) node.children.sort(compareMinX);
    }
    // total margin of all possible split distributions where each node is at least m full
    _allDistMargin(node, m, M, compare) {
      node.children.sort(compare);
      const toBBox = this.toBBox;
      const leftBBox = distBBox(node, 0, m, toBBox);
      const rightBBox = distBBox(node, M - m, M, toBBox);
      let margin = bboxMargin(leftBBox) + bboxMargin(rightBBox);
      for (let i = m; i < M - m; i++) {
        const child = node.children[i];
        extend3(leftBBox, node.leaf ? toBBox(child) : child);
        margin += bboxMargin(leftBBox);
      }
      for (let i = M - m - 1; i >= m; i--) {
        const child = node.children[i];
        extend3(rightBBox, node.leaf ? toBBox(child) : child);
        margin += bboxMargin(rightBBox);
      }
      return margin;
    }
    _adjustParentBBoxes(bbox, path, level2) {
      for (let i = level2; i >= 0; i--) {
        extend3(path[i], bbox);
      }
    }
    _condense(path) {
      for (let i = path.length - 1, siblings; i >= 0; i--) {
        if (path[i].children.length === 0) {
          if (i > 0) {
            siblings = path[i - 1].children;
            siblings.splice(siblings.indexOf(path[i]), 1);
          } else this.clear();
        } else calcBBox(path[i], this.toBBox);
      }
    }
  };
  function findItem(item, items, equalsFn) {
    if (!equalsFn) return items.indexOf(item);
    for (let i = 0; i < items.length; i++) {
      if (equalsFn(item, items[i])) return i;
    }
    return -1;
  }
  function calcBBox(node, toBBox) {
    distBBox(node, 0, node.children.length, toBBox, node);
  }
  function distBBox(node, k, p, toBBox, destNode) {
    if (!destNode) destNode = createNode(null);
    destNode.minX = Infinity;
    destNode.minY = Infinity;
    destNode.maxX = -Infinity;
    destNode.maxY = -Infinity;
    for (let i = k; i < p; i++) {
      const child = node.children[i];
      extend3(destNode, node.leaf ? toBBox(child) : child);
    }
    return destNode;
  }
  function extend3(a, b) {
    a.minX = Math.min(a.minX, b.minX);
    a.minY = Math.min(a.minY, b.minY);
    a.maxX = Math.max(a.maxX, b.maxX);
    a.maxY = Math.max(a.maxY, b.maxY);
    return a;
  }
  function compareNodeMinX(a, b) {
    return a.minX - b.minX;
  }
  function compareNodeMinY(a, b) {
    return a.minY - b.minY;
  }
  function bboxArea(a) {
    return (a.maxX - a.minX) * (a.maxY - a.minY);
  }
  function bboxMargin(a) {
    return a.maxX - a.minX + (a.maxY - a.minY);
  }
  function enlargedArea(a, b) {
    return (Math.max(b.maxX, a.maxX) - Math.min(b.minX, a.minX)) * (Math.max(b.maxY, a.maxY) - Math.min(b.minY, a.minY));
  }
  function intersectionArea(a, b) {
    const minX = Math.max(a.minX, b.minX);
    const minY = Math.max(a.minY, b.minY);
    const maxX = Math.min(a.maxX, b.maxX);
    const maxY = Math.min(a.maxY, b.maxY);
    return Math.max(0, maxX - minX) * Math.max(0, maxY - minY);
  }
  function contains(a, b) {
    return a.minX <= b.minX && a.minY <= b.minY && b.maxX <= a.maxX && b.maxY <= a.maxY;
  }
  function intersects2(a, b) {
    return b.minX <= a.maxX && b.minY <= a.maxY && b.maxX >= a.minX && b.maxY >= a.minY;
  }
  function createNode(children) {
    return {
      children,
      height: 1,
      leaf: true,
      minX: Infinity,
      minY: Infinity,
      maxX: -Infinity,
      maxY: -Infinity
    };
  }
  function multiSelect(arr, left, right, n, compare) {
    const stack = [left, right];
    while (stack.length) {
      right = stack.pop();
      left = stack.pop();
      if (right - left <= n) continue;
      const mid = left + Math.ceil((right - left) / n / 2) * n;
      quickselect(arr, mid, left, right, compare);
      stack.push(left, mid, mid, right);
    }
  }

  // node_modules/ol/color.js
  var NO_COLOR = [NaN, NaN, NaN, 0];
  var colorParseContext;
  function getColorParseContext() {
    if (!colorParseContext) {
      colorParseContext = createCanvasContext2D(1, 1, void 0, {
        willReadFrequently: true,
        desynchronized: true
      });
    }
    return colorParseContext;
  }
  var rgbModernRegEx = /^rgba?\(\s*(\d+%?)\s+(\d+%?)\s+(\d+%?)(?:\s*\/\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i;
  var rgbLegacyAbsoluteRegEx = /^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i;
  var rgbLegacyPercentageRegEx = /^rgba?\(\s*(\d+%)\s*,\s*(\d+%)\s*,\s*(\d+%)(?:\s*,\s*(\d+%|\d*\.\d+|[01]))?\s*\)$/i;
  var hexRegEx = /^#([\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i;
  function toColorComponent(s, divider) {
    return s.endsWith("%") ? Number(s.substring(0, s.length - 1)) / divider : Number(s);
  }
  function throwInvalidColor(color) {
    throw new Error('failed to parse "' + color + '" as color');
  }
  function parseRgba(color) {
    if (color.toLowerCase().startsWith("rgb")) {
      const rgb = color.match(rgbLegacyAbsoluteRegEx) || color.match(rgbModernRegEx) || color.match(rgbLegacyPercentageRegEx);
      if (rgb) {
        const alpha = rgb[4];
        const rgbDivider = 100 / 255;
        return [
          clamp(toColorComponent(rgb[1], rgbDivider) + 0.5 | 0, 0, 255),
          clamp(toColorComponent(rgb[2], rgbDivider) + 0.5 | 0, 0, 255),
          clamp(toColorComponent(rgb[3], rgbDivider) + 0.5 | 0, 0, 255),
          alpha !== void 0 ? clamp(toColorComponent(alpha, 100), 0, 1) : 1
        ];
      }
      throwInvalidColor(color);
    }
    if (color.startsWith("#")) {
      if (hexRegEx.test(color)) {
        const hex = color.substring(1);
        const step = hex.length <= 4 ? 1 : 2;
        const colorFromHex = [0, 0, 0, 255];
        for (let i = 0, ii = hex.length; i < ii; i += step) {
          let colorComponent = parseInt(hex.substring(i, i + step), 16);
          if (step === 1) {
            colorComponent += colorComponent << 4;
          }
          colorFromHex[i / step] = colorComponent;
        }
        colorFromHex[3] = colorFromHex[3] / 255;
        return colorFromHex;
      }
      throwInvalidColor(color);
    }
    const context = getColorParseContext();
    context.fillStyle = "#abcdef";
    let invalidCheckFillStyle = context.fillStyle;
    context.fillStyle = color;
    if (context.fillStyle === invalidCheckFillStyle) {
      context.fillStyle = "#fedcba";
      invalidCheckFillStyle = context.fillStyle;
      context.fillStyle = color;
      if (context.fillStyle === invalidCheckFillStyle) {
        throwInvalidColor(color);
      }
    }
    const colorString = context.fillStyle;
    if (colorString.startsWith("#") || colorString.startsWith("rgba")) {
      return parseRgba(colorString);
    }
    context.clearRect(0, 0, 1, 1);
    context.fillRect(0, 0, 1, 1);
    const colorFromImage = Array.from(context.getImageData(0, 0, 1, 1).data);
    colorFromImage[3] = toFixed(colorFromImage[3] / 255, 3);
    return colorFromImage;
  }
  function asString(color) {
    if (typeof color === "string") {
      return color;
    }
    return toString2(color);
  }
  var MAX_CACHE_SIZE = 1024;
  var cache2 = {};
  var cacheSize = 0;
  function withAlpha(color) {
    if (color.length === 4) {
      return color;
    }
    const output = color.slice();
    output[3] = 1;
    return output;
  }
  function b1(v) {
    return v > 31308e-7 ? Math.pow(v, 1 / 2.4) * 269.025 - 14.025 : v * 3294.6;
  }
  function b2(v) {
    return v > 0.2068965 ? Math.pow(v, 3) : (v - 4 / 29) * (108 / 841);
  }
  function a1(v) {
    return v > 10.314724 ? Math.pow((v + 14.025) / 269.025, 2.4) : v / 3294.6;
  }
  function a2(v) {
    return v > 88564e-7 ? Math.pow(v, 1 / 3) : v / (108 / 841) + 4 / 29;
  }
  function rgbaToLcha(color) {
    const r = a1(color[0]);
    const g = a1(color[1]);
    const b = a1(color[2]);
    const y = a2(r * 0.222488403 + g * 0.716873169 + b * 0.06060791);
    const l = 500 * (a2(r * 0.452247074 + g * 0.399439023 + b * 0.148375274) - y);
    const q = 200 * (y - a2(r * 0.016863605 + g * 0.117638439 + b * 0.865350722));
    const h = Math.atan2(q, l) * (180 / Math.PI);
    return [
      116 * y - 16,
      Math.sqrt(l * l + q * q),
      h < 0 ? h + 360 : h,
      color[3]
    ];
  }
  function lchaToRgba(color) {
    const l = (color[0] + 16) / 116;
    const c = color[1];
    const h = color[2] * Math.PI / 180;
    const y = b2(l);
    const x = b2(l + c / 500 * Math.cos(h));
    const z = b2(l - c / 200 * Math.sin(h));
    const r = b1(x * 3.021973625 - y * 1.617392459 - z * 0.404875592);
    const g = b1(x * -0.943766287 + y * 1.916279586 + z * 0.027607165);
    const b = b1(x * 0.069407491 - y * 0.22898585 + z * 1.159737864);
    return [
      clamp(r + 0.5 | 0, 0, 255),
      clamp(g + 0.5 | 0, 0, 255),
      clamp(b + 0.5 | 0, 0, 255),
      color[3]
    ];
  }
  function fromString2(s) {
    if (s === "none") {
      return NO_COLOR;
    }
    if (cache2.hasOwnProperty(s)) {
      return cache2[s];
    }
    if (cacheSize >= MAX_CACHE_SIZE) {
      let i = 0;
      for (const key in cache2) {
        if ((i++ & 3) === 0) {
          delete cache2[key];
          --cacheSize;
        }
      }
    }
    const color = parseRgba(s);
    if (color.length !== 4) {
      throwInvalidColor(s);
    }
    for (const c of color) {
      if (isNaN(c)) {
        throwInvalidColor(s);
      }
    }
    cache2[s] = color;
    ++cacheSize;
    return color;
  }
  function asArray(color) {
    if (Array.isArray(color)) {
      return color;
    }
    return fromString2(color);
  }
  function toString2(color) {
    let r = color[0];
    if (r != (r | 0)) {
      r = r + 0.5 | 0;
    }
    let g = color[1];
    if (g != (g | 0)) {
      g = g + 0.5 | 0;
    }
    let b = color[2];
    if (b != (b | 0)) {
      b = b + 0.5 | 0;
    }
    const a = color[3] === void 0 ? 1 : Math.round(color[3] * 1e3) / 1e3;
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
  }

  // node_modules/ol/expr/expression.js
  var numTypes = 0;
  var BooleanType = 1 << numTypes++;
  var NumberType = 1 << numTypes++;
  var StringType = 1 << numTypes++;
  var ColorType = 1 << numTypes++;
  var NumberArrayType = 1 << numTypes++;
  var SizeType = 1 << numTypes++;
  var AnyType = Math.pow(2, numTypes) - 1;
  var typeNames = {
    [BooleanType]: "boolean",
    [NumberType]: "number",
    [StringType]: "string",
    [ColorType]: "color",
    [NumberArrayType]: "number[]",
    [SizeType]: "size"
  };
  var namedTypes = Object.keys(typeNames).map(Number).sort(ascending);
  function isSpecific(type) {
    return type in typeNames;
  }
  function typeName(type) {
    const names = [];
    for (const namedType of namedTypes) {
      if (includesType(type, namedType)) {
        names.push(typeNames[namedType]);
      }
    }
    if (names.length === 0) {
      return "untyped";
    }
    if (names.length < 3) {
      return names.join(" or ");
    }
    return names.slice(0, -1).join(", ") + ", or " + names[names.length - 1];
  }
  function includesType(broad, specific) {
    return (broad & specific) === specific;
  }
  function isType(type, expected) {
    return type === expected;
  }
  var LiteralExpression = class {
    /**
     * @param {number} type The value type.
     * @param {LiteralValue} value The literal value.
     */
    constructor(type, value) {
      if (!isSpecific(type)) {
        throw new Error(
          `literal expressions must have a specific type, got ${typeName(type)}`
        );
      }
      this.type = type;
      this.value = value;
    }
  };
  var CallExpression = class {
    /**
     * @param {number} type The return type.
     * @param {string} operator The operator.
     * @param {...Expression} args The arguments.
     */
    constructor(type, operator, ...args) {
      this.type = type;
      this.operator = operator;
      this.args = args;
    }
  };
  function newParsingContext() {
    return {
      variables: /* @__PURE__ */ new Set(),
      properties: /* @__PURE__ */ new Set(),
      featureId: false,
      geometryType: false,
      mCoordinate: false,
      mapState: false
    };
  }
  function parse(encoded, expectedType, context) {
    switch (typeof encoded) {
      case "boolean": {
        if (isType(expectedType, StringType)) {
          return new LiteralExpression(StringType, encoded ? "true" : "false");
        }
        if (!includesType(expectedType, BooleanType)) {
          throw new Error(
            `got a boolean, but expected ${typeName(expectedType)}`
          );
        }
        return new LiteralExpression(BooleanType, encoded);
      }
      case "number": {
        if (isType(expectedType, SizeType)) {
          return new LiteralExpression(SizeType, toSize(encoded));
        }
        if (isType(expectedType, BooleanType)) {
          return new LiteralExpression(BooleanType, !!encoded);
        }
        if (isType(expectedType, StringType)) {
          return new LiteralExpression(StringType, encoded.toString());
        }
        if (!includesType(expectedType, NumberType)) {
          throw new Error(`got a number, but expected ${typeName(expectedType)}`);
        }
        return new LiteralExpression(NumberType, encoded);
      }
      case "string": {
        if (isType(expectedType, ColorType)) {
          return new LiteralExpression(ColorType, fromString2(encoded));
        }
        if (isType(expectedType, BooleanType)) {
          return new LiteralExpression(BooleanType, !!encoded);
        }
        if (!includesType(expectedType, StringType)) {
          throw new Error(`got a string, but expected ${typeName(expectedType)}`);
        }
        return new LiteralExpression(StringType, encoded);
      }
      default: {
      }
    }
    if (!Array.isArray(encoded)) {
      throw new Error("expression must be an array or a primitive value");
    }
    if (encoded.length === 0) {
      throw new Error("empty expression");
    }
    if (typeof encoded[0] === "string") {
      return parseCallExpression(encoded, expectedType, context);
    }
    for (const item of encoded) {
      if (typeof item !== "number") {
        throw new Error("expected an array of numbers");
      }
    }
    if (isType(expectedType, SizeType)) {
      if (encoded.length !== 2) {
        throw new Error(
          `expected an array of two values for a size, got ${encoded.length}`
        );
      }
      return new LiteralExpression(SizeType, encoded);
    }
    if (isType(expectedType, ColorType)) {
      if (encoded.length === 3) {
        return new LiteralExpression(ColorType, [...encoded, 1]);
      }
      if (encoded.length === 4) {
        return new LiteralExpression(ColorType, encoded);
      }
      throw new Error(
        `expected an array of 3 or 4 values for a color, got ${encoded.length}`
      );
    }
    if (!includesType(expectedType, NumberArrayType)) {
      throw new Error(
        `got an array of numbers, but expected ${typeName(expectedType)}`
      );
    }
    return new LiteralExpression(NumberArrayType, encoded);
  }
  var Ops = {
    Get: "get",
    Var: "var",
    Concat: "concat",
    GeometryType: "geometry-type",
    LineMetric: "line-metric",
    Any: "any",
    All: "all",
    Not: "!",
    Resolution: "resolution",
    Zoom: "zoom",
    Time: "time",
    Equal: "==",
    NotEqual: "!=",
    GreaterThan: ">",
    GreaterThanOrEqualTo: ">=",
    LessThan: "<",
    LessThanOrEqualTo: "<=",
    Multiply: "*",
    Divide: "/",
    Add: "+",
    Subtract: "-",
    Clamp: "clamp",
    Mod: "%",
    Pow: "^",
    Abs: "abs",
    Floor: "floor",
    Ceil: "ceil",
    Round: "round",
    Sin: "sin",
    Cos: "cos",
    Atan: "atan",
    Sqrt: "sqrt",
    Match: "match",
    Between: "between",
    Interpolate: "interpolate",
    Coalesce: "coalesce",
    Case: "case",
    In: "in",
    Number: "number",
    String: "string",
    Array: "array",
    Color: "color",
    Id: "id",
    Band: "band",
    Palette: "palette",
    ToString: "to-string",
    Has: "has"
  };
  var parsers = {
    [Ops.Get]: createCallExpressionParser(hasArgsCount(1, Infinity), withGetArgs),
    [Ops.Var]: createCallExpressionParser(hasArgsCount(1, 1), withVarArgs),
    [Ops.Has]: createCallExpressionParser(hasArgsCount(1, Infinity), withGetArgs),
    [Ops.Id]: createCallExpressionParser(usesFeatureId, withNoArgs),
    [Ops.Concat]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfType(StringType)
    ),
    [Ops.GeometryType]: createCallExpressionParser(usesGeometryType, withNoArgs),
    [Ops.LineMetric]: createCallExpressionParser(usesMCoordinate, withNoArgs),
    [Ops.Resolution]: createCallExpressionParser(usesMapState, withNoArgs),
    [Ops.Zoom]: createCallExpressionParser(usesMapState, withNoArgs),
    [Ops.Time]: createCallExpressionParser(usesMapState, withNoArgs),
    [Ops.Any]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfType(BooleanType)
    ),
    [Ops.All]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfType(BooleanType)
    ),
    [Ops.Not]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(BooleanType)
    ),
    [Ops.Equal]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(AnyType)
    ),
    [Ops.NotEqual]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(AnyType)
    ),
    [Ops.GreaterThan]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.GreaterThanOrEqualTo]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.LessThan]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.LessThanOrEqualTo]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Multiply]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfReturnType
    ),
    [Ops.Coalesce]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfReturnType
    ),
    [Ops.Divide]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Add]: createCallExpressionParser(
      hasArgsCount(2, Infinity),
      withArgsOfType(NumberType)
    ),
    [Ops.Subtract]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Clamp]: createCallExpressionParser(
      hasArgsCount(3, 3),
      withArgsOfType(NumberType)
    ),
    [Ops.Mod]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Pow]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Abs]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Floor]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Ceil]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Round]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Sin]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Cos]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Atan]: createCallExpressionParser(
      hasArgsCount(1, 2),
      withArgsOfType(NumberType)
    ),
    [Ops.Sqrt]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(NumberType)
    ),
    [Ops.Match]: createCallExpressionParser(
      hasArgsCount(4, Infinity),
      hasEvenArgs,
      withMatchArgs
    ),
    [Ops.Between]: createCallExpressionParser(
      hasArgsCount(3, 3),
      withArgsOfType(NumberType)
    ),
    [Ops.Interpolate]: createCallExpressionParser(
      hasArgsCount(6, Infinity),
      hasEvenArgs,
      withInterpolateArgs
    ),
    [Ops.Case]: createCallExpressionParser(
      hasArgsCount(3, Infinity),
      hasOddArgs,
      withCaseArgs
    ),
    [Ops.In]: createCallExpressionParser(hasArgsCount(2, 2), withInArgs),
    [Ops.Number]: createCallExpressionParser(
      hasArgsCount(1, Infinity),
      withArgsOfType(AnyType)
    ),
    [Ops.String]: createCallExpressionParser(
      hasArgsCount(1, Infinity),
      withArgsOfType(AnyType)
    ),
    [Ops.Array]: createCallExpressionParser(
      hasArgsCount(1, Infinity),
      withArgsOfType(NumberType)
    ),
    [Ops.Color]: createCallExpressionParser(
      hasArgsCount(1, 4),
      withArgsOfType(NumberType)
    ),
    [Ops.Band]: createCallExpressionParser(
      hasArgsCount(1, 3),
      withArgsOfType(NumberType)
    ),
    [Ops.Palette]: createCallExpressionParser(
      hasArgsCount(2, 2),
      withPaletteArgs
    ),
    [Ops.ToString]: createCallExpressionParser(
      hasArgsCount(1, 1),
      withArgsOfType(BooleanType | NumberType | StringType | ColorType)
    )
  };
  function withGetArgs(encoded, returnType, context) {
    const argsCount = encoded.length - 1;
    const args = new Array(argsCount);
    for (let i = 0; i < argsCount; ++i) {
      const key = encoded[i + 1];
      switch (typeof key) {
        case "number": {
          args[i] = new LiteralExpression(NumberType, key);
          break;
        }
        case "string": {
          args[i] = new LiteralExpression(StringType, key);
          break;
        }
        default: {
          throw new Error(
            `expected a string key or numeric array index for a get operation, got ${key}`
          );
        }
      }
      if (i === 0) {
        context.properties.add(String(key));
      }
    }
    return args;
  }
  function withVarArgs(encoded, returnType, context) {
    const name = encoded[1];
    if (typeof name !== "string") {
      throw new Error("expected a string argument for var operation");
    }
    context.variables.add(name);
    return [new LiteralExpression(StringType, name)];
  }
  function usesFeatureId(encoded, returnType, context) {
    context.featureId = true;
  }
  function usesGeometryType(encoded, returnType, context) {
    context.geometryType = true;
  }
  function usesMCoordinate(encoded, returnType, context) {
    context.mCoordinate = true;
  }
  function usesMapState(encoded, returnType, context) {
    context.mapState = true;
  }
  function withNoArgs(encoded, returnType, context) {
    const operation = encoded[0];
    if (encoded.length !== 1) {
      throw new Error(`expected no arguments for ${operation} operation`);
    }
    return [];
  }
  function hasArgsCount(minArgs, maxArgs) {
    return function(encoded, returnType, context) {
      const operation = encoded[0];
      const argCount = encoded.length - 1;
      if (minArgs === maxArgs) {
        if (argCount !== minArgs) {
          const plural = minArgs === 1 ? "" : "s";
          throw new Error(
            `expected ${minArgs} argument${plural} for ${operation}, got ${argCount}`
          );
        }
      } else if (argCount < minArgs || argCount > maxArgs) {
        const range = maxArgs === Infinity ? `${minArgs} or more` : `${minArgs} to ${maxArgs}`;
        throw new Error(
          `expected ${range} arguments for ${operation}, got ${argCount}`
        );
      }
    };
  }
  function withArgsOfReturnType(encoded, returnType, context) {
    const argCount = encoded.length - 1;
    const args = new Array(argCount);
    for (let i = 0; i < argCount; ++i) {
      const expression = parse(encoded[i + 1], returnType, context);
      args[i] = expression;
    }
    return args;
  }
  function withArgsOfType(argType) {
    return function(encoded, returnType, context) {
      const argCount = encoded.length - 1;
      const args = new Array(argCount);
      for (let i = 0; i < argCount; ++i) {
        const expression = parse(encoded[i + 1], argType, context);
        args[i] = expression;
      }
      return args;
    };
  }
  function hasOddArgs(encoded, returnType, context) {
    const operation = encoded[0];
    const argCount = encoded.length - 1;
    if (argCount % 2 === 0) {
      throw new Error(
        `expected an odd number of arguments for ${operation}, got ${argCount} instead`
      );
    }
  }
  function hasEvenArgs(encoded, returnType, context) {
    const operation = encoded[0];
    const argCount = encoded.length - 1;
    if (argCount % 2 === 1) {
      throw new Error(
        `expected an even number of arguments for operation ${operation}, got ${argCount} instead`
      );
    }
  }
  function withMatchArgs(encoded, returnType, context) {
    const argsCount = encoded.length - 1;
    const inputType = StringType | NumberType | BooleanType;
    const input = parse(encoded[1], inputType, context);
    const fallback = parse(encoded[encoded.length - 1], returnType, context);
    const args = new Array(argsCount - 2);
    for (let i = 0; i < argsCount - 2; i += 2) {
      try {
        const match = parse(encoded[i + 2], input.type, context);
        args[i] = match;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 1} of match expression: ${err.message}`
        );
      }
      try {
        const output = parse(encoded[i + 3], fallback.type, context);
        args[i + 1] = output;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 2} of match expression: ${err.message}`
        );
      }
    }
    return [input, ...args, fallback];
  }
  function withInterpolateArgs(encoded, returnType, context) {
    const interpolationType = encoded[1];
    let base;
    switch (interpolationType[0]) {
      case "linear":
        base = 1;
        break;
      case "exponential":
        const b = interpolationType[1];
        if (typeof b !== "number" || b <= 0) {
          throw new Error(
            `expected a number base for exponential interpolation, got ${JSON.stringify(b)} instead`
          );
        }
        base = b;
        break;
      default:
        throw new Error(
          `invalid interpolation type: ${JSON.stringify(interpolationType)}`
        );
    }
    const interpolation = new LiteralExpression(NumberType, base);
    let input;
    try {
      input = parse(encoded[2], NumberType, context);
    } catch (err) {
      throw new Error(
        `failed to parse argument 1 in interpolate expression: ${err.message}`
      );
    }
    const args = new Array(encoded.length - 3);
    for (let i = 0; i < args.length; i += 2) {
      try {
        const stop = parse(encoded[i + 3], NumberType, context);
        args[i] = stop;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 2} for interpolate expression: ${err.message}`
        );
      }
      try {
        const output = parse(encoded[i + 4], returnType, context);
        args[i + 1] = output;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 3} for interpolate expression: ${err.message}`
        );
      }
    }
    return [interpolation, input, ...args];
  }
  function withCaseArgs(encoded, returnType, context) {
    const fallback = parse(encoded[encoded.length - 1], returnType, context);
    const args = new Array(encoded.length - 1);
    for (let i = 0; i < args.length - 1; i += 2) {
      try {
        const condition = parse(encoded[i + 1], BooleanType, context);
        args[i] = condition;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i} of case expression: ${err.message}`
        );
      }
      try {
        const output = parse(encoded[i + 2], fallback.type, context);
        args[i + 1] = output;
      } catch (err) {
        throw new Error(
          `failed to parse argument ${i + 1} of case expression: ${err.message}`
        );
      }
    }
    args[args.length - 1] = fallback;
    return args;
  }
  function withInArgs(encoded, returnType, context) {
    let haystack = encoded[2];
    if (!Array.isArray(haystack)) {
      throw new Error(
        `the second argument for the "in" operator must be an array`
      );
    }
    let needleType;
    if (haystack[0] === "literal") {
      haystack = haystack[1];
      if (!Array.isArray(haystack)) {
        throw new Error(
          `failed to parse "in" expression: the literal operator must be followed by an array`
        );
      }
    } else if (typeof haystack[0] === "string") {
      throw new Error(
        `for the "in" operator, a string array should be wrapped in a "literal" operator to disambiguate from expressions`
      );
    }
    if (typeof haystack[0] === "string") {
      needleType = StringType;
    } else {
      needleType = NumberType;
    }
    const args = new Array(haystack.length);
    for (let i = 0; i < args.length; i++) {
      try {
        const arg = parse(haystack[i], needleType, context);
        args[i] = arg;
      } catch (err) {
        throw new Error(
          `failed to parse haystack item ${i} for "in" expression: ${err.message}`
        );
      }
    }
    const needle = parse(encoded[1], needleType, context);
    return [needle, ...args];
  }
  function withPaletteArgs(encoded, returnType, context) {
    let index;
    try {
      index = parse(encoded[1], NumberType, context);
    } catch (err) {
      throw new Error(
        `failed to parse first argument in palette expression: ${err.message}`
      );
    }
    const colors = encoded[2];
    if (!Array.isArray(colors)) {
      throw new Error("the second argument of palette must be an array");
    }
    const parsedColors = new Array(colors.length);
    for (let i = 0; i < parsedColors.length; i++) {
      let color;
      try {
        color = parse(colors[i], ColorType, context);
      } catch (err) {
        throw new Error(
          `failed to parse color at index ${i} in palette expression: ${err.message}`
        );
      }
      if (!(color instanceof LiteralExpression)) {
        throw new Error(
          `the palette color at index ${i} must be a literal value`
        );
      }
      parsedColors[i] = color;
    }
    return [index, ...parsedColors];
  }
  function createCallExpressionParser(...validators) {
    return function(encoded, returnType, context) {
      const operator = encoded[0];
      let args;
      for (let i = 0; i < validators.length; i++) {
        const parsed = validators[i](encoded, returnType, context);
        if (i == validators.length - 1) {
          if (!parsed) {
            throw new Error(
              "expected last argument validator to return the parsed args"
            );
          }
          args = parsed;
        }
      }
      return new CallExpression(returnType, operator, ...args);
    };
  }
  function parseCallExpression(encoded, returnType, context) {
    const operator = encoded[0];
    const parser = parsers[operator];
    if (!parser) {
      throw new Error(`unknown operator: ${operator}`);
    }
    return parser(encoded, returnType, context);
  }
  function computeGeometryType(geometry) {
    if (!geometry) {
      return "";
    }
    const type = geometry.getType();
    switch (type) {
      case "Point":
      case "LineString":
      case "Polygon":
        return type;
      case "MultiPoint":
      case "MultiLineString":
      case "MultiPolygon":
        return (
          /** @type {'Point'|'LineString'|'Polygon'} */
          type.substring(5)
        );
      case "Circle":
        return "Polygon";
      case "GeometryCollection":
        return computeGeometryType(
          /** @type {import("../geom/GeometryCollection.js").default} */
          geometry.getGeometries()[0]
        );
      default:
        return "";
    }
  }

  // node_modules/ol/expr/cpu.js
  function newEvaluationContext() {
    return {
      variables: {},
      properties: {},
      resolution: NaN,
      featureId: null,
      geometryType: ""
    };
  }
  function buildExpression(encoded, type, context) {
    const expression = parse(encoded, type, context);
    return compileExpression(expression, context);
  }
  function compileExpression(expression, context) {
    if (expression instanceof LiteralExpression) {
      if (expression.type === ColorType && typeof expression.value === "string") {
        const colorValue = fromString2(expression.value);
        return function() {
          return colorValue;
        };
      }
      return function() {
        return expression.value;
      };
    }
    const operator = expression.operator;
    switch (operator) {
      case Ops.Number:
      case Ops.String:
      case Ops.Coalesce: {
        return compileAssertionExpression(expression, context);
      }
      case Ops.Get:
      case Ops.Var:
      case Ops.Has: {
        return compileAccessorExpression(expression, context);
      }
      case Ops.Id: {
        return (context2) => context2.featureId;
      }
      case Ops.GeometryType: {
        return (context2) => context2.geometryType;
      }
      case Ops.Concat: {
        const args = expression.args.map((e) => compileExpression(e, context));
        return (context2) => "".concat(...args.map((arg) => arg(context2).toString()));
      }
      case Ops.Resolution: {
        return (context2) => context2.resolution;
      }
      case Ops.Any:
      case Ops.All:
      case Ops.Between:
      case Ops.In:
      case Ops.Not: {
        return compileLogicalExpression(expression, context);
      }
      case Ops.Equal:
      case Ops.NotEqual:
      case Ops.LessThan:
      case Ops.LessThanOrEqualTo:
      case Ops.GreaterThan:
      case Ops.GreaterThanOrEqualTo: {
        return compileComparisonExpression(expression, context);
      }
      case Ops.Multiply:
      case Ops.Divide:
      case Ops.Add:
      case Ops.Subtract:
      case Ops.Clamp:
      case Ops.Mod:
      case Ops.Pow:
      case Ops.Abs:
      case Ops.Floor:
      case Ops.Ceil:
      case Ops.Round:
      case Ops.Sin:
      case Ops.Cos:
      case Ops.Atan:
      case Ops.Sqrt: {
        return compileNumericExpression(expression, context);
      }
      case Ops.Case: {
        return compileCaseExpression(expression, context);
      }
      case Ops.Match: {
        return compileMatchExpression(expression, context);
      }
      case Ops.Interpolate: {
        return compileInterpolateExpression(expression, context);
      }
      case Ops.ToString: {
        return compileConvertExpression(expression, context);
      }
      default: {
        throw new Error(`Unsupported operator ${operator}`);
      }
    }
  }
  function compileAssertionExpression(expression, context) {
    const type = expression.operator;
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    switch (type) {
      case Ops.Coalesce: {
        return (context2) => {
          for (let i = 0; i < length; ++i) {
            const value = args[i](context2);
            if (typeof value !== "undefined" && value !== null) {
              return value;
            }
          }
          throw new Error("Expected one of the values to be non-null");
        };
      }
      case Ops.Number:
      case Ops.String: {
        return (context2) => {
          for (let i = 0; i < length; ++i) {
            const value = args[i](context2);
            if (typeof value === type) {
              return value;
            }
          }
          throw new Error(`Expected one of the values to be a ${type}`);
        };
      }
      default: {
        throw new Error(`Unsupported assertion operator ${type}`);
      }
    }
  }
  function compileAccessorExpression(expression, context) {
    const nameExpression = (
      /** @type {LiteralExpression} */
      expression.args[0]
    );
    const name = (
      /** @type {string} */
      nameExpression.value
    );
    switch (expression.operator) {
      case Ops.Get: {
        return (context2) => {
          const args = expression.args;
          let value = context2.properties[name];
          for (let i = 1, ii = args.length; i < ii; ++i) {
            const keyExpression = (
              /** @type {LiteralExpression} */
              args[i]
            );
            const key = (
              /** @type {string|number} */
              keyExpression.value
            );
            value = value[key];
          }
          return value;
        };
      }
      case Ops.Var: {
        return (context2) => context2.variables[name];
      }
      case Ops.Has: {
        return (context2) => {
          const args = expression.args;
          if (!(name in context2.properties)) {
            return false;
          }
          let value = context2.properties[name];
          for (let i = 1, ii = args.length; i < ii; ++i) {
            const keyExpression = (
              /** @type {LiteralExpression} */
              args[i]
            );
            const key = (
              /** @type {string|number} */
              keyExpression.value
            );
            if (!value || !Object.hasOwn(value, key)) {
              return false;
            }
            value = value[key];
          }
          return true;
        };
      }
      default: {
        throw new Error(`Unsupported accessor operator ${expression.operator}`);
      }
    }
  }
  function compileComparisonExpression(expression, context) {
    const op = expression.operator;
    const left = compileExpression(expression.args[0], context);
    const right = compileExpression(expression.args[1], context);
    switch (op) {
      case Ops.Equal: {
        return (context2) => left(context2) === right(context2);
      }
      case Ops.NotEqual: {
        return (context2) => left(context2) !== right(context2);
      }
      case Ops.LessThan: {
        return (context2) => left(context2) < right(context2);
      }
      case Ops.LessThanOrEqualTo: {
        return (context2) => left(context2) <= right(context2);
      }
      case Ops.GreaterThan: {
        return (context2) => left(context2) > right(context2);
      }
      case Ops.GreaterThanOrEqualTo: {
        return (context2) => left(context2) >= right(context2);
      }
      default: {
        throw new Error(`Unsupported comparison operator ${op}`);
      }
    }
  }
  function compileLogicalExpression(expression, context) {
    const op = expression.operator;
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    switch (op) {
      case Ops.Any: {
        return (context2) => {
          for (let i = 0; i < length; ++i) {
            if (args[i](context2)) {
              return true;
            }
          }
          return false;
        };
      }
      case Ops.All: {
        return (context2) => {
          for (let i = 0; i < length; ++i) {
            if (!args[i](context2)) {
              return false;
            }
          }
          return true;
        };
      }
      case Ops.Between: {
        return (context2) => {
          const value = args[0](context2);
          const min = args[1](context2);
          const max = args[2](context2);
          return value >= min && value <= max;
        };
      }
      case Ops.In: {
        return (context2) => {
          const value = args[0](context2);
          for (let i = 1; i < length; ++i) {
            if (value === args[i](context2)) {
              return true;
            }
          }
          return false;
        };
      }
      case Ops.Not: {
        return (context2) => !args[0](context2);
      }
      default: {
        throw new Error(`Unsupported logical operator ${op}`);
      }
    }
  }
  function compileNumericExpression(expression, context) {
    const op = expression.operator;
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    switch (op) {
      case Ops.Multiply: {
        return (context2) => {
          let value = 1;
          for (let i = 0; i < length; ++i) {
            value *= args[i](context2);
          }
          return value;
        };
      }
      case Ops.Divide: {
        return (context2) => args[0](context2) / args[1](context2);
      }
      case Ops.Add: {
        return (context2) => {
          let value = 0;
          for (let i = 0; i < length; ++i) {
            value += args[i](context2);
          }
          return value;
        };
      }
      case Ops.Subtract: {
        return (context2) => args[0](context2) - args[1](context2);
      }
      case Ops.Clamp: {
        return (context2) => {
          const value = args[0](context2);
          const min = args[1](context2);
          if (value < min) {
            return min;
          }
          const max = args[2](context2);
          if (value > max) {
            return max;
          }
          return value;
        };
      }
      case Ops.Mod: {
        return (context2) => args[0](context2) % args[1](context2);
      }
      case Ops.Pow: {
        return (context2) => Math.pow(args[0](context2), args[1](context2));
      }
      case Ops.Abs: {
        return (context2) => Math.abs(args[0](context2));
      }
      case Ops.Floor: {
        return (context2) => Math.floor(args[0](context2));
      }
      case Ops.Ceil: {
        return (context2) => Math.ceil(args[0](context2));
      }
      case Ops.Round: {
        return (context2) => Math.round(args[0](context2));
      }
      case Ops.Sin: {
        return (context2) => Math.sin(args[0](context2));
      }
      case Ops.Cos: {
        return (context2) => Math.cos(args[0](context2));
      }
      case Ops.Atan: {
        if (length === 2) {
          return (context2) => Math.atan2(args[0](context2), args[1](context2));
        }
        return (context2) => Math.atan(args[0](context2));
      }
      case Ops.Sqrt: {
        return (context2) => Math.sqrt(args[0](context2));
      }
      default: {
        throw new Error(`Unsupported numeric operator ${op}`);
      }
    }
  }
  function compileCaseExpression(expression, context) {
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    return (context2) => {
      for (let i = 0; i < length - 1; i += 2) {
        const condition = args[i](context2);
        if (condition) {
          return args[i + 1](context2);
        }
      }
      return args[length - 1](context2);
    };
  }
  function compileMatchExpression(expression, context) {
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    return (context2) => {
      const value = args[0](context2);
      for (let i = 1; i < length - 1; i += 2) {
        if (value === args[i](context2)) {
          return args[i + 1](context2);
        }
      }
      return args[length - 1](context2);
    };
  }
  function compileInterpolateExpression(expression, context) {
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    return (context2) => {
      const base = args[0](context2);
      const value = args[1](context2);
      let previousInput;
      let previousOutput;
      for (let i = 2; i < length; i += 2) {
        const input = args[i](context2);
        let output = args[i + 1](context2);
        const isColor = Array.isArray(output);
        if (isColor) {
          output = withAlpha(output);
        }
        if (input >= value) {
          if (i === 2) {
            return output;
          }
          if (isColor) {
            return interpolateColor(
              base,
              value,
              previousInput,
              previousOutput,
              input,
              output
            );
          }
          return interpolateNumber(
            base,
            value,
            previousInput,
            previousOutput,
            input,
            output
          );
        }
        previousInput = input;
        previousOutput = output;
      }
      return previousOutput;
    };
  }
  function compileConvertExpression(expression, context) {
    const op = expression.operator;
    const length = expression.args.length;
    const args = new Array(length);
    for (let i = 0; i < length; ++i) {
      args[i] = compileExpression(expression.args[i], context);
    }
    switch (op) {
      case Ops.ToString: {
        return (context2) => {
          const value = args[0](context2);
          if (expression.args[0].type === ColorType) {
            return toString2(value);
          }
          return value.toString();
        };
      }
      default: {
        throw new Error(`Unsupported convert operator ${op}`);
      }
    }
  }
  function interpolateNumber(base, value, input1, output1, input2, output2) {
    const delta = input2 - input1;
    if (delta === 0) {
      return output1;
    }
    const along = value - input1;
    const factor = base === 1 ? along / delta : (Math.pow(base, along) - 1) / (Math.pow(base, delta) - 1);
    return output1 + factor * (output2 - output1);
  }
  function interpolateColor(base, value, input1, rgba1, input2, rgba2) {
    const delta = input2 - input1;
    if (delta === 0) {
      return rgba1;
    }
    const lcha1 = rgbaToLcha(rgba1);
    const lcha2 = rgbaToLcha(rgba2);
    let deltaHue = lcha2[2] - lcha1[2];
    if (deltaHue > 180) {
      deltaHue -= 360;
    } else if (deltaHue < -180) {
      deltaHue += 360;
    }
    const lcha = [
      interpolateNumber(base, value, input1, lcha1[0], input2, lcha2[0]),
      interpolateNumber(base, value, input1, lcha1[1], input2, lcha2[1]),
      lcha1[2] + interpolateNumber(base, value, input1, 0, input2, deltaHue),
      interpolateNumber(base, value, input1, rgba1[3], input2, rgba2[3])
    ];
    return lchaToRgba(lcha);
  }

  // node_modules/ol/style/IconImageCache.js
  var IconImageCache = class {
    constructor() {
      this.cache_ = {};
      this.patternCache_ = {};
      this.cacheSize_ = 0;
      this.maxCacheSize_ = 1024;
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      this.cache_ = {};
      this.patternCache_ = {};
      this.cacheSize_ = 0;
    }
    /**
     * @return {boolean} Can expire cache.
     */
    canExpireCache() {
      return this.cacheSize_ > this.maxCacheSize_;
    }
    /**
     * FIXME empty description for jsdoc
     */
    expire() {
      if (this.canExpireCache()) {
        let i = 0;
        for (const key in this.cache_) {
          const iconImage = this.cache_[key];
          if ((i++ & 3) === 0 && !iconImage.hasListener()) {
            delete this.cache_[key];
            delete this.patternCache_[key];
            --this.cacheSize_;
          }
        }
      }
    }
    /**
     * @param {string} src Src.
     * @param {import("../color.js").Color|string|null} color Color.
     * @return {import("./IconImage.js").default} Icon image.
     */
    get(src, color) {
      const key = getCacheKey2(src, color);
      const icon = key in this.cache_ ? this.cache_[key] : null;
      return icon;
    }
    /**
     * @param {string} src Src.
     * @param {import("../color.js").Color|string|null} color Color.
     * @return {CanvasPattern} Icon image.
     */
    getPattern(src, color) {
      const key = getCacheKey2(src, color);
      return key in this.patternCache_ ? this.patternCache_[key] : null;
    }
    /**
     * @param {string} src Src.
     * @param {import("../color.js").Color|string|null} color Color.
     * @param {import("./IconImage.js").default|null} iconImage Icon image.
     * @param {boolean} [pattern] Also cache a `'repeat'` pattern with this `iconImage`.
     */
    set(src, color, iconImage, pattern) {
      const key = getCacheKey2(src, color);
      const update = key in this.cache_;
      this.cache_[key] = iconImage;
      if (pattern) {
        if (iconImage.getImageState() === ImageState_default.IDLE) {
          iconImage.load();
        }
        if (iconImage.getImageState() === ImageState_default.LOADING) {
          iconImage.ready().then(() => {
            this.patternCache_[key] = getSharedCanvasContext2D().createPattern(
              iconImage.getImage(1),
              "repeat"
            );
          });
        } else {
          this.patternCache_[key] = getSharedCanvasContext2D().createPattern(
            iconImage.getImage(1),
            "repeat"
          );
        }
      }
      if (!update) {
        ++this.cacheSize_;
      }
    }
    /**
     * Set the cache size of the icon cache. Default is `1024`. Change this value when
     * your map uses more than 1024 different icon images and you are not caching icon
     * styles on the application level.
     * @param {number} maxCacheSize Cache max size.
     * @api
     */
    setSize(maxCacheSize) {
      this.maxCacheSize_ = maxCacheSize;
      this.expire();
    }
  };
  function getCacheKey2(src, color) {
    const colorString = color ? asArray(color) : "null";
    return src + ":" + colorString;
  }
  var shared = new IconImageCache();

  // node_modules/ol/style/IconImage.js
  var taintedTestContext = null;
  var IconImage = class extends Target_default {
    /**
     * @param {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap|null} image Image.
     * @param {string|undefined} src Src.
     * @param {import('../dom.js').ImageAttributes} imageAttributes Image attributes options.
     * @param {import("../ImageState.js").default|undefined} imageState Image state.
     * @param {import("../color.js").Color|string|null} color Color.
     */
    constructor(image, src, imageAttributes, imageState, color) {
      super();
      this.hitDetectionImage_ = null;
      this.image_ = image;
      this.crossOrigin_ = imageAttributes?.crossOrigin;
      this.referrerPolicy_ = imageAttributes?.referrerPolicy;
      this.canvas_ = {};
      this.color_ = color;
      this.imageState_ = imageState === void 0 ? ImageState_default.IDLE : imageState;
      this.size_ = image && image.width && image.height ? [image.width, image.height] : null;
      this.src_ = src;
      this.tainted_;
      this.ready_ = null;
    }
    /**
     * @private
     */
    initializeImage_() {
      this.image_ = new Image();
      if (this.crossOrigin_ !== null) {
        this.image_.crossOrigin = this.crossOrigin_;
      }
      if (this.referrerPolicy_ !== void 0) {
        this.image_.referrerPolicy = this.referrerPolicy_;
      }
    }
    /**
     * @private
     * @return {boolean} The image canvas is tainted.
     */
    isTainted_() {
      if (this.tainted_ === void 0 && this.imageState_ === ImageState_default.LOADED) {
        if (!taintedTestContext) {
          taintedTestContext = createCanvasContext2D(1, 1, void 0, {
            willReadFrequently: true
          });
        }
        taintedTestContext.drawImage(this.image_, 0, 0);
        try {
          taintedTestContext.getImageData(0, 0, 1, 1);
          this.tainted_ = false;
        } catch {
          taintedTestContext = null;
          this.tainted_ = true;
        }
      }
      return this.tainted_ === true;
    }
    /**
     * @private
     */
    dispatchChangeEvent_() {
      this.dispatchEvent(EventType_default.CHANGE);
    }
    /**
     * @private
     */
    handleImageError_() {
      this.imageState_ = ImageState_default.ERROR;
      this.dispatchChangeEvent_();
    }
    /**
     * @private
     */
    handleImageLoad_() {
      this.imageState_ = ImageState_default.LOADED;
      this.size_ = [this.image_.width, this.image_.height];
      this.dispatchChangeEvent_();
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} Image or Canvas element or image bitmap.
     */
    getImage(pixelRatio) {
      if (!this.image_) {
        this.initializeImage_();
      }
      this.replaceColor_(pixelRatio);
      return this.canvas_[pixelRatio] ? this.canvas_[pixelRatio] : this.image_;
    }
    /**
     * @param {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} image Image.
     */
    setImage(image) {
      this.image_ = image;
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Image or Canvas element.
     */
    getPixelRatio(pixelRatio) {
      this.replaceColor_(pixelRatio);
      return this.canvas_[pixelRatio] ? pixelRatio : 1;
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     */
    getImageState() {
      return this.imageState_;
    }
    /**
     * @return {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} Image element.
     */
    getHitDetectionImage() {
      if (!this.image_) {
        this.initializeImage_();
      }
      if (!this.hitDetectionImage_) {
        if (this.isTainted_()) {
          const width = this.size_[0];
          const height = this.size_[1];
          const context = createCanvasContext2D(width, height);
          context.fillRect(0, 0, width, height);
          this.hitDetectionImage_ = context.canvas;
        } else {
          this.hitDetectionImage_ = this.image_;
        }
      }
      return this.hitDetectionImage_;
    }
    /**
     * Get the size of the icon (in pixels).
     * @return {import("../size.js").Size} Image size.
     */
    getSize() {
      return this.size_;
    }
    /**
     * @return {string|undefined} Image src.
     */
    getSrc() {
      return this.src_;
    }
    /**
     * Load not yet loaded URI.
     */
    load() {
      if (this.imageState_ !== ImageState_default.IDLE) {
        return;
      }
      if (!this.image_) {
        this.initializeImage_();
      }
      this.imageState_ = ImageState_default.LOADING;
      try {
        if (this.src_ !== void 0) {
          this.image_.src = this.src_;
        }
      } catch {
        this.handleImageError_();
      }
      if (this.image_ instanceof HTMLImageElement) {
        decodeFallback(this.image_, this.src_).then((image) => {
          this.image_ = image;
          this.handleImageLoad_();
        }).catch(this.handleImageError_.bind(this));
      }
    }
    /**
     * @param {number} pixelRatio Pixel ratio.
     * @private
     */
    replaceColor_(pixelRatio) {
      if (!this.color_ || this.canvas_[pixelRatio] || this.imageState_ !== ImageState_default.LOADED) {
        return;
      }
      const image = this.image_;
      const ctx = createCanvasContext2D(
        Math.ceil(image.width * pixelRatio),
        Math.ceil(image.height * pixelRatio)
      );
      const canvas = ctx.canvas;
      ctx.scale(pixelRatio, pixelRatio);
      ctx.drawImage(image, 0, 0);
      ctx.globalCompositeOperation = "multiply";
      ctx.fillStyle = asString(this.color_);
      ctx.fillRect(0, 0, canvas.width / pixelRatio, canvas.height / pixelRatio);
      ctx.globalCompositeOperation = "destination-in";
      ctx.drawImage(image, 0, 0);
      this.canvas_[pixelRatio] = canvas;
    }
    /**
     * @return {Promise<void>} Promise that resolves when the image is loaded.
     */
    ready() {
      if (!this.ready_) {
        this.ready_ = new Promise((resolve) => {
          if (this.imageState_ === ImageState_default.LOADED || this.imageState_ === ImageState_default.ERROR) {
            resolve();
          } else {
            const onChange = () => {
              if (this.imageState_ === ImageState_default.LOADED || this.imageState_ === ImageState_default.ERROR) {
                this.removeEventListener(EventType_default.CHANGE, onChange);
                resolve();
              }
            };
            this.addEventListener(EventType_default.CHANGE, onChange);
          }
        });
      }
      return this.ready_;
    }
  };
  function get4(image, src, imageAttributes, imageState, color, pattern) {
    let iconImage = src === void 0 ? void 0 : shared.get(src, color);
    if (!iconImage) {
      iconImage = new IconImage(
        image,
        image && "src" in image ? image.src || void 0 : src,
        imageAttributes,
        imageState,
        color
      );
      shared.set(src, color, iconImage, pattern);
    }
    if (pattern && iconImage && !shared.getPattern(src, color)) {
      shared.set(src, color, iconImage, pattern);
    }
    return iconImage;
  }
  var IconImage_default = IconImage;

  // node_modules/ol/colorlike.js
  function asColorLike(color) {
    if (!color) {
      return null;
    }
    if (Array.isArray(color)) {
      return toString2(color);
    }
    if (typeof color === "object" && "src" in color) {
      return asCanvasPattern(color);
    }
    return color;
  }
  function asCanvasPattern(pattern) {
    if (!pattern.offset || !pattern.size) {
      return shared.getPattern(pattern.src, pattern.color);
    }
    const cacheKey = pattern.src + ":" + pattern.offset;
    const canvasPattern = shared.getPattern(cacheKey, pattern.color);
    if (canvasPattern) {
      return canvasPattern;
    }
    const iconImage = shared.get(pattern.src, null);
    if (iconImage.getImageState() !== ImageState_default.LOADED) {
      return null;
    }
    const patternCanvasContext = createCanvasContext2D(
      pattern.size[0],
      pattern.size[1]
    );
    patternCanvasContext.drawImage(
      iconImage.getImage(1),
      pattern.offset[0],
      pattern.offset[1],
      pattern.size[0],
      pattern.size[1],
      0,
      0,
      pattern.size[0],
      pattern.size[1]
    );
    get4(
      patternCanvasContext.canvas,
      cacheKey,
      void 0,
      ImageState_default.LOADED,
      pattern.color,
      true
    );
    return shared.getPattern(cacheKey, pattern.color);
  }

  // node_modules/ol/render/canvas.js
  var defaultFillStyle = "#000";
  var defaultLineCap = "round";
  var defaultLineJoin = "round";
  var defaultMiterLimit = 10;
  var defaultStrokeStyle = "#000";
  var defaultLineWidth = 1;
  var checkedFonts = new Object_default();

  // node_modules/ol/style/Image.js
  var ImageStyle = class _ImageStyle {
    /**
     * @param {Options} options Options.
     */
    constructor(options) {
      this.opacity_ = options.opacity;
      this.rotateWithView_ = options.rotateWithView;
      this.rotation_ = options.rotation;
      this.scale_ = options.scale;
      this.scaleArray_ = toSize(options.scale);
      this.displacement_ = options.displacement;
      this.declutterMode_ = options.declutterMode;
    }
    /**
     * Clones the style.
     * @return {ImageStyle} The cloned style.
     * @api
     */
    clone() {
      const scale4 = this.getScale();
      return new _ImageStyle({
        opacity: this.getOpacity(),
        scale: Array.isArray(scale4) ? scale4.slice() : scale4,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the symbolizer opacity.
     * @return {number} Opacity.
     * @api
     */
    getOpacity() {
      return this.opacity_;
    }
    /**
     * Determine whether the symbolizer rotates with the map.
     * @return {boolean} Rotate with map.
     * @api
     */
    getRotateWithView() {
      return this.rotateWithView_;
    }
    /**
     * Get the symoblizer rotation.
     * @return {number} Rotation.
     * @api
     */
    getRotation() {
      return this.rotation_;
    }
    /**
     * Get the symbolizer scale.
     * @return {number|import("../size.js").Size} Scale.
     * @api
     */
    getScale() {
      return this.scale_;
    }
    /**
     * Get the symbolizer scale array.
     * @return {import("../size.js").Size} Scale array.
     */
    getScaleArray() {
      return this.scaleArray_;
    }
    /**
     * Get the displacement of the shape
     * @return {Array<number>} Shape's center displacement
     * @api
     */
    getDisplacement() {
      return this.displacement_;
    }
    /**
     * Get the declutter mode of the shape
     * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
     * @api
     */
    getDeclutterMode() {
      return this.declutterMode_;
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @abstract
     * @return {Array<number>} Anchor.
     */
    getAnchor() {
      return abstract();
    }
    /**
     * Get the image element for the symbolizer.
     * @abstract
     * @param {number} pixelRatio Pixel ratio.
     * @return {import('../DataTile.js').ImageLike} Image element.
     */
    getImage(pixelRatio) {
      return abstract();
    }
    /**
     * @abstract
     * @return {import('../DataTile.js').ImageLike} Image element.
     */
    getHitDetectionImage() {
      return abstract();
    }
    /**
     * Get the image pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Pixel ratio.
     */
    getPixelRatio(pixelRatio) {
      return 1;
    }
    /**
     * @abstract
     * @return {import("../ImageState.js").default} Image state.
     */
    getImageState() {
      return abstract();
    }
    /**
     * @abstract
     * @return {import("../size.js").Size} Image size.
     */
    getImageSize() {
      return abstract();
    }
    /**
     * Get the origin of the symbolizer.
     * @abstract
     * @return {Array<number>} Origin.
     */
    getOrigin() {
      return abstract();
    }
    /**
     * Get the size of the symbolizer (in pixels).
     * @abstract
     * @return {import("../size.js").Size} Size.
     */
    getSize() {
      return abstract();
    }
    /**
     * Set the displacement.
     *
     * @param {Array<number>} displacement Displacement.
     * @api
     */
    setDisplacement(displacement) {
      this.displacement_ = displacement;
    }
    /**
     * Set the opacity.
     *
     * @param {number} opacity Opacity.
     * @api
     */
    setOpacity(opacity) {
      this.opacity_ = opacity;
    }
    /**
     * Set whether to rotate the style with the view.
     *
     * @param {boolean} rotateWithView Rotate with map.
     * @api
     */
    setRotateWithView(rotateWithView) {
      this.rotateWithView_ = rotateWithView;
    }
    /**
     * Set the rotation.
     *
     * @param {number} rotation Rotation.
     * @api
     */
    setRotation(rotation) {
      this.rotation_ = rotation;
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size} scale Scale.
     * @api
     */
    setScale(scale4) {
      this.scale_ = scale4;
      this.scaleArray_ = toSize(scale4);
    }
    /**
     * @abstract
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     */
    listenImageChange(listener) {
      abstract();
    }
    /**
     * Load not yet loaded URI.
     * @abstract
     */
    load() {
      abstract();
    }
    /**
     * @abstract
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     */
    unlistenImageChange(listener) {
      abstract();
    }
    /**
     * @return {Promise<void>} `false` or Promise that resolves when the style is ready to use.
     */
    ready() {
      return Promise.resolve();
    }
  };
  var Image_default = ImageStyle;

  // node_modules/ol/style/RegularShape.js
  var RegularShape = class _RegularShape extends Image_default {
    /**
     * @param {Options} options Options.
     */
    constructor(options) {
      super({
        opacity: 1,
        rotateWithView: options.rotateWithView !== void 0 ? options.rotateWithView : false,
        rotation: options.rotation !== void 0 ? options.rotation : 0,
        scale: options.scale !== void 0 ? options.scale : 1,
        displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
        declutterMode: options.declutterMode
      });
      this.hitDetectionCanvas_ = null;
      this.fill_ = options.fill !== void 0 ? options.fill : null;
      this.origin_ = [0, 0];
      this.points_ = options.points;
      this.radius = options.radius;
      this.radius2_ = options.radius2;
      this.angle_ = options.angle !== void 0 ? options.angle : 0;
      this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
      this.size_;
      this.renderOptions_;
      this.imageState_ = this.fill_ && this.fill_.loading() ? ImageState_default.LOADING : ImageState_default.LOADED;
      if (this.imageState_ === ImageState_default.LOADING) {
        this.ready().then(() => this.imageState_ = ImageState_default.LOADED);
      }
      this.render();
    }
    /**
     * Clones the style.
     * @return {RegularShape} The cloned style.
     * @api
     * @override
     */
    clone() {
      const scale4 = this.getScale();
      const style = new _RegularShape({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        points: this.getPoints(),
        radius: this.getRadius(),
        radius2: this.getRadius2(),
        angle: this.getAngle(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        scale: Array.isArray(scale4) ? scale4.slice() : scale4,
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
      style.setOpacity(this.getOpacity());
      return style;
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @return {Array<number>} Anchor.
     * @api
     * @override
     */
    getAnchor() {
      const size = this.size_;
      const displacement = this.getDisplacement();
      const scale4 = this.getScaleArray();
      return [
        size[0] / 2 - displacement[0] / scale4[0],
        size[1] / 2 + displacement[1] / scale4[1]
      ];
    }
    /**
     * Get the angle used in generating the shape.
     * @return {number} Shape's rotation in radians.
     * @api
     */
    getAngle() {
      return this.angle_;
    }
    /**
     * Get the fill style for the shape.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Set the fill style.
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(fill) {
      this.fill_ = fill;
      this.render();
    }
    /**
     * @return {HTMLCanvasElement|OffscreenCanvas} Image element.
     * @override
     */
    getHitDetectionImage() {
      if (!this.hitDetectionCanvas_) {
        this.hitDetectionCanvas_ = this.createHitDetectionCanvas_(
          this.renderOptions_
        );
      }
      return this.hitDetectionCanvas_;
    }
    /**
     * Get the image icon.
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLCanvasElement|OffscreenCanvas} Image or Canvas element.
     * @api
     * @override
     */
    getImage(pixelRatio) {
      const fillKey = this.fill_?.getKey();
      const cacheKey = `${pixelRatio},${this.angle_},${this.radius},${this.radius2_},${this.points_},${fillKey}` + Object.values(this.renderOptions_).join(",");
      let image = (
        /** @type {HTMLCanvasElement|OffscreenCanvas} */
        shared.get(cacheKey, null)?.getImage(1)
      );
      if (!image) {
        const renderOptions = this.renderOptions_;
        const size = Math.ceil(renderOptions.size * pixelRatio);
        const context = createCanvasContext2D(size, size);
        this.draw_(renderOptions, context, pixelRatio);
        image = context.canvas;
        const iconImage = new IconImage_default(
          image,
          void 0,
          null,
          ImageState_default.LOADED,
          null
        );
        shared.set(cacheKey, null, iconImage);
        createImageBitmap(image).then((imageBitmap) => {
          iconImage.setImage(imageBitmap);
        });
      }
      return image;
    }
    /**
     * Get the image pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} Pixel ratio.
     * @override
     */
    getPixelRatio(pixelRatio) {
      return pixelRatio;
    }
    /**
     * @return {import("../size.js").Size} Image size.
     * @override
     */
    getImageSize() {
      return this.size_;
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     * @override
     */
    getImageState() {
      return this.imageState_;
    }
    /**
     * Get the origin of the symbolizer.
     * @return {Array<number>} Origin.
     * @api
     * @override
     */
    getOrigin() {
      return this.origin_;
    }
    /**
     * Get the number of points for generating the shape.
     * @return {number} Number of points for stars and regular polygons.
     * @api
     */
    getPoints() {
      return this.points_;
    }
    /**
     * Get the (primary) radius for the shape.
     * @return {number} Radius.
     * @api
     */
    getRadius() {
      return this.radius;
    }
    /**
     * Set the (primary) radius for the shape.
     * @param {number} radius Radius.
     * @api
     */
    setRadius(radius) {
      if (this.radius === radius) {
        return;
      }
      this.radius = radius;
      this.render();
    }
    /**
     * Get the secondary radius for the shape.
     * @return {number|undefined} Radius2.
     * @api
     */
    getRadius2() {
      return this.radius2_;
    }
    /**
     * Set the secondary radius for the shape.
     * @param {number|undefined} radius2 Radius2.
     * @api
     */
    setRadius2(radius2) {
      if (this.radius2_ === radius2) {
        return;
      }
      this.radius2_ = radius2;
      this.render();
    }
    /**
     * Get the size of the symbolizer (in pixels).
     * @return {import("../size.js").Size} Size.
     * @api
     * @override
     */
    getSize() {
      return this.size_;
    }
    /**
     * Get the stroke style for the shape.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Set the stroke style.
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(stroke) {
      this.stroke_ = stroke;
      this.render();
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    listenImageChange(listener) {
    }
    /**
     * Load not yet loaded URI.
     * @override
     */
    load() {
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    unlistenImageChange(listener) {
    }
    /**
     * Calculate additional canvas size needed for the miter.
     * @param {string} lineJoin Line join
     * @param {number} strokeWidth Stroke width
     * @param {number} miterLimit Miter limit
     * @return {number} Additional canvas size needed
     * @private
     */
    calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit) {
      if (strokeWidth === 0 || this.points_ === Infinity || lineJoin !== "bevel" && lineJoin !== "miter") {
        return strokeWidth;
      }
      let r1 = this.radius;
      let r2 = this.radius2_ === void 0 ? r1 : this.radius2_;
      if (r1 < r2) {
        const tmp = r1;
        r1 = r2;
        r2 = tmp;
      }
      const points = this.radius2_ === void 0 ? this.points_ : this.points_ * 2;
      const alpha = 2 * Math.PI / points;
      const a = r2 * Math.sin(alpha);
      const b = Math.sqrt(r2 * r2 - a * a);
      const d = r1 - b;
      const e = Math.sqrt(a * a + d * d);
      const miterRatio = e / a;
      if (lineJoin === "miter" && miterRatio <= miterLimit) {
        return miterRatio * strokeWidth;
      }
      const k = strokeWidth / 2 / miterRatio;
      const l = strokeWidth / 2 * (d / e);
      const maxr = Math.sqrt((r1 + k) * (r1 + k) + l * l);
      const bevelAdd = maxr - r1;
      if (this.radius2_ === void 0 || lineJoin === "bevel") {
        return bevelAdd * 2;
      }
      const aa = r1 * Math.sin(alpha);
      const bb = Math.sqrt(r1 * r1 - aa * aa);
      const dd = r2 - bb;
      const ee = Math.sqrt(aa * aa + dd * dd);
      const innerMiterRatio = ee / aa;
      if (innerMiterRatio <= miterLimit) {
        const innerLength = innerMiterRatio * strokeWidth / 2 - r2 - r1;
        return 2 * Math.max(bevelAdd, innerLength);
      }
      return bevelAdd * 2;
    }
    /**
     * @return {RenderOptions}  The render options
     * @protected
     */
    createRenderOptions() {
      let lineCap = defaultLineCap;
      let lineJoin = defaultLineJoin;
      let miterLimit = 0;
      let lineDash = null;
      let lineDashOffset = 0;
      let strokeStyle;
      let strokeWidth = 0;
      if (this.stroke_) {
        strokeStyle = asColorLike(this.stroke_.getColor() ?? defaultStrokeStyle);
        strokeWidth = this.stroke_.getWidth() ?? defaultLineWidth;
        lineDash = this.stroke_.getLineDash();
        lineDashOffset = this.stroke_.getLineDashOffset() ?? 0;
        lineJoin = this.stroke_.getLineJoin() ?? defaultLineJoin;
        lineCap = this.stroke_.getLineCap() ?? defaultLineCap;
        miterLimit = this.stroke_.getMiterLimit() ?? defaultMiterLimit;
      }
      const add4 = this.calculateLineJoinSize_(lineJoin, strokeWidth, miterLimit);
      const maxRadius = Math.max(this.radius, this.radius2_ || 0);
      const size = Math.ceil(2 * maxRadius + add4);
      return {
        strokeStyle,
        strokeWidth,
        size,
        lineCap,
        lineDash,
        lineDashOffset,
        lineJoin,
        miterLimit
      };
    }
    /**
     * @protected
     */
    render() {
      this.renderOptions_ = this.createRenderOptions();
      const size = this.renderOptions_.size;
      this.hitDetectionCanvas_ = null;
      this.size_ = [size, size];
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context The rendering context.
     * @param {number} pixelRatio The pixel ratio.
     */
    draw_(renderOptions, context, pixelRatio) {
      context.scale(pixelRatio, pixelRatio);
      context.translate(renderOptions.size / 2, renderOptions.size / 2);
      this.createPath_(context);
      if (this.fill_) {
        let color = this.fill_.getColor();
        if (color === null) {
          color = defaultFillStyle;
        }
        context.fillStyle = asColorLike(color);
        context.fill();
      }
      if (renderOptions.strokeStyle) {
        context.strokeStyle = renderOptions.strokeStyle;
        context.lineWidth = renderOptions.strokeWidth;
        if (renderOptions.lineDash) {
          context.setLineDash(renderOptions.lineDash);
          context.lineDashOffset = renderOptions.lineDashOffset;
        }
        context.lineCap = renderOptions.lineCap;
        context.lineJoin = renderOptions.lineJoin;
        context.miterLimit = renderOptions.miterLimit;
        context.stroke();
      }
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @return {HTMLCanvasElement|OffscreenCanvas} Canvas containing the icon
     */
    createHitDetectionCanvas_(renderOptions) {
      let context;
      if (this.fill_) {
        let color = this.fill_.getColor();
        let opacity = 0;
        if (typeof color === "string") {
          color = asArray(color);
        }
        if (color === null) {
          opacity = 1;
        } else if (Array.isArray(color)) {
          opacity = color.length === 4 ? color[3] : 1;
        }
        if (opacity === 0) {
          context = createCanvasContext2D(renderOptions.size, renderOptions.size);
          this.drawHitDetectionCanvas_(renderOptions, context);
        }
      }
      return context ? context.canvas : this.getImage(1);
    }
    /**
     * @private
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context The context to draw in.
     */
    createPath_(context) {
      let points = this.points_;
      const radius = this.radius;
      if (points === Infinity) {
        context.arc(0, 0, radius, 0, 2 * Math.PI);
      } else {
        const radius2 = this.radius2_ === void 0 ? radius : this.radius2_;
        if (this.radius2_ !== void 0) {
          points *= 2;
        }
        const startAngle = this.angle_ - Math.PI / 2;
        const step = 2 * Math.PI / points;
        for (let i = 0; i < points; i++) {
          const angle0 = startAngle + i * step;
          const radiusC = i % 2 === 0 ? radius : radius2;
          context.lineTo(radiusC * Math.cos(angle0), radiusC * Math.sin(angle0));
        }
        context.closePath();
      }
    }
    /**
     * @private
     * @param {RenderOptions} renderOptions Render options.
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context The context.
     */
    drawHitDetectionCanvas_(renderOptions, context) {
      context.translate(renderOptions.size / 2, renderOptions.size / 2);
      this.createPath_(context);
      context.fillStyle = defaultFillStyle;
      context.fill();
      if (renderOptions.strokeStyle) {
        context.strokeStyle = renderOptions.strokeStyle;
        context.lineWidth = renderOptions.strokeWidth;
        if (renderOptions.lineDash) {
          context.setLineDash(renderOptions.lineDash);
          context.lineDashOffset = renderOptions.lineDashOffset;
        }
        context.lineJoin = renderOptions.lineJoin;
        context.miterLimit = renderOptions.miterLimit;
        context.stroke();
      }
    }
    /**
     * @override
     */
    ready() {
      return this.fill_ ? this.fill_.ready() : Promise.resolve();
    }
  };
  var RegularShape_default = RegularShape;

  // node_modules/ol/style/Circle.js
  var CircleStyle = class _CircleStyle extends RegularShape_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : { radius: 5 };
      super({
        points: Infinity,
        fill: options.fill,
        radius: options.radius,
        stroke: options.stroke,
        scale: options.scale !== void 0 ? options.scale : 1,
        rotation: options.rotation !== void 0 ? options.rotation : 0,
        rotateWithView: options.rotateWithView !== void 0 ? options.rotateWithView : false,
        displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
        declutterMode: options.declutterMode
      });
    }
    /**
     * Clones the style.
     * @return {CircleStyle} The cloned style.
     * @api
     * @override
     */
    clone() {
      const scale4 = this.getScale();
      const style = new _CircleStyle({
        fill: this.getFill() ? this.getFill().clone() : void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        radius: this.getRadius(),
        scale: Array.isArray(scale4) ? scale4.slice() : scale4,
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
      style.setOpacity(this.getOpacity());
      return style;
    }
  };
  var Circle_default = CircleStyle;

  // node_modules/ol/style/Fill.js
  var Fill = class _Fill {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options || {};
      this.patternImage_ = null;
      this.color_ = null;
      if (options.color !== void 0) {
        this.setColor(options.color);
      }
    }
    /**
     * Clones the style. The color is not cloned if it is a {@link module:ol/colorlike~ColorLike}.
     * @return {Fill} The cloned style.
     * @api
     */
    clone() {
      const color = this.getColor();
      return new _Fill({
        color: Array.isArray(color) ? color.slice() : color || void 0
      });
    }
    /**
     * Get the fill color.
     * @return {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Set the color.
     *
     * @param {import("../color.js").Color|import("../colorlike.js").ColorLike|import('../colorlike.js').PatternDescriptor|null} color Color.
     * @api
     */
    setColor(color) {
      if (color !== null && typeof color === "object" && "src" in color) {
        const patternImage = get4(
          null,
          color.src,
          { crossOrigin: "anonymous" },
          void 0,
          color.offset ? null : color.color ? color.color : null,
          !(color.offset && color.size)
        );
        patternImage.ready().then(() => {
          this.patternImage_ = null;
        });
        if (patternImage.getImageState() === ImageState_default.IDLE) {
          patternImage.load();
        }
        if (patternImage.getImageState() === ImageState_default.LOADING) {
          this.patternImage_ = patternImage;
        }
      }
      this.color_ = color;
    }
    /**
     * @return {string} Key of the fill for cache lookup.
     */
    getKey() {
      const fill = this.getColor();
      if (!fill) {
        return "";
      }
      return fill instanceof CanvasPattern || fill instanceof CanvasGradient ? getUid(fill) : typeof fill === "object" && "src" in fill ? fill.src + ":" + fill.offset : asArray(fill).toString();
    }
    /**
     * @return {boolean} The fill style is loading an image pattern.
     */
    loading() {
      return !!this.patternImage_;
    }
    /**
     * @return {Promise<void>} `false` or a promise that resolves when the style is ready to use.
     */
    ready() {
      return this.patternImage_ ? this.patternImage_.ready() : Promise.resolve();
    }
  };
  var Fill_default = Fill;

  // node_modules/ol/style/Icon.js
  function calculateScale(width, height, wantedWidth, wantedHeight) {
    if (wantedWidth !== void 0 && wantedHeight !== void 0) {
      return [wantedWidth / width, wantedHeight / height];
    }
    if (wantedWidth !== void 0) {
      return wantedWidth / width;
    }
    if (wantedHeight !== void 0) {
      return wantedHeight / height;
    }
    return 1;
  }
  var Icon = class _Icon extends Image_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options || {};
      const opacity = options.opacity !== void 0 ? options.opacity : 1;
      const rotation = options.rotation !== void 0 ? options.rotation : 0;
      const scale4 = options.scale !== void 0 ? options.scale : 1;
      const rotateWithView = options.rotateWithView !== void 0 ? options.rotateWithView : false;
      super({
        opacity,
        rotation,
        scale: scale4,
        displacement: options.displacement !== void 0 ? options.displacement : [0, 0],
        rotateWithView,
        declutterMode: options.declutterMode
      });
      this.anchor_ = options.anchor !== void 0 ? options.anchor : [0.5, 0.5];
      this.normalizedAnchor_ = null;
      this.anchorOrigin_ = options.anchorOrigin !== void 0 ? options.anchorOrigin : "top-left";
      this.anchorXUnits_ = options.anchorXUnits !== void 0 ? options.anchorXUnits : "fraction";
      this.anchorYUnits_ = options.anchorYUnits !== void 0 ? options.anchorYUnits : "fraction";
      this.crossOrigin_ = options.crossOrigin !== void 0 ? options.crossOrigin : null;
      this.referrerPolicy_ = options.referrerPolicy;
      const image = options.img !== void 0 ? options.img : null;
      let cacheKey = options.src;
      assert(
        !(cacheKey !== void 0 && image),
        "`image` and `src` cannot be provided at the same time"
      );
      if ((cacheKey === void 0 || cacheKey.length === 0) && image) {
        cacheKey = /** @type {HTMLImageElement} */
        image.src || getUid(image);
      }
      assert(
        cacheKey !== void 0 && cacheKey.length > 0,
        "A defined and non-empty `src` or `image` must be provided"
      );
      assert(
        !((options.width !== void 0 || options.height !== void 0) && options.scale !== void 0),
        "`width` or `height` cannot be provided together with `scale`"
      );
      let imageState;
      if (options.src !== void 0) {
        imageState = ImageState_default.IDLE;
      } else if (image !== void 0) {
        if ("complete" in image) {
          if (image.complete) {
            imageState = image.src ? ImageState_default.LOADED : ImageState_default.IDLE;
          } else {
            imageState = ImageState_default.LOADING;
          }
        } else {
          imageState = ImageState_default.LOADED;
        }
      }
      this.color_ = options.color !== void 0 ? asArray(options.color) : null;
      this.iconImage_ = get4(
        image,
        /** @type {string} */
        cacheKey,
        {
          crossOrigin: this.crossOrigin_,
          referrerPolicy: this.referrerPolicy_
        },
        imageState,
        this.color_
      );
      this.offset_ = options.offset !== void 0 ? options.offset : [0, 0];
      this.offsetOrigin_ = options.offsetOrigin !== void 0 ? options.offsetOrigin : "top-left";
      this.origin_ = null;
      this.size_ = options.size !== void 0 ? options.size : null;
      this.initialOptions_;
      if (options.width !== void 0 || options.height !== void 0) {
        let width, height;
        if (options.size) {
          [width, height] = options.size;
        } else {
          const image2 = this.getImage(1);
          if (image2.width && image2.height) {
            width = image2.width;
            height = image2.height;
          } else if (image2 instanceof HTMLImageElement) {
            this.initialOptions_ = options;
            const onload = () => {
              this.unlistenImageChange(onload);
              if (!this.initialOptions_) {
                return;
              }
              const imageSize = this.iconImage_.getSize();
              this.setScale(
                calculateScale(
                  imageSize[0],
                  imageSize[1],
                  options.width,
                  options.height
                )
              );
            };
            this.listenImageChange(onload);
            return;
          }
        }
        if (width !== void 0) {
          this.setScale(
            calculateScale(width, height, options.width, options.height)
          );
        }
      }
    }
    /**
     * Clones the style. The underlying Image/HTMLCanvasElement is not cloned.
     * @return {Icon} The cloned style.
     * @api
     * @override
     */
    clone() {
      let scale4, width, height;
      if (this.initialOptions_) {
        width = this.initialOptions_.width;
        height = this.initialOptions_.height;
      } else {
        scale4 = this.getScale();
        scale4 = Array.isArray(scale4) ? scale4.slice() : scale4;
      }
      return new _Icon({
        anchor: this.anchor_.slice(),
        anchorOrigin: this.anchorOrigin_,
        anchorXUnits: this.anchorXUnits_,
        anchorYUnits: this.anchorYUnits_,
        color: this.color_ && this.color_.slice ? this.color_.slice() : this.color_ || void 0,
        crossOrigin: this.crossOrigin_,
        referrerPolicy: this.referrerPolicy_,
        offset: this.offset_.slice(),
        offsetOrigin: this.offsetOrigin_,
        opacity: this.getOpacity(),
        rotateWithView: this.getRotateWithView(),
        rotation: this.getRotation(),
        scale: scale4,
        width,
        height,
        size: this.size_ !== null ? this.size_.slice() : void 0,
        src: this.getSrc(),
        displacement: this.getDisplacement().slice(),
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the anchor point in pixels. The anchor determines the center point for the
     * symbolizer.
     * @return {Array<number>} Anchor.
     * @api
     * @override
     */
    getAnchor() {
      let anchor = this.normalizedAnchor_;
      if (!anchor) {
        anchor = this.anchor_;
        const size = this.getSize();
        if (this.anchorXUnits_ == "fraction" || this.anchorYUnits_ == "fraction") {
          if (!size) {
            return null;
          }
          anchor = this.anchor_.slice();
          if (this.anchorXUnits_ == "fraction") {
            anchor[0] *= size[0];
          }
          if (this.anchorYUnits_ == "fraction") {
            anchor[1] *= size[1];
          }
        }
        if (this.anchorOrigin_ != "top-left") {
          if (!size) {
            return null;
          }
          if (anchor === this.anchor_) {
            anchor = this.anchor_.slice();
          }
          if (this.anchorOrigin_ == "top-right" || this.anchorOrigin_ == "bottom-right") {
            anchor[0] = -anchor[0] + size[0];
          }
          if (this.anchorOrigin_ == "bottom-left" || this.anchorOrigin_ == "bottom-right") {
            anchor[1] = -anchor[1] + size[1];
          }
        }
        this.normalizedAnchor_ = anchor;
      }
      const displacement = this.getDisplacement();
      const scale4 = this.getScaleArray();
      return [
        anchor[0] - displacement[0] / scale4[0],
        anchor[1] + displacement[1] / scale4[1]
      ];
    }
    /**
     * Set the anchor point. The anchor determines the center point for the
     * symbolizer.
     *
     * @param {Array<number>} anchor Anchor.
     * @api
     */
    setAnchor(anchor) {
      this.anchor_ = anchor;
      this.normalizedAnchor_ = null;
    }
    /**
     * Get the icon color.
     * @return {import("../color.js").Color} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Set the icon color.
     *
     * Warning: Repeatedly setting the color on an icon style
     * causes the icon image to be re-created each time. This can have a
     * severe performance impact.
     *
     * @param {import("../color.js").Color|string|null|undefined} color Color.
     */
    setColor(color) {
      const nextColor = color ? asArray(color) : null;
      if (this.color_ === nextColor || this.color_ && nextColor && this.color_.length === nextColor.length && this.color_.every((value, index) => value === nextColor[index])) {
        return;
      }
      this.color_ = nextColor;
      const src = this.getSrc();
      const image = src !== void 0 ? null : this.getHitDetectionImage();
      const imageState = src !== void 0 ? ImageState_default.IDLE : this.iconImage_.getImageState();
      this.iconImage_ = get4(
        image,
        src,
        {
          crossOrigin: this.crossOrigin_,
          referrerPolicy: this.referrerPolicy_
        },
        imageState,
        this.color_
      );
    }
    /**
     * Get the image icon.
     * @param {number} pixelRatio Pixel ratio.
     * @return {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} Image or Canvas element. If the Icon
     * style was configured with `src` or with a not let loaded `img`, an `ImageBitmap` will be returned.
     * @api
     * @override
     */
    getImage(pixelRatio) {
      return this.iconImage_.getImage(pixelRatio);
    }
    /**
     * Get the pixel ratio.
     * @param {number} pixelRatio Pixel ratio.
     * @return {number} The pixel ratio of the image.
     * @api
     * @override
     */
    getPixelRatio(pixelRatio) {
      return this.iconImage_.getPixelRatio(pixelRatio);
    }
    /**
     * @return {import("../size.js").Size} Image size.
     * @override
     */
    getImageSize() {
      return this.iconImage_.getSize();
    }
    /**
     * @return {import("../ImageState.js").default} Image state.
     * @override
     */
    getImageState() {
      return this.iconImage_.getImageState();
    }
    /**
     * @return {HTMLImageElement|HTMLCanvasElement|OffscreenCanvas|ImageBitmap} Image element.
     * @override
     */
    getHitDetectionImage() {
      return this.iconImage_.getHitDetectionImage();
    }
    /**
     * Get the origin of the symbolizer.
     * @return {Array<number>} Origin.
     * @api
     * @override
     */
    getOrigin() {
      if (this.origin_) {
        return this.origin_;
      }
      let offset = this.offset_;
      if (this.offsetOrigin_ != "top-left") {
        const size = this.getSize();
        const iconImageSize = this.iconImage_.getSize();
        if (!size || !iconImageSize) {
          return null;
        }
        offset = offset.slice();
        if (this.offsetOrigin_ == "top-right" || this.offsetOrigin_ == "bottom-right") {
          offset[0] = iconImageSize[0] - size[0] - offset[0];
        }
        if (this.offsetOrigin_ == "bottom-left" || this.offsetOrigin_ == "bottom-right") {
          offset[1] = iconImageSize[1] - size[1] - offset[1];
        }
      }
      this.origin_ = offset;
      return this.origin_;
    }
    /**
     * Get the image URL.
     * @return {string|undefined} Image src.
     * @api
     */
    getSrc() {
      return this.iconImage_.getSrc();
    }
    /**
     * Set the image URI
     * @param {string} src Image source URI
     * @api
     */
    setSrc(src) {
      this.iconImage_ = get4(
        null,
        src,
        {
          crossOrigin: this.crossOrigin_,
          referrerPolicy: this.referrerPolicy_
        },
        ImageState_default.IDLE,
        this.color_
      );
    }
    /**
     * Get the size of the icon (in pixels).
     * @return {import("../size.js").Size} Image size.
     * @api
     * @override
     */
    getSize() {
      return !this.size_ ? this.iconImage_.getSize() : this.size_;
    }
    /**
     * Get the width of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
     * @return {number} Icon width (in pixels).
     * @api
     */
    getWidth() {
      const scale4 = this.getScaleArray();
      if (this.size_) {
        return this.size_[0] * scale4[0];
      }
      if (this.iconImage_.getImageState() == ImageState_default.LOADED) {
        return this.iconImage_.getSize()[0] * scale4[0];
      }
      return void 0;
    }
    /**
     * Get the height of the icon (in pixels). Will return undefined when the icon image is not yet loaded.
     * @return {number} Icon height (in pixels).
     * @api
     */
    getHeight() {
      const scale4 = this.getScaleArray();
      if (this.size_) {
        return this.size_[1] * scale4[1];
      }
      if (this.iconImage_.getImageState() == ImageState_default.LOADED) {
        return this.iconImage_.getSize()[1] * scale4[1];
      }
      return void 0;
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size} scale Scale.
     * @api
     * @override
     */
    setScale(scale4) {
      delete this.initialOptions_;
      super.setScale(scale4);
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    listenImageChange(listener) {
      this.iconImage_.addEventListener(EventType_default.CHANGE, listener);
    }
    /**
     * Load not yet loaded URI.
     * When rendering a feature with an icon style, the vector renderer will
     * automatically call this method. However, you might want to call this
     * method yourself for preloading or other purposes.
     * @api
     * @override
     */
    load() {
      this.iconImage_.load();
    }
    /**
     * @param {function(import("../events/Event.js").default): void} listener Listener function.
     * @override
     */
    unlistenImageChange(listener) {
      this.iconImage_.removeEventListener(EventType_default.CHANGE, listener);
    }
    /**
     * @override
     */
    ready() {
      return this.iconImage_.ready();
    }
  };
  var Icon_default = Icon;

  // node_modules/ol/style/Stroke.js
  var Stroke = class _Stroke {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options || {};
      this.color_ = options.color !== void 0 ? options.color : null;
      this.lineCap_ = options.lineCap;
      this.lineDash_ = options.lineDash !== void 0 ? options.lineDash : null;
      this.lineDashOffset_ = options.lineDashOffset;
      this.lineJoin_ = options.lineJoin;
      this.miterLimit_ = options.miterLimit;
      this.offset_ = options.offset;
      this.width_ = options.width;
    }
    /**
     * Clones the style.
     * @return {Stroke} The cloned style.
     * @api
     */
    clone() {
      const color = this.getColor();
      return new _Stroke({
        color: Array.isArray(color) ? color.slice() : color || void 0,
        lineCap: this.getLineCap(),
        lineDash: this.getLineDash() ? this.getLineDash().slice() : void 0,
        lineDashOffset: this.getLineDashOffset(),
        lineJoin: this.getLineJoin(),
        miterLimit: this.getMiterLimit(),
        offset: this.getOffset(),
        width: this.getWidth()
      });
    }
    /**
     * Get the stroke color.
     * @return {import("../color.js").Color|import("../colorlike.js").ColorLike} Color.
     * @api
     */
    getColor() {
      return this.color_;
    }
    /**
     * Get the line cap type for the stroke.
     * @return {CanvasLineCap|undefined} Line cap.
     * @api
     */
    getLineCap() {
      return this.lineCap_;
    }
    /**
     * Get the line dash style for the stroke.
     * @return {Array<number>|null} Line dash.
     * @api
     */
    getLineDash() {
      return this.lineDash_;
    }
    /**
     * Get the line dash offset for the stroke.
     * @return {number|undefined} Line dash offset.
     * @api
     */
    getLineDashOffset() {
      return this.lineDashOffset_;
    }
    /**
     * Get the line join type for the stroke.
     * @return {CanvasLineJoin|undefined} Line join.
     * @api
     */
    getLineJoin() {
      return this.lineJoin_;
    }
    /**
     * Get the miter limit for the stroke.
     * @return {number|undefined} Miter limit.
     * @api
     */
    getMiterLimit() {
      return this.miterLimit_;
    }
    /**
     * Get the line offset in pixels.
     * @return {number|undefined} Offset.
     * @api
     */
    getOffset() {
      return this.offset_;
    }
    /**
     * Get the stroke width.
     * @return {number|undefined} Width.
     * @api
     */
    getWidth() {
      return this.width_;
    }
    /**
     * Set the color.
     *
     * @param {import("../color.js").Color|import("../colorlike.js").ColorLike} color Color.
     * @api
     */
    setColor(color) {
      this.color_ = color;
    }
    /**
     * Set the line cap.
     *
     * @param {CanvasLineCap|undefined} lineCap Line cap.
     * @api
     */
    setLineCap(lineCap) {
      this.lineCap_ = lineCap;
    }
    /**
     * Set the line dash.
     *
     * @param {Array<number>|null} lineDash Line dash.
     * @api
     */
    setLineDash(lineDash) {
      this.lineDash_ = lineDash;
    }
    /**
     * Set the line dash offset.
     *
     * @param {number|undefined} lineDashOffset Line dash offset.
     * @api
     */
    setLineDashOffset(lineDashOffset) {
      this.lineDashOffset_ = lineDashOffset;
    }
    /**
     * Set the line join.
     *
     * @param {CanvasLineJoin|undefined} lineJoin Line join.
     * @api
     */
    setLineJoin(lineJoin) {
      this.lineJoin_ = lineJoin;
    }
    /**
     * Set the miter limit.
     *
     * @param {number|undefined} miterLimit Miter limit.
     * @api
     */
    setMiterLimit(miterLimit) {
      this.miterLimit_ = miterLimit;
    }
    /**
     * Set the line offset in pixels.
     *
     * @param {number|undefined} offset Offset.
     * @api
     */
    setOffset(offset) {
      this.offset_ = offset;
    }
    /**
     * Set the width.
     *
     * @param {number|undefined} width Width.
     * @api
     */
    setWidth(width) {
      this.width_ = width;
    }
  };
  var Stroke_default = Stroke;

  // node_modules/ol/style/Style.js
  var Style = class _Style {
    /**
     * @param {Options} [options] Style options.
     */
    constructor(options) {
      options = options || {};
      this.geometry_ = null;
      this.geometryFunction_ = defaultGeometryFunction;
      if (options.geometry !== void 0) {
        this.setGeometry(options.geometry);
      }
      this.fill_ = options.fill !== void 0 ? options.fill : null;
      this.image_ = options.image !== void 0 ? options.image : null;
      this.renderer_ = options.renderer !== void 0 ? options.renderer : null;
      this.hitDetectionRenderer_ = options.hitDetectionRenderer !== void 0 ? options.hitDetectionRenderer : null;
      this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
      this.text_ = options.text !== void 0 ? options.text : null;
      this.zIndex_ = options.zIndex;
    }
    /**
     * Clones the style.
     * @return {Style} The cloned style.
     * @api
     */
    clone() {
      let geometry = this.getGeometry();
      if (geometry && typeof geometry === "object") {
        geometry = /** @type {import("../geom/Geometry.js").default} */
        geometry.clone();
      }
      return new _Style({
        geometry: geometry ?? void 0,
        fill: this.getFill() ? this.getFill().clone() : void 0,
        image: this.getImage() ? this.getImage().clone() : void 0,
        renderer: this.getRenderer() ?? void 0,
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        text: this.getText() ? this.getText().clone() : void 0,
        zIndex: this.getZIndex()
      });
    }
    /**
     * Get the custom renderer function that was configured with
     * {@link #setRenderer} or the `renderer` constructor option.
     * @return {RenderFunction|null} Custom renderer function.
     * @api
     */
    getRenderer() {
      return this.renderer_;
    }
    /**
     * Sets a custom renderer function for this style. When set, `fill`, `stroke`
     * and `image` options of the style will be ignored.
     * @param {RenderFunction|null} renderer Custom renderer function.
     * @api
     */
    setRenderer(renderer) {
      this.renderer_ = renderer;
    }
    /**
     * Sets a custom renderer function for this style used
     * in hit detection.
     * @param {RenderFunction|null} renderer Custom renderer function.
     * @api
     */
    setHitDetectionRenderer(renderer) {
      this.hitDetectionRenderer_ = renderer;
    }
    /**
     * Get the custom renderer function that was configured with
     * {@link #setHitDetectionRenderer} or the `hitDetectionRenderer` constructor option.
     * @return {RenderFunction|null} Custom renderer function.
     * @api
     */
    getHitDetectionRenderer() {
      return this.hitDetectionRenderer_;
    }
    /**
     * Get the geometry to be rendered.
     * @return {string|import("../geom/Geometry.js").default|GeometryFunction|null}
     * Feature property or geometry or function that returns the geometry that will
     * be rendered with this style.
     * @api
     */
    getGeometry() {
      return this.geometry_;
    }
    /**
     * Get the function used to generate a geometry for rendering.
     * @return {!GeometryFunction} Function that is called with a feature
     * and returns the geometry to render instead of the feature's geometry.
     * @api
     */
    getGeometryFunction() {
      return this.geometryFunction_;
    }
    /**
     * Get the fill style.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Set the fill style.
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(fill) {
      this.fill_ = fill;
    }
    /**
     * Get the image style.
     * @return {import("./Image.js").default|null} Image style.
     * @api
     */
    getImage() {
      return this.image_;
    }
    /**
     * Set the image style.
     * @param {import("./Image.js").default} image Image style.
     * @api
     */
    setImage(image) {
      this.image_ = image;
    }
    /**
     * Get the stroke style.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Set the stroke style.
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(stroke) {
      this.stroke_ = stroke;
    }
    /**
     * Get the text style.
     * @return {import("./Text.js").default|null} Text style.
     * @api
     */
    getText() {
      return this.text_;
    }
    /**
     * Set the text style.
     * @param {import("./Text.js").default} text Text style.
     * @api
     */
    setText(text) {
      this.text_ = text;
    }
    /**
     * Get the z-index for the style.
     * @return {number|undefined} ZIndex.
     * @api
     */
    getZIndex() {
      return this.zIndex_;
    }
    /**
     * Set a geometry that is rendered instead of the feature's geometry.
     *
     * @param {string|import("../geom/Geometry.js").default|GeometryFunction|null} geometry
     *     Feature property or geometry or function returning a geometry to render
     *     for this style.
     * @api
     */
    setGeometry(geometry) {
      if (typeof geometry === "function") {
        this.geometryFunction_ = geometry;
      } else if (typeof geometry === "string") {
        this.geometryFunction_ = function(feature) {
          return (
            /** @type {import("../geom/Geometry.js").default} */
            feature.get(geometry)
          );
        };
      } else if (!geometry) {
        this.geometryFunction_ = defaultGeometryFunction;
      } else if (geometry !== void 0) {
        this.geometryFunction_ = function() {
          return (
            /** @type {import("../geom/Geometry.js").default} */
            geometry
          );
        };
      }
      this.geometry_ = geometry;
    }
    /**
     * Set the z-index.
     *
     * @param {number|undefined} zIndex ZIndex.
     * @api
     */
    setZIndex(zIndex) {
      this.zIndex_ = zIndex;
    }
  };
  function toFunction(obj) {
    let styleFunction;
    if (typeof obj === "function") {
      styleFunction = obj;
    } else {
      let styles;
      if (Array.isArray(obj)) {
        styles = obj;
      } else {
        assert(
          typeof /** @type {?} */
          obj.getZIndex === "function",
          "Expected an `Style` or an array of `Style`"
        );
        const style = (
          /** @type {Style} */
          obj
        );
        styles = [style];
      }
      styleFunction = function() {
        return styles;
      };
    }
    return styleFunction;
  }
  var defaultStyles = null;
  function createDefaultStyle(feature, resolution) {
    if (!defaultStyles) {
      const fill = new Fill_default({
        color: "rgba(255,255,255,0.4)"
      });
      const stroke = new Stroke_default({
        color: "#3399CC",
        width: 1.25
      });
      defaultStyles = [
        new Style({
          image: new Circle_default({
            fill,
            stroke,
            radius: 5
          }),
          fill,
          stroke
        })
      ];
    }
    return defaultStyles;
  }
  function defaultGeometryFunction(feature) {
    return feature.getGeometry();
  }
  var Style_default = Style;

  // node_modules/ol/style/Text.js
  var DEFAULT_FILL_COLOR = "#333";
  var Text = class _Text {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options || {};
      this.font_ = options.font;
      this.rotation_ = options.rotation;
      this.rotateWithView_ = options.rotateWithView;
      this.keepUpright_ = options.keepUpright;
      this.scale_ = options.scale;
      this.scaleArray_ = toSize(options.scale !== void 0 ? options.scale : 1);
      this.text_ = options.text;
      this.textAlign_ = options.textAlign;
      this.justify_ = options.justify;
      this.repeat_ = options.repeat;
      this.textBaseline_ = options.textBaseline;
      this.fill_ = options.fill !== void 0 ? options.fill : new Fill_default({ color: DEFAULT_FILL_COLOR });
      this.maxAngle_ = options.maxAngle !== void 0 ? options.maxAngle : Math.PI / 4;
      this.placement_ = options.placement !== void 0 ? options.placement : "point";
      this.overflow_ = !!options.overflow;
      this.stroke_ = options.stroke !== void 0 ? options.stroke : null;
      this.offsetX_ = options.offsetX !== void 0 ? options.offsetX : 0;
      this.offsetY_ = options.offsetY !== void 0 ? options.offsetY : 0;
      this.backgroundFill_ = options.backgroundFill ? options.backgroundFill : null;
      this.backgroundStroke_ = options.backgroundStroke ? options.backgroundStroke : null;
      this.padding_ = options.padding === void 0 ? null : options.padding;
      this.declutterMode_ = options.declutterMode;
    }
    /**
     * Clones the style.
     * @return {Text} The cloned style.
     * @api
     */
    clone() {
      const scale4 = this.getScale();
      return new _Text({
        font: this.getFont(),
        placement: this.getPlacement(),
        repeat: this.getRepeat(),
        maxAngle: this.getMaxAngle(),
        overflow: this.getOverflow(),
        rotation: this.getRotation(),
        rotateWithView: this.getRotateWithView(),
        keepUpright: this.getKeepUpright(),
        scale: Array.isArray(scale4) ? scale4.slice() : scale4,
        text: this.getText(),
        textAlign: this.getTextAlign(),
        justify: this.getJustify(),
        textBaseline: this.getTextBaseline(),
        fill: this.getFill() instanceof Fill_default ? this.getFill().clone() : this.getFill(),
        stroke: this.getStroke() ? this.getStroke().clone() : void 0,
        offsetX: this.getOffsetX(),
        offsetY: this.getOffsetY(),
        backgroundFill: this.getBackgroundFill() ? this.getBackgroundFill().clone() : void 0,
        backgroundStroke: this.getBackgroundStroke() ? this.getBackgroundStroke().clone() : void 0,
        padding: this.getPadding() || void 0,
        declutterMode: this.getDeclutterMode()
      });
    }
    /**
     * Get the `overflow` configuration.
     * @return {boolean} Let text overflow the length of the path they follow.
     * @api
     */
    getOverflow() {
      return this.overflow_;
    }
    /**
     * Get the font name.
     * @return {string|undefined} Font.
     * @api
     */
    getFont() {
      return this.font_;
    }
    /**
     * Get the maximum angle between adjacent characters.
     * @return {number} Angle in radians.
     * @api
     */
    getMaxAngle() {
      return this.maxAngle_;
    }
    /**
     * Get the label placement.
     * @return {TextPlacement} Text placement.
     * @api
     */
    getPlacement() {
      return this.placement_;
    }
    /**
     * Get the repeat interval of the text.
     * @return {number|undefined} Repeat interval in pixels.
     * @api
     */
    getRepeat() {
      return this.repeat_;
    }
    /**
     * Get the x-offset for the text.
     * @return {number} Horizontal text offset.
     * @api
     */
    getOffsetX() {
      return this.offsetX_;
    }
    /**
     * Get the y-offset for the text.
     * @return {number} Vertical text offset.
     * @api
     */
    getOffsetY() {
      return this.offsetY_;
    }
    /**
     * Get the fill style for the text.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getFill() {
      return this.fill_;
    }
    /**
     * Determine whether the text rotates with the map.
     * @return {boolean|undefined} Rotate with map.
     * @api
     */
    getRotateWithView() {
      return this.rotateWithView_;
    }
    /**
     * Determine whether the text can be rendered upside down.
     * @return {boolean|undefined} Keep text upright.
     * @api
     */
    getKeepUpright() {
      return this.keepUpright_;
    }
    /**
     * Get the text rotation.
     * @return {number|undefined} Rotation.
     * @api
     */
    getRotation() {
      return this.rotation_;
    }
    /**
     * Get the text scale.
     * @return {number|import("../size.js").Size|undefined} Scale.
     * @api
     */
    getScale() {
      return this.scale_;
    }
    /**
     * Get the symbolizer scale array.
     * @return {import("../size.js").Size} Scale array.
     */
    getScaleArray() {
      return this.scaleArray_;
    }
    /**
     * Get the stroke style for the text.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getStroke() {
      return this.stroke_;
    }
    /**
     * Get the text to be rendered.
     * @return {string|Array<string>|undefined} Text.
     * @api
     */
    getText() {
      return this.text_;
    }
    /**
     * Get the text alignment.
     * @return {CanvasTextAlign|undefined} Text align.
     * @api
     */
    getTextAlign() {
      return this.textAlign_;
    }
    /**
     * Get the justification.
     * @return {TextJustify|undefined} Justification.
     * @api
     */
    getJustify() {
      return this.justify_;
    }
    /**
     * Get the text baseline.
     * @return {CanvasTextBaseline|undefined} Text baseline.
     * @api
     */
    getTextBaseline() {
      return this.textBaseline_;
    }
    /**
     * Get the background fill style for the text.
     * @return {import("./Fill.js").default|null} Fill style.
     * @api
     */
    getBackgroundFill() {
      return this.backgroundFill_;
    }
    /**
     * Get the background stroke style for the text.
     * @return {import("./Stroke.js").default|null} Stroke style.
     * @api
     */
    getBackgroundStroke() {
      return this.backgroundStroke_;
    }
    /**
     * Get the padding for the text.
     * @return {Array<number>|null} Padding.
     * @api
     */
    getPadding() {
      return this.padding_;
    }
    /**
     * Get the declutter mode of the shape
     * @return {import("./Style.js").DeclutterMode} Shape's declutter mode
     * @api
     */
    getDeclutterMode() {
      return this.declutterMode_;
    }
    /**
     * Set the `overflow` property.
     *
     * @param {boolean} overflow Let text overflow the path that it follows.
     * @api
     */
    setOverflow(overflow) {
      this.overflow_ = overflow;
    }
    /**
     * Set the font.
     *
     * @param {string|undefined} font Font.
     * @api
     */
    setFont(font) {
      this.font_ = font;
    }
    /**
     * Set the maximum angle between adjacent characters.
     *
     * @param {number} maxAngle Angle in radians.
     * @api
     */
    setMaxAngle(maxAngle) {
      this.maxAngle_ = maxAngle;
    }
    /**
     * Set the x offset.
     *
     * @param {number} offsetX Horizontal text offset.
     * @api
     */
    setOffsetX(offsetX) {
      this.offsetX_ = offsetX;
    }
    /**
     * Set the y offset.
     *
     * @param {number} offsetY Vertical text offset.
     * @api
     */
    setOffsetY(offsetY) {
      this.offsetY_ = offsetY;
    }
    /**
     * Set the text placement.
     *
     * @param {TextPlacement} placement Placement.
     * @api
     */
    setPlacement(placement) {
      this.placement_ = placement;
    }
    /**
     * Set the repeat interval of the text.
     * @param {number|undefined} [repeat] Repeat interval in pixels.
     * @api
     */
    setRepeat(repeat) {
      this.repeat_ = repeat;
    }
    /**
     * Set whether to rotate the text with the view.
     *
     * @param {boolean} rotateWithView Rotate with map.
     * @api
     */
    setRotateWithView(rotateWithView) {
      this.rotateWithView_ = rotateWithView;
    }
    /**
     * Set whether the text can be rendered upside down.
     *
     * @param {boolean} keepUpright Keep text upright.
     * @api
     */
    setKeepUpright(keepUpright) {
      this.keepUpright_ = keepUpright;
    }
    /**
     * Set the fill.
     *
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setFill(fill) {
      this.fill_ = fill;
    }
    /**
     * Set the rotation.
     *
     * @param {number|undefined} rotation Rotation.
     * @api
     */
    setRotation(rotation) {
      this.rotation_ = rotation;
    }
    /**
     * Set the scale.
     *
     * @param {number|import("../size.js").Size|undefined} scale Scale.
     * @api
     */
    setScale(scale4) {
      this.scale_ = scale4;
      this.scaleArray_ = toSize(scale4 !== void 0 ? scale4 : 1);
    }
    /**
     * Set the stroke.
     *
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setStroke(stroke) {
      this.stroke_ = stroke;
    }
    /**
     * Set the text.
     *
     * @param {string|Array<string>|undefined} text Text.
     * @api
     */
    setText(text) {
      this.text_ = text;
    }
    /**
     * Set the text alignment.
     *
     * @param {CanvasTextAlign|undefined} textAlign Text align.
     * @api
     */
    setTextAlign(textAlign) {
      this.textAlign_ = textAlign;
    }
    /**
     * Set the justification.
     *
     * @param {TextJustify|undefined} justify Justification.
     * @api
     */
    setJustify(justify) {
      this.justify_ = justify;
    }
    /**
     * Set the text baseline.
     *
     * @param {CanvasTextBaseline|undefined} textBaseline Text baseline.
     * @api
     */
    setTextBaseline(textBaseline) {
      this.textBaseline_ = textBaseline;
    }
    /**
     * Set the background fill.
     *
     * @param {import("./Fill.js").default|null} fill Fill style.
     * @api
     */
    setBackgroundFill(fill) {
      this.backgroundFill_ = fill;
    }
    /**
     * Set the background stroke.
     *
     * @param {import("./Stroke.js").default|null} stroke Stroke style.
     * @api
     */
    setBackgroundStroke(stroke) {
      this.backgroundStroke_ = stroke;
    }
    /**
     * Set the padding (`[top, right, bottom, left]`).
     *
     * @param {Array<number>|null} padding Padding.
     * @api
     */
    setPadding(padding) {
      this.padding_ = padding;
    }
  };
  var Text_default = Text;

  // node_modules/ol/render/canvas/style.js
  function always2(context) {
    return true;
  }
  function rulesToStyleFunction(rules) {
    const parsingContext = newParsingContext();
    const evaluator = buildRuleSet(rules, parsingContext);
    const evaluationContext = newEvaluationContext();
    return function(feature, resolution) {
      evaluationContext.properties = feature.getPropertiesInternal();
      evaluationContext.resolution = resolution;
      if (parsingContext.featureId) {
        const id = feature.getId();
        if (id !== void 0) {
          evaluationContext.featureId = id;
        } else {
          evaluationContext.featureId = null;
        }
      }
      if (parsingContext.geometryType) {
        evaluationContext.geometryType = computeGeometryType(
          feature.getGeometry()
        );
      }
      return evaluator(evaluationContext);
    };
  }
  function flatStylesToStyleFunction(flatStyles) {
    const parsingContext = newParsingContext();
    const length = flatStyles.length;
    const evaluators = new Array(length);
    for (let i = 0; i < length; ++i) {
      evaluators[i] = buildStyle(flatStyles[i], parsingContext);
    }
    const evaluationContext = newEvaluationContext();
    const styles = new Array(length);
    return function(feature, resolution) {
      evaluationContext.properties = feature.getPropertiesInternal();
      evaluationContext.resolution = resolution;
      if (parsingContext.featureId) {
        const id = feature.getId();
        if (id !== void 0) {
          evaluationContext.featureId = id;
        } else {
          evaluationContext.featureId = null;
        }
      }
      let nonNullCount = 0;
      for (let i = 0; i < length; ++i) {
        const style = evaluators[i](evaluationContext);
        if (style) {
          styles[nonNullCount] = style;
          nonNullCount += 1;
        }
      }
      styles.length = nonNullCount;
      return styles;
    };
  }
  function buildRuleSet(rules, context) {
    const length = rules.length;
    const compiledRules = new Array(length);
    for (let i = 0; i < length; ++i) {
      const rule = rules[i];
      const filter = "filter" in rule ? buildExpression(rule.filter, BooleanType, context) : always2;
      let styles;
      if (Array.isArray(rule.style)) {
        const styleLength = rule.style.length;
        styles = new Array(styleLength);
        for (let j = 0; j < styleLength; ++j) {
          styles[j] = buildStyle(rule.style[j], context);
        }
      } else {
        styles = [buildStyle(rule.style, context)];
      }
      compiledRules[i] = { filter, styles };
    }
    return function(context2) {
      const styles = [];
      let someMatched = false;
      for (let i = 0; i < length; ++i) {
        const filterEvaluator = compiledRules[i].filter;
        if (!filterEvaluator(context2)) {
          continue;
        }
        if (rules[i].else && someMatched) {
          continue;
        }
        someMatched = true;
        for (const styleEvaluator of compiledRules[i].styles) {
          const style = styleEvaluator(context2);
          if (!style) {
            continue;
          }
          styles.push(style);
        }
      }
      return styles;
    };
  }
  function buildStyle(flatStyle, context) {
    const evaluateFill = buildFill(flatStyle, "", context);
    const evaluateStroke = buildStroke(flatStyle, "", context);
    const evaluateText = buildText(flatStyle, context);
    const evaluateImage = buildImage(flatStyle, context);
    const evaluateZIndex = numberEvaluator(flatStyle, "z-index", context);
    if (!evaluateFill && !evaluateStroke && !evaluateText && !evaluateImage && !isEmpty2(flatStyle)) {
      throw new Error(
        "No fill, stroke, point, or text symbolizer properties in style: " + JSON.stringify(flatStyle)
      );
    }
    const style = new Style_default();
    return function(context2) {
      let empty = true;
      if (evaluateFill) {
        const fill = evaluateFill(context2);
        if (fill) {
          empty = false;
        }
        style.setFill(fill);
      }
      if (evaluateStroke) {
        const stroke = evaluateStroke(context2);
        if (stroke) {
          empty = false;
        }
        style.setStroke(stroke);
      }
      if (evaluateText) {
        const text = evaluateText(context2);
        if (text) {
          empty = false;
        }
        style.setText(text);
      }
      if (evaluateImage) {
        const image = evaluateImage(context2);
        if (image) {
          empty = false;
        }
        style.setImage(image);
      }
      if (evaluateZIndex) {
        style.setZIndex(evaluateZIndex(context2));
      }
      if (empty) {
        return null;
      }
      return style;
    };
  }
  function buildFill(flatStyle, prefix, context) {
    let evaluateColor;
    if (prefix + "fill-pattern-src" in flatStyle) {
      evaluateColor = patternEvaluator(flatStyle, prefix + "fill-", context);
    } else {
      if (flatStyle[prefix + "fill-color"] === "none") {
        return (context2) => null;
      }
      evaluateColor = colorLikeEvaluator(
        flatStyle,
        prefix + "fill-color",
        context
      );
    }
    if (!evaluateColor) {
      return null;
    }
    const fill = new Fill_default();
    return function(context2) {
      const color = evaluateColor(context2);
      if (color === NO_COLOR) {
        return null;
      }
      fill.setColor(color);
      return fill;
    };
  }
  function buildStroke(flatStyle, prefix, context) {
    const evaluateWidth = numberEvaluator(
      flatStyle,
      prefix + "stroke-width",
      context
    );
    const evaluateColor = colorLikeEvaluator(
      flatStyle,
      prefix + "stroke-color",
      context
    );
    if (!evaluateWidth && !evaluateColor) {
      return null;
    }
    const evaluateLineCap = stringEvaluator(
      flatStyle,
      prefix + "stroke-line-cap",
      context
    );
    const evaluateLineJoin = stringEvaluator(
      flatStyle,
      prefix + "stroke-line-join",
      context
    );
    const evaluateLineDash = numberArrayEvaluator(
      flatStyle,
      prefix + "stroke-line-dash",
      context
    );
    const evaluateLineDashOffset = numberEvaluator(
      flatStyle,
      prefix + "stroke-line-dash-offset",
      context
    );
    const evaluateMiterLimit = numberEvaluator(
      flatStyle,
      prefix + "stroke-miter-limit",
      context
    );
    const evaluateOffset = numberEvaluator(
      flatStyle,
      prefix + "stroke-offset",
      context
    );
    const stroke = new Stroke_default();
    return function(context2) {
      if (evaluateColor) {
        const color = evaluateColor(context2);
        if (color === NO_COLOR) {
          return null;
        }
        stroke.setColor(color);
      }
      if (evaluateWidth) {
        stroke.setWidth(evaluateWidth(context2));
      }
      if (evaluateLineCap) {
        const lineCap = evaluateLineCap(context2);
        if (lineCap !== "butt" && lineCap !== "round" && lineCap !== "square") {
          throw new Error("Expected butt, round, or square line cap");
        }
        stroke.setLineCap(lineCap);
      }
      if (evaluateLineJoin) {
        const lineJoin = evaluateLineJoin(context2);
        if (lineJoin !== "bevel" && lineJoin !== "round" && lineJoin !== "miter") {
          throw new Error("Expected bevel, round, or miter line join");
        }
        stroke.setLineJoin(lineJoin);
      }
      if (evaluateLineDash) {
        stroke.setLineDash(evaluateLineDash(context2));
      }
      if (evaluateLineDashOffset) {
        stroke.setLineDashOffset(evaluateLineDashOffset(context2));
      }
      if (evaluateMiterLimit) {
        stroke.setMiterLimit(evaluateMiterLimit(context2));
      }
      if (evaluateOffset) {
        stroke.setOffset(evaluateOffset(context2));
      }
      return stroke;
    };
  }
  function buildText(flatStyle, context) {
    const prefix = "text-";
    const evaluateValue = stringEvaluator(flatStyle, prefix + "value", context);
    if (!evaluateValue) {
      return null;
    }
    const evaluateFill = buildFill(flatStyle, prefix, context);
    const evaluateBackgroundFill = buildFill(
      flatStyle,
      prefix + "background-",
      context
    );
    const evaluateStroke = buildStroke(flatStyle, prefix, context);
    const evaluateBackgroundStroke = buildStroke(
      flatStyle,
      prefix + "background-",
      context
    );
    const evaluateFont = stringEvaluator(flatStyle, prefix + "font", context);
    const evaluateMaxAngle = numberEvaluator(
      flatStyle,
      prefix + "max-angle",
      context
    );
    const evaluateOffsetX = numberEvaluator(
      flatStyle,
      prefix + "offset-x",
      context
    );
    const evaluateOffsetY = numberEvaluator(
      flatStyle,
      prefix + "offset-y",
      context
    );
    const evaluateOverflow = booleanEvaluator(
      flatStyle,
      prefix + "overflow",
      context
    );
    const evaluatePlacement = stringEvaluator(
      flatStyle,
      prefix + "placement",
      context
    );
    const evaluateRepeat = numberEvaluator(flatStyle, prefix + "repeat", context);
    const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
    const evaluateRotateWithView = booleanEvaluator(
      flatStyle,
      prefix + "rotate-with-view",
      context
    );
    const evaluateRotation = numberEvaluator(
      flatStyle,
      prefix + "rotation",
      context
    );
    const evaluateAlign = stringEvaluator(flatStyle, prefix + "align", context);
    const evaluateJustify = stringEvaluator(
      flatStyle,
      prefix + "justify",
      context
    );
    const evaluateBaseline = stringEvaluator(
      flatStyle,
      prefix + "baseline",
      context
    );
    const evaluateKeepUpright = booleanEvaluator(
      flatStyle,
      prefix + "keep-upright",
      context
    );
    const evaluatePadding = numberArrayEvaluator(
      flatStyle,
      prefix + "padding",
      context
    );
    const declutterMode = optionalDeclutterMode(
      flatStyle,
      prefix + "declutter-mode"
    );
    const text = new Text_default({ declutterMode });
    return function(context2) {
      text.setText(evaluateValue(context2));
      if (evaluateFill) {
        text.setFill(evaluateFill(context2));
      }
      if (evaluateBackgroundFill) {
        text.setBackgroundFill(evaluateBackgroundFill(context2));
      }
      if (evaluateStroke) {
        text.setStroke(evaluateStroke(context2));
      }
      if (evaluateBackgroundStroke) {
        text.setBackgroundStroke(evaluateBackgroundStroke(context2));
      }
      if (evaluateFont) {
        text.setFont(evaluateFont(context2));
      }
      if (evaluateMaxAngle) {
        text.setMaxAngle(evaluateMaxAngle(context2));
      }
      if (evaluateOffsetX) {
        text.setOffsetX(evaluateOffsetX(context2));
      }
      if (evaluateOffsetY) {
        text.setOffsetY(evaluateOffsetY(context2));
      }
      if (evaluateOverflow) {
        text.setOverflow(evaluateOverflow(context2));
      }
      if (evaluatePlacement) {
        const placement = evaluatePlacement(context2);
        if (placement !== "point" && placement !== "line") {
          throw new Error("Expected point or line for text-placement");
        }
        text.setPlacement(placement);
      }
      if (evaluateRepeat) {
        text.setRepeat(evaluateRepeat(context2));
      }
      if (evaluateScale) {
        text.setScale(evaluateScale(context2));
      }
      if (evaluateRotateWithView) {
        text.setRotateWithView(evaluateRotateWithView(context2));
      }
      if (evaluateRotation) {
        text.setRotation(evaluateRotation(context2));
      }
      if (evaluateAlign) {
        const textAlign = evaluateAlign(context2);
        if (textAlign !== "left" && textAlign !== "center" && textAlign !== "right" && textAlign !== "end" && textAlign !== "start") {
          throw new Error(
            "Expected left, right, center, start, or end for text-align"
          );
        }
        text.setTextAlign(textAlign);
      }
      if (evaluateJustify) {
        const justify = evaluateJustify(context2);
        if (justify !== "left" && justify !== "right" && justify !== "center") {
          throw new Error("Expected left, right, or center for text-justify");
        }
        text.setJustify(justify);
      }
      if (evaluateBaseline) {
        const textBaseline = evaluateBaseline(context2);
        if (textBaseline !== "bottom" && textBaseline !== "top" && textBaseline !== "middle" && textBaseline !== "alphabetic" && textBaseline !== "hanging") {
          throw new Error(
            "Expected bottom, top, middle, alphabetic, or hanging for text-baseline"
          );
        }
        text.setTextBaseline(textBaseline);
      }
      if (evaluatePadding) {
        text.setPadding(evaluatePadding(context2));
      }
      if (evaluateKeepUpright) {
        text.setKeepUpright(evaluateKeepUpright(context2));
      }
      return text;
    };
  }
  function buildImage(flatStyle, context) {
    if ("icon-src" in flatStyle) {
      return buildIcon(flatStyle, context);
    }
    if ("shape-points" in flatStyle) {
      return buildShape(flatStyle, context);
    }
    if ("circle-radius" in flatStyle) {
      return buildCircle(flatStyle, context);
    }
    return null;
  }
  function buildIcon(flatStyle, context) {
    const prefix = "icon-";
    const srcName = prefix + "src";
    const src = requireString(flatStyle[srcName], srcName);
    const evaluateAnchor = coordinateEvaluator(
      flatStyle,
      prefix + "anchor",
      context
    );
    const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
    const evaluateOpacity = numberEvaluator(
      flatStyle,
      prefix + "opacity",
      context
    );
    const evaluateDisplacement = coordinateEvaluator(
      flatStyle,
      prefix + "displacement",
      context
    );
    const evaluateRotation = numberEvaluator(
      flatStyle,
      prefix + "rotation",
      context
    );
    const evaluateRotateWithView = booleanEvaluator(
      flatStyle,
      prefix + "rotate-with-view",
      context
    );
    const anchorOrigin = optionalIconOrigin(flatStyle, prefix + "anchor-origin");
    const anchorXUnits = optionalIconAnchorUnits(
      flatStyle,
      prefix + "anchor-x-units"
    );
    const anchorYUnits = optionalIconAnchorUnits(
      flatStyle,
      prefix + "anchor-y-units"
    );
    const colorValue = getExpressionValue(flatStyle, prefix + "color");
    let color;
    let evaluateColor = null;
    if (colorValue !== void 0) {
      const isColorExpression = Array.isArray(colorValue) && colorValue.length > 0 && typeof colorValue[0] === "string";
      if (isColorExpression) {
        evaluateColor = colorLikeEvaluator(flatStyle, prefix + "color", context);
      } else {
        color = requireColorLike(colorValue, prefix + "color");
      }
    }
    const crossOrigin = optionalString(flatStyle, prefix + "cross-origin");
    const offset = optionalNumberArray(flatStyle, prefix + "offset");
    const offsetOrigin = optionalIconOrigin(flatStyle, prefix + "offset-origin");
    const width = optionalNumber(flatStyle, prefix + "width");
    const height = optionalNumber(flatStyle, prefix + "height");
    const size = optionalSize(flatStyle, prefix + "size");
    const declutterMode = optionalDeclutterMode(
      flatStyle,
      prefix + "declutter-mode"
    );
    const iconOptions = {
      src,
      anchorOrigin,
      anchorXUnits,
      anchorYUnits,
      crossOrigin,
      offset,
      offsetOrigin,
      height,
      width,
      size,
      declutterMode
    };
    let icon = null;
    return function(context2) {
      if (!icon) {
        const initialColor = evaluateColor ? evaluateColor(context2) : color;
        icon = new Icon_default(
          initialColor !== void 0 ? Object.assign({}, iconOptions, { color: initialColor }) : Object.assign({}, iconOptions)
        );
      } else if (evaluateColor) {
        icon.setColor(evaluateColor(context2));
      }
      if (evaluateOpacity) {
        icon.setOpacity(evaluateOpacity(context2));
      }
      if (evaluateDisplacement) {
        icon.setDisplacement(evaluateDisplacement(context2));
      }
      if (evaluateRotation) {
        icon.setRotation(evaluateRotation(context2));
      }
      if (evaluateRotateWithView) {
        icon.setRotateWithView(evaluateRotateWithView(context2));
      }
      if (evaluateScale) {
        icon.setScale(evaluateScale(context2));
      }
      if (evaluateAnchor) {
        icon.setAnchor(evaluateAnchor(context2));
      }
      return icon;
    };
  }
  function buildShape(flatStyle, context) {
    const prefix = "shape-";
    const pointsName = prefix + "points";
    const radiusName = prefix + "radius";
    const points = requireNumber(flatStyle[pointsName], pointsName);
    if (!(radiusName in flatStyle)) {
      throw new Error(`Expected a number for ${radiusName}`);
    }
    const evaluateRadius = numberEvaluator(flatStyle, radiusName, context);
    const initialRadius = typeof flatStyle[radiusName] === "number" ? flatStyle[radiusName] : 5;
    const radius2Name = prefix + "radius2";
    const evaluateRadius2 = numberEvaluator(flatStyle, radius2Name, context);
    const initialRadius2 = typeof flatStyle[radius2Name] === "number" ? flatStyle[radius2Name] : void 0;
    const evaluateFill = buildFill(flatStyle, prefix, context);
    const evaluateStroke = buildStroke(flatStyle, prefix, context);
    const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
    const evaluateDisplacement = coordinateEvaluator(
      flatStyle,
      prefix + "displacement",
      context
    );
    const evaluateRotation = numberEvaluator(
      flatStyle,
      prefix + "rotation",
      context
    );
    const evaluateRotateWithView = booleanEvaluator(
      flatStyle,
      prefix + "rotate-with-view",
      context
    );
    const angle = optionalNumber(flatStyle, prefix + "angle");
    const declutterMode = optionalDeclutterMode(
      flatStyle,
      prefix + "declutter-mode"
    );
    const shape = new RegularShape_default({
      points,
      radius: initialRadius,
      radius2: initialRadius2,
      angle,
      declutterMode
    });
    return function(context2) {
      if (evaluateRadius) {
        shape.setRadius(evaluateRadius(context2));
      }
      if (evaluateRadius2) {
        shape.setRadius2(evaluateRadius2(context2));
      }
      if (evaluateFill) {
        shape.setFill(evaluateFill(context2));
      }
      if (evaluateStroke) {
        shape.setStroke(evaluateStroke(context2));
      }
      if (evaluateDisplacement) {
        shape.setDisplacement(evaluateDisplacement(context2));
      }
      if (evaluateRotation) {
        shape.setRotation(evaluateRotation(context2));
      }
      if (evaluateRotateWithView) {
        shape.setRotateWithView(evaluateRotateWithView(context2));
      }
      if (evaluateScale) {
        shape.setScale(evaluateScale(context2));
      }
      return shape;
    };
  }
  function buildCircle(flatStyle, context) {
    const prefix = "circle-";
    const evaluateFill = buildFill(flatStyle, prefix, context);
    const evaluateStroke = buildStroke(flatStyle, prefix, context);
    const evaluateRadius = numberEvaluator(flatStyle, prefix + "radius", context);
    const evaluateScale = sizeLikeEvaluator(flatStyle, prefix + "scale", context);
    const evaluateDisplacement = coordinateEvaluator(
      flatStyle,
      prefix + "displacement",
      context
    );
    const evaluateRotation = numberEvaluator(
      flatStyle,
      prefix + "rotation",
      context
    );
    const evaluateRotateWithView = booleanEvaluator(
      flatStyle,
      prefix + "rotate-with-view",
      context
    );
    const declutterMode = optionalDeclutterMode(
      flatStyle,
      prefix + "declutter-mode"
    );
    const circle = new Circle_default({
      radius: 5,
      // this is arbitrary, but required - the evaluated radius is used below
      declutterMode
    });
    return function(context2) {
      if (evaluateRadius) {
        circle.setRadius(evaluateRadius(context2));
      }
      if (evaluateFill) {
        circle.setFill(evaluateFill(context2));
      }
      if (evaluateStroke) {
        circle.setStroke(evaluateStroke(context2));
      }
      if (evaluateDisplacement) {
        circle.setDisplacement(evaluateDisplacement(context2));
      }
      if (evaluateRotation) {
        circle.setRotation(evaluateRotation(context2));
      }
      if (evaluateRotateWithView) {
        circle.setRotateWithView(evaluateRotateWithView(context2));
      }
      if (evaluateScale) {
        circle.setScale(evaluateScale(context2));
      }
      return circle;
    };
  }
  function getExpressionValue(flatStyle, name) {
    if (!(name in flatStyle)) {
      return void 0;
    }
    const value = flatStyle[name];
    return value === void 0 ? void 0 : value;
  }
  function numberEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return void 0;
    }
    const evaluator = buildExpression(encoded, NumberType, context);
    return function(context2) {
      return requireNumber(evaluator(context2), name);
    };
  }
  function stringEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, StringType, context);
    return function(context2) {
      return requireString(evaluator(context2), name);
    };
  }
  function patternEvaluator(flatStyle, prefix, context) {
    const srcEvaluator = stringEvaluator(
      flatStyle,
      prefix + "pattern-src",
      context
    );
    const offsetEvaluator = sizeEvaluator(
      flatStyle,
      prefix + "pattern-offset",
      context
    );
    const patternSizeEvaluator = sizeEvaluator(
      flatStyle,
      prefix + "pattern-size",
      context
    );
    const colorEvaluator = colorLikeEvaluator(
      flatStyle,
      prefix + "color",
      context
    );
    return function(context2) {
      return {
        src: srcEvaluator(context2),
        offset: offsetEvaluator && offsetEvaluator(context2),
        size: patternSizeEvaluator && patternSizeEvaluator(context2),
        color: colorEvaluator && colorEvaluator(context2)
      };
    };
  }
  function booleanEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, BooleanType, context);
    return function(context2) {
      const value = evaluator(context2);
      if (typeof value !== "boolean") {
        throw new Error(`Expected a boolean for ${name}`);
      }
      return value;
    };
  }
  function colorLikeEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, ColorType, context);
    return function(context2) {
      return requireColorLike(evaluator(context2), name);
    };
  }
  function numberArrayEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    if (Array.isArray(encoded) && (encoded.length === 0 || typeof encoded[0] !== "string")) {
      const evaluators = encoded.map((value, index) => {
        if (typeof value === "number") {
          return () => value;
        }
        const evaluator2 = buildExpression(value, NumberType, context);
        return function(context2) {
          return requireNumber(evaluator2(context2), `${name}[${index}]`);
        };
      });
      return function(context2) {
        const array = new Array(evaluators.length);
        for (let i = 0; i < evaluators.length; ++i) {
          array[i] = evaluators[i](context2);
        }
        return array;
      };
    }
    const evaluator = buildExpression(encoded, NumberArrayType, context);
    return function(context2) {
      return requireNumberArray(evaluator(context2), name);
    };
  }
  function coordinateEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, NumberArrayType, context);
    return function(context2) {
      const array = requireNumberArray(evaluator(context2), name);
      if (array.length !== 2) {
        throw new Error(`Expected two numbers for ${name}`);
      }
      return array;
    };
  }
  function sizeEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(encoded, NumberArrayType, context);
    return function(context2) {
      return requireSize(evaluator(context2), name);
    };
  }
  function sizeLikeEvaluator(flatStyle, name, context) {
    const encoded = getExpressionValue(flatStyle, name);
    if (encoded === void 0) {
      return null;
    }
    const evaluator = buildExpression(
      encoded,
      NumberArrayType | NumberType,
      context
    );
    return function(context2) {
      return requireSizeLike(evaluator(context2), name);
    };
  }
  function optionalNumber(flatStyle, property) {
    const value = flatStyle[property];
    if (value === void 0) {
      return void 0;
    }
    if (typeof value !== "number") {
      throw new Error(`Expected a number for ${property}`);
    }
    return value;
  }
  function optionalSize(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (typeof encoded === "number") {
      return toSize(encoded);
    }
    if (!Array.isArray(encoded)) {
      throw new Error(`Expected a number or size array for ${property}`);
    }
    if (encoded.length !== 2 || typeof encoded[0] !== "number" || typeof encoded[1] !== "number") {
      throw new Error(`Expected a number or size array for ${property}`);
    }
    return encoded;
  }
  function optionalString(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (typeof encoded !== "string") {
      throw new Error(`Expected a string for ${property}`);
    }
    return encoded;
  }
  function optionalIconOrigin(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (encoded !== "bottom-left" && encoded !== "bottom-right" && encoded !== "top-left" && encoded !== "top-right") {
      throw new Error(
        `Expected bottom-left, bottom-right, top-left, or top-right for ${property}`
      );
    }
    return encoded;
  }
  function optionalIconAnchorUnits(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (encoded !== "pixels" && encoded !== "fraction") {
      throw new Error(`Expected pixels or fraction for ${property}`);
    }
    return encoded;
  }
  function optionalNumberArray(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    return requireNumberArray(encoded, property);
  }
  function optionalDeclutterMode(flatStyle, property) {
    const encoded = flatStyle[property];
    if (encoded === void 0) {
      return void 0;
    }
    if (typeof encoded !== "string") {
      throw new Error(`Expected a string for ${property}`);
    }
    if (encoded !== "declutter" && encoded !== "obstacle" && encoded !== "none") {
      throw new Error(`Expected declutter, obstacle, or none for ${property}`);
    }
    return encoded;
  }
  function requireNumberArray(value, property) {
    if (!Array.isArray(value)) {
      throw new Error(`Expected an array for ${property}`);
    }
    const length = value.length;
    for (let i = 0; i < length; ++i) {
      if (typeof value[i] !== "number") {
        throw new Error(`Expected an array of numbers for ${property}`);
      }
    }
    return value;
  }
  function requireString(value, property) {
    if (typeof value !== "string") {
      throw new Error(`Expected a string for ${property}`);
    }
    return value;
  }
  function requireNumber(value, property) {
    if (typeof value !== "number") {
      throw new Error(`Expected a number for ${property}`);
    }
    return value;
  }
  function requireColorLike(value, property) {
    if (typeof value === "string") {
      return value;
    }
    const array = requireNumberArray(value, property);
    const length = array.length;
    if (length < 3 || length > 4) {
      throw new Error(`Expected a color with 3 or 4 values for ${property}`);
    }
    return array;
  }
  function requireSize(value, property) {
    const size = requireNumberArray(value, property);
    if (size.length !== 2) {
      throw new Error(`Expected an array of two numbers for ${property}`);
    }
    return size;
  }
  function requireSizeLike(value, property) {
    if (typeof value === "number") {
      return value;
    }
    return requireSize(value, property);
  }

  // node_modules/ol/layer/BaseVector.js
  var Property3 = {
    RENDER_ORDER: "renderOrder"
  };
  var BaseVectorLayer = class extends Layer_default {
    /**
     * @param {Options<FeatureType, VectorSourceType>} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      const baseOptions = Object.assign({}, options);
      delete baseOptions.style;
      delete baseOptions.renderBuffer;
      delete baseOptions.updateWhileAnimating;
      delete baseOptions.updateWhileInteracting;
      super(baseOptions);
      this.declutter_ = options.declutter ? String(options.declutter) : void 0;
      this.renderBuffer_ = options.renderBuffer !== void 0 ? options.renderBuffer : 100;
      this.style_ = null;
      this.styleFunction_ = void 0;
      this.setStyle(options.style);
      this.updateWhileAnimating_ = options.updateWhileAnimating !== void 0 ? options.updateWhileAnimating : false;
      this.updateWhileInteracting_ = options.updateWhileInteracting !== void 0 ? options.updateWhileInteracting : false;
    }
    /**
     * @return {string} Declutter group.
     * @override
     */
    getDeclutter() {
      return this.declutter_;
    }
    /**
     * Get the topmost feature that intersects the given pixel on the viewport. Returns a promise
     * that resolves with an array of features. The array will either contain the topmost feature
     * when a hit was detected, or it will be empty.
     *
     * The hit detection algorithm used for this method is optimized for performance, but is less
     * accurate than the one used in [map.getFeaturesAtPixel()]{@link import("../Map.js").default#getFeaturesAtPixel}.
     * Text is not considered, and icons are only represented by their bounding box instead of the exact
     * image.
     *
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature.js").FeatureLike>>} Promise that resolves with an array of features.
     * @api
     * @override
     */
    getFeatures(pixel) {
      return super.getFeatures(pixel);
    }
    /**
     * @return {number|undefined} Render buffer.
     */
    getRenderBuffer() {
      return this.renderBuffer_;
    }
    /**
     * @return {import("../render.js").OrderFunction|null|undefined} Render order.
     */
    getRenderOrder() {
      return (
        /** @type {import("../render.js").OrderFunction|null|undefined} */
        this.get(Property3.RENDER_ORDER)
      );
    }
    /**
     * Get the style for features.  This returns whatever was passed to the `style`
     * option at construction or to the `setStyle` method.
     * @return {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null|undefined} Layer style.
     * @api
     */
    getStyle() {
      return this.style_;
    }
    /**
     * Get the style function.
     * @return {import("../style/Style.js").StyleFunction|undefined} Layer style function.
     * @api
     */
    getStyleFunction() {
      return this.styleFunction_;
    }
    /**
     * @return {boolean} Whether the rendered layer should be updated while
     *     animating.
     */
    getUpdateWhileAnimating() {
      return this.updateWhileAnimating_;
    }
    /**
     * @return {boolean} Whether the rendered layer should be updated while
     *     interacting.
     */
    getUpdateWhileInteracting() {
      return this.updateWhileInteracting_;
    }
    /**
     * Render declutter items for this layer
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {import("../layer/Layer.js").State} layerState Layer state.
     * @override
     */
    renderDeclutter(frameState, layerState) {
      const declutterGroup = this.getDeclutter();
      if (declutterGroup in frameState.declutter === false) {
        frameState.declutter[declutterGroup] = new RBush(9);
      }
      this.getRenderer().renderDeclutter(frameState, layerState);
    }
    /**
     * @param {import("../render.js").OrderFunction|null|undefined} renderOrder
     *     Render order.
     */
    setRenderOrder(renderOrder) {
      this.set(Property3.RENDER_ORDER, renderOrder);
    }
    /**
     * Set the style for features.  This can be a single style object, an array
     * of styles, or a function that takes a feature and resolution and returns
     * an array of styles. If set to `null`, the layer has no style (a `null` style),
     * so only features that have their own styles will be rendered in the layer. Call
     * `setStyle()` without arguments to reset to the default style. See
     * [the ol/style/Style module]{@link module:ol/style/Style~Style} for information on the default style.
     *
     * If your layer has a static style, you can use [flat style]{@link module:ol/style/flat~FlatStyle} object
     * literals instead of using the `Style` and symbolizer constructors (`Fill`, `Stroke`, etc.):
     * ```js
     * vectorLayer.setStyle({
     *   "fill-color": "yellow",
     *   "stroke-color": "black",
     *   "stroke-width": 4
     * })
     * ```
     *
     * @param {import("../style/Style.js").StyleLike|import("../style/flat.js").FlatStyleLike|null} [style] Layer style.
     * @api
     */
    setStyle(style) {
      this.style_ = style === void 0 ? createDefaultStyle : style;
      const styleLike = toStyleLike(style);
      this.styleFunction_ = style === null ? void 0 : toFunction(styleLike);
      this.changed();
    }
    /**
     * @param {boolean|string|number} declutter Declutter images and text.
     * @api
     */
    setDeclutter(declutter) {
      this.declutter_ = declutter ? String(declutter) : void 0;
      this.changed();
    }
  };
  function toStyleLike(style) {
    if (style === void 0) {
      return createDefaultStyle;
    }
    if (!style) {
      return null;
    }
    if (typeof style === "function") {
      return style;
    }
    if (style instanceof Style_default) {
      return style;
    }
    if (!Array.isArray(style)) {
      return flatStylesToStyleFunction([style]);
    }
    if (style.length === 0) {
      return [];
    }
    const length = style.length;
    const first = style[0];
    if (first instanceof Style_default) {
      const styles = new Array(length);
      for (let i = 0; i < length; ++i) {
        const candidate = style[i];
        if (!(candidate instanceof Style_default)) {
          throw new Error("Expected a list of style instances");
        }
        styles[i] = candidate;
      }
      return styles;
    }
    if ("style" in first) {
      const rules = new Array(length);
      for (let i = 0; i < length; ++i) {
        const candidate = style[i];
        if (!("style" in candidate)) {
          throw new Error("Expected a list of rules with a style property");
        }
        rules[i] = candidate;
      }
      return rulesToStyleFunction(rules);
    }
    const flatStyles = (
      /** @type {Array<import("../style/flat.js").FlatStyle>} */
      style
    );
    return flatStylesToStyleFunction(flatStyles);
  }
  var BaseVector_default = BaseVectorLayer;

  // node_modules/ol/render/Event.js
  var RenderEvent = class extends Event_default {
    /**
     * @param {import("./EventType.js").default} type Type.
     * @param {import("../transform.js").Transform} [inversePixelTransform] Transform for
     *     CSS pixels to rendered pixels.
     * @param {import("../Map.js").FrameState} [frameState] Frame state.
     * @param {?(CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D|WebGLRenderingContext)} [context] Context.
     */
    constructor(type, inversePixelTransform, frameState, context) {
      super(type);
      this.inversePixelTransform = inversePixelTransform;
      this.frameState = frameState;
      this.context = context;
    }
  };
  var Event_default2 = RenderEvent;

  // node_modules/ol/renderer/Map.js
  var MapRenderer = class extends Disposable_default {
    /**
     * @param {import("../Map.js").default} map Map.
     */
    constructor(map) {
      super();
      this.map_ = map;
    }
    /**
     * @abstract
     * @param {import("../render/EventType.js").default} type Event type.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     */
    dispatchRenderEvent(type, frameState) {
      abstract();
    }
    /**
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @protected
     */
    calculateMatrices2D(frameState) {
      const viewState = frameState.viewState;
      const coordinateToPixelTransform = frameState.coordinateToPixelTransform;
      const pixelToCoordinateTransform = frameState.pixelToCoordinateTransform;
      compose(
        coordinateToPixelTransform,
        frameState.size[0] / 2,
        frameState.size[1] / 2,
        1 / viewState.resolution,
        -1 / viewState.resolution,
        -viewState.rotation,
        -viewState.center[0],
        -viewState.center[1]
      );
      makeInverse(pixelToCoordinateTransform, coordinateToPixelTransform);
    }
    /**
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {boolean} checkWrapped Check for wrapped geometries.
     * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {S} thisArg Value to use as `this` when executing `callback`.
     * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @param {U} thisArg2 Value to use as `this` when executing `layerFilter`.
     * @return {T|undefined} Callback result.
     * @template S,T,U
     */
    forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, callback, thisArg, layerFilter, thisArg2) {
      let result;
      const viewState = frameState.viewState;
      function forEachFeatureAtCoordinate(managed, feature, layer, geometry) {
        return callback.call(thisArg, feature, managed ? layer : null, geometry);
      }
      const projection = viewState.projection;
      const translatedCoordinate = wrapX2(coordinate.slice(), projection);
      const offsets = [[0, 0]];
      if (projection.canWrapX() && checkWrapped) {
        const projectionExtent = projection.getExtent();
        const worldWidth = getWidth(projectionExtent);
        offsets.push([-worldWidth, 0], [worldWidth, 0]);
      }
      const layerStates = frameState.layerStatesArray;
      const numLayers = layerStates.length;
      const matches = (
        /** @type {Array<HitMatch<T>>} */
        []
      );
      const tmpCoord = [];
      for (let i = 0; i < offsets.length; i++) {
        for (let j = numLayers - 1; j >= 0; --j) {
          const layerState = layerStates[j];
          const layer = layerState.layer;
          if (layer.hasRenderer() && inView(layerState, viewState) && layerFilter.call(thisArg2, layer)) {
            const layerRenderer = layer.getRenderer();
            const source = layer.getSource();
            if (layerRenderer && source) {
              const coordinates2 = source.getWrapX() ? translatedCoordinate : coordinate;
              const callback2 = forEachFeatureAtCoordinate.bind(
                null,
                layerState.managed
              );
              tmpCoord[0] = coordinates2[0] + offsets[i][0];
              tmpCoord[1] = coordinates2[1] + offsets[i][1];
              result = layerRenderer.forEachFeatureAtCoordinate(
                tmpCoord,
                frameState,
                hitTolerance,
                callback2,
                matches
              );
            }
            if (result) {
              return result;
            }
          }
        }
      }
      if (matches.length === 0) {
        return void 0;
      }
      const order = 1 / matches.length;
      matches.forEach((m, i) => m.distanceSq += i * order);
      matches.sort((a, b) => a.distanceSq - b.distanceSq);
      matches.some((m) => {
        return result = m.callback(m.feature, m.layer, m.geometry);
      });
      return result;
    }
    /**
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState FrameState.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {boolean} checkWrapped Check for wrapped geometries.
     * @param {function(this: U, import("../layer/Layer.js").default): boolean} layerFilter Layer filter
     *     function, only layers which are visible and for which this function
     *     returns `true` will be tested for features.  By default, all visible
     *     layers will be tested.
     * @param {U} thisArg Value to use as `this` when executing `layerFilter`.
     * @return {boolean} Is there a feature at the given coordinate?
     * @template U
     */
    hasFeatureAtCoordinate(coordinate, frameState, hitTolerance, checkWrapped, layerFilter, thisArg) {
      const hasFeature = this.forEachFeatureAtCoordinate(
        coordinate,
        frameState,
        hitTolerance,
        checkWrapped,
        TRUE,
        this,
        layerFilter,
        thisArg
      );
      return hasFeature !== void 0;
    }
    /**
     * @return {import("../Map.js").default} Map.
     */
    getMap() {
      return this.map_;
    }
    /**
     * Render.
     * @abstract
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     */
    renderFrame(frameState) {
      abstract();
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    scheduleExpireIconCache(frameState) {
      if (shared.canExpireCache()) {
        frameState.postRenderFunctions.push(expireIconCache);
      }
    }
  };
  function expireIconCache(map, frameState) {
    shared.expire();
  }
  var Map_default = MapRenderer;

  // node_modules/ol/renderer/Composite.js
  var CompositeMapRenderer = class extends Map_default {
    /**
     * @param {import("../Map.js").default} map Map.
     */
    constructor(map) {
      super(map);
      this.fontChangeListenerKey_ = listen(
        checkedFonts,
        ObjectEventType_default.PROPERTYCHANGE,
        map.redrawText,
        map
      );
      this.element_ = WORKER_OFFSCREEN_CANVAS ? createMockDiv() : document.createElement("div");
      const style = this.element_.style;
      style.position = "absolute";
      style.width = "100%";
      style.height = "100%";
      style.zIndex = "0";
      this.element_.className = CLASS_UNSELECTABLE + " ol-layers";
      const container = map.getViewport();
      if (container) {
        container.insertBefore(this.element_, container.firstChild || null);
      }
      this.children_ = [];
      this.renderedVisible_ = true;
    }
    /**
     * @param {import("../render/EventType.js").default} type Event type.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @override
     */
    dispatchRenderEvent(type, frameState) {
      const map = this.getMap();
      if (map.hasListener(type)) {
        const event = new Event_default2(type, void 0, frameState);
        map.dispatchEvent(event);
      }
    }
    /**
     * @override
     */
    disposeInternal() {
      unlistenByKey(this.fontChangeListenerKey_);
      this.element_.remove();
      super.disposeInternal();
    }
    /**
     * Render.
     * @param {?import("../Map.js").FrameState} frameState Frame state.
     * @override
     */
    renderFrame(frameState) {
      if (!frameState) {
        if (this.renderedVisible_) {
          this.element_.style.display = "none";
          this.renderedVisible_ = false;
        }
        return;
      }
      this.calculateMatrices2D(frameState);
      this.dispatchRenderEvent(EventType_default3.PRECOMPOSE, frameState);
      const layerStatesArray = frameState.layerStatesArray.sort(
        (a, b) => a.zIndex - b.zIndex
      );
      const declutter = layerStatesArray.some(
        (layerState) => layerState.layer instanceof BaseVector_default && layerState.layer.getDeclutter()
      );
      if (declutter) {
        frameState.declutter = {};
      }
      const viewState = frameState.viewState;
      this.children_.length = 0;
      const renderedLayerStates = [];
      let previousElement = null;
      for (let i = 0, ii = layerStatesArray.length; i < ii; ++i) {
        const layerState = layerStatesArray[i];
        frameState.layerIndex = i;
        const layer = layerState.layer;
        const sourceState = layer.getSourceState();
        if (!inView(layerState, viewState) || sourceState != "ready" && sourceState != "undefined") {
          layer.unrender();
          continue;
        }
        const element = layer.render(frameState, previousElement);
        if (!element) {
          continue;
        }
        if (element !== previousElement) {
          this.children_.push(element);
          previousElement = element;
        }
        renderedLayerStates.push(layerState);
      }
      this.declutter(frameState, renderedLayerStates);
      replaceChildren(this.element_, this.children_);
      const map = this.getMap();
      const mapCanvas = map.getTargetElement();
      if (isCanvas(mapCanvas)) {
        const mapContext = mapCanvas.getContext("2d");
        for (const container of this.children_) {
          const canvas = container.firstElementChild || container;
          const backgroundColor = container.style.backgroundColor;
          if (backgroundColor && (!isCanvas(canvas) || canvas.width > 0)) {
            mapContext.fillStyle = backgroundColor;
            mapContext.fillRect(0, 0, mapCanvas.width, mapCanvas.height);
          }
          if (isCanvas(canvas) && canvas.width > 0) {
            mapContext.save();
            const opacity = container.style.opacity || canvas.style.opacity;
            mapContext.globalAlpha = opacity === "" ? 1 : Number(opacity);
            const transform2 = canvas.style.transform;
            if (transform2) {
              mapContext.transform(
                .../** @type {[number, number, number, number, number, number]} */
                fromString(transform2)
              );
            } else {
              const w = parseFloat(canvas.style.width) / canvas.width;
              const h = parseFloat(canvas.style.height) / canvas.height;
              mapContext.transform(w, 0, 0, h, 0, 0);
            }
            mapContext.drawImage(canvas, 0, 0);
            mapContext.restore();
          }
        }
      }
      this.dispatchRenderEvent(EventType_default3.POSTCOMPOSE, frameState);
      if (!this.renderedVisible_) {
        this.element_.style.display = "";
        this.renderedVisible_ = true;
      }
      this.scheduleExpireIconCache(frameState);
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {Array<import('../layer/Layer.js').State>} layerStates Layers.
     */
    declutter(frameState, layerStates) {
      if (!frameState.declutter) {
        return;
      }
      for (let i = layerStates.length - 1; i >= 0; --i) {
        const layerState = layerStates[i];
        const layer = layerState.layer;
        if (layer.getDeclutter()) {
          layer.renderDeclutter(frameState, layerState);
        }
      }
      layerStates.forEach(
        (layerState) => layerState.layer.renderDeferred(frameState)
      );
    }
  };
  var Composite_default = CompositeMapRenderer;

  // node_modules/ol/Map.js
  function removeLayerMapProperty(layer) {
    if (layer instanceof Layer_default) {
      layer.setMapInternal(null);
      return;
    }
    if (layer instanceof Group_default) {
      layer.getLayers().forEach(removeLayerMapProperty);
    }
  }
  function setLayerMapProperty(layer, map) {
    if (layer instanceof Layer_default) {
      layer.setMapInternal(map);
      return;
    }
    if (layer instanceof Group_default) {
      const layers = layer.getLayers().getArray();
      for (let i = 0, ii = layers.length; i < ii; ++i) {
        setLayerMapProperty(layers[i], map);
      }
    }
  }
  var Map = class extends Object_default {
    /**
     * @param {MapOptions} [options] Map options.
     */
    constructor(options) {
      super();
      options = options || {};
      this.on;
      this.once;
      this.un;
      const optionsInternal = createOptionsInternal(options);
      this.renderComplete_ = false;
      this.loaded_ = true;
      this.boundHandleBrowserEvent_ = this.handleBrowserEvent.bind(this);
      this.maxTilesLoading_ = options.maxTilesLoading !== void 0 ? options.maxTilesLoading : 16;
      this.pixelRatio_ = options.pixelRatio !== void 0 ? options.pixelRatio : DEVICE_PIXEL_RATIO;
      this.postRenderTimeoutHandle_;
      this.animationDelayKey_;
      this.animationDelay_ = this.animationDelay_.bind(this);
      this.coordinateToPixelTransform_ = create();
      this.pixelToCoordinateTransform_ = create();
      this.frameIndex_ = 0;
      this.frameState_ = null;
      this.previousExtent_ = null;
      this.viewPropertyListenerKey_ = null;
      this.viewChangeListenerKey_ = null;
      this.layerGroupPropertyListenerKeys_ = null;
      if (!WORKER_OFFSCREEN_CANVAS) {
        this.viewport_ = document.createElement("div");
        this.viewport_.className = "ol-viewport" + ("ontouchstart" in window ? " ol-touch" : "");
        this.viewport_.style.position = "relative";
        this.viewport_.style.overflow = "hidden";
        this.viewport_.style.width = "100%";
        this.viewport_.style.height = "100%";
        this.overlayContainer_ = document.createElement("div");
        this.overlayContainer_.style.position = "absolute";
        this.overlayContainer_.style.zIndex = "0";
        this.overlayContainer_.style.width = "100%";
        this.overlayContainer_.style.height = "100%";
        this.overlayContainer_.style.pointerEvents = "none";
        this.overlayContainer_.className = "ol-overlaycontainer";
        this.viewport_.appendChild(this.overlayContainer_);
        this.overlayContainerStopEvent_ = document.createElement("div");
        this.overlayContainerStopEvent_.style.position = "absolute";
        this.overlayContainerStopEvent_.style.zIndex = "0";
        this.overlayContainerStopEvent_.style.width = "100%";
        this.overlayContainerStopEvent_.style.height = "100%";
        this.overlayContainerStopEvent_.style.pointerEvents = "none";
        this.overlayContainerStopEvent_.className = "ol-overlaycontainer-stopevent";
        this.viewport_.appendChild(this.overlayContainerStopEvent_);
      }
      this.mapBrowserEventHandler_ = null;
      this.moveTolerance_ = options.moveTolerance;
      this.keyboardEventTarget_ = optionsInternal.keyboardEventTarget;
      this.targetChangeHandlerKeys_ = null;
      this.targetElement_ = null;
      if (!WORKER_OFFSCREEN_CANVAS) {
        this.resizeObserver_ = new ResizeObserver(() => this.updateSize());
      }
      this.controls = optionsInternal.controls || (WORKER_OFFSCREEN_CANVAS ? new Collection_default() : defaults());
      this.interactions = optionsInternal.interactions || (WORKER_OFFSCREEN_CANVAS ? new Collection_default() : defaults2({
        onFocusOnly: true
      }));
      this.overlays_ = optionsInternal.overlays;
      this.overlayIdIndex_ = {};
      this.renderer_ = null;
      this.postRenderFunctions_ = [];
      this.tileQueue_ = new TileQueue_default(
        this.getTilePriority.bind(this),
        this.handleTileChange_.bind(this)
      );
      this.addChangeListener(
        MapProperty_default.LAYERGROUP,
        this.handleLayerGroupChanged_
      );
      this.addChangeListener(MapProperty_default.VIEW, this.handleViewChanged_);
      this.addChangeListener(MapProperty_default.SIZE, this.handleSizeChanged_);
      this.addChangeListener(MapProperty_default.TARGET, this.handleTargetChanged_);
      this.setProperties(optionsInternal.values);
      const map = this;
      if (options.view && !(options.view instanceof View_default)) {
        options.view.then(function(viewOptions) {
          map.setView(new View_default(viewOptions));
        });
      }
      this.controls.addEventListener(
        CollectionEventType_default.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent
         */
        (event) => {
          event.element.setMap(this);
        }
      );
      this.controls.addEventListener(
        CollectionEventType_default.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./control/Control.js").default>} event CollectionEvent.
         */
        (event) => {
          event.element.setMap(null);
        }
      );
      this.interactions.addEventListener(
        CollectionEventType_default.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
         */
        (event) => {
          event.element.setMap(this);
        }
      );
      this.interactions.addEventListener(
        CollectionEventType_default.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./interaction/Interaction.js").default>} event CollectionEvent.
         */
        (event) => {
          event.element.setMap(null);
        }
      );
      this.overlays_.addEventListener(
        CollectionEventType_default.ADD,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
         */
        (event) => {
          this.addOverlayInternal_(event.element);
        }
      );
      this.overlays_.addEventListener(
        CollectionEventType_default.REMOVE,
        /**
         * @param {import("./Collection.js").CollectionEvent<import("./Overlay.js").default>} event CollectionEvent.
         */
        (event) => {
          const id = event.element.getId();
          if (id !== void 0) {
            delete this.overlayIdIndex_[id.toString()];
          }
          event.element.setMap(null);
        }
      );
      this.controls.forEach(
        /**
         * @param {import("./control/Control.js").default} control Control.
         */
        (control) => {
          control.setMap(this);
        }
      );
      this.interactions.forEach(
        /**
         * @param {import("./interaction/Interaction.js").default} interaction Interaction.
         */
        (interaction) => {
          interaction.setMap(this);
        }
      );
      this.overlays_.forEach(this.addOverlayInternal_.bind(this));
    }
    /**
     * Add the given control to the map.
     * @param {import("./control/Control.js").default} control Control.
     * @api
     */
    addControl(control) {
      this.getControls().push(control);
    }
    /**
     * Add the given interaction to the map. If you want to add an interaction
     * at another point of the collection use `getInteractions()` and the methods
     * available on {@link module:ol/Collection~Collection}. This can be used to
     * stop the event propagation from the handleEvent function. The interactions
     * get to handle the events in the reverse order of this collection.
     * @param {import("./interaction/Interaction.js").default} interaction Interaction to add.
     * @api
     */
    addInteraction(interaction) {
      this.getInteractions().push(interaction);
    }
    /**
     * Adds the given layer to the top of this map. If you want to add a layer
     * elsewhere in the stack, use `getLayers()` and the methods available on
     * {@link module:ol/Collection~Collection}.
     * @param {import("./layer/Base.js").default} layer Layer.
     * @api
     */
    addLayer(layer) {
      const layers = this.getLayerGroup().getLayers();
      layers.push(layer);
    }
    /**
     * @param {import("./layer/Group.js").GroupEvent} event The layer add event.
     * @private
     */
    handleLayerAdd_(event) {
      setLayerMapProperty(event.layer, this);
    }
    /**
     * Add the given overlay to the map.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @api
     */
    addOverlay(overlay) {
      this.getOverlays().push(overlay);
    }
    /**
     * This deals with map's overlay collection changes.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @private
     */
    addOverlayInternal_(overlay) {
      const id = overlay.getId();
      if (id !== void 0) {
        this.overlayIdIndex_[id.toString()] = overlay;
      }
      overlay.setMap(this);
    }
    /**
     *
     * Clean up.
     * @override
     */
    disposeInternal() {
      this.controls.clear();
      this.interactions.clear();
      this.overlays_.clear();
      this.resizeObserver_?.disconnect();
      this.setTarget(null);
      super.disposeInternal();
    }
    /**
     * Detect features that intersect a pixel on the viewport, and execute a
     * callback with each intersecting feature. Layers included in the detection can
     * be configured through the `layerFilter` option in `options`.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {function(import("./Feature.js").FeatureLike, import("./layer/Layer.js").default<import("./source/Source.js").default>, import("./geom/SimpleGeometry.js").default): T} callback Feature callback. The callback will be
     *     called with two arguments. The first argument is one
     *     {@link module:ol/Feature~Feature feature} or
     *     {@link module:ol/render/Feature~RenderFeature render feature} at the pixel, the second is
     *     the {@link module:ol/layer/Layer~Layer layer} of the feature and will be null for
     *     unmanaged layers. To stop detection, callback functions can return a
     *     truthy value.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {T|undefined} Callback result, i.e. the return value of last
     * callback execution, or the first truthy callback return value.
     * @template T
     * @api
     */
    forEachFeatureAtPixel(pixel, callback, options) {
      if (!this.frameState_ || !this.renderer_) {
        return;
      }
      const coordinate = this.getCoordinateFromPixelInternal(pixel);
      options = options !== void 0 ? options : {};
      const hitTolerance = options.hitTolerance !== void 0 ? options.hitTolerance : 0;
      const layerFilter = options.layerFilter !== void 0 ? options.layerFilter : TRUE;
      const checkWrapped = options.checkWrapped !== false;
      return this.renderer_.forEachFeatureAtCoordinate(
        coordinate,
        this.frameState_,
        hitTolerance,
        checkWrapped,
        callback,
        null,
        layerFilter,
        null
      );
    }
    /**
     * Get all features that intersect a pixel on the viewport.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {Array<import("./Feature.js").FeatureLike>} The detected features or
     * an empty array if none were found.
     * @api
     */
    getFeaturesAtPixel(pixel, options) {
      const features = [];
      this.forEachFeatureAtPixel(
        pixel,
        function(feature) {
          features.push(feature);
        },
        options
      );
      return features;
    }
    /**
     * Get all layers from all layer groups.
     * @return {Array<import("./layer/Layer.js").default>} Layers.
     * @api
     */
    getAllLayers() {
      const layers = [];
      function addLayersFrom(layerGroup) {
        layerGroup.forEach(function(layer) {
          if (layer instanceof Group_default) {
            addLayersFrom(layer.getLayers());
          } else {
            layers.push(layer);
          }
        });
      }
      addLayersFrom(this.getLayers());
      return layers;
    }
    /**
     * Detect if features intersect a pixel on the viewport. Layers included in the
     * detection can be configured through the `layerFilter` option.
     * For polygons without a fill, only the stroke will be used for hit detection.
     * Polygons must have a fill style applied to ensure that pixels inside a polygon are detected.
     * The fill can be transparent.
     * @param {import("./pixel.js").Pixel} pixel Pixel.
     * @param {AtPixelOptions} [options] Optional options.
     * @return {boolean} Is there a feature at the given pixel?
     * @api
     */
    hasFeatureAtPixel(pixel, options) {
      if (!this.frameState_ || !this.renderer_) {
        return false;
      }
      const coordinate = this.getCoordinateFromPixelInternal(pixel);
      options = options !== void 0 ? options : {};
      const layerFilter = options.layerFilter !== void 0 ? options.layerFilter : TRUE;
      const hitTolerance = options.hitTolerance !== void 0 ? options.hitTolerance : 0;
      const checkWrapped = options.checkWrapped !== false;
      return this.renderer_.hasFeatureAtCoordinate(
        coordinate,
        this.frameState_,
        hitTolerance,
        checkWrapped,
        layerFilter,
        null
      );
    }
    /**
     * Returns the coordinate in user projection for a browser event.
     * @param {MouseEvent} event Event.
     * @return {import("./coordinate.js").Coordinate} Coordinate.
     * @api
     */
    getEventCoordinate(event) {
      return this.getCoordinateFromPixel(this.getEventPixel(event));
    }
    /**
     * Returns the coordinate in view projection for a browser event.
     * @param {MouseEvent} event Event.
     * @return {import("./coordinate.js").Coordinate} Coordinate.
     */
    getEventCoordinateInternal(event) {
      return this.getCoordinateFromPixelInternal(this.getEventPixel(event));
    }
    /**
     * Returns the map pixel position for a browser event relative to the viewport.
     * @param {UIEvent|{clientX: number, clientY: number}} event Event.
     * @return {import("./pixel.js").Pixel} Pixel.
     * @api
     */
    getEventPixel(event) {
      const viewport = this.viewport_;
      const viewportPosition = viewport.getBoundingClientRect();
      const viewportSize = this.getSize();
      const scaleX = viewportPosition.width / viewportSize[0];
      const scaleY = viewportPosition.height / viewportSize[1];
      const eventPosition = (
        //FIXME Are we really calling this with a TouchEvent anywhere?
        "changedTouches" in event ? (
          /** @type {TouchEvent} */
          event.changedTouches[0]
        ) : (
          /** @type {MouseEvent} */
          event
        )
      );
      return [
        (eventPosition.clientX - viewportPosition.left) / scaleX,
        (eventPosition.clientY - viewportPosition.top) / scaleY
      ];
    }
    /**
     * Get the target in which this map is rendered.
     * Note that this returns what is entered as an option or in setTarget:
     * if that was an element, it returns an element; if a string, it returns that.
     * @return {HTMLElement|string|undefined} The Element or id of the Element that the
     *     map is rendered in.
     * @observable
     * @api
     */
    getTarget() {
      return (
        /** @type {HTMLElement|string|undefined} */
        this.get(MapProperty_default.TARGET)
      );
    }
    /**
     * Get the DOM element into which this map is rendered. In contrast to
     * `getTarget` this method always return an `Element`, or `null` if the
     * map has no target.
     * @return {HTMLElement} The element that the map is rendered in.
     * @api
     */
    getTargetElement() {
      return this.targetElement_;
    }
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * user projection.
     * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
     * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
     * @api
     */
    getCoordinateFromPixel(pixel) {
      return toUserCoordinate(
        this.getCoordinateFromPixelInternal(pixel),
        this.getView().getProjection()
      );
    }
    /**
     * Get the coordinate for a given pixel.  This returns a coordinate in the
     * map view projection.
     * @param {import("./pixel.js").Pixel} pixel Pixel position in the map viewport.
     * @return {import("./coordinate.js").Coordinate} The coordinate for the pixel position.
     */
    getCoordinateFromPixelInternal(pixel) {
      const frameState = this.frameState_;
      if (!frameState) {
        return null;
      }
      return apply(frameState.pixelToCoordinateTransform, pixel.slice());
    }
    /**
     * Get the map controls. Modifying this collection changes the controls
     * associated with the map.
     * @return {Collection<import("./control/Control.js").default>} Controls.
     * @api
     */
    getControls() {
      return this.controls;
    }
    /**
     * Get the map overlays. Modifying this collection changes the overlays
     * associated with the map.
     * @return {Collection<import("./Overlay.js").default>} Overlays.
     * @api
     */
    getOverlays() {
      return this.overlays_;
    }
    /**
     * Get an overlay by its identifier (the value returned by overlay.getId()).
     * Note that the index treats string and numeric identifiers as the same. So
     * `map.getOverlayById(2)` will return an overlay with id `'2'` or `2`.
     * @param {string|number} id Overlay identifier.
     * @return {import("./Overlay.js").default|null} Overlay.
     * @api
     */
    getOverlayById(id) {
      const overlay = this.overlayIdIndex_[id.toString()];
      return overlay !== void 0 ? overlay : null;
    }
    /**
     * Get the map interactions. Modifying this collection changes the interactions
     * associated with the map.
     *
     * Interactions are used for e.g. pan, zoom and rotate.
     * @return {Collection<import("./interaction/Interaction.js").default>} Interactions.
     * @api
     */
    getInteractions() {
      return this.interactions;
    }
    /**
     * Get the layergroup associated with this map.
     * @return {LayerGroup} A layer group containing the layers in this map.
     * @observable
     * @api
     */
    getLayerGroup() {
      return (
        /** @type {LayerGroup} */
        this.get(MapProperty_default.LAYERGROUP)
      );
    }
    /**
     * Clear any existing layers and add layers to the map.
     * @param {Array<import("./layer/Base.js").default>|Collection<import("./layer/Base.js").default>} layers The layers to be added to the map.
     * @api
     */
    setLayers(layers) {
      const group = this.getLayerGroup();
      if (layers instanceof Collection_default) {
        group.setLayers(layers);
        return;
      }
      const collection = group.getLayers();
      collection.clear();
      collection.extend(layers);
    }
    /**
     * Get the collection of layers associated with this map.
     * @return {!Collection<import("./layer/Base.js").default>} Layers.
     * @api
     */
    getLayers() {
      const layers = this.getLayerGroup().getLayers();
      return layers;
    }
    /**
     * @return {boolean} Layers have sources that are still loading.
     */
    getLoadingOrNotReady() {
      const layerStatesArray = this.getLayerGroup().getLayerStatesArray();
      for (let i = 0, ii = layerStatesArray.length; i < ii; ++i) {
        const state = layerStatesArray[i];
        if (!state.visible) {
          continue;
        }
        const renderer = state.layer.getRenderer();
        if (renderer && !renderer.ready) {
          return true;
        }
        const source = state.layer.getSource();
        if (source && source.loading) {
          return true;
        }
      }
      return false;
    }
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the user
     * projection and returns the corresponding pixel.
     * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
     * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
     * @api
     */
    getPixelFromCoordinate(coordinate) {
      const viewCoordinate = fromUserCoordinate(
        coordinate,
        this.getView().getProjection()
      );
      return this.getPixelFromCoordinateInternal(viewCoordinate);
    }
    /**
     * Get the pixel for a coordinate.  This takes a coordinate in the map view
     * projection and returns the corresponding pixel.
     * @param {import("./coordinate.js").Coordinate} coordinate A map coordinate.
     * @return {import("./pixel.js").Pixel} A pixel position in the map viewport.
     */
    getPixelFromCoordinateInternal(coordinate) {
      const frameState = this.frameState_;
      if (!frameState) {
        return null;
      }
      return apply(
        frameState.coordinateToPixelTransform,
        coordinate.slice(0, 2)
      );
    }
    /**
     * Get the pixel ratio of the rendered map.
     * @return {number} Pixel ratio.
     * @api
     */
    getPixelRatio() {
      return this.pixelRatio_;
    }
    /**
     * Set the pixel ratio of the rendered map.
     * @param {number} pixelRatio Pixel ratio.
     * @api
     */
    setPixelRatio(pixelRatio) {
      if (this.pixelRatio_ === pixelRatio) {
        return;
      }
      this.pixelRatio_ = pixelRatio;
      this.render();
    }
    /**
     * Get the map renderer.
     * @return {import("./renderer/Map.js").default|null} Renderer
     */
    getRenderer() {
      return this.renderer_;
    }
    /**
     * Get the size of this map.
     * @return {import("./size.js").Size|undefined} The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    getSize() {
      return (
        /** @type {import("./size.js").Size|undefined} */
        this.get(MapProperty_default.SIZE)
      );
    }
    /**
     * Get the view associated with this map. A view manages properties such as
     * center and resolution.
     * @return {View} The view that controls this map.
     * @observable
     * @api
     */
    getView() {
      return (
        /** @type {View} */
        this.get(MapProperty_default.VIEW)
      );
    }
    /**
     * Get the element that serves as the map viewport.
     * @return {HTMLElement} Viewport.
     * @api
     */
    getViewport() {
      return this.viewport_;
    }
    /**
     * Get the element that serves as the container for overlays.  Elements added to
     * this container will let mousedown and touchstart events through to the map,
     * so clicks and gestures on an overlay will trigger {@link module:ol/MapBrowserEvent~MapBrowserEvent}
     * events.
     * @return {!HTMLElement} The map's overlay container.
     */
    getOverlayContainer() {
      return this.overlayContainer_;
    }
    /**
     * Get the element that serves as a container for overlays that don't allow
     * event propagation. Elements added to this container won't let mousedown and
     * touchstart events through to the map, so clicks and gestures on an overlay
     * don't trigger any {@link module:ol/MapBrowserEvent~MapBrowserEvent}.
     * @return {!HTMLElement} The map's overlay container that stops events.
     */
    getOverlayContainerStopEvent() {
      return this.overlayContainerStopEvent_;
    }
    /**
     * @return {!Document} The document where the map is displayed.
     */
    getOwnerDocument() {
      const targetElement = this.getTargetElement();
      return targetElement ? targetElement.ownerDocument : document;
    }
    /**
     * @param {import("./Tile.js").default} tile Tile.
     * @param {string} tileSourceKey Tile source key.
     * @param {import("./coordinate.js").Coordinate} tileCenter Tile center.
     * @param {number} tileResolution Tile resolution.
     * @return {number} Tile priority.
     */
    getTilePriority(tile, tileSourceKey, tileCenter, tileResolution) {
      return getTilePriority(
        this.frameState_,
        tile,
        tileSourceKey,
        tileCenter,
        tileResolution
      );
    }
    /**
     * @param {PointerEvent|KeyboardEvent|WheelEvent} browserEvent Browser event.
     * @param {string} [type] Type.
     */
    handleBrowserEvent(browserEvent, type) {
      type = type || browserEvent.type;
      const mapBrowserEvent = new MapBrowserEvent_default(type, this, browserEvent);
      this.handleMapBrowserEvent(mapBrowserEvent);
    }
    /**
     * @param {MapBrowserEvent} mapBrowserEvent The event to handle.
     */
    handleMapBrowserEvent(mapBrowserEvent) {
      if (!this.frameState_) {
        return;
      }
      const originalEvent = mapBrowserEvent.originalEvent;
      const eventType = originalEvent.type;
      if (eventType === EventType_default2.POINTERDOWN || eventType === EventType_default.WHEEL || eventType === EventType_default.KEYDOWN) {
        const doc = this.getOwnerDocument();
        const rootNode = this.viewport_.getRootNode ? this.viewport_.getRootNode() : doc;
        const target = (
          /** @type {Node} */
          originalEvent.target
        );
        const currentDoc = rootNode instanceof ShadowRoot ? rootNode.host === target ? rootNode.host.ownerDocument : rootNode : rootNode === doc ? doc.documentElement : rootNode;
        if (
          // Abort if the target is a child of the container for elements whose events are not meant
          // to be handled by map interactions.
          this.overlayContainerStopEvent_.contains(target) || // Abort if the event target is a child of the container that is no longer in the page.
          // It's possible for the target to no longer be in the page if it has been removed in an
          // event listener, this might happen in a Control that recreates it's content based on
          // user interaction either manually or via a render in something like https://reactjs.org/
          !currentDoc.contains(target)
        ) {
          return;
        }
      }
      mapBrowserEvent.frameState = this.frameState_;
      if (this.dispatchEvent(mapBrowserEvent) !== false) {
        const interactionsArray = this.getInteractions().getArray().slice();
        for (let i = interactionsArray.length - 1; i >= 0; i--) {
          const interaction = interactionsArray[i];
          if (interaction.getMap() !== this || !interaction.getActive() || !this.getTargetElement()) {
            continue;
          }
          const cont = interaction.handleEvent(mapBrowserEvent);
          if (!cont || mapBrowserEvent.propagationStopped) {
            break;
          }
        }
      }
    }
    /**
     * @protected
     */
    handlePostRender() {
      const frameState = this.frameState_;
      const tileQueue = this.tileQueue_;
      if (!tileQueue.isEmpty()) {
        let maxTotalLoading = this.maxTilesLoading_;
        let maxNewLoads = maxTotalLoading;
        const hints = frameState ? frameState.viewHints : void 0;
        const animatingOrInteracting = hints ? hints[ViewHint_default.ANIMATING] || hints[ViewHint_default.INTERACTING] : false;
        if (animatingOrInteracting) {
          const lowOnFrameBudget = Date.now() - frameState.time > 8;
          maxTotalLoading = lowOnFrameBudget ? 0 : 8;
          maxNewLoads = lowOnFrameBudget ? 0 : 2;
        }
        if (tileQueue.getTilesLoading() < maxTotalLoading) {
          if (animatingOrInteracting) {
            tileQueue.reprioritize();
          }
          tileQueue.loadMoreTiles(maxTotalLoading, maxNewLoads);
        }
      }
      if (frameState && this.renderer_ && !frameState.animate) {
        if (this.renderComplete_) {
          if (this.hasListener(EventType_default3.RENDERCOMPLETE)) {
            this.renderer_.dispatchRenderEvent(
              EventType_default3.RENDERCOMPLETE,
              frameState
            );
          }
          if (this.loaded_ === false) {
            this.loaded_ = true;
            this.dispatchEvent(
              new MapEvent_default(MapEventType_default.LOADEND, this, frameState)
            );
          }
        } else if (this.loaded_ === true) {
          this.loaded_ = false;
          this.dispatchEvent(
            new MapEvent_default(MapEventType_default.LOADSTART, this, frameState)
          );
        }
      }
      const postRenderFunctions = this.postRenderFunctions_;
      if (frameState) {
        for (let i = 0, ii = postRenderFunctions.length; i < ii; ++i) {
          postRenderFunctions[i](this, frameState);
        }
      }
      postRenderFunctions.length = 0;
    }
    /**
     * @private
     */
    handleSizeChanged_() {
      if (this.getView() && !this.getView().getAnimating()) {
        this.getView().resolveConstraints(0);
      }
      this.render();
    }
    /**
     * @private
     */
    handleTargetChanged_() {
      if (this.mapBrowserEventHandler_) {
        for (let i = 0, ii = this.targetChangeHandlerKeys_.length; i < ii; ++i) {
          unlistenByKey(this.targetChangeHandlerKeys_[i]);
        }
        this.targetChangeHandlerKeys_ = null;
        this.viewport_.removeEventListener(
          EventType_default.CONTEXTMENU,
          this.boundHandleBrowserEvent_
        );
        this.viewport_.removeEventListener(
          EventType_default.WHEEL,
          this.boundHandleBrowserEvent_
        );
        this.mapBrowserEventHandler_.dispose();
        this.mapBrowserEventHandler_ = null;
        this.viewport_.remove();
      }
      if (this.targetElement_ && !isCanvas(this.targetElement_)) {
        this.resizeObserver_?.unobserve(this.targetElement_);
        const rootNode = this.targetElement_.getRootNode();
        if (rootNode instanceof ShadowRoot) {
          this.resizeObserver_.unobserve(rootNode.host);
        }
        this.setSize(void 0);
      }
      const target = this.getTarget();
      const targetElement = typeof target === "string" ? document.getElementById(target) : target;
      this.targetElement_ = targetElement;
      if (!targetElement) {
        if (this.renderer_) {
          clearTimeout(this.postRenderTimeoutHandle_);
          this.postRenderTimeoutHandle_ = void 0;
          this.postRenderFunctions_.length = 0;
          this.renderer_.dispose();
          this.renderer_ = null;
        }
        if (this.animationDelayKey_) {
          cancelAnimationFrame(this.animationDelayKey_);
          this.animationDelayKey_ = void 0;
        }
      } else {
        if (!isCanvas(targetElement)) {
          targetElement.appendChild(this.viewport_);
        }
        if (!this.renderer_) {
          this.renderer_ = new Composite_default(this);
        }
        if (!isCanvas(targetElement)) {
          this.mapBrowserEventHandler_ = new MapBrowserEventHandler_default(
            this,
            this.moveTolerance_
          );
          for (const key in MapBrowserEventType_default) {
            this.mapBrowserEventHandler_.addEventListener(
              MapBrowserEventType_default[key],
              this.handleMapBrowserEvent.bind(this)
            );
          }
          this.viewport_.addEventListener(
            EventType_default.CONTEXTMENU,
            this.boundHandleBrowserEvent_,
            false
          );
          this.viewport_.addEventListener(
            EventType_default.WHEEL,
            this.boundHandleBrowserEvent_,
            PASSIVE_EVENT_LISTENERS ? { passive: false } : false
          );
          let keyboardEventTarget;
          if (!this.keyboardEventTarget_) {
            const targetRoot = targetElement.getRootNode();
            const targetCandidate = targetRoot instanceof ShadowRoot ? targetRoot.host : targetElement;
            keyboardEventTarget = targetCandidate;
          } else {
            keyboardEventTarget = this.keyboardEventTarget_;
          }
          this.targetChangeHandlerKeys_ = [
            listen(
              keyboardEventTarget,
              EventType_default.KEYDOWN,
              this.handleBrowserEvent,
              this
            ),
            listen(
              keyboardEventTarget,
              EventType_default.KEYPRESS,
              this.handleBrowserEvent,
              this
            )
          ];
          if (targetElement instanceof HTMLElement) {
            const rootNode = targetElement.getRootNode();
            if (rootNode instanceof ShadowRoot) {
              this.resizeObserver_.observe(rootNode.host);
            }
            this.resizeObserver_?.observe(targetElement);
          }
        }
        this.updateSize();
      }
    }
    /**
     * @private
     */
    handleTileChange_() {
      this.render();
    }
    /**
     * @private
     */
    handleViewPropertyChanged_() {
      this.render();
    }
    /**
     * @private
     */
    handleViewChanged_() {
      if (this.viewPropertyListenerKey_) {
        unlistenByKey(this.viewPropertyListenerKey_);
        this.viewPropertyListenerKey_ = null;
      }
      if (this.viewChangeListenerKey_) {
        unlistenByKey(this.viewChangeListenerKey_);
        this.viewChangeListenerKey_ = null;
      }
      const view = this.getView();
      if (view) {
        this.updateViewportSize_(this.getSize());
        this.viewPropertyListenerKey_ = listen(
          view,
          ObjectEventType_default.PROPERTYCHANGE,
          this.handleViewPropertyChanged_,
          this
        );
        this.viewChangeListenerKey_ = listen(
          view,
          EventType_default.CHANGE,
          this.handleViewPropertyChanged_,
          this
        );
        view.resolveConstraints(0);
      }
      this.render();
    }
    /**
     * @private
     */
    handleLayerGroupChanged_() {
      if (this.layerGroupPropertyListenerKeys_) {
        this.layerGroupPropertyListenerKeys_.forEach(unlistenByKey);
        this.layerGroupPropertyListenerKeys_ = null;
      }
      const layerGroup = this.getLayerGroup();
      if (layerGroup) {
        this.handleLayerAdd_(new GroupEvent("addlayer", layerGroup));
        this.layerGroupPropertyListenerKeys_ = [
          listen(layerGroup, ObjectEventType_default.PROPERTYCHANGE, this.render, this),
          listen(layerGroup, EventType_default.CHANGE, this.render, this),
          listen(layerGroup, "addlayer", this.handleLayerAdd_, this),
          listen(layerGroup, "removelayer", this.handleLayerRemove_, this)
        ];
      }
      this.render();
    }
    /**
     * @return {boolean} Is rendered.
     */
    isRendered() {
      return !!this.frameState_;
    }
    /**
     * @private
     */
    animationDelay_() {
      this.animationDelayKey_ = void 0;
      this.renderFrame_(Date.now());
    }
    /**
     * Requests an immediate render in a synchronous manner.
     * @api
     */
    renderSync() {
      if (this.animationDelayKey_) {
        cancelAnimationFrame(this.animationDelayKey_);
      }
      this.animationDelay_();
    }
    /**
     * Redraws all text after new fonts have loaded
     */
    redrawText() {
      if (!this.frameState_) {
        return;
      }
      const layerStates = this.frameState_.layerStatesArray;
      for (let i = 0, ii = layerStates.length; i < ii; ++i) {
        const layer = layerStates[i].layer;
        if (layer.hasRenderer()) {
          layer.getRenderer().handleFontsChanged();
        }
      }
    }
    /**
     * Request a map rendering (at the next animation frame).
     * @api
     */
    render() {
      if (this.renderer_ && this.animationDelayKey_ === void 0) {
        this.animationDelayKey_ = requestAnimationFrame(this.animationDelay_);
      }
    }
    /**
     * Remove the given control from the map.
     * @param {import("./control/Control.js").default} control Control.
     * @return {import("./control/Control.js").default|undefined} The removed control (or undefined
     *     if the control was not found).
     * @api
     */
    removeControl(control) {
      return this.getControls().remove(control);
    }
    /**
     * Remove the given interaction from the map.
     * @param {import("./interaction/Interaction.js").default} interaction Interaction to remove.
     * @return {import("./interaction/Interaction.js").default|undefined} The removed interaction (or
     *     undefined if the interaction was not found).
     * @api
     */
    removeInteraction(interaction) {
      return this.getInteractions().remove(interaction);
    }
    /**
     * Removes the given layer from the map.
     * @param {import("./layer/Base.js").default} layer Layer.
     * @return {import("./layer/Base.js").default|undefined} The removed layer (or undefined if the
     *     layer was not found).
     * @api
     */
    removeLayer(layer) {
      const layers = this.getLayerGroup().getLayers();
      return layers.remove(layer);
    }
    /**
     * @param {import("./layer/Group.js").GroupEvent} event The layer remove event.
     * @private
     */
    handleLayerRemove_(event) {
      removeLayerMapProperty(event.layer);
    }
    /**
     * Remove the given overlay from the map.
     * @param {import("./Overlay.js").default} overlay Overlay.
     * @return {import("./Overlay.js").default|undefined} The removed overlay (or undefined
     *     if the overlay was not found).
     * @api
     */
    removeOverlay(overlay) {
      return this.getOverlays().remove(overlay);
    }
    /**
     * @param {number} time Time.
     * @private
     */
    renderFrame_(time) {
      const size = this.getSize();
      const view = this.getView();
      const previousFrameState = this.frameState_;
      let frameState = null;
      if (size !== void 0 && hasArea(size) && view && view.isDef()) {
        const viewHints = view.getHints(
          this.frameState_ ? this.frameState_.viewHints : void 0
        );
        const viewState = view.getState();
        frameState = {
          animate: false,
          coordinateToPixelTransform: this.coordinateToPixelTransform_,
          declutter: null,
          extent: getForViewAndSize(
            viewState.center,
            viewState.resolution,
            viewState.rotation,
            size
          ),
          index: this.frameIndex_++,
          layerIndex: 0,
          layerStatesArray: this.getLayerGroup().getLayerStatesArray(),
          pixelRatio: this.pixelRatio_,
          pixelToCoordinateTransform: this.pixelToCoordinateTransform_,
          postRenderFunctions: [],
          size,
          tileQueue: this.tileQueue_,
          time,
          usedTiles: {},
          viewState,
          viewHints,
          wantedTiles: {},
          mapId: getUid(this),
          renderTargets: {}
        };
        if (viewState.nextCenter && viewState.nextResolution) {
          const rotation = isNaN(viewState.nextRotation) ? viewState.rotation : viewState.nextRotation;
          frameState.nextExtent = getForViewAndSize(
            viewState.nextCenter,
            viewState.nextResolution,
            rotation,
            size
          );
        }
      }
      this.frameState_ = frameState;
      this.renderer_.renderFrame(frameState);
      if (frameState) {
        if (frameState.animate) {
          this.render();
        }
        Array.prototype.push.apply(
          this.postRenderFunctions_,
          frameState.postRenderFunctions
        );
        if (previousFrameState) {
          const moveStart = !this.previousExtent_ || !isEmpty(this.previousExtent_) && !equals(frameState.extent, this.previousExtent_);
          if (moveStart) {
            this.dispatchEvent(
              new MapEvent_default(MapEventType_default.MOVESTART, this, previousFrameState)
            );
            this.previousExtent_ = createOrUpdateEmpty(this.previousExtent_);
          }
        }
        const idle = this.previousExtent_ && !frameState.viewHints[ViewHint_default.ANIMATING] && !frameState.viewHints[ViewHint_default.INTERACTING] && !equals(frameState.extent, this.previousExtent_);
        if (idle) {
          this.dispatchEvent(
            new MapEvent_default(MapEventType_default.MOVEEND, this, frameState)
          );
          clone(frameState.extent, this.previousExtent_);
        }
      }
      this.dispatchEvent(new MapEvent_default(MapEventType_default.POSTRENDER, this, frameState));
      this.renderComplete_ = (this.hasListener(MapEventType_default.LOADSTART) || this.hasListener(MapEventType_default.LOADEND) || this.hasListener(EventType_default3.RENDERCOMPLETE)) && !this.tileQueue_.getTilesLoading() && !this.tileQueue_.getCount() && !this.getLoadingOrNotReady();
      if (!this.postRenderTimeoutHandle_) {
        this.postRenderTimeoutHandle_ = setTimeout(() => {
          this.postRenderTimeoutHandle_ = void 0;
          this.handlePostRender();
        }, 0);
      }
    }
    /**
     * Sets the layergroup of this map.
     * @param {LayerGroup} layerGroup A layer group containing the layers in this map.
     * @observable
     * @api
     */
    setLayerGroup(layerGroup) {
      const oldLayerGroup = this.getLayerGroup();
      if (oldLayerGroup) {
        this.handleLayerRemove_(new GroupEvent("removelayer", oldLayerGroup));
      }
      this.set(MapProperty_default.LAYERGROUP, layerGroup);
    }
    /**
     * Set the size of this map.
     * @param {import("./size.js").Size|undefined} size The size in pixels of the map in the DOM.
     * @observable
     * @api
     */
    setSize(size) {
      this.set(MapProperty_default.SIZE, size);
    }
    /**
     * Set the target element to render this map into.
     * For accessibility (focus and keyboard events for map navigation), the `target` element must have a
     *  properly configured `tabindex` attribute. If the `target` element is inside a Shadow DOM, the
     *  `tabindex` atribute must be set on the custom element's host element.
     * @param {HTMLElement|string} [target] The Element or id of the Element
     *     that the map is rendered in.
     * @observable
     * @api
     */
    setTarget(target) {
      this.set(MapProperty_default.TARGET, target);
    }
    /**
     * Set the view for this map.
     * @param {View|Promise<import("./View.js").ViewOptions>|null} view The view that controls this map.
     * It is also possible to pass a promise that resolves to options for constructing a view.  This
     * alternative allows view properties to be resolved by sources or other components that load
     * view-related metadata.
     * @observable
     * @api
     */
    setView(view) {
      if (!view || view instanceof View_default) {
        this.set(MapProperty_default.VIEW, view);
        return;
      }
      this.set(MapProperty_default.VIEW, new View_default());
      const map = this;
      view.then(function(viewOptions) {
        map.setView(new View_default(viewOptions));
      });
    }
    /**
     * Force a recalculation of the map viewport size.  This should be called when
     * third-party code changes the size of the map viewport.
     * @api
     */
    updateSize() {
      const targetElement = this.getTargetElement();
      let size = void 0;
      if (targetElement) {
        let width, height;
        if (isCanvas(targetElement)) {
          const transform2 = targetElement.getContext("2d").getTransform();
          width = targetElement.width / transform2.a;
          height = targetElement.height / transform2.d;
        } else {
          const computedStyle = getComputedStyle(targetElement);
          width = targetElement.offsetWidth - parseFloat(computedStyle["borderLeftWidth"]) - parseFloat(computedStyle["paddingLeft"]) - parseFloat(computedStyle["paddingRight"]) - parseFloat(computedStyle["borderRightWidth"]);
          height = targetElement.offsetHeight - parseFloat(computedStyle["borderTopWidth"]) - parseFloat(computedStyle["paddingTop"]) - parseFloat(computedStyle["paddingBottom"]) - parseFloat(computedStyle["borderBottomWidth"]);
        }
        if (!isNaN(width) && !isNaN(height)) {
          size = [Math.max(0, width), Math.max(0, height)];
          if (!hasArea(size) && !!(targetElement.offsetWidth || targetElement.offsetHeight || targetElement.getClientRects().length)) {
            warn(
              "No map visible because the map container's width or height are 0."
            );
          }
        }
      }
      const oldSize = this.getSize();
      if (size && (!oldSize || !equals2(size, oldSize))) {
        this.updateViewportSize_(size);
        this.setSize(size);
      }
    }
    /**
     * Recomputes the viewport size and save it on the view object (if any)
     * @param {import("./size.js").Size|undefined} size The size.
     * @private
     */
    updateViewportSize_(size) {
      const view = this.getView();
      if (view) {
        view.setViewportSize(size);
      }
    }
  };
  function createOptionsInternal(options) {
    let keyboardEventTarget = null;
    if (options.keyboardEventTarget !== void 0) {
      keyboardEventTarget = typeof options.keyboardEventTarget === "string" ? document.getElementById(options.keyboardEventTarget) : options.keyboardEventTarget;
    }
    const values = {};
    const layerGroup = options.layers && typeof /** @type {?} */
    options.layers.getLayers === "function" ? (
      /** @type {LayerGroup} */
      options.layers
    ) : new Group_default({
      layers: (
        /** @type {Collection<import("./layer/Base.js").default>|Array<import("./layer/Base.js").default>} */
        options.layers
      )
    });
    values[MapProperty_default.LAYERGROUP] = layerGroup;
    values[MapProperty_default.TARGET] = options.target;
    values[MapProperty_default.VIEW] = options.view instanceof View_default ? options.view : new View_default();
    let controls;
    if (options.controls !== void 0) {
      if (Array.isArray(options.controls)) {
        controls = new Collection_default(options.controls.slice());
      } else {
        assert(
          typeof /** @type {?} */
          options.controls.getArray === "function",
          "Expected `controls` to be an array or an `ol/Collection.js`"
        );
        controls = options.controls;
      }
    }
    let interactions;
    if (options.interactions !== void 0) {
      if (Array.isArray(options.interactions)) {
        interactions = new Collection_default(options.interactions.slice());
      } else {
        assert(
          typeof /** @type {?} */
          options.interactions.getArray === "function",
          "Expected `interactions` to be an array or an `ol/Collection.js`"
        );
        interactions = options.interactions;
      }
    }
    let overlays;
    if (options.overlays !== void 0) {
      if (Array.isArray(options.overlays)) {
        overlays = new Collection_default(options.overlays.slice());
      } else {
        assert(
          typeof /** @type {?} */
          options.overlays.getArray === "function",
          "Expected `overlays` to be an array or an `ol/Collection.js`"
        );
        overlays = options.overlays;
      }
    } else {
      overlays = new Collection_default();
    }
    return {
      controls,
      interactions,
      keyboardEventTarget,
      overlays,
      values
    };
  }
  var Map_default2 = Map;

  // node_modules/ol/DataTile.js
  function asImageLike(data) {
    return data instanceof Image || data instanceof HTMLCanvasElement || data instanceof HTMLVideoElement || data instanceof ImageBitmap ? data : null;
  }
  var disposedError = new Error("disposed");
  var defaultSize = [256, 256];
  var DataTile = class extends Tile_default {
    /**
     * @param {Options} options Tile options.
     */
    constructor(options) {
      const state = TileState_default.IDLE;
      super(options.tileCoord, state, {
        transition: options.transition,
        interpolate: options.interpolate
      });
      this.loader_ = options.loader;
      this.data_ = null;
      this.error_ = null;
      this.size_ = options.size || null;
      this.controller_ = options.controller || null;
    }
    /**
     * Get the tile size.
     * @return {import('./size.js').Size} Tile size.
     */
    getSize() {
      if (this.size_) {
        return this.size_;
      }
      const imageData = asImageLike(this.data_);
      if (imageData) {
        return [imageData.width, imageData.height];
      }
      return defaultSize;
    }
    /**
     * Get the data for the tile.
     * @return {Data} Tile data.
     * @api
     */
    getData() {
      return this.data_;
    }
    /**
     * Get any loading error.
     * @return {Error} Loading error.
     * @api
     */
    getError() {
      return this.error_;
    }
    /**
     * Load the tile data.
     * @api
     * @override
     */
    load() {
      if (this.state !== TileState_default.IDLE && this.state !== TileState_default.ERROR) {
        return;
      }
      this.state = TileState_default.LOADING;
      this.changed();
      const self2 = this;
      this.loader_().then(function(data) {
        self2.data_ = data;
        self2.state = TileState_default.LOADED;
        self2.changed();
      }).catch(function(error) {
        self2.error_ = error;
        self2.state = TileState_default.ERROR;
        self2.changed();
      });
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      if (this.controller_) {
        this.controller_.abort(disposedError);
        this.controller_ = null;
      }
      super.disposeInternal();
    }
  };
  var DataTile_default = DataTile;

  // node_modules/ol/structs/LRUCache.js
  var LRUCache = class {
    /**
     * @param {number} [highWaterMark] High water mark.
     */
    constructor(highWaterMark) {
      this.highWaterMark = highWaterMark !== void 0 ? highWaterMark : 2048;
      this.count_ = 0;
      this.entries_ = {};
      this.oldest_ = null;
      this.newest_ = null;
    }
    deleteOldest() {
      const entry = this.pop();
      if (entry instanceof Disposable_default) {
        entry.dispose();
      }
    }
    /**
     * @return {boolean} Can expire cache.
     */
    canExpireCache() {
      return this.highWaterMark > 0 && this.getCount() > this.highWaterMark;
    }
    /**
     * Expire the cache. When the cache entry is a {@link module:ol/Disposable~Disposable},
     * the entry will be disposed.
     * @param {!Object<string, boolean>} [keep] Keys to keep. To be implemented by subclasses.
     */
    expireCache(keep) {
      while (this.canExpireCache()) {
        this.deleteOldest();
      }
    }
    /**
     * FIXME empty description for jsdoc
     */
    clear() {
      while (this.oldest_) {
        this.deleteOldest();
      }
    }
    /**
     * @param {string} key Key.
     * @return {boolean} Contains key.
     */
    containsKey(key) {
      return this.entries_.hasOwnProperty(key);
    }
    /**
     * @param {function(T, string, LRUCache<T>): ?} f The function
     *     to call for every entry from the oldest to the newer. This function takes
     *     3 arguments (the entry value, the entry key and the LRUCache object).
     *     The return value is ignored.
     */
    forEach(f) {
      let entry = this.oldest_;
      while (entry) {
        f(entry.value_, entry.key_, this);
        entry = entry.newer;
      }
    }
    /**
     * @param {string} key Key.
     * @param {*} [options] Options (reserved for subclasses).
     * @return {T} Value.
     */
    get(key, options) {
      const entry = this.entries_[key];
      assert(
        entry !== void 0,
        "Tried to get a value for a key that does not exist in the cache"
      );
      if (entry === this.newest_) {
        return entry.value_;
      }
      if (entry === this.oldest_) {
        this.oldest_ = /** @type {Entry} */
        this.oldest_.newer;
        this.oldest_.older = null;
      } else {
        entry.newer.older = entry.older;
        entry.older.newer = entry.newer;
      }
      entry.newer = null;
      entry.older = this.newest_;
      this.newest_.newer = entry;
      this.newest_ = entry;
      return entry.value_;
    }
    /**
     * Remove an entry from the cache.
     * @param {string} key The entry key.
     * @return {T} The removed entry.
     */
    remove(key) {
      const entry = this.entries_[key];
      assert(
        entry !== void 0,
        "Tried to get a value for a key that does not exist in the cache"
      );
      if (entry === this.newest_) {
        this.newest_ = /** @type {Entry} */
        entry.older;
        if (this.newest_) {
          this.newest_.newer = null;
        }
      } else if (entry === this.oldest_) {
        this.oldest_ = /** @type {Entry} */
        entry.newer;
        if (this.oldest_) {
          this.oldest_.older = null;
        }
      } else {
        entry.newer.older = entry.older;
        entry.older.newer = entry.newer;
      }
      delete this.entries_[key];
      --this.count_;
      return entry.value_;
    }
    /**
     * @return {number} Count.
     */
    getCount() {
      return this.count_;
    }
    /**
     * @return {Array<string>} Keys.
     */
    getKeys() {
      const keys = new Array(this.count_);
      let i = 0;
      let entry;
      for (entry = this.newest_; entry; entry = entry.older) {
        keys[i++] = entry.key_;
      }
      return keys;
    }
    /**
     * @return {Array<T>} Values.
     */
    getValues() {
      const values = new Array(this.count_);
      let i = 0;
      let entry;
      for (entry = this.newest_; entry; entry = entry.older) {
        values[i++] = entry.value_;
      }
      return values;
    }
    /**
     * @return {T} Last value.
     */
    peekLast() {
      return this.oldest_.value_;
    }
    /**
     * @return {string} Last key.
     */
    peekLastKey() {
      return this.oldest_.key_;
    }
    /**
     * Get the key of the newest item in the cache.  Throws if the cache is empty.
     * @return {string} The newest key.
     */
    peekFirstKey() {
      return this.newest_.key_;
    }
    /**
     * Return an entry without updating least recently used time.
     * @param {string} key Key.
     * @return {T|undefined} Value.
     */
    peek(key) {
      return this.entries_[key]?.value_;
    }
    /**
     * @return {T} value Value.
     */
    pop() {
      const entry = this.oldest_;
      delete this.entries_[entry.key_];
      if (entry.newer) {
        entry.newer.older = null;
      }
      this.oldest_ = /** @type {Entry} */
      entry.newer;
      if (!this.oldest_) {
        this.newest_ = null;
      }
      --this.count_;
      return entry.value_;
    }
    /**
     * @param {string} key Key.
     * @param {T} value Value.
     */
    replace(key, value) {
      this.get(key);
      this.entries_[key].value_ = value;
    }
    /**
     * @param {string} key Key.
     * @param {T} value Value.
     */
    set(key, value) {
      assert(
        !(key in this.entries_),
        "Tried to set a value for a key that is used already"
      );
      const entry = {
        key_: key,
        newer: null,
        older: this.newest_,
        value_: value
      };
      if (!this.newest_) {
        this.oldest_ = entry;
      } else {
        this.newest_.newer = entry;
      }
      this.newest_ = entry;
      this.entries_[key] = entry;
      ++this.count_;
    }
    /**
     * Set a maximum number of entries for the cache.
     * @param {number} size Cache size.
     * @api
     */
    setSize(size) {
      this.highWaterMark = size;
    }
  };
  var LRUCache_default = LRUCache;

  // node_modules/ol/render/canvas/ZIndexContext.js
  var ZIndexContext = class {
    constructor() {
      this.instructions_ = [];
      this.zIndex = 0;
      this.offset_ = 0;
      this.context_ = /** @type {ZIndexContextProxy} */
      new Proxy(getSharedCanvasContext2D(), {
        get: (target, property) => {
          if (typeof /** @type {*} */
          getSharedCanvasContext2D()[property] !== "function") {
            return void 0;
          }
          this.push_(property);
          return this.pushMethodArgs_;
        },
        set: (target, property, value) => {
          this.push_(property, value);
          return true;
        }
      });
    }
    /**
     * @param {...*} args Arguments to push to the instructions array.
     * @private
     */
    push_(...args) {
      const instructions = this.instructions_;
      const index = this.zIndex + this.offset_;
      if (!instructions[index]) {
        instructions[index] = [];
      }
      instructions[index].push(...args);
    }
    /**
     * @private
     * @param {...*} args Args.
     * @return {ZIndexContext} This.
     */
    pushMethodArgs_ = (...args) => {
      this.push_(args);
      return this;
    };
    /**
     * Push a function that renders to the context directly.
     * @param {function(CanvasRenderingContext2D): void} render Function.
     */
    pushFunction(render2) {
      this.push_(render2);
    }
    /**
     * Get a proxy for CanvasRenderingContext2D which does not support getting state
     * (e.g. `context.globalAlpha`, which will return `undefined`). To set state, if it relies on a
     * previous state (e.g. `context.globalAlpha = context.globalAlpha / 2`), set a function,
     * e.g. `context.globalAlpha = (context) => context.globalAlpha / 2`.
     * @return {ZIndexContextProxy} Context.
     */
    getContext() {
      return this.context_;
    }
    /**
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     */
    draw(context) {
      this.instructions_.forEach((instructionsAtIndex) => {
        for (let i = 0, ii = instructionsAtIndex.length; i < ii; ++i) {
          const property = instructionsAtIndex[i];
          if (typeof property === "function") {
            property(context);
            continue;
          }
          const instructionAtIndex = instructionsAtIndex[++i];
          if (typeof /** @type {*} */
          context[property] === "function") {
            context[property](...instructionAtIndex);
          } else {
            if (typeof instructionAtIndex === "function") {
              context[property] = instructionAtIndex(context);
              continue;
            }
            context[property] = instructionAtIndex;
          }
        }
      });
    }
    clear() {
      this.instructions_.length = 0;
      this.zIndex = 0;
      this.offset_ = 0;
    }
    /**
     * Offsets the zIndex by the highest current zIndex. Useful for rendering multiple worlds or tiles, to
     * avoid conflicting context.clip() or context.save()/restore() calls.
     */
    offset() {
      this.offset_ = this.instructions_.length;
      this.zIndex = 0;
    }
  };
  var ZIndexContext_default = ZIndexContext;

  // node_modules/ol/renderer/Layer.js
  var maxStaleKeys = 5;
  var LayerRenderer = class extends Observable_default {
    /**
     * @param {LayerType} layer Layer.
     */
    constructor(layer) {
      super();
      this.ready = true;
      this.boundHandleImageChange_ = this.handleImageChange_.bind(this);
      this.layer_ = layer;
      this.staleKeys_ = new Array();
      this.maxStaleKeys = maxStaleKeys;
    }
    /**
     * @return {Array<string>} Get the list of stale keys.
     */
    getStaleKeys() {
      return this.staleKeys_;
    }
    /**
     * @param {string} key The new stale key.
     */
    prependStaleKey(key) {
      this.staleKeys_.unshift(key);
      if (this.staleKeys_.length > this.maxStaleKeys) {
        this.staleKeys_.length = this.maxStaleKeys;
      }
    }
    /**
     * Asynchronous layer level hit detection.
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Promise<Array<import("../Feature.js").FeatureLike>>} Promise that resolves with
     * an array of features.
     */
    getFeatures(pixel) {
      return abstract();
    }
    /**
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     */
    getData(pixel) {
      return null;
    }
    /**
     * Determine whether render should be called.
     * @abstract
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     */
    prepareFrame(frameState) {
      return abstract();
    }
    /**
     * Render the layer.
     * @abstract
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement|null} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     */
    renderFrame(frameState, target) {
      return abstract();
    }
    /**
     * @abstract
     * @param {import("../coordinate.js").Coordinate} coordinate Coordinate.
     * @param {import("../Map.js").FrameState} frameState Frame state.
     * @param {number} hitTolerance Hit tolerance in pixels.
     * @param {import("./vector.js").FeatureCallback<T>} callback Feature callback.
     * @param {Array<import("./Map.js").HitMatch<T>>} matches The hit detected matches with tolerance.
     * @return {T|undefined} Callback result.
     * @template T
     */
    forEachFeatureAtCoordinate(coordinate, frameState, hitTolerance, callback, matches) {
      return void 0;
    }
    /**
     * @return {LayerType} Layer.
     */
    getLayer() {
      return this.layer_;
    }
    /**
     * Perform action necessary to get the layer rendered after new fonts have loaded
     * @abstract
     */
    handleFontsChanged() {
    }
    /**
     * Handle changes in image state.
     * @param {import("../events/Event.js").default} event Image change event.
     * @private
     */
    handleImageChange_(event) {
      const image = (
        /** @type {import("../Image.js").default} */
        event.target
      );
      if (image.getState() === ImageState_default.LOADED || image.getState() === ImageState_default.ERROR) {
        this.renderIfReadyAndVisible();
      }
    }
    /**
     * Load the image if not already loaded, and register the image change
     * listener if needed.
     * @param {import("../Image.js").default} image Image.
     * @return {boolean} `true` if the image is already loaded, `false` otherwise.
     * @protected
     */
    loadImage(image) {
      let imageState = image.getState();
      if (imageState != ImageState_default.LOADED && imageState != ImageState_default.ERROR) {
        image.addEventListener(EventType_default.CHANGE, this.boundHandleImageChange_);
      }
      if (imageState == ImageState_default.IDLE) {
        image.load();
        imageState = image.getState();
      }
      return imageState == ImageState_default.LOADED;
    }
    /**
     * @protected
     */
    renderIfReadyAndVisible() {
      const layer = this.getLayer();
      if (layer && layer.getVisible() && layer.getSourceState() === "ready") {
        layer.changed();
      }
    }
    /**
     * @param {import("../Map.js").FrameState} frameState Frame state.
     */
    renderDeferred(frameState) {
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      delete this.layer_;
      super.disposeInternal();
    }
  };
  var Layer_default2 = LayerRenderer;

  // node_modules/ol/renderer/canvas/Layer.js
  var pixelContext = null;
  function createPixelContext() {
    pixelContext = createCanvasContext2D(1, 1, void 0, {
      willReadFrequently: true
    });
  }
  var CanvasLayerRenderer = class extends Layer_default2 {
    /**
     * @param {LayerType} layer Layer.
     */
    constructor(layer) {
      super(layer);
      this.container = null;
      this.renderedResolution;
      this.tempTransform = create();
      this.pixelTransform = create();
      this.inversePixelTransform = create();
      this.context = null;
      this.deferredContext_ = null;
      this.containerReused = false;
      this.frameState = null;
    }
    /**
     * @param {import('../../DataTile.js').ImageLike} image Image.
     * @param {number} col The column index.
     * @param {number} row The row index.
     * @return {Uint8ClampedArray|null} The image data.
     */
    getImageData(image, col, row) {
      if (!pixelContext) {
        createPixelContext();
      }
      pixelContext.clearRect(0, 0, 1, 1);
      let data;
      try {
        pixelContext.drawImage(image, col, row, 1, 1, 0, 0, 1, 1);
        data = pixelContext.getImageData(0, 0, 1, 1).data;
      } catch {
        pixelContext = null;
        return null;
      }
      return data;
    }
    /**
     * @param {import('../../Map.js').FrameState} frameState Frame state.
     * @return {string} Background color.
     */
    getBackground(frameState) {
      const layer = this.getLayer();
      let background = layer.getBackground();
      if (typeof background === "function") {
        background = background(frameState.viewState.resolution);
      }
      return background || void 0;
    }
    /**
     * Get a rendering container from an existing target, if compatible.
     * @param {HTMLElement} target Potential render target.
     * @param {string} transform CSS transform matrix.
     * @param {string} [backgroundColor] Background color.
     */
    useContainer(target, transform2, backgroundColor) {
      const layerClassName = this.getLayer().getClassName();
      let container, context;
      if (target && target.className === layerClassName && (!backgroundColor || target && target.style.backgroundColor && equals2(
        asArray(target.style.backgroundColor),
        asArray(backgroundColor)
      ))) {
        const canvas = target.firstElementChild;
        if (isCanvas(canvas)) {
          context = canvas.getContext("2d");
        }
      }
      if (context && equivalent2(context.canvas.style.transform, transform2)) {
        this.container = target;
        this.context = context;
        this.containerReused = true;
      } else if (this.containerReused) {
        this.container = null;
        this.context = null;
        this.containerReused = false;
      } else if (this.container) {
        this.container.style.backgroundColor = null;
      }
      if (!this.container) {
        container = WORKER_OFFSCREEN_CANVAS ? createMockDiv() : document.createElement("div");
        container.className = layerClassName;
        let style = container.style;
        style.position = "absolute";
        style.width = "100%";
        style.height = "100%";
        context = createCanvasContext2D();
        const canvas = (
          /** @type {HTMLCanvasElement} */
          context.canvas
        );
        container.appendChild(canvas);
        style = canvas.style;
        style.position = "absolute";
        style.left = "0";
        style.transformOrigin = "top left";
        this.container = container;
        this.context = context;
      }
      if (!this.containerReused && backgroundColor && !this.container.style.backgroundColor) {
        this.container.style.backgroundColor = backgroundColor;
      }
    }
    /**
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {import("../../extent.js").Extent} extent Clip extent.
     * @protected
     */
    clipUnrotated(context, frameState, extent) {
      const topLeft = getTopLeft(extent);
      const topRight = getTopRight(extent);
      const bottomRight = getBottomRight(extent);
      const bottomLeft = getBottomLeft(extent);
      apply(frameState.coordinateToPixelTransform, topLeft);
      apply(frameState.coordinateToPixelTransform, topRight);
      apply(frameState.coordinateToPixelTransform, bottomRight);
      apply(frameState.coordinateToPixelTransform, bottomLeft);
      const inverted = this.inversePixelTransform;
      apply(inverted, topLeft);
      apply(inverted, topRight);
      apply(inverted, bottomRight);
      apply(inverted, bottomLeft);
      context.save();
      context.beginPath();
      context.moveTo(Math.round(topLeft[0]), Math.round(topLeft[1]));
      context.lineTo(Math.round(topRight[0]), Math.round(topRight[1]));
      context.lineTo(Math.round(bottomRight[0]), Math.round(bottomRight[1]));
      context.lineTo(Math.round(bottomLeft[0]), Math.round(bottomLeft[1]));
      context.clip();
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @protected
     */
    prepareContainer(frameState, target) {
      const extent = frameState.extent;
      const resolution = frameState.viewState.resolution;
      const rotation = frameState.viewState.rotation;
      const pixelRatio = frameState.pixelRatio;
      const width = Math.round(getWidth(extent) / resolution * pixelRatio);
      const height = Math.round(getHeight(extent) / resolution * pixelRatio);
      compose(
        this.pixelTransform,
        frameState.size[0] / 2,
        frameState.size[1] / 2,
        1 / pixelRatio,
        1 / pixelRatio,
        rotation,
        -width / 2,
        -height / 2
      );
      makeInverse(this.inversePixelTransform, this.pixelTransform);
      const canvasTransform = toString(this.pixelTransform);
      this.useContainer(target, canvasTransform, this.getBackground(frameState));
      if (!this.containerReused) {
        const canvas = this.context.canvas;
        if (canvas.width != width || canvas.height != height) {
          canvas.width = width;
          canvas.height = height;
        } else {
          this.context.clearRect(0, 0, width, height);
        }
        if (canvasTransform !== /** @type {HTMLCanvasElement} */
        canvas.style.transform) {
          canvas.style.transform = canvasTransform;
        }
      }
    }
    /**
     * @param {import("../../render/EventType.js").default} type Event type.
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @private
     */
    dispatchRenderEvent_(type, context, frameState) {
      const layer = this.getLayer();
      if (layer.hasListener(type)) {
        const event = new Event_default2(
          type,
          this.inversePixelTransform,
          frameState,
          context
        );
        layer.dispatchEvent(event);
      }
    }
    /**
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    preRender(context, frameState) {
      this.frameState = frameState;
      if (frameState.declutter) {
        return;
      }
      this.dispatchRenderEvent_(EventType_default3.PRERENDER, context, frameState);
    }
    /**
     * @param {CanvasRenderingContext2D|OffscreenCanvasRenderingContext2D} context Context.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @protected
     */
    postRender(context, frameState) {
      if (frameState.declutter) {
        return;
      }
      this.dispatchRenderEvent_(EventType_default3.POSTRENDER, context, frameState);
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     */
    renderDeferredInternal(frameState) {
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import('../../render/canvas/ZIndexContext.js').ZIndexContextProxy} Context.
     */
    getRenderContext(frameState) {
      if (frameState.declutter && !this.deferredContext_) {
        this.deferredContext_ = new ZIndexContext_default();
      }
      return frameState.declutter ? this.deferredContext_.getContext() : this.context;
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @override
     */
    renderDeferred(frameState) {
      if (!frameState.declutter) {
        return;
      }
      this.dispatchRenderEvent_(
        EventType_default3.PRERENDER,
        this.context,
        frameState
      );
      if (frameState.declutter && this.deferredContext_) {
        this.deferredContext_.draw(this.context);
        this.deferredContext_.clear();
      }
      this.renderDeferredInternal(frameState);
      this.dispatchRenderEvent_(
        EventType_default3.POSTRENDER,
        this.context,
        frameState
      );
    }
    /**
     * Creates a transform for rendering to an element that will be rotated after rendering.
     * @param {import("../../coordinate.js").Coordinate} center Center.
     * @param {number} resolution Resolution.
     * @param {number} rotation Rotation.
     * @param {number} pixelRatio Pixel ratio.
     * @param {number} width Width of the rendered element (in pixels).
     * @param {number} height Height of the rendered element (in pixels).
     * @param {number} offsetX Offset on the x-axis in view coordinates.
     * @protected
     * @return {!import("../../transform.js").Transform} Transform.
     */
    getRenderTransform(center, resolution, rotation, pixelRatio, width, height, offsetX) {
      const dx1 = width / 2;
      const dy1 = height / 2;
      const sx = pixelRatio / resolution;
      const sy = -sx;
      const dx2 = -center[0] + offsetX;
      const dy2 = -center[1];
      return compose(
        this.tempTransform,
        dx1,
        dy1,
        sx,
        sy,
        -rotation,
        dx2,
        dy2
      );
    }
    /**
     * Clean up.
     * @override
     */
    disposeInternal() {
      delete this.frameState;
      super.disposeInternal();
    }
  };
  var Layer_default3 = CanvasLayerRenderer;

  // node_modules/ol/renderer/canvas/TileLayer.js
  function addTileToLookup(tilesByZ, tile, z) {
    if (!(z in tilesByZ)) {
      tilesByZ[z] = /* @__PURE__ */ new Set([tile]);
      return true;
    }
    const set = tilesByZ[z];
    const existing = set.has(tile);
    if (!existing) {
      set.add(tile);
    }
    return !existing;
  }
  function removeTileFromLookup(tilesByZ, tile, z) {
    const set = tilesByZ[z];
    if (set) {
      return set.delete(tile);
    }
    return false;
  }
  function getRenderExtent(frameState, extent) {
    const layerState = frameState.layerStatesArray[frameState.layerIndex];
    if (layerState.extent) {
      extent = getIntersection(
        extent,
        fromUserExtent(layerState.extent, frameState.viewState.projection)
      );
    }
    const source = (
      /** @type {import("../../source/Tile.js").default} */
      layerState.layer.getRenderSource()
    );
    if (!source.getWrapX()) {
      const gridExtent = source.getTileGridForProjection(frameState.viewState.projection).getExtent();
      if (gridExtent) {
        extent = getIntersection(extent, gridExtent);
      }
    }
    return extent;
  }
  var CanvasTileLayerRenderer = class extends Layer_default3 {
    /**
     * @param {LayerType} tileLayer Tile layer.
     * @param {Options} [options] Options.
     */
    constructor(tileLayer, options) {
      super(tileLayer);
      options = options || {};
      this.extentChanged = true;
      this.renderComplete = false;
      this.renderedExtent_ = null;
      this.renderedPixelRatio;
      this.renderedProjection = null;
      this.renderedTiles = [];
      this.renderedSourceKey_;
      this.renderedSourceRevision_;
      this.tempExtent = createEmpty();
      this.tempTileRange_ = new TileRange_default(0, 0, 0, 0);
      this.tempTileCoord_ = createOrUpdate3(0, 0, 0);
      const cacheSize2 = options.cacheSize !== void 0 ? options.cacheSize : 512;
      this.tileCache_ = new LRUCache_default(cacheSize2);
      this.sourceTileCache_ = null;
      this.layerExtent = null;
      this.maxStaleKeys = cacheSize2 * 0.5;
    }
    /**
     * @return {LRUCache} Tile cache.
     */
    getTileCache() {
      return this.tileCache_;
    }
    /**
     * @return {LRUCache} Tile cache.
     */
    getSourceTileCache() {
      if (!this.sourceTileCache_) {
        this.sourceTileCache_ = new LRUCache_default(512);
      }
      return this.sourceTileCache_;
    }
    /**
     * Get a tile from the cache or create one if needed.
     *
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
     * @protected
     */
    getOrCreateTile(z, x, y, frameState) {
      const tileCache = this.tileCache_;
      const tileLayer = this.getLayer();
      const tileSource = tileLayer.getSource();
      const cacheKey = getCacheKey(tileSource, tileSource.getKey(), z, x, y);
      let tile;
      if (tileCache.containsKey(cacheKey)) {
        tile = tileCache.get(cacheKey);
      } else {
        const projection = frameState.viewState.projection;
        const sourceProjection = tileSource.getProjection();
        tile = tileSource.getTile(
          z,
          x,
          y,
          frameState.pixelRatio,
          projection,
          !sourceProjection || equivalent(sourceProjection, projection) ? void 0 : this.getSourceTileCache()
        );
        if (!tile) {
          return null;
        }
        tileCache.set(cacheKey, tile);
      }
      return tile;
    }
    /**
     * @param {number} z Tile coordinate z.
     * @param {number} x Tile coordinate x.
     * @param {number} y Tile coordinate y.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {import("../../Tile.js").default|null} Tile (or null if outside source extent).
     * @protected
     */
    getTile(z, x, y, frameState) {
      const tile = this.getOrCreateTile(z, x, y, frameState);
      if (!tile) {
        return null;
      }
      return tile;
    }
    /**
     * @param {import("../../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray} Data at the pixel location.
     * @override
     */
    getData(pixel) {
      const frameState = this.frameState;
      if (!frameState) {
        return null;
      }
      const layer = this.getLayer();
      const coordinate = apply(
        frameState.pixelToCoordinateTransform,
        pixel.slice()
      );
      const layerExtent = layer.getExtent();
      if (layerExtent) {
        if (!containsCoordinate(layerExtent, coordinate)) {
          return null;
        }
      }
      const viewState = frameState.viewState;
      const source = layer.getRenderSource();
      const tileGrid = source.getTileGridForProjection(viewState.projection);
      const tilePixelRatio = source.getTilePixelRatio(frameState.pixelRatio);
      for (let z = tileGrid.getZForResolution(viewState.resolution); z >= tileGrid.getMinZoom(); --z) {
        const tileCoord = tileGrid.getTileCoordForCoordAndZ(coordinate, z);
        const tile = this.getTile(z, tileCoord[1], tileCoord[2], frameState);
        if (!tile || tile.getState() !== TileState_default.LOADED) {
          continue;
        }
        const tileOrigin = tileGrid.getOrigin(z);
        const tileSize = toSize(tileGrid.getTileSize(z));
        const tileResolution = tileGrid.getResolution(z);
        let image;
        if (tile instanceof ImageTile_default || tile instanceof Tile_default2) {
          image = tile.getImage();
        } else if (tile instanceof DataTile_default) {
          image = asImageLike(tile.getData());
          if (!image) {
            continue;
          }
        } else {
          continue;
        }
        const col = Math.floor(
          tilePixelRatio * ((coordinate[0] - tileOrigin[0]) / tileResolution - tileCoord[1] * tileSize[0])
        );
        const row = Math.floor(
          tilePixelRatio * ((tileOrigin[1] - coordinate[1]) / tileResolution - tileCoord[2] * tileSize[1])
        );
        const gutter = Math.round(
          tilePixelRatio * source.getGutterForProjection(viewState.projection)
        );
        return this.getImageData(image, col + gutter, row + gutter);
      }
      return null;
    }
    /**
     * Determine whether render should be called.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @return {boolean} Layer is ready to be rendered.
     * @override
     */
    prepareFrame(frameState) {
      if (!this.renderedProjection) {
        this.renderedProjection = frameState.viewState.projection;
      } else if (frameState.viewState.projection !== this.renderedProjection) {
        this.tileCache_.clear();
        this.renderedProjection = frameState.viewState.projection;
      }
      const source = this.getLayer().getSource();
      if (!source) {
        return false;
      }
      const sourceRevision = source.getRevision();
      if (!this.renderedSourceRevision_) {
        this.renderedSourceRevision_ = sourceRevision;
      } else if (this.renderedSourceRevision_ !== sourceRevision) {
        this.renderedSourceRevision_ = sourceRevision;
        if (this.renderedSourceKey_ === source.getKey()) {
          this.tileCache_.clear();
          this.sourceTileCache_?.clear();
        }
      }
      return true;
    }
    /**
     * Determine whether tiles for next extent should be enqueued for rendering.
     * @return {boolean} Rendering tiles for next extent is supported.
     * @protected
     */
    enqueueTilesForNextExtent() {
      return true;
    }
    /**
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {import("../../extent.js").Extent} extent The extent to be rendered.
     * @param {number} initialZ The zoom level.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @param {number} preload Number of additional levels to load.
     */
    enqueueTiles(frameState, extent, initialZ, tilesByZ, preload) {
      const viewState = frameState.viewState;
      const tileLayer = this.getLayer();
      const tileSource = tileLayer.getRenderSource();
      const tileGrid = tileSource.getTileGridForProjection(viewState.projection);
      const tileSourceKey = getUid(tileSource);
      if (!(tileSourceKey in frameState.wantedTiles)) {
        frameState.wantedTiles[tileSourceKey] = {};
      }
      const wantedTiles = frameState.wantedTiles[tileSourceKey];
      const map = tileLayer.getMapInternal();
      const minZ = Math.max(
        initialZ - preload,
        tileGrid.getMinZoom(),
        tileGrid.getZForResolution(
          Math.min(
            tileLayer.getMaxResolution(),
            map ? map.getView().getResolutionForZoom(Math.max(tileLayer.getMinZoom(), 0)) : tileGrid.getResolution(0)
          ),
          tileSource.zDirection
        )
      );
      const rotation = viewState.rotation;
      const viewport = rotation ? getRotatedViewport(
        viewState.center,
        viewState.resolution,
        rotation,
        frameState.size
      ) : void 0;
      for (let z = initialZ; z >= minZ; --z) {
        const tileRange = tileGrid.getTileRangeForExtentAndZ(
          extent,
          z,
          this.tempTileRange_
        );
        const tileResolution = tileGrid.getResolution(z);
        for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
          for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
            if (rotation && !tileGrid.tileCoordIntersectsViewport([z, x, y], viewport)) {
              continue;
            }
            const tile = this.getTile(z, x, y, frameState);
            if (!tile) {
              continue;
            }
            const added = addTileToLookup(tilesByZ, tile, z);
            if (!added) {
              continue;
            }
            const tileQueueKey = tile.getKey();
            wantedTiles[tileQueueKey] = true;
            if (tile.getState() === TileState_default.IDLE) {
              if (!frameState.tileQueue.isKeyQueued(tileQueueKey)) {
                const tileCoord = createOrUpdate3(z, x, y, this.tempTileCoord_);
                frameState.tileQueue.enqueue([
                  tile,
                  tileSourceKey,
                  tileGrid.getTileCoordCenter(tileCoord),
                  tileResolution
                ]);
              }
            }
          }
        }
      }
    }
    /**
     * Look for tiles covering the provided tile coordinate at an alternate
     * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
     * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
     * @private
     */
    findStaleTile_(tileCoord, tilesByZ) {
      const tileCache = this.tileCache_;
      const z = tileCoord[0];
      const x = tileCoord[1];
      const y = tileCoord[2];
      const staleKeys = this.getStaleKeys();
      for (let i = 0; i < staleKeys.length; ++i) {
        const cacheKey = getCacheKey(
          this.getLayer().getSource(),
          staleKeys[i],
          z,
          x,
          y
        );
        if (tileCache.containsKey(cacheKey)) {
          const tile = tileCache.peek(cacheKey);
          if (tile.getState() === TileState_default.LOADED) {
            tile.endTransition(getUid(this));
            addTileToLookup(tilesByZ, tile, z);
            return true;
          }
        }
      }
      return false;
    }
    /**
     * Look for tiles covering the provided tile coordinate at an alternate
     * zoom level.  Loaded tiles will be added to the provided tile texture lookup.
     * @param {import("../../tilegrid/TileGrid.js").default} tileGrid The tile grid.
     * @param {import("../../tilecoord.js").TileCoord} tileCoord The target tile coordinate.
     * @param {number} altZ The alternate zoom level.
     * @param {TileLookup} tilesByZ Lookup of tiles by zoom level.
     * @return {boolean} The tile coordinate is covered by loaded tiles at the alternate zoom level.
     * @private
     */
    findAltTiles_(tileGrid, tileCoord, altZ, tilesByZ) {
      const tileRange = tileGrid.getTileRangeForTileCoordAndZ(
        tileCoord,
        altZ,
        this.tempTileRange_
      );
      if (!tileRange) {
        return false;
      }
      let covered = true;
      const tileCache = this.tileCache_;
      const source = this.getLayer().getRenderSource();
      const sourceKey = source.getKey();
      for (let x = tileRange.minX; x <= tileRange.maxX; ++x) {
        for (let y = tileRange.minY; y <= tileRange.maxY; ++y) {
          const cacheKey = getCacheKey(source, sourceKey, altZ, x, y);
          let loaded = false;
          if (tileCache.containsKey(cacheKey)) {
            const tile = tileCache.peek(cacheKey);
            if (tile.getState() === TileState_default.LOADED) {
              addTileToLookup(tilesByZ, tile, altZ);
              loaded = true;
            }
          }
          if (!loaded) {
            covered = false;
          }
        }
      }
      return covered;
    }
    /**
     * Render the layer.
     *
     * The frame rendering logic has three parts:
     *
     *  1. Enqueue tiles
     *  2. Find alt tiles for those that are not yet loaded
     *  3. Render loaded tiles
     *
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {HTMLElement} target Target that may be used to render content to.
     * @return {HTMLElement} The rendered element.
     * @override
     */
    renderFrame(frameState, target) {
      this.renderComplete = true;
      const layerState = frameState.layerStatesArray[frameState.layerIndex];
      const viewState = frameState.viewState;
      const projection = viewState.projection;
      const viewResolution = viewState.resolution;
      const viewCenter = viewState.center;
      const pixelRatio = frameState.pixelRatio;
      const tileLayer = this.getLayer();
      const tileSource = tileLayer.getSource();
      const tileGrid = tileSource.getTileGridForProjection(projection);
      const z = tileGrid.getZForResolution(viewResolution, tileSource.zDirection);
      const tileResolution = tileGrid.getResolution(z);
      const sourceKey = tileSource.getKey();
      if (!this.renderedSourceKey_) {
        this.renderedSourceKey_ = sourceKey;
      } else if (this.renderedSourceKey_ !== sourceKey) {
        this.prependStaleKey(this.renderedSourceKey_);
        this.renderedSourceKey_ = sourceKey;
      }
      let frameExtent = frameState.extent;
      const tilePixelRatio = tileSource.getTilePixelRatio(pixelRatio);
      this.prepareContainer(frameState, target);
      const width = this.context.canvas.width;
      const height = this.context.canvas.height;
      this.layerExtent = layerState.extent ? fromUserExtent(layerState.extent, projection) : null;
      if (this.layerExtent) {
        frameExtent = getIntersection(frameExtent, this.layerExtent);
      }
      const dx = tileResolution * width / 2 / tilePixelRatio;
      const dy = tileResolution * height / 2 / tilePixelRatio;
      const canvasExtent = [
        viewCenter[0] - dx,
        viewCenter[1] - dy,
        viewCenter[0] + dx,
        viewCenter[1] + dy
      ];
      const tilesByZ = {};
      this.renderedTiles.length = 0;
      const preload = tileLayer.getPreload();
      if (frameState.nextExtent && this.enqueueTilesForNextExtent()) {
        const targetZ = tileGrid.getZForResolution(
          viewState.nextResolution,
          tileSource.zDirection
        );
        const nextExtent = getRenderExtent(frameState, frameState.nextExtent);
        this.enqueueTiles(frameState, nextExtent, targetZ, tilesByZ, preload);
      }
      const renderExtent = getRenderExtent(frameState, frameExtent);
      this.enqueueTiles(frameState, renderExtent, z, tilesByZ, 0);
      if (preload > 0) {
        setTimeout(() => {
          this.enqueueTiles(
            frameState,
            renderExtent,
            z - 1,
            tilesByZ,
            preload - 1
          );
        }, 0);
      }
      if (!(z in tilesByZ)) {
        return this.container;
      }
      const uid = getUid(this);
      const time = frameState.time;
      for (const tile of tilesByZ[z]) {
        const tileState = tile.getState();
        if (tileState === TileState_default.EMPTY) {
          continue;
        }
        const tileCoord = tile.tileCoord;
        if (tileState === TileState_default.LOADED) {
          const alpha = tile.getAlpha(uid, time);
          if (alpha === 1) {
            tile.endTransition(uid);
            continue;
          }
        }
        if (tileState !== TileState_default.ERROR) {
          this.renderComplete = false;
        }
        const hasStaleTile = this.findStaleTile_(tileCoord, tilesByZ);
        if (hasStaleTile) {
          removeTileFromLookup(tilesByZ, tile, z);
          frameState.animate = true;
          continue;
        }
        const coveredByChildren = this.findAltTiles_(
          tileGrid,
          tileCoord,
          z + 1,
          tilesByZ
        );
        if (coveredByChildren) {
          continue;
        }
        const minZoom = tileGrid.getMinZoom();
        for (let parentZ = z - 1; parentZ >= minZoom; --parentZ) {
          const coveredByParent = this.findAltTiles_(
            tileGrid,
            tileCoord,
            parentZ,
            tilesByZ
          );
          if (coveredByParent) {
            break;
          }
        }
      }
      const canvasScale = tileResolution / viewResolution * pixelRatio / tilePixelRatio;
      const context = this.getRenderContext(frameState);
      compose(
        this.tempTransform,
        width / 2,
        height / 2,
        canvasScale,
        canvasScale,
        0,
        -width / 2,
        -height / 2
      );
      if (this.layerExtent) {
        this.clipUnrotated(context, frameState, this.layerExtent);
      }
      if (!tileSource.getInterpolate()) {
        context.imageSmoothingEnabled = false;
      }
      this.preRender(context, frameState);
      const zs = Object.keys(tilesByZ).map(Number);
      zs.sort(ascending);
      let currentClip;
      const clips = [];
      const clipZs = [];
      for (let i = zs.length - 1; i >= 0; --i) {
        const currentZ = zs[i];
        const currentTilePixelSize = tileSource.getTilePixelSize(
          currentZ,
          pixelRatio,
          projection
        );
        const currentResolution = tileGrid.getResolution(currentZ);
        const currentScale = currentResolution / tileResolution;
        const dx2 = currentTilePixelSize[0] * currentScale * canvasScale;
        const dy2 = currentTilePixelSize[1] * currentScale * canvasScale;
        const originTileCoord = tileGrid.getTileCoordForCoordAndZ(
          getTopLeft(canvasExtent),
          currentZ
        );
        const originTileExtent = tileGrid.getTileCoordExtent(originTileCoord);
        const origin = apply(this.tempTransform, [
          tilePixelRatio * (originTileExtent[0] - canvasExtent[0]) / tileResolution,
          tilePixelRatio * (canvasExtent[3] - originTileExtent[3]) / tileResolution
        ]);
        const tileGutter = tilePixelRatio * tileSource.getGutterForProjection(projection);
        for (const tile of tilesByZ[currentZ]) {
          if (tile.getState() !== TileState_default.LOADED) {
            continue;
          }
          const tileCoord = tile.tileCoord;
          const xIndex = originTileCoord[1] - tileCoord[1];
          const nextX = Math.round(origin[0] - (xIndex - 1) * dx2);
          const yIndex = originTileCoord[2] - tileCoord[2];
          const nextY = Math.round(origin[1] - (yIndex - 1) * dy2);
          const x = Math.round(origin[0] - xIndex * dx2);
          const y = Math.round(origin[1] - yIndex * dy2);
          const w = nextX - x;
          const h = nextY - y;
          const transition = zs.length === 1;
          let contextSaved = false;
          currentClip = [x, y, x + w, y, x + w, y + h, x, y + h];
          for (let i2 = 0, ii = clips.length; i2 < ii; ++i2) {
            if (!transition && currentZ < clipZs[i2]) {
              const clip = clips[i2];
              if (intersects(
                [x, y, x + w, y + h],
                [clip[0], clip[3], clip[4], clip[7]]
              )) {
                if (!contextSaved) {
                  context.save();
                  contextSaved = true;
                }
                context.beginPath();
                context.moveTo(currentClip[0], currentClip[1]);
                context.lineTo(currentClip[2], currentClip[3]);
                context.lineTo(currentClip[4], currentClip[5]);
                context.lineTo(currentClip[6], currentClip[7]);
                context.moveTo(clip[6], clip[7]);
                context.lineTo(clip[4], clip[5]);
                context.lineTo(clip[2], clip[3]);
                context.lineTo(clip[0], clip[1]);
                context.clip();
              }
            }
          }
          clips.push(currentClip);
          clipZs.push(currentZ);
          this.drawTile(tile, frameState, x, y, w, h, tileGutter, transition);
          if (contextSaved) {
            context.restore();
          }
          this.renderedTiles.unshift(tile);
          this.updateUsedTiles(frameState.usedTiles, tileSource, tile);
        }
      }
      this.renderedResolution = tileResolution;
      this.extentChanged = !this.renderedExtent_ || !equals(this.renderedExtent_, canvasExtent);
      this.renderedExtent_ = canvasExtent;
      this.renderedPixelRatio = pixelRatio;
      this.postRender(this.context, frameState);
      if (this.layerExtent) {
        context.restore();
      }
      context.imageSmoothingEnabled = true;
      if (this.renderComplete) {
        const postRenderFunction = (map, frameState2) => {
          const tileSourceKey = getUid(tileSource);
          const wantedTiles = frameState2.wantedTiles[tileSourceKey];
          const tilesCount = wantedTiles ? Object.keys(wantedTiles).length : 0;
          this.updateCacheSize(tilesCount);
          this.tileCache_.expireCache();
          this.sourceTileCache_?.expireCache();
        };
        frameState.postRenderFunctions.push(postRenderFunction);
      }
      return this.container;
    }
    /**
     * Increases the cache size if needed
     * @param {number} tileCount Minimum number of tiles needed.
     */
    updateCacheSize(tileCount) {
      this.tileCache_.highWaterMark = Math.max(
        this.tileCache_.highWaterMark,
        tileCount * 2
      );
    }
    /**
     * @param {import("../../Tile.js").default} tile Tile.
     * @param {import("../../Map.js").FrameState} frameState Frame state.
     * @param {number} x Left of the tile.
     * @param {number} y Top of the tile.
     * @param {number} w Width of the tile.
     * @param {number} h Height of the tile.
     * @param {number} gutter Tile gutter.
     * @param {boolean} transition Apply an alpha transition.
     * @protected
     */
    drawTile(tile, frameState, x, y, w, h, gutter, transition) {
      let image;
      if (tile instanceof DataTile_default) {
        image = asImageLike(tile.getData());
        if (!image) {
          throw new Error("Rendering array data is not yet supported");
        }
      } else {
        image = this.getTileImage(
          /** @type {import("../../ImageTile.js").default} */
          tile
        );
      }
      if (!image) {
        return;
      }
      const context = this.getRenderContext(frameState);
      const uid = getUid(this);
      const layerState = frameState.layerStatesArray[frameState.layerIndex];
      const alpha = layerState.opacity * (transition ? tile.getAlpha(uid, frameState.time) : 1);
      const alphaChanged = alpha !== context.globalAlpha;
      if (alphaChanged) {
        context.save();
        context.globalAlpha = alpha;
      }
      context.drawImage(
        image,
        gutter,
        gutter,
        image.width - 2 * gutter,
        image.height - 2 * gutter,
        x,
        y,
        w,
        h
      );
      if (alphaChanged) {
        context.restore();
      }
      if (alpha !== layerState.opacity) {
        frameState.animate = true;
      } else if (transition) {
        tile.endTransition(uid);
      }
    }
    /**
     * @return {HTMLCanvasElement|OffscreenCanvas} Image
     */
    getImage() {
      const context = this.context;
      return context ? context.canvas : null;
    }
    /**
     * Get the image from a tile.
     * @param {import("../../ImageTile.js").default} tile Tile.
     * @return {HTMLCanvasElement|OffscreenCanvas|HTMLImageElement|HTMLVideoElement} Image.
     * @protected
     */
    getTileImage(tile) {
      return tile.getImage();
    }
    /**
     * @param {!Object<string, !Object<string, boolean>>} usedTiles Used tiles.
     * @param {import("../../source/Tile.js").default} tileSource Tile source.
     * @param {import('../../Tile.js').default} tile Tile.
     * @protected
     */
    updateUsedTiles(usedTiles, tileSource, tile) {
      const tileSourceKey = getUid(tileSource);
      if (!(tileSourceKey in usedTiles)) {
        usedTiles[tileSourceKey] = {};
      }
      usedTiles[tileSourceKey][tile.getKey()] = true;
    }
  };
  var TileLayer_default = CanvasTileLayerRenderer;

  // node_modules/ol/layer/TileProperty.js
  var TileProperty_default = {
    PRELOAD: "preload",
    USE_INTERIM_TILES_ON_ERROR: "useInterimTilesOnError"
  };

  // node_modules/ol/layer/BaseTile.js
  var BaseTileLayer = class extends Layer_default {
    /**
     * @param {Options<TileSourceType>} [options] Tile layer options.
     */
    constructor(options) {
      options = options ? options : {};
      const baseOptions = Object.assign({}, options);
      const cacheSize2 = options.cacheSize;
      delete options.cacheSize;
      delete baseOptions.preload;
      delete baseOptions.useInterimTilesOnError;
      super(baseOptions);
      this.on;
      this.once;
      this.un;
      this.cacheSize_ = cacheSize2;
      this.setPreload(options.preload !== void 0 ? options.preload : 0);
      this.setUseInterimTilesOnError(
        options.useInterimTilesOnError !== void 0 ? options.useInterimTilesOnError : true
      );
    }
    /**
     * @return {number|undefined} The suggested cache size
     * @protected
     */
    getCacheSize() {
      return this.cacheSize_;
    }
    /**
     * Return the level as number to which we will preload tiles up to.
     * @return {number} The level to preload tiles up to.
     * @observable
     * @api
     */
    getPreload() {
      return (
        /** @type {number} */
        this.get(TileProperty_default.PRELOAD)
      );
    }
    /**
     * Set the level as number to which we will preload tiles up to.
     * @param {number} preload The level to preload tiles up to.
     * @observable
     * @api
     */
    setPreload(preload) {
      this.set(TileProperty_default.PRELOAD, preload);
    }
    /**
     * Deprecated.  Whether we use interim tiles on error.
     * @return {boolean} Use interim tiles on error.
     * @observable
     * @api
     */
    getUseInterimTilesOnError() {
      return (
        /** @type {boolean} */
        this.get(TileProperty_default.USE_INTERIM_TILES_ON_ERROR)
      );
    }
    /**
     * Deprecated.  Set whether we use interim tiles on error.
     * @param {boolean} useInterimTilesOnError Use interim tiles on error.
     * @observable
     * @api
     */
    setUseInterimTilesOnError(useInterimTilesOnError) {
      this.set(TileProperty_default.USE_INTERIM_TILES_ON_ERROR, useInterimTilesOnError);
    }
    /**
     * Get data for a pixel location.  The return type depends on the source data.  For image tiles,
     * a four element RGBA array will be returned.  For data tiles, the array length will match the
     * number of bands in the dataset.  For requests outside the layer extent, `null` will be returned.
     * Data for a image tiles can only be retrieved if the source's `crossOrigin` property is set.
     *
     * ```js
     * // display layer data on every pointer move
     * map.on('pointermove', (event) => {
     *   console.log(layer.getData(event.pixel));
     * });
     * ```
     * @param {import("../pixel.js").Pixel} pixel Pixel.
     * @return {Uint8ClampedArray|Uint8Array|Float32Array|DataView|null} Pixel data.
     * @api
     * @override
     */
    getData(pixel) {
      return super.getData(pixel);
    }
  };
  var BaseTile_default = BaseTileLayer;

  // node_modules/ol/layer/Tile.js
  var TileLayer = class extends BaseTile_default {
    /**
     * @param {import("./BaseTile.js").Options<TileSourceType>} [options] Tile layer options.
     */
    constructor(options) {
      super(options);
    }
    /**
     * @override
     */
    createRenderer() {
      return new TileLayer_default(this, {
        cacheSize: this.getCacheSize()
      });
    }
  };
  var Tile_default4 = TileLayer;

  // node_modules/ol/control/FullScreen.js
  var events = ["fullscreenchange", "webkitfullscreenchange"];
  var FullScreenEventType = {
    /**
     * Triggered after the map entered fullscreen.
     * @event FullScreenEventType#enterfullscreen
     * @api
     */
    ENTERFULLSCREEN: "enterfullscreen",
    /**
     * Triggered after the map leave fullscreen.
     * @event FullScreenEventType#leavefullscreen
     * @api
     */
    LEAVEFULLSCREEN: "leavefullscreen"
  };
  var FullScreen = class extends Control_default {
    /**
     * @param {Options} [options] Options.
     */
    constructor(options) {
      options = options ? options : {};
      super({
        element: document.createElement("div"),
        target: options.target
      });
      this.on;
      this.once;
      this.un;
      this.keys_ = options.keys !== void 0 ? options.keys : false;
      this.source_ = options.source;
      this.isInFullscreen_ = false;
      this.boundHandleMapTargetChange_ = this.handleMapTargetChange_.bind(this);
      this.cssClassName_ = options.className !== void 0 ? options.className : "ol-full-screen";
      this.documentListeners_ = [];
      this.activeClassName_ = options.activeClassName !== void 0 ? options.activeClassName.split(" ") : [this.cssClassName_ + "-true"];
      this.inactiveClassName_ = options.inactiveClassName !== void 0 ? options.inactiveClassName.split(" ") : [this.cssClassName_ + "-false"];
      const label = options.label !== void 0 ? options.label : "\u2922";
      this.labelNode_ = typeof label === "string" ? document.createTextNode(label) : label;
      const labelActive = options.labelActive !== void 0 ? options.labelActive : "\xD7";
      this.labelActiveNode_ = typeof labelActive === "string" ? document.createTextNode(labelActive) : labelActive;
      const tipLabel = options.tipLabel ? options.tipLabel : "Toggle full-screen";
      this.button_ = document.createElement("button");
      this.button_.title = tipLabel;
      this.button_.setAttribute("type", "button");
      this.button_.appendChild(this.labelNode_);
      this.button_.addEventListener(
        EventType_default.CLICK,
        this.handleClick_.bind(this),
        false
      );
      this.setClassName_(this.button_, this.isInFullscreen_);
      this.element.className = `${this.cssClassName_} ${CLASS_UNSELECTABLE} ${CLASS_CONTROL}`;
      this.element.appendChild(this.button_);
    }
    /**
     * @param {MouseEvent} event The event to handle
     * @private
     */
    handleClick_(event) {
      event.preventDefault();
      this.handleFullScreen_();
    }
    /**
     * @private
     */
    handleFullScreen_() {
      const map = this.getMap();
      if (!map) {
        return;
      }
      const doc = map.getOwnerDocument();
      if (!isFullScreenSupported(doc)) {
        return;
      }
      if (isFullScreen(doc)) {
        exitFullScreen(doc);
      } else {
        let element;
        if (this.source_) {
          element = typeof this.source_ === "string" ? doc.getElementById(this.source_) : this.source_;
        } else {
          element = map.getTargetElement();
        }
        if (this.keys_) {
          requestFullScreenWithKeys(element);
        } else {
          requestFullScreen(element);
        }
      }
    }
    /**
     * @private
     */
    handleFullScreenChange_() {
      const map = this.getMap();
      if (!map) {
        return;
      }
      const wasInFullscreen = this.isInFullscreen_;
      this.isInFullscreen_ = isFullScreen(map.getOwnerDocument());
      if (wasInFullscreen !== this.isInFullscreen_) {
        this.setClassName_(this.button_, this.isInFullscreen_);
        if (this.isInFullscreen_) {
          replaceNode(this.labelActiveNode_, this.labelNode_);
          this.dispatchEvent(FullScreenEventType.ENTERFULLSCREEN);
        } else {
          replaceNode(this.labelNode_, this.labelActiveNode_);
          this.dispatchEvent(FullScreenEventType.LEAVEFULLSCREEN);
        }
        map.updateSize();
      }
    }
    /**
     * @param {HTMLElement} element Target element
     * @param {boolean} fullscreen True if fullscreen class name should be active
     * @private
     */
    setClassName_(element, fullscreen) {
      if (fullscreen) {
        element.classList.remove(...this.inactiveClassName_);
        element.classList.add(...this.activeClassName_);
      } else {
        element.classList.remove(...this.activeClassName_);
        element.classList.add(...this.inactiveClassName_);
      }
    }
    /**
     * Remove the control from its current map and attach it to the new map.
     * Pass `null` to just remove the control from the current map.
     * Subclasses may set up event handlers to get notified about changes to
     * the map here.
     * @param {import("../Map.js").default|null} map Map.
     * @api
     * @override
     */
    setMap(map) {
      const oldMap = this.getMap();
      if (oldMap) {
        oldMap.removeChangeListener(
          MapProperty_default.TARGET,
          this.boundHandleMapTargetChange_
        );
      }
      super.setMap(map);
      this.handleMapTargetChange_();
      if (map) {
        map.addChangeListener(
          MapProperty_default.TARGET,
          this.boundHandleMapTargetChange_
        );
      }
    }
    /**
     * @private
     */
    handleMapTargetChange_() {
      const listeners = this.documentListeners_;
      for (let i = 0, ii = listeners.length; i < ii; ++i) {
        unlistenByKey(listeners[i]);
      }
      listeners.length = 0;
      const map = this.getMap();
      if (map) {
        const doc = map.getOwnerDocument();
        if (isFullScreenSupported(doc)) {
          this.element.classList.remove(CLASS_UNSUPPORTED);
        } else {
          this.element.classList.add(CLASS_UNSUPPORTED);
        }
        for (let i = 0, ii = events.length; i < ii; ++i) {
          listeners.push(
            listen(doc, events[i], this.handleFullScreenChange_, this)
          );
        }
        this.handleFullScreenChange_();
      }
    }
  };
  function isFullScreenSupported(doc) {
    const body = doc.body;
    return !!(body["webkitRequestFullscreen"] || body.requestFullscreen && doc.fullscreenEnabled);
  }
  function isFullScreen(doc) {
    return !!(doc["webkitIsFullScreen"] || doc.fullscreenElement);
  }
  function requestFullScreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element["webkitRequestFullscreen"]) {
      element["webkitRequestFullscreen"]();
    }
  }
  function requestFullScreenWithKeys(element) {
    if (element["webkitRequestFullscreen"]) {
      element["webkitRequestFullscreen"]();
    } else {
      requestFullScreen(element);
    }
  }
  function exitFullScreen(doc) {
    if (doc.exitFullscreen) {
      doc.exitFullscreen();
    } else if (doc["webkitExitFullscreen"]) {
      doc["webkitExitFullscreen"]();
    }
  }
  var FullScreen_default = FullScreen;

  // node_modules/hdr-canvas/dist/hdr-canvas.js
  var HDRImage = class {
    static DEFAULT_COLORSPACE = "rec2100-hlg";
    static SDR_MULTIPLIER = 2 ** 16 - 1;
    data;
    height;
    width;
    constructor(width, height) {
      this.height = height;
      this.width = width;
    }
    static fromImageData(imageData) {
      throw new Error("Method not implemented!");
    }
    static fromImageDataArray(width, height, imageDataArray) {
      throw new Error("Method not implemented!");
    }
    static async loadSDRImageData(url) {
      return fetch(url).then((response) => response.blob()).then((blob) => {
        return createImageBitmap(blob);
      }).then((bitmap) => {
        const { width, height } = bitmap;
        const offscreen = new OffscreenCanvas(width, height);
        const ctx = offscreen.getContext("2d");
        ctx.drawImage(bitmap, 0, 0);
        return ctx.getImageData(0, 0, width, height);
      });
    }
    getPixel(w, h) {
      const pos = (h * this.width + w) * 4;
      return this.data.slice(pos, pos + 4);
    }
    setPixel(w, h, px) {
      const pos = (h * this.width + w) * 4;
      this.data[pos + 0] = px[0];
      this.data[pos + 1] = px[1];
      this.data[pos + 2] = px[2];
      this.data[pos + 3] = px[3];
    }
    clone() {
      const copy = Object.create(Object.getPrototypeOf(this));
      Object.assign(copy, this);
      return copy;
    }
  };
  function uncurryThis(target) {
    return (thisArg, ...args) => {
      return ReflectApply(target, thisArg, args);
    };
  }
  function uncurryThisGetter(target, key) {
    return uncurryThis(
      ReflectGetOwnPropertyDescriptor(
        target,
        key
      ).get
    );
  }
  var {
    apply: ReflectApply,
    getOwnPropertyDescriptor: ReflectGetOwnPropertyDescriptor,
    getPrototypeOf: ReflectGetPrototypeOf
  } = Reflect;
  var {
    EPSILON,
    isFinite: NumberIsFinite,
    isNaN: NumberIsNaN
  } = Number;
  var {
    iterator: SymbolIterator,
    toStringTag: SymbolToStringTag
  } = Symbol;
  var {
    abs: MathAbs
  } = Math;
  var NativeArrayBuffer = ArrayBuffer;
  var ArrayBufferPrototype = NativeArrayBuffer.prototype;
  uncurryThisGetter(ArrayBufferPrototype, "byteLength");
  var NativeSharedArrayBuffer = typeof SharedArrayBuffer !== "undefined" ? SharedArrayBuffer : null;
  NativeSharedArrayBuffer && uncurryThisGetter(NativeSharedArrayBuffer.prototype, "byteLength");
  var TypedArray = ReflectGetPrototypeOf(Uint8Array);
  TypedArray.from;
  var TypedArrayPrototype = TypedArray.prototype;
  TypedArrayPrototype[SymbolIterator];
  uncurryThis(TypedArrayPrototype.keys);
  uncurryThis(
    TypedArrayPrototype.values
  );
  uncurryThis(
    TypedArrayPrototype.entries
  );
  uncurryThis(TypedArrayPrototype.set);
  uncurryThis(
    TypedArrayPrototype.reverse
  );
  uncurryThis(TypedArrayPrototype.fill);
  uncurryThis(
    TypedArrayPrototype.copyWithin
  );
  uncurryThis(TypedArrayPrototype.sort);
  uncurryThis(TypedArrayPrototype.slice);
  uncurryThis(
    TypedArrayPrototype.subarray
  );
  uncurryThisGetter(
    TypedArrayPrototype,
    "buffer"
  );
  uncurryThisGetter(
    TypedArrayPrototype,
    "byteOffset"
  );
  uncurryThisGetter(
    TypedArrayPrototype,
    "length"
  );
  uncurryThisGetter(
    TypedArrayPrototype,
    SymbolToStringTag
  );
  var NativeUint8Array = Uint8Array;
  var NativeUint16Array = Uint16Array;
  var NativeUint32Array = Uint32Array;
  var ArrayIteratorPrototype = ReflectGetPrototypeOf([][SymbolIterator]());
  uncurryThis(ArrayIteratorPrototype.next);
  uncurryThis((function* () {
  })().next);
  ReflectGetPrototypeOf(ArrayIteratorPrototype);
  var INVERSE_OF_EPSILON = 1 / EPSILON;
  var FLOAT16_MIN_VALUE = 6103515625e-14;
  var FLOAT16_EPSILON = 9765625e-10;
  var FLOAT16_EPSILON_MULTIPLIED_BY_FLOAT16_MIN_VALUE = FLOAT16_EPSILON * FLOAT16_MIN_VALUE;
  var FLOAT16_EPSILON_DEVIDED_BY_EPSILON = FLOAT16_EPSILON * INVERSE_OF_EPSILON;
  var baseTable = new NativeUint16Array(512);
  var shiftTable = new NativeUint8Array(512);
  for (let i = 0; i < 256; ++i) {
    const e = i - 127;
    if (e < -24) {
      baseTable[i] = 0;
      baseTable[i | 256] = 32768;
      shiftTable[i] = 24;
      shiftTable[i | 256] = 24;
    } else if (e < -14) {
      baseTable[i] = 1024 >> -e - 14;
      baseTable[i | 256] = 1024 >> -e - 14 | 32768;
      shiftTable[i] = -e - 1;
      shiftTable[i | 256] = -e - 1;
    } else if (e <= 15) {
      baseTable[i] = e + 15 << 10;
      baseTable[i | 256] = e + 15 << 10 | 32768;
      shiftTable[i] = 13;
      shiftTable[i | 256] = 13;
    } else if (e < 128) {
      baseTable[i] = 31744;
      baseTable[i | 256] = 64512;
      shiftTable[i] = 24;
      shiftTable[i | 256] = 24;
    } else {
      baseTable[i] = 31744;
      baseTable[i | 256] = 64512;
      shiftTable[i] = 13;
      shiftTable[i | 256] = 13;
    }
  }
  var mantissaTable = new NativeUint32Array(2048);
  for (let i = 1; i < 1024; ++i) {
    let m = i << 13;
    let e = 0;
    while ((m & 8388608) === 0) {
      m <<= 1;
      e -= 8388608;
    }
    m &= -8388609;
    e += 947912704;
    mantissaTable[i] = m | e;
  }
  for (let i = 1024; i < 2048; ++i) {
    mantissaTable[i] = 939524096 + (i - 1024 << 13);
  }
  var exponentTable = new NativeUint32Array(64);
  for (let i = 1; i < 31; ++i) {
    exponentTable[i] = i << 23;
  }
  exponentTable[31] = 1199570944;
  exponentTable[32] = 2147483648;
  for (let i = 33; i < 63; ++i) {
    exponentTable[i] = 2147483648 + (i - 32 << 23);
  }
  exponentTable[63] = 3347054592;
  var offsetTable = new NativeUint16Array(64);
  for (let i = 1; i < 64; ++i) {
    if (i !== 32) {
      offsetTable[i] = 1024;
    }
  }
  function getHdrOptions() {
    const hdrOptions = {
      colorSpace: HDRImage.DEFAULT_COLORSPACE,
      colorType: "float16",
      toneMapping: { mode: "extended" }
    };
    if (Array.isArray(navigator.userAgent.match(/Version\/[\d.]+.*Safari/))) {
      hdrOptions["colorSpace"] = "display-p3";
    }
    return hdrOptions;
  }
  function defaultGetContextHDR() {
    HTMLCanvasElement.prototype._getContext = HTMLCanvasElement.prototype.getContext;
    HTMLCanvasElement.prototype.getContext = function(type, options) {
      if (options !== void 0) {
        options = Object.assign({}, options, getHdrOptions());
      } else {
        options = getHdrOptions();
      }
      return this._getContext(type, options);
    };
  }
  function checkHDR() {
    try {
      const dynamicRangeHighMQ = window.matchMedia("(dynamic-range: high)").matches;
      const colorGamutMQ = window.matchMedia("(color-gamut: rec2020)").matches || window.matchMedia("(color-gamut: p3)").matches;
      if (colorGamutMQ && dynamicRangeHighMQ) {
        return true;
      }
      return false;
    } catch (e) {
      console.error("Exception during check for HDR", e);
      return false;
    }
  }
  function checkHDRCanvas() {
    if (!checkHDR() || !checkFloat16Array()) {
      return false;
    }
    try {
      const canvas = document.createElement("canvas");
      if (!canvas.getContext) {
        return false;
      }
      const options = getHdrOptions();
      const ctx = canvas.getContext("2d", options);
      if (ctx === null) {
        return false;
      }
      return true;
    } catch (e) {
      console.error("Bad canvas ColorSpace test - make sure that the Chromium browser flag 'enable-experimental-web-platform-features' has been enabled", e);
      return false;
    }
    return false;
  }
  function checkFloat16Array() {
    try {
      new ImageData(new Float16Array(4), 1, 1, { pixelFormat: "rgba-float16" });
    } catch (e) {
      console.error("Browser doesn't support Float16Array", e);
      return false;
    }
    return true;
  }

  // <stdin>
  var AnimatedView = class extends View_default {
    /**
     * @param {Object} [opt_options] View options.
     */
    constructor(opt_options) {
      const options = opt_options || {};
      super(opt_options);
      this.pauseableAnimations_ = [];
      this.animationsPointer_ = -1;
      this.lastAnimation_ = {};
      this.initalCenter = this.getCenter();
    }
    // Emulate a ring data structure
    getPauseableAnimation_() {
      if (this.pauseableAnimations_.length - 1 > this.animationsPointer_) {
        this.animationsPointer_++;
        return this.pauseableAnimations_[this.animationsPointer_];
      } else {
        this.animationsPointer_ = 0;
        return this.pauseableAnimations_[this.animationsPointer_];
      }
    }
    // This is the callback, when one animation has finished
    nextAnimation_(completed) {
      if (completed === void 0 || completed) {
        var context = this;
        var nextAnimation = this.getPauseableAnimation_();
        this.animate(nextAnimation, function(state) {
          context.nextAnimation_(state);
        });
      }
    }
    pauseAnimation() {
      if (!this.getAnimating()) {
        return;
      }
      var animation = this.animations_[0][0];
      var now = Date.now();
      var elapsed = now - animation.start;
      let stopState = {
        center: animation.center,
        zoom: animation.zoom,
        rotation: animation.rotation,
        duration: animation.duration - elapsed
      };
      this.lastAnimation_ = stopState;
      this.cancelAnimations();
    }
    startAnimation_() {
      if (this.getAnimating()) {
        return;
      }
      if (Object.keys(this.lastAnimation_).length !== 0) {
        this.lastAnimation_ = {};
      }
      var context = this;
      this.animate(this.getPauseableAnimation_, function(state) {
        context.nextAnimation_(state);
      });
    }
    resumeAnimation() {
      if (this.getAnimating()) {
        return;
      }
      if (Object.keys(this.lastAnimation_).length === 0) {
        this.startAnimation_();
      } else {
        var context = this;
        this.animate(this.lastAnimation_, function(state) {
          context.nextAnimation_(state);
        });
      }
    }
    setPauseableAnimation(var_args) {
      var args = new Array(arguments.length);
      for (let i = 0; i < args.length; ++i) {
        var options = arguments[i];
        args[i] = options;
      }
      this.animationsPointer_ = -1;
      this.pauseableAnimations_ = args;
    }
    getPauseableAnimation() {
      return this.pauseableAnimations_;
    }
    setCenter(center) {
      this.initalCenter = center;
      this.setCenterInternal(fromUserCoordinate(center, this.getProjection()));
    }
    isNoopAnimation(animation) {
      return false;
    }
    //Even though the OL API is quite good there are some beginners mistakes, like missing symetry
    setResolutions(resolutions) {
      this.resolutions_ = resolutions;
    }
    setExtent(extent) {
      var options = {};
      options.extent = fromUserExtent(extent, this.projection_);
      this.applyOptions_(options);
    }
  };
  var RotateLeftControl = class extends Control_default {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
      const options = opt_options || {};
      const tipLabel = options.tipLabel ? options.tipLabel : "Rotate 90\xB0 left";
      const button = document.createElement("button");
      button.innerHTML = '<i class="icon-left"></i>';
      button.title = tipLabel;
      const element = document.createElement("div");
      element.className = "rotate-left ol-unselectable ol-control";
      element.appendChild(button);
      super({
        element,
        target: options.target
      });
      button.addEventListener("click", this.handleRotateLeft.bind(this), false);
    }
    handleRotateLeft() {
      var startRotation = this.getMap().getView().getRotation();
      this.getMap().getView().setRotation(startRotation + -90 * Math.PI / 180);
    }
  };
  var RotateRightControl = class extends Control_default {
    /**
     * @param {Object} [opt_options] Control options.
     */
    constructor(opt_options) {
      const options = opt_options || {};
      const tipLabel = options.tipLabel ? options.tipLabel : "Rotate 90\xB0 right";
      const button = document.createElement("button");
      button.innerHTML = '<i class="icon-right"></i>';
      button.title = tipLabel;
      const element = document.createElement("div");
      element.className = "rotate-right ol-unselectable ol-control";
      element.appendChild(button);
      super({
        element,
        target: options.target
      });
      button.addEventListener("click", this.handleRotateRight.bind(this), false);
    }
    handleRotateRight() {
      var startRotation = this.getMap().getView().getRotation();
      this.getMap().getView().setRotation(startRotation + 90 * Math.PI / 180);
    }
  };
  window.addMap = function(element, url, rotation, baseURL, hdr) {
    var initialRotation = 0;
    if (rotation !== void 0 && rotation != 0) {
      initialRotation = rotation * Math.PI / 180;
    }
    if (hdr === void 0) {
      hdr = false;
    }
    var lang = "en";
    if (document.documentElement.lang !== void 0) {
      const locale = new Intl.Locale(document.documentElement.lang);
      lang = locale.language;
    }
    var toolTips = {
      "de": { "zoomIn": "Vergr\xF6\xDFern", "zoomOut": "Verkleinern", "fullscreen": "Vollbildansicht", "rotate": "Rotation zur\xFCcksetzen", "rotateLeft": "90\xB0 nach links drehen", "rotateRight": "90\xB0 nach rechst drehen" },
      "en": { "zoomIn": "Zoom in", "zoomOut": "Zoom out", "fullscreen": "Toggle full-screen", "rotate": "Reset rotation", "rotateLeft": "Rotate 90\xB0 left", "rotateRight": "Rotate 90\xB0 right" }
    };
    console.log("Setting up " + lang);
    if (hdr && checkHDR() && checkHDRCanvas()) {
      defaultGetContextHDR();
      console.log("Enabled HDR Canvas");
    }
    var layer = new Tile_default4(), map = new Map_default2({
      controls: [
        new Zoom_default({ zoomInTipLabel: toolTips[lang]["zoomIn"], zoomOutTipLabel: toolTips[lang]["zoomOut"] }),
        new FullScreen_default({ tipLabel: toolTips[lang]["fullscreen"] }),
        new Rotate_default({ tipLabel: toolTips[lang]["rotate"] }),
        new RotateLeftControl({ tipLabel: toolTips[lang]["rotateLeft"] }),
        new RotateRightControl({ tipLabel: toolTips[lang]["rotateRight"] })
      ],
      layers: [layer],
      target: element
    });
    fetch(url).then(function(response) {
      response.json().then(function(imageInfo) {
        var options = new IIIFInfo_default(imageInfo).getTileSourceOptions();
        if (options === void 0 || options.version === void 0) {
          console.log("Data seems to be no valid IIIF image information.");
          return;
        }
        options.zDirection = -1;
        if (baseURL !== void 0 && baseURL != "") {
          options.url = baseURL;
        }
        var iiifTileSource = new IIIF_default(options);
        layer.setSource(iiifTileSource);
        map.setView(
          new View_default({
            resolutions: iiifTileSource.getTileGrid().getResolutions(),
            extent: iiifTileSource.getTileGrid().getExtent(),
            constrainOnlyCenter: true,
            rotation: initialRotation
          })
        );
        map.getView().fit(iiifTileSource.getTileGrid().getExtent());
      }).catch(function(body) {
        console.log("Could not read image info json. " + body);
      });
    }).catch(function() {
      console.log("Could not read data from URL.");
    });
    return map;
  };
  window.animatedMap = function(element, url, rotation, baseURL, initialZoom, animation, moElement, initialCenter) {
    var initialRotation = 0;
    if (rotation !== void 0 && rotation != 0) {
      initialRotation = rotation * Math.PI / 180;
    }
    var layer = new Tile_default4(), map = new Map_default2({
      controls: [],
      layers: [layer],
      target: element
    }), view = new AnimatedView({
      constrainOnlyCenter: true,
      rotation: initialRotation
    });
    fetch(url).then(function(response) {
      response.json().then(function(imageInfo) {
        var options = new IIIFInfo_default(imageInfo).getTileSourceOptions();
        if (options === void 0 || options.version === void 0) {
          console.log("Data seems to be no valid IIIF image information.");
          return;
        }
        options.zDirection = -1;
        if (baseURL !== void 0 && baseURL != "") {
          options.url = baseURL;
        }
        var iiifTileSource = new IIIF_default(options);
        layer.setSource(iiifTileSource);
        view.setExtent(iiifTileSource.getTileGrid().getExtent());
        view.setResolutions(iiifTileSource.getTileGrid().getResolutions());
        map.setView(view);
        map.getView().fit(iiifTileSource.getTileGrid().getExtent());
        if (initialZoom !== void 0 && initialZoom !== "") {
          map.getView().setZoom(initialZoom);
        }
        if (initialCenter !== void 0 && initialCenter !== "") {
          map.getView().setCenter(initialCenter);
        }
      }).catch(function(body) {
        console.log(`Could not read image info json from "${url}".` + body);
      });
    }).catch(function() {
      console.log("Could not read data from URL.");
    });
    if (animation !== void 0 && animation !== "" && moElement !== void 0) {
      if (!Array.isArray(animation)) {
        view.setPauseableAnimation(animation);
      } else {
        view.setPauseableAnimation(...animation);
      }
      map.once("rendercomplete", function() {
        moElement.addEventListener("mouseenter", function() {
          view.resumeAnimation();
        });
        moElement.addEventListener("mouseleave", function(event) {
          view.pauseAnimation();
        });
      });
    }
    return map;
  };
})();
