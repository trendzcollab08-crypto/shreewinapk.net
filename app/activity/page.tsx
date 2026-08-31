import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-promotion/', 'ShreeWin Promotion');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-promotion/" label="ShreeWin Promotion" />; }
