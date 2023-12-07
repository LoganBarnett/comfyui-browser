import{s as _e,n as se,r as De,f as ye,o as Fe,b as ze,h as We}from"../chunks/scheduler.89bf212d.js";import{S as pe,i as be,g as I,m as x,s as B,h as L,j as P,n as ee,f as S,c as V,k as $,a as H,x as D,y as X,l as Se,e as me,o as he,r as ae,u as oe,v as ie,d as J,p as ke,b as $e,t as Z,z as Ye,w as ce,A as de,B as Je}from"../chunks/index.2f508abb.js";function Te(o){return(o==null?void 0:o.length)!==void 0?o:Array.from(o)}function qe(o){let e,t,r,l,n,s,c,a,i,m;return{c(){e=I("div"),t=I("button"),r=x("Outputs"),n=B(),s=I("button"),c=x("Collections"),this.h()},l(u){e=L(u,"DIV",{role:!0,class:!0});var M=P(e);t=L(M,"BUTTON",{role:!0,class:!0});var b=P(t);r=ee(b,"Outputs"),b.forEach(S),n=V(M),s=L(M,"BUTTON",{role:!0,class:!0});var w=P(s);c=ee(w,"Collections"),w.forEach(S),M.forEach(S),this.h()},h(){$(t,"role","tab"),$(t,"class",l="tab "+o[0]("outputs")),$(s,"role","tab"),$(s,"class",a="tab "+o[0]("collections")),$(e,"role","tablist"),$(e,"class","tabs tabs-boxed")},m(u,M){H(u,e,M),D(e,t),D(t,r),D(e,n),D(e,s),D(s,c),i||(m=[X(t,"click",o[3]),X(s,"click",o[4])],i=!0)},p(u,[M]){M&1&&l!==(l="tab "+u[0]("outputs"))&&$(t,"class",l),M&1&&a!==(a="tab "+u[0]("collections"))&&$(s,"class",a)},i:se,o:se,d(u){u&&S(e),i=!1,De(m)}}}function Ze(o,e,t){let r,{activeTab:l="outputs"}=e;function n(a){t(2,l=a)}const s=()=>n("outputs"),c=()=>n("collections");return o.$$set=a=>{"activeTab"in a&&t(2,l=a.activeTab)},o.$$.update=()=>{o.$$.dirty&4&&t(0,r=function(a){return a===l?"tab-active":""})},[r,n,l,s,c]}class Re extends pe{constructor(e){super(),be(this,e,Ze,qe,_e,{activeTab:2})}}var Ge=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ke(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ae={exports:{}};(function(o,e){(function(t,r){o.exports=r()})(Ge,function(){var t=1e3,r=6e4,l=36e5,n="millisecond",s="second",c="minute",a="hour",i="day",m="week",u="month",M="quarter",b="year",w="date",U="Invalid Date",O=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,z=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,F={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(y){var d=["th","st","nd","rd"],f=y%100;return"["+y+(d[(f-20)%10]||d[f]||d[0])+"]"}},g=function(y,d,f){var v=String(y);return!v||v.length>=d?y:""+Array(d+1-v.length).join(f)+y},k={s:g,z:function(y){var d=-y.utcOffset(),f=Math.abs(d),v=Math.floor(f/60),h=f%60;return(d<=0?"+":"-")+g(v,2,"0")+":"+g(h,2,"0")},m:function y(d,f){if(d.date()<f.date())return-y(f,d);var v=12*(f.year()-d.year())+(f.month()-d.month()),h=d.clone().add(v,u),_=f-h<0,p=d.clone().add(v+(_?-1:1),u);return+(-(v+(f-h)/(_?h-p:p-h))||0)},a:function(y){return y<0?Math.ceil(y)||0:Math.floor(y)},p:function(y){return{M:u,y:b,w:m,d:i,D:w,h:a,m:c,s,ms:n,Q:M}[y]||String(y||"").toLowerCase().replace(/s$/,"")},u:function(y){return y===void 0}},T="en",N={};N[T]=F;var te="$isDayjsObject",Q=function(y){return y instanceof G||!(!y||!y[te])},W=function y(d,f,v){var h;if(!d)return T;if(typeof d=="string"){var _=d.toLowerCase();N[_]&&(h=_),f&&(N[_]=f,h=_);var p=d.split("-");if(!h&&p.length>1)return y(p[0])}else{var C=d.name;N[C]=d,h=C}return!v&&h&&(T=h),h||!v&&T},Y=function(y,d){if(Q(y))return y.clone();var f=typeof d=="object"?d:{};return f.date=y,f.args=arguments,new G(f)},E=k;E.l=W,E.i=Q,E.w=function(y,d){return Y(y,{locale:d.$L,utc:d.$u,x:d.$x,$offset:d.$offset})};var G=function(){function y(f){this.$L=W(f.locale,null,!0),this.parse(f),this.$x=this.$x||f.x||{},this[te]=!0}var d=y.prototype;return d.parse=function(f){this.$d=function(v){var h=v.date,_=v.utc;if(h===null)return new Date(NaN);if(E.u(h))return new Date;if(h instanceof Date)return new Date(h);if(typeof h=="string"&&!/Z$/i.test(h)){var p=h.match(O);if(p){var C=p[2]-1||0,j=(p[7]||"0").substring(0,3);return _?new Date(Date.UTC(p[1],C,p[3]||1,p[4]||0,p[5]||0,p[6]||0,j)):new Date(p[1],C,p[3]||1,p[4]||0,p[5]||0,p[6]||0,j)}}return new Date(h)}(f),this.init()},d.init=function(){var f=this.$d;this.$y=f.getFullYear(),this.$M=f.getMonth(),this.$D=f.getDate(),this.$W=f.getDay(),this.$H=f.getHours(),this.$m=f.getMinutes(),this.$s=f.getSeconds(),this.$ms=f.getMilliseconds()},d.$utils=function(){return E},d.isValid=function(){return this.$d.toString()!==U},d.isSame=function(f,v){var h=Y(f);return this.startOf(v)<=h&&h<=this.endOf(v)},d.isAfter=function(f,v){return Y(f)<this.startOf(v)},d.isBefore=function(f,v){return this.endOf(v)<Y(f)},d.$g=function(f,v,h){return E.u(f)?this[v]:this.set(h,f)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(f,v){var h=this,_=!!E.u(v)||v,p=E.p(f),C=function(le,R){var ne=E.w(h.$u?Date.UTC(h.$y,R,le):new Date(h.$y,R,le),h);return _?ne:ne.endOf(i)},j=function(le,R){return E.w(h.toDate()[le].apply(h.toDate("s"),(_?[0,0,0,0]:[23,59,59,999]).slice(R)),h)},A=this.$W,q=this.$M,K=this.$D,fe="set"+(this.$u?"UTC":"");switch(p){case b:return _?C(1,0):C(31,11);case u:return _?C(1,q):C(0,q+1);case m:var re=this.$locale().weekStart||0,ve=(A<re?A+7:A)-re;return C(_?K-ve:K+(6-ve),q);case i:case w:return j(fe+"Hours",0);case a:return j(fe+"Minutes",1);case c:return j(fe+"Seconds",2);case s:return j(fe+"Milliseconds",3);default:return this.clone()}},d.endOf=function(f){return this.startOf(f,!1)},d.$set=function(f,v){var h,_=E.p(f),p="set"+(this.$u?"UTC":""),C=(h={},h[i]=p+"Date",h[w]=p+"Date",h[u]=p+"Month",h[b]=p+"FullYear",h[a]=p+"Hours",h[c]=p+"Minutes",h[s]=p+"Seconds",h[n]=p+"Milliseconds",h)[_],j=_===i?this.$D+(v-this.$W):v;if(_===u||_===b){var A=this.clone().set(w,1);A.$d[C](j),A.init(),this.$d=A.set(w,Math.min(this.$D,A.daysInMonth())).$d}else C&&this.$d[C](j);return this.init(),this},d.set=function(f,v){return this.clone().$set(f,v)},d.get=function(f){return this[E.p(f)]()},d.add=function(f,v){var h,_=this;f=Number(f);var p=E.p(v),C=function(q){var K=Y(_);return E.w(K.date(K.date()+Math.round(q*f)),_)};if(p===u)return this.set(u,this.$M+f);if(p===b)return this.set(b,this.$y+f);if(p===i)return C(1);if(p===m)return C(7);var j=(h={},h[c]=r,h[a]=l,h[s]=t,h)[p]||1,A=this.$d.getTime()+f*j;return E.w(A,this)},d.subtract=function(f,v){return this.add(-1*f,v)},d.format=function(f){var v=this,h=this.$locale();if(!this.isValid())return h.invalidDate||U;var _=f||"YYYY-MM-DDTHH:mm:ssZ",p=E.z(this),C=this.$H,j=this.$m,A=this.$M,q=h.weekdays,K=h.months,fe=h.meridiem,re=function(R,ne,ge,we){return R&&(R[ne]||R(v,_))||ge[ne].slice(0,we)},ve=function(R){return E.s(C%12||12,R,"0")},le=fe||function(R,ne,ge){var we=R<12?"AM":"PM";return ge?we.toLowerCase():we};return _.replace(z,function(R,ne){return ne||function(ge){switch(ge){case"YY":return String(v.$y).slice(-2);case"YYYY":return E.s(v.$y,4,"0");case"M":return A+1;case"MM":return E.s(A+1,2,"0");case"MMM":return re(h.monthsShort,A,K,3);case"MMMM":return re(K,A);case"D":return v.$D;case"DD":return E.s(v.$D,2,"0");case"d":return String(v.$W);case"dd":return re(h.weekdaysMin,v.$W,q,2);case"ddd":return re(h.weekdaysShort,v.$W,q,3);case"dddd":return q[v.$W];case"H":return String(C);case"HH":return E.s(C,2,"0");case"h":return ve(1);case"hh":return ve(2);case"a":return le(C,j,!0);case"A":return le(C,j,!1);case"m":return String(j);case"mm":return E.s(j,2,"0");case"s":return String(v.$s);case"ss":return E.s(v.$s,2,"0");case"SSS":return E.s(v.$ms,3,"0");case"Z":return p}return null}(R)||p.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(f,v,h){var _,p=this,C=E.p(v),j=Y(f),A=(j.utcOffset()-this.utcOffset())*r,q=this-j,K=function(){return E.m(p,j)};switch(C){case b:_=K()/12;break;case u:_=K();break;case M:_=K()/3;break;case m:_=(q-A)/6048e5;break;case i:_=(q-A)/864e5;break;case a:_=q/l;break;case c:_=q/r;break;case s:_=q/t;break;default:_=q}return h?_:E.a(_)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return N[this.$L]},d.locale=function(f,v){if(!f)return this.$L;var h=this.clone(),_=W(f,v,!0);return _&&(h.$L=_),h},d.clone=function(){return E.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},y}(),ue=G.prototype;return Y.prototype=ue,[["$ms",n],["$s",s],["$m",c],["$H",a],["$W",i],["$M",u],["$y",b],["$D",w]].forEach(function(y){ue[y[1]]=function(d){return this.$g(d,y[0],y[1])}}),Y.extend=function(y,d){return y.$i||(y(d,G,Y),y.$i=!0),Y},Y.locale=W,Y.isDayjs=Q,Y.unix=function(y){return Y(1e3*y)},Y.en=N[T],Y.Ls=N,Y.p={},Y})})(Ae);var Qe=Ae.exports;const Xe=Ke(Qe);async function Pe(o,e){let l=(await(await fetch(e+"/browser/"+o)).json()).files;return l.forEach(n=>{const s=n.name.split(".").pop().toLowerCase();n.fileType="unknown",["png","webp","jpeg","jpg","gif"].includes(s)&&(n.fileType="image"),["mp4","webm","mov","avi","mkv"].includes(s)&&(n.fileType="video"),o==="collections"?n.url=`${e}/browser/collections/view?filename=${n.name}`:n.url=`${e}/view?filename=${n.name}`;const c=Xe.unix(n.created_at);n.formattedDatetime=c.format("YYYY-MM-DD HH-mm-ss"),n.bytes/1024/1024>1?n.formattedSize=(n.bytes/1024/1024).toFixed(2)+" MB":n.formattedSize=Math.round(n.bytes/1024)+" KB"}),l}function He(o,e){if(o>=e)return o;const t=document.documentElement.scrollHeight;return window.innerHeight+window.scrollY>=t?o+10:o}function Me(o){let e,t,r;return{c(){e=I("img"),this.h()},l(l){e=L(l,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){$(e,"class",""),ye(e.src,t=o[0].url)||$(e,"src",t),$(e,"alt",r=o[0].name)},m(l,n){H(l,e,n)},p(l,n){n&1&&!ye(e.src,t=l[0].url)&&$(e,"src",t),n&1&&r!==(r=l[0].name)&&$(e,"alt",r)},d(l){l&&S(e)}}}function Ce(o){let e,t,r;return{c(){e=I("video"),t=I("track"),this.h()},l(l){e=L(l,"VIDEO",{class:!0,src:!0});var n=P(e);t=L(n,"TRACK",{kind:!0}),n.forEach(S),this.h()},h(){$(t,"kind","captions"),$(e,"class","object-contain pb-0.5 border-0.5 border-black"),ye(e.src,r=o[0].url)||$(e,"src",r),e.loop=!0,e.autoplay=!0,e.muted=!0},m(l,n){H(l,e,n),D(e,t)},p(l,n){n&1&&!ye(e.src,r=l[0].url)&&$(e,"src",r)},d(l){l&&S(e)}}}function xe(o){let e,t,r,l,n=o[0].fileType==="image"&&Me(o),s=o[0].fileType==="video"&&Ce(o);return{c(){e=I("div"),t=I("a"),n&&n.c(),r=B(),s&&s.c(),this.h()},l(c){e=L(c,"DIV",{class:!0});var a=P(e);t=L(a,"A",{href:!0,target:!0,style:!0});var i=P(t);n&&n.l(i),r=V(i),s&&s.l(i),i.forEach(S),a.forEach(S),this.h()},h(){$(t,"href",l=o[0].url),$(t,"target","_blank"),Se(t,"max-height","inherit"),Se(t,"max-width","inherit"),$(e,"class",o[1])},m(c,a){H(c,e,a),D(e,t),n&&n.m(t,null),D(t,r),s&&s.m(t,null)},p(c,[a]){c[0].fileType==="image"?n?n.p(c,a):(n=Me(c),n.c(),n.m(t,r)):n&&(n.d(1),n=null),c[0].fileType==="video"?s?s.p(c,a):(s=Ce(c),s.c(),s.m(t,null)):s&&(s.d(1),s=null),a&1&&l!==(l=c[0].url)&&$(t,"href",l),a&2&&$(e,"class",c[1])},i:se,o:se,d(c){c&&S(e),n&&n.d(),s&&s.d()}}}function et(o,e,t){let{file:r}=e,{styleClass:l}=e;return o.$$set=n=>{"file"in n&&t(0,r=n.file),"styleClass"in n&&t(1,l=n.styleClass)},[r,l]}class Be extends pe{constructor(e){super(),be(this,e,et,xe,_e,{file:0,styleClass:1})}}function Oe(o){let e,t,r,l,n;return{c(){e=I("div"),t=I("div"),r=I("span"),l=x(o[2]),this.h()},l(s){e=L(s,"DIV",{class:!0});var c=P(e);t=L(c,"DIV",{class:!0});var a=P(t);r=L(a,"SPAN",{});var i=P(r);l=ee(i,o[2]),i.forEach(S),a.forEach(S),c.forEach(S),this.h()},h(){$(t,"class",n="alert "+(o[1]?"alert-success":"alert-error")),$(e,"class","toast toast-center")},m(s,c){H(s,e,c),D(e,t),D(t,r),D(r,l)},p(s,c){c&4&&he(l,s[2]),c&2&&n!==(n="alert "+(s[1]?"alert-success":"alert-error"))&&$(t,"class",n)},d(s){s&&S(e)}}}function tt(o){let e,t=o[0]&&Oe(o);return{c(){t&&t.c(),e=me()},l(r){t&&t.l(r),e=me()},m(r,l){t&&t.m(r,l),H(r,e,l)},p(r,[l]){r[0]?t?t.p(r,l):(t=Oe(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:se,o:se,d(r){r&&S(e),t&&t.d(r)}}}function nt(o,e,t){let{showToast:r=!1}=e,{toastSuccess:l=!0}=e,{toastText:n=""}=e;return o.$$set=s=>{"showToast"in s&&t(0,r=s.showToast),"toastSuccess"in s&&t(1,l=s.toastSuccess),"toastText"in s&&t(2,n=s.toastText)},[r,l,n]}class Ve extends pe{constructor(e){super(),be(this,e,nt,tt,_e,{showToast:0,toastSuccess:1,toastText:2})}}function Ee(o,e,t){const r=o.slice();return r[13]=e[t],r}function Ue(o){let e,t,r,l,n,s=o[13].name+"",c,a,i,m=o[13].formattedDatetime+"",u,M,b,w=o[13].formattedSize+"",U,O,z,F;r=new Be({props:{file:o[13],styleClass:""}});let g=o[0]&&Ie(o);return{c(){e=I("div"),t=I("div"),ae(r.$$.fragment),l=B(),n=I("p"),c=x(s),a=B(),i=I("p"),u=x(m),M=B(),b=I("p"),U=x(w),O=B(),g&&g.c(),z=B(),this.h()},l(k){e=L(k,"DIV",{class:!0});var T=P(e);t=L(T,"DIV",{class:!0});var N=P(t);oe(r.$$.fragment,N),N.forEach(S),l=V(T),n=L(T,"P",{});var te=P(n);c=ee(te,s),te.forEach(S),a=V(T),i=L(T,"P",{});var Q=P(i);u=ee(Q,m),Q.forEach(S),M=V(T),b=L(T,"P",{});var W=P(b);U=ee(W,w),W.forEach(S),O=V(T),g&&g.l(T),z=V(T),T.forEach(S),this.h()},h(){$(t,"class","flex items-center"),$(e,"class","browser-item svelte-73vnv2")},m(k,T){H(k,e,T),D(e,t),ie(r,t,null),D(e,l),D(e,n),D(n,c),D(e,a),D(e,i),D(i,u),D(e,M),D(e,b),D(b,U),D(e,O),g&&g.m(e,null),D(e,z),F=!0},p(k,T){const N={};T&6&&(N.file=k[13]),r.$set(N),(!F||T&6)&&s!==(s=k[13].name+"")&&he(c,s),(!F||T&6)&&m!==(m=k[13].formattedDatetime+"")&&he(u,m),(!F||T&6)&&w!==(w=k[13].formattedSize+"")&&he(U,w),k[0]?g?g.p(k,T):(g=Ie(k),g.c(),g.m(e,z)):g&&(g.d(1),g=null)},i(k){F||(J(r.$$.fragment,k),F=!0)},o(k){Z(r.$$.fragment,k),F=!1},d(k){k&&S(e),ce(r),g&&g.d()}}}function Ie(o){let e,t="Load",r,l,n="Collect",s,c,a="Delete",i,m;function u(){return o[10](o[13])}function M(){return o[11](o[13])}function b(){return o[12](o[13])}return{c(){e=I("button"),e.textContent=t,r=B(),l=I("button"),l.textContent=n,s=B(),c=I("button"),c.textContent=a,this.h()},l(w){e=L(w,"BUTTON",{class:!0,"data-svelte-h":!0}),de(e)!=="svelte-ctmpgz"&&(e.textContent=t),r=V(w),l=L(w,"BUTTON",{class:!0,"data-svelte-h":!0}),de(l)!=="svelte-bp09qj"&&(l.textContent=n),s=V(w),c=L(w,"BUTTON",{class:!0,"data-svelte-h":!0}),de(c)!=="svelte-7ie4ox"&&(c.textContent=a),this.h()},h(){$(e,"class","btn btn-ghost"),$(l,"class","btn btn-ghost"),$(c,"class","btn btn-ghost")},m(w,U){H(w,e,U),H(w,r,U),H(w,l,U),H(w,s,U),H(w,c,U),i||(m=[X(e,"click",u),X(l,"click",M),X(c,"click",b)],i=!0)},p(w,U){o=w},d(w){w&&(S(e),S(r),S(l),S(s),S(c)),i=!1,De(m)}}}function Le(o){let e=["image","video"].includes(o[13].fileType),t,r,l=e&&Ue(o);return{c(){l&&l.c(),t=me()},l(n){l&&l.l(n),t=me()},m(n,s){l&&l.m(n,s),H(n,t,s),r=!0},p(n,s){s&6&&(e=["image","video"].includes(n[13].fileType)),e?l?(l.p(n,s),s&6&&J(l,1)):(l=Ue(n),l.c(),J(l,1),l.m(t.parentNode,t)):l&&(ke(),Z(l,1,1,()=>{l=null}),$e())},i(n){r||(J(l),r=!0)},o(n){Z(l),r=!1},d(n){n&&S(t),l&&l.d(n)}}}function st(o){let e,t,r,l,n=Te(o[1].slice(0,o[2])),s=[];for(let a=0;a<n.length;a+=1)s[a]=Le(Ee(o,n,a));const c=a=>Z(s[a],1,1,()=>{s[a]=null});return r=new Ve({props:{showToast:o[3],toastSuccess:o[4],toastText:o[5]}}),{c(){e=I("div");for(let a=0;a<s.length;a+=1)s[a].c();t=B(),ae(r.$$.fragment),this.h()},l(a){e=L(a,"DIV",{class:!0});var i=P(e);for(let m=0;m<s.length;m+=1)s[m].l(i);i.forEach(S),t=V(a),oe(r.$$.fragment,a),this.h()},h(){$(e,"class","grid grid-cols-4 lg:grid-cols-6 gap-2")},m(a,i){H(a,e,i);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(e,null);H(a,t,i),ie(r,a,i),l=!0},p(a,[i]){if(i&455){n=Te(a[1].slice(0,a[2]));let u;for(u=0;u<n.length;u+=1){const M=Ee(a,n,u);s[u]?(s[u].p(M,i),J(s[u],1)):(s[u]=Le(M),s[u].c(),J(s[u],1),s[u].m(e,null))}for(ke(),u=n.length;u<s.length;u+=1)c(u);$e()}const m={};i&8&&(m.showToast=a[3]),i&16&&(m.toastSuccess=a[4]),i&32&&(m.toastText=a[5]),r.$set(m)},i(a){if(!l){for(let i=0;i<n.length;i+=1)J(s[i]);J(r.$$.fragment,a),l=!0}},o(a){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)Z(s[i]);Z(r.$$.fragment,a),l=!1},d(a){a&&(S(e),S(t)),Ye(s,a),ce(r,a)}}}function rt(o,e,t){let{comfyUrl:r}=e,l,n=[],s=20,c=!1,a=!0,i="";Fe(async()=>{t(0,l=window.top.comfyApp||r),t(1,n=await Pe("files",r)),window.addEventListener("scroll",()=>{t(2,s=He(s,n.length))})});async function m(O){const z=await fetch(O.url),F=await z.blob(),g=new File([F],O.name,{type:z.headers.get("Content-Type")||""});await l.handleFile(g)}async function u(O){const z=await fetch(r+"/browser/collections",{method:"POST",body:JSON.stringify({filename:O.name,folder_path:O.folder_path})});t(4,a=z.ok),a?t(5,i="Added to collections"):t(5,i="Failed to add to collections. Please check the ComfyUI server."),t(3,c=!0),setTimeout(()=>t(3,c=!1),2e3)}async function M(O){if(!confirm("You will delete this file? "+O.name))return;const F=await fetch(r+"/browser/files",{method:"DELETE",body:JSON.stringify({type:"files",filename:O.name,folder_path:O.folder_path})});t(4,a=F.ok),a?t(5,i="Deleted the file "+O.name):t(5,i="Failed to delete the file. Please check the ComfyUI server."),t(3,c=!0),setTimeout(()=>t(3,c=!1),2e3),t(1,n=n.filter(g=>g!=O))}const b=async O=>await m(O),w=async O=>await u(O),U=async O=>await M(O);return o.$$set=O=>{"comfyUrl"in O&&t(9,r=O.comfyUrl)},[l,n,s,c,a,i,m,u,M,r,b,w,U]}class lt extends pe{constructor(e){super(),be(this,e,rt,st,_e,{comfyUrl:9})}}function Ne(o,e,t){const r=o.slice();return r[16]=e[t],r}function je(o){let e,t,r,l,n,s,c,a,i=o[16].formattedDatetime+"",m,u,M=o[16].formattedSize+"",b,w,U,O="Load",z,F,g="Remove",k,T,N,te="Notes:",Q,W,Y,E,G,ue,y;t=new Be({props:{file:o[16],styleClass:"w-32 h-full flex justify-center items-center"}});function d(..._){return o[10](o[16],..._)}function f(){return o[11](o[16])}function v(){return o[12](o[16])}function h(..._){return o[13](o[16],..._)}return{c(){e=I("li"),ae(t.$$.fragment),r=B(),l=I("div"),n=I("input"),c=B(),a=I("p"),m=x(i),u=x(" | "),b=x(M),w=B(),U=I("button"),U.textContent=O,z=B(),F=I("button"),F.textContent=g,k=B(),T=I("div"),N=I("p"),N.textContent=te,Q=B(),W=I("textarea"),E=B(),this.h()},l(_){e=L(_,"LI",{class:!0});var p=P(e);oe(t.$$.fragment,p),r=V(p),l=L(p,"DIV",{class:!0});var C=P(l);n=L(C,"INPUT",{type:!0,class:!0}),c=V(C),a=L(C,"P",{class:!0});var j=P(a);m=ee(j,i),u=ee(j," | "),b=ee(j,M),j.forEach(S),w=V(C),U=L(C,"BUTTON",{class:!0,"data-svelte-h":!0}),de(U)!=="svelte-1hu837"&&(U.textContent=O),z=V(C),F=L(C,"BUTTON",{class:!0,"data-svelte-h":!0}),de(F)!=="svelte-1j21yds"&&(F.textContent=g),C.forEach(S),k=V(p),T=L(p,"DIV",{});var A=P(T);N=L(A,"P",{"data-svelte-h":!0}),de(N)!=="svelte-1biq3pv"&&(N.textContent=te),Q=V(A),W=L(A,"TEXTAREA",{name:!0,cols:!0,rows:!0}),P(W).forEach(S),A.forEach(S),E=V(p),p.forEach(S),this.h()},h(){$(n,"type","text"),$(n,"class","font-semibold"),n.value=s=o[16].name,$(a,"class","text-gray-500"),$(U,"class","btn btn-ghost"),$(F,"class","btn btn-ghost"),$(l,"class","space-y-2"),$(W,"name","notes"),$(W,"cols","30"),$(W,"rows","4"),W.value=Y=o[16].notes,$(e,"class","flex h-32 border-2")},m(_,p){H(_,e,p),ie(t,e,null),D(e,r),D(e,l),D(l,n),D(l,c),D(l,a),D(a,m),D(a,u),D(a,b),D(l,w),D(l,U),D(l,z),D(l,F),D(e,k),D(e,T),D(T,N),D(T,Q),D(T,W),D(e,E),G=!0,ue||(y=[X(n,"blur",d),X(U,"click",f),X(F,"click",v),X(W,"blur",h)],ue=!0)},p(_,p){o=_;const C={};p&3&&(C.file=o[16]),t.$set(C),(!G||p&3&&s!==(s=o[16].name)&&n.value!==s)&&(n.value=s),(!G||p&3)&&i!==(i=o[16].formattedDatetime+"")&&he(m,i),(!G||p&3)&&M!==(M=o[16].formattedSize+"")&&he(b,M),(!G||p&3&&Y!==(Y=o[16].notes))&&(W.value=Y)},i(_){G||(J(t.$$.fragment,_),G=!0)},o(_){Z(t.$$.fragment,_),G=!1},d(_){_&&S(e),ce(t),ue=!1,De(y)}}}function at(o){let e,t,r,l,n=Te(o[0].slice(0,o[1])),s=[];for(let a=0;a<n.length;a+=1)s[a]=je(Ne(o,n,a));const c=a=>Z(s[a],1,1,()=>{s[a]=null});return r=new Ve({props:{showToast:o[2],toastSuccess:o[3],toastText:o[4]}}),{c(){e=I("ul");for(let a=0;a<s.length;a+=1)s[a].c();t=B(),ae(r.$$.fragment),this.h()},l(a){e=L(a,"UL",{class:!0});var i=P(e);for(let m=0;m<s.length;m+=1)s[m].l(i);i.forEach(S),t=V(a),oe(r.$$.fragment,a),this.h()},h(){$(e,"class","space-y-2")},m(a,i){H(a,e,i);for(let m=0;m<s.length;m+=1)s[m]&&s[m].m(e,null);H(a,t,i),ie(r,a,i),l=!0},p(a,[i]){if(i&483){n=Te(a[0].slice(0,a[1]));let u;for(u=0;u<n.length;u+=1){const M=Ne(a,n,u);s[u]?(s[u].p(M,i),J(s[u],1)):(s[u]=je(M),s[u].c(),J(s[u],1),s[u].m(e,null))}for(ke(),u=n.length;u<s.length;u+=1)c(u);$e()}const m={};i&4&&(m.showToast=a[2]),i&8&&(m.toastSuccess=a[3]),i&16&&(m.toastText=a[4]),r.$set(m)},i(a){if(!l){for(let i=0;i<n.length;i+=1)J(s[i]);J(r.$$.fragment,a),l=!0}},o(a){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)Z(s[i]);Z(r.$$.fragment,a),l=!1},d(a){a&&(S(e),S(t)),Ye(s,a),ce(r,a)}}}function ot(o,e,t){let{comfyUrl:r}=e,l,n=[],s=20,c=!1,a=!0,i="";Fe(async()=>{l=window.top.comfyApp||r,t(0,n=await Pe("collections",r)),window.addEventListener("scroll",()=>{t(1,s=He(s,n.length))})});async function m(g){const k=await fetch(g.url),T=await k.blob(),N=new File([T],g.name,{type:k.headers.get("Content-Type")||""});await l.handleFile(N)}async function u(g){if(!confirm("You will delete this file? "+g.name))return;const T=await fetch(r+"/browser/files",{method:"DELETE",body:JSON.stringify({type:"collections",filename:g.name,folder_path:g.folder_path})});t(3,a=T.ok),a?t(4,i="Deleted the file "+g.name):t(4,i="Failed to delete the file. Please check the ComfyUI server."),t(2,c=!0),setTimeout(()=>t(2,c=!1),2e3),t(0,n=n.filter(N=>N!=g))}async function M(g,k){return(await fetch(r+"/browser/collections/"+g.name,{method:"PUT",body:JSON.stringify(k)})).ok}async function b(g,k){const T=g.target.value;if(T===k.name)return;const N=await M(k,{filename:T,notes:k.notes||"",folder_path:k.folder_path});t(3,a=N),a?t(4,i="Updated"):t(4,i="Failed to Update. Please check the ComfyUI server."),t(2,c=!0),setTimeout(()=>t(2,c=!1),2e3)}async function w(g,k){const T=g.target.value;if(T==k.notes)return;const N=await M(k,{filename:k.name,notes:T,folder_path:k.folder_path});t(3,a=N),a?t(4,i="Updated"):t(4,i="Failed to Update. Please check the ComfyUI server."),t(2,c=!0),setTimeout(()=>t(2,c=!1),2e3)}const U=(g,k)=>b(k,g),O=async g=>await m(g),z=async g=>await u(g),F=(g,k)=>w(k,g);return o.$$set=g=>{"comfyUrl"in g&&t(9,r=g.comfyUrl)},[n,s,c,a,i,m,u,b,w,r,U,O,z,F]}class it extends pe{constructor(e){super(),be(this,e,ot,at,_e,{comfyUrl:9})}}function ct(o){let e,t;return e=new lt({props:{comfyUrl:o[1]}}),{c(){ae(e.$$.fragment)},l(r){oe(e.$$.fragment,r)},m(r,l){ie(e,r,l),t=!0},p:se,i(r){t||(J(e.$$.fragment,r),t=!0)},o(r){Z(e.$$.fragment,r),t=!1},d(r){ce(e,r)}}}function ut(o){let e,t;return e=new it({props:{comfyUrl:o[1]}}),{c(){ae(e.$$.fragment)},l(r){oe(e.$$.fragment,r)},m(r,l){ie(e,r,l),t=!0},p:se,i(r){t||(J(e.$$.fragment,r),t=!0)},o(r){Z(e.$$.fragment,r),t=!1},d(r){ce(e,r)}}}function ft(o){let e,t,r,l,n,s,c;function a(b){o[3](b)}let i={};o[0]!==void 0&&(i.activeTab=o[0]),e=new Re({props:i}),ze.push(()=>Je(e,"activeTab",a));const m=[ut,ct],u=[];function M(b,w){return b[0]==="collections"?0:1}return l=M(o),n=u[l]=m[l](o),{c(){ae(e.$$.fragment),r=B(),n.c(),s=me()},l(b){oe(e.$$.fragment,b),r=V(b),n.l(b),s=me()},m(b,w){ie(e,b,w),H(b,r,w),u[l].m(b,w),H(b,s,w),c=!0},p(b,[w]){const U={};!t&&w&1&&(t=!0,U.activeTab=b[0],We(()=>t=!1)),e.$set(U);let O=l;l=M(b),l===O?u[l].p(b,w):(ke(),Z(u[O],1,1,()=>{u[O]=null}),$e(),n=u[l],n?n.p(b,w):(n=u[l]=m[l](b),n.c()),J(n,1),n.m(s.parentNode,s))},i(b){c||(J(e.$$.fragment,b),J(n),c=!0)},o(b){Z(e.$$.fragment,b),Z(n),c=!1},d(b){b&&(S(r),S(s)),ce(e,b),u[l].d(b)}}}function ht(o,e,t){let{data:r}=e;const{comfyUrl:l}=r;let n="outputs";function s(c){n=c,t(0,n)}return o.$$set=c=>{"data"in c&&t(2,r=c.data)},[n,l,r,s]}class _t extends pe{constructor(e){super(),be(this,e,ht,ft,_e,{data:2})}}export{_t as component};
