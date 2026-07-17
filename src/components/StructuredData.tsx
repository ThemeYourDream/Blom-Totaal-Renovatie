export interface StructuredDataProps {
  type: 'LocalBusiness' | 'Organization' | 'BreadcrumbList' | 'Service' | 'FAQPage';
  data: Record<string, unknown>;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
