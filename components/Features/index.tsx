import Slider from "./Slider";

export const featuresList = [
  {
    tag: "VENTA ONLINE",
    title: "Vende entradas SIN comisiones ni cargo por servicio.",
    description:
      "A diferencia de otras ticketeras, no te vamos a cobrar comisión por venta, abonás un costo fijo. Además, cobrás al instante en tu cuenta con cada venta realizada.",
  },
  {
    tag: "ACCESO RÁPIDO",
    title: "Crea tu evento en menos de 5 minutos.",
    description:
      "Solo tenés que completar los datos básicos, subir una imagen y definir las entradas. No necesitás conocimientos técnicos para empezar.",
  },
  {
    tag: "GESTIÓN INTELIGENTE",
    title: "Control total de tus ventas y asistentes.",
    description:
      "Visualizá estadísticas en tiempo real, descargá reportes y validá entradas desde cualquier dispositivo con nuestro sistema integrado.",
  },
];

export default function Features() {
  return <Slider features={featuresList} />;
}
