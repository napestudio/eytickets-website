type CardProps = {
  tag: string;
  title: string;
  description: string;
};

export default function Card({ tag, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 max-w-md shadow-md m-4">
      <p className="text-sm font-bold text-teal-500">{tag}</p>
      <h3 className="text-xl font-black text-black mt-2">{title}</h3>
      <p className="text-sm text-gray-700 mt-4">{description}</p>
    </div>
  );
}
