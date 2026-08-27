'use client';

import { FormEvent, useState } from 'react';

type Language='EN'|'हिंदी'|'தமிழ்'|'తెలుగు';
const copy={
  EN:{login:'Log in',intro:'Use your phone number or email to access Shree Win.',phone:'Phone number',email:'Email',mobile:'Mobile number',password:'Password',remember:'Remember password',forgot:'Forgot password?',register:'Register',mail:'Email address',submit:'Log in'},
  'हिंदी':{login:'लॉग इन',intro:'फोन नंबर या ईमेल से Shree Win खोलें।',phone:'फोन नंबर',email:'ईमेल',mobile:'मोबाइल नंबर',password:'पासवर्ड',remember:'पासवर्ड याद रखें',forgot:'पासवर्ड भूल गए?',register:'रजिस्टर',mail:'ईमेल पता',submit:'लॉग इन'},
  'தமிழ்':{login:'உள்நுழை',intro:'தொலைபேசி எண் அல்லது மின்னஞ்சல் மூலம் Shree Win-ஐ திறக்கவும்.',phone:'தொலைபேசி எண்',email:'மின்னஞ்சல்',mobile:'மொபைல் எண்',password:'கடவுச்சொல்',remember:'கடவுச்சொல்லை நினைவில் கொள்',forgot:'கடவுச்சொல் மறந்ததா?',register:'பதிவு',mail:'மின்னஞ்சல் முகவரி',submit:'உள்நுழை'},
  'తెలుగు':{login:'లాగిన్',intro:'ఫోన్ నంబర్ లేదా ఇమెయిల్‌తో Shree Win తెరవండి.',phone:'ఫోన్ నంబర్',email:'ఇమెయిల్',mobile:'మొబైల్ నంబర్',password:'పాస్‌వర్డ్',remember:'పాస్‌వర్డ్ గుర్తుంచుకో',forgot:'పాస్‌వర్డ్ మర్చిపోయారా?',register:'రిజిస్టర్',mail:'ఇమెయిల్ చిరునామా',submit:'లాగిన్'},
};

export function LoginExperience(){
  const [method,setMethod]=useState<'phone'|'email'>('phone');
  const [language,setLanguage]=useState<Language>('EN');
  const [picker,setPicker]=useState(false);
  const [notice,setNotice]=useState('');
  const t=copy[language];
  function submit(e:FormEvent){e.preventDefault();setNotice('Account login will activate after the verified Shree Win authentication service is connected.');}
  return <figure className="product-screen-figure"><div className="account-screen login-screen">
    <div className="screen-top"><span aria-hidden="true">‹</span><img src="/shreewin-logo.png" alt="Shree Win logo"/><button type="button" onClick={()=>setPicker(!picker)} aria-expanded={picker} className="language-button"><b>◎</b>{language}<i>⌄</i></button></div>
    {picker&&<div className="language-sheet" role="dialog" aria-label="Choose language"><b>Select language</b>{(['EN','हिंदी','தமிழ்','తెలుగు'] as Language[]).map(item=><button type="button" className={item===language?'selected':''} onClick={()=>{setLanguage(item);setPicker(false)}} key={item}><span>{item==='EN'?'🇺🇸':'🇮🇳'}</span>{item}<i>{item===language?'✓':''}</i></button>)}</div>}
    <div className="screen-banner"><h2>{t.login}</h2><p>{t.intro}<br/><small>If you forget your password, use verified customer support.</small></p></div>
    <div className="login-methods"><button className={method==='phone'?'active':''} onClick={()=>setMethod('phone')} type="button"><i>▣</i>{t.phone}</button><button className={method==='email'?'active':''} onClick={()=>setMethod('email')} type="button"><i>✉</i>{t.email}</button></div>
    <form className="screen-form" onSubmit={submit}><label><span>{method==='phone'?'▣':'✉'}</span>{method==='phone'?t.mobile:t.mail}</label>{method==='phone'?<div className="phone-input"><select aria-label="Country code" defaultValue="+91"><option>+91</option></select><input aria-label={t.mobile} inputMode="tel" placeholder={t.mobile}/></div>:<input aria-label={t.mail} type="email" placeholder={t.mail}/>}<label><span>▣</span>{t.password}</label><input aria-label={t.password} type="password" placeholder={t.password}/><div className="login-options"><label><input type="checkbox"/>{t.remember}</label><a href="/support">{t.forgot}</a></div><button className="screen-submit" type="submit">{t.submit}</button><a className="screen-register" href="/register">{t.register}</a>{notice&&<p className="form-notice" role="status">{notice}</p>}</form>
  </div><figcaption>Shree Win Login supports phone and email views with English, Hindi, Tamil and Telugu interface controls.</figcaption></figure>
}

export function RegisterExperience(){
  const [language,setLanguage]=useState<Language>('EN');
  const [picker,setPicker]=useState(false);
  const [notice,setNotice]=useState('');
  function submit(e:FormEvent){e.preventDefault();setNotice('Registration will activate after the verified Shree Win account service is connected.');}
  return <figure className="product-screen-figure"><div className="account-screen register-screen">
    <div className="screen-top"><span aria-hidden="true">‹</span><img src="/shreewin-logo.png" alt="Shree Win logo"/><button type="button" onClick={()=>setPicker(!picker)} aria-expanded={picker} className="language-button"><b>◎</b>{language}<i>⌄</i></button></div>
    {picker&&<div className="language-sheet" role="dialog" aria-label="Choose language">{(['EN','हिंदी','தமிழ்','తెలుగు'] as Language[]).map(item=><button type="button" className={item===language?'selected':''} onClick={()=>{setLanguage(item);setPicker(false)}} key={item}><span>{item==='EN'?'🇺🇸':'🇮🇳'}</span>{item}<i>{item===language?'✓':''}</i></button>)}</div>}
    <div className="screen-banner"><h2>Register</h2><p>Create your Shree Win account with a phone number.</p></div><div className="single-method"><i>▣</i><b>Register your phone</b></div>
    <form className="screen-form" onSubmit={submit}><label><span>▣</span>Phone number</label><div className="phone-input"><select aria-label="Country code" defaultValue="+91"><option>+91</option></select><input aria-label="Phone number" inputMode="tel" placeholder="Enter phone number"/></div><label><span>▣</span>Set password</label><input aria-label="Set password" type="password" placeholder="Create a strong password"/><label><span>▣</span>Confirm password</label><input aria-label="Confirm password" type="password" placeholder="Repeat your password"/><label><span>✦</span>Invite code <small>optional</small></label><input aria-label="Invite code" placeholder="Enter invite code"/><label className="terms-check"><input type="checkbox" required/>I have read and agree to the <a href="/privacy">Privacy Notice</a></label><button className="screen-submit" type="submit">Register</button>{notice&&<p className="form-notice" role="status">{notice}</p>}</form>
  </div><figcaption>Shree Win registration interface with mobile verification, password and optional invitation-code fields.</figcaption></figure>
}
