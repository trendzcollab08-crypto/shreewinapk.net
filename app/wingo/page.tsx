import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-wingo/', 'ShreeWin WinGo');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-wingo/" label="ShreeWin WinGo" />; }
