"use strict";var e=require("react");exports.useFocusTrap=function(t=!0){const r=e.useRef(null);return e.useEffect((()=>{if(!t)return;const e=e=>{var t,n;if("Tab"===e.key&&r.current){e.preventDefault();const u=Array.from(null===(t=r.current)||void 0===t?void 0:t.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'));if(!u.length)return;null===(n=((e,t)=>{const r=t?e-1:e+1;return r<0||r>=u.length?t?u[u.length-1]:u[0]:u[r]})(u.indexOf(document.activeElement),e.shiftKey))||void 0===n||n.focus()}};return document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[t]),e.useCallback((e=>{if(t)return r.current||(r.current=e),r.current&&r.current.focus(),r}),[t])};