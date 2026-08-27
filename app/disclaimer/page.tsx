import { buildGuideMetadata, GuidePage } from '../components/GuidePage';

export const metadata = buildGuideMetadata('disclaimer');
export default function Page() { return <GuidePage slug="disclaimer" />; }

