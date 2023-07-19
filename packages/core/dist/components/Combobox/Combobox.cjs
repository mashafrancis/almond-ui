'use client';
"use strict";var e=require("tslib"),s=require("react/jsx-runtime"),o=require("./ComboboxGroup/ComboboxGroup.cjs"),t=require("./ComboboxOption/ComboboxOption.cjs"),r=require("./use-combobox.hook.cjs"),a=require("../FormControl/FormControl.context.cjs"),i=require("../InputGroup/InputGroup.context.cjs"),n=require("../Spinner/Spinner.cjs"),l=require("@floating-ui/react"),c=require("../../hooks/use-keypress.cjs"),u=require("../../hooks/use-vertical-arrows.hook.cjs"),d=require("../../icons/XMark.cjs"),p=require("../../theme/theme.context.cjs"),h=require("../../utils/usePropId.cjs"),b=require("react"),m=require("./Combobox.context.cjs"),f=require("../../icons/CaretUpDown.cjs");const g={clearable:!0,closeOnEscape:!0,color:"dark",disabled:!1,loading:!1,maxHeight:250,minWidth:250,mode:"spacey",offset:5,optionColor:"gray",radius:"md",searchable:!0,shadow:"none",size:"md",tone:"light",validation:"none",withRing:!0},x=b.forwardRef(((o,t)=>{const x=p.useComponentTheme("Combobox"),j=Object.assign(Object.assign(Object.assign(Object.assign({},g),a.useFormControlContext()),i.useInputGroupContext()),o),{children:C,className:v,clearable:O,closeOnEscape:y,color:q,controlId:w,initialValue:E,leftIcon:N,loading:I,maxHeight:R,minWidth:S,mode:k,offset:z,onChange:P,optionColor:G,placeholder:W,radius:L,searchable:F,shadow:H,size:V,tone:M,validation:A,value:$,withRing:B}=j,D=e.__rest(j,["children","className","clearable","closeOnEscape","color","controlId","initialValue","leftIcon","loading","maxHeight","minWidth","mode","offset","onChange","optionColor","placeholder","radius","searchable","shadow","size","tone","validation","value","withRing"]),K=h.usePropId(o.id),T=b.useId(),U=h.usePropId(w),X=o.disabled||I,_=!!N,[J,Q]=b.useState(""),[Y,Z]=b.useState(!1),[ee,se]=b.useState(E),[oe,te]=b.useState(""),[re,ae]=b.useState([]),[ie,ne]=b.useState(""),[le,ce]=b.useState(""),[ue,de]=b.useState(null),pe=b.useRef(!0),he=b.useRef(null),be=b.useRef(null),me=b.useRef(null),fe={mode:k,optionColor:G,radius:L,search:J,selectedLabel:oe,selectedValue:ee,setSearch:Q,setSelectedLabel:te,setSelectedValue:se,size:V},{x:ge,y:xe,reference:je,floating:Ce,strategy:ve,getFloatingProps:Oe,open:ye,setOpen:qe}=r.useCombobox({offset:z}),we=l.useMergeRefs([je,he,t||null]),Ee=l.useMergeRefs([be,Ce]),Ne=x.wrapper({disabled:X}),Ie=x.noResults({size:V}),Re=N?x.icon({tone:M,size:V,className:N.props.className}):null,Se=x.leftIconWrapper({size:V}),ke=x.icon({tone:M,size:V}),ze=x.rightIconWrapper({size:V});b.useEffect((()=>{he.current&&de(he.current.getBoundingClientRect().width)}),[]),b.useEffect((()=>{Q(""),Z(!1)}),[oe]),b.useEffect((()=>{P&&!pe.current&&P(ee),pe.current=!1}),[ee]),b.useEffect((()=>{se($)}),[$]),b.useEffect((()=>{var e;ye&&(null===(e=me.current)||void 0===e||e.focus()),We()}),[ye]),c.useKeypress("Escape",!0,(()=>{Q(""),Z(!1),ye&&y&&qe(!1)})),c.useKeypress("Enter",!0,(()=>{var e;if(!Y)return;const s=null===(e=be.current)||void 0===e?void 0:e.querySelector('button[aria-hidden="false"]:not([aria-disabled="true"])');s&&s.click()})),b.useLayoutEffect((()=>{setTimeout((()=>{be.current&&ae(Array.from(be.current.querySelectorAll('button[aria-hidden="false"][aria-disabled="false"]')))}),1),We()}),[J]),b.useEffect((()=>{ye&&qe(!1)}),[oe]),u.useVerticalArrows(re,ye);const Pe=s.jsx("input",{id:U,ref:me,disabled:X,role:"combobox","aria-controls":T,"aria-expanded":ye,value:Y?J:oe||"",placeholder:W,className:le,readOnly:!F,onBlur:()=>Z(!1),onChange:e=>{Z(!0),Q(e.target.value),ye||qe(!0)},type:"text"}),Ge="solid"===M?"slate":"gray",We=()=>{if(!be.current)return;const e=be.current.scrollHeight>(R||0);ne(x.list({size:V,open:ye,mode:k,radius:L,shadow:H,overflown:e}))};return b.useEffect((()=>{var e,s;if(!(null===(e=he.current)||void 0===e?void 0:e.dataset))return;const o=Object.assign({},null===(s=he.current)||void 0===s?void 0:s.dataset),t=o.hasOwnProperty("hasLeftElement"),r=o.hasOwnProperty("hasRightElement");ce(x.base({className:v,color:q,disabled:X,hasLeftElement:t,hasLeftIcon:_,hasRightElement:r,hasRightIcon:true,radius:L,shadow:H,size:V,tone:M,validation:A,withRing:B}))}),[v,q,X,_,true,L,H,V,x,M,A,B]),s.jsxs("div",Object.assign({id:K,ref:we,className:Ne,onClick:()=>{ye||X||qe(!0)}},D,{children:[N&&s.jsx("span",Object.assign({className:Se},{children:b.cloneElement(N,{className:Re})})),Pe,I&&s.jsx("span",Object.assign({className:ze},{children:s.jsx(n,{size:V,color:Ge})})),!I&&O&&ee&&s.jsx("button",Object.assign({disabled:X,onClick:e=>{te(""),se(null),Q(""),e.stopPropagation()},className:ze},{children:s.jsx(d.XMarkIcon,{className:ke})})),!I&&(!O||!ee)&&s.jsx("div",Object.assign({className:ze},{children:s.jsx(f.CaretUpDown,{className:ke})})),s.jsx(m.ComboboxContextProvider,Object.assign({value:fe},{children:s.jsx(l.FloatingPortal,{children:s.jsxs("div",Object.assign({id:T,ref:Ee,className:ie,style:{display:ye?"block":"none",opacity:ye&&!X?1:0,maxHeight:`${R}px`,minWidth:`${S}px`,maxWidth:`${ue}px`,position:ve,top:xe&&xe>0&&xe!==1/0?xe:0,left:ge||0}},Oe,{children:[0===(null==re?void 0:re.length)&&Y&&s.jsx("div",Object.assign({className:Ie},{children:"No results"})),C]}))})}))]}))}));x.displayName="Combobox";const j=Object.assign(x,{Group:o.ComboboxGroup,Option:t.ComboboxOption});module.exports=j;