(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(3895)}])},3895:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return Q}});var a=i(5893),n=i(2274),l=i.n(n),s=i(9008),r=i.n(s),o=i(4529);let d=(0,o.Ue)(e=>({sidebar:!1,onSide:t=>e(e=>({sidebar:t}))}));var c=i(5675),u=i.n(c),h=i(7294);function A(e){let{id:t,data:i}=e,n=d(e=>e.sidebar),l=d(e=>e.onSide),s=(0,h.useRef)(null),r=(0,h.useRef)(null),o=e=>{var t;let i=null===(t=e.current)||void 0===t?void 0:t.classList,a=e.current.dataset.animationShow,n=e.current.dataset.animationHide;(i.contains(n)||i.contains("hidden"))&&(i.contains("hidden")&&i.remove("hidden"),i.contains(n)&&i.remove(n),i.add(a))},c=e=>{let t=e.current.classList,i=e.current.dataset.animationHide,a=e.current.dataset.animationShow;t.contains(a)&&(t.remove(a),t.add(i))},A=e=>{let t=e.target.classList;n||t.contains("hidden")||t.add("hidden")};return(0,a.jsxs)("div",{id:t,onClick:()=>{l(!1),c(s),c(r)},className:" bg-black w-full h-14 z-50 fixed top-0 border-b-2   border-[#DBDADA]",children:[(0,a.jsx)("div",{ref:r,"data-animation-show":"animate-fade-in-80","data-animation-hide":"animate-fade-out-80",onAnimationEnd:A,className:" bg-black opacity-80 w-full h-screen top-14 absolute hidden"}),(0,a.jsx)("div",{ref:s,"data-animation-show":"animate-right-to-left","data-animation-hide":"animate-left-to-right",onAnimationEnd:A,className:"bg-[#AAAAAA] w-1/2 h-screen absolute top-14  right-0 sm:w-1/4  xl:w-1/6 hidden",children:(0,a.jsx)("ul",{children:i.menus.map((e,t)=>(0,a.jsx)("li",{className:"p-4 h-14  bg-[#7F7F7F] hover:bg-[#DBDADA] hover:text-[#4D4D4D] text-[#DBDADA] ",onClick:()=>{var t;null===(t=e.ref)||void 0===t||t.current.scrollIntoView({behavior:"smooth",block:"start"})},children:e.label},t))})}),(0,a.jsx)("div",{className:" w-full h-full top-0 p-2 ",children:(0,a.jsxs)("div",{className:"flex justify-between items-center  h-full",children:[(0,a.jsx)("div",{children:(0,a.jsx)(u(),{src:"/images/landing_logo.png",alt:"logo",width:100,height:100,className:"",loading:"lazy"})}),(0,a.jsx)("div",{children:n?(0,a.jsx)("button",{"aria-label":"close menu",className:"text-white  ",onClick:e=>{e.stopPropagation(),l(!1),c(s),c(r)},children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"40",height:"40",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),(0,a.jsx)("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]})}):(0,a.jsx)("button",{className:"text-black","aria-label":"show menu",onClick:e=>{e.stopPropagation(),l(!0),o(s),o(r)},children:(0,a.jsxs)("svg",{width:"40",height:"40",viewBox:"0 0 77 83",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,a.jsxs)("g",{clipPath:"url(#clip0_1_12)",children:[(0,a.jsx)("path",{d:"M67.375 20C67.375 20.9283 67.037 21.8185 66.4353 22.4749C65.8336 23.1312 65.0176 23.5 64.1667 23.5H12.8333C11.9824 23.5 11.1664 23.1312 10.5647 22.4749C9.96302 21.8185 9.625 20.9283 9.625 20C9.625 19.0717 9.96302 18.1815 10.5647 17.5251C11.1664 16.8687 11.9824 16.5 12.8333 16.5H64.1667C65.0176 16.5 65.8336 16.8687 66.4353 17.5251C67.037 18.1815 67.375 19.0717 67.375 20Z",fill:"white"}),(0,a.jsx)("path",{d:"M67.375 41C67.375 41.9283 67.037 42.8185 66.4353 43.4749C65.8336 44.1312 65.0176 44.5 64.1667 44.5H12.8333C11.9824 44.5 11.1664 44.1312 10.5647 43.4749C9.96302 42.8185 9.625 41.9283 9.625 41C9.625 40.0717 9.96302 39.1815 10.5647 38.5251C11.1664 37.8687 11.9824 37.5 12.8333 37.5H64.1667C65.0176 37.5 65.8336 37.8687 66.4353 38.5251C67.037 39.1815 67.375 40.0717 67.375 41Z",fill:"white"}),(0,a.jsx)("path",{d:"M67.375 62C67.375 62.9283 67.037 63.8185 66.4353 64.4749C65.8336 65.1313 65.0176 65.5 64.1667 65.5H12.8333C11.9824 65.5 11.1664 65.1313 10.5647 64.4749C9.96302 63.8185 9.625 62.9283 9.625 62C9.625 61.0717 9.96302 60.1815 10.5647 59.5251C11.1664 58.8687 11.9824 58.5 12.8333 58.5H64.1667C65.0176 58.5 65.8336 58.8687 66.4353 59.5251C67.037 60.1815 67.375 61.0717 67.375 62Z",fill:"white"})]}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_1_12",children:(0,a.jsx)("rect",{width:"77",height:"84",fill:"#DBDADA",transform:"translate(0 -1)"})})})]})})})]})})]})}var m=i(7863);function g(e){let{id:t,data:i}=e,n=(0,h.useRef)(null),l=(0,h.useRef)(null),s=(0,h.useRef)(null);return(0,m.A)([n,l,s]),(0,a.jsx)("div",{ref:t,className:"bg-black w-full h-screen top-0  p-4 flex flex-col justify-end  bg-landing-background bg-cover bg-center    bg-no-repeat   sm:p-14 ",children:(0,a.jsxs)("div",{className:"pb-24",children:[(0,a.jsxs)("div",{className:"mb-16",children:[(0,a.jsx)("h1",{ref:n,"data-animation":"animate-down-to-top",className:"font-bold text-[#DBDADA] text-[32px] sm:text-[40px] lg: lg:text-center   animate-down-to-top ",children:i.title}),(0,a.jsx)("p",{ref:l,"data-animation":"animate-down-to-top",className:"font-bold text-[#DBDADA] text-[24] text-justify mt-6 w-5/6 sm:text-[36px] lg:text-center lg:w-full  animate-down-to-top ",children:i.description})]}),(0,a.jsx)("div",{className:"w-3/6 mx-auto  sm:h-[82px] ",children:(0,a.jsx)("button",{"aria-labelledby":"explore",ref:s,"data-animation":"animate-down-to-top",onClick:()=>{var e;null===(e=i.button.ref)||void 0===e||e.current.scrollIntoView({behavior:"smooth",block:"end"})},className:"text-black text-center w-full h-full bg-[#ffff] rounded-lg  text-[20px] font-bold  sm:text-[32px] animate-down-to-top ",children:i.button.title})})]})})}function x(e){var t;let{id:i,data:n}=e,l=(0,h.useRef)([]);return l.current=n.map((e,i)=>null!==(t=l.current[i])&&void 0!==t?t:(0,h.createRef)()),n.map(e=>{}),(0,m.A)(l.current),(0,a.jsxs)("div",{ref:i,className:"bg-[#DBDADA] block h-full p-4 sm:p-14",children:[(0,a.jsx)("h1",{className:"font-[#080808] text-3xl font-bold text-center mt-16  sm:text-[40px] sm:leading-[49px]",children:"Benefit of Running"}),(0,a.jsx)("div",{className:"flex flex-col items-center justify-center gap-7 my-12  sm:flex-row sm:justify-between lg:justify-center lg:gap-24 lg:my-44 ",children:n.map((e,t)=>(0,a.jsxs)("div",{ref:l.current[t],"data-animation":"animate-down-to-top",className:"border-8 border-solid border-black h-44 w-44 rounded-[50px] p-2 lg:h-[259px] lg:w-[328px]",children:[(0,a.jsx)("div",{className:"w-24 h-24 mx-auto lg:w-40 lg:h-40",children:(0,a.jsx)(u(),{src:e.image,alt:e.alt,className:"object-cover h-full w-full",loading:"lazy"})}),(0,a.jsx)("h1",{className:"font-bold text-black text-xl text-center underline  underline-offset-4 lg:text-[30px] lg:mt-3 ",children:e.title})]},e.alt))})]})}var p=i(1664),f=i.n(p);function b(){return(0,a.jsx)("div",{className:"h-full w-full bg-[#141414] text-white",children:(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{className:"flex justify-center gap-3 p-3",children:[(0,a.jsx)(f(),{href:"#","aria-label":"instagram",children:(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,a.jsx)("rect",{x:"2",y:"2",width:"20",height:"20",rx:"5",ry:"5"}),(0,a.jsx)("path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"}),(0,a.jsx)("line",{x1:"17.5",y1:"6.5",x2:"17.51",y2:"6.5"})]})}),(0,a.jsx)(f(),{href:"#","aria-label":"facebook",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"})})}),(0,a.jsx)(f(),{href:"#","aria-label":"twitter",children:(0,a.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,a.jsx)("path",{d:"M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"})})})]}),(0,a.jsx)("div",{className:"pb-5",children:(0,a.jsx)("h1",{className:"font-bold text-lg text-center ",children:"\xa9 2023 BOXGRAMER"})})]})})}var w={src:"/fe-runner/_next/static/media/landing_logo.3f1e098c.png",height:72,width:264,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mNweL7p/77/p//v/r/q/5L/es8ZQp+f/H/g/0GgwHGghO1zAKrpGV9iXapEAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:2},v={src:"/fe-runner/_next/static/media/section_2_image_1.405b9ba1.webp",height:2e3,width:3e3,blurDataURL:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4ID4AAADQAQCdASoIAAUAAkA4JQBOgCLL/o1hIAD+2CG0uK348Y/gq6dh7B4l2qQd7VyzHaWG984lEkPB6Vyc6OAAAA==",blurWidth:8,blurHeight:5},j={src:"/fe-runner/_next/static/media/section_2_image_2.1df54eb0.webp",height:2956,width:1971,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAADQAQCdASoFAAgAAkA4JZQCdAD0MkliAAD++KfjK2BtP0gJ+nFGRMGDitIpZ9O5AHB2AC3ZoR6dYAAA",blurWidth:5,blurHeight:8},C={src:"/fe-runner/_next/static/media/heart-beat.54aa7177.png",height:99,width:106,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAQAAACfUMTVAAAAUElEQVR42g3HSQqDABREwUoWhpAE4lZEccBZ3Ciuvf+l/DQ09fgaLP5Ss9GHXZwIiZ+dHhueYGDSOQOXRmHmpZY5vK0qCdAEWwXwiFHKhbkBWOsFMAaJUtQAAAAASUVORK5CYII=",blurWidth:8,blurHeight:7},k={src:"/fe-runner/_next/static/media/bmi.083fd769.png",height:98,width:76,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAVUlEQVR42g3CvQqCYAAAwIOGtraGpmpsaSoQGhoURBDxBxFBUDcRHH1/P+54u9nMUonwg6tWSeGHl1TE2YTO04Xagkrtz6gX+2rkDEHkIQvs7jiZrAc2Iwtf2gJDagAAAABJRU5ErkJggg==",blurWidth:6,blurHeight:8},D={src:"/fe-runner/_next/static/media/mental-health.5a3e21f9.png",height:92,width:74,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAICAQAAABwz0azAAAAV0lEQVR42g3DuwqCUAAA0LO19NgiaJMgqCUMAqkhfC5XEVwUB7/Cj/Cv9cBhr9IJBhGx4KMUTPTufl4eEmqj1tdl6+zgbzFreIPCTUwlccXRk52TXCoTrUJECjl4wieJAAAAAElFTkSuQmCC",blurWidth:6,blurHeight:8},R={src:"/fe-runner/_next/static/media/section_4_image_1.f0bae3ec.webp",height:2e3,width:3e3,blurDataURL:"data:image/webp;base64,UklGRkQAAABXRUJQVlA4IDgAAADwAQCdASoIAAUAAkA4JZgCdGuAAstYl7gA3l/aRixCjUSPtD9tdOE323vgsfvN2Om/pYyteAAAAA==",blurWidth:8,blurHeight:5},U={src:"/fe-runner/_next/static/media/section_4_image_2.fe7266e7.webp",height:2089,width:1395,blurDataURL:"data:image/webp;base64,UklGRkYAAABXRUJQVlA4IDoAAAAwAgCdASoFAAgAAkA4JQBOjXAYIAB1RZIkAAD+l5z25apIPqOnyRjkaIc5zlQ6TKJ0EqLN/ficccAA",blurWidth:5,blurHeight:8},N=i(5152),B=i.n(N);let E=B()(()=>i.e(120).then(i.bind(i,5120)),{loadableGenerated:{webpack:()=>[5120]},loading:()=>(0,a.jsx)("p",{children:"loading..."})}),_=B()(()=>i.e(931).then(i.bind(i,5931)),{loadableGenerated:{webpack:()=>[5931]},loading:()=>(0,a.jsx)("p",{children:"loading..."})});function Q(){let e=(0,h.useRef)(null),t=(0,h.useRef)(null),i=(0,h.useRef)(null),n=(0,h.useRef)(null);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r(),{children:[(0,a.jsx)("title",{children:"Workout | Example"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("meta",{httpEquiv:"Permissions-Policy",content:"interest-cohort=()"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("main",{className:l().className,children:(0,a.jsxs)("div",{className:"relative",children:[(0,a.jsx)(A,{id:"header",data:{logo:{src:w,alt:"logo"},menus:[{label:"Home",ref:e},{label:"Info",ref:t},{label:"Benefit",ref:i},{label:"Comunity",ref:n}]}}),(0,a.jsx)(g,{id:e,data:{title:"running club",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doe iusmod tempor",button:{title:"Start Exploring",ref:n}}}),(0,a.jsx)(_,{id:t,data:{title:"Runnig and Walking",description:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Eros in cursus turpis massa tincidunt dui ut. Id semper risus in hendrerit gravida rutrum quisque non. Laoreet suspendisse interdum consectetur libero id. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. ",image1:{src:v,alt:"image section 2"},image2:{src:j,alt:"image section 2"}}}),(0,a.jsx)(x,{id:i,data:[{image:C,alt:"heart beat",title:"heart beat"},{image:k,alt:"bmi",title:"weight body"},{image:D,alt:"mental health",title:"release strees"}]}),(0,a.jsx)(E,{id:n,data:[{title:"Running On Road",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Iaculis eu non diam phasellus vestibulum. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Sit amet nisl suscipit",image1:{src:R,alt:"image 1"},image2:{src:U,alt:"image 2"}},{title:"Running On Road 2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Iaculis eu non diam phasellus vestibulum. Eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Sit amet nisl suscipit",image1:{src:U,alt:"image 1"},image2:{src:R,alt:"image 2"}}]}),(0,a.jsx)(b,{})]})})]})}},7863:function(e,t,i){"use strict";i.d(t,{A:function(){return n}});var a=i(7294);let n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"100px 0px 100px 0px",i=!(arguments.length>2)||void 0===arguments[2]||arguments[2];(0,a.useEffect)(()=>{if(!i)return;let a=e=>{e.forEach(e=>{let t=e.target.getAttribute("data-animation");if(t){let i=e.target.classList;e.isIntersecting?i.contains(t)||i.add(t):i.contains(t)&&i.remove(t)}})},n=new IntersectionObserver(a,{rootMargin:t});return e.forEach(e=>{e.current&&n.observe(e.current)}),()=>{n.disconnect()}},[i,e,t])}}},function(e){e.O(0,[769,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);