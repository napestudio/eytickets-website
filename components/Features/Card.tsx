type CardProps = {
  tag: string;
  title: string;
  description: string;
};

export default function Card({ tag, title, description }: CardProps) {
  return (
    <>
      <p className="text-sm font-bold text-white">{tag}</p>
      <h3 className="text-2xl font-normal text-primary mt-2">{title}</h3>
      <p className="text-sm text-primary mt-5">{description}</p>
    </>
  );
}
