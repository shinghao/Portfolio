export default function SectionHeader({ children }: { children: string }) {
  return (
    <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center lg:w-max mb-12">
      {children}
    </h2>
  );
}
