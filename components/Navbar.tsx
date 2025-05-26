import Image from "next/image";

const navItems = [
  { name: "Inicio", href: "/" },
  { name: "Eventos", href: "/events" },
  { name: "Entradas", href: "/tickets" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-10 py-4 px-12 flex justify-between items-center">
      <div>
        <Image src="/logo.png" alt="EyTickets logo" width={294} height={30} />
      </div>
      <div>
        <nav className="flex justify-end space-x-8">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-white">
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
