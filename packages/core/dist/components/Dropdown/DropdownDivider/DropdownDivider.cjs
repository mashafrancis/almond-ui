"use strict";var e=require("react/jsx-runtime"),r=require("../../../theme/theme.context.cjs"),s=require("../../../utils/usePropId.cjs");exports.DropdownDivider=o=>{const t=r.useComponentTheme("Dropdown"),{color:i="gray",className:c=""}=o,u=s.usePropId(o.id);return e.jsx("hr",{id:u,className:t.divider({color:i,className:c})})};
