import { buildGuideMetadata, GuidePage } from '../components/GuidePage';

export const metadata = buildGuideMetadata('motorace');
export default function Page() { return <GuidePage slug="motorace" />; }

