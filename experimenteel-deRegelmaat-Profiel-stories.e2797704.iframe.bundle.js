"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[3290],{"../../node_modules/.pnpm/@storybook+addon-links@7.6.17_react@18.2.0/node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uM:()=>linkTo});var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),{document:chunk_6GSMXRCY_document,HTMLElement}=(__webpack_require__("../../node_modules/.pnpm/@storybook+csf@0.1.2/node_modules/@storybook/csf/dist/index.mjs"),external_STORYBOOK_MODULE_GLOBAL_.global);var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),linkTo=(idOrTitle,nameInput)=>(...args)=>{let resolver=(args=>value=>"function"==typeof value?value(...args):value)(args),title=resolver(idOrTitle),name=!!nameInput&&resolver(nameInput);title?.match(/--/)&&!name?chunk_6GSMXRCY_navigate({storyId:title}):name&&title?chunk_6GSMXRCY_navigate({kind:title,story:name}):title?chunk_6GSMXRCY_navigate({kind:title}):name&&chunk_6GSMXRCY_navigate({story:name})},linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener))};(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener)),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))})},"../../documentation/demopages/experimenteel/deRegelmaat/Profiel.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Profiel_stories});var components=__webpack_require__("../../components/index.ts"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-links@7.6.17_react@18.2.0/node_modules/@storybook/addon-links/dist/index.mjs"),jsx_runtime=(__webpack_require__("../../documentation/demopages/common/style.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Profiel=()=>(0,jsx_runtime.jsx)("div",{className:"rvo-demo-page rvo-demo-page--regelmaat",children:(0,jsx_runtime.jsx)("div",{className:"rvo-app rvo-app--profiel",children:(0,jsx_runtime.jsx)("div",{className:"rvo-app-container rvo-app-container--profiel",children:(0,jsx_runtime.jsxs)("div",{className:"rvo-app-content",children:[(0,jsx_runtime.jsx)(components.DZ,{type:"h1",children:"Profiel"}),(0,jsx_runtime.jsx)("p",{children:"Vul je profiel in om maatregelen te krijgen die voor jou van toepassing kunnen zijn."})," ",(0,jsx_runtime.jsxs)(components.LB,{legend:"",children:[(0,jsx_runtime.jsx)(components.zM,{label:"Waar zit je onderneming?",options:[{value:"1",label:"Noordelijk kleigebied"},{value:"2",label:"Noordelijk weidegebied - veen"},{value:"3",label:"Noordelijk weidegebied - zand"},{value:"4",label:"Veenkoloniën"},{value:"5",label:"Oostelijk veehouderijgebied"},{value:"6",label:"Centraal veehouderijgebied"},{value:"7",label:"IJsselmeerpolders"},{value:"8",label:"Westelijk Holland"},{value:"9",label:"Waterland en Droogmakerijen"},{value:"10",label:"Hollands Utrechts weidegebied"},{value:"11",label:"Zuidwestelijk akkerbouwgebied"},{value:"12",label:"Zuidwest-Brabant"},{value:"13",label:"Rivierengebied"},{value:"14",label:"Zuidelijk veehouderijgebied"},{value:"15",label:"Zuid-Limburg"}]}),(0,jsx_runtime.jsx)(components.zM,{label:"Soort onderneming",options:[{value:"1",label:"Akkerbouwbedrijf"},{value:"2",label:"Melkveehouderij"},{value:"3",label:"Fruitteler"},{value:"4",label:"Intensieve veeteelt"},{value:"5",label:"Gemengd"}]})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-inputs",children:[(0,jsx_runtime.jsx)("label",{className:"utrecht-form-label",children:"Grondgebruik"}),(0,jsx_runtime.jsxs)("details",{className:"rvo-short-inputs-details",children:[(0,jsx_runtime.jsxs)("summary",{children:[(0,jsx_runtime.jsx)(components.In,{icon:"delta-naar-rechts",size:"sm"}),"Grasland"]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha blijvend grasland"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha tijdelijk grasland"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha grasland totaal"})]})]}),(0,jsx_runtime.jsxs)("details",{className:"rvo-short-inputs-details",children:[(0,jsx_runtime.jsxs)("summary",{children:[(0,jsx_runtime.jsx)(components.In,{icon:"delta-naar-rechts",size:"sm"}),"Bouwland"]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha klei"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha zand"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha loss"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha veen"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha bouwland totaal"})]})]}),(0,jsx_runtime.jsxs)("details",{className:"rvo-short-inputs-details",children:[(0,jsx_runtime.jsxs)("summary",{children:[(0,jsx_runtime.jsx)(components.In,{icon:"delta-naar-rechts",size:"sm"}),"Overig land"]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha heg, haag, struweel"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha overige houtige elementen"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha sloten en poelen"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha braak"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"ha overig land totaal"})]})]})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-inputs",children:[(0,jsx_runtime.jsx)("label",{className:"utrecht-form-label",children:"Dieren"}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"# melkvee"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"# varkens"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"# vleesvee"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"# jongvee"})]}),(0,jsx_runtime.jsxs)("div",{className:"rvo-short-input",children:[(0,jsx_runtime.jsx)("input",{pattern:"[0-9]*",type:"text",className:"utrecht-textbox utrecht-textbox--html-input",inputMode:"numeric"}),(0,jsx_runtime.jsx)("label",{children:"# overige graasdieren"})]})]}),(0,jsx_runtime.jsx)("div",{className:"rvo-short-inputs",children:(0,jsx_runtime.jsx)(components.Yh,{label:"Overige gegevens",invalid:!1,options:[{id:"optionA-cb",label:"Vroeg oogsten"},{id:"optionB-cb",label:"Inproductieve stukken land"},{id:"optionC-cb",label:"Drogere grond"}]})}),(0,jsx_runtime.jsxs)(components.e2,{children:[(0,jsx_runtime.jsx)("a",{onClick:(0,dist.uM)("Demo pagina's/de Regelmaat/Maatregelen"),className:"utrecht-button utrecht-button--rvo-tertiary-action utrecht-button--rvo-sm"}),(0,jsx_runtime.jsx)("a",{onClick:(0,dist.uM)("Demo pagina's/de Regelmaat/Maatregelen"),className:"utrecht-button utrecht-button--primary-action utrecht-button--rvo-md",children:"Opslaan"})]}),(0,jsx_runtime.jsxs)("ul",{className:"rvo-app-menu",children:[(0,jsx_runtime.jsx)("li",{className:"rvo-app-menu-item",children:(0,jsx_runtime.jsxs)("a",{onClick:(0,dist.uM)("Demo pagina's/de Regelmaat/Zoeken"),className:"rvo-app-menu-item-link",children:[(0,jsx_runtime.jsx)(components.In,{icon:"zoek",color:"hemelblauw",size:"2xl"}),"Zoeken"]})}),(0,jsx_runtime.jsx)("li",{className:"rvo-app-menu-item",children:(0,jsx_runtime.jsxs)("a",{onClick:(0,dist.uM)("Demo pagina's/de Regelmaat/Bewaard"),className:"rvo-app-menu-item-link",children:[(0,jsx_runtime.jsx)(components.In,{icon:"favoriet",color:"hemelblauw",size:"2xl"}),"Bewaard"]})}),(0,jsx_runtime.jsx)("li",{className:"rvo-app-menu-item",children:(0,jsx_runtime.jsxs)("a",{onClick:(0,dist.uM)("Demo pagina's/de Regelmaat/Maatregelen"),className:"rvo-app-menu-item-link",children:[(0,jsx_runtime.jsx)(components.In,{icon:"plus",color:"hemelblauw",size:"2xl"}),"Suggesties"]})}),(0,jsx_runtime.jsx)("li",{className:"rvo-app-menu-item",children:(0,jsx_runtime.jsxs)("a",{onClick:(0,dist.uM)("Demo pagina's/de Regelmaat/Profiel"),className:"rvo-app-menu-item-link rvo-app-menu-item-link--active",children:[(0,jsx_runtime.jsx)(components.In,{icon:"user",color:"wit",size:"2xl"}),"Profiel"]})})]})]})})})});Profiel.displayName="Profiel";const Profiel_stories={title:"Pagina's/Experimenteel/de Regelmaat/Profiel",component:Profiel,parameters:{status:{type:"WORK IN PROGRESS"},viewport:{defaultViewport:"mobile2"}}},Default={name:"Profiel"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'Profiel'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);