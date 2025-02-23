(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{9333:(e,t,a)=>{Promise.resolve().then(a.bind(a,9716))},9716:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>T});var s=a(5155),i=a(2115),r=a(8888),l=a(1567);let n=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("rounded-xl border bg-card text-card-foreground shadow",a),...i})});n.displayName="Card";let o=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex flex-col space-y-1.5 p-6",a),...i})});o.displayName="CardHeader";let c=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("font-semibold leading-none tracking-tight",a),...i})});c.displayName="CardTitle";let d=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("text-sm text-muted-foreground",a),...i})});d.displayName="CardDescription";let m=i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("p-6 pt-0",a),...i})});m.displayName="CardContent",i.forwardRef((e,t)=>{let{className:a,...i}=e;return(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex items-center p-6 pt-0",a),...i})}).displayName="CardFooter";var u=a(2576),x=a(1598),h=a(2884),p=a(2317);let f=(0,a(1027).F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground shadow hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),y=i.forwardRef((e,t)=>{let{className:a,variant:i,size:r,asChild:n=!1,...o}=e,c=n?p.DX:"button";return(0,s.jsx)(c,{className:(0,l.cn)(f({variant:i,size:r,className:a})),ref:t,...o})});y.displayName="Button";let g=i.createContext(null);function w(){let e=i.useContext(g);if(!e)throw Error("useCarousel must be used within a <Carousel />");return e}let b=i.forwardRef((e,t)=>{let{orientation:a="horizontal",opts:r,setApi:n,plugins:o,className:c,children:d,...m}=e,[x,h]=(0,u.A)({...r,axis:"horizontal"===a?"x":"y"},o),[p,f]=i.useState(!1),[y,w]=i.useState(!1),b=i.useCallback(e=>{e&&(f(e.canScrollPrev()),w(e.canScrollNext()))},[]),v=i.useCallback(()=>{null==h||h.scrollPrev()},[h]),N=i.useCallback(()=>{null==h||h.scrollNext()},[h]),j=i.useCallback(e=>{"ArrowLeft"===e.key?(e.preventDefault(),v()):"ArrowRight"===e.key&&(e.preventDefault(),N())},[v,N]);return i.useEffect(()=>{h&&n&&n(h)},[h,n]),i.useEffect(()=>{if(h)return b(h),h.on("reInit",b),h.on("select",b),()=>{null==h||h.off("select",b)}},[h,b]),(0,s.jsx)(g.Provider,{value:{carouselRef:x,api:h,opts:r,orientation:a||((null==r?void 0:r.axis)==="y"?"vertical":"horizontal"),scrollPrev:v,scrollNext:N,canScrollPrev:p,canScrollNext:y},children:(0,s.jsx)("div",{ref:t,onKeyDownCapture:j,className:(0,l.cn)("relative",c),role:"region","aria-roledescription":"carousel",...m,children:d})})});b.displayName="Carousel";let v=i.forwardRef((e,t)=>{let{className:a,...i}=e,{carouselRef:r,orientation:n}=w();return(0,s.jsx)("div",{ref:r,className:"overflow-hidden",children:(0,s.jsx)("div",{ref:t,className:(0,l.cn)("flex","horizontal"===n?"-ml-4":"-mt-4 flex-col",a),...i})})});v.displayName="CarouselContent";let N=i.forwardRef((e,t)=>{let{className:a,...i}=e,{orientation:r}=w();return(0,s.jsx)("div",{ref:t,role:"group","aria-roledescription":"slide",className:(0,l.cn)("min-w-0 shrink-0 grow-0 basis-full","horizontal"===r?"pl-4":"pt-4",a),...i})});N.displayName="CarouselItem";let j=i.forwardRef((e,t)=>{let{className:a,variant:i="outline",size:r="icon",...n}=e,{orientation:o,scrollPrev:c,canScrollPrev:d}=w();return(0,s.jsxs)(y,{ref:t,variant:i,size:r,className:(0,l.cn)("absolute  h-8 w-8 rounded-full","horizontal"===o?"-left-12 top-1/2 -translate-y-1/2":"-top-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!d,onClick:c,...n,children:[(0,s.jsx)(x.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Previous slide"})]})});j.displayName="CarouselPrevious";let C=i.forwardRef((e,t)=>{let{className:a,variant:i="outline",size:r="icon",...n}=e,{orientation:o,scrollNext:c,canScrollNext:d}=w();return(0,s.jsxs)(y,{ref:t,variant:i,size:r,className:(0,l.cn)("absolute h-8 w-8 rounded-full","horizontal"===o?"-right-12 top-1/2 -translate-y-1/2":"-bottom-12 left-1/2 -translate-x-1/2 rotate-90",a),disabled:!d,onClick:c,...n,children:[(0,s.jsx)(h.A,{className:"h-4 w-4"}),(0,s.jsx)("span",{className:"sr-only",children:"Next slide"})]})});C.displayName="CarouselNext";var M=a(5564),S=a(6367);function T(){let[e,t]=(0,i.useState)(""),{toast:a}=(0,M.dj)();return(0,s.jsxs)("main",{className:"flex min-h-screen w-full flex-col items-center justify-start bg-white text-gray-800",children:[(0,s.jsxs)("section",{className:"relative w-full bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 p-8 text-white",children:[(0,s.jsxs)("div",{className:"container mx-auto flex flex-col items-center justify-center gap-4 py-8 mt",children:[(0,s.jsx)(r.P.h1,{className:"text-5xl font-bold text-center",initial:{opacity:0,y:-50},animate:{opacity:1,y:0},transition:{duration:.8},children:(0,s.jsxs)("div",{className:"flex items-center gap-4",children:[(0,s.jsx)("span",{children:"MedLM"}),(0,s.jsx)("img",{src:"logo-white.svg",alt:"MedLM Logo",className:"w-10 h-10 mb-3"})]})}),(0,s.jsx)(r.P.h2,{className:"text-2xl md:text-3xl text-center font-semibold",initial:{opacity:0,y:50},animate:{opacity:1,y:0},transition:{duration:.8,delay:.2},children:"LLMs for Medicine are here"}),(0,s.jsx)(r.P.p,{className:"max-w-2xl text-center text-white text-base md:text-lg",initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.4},children:"Large Language Models (LLMs) are transforming healthcare, but they need to be specialized for medical use. MedLM is built specifically for healthcare professionals, with specialized knowledge graphs and up-to-date clinical guidelines to ensure accurate, reliable information at your fingertips."}),(0,s.jsx)(r.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.6},children:(0,s.jsxs)("form",{onSubmit:s=>{s.preventDefault(),S.Ay.send("service_vppy4ad","template_lb4yoye",{user_email:e},"NT01CCJjMmnOvyhhc").then(e=>{console.log("EmailJS result:",e.text),a({description:"Thanks for joining the waitlist!"})}).catch(e=>{console.error("EmailJS error:",e),a({description:"Oops, something went wrong. Please try again.",variant:"destructive"})}),t("")},className:"flex flex-col md:flex-row gap-2 items-center",children:[(0,s.jsx)("input",{type:"email",value:e,onChange:e=>t(e.target.value),required:!0,className:"px-5 py-2 rounded-2xl text-gray-800",placeholder:"name@example.com"}),(0,s.jsx)(y,{type:"submit",className:"bg-white text-blue-600 hover:bg-blue-50 text-lg font-semibold px-6 py-3 rounded-2xl shadow-lg",children:"Join Waitlist"})]})}),(0,s.jsx)(r.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.5},className:"my-4 w-full max-w-2xl",children:(0,s.jsx)("img",{src:"demo.gif",alt:"Silent Demo",className:"rounded-xl shadow-lg"})})]}),(0,s.jsx)(r.P.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.8,delay:.6},className:"flex justify-center",children:(0,s.jsxs)(b,{className:"w-full max-w-lg md:max-w-2xl lg:max-w-4xl",children:[(0,s.jsx)(v,{className:"-ml-1",children:[{id:1,name:"Dr. Farhan Ahmed",description:"Nobody wants to see their doctor using ChatGPT. MedLM provides a professional experience for your practice.",picture_path:"farhan.jpeg"},{id:2,name:"Dr. Mohammad Maaz",description:"Typical Chatbots that don't have up to date clinical practice guidelines and constantly hallucinate",picture_path:"maaz.jpeg"},{id:3,name:"Dr. Adina Khan",description:"I was already using the sources that MedLM cites. Now sometimes it's more up to date than me!",picture_path:"adina.jpeg"}].map(e=>(0,s.jsx)(N,{className:"pl-1 md:basis-1/3 lg:basis-1/3",children:(0,s.jsx)("div",{className:"p-1 h-full",children:(0,s.jsx)(n,{className:"h-full",children:(0,s.jsxs)(o,{className:"h-full",children:[(0,s.jsx)(c,{children:(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)("img",{src:e.picture_path,alt:"MedLM Logo",className:"w-10 h-10 rounded-full"}),e.name]})}),(0,s.jsx)(d,{children:e.description})]})})})},e.id))}),(0,s.jsx)(j,{}),(0,s.jsx)(C,{})]})})]}),(0,s.jsx)("section",{className:"container mx-auto mt-12 mb-2 px-4 text-center",children:(0,s.jsxs)(r.P.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[(0,s.jsx)("h3",{className:"text-3xl font-semibold mb-4",children:"Know what your chat is thinking with Cited Sources"}),(0,s.jsx)("p",{className:"text-gray-700 mb-6 max-w-4xl mx-auto",children:"MedLM embeds citations in its responses, ensuring that your answers are based on the most up-to-date research and clinical practice guidelines, which you can check for yourself."})]})}),(0,s.jsx)("section",{className:"container mx-auto mt-12 mb-2 px-4 text-center",children:(0,s.jsxs)(r.P.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[(0,s.jsx)("h3",{className:"text-3xl font-semibold mb-4",children:"Your patients don't trust ChatGPT"}),(0,s.jsx)("p",{className:"text-gray-700 mb-6 max-w-4xl mx-auto",children:"Nobody wants to see their doctor using ChatGPT. MedLM provides a professional experience for medical professionals and patients alike, instilling confidence in your practice."})]})}),(0,s.jsx)("section",{className:"container mx-auto mt-12 mb-12 px-4 text-center",children:(0,s.jsxs)(r.P.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[(0,s.jsx)("h3",{className:"text-3xl font-semibold mb-4",children:"Up to date with the most recent research"}),(0,s.jsx)("p",{className:"text-gray-700 mb-6 max-w-4xl mx-auto",children:"Don't wait to go to that seminar. MedLM is built on the latest research and clinical practice guidelines, ensuring that your practice is always up to date with the latest research."})]})}),(0,s.jsxs)("section",{className:"container mx-auto mt-6 px-4 max-w-4xl",children:[(0,s.jsx)("h3",{className:"text-3xl font-semibold mb-6 text-center",children:"Why MedLM?"}),(0,s.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[(0,s.jsx)(r.P.div,{whileHover:{scale:1.02},className:"w-full",children:(0,s.jsx)(n,{className:"border border-gray-200 shadow-sm h-full",children:(0,s.jsxs)(m,{className:"flex flex-col items-start p-4",children:[(0,s.jsx)("h4",{className:"text-xl font-semibold mb-2",children:"Customized Knowledge Graphs"}),(0,s.jsx)("p",{className:"text-sm text-gray-700",children:"Seamlessly integrate specialized medical data for faster, more accurate query responses."})]})})}),(0,s.jsx)(r.P.div,{whileHover:{scale:1.02},className:"w-full",children:(0,s.jsx)(n,{className:"border border-gray-200 shadow-sm h-full",children:(0,s.jsxs)(m,{className:"flex flex-col items-start p-4",children:[(0,s.jsx)("h4",{className:"text-xl font-semibold mb-2",children:"RAG-Powered Accuracy"}),(0,s.jsx)("p",{className:"text-sm text-gray-700",children:"Leverage Retrieval-Augmented Generation to reference the latest guidelines, ensuring reliable answers."})]})})}),(0,s.jsx)(r.P.div,{whileHover:{scale:1.02},className:"w-full",children:(0,s.jsx)(n,{className:"border border-gray-200 shadow-sm h-full",children:(0,s.jsxs)(m,{className:"flex flex-col items-start p-4",children:[(0,s.jsx)("h4",{className:"text-xl font-semibold mb-2",children:"Doctor-Centric Solutions"}),(0,s.jsx)("p",{className:"text-sm text-gray-700",children:"Built to support clinical workflows—making it easier than ever to integrate AI into day-to-day practice."})]})})})]})]}),(0,s.jsx)("section",{className:"container mx-auto mt-12 mb-12 px-4 text-center",children:(0,s.jsxs)(r.P.div,{initial:{opacity:0,y:30},whileInView:{opacity:1,y:0},viewport:{once:!0},transition:{duration:.6},children:[(0,s.jsx)("h3",{className:"text-3xl font-semibold mb-4",children:"Powerful, Secure, and Innovative"}),(0,s.jsx)("p",{className:"text-gray-700 mb-6 max-w-4xl mx-auto",children:"MedLM is engineered for data security, ensuring your patients’ information is safeguarded. Our solutions adapt to your specific medical domain, from primary care to specialized fields."}),(0,s.jsx)(y,{className:"bg-blue-600 text-white hover:bg-blue-700 text-lg font-semibold px-6 py-3 rounded-2xl shadow-lg",onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:"Back to Top"})]})}),(0,s.jsx)("footer",{className:"w-full bg-gray-100 py-6 mt-auto text-center",children:(0,s.jsxs)("p",{className:"text-gray-600",children:["\xa9 ",new Date().getFullYear()," MedLM. All Rights Reserved."]})})]})}},5564:(e,t,a)=>{"use strict";a.d(t,{dj:()=>u});var s=a(2115);let i=0,r=new Map,l=e=>{if(r.has(e))return;let t=setTimeout(()=>{r.delete(e),d({type:"REMOVE_TOAST",toastId:e})},1e6);r.set(e,t)},n=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:a}=t;return a?l(a):e.toasts.forEach(e=>{l(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},o=[],c={toasts:[]};function d(e){c=n(c,e),o.forEach(e=>{e(c)})}function m(e){let{...t}=e,a=(i=(i+1)%Number.MAX_SAFE_INTEGER).toString(),s=()=>d({type:"DISMISS_TOAST",toastId:a});return d({type:"ADD_TOAST",toast:{...t,id:a,open:!0,onOpenChange:e=>{e||s()}}}),{id:a,dismiss:s,update:e=>d({type:"UPDATE_TOAST",toast:{...e,id:a}})}}function u(){let[e,t]=s.useState(c);return s.useEffect(()=>(o.push(t),()=>{let e=o.indexOf(t);e>-1&&o.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>d({type:"DISMISS_TOAST",toastId:e})}}},1567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>r});var s=a(3463),i=a(9795);function r(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,i.QP)((0,s.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[129,736,441,517,358],()=>t(9333)),_N_E=e.O()}]);