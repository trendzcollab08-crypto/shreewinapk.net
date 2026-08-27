import { buildGuideMetadata, GuidePage } from '../components/GuidePage';

export const metadata = buildGuideMetadata('privacy-policy');
export default function Page() { return <GuidePage slug="privacy-policy" />; }

