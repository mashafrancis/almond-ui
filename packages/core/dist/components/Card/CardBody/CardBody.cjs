"use strict";var e=require("tslib"),r=require("react/jsx-runtime"),s=require("../Card.context.cjs"),i=require("../../../theme/theme.context.cjs"),t=require("../../../utils/usePropId.cjs"),a=require("react"),d=require("tailwind-merge");const c=a.forwardRef(((c,u)=>{const o=i.useComponentTheme("Card"),{children:n,className:m=""}=c,l=e.__rest(c,["children","className"]),{size:h,withDivider:q}=s.useCardContext(),C=t.usePropId(c.id),j=a.useMemo((()=>d.twMerge(o.body({className:m,size:h,withDivider:q}))),[o,m,h,q]);return r.jsx("div",Object.assign({id:C,ref:u,className:j},l,{children:n}))}));c.displayName="CardBody",exports.CardBody=c;