import { buildGuideMetadata, GuidePage } from '../components/GuidePage';

export const metadata = buildGuideMetadata('contact');
export default function Page() { return <GuidePage slug="contact" />; }

