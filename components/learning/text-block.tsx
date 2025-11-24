interface TextBlockProps {
  title: string;
  content: string;
}

export function TextBlock({ title, content }: TextBlockProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <div className="prose prose-sm max-w-none dark:prose-invert">
        <p className="text-muted-foreground whitespace-pre-wrap">{content}</p>
      </div>
    </div>
  );
}
