import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-games/', 'ShreeWin Games');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-games/" label="ShreeWin Games" />; }
