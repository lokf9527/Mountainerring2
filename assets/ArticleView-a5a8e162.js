import{_ as h,a as m,r as n,o as p,d as g,f as r,e as t,w as f,t as o,h as l,F as L}from"./index-bd14b04a.js";import{s as v}from"./sweetalert-c419e3fa.js";const{VITE_URL:V,VITE_PATH:b}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},x={data(){return{article:{},isLoading:!1,articleIndex:0}},components:{RouterLink:m},methods:{getArticle(){this.isLoading=!0;const{id:c}=this.$route.params;this.$http.get(`${V}/v2/api/${b}/article/${c}`).then(s=>{this.isLoading=!1;const{article:i}=s.data;this.article=i}).catch(s=>{var a,e;this.isLoading=!1;const i=((e=(a=s.response)==null?void 0:a.data)==null?void 0:e.message)||"取得文章內容失敗，請稍後再試";v.fire({title:`${i}`,icon:"error"})})}},mounted(){this.getArticle()}},T={class:"container"},E={class:"row justify-content-center"},R={class:"col-lg-8"},A={"aria-label":"breadcrumb",class:"mt-3"},k={class:"breadcrumb"},w={class:"breadcrumb-item"},I={class:"breadcrumb-item active","aria-current":"page"},M={class:"mt-4"},U={class:"py-3"},B={class:"text-muted"},D={class:"text-muted"},H=["src"],S=["innerHTML"];function y(c,s,i,a,e,N){const _=n("VueLoading"),d=n("RouterLink");return p(),g(L,null,[r(_,{active:e.isLoading,"onUpdate:active":s[0]||(s[0]=u=>e.isLoading=u)},null,8,["active"]),t("div",T,[t("div",E,[t("div",R,[t("nav",A,[t("ol",k,[t("li",w,[r(d,{to:"/articles"},{default:f(()=>[l("登山專欄")]),_:1})]),t("li",I,o(e.article.title),1)])]),t("h2",M,o(e.article.title),1),t("article",U,[t("p",null,[t("small",B,o(e.article.create_at),1),l("-"),t("small",D,"作者："+o(e.article.author),1)]),t("img",{src:e.article.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,H),t("div",{innerHTML:e.article.content},null,8,S)])])])])],64)}const F=h(x,[["render",y]]);export{F as default};