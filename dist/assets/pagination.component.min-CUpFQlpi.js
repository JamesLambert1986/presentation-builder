/*!
  * iamKey v5.5.0
  * Copyright 2022-2024 iamproperty
  */class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"});const i=document.body.hasAttribute("data-assets-location")?document.body.getAttribute("data-assets-location"):"/assets",t=document.body.hasAttribute("data-core-css")?document.body.getAttribute("data-core-css"):`${i}/css/core.min.css`,e=document.createElement("template");e.innerHTML=`
    <style>
    @import "${t}";
    :host{container-type:inline-size;display:block}.pagination{display:block}@container (width > 23.4375em){.pagination{display:flex;align-items:center;justify-content:space-between !important;padding-top:2rem}}.pagination>div{display:flex;align-items:center}.pagination div:is(.page-jump,.per-page){border:1px solid var(--colour-light);height:3.25rem;display:none;align-items:center;padding-inline:1rem}.pagination div:is(.page-jump,.per-page) .select--minimal{height:3.25rem;line-height:3.25rem;margin-left:-1rem;padding-left:1rem;font-weight:bold}.pagination div:is(.page-jump,.per-page) div:has(>select){margin-bottom:0}.page-jump{border-right:none !important}.total-pages{white-space:nowrap}:host([data-page-jump][data-minimal]) .page-jump{display:flex !important}@container (width > 23.4375em){:host([data-page-jump]) .page-jump{display:flex !important}}@container (width > 23.4375em){:host([data-per-page]:not([data-page-jump][data-item-count])) .per-page{display:flex !important}}@container (width > 48em){:host([data-per-page][data-page-jump][data-item-count]) .per-page{display:flex !important}}.pagination>.item-count{display:block;text-align:center;margin-bottom:1rem;margin-inline:auto}@container (width > 23.4375em){.pagination>.item-count{display:none}:host([data-item-count]) .pagination>.item-count{display:flex !important;margin:0}}*:where(.prev,.next){border:1px solid var(--colour-light);line-height:3.25rem;height:3.25rem;margin:0;display:none;background:none;padding-inline:1rem}@container (width > 23.4375em){*:where(.prev,.next){display:inline-block}}*:where(.prev,.next):after{margin-left:.5em;font-size:.8rem;content:"";font-family:"Font Awesome 6 Pro";color:var(--colour-info)}*:where(.prev,.next):is(:hover,:focus):not(:disabled){background-color:var(--colour-light)}*:where(.prev,.next):is(:active):not(:disabled){background-color:#e0e0e0}@media screen and (prefers-color-scheme: dark){*:where(.prev,.next):is(:hover,:focus):not(:disabled){background-color:var(--colour-canvas)}*:where(.prev,.next):is(:active):not(:disabled){background-color:var(--colour-canvas)}}*:where(.prev,.next):disabled:after,*:where(.prev,.next):disabled:before{color:inherit !important}:host([data-minimal]) .pagination{justify-content:flex-end}@container (width > 23.4375em){:host([data-minimal]) .pagination{justify-content:space-between}}:host([data-minimal]) *:where(.prev,.next){display:inline-block !important}.prev{border-right:none}.prev:after{display:none}.prev:before{margin-right:.5em;font-size:.8rem;content:"";font-family:"Font Awesome 6 Pro";color:var(--colour-info)}.mobile-controls{display:block}:host([data-minimal]) .pagination{padding-top:1.5rem;display:flex;align-items:center;justify-content:flex-end}:host([data-minimal]) *:is(.mobile-controls,.item-count){display:none}@container (width > 23.4375em){.mobile-controls{display:none !important}:host([data-item-count]) .item-count{display:flex !important}}.fa-spin{display:none !important;font-size:3rem;color:var(--colour-info)}:host([data-loading]) .mobile-controls{padding-top:2rem}:host([data-loading]) .item-count,:host([data-loading]) .mobile-controls>*:not(.fa-spin){display:none !important}:host([data-loading]) .fa-spin{display:block !important;margin:auto}/*# sourceMappingURL=assets/css/components/pagination.css.map */

    
    ${this.hasAttribute("css")?`@import "${this.getAttribute("css")}";`:""}
    </style>
    <link rel="stylesheet" href="https://kit.fontawesome.com/26fdbf0179.css" crossorigin="anonymous">
    <div class="pagination d-none">
  
      <div class="minimal" part="minimal">
        <div class="page-jump">
          <div><select class="select--minimal"></select></div>
          <span class="total-pages"></span>
        </div>
        
        <button class="prev" disabled>Prev</button>
        <button class="next" disabled>Next</button>
      </div>

      <div class="item-count" part="item-count"></div>
      <div class="per-page" part="per-page">
        <div>
          <select class="select--minimal">
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="40">40</option>
            <option value="50">50</option>
          </select>
        </div>
        <span> / page</span>
      </div>
      <div class="mobile-controls m-auto text-center">
        <i class="fa-solid fa-spinner fa-spin"></i>
        <button class="load-more btn btn-primary m-auto">Load more</a>
      </div>
    </div>
    `,this.shadowRoot.appendChild(e.content.cloneNode(!0))}connectedCallback(){const i=new URLSearchParams(window.location.search);this.hasAttribute("data-total")||this.setAttribute("data-total",15),this.hasAttribute("data-page")||this.setAttribute("data-page",i.has("page")?i.get("page"):1),this.hasAttribute("data-show")||this.setAttribute("data-show",i.has("show")?i.get("show"):15),this.hasAttribute("data-increment")||this.setAttribute("data-increment",this.getAttribute("data-show"));const t=this.shadowRoot.querySelector(".page-jump select"),e=this.shadowRoot.querySelector(".prev"),l=this.shadowRoot.querySelector(".next"),c=this.shadowRoot.querySelector(".per-page select"),s=this.shadowRoot.querySelector(".load-more");this.setup(),t.addEventListener("change",n=>{this.setAttribute("data-show",this.getAttribute("data-increment")),this.setAttribute("data-page",n.target.value)}),l.addEventListener("click",n=>{t.value=parseInt(t.value)+1,t.dispatchEvent(new Event("change"))}),e.addEventListener("click",n=>{t.value=parseInt(t.value)-1,t.dispatchEvent(new Event("change"))}),c.addEventListener("change",n=>{this.setAttribute("data-increment",n.target.value)}),s.addEventListener("click",n=>{let o=parseInt(this.getAttribute("data-show"))+parseInt(this.getAttribute("data-increment"));this.setAttribute("data-show",o),o>parseInt(this.getAttribute("data-total"))&&s.remove()})}setup(){const i=this.shadowRoot.querySelector(".pagination"),t=this.shadowRoot.querySelector(".page-jump select"),e=this.shadowRoot.querySelector(".prev"),l=this.shadowRoot.querySelector(".next"),c=this.shadowRoot.querySelector(".item-count"),s=this.shadowRoot.querySelector(".per-page select"),n=this.shadowRoot.querySelector(".total-pages"),o=parseInt(this.getAttribute("data-page")),r=parseInt(this.getAttribute("data-total")),p=parseInt(this.getAttribute("data-show")),a=parseInt(this.getAttribute("data-increment")),h=Math.ceil(r/a);r>p&&i.classList.remove("d-none");let m="";for(let d=1;d<=h;d++)m+=`<option value="${d}" ${d==o?"selected":""}>${d}</option>`;t.innerHTML=m,n.innerHTML=`of ${h}`,o==h?l.setAttribute("disabled","disabled"):l.removeAttribute("disabled"),o==1?e.setAttribute("disabled","disabled"):e.removeAttribute("disabled");let g=o==1?1:(o-1)*p+1,u=o==1?p:o*p;c.innerHTML=`${g} - ${u>r?r:u} of ${r} items`;const b=[15,25,40,50];a&&s.value!=a&&!b.includes(a)&&(s.innerHTML=`<option value="${a}">${a}</option>
      <option value="${a*2}">${a*2}</option>
      <option value="${a*3}">${a*3}</option>
      <option value="${a*4}">${a*4}</option>`),s.value=a}static get observedAttributes(){return["data-total","data-increment","data-page","data-show"]}attributeChangedCallback(i,t,e){switch(i){case"data-total":{t!=e&&(this.setAttribute("data-page",1),this.setup());break}case"data-show":{t!=e&&(this.setAttribute("data-page",1),this.setup(),this.dispatchEvent(new CustomEvent("update-show",{detail:{show:e}})));break}case"data-increment":{t!=e&&(this.setAttribute("data-show",e),this.setAttribute("data-page",1),this.setup(),this.dispatchEvent(new CustomEvent("update-show",{detail:{show:e}})));break}case"data-page":{t&&t!=e&&(this.setup(),this.dispatchEvent(new CustomEvent("update-page",{detail:{page:e}})));break}}}}export{w as default};
