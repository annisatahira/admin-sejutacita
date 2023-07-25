export default function DashboardLayout({
    children, // will be a page or nested layout
}) {
    return (
        <div className="container flex flex-row min-h-screen">
            <section className="basis-1/4 p-4 bg-emerald-600">
                <h1 className="mb-4 text-3xl text-white">SejutaCita</h1>
                <nav className="text-white cursor-pointer mt-10">
                    <ul className="list-none leading-10">
                        <li>
                            Products
                        </li>
                        <li>
                            Carts
                        </li>
                    </ul>
                </nav>
            </section>
            <section className="basis-3/4">
                {children}
            </section>
        </div>
    )
}