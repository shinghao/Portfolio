export default function ToolTip(props: { text: string }) {
  return (
    <div className="absolute z-10 bg-gray-500 pt-1 px-2 rounded-lg mb-16 lg:mb-24">
      <p>{props.text}</p>
    </div>
  );
}
