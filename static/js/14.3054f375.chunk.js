(this.webpackJsonp=this.webpackJsonp||[]).push([[14],{1198:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(43),c=n(64),i=n(80);t.a=function(e){var t=Object(c.a)(),n=Object(l.a)(),a=n.textDark,s=n.textLight,m=n.placeholder;return r.a.createElement(i.a,{style:{fontSize:o.d?28:20,marginBottom:o.g.normal,color:e.disabled?m:e.amount?a:s}},e.disabled?t("n/a"):e.amount?e.amount+" "+(e.suffix||""):t("fetching"))}},1201:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(64),l=n(316);t.a=function(e){var t=e.symbol,n=Object(o.a)();return r.a.createElement(l.a,{title:t?n("insufficient-",{symbol:t}):n("insufficient-balance"),disabled:!0})}},1206:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),c=n(43),i=n(405),s=n(316),m=n(80);t.a=function(e){var t=Object(c.a)().textLight,n=(0,Object(i.a)().border)({color:e.color}),a=e.color||t;return r.a.createElement(o.a,{style:[e.clear?{}:n,e.style]},r.a.createElement(m.a,{note:!0,style:{color:a}},e.text),e.buttonText&&e.onPressButton&&r.a.createElement(s.a,{title:e.buttonText,type:"clear",size:"small",fontWeight:"bold",onPress:e.onPressButton,titleStyle:{color:a},buttonStyle:{paddingHorizontal:0,paddingVertical:0},style:{alignSelf:"flex-end",marginTop:l.g.tiny}}))}},1207:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(80);t.a=function(e){return r.a.createElement(l.a,{medium:!0,caption:!0,disabled:e.disabled,style:{marginLeft:o.g.tiny}},e.token.symbol)}},1208:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(18),l=n.n(o),c=n(0),i=n.n(c),s=n(4),m=n(25),u=n(56),d=n(64),b=n(316);t.a=function(e){var t,n=Object(d.a)(),a=Object(c.useContext)(u.b).approveToken,o=Object(c.useState)(!1),f=l()(o,2),p=f[0],O=f[1],y=Object(c.useCallback)((function(){var t;return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!e.token){n.next=19;break}return e.onError({}),O(!0),n.prev=3,n.next=6,r.a.awrap(a(e.token.address,e.spender));case 6:if(!(t=n.sent)){n.next=11;break}return n.next=10,r.a.awrap(t.wait());case 10:e.onSuccess();case 11:n.next=16;break;case 13:n.prev=13,n.t0=n.catch(3),e.onError(n.t0);case 16:return n.prev=16,O(!1),n.finish(16);case 19:case"end":return n.stop()}}),null,null,[[3,13,16,19]],Promise)}),[e.token]);return e.hidden?i.a.createElement(s.a,null):i.a.createElement(b.a,{title:n("approve")+" "+((null==(t=e.token)?void 0:t.symbol)||""),onPress:y,loading:p,containerStyle:{marginBottom:m.g.tiny}})}},1213:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(21),c=n(80);t.a=function(e){return r.a.createElement(c.a,{caption:o.d,disabled:e.disabled,style:e.style},Object(l.d)(e.amount||e.token.balance,e.token.decimals,8))}},1216:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(25),l=n(80);t.a=function(e){return r.a.createElement(l.a,{caption:!0,numberOfLines:1,ellipsizeMode:"tail",style:{marginLeft:o.g.small,width:180},disabled:e.disabled},o.d?e.token.name:e.token.symbol)}},1218:function(e,t,n){"use strict";var a=n(137),r=n.n(a),o={};t.a=function(e,t,n){var a=e.toString();r()((function(){var n=setTimeout(e,t);return o[a]=n,n}),(function(e){clearTimeout(e)}),n)}},1221:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),l=n(80);t.a=function(e){return r.a.createElement(l.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(o.f)(e.token.priceUSD||0,4))}},1222:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(21),l=n(80);t.a=function(e){return r.a.createElement(l.a,{note:!0,fontWeight:"light",disabled:e.disabled,style:e.style},Object(o.f)(e.token.valueUSD||0,4))}},1226:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),c=n(1214),i=n(1210),s=n(121),m=n(1195),u=n(1197),d=n(1215),b=n(80),f=function(e){return r.a.createElement(u.a,{containerStyle:{marginBottom:m.a},style:{paddingLeft:l.g.small+l.g.tiny,paddingRight:l.g.small},selected:e.selected,disabled:e.selectable,onPress:function(){return null==e.setOption?void 0:e.setOption(e.selected?void 0:e.option)}},r.a.createElement(s.a,{style:{alignItems:"center"}},r.a.createElement(o.a,{style:{flex:1}},r.a.createElement(b.a,{fontWeight:"regular"},e.option.title),r.a.createElement(b.a,{note:!0,style:{marginTop:4}},e.option.description)),e.selected?r.a.createElement(c.a,null):r.a.createElement(d.a,null)))};t.a=function(e){return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:e.title,expanded:!e.option,onExpand:function(){return e.setOption()}},e.options.map((function(t){var n;return r.a.createElement(f,{key:t.key,option:t,setOption:e.setOption,selected:t.key===(null==(n=e.option)?void 0:n.key)})}))),e.option&&r.a.createElement(f,{option:e.option,setOption:e.setOption,selected:!0,selectable:!1}))}},1229:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(64),l=n(316);t.a=function(e){var t=e.state,n=Object(o.a)();return r.a.createElement(l.a,{title:t.fromSymbol+"-"+t.toSymbol+" "+n("not-supported"),disabled:!0})}},1235:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(18),l=n.n(o),c=n(0),i=n.n(c),s=n(236),m=n(4),u=n(25),d=n(56),b=n(1218),f=n(1214),p=n(1210),O=n(121),y=n(1195),k=n(1205),E=n(1197),j=n(1215),g=n(80),v=n(1213),T=n(1194),S=n(1216),x=n(1221),h=n(10),w=n.n(h),P=n(86),A=n(31),C=n(43),F=n(405),D=n(64),L=n(317),I=n(316),B=n(1217);function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach((function(t){w()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var U=function(){return i.a.createElement(P.a,{size:"small",style:{position:"absolute",right:16,bottom:16}})},R=function(e){var t=Object(D.a)(),n=Object(C.a)().accent,a=Object(c.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return i.a.createElement(E.a,{selected:!1,disabled:!0,onPress:a,containerStyle:{marginBottom:y.a}},i.a.createElement(O.a,{style:{alignItems:"center"}},i.a.createElement(T.a,{token:e.token}),i.a.createElement(S.a,{token:e.token}),i.a.createElement(m.a,{style:{flex:1}}),i.a.createElement(I.a,{type:"clear",size:"small",color:n,title:e.duplicate?t("already-added"):t("-add-")+" "+e.token.symbol,fontWeight:"bold",onPress:a,disabled:e.duplicate,buttonStyle:{paddingHorizontal:4,height:27}})))},W=function(e){var t=Object(D.a)(),n=Object(F.a)().border,a=Object(c.useContext)(d.b),o=a.provider,s=a.tokens,f=Object(c.useState)(),p=l()(f,2),y=p[0],k=p[1],E=Object(c.useState)(!1),j=l()(E,2),g=j[0],v=j[1],T=!!y&&-1!==s.findIndex((function(e){return e.address===y.address}));return e.tokens?(Object(c.useEffect)((function(){""===e.text&&(v(!1),k(void 0))}),[e.text]),Object(b.a)((function(){var t,n;return r.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.text.trim(),!o||!A.ethers.utils.isAddress(t)){a.next=11;break}return v(!0),a.prev=3,a.next=6,r.a.awrap(Object(L.i)(t,o));case 6:(n=a.sent).name&&n.symbol&&n.decimals&&k(n);case 8:return a.prev=8,v(!1),a.finish(8);case 11:case"end":return a.stop()}}),null,null,[[3,,8,11]],Promise)}),300,[o,e.text]),i.a.createElement(m.a,null,i.a.createElement(O.a,{style:{marginBottom:u.g.small}},i.a.createElement(B.a,{value:e.text,onChangeText:e.onChangeText,placeholder:t("token-name-symbol-or-address"),autoFocus:u.d,inputStyle:{marginHorizontal:u.g.tiny,fontSize:e.text?20:16},inputContainerStyle:{borderBottomWidth:0,marginRight:g?32:0},labelStyle:{height:0},containerStyle:z(z({},n()),{},{paddingHorizontal:u.g.tiny,paddingTop:12,paddingBottom:0})}),e.onAddToken&&g&&i.a.createElement(U,null)),e.onAddToken&&y&&i.a.createElement(R,{token:y,selected:!0,onSelectToken:e.onAddToken,duplicate:T}))):i.a.createElement(m.a,null)},Z=n(1207),V=n(1222),M=function(e){var t=Object(c.useContext)(d.b),n=t.loadingTokens,a=t.tokens,r=Object(c.useCallback)((function(t){var n=t.item;return i.a.createElement(J,{key:n.address,token:n,selected:!1,onSelectToken:e.onSelectToken,disabled:null==e.disabled?void 0:e.disabled(n)})}),[e.onSelectToken,e.disabled]),o=Object(c.useMemo)((function(){return a.filter((function(t){return!e.hidden||!e.hidden(t)})).sort(Y)}),[a,e.hidden]);return n?i.a.createElement(k.a,null):0===o.length?i.a.createElement(N,null):i.a.createElement(s.a,{keyExtractor:function(e){return e.address},data:o,renderItem:r})},N=function(){return i.a.createElement(m.a,{style:{margin:u.g.normal}},i.a.createElement(g.a,{disabled:!0,style:{textAlign:"center",width:"100%"}},"You don't have any matching tokens."))},J=function(e){var t=Object(c.useCallback)((function(){e.onSelectToken(e.token)}),[e.onSelectToken,e.token]);return i.a.createElement(E.a,{selected:e.selected,onPress:t,disabled:e.disabled||e.selectable,containerStyle:{marginBottom:y.a}},i.a.createElement(O.a,{style:{alignItems:"center"}},i.a.createElement(T.a,{token:e.token,disabled:e.disabled}),i.a.createElement(m.a,null,null!==e.token.priceUSD&&i.a.createElement(x.a,{token:e.token,disabled:e.disabled,style:{marginLeft:u.g.small}}),i.a.createElement(S.a,{token:e.token,disabled:e.disabled})),i.a.createElement(m.a,{style:{flex:1,alignItems:"flex-end"}},null!==e.token.valueUSD&&i.a.createElement(V.a,{token:e.token,disabled:e.disabled}),i.a.createElement(O.a,null,i.a.createElement(v.a,{token:e.token,disabled:e.disabled,style:{flex:1,textAlign:"right"}}),u.d&&i.a.createElement(Z.a,{token:e.token,disabled:e.disabled}))),e.selected?i.a.createElement(f.a,null):i.a.createElement(j.a,null)))},Y=function(e,t){if(t.balance.isZero()&&e.balance.isZero())return((null==t?void 0:t.priceUSD)||0)-((null==e?void 0:e.priceUSD)||0);var n=(null==t?void 0:t.valueUSD)||0,a=(null==e?void 0:e.valueUSD)||1;return n===a?(t.balance.isZero()?0:1e10)-(e.balance.isZero()?0:1e10)+e.symbol.localeCompare(t.symbol):n-a};t.a=function(e){var t=Object(c.useContext)(d.b),n=t.tokens,a=t.addCustomToken,o=Object(c.useState)(""),s=l()(o,2),u=s[0],f=s[1],O=Object(c.useState)(""),y=l()(O,2),k=y[0],E=y[1],j=Object(c.useMemo)((function(){return n.find((function(t){return t.symbol===e.symbol}))}),[n,e.symbol]);return Object(c.useEffect)((function(){return f("")}),[e.symbol]),Object(b.a)((function(){return E(u.trim().toLowerCase())}),300,[u]),i.a.createElement(m.a,{style:e.style},i.a.createElement(p.a,{title:e.title,expanded:!e.symbol,onExpand:function(){return e.onChangeSymbol("")}},i.a.createElement(W,{text:u,onChangeText:f,tokens:n,onAddToken:function(t){return r.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.a.awrap(a(t));case 2:f(""),E(""),e.onChangeSymbol(t.symbol);case 5:case"end":return n.stop()}}),null,null,null,Promise)}}),i.a.createElement(M,{disabled:e.disabled,hidden:function(t){return k.length>0?!t.symbol.toLowerCase().includes(k)&&!t.name.toLowerCase().includes(k):(null==e.hidden?void 0:e.hidden(t))||!1},onSelectToken:function(t){return e.onChangeSymbol(t.symbol)}})),j&&i.a.createElement(J,{token:j,selected:!0,onSelectToken:function(){return e.onChangeSymbol("")},selectable:!0}))}},1375:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(4),l=n(25),c=n(404),i=n(64),s=n(1206);t.a=function(e){var t=Object(i.a)(),n=Object(c.a)(e.contractURL,"","_blank");return r.a.createElement(o.a,{style:{marginVertical:l.g.tiny}},r.a.createElement(s.a,{text:t("experimental-notice"),color:"orange",buttonText:"View Contract",onPressButton:n}))}},1376:function(e,t,n){"use strict";var a=n(10),r=n.n(a),o=n(2),l=n.n(o),c=n(18),i=n.n(c),s=n(0),m=n(418),u=n(31),d=n(137),b=n.n(d),f=n(156),p=n(56),O=n(21),y=n(1218),k=n(1225),E=n(412),j=n(415),g=n(414),v=n(1228);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){r()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(){var e=Object(v.a)(),t=Object(s.useContext)(p.b),n=t.chainId,a=t.provider,r=t.signer,o=t.kovanSigner,c=t.updateTokens,d=Object(E.a)().getTrade,T=Object(g.b)(),x=T.swap,h=T.calculateSwapFee,w=Object(j.b)(),P=w.calculateLimitOrderFee,A=w.calculateLimitOrderReturn,C=Object(j.b)().createOrder,F=Object(s.useState)(!0),D=i()(F,2),L=D[0],I=D[1],B=Object(s.useState)(),H=i()(B,2),z=H[0],U=H[1],R=Object(s.useState)(),W=i()(R,2),Z=W[0],V=W[1],M=Object(s.useState)(),N=i()(M,2),J=N[0],Y=N[1],_=Object(s.useState)(!1),q=i()(_,2),G=q[0],K=q[1],Q=Object(s.useState)(""),X=i()(Q,2),$=X[0],ee=X[1],te=Object(s.useState)(""),ne=i()(te,2),ae=ne[0],re=ne[1],oe=Object(s.useState)(""),le=i()(oe,2),ce=le[0],ie=le[1],se=Object(s.useState)(""),me=i()(se,2),ue=me[0],de=me[1],be=Object(s.useState)(""),fe=i()(be,2),pe=fe[0],Oe=fe[1],ye=Object(s.useState)(!1),ke=i()(ye,2),Ee=ke[0],je=ke[1],ge=Object(s.useState)(!1),ve=i()(ge,2),Te=ve[0],Se=ve[1];Object(s.useEffect)((function(){z||e.setFromSymbol(""),re("")}),[z]),b()((function(){var t,r,o;return l.a.async((function(c){for(;;)switch(c.prev=c.next){case 0:if(V(void 0),!a||!e.fromToken){c.next=18;break}if(!Object(O.k)(e.fromToken)){c.next=6;break}V(u.ethers.constants.WeiPerEther),c.next=18;break;case 6:return c.prev=6,t=new m.c(n,e.fromToken.address,e.fromToken.decimals),r=m.d[n],c.next=11,l.a.awrap(m.b.fetchPairData(t,r,a));case 11:o=c.sent,V(Object(O.l)(o.priceOf(r).toFixed(),t.decimals)),c.next=18;break;case 15:c.prev=15,c.t0=c.catch(6),V(null);case 18:case"end":return c.stop()}}),null,null,[[6,15]],Promise)}),[n,a,e.fromToken]),Object(y.a)((function(){Object(O.j)(e.fromAmount)&&(re(""),Y(void 0))}),300,[e.fromAmount]),Object(k.a)((function(t){var n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(t||I(!0),!(e.fromToken&&e.toToken&&e.fromAmount&&a)){r.next=19;break}if((n=Object(O.l)(e.fromAmount,e.fromToken.decimals)).isZero()){r.next=19;break}return K(!1),r.prev=5,r.t0=Y,r.next=9,l.a.awrap(d(e.fromToken,e.toToken,n,a));case 9:r.t1=r.sent,(0,r.t0)(r.t1),r.next=16;break;case 13:r.prev=13,r.t2=r.catch(5),K(!0);case 16:return r.prev=16,I(!1),r.finish(16);case 19:case"end":return r.stop()}}),null,null,[[5,13,16,19]],Promise)}),(function(){return"getTrade("+e.fromSymbol+","+e.toSymbol+","+e.fromAmount+")"}),[e.fromSymbol,e.toSymbol,e.fromAmount]),b()((function(){if(J&&!Object(O.j)(e.fromAmount)){var t=Object(O.l)(e.fromAmount,e.fromToken.decimals);ee(Object(O.d)(h(t),e.fromToken.decimals,8)),"limit"===z&&(ie(Object(O.d)(P(t),e.fromToken.decimals,8)),de(Object(O.d)(h(t.sub(P(t))),e.fromToken.decimals,8)))}}),[z,J,e.fromAmount]),b()((function(){e.fromToken&&e.toToken&&!Object(O.j)(e.fromAmount)&&!Object(O.j)(ae)&&Oe(Object(O.d)(A(e.fromToken,e.toToken,Object(O.l)(e.fromAmount,e.fromToken.decimals),ae),e.toToken.decimals))}),[e.fromToken,e.toToken,e.fromAmount,ae]);var xe=Object(s.useCallback)((function(){var t;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!(e.fromToken&&e.toToken&&e.fromAmount&&r&&J)){n.next=16;break}return je(!0),n.prev=2,n.next=5,l.a.awrap(x(J,r));case 5:if(!(t=n.sent)){n.next=13;break}return n.next=9,l.a.awrap(t.tx.wait());case 9:return n.next=11,l.a.awrap(c());case 11:Y(void 0),U(void 0);case 13:return n.prev=13,je(!1),n.finish(13);case 16:case"end":return n.stop()}}),null,null,[[2,,13,16]],Promise)}),[e.fromToken,e.toToken,e.fromAmount,r,J]),he=Object(s.useCallback)((function(){var t,n;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(!(e.fromToken&&e.toToken&&e.fromAmount&&!Object(O.j)(ae)&&r&&o)){a.next=14;break}return Se(!0),a.prev=2,t=Object(O.l)(e.fromAmount,e.fromToken.decimals),a.next=6,l.a.awrap(C(e.fromToken,e.toToken,t,f.a.parse(ae).apply(t).mul(Object(O.n)(e.toToken.decimals)).div(Object(O.n)(e.fromToken.decimals)),r,o));case 6:return n=a.sent,a.next=9,l.a.awrap(n.wait());case 9:Y(void 0),U(void 0);case 11:return a.prev=11,Se(!1),a.finish(11);case 14:case"end":return a.stop()}}),null,null,[[2,,11,14]],Promise)}),[e.fromToken,e.toToken,e.fromAmount,r,o,ae]);return S(S({},e),{},{loading:L||e.loading,orderType:z,setOrderType:U,priceInETH:Z,trade:J,unsupported:G,swapFee:$,limitOrderPrice:ae,setLimitOrderPrice:re,limitOrderFee:ce,limitOrderSwapFee:ue,limitOrderReturn:pe,onSwap:xe,swapping:Ee,limitOrderUnsupported:"limit"===z&&(Object(O.h)(e.fromToken)||Object(O.h)(e.toToken)),onCreateOrder:he,creatingOrder:Te})}},1389:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n.n(a),o=n(18),l=n.n(o),c=n(10),i=n.n(c),s=n(0),m=n.n(s),u=n(11),d=n(4),b=n(31),f=n(137),p=n.n(f),O=n(1198),y=n(1208),k=n(409),E=n(1196),j=n(316),g=n(406),v=n(407),T=n(1199),S=n(1375),x=n(1209),h=n(1192),w=n(1200),P=n(1201),A=n(1211),C=n(1206),F=n(1226),D=n(80),L=n(408),I=n(1212),B=n(1235),H=n(1229),z=n(1193),U=n(411),R=n(54),W=n(25),Z=n(156),V=n(56),M=n(43),N=n(1218),J=n(404),Y=n(1376),_=n(64),q=n(21),G=n(410);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){i()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(){var e=Object(Y.a)();return m.a.createElement(d.a,{style:{marginTop:W.g.large}},m.a.createElement($,{state:e}),m.a.createElement(E.a,null),m.a.createElement(ee,{state:e}),m.a.createElement(E.a,null),m.a.createElement(te,{state:e}),m.a.createElement(E.a,null),m.a.createElement(ne,{state:e}),"limit"===e.orderType&&m.a.createElement(d.a,{style:{marginTop:W.g.small}},m.a.createElement(ae,{state:e}),m.a.createElement(E.a,null),m.a.createElement(re,{state:e})),!e.loading&&!e.trade&&m.a.createElement(le,{state:e}),m.a.createElement(ce,{state:e}))},$=function(e){var t=e.state,n=Object(_.a)(),a=[{key:"market",title:n("market-order"),description:n("market-order-desc")},{key:"limit",title:n("limit-order"),description:n("limit-order-desc")}];return m.a.createElement(d.a,null,m.a.createElement(F.a,{title:n("order-type"),options:a,option:a.find((function(e){return e.key===t.orderType})),setOption:function(e){return t.setOrderType(null==e?void 0:e.key)}}),"limit"===t.orderType&&m.a.createElement(S.a,{contractURL:"https://github.com/sushiswap/sushiswap-settlement/blob/master/contracts/Settlement.sol"}))},ee=function(e){var t=e.state,n=Object(_.a)(),a=Object(s.useContext)(V.b),r=a.tokens,o=a.customTokens;if(!t.orderType)return m.a.createElement(h.a,{text:n("token-to-sell"),disabled:!0});var l=r?r.find((function(e){return Object(q.h)(e)})):null;return m.a.createElement(d.a,null,m.a.createElement(B.a,{title:n("token-to-sell"),symbol:t.fromSymbol,onChangeSymbol:t.setFromSymbol,hidden:function(e){return!o.find((function(t){return t.address===e.address}))&&e.balance.isZero()||"limit"===t.orderType&&Object(q.h)(e)}}),"limit"===t.orderType&&!t.fromSymbol&&l&&!l.balance.isZero()&&m.a.createElement(oe,null))},te=function(e){var t=e.state,n=Object(_.a)();if(!t.orderType||!t.fromSymbol)return m.a.createElement(h.a,{text:n("token-to-buy"),disabled:!0});var a="limit"===t.orderType;return m.a.createElement(d.a,null,m.a.createElement(B.a,{title:n("token-to-buy"),symbol:t.toSymbol,onChangeSymbol:function(e){t.setToSymbol(a&&"ETH"===e?"WETH":e)},hidden:function(e){return e.symbol===t.fromSymbol||a&&Object(q.h)(e)}}),"limit"===t.orderType&&!t.toSymbol&&m.a.createElement(oe,null))},ne=function(e){var t=e.state,n=Object(_.a)();return t.fromSymbol&&t.toSymbol?m.a.createElement(d.a,null,m.a.createElement(h.a,{text:t.fromSymbol+" "+n("amount")}),m.a.createElement(I.a,{token:t.fromToken,amount:t.fromAmount,onAmountChanged:t.setFromAmount,autoFocus:W.d})):m.a.createElement(h.a,{text:n("amount"),disabled:!0})},ae=function(e){var t=e.state,n=Object(_.a)();return void 0===t.priceInETH||Object(q.j)(t.fromAmount)||!t.fromToken||t.priceInETH&&Object(q.l)(t.fromAmount,t.fromToken.decimals).lte(t.priceInETH.mul(10))?m.a.createElement(d.a,null):m.a.createElement(d.a,null,m.a.createElement(C.a,{text:null===t.priceInETH?n("token-not-supported-in-beta"):n("maximum-allowed-amount-in-beta",{amount:Object(q.d)(t.priceInETH.mul(10),t.fromToken.decimals),symbol:t.fromSymbol}),color:"red"}))},re=function(e){var t=e.state,n=Object(_.a)();if(!t.fromSymbol||!t.toSymbol)return m.a.createElement(h.a,{text:n("minimum-price"),disabled:!0});var a=t.toToken&&t.trade?Object(q.l)(t.trade.executionPrice.invert().toFixed(t.toToken.decimals),t.toToken.decimals):b.ethers.constants.Zero;return m.a.createElement(I.a,{title:n("minimum-price")+" ("+t.fromSymbol+"/"+t.toSymbol+")",token:Q(Q({},t.toToken),{},{balance:a}),amount:t.limitOrderPrice,onAmountChanged:t.setLimitOrderPrice,maxButtonText:n("-market-")})},oe=function(){var e=Object(M.a)().placeholder,t=Object(_.a)();return m.a.createElement(C.a,{text:t("eth-not-supported-for-limit-orders"),color:e,clear:!0,style:{marginVertical:W.g.small,marginHorizontal:W.g.tiny}})},le=function(e){var t=e.state,n=Object(_.a)();return m.a.createElement(C.a,{text:n("pair-not-created",{fromSymbol:t.fromSymbol,toSymbol:t.toSymbol}),color:"red",style:{marginTop:W.g.normal}})},ce=function(e){var t=e.state;if(Object(q.i)(t.fromToken,t.toToken))return m.a.createElement(ie,{state:t});var n=""===t.fromSymbol||""===t.toSymbol||Object(q.j)(t.fromAmount)||"limit"===t.orderType&&Object(q.h)(t.fromToken)||!t.loading&&!t.trade;return m.a.createElement(w.a,null,"limit"===t.orderType?m.a.createElement(fe,{state:t}):m.a.createElement(se,{state:t,disabled:n}))},ie=function(e){var t=e.state,n=Object(q.j)(t.fromAmount);return m.a.createElement(w.a,null,m.a.createElement(D.a,{style:{fontSize:28,marginBottom:W.g.normal},disabled:n},n?"N/A":t.fromAmount+" "+t.toSymbol),m.a.createElement(me,{state:t}))},se=function(e){var t,n,a,r,o,l,c=e.state,i=e.disabled,s=Object(_.a)(),u=null==(t=c.trade)||null==(n=t.outputAmount)?void 0:n.toFixed(),b=null==(a=c.trade)||null==(r=a.executionPrice)?void 0:r.toFixed(),f=null==(o=c.trade)||null==(l=o.priceImpact)?void 0:l.toFixed(2);return m.a.createElement(d.a,null,m.a.createElement(O.a,{amount:u,suffix:c.toSymbol,disabled:i}),m.a.createElement(A.a,{label:s("price"),text:b,suffix:c.toSymbol+"  = 1 "+c.fromSymbol,disabled:i}),m.a.createElement(A.a,{label:s("price-impact"),text:f,suffix:"%",disabled:i}),m.a.createElement(A.a,{label:s("fee-amount"),text:c.swapFee,suffix:c.fromSymbol,disabled:i}),m.a.createElement(me,{state:c}))},me=function(e){var t=e.state,n=Object(s.useState)({}),a=l()(n,2),r=a[0],o=a[1];p()((function(){return o({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]);var c=!Object(q.h)(t.fromToken)&&!t.fromTokenAllowed;return m.a.createElement(d.a,{style:{marginTop:W.g.normal}},t.fromToken&&t.toToken&&!Object(q.j)(t.fromAmount)&&(t.loading||t.trade)?Object(q.l)(t.fromAmount,t.fromToken.decimals).gt(t.fromToken.balance)?m.a.createElement(P.a,{symbol:t.fromSymbol}):Object(q.k)(t.fromToken)&&Object(q.h)(t.toToken)?m.a.createElement(be,{state:t,onError:o}):Object(q.h)(t.fromToken)&&Object(q.k)(t.toToken)?m.a.createElement(de,{state:t,onError:o}):t.unsupported?m.a.createElement(H.a,{state:t}):t.loading||!t.trade?m.a.createElement(x.a,null):m.a.createElement(m.a.Fragment,null,m.a.createElement(y.a,{token:t.fromToken,spender:R.g,onSuccess:function(){return t.setFromTokenAllowed(!0)},onError:o,hidden:!c}),m.a.createElement(ue,{state:t,onError:o,disabled:c})):m.a.createElement(ue,{state:t,onError:o,disabled:!0}),r.message&&4001!==r.code&&m.a.createElement(T.a,{error:r}))},ue=function(e){var t=e.state,n=e.onError,a=e.disabled,r=Object(_.a)(),o=Object(s.useCallback)((function(){n({}),t.onSwap().catch(n)}),[t.onSwap,n]);return m.a.createElement(j.a,{title:r("swap")+(t.fromSymbol&&t.toSymbol?" "+t.fromSymbol+"-"+t.toSymbol:""),disabled:a,loading:t.swapping,onPress:o})},de=function(e){var t=e.state,n=e.onError,a=Object(_.a)(),o=Object(s.useCallback)((function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:n({}),t.onWrap().catch(n);case 2:case"end":return e.stop()}}),null,null,null,Promise)}),[]);return m.a.createElement(j.a,{title:a("wrap"),loading:t.wrapping,onPress:o})},be=function(e){var t=e.state,n=e.onError,a=Object(_.a)(),o=Object(s.useCallback)((function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:n({}),t.onUnwrap().catch(n);case 2:case"end":return e.stop()}}),null,null,null,Promise)}),[]);return m.a.createElement(j.a,{title:a("unwrap"),loading:t.unwrapping,onPress:o})},fe=function(e){var t,n,a,r=e.state,o=Object(_.a)(),l=!(null!=(t=r.trade)&&t.executionPrice);return m.a.createElement(d.a,null,m.a.createElement(D.a,{disabled:Object(q.j)(r.limitOrderReturn),style:{fontSize:28,marginBottom:W.g.normal}},Object(q.j)(r.limitOrderReturn)?"N/A":r.limitOrderReturn+" "+r.toSymbol),m.a.createElement(A.a,{label:o("market-price"),text:(null==(n=r.trade)||null==(a=n.executionPrice)?void 0:a.invert().toFixed(8))||void 0,suffix:r.fromSymbol+" / "+r.toSymbol,disabled:l}),m.a.createElement(A.a,{label:o("relayer-fee-amount"),text:r.limitOrderFee,suffix:r.fromSymbol,disabled:l}),m.a.createElement(A.a,{label:o("swap-fee-amount"),text:r.limitOrderSwapFee,suffix:r.fromSymbol,disabled:l}),m.a.createElement(A.a,{label:o("expiration"),text:o("24-hours-from-now"),disabled:l}),m.a.createElement(pe,{state:r}))},pe=function(e){var t=e.state,n=Object(s.useContext)(V.b).getTokenAllowance,a=Object(s.useState)({}),o=l()(a,2),c=o[0],i=o[1],u=Object(s.useState)(),f=l()(u,2),O=f[0],k=f[1];p()((function(){return i({})}),[t.fromSymbol,t.toSymbol,t.fromAmount]),Object(N.a)((function(){var e,a;return r.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:if(!t.fromToken||Object(q.j)(t.fromAmount)){o.next=6;break}return e=Object(q.l)(t.fromAmount,t.fromToken.decimals),o.next=4,r.a.awrap(n(t.fromToken.address,R.h));case 4:a=o.sent,k(b.ethers.BigNumber.from(a).gte(e));case 6:case"end":return o.stop()}}),null,null,null,Promise)}),500,[t.fromToken,t.fromAmount]);var E="market"===t.orderType||""===t.toSymbol||!t.fromToken||!t.toToken||Object(q.j)(t.fromAmount)||!t.priceInETH||Object(q.l)(t.fromAmount,t.fromToken.decimals).gt(t.priceInETH.mul(10))||!t.trade||Object(q.j)(t.limitOrderPrice);return m.a.createElement(d.a,{style:{marginTop:W.g.normal}},E?m.a.createElement(ye,{state:t,onError:i,disabled:!0}):Object(q.l)(t.fromAmount,t.fromToken.decimals).gt(t.fromToken.balance)?m.a.createElement(P.a,{symbol:t.fromSymbol}):Z.a.parse(t.limitOrderPrice).gt(Z.a.parse(t.trade.executionPrice.invert().toFixed(t.toToken.decimals)))?t.unsupported?m.a.createElement(H.a,{state:t}):t.loading||!t.trade?m.a.createElement(x.a,null):m.a.createElement(m.a.Fragment,null,m.a.createElement(y.a,{token:t.fromToken,spender:R.h,onSuccess:function(){return k(!0)},onError:i,hidden:O}),m.a.createElement(ye,{state:t,onError:i,disabled:!O})):m.a.createElement(Oe,null),c.message&&4001!==c.code&&m.a.createElement(T.a,{error:c}))},Oe=function(){var e=Object(_.a)();return m.a.createElement(j.a,{title:e("set-price-greater-than-market"),disabled:!0})},ye=function(e){var t=e.state,n=e.onError,a=e.disabled,o=Object(_.a)(),l=Object(J.a)("/swap/my-orders","LimitOrders"),c=Object(s.useCallback)((function(){return r.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return n({}),e.prev=1,e.next=4,r.a.awrap(t.onCreateOrder());case 4:l(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n(e.t0);case 10:case"end":return e.stop()}}),null,null,[[1,7]],Promise)}),[t.onCreateOrder,l,n]);return m.a.createElement(j.a,{title:o("place-limit-order"),disabled:a,loading:t.creatingOrder,onPress:c})};t.default=function(){var e=Object(_.a)();return m.a.createElement(G.a,null,m.a.createElement(g.a,null,m.a.createElement(k.a,null),m.a.createElement(v.a,null,m.a.createElement(L.a,{text:e("new-order")}),m.a.createElement(D.a,{light:!0},e("new-order-desc")),m.a.createElement(X,null)),"web"===u.a.OS&&m.a.createElement(z.a,null)),m.a.createElement(U.e,null))}}}]);
//# sourceMappingURL=14.3054f375.chunk.js.map