"use strict";(self.webpackChunk_nl_rvo_storybook=self.webpackChunk_nl_rvo_storybook||[]).push([[6390],{"../../node_modules/.pnpm/@storybook+addon-links@7.6.17_react@18.2.0/node_modules/@storybook/addon-links/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{uM:()=>linkTo});var external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_=__webpack_require__("@storybook/core-events"),{document:chunk_6GSMXRCY_document,HTMLElement}=(__webpack_require__("../../node_modules/.pnpm/@storybook+csf@0.1.2/node_modules/@storybook/csf/dist/index.mjs"),external_STORYBOOK_MODULE_GLOBAL_.global);var chunk_6GSMXRCY_navigate=params=>external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().emit(external_STORYBOOK_MODULE_CORE_EVENTS_.SELECT_STORY,params),linkTo=(idOrTitle,nameInput)=>(...args)=>{let resolver=(args=>value=>"function"==typeof value?value(...args):value)(args),title=resolver(idOrTitle),name=!!nameInput&&resolver(nameInput);title?.match(/--/)&&!name?chunk_6GSMXRCY_navigate({storyId:title}):name&&title?chunk_6GSMXRCY_navigate({kind:title,story:name}):title?chunk_6GSMXRCY_navigate({kind:title}):name&&chunk_6GSMXRCY_navigate({story:name})},linksListener=e=>{let{target}=e;if(!(target instanceof HTMLElement))return;let element=target,{sbKind:kind,sbStory:story}=element.dataset;(kind||story)&&(e.preventDefault(),chunk_6GSMXRCY_navigate({kind,story}))},hasListener=!1,off=()=>{hasListener&&(hasListener=!1,chunk_6GSMXRCY_document.removeEventListener("click",linksListener))};(0,external_STORYBOOK_MODULE_PREVIEW_API_.makeDecorator)({name:"withLinks",parameterName:"links",wrapper:(getStory,context)=>(hasListener||(hasListener=!0,chunk_6GSMXRCY_document.addEventListener("click",linksListener)),external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel().once(external_STORYBOOK_MODULE_CORE_EVENTS_.STORY_CHANGED,off),getStory(context))})},"../../documentation/demopages/experimenteel/jongeVissers/Bijlagen.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Bijlagen_stories});var components=__webpack_require__("../../components/index.ts"),dist=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-links@7.6.17_react@18.2.0/node_modules/@storybook/addon-links/dist/index.mjs"),defaultMenuBarItemsJV=__webpack_require__("../../documentation/demopages/experimenteel/jongeVissers/defaultMenuBarItemsJV.ts"),jsx_runtime=(__webpack_require__("../../documentation/demopages/common/style.scss"),__webpack_require__("../../node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js"));const Bijlagen=()=>(0,jsx_runtime.jsxs)("div",{className:"rvo-demo-page",children:[(0,jsx_runtime.jsx)(components.Y9,{}),(0,jsx_runtime.jsxs)(components.b4,{size:"2xl",children:[(0,jsx_runtime.jsx)(components.Rj,{items:defaultMenuBarItemsJV.a,size:"lg",useIcons:!0,iconPlacement:"before",maxWidth:"md"}),(0,jsx_runtime.jsx)(components.fj,{size:"md",children:(0,jsx_runtime.jsxs)("main",{className:"rvo-progress-tracker-active",children:[(0,jsx_runtime.jsx)(components.si,{steps:[{state:"start",label:"JV 2020",link:"#",size:"md",line:"straight"},{state:"completed",label:"Controleer uw gegevens",onClick:(0,dist.uM)("Demo pagina's/Jonge Vissers/Controleer uw gegevens"),size:"md",line:"straight"},{state:"completed",label:"Correspondentie",onClick:(0,dist.uM)("Demo pagina's/Jonge Vissers/Correspondentie"),size:"md",line:"straight"},{state:"completed",label:"Datum verleningsverzoek",onClick:(0,dist.uM)("Demo pagina's/Jonge Vissers/Datum"),size:"md",line:"straight"},{state:"completed",label:"Project vragen",onClick:(0,dist.uM)("Demo pagina's/Jonge Vissers/Project"),size:"md",line:"straight"},{state:"completed",label:"Kosten",onClick:(0,dist.uM)("Demo pagina's/Jonge Vissers/Kosten"),size:"md",line:"straight"},{state:"doing",label:"Bijlagen",link:"#",size:"md",line:"straight"},{state:"incomplete",label:"Samenvatting",onClick:(0,dist.uM)("Demo pagina's/Jonge Vissers/Samenvatting"),size:"md",line:"straight"},{state:"incomplete",label:"Ondertekening",onClick:(0,dist.uM)("Demo pagina's/Jonge Vissers/Ondertekening"),size:"md",line:"straight"},{state:"end",label:"Bevestiging",link:"#",size:"md",line:"none"}]}),(0,jsx_runtime.jsx)("div",{className:"rvo-form",children:(0,jsx_runtime.jsxs)(components.b4,{size:"xl",children:[(0,jsx_runtime.jsxs)("div",{className:"rvo-form-intro",children:[(0,jsx_runtime.jsx)(components.DZ,{type:"h1",textContent:"Bijlagen"}),(0,jsx_runtime.jsxs)("ul",{children:[(0,jsx_runtime.jsxs)("li",{children:["U kunt alleen bijlagen versturen in PDF-formaat. Als u een ander type document wil versturen maakt u hier eerst een PDF van waarvoor u eventueel de gratis"," ",(0,jsx_runtime.jsx)(components.N_,{content:"PDF Creator",href:"#"})," kan gebruiken."]}),(0,jsx_runtime.jsxs)("li",{children:["Iedere bijlage mag ",(0,jsx_runtime.jsx)("strong",{children:"maximaal 25MB"})," groot zijn."]}),(0,jsx_runtime.jsx)("li",{children:"Voeg eventueel gelijksoortige bijlagen samen in een PDF, bijvoorbeeld alle offertes."}),(0,jsx_runtime.jsx)("li",{children:"Geef het PDF-bestand een logische naam."})]})]}),(0,jsx_runtime.jsx)("form",{children:(0,jsx_runtime.jsxs)(components.b4,{size:"md",children:[(0,jsx_runtime.jsxs)(components.LB,{legend:"Financiële capaciteit",children:[(0,jsx_runtime.jsx)(components.Yh,{invalid:!1,label:"Wat stuurt u mee om uw financiële capaciteit aan te tonen?",options:[{id:"fca",label:"Bewijs van het eigen vermogen"},{id:"fcb",label:"Bewijs van de lening die is toegezegd"}]}),(0,jsx_runtime.jsx)(components.Xy,{label:"Bewijs van het eigen vermogen",helperText:"Het is mogelijk meerdere bestanden te selecteren"})]}),(0,jsx_runtime.jsxs)(components.LB,{legend:"Opleiding of werkervaring",children:[(0,jsx_runtime.jsx)(components.Yh,{invalid:!1,label:"Wat stuurt u mee om uw opleiding of werkervaring aan te tonen?",options:[{id:"wea",label:"Bewijs van de opleiding"},{id:"web",label:"Bewijs dat u vijf jaar werkervaring heeft"}]}),(0,jsx_runtime.jsx)(components.Xy,{label:"Bewijs dat u vijf jaar werkervaring heeft",helperText:"Het is mogelijk meerdere bestanden te selecteren"})]}),(0,jsx_runtime.jsx)(components.LB,{legend:"",children:(0,jsx_runtime.jsx)(components.Xy,{label:"Offerte vaartuig",helperText:"Het is mogelijk meerdere bestanden te selecteren"})}),(0,jsx_runtime.jsxs)(components.LB,{legend:"Marktwaarde vissersvaartuig",children:[(0,jsx_runtime.jsx)(components.mK,{name:"vv",label:"Wat stuurt u mee om de marktwaarde van het visservaartuig aan te tonen?",options:[{id:"mwa",label:"Taxatierapport"},{id:"mwb",label:"Twee andere offertes van vergelijkbare voertuigen"}]}),(0,jsx_runtime.jsx)(components.Xy,{label:"Taxatierapport"})]}),(0,jsx_runtime.jsx)(components.LB,{legend:"Bewijs andere subsidies",children:(0,jsx_runtime.jsx)(components.Xy,{label:"U stuurt de beslissing mee van deze andere subsidies",helperText:"Heeft u nog geen beslissing ontvangen? Stuur dan een kopie van de aanvraag mee. Het is mogelijk meerdere bestanden te selecteren."})}),(0,jsx_runtime.jsx)(components.LB,{legend:"Niet verplichte bijlagen",children:(0,jsx_runtime.jsx)(components.Xy,{label:"Voeg hier de overige (niet verplichte) bijlagen toe",helperText:"Het is mogelijk meerdere bestanden te selecteren"})}),(0,jsx_runtime.jsxs)(components.e2,{children:[(0,jsx_runtime.jsx)("a",{className:"utrecht-button utrecht-button--secondary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline",onClick:(0,dist.uM)("Demo pagina's/Mijn RVO/Zaak"),children:"Opslaan en sluiten"}),(0,jsx_runtime.jsx)("a",{className:"utrecht-button utrecht-button--primary-action rvo-layout-row rvo-layout-gap--md utrecht-button--rvo-md rvo-link--no-underline",onClick:(0,dist.uM)("Demo pagina's/Jonge Vissers/Samenvatting"),children:"Opslaan en verder"})]})]})})]})})]})})]})]});Bijlagen.displayName="Bijlagen";const Bijlagen_stories={title:"Pagina's/Experimenteel/Jonge Vissers/Bijlagen",component:Bijlagen,parameters:{status:{type:"WORK IN PROGRESS"}}},Default={name:"Bijlagen"};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  name: 'Bijlagen'\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../documentation/demopages/experimenteel/jongeVissers/defaultMenuBarItemsJV.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>defaultMenuBarItemsJV});var _storybook_addon_links__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/.pnpm/@storybook+addon-links@7.6.17_react@18.2.0/node_modules/@storybook/addon-links/dist/index.mjs");const defaultMenuBarItemsJV=[{label:"Terug naar Mijn RVO",icon:"terug",link:(0,_storybook_addon_links__WEBPACK_IMPORTED_MODULE_0__.uM)("Demo pagina's/Mijn RVO/Zaak")},{label:"Uitloggen",link:(0,_storybook_addon_links__WEBPACK_IMPORTED_MODULE_0__.uM)("Demo pagina's/Mijn RVO/Inloggen"),align:"right"}]}}]);