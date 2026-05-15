import StudioCursorFix from '@/components/studio/StudioCursorFix';

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="studio-page min-h-screen">
      <StudioCursorFix />
      {children}
    </div>
  );
}
