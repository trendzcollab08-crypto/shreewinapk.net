import { buildGuideMetadata, GuidePage } from '../components/GuidePage';

export const metadata = buildGuideMetadata('terms');
export default function Page() { return <GuidePage slug="terms" />; }
