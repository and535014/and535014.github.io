(function(){"use strict";var e={9557:function(e,s,t){var n=t(9242),l=t(3396),i=t(7139);const o=(0,l._)("i",{class:"fa-solid fa-angle-up icon-l"},null,-1),a=[o];function r(e,s,t,o,r,c){const u=(0,l.up)("NavbarComp"),p=(0,l.up)("router-view"),d=(0,l.up)("FooterComp");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(u,{class:(0,i.C_)({"nav-float":r.scrollY>0}),bodyIsOVH:c.bodyIsOVH},null,8,["class","bodyIsOVH"]),(0,l.Wm)(p,null,{default:(0,l.w5)((({Component:e})=>[(0,l.Wm)(n.uT,{name:"fadeIn",mode:"out-in"},{default:(0,l.w5)((()=>[((0,l.wg)(),(0,l.j4)((0,l.LL)(e),{class:(0,i.C_)({"at-top":r.scrollY<=0})},null,8,["class"]))])),_:2},1024)])),_:1}),(0,l._)("div",{class:(0,i.C_)(["btn btn-icon-l goTop",{isShow:r.scrollY>200}]),onClick:s[0]||(s[0]=(...e)=>c.goTop&&c.goTop(...e))},a,2),(0,l.Wm)(d)],64)}var c={created(){const e=window.innerWidth,s=window.innerHeight;this.windowInnerWidth=e,this.windowInnerHeight=s,window.addEventListener("scroll",(()=>{let e=window.scrollY;this.scrollY=e}))},data(){return{scrollY:null,windowInnerWidth:null,windowInnerHeight:null}},methods:{goTop(){let e=document.documentElement.scrollTop||document.body.scrollTop;const s=setInterval((()=>{document.body.scrollTop=document.documentElement.scrollTop=e-=50,e<=0&&clearInterval(s)}),10)},bodyIsOVH(e){let s=document.body.getAttribute("class")||"";e?(s=s.concat("overflow-hidden"),document.body.setAttribute("class",s)):e||(s=s.replace("overflow-hidden",""),document.body.setAttribute("class",s))}}},u=t(89);const p=(0,u.Z)(c,[["render",r]]);var d=p,m=t(5431);(0,m.z)("service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var g=t(2483);const v={class:"page page-about"},f={class:"section section-intro"},b={class:"container"},h={class:"content"},w=["innerHTML"],_={class:"btns"},k=["href"],y=(0,l.Uk)("履歷"),j=(0,l._)("i",{class:"fa-solid fa-arrow-up-right-from-square icon-s"},null,-1),I=[y,j],T=(0,l._)("a",{class:"btn btn-l btn-secondary",href:"mailto:and535014@gmail.com"},"聯絡我！",-1),C=(0,l._)("p",null,"更多",-1),S=(0,l._)("i",{class:"fa-solid fa-angle-down"},null,-1),x=[C,S],L={class:"section section-skills",id:"section-skills"},D={class:"container"},O=(0,l._)("h2",{class:"title"},"相關專業技能",-1),H={class:"skillList"},V={class:"subtitle"},U={class:"itemList"},z={class:"item"},E={class:"section section-experience"},W={class:"container"},A=(0,l._)("h2",{class:"title"},"過往經歷",-1),N={class:"exp-list"},Y=(0,l._)("div",{class:"dot"},null,-1),M={class:"left"},P={class:"date"},B={class:"year subtitle"},Z={class:"month subtitle"},q={class:"right"},K={class:"textArea"},R={class:"content"},$={class:"subtitle"},F=["innerHTML"],G={key:0};function J(e,s,t,n,o,a){return(0,l.wg)(),(0,l.iD)("div",v,[(0,l._)("section",f,[(0,l._)("div",b,[(0,l._)("div",h,[(0,l._)("h1",null,(0,i.zw)(e.intro.greeting),1),(0,l._)("p",{class:"title",innerHTML:e.intro.brief},null,8,w)]),(0,l._)("div",_,[(0,l._)("a",{class:"btn btn-l btn-withIcon btn-primary",href:e.resumeUrl,target:"_blank"},I,8,k),T]),(0,l._)("div",{class:"moreBtn",onClick:s[0]||(s[0]=(...e)=>a.goSkills&&a.goSkills(...e))},x)])]),(0,l._)("section",L,[(0,l._)("div",D,[O,(0,l._)("ul",H,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.skillList,(e=>((0,l.wg)(),(0,l.iD)("li",null,[(0,l._)("h3",V,(0,i.zw)(e.title),1),(0,l._)("ul",U,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.skills,(e=>((0,l.wg)(),(0,l.iD)("li",z,(0,i.zw)(e),1)))),256))])])))),256))])])]),(0,l._)("section",E,[(0,l._)("div",W,[A,(0,l._)("ul",N,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.expList,((e,s)=>((0,l.wg)(),(0,l.iD)("li",{class:(0,i.C_)(["exp-item",{isShow:a.expDelta>o.expListOffset[s]}])},[Y,(0,l._)("div",M,[(0,l._)("div",P,[(0,l._)("div",B,(0,i.zw)(e.date),1),(0,l._)("div",Z,(0,i.zw)(e.month),1)])]),(0,l._)("div",q,[(0,l._)("div",K,[(0,l._)("div",R,[(0,l._)("h3",$,(0,i.zw)(e.title),1),(0,l._)("p",{innerHTML:e.description},null,8,F),e.list?((0,l.wg)(),(0,l.iD)("ul",G,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.list,(e=>((0,l.wg)(),(0,l.iD)("li",null,(0,i.zw)(e),1)))),256))])):(0,l.kq)("",!0)])])])],2)))),256))])])])])}var Q=t(65),X={name:"AboutView",created(){window.addEventListener("scroll",(()=>{this.scrollY=window.scrollY,this.expOffset=document.getElementsByClassName("section-experience")[0].offsetTop;for(var e=0;e<this.expList.length;e++)this.expListOffset[e]=document.getElementsByClassName("exp-item")[e].offsetTop}))},data(){return{scrollTarget:0,scrollY:0,expOffset:0,expListOffset:[]}},computed:{...(0,Q.rn)(["intro","skillList","expList","resumeUrl"]),expDelta(){return this.scrollY-(this.expOffset-550)}},methods:{getScrollTarget(){let e=document.getElementById("section-skills").offsetTop;this.scrollTarget=e-100},goSkills(){let e=document.documentElement.scrollTop||document.body.scrollTop;this.getScrollTarget();const s=setInterval((()=>{e<this.scrollTarget-10?document.body.scrollTop=document.documentElement.scrollTop=e+=20:e>this.scrollTarget+10?document.body.scrollTop=document.documentElement.scrollTop=e-=20:(clearInterval(s),this.scrollTarget=0)}),10)}}};const ee=(0,u.Z)(X,[["render",J]]);var se=ee;const te={class:"page page-projects"},ne={class:"section section-project"},le={class:"container"};function ie(e,s,t,n,i,o){const a=(0,l.up)("CardContainer");return(0,l.wg)(),(0,l.iD)("div",te,[(0,l._)("div",ne,[(0,l._)("div",le,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.projects.works,(e=>((0,l.wg)(),(0,l.j4)(a,(0,l.dG)(e,{key:e.id}),null,16)))),128))])])])}const oe={class:"card card-container"},ae={class:"card info-card"},re={class:"title"},ce={class:"subtitle description"},ue={class:"tags"},pe={class:"tag tag-s"},de={class:"btns"},me=(0,l.Uk)("更多資訊"),ge=["href"];function ve(e,s,t,n,o,a){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",oe,[(0,l._)("div",{class:"pic-wrap",style:(0,i.j5)(a.bgcss(t.imgUrl.cover))},null,4),(0,l._)("div",ae,[(0,l._)("h2",re,(0,i.zw)(t.title),1),(0,l._)("p",ce,(0,i.zw)(t.brief),1),(0,l._)("div",ue,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.tags,(e=>((0,l.wg)(),(0,l.iD)("div",pe,(0,i.zw)(e),1)))),256))]),(0,l._)("div",de,[(0,l.Wm)(r,{class:"btn btn-s btn-primary",to:a.moreInfo},{default:(0,l.w5)((()=>[me])),_:1},8,["to"]),t.urls.gitpages?((0,l.wg)(),(0,l.iD)("a",{key:0,class:"btn btn-s btn-secondary",href:t.urls.gitpages,target:"_blank"},"前往網站",8,ge)):(0,l.kq)("",!0)])])])}var fe={name:"card-container",props:["id","title","brief","tags","imgUrl","urls"],computed:{moreInfo(){return"/projects/post/"+this.id}},methods:{bgcss(e){return{"background-image":"url("+e+")","background-position":"top center","background-size":"cover","background-repeat":"no-repeat"}}}};const be=(0,u.Z)(fe,[["render",ve]]);var he=be,we={data(){return{imgUrl:"cover"}},computed:{...(0,Q.rn)(["projects"])},components:{CardContainer:he}};const _e=(0,u.Z)(we,[["render",ie]]);var ke=_e,ye=t.p+"img/email.267b5d9d.gif";const je={class:"page page-contact"},Ie={class:"section section-contact"},Te={class:"container"},Ce={class:"wrapper"},Se=(0,l.uE)('<div class="left"><img src="'+ye+'"><h2 class="title">聯絡方式</h2><p class="description">謝謝你來到我的線上作品集，如果你有任何的問題或想法，歡迎寄信到下面信箱 ✉️ 或是留言 💬 告訴我喔!</p><ul class="info"><li><i class="fa-solid fa-location-dot"></i><span>Taipei, Taiwan</span></li><li><i class="fa-solid fa-envelope"></i><a class="hsiao-email" href="mailto:and535014@gmail.com">and535014@gamil.com</a></li></ul></div>',1),xe={class:"right"},Le=(0,l._)("h4",{class:"subtitle"},"有話想說？",-1),De={class:"form"},Oe={class:"name"},He=(0,l._)("span",null,"姓名",-1),Ve={class:"email"},Ue=(0,l._)("span",null,"信箱",-1),ze={class:"message"},Ee=(0,l._)("span",null,"訊息",-1),We={key:0,class:"btn btn-primary btn-l btn-withIcon result"},Ae=(0,l.Uk)("您的訊息已送出"),Ne=(0,l._)("i",{class:"fa-solid fa-circle-check"},null,-1),Ye=[Ae,Ne],Me={key:1,class:"btn btn-primary btn-l btn-withIcon result error"},Pe=(0,l.Uk)("訊息送出失敗"),Be=(0,l._)("i",{class:"fa-solid fa-circle-xmark"},null,-1),Ze=[Pe,Be];function qe(e,s,t,i,o,a){return(0,l.wg)(),(0,l.iD)("div",je,[(0,l._)("div",Ie,[(0,l._)("div",Te,[(0,l._)("div",Ce,[Se,(0,l._)("div",xe,[Le,(0,l._)("div",De,[(0,l._)("div",Oe,[(0,l._)("label",null,[He,(0,l.wy)((0,l._)("input",{type:"text",name:"name",placeholder:"請輸入你的名字","onUpdate:modelValue":s[0]||(s[0]=e=>o.msg.name=e)},null,512),[[n.nr,o.msg.name]])])]),(0,l._)("div",Ve,[(0,l._)("label",null,[Ue,(0,l.wy)((0,l._)("input",{type:"email",name:"email",placeholder:"請輸入你的信箱","onUpdate:modelValue":s[1]||(s[1]=e=>o.msg.email=e)},null,512),[[n.nr,o.msg.email]])])]),(0,l._)("div",ze,[(0,l._)("label",null,[Ee,(0,l.wy)((0,l._)("textarea",{name:"message",placeholder:"請輸入訊息",rows:"3","onUpdate:modelValue":s[2]||(s[2]=e=>o.msg.message=e)},null,512),[[n.nr,o.msg.message]])])]),o.result?(0,l.kq)("",!0):((0,l.wg)(),(0,l.iD)("div",{key:0,class:"btn btn-primary btn-l",onClick:s[3]||(s[3]=(...e)=>a.updateMsg&&a.updateMsg(...e))},"送出")),(0,l.Wm)(n.uT,{name:"fadeInBtn",mode:"out-in"},{default:(0,l.w5)((()=>["success"===o.result?((0,l.wg)(),(0,l.iD)("div",We,Ye)):"error"===o.result?((0,l.wg)(),(0,l.iD)("div",Me,Ze)):(0,l.kq)("",!0)])),_:1})])])])])])])}var Ke=t(4294),Re={name:"ContactView",data(){return{msg:{name:"",email:"",message:""},result:null,serviceId:"service_pf06d2v",templateId:"template_f2yxtbw",userId:"AH_vaT_TBNA7x3kp-"}},methods:{async updateMsg(){const e=Object.values(this.msg);if(e.every((e=>e))){this.result=null;try{const e={from_name:"蕭毓庭線上作品集",to_name:"毓庭",message:`<p>姓名：${this.msg.name}</p><p>信箱：${this.msg.email}</p><p>訊息：${this.msg.message}</p>`};await Ke.ZP.send(this.serviceId,this.templateId,e,this.userId),this.msg={name:"",email:"",message:""},this.result="success"}catch(s){this.result="error",console.log(s,"error")}}}}};const $e=(0,u.Z)(Re,[["render",qe]]);var Fe=$e;const Ge={class:"page page-post"},Je={class:"section section-header"},Qe={class:"section section-intro"},Xe={class:"container"},es={class:"top"},ss={class:"left"},ts={class:"title"},ns={class:"tags"},ls={class:"tag tag-s"},is={class:"right"},os={class:"brief"},as={class:"btns"},rs=["href"],cs=(0,l._)("span",null,"前往網站",-1),us=[cs],ps=["href"],ds=(0,l._)("span",null,"GitHub",-1),ms=[ds],gs={class:"bottom"},vs={key:0,class:"description"},fs={key:1,class:"video"},bs=["src"],hs={class:"section section-photos"},ws={class:"container"},_s=["innerHTML"];function ks(e,s,t,n,o,a){return(0,l.wg)(),(0,l.iD)("div",Ge,[(0,l._)("div",Je,[(0,l._)("div",{class:"pic",style:(0,i.j5)(a.bgcss(a.work.imgUrl.cover))},null,4)]),(0,l._)("div",Qe,[(0,l._)("div",Xe,[(0,l._)("div",es,[(0,l._)("div",ss,[(0,l._)("div",ts,(0,i.zw)(a.work.title),1),(0,l._)("div",ns,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.work.tags,(e=>((0,l.wg)(),(0,l.iD)("div",ls,(0,i.zw)(e),1)))),256))])]),(0,l._)("div",is,[(0,l._)("div",os,[(0,l._)("p",null,(0,i.zw)(a.work.brief),1)]),(0,l._)("div",as,[a.work.urls.gitpages?((0,l.wg)(),(0,l.iD)("a",{key:0,class:"btn btn-s btn-primary",href:a.work.urls.gitpages,target:"_blank"},us,8,rs)):(0,l.kq)("",!0),(0,l._)("a",{class:"btn btn-s btn-secondary",href:a.work.urls.github,target:"_blank"},ms,8,ps)])])]),(0,l._)("div",gs,[a.work.description?((0,l.wg)(),(0,l.iD)("p",vs,(0,i.zw)(a.work.description),1)):(0,l.kq)("",!0),a.work.video?((0,l.wg)(),(0,l.iD)("div",fs,[(0,l._)("iframe",{src:a.work.video,frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:"",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},title:"twitter-search_demo.mp4"},null,8,bs)])):(0,l.kq)("",!0)])])]),(0,l._)("div",hs,[(0,l._)("div",ws,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(a.work.imgUrl.pics,(e=>((0,l.wg)(),(0,l.iD)("div",{class:"pic",innerHTML:a.getImg(e)},null,8,_s)))),256))])])])}var ys={props:["id"],computed:{...(0,Q.rn)({works:e=>e.projects.works}),work(){return this.works.filter((e=>e.id==this.id))[0]}},methods:{bgcss(e){return{"background-image":"url("+e+")","background-position":"top center","background-size":"cover","background-repeat":"no-repeat"}},getImg(e,s){return`\n                <picture>\n                    <source srcset="${e.small}" media="(max-width: 479px)">\n                    <img src="${e.large}" alt="${s}">\n                </picture>\n            `}}};const js=(0,u.Z)(ys,[["render",ks]]);var Is=js;const Ts=[{path:"/",name:"about",component:se,alias:"/about"},{path:"/projects",name:"projects",component:ke},{path:"/contact",name:"contact",component:Fe},{path:"/projects/post/:id",name:"contapostct",component:Is,props:!0}],Cs=(0,g.p7)({history:(0,g.r5)(""),routes:Ts});Cs.afterEach(((e,s)=>{document.body.scrollTop=0,document.documentElement.scrollTop=0}));var Ss=Cs;const xs={state:{},getters:{},mutations:{},actions:{}};var Ls=(0,Q.MT)({state:{intro:{greeting:"嗨！我是蕭毓庭 👋🏻",brief:"我是擁有一年多經驗的\n      <span class='text-highlight'>&nbsp;前端工程師&nbsp;</span>\n      ，<br>喜歡學習新事物以及自己動手打造物品，\n      <br>追求簡單卻精緻的美好。\n      "},skillList:[{title:"Frontend",skills:["熟悉 Vue2、Vue3","熟悉 Nuxt3.js","熟悉 React Native","熟悉 JavaScript ES6","React.js 開發經驗","TypeScript 開發經驗"]},{title:"Web layout",skills:["熟悉 HTML、CSS","熟悉 SCSS","RWD 網頁","熟悉 Bootstrap 4.6","Bootstrap 5.3 開發經驗","Tailwind CSS 開發經驗"]},{title:"Others",skills:["熟悉 Git 版控","Cypress E2E 開發經驗","LINE Login 開發經驗","LINE Message 開發經驗","Google Analysis 開發經驗","Google Login 開發經驗","Titap 開發經驗","Ably 開發經驗 (Websocket)"]},{title:"Backend",skills:["Laravel PHP 開發經驗"]}],expList:[{date:"2015",month:"7月",title:"結束大學生涯",description:"我畢業於國立台灣大學，主修化學，這時候的我對平面設計、網頁開發等一竅不通，但是充滿興趣",list:["2009-2013 台大 化學 學士","2013-2015 台大 化學 碩士"]},{date:"2015",month:"8月",title:"任職於花王 (台灣) 股份有限公司",description:"我在花王台灣股份有限公司擔任消費品研究員，工作內容主要為家庭衣物用洗劑的研究與開發",list:["跨部門以及跨國合作進行商品的開發與改良","參與多場跨國研討會，擔任過主持人以及發表 poster","擔任「高效率簡報製作」內部講師","運用各種技術來設計符合提案訴求的配方","提供數據化的性能評價結果","產出原形並透過試用調查驗證商品提案的可行性","協助商品的規格制定以及實際生產製造流程建立"]},{date:"2020",month:"5月",title:"自我進修 UI/UX 設計技能",description:"疫情爆發後開始重新思考自己的生活方式，因緣際會認識到 UI/UX 設計相關工作，重拾成為設計師的夢想並報名了赫綵設計學院的一系列課程，包含平面設計、UI 設計入門、商業網站架設 (HTML/CSS/jQuery/JS)",list:""},{date:"2022",month:"6月",title:"從花王辭職，專心準備轉職成前端工程師",description:"在赫綵設計學院的商業網站架設課程中學到了 HTML/CSS/JS 等程式語言，對前端網頁開發產生濃厚興趣，深思後決定轉職成前端工程師，並從花王辭職後專心準備轉職。自我進修期間購買諸多線上課程以及書籍進行實作練習與作品集製作",list:""},{date:"2022",month:"10月",title:"任職於攜彼創新股份有限公司",description:"主要工作內容為<a href='https://dingup.cc/' target='_blank'>訂管家</a>的前後端開發與網站維護，以及外包專案的前端開發",list:["訂管家網站的前後端開發與網站維護 (主要技術為 Vue2, Vuex, Bootstrap, Laravel PHP)","Vue3 + TypeScript 開發後台網站，功能包含表格資料呈現、多步驟購物流程以及動態插入元件","Vue3 + Nuxt3 開發前後台網站，功能包含會員註冊、登入以及圖表資料呈現 (折線圖、長條圖)","React Native + Expo 開發手機 App，功能包含相機掃描 QR Code、地圖功能、Push Notification、第三方登入 (LINE, Google, Apple) 等"]},{date:"2024",month:"7月",title:"開始新的旅程",description:"積極求職中，期待能夠加入更多有趣的專案，並持續學習成長",list:""}],projects:{filters:["視覺設計","前端開發","其他"],works:[{id:"1",title:"Crystall Apple 電商平台",brief:"BJD 娃娃配件的電商平台，具有 RWD 且使用 SPA，擁有基本的商品列表、購物車等功能。",description:"因為家裡的娃娃的東西太多，一直想找個方法來好好的管理這些東西。之前有嘗試過用 Notion 來整理，不過 Notion 在排版上還是有一些限制，所以不是很方便。後來就想說不然把娃娃的東西整理後製作成購物網站吧！既可以分類查找還可以很好的展示幫娃娃們拍的照片，因此就有了這個作品。雖然現在東西還很少，之後會努力繼續新增內容以及擴充功能。",content:{features:["使用 Vue.js 開發","使用 Vuex 做狀態統一管理","使用 Vue-router 製作 SPA 頁面","使用 Sass 建構響應式版型"],functions:["主視覺輪播區","商品列表頁","商品細節頁","購物車"]},tags:["Vue.js","Vue-CLI","Vuex","Vue-router","Bootstrap","Sass","Pug"],imgUrl:{cover:"/img/projects/project1/cover.png",pics:{pic01:{large:"/img/projects/project1/pic01.png",small:"/img/projects/project1/pic01_small.png"},pic02:{large:"/img/projects/project1/pic02.png",small:"/img/projects/project1/pic02_small.png"},pic03:{large:"/img/projects/project1/pic03.png",small:"/img/projects/project1/pic03_small.png"},pic04:{large:"/img/projects/project1/pic04.png",small:"/img/projects/project1/pic04_small.png"}}},urls:{github:"https://github.com/and535014/ca-shop",gitpages:"https://and535014.github.io/ca-shop/"},video:null},{id:"2",title:"Twitter search app",brief:"一個可以在過去七天的推文中搜尋並取得符合關鍵字推文(不包含轉推)的小工具。",description:"",content:{features:["使用 Vue.js 開發","使用 Vuex 做狀態統一管理","使用 Nuxt.js 製作 SSR 頁面","使用 Sass 建構響應式版型"],functions:["Twitter API v2 串接","關鍵字搜尋區","搜尋結果區"]},tags:["Vue.js","Nuxt.js","Vuex","API 串接","Sass","Pug"],imgUrl:{cover:"/img/projects/project2/cover.png",pics:{pic01:{large:"/img/projects/project2/pic01.png",small:"/img/projects/project2/pic01_small.png"},pic02:{large:"/img/projects/project2/pic02.png",small:"/img/projects/project2/pic02_small.png"}}},urls:{github:"https://github.com/and535014/twitter-search",gitpages:null},video:"https://player.vimeo.com/video/741423524?h=386b62dc78&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"}]},footer:{skillList:["Vue.js","Vue-CLI","Vuex","Vue-router","Sass","ES6+","Pug","HTML","CSS"]},resumeUrl:"https://www.cakeresume.com/and535014"},getters:{},mutations:{},actions:{},modules:{About:xs}}),Ds=t.p+"img/logo.97648954.jpg";const Os={class:"navbar",id:"navbar"},Hs={class:"navbar-wrap"},Vs={class:"left"},Us=(0,l._)("img",{class:"logo",src:Ds,alt:""},null,-1),zs=(0,l._)("h1",{class:"logoName"},"Yuting Hsiao",-1),Es={class:"right"},Ws=["href"],As=(0,l._)("span",null,"履歷",-1),Ns=(0,l._)("i",{class:"fa-solid fa-arrow-up-right-from-square icon-s"},null,-1),Ys=[As,Ns],Ms=(0,l._)("i",{class:"fa-solid fa-bars icon-l"},null,-1),Ps=[Ms],Bs={class:"navmenu"},Zs={class:"top"},qs=(0,l._)("i",{class:"fa-solid fa-xmark icon-l"},null,-1),Ks=[qs],Rs={class:"navmenu-links nav-links"},$s=(0,l.Uk)("關於我"),Fs=(0,l.Uk)("專案作品"),Gs=(0,l.Uk)("聯絡方式"),Js={class:"bottom"},Qs=["href"],Xs=(0,l._)("span",null,"履歷",-1),et=(0,l._)("i",{class:"fa-solid fa-arrow-up-right-from-square icon-s"},null,-1),st=[Xs,et];function tt(e,s,t,o,a,r){const c=(0,l.up)("router-link"),u=(0,l.up)("NavLinks"),p=(0,l.up)("SocialLinks");return(0,l.wg)(),(0,l.iD)("nav",Os,[(0,l._)("div",Hs,[(0,l._)("div",Vs,[(0,l.Wm)(c,{class:"navbar-brand",to:"/"},{default:(0,l.w5)((()=>[Us,zs])),_:1})]),(0,l._)("div",Es,[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l._)("a",{class:"btn btn-s btn-secondary btn-round btn-withIcon resume",href:e.resumeUrl,target:"_blank"},Ys,8,Ws)])),_:1}),(0,l._)("div",{class:"navmenu-btn btn btn-icon-l",onClick:s[0]||(s[0]=e=>a.menuIsOpen=!a.menuIsOpen)},Ps)])]),(0,l.Wm)(n.uT,{name:"fadeIn"},{default:(0,l.w5)((()=>[(0,l._)("div",{class:(0,i.C_)(["menu-component",{isShow:a.menuIsOpen}])},[(0,l._)("div",{class:"navmenu-mask",onClick:s[1]||(s[1]=e=>a.menuIsOpen=!a.menuIsOpen)}),(0,l._)("div",Bs,[(0,l._)("div",Zs,[(0,l._)("div",{class:"btn btn-icon-l close",onClick:s[2]||(s[2]=e=>a.menuIsOpen=!a.menuIsOpen)},Ks)]),(0,l._)("div",Rs,[(0,l.Wm)(c,{class:"nav-link",to:"/about",onClick:s[3]||(s[3]=e=>a.menuIsOpen=!a.menuIsOpen)},{default:(0,l.w5)((()=>[$s])),_:1}),(0,l.Wm)(c,{class:"nav-link",to:"/projects",onClick:s[4]||(s[4]=e=>a.menuIsOpen=!a.menuIsOpen)},{default:(0,l.w5)((()=>[Fs])),_:1}),(0,l.Wm)(c,{class:"nav-link",to:"/contact",onClick:s[5]||(s[5]=e=>a.menuIsOpen=!a.menuIsOpen)},{default:(0,l.w5)((()=>[Gs])),_:1})]),(0,l._)("div",Js,[(0,l.Wm)(p,{size:"small"}),(0,l._)("a",{class:"btn btn-l btn-withIcon btn-primary resume",href:e.resumeUrl,target:"_blank"},st,8,Qs)])])],2)])),_:1})])}var nt={name:"NavComp",props:["bodyIsOVH"],computed:{...(0,Q.rn)(["resumeUrl"])},data(){return{menuIsOpen:!1}},watch:{menuIsOpen:{handler(e){this.bodyIsOVH(e)}}}};const lt=(0,u.Z)(nt,[["render",tt]]);var it=lt;const ot={class:"footer caption"},at={class:"section"},rt={class:"container"},ct={class:"top"},ut={class:"left"},pt=(0,l._)("p",null,"本網站由下列技術開發：",-1),dt={class:"techList"},mt={class:"tag tag-s"},gt={class:"right"},vt=(0,l.uE)('<div class="textArea"><div class="email">Email: <a class="hsiao-email" href="mailto:and535014@gmail.com">and535014@gmail.com</a></div><div class="res">素材: <a href="https://storyset.com/marketing">Marketing illustrations by Storyset</a></div></div><div class="bottom"><p class="copy-right">© 2022 YTHsiao 蕭毓庭 | All Rights Reserved.</p></div>',2);function ft(e,s,t,n,o,a){const r=(0,l.up)("SocialLinks");return(0,l.wg)(),(0,l.iD)("footer",ot,[(0,l._)("div",at,[(0,l._)("div",rt,[(0,l._)("div",ct,[(0,l._)("div",ut,[pt,(0,l._)("ul",dt,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.footer.skillList,(e=>((0,l.wg)(),(0,l.iD)("li",mt,(0,i.zw)(e),1)))),256))])]),(0,l._)("div",gt,[(0,l.Wm)(r,{size:"large"})])]),vt])])])}var bt={computed:{...(0,Q.rn)(["footer"])}};const ht=(0,u.Z)(bt,[["render",ft]]);var wt=ht;const _t={class:"social-links"},kt=(0,l.uE)('<li><a class="btn btn-icon-l social-link github" href="https://github.com/and535014" target="_blank"><i class="fa-brands fa-github"></i></a></li><li><a class="btn btn-icon-l social-link codepen" href="https://codepen.io/and535014" target="_blank"><i class="fa-brands fa-codepen"></i></a></li><li><a class="btn btn-icon-l social-link behance" href="https://www.behance.net/and53501422fd" target="_blank"><i class="fa-brands fa-behance"></i></a></li>',3),yt=[kt];function jt(e,s,t,n,i,o){return(0,l.wg)(),(0,l.iD)("ul",_t,yt)}var It={props:["size"]};const Tt=(0,u.Z)(It,[["render",jt]]);var Ct=Tt;const St={class:"mode-swicth"},xt=(0,l._)("i",{class:"fa-regular fa-sun"},null,-1),Lt=[xt],Dt=(0,l._)("i",{class:"fa-regular fa-moon"},null,-1),Ot=[Dt];function Ht(e,s,t,n,o,a){return(0,l.wg)(),(0,l.iD)("div",St,[(0,l._)("div",{class:(0,i.C_)(["btn btn-icon mode isShow",{"btn-l":"large"==t.size,"btn-s":"small"==t.size}])},Lt,2),(0,l._)("div",{class:(0,i.C_)(["btn btn-icon mode",{"btn-l":"large"==t.size,"btn-s":"small"==t.size}])},Ot,2)])}var Vt={props:["size"]};const Ut=(0,u.Z)(Vt,[["render",Ht]]);var zt=Ut;const Et={class:"navbar-links"},Wt=(0,l.Uk)("關於我"),At=(0,l.Uk)("專案作品"),Nt=(0,l.Uk)("聯絡方式");function Yt(e,s,t,n,o,a){const r=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)("div",Et,[(0,l.Wm)(r,{class:"nav-link",to:"/about"},{default:(0,l.w5)((()=>[Wt])),_:1}),(0,l.Wm)(r,{class:(0,i.C_)(["nav-link",a.isActive()]),to:"/projects"},{default:(0,l.w5)((()=>[At])),_:1},8,["class"]),(0,l.Wm)(r,{class:"nav-link",to:"/contact"},{default:(0,l.w5)((()=>[Nt])),_:1}),(0,l.WI)(e.$slots,"default")])}var Mt={methods:{isActive(){let e=this.$route.path.split("/")[1];return"projects"==e&&"active"}}};const Pt=(0,u.Z)(Mt,[["render",Yt]]);var Bt=Pt;const Zt=(0,n.ri)(d);Zt.use(Ls).use(Ss),Zt.component("NavbarComp",it),Zt.component("FooterComp",wt),Zt.component("SocialLinks",Ct),Zt.component("ModeSwitch",zt),Zt.component("NavLinks",Bt),Zt.mount("#app")}},s={};function t(n){var l=s[n];if(void 0!==l)return l.exports;var i=s[n]={exports:{}};return e[n](i,i.exports,t),i.exports}t.m=e,function(){var e=[];t.O=function(s,n,l,i){if(!n){var o=1/0;for(u=0;u<e.length;u++){n=e[u][0],l=e[u][1],i=e[u][2];for(var a=!0,r=0;r<n.length;r++)(!1&i||o>=i)&&Object.keys(t.O).every((function(e){return t.O[e](n[r])}))?n.splice(r--,1):(a=!1,i<o&&(o=i));if(a){e.splice(u--,1);var c=l();void 0!==c&&(s=c)}}return s}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,l,i]}}(),function(){t.n=function(e){var s=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(s,{a:s}),s}}(),function(){t.d=function(e,s){for(var n in s)t.o(s,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:s[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,s){return Object.prototype.hasOwnProperty.call(e,s)}}(),function(){t.p=""}(),function(){var e={143:0};t.O.j=function(s){return 0===e[s]};var s=function(s,n){var l,i,o=n[0],a=n[1],r=n[2],c=0;if(o.some((function(s){return 0!==e[s]}))){for(l in a)t.o(a,l)&&(t.m[l]=a[l]);if(r)var u=r(t)}for(s&&s(n);c<o.length;c++)i=o[c],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(u)},n=self["webpackChunkhsiao"]=self["webpackChunkhsiao"]||[];n.forEach(s.bind(null,0)),n.push=s.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9557)}));n=t.O(n)})();
//# sourceMappingURL=app.703bfe45.js.map