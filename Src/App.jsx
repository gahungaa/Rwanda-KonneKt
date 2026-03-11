import { useState } from "react";

const C = {
  cream:"#FDF6EC", sand:"#F5E6CC", warm:"#EDD9B0", terra:"#C1440E", terraL:"#E05A28",
  terraDim:"#9B3510", gold:"#D4860A", goldL:"#F5A623", earth:"#6B3A1F", bark:"#3D1F0A",
  ink:"#1C0E05", white:"#FFFFFF", muted:"#A08060", success:"#2A7A4B", info:"#1A5FAB",
};

const ImiPattern1 = ({ size=80, c1=C.terra, c2=C.ink, c3=C.cream }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <rect width="80" height="80" fill={c3}/>
    <polygon points="40,4 76,40 40,76 4,40" fill={c1}/>
    <polygon points="40,16 64,40 40,64 16,40" fill={c2}/>
    <polygon points="40,28 52,40 40,52 28,40" fill={c3}/>
    <polygon points="40,36 44,40 40,44 36,40" fill={c1}/>
  </svg>
);

const ImiPattern2 = ({ size=80, c1=C.terra, c2=C.ink, c3=C.cream }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <rect width="80" height="80" fill={c3}/>
    <rect x="0"  y="0"  width="40" height="40" fill={c1}/>
    <rect x="40" y="40" width="40" height="40" fill={c1}/>
    <rect x="8"  y="8"  width="24" height="24" fill={c2}/>
    <rect x="48" y="48" width="24" height="24" fill={c2}/>
    <rect x="16" y="16" width="8"  height="8"  fill={c3}/>
    <rect x="56" y="56" width="8"  height="8"  fill={c3}/>
    <rect x="40" y="0"  width="40" height="40" fill={c2}/>
    <rect x="0"  y="40" width="40" height="40" fill={c2}/>
    <rect x="48" y="8"  width="24" height="24" fill={c1}/>
    <rect x="8"  y="48" width="24" height="24" fill={c1}/>
    <rect x="56" y="16" width="8"  height="8"  fill={c3}/>
    <rect x="16" y="56" width="8"  height="8"  fill={c3}/>
  </svg>
);

const ImiPattern3 = ({ size=80, c1=C.terra, c2=C.ink, c3=C.cream }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <rect width="80" height="80" fill={c2}/>
    <polygon points="0,0 20,0 40,20 20,40 0,20" fill={c1}/>
    <polygon points="40,0 60,0 80,20 60,40 40,20" fill={c1}/>
    <polygon points="20,40 40,20 60,40 40,60" fill={c3}/>
    <polygon points="0,40 20,20 40,40 20,60 0,40" fill={c3}/>
    <polygon points="40,40 60,20 80,40 60,60 40,40" fill={c3}/>
    <polygon points="0,60 20,40 40,60 20,80 0,80" fill={c1}/>
    <polygon points="40,60 60,40 80,60 60,80 40,80" fill={c1}/>
    <polygon points="20,80 40,60 60,80" fill={c3}/>
  </svg>
);

const ImiPattern4 = ({ size=80, c1=C.gold, c2=C.ink, c3=C.cream }) => (
  <svg width={size} height={size} viewBox="0 0 80 80">
    <rect width="80" height="80" fill={c1}/>
    <polygon points="40,0 80,0 80,40" fill={c2}/>
    <polygon points="0,40 0,80 40,80" fill={c2}/>
    <polygon points="40,80 80,80 80,40" fill={c3}/>
    <polygon points="0,0 40,0 0,40" fill={c3}/>
    <polygon points="40,20 60,40 40,60 20,40" fill={c2}/>
    <polygon points="40,28 52,40 40,52 28,40" fill={c1}/>
  </svg>
);

const ImiWall = ({ rows=2, cols=8, opacity=0.12, size=80 }) => {
  const patterns = [ImiPattern1,ImiPattern2,ImiPattern3,ImiPattern4];
  return (
    <div style={{ display:"flex", flexWrap:"wrap", width:cols*size, opacity }}>
      {Array.from({length:rows*cols}).map((_,i) => {
        const P = patterns[i%patterns.length];
        return <P key={i} size={size}/>;
      })}
    </div>
  );
};

const ImiBorder = ({ height=14, flip=false }) => (
  <div style={{ overflow:"hidden", height, lineHeight:0, transform:flip?"scaleY(-1)":"none" }}>
    <svg width="100%" height={height} viewBox={`0 0 800 ${height}`} preserveAspectRatio="xMidYMid slice">
      {Array.from({length:40}).map((_,i) => (
        <polygon key={i} points={`${i*20},${height} ${i*20+10},0 ${i*20+20},${height}`}
          fill={i%3===0?C.terra:i%3===1?C.ink:C.gold}/>
      ))}
    </svg>
  </div>
);

const ImiDivider = () => (
  <div style={{ display:"flex", alignItems:"center", gap:8, margin:"10px 0" }}>
    <div style={{ flex:1, height:1, background:`linear-gradient(90deg, transparent, ${C.terra}66, transparent)` }}/>
    <svg width="14" height="14" viewBox="0 0 14 14"><polygon points="7,0 14,7 7,14 0,7" fill={C.terra}/></svg>
    <svg width="9" height="9" viewBox="0 0 9 9"><polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill={C.gold}/></svg>
    <svg width="14" height="14" viewBox="0 0 14 14"><polygon points="7,0 14,7 7,14 0,7" fill={C.terra}/></svg>
    <div style={{ flex:1, height:1, background:`linear-gradient(90deg, transparent, ${C.terra}66, transparent)` }}/>
  </div>
);

const INFLUENCERS = [
  { id:1,name:"Amara Uwimana",handle:"@amaracreates",niche:"Fashion & Lifestyle",location:"Kigali",avatar:"AU",verified:true,rating:4.9,followers:{instagram:128000,tiktok:89000,youtube:45000,twitter:23000},engagement:7.2,pricePerPost:150000,bio:"Fashion forward. Rwanda proud. Creating content that celebrates African style from the heart of Kigali.",tags:["Fashion","Lifestyle","Beauty"],color:C.terra },
  { id:2,name:"Patrick Nkurunziza",handle:"@patricktech",niche:"Technology",location:"Kigali",avatar:"PN",verified:true,rating:4.8,followers:{youtube:210000,twitter:67000,instagram:34000,tiktok:12000},engagement:5.8,pricePerPost:200000,bio:"Tech enthusiast, software dev & educator. Making tech accessible for East Africa.",tags:["Tech","Education","Innovation"],color:C.gold },
  { id:3,name:"Clarisse Ingabire",handle:"@clarissefood",niche:"Food & Culture",location:"Musanze",avatar:"CI",verified:false,rating:4.7,followers:{instagram:78000,tiktok:145000,youtube:22000,twitter:8000},engagement:9.1,pricePerPost:80000,bio:"Bringing Rwanda's rich culinary heritage to your feed. Food is culture.",tags:["Food","Culture","Travel"],color:"#7B3F00" },
  { id:4,name:"Eric Habimana",handle:"@ericcomedy",niche:"Comedy & Entertainment",location:"Kigali",avatar:"EH",verified:true,rating:4.6,followers:{tiktok:420000,youtube:89000,instagram:56000,twitter:34000},engagement:11.3,pricePerPost:120000,bio:"Making Rwanda laugh one skit at a time. Born funny, certified hilarious.",tags:["Comedy","Entertainment","Skits"],color:C.terraL },
  { id:5,name:"Diane Mukamana",handle:"@dianetravel",niche:"Travel & Nature",location:"Rubavu",avatar:"DM",verified:false,rating:4.5,followers:{instagram:95000,youtube:38000,tiktok:67000,twitter:15000},engagement:6.4,pricePerPost:95000,bio:"Exploring the land of a thousand hills. Rwanda's beauty through my lens.",tags:["Travel","Nature","Adventure"],color:C.success },
  { id:6,name:"Jean Paul Hakizimana",handle:"@jphfitness",niche:"Fitness & Wellness",location:"Kigali",avatar:"JH",verified:true,rating:4.8,followers:{instagram:112000,youtube:75000,tiktok:98000,twitter:29000},engagement:8.7,pricePerPost:130000,bio:"Certified trainer. Rwandan champion. Your wellness journey starts here.",tags:["Fitness","Wellness","Health"],color:C.info },
];

const CAMPAIGNS = [
  { id:1,brand:"MTN Rwanda",title:"Digital Rwanda Campaign",budget:5000000,platform:"All",influencers:5,deadline:"30 Aug 2025",status:"Active",category:"Telecom" },
  { id:2,brand:"Bank of Kigali",title:"Youth Savings Drive",budget:2500000,platform:"Instagram",influencers:3,deadline:"15 Jul 2025",status:"Active",category:"Finance" },
  { id:3,brand:"RwandAir",title:"Explore Rwanda Series",budget:8000000,platform:"YouTube",influencers:8,deadline:"01 Sep 2025",status:"Open",category:"Travel" },
  { id:4,brand:"Inyange Industries",title:"Fresh & Local",budget:1500000,platform:"TikTok",influencers:6,deadline:"20 Jul 2025",status:"Open",category:"FMCG" },
];

const MSGS = [
  { id:1,from:"MTN Rwanda",av:"MT",time:"10:32 AM",preview:"We'd love to collaborate on our 5G rollout...",unread:true,chat:[
    {mine:false,text:"Hi! We love your content and think you'd be perfect for our Digital Rwanda campaign.",time:"10:28 AM"},
    {mine:true,text:"Thank you so much! I'd love to hear the details.",time:"10:30 AM"},
    {mine:false,text:"We'd love a 3-month partnership for our 5G rollout campaign with great visibility.",time:"10:32 AM"},
  ]},
  { id:2,from:"Bank of Kigali",av:"BK",time:"Yesterday",preview:"We've reviewed your profile and are impressed!",unread:true,chat:[
    {mine:false,text:"Thanks for applying. We've reviewed your profile and are truly impressed!",time:"Yesterday"},
  ]},
  { id:3,from:"RwandAir",av:"RA",time:"Monday",preview:"Campaign brief attached. Please review...",unread:false,chat:[
    {mine:false,text:"Campaign brief is attached. Let us know your availability for filming.",time:"Monday"},
  ]},
];

const fmt = n => n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e3?(n/1e3).toFixed(1)+"K":n;
const totalF = inf => Object.values(inf.followers).reduce((a,b)=>a+b,0);
const fmtRWF = n => "RWF "+n.toLocaleString();
const plColor = { instagram:"#E1306C", tiktok:"#2DC5D0", youtube:"#FF0000", twitter:"#1DA1F2" };

const Avatar = ({ initials, color=C.terra, size=48 }) => (
  <div style={{
    width:size,height:size,borderRadius:"50%",flexShrink:0,
    background:`linear-gradient(135deg,${color},${color}bb)`,
    display:"flex",alignItems:"center",justifyContent:"center",
    color:"#fff",fontFamily:"'Cormorant Garamond',serif",fontWeight:700,
    fontSize:size*0.36,boxShadow:`0 3px 12px ${color}40`,
  }}>{initials}</div>
);

const Tag = ({ children, color=C.terra }) => (
  <span style={{
    display:"inline-block",padding:"3px 10px",borderRadius:99,
    background:`${color}18`,color,fontSize:11,fontWeight:600,
    fontFamily:"'DM Mono',monospace",border:`1px solid ${color}33`,letterSpacing:"0.04em",
  }}>{children}</span>
);

const StatTile = ({ label, value, sub, accent=C.terra }) => (
  <div style={{
    background:C.white,border:`1px solid ${C.warm}`,borderRadius:14,padding:"18px 20px",position:"relative",overflow:"hidden",
  }}>
    <div style={{ position:"absolute",bottom:-14,right:-14,opacity:0.07 }}>
      <ImiPattern1 size={66} c1={accent} c2={C.ink} c3={C.cream}/>
    </div>
    <div style={{ fontSize:10,fontFamily:"'DM Mono',monospace",color:C.muted,marginBottom:7,letterSpacing:"0.08em",textTransform:"uppercase" }}>{label}</div>
    <div style={{ fontSize:26,fontWeight:800,fontFamily:"'Cormorant Garamond',serif",color:C.ink,lineHeight:1 }}>{value}</div>
    {sub&&<div style={{ fontSize:11,color:accent,fontFamily:"'DM Mono',monospace",marginTop:5 }}>{sub}</div>}
    <div style={{ position:"absolute",bottom:0,left:0,right:0,height:3,background:`linear-gradient(90deg,${accent},transparent)` }}/>
  </div>
);

const PlatformBar = ({ platform, value, max }) => (
  <div style={{ marginBottom:10 }}>
    <div style={{ display:"flex",justifyContent:"space-between",marginBottom:4 }}>
      <span style={{ fontSize:12,color:C.earth,fontFamily:"'DM Mono',monospace" }}>
        {{instagram:"Instagram",tiktok:"TikTok",youtube:"YouTube",twitter:"X (Twitter)"}[platform]}
      </span>
      <span style={{ fontSize:12,fontWeight:700,fontFamily:"'DM Mono',monospace",color:C.ink }}>{fmt(value)}</span>
    </div>
    <div style={{ height:6,background:C.warm,borderRadius:99,overflow:"hidden" }}>
      <div style={{ height:"100%",width:`${(value/max)*100}%`,background:plColor[platform],borderRadius:99,transition:"width 0.8s ease" }}/>
    </div>
  </div>
);

const Nav = ({ page, onNav }) => {
  const links = [
    {id:"landing",label:"Home"},{id:"marketplace",label:"Discover"},
    {id:"campaigns",label:"Campaigns"},{id:"messages",label:"Messages"},
    {id:"influencer-dashboard",label:"Dashboard"},{id:"admin",label:"Admin"},
  ];
  return (
    <nav style={{ position:"sticky",top:0,zIndex:100,background:C.white,borderBottom:`2px solid ${C.warm}`,boxShadow:`0 2px 14px ${C.terra}0f` }}>
      <ImiBorder height={6}/>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"0 24px",display:"flex",alignItems:"center",height:58 }}>
        <div onClick={()=>onNav("landing")} style={{ display:"flex",alignItems:"center",gap:10,cursor:"pointer",marginRight:32 }}>
          <div style={{ borderRadius:8,overflow:"hidden",boxShadow:`0 2px 8px ${C.terra}33` }}>
            <ImiPattern1 size={34}/>
          </div>
          <div>
            <div style={{ fontFamily:"'Cormorant Garamond',serif",fontWeight:800,color:C.ink,fontSize:19,lineHeight:1 }}>Konnekt</div>
            <div style={{ fontFamily:"'DM Mono',monospace",fontSize:8,color:C.terra,letterSpacing:"0.2em",marginTop:1 }}>RWANDA</div>
          </div>
        </div>
        <div style={{ display:"flex",gap:2,flex:1,flexWrap:"wrap" }}>
          {links.map(l=>(
            <button key={l.id} onClick={()=>onNav(l.id)} style={{
              background:page===l.id?C.terra:"transparent",color:page===l.id?C.white:C.muted,
              border:"none",padding:"6px 13px",borderRadius:8,
              fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",transition:"all 0.2s",
              fontWeight:page===l.id?700:400,
            }}>{l.label}</button>
          ))}
        </div>
        <div style={{ display:"flex",gap:8 }}>
          <button onClick={()=>onNav("register")} style={{
            background:"transparent",border:`1.5px solid ${C.warm}`,color:C.earth,
            padding:"7px 14px",borderRadius:8,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",
          }}>Sign In</button>
          <button onClick={()=>onNav("register")} style={{
            background:C.terra,color:C.white,border:"none",padding:"7px 14px",borderRadius:8,
            fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",fontWeight:700,
            boxShadow:`0 3px 10px ${C.terra}44`,
          }}>Join Free →</button>
        </div>
      </div>
    </nav>
  );
};

const Landing = ({ onNav }) => {
  const [hov,setHov]=useState(null);
  return (
    <div>
      <div style={{ background:`linear-gradient(155deg,${C.cream} 0%,${C.sand} 55%,${C.warm} 100%)`,position:"relative",overflow:"hidden",paddingBottom:60 }}>
        <div style={{ position:"absolute",top:-10,right:-10,opacity:0.11,pointerEvents:"none" }}>
          <ImiWall rows={4} cols={6} opacity={1} size={90}/>
        </div>
        <div style={{ position:"absolute",bottom:-20,left:-20,opacity:0.07,pointerEvents:"none" }}>
          <ImiWall rows={3} cols={4} opacity={1} size={80}/>
        </div>
        <div style={{ maxWidth:1200,margin:"0 auto",padding:"68px 24px 0",position:"relative",zIndex:1 }}>
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,alignItems:"center" }}>
            <div>
              <div style={{ display:"inline-flex",alignItems:"center",gap:8,background:C.white,border:`1px solid ${C.warm}`,borderRadius:99,padding:"5px 14px 5px 5px",marginBottom:22 }}>
                <div style={{ background:C.terra,color:C.white,borderRadius:99,padding:"2px 10px",fontSize:11,fontFamily:"'DM Mono',monospace",fontWeight:700 }}>NEW</div>
                <span style={{ fontSize:12,color:C.earth,fontFamily:"'DM Mono',monospace" }}>Rwanda's #1 Creator Platform</span>
              </div>
              <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:"clamp(38px,5vw,62px)",fontWeight:800,lineHeight:1.1,color:C.ink,margin:"0 0 18px" }}>
                Where Brands<br/>Meet Rwanda's<br/>
                <span style={{ color:C.terra,position:"relative" }}>
                  Top Creators
                  <svg style={{ position:"absolute",bottom:-4,left:0,width:"100%" }} viewBox="0 0 200 10" preserveAspectRatio="none" height="6">
                    <path d="M0,8 Q50,2 100,7 Q150,12 200,5" stroke={C.gold} strokeWidth="3" fill="none" strokeLinecap="round"/>
                  </svg>
                </span>
              </h1>
              <p style={{ fontSize:16,color:C.earth,lineHeight:1.75,maxWidth:420,marginBottom:32,fontFamily:"Georgia,serif" }}>
                Konnekt Rwanda connects brands with authentic influencers. Discover creators, launch campaigns, and grow together — all in one platform.
              </p>
              <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
                <button onClick={()=>onNav("marketplace")} style={{ background:C.terra,color:C.white,border:"none",padding:"13px 26px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"'DM Mono',monospace",boxShadow:`0 5px 20px ${C.terra}44` }}>Explore Creators →</button>
                <button onClick={()=>onNav("register")} style={{ background:C.white,color:C.earth,border:`1.5px solid ${C.warm}`,padding:"13px 26px",borderRadius:10,fontSize:14,cursor:"pointer",fontFamily:"'DM Mono',monospace" }}>Join as Brand</button>
              </div>
              <div style={{ display:"flex",gap:28,marginTop:44,paddingTop:28,borderTop:`1px solid ${C.warm}` }}>
                {[["500+","Creators"],["80+","Brands"],["1,200+","Campaigns"]].map(([n,l])=>(
                  <div key={l}>
                    <div style={{ fontSize:28,fontWeight:800,fontFamily:"'Cormorant Garamond',serif",color:C.terra }}>{n}</div>
                    <div style={{ fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace" }}>{l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ position:"relative",height:440 }}>
              {INFLUENCERS.slice(0,3).map((inf,i)=>(
                <div key={inf.id} style={{
                  position:"absolute",top:[0,120,250][i],left:i===1?50:0,right:i===0?30:i===2?30:0,
                  background:C.white,border:`1.5px solid ${C.warm}`,borderRadius:16,padding:"14px 16px",
                  boxShadow:i===1?`0 12px 40px ${C.terra}22`:`0 5px 16px ${C.terra}12`,
                  display:"flex",alignItems:"center",gap:12,
                  animation:`hf${i} ${3.5+i*0.5}s ease-in-out infinite`,
                }}>
                  <Avatar initials={inf.avatar} color={inf.color} size={42}/>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:14,fontWeight:700,color:C.ink }}>{inf.name} {inf.verified&&<span style={{color:C.gold}}>✓</span>}</div>
                    <div style={{ fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace" }}>{inf.niche}</div>
                  </div>
                  <div style={{ textAlign:"right" }}>
                    <div style={{ fontSize:14,fontWeight:700,color:C.terra,fontFamily:"'DM Mono',monospace" }}>{fmt(totalF(inf))}</div>
                    <div style={{ fontSize:10,color:C.muted }}>followers</div>
                  </div>
                </div>
              ))}
              <div style={{ position:"absolute",bottom:10,right:0,background:C.terra,borderRadius:14,padding:"12px 16px",boxShadow:`0 6px 24px ${C.terra}55` }}>
                <div style={{ display:"flex",gap:2,marginBottom:4 }}>
                  {[1,2,3,4,5].map(j=><span key={j} style={{color:C.goldL,fontSize:13}}>★</span>)}
                </div>
                <div style={{ color:C.white,fontSize:12,fontFamily:"'DM Mono',monospace",fontWeight:700 }}>4.8 avg rating</div>
                <div style={{ color:"#ffffff88",fontSize:10 }}>500+ creators</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ImiBorder height={14}/>

      <div style={{ background:C.white,padding:"72px 24px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div style={{ textAlign:"center",marginBottom:52 }}>
            <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:C.terra,letterSpacing:"0.12em",marginBottom:10 }}>PLATFORM FEATURES</div>
            <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:40,color:C.ink,margin:"0 0 12px" }}>Everything you need to <span style={{color:C.terra}}>grow</span></h2>
            <ImiDivider/>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(255px,1fr))",gap:18 }}>
            {[
              {icon:"🔍",title:"Smart Discovery",desc:"AI-powered matching connects brands with the right creators based on audience, niche, and performance."},
              {icon:"📊",title:"Live Analytics",desc:"Real-time insights across Instagram, TikTok, YouTube & X."},
              {icon:"💬",title:"Direct Messaging",desc:"Streamlined communication between brands and influencers. Close deals faster."},
              {icon:"🏆",title:"Verified Creators",desc:"Verified badges for authentic influencers. Build campaigns with confidence."},
              {icon:"📋",title:"Campaign Manager",desc:"Create, launch, and track campaigns from one unified dashboard."},
              {icon:"🇷🇼",title:"Made for Rwanda",desc:"Imigongo-inspired design. RWF payments. Local creators. 100% Rwanda."},
            ].map((f,i)=>(
              <div key={i} onMouseEnter={()=>setHov(i)} onMouseLeave={()=>setHov(null)} style={{
                background:hov===i?C.cream:C.white,
                border:`1.5px solid ${hov===i?C.terra+"55":C.warm}`,
                borderRadius:16,padding:"26px 22px",transition:"all 0.25s",cursor:"default",
                transform:hov===i?"translateY(-4px)":"none",
                boxShadow:hov===i?`0 10px 32px ${C.terra}18`:"none",
                position:"relative",overflow:"hidden",
              }}>
                <div style={{ position:"absolute",top:-14,right:-14,opacity:hov===i?0.12:0.05,transition:"opacity 0.3s" }}>
                  <ImiPattern3 size={68} c1={C.terra} c2={C.ink} c3={C.cream}/>
                </div>
                <div style={{ fontSize:32,marginBottom:13 }}>{f.icon}</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:21,color:C.ink,fontWeight:700,margin:"0 0 9px" }}>{f.title}</h3>
                <p style={{ color:C.earth,lineHeight:1.65,fontSize:14,margin:0 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImiBorder height={14} flip/>

      <div style={{ background:C.terra,padding:"48px 24px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,display:"flex",flexWrap:"wrap",opacity:0.1 }}>
          {Array.from({length:40}).map((_,i)=>{
            const P=[ImiPattern1,ImiPattern2,ImiPattern3,ImiPattern4][i%4];
            return <P key={i} size={90} c1={C.cream} c2={C.ink} c3={C.gold}/>;
          })}
        </div>
        <div style={{ maxWidth:800,margin:"0 auto",textAlign:"center",position:"relative",zIndex:1 }}>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:10,color:"#ffffff88",letterSpacing:"0.18em",marginBottom:12 }}>CELEBRATING RWANDAN HERITAGE</div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:36,color:C.white,margin:"0 0 14px" }}>Rooted in Imigongo</h2>
          <p style={{ color:"#ffffff99",fontSize:15,lineHeight:1.7,maxWidth:500,margin:"0 auto 28px" }}>
            Our design is inspired by Imigongo — Rwanda's ancient geometric art tradition. Each pattern reflects creativity, community, and cultural pride.
          </p>
          <div style={{ display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap" }}>
            {[ImiPattern1,ImiPattern2,ImiPattern3,ImiPattern4].map((P,i)=>(
              <div key={i} style={{ borderRadius:10,overflow:"hidden",boxShadow:"0 4px 16px #0004",border:"2px solid #ffffff33" }}>
                <P size={68} c1={C.cream} c2={C.ink} c3={C.gold}/>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImiBorder height={14}/>

      <div style={{ background:C.cream,padding:"72px 24px" }}>
        <div style={{ maxWidth:1200,margin:"0 auto" }}>
          <div style={{ display:"flex",justifyContent:"space-between",alignItems:"flex-end",marginBottom:36 }}>
            <div>
              <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:C.terra,letterSpacing:"0.12em",marginBottom:10 }}>FEATURED CREATORS</div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:38,color:C.ink,margin:0 }}>Meet the Talent</h2>
            </div>
            <button onClick={()=>onNav("marketplace")} style={{ background:"transparent",border:`1.5px solid ${C.terra}`,color:C.terra,padding:"9px 18px",borderRadius:8,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer" }}>See All →</button>
          </div>
          <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18 }}>
            {INFLUENCERS.slice(0,3).map(inf=>(
              <InfluencerCard key={inf.id} inf={inf} onClick={()=>onNav("marketplace")}/>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background:C.sand,padding:"64px 24px" }}>
        <div style={{ maxWidth:660,margin:"0 auto",textAlign:"center" }}>
          <ImiDivider/>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:40,color:C.ink,margin:"22px 0 14px" }}>
            Ready to <span style={{color:C.terra}}>Konnekt</span>?
          </h2>
          <p style={{ color:C.earth,fontSize:16,marginBottom:28 }}>Join 500+ creators and 80+ brands already growing together.</p>
          <button onClick={()=>onNav("register")} style={{ background:C.terra,color:C.white,border:"none",padding:"13px 34px",borderRadius:10,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"'DM Mono',monospace",boxShadow:`0 5px 20px ${C.terra}44` }}>Start Free Today →</button>
        </div>
      </div>

      <footer style={{ background:C.ink,padding:"36px 24px 24px" }}>
        <ImiBorder height={9}/>
        <div style={{ maxWidth:1200,margin:"18px auto 0",display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:14 }}>
          <div style={{ display:"flex",alignItems:"center",gap:10 }}>
            <div style={{ borderRadius:6,overflow:"hidden" }}><ImiPattern1 size={26}/></div>
            <div>
              <div style={{ color:C.white,fontFamily:"'Cormorant Garamond',serif",fontSize:17,fontWeight:700 }}>Konnekt Rwanda</div>
              <div style={{ color:C.muted,fontSize:10,fontFamily:"'DM Mono',monospace" }}>Kigali, Rwanda</div>
            </div>
          </div>
          <div style={{ color:"#444",fontFamily:"'DM Mono',monospace",fontSize:10 }}>© 2025 Konnekt Rwanda. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
};

const InfluencerCard = ({ inf, onClick }) => {
  const [hov,setHov]=useState(false);
  const maxF=Math.max(...Object.values(inf.followers));
  return (
    <div onClick={onClick} onMouseEnter={()=>setHov(true)} onMouseLeave={()=>setHov(false)} style={{
      background:C.white,borderRadius:18,cursor:"pointer",
      border:`1.5px solid ${hov?inf.color+"55":C.warm}`,
      boxShadow:hov?`0 14px 42px ${inf.color}20`:`0 2px 8px ${C.terra}09`,
      transform:hov?"translateY(-5px)":"none",transition:"all 0.25s",overflow:"hidden",
    }}>
      <div style={{ height:7,background:inf.color,position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",inset:0,opacity:0.25 }}>
          <svg width="100%" height="7" viewBox="0 0 400 7" preserveAspectRatio="none">
            {Array.from({length:40}).map((_,i)=>(
              <polygon key={i} points={`${i*10},7 ${i*10+5},0 ${i*10+10},7`} fill={i%2===0?"#fff":"transparent"}/>
            ))}
          </svg>
        </div>
      </div>
      <div style={{ padding:"18px 18px 20px" }}>
        <div style={{ display:"flex",alignItems:"flex-start",gap:12,marginBottom:14 }}>
          <Avatar initials={inf.avatar} color={inf.color} size={50}/>
          <div style={{ flex:1 }}>
            <div style={{ display:"flex",alignItems:"center",gap:6 }}>
              <span style={{ fontSize:16,fontWeight:700,color:C.ink,fontFamily:"'Cormorant Garamond',serif" }}>{inf.name}</span>
              {inf.verified&&<span style={{ background:C.gold,color:C.white,fontSize:9,padding:"1px 6px",borderRadius:99,fontFamily:"'DM Mono',monospace",fontWeight:700 }}>✓ VER</span>}
            </div>
            <div style={{ fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace",marginTop:2 }}>{inf.handle}</div>
            <div style={{ marginTop:6 }}><Tag color={inf.color}>{inf.niche}</Tag></div>
          </div>
          <div style={{ textAlign:"right" }}>
            <div style={{ color:"#F59E0B",fontSize:12,fontFamily:"'DM Mono',monospace" }}>★ {inf.rating}</div>
            <div style={{ fontSize:11,color:C.muted,marginTop:2 }}>{inf.location}</div>
          </div>
        </div>
        {Object.entries(inf.followers).map(([p,v])=><PlatformBar key={p} platform={p} value={v} max={maxF}/>)}
        <div style={{ display:"flex",justifyContent:"space-between",marginTop:14,paddingTop:14,borderTop:`1px solid ${C.sand}` }}>
          <div>
            <div style={{ fontSize:17,fontWeight:800,fontFamily:"'DM Mono',monospace",color:C.terra }}>{fmt(totalF(inf))}</div>
            <div style={{ fontSize:10,color:C.muted }}>total followers</div>
          </div>
          <div style={{ textAlign:"center" }}>
            <div style={{ fontSize:17,fontWeight:800,fontFamily:"'DM Mono',monospace",color:C.success }}>{inf.engagement}%</div>
            <div style={{ fontSize:10,color:C.muted }}>engagement</div>
          </div>
          <div style={{ textAlign:"right" }}>
            <div style={{ fontSize:13,fontWeight:700,fontFamily:"'DM Mono',monospace",color:C.gold }}>{fmtRWF(inf.pricePerPost)}</div>
            <div style={{ fontSize:10,color:C.muted }}>per post</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Marketplace = ({ onSelect }) => {
  const [q,setQ]=useState(""); const [sort,setSort]=useState("followers");
  const [filters,setFilters]=useState({platform:"all",niche:"all",location:"all"});
  const list=INFLUENCERS.filter(inf=>{
    const s=q.toLowerCase();
    const ms=!s||inf.name.toLowerCase().includes(s)||inf.niche.toLowerCase().includes(s)||inf.tags.some(t=>t.toLowerCase().includes(s));
    const mn=filters.niche==="all"||inf.niche.toLowerCase().includes(filters.niche.toLowerCase());
    const ml=filters.location==="all"||inf.location===filters.location;
    const mp=filters.platform==="all"||inf.followers[filters.platform];
    return ms&&mn&&ml&&mp;
  }).sort((a,b)=>sort==="followers"?totalF(b)-totalF(a):sort==="engagement"?b.engagement-a.engagement:a.pricePerPost-b.pricePerPost);
  return (
    <div style={{ background:C.cream,minHeight:"100vh" }}>
      <div style={{ background:C.sand,borderBottom:`1px solid ${C.warm}`,padding:"36px 24px 28px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",right:-10,top:-10,opacity:0.09 }}><ImiWall rows={2} cols={5} opacity={1} size={80}/></div>
        <div style={{ maxWidth:1200,margin:"0 auto",position:"relative" }}>
          <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:C.terra,letterSpacing:"0.12em",marginBottom:9 }}>MARKETPLACE</div>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:38,color:C.ink,margin:"0 0 5px" }}>Discover <span style={{color:C.terra}}>Creators</span></h1>
          <p style={{ color:C.earth,margin:0,fontSize:14 }}>Find the perfect influencer for your brand campaign</p>
        </div>
      </div>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"26px 24px" }}>
        <div style={{ background:C.white,border:`1.5px solid ${C.warm}`,borderRadius:16,padding:18,marginBottom:24 }}>
          <input value={q} onChange={e=>setQ(e.target.value)} placeholder="🔍  Search creators, niches, tags..."
            style={{ width:"100%",border:`1.5px solid ${C.warm}`,background:C.cream,borderRadius:10,padding:"11px 14px",fontSize:14,color:C.ink,fontFamily:"'DM Mono',monospace",marginBottom:12,boxSizing:"border-box" }}/>
          <div style={{ display:"flex",gap:9,flexWrap:"wrap" }}>
            {[{key:"platform",opts:["all","instagram","tiktok","youtube","twitter"],label:"Platform"},{key:"niche",opts:["all","Fashion","Technology","Food","Comedy","Travel","Fitness"],label:"Niche"},{key:"location",opts:["all","Kigali","Musanze","Rubavu"],label:"Location"}].map(f=>(
              <select key={f.key} value={filters[f.key]} onChange={e=>setFilters({...filters,[f.key]:e.target.value})}
                style={{ background:C.cream,border:`1px solid ${C.warm}`,color:C.earth,padding:"8px 12px",borderRadius:8,fontFamily:"'DM Mono',monospace",fontSize:12 }}>
                {f.opts.map(o=><option key={o} value={o}>{o==="all"?`All ${f.label}s`:o}</option>)}
              </select>
            ))}
            <select value={sort} onChange={e=>setSort(e.target.value)} style={{ background:`${C.terra}0f`,border:`1px solid ${C.terra}33`,color:C.terra,padding:"8px 12px",borderRadius:8,fontFamily:"'DM Mono',monospace",fontSize:12 }}>
              <option value="followers">↓ Followers</option>
              <option value="engagement">↓ Engagement</option>
              <option value="price">↑ Price</option>
            </select>
          </div>
        </div>
        <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:C.muted,marginBottom:16 }}>{list.length} creators found</div>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(300px,1fr))",gap:18 }}>
          {list.map(inf=><InfluencerCard key={inf.id} inf={inf} onClick={()=>onSelect(inf)}/>)}
        </div>
      </div>
    </div>
  );
};

const Profile = ({ inf, onBack }) => {
  const [tab,setTab]=useState("analytics");
  const total=totalF(inf); const maxF=Math.max(...Object.values(inf.followers));
  return (
    <div style={{ background:C.cream,minHeight:"100vh" }}>
      <div style={{ background:C.sand,borderBottom:`1px solid ${C.warm}`,padding:"30px 24px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",right:0,top:0,bottom:0,opacity:0.09 }}><ImiWall rows={3} cols={5} opacity={1} size={70}/></div>
        <div style={{ maxWidth:1000,margin:"0 auto",position:"relative" }}>
          <button onClick={onBack} style={{ background:C.white,border:`1px solid ${C.warm}`,color:C.earth,padding:"7px 14px",borderRadius:8,cursor:"pointer",fontFamily:"'DM Mono',monospace",fontSize:12,marginBottom:20 }}>← Back</button>
          <div style={{ display:"flex",gap:22,alignItems:"flex-start",flexWrap:"wrap" }}>
            <Avatar initials={inf.avatar} color={inf.color} size={84}/>
            <div style={{ flex:1 }}>
              <div style={{ display:"flex",alignItems:"center",gap:10,flexWrap:"wrap",marginBottom:5 }}>
                <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:34,color:C.ink,margin:0 }}>{inf.name}</h1>
                {inf.verified&&<span style={{ background:C.gold,color:C.white,fontSize:10,padding:"2px 10px",borderRadius:99,fontFamily:"'DM Mono',monospace",fontWeight:700 }}>✓ VERIFIED</span>}
              </div>
              <div style={{ color:C.muted,fontFamily:"'DM Mono',monospace",fontSize:12,marginBottom:9 }}>{inf.handle} · {inf.location}</div>
              <p style={{ color:C.earth,lineHeight:1.7,maxWidth:480,marginBottom:11,fontSize:15 }}>{inf.bio}</p>
              <div style={{ display:"flex",gap:6,flexWrap:"wrap" }}>{inf.tags.map(t=><Tag key={t} color={inf.color}>{t}</Tag>)}</div>
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:11,alignItems:"flex-end" }}>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:28,fontWeight:800,fontFamily:"'DM Mono',monospace",color:C.terra }}>{fmt(total)}</div>
                <div style={{ fontSize:11,color:C.muted }}>total followers</div>
              </div>
              <div style={{ textAlign:"right" }}>
                <div style={{ fontSize:21,fontWeight:700,fontFamily:"'DM Mono',monospace",color:C.success }}>{inf.engagement}%</div>
                <div style={{ fontSize:11,color:C.muted }}>engagement</div>
              </div>
              <button style={{ background:C.terra,color:C.white,border:"none",padding:"11px 22px",borderRadius:8,fontWeight:700,cursor:"pointer",fontFamily:"'DM Mono',monospace",boxShadow:`0 4px 14px ${C.terra}44` }}>Hire Now →</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ maxWidth:1000,margin:"0 auto",padding:"24px" }}>
        <div style={{ display:"flex",gap:4,background:C.white,borderRadius:12,padding:4,marginBottom:22,border:`1px solid ${C.warm}`,width:"fit-content" }}>
          {["analytics","platforms","pricing","reviews"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{ padding:"8px 18px",borderRadius:9,border:"none",background:tab===t?C.terra:"transparent",color:tab===t?C.white:C.muted,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",textTransform:"capitalize",transition:"all 0.2s" }}>{t}</button>
          ))}
        </div>
        {tab==="analytics"&&(
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:16 }}>
            <div style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:22 }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:21,color:C.ink,marginBottom:18 }}>Followers by Platform</h3>
              {Object.entries(inf.followers).map(([p,v])=><PlatformBar key={p} platform={p} value={v} max={maxF}/>)}
            </div>
            <div style={{ display:"flex",flexDirection:"column",gap:12 }}>
              <StatTile label="Total Followers" value={fmt(total)} sub="↑ 12% this month" accent={C.terra}/>
              <StatTile label="Engagement Rate" value={`${inf.engagement}%`} sub="Above Rwanda average" accent={C.success}/>
              <StatTile label="Star Rating" value={`★ ${inf.rating}`} sub="from 47 reviews" accent={C.gold}/>
            </div>
            <div style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:22,gridColumn:"span 2" }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:21,color:C.ink,marginBottom:18 }}>Platform Distribution</h3>
              <div style={{ display:"flex",gap:12,flexWrap:"wrap" }}>
                {Object.entries(inf.followers).map(([p,v])=>{
                  const pct=Math.round((v/total)*100);
                  return (
                    <div key={p} style={{ flex:1,minWidth:90,background:C.cream,borderRadius:12,padding:14,textAlign:"center",border:`1px solid ${C.warm}` }}>
                      <div style={{ fontSize:10,fontFamily:"'DM Mono',monospace",color:plColor[p],marginBottom:5,textTransform:"uppercase" }}>{p}</div>
                      <div style={{ fontSize:26,fontWeight:800,fontFamily:"'DM Mono',monospace",color:C.ink }}>{pct}%</div>
                      <div style={{ height:4,background:C.warm,borderRadius:99,marginTop:9 }}>
                        <div style={{ height:"100%",width:`${pct}%`,background:plColor[p],borderRadius:99 }}/>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
        {tab==="platforms"&&(
          <div style={{ display:"grid",gap:14 }}>
            {Object.entries(inf.followers).map(([p,v])=>(
              <div key={p} style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:22 }}>
                <div style={{ display:"flex",alignItems:"center",gap:9,marginBottom:16 }}>
                  <div style={{ width:7,height:32,borderRadius:4,background:plColor[p] }}/>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:21,color:C.ink,margin:0,textTransform:"capitalize" }}>{p}</h3>
                </div>
                <div style={{ display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:12 }}>
                  <StatTile label="Followers" value={fmt(v)} accent={plColor[p]}/>
                  <StatTile label="Avg Likes" value={fmt(Math.round(v*0.042))} accent={plColor[p]}/>
                  <StatTile label="Avg Comments" value={fmt(Math.round(v*0.008))} accent={plColor[p]}/>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab==="pricing"&&(
          <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:14 }}>
            {[["Story / Reel",Math.round(inf.pricePerPost*0.6)],["Feed Post",inf.pricePerPost],["YouTube Video",Math.round(inf.pricePerPost*2.5)],["Campaign Bundle",Math.round(inf.pricePerPost*4)]].map(([type,price])=>(
              <div key={type} style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:26 }}>
                <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:C.muted,marginBottom:9 }}>{type}</div>
                <div style={{ fontSize:26,fontWeight:800,fontFamily:"'DM Mono',monospace",color:C.ink }}>{fmtRWF(price)}</div>
                <button style={{ marginTop:14,background:`${C.terra}0f`,color:C.terra,border:`1px solid ${C.terra}33`,padding:"7px 18px",borderRadius:7,cursor:"pointer",fontFamily:"'DM Mono',monospace",fontSize:12 }}>Request Quote</button>
              </div>
            ))}
          </div>
        )}
        {tab==="reviews"&&(
          <div style={{ display:"grid",gap:13 }}>
            {[["MTN Rwanda",5,"Exceeded all expectations. Genuine engagement and fantastic results for our campaign.","March 2025"],["Bank of Kigali",5,"340% increase in brand awareness. The reach and authenticity was unmatched.","Feb 2025"],["Inyange Foods",4,"Great communicator, very creative. Delivered on time with high quality content.","Jan 2025"]].map(([brand,rating,text,date],i)=>(
              <div key={i} style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:22 }}>
                <div style={{ display:"flex",justifyContent:"space-between",marginBottom:9 }}>
                  <div style={{ fontWeight:700,color:C.ink,fontFamily:"'Cormorant Garamond',serif",fontSize:18 }}>{brand}</div>
                  <div style={{ display:"flex",gap:2 }}>{Array.from({length:5}).map((_,j)=><span key={j} style={{color:j<rating?"#F59E0B":C.warm,fontSize:15}}>★</span>)}</div>
                </div>
                <p style={{ color:C.earth,lineHeight:1.65,margin:0,fontSize:14 }}>{text}</p>
                <div style={{ color:C.muted,fontSize:10,fontFamily:"'DM Mono',monospace",marginTop:9 }}>{date}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Admin = () => {
  const [tab,setTab]=useState("overview");
  return (
    <div style={{ background:C.cream,minHeight:"100vh" }}>
      <div style={{ background:C.sand,borderBottom:`1px solid ${C.warm}`,padding:"30px 24px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",right:0,top:0,bottom:0,opacity:0.08 }}><ImiWall rows={2} cols={6} opacity={1} size={80}/></div>
        <div style={{ maxWidth:1200,margin:"0 auto",position:"relative" }}>
          <Tag color={C.gold}>Admin Panel</Tag>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:36,color:C.ink,margin:"10px 0 3px" }}>Platform Overview</h1>
          <p style={{ color:C.muted,margin:0,fontFamily:"'DM Mono',monospace",fontSize:11 }}>Konnekt Rwanda · Admin Dashboard</p>
        </div>
      </div>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"24px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:13,marginBottom:24 }}>
          <StatTile label="Total Influencers" value="512" sub="↑ 48 this month" accent={C.terra}/>
          <StatTile label="Total Brands" value="83" sub="↑ 12 this month" accent={C.gold}/>
          <StatTile label="Active Campaigns" value="147" sub="↑ 23 this month" accent={C.success}/>
          <StatTile label="Platform Revenue" value="RWF 42M" sub="↑ 18% MoM" accent={C.info}/>
        </div>
        <div style={{ display:"flex",gap:4,background:C.white,borderRadius:12,padding:4,marginBottom:22,border:`1px solid ${C.warm}`,width:"fit-content" }}>
          {["overview","influencers","campaigns"].map(t=>(
            <button key={t} onClick={()=>setTab(t)} style={{ padding:"8px 18px",borderRadius:9,border:"none",background:tab===t?C.terra:"transparent",color:tab===t?C.white:C.muted,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",textTransform:"capitalize" }}>{t}</button>
          ))}
        </div>
        {tab==="overview"&&(
          <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:18 }}>
            <div style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:24 }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:21,color:C.ink,marginBottom:22 }}>Campaign Activity 2025</h3>
              <div style={{ display:"flex",alignItems:"flex-end",gap:5,height:130 }}>
                {[35,42,38,55,70,65,80,90,85,105,120,147].map((v,i)=>(
                  <div key={i} style={{ flex:1,display:"flex",flexDirection:"column",alignItems:"center",gap:4 }}>
                    <div style={{ width:"100%",background:i===11?C.terra:C.warm,borderRadius:"4px 4px 0 0",height:`${(v/147)*100}%`,minHeight:4 }}/>
                    <div style={{ color:C.muted,fontSize:9,fontFamily:"'DM Mono',monospace" }}>{"JFMAMJJASOND"[i]}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:22 }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:C.ink,marginBottom:16 }}>Pending Approvals</h3>
              {[["Nadia Umutoni","Influencer","Beauty"],["Kigali Coffee Co","Brand","F&B"],["David Tuyishime","Influencer","Music"]].map(([name,type,niche],i)=>(
                <div key={i} style={{ display:"flex",alignItems:"center",gap:10,padding:"10px 0",borderBottom:`1px solid ${C.sand}` }}>
                  <Avatar initials={name[0]+name.split(" ")[1][0]} size={33} color={type==="Brand"?C.gold:C.terra}/>
                  <div style={{ flex:1 }}>
                    <div style={{ fontSize:13,fontWeight:600,color:C.ink }}>{name}</div>
                    <div style={{ fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace" }}>{type} · {niche}</div>
                  </div>
                  <div style={{ display:"flex",gap:5 }}>
                    <button style={{ background:`${C.success}18`,color:C.success,border:`1px solid ${C.success}33`,padding:"4px 9px",borderRadius:6,cursor:"pointer",fontSize:11 }}>✓</button>
                    <button style={{ background:"#ef444418",color:"#ef4444",border:"1px solid #ef444433",padding:"4px 9px",borderRadius:6,cursor:"pointer",fontSize:11 }}>✕</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {tab==="influencers"&&(
          <div style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,overflow:"hidden" }}>
            <div style={{ padding:"16px 22px",borderBottom:`1px solid ${C.sand}`,display:"flex",justifyContent:"space-between" }}>
              <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:20,color:C.ink,margin:0 }}>All Influencers</h3>
              <Tag>{INFLUENCERS.length} registered</Tag>
            </div>
            {INFLUENCERS.map(inf=>(
              <div key={inf.id} style={{ display:"flex",alignItems:"center",gap:13,padding:"13px 22px",borderBottom:`1px solid ${C.sand}` }}>
                <Avatar initials={inf.avatar} color={inf.color} size={37}/>
                <div style={{ flex:1 }}>
                  <div style={{ fontWeight:600,color:C.ink,fontSize:14 }}>{inf.name} {inf.verified&&<span style={{color:C.gold}}>✓</span>}</div>
                  <div style={{ fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace" }}>{inf.niche} · {inf.location}</div>
                </div>
                <div style={{ color:C.terra,fontFamily:"'DM Mono',monospace",fontWeight:700,fontSize:13 }}>{fmt(totalF(inf))}</div>
                <div style={{ color:C.success,fontFamily:"'DM Mono',monospace",fontSize:13 }}>{inf.engagement}%</div>
                <Tag color={inf.verified?C.gold:C.muted}>{inf.verified?"Verified":"Pending"}</Tag>
                <div style={{ display:"flex",gap:5 }}>
                  <button style={{ background:`${C.info}10`,color:C.info,border:`1px solid ${C.info}22`,padding:"5px 11px",borderRadius:6,cursor:"pointer",fontSize:11,fontFamily:"'DM Mono',monospace" }}>View</button>
                  <button style={{ background:"#ef444410",color:"#ef4444",border:"1px solid #ef444422",padding:"5px 11px",borderRadius:6,cursor:"pointer",fontSize:11 }}>Suspend</button>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab==="campaigns"&&(
          <div style={{ display:"grid",gap:13 }}>
            {CAMPAIGNS.map(c=>(
              <div key={c.id} style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:22 }}>
                <div style={{ display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10,marginBottom:14 }}>
                  <div>
                    <h3 style={{ fontFamily:"'Cormorant Garamond',serif",color:C.ink,margin:"0 0 4px",fontSize:20 }}>{c.title}</h3>
                    <div style={{ color:C.muted,fontFamily:"'DM Mono',monospace",fontSize:11 }}>{c.brand} · {c.category}</div>
                  </div>
                  <div style={{ display:"flex",gap:9,alignItems:"center" }}>
                    <Tag color={c.status==="Active"?C.success:C.terra}>{c.status}</Tag>
                    <span style={{ fontSize:15,fontWeight:700,fontFamily:"'DM Mono',monospace",color:C.gold }}>{fmtRWF(c.budget)}</span>
                  </div>
                </div>
                <div style={{ display:"flex",gap:18,flexWrap:"wrap" }}>
                  {[["Platform",c.platform],["Influencers",c.influencers],["Deadline",c.deadline]].map(([k,v])=>(
                    <div key={k}><span style={{color:C.muted,fontSize:12}}>{k}: </span><span style={{color:C.earth,fontSize:12,fontFamily:"'DM Mono',monospace"}}>{v}</span></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const InfluencerDash = () => {
  const me=INFLUENCERS[0];
  return (
    <div style={{ background:C.cream,minHeight:"100vh" }}>
      <div style={{ background:C.sand,borderBottom:`1px solid ${C.warm}`,padding:"28px 24px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",right:0,top:0,bottom:0,opacity:0.08 }}><ImiWall rows={2} cols={5} opacity={1} size={80}/></div>
        <div style={{ maxWidth:1200,margin:"0 auto",position:"relative",display:"flex",alignItems:"center",gap:18 }}>
          <Avatar initials={me.avatar} color={me.color} size={68}/>
          <div>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:32,color:C.ink,margin:"0 0 4px" }}>Welcome back, {me.name.split(" ")[0]}!</h1>
            <div style={{ color:C.muted,fontFamily:"'DM Mono',monospace",fontSize:11 }}>{me.handle} · {me.niche}</div>
            {me.verified&&<Tag color={C.gold}>✓ Verified Creator</Tag>}
          </div>
        </div>
      </div>
      <div style={{ maxWidth:1200,margin:"0 auto",padding:"24px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:13,marginBottom:22 }}>
          <StatTile label="Total Followers" value={fmt(totalF(me))} sub="↑ 8.2% this month" accent={C.terra}/>
          <StatTile label="Engagement Rate" value={`${me.engagement}%`} sub="↑ from 6.8%" accent={C.success}/>
          <StatTile label="Open Campaigns" value="3" sub="2 pending" accent={C.gold}/>
          <StatTile label="Earnings" value="RWF 420K" sub="This month" accent={C.info}/>
        </div>
        <div style={{ display:"grid",gridTemplateColumns:"2fr 1fr",gap:18 }}>
          <div style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:22 }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:21,color:C.ink,marginBottom:18 }}>Your Platforms</h3>
            {Object.entries(me.followers).map(([p,v])=><PlatformBar key={p} platform={p} value={v} max={Math.max(...Object.values(me.followers))}/>)}
          </div>
          <div style={{ background:C.white,border:`1px solid ${C.warm}`,borderRadius:16,padding:22 }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:19,color:C.ink,marginBottom:14 }}>Campaign Invites</h3>
            {CAMPAIGNS.slice(0,3).map(c=>(
              <div key={c.id} style={{ padding:"11px 0",borderBottom:`1px solid ${C.sand}` }}>
                <div style={{ fontSize:13,fontWeight:600,color:C.ink,marginBottom:3 }}>{c.title}</div>
                <div style={{ fontSize:11,color:C.muted,fontFamily:"'DM Mono',monospace",marginBottom:7 }}>{c.brand}</div>
                <div style={{ display:"flex",gap:7 }}>
                  <button style={{ background:C.terra,color:C.white,border:"none",padding:"5px 12px",borderRadius:6,cursor:"pointer",fontSize:11,fontFamily:"'DM Mono',monospace",flex:1 }}>Apply</button>
                  <button style={{ background:C.cream,color:C.muted,border:"none",padding:"5px 10px",borderRadius:6,cursor:"pointer",fontSize:11 }}>Skip</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Messages = () => {
  const [active,setActive]=useState(MSGS[0]);
  const [msg,setMsg]=useState("");
  const [chats,setChats]=useState(()=>Object.fromEntries(MSGS.map(m=>[m.id,m.chat])));
  const send=()=>{
    if(!msg.trim())return;
    setChats(p=>({...p,[active.id]:[...p[active.id],{mine:true,text:msg,time:"Now"}]}));
    setMsg("");
  };
  return (
    <div style={{ background:C.cream,minHeight:"100vh" }}>
      <div style={{ background:C.sand,borderBottom:`1px solid ${C.warm}`,padding:"26px 24px" }}>
        <div style={{ maxWidth:1100,margin:"0 auto" }}>
          <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:34,color:C.ink,margin:0 }}>Messages</h1>
        </div>
      </div>
      <div style={{ maxWidth:1100,margin:"0 auto",padding:"22px" }}>
        <div style={{ display:"grid",gridTemplateColumns:"290px 1fr",background:C.white,border:`1.5px solid ${C.warm}`,borderRadius:18,overflow:"hidden",height:540 }}>
          <div style={{ borderRight:`1px solid ${C.warm}`,overflow:"auto" }}>
            {MSGS.map(m=>(
              <div key={m.id} onClick={()=>setActive(m)} style={{
                padding:"13px 15px",cursor:"pointer",borderBottom:`1px solid ${C.sand}`,
                background:active.id===m.id?C.cream:C.white,
                borderLeft:active.id===m.id?`3px solid ${C.terra}`:"3px solid transparent",
              }}>
                <div style={{ display:"flex",gap:10,alignItems:"center" }}>
                  <Avatar initials={m.av} size={36} color={C.terra}/>
                  <div style={{ flex:1,minWidth:0 }}>
                    <div style={{ display:"flex",justifyContent:"space-between" }}>
                      <span style={{ fontSize:13,fontWeight:m.unread?700:500,color:C.ink }}>{m.from}</span>
                      <span style={{ fontSize:10,color:C.muted,fontFamily:"'DM Mono',monospace" }}>{m.time}</span>
                    </div>
                    <div style={{ fontSize:11,color:C.muted,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",marginTop:2 }}>{m.preview}</div>
                  </div>
                  {m.unread&&<div style={{ width:7,height:7,borderRadius:"50%",background:C.terra,flexShrink:0 }}/>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display:"flex",flexDirection:"column" }}>
            <div style={{ padding:"13px 17px",borderBottom:`1px solid ${C.sand}`,display:"flex",alignItems:"center",gap:10 }}>
              <Avatar initials={active.av} size={32} color={C.terra}/>
              <span style={{ fontWeight:700,color:C.ink,fontSize:14 }}>{active.from}</span>
            </div>
            <div style={{ flex:1,padding:16,overflow:"auto",display:"flex",flexDirection:"column",gap:10 }}>
              {(chats[active.id]||[]).map((c,i)=>(
                <div key={i} style={{ display:"flex",justifyContent:c.mine?"flex-end":"flex-start" }}>
                  <div style={{ maxWidth:"70%",padding:"10px 14px",borderRadius:14,background:c.mine?C.terra:C.cream,color:c.mine?C.white:C.ink,fontSize:14,lineHeight:1.5,border:c.mine?"none":`1px solid ${C.warm}` }}>
                    {c.text}
                    <div style={{ fontSize:10,color:c.mine?"#ffffff88":C.muted,marginTop:4,textAlign:"right",fontFamily:"'DM Mono',monospace" }}>{c.time}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding:13,borderTop:`1px solid ${C.sand}`,display:"flex",gap:9 }}>
              <input value={msg} onChange={e=>setMsg(e.target.value)} onKeyDown={e=>e.key==="Enter"&&send()}
                placeholder="Type a message..."
                style={{ flex:1,border:`1.5px solid ${C.warm}`,background:C.cream,borderRadius:8,padding:"10px 13px",fontFamily:"'DM Mono',monospace",fontSize:13,color:C.ink }}/>
              <button onClick={send} style={{ background:C.terra,color:C.white,border:"none",padding:"10px 16px",borderRadius:8,cursor:"pointer",fontFamily:"'DM Mono',monospace",fontSize:13,fontWeight:700 }}>Send →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CampaignPage = () => {
  const [showForm,setShowForm]=useState(false);
  const [form,setForm]=useState({name:"",budget:""});
  return (
    <div style={{ background:C.cream,minHeight:"100vh" }}>
      <div style={{ background:C.sand,borderBottom:`1px solid ${C.warm}`,padding:"28px 24px",position:"relative",overflow:"hidden" }}>
        <div style={{ position:"absolute",right:0,top:0,bottom:0,opacity:0.08 }}><ImiWall rows={2} cols={5} opacity={1} size={80}/></div>
        <div style={{ maxWidth:1100,margin:"0 auto",position:"relative",display:"flex",justifyContent:"space-between",alignItems:"flex-end" }}>
          <div>
            <div style={{ fontFamily:"'DM Mono',monospace",fontSize:11,color:C.terra,letterSpacing:"0.12em",marginBottom:9 }}>CAMPAIGNS</div>
            <h1 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:36,color:C.ink,margin:0 }}>Manage Campaigns</h1>
          </div>
          <button onClick={()=>setShowForm(!showForm)} style={{ background:C.terra,color:C.white,border:"none",padding:"10px 20px",borderRadius:8,fontFamily:"'DM Mono',monospace",fontSize:12,fontWeight:700,cursor:"pointer" }}>+ New Campaign</button>
        </div>
      </div>
      <div style={{ maxWidth:1100,margin:"0 auto",padding:"24px" }}>
        {showForm&&(
          <div style={{ background:C.white,border:`1.5px solid ${C.terra}22`,borderRadius:16,padding:26,marginBottom:22 }}>
            <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:C.ink,marginBottom:18 }}>Create New Campaign</h3>
            <div style={{ display:"grid",gridTemplateColumns:"1fr 1fr",gap:13 }}>
              {[["Campaign Name","name","e.g. Summer Collection 2025"],["Budget (RWF)","budget","e.g. 2,000,000"]].map(([label,key,ph])=>(
                <div key={key}>
                  <label style={{ fontSize:10,color:C.muted,fontFamily:"'DM Mono',monospace",display:"block",marginBottom:7,textTransform:"uppercase",letterSpacing:"0.06em" }}>{label}</label>
                  <input value={form[key]} onChange={e=>setForm({...form,[key]:e.target.value})} placeholder={ph}
                    style={{ width:"100%",border:`1.5px solid ${C.warm}`,background:C.cream,borderRadius:8,padding:"11px 13px",fontFamily:"'DM Mono',monospace",fontSize:13,color:C.ink,boxSizing:"border-box" }}/>
                </div>
              ))}
            </div>
            <div style={{ display:"flex",gap:9,marginTop:16 }}>
              <button style={{ background:C.terra,color:C.white,border:"none",padding:"10px 24px",borderRadius:8,cursor:"pointer",fontFamily:"'DM Mono',monospace",fontWeight:700 }}>Launch Campaign →</button>
              <button onClick={()=>setShowForm(false)} style={{ background:"transparent",color:C.muted,border:`1px solid ${C.warm}`,padding:"10px 18px",borderRadius:8,cursor:"pointer",fontFamily:"'DM Mono',monospace" }}>Cancel</button>
            </div>
          </div>
        )}
        <div style={{ display:"grid",gap:15 }}>
          {CAMPAIGNS.map(c=>(
            <div key={c.id} style={{ background:C.white,border:`1.5px solid ${C.warm}`,borderRadius:16,padding:26 }}>
              <div style={{ display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:10,marginBottom:16 }}>
                <div>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:22,color:C.ink,margin:"0 0 5px" }}>{c.title}</h3>
                  <div style={{ color:C.muted,fontFamily:"'DM Mono',monospace",fontSize:11 }}>{c.brand} · {c.category}</div>
                </div>
                <div style={{ display:"flex",gap:9,alignItems:"center" }}>
                  <Tag color={c.status==="Active"?C.success:C.terra}>{c.status}</Tag>
                  <span style={{ fontSize:16,fontWeight:700,color:C.gold,fontFamily:"'DM Mono',monospace" }}>{fmtRWF(c.budget)}</span>
                </div>
              </div>
              <div style={{ display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:11,marginBottom:16 }}>
                <StatTile label="Budget" value={fmtRWF(c.budget)} accent={C.gold}/>
                <StatTile label="Platform" value={c.platform} accent={C.terra}/>
                <StatTile label="Creators" value={c.influencers} accent={C.info}/>
                <StatTile label="Deadline" value={c.deadline} accent={C.success}/>
              </div>
              <div style={{ display:"flex",gap:9 }}>
                <button style={{ background:`${C.terra}0f`,color:C.terra,border:`1px solid ${C.terra}28`,padding:"7px 18px",borderRadius:7,cursor:"pointer",fontFamily:"'DM Mono',monospace",fontSize:12 }}>View Applicants</button>
                <button style={{ background:C.cream,color:C.earth,border:`1px solid ${C.warm}`,padding:"7px 18px",borderRadius:7,cursor:"pointer",fontFamily:"'DM Mono',monospace",fontSize:12 }}>Edit Campaign</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Auth = ({ onNav }) => {
  const [mode,setMode]=useState("login"); const [role,setRole]=useState("influencer");
  return (
    <div style={{ background:C.cream,minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:24,position:"relative",overflow:"hidden" }}>
      <div style={{ position:"absolute",right:-30,top:-30,opacity:0.08 }}><ImiWall rows={4} cols={4} opacity={1} size={80}/></div>
      <div style={{ position:"absolute",left:-30,bottom:-30,opacity:0.06 }}><ImiWall rows={3} cols={3} opacity={1} size={80}/></div>
      <div style={{ width:"100%",maxWidth:420,position:"relative" }}>
        <div style={{ textAlign:"center",marginBottom:28 }}>
          <div style={{ display:"flex",justifyContent:"center",marginBottom:14 }}>
            <div style={{ borderRadius:10,overflow:"hidden",boxShadow:`0 4px 14px ${C.terra}33` }}><ImiPattern2 size={52}/></div>
          </div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',serif",fontSize:34,color:C.ink,margin:"0 0 5px" }}>{mode==="login"?"Welcome Back":"Join Konnekt"}</h2>
          <p style={{ color:C.muted,fontFamily:"'DM Mono',monospace",fontSize:11 }}>Rwanda's Creator Economy Platform</p>
        </div>
        <div style={{ background:C.white,border:`1.5px solid ${C.warm}`,borderRadius:18,padding:30,boxShadow:`0 6px 28px ${C.terra}0f` }}>
          {mode==="register"&&(
            <div style={{ display:"flex",gap:5,background:C.cream,borderRadius:10,padding:4,marginBottom:20 }}>
              {["influencer","brand"].map(r=>(
                <button key={r} onClick={()=>setRole(r)} style={{ flex:1,padding:9,borderRadius:8,border:"none",background:role===r?C.terra:"transparent",color:role===r?C.white:C.muted,fontFamily:"'DM Mono',monospace",fontSize:12,cursor:"pointer",textTransform:"capitalize" }}>{r}</button>
              ))}
            </div>
          )}
          {(mode==="register"?["Name","Email","Password"]:["Email","Password"]).map(f=>(
            <div key={f} style={{ marginBottom:13 }}>
              <label style={{ fontSize:10,color:C.muted,fontFamily:"'DM Mono',monospace",display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:"0.06em" }}>{f}</label>
              <input type={f==="Password"?"password":"text"} placeholder={`Enter your ${f.toLowerCase()}`}
                style={{ width:"100%",border:`1.5px solid ${C.warm}`,background:C.cream,borderRadius:8,padding:"11px 13px",fontFamily:"'DM Mono',monospace",fontSize:13,color:C.ink,boxSizing:"border-box" }}/>
            </div>
          ))}
          <button onClick={()=>onNav("influencer-dashboard")} style={{ width:"100%",background:C.terra,color:C.white,border:"none",padding:13,borderRadius:8,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"'DM Mono',monospace",boxShadow:`0 4px 14px ${C.terra}44`,marginTop:5 }}>
            {mode==="login"?"Sign In →":"Create Account →"}
          </button>
          <div style={{ textAlign:"center",marginTop:16,color:C.muted,fontSize:13 }}>
            {mode==="login"?<><span>No account? </span><span onClick={()=>setMode("register")} style={{color:C.terra,cursor:"pointer",fontWeight:700}}>Register free</span></>:<><span>Already registered? </span><span onClick={()=>setMode("login")} style={{color:C.terra,cursor:"pointer",fontWeight:700}}>Sign in</span></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [page,setPage]=useState("landing"); const [selInf,setSelInf]=useState(null);
  const go=p=>{setPage(p);setSelInf(null);};
  const selectInf=inf=>{setSelInf(inf);setPage("profile");};
  return (
    <div style={{ background:C.cream,minHeight:"100vh",fontFamily:"Georgia,serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700;800&family=DM+Mono:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        input,select,button{outline:none;font-family:inherit}
        ::-webkit-scrollbar{width:5px;height:5px}
        ::-webkit-scrollbar-track{background:#F5E6CC}
        ::-webkit-scrollbar-thumb{background:#EDD9B0;border-radius:99px}
        input::placeholder{color:#A08060}
        @keyframes hf0{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
        @keyframes hf1{0%,100%{transform:translateY(-4px)}50%{transform:translateY(5px)}}
        @keyframes hf2{0%,100%{transform:translateY(-2px)}50%{transform:translateY(7px)}}
      `}</style>
      <Nav page={page} onNav={go}/>
      {page==="landing"&&<Landing onNav={go}/>}
      {page==="marketplace"&&<Marketplace onSelect={selectInf}/>}
      {page==="profile"&&selInf&&<Profile inf={selInf} onBack={()=>go("marketplace")}/>}
      {page==="admin"&&<Admin/>}
      {page==="influencer-dashboard"&&<InfluencerDash/>}
      {page==="messages"&&<Messages/>}
      {page==="campaigns"&&<CampaignPage/>}
      {(page==="register"||page==="login")&&<Auth onNav={go}/>}
    </div>
  );
}