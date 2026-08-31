import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-download/', 'ShreeWin Download');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-download/" label="ShreeWin Download" />; }
