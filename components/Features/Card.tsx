import { cn } from "@/lib/utils";

type CardProps = {
  tag: string;
  title: string;
  description: string;
  style: Record<string, string>;
};

export default function Card({ tag, title, description, style }: CardProps) {
  
  return (
    <>
      <div
        
      >
        <p className={cn(style.label, "text-sm font-bold")}>{tag}</p>
        <h3 className={cn(style.title, "text-2xl font-normal mt-2")}>
          {title}
        </h3>
        <p className={cn(style.text, "text-sm mt-5")}>{description}</p>
      </div>
    </>
  );
}
