"use client";

import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  BookOpen,
  Mic2,
  Feather,
  Headphones,
  Upload,
  Mail,
  ChevronRight,
  Menu,
  X,
  Cross,
  CalendarDays,
} from "lucide-react";

const resources = [
  {
    type: "Devotional",
    title: "When the Soul Learns to Wait",
    author: "Roman Kuzmych",
    date: "May 10, 2026",
    text: "A meditation on Psalm 27 and the slow mercy of God in seasons of silence.",
    read: "5 min read",
    icon: BookOpen,
  },
  {
    type: "Sermon",
    title: "Christ Our Sure Foundation",
    author: "Roman Kuzmych",
    date: "May 3, 2026",
    text: "An exposition of 1 Corinthians 3 on the only foundation that can bear eternal weight.",
    read: "38 min listen",
    icon: Mic2,
  },
  {
    type: "Poem",
    title: "Beneath the Mercy Seat",
    author: "Roman Kuzmych",
    date: "April 28, 2026",
    text: "A short poem tracing confession, pardon, and the comfort of Christ's finished work.",
    read: "2 min read",
    icon: Feather,
  },
  {
    type: "Teaching",
    title: "Why Doctrine Deepens Worship",
    author: "Roman Kuzmych",
    date: "April 21, 2026",
    text: "Theology is not a cold exercise when it terminates in adoration of the living God.",
    read: "9 min read",
    icon: Headphones,
  },
];

const categories = ["All", "Devotional", "Sermon", "Poem", "Teaching"];

function ResourceCard({ item, index }: { item: any; index: number }) {
  const Icon = item.icon;
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      className="group rounded-2xl border border-stone-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex items-center gap-2 rounded-full bg-stone-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700">
          <Icon className="h-3.5 w-3.5" /> {item.type}
        </span>
        <span className="text-xs text-stone-500">{item.read}</span>
      </div>

      <h3 className="font-serif text-2xl leading-tight text-stone-950 group-hover:text-amber-900">
        {item.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-stone-600">{item.text}</p>

      <div className="mt-6 flex items-center justify-between border-t border-stone-100 pt-4 text-sm">
        <div>
          <p className="font-medium text-stone-900">{item.author}</p>
          <p className="text-stone-500">{item.date}</p>
        </div>
        <button className="inline-flex items-center gap-1 font-semibold text-amber-900">
          Read <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </motion.article>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [category, setCategory] = useState("All");

  const filtered = useMemo(
    () => (category === "All" ? resources : resources.filter((r) => r.type === category)),
    [category]
  );

  return (
    <main className="min-h-screen bg-[#f7f2ea] text-stone-900">
      <header className="sticky top-0 z-30 border-b border-stone-200 bg-[#f7f2ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-stone-950 text-white">
              <Cross className="h-5 w-5" />
            </div>
            <div>
              <p className="font-serif text-xl font-bold tracking-tight">Sons By Faith</p>
              <p className="text-xs uppercase tracking-[0.25em] text-stone-500">
                Devotion • Doctrine • Doxology
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-stone-700 md:flex">
            <a href="#resources" className="hover:text-amber-900">Resources</a>
            <a href="#sermons" className="hover:text-amber-900">Sermons</a>
            <a href="#poems" className="hover:text-amber-900">Poems</a>
            <a href="#submit" className="hover:text-amber-900">Upload</a>
          </nav>

          <button className="hidden rounded-full bg-stone-950 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-950 md:inline-flex">
            Subscribe
          </button>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-stone-200 px-5 py-4 md:hidden">
            <div className="grid gap-3 text-sm font-semibold">
              <a href="#resources">Resources</a>
              <a href="#sermons">Sermons</a>
              <a href="#poems">Poems</a>
              <a href="#submit">Upload</a>
            </div>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden border-b border-stone-200">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="mb-5 inline-flex rounded-full border border-amber-900/20 bg-white/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-amber-950">
              A digital home for faithful reflections
            </p>
            <h1 className="max-w-4xl font-serif text-5xl font-bold leading-[0.98] tracking-tight text-stone-950 md:text-7xl">
              Beholding Christ through Scripture, sermon, and song.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-700">
              Publish devotionals, sermons, poems, essays, and audio resources in a sober, beautiful editorial format shaped for spiritual depth and careful reading.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#resources" className="rounded-full bg-stone-950 px-7 py-3 text-center font-semibold text-white shadow-md transition hover:bg-amber-950">
                Start Reading
              </a>
              <a href="#submit" className="rounded-full border border-stone-300 bg-white/70 px-7 py-3 text-center font-semibold text-stone-900 transition hover:border-amber-900 hover:text-amber-950">
                Submit a Resource
              </a>
            </div>
          </motion.div>

          <motion.aside initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.15 }} className="rounded-[2rem] border border-stone-200 bg-white p-7 shadow-xl">
            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-950">
                Featured
              </span>
              <CalendarDays className="h-5 w-5 text-stone-400" />
            </div>
            <h2 className="font-serif text-4xl font-bold leading-tight text-stone-950">
              The Joy of a Holy God
            </h2>
            <p className="mt-4 leading-7 text-stone-600">
              A long-form devotional essay on why reverence and delight are not rivals in the Christian life.
            </p>
            <div className="mt-8 rounded-2xl bg-stone-950 p-5 text-white">
              <p className="font-serif text-2xl leading-snug">
                “The heart grows steady when it stops asking God to become less glorious.”
              </p>
              <p className="mt-4 text-sm text-stone-300">From the latest devotional</p>
            </div>
          </motion.aside>
        </div>
      </section>

      <section id="resources" className="mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-950">Library</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-stone-950">Latest Resources</h2>
          </div>
          <div className="flex max-w-xl flex-1 items-center gap-2 rounded-full border border-stone-200 bg-white px-4 py-3 shadow-sm md:ml-auto">
            <Search className="h-4 w-4 text-stone-400" />
            <input placeholder="Search devotionals, sermons, poems..." className="w-full bg-transparent text-sm outline-none placeholder:text-stone-400" />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                category === cat ? "bg-stone-950 text-white" : "border border-stone-200 bg-white text-stone-700 hover:border-amber-900"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {filtered.map((item, index) => (
            <ResourceCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </section>

      <section className="bg-stone-950 px-5 py-16 text-white" id="sermons">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-200">Sermon Archive</p>
            <h2 className="mt-2 font-serif text-4xl font-bold">Teaching that aims at worship.</h2>
            <p className="mt-5 leading-7 text-stone-300">
              Organize sermons by Scripture passage, doctrine, series, speaker, and date. Add audio, video, transcripts, and study notes.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {["Scripture", "Doctrine", "Series"].map((label) => (
              <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <p className="font-serif text-3xl font-bold">{label}</p>
                <p className="mt-3 text-sm leading-6 text-stone-300">
                  Browse sermons and teaching resources by {label.toLowerCase()}.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="submit" className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-8 rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-950">Publisher tools</p>
            <h2 className="mt-2 font-serif text-4xl font-bold text-stone-950">
              Upload new devotionals, sermons, poems, and essays.
            </h2>
            <p className="mt-5 leading-7 text-stone-600">
              This is currently a front-end mockup. Later, this can connect to Notion, Sanity, WordPress, or another CMS.
            </p>
          </div>
          <div className="rounded-2xl bg-[#f7f2ea] p-5">
            <div className="grid gap-4">
              <input className="rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none" placeholder="Resource title" />
              <select className="rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none">
                <option>Devotional</option>
                <option>Sermon</option>
                <option>Poem</option>
                <option>Teaching</option>
              </select>
              <textarea className="min-h-28 rounded-xl border border-stone-200 bg-white px-4 py-3 outline-none" placeholder="Write or paste content summary..." />
              <button className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-950 px-5 py-3 font-semibold text-white transition hover:bg-amber-950">
                <Upload className="h-4 w-4" /> Save Draft
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-serif text-2xl font-bold">Sola Journal</p>
            <p className="mt-1 text-sm text-stone-500">For the renewal of mind, heart, and worship.</p>
          </div>
          <form className="flex w-full max-w-md gap-2">
            <input className="min-w-0 flex-1 rounded-full border border-stone-200 bg-white px-4 py-3 outline-none" placeholder="Email address" />
            <button type="button" className="rounded-full bg-stone-950 px-5 py-3 text-white">
              <Mail className="h-4 w-4" />
            </button>
          </form>
        </div>
      </footer>
    </main>
  );
}
