import Menu from "@/components/menu";

export default function DashboardLayout({ children }) {
  return (
    <div className="container flex flex-row min-h-screen">
      <section className="basis-1/6 p-4 bg-white shadow-lg">
        <Menu />
      </section>
      <section className="basis-5/6 p-6">{children}</section>
    </div>
  );
}
