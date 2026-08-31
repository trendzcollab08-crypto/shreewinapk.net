import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/contact/', 'Contact');

export default function LegacyRedirect() { return <StaticRedirect destination="/contact/" label="Contact" />; }
