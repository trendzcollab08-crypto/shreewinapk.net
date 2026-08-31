import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-withdrawal/', 'ShreeWin Withdrawal');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-withdrawal/" label="ShreeWin Withdrawal" />; }
