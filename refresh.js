(()=>{
  const ENDPOINT='https://rmlxigxysujsuwzgoimv.supabase.co/functions/v1/para-ti-refresh';
  const old=document.querySelector('a.refresh');
  if(!old) return;

  const btn=document.createElement('button');
  btn.type='button';
  btn.className=old.className;
  btn.id='refreshButton';
  btn.textContent='↻ Refresh manual';
  old.replaceWith(btn);

  const note=document.querySelector('.actions .note');
  if(note) note.textContent='Un toque: dispara la regeneración aquí mismo y la Control Tower detecta el nuevo deploy automáticamente.';

  let busy=false;
  btn.addEventListener('click',async()=>{
    if(busy) return;
    busy=true;
    const original=btn.textContent;
    btn.disabled=true;
    btn.textContent='↻ Iniciando…';
    try{
      const res=await fetch(ENDPOINT,{method:'POST',headers:{'content-type':'application/json'},body:'{}'});
      const data=await res.json().catch(()=>({}));
      if(!res.ok || !data.ok) throw new Error(data.error||`HTTP ${res.status}`);
      if(data.state==='already_running') btn.textContent='✓ Ya está corriendo';
      else if(data.state==='recently_started') btn.textContent='✓ Refresh reciente';
      else btn.textContent='✓ REFRESH STARTED';
      if(note) note.textContent='Listo. No necesitas abrir GitHub. El monitor actualizará la hora cuando termine el deploy.';
      setTimeout(()=>{btn.textContent=original;btn.disabled=false;busy=false;},12000);
    }catch(e){
      btn.textContent='✕ No se pudo iniciar';
      if(note) note.textContent=`Error: ${e.message}.`;
      setTimeout(()=>{btn.textContent=original;btn.disabled=false;busy=false;},6000);
    }
  });
})();
