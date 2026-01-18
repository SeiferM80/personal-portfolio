import Head from 'next/head';
import { useTheme } from 'next-themes';

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Personal portfolio showcasing my work and skills." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className="min-h-screen bg-gray-900 text-white">
        <header className="p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
          <button
            className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            Toggle Dark Mode
          </button>
        </header>
        <section className="p-4">
          <h2 className="text-xl font-semibold">Welcome to my portfolio!</h2>
          <p className="mt-2">Explore my projects and learn more about me.</p>
        </section>
        <section className="p-4">
          <h2 className="text-xl font-semibold">Projects</h2>
          <ul className="mt-2 space-y-2">
            <li className="p-2 bg-gray-800 rounded">Project 1: A cool web app</li>
            <li className="p-2 bg-gray-800 rounded">Project 2: Another awesome project</li>
          </ul>
        </section>
        <section className="p-4">
          <h2 className="text-xl font-semibold">About Me</h2>
          <p className="mt-2">I'm a developer passionate about creating amazing web experiences.</p>
        </section>
        <section className="p-4">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-2">Feel free to reach out via email at example@example.com.</p>
        </section>
      </main>
    </>
  );
}
