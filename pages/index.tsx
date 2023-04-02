import { useMemo } from "react"
import { Layout } from "./_layout"

export default function Home() {
  const offerings = useMemo(
    () => ["Podcasts", "Teaching Sessions", "Open Source Encouragement"],
    []
  )

  const links = useMemo(
    () => [{ link: "https://discord.gg/YAc9p3feq7", name: "Discord" }],
    []
  )

  return (
    <Layout>
      <h1 className="font-bold text-2xl text-gray-800 bg-orange-300 px-2 py-1 w-max select-none">
        pizzaDev
      </h1>

      <p>A fun coding community? {"[WIP]"}</p>

      <div className="flex flex-col items-center gap-2">
        {offerings.map((text, idx) => (
          <p
            key={idx}
            className="hover:bg-orange-100 cursor-not-allowed px-2 py-1 rounded-xl"
          >
            {text}
          </p>
        ))}
      </div>

      <div>
        {links.map((d, idx) => (
          <a
            href={d.link}
            className="bg-violet-100 hover:bg-violet-200 cursor-not-allowed px-2 py-1 rounded-xl"
            target="_blank"
            referrerPolicy="no-referrer"
            key={idx}
          >
            {d.name}
          </a>
        ))}
      </div>
    </Layout>
  )
}
