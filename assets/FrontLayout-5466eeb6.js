import{_ as c,R as d,a as p,m as u,b as _,r as o,o as m,c as v,d as t,e as a,w as s,F as g,f as n,t as b}from"./index-a464fe07.js";import{c as i}from"./cart-8eaf121d.js";const h={components:{RouterView:d,RouterLink:p},computed:{...u(i,["cart"])},methods:{..._(i,["getCart"])},mounted(){this.getCart()}},f=t("div",null,null,-1),x={class:"navbar navbar-expand-lg bg-primary"},R={class:"container"},y=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),k={class:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},w={class:"navbar-nav"},N=t("h4",{class:"bi bi-cart text-white position-relative"},null,-1),V={class:"position-absolute top-0 start-100 translate-middle badge bg-danger rounded-pill mt-1"},C=t("div",{class:"footer py-5 bg-primary mt-auto"},[t("div",{class:"container"},[t("div",{class:"h5"},"Mountaineering"),t("p",null,[t("a",null,"Mountaineering@gmail.com"),n(" (02) 1234-5678")]),t("p",null,"Copyright © Mountaineering All Rights Reserved. 此網站僅供作品展示用，無任何商業用途")])],-1);function M(r,T,A,L,$,B){const e=o("RouterLink"),l=o("RouterView");return m(),v(g,null,[f,t("nav",x,[t("div",R,[a(e,{to:"/",class:"navbar-brand text-white",style:{"font-family":"Righteous"}},{default:s(()=>[n("MOUNTAINERRING")]),_:1}),y,t("div",k,[t("div",w,[a(e,{to:"/",class:"nav-item nav-link me-4 text-white"},{default:s(()=>[n("首頁")]),_:1}),a(e,{to:"/products",class:"nav-item nav-link me-4 text-white"},{default:s(()=>[n("商品列表")]),_:1}),a(e,{to:"/cart",class:"nav-item nav-link"},{default:s(()=>[N,t("span",V,b(r.cart.length),1)]),_:1})])])])]),a(l),C],64)}const E=c(h,[["render",M]]);export{E as default};