"use strict";var e=require("tslib"),r=require("react/jsx-runtime"),s=require("../Table.context.cjs"),t=require("../../../theme/theme.context.cjs"),i=require("../../../utils/usePropId.cjs"),o=require("react");const a={},c=o.forwardRef(((o,c)=>{const d=Object.assign(Object.assign({},a),o),{className:n,children:l}=d,u=e.__rest(d,["className","children"]),{borderStyle:b,horizontalBorders:m,size:h}=s.useTableContext(),j=t.useComponentTheme("Table"),y=i.usePropId(o.id);return r.jsx("tbody",Object.assign({id:y,ref:c,className:j.tbody({borderStyle:b,horizontalBorders:m,size:h})},u,{children:l}))}));c.displayName="Tbody",exports.Tbody=c;