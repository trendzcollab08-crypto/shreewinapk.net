import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-register/', 'ShreeWin Registration');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-register/" label="ShreeWin Registration" />; }
