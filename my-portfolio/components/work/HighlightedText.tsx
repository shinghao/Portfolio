interface HighlightedTextProps {
  text: string;
}
export default function HighlightedText(prop: HighlightedTextProps) {
  const highlightedTextStyle = `font-bold text-3xl text-primary-btn-blue`;
  return <span className={highlightedTextStyle}>{" " + prop.text + " "}</span>;
}
