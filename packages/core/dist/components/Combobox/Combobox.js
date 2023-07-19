'use client';
import{__rest as e}from"tslib";import{jsx as o,jsxs as t}from"react/jsx-runtime";import{ComboboxGroup as s}from"./ComboboxGroup/ComboboxGroup.js";import{ComboboxOption as a}from"./ComboboxOption/ComboboxOption.js";import{useCombobox as r}from"./use-combobox.hook.js";import{useFormControlContext as i}from"../FormControl/FormControl.context.js";import{useInputGroupContext as n}from"../InputGroup/InputGroup.context.js";import l from"../Spinner/Spinner.js";import{useMergeRefs as c,FloatingPortal as d}from"@floating-ui/react";import{useKeypress as m}from"../../hooks/use-keypress.js";import{useVerticalArrows as p}from"../../hooks/use-vertical-arrows.hook.js";import{XMarkIcon as u}from"../../icons/XMark.js";import{useComponentTheme as h}from"../../theme/theme.context.js";import{usePropId as b}from"../../utils/usePropId.js";import{forwardRef as f,useId as g,useState as j,useRef as v,useEffect as x,useLayoutEffect as O,cloneElement as C}from"react";import{ComboboxContextProvider as N}from"./Combobox.context.js";import{CaretUpDown as y}from"../../icons/CaretUpDown.js";const w={clearable:!0,closeOnEscape:!0,color:"dark",disabled:!1,loading:!1,maxHeight:250,minWidth:250,mode:"spacey",offset:5,optionColor:"gray",radius:"md",searchable:!0,shadow:"none",size:"md",tone:"light",validation:"none",withRing:!0},z=f(((s,a)=>{const f=h("Combobox"),z=Object.assign(Object.assign(Object.assign(Object.assign({},w),i()),n()),s),{children:k,className:I,clearable:E,closeOnEscape:R,color:S,controlId:W,initialValue:G,leftIcon:H,loading:L,maxHeight:P,minWidth:V,mode:F,offset:$,onChange:q,optionColor:A,placeholder:B,radius:D,searchable:M,shadow:T,size:U,tone:X,validation:J,value:K,withRing:Q}=z,Y=e(z,["children","className","clearable","closeOnEscape","color","controlId","initialValue","leftIcon","loading","maxHeight","minWidth","mode","offset","onChange","optionColor","placeholder","radius","searchable","shadow","size","tone","validation","value","withRing"]),Z=b(s.id),_=g(),ee=b(W),oe=s.disabled||L,te=!!H,[se,ae]=j(""),[re,ie]=j(!1),[ne,le]=j(G),[ce,de]=j(""),[me,pe]=j([]),[ue,he]=j(""),[be,fe]=j(""),[ge,je]=j(null),ve=v(!0),xe=v(null),Oe=v(null),Ce=v(null),Ne={mode:F,optionColor:A,radius:D,search:se,selectedLabel:ce,selectedValue:ne,setSearch:ae,setSelectedLabel:de,setSelectedValue:le,size:U},{x:ye,y:we,reference:ze,floating:ke,strategy:Ie,getFloatingProps:Ee,open:Re,setOpen:Se}=r({offset:$}),We=c([ze,xe,a||null]),Ge=c([Oe,ke]),He=f.wrapper({disabled:oe}),Le=f.noResults({size:U}),Pe=H?f.icon({tone:X,size:U,className:H.props.className}):null,Ve=f.leftIconWrapper({size:U}),Fe=f.icon({tone:X,size:U}),$e=f.rightIconWrapper({size:U});x((()=>{xe.current&&je(xe.current.getBoundingClientRect().width)}),[]),x((()=>{ae(""),ie(!1)}),[ce]),x((()=>{q&&!ve.current&&q(ne),ve.current=!1}),[ne]),x((()=>{le(K)}),[K]),x((()=>{var e;Re&&(null===(e=Ce.current)||void 0===e||e.focus()),Be()}),[Re]),m("Escape",!0,(()=>{ae(""),ie(!1),Re&&R&&Se(!1)})),m("Enter",!0,(()=>{var e;if(!re)return;const o=null===(e=Oe.current)||void 0===e?void 0:e.querySelector('button[aria-hidden="false"]:not([aria-disabled="true"])');o&&o.click()})),O((()=>{setTimeout((()=>{Oe.current&&pe(Array.from(Oe.current.querySelectorAll('button[aria-hidden="false"][aria-disabled="false"]')))}),1),Be()}),[se]),x((()=>{Re&&Se(!1)}),[ce]),p(me,Re);const qe=o("input",{id:ee,ref:Ce,disabled:oe,role:"combobox","aria-controls":_,"aria-expanded":Re,value:re?se:ce||"",placeholder:B,className:be,readOnly:!M,onBlur:()=>ie(!1),onChange:e=>{ie(!0),ae(e.target.value),Re||Se(!0)},type:"text"}),Ae="solid"===X?"slate":"gray",Be=()=>{if(!Oe.current)return;const e=Oe.current.scrollHeight>(P||0);he(f.list({size:U,open:Re,mode:F,radius:D,shadow:T,overflown:e}))};return x((()=>{var e,o;if(!(null===(e=xe.current)||void 0===e?void 0:e.dataset))return;const t=Object.assign({},null===(o=xe.current)||void 0===o?void 0:o.dataset),s=t.hasOwnProperty("hasLeftElement"),a=t.hasOwnProperty("hasRightElement");fe(f.base({className:I,color:S,disabled:oe,hasLeftElement:s,hasLeftIcon:te,hasRightElement:a,hasRightIcon:true,radius:D,shadow:T,size:U,tone:X,validation:J,withRing:Q}))}),[I,S,oe,te,true,D,T,U,f,X,J,Q]),t("div",Object.assign({id:Z,ref:We,className:He,onClick:()=>{Re||oe||Se(!0)}},Y,{children:[H&&o("span",Object.assign({className:Ve},{children:C(H,{className:Pe})})),qe,L&&o("span",Object.assign({className:$e},{children:o(l,{size:U,color:Ae})})),!L&&E&&ne&&o("button",Object.assign({disabled:oe,onClick:e=>{de(""),le(null),ae(""),e.stopPropagation()},className:$e},{children:o(u,{className:Fe})})),!L&&(!E||!ne)&&o("div",Object.assign({className:$e},{children:o(y,{className:Fe})})),o(N,Object.assign({value:Ne},{children:o(d,{children:t("div",Object.assign({id:_,ref:Ge,className:ue,style:{display:Re?"block":"none",opacity:Re&&!oe?1:0,maxHeight:`${P}px`,minWidth:`${V}px`,maxWidth:`${ge}px`,position:Ie,top:we&&we>0&&we!==1/0?we:0,left:ye||0}},Ee,{children:[0===(null==me?void 0:me.length)&&re&&o("div",Object.assign({className:Le},{children:"No results"})),k]}))})}))]}))}));z.displayName="Combobox";const k=Object.assign(z,{Group:s,Option:a});export{k as default};