import{f as h}from"./favoriteStore-7295e086.js";import{c as v}from"./cartStore-f039657c.js";import{i as y}from"./banner-383f913b.js";import{s as w}from"./sweetalert-608eb5cc.js";import{_ as x,b as p,a as k,m as N,r as m,o as r,d as i,f as o,e as t,w as d,n as L,F as b,l as T,h as _,k as R,t as g,i as S}from"./index-51c262dd.js";const{VITE_URL:P,VITE_PATH:$}={VITE_URL:"https://vue3-course-api.hexschool.io",VITE_PATH:"ph",BASE_URL:"/Mountainerring2/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},I=h(),V={data(){return{imageUrl:y,products:[],isLoading:!1}},methods:{getProducts(){this.$http(`${P}/v2/api/${$}/products/all`).then(e=>{this.products=e.data.products,I.tempProducts(this.products),this.pagination=e.data.pagination,this.isLoading=!1}).catch(e=>{var l,n;const c=((n=(l=e.response)==null?void 0:l.data)==null?void 0:n.message)||"取得產品列表失敗，請稍後再試";w.fire({title:`${c}`,icon:"error"})})},...p(h,["getFollows","toggleFollow"]),...p(v,["addToCart"])},components:{RouterLink:k},computed:{...N(h,["followIds","followList"])},mounted(){this.getProducts(),this.isLoading=!0}},C={class:"container d-flex justify-content-end align-items-center h-75 w-50"},j={class:"me-4"},O=t("h3",{class:"text-dark",style:{"font-family":"Righteous"}},"MOUNTAINERRING",-1),A=t("h1",{class:"fw-bold text-dark mb-3"},"和你一起翻山越嶺",-1),E={class:"container mt-md-5 mt-3 mb-7"},U={key:0,class:"row"},B={class:"col-md-12"},D={"aria-label":"breadcrumb",class:"mt-0"},F={class:"breadcrumb"},H={class:"breadcrumb-item"},q=t("li",{class:"breadcrumb-item active","aria-current":"page"},"收藏清單",-1),z={class:"row"},M={class:"card cardProducts border-0 rounded-0 mb-4 position-relative"},J=["src","alt"],K=["onClick"],Q={key:0,class:"bi bi-heart text-danger h5 position-absolute"},Y={key:1,class:"bi bi-heart-fill text-danger h5 position-absolute"},Z={class:"mt-3 h5"},G={class:"card-footer d-grid gap-2 border-top-0 px-0 py-0"},W=["onClick","disabled"],X={key:0,class:"spinner-border spinner-border-sm me-3"},tt=t("span",null,"加入購物車",-1),st={key:1},ot=t("h2",{class:"mt-5"},"收藏清單目前是空的，快來挑選商品吧！",-1),et=t("h4",{class:"fw-bold mt-5"},"你可能會有興趣 ...",-1),at={class:"row mt-4 mb-5"},dt={class:"col-md-3"},rt={class:"card border-0 mb-4 cardProducts",style:{"border-radius":"0%"}},it=t("img",{src:"https://greathunger.com.tw/images/images/activity2_20221202152957.jpg",class:"card-img-top rounded-0",alt:"能高安東軍縱走"},null,-1),ct=t("div",{class:"card-body text-start text-dark"},[t("h5",null,"水鹿的故鄉｜能高安東軍縱走"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text mb-0 h6"}," NT$12500 ")])],-1),lt={class:"col-md-3"},nt={class:"card border-0 mb-4 cardProducts",style:{"border-radius":"0%"}},ut=t("img",{src:"https://greathunger.com.tw/images/images/activity8_20221114191552.jpg",class:"card-img-top rounded-0",alt:"戒茂斯上嘉明湖"},null,-1),_t=t("div",{class:"card-body text-start text-dark"},[t("h5",null,"天使的眼淚｜戒茂斯上嘉明湖"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text mb-0 h6"}," NT$4500 ")])],-1),ht={class:"col-md-3"},pt={class:"card border-0 mb-4 cardProducts",style:{"border-radius":"0%"}},mt=t("img",{src:"https://greathunger.com.tw/images/images/activity0_20221115212626.jpg",class:"card-img-top rounded-0",alt:"加羅湖"},null,-1),bt=t("div",{class:"card-body text-start text-dark"},[t("h5",null,"散落的珍珠｜加羅湖"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text mb-0 h6"}," NT$4380 ")])],-1),gt={class:"col-md-3"},ft={class:"card border-0 mb-4 cardProducts",style:{"border-radius":"0%"}},vt=t("img",{src:"https://greathunger.com.tw/images/activity_20221115211124.jpg",class:"card-img-top rounded-0",alt:"水漾森林"},null,-1),yt=t("div",{class:"card-body text-start text-dark"},[t("h5",null,"遠離塵嚣的仙境｜水漾森林"),t("div",{class:"d-flex justify-content-between"},[t("p",{class:"card-text mb-0 h6"}," NT$4500 ")])],-1);function wt(e,c,l,n,u,xt){const f=m("VueLoading"),a=m("RouterLink");return r(),i(b,null,[o(f,{active:u.isLoading,"onUpdate:active":c[0]||(c[0]=s=>u.isLoading=s)},null,8,["active"]),t("header",{class:"favorite-header",style:L({"background-image":`url(${u.imageUrl})`})},[t("div",C,[t("div",j,[O,A,o(a,{to:"/products",class:"btn btn-dark py-2"},{default:d(()=>[_("查看行程")]),_:1})])])],4),t("div",E,[e.followList.length?(r(),i("div",U,[t("div",B,[t("nav",D,[t("ol",F,[t("li",H,[o(a,{to:"/"},{default:d(()=>[_("首頁")]),_:1})]),q])]),t("div",z,[(r(!0),i(b,null,T(e.followList,s=>(r(),i("div",{class:"col-md-3",key:s.id},[t("div",M,[o(a,{to:`/product/${s.id}`},{default:d(()=>[t("img",{src:s.imageUrl,class:"card-img-top rounded-0 object-fit-cover",alt:s.title},null,8,J)]),_:2},1032,["to"]),o(a,{to:`/product/${s.id}`,class:"card-body text-start text-dark"},{default:d(()=>[t("div",{class:"position-absolute",style:{cursor:"pointer",right:"30px",top:"10px"},onClick:R(()=>e.toggleFollow(s.id),["prevent"])},[e.followIds.indexOf(s.id)===-1?(r(),i("i",Q)):(r(),i("i",Y))],8,K),t("h4",Z,g(s.title),1),t("p",null,"NT$"+g(s.price),1)]),_:2},1032,["to"]),t("div",G,[t("button",{type:"button",class:"text-nowrap btn btn-primary w-100 py-2",style:{"border-radius":"0%"},onClick:()=>e.addToCart(s.id,e.qty),disabled:e.loadingStatus===s.id},[e.loadingStatus===s.id?(r(),i("i",X)):S("",!0),tt],8,W)])])]))),128))])])])):(r(),i("div",st,[ot,o(a,{class:"btn btn-primary my-5 text-end",to:"/products"},{default:d(()=>[_(" 查看行程 ")]),_:1}),et,t("div",at,[t("div",dt,[t("div",rt,[o(a,{to:"/product/-NN0TN0Oy7quf2LBeINs"},{default:d(()=>[it]),_:1}),o(a,{to:"/product/-NN0TN0Oy7quf2LBeINs"},{default:d(()=>[ct]),_:1})])]),t("div",lt,[t("div",nt,[o(a,{to:"/product/-NKpwDun9A4lFDuSlmJL"},{default:d(()=>[ut]),_:1}),o(a,{to:"/product/-NKpwDun9A4lFDuSlmJL"},{default:d(()=>[_t]),_:1})])]),t("div",ht,[t("div",pt,[o(a,{to:"/product/-NR2IkrzZx0QBHqSbOca"},{default:d(()=>[mt]),_:1}),o(a,{to:"/product/-NR2IkrzZx0QBHqSbOca"},{default:d(()=>[bt]),_:1})])]),t("div",gt,[t("div",ft,[o(a,{to:"/product/-NR2CbYAl8zohH3Px7O1"},{default:d(()=>[vt]),_:1}),o(a,{to:"/product/-NR2CbYAl8zohH3Px7O1"},{default:d(()=>[yt]),_:1})])])])]))])],64)}const St=x(V,[["render",wt]]);export{St as default};