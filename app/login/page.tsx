import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-login/', 'ShreeWin Login');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-login/" label="ShreeWin Login" />; }
