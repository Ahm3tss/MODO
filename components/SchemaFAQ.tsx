"use client";

interface FAQItem {
    question: string;
    answer: string;
}

interface SchemaFAQProps {
    data: FAQItem[];
}

export function SchemaFAQ({ data }: SchemaFAQProps) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": data.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
            }
        }))
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
