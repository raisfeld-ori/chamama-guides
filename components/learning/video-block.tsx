interface VideoBlockProps {
  title: string;
  youtubeId: string;
  description?: string;
}

export function VideoBlock({ title, youtubeId, description }: VideoBlockProps) {
  return (
    <div className="rounded-lg border bg-card p-6">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      {description && (
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
      )}
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="border-0"
        />
      </div>
    </div>
  );
}
