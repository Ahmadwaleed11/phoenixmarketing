import { useMemo, useState } from "react";
import Container from "../components/Container";
import Chip from "../components/Chip";
import CardProject from "../components/CardProject";
import GraphicDesignCard from "../components/GraphicDesignCard";
import { CATEGORIES, projects as allProjects } from "../constant/index";
import PageTransition from "../components/common/PageTransition";

export default function Projects() {
  const [category, setCategory] = useState("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState("Most Recent");
  const [page, setPage] = useState(1);

  const pageSize = 6;

  const filtered = useMemo(() => {
    let list = [...allProjects];

    if (category !== "All") list = list.filter((p) => p.category === category);
    if (q.trim()) {
      const s = q.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(s) ||
          (p.subtitle ?? "").toLowerCase().includes(s)
      );
    }

    // demo sort
    if (sort === "A-Z") list.sort((a, b) => a.title.localeCompare(b.title));
    if (sort === "Z-A") list.sort((a, b) => b.title.localeCompare(a.title));

    return list;
  }, [category, q, sort]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <PageTransition>
      <main className="bg-white min-h-screen">
        <section className="relative overflow-hidden bg-white px-6 py-16 lg:py-24 border-b border-gray-100">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(244,124,32,.04),transparent_55%)] pointer-events-none" />
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <span className="text-sm font-medium tracking-[0.2em] text-gray-500 uppercase">
                OUR WORK
              </span>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Featured Projects
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 leading-relaxed">
                Discover our award-winning work across web development, branding, marketing campaigns, and creative design solutions
              </p>
            </div>
          </Container>
        </section>

        <Container className="py-16">
          <div className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">
            FILTER BY CATEGORY
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            {CATEGORIES.map((c) => (
              <Chip
                key={c}
                active={category === c}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
              >
                {c}
              </Chip>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_240px]">
            <div>
              <label className="text-sm font-medium text-gray-600 mb-2 block">Search projects</label>
              <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 shadow-sm focus-within:border-[#F47C20] focus-within:ring-2 focus-within:ring-orange-500/20 transition-all">
                <svg className="w-5 h-5 text-gray-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  value={q}
                  onChange={(e) => {
                    setQ(e.target.value);
                    setPage(1);
                  }}
                  placeholder="Find by project name or outcome..."
                  className="w-full bg-transparent outline-none placeholder:text-gray-400 text-gray-900"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-gray-600 mb-2 block">Sort by</label>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 pr-10 shadow-sm outline-none text-gray-900 focus:border-[#F47C20] focus:ring-2 focus:ring-orange-500/20 transition-all cursor-pointer appearance-none"
                >
                  <option>Most Recent</option>
                  <option>A-Z</option>
                  <option>Z-A</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pageItems.map((p) =>
              p.category === "Graphic Design" ? (
                <GraphicDesignCard key={p.id} p={p} />
              ) : (
                <CardProject key={p.id} p={p} />
              )
            )}
          </div>

          {/* pagination */}
          <div className="mt-16 flex items-center justify-center gap-3">
            <button
              disabled={page === 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#F47C20] hover:bg-[#F47C20] hover:text-white transition-all shadow-sm hover:-translate-y-0.5"
            >
              Previous
            </button>

            {Array.from({ length: totalPages }).map((_, i) => {
              const n = i + 1;
              const active = n === page;
              return (
                 <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={[
                    "h-10 w-10 rounded-xl border text-sm font-medium transition-all shadow-sm",
                    active
                      ? "bg-[#F47C20] text-white border-[#F47C20]"
                      : "border-gray-300 bg-white text-gray-700 hover:border-[#F47C20] hover:bg-orange-50 hover:text-[#F47C20]",
                  ].join(" ")}
                >
                  {n}
                </button>
              );
            })}

            <button
              disabled={page === totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 disabled:opacity-40 disabled:cursor-not-allowed hover:border-[#F47C20] hover:bg-[#F47C20] hover:text-white transition-all shadow-sm hover:-translate-y-0.5"
            >
              Next
            </button>
          </div>
        </Container>
      </main>
    </PageTransition>
  );
}
