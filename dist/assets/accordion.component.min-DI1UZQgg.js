/*!
  * iamKey v5.5.0
  * Copyright 2022-2024 iamproperty
  */window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:"customElementRegistered",element:"accordion"});class a extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const o=document.body.hasAttribute("data-assets-location")?document.body.getAttribute("data-assets-location"):"/assets",t=document.body.hasAttribute("data-core-css")?document.body.getAttribute("data-core-css"):`${o}/css/core.min.css`,e=document.createElement("template");e.innerHTML=`
    <style>
    @import "${t}";

    :host {
      margin-bottom: 2.5rem;
      display: block;
    }
    
    ::slotted(details) {
      --border-radius: 0!important;
      padding-bottom: 0!important;
    }    
    </style>
      <slot></slot>
    `,this.shadowRoot.appendChild(e.content.cloneNode(!0))}connectedCallback(){if(!this.classList.contains("accordion--keep-open")){const o=this.querySelectorAll(":scope > details");o.forEach(t=>{t.addEventListener("toggle",()=>{o.forEach(e=>{e!==t&&t.hasAttribute("open")&&e.removeAttribute("open")})})})}}}export{a as default};
