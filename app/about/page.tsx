import { buildGuideMetadata, GuidePage } from '../components/GuidePage';

export const metadata = buildGuideMetadata('about');
export default function Page() { return <GuidePage slug="about" />; }

