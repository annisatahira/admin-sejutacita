import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="px-6 text-center dark:bg-neutral-900">
        <h1 className="mt-2 mb-8 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">
          Hello!
          <br />
        </h1>
        <h2 className="mb-16 text-5xl leading-normal">
          Have a great day ahead! May each moment be filled with positivity,
          productivity, and joy.
        </h2>
        <Link
          className="mb-2 inline-block rounded bg-blue-500 px-12 pt-4 pb-3.5 text-smuppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] md:mr-2 md:mb-0 hover:font-bold "
          href="/dashboard"
        >
          Go To Dashboard
        </Link>
      </div>
    </main>
  );
}
