/*! For license information please see form-radio-button-form-radio-button-docpage-mdx.2ad95444.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[7484,6650],{"../../node_modules/.pnpm/@babel+runtime@7.24.0/node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"../../components/form-radio-button/form-radio-button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _defaultArgs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../components/form-radio-button/defaultArgs.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"Componenten/Form/Radio button",component:__webpack_require__("../../components/form-radio-button/template.tsx").a,args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,parameters:{status:{type:"WORK IN PROGRESS"},docusaurus:{link:"form-radio-button"}}},Default={args:_defaultArgs__WEBPACK_IMPORTED_MODULE_0__.D,name:"Radio button"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: defaultArgs,\n  name: 'Radio button'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../components/form-radio-button/form-radio-button.docpage.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>form_radio_button_docpage});__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js");var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"),lib=__webpack_require__("../../node_modules/.pnpm/@mdx-js+react@2.3.0_react@18.2.0/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs");var form_radio_button_stories=__webpack_require__("../../components/form-radio-button/form-radio-button.stories.tsx"),storybook_blocks=__webpack_require__("./config/storybook-blocks.tsx");function _createMdxContent(props){const _components=Object.assign({h2:"h2"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{of:form_radio_button_stories,name:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(dist.hE,{}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{of:form_radio_button_stories.Default,layout:"padded"}),"\n",(0,jsx_runtime.jsx)(dist.H2,{}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"documentatie",children:"Documentatie"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.bE,{markdown:"Een radio button zorgt ervoor dat een gebruiker een keuze kan maken uit verschillende opties.\n\n## Wanneer gebruik je een radio button?\n\nWanneer een gebruiker een keuze moet maken uit verschillende opties en het mogelijk is om slechts één optie te kiezen.\n\n## Anatomie van een radio button\n\nEen radio button bestaat uit:\n\n- Een radio button input\n- Een label\n\n## Richtlijnen\n\n- Selecteer standaard een optie. Zo weet de gebruiker dat er een optie gekozen moet worden.\n- Zorg ervoor dat de meest gebruikte optie standaard geselecteerd staat. Hierdoor hoeft een gebruiker niet extra te klikken.\n- Vermijd horizontale radio buttons. Deze zijn lastig te scannen omdat het onduidelijk is welke input bij welk label hoort.\n- Zorg ervoor dat zowel de input als de label aanklikbaar zijn. Omdat de input relatief klein is kan het voor sommige gebruikers lastig zijn deze aan te klikken.\n\n## Rijkshuisstijl\n\nDe omlijning van de radio button is zwart in plaats van donkergrijs zoals staat opgenomen in de Rijkshuisstijl om deze visueel gelijk te houden met de andere input elementen.\n\n## Bronnen\n\n- [Radio Buttons: Select One by Default or Leave All Unselected? - Kara Pernice](https://web.archive.org/web/20220808214536/https://www.nngroup.com/articles/radio-buttons-default-selection/)\n"}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"changelog",children:"Changelog"}),"\n",(0,jsx_runtime.jsx)(storybook_blocks.Lz,{markdown:"# `@nl-rvo/form-radio-button`\n\n## 1.0.0\n\n### Major Changes\n\n- daa0537: Create npm package for each component.\n\n## Pre-releases\n\n_@nl-rvo/component-library-css@1.0.0-alpha.281_:\nSimplified snippet by replacing `rvo-layout-column`, `rvo-layout-gap--md` and `rvo-layout--wrap` with `rvo-radio-button`\n\n_@nl-rvo/component-library-css@1.0.0-alpha.24_:\nAdded component\n"})]})}const form_radio_button_docpage=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.jsx)(_createMdxContent,props)})):_createMdxContent(props)}},"../../components/form-radio-button/defaultArgs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>defaultArgs});__webpack_require__("../../components/form-radio-button/template.tsx");const defaultArgs={id:"field",name:"group",label:"Label",checked:!1,hover:!1,disabled:!1,active:!1,focus:!1,invalid:!1,required:!1}},"../../components/form-radio-button/template.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>RadioButton,Uv:()=>argTypes});var clsx=__webpack_require__("../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs"),defaultArgs=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../components/form-radio-button/defaultArgs.ts")),injectStylesIntoStyleTag=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("../../node_modules/.pnpm/style-loader@3.3.4_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),form_radio_button=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/form-radio-button/index.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(form_radio_button.A,options);form_radio_button.A&&form_radio_button.A.locals&&form_radio_button.A.locals;var jsx_runtime=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js");const argTypes={id:{control:"text"},name:{control:"text"},label:{control:"text"},checked:{control:"boolean"},hover:{control:"boolean"},disabled:{control:"boolean"},active:{control:"boolean"},focus:{control:"boolean"},invalid:{control:"boolean"},required:{control:"boolean"}},RadioButton=({id=defaultArgs.D.id,name=defaultArgs.D.name,label=defaultArgs.D.label,checked=defaultArgs.D.checked,hover=defaultArgs.D.hover,disabled=defaultArgs.D.disabled,active=defaultArgs.D.active,focus=defaultArgs.D.focus,invalid=defaultArgs.D.invalid,required=defaultArgs.D.required,onChange,onUpdateGroup,...otherProps})=>(0,jsx_runtime.jsxs)("label",{className:"rvo-radio-button",htmlFor:id,children:[(0,jsx_runtime.jsx)("input",{id,name,type:"radio",checked:checked||void 0,disabled:disabled||void 0,required:required||void 0,className:(0,clsx.A)("utrecht-radio-button",checked&&"utrecht-radio-button--checked",hover&&"rvo-radio-button--hover",disabled&&"utrecht-radio-button--disabled",active&&"utrecht-radio-button--active",focus&&"utrecht-radio-button--focus-visible",invalid&&"utrecht-radio-button--invalid",required&&"utrecht-radio-button--required"),onChange:event=>{onChange?.(event),onUpdateGroup?.(event)},...otherProps}),label]});RadioButton.displayName="RadioButton";try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:{value:"defaultArgs.name"},description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:"defaultArgs.label"},description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"defaultArgs.checked"},description:"@uxpinbind onChange 0.target.checked",name:"checked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"defaultArgs.hover"},description:"@uxpinpropname Show hover",name:"hover",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"defaultArgs.active"},description:"",name:"active",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"@uxpinpropname Has focus",name:"focus",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"@uxpinpropname Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLInputElement, MouseEvent>) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: InvalidEvent<HTMLInputElement>) => void"}},onUpdateGroup:{defaultValue:null,description:"@uxpinignoreprop",name:"onUpdateGroup",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-radio-button/template.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"../../components/form-radio-button/template.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}try{template.displayName="template",template.__docgenInfo={description:"",displayName:"template",props:{id:{defaultValue:{value:"defaultArgs.id"},description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:{value:"defaultArgs.name"},description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:{value:"defaultArgs.label"},description:"",name:"label",required:!1,type:{name:"string"}},checked:{defaultValue:{value:"defaultArgs.checked"},description:"@uxpinbind onChange 0.target.checked",name:"checked",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"defaultArgs.hover"},description:"@uxpinpropname Show hover",name:"hover",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"defaultArgs.disabled"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},active:{defaultValue:{value:"defaultArgs.active"},description:"",name:"active",required:!1,type:{name:"boolean"}},focus:{defaultValue:{value:"defaultArgs.focus"},description:"@uxpinpropname Has focus",name:"focus",required:!1,type:{name:"boolean"}},invalid:{defaultValue:{value:"defaultArgs.invalid"},description:"@uxpinpropname Is invalid",name:"invalid",required:!1,type:{name:"boolean"}},required:{defaultValue:{value:"defaultArgs.required"},description:"",name:"required",required:!1,type:{name:"boolean"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => void"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(event: MouseEvent<HTMLInputElement, MouseEvent>) => void"}},onInvalid:{defaultValue:null,description:"",name:"onInvalid",required:!1,type:{name:"(event: InvalidEvent<HTMLInputElement>) => void"}},onUpdateGroup:{defaultValue:null,description:"@uxpinignoreprop",name:"onUpdateGroup",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../../components/form-radio-button/template.tsx#template"]={docgenInfo:template.__docgenInfo,name:"template",path:"../../components/form-radio-button/template.tsx#template"})}catch(__react_docgen_typescript_loader_error){}},"./config/storybook-blocks.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Lz:()=>Changelog,bE:()=>Readme});var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/.pnpm/@storybook+blocks@7.6.17_@types+react-dom@18.0.9_@types+react@18.3.7_encoding@0.1.13_react-do_4nm7brhu3gpfd2ti3glhuuidgm/node_modules/@storybook/blocks/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const headingElement=level=>2===level?"h2":3===level?"h3":4===level?"h4":5===level?"h5":6===level?"h6":"h1",MarkdownBlock=({markdown,omitH1=!1,headingLevel=1})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz,{options:{overrides:{h1:{component:omitH1?()=>null:headingElement(headingLevel)},h2:{component:headingElement(headingLevel+1)},h3:{component:headingElement(headingLevel+2)},h4:{component:headingElement(headingLevel+3)},h5:{component:headingElement(headingLevel+4)},h6:{component:headingElement(headingLevel+5)}}},children:markdown});MarkdownBlock.displayName="MarkdownBlock";const Changelog=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,headingLevel:2,markdown});Changelog.displayName="Changelog";const Readme=({markdown})=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MarkdownBlock,{omitH1:!0,markdown});Readme.displayName="Readme";try{headingElement.displayName="headingElement",headingElement.__docgenInfo={description:"",displayName:"headingElement",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#headingElement"]={docgenInfo:headingElement.__docgenInfo,name:"headingElement",path:"config/storybook-blocks.tsx#headingElement"})}catch(__react_docgen_typescript_loader_error){}try{MarkdownBlock.displayName="MarkdownBlock",MarkdownBlock.__docgenInfo={description:"",displayName:"MarkdownBlock",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}},omitH1:{defaultValue:{value:"false"},description:"",name:"omitH1",required:!1,type:{name:"boolean"}},headingLevel:{defaultValue:{value:"1"},description:"",name:"headingLevel",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#MarkdownBlock"]={docgenInfo:MarkdownBlock.__docgenInfo,name:"MarkdownBlock",path:"config/storybook-blocks.tsx#MarkdownBlock"})}catch(__react_docgen_typescript_loader_error){}try{Changelog.displayName="Changelog",Changelog.__docgenInfo={description:"",displayName:"Changelog",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Changelog"]={docgenInfo:Changelog.__docgenInfo,name:"Changelog",path:"config/storybook-blocks.tsx#Changelog"})}catch(__react_docgen_typescript_loader_error){}try{Readme.displayName="Readme",Readme.__docgenInfo={description:"",displayName:"Readme",props:{markdown:{defaultValue:null,description:"",name:"markdown",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["config/storybook-blocks.tsx#Readme"]={docgenInfo:Readme.__docgenInfo,name:"Readme",path:"config/storybook-blocks.tsx#Readme"})}catch(__react_docgen_typescript_loader_error){}},"../../node_modules/.pnpm/clsx@2.1.0/node_modules/clsx/dist/clsx.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/cjs.js!../../node_modules/.pnpm/resolve-url-loader@5.0.0/node_modules/resolve-url-loader/index.js!../../node_modules/.pnpm/sass-loader@14.1.1_sass@1.71.1_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/sass-loader/dist/cjs.js!../../components/form-radio-button/index.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/.pnpm/css-loader@6.10.0_webpack@5.90.3_@swc+core@1.3.102_@swc+helpers@0.5.13__esbuild@0.18.20_/node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_pnpm_css_loader_6_10_0_webpack_5_90_3_swc_core_1_3_102_swc_helpers_0_5_13_esbuild_0_18_20_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".rvo-layout-column{display:flex;flex-direction:column}.rvo-layout-column-inline{display:inline-flex;flex-direction:column}.rvo-layout-row,.rvo-radio-button{align-items:center;display:flex;flex-direction:row}.rvo-layout-row-inline{display:inline-flex;flex-direction:row}.rvo-layout-align-items-start{align-items:flex-start}.rvo-layout-align-items-center{align-items:center}.rvo-layout-align-items-end{align-items:flex-end}.rvo-layout-align-content-start{align-content:flex-start}.rvo-layout-align-content-center{align-content:center}.rvo-layout-align-content-end{align-content:flex-end}.rvo-layout-align-content-space-between{align-content:space-between}.rvo-layout-justify-items-start{justify-items:flex-start}.rvo-layout-justify-items-center{justify-items:center}.rvo-layout-justify-items-end{justify-items:flex-end}.rvo-layout-justify-content-start{justify-content:flex-start}.rvo-layout-justify-content-center{justify-content:center}.rvo-layout-justify-content-end{justify-content:flex-end}.rvo-layout-justify-content-space-between{justify-content:space-between}.rvo-layout--wrap{flex-wrap:wrap}.rvo-layout-gap--0{gap:0}.rvo-layout-gap--2xs{gap:var(--rvo-space-3xs)}.rvo-layout-gap--xs{gap:var(--rvo-space-2xs)}.rvo-layout-gap--sm,.rvo-radio-button{gap:var(--rvo-space-xs)}.rvo-layout-gap--md{gap:var(--rvo-space-md)}.rvo-layout-gap--lg{gap:var(--rvo-space-lg)}.rvo-layout-gap--xl{gap:var(--rvo-space-xl)}.rvo-layout-gap--2xl{gap:var(--rvo-space-2xl)}.rvo-layout-gap--3xl{gap:var(--rvo-space-3xl)}.rvo-layout-gap--4xl{gap:var(--rvo-space-4xl)}.rvo-layout-margin-horizontal--3xs{margin-inline:var(--rvo-space-3xs)}.rvo-layout-margin-horizontal--2xs{margin-inline:var(--rvo-space-2xs)}.rvo-layout-margin-horizontal--xs{margin-inline:var(--rvo-space-xs)}.rvo-layout-margin-horizontal--sm{margin-inline:var(--rvo-space-sm)}.rvo-layout-margin-horizontal--md{margin-inline:var(--rvo-space-md)}.rvo-layout-margin-horizontal--lg{margin-inline:var(--rvo-space-lg)}.rvo-layout-margin-horizontal--xl{margin-inline:var(--rvo-space-xl)}.rvo-layout-margin-horizontal--2xl{margin-inline:var(--rvo-space-2xl)}.rvo-layout-margin-horizontal--3xl{margin-inline:var(--rvo-space-3xl)}.rvo-layout-margin-horizontal--4xl{margin-inline:var(--rvo-space-4xl)}.rvo-layout-margin-vertical--3xs{margin-block:var(--rvo-space-3xs)}.rvo-layout-margin-vertical--2xs{margin-block:var(--rvo-space-2xs)}.rvo-layout-margin-vertical--xs{margin-block:var(--rvo-space-xs)}.rvo-layout-margin-vertical--sm{margin-block:var(--rvo-space-sm)}.rvo-layout-margin-vertical--md{margin-block:var(--rvo-space-md)}.rvo-layout-margin-vertical--lg{margin-block:var(--rvo-space-lg)}.rvo-layout-margin-vertical--xl{margin-block:var(--rvo-space-xl)}.rvo-layout-margin-vertical--2xl{margin-block:var(--rvo-space-2xl)}.rvo-layout-margin-vertical--3xl{margin-block:var(--rvo-space-3xl)}.rvo-layout-margin-vertical--4xl{margin-block:var(--rvo-space-4xl)}.utrecht-radio-button{align-self:flex-start;flex:24px 0 0;margin-block-end:0;margin-block-start:0;margin-inline-end:0;margin-inline-start:0}.utrecht-radio-button:checked,.utrecht-radio-button--checked{background:var(--rvo-radio-button-checked-background)}.utrecht-radio-button--disabled,.utrecht-radio-button:disabled{background:none;border-color:var(--utrecht-radio-button-disabled-border-color)}.utrecht-radio-button--disabled+.rvo-radio-button__label,.utrecht-radio-button:disabled+.rvo-radio-button__label{color:var(--rvo-radio-button-label-disabled-color)}.utrecht-radio-button:not(:disabled,[aria-disabled=true],.utrecht-radio-button--disabled,.utrecht-radio-button--invalid).utrecht-radio-button:hover,.utrecht-radio-button:not(:disabled,[aria-disabled=true],.utrecht-radio-button--disabled,.utrecht-radio-button--invalid).rvo-radio-button--hover,.utrecht-radio-button:not(:disabled,[aria-disabled=true],.utrecht-radio-button--disabled,.utrecht-radio-button--invalid)+.rvo-radio-button__label:hover{border-color:var(--rvo-radio-button-hover-border-color)}.utrecht-radio-button:not(:disabled,[aria-disabled=true],.utrecht-radio-button--disabled,.utrecht-radio-button--invalid):focus,.utrecht-radio-button:not(:disabled,[aria-disabled=true],.utrecht-radio-button--disabled,.utrecht-radio-button--invalid):focus-visible,.utrecht-radio-button:not(:disabled,[aria-disabled=true],.utrecht-radio-button--disabled,.utrecht-radio-button--invalid).utrecht-radio-button--focus-visible{outline-color:var(--utrecht-focus-outline-color);outline-offset:var(--utrecht-focus-outline-offset);outline-style:var(--utrecht-focus-outline-style);outline-width:var(--utrecht-focus-outline-width)}","",{version:3,sources:["webpack://./../../components/layout-flow/index.scss","webpack://./../../components/form-radio-button/index.scss"],names:[],mappings:"AAAA,mBACE,YAAA,CACA,qBAAA,CAGF,0BACE,mBAAA,CACA,qBAAA,CAGF,kCACE,kBAAA,CACA,YAAA,CACA,kBAAA,CAGF,uBACE,mBAAA,CACA,kBAAA,CAGF,8BACE,sBAAA,CAGF,+BACE,kBAAA,CAGF,4BACE,oBAAA,CAGF,gCACE,wBAAA,CAGF,iCACE,oBAAA,CAGF,8BACE,sBAAA,CAGF,wCACE,2BAAA,CAGF,gCACE,wBAAA,CAGF,iCACE,oBAAA,CAGF,8BACE,sBAAA,CAGF,kCACE,0BAAA,CAGF,mCACE,sBAAA,CAGF,gCACE,wBAAA,CAGF,0CACE,6BAAA,CAGF,kBACE,cAAA,CAGF,mBACE,KAAA,CAGF,qBACE,wBAAA,CAGF,oBACE,wBAAA,CAGF,sCACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,oBACE,uBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAGF,qBACE,wBAAA,CAKF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,kCACE,iCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAGF,mCACE,kCAAA,CAKF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,gCACE,gCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CAGF,iCACE,iCAAA,CC3LF,sBACE,qBAAA,CACA,aAAA,CACA,kBAAA,CACA,oBAAA,CACA,mBAAA,CACA,qBAAA,CAGF,6DAEE,qDAAA,CAIF,+DAEE,eAAA,CACA,8DAAA,CACA,iHACE,kDAAA,CAWF,6bAGE,uDAAA,CAIF,maAGE,gDAAA,CACA,kDAAA,CACA,gDAAA,CACA,gDAAA",sourcesContent:[".rvo-layout-column {\n  display: flex;\n  flex-direction: column;\n}\n\n.rvo-layout-column-inline {\n  display: inline-flex;\n  flex-direction: column;\n}\n\n.rvo-layout-row {\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n}\n\n.rvo-layout-row-inline {\n  display: inline-flex;\n  flex-direction: row;\n}\n\n.rvo-layout-align-items-start {\n  align-items: flex-start;\n}\n\n.rvo-layout-align-items-center {\n  align-items: center;\n}\n\n.rvo-layout-align-items-end {\n  align-items: flex-end;\n}\n\n.rvo-layout-align-content-start {\n  align-content: flex-start;\n}\n\n.rvo-layout-align-content-center {\n  align-content: center;\n}\n\n.rvo-layout-align-content-end {\n  align-content: flex-end;\n}\n\n.rvo-layout-align-content-space-between {\n  align-content: space-between;\n}\n\n.rvo-layout-justify-items-start {\n  justify-items: flex-start;\n}\n\n.rvo-layout-justify-items-center {\n  justify-items: center;\n}\n\n.rvo-layout-justify-items-end {\n  justify-items: flex-end;\n}\n\n.rvo-layout-justify-content-start {\n  justify-content: flex-start;\n}\n\n.rvo-layout-justify-content-center {\n  justify-content: center;\n}\n\n.rvo-layout-justify-content-end {\n  justify-content: flex-end;\n}\n\n.rvo-layout-justify-content-space-between {\n  justify-content: space-between;\n}\n\n.rvo-layout--wrap {\n  flex-wrap: wrap;\n}\n\n.rvo-layout-gap--0 {\n  gap: 0;\n}\n\n.rvo-layout-gap--2xs {\n  gap: var(--rvo-space-3xs);\n}\n\n.rvo-layout-gap--xs {\n  gap: var(--rvo-space-2xs);\n}\n\n.rvo-layout-gap--sm {\n  gap: var(--rvo-space-xs);\n}\n\n.rvo-layout-gap--md {\n  gap: var(--rvo-space-md);\n}\n\n.rvo-layout-gap--lg {\n  gap: var(--rvo-space-lg);\n}\n\n.rvo-layout-gap--xl {\n  gap: var(--rvo-space-xl);\n}\n\n.rvo-layout-gap--2xl {\n  gap: var(--rvo-space-2xl);\n}\n\n.rvo-layout-gap--3xl {\n  gap: var(--rvo-space-3xl);\n}\n\n.rvo-layout-gap--4xl {\n  gap: var(--rvo-space-4xl);\n}\n\n// Horizontal margin\n\n.rvo-layout-margin-horizontal--3xs {\n  margin-inline: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-horizontal--2xs {\n  margin-inline: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-horizontal--xs {\n  margin-inline: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-horizontal--sm {\n  margin-inline: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-horizontal--md {\n  margin-inline: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-horizontal--lg {\n  margin-inline: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-horizontal--xl {\n  margin-inline: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-horizontal--2xl {\n  margin-inline: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-horizontal--3xl {\n  margin-inline: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-horizontal--4xl {\n  margin-inline: var(--rvo-space-4xl);\n}\n\n// Vertical margin\n\n.rvo-layout-margin-vertical--3xs {\n  margin-block: var(--rvo-space-3xs);\n}\n\n.rvo-layout-margin-vertical--2xs {\n  margin-block: var(--rvo-space-2xs);\n}\n\n.rvo-layout-margin-vertical--xs {\n  margin-block: var(--rvo-space-xs);\n}\n\n.rvo-layout-margin-vertical--sm {\n  margin-block: var(--rvo-space-sm);\n}\n\n.rvo-layout-margin-vertical--md {\n  margin-block: var(--rvo-space-md);\n}\n\n.rvo-layout-margin-vertical--lg {\n  margin-block: var(--rvo-space-lg);\n}\n\n.rvo-layout-margin-vertical--xl {\n  margin-block: var(--rvo-space-xl);\n}\n\n.rvo-layout-margin-vertical--2xl {\n  margin-block: var(--rvo-space-2xl);\n}\n\n.rvo-layout-margin-vertical--3xl {\n  margin-block: var(--rvo-space-3xl);\n}\n\n.rvo-layout-margin-vertical--4xl {\n  margin-block: var(--rvo-space-4xl);\n}\n",'/* stylelint-disable no-descending-specificity */\n\n/**\n * @license EUPL-1.2\n * Copyright (c) 2021 Community for NL Design System\n */\n\n@import "../layout-flow/index";\n\n.rvo-radio-button {\n  @extend .rvo-layout-row;\n  @extend .rvo-layout-gap--sm;\n}\n\n// Overrides\n.utrecht-radio-button {\n  align-self: flex-start;\n  flex: 24px 0 0;\n  margin-block-end: 0;\n  margin-block-start: 0;\n  margin-inline-end: 0;\n  margin-inline-start: 0;\n}\n\n.utrecht-radio-button:checked,\n.utrecht-radio-button--checked {\n  background: var(--rvo-radio-button-checked-background);\n}\n\n// Disabled state\n.utrecht-radio-button--disabled,\n.utrecht-radio-button:disabled {\n  background: none;\n  border-color: var(--utrecht-radio-button-disabled-border-color);\n  + .rvo-radio-button__label {\n    color: var(--rvo-radio-button-label-disabled-color);\n  }\n}\n\n.utrecht-radio-button:not(\n    :disabled,\n    [aria-disabled="true"],\n    .utrecht-radio-button--disabled,\n    .utrecht-radio-button--invalid\n  ) {\n  // Hover state\n  &.utrecht-radio-button:hover,\n  &.rvo-radio-button--hover,\n  + .rvo-radio-button__label:hover {\n    border-color: var(--rvo-radio-button-hover-border-color);\n  }\n\n  // Focus state\n  &:focus,\n  &:focus-visible,\n  &.utrecht-radio-button--focus-visible {\n    outline-color: var(--utrecht-focus-outline-color);\n    outline-offset: var(--utrecht-focus-outline-offset);\n    outline-style: var(--utrecht-focus-outline-style);\n    outline-width: var(--utrecht-focus-outline-width);\n  }\n}\n'],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="../../node_modules/.pnpm/memoizerific@1.11.3/node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);