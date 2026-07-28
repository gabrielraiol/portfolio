interface RichTextProps {
  html: string;
  className?: string;
}

/** Renders only static, repository-controlled translation markup. */
export function RichText({ html, className }: RichTextProps) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
