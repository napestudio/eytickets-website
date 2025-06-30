import Slider from "./Slider";

export const featuresList = [
  {
    tag: "VENTA ONLINE",
    title: "Vende entradas SIN comisiones ni cargo por servicio.",
    description:
      "Publicá y vendé tus entradas al instante, sin costos ocultos ni intermediarios.",
  },
  {
    tag: "SIN SORPRESAS",
    title: "Abonás siempre un costo fijo.",
    description:
      "Pagás una tarifa clara y estable, sin cargos adicionales por venta.",
  },
  {
    tag: "MANEJÁ TU DINERO",
    title: "Cobrás al instante en tu cuenta con cada venta realizada.",
    description:
      "Recibí el dinero de tus ventas al momento, sin demoras ni retenciones.",
  },
];

export default function Features() {
  return <Slider features={featuresList} />;
}
