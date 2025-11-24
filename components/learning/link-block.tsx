import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface LinkBlockProps {
  title: string;
  url: string;
  description?: string;
}

export function LinkBlock({ title, url, description }: LinkBlockProps) {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border bg-card p-6 transition-all hover:shadow-lg"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        <ExternalLink className="ml-4 h-5 w-5 text-muted-foreground group-hover:text-primary" />
      </div>
    </Link>
  );
}
