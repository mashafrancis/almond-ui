"use strict";var e=require("class-variance-authority");const r=e.cva(["w-full","overflow-auto","border-collapse"],{variants:{borderStyle:{dashed:["border-dashed"],solid:["border-solid"]},outerBorders:{true:["border","border-gray-200"],false:[]},radius:{none:["rounded-none"],sm:["rounded-sm"],base:["rounded"],md:["rounded-md"],lg:["rounded-lg"]}}}),a=e.cva(["table-auto","w-full","overflow-hidden","bg-white"],{variants:{radius:{none:[],sm:[],base:[],md:[],lg:[]},size:{sm:["text-sm"],md:["text-base"],lg:["text-lg"]}}}),t=e.cva([],{variants:{borderStyle:{dashed:["border-dashed"],solid:["border-solid"]},size:{sm:["text-xs"],md:["text-sm"],lg:["text-base"]},headerBorders:{true:["border-b","border-gray-300/75"],false:[]},headerColor:{white:["text-gray-700","bg-white"],gray:["text-gray-700","bg-gray-100/75"],dark:["text-white","bg-gray-800"],black:["text-white","bg-black"]}}}),o={wrapper:r,table:a,tbody:e.cva(["font-normal","text-gray-600"],{variants:{borderStyle:{dashed:["divide-dashed"],solid:["divide-solid"]},size:{sm:["text-sm"],md:["text-base"],lg:["text-lg"]},horizontalBorders:{true:["divide-y","divide-gray-200"]}}}),tfoot:e.cva(["text-gray-700"],{variants:{borderStyle:{dashed:["border-dashed"],solid:["border-solid"]},size:{sm:["text-xs"],md:["text-sm"],lg:["text-base"]},footerBorders:{true:["border-t","border-gray-300/75"],false:[]}}}),thead:t,tr:e.cva([],{variants:{borderStyle:{dashed:["divide-dashed"],solid:["divide-solid"]},verticalBorders:{true:["divide-x","divide-gray-200"],false:[]},hoverable:{true:[],false:[]},striped:{true:[],false:[]},stripePosition:{even:[],odd:[]},color:{none:[],white:["bg-white"],blue:["bg-blue-50","text-blue-800"],red:["bg-red-50","text-red-800"],green:["bg-green-50","text-green-800"],yellow:["bg-yellow-50","text-yellow-800"],purple:["bg-purple-50","text-purple-800"],gray:["bg-gray-50","text-gray-800"],dark:["bg-gray-600","text-white"],black:["bg-gray-900","text-white"]}},compoundVariants:[{color:"none",stripePosition:"even",striped:!0,className:["even:bg-gray-50"]},{color:"none",stripePosition:"odd",striped:!0,className:["odd:bg-gray-50"]},{color:["none","white"],hoverable:!0,className:["hover:bg-gray-100"]},{color:"blue",hoverable:!0,className:["hover:bg-blue-100"]},{color:"red",hoverable:!0,className:["hover:bg-red-100"]},{color:"green",hoverable:!0,className:["hover:bg-green-100"]},{color:"yellow",hoverable:!0,className:["hover:bg-yellow-100"]},{color:"purple",hoverable:!0,className:["hover:bg-purple-100"]},{color:"gray",hoverable:!0,className:["hover:bg-gray-100"]},{color:"dark",hoverable:!0,className:["hover:bg-gray-700"]},{color:"black",hoverable:!0,className:["hover:bg-black"]}]}),td:e.cva(["[&[align=center]]:text-center","[&[align=right]]:text-right"],{variants:{size:{sm:["p-1"],md:["p-2"],lg:["p-2.5"]}}}),th:e.cva(["font-medium","[&[align=center]]:text-center","[&[align=right]]:text-right"],{variants:{size:{sm:["p-1"],md:["p-2"],lg:["p-2.5"]}}})};exports.tableStyles=o;