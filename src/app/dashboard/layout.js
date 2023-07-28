import Menu from "@/components/menu";
import { PiHandWavingDuotone } from "react-icons/pi";

export default function DashboardLayout({ children }) {
  return (
    <div className="container flex flex-col md:flex-row min-h-screen">
      <section className="md:block md:basis-1/6 bg-white shadow-lg">
        <Menu />
      </section>
      <main className="md:basis-5/6 pt-20 md:pt-0">
        <div className="w-full bg-gray-800 p-6 shadow-lg flex text-xl font-bold text-white items-center gap-3">
          <PiHandWavingDuotone className="text-4xl" />
          <h1>Welcome Back, Admin!</h1>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
