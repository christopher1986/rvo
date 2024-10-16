/*! For license information please see pagination-pagination-docpage-mdx.59875faf.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[2530,2900],{"../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/pagination/pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/pagination/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Pagination",component:__webpack_require__("../../components/pagination/template.tsx").dK,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"pagination"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Pagination"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Pagination'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/pagination/pagination.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>pagination_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs");var pagination_stories=__webpack_require__("../../components/pagination/pagination.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:pagination_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:pagination_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:"Gebruik ellipsen (…) om eventuele overgeslagen pagina's te vervangen. Bijvoorbeeld:\n\n[1] 2 … 10\n\n1 [2] 3 … 100\n\n1 2 [3] 4 … 100\n\n1 2 3 [4] 5 … 100\n\n1 … 4 [5] 6 … 100\n\n1 … 97 [98] 99 100\n\n1 … 98 [99] 100\n\n1 … 99 [100]\n\nDe functie voor deze logica kan als volgt worden geschreven:\n\n```js\nconst generatePageNumberMarkup = () => \"\";\nconst generateEllipsisMarkup = () => \"\";\n\nconst generatePageNumbers = (totalPages, activePage) => {\n  const pages = [];\n\n  // Always add the first page\n  pages.push(generatePageNumberMarkup(1, activePage));\n\n  // Add ellipses if the active page is more than 4\n  if (activePage > 4) {\n    pages.push(generateEllipsisMarkup());\n  }\n  if (activePage === 4) {\n    pages.push(generatePageNumberMarkup(2, activePage));\n  }\n\n  // Add the page before the active page if it's more than 2\n  if (activePage > 2) {\n    pages.push(generatePageNumberMarkup(activePage - 1, activePage));\n  }\n\n  // Add the active page if it's not the first or last page\n  if (activePage > 1 && activePage < totalPages) {\n    pages.push(generatePageNumberMarkup(activePage, activePage));\n  }\n\n  // Add the page after the active page if it's less than total pages minus 1 and not the last page\n  if (activePage < totalPages - 1 && activePage !== totalPages - 2) {\n    pages.push(generatePageNumberMarkup(activePage + 1, activePage));\n  }\n\n  // Add ellipses if the active page is less than the total pages minus 3\n  if (activePage < totalPages - 3) {\n    pages.push(generateEllipsisMarkup());\n  }\n\n  // Add the second last page if the active page is less than the total pages minus 1 and greater than or equal to total pages minus 3\n  if (activePage < totalPages - 1 && activePage >= totalPages - 3) {\n    pages.push(generatePageNumberMarkup(totalPages - 1, activePage));\n  }\n\n  // Always add the last page\n  if (totalPages !== 1) {\n    pages.push(generatePageNumberMarkup(totalPages, activePage));\n  }\n\n  return pages;\n};\n\ngeneratePageNumbers(5, 30);\n```\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:"# `@nl-rvo/pagination`\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.381_:\nAdded component\n"})]})}const pagination_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/pagination/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/pagination/template.tsx");const defaultArgs={numberOfPages:30,activePage:10}},"../../components/pagination/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{dK:()=>Pagination});var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),react=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),defaultArgs=__webpack_require__("../../components/pagination/defaultArgs.ts"),link_template=__webpack_require__("../../components/link/template.tsx"),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),pagination=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/pagination/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(pagination.A,options);pagination.A&&pagination.A.locals&&pagination.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const generatePageNumber=(pageNumber,active,onPageChange)=>(0,jsx_runtime.jsx)("li",{className:(0,clsx.A)("rvo-pagination__item",active===pageNumber&&"rvo-pagination__item--active"),children:(0,jsx_runtime.jsx)(link_template.Ay,{href:"#",onClick:e=>{e.preventDefault(),onPageChange?.(pageNumber)},children:pageNumber})},pageNumber);generatePageNumber.displayName="generatePageNumber";const generateEllipses=key=>(0,jsx_runtime.jsx)("li",{className:"rvo-pagination__item rvo-pagination__item--ellipses",children:"..."},key);generateEllipses.displayName="generateEllipses";const Pagination=({numberOfPages=defaultArgs.D.numberOfPages,activePage=defaultArgs.D.activePage,onChange})=>{const[internalActivePage,setInternalActivePage]=(0,react.useState)(activePage);if((0,react.useEffect)((()=>{setInternalActivePage(activePage)}),[activePage]),!numberOfPages||!internalActivePage||numberOfPages<1||internalActivePage<1||internalActivePage>numberOfPages)return null;const handlePageChange=newPage=>{setInternalActivePage(newPage),onChange?.(newPage)},pageNumbers=(0,react.useMemo)((()=>((totalPages,activePage,onChange)=>{const pages=[];return pages.push(generatePageNumber(1,activePage,onChange)),activePage>4&&pages.push(generateEllipses("ellipses-1")),4===activePage&&pages.push(generatePageNumber(2,activePage,onChange)),activePage>2&&pages.push(generatePageNumber(activePage-1,activePage,onChange)),activePage>1&&activePage<totalPages&&pages.push(generatePageNumber(activePage,activePage,onChange)),activePage<totalPages-1&&activePage!==totalPages-2&&pages.push(generatePageNumber(activePage+1,activePage,onChange)),activePage<totalPages-3&&pages.push(generateEllipses("ellipses-2")),activePage<totalPages-1&&activePage>=totalPages-3&&pages.push(generatePageNumber(totalPages-1,activePage,onChange)),1!==totalPages&&pages.push(generatePageNumber(totalPages,activePage,onChange)),pages})(numberOfPages,internalActivePage,handlePageChange)),[numberOfPages,internalActivePage,handlePageChange]);return(0,jsx_runtime.jsxs)("nav",{className:"rvo-pagination",children:[numberOfPages>1&&internalActivePage>1&&(0,jsx_runtime.jsx)("div",{className:"rvo-pagination__prev",children:(0,jsx_runtime.jsx)(link_template.Ay,{href:"#",showIcon:"before",icon:"delta-naar-links","aria-label":"Delta naar links",onClick:()=>handlePageChange(internalActivePage-1),children:"Vorige"})}),(0,jsx_runtime.jsx)("ul",{className:"rvo-pagination__list",children:pageNumbers}),numberOfPages>1&&internalActivePage<numberOfPages&&(0,jsx_runtime.jsx)("div",{className:"rvo-pagination__next",children:(0,jsx_runtime.jsx)(link_template.Ay,{href:"#",showIcon:"after",icon:"delta-naar-rechts","aria-label":"Delta naar rechts",onClick:()=>handlePageChange(internalActivePage+1),children:"Volgende"})})]})};Pagination.displayName="Pagination";try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"",displayName:"Pagination",props:{numberOfPages:{defaultValue:{value:"defaultArgs.numberOfPages"},description:"",name:"numberOfPages",required:!1,type:{name:"number"}},activePage:{defaultValue:{value:"defaultArgs.activePage"},description:"@uxpinbind onChange 0",name:"activePage",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(currentPage: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/pagination/template.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"../../components/pagination/template.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{numberOfPages:{defaultValue:{value:"defaultArgs.numberOfPages"},description:"",name:"numberOfPages",required:!1,type:{name:"number"}},activePage:{defaultValue:{value:"defaultArgs.activePage"},description:"@uxpinbind onChange 0",name:"activePage",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(currentPage: number) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/pagination/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/pagination/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/pagination/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-pagination{display:flex;flex-wrap:wrap;gap:var(--rvo-pagination-gap);justify-content:center}@media(min-width: 780px){.rvo-pagination{justify-content:flex-start}}.rvo-pagination__list{display:flex;gap:var(--rvo-pagination-gap);margin-block-end:var(--rvo-pagination-list-margin-block-end);margin-block-start:var(--rvo-pagination-list-margin-block-start);padding-inline-end:var(--rvo-pagination-list-padding-inline-end);padding-inline-start:var(--rvo-pagination-list-padding-inline-start)}.rvo-pagination__item{list-style:none}.rvo-pagination__item .rvo-link{font-weight:var(--rvo-font-weight-regular)}.rvo-pagination__item.rvo-pagination__item--active{font-weight:var(--rvo-font-weight-bold)}","",{version:3,sources:["webpack://./../../components/pagination/index.scss"],names:[],mappings:"AAIA,gBACE,YAAA,CACA,cAAA,CACA,6BAAA,CACA,sBAAA,CAEA,yBANF,gBAOI,0BAAA,CAAA,CAIJ,sBACE,YAAA,CACA,6BAAA,CACA,4DAAA,CACA,gEAAA,CACA,gEAAA,CACA,oEAAA,CAGF,sBACE,eAAA,CAEA,gCACE,0CAAA,CAGF,mDACE,uCAAA",sourcesContent:["/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n.rvo-pagination {\n  display: flex;\n  flex-wrap: wrap;\n  gap: var(--rvo-pagination-gap);\n  justify-content: center;\n\n  @media (min-width: 780px) {\n    justify-content: flex-start;\n  }\n}\n\n.rvo-pagination__list {\n  display: flex;\n  gap: var(--rvo-pagination-gap);\n  margin-block-end: var(--rvo-pagination-list-margin-block-end);\n  margin-block-start: var(--rvo-pagination-list-margin-block-start);\n  padding-inline-end: var(--rvo-pagination-list-padding-inline-end);\n  padding-inline-start: var(--rvo-pagination-list-padding-inline-start);\n}\n\n.rvo-pagination__item {\n  list-style: none;\n\n  .rvo-link {\n    font-weight: var(--rvo-font-weight-regular);\n  }\n\n  &.rvo-pagination__item--active {\n    font-weight: var(--rvo-font-weight-bold);\n  }\n}\n"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);