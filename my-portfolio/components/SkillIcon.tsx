import Image from "next/image";

export default function SkillIcon(props: { src: string; alt: string }) {
  return (
    <Image
      className="w-12 text-center"
      src={`/icons8-${props.src}-96.png`}
      alt={props.alt}
      width={96}
      height={96}
      quality={100}
    />
  );
}
