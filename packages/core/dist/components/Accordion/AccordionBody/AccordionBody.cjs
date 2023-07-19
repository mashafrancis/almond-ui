"use strict";var e=require("tslib"),r=require("react/jsx-runtime"),c=require("../Accordion.context.cjs"),o=require("../AccordionItem/AccordionItem.context.cjs"),s=require("../../Collapse/Collapse.cjs"),i=require("../../../theme/theme.context.cjs"),t=require("react"),n=require("tailwind-merge");const d=t.forwardRef(((d,a)=>{const l=i.useComponentTheme("Accordion"),m=Object.assign({},d),{children:u,className:b=""}=m,h=e.__rest(m,["children","className"]),{activeItemAnchor:j,bordered:x,size:A}=c.useAccordionContext(),{anchor:q,bodyId:g,headerId:p}=o.useAccordionItemContext(),y=t.useMemo((()=>n.twMerge(l.body({bordered:x,className:b,size:A}))),[x,b,A,l]);return r.jsx(s,Object.assign({isOpen:q===j},{children:r.jsx("div",Object.assign({id:g,ref:a,role:"region","aria-labelledby":p,className:y},h,{children:u}))}))}));d.displayName="AccordionBody",exports.AccordionBody=d;