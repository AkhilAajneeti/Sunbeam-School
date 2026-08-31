import { chromium } from 'playwright';
const dir='C:/Users/aclde/AppData/Local/Temp/claude/c--Users-aclde-Desktop-Sunbeam-School/c5e714c5-9995-412c-9ac3-e5dd963247b7/scratchpad/';
const b=await chromium.launch(); const errs=[]; let fail=0;
const pages=['/','/academics/philosophy/affiliation-details/','/academics/parent-partnership/faqs/','/campus/','/beyond-academics/achievements/','/about/history-legacy/','/career/'];
for(const u of pages){
  const p=await (await b.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'})).newPage();
  p.on('pageerror',e=>errs.push(u+': '+e));
  p.on('console',m=>m.type()==='error'&&errs.push(u+': '+m.text()));
  const r=await p.goto('http://localhost:4321'+u,{waitUntil:'load'});
  await p.evaluate(async()=>{const s=()=>new Promise(r=>setTimeout(r,45));
    for(let y=0;y<document.body.scrollHeight;y+=700){window.scrollTo(0,y);await s();}window.scrollTo(0,0);});
  await p.evaluate(()=>Promise.all([...document.images].filter(i=>!i.complete).map(i=>new Promise(r=>{i.onload=i.onerror=r;}))));
  await p.waitForTimeout(800);
  const m=await p.evaluate(()=>{
    const imgs=[...document.querySelectorAll('img')];
    /* a photo whose stored orientation was lost renders portrait inside a
       landscape frame — compare each image's own ratio with its box's */
    const flipped=imgs.filter(i=>{
      const r=i.getBoundingClientRect();
      if(!i.naturalWidth||r.width<80||r.height<80) return false;
      const nat=i.naturalWidth/i.naturalHeight, box=r.width/r.height;
      return (nat>1.15&&box<0.87)||(nat<0.87&&box>1.15);
    }).length;
    return {n:imgs.length,
      broken:imgs.filter(i=>(i.getAttribute('src')||i.currentSrc)&&i.complete&&i.naturalWidth===0).length,
      avif:imgs.filter(i=>(i.currentSrc||'').includes('.avif')).length,
      flipped,
      hs:document.documentElement.scrollWidth-document.documentElement.clientWidth};});
  const bad=r.status()!==200||m.n===0||m.broken||m.avif||m.hs>0;
  if(bad){fail++;console.log('  FAIL '+u,JSON.stringify(m));}
  else console.log(`  ${u.padEnd(46)} ${String(m.n).padStart(3)} imgs · 0 broken · 0 avif · ${m.flipped} orientation-mismatched · no overflow`);
  await p.context().close();
}
{
  const p=await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
  await p.goto('http://localhost:4321/academics/philosophy/affiliation-details/',{waitUntil:'load'});
  await p.waitForTimeout(1500);
  await p.screenshot({path:dir+'exif-check.png',clip:{x:0,y:130,width:1440,height:320}});
  console.log('  banner shot saved — the EXIF-rotated corridor source');
  await p.context().close();
}
console.log(fail?`  ${fail} failures`:'  7 pages clean');
console.log('  console errors:',errs.length,errs.slice(0,2));
await b.close();
