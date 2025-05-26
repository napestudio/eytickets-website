import Card from "./Card";

type Feature = {
  tag: string;
  title: string;
  description: string;
};

type SliderProps = {
  features: Feature[];
};

export default function Slider({ features }: SliderProps) {
  return (
    <div className="flex flex-wrap justify-center">
      {features.map((feature, index) => (
        <Card
          key={index}
          tag={feature.tag}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  );
}
