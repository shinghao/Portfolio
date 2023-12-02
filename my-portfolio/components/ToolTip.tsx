export default function ToolTip(props: { text: string }) {
  return (
    <div className="absolute bg-primary-btn-blue dark:bg-gray-500 pt-1 px-2 rounded-lg mb-16 lg:mb-24 min-w-max">
      <p className="text-primary-bg-light">{props.text}</p>
    </div>
  );
}
