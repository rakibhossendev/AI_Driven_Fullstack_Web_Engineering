
import Link from "next/link";

export default function SocialMediaHome() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-zinc-950">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="absolute right-[-120px] top-[35%] h-[300px] w-[300px] rounded-full bg-indigo-100/50 blur-3xl" />
        <div className="absolute bottom-[-150px] left-[-100px] h-[350px] w-[350px] rounded-full bg-sky-100/50 blur-3xl" />
      </div>

      {/* Main Hero */}
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-12">
        <div className="grid w-full items-center gap-14 lg:grid-cols-2 lg:gap-20">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Small badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-600 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              A better way to connect
            </div>

            <h1 className="text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Connect.
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Share.
              </span>{" "}
              Belong.
            </h1>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8 lg:mx-0">
              A simple and comfortable place to connect with people,
              share your thoughts, discover new ideas, and build meaningful
              connections.
            </p>

            {/* CTA */}
            <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href="/sign-up"
                className="group flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-zinc-950/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-zinc-800 sm:w-auto"
              >
                Get Started
                <span className="transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/sign-in"
                className="w-full rounded-xl border border-zinc-200 bg-white px-6 py-3.5 text-center text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-zinc-300 hover:bg-zinc-50 sm:w-auto"
              >
                Sign In
              </Link>
            </div>

            <p className="mt-5 text-xs text-zinc-400">
              Free to join · Simple · Built for people
            </p>
          </div>

          {/* Right Visual */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Main card */}
            <div className="relative rounded-[2rem] border border-zinc-200/80 bg-white/90 p-4 shadow-2xl shadow-zinc-200/70 backdrop-blur sm:p-5">
              
              {/* Fake post header */}
              <div className="flex items-center justify-between rounded-2xl bg-zinc-50 p-4">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500" />

                  <div>
                    <div className="h-3 w-24 rounded-full bg-zinc-800" />
                    <div className="mt-2 h-2.5 w-16 rounded-full bg-zinc-300" />
                  </div>
                </div>

                <div className="flex gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                  <span className="h-1.5 w-1.5 rounded-full bg-zinc-300" />
                </div>
              </div>

              {/* Fake content */}
              <div className="mt-4 overflow-hidden rounded-2xl bg-gradient-to-br from-blue-100 via-indigo-50 to-white p-6">
                <div className="flex min-h-64 items-center justify-center rounded-xl border border-white/70 bg-white/50 backdrop-blur">
                  <div className="text-center">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm">
                      ✦
                    </div>

                    <p className="mt-4 text-sm font-semibold text-zinc-800">
                      Share what matters
                    </p>

                    <p className="mt-1 text-xs text-zinc-500">
                      Your ideas. Your people. Your space.
                    </p>
                  </div>
                </div>
              </div>

              {/* Fake actions */}
              <div className="flex items-center justify-between px-2 pt-4">
                <div className="flex gap-4 text-sm text-zinc-500">
                  <span>♡ 128</span>
                  <span>○ 24</span>
                  <span>↗ Share</span>
                </div>

                <span className="text-sm text-zinc-400">•••</span>
              </div>
            </div>

            {/* Floating notification card */}
            <div className="absolute -left-5 top-12 hidden rounded-2xl border border-zinc-200 bg-white p-3 shadow-xl shadow-zinc-200/60 sm:block lg:-left-12">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  ♡
                </div>

                <div>
                  <p className="text-xs font-semibold text-zinc-800">
                    New connection
                  </p>
                  <p className="mt-0.5 text-[11px] text-zinc-400">
                    Someone liked your post
                  </p>
                </div>
              </div>
            </div>

            {/* Floating users card */}
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl shadow-zinc-200/60 sm:block lg:-right-10">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-blue-400" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-purple-400" />
                  <div className="h-8 w-8 rounded-full border-2 border-white bg-emerald-400" />
                </div>

                <div className="ml-3">
                  <p className="text-xs font-semibold text-zinc-800">
                    Your people
                  </p>
                  <p className="text-[11px] text-zinc-400">
                    Always connected
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom hint */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-center sm:block">
        <p className="text-xs font-medium tracking-wide text-zinc-400">
          Made for meaningful connections
        </p>
      </div>
    </main>
  );
}

