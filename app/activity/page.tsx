import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-activity/', 'ShreeWin Activity');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-activity/" label="ShreeWin Activity" />; }
