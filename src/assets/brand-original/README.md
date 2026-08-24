# Original brand PNGs — as supplied by the client

These are the untouched files. `public/brand/*.png` holds re-encoded copies of
the same artwork at the same pixel dimensions: palette-quantised PNG, which took
the set from **387 KB to 103 KB** with no change to size, transparency or
appearance.

Why it mattered: `sunbeam-emblem.png` and `sunbeam-wordmark.png` sit in the
masthead of **every page**, and between them they were 111 KB of a homepage's
743 KB of images — for artwork that renders at 52 px and 40 px tall. They are
served straight from `public/`, so Astro's image pipeline never sees them and
nothing else was going to compress them.

This folder lives outside `public/` deliberately: the originals stay in the repo
for re-export, but are not shipped to the browser twice.

To re-run after replacing a logo:

    node -e "const s=require('sharp'),f=require('fs');(async()=>{for(const n of f.readdirSync('src/assets/brand-original').filter(x=>x.endsWith('.png')))f.writeFileSync('public/brand/'+n,await s('src/assets/brand-original/'+n).png({palette:true,quality:92,effort:10}).toBuffer())})()"
