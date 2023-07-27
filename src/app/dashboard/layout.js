import Menu from "@/components/menu";

export default function DashboardLayout({ children }) {
  return (
    <div className="container flex flex-row min-h-screen">
      <section className="basis-1/6 p-4 bg-white shadow-lg">
        <Menu />
      </section>
      <main className="basis-5/6">
        <div className="w-full bg-gray-800 p-6 shadow-lg">
          <h1 className="text-xl font-bold text-white">Welcome Back, Admin!</h1>
        </div>
        <div className="p-6">{children}</div>
      </main>
    </div>
  );
}
