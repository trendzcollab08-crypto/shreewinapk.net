import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/shree-win-promotion/#section-2', 'First Deposit Bonus Information');

export default function LegacyRedirect() { return <StaticRedirect destination="/shree-win-promotion/#section-2" label="First Deposit Bonus Information" />; }
