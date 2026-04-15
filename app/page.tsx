import Link from "next/link";

const features = [
  {
    emoji: "⚡",
    title: "Instant fetch",
    desc: "Paste any URL and we'll auto-pull the title, description, and metadata in seconds.",
  },
  {
    emoji: "🏷️",
    title: "Tag everything",
    desc: "Organize with flexible tags. Filter by design, tools, nextjs — whatever sticks.",
  },
  {
    emoji: "🔍",
    title: "Find it fast",
    desc: "No more scrolling through bookmarks. Search and filter gets you there instantly.",
  },
];

const previewLinks = [
  {
    title: "Shadcn UI Components",
    desc: "Beautifully designed components built with Radix UI and Tailwind CSS.",
    tags: ["design", "tools"],
    emoji: "🎨",
    domain: "ui.shadcn.com",
  },
  {
    title: "Next.js App Router Docs",
    desc: "Official documentation for the Next.js App Router and server components.",
    tags: ["nextjs"],
    emoji: "📘",
    domain: "nextjs.org",
  },
  {
    title: "Supabase Dashboard",
    desc: "Open source Firebase alternative with PostgreSQL, auth, and storage.",
    tags: ["tools", "nextjs"],
    emoji: "⚡",
    domain: "supabase.com",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-[#e8e8e8]">

      {/* ── Nav ── */}
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-mono text-sm tracking-wider text-[#c8f04a]">
          link_vault/
        </span>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="rounded-md border border-[#333] bg-transparent px-4 py-2 text-xs font-medium text-[#e8e8e8] transition-colors hover:border-[#c8f04a] hover:text-[#c8f04a]"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-[#c8f04a] px-4 py-2 text-xs font-medium text-[#0f0f0f] transition-opacity hover:opacity-85"
          >
            Sign up free
          </Link>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="mx-auto max-w-4xl px-6 pb-20 pt-20 text-center">

        <span className="mb-5 inline-block rounded-full border border-[#c8f04a33] bg-[#c8f04a0d] px-4 py-1.5 font-mono text-[11px] tracking-[0.18em] text-[#c8f04a]">
          YOUR PERSONAL LINK VAULT
        </span>

        <h1 className="mx-auto max-w-3xl text-4xl font-medium leading-[1.15] tracking-tight sm:text-6xl">
          Stop losing links you{" "}
          <span className="text-[#c8f04a]">actually need</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-[#666] sm:text-base">
          Paste a URL, get the details auto-fetched, tag it, and find it in
          seconds. A minimal vault for everything worth keeping.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/signup"
            className="rounded-md bg-[#c8f04a] px-6 py-3 text-sm font-medium text-[#0f0f0f] transition-opacity hover:opacity-85"
          >
            Start saving links →
          </Link>
          <Link
            href="/login"
            className="rounded-md border border-[#2a2a2a] bg-[#161616] px-6 py-3 text-sm font-medium text-[#aaa] transition-colors hover:border-[#444] hover:text-[#e8e8e8]"
          >
            I have an account
          </Link>
        </div>
      </section>

      {/* ── App Preview ── */}
      <section className="mx-auto max-w-5xl px-6 pb-24">
        <div className="overflow-hidden rounded-2xl border border-[#222] bg-[#0f0f0f]">

          {/* fake browser chrome */}
          <div className="flex items-center gap-2 border-b border-[#222] bg-[#141414] px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="mx-auto rounded-md border border-[#2a2a2a] bg-[#1a1a1a] px-16 py-1 font-mono text-[10px] text-[#444]">
              app.linkvault.io/dashboard
            </span>
          </div>

          {/* mock nav */}
          <div className="flex items-center justify-between border-b border-[#1e1e1e] px-5 py-3.5">
            <span className="font-mono text-xs text-[#c8f04a]">link_vault/</span>
            <div className="flex gap-2">
              {["all", "design", "nextjs", "tools"].map((tag, i) => (
                <span
                  key={tag}
                  className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] ${
                    i === 0
                      ? "border-[#c8f04a] text-[#c8f04a]"
                      : "border-[#2a2a2a] text-[#555]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* mock stats */}
          <div className="grid grid-cols-3 gap-3 border-b border-[#1e1e1e] px-5 py-4">
            {[["3", "links saved"], ["3", "tags used"], ["1", "collections"]].map(
              ([val, label]) => (
                <div
                  key={label}
                  className="rounded-lg border border-[#1e1e1e] bg-[#141414] px-4 py-3"
                >
                  <p className="font-mono text-xl font-medium text-[#c8f04a]">{val}</p>
                  <p className="mt-0.5 text-[10px] text-[#444]">{label}</p>
                </div>
              )
            )}
          </div>

          {/* mock cards */}
          <div className="grid gap-3 p-5 sm:grid-cols-3">
            {previewLinks.map((link) => (
              <article
                key={link.title}
                className="rounded-xl border border-[#1e1e1e] bg-[#141414]"
              >
                <div className="flex h-24 items-center justify-center border-b border-[#1e1e1e] text-3xl">
                  {link.emoji}
                </div>
                <div className="p-3">
                  <h3 className="text-xs font-medium text-[#e8e8e8]">{link.title}</h3>
                  <p className="mt-1 line-clamp-2 text-[10px] leading-relaxed text-[#555]">
                    {link.desc}
                  </p>
                  <div className="mt-2.5 flex flex-wrap gap-1">
                    {link.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#c8f04a12] px-2 py-0.5 font-mono text-[9px] text-[#c8f04a]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="mt-2 font-mono text-[9px] text-[#333]">{link.domain}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <p className="mb-10 text-center font-mono text-[11px] tracking-[0.18em] text-[#444]">
          WHY LINK_VAULT
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-xl border border-[#1e1e1e] bg-[#111] p-6 transition-colors hover:border-[#2a2a2a]"
            >
              <span className="text-2xl">{f.emoji}</span>
              <h3 className="mt-4 text-sm font-medium text-[#e8e8e8]">{f.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#555]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="mx-auto max-w-5xl px-6 pb-28">
        <div className="rounded-2xl border border-[#c8f04a22] bg-[#c8f04a08] px-8 py-14 text-center">
          <h2 className="text-2xl font-medium sm:text-4xl">
            Ready to start saving?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-[#555]">
            Free to use. No credit card required. Just sign up and start pasting links.
          </p>
          <Link
            href="/signup"
            className="mt-8 inline-block rounded-md bg-[#c8f04a] px-8 py-3 text-sm font-medium text-[#0f0f0f] transition-opacity hover:opacity-85"
          >
            Create your vault →
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-[#1a1a1a] px-6 py-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <span className="font-mono text-xs text-[#333]">link_vault/</span>
          <span className="font-mono text-[11px] text-[#2a2a2a]">
            © {new Date().getFullYear()}
          </span>
        </div>
      </footer>
    </main>
  );
}