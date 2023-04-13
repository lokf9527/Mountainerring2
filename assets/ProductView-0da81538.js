import{_ as g,b as v,a as y,m as w,r as f,o as a,d as u,e as t,f as h,w as b,t as d,p as k,v as x,h as P,F as T,l as C,g as m,k as V}from"./index-1db2262d.js";import{c as R,l as S}from"./cartStore-9d53360f.js";import"./sweetalert2.all-82ac8f21.js";const{VITE_URL:r,VITE_PATH:l}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},q={data(){return{product:{},relativePorduct:{},id:"",qty:1}},methods:{getProduct(){this.$http.get(`${r}/v2/api/${l}/product/${this.id}`).then(s=>{this.product=s.data.product,this.getRelativeProducts()})},getProducts(s,e=1){let c=`${r}v2/api/${l}/products/`;switch(s){case"初階體驗":case"中階探索":case"高階冒險":c=`${r}/v2/api/${l}/products?category=${s}`;break;default:c=`${r}/v2/api/${l}/products?page=${e}`}this.$http(c).then(n=>{this.products=n.data.products,this.pagination=n.data.pagination})},getRelativeProducts(){const{category:s,id:e}=this.product;this.$http.get(`${r}/v2/api/${l}/products?category=${s}`).then(c=>{this.relativePorduct=c.data.products.filter(n=>n.id!==e)})},addOne(){this.qty+=1},minusOne(){this.qty>1&&(this.qty-=1)},toggleId(s){this.$router.push(`/product/${s}`),this.id=s,this.getProduct()},...v(R,["addToCart"])},components:{RouterLink:y},computed:{...w(S,["loadingStatus"])},created(){const{id:s}=this.$route.params;this.id=s,this.getProduct()},mounted(){this.getProduct()}},E={class:"container w-100"},L={"aria-label":"breadcrumb"},$={class:"breadcrumb px-1 mb-0 py-3"},I={class:"breadcrumb-item"},N={class:"breadcrumb-item active","aria-current":"page"},O={class:"row align-items-center"},U={class:"col-md-7"},D={class:"carousel slide","data-ride":"carousel"},A={class:"carousel-inner"},B={class:"carousel-item active"},M=["src","alt"],F={class:"col-md-5"},H={class:"fw-bold h1 mb-1"},j={class:"h4 fw-bold text-end"},z={class:"input-group my-3 bg-light rounded"},G={class:"input-group-prepend"},J=["disabled"],K=t("i",{class:"bi bi-dash-lg"},null,-1),Q=[K],W={class:"input-group-append"},X=t("i",{class:"bi bi-plus-lg"},null,-1),Y=[X],Z={class:"row align-items-center"},tt={class:"col-6"},st=["disabled"],ot={key:0,class:"spinner-border spinner-border-sm me-3"},et=t("span",null,"加入購物車",-1),it={class:"col-6"},dt={class:"row my-5"},ct={class:"col-md-7"},nt=t("hr",null,null,-1),rt={class:"col-md-7"},lt=t("h3",{class:"fw-bold"},"簡易行程",-1),at={class:"text-wrapper"},ut=t("hr",null,null,-1),pt=t("h3",{class:"fw-bold"},"相關行程",-1),_t={class:"container"},ht={class:"row mt-4 mb-5"},bt={class:"card border-0 mb-4 h-100"},mt=["src","alt","onClick"],gt={class:"card-body text-start"},vt={class:"d-flex justify-content-between"},yt={class:"card-text text-muted mb-0 h6"};function wt(s,e,c,n,o,p){const _=f("RouterLink");return a(),u("div",E,[t("nav",L,[t("ol",$,[t("li",I,[h(_,{to:"/products",class:"text-muted"},{default:b(()=>[m("全部商品")]),_:1})]),t("li",N,d(o.product.title),1)])]),t("div",O,[t("div",U,[t("div",D,[t("div",A,[t("div",B,[t("img",{src:o.product.imageUrl,class:"d-block w-100",alt:o.product.title},null,8,M)])])])]),t("div",F,[t("h2",H,d(o.product.title),1),t("p",j,"NT$"+d(o.product.price),1),t("div",z,[t("div",G,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon1",onClick:e[0]||(e[0]=()=>p.minusOne()),disabled:s.isProcessing||this.qty===1},Q,8,J)]),k(t("input",{type:"text",class:"form-control border-0 text-center my-auto shadow-none bg-light",placeholder:"","aria-label":"Example text with button addon","aria-describedby":"button-addon1","onUpdate:modelValue":e[1]||(e[1]=i=>o.qty=i)},null,512),[[x,o.qty]]),t("div",W,[t("button",{class:"btn btn-outline-dark border-0 py-2",type:"button",id:"button-addon2",onClick:e[2]||(e[2]=()=>p.addOne())},Y)])]),t("div",Z,[t("div",tt,[t("button",{type:"button",class:"text-nowrap btn btn-dark w-100 py-2",onClick:e[3]||(e[3]=()=>s.addToCart(o.product.id,o.qty)),disabled:s.loadingStatus===o.product.id},[s.loadingStatus===o.product.id?(a(),u("i",ot)):P("",!0),et],8,st)]),t("div",it,[h(_,{to:"/cart",class:"text-nowrap btn btn-dark w-100 py-2",onClick:e[4]||(e[4]=()=>s.addToCart(o.product.id,o.qty))},{default:b(()=>[m("立刻購買")]),_:1})])])])]),t("div",dt,[t("div",ct,[t("p",null,d(o.product.description),1),nt]),t("div",rt,[lt,t("p",at,d(o.product.content),1)])]),ut,pt,t("div",_t,[t("div",ht,[(a(!0),u(T,null,C(o.relativePorduct,i=>(a(),u("div",{class:"col-lg-3 col-md-6",key:i.id},[t("div",bt,[t("img",{src:i.imageUrl,class:"card-img-top rounded-0",alt:i.title,style:{cursor:"pointer"},onClick:V(()=>p.toggleId(i.id),["prevent"])},null,8,mt),t("div",gt,[t("h5",null,d(i.title),1),t("div",vt,[t("p",yt," NT$"+d(i.price),1)])])])]))),128))])])])}const Pt=g(q,[["render",wt]]);export{Pt as default};
