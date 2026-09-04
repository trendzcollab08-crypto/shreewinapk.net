import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-wallet/', 'ShreeWin Wallet');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-wallet/" label="ShreeWin Wallet" />; }
