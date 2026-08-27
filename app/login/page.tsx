import type { Metadata } from 'next';
import { PageShell } from '../components/SiteChrome';
import { FaqBlock, InfoHero } from '../components/InfoBlocks';
import { LoginExperience } from '../components/AccountExperience';
export const metadata:Metadata={title:'Shree Win Login | Access Your Shree Win Game Account',description:'Open Shree Win Login, use your registered mobile number and password, recover account access safely and protect your OTP and account details.',alternates:{canonical:'/login'}};
const faqs:[string,string][]=[
 ['How do I log in to Shree Win?','Open the Login area, enter the mobile number connected to your account and your password, then complete any verification shown.'],
 ['I forgot my password—what should I do?','Use Forgot Password on the live login screen and complete recovery with the registered mobile number. Never use recovery links from unknown messages.'],
 ['Why did my login fail?','Check the mobile number format, password and network connection. Repeated attempts may trigger a temporary security check.'],
 ['Can I share my Shree Win account?','No. Keep your account, password and verification codes private and follow the active account terms.'],
 ['Does support need my OTP?','No. Never share an OTP, password, PIN or full payment credentials with anyone.'],
];
export default function LoginPage(){return <PageShell active="account"><main><InfoHero eyebrow="SHREE WIN LOGIN" title="Welcome back to" accent="your Shree Win account." copy="Use the mobile number or email connected to your account, choose your preferred language and complete any security check shown." current="Login" icon="🔐" primary={{label:'Open login experience',href:'#details'}}/>
 <section className="content-section account-experience-section" id="details"><LoginExperience/><div className="account-copy"><span className="kicker dark"><i/>PHONE, EMAIL & LANGUAGE</span><h2>One login page, multiple access choices.</h2><p>Switch between Phone Number and Email without leaving the page. The language control changes the main interface labels in English, Hindi, Tamil or Telugu.</p><ol><li><b>01</b><p><strong>Choose phone or email</strong>Use the tab linked to your registered account details.</p></li><li><b>02</b><p><strong>Select your language</strong>Open the language menu at the top-right of the Shree Win screen.</p></li><li><b>03</b><p><strong>Protect verification</strong>Never disclose your password, OTP or screen to another person.</p></li></ol><div className="product-notice"><b>Account connection</b><p>This interface is ready for the verified Shree Win authentication API. It does not transmit credentials until that service is connected.</p></div></div></section>
 <FaqBlock title="Shree Win Login FAQ" items={faqs}/><section className="page-cta"><span>NEW TO SHREE WIN?</span><h2>Create an account and explore the game lobby.</h2><a className="primary-button" href="/register">Open registration →</a></section></main></PageShell>}
