import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/trx-wingo/', 'TRX WinGo');

export default function LegacyRedirect() { return <StaticRedirect destination="/trx-wingo/" label="TRX WinGo" />; }
