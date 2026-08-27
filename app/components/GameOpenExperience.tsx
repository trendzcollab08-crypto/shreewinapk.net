'use client';

import { useEffect, useState } from 'react';

export function GameOpenExperience(){
  const [open,setOpen]=useState(false);
  const [game,setGame]=useState('Royal Fishing');
  useEffect(()=>{if(location.hash==='#game-preview')setOpen(true)},[]);
  function launch(name:string){setGame(name);setOpen(true)}
  return <section className="game-open-demo" id="game-preview"><div className="section-title"><span>GAME OPEN EXPERIENCE</span><h2>See what appears when a game opens.</h2><p>Choose a title to preview the Shree Win welcome state. This demonstration does not place a wager or start a real round.</p></div><div className="launch-grid">{['Royal Fishing','Golden Empire','Super Rich','Limbo'].map((name,i)=><button type="button" onClick={()=>launch(name)} key={name}><i>{['🐉','🏛️','🐘','🚀'][i]}</i><span><b>{name}</b><small>Open preview</small></span><strong>→</strong></button>)}</div>{open&&<div className="welcome-backdrop" role="dialog" aria-modal="true" aria-label={`Welcome to ${game}`}><div className="welcome-modal"><button className="modal-close" aria-label="Close welcome message" onClick={()=>setOpen(false)}>×</button><header><span>✦ Welcome to Shree Win</span><small>{game}</small></header><div className="welcome-art"><div className="art-rays"/><img src="/shreewin-logo.png" alt="Shree Win Game logo"/><div className="art-icons"><span>🎮</span><span>🎲</span><span>🪙</span><span>🎡</span></div><h3>YOUR GAME<br/><em>STARTS HERE</em></h3><p>Fast navigation · Clear rules · One connected lobby</p></div><button className="screen-submit" type="button" onClick={()=>setOpen(false)}>Continue to game</button><small className="modal-note">Always read the active game rules before participating.</small></div></div>}</section>
}
