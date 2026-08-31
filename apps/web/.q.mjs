import { chromium } from 'playwright';
const b=await chromium.launch();
const p=await (await b.newContext({viewport:{width:1440,height:900},reducedMotion:'reduce'})).newPage();
let errs=0; p.on('console',m=>m.type()==='error'&&errs++);
for(const u of ['/','/campus/','/career/']){
  await p.goto('http://localhost:4321'+u,{waitUntil:'load'});
  await p.evaluate(async()=>{for(let y=0;y<document.body.scrollHeight;y+=900){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,40));}});
  await p.evaluate(()=>Promise.all([...document.images].filter(i=>!i.complete).map(i=>new Promise(r=>{i.onload=i.onerror=r;}))));
  const m=await p.evaluate(()=>{const i=[...document.querySelectorAll('img')];
    return [i.length, i.filter(x=>x.complete&&x.naturalWidth===0).length, i.filter(x=>(x.currentSrc||'').includes('.avif')).length];});
  console.log(`  ${u.padEnd(12)} ${m[0]} imgs · ${m[1]} broken · ${m[2]} avif`);
}
console.log('  console errors:',errs);
await b.close();
