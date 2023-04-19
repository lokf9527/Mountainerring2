import{i as f}from"./banner-383f913b.js";import{_ as g,r as _,o as e,d as i,f as c,e as t,w as n,n as p,F as d,l as v,h as u,u as b,t as x,i as h}from"./index-42dca719.js";const{VITE_URL:L,VITE_PATH:k}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},y={data(){return{imageUrl:f,articles:[],isLoading:!1}},methods:{getArtticles(){this.isLoading=!0,this.$http.get(`${L}/v2/api/${k}/articles`).then(r=>{this.articles=r.data.articles,this.isLoading=!1})}},mounted(){this.getArtticles()}},V={class:"container d-flex justify-content-end align-items-center h-75 w-50"},R={class:"me-4"},T=t("h3",{class:"text-dark",style:{"font-family":"Righteous"}},"MOUNTAINERRING",-1),w=t("h1",{class:"fw-bold text-dark mb-3"},"和你一起翻山越嶺",-1),E={class:"container"},U={class:"row justify-content-center py-3"},A={class:"col-lg-8"},N={"aria-label":"breadcrumb",class:"mt-3"},I={class:"breadcrumb"},B={class:"breadcrumb-item"},M=t("li",{class:"breadcrumb-item active","aria-current":"page"},"登山專欄",-1),P={key:0,class:"card mb-6"},S={class:"row g-0"},$={class:"col-md-4"},D=["src","alt"],H={class:"col-md-8"},j={class:"card-body d-flex flex-column justify-content-between h-100"},C={class:"card-title text-dark"},O={class:"card-text fw-normal"},F=["innerHTML"],z=t("div",{class:"text-end mt-md-0 mt-5"},"繼續閱讀",-1);function G(r,l,q,J,o,K){const m=_("VueLoading"),a=_("RouterLink");return e(),i(d,null,[c(m,{active:o.isLoading,"onUpdate:active":l[0]||(l[0]=s=>o.isLoading=s)},null,8,["active"]),t("header",{class:"products-header",style:p({"background-image":`url(${o.imageUrl})`})},[t("div",V,[t("div",R,[T,w,c(a,{to:"/products",class:"btn btn-dark py-2"},{default:n(()=>[u("查看行程")]),_:1})])])],4),t("div",E,[t("div",U,[t("div",A,[t("nav",N,[t("ol",I,[t("li",B,[c(a,{to:"/"},{default:n(()=>[u("首頁")]),_:1})]),M])]),(e(!0),i(d,null,v(o.articles,s=>(e(),i(d,{key:s.id},[s.isPublic?(e(),i("div",P,[t("div",S,[t("div",$,[t("img",{src:s.imageUrl,class:"img-fluid rounded-start h-md-100",alt:s.title},null,8,D)]),t("div",H,[s.isPublic?(e(),b(a,{key:0,class:"text-dark",to:`/article/${s.id}`},{default:n(()=>[t("div",j,[t("h5",C,x(s.title),1),t("div",O,[t("div",{innerHTML:s.description},null,8,F)]),z])]),_:2},1032,["to"])):h("",!0)])])])):h("",!0)],64))),128))])])])],64)}const X=g(y,[["render",G]]);export{X as default};