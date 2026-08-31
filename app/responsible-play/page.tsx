import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/responsible-gaming/', 'Responsible Gaming');

export default function LegacyRedirect() { return <StaticRedirect destination="/responsible-gaming/" label="Responsible Gaming" />; }
