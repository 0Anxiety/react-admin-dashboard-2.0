import React from "react";
import "./theme.css";
import "./index.css";

export default function SignalWelcome() {
  return (
    <div className="min-h-screen w-full bg-[#0A0C10] text-[#ECEAE2] antialiased overflow-x-hidden">
      {/* Header */}
      <header className="relative z-10 flex items-center justify-between px-6 sm:px-10 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="live-dot absolute inline-flex h-full w-full rounded-full bg-[#FF7A3D]" />
          </span>
          <span className="font-mono text-sm tracking-[0.25em] uppercase text-[#ECEAE2]">
            Signal
          </span>
        </div>
        <nav className="flex items-center gap-3">
          <a
            href="/login"
            className="font-body text-sm text-[#8B909A] hover:text-[#ECEAE2] transition-colors px-3 py-2"
          >
            Log in
          </a>
          <a
            href="/signup"
            className="font-body text-sm font-medium text-[#0A0C10] bg-[#FF7A3D] hover:bg-[#ff8c57] transition-colors px-4 py-2 rounded-md"
          >
            Sign up
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="relative max-w-7xl mx-auto px-6 sm:px-10 pt-10 sm:pt-16 pb-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#4FD8C4] mb-6">
            Automated video pipeline
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] tracking-tight mb-6">
            <span className="block text-[#8B909A] font-medium">One prompt.</span>
            <span className="block text-[#ECEAE2] font-semibold">Three channels.</span>
            <span className="block font-bold">
              <span className="text-[#FF7A3D]">Zero</span> manual uploads.
            </span>
          </h1>
          <p className="font-body text-base sm:text-lg text-[#8B909A] max-w-md mb-9 leading-relaxed">
            Signal turns a single prompt into a finished video, then posts it
            to YouTube, TikTok, and Instagram on the schedule you set. No
            exporting, no re-uploading, no missed weeks.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="/signup"
              className="font-body text-sm font-medium text-[#0A0C10] bg-[#FF7A3D] hover:bg-[#ff8c57] transition-colors px-6 py-3 rounded-md"
            >
              Start free
            </a>
            <a
              href="/login"
              className="font-body text-sm font-medium text-[#ECEAE2] border border-[#2A2F3A] hover:border-[#4FD8C4] transition-colors px-6 py-3 rounded-md"
            >
              Log in
            </a>
          </div>
        </div>

        {/* Signature: signal splitting into three channels */}
        <div className="relative flex items-center justify-center">
          <svg
            viewBox="0 0 480 320"
            className="w-full max-w-lg"
            aria-hidden="true"
          >
            <path
              d="M0,160 C20,100 40,220 60,160 C80,100 100,220 120,160 C140,120 160,200 180,160 L200,160"
              fill="none"
              stroke="#FF7A3D"
              strokeWidth="2.5"
              strokeLinecap="round"
              className="signal-line"
            />
            <path
              d="M200,160 C260,160 300,60 452,60"
              fill="none"
              stroke="#2A2F3A"
              strokeWidth="1.5"
            />
            <path
              d="M200,160 L452,160"
              fill="none"
              stroke="#2A2F3A"
              strokeWidth="1.5"
            />
            <path
              d="M200,160 C260,160 300,260 452,260"
              fill="none"
              stroke="#2A2F3A"
              strokeWidth="1.5"
            />

            <circle r="4" fill="#4FD8C4" className="dot-top" />
            <circle r="4" fill="#4FD8C4" className="dot-mid" />
            <circle r="4" fill="#4FD8C4" className="dot-bottom" />

            <circle cx="452" cy="60" r="3.5" fill="#8B909A" />
            <circle cx="452" cy="160" r="3.5" fill="#8B909A" />
            <circle cx="452" cy="260" r="3.5" fill="#8B909A" />

            <text x="30" y="300" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8B909A" letterSpacing="1">
              prompt → render
            </text>
            <text x="415" y="45" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8B909A" textAnchor="end">
              YouTube
            </text>
            <text x="415" y="150" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8B909A" textAnchor="end">
              TikTok
            </text>
            <text x="415" y="250" fontFamily="JetBrains Mono, monospace" fontSize="11" fill="#8B909A" textAnchor="end">
              Instagram
            </text>
          </svg>
        </div>
      </main>

      {/* Pipeline strip */}
      <section className="border-t border-[#1A1E27]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { n: "01", t: "Prompt", d: "Describe the video you want in plain language." },
            { n: "02", t: "Generate", d: "The pipeline writes the script, voices it, and renders the cut." },
            { n: "03", t: "Schedule", d: "Set a cadence — daily, weekly, whatever your channels need." },
            { n: "04", t: "Publish", d: "Signal posts to every connected account automatically." },
          ].map((step) => (
            <div key={step.n}>
              <div className="font-mono text-xs text-[#4FD8C4] mb-2">{step.n}</div>
              <div className="font-display text-lg font-semibold mb-1.5">{step.t}</div>
              <p className="font-body text-sm text-[#8B909A] leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1E27]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-8 flex flex-wrap items-center justify-between gap-4">
          <span className="font-mono text-xs tracking-[0.2em] uppercase text-[#8B909A]">
            Signal
          </span>
          <div className="flex items-center gap-6">
            <a href="/login" className="font-body text-sm text-[#8B909A] hover:text-[#ECEAE2] transition-colors">
              Log in
            </a>
            <a href="/signup" className="font-body text-sm text-[#8B909A] hover:text-[#ECEAE2] transition-colors">
              Sign up
            </a>
            <a href="/terms" className="font-body text-sm text-[#8B909A] hover:text-[#ECEAE2] transition-colors">
              Terms of Service
            </a>
            <a href="/privacy" className="font-body text-sm text-[#8B909A] hover:text-[#ECEAE2] transition-colors">
              Privacy Policy
            </a>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 pb-8">
          <p className="font-body text-xs text-[#565B66]">
            © 2026 Signal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
