import { buildStaticRedirectMetadata, StaticRedirect } from '../components/StaticRedirect';

export const metadata = buildStaticRedirectMetadata('/privacy-policy/', 'Privacy Policy');

export default function LegacyRedirect() { return <StaticRedirect destination="/privacy-policy/" label="Privacy Policy" />; }
