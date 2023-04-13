import{_ as g,b as v,a as y,r as w,o as u,d as p,e as t,f as h,w as b,t as d,p as f,v as k,F as x,l as P,g as m,k as T}from"./index-0dee44e8.js";import{c as C}from"./cart-02d8c9d5.js";import"./sweetalert2.all-1f1d155c.js";const{VITE_URL:n,VITE_PATH:l}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},R={data(){return{product:{},relativePorduct:{},id:"",qty:1}},methods:{getProduct(){this.$http.get(`${n}/v2/api/${l}/product/${this.id}`).then(s=>{this.product=s.data.product,this.getRelativeProducts()})},getProducts(s,o=1){let c=`${n}v2/api/${l}/products/`;switch(s){case"初階體驗":case"中階探索":case"高階冒險":c=`${n}/v2/api/${l}/products?category=${s}`;break;default:c=`${n}/v2/api/${l}/products?page=${o}`}this.$http(c).then(r=>{this.products=r.data.products,this.pagination=r.data.pagination})},getRelativeProducts(){const{category:s,id:o}=this.product;this.$http.get(`${n}/v2/api/${l}/products?category=${s}`).then(c=>{this.relativePorduct=c.data.products.filter(r=>r.id!==o)})},addOne(){this.qty+=1},minusOne(){this.qty>1&&(this.qty-=1)},toggleId(s){this.$router.push(`/product/${s}`),this.id=s,this.getProduct()},...v(C,["addToCart"])},components:{RouterLink:y},created(){const{id:s}=this.$route.params;this.id=s,this.getProduct()},mounted(){this.getProduct()}},V={class:"container w-100"},q={"aria-label":"breadcrumb"},E={class:"breadcrumb px-1 mb-0 py-3"},$={class:"breadcrumb-item"},L={class:"breadcrumb-item active","aria-current":"page"},I={class:"row align-items-center"},O={class:"col-md-7"},U={class:"carousel slide","data-ride":"carousel"},D={class:"carousel-inner"},N={class:"carousel-item active"},S=["src","alt"],A={class:"col-md-5"},B={class:"fw-bold h1 mb-1"},M={class:"h4 fw-bold text-end"},F={class:"input-group my-3 bg-light rounded"},H={class:"input-group-prepend"},j=["disabled"],z=t("i",{class:"bi bi-dash-lg"},null,-1),G=[z],J={class:"input-group-append"},K=t("i",{class:"bi bi-plus-lg"},null,-1),Q=[K],W={class:"row align-items-center"},X={class:"col-6"},Y={class:"col-6"},Z={class:"row my-5"},tt={class:"col-md-7"},st=t("hr",null,null,-1),ot={class:"col-md-7"},et=t("h3",{class:"fw-bold"},"簡易行程",-1),it={class:"text-wrapper"},dt=t("hr",null,null,-1),ct=t("h3",{class:"fw-bold"},"相關行程",-1),rt={class:"container"},nt={class:"row mt-4 mb-5"},lt={class:"card border-0 mb-4 h-100"},at=["src","alt","onClick"],ut={class:"card-body text-start"},pt={class:"d-flex justify-content-between"},_t={class:"card-text text-muted mb-0 h6"};function ht(s,o,c,r,e,a){const _=w("RouterLink");return u(),p("div",V,[t("nav",q,[t("ol",E,[t("li",$,[h(_,{to:"/products",class:"text-muted"},{default:b(()=>[m("全部商品")]),_:1})]),t("li",L,d(e.product.title),1)])]),t("div",I,[t("div",O,[t("div",U,[t("div",D,[t("div",N,[t("img",{src:e.product.imageUrl,class:"d-block w-100",alt:e.product.title},null,8,S)])])])]),t("div",A,[t("h2",B,d(e.product.title),1),t("p",M,"NT$"+d(e.product.price),1),t("div",F,[t("div",H,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:o[0]||(o[0]=()=>a.minusOne()),disabled:s.isProcessing||this.qty===1},G,8,j)]),f(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":o[1]||(o[1]=i=>e.qty=i)},null,512),[[k,e.qty]]),t("div",J,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:o[2]||(o[2]=()=>a.addOne())},Q)])]),t("div",W,[t("div",X,[t("button",{type:"button",class:"text-nowrap btn btn-dark w-100 py-2",onClick:o[3]||(o[3]=()=>s.addToCart(e.product.id,e.qty))},"加入購物車")]),t("div",Y,[h(_,{to:"/cart",class:"text-nowrap btn btn-dark w-100 py-2",onClick:o[4]||(o[4]=()=>s.addToCart(e.product.id,e.qty))},{default:b(()=>[m("立刻購買")]),_:1})])])])]),t("div",Z,[t("div",tt,[t("p",null,d(e.product.description),1),st]),t("div",ot,[et,t("p",it,d(e.product.content),1)])]),dt,ct,t("div",rt,[t("div",nt,[(u(!0),p(x,null,P(e.relativePorduct,i=>(u(),p("div",{class:"col-lg-3 col-md-6",key:i.id},[t("div",lt,[t("img",{src:i.imageUrl,class:"card-img-top rounded-0",alt:i.title,style:{cursor:"pointer"},onClick:T(()=>a.toggleId(i.id),["prevent"])},null,8,at),t("div",ut,[t("h5",null,d(i.title),1),t("div",pt,[t("p",_t," NT$"+d(i.price),1)])])])]))),128))])])])}const vt=g(R,[["render",ht]]);export{vt as default};
