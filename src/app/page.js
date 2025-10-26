"use client";

import Header from "@/components/Header";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button"; // ensure shadcn button installed
import { motion } from "motion/react";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header />

      <main className="h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth">
        {/* HERO */}
        <motion.section
          id="home"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-screen snap-start flex items-center justify-center bg-white"
        >
          <div className="container grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight">
                I design & build fast, clean websites that make you money.
              </h1>
              <p className="mt-4 text-gray-600 max-w-prose">
                Based in Laos ↔ UK. Next.js, shadcn/ui, Vercel, Supabase. Calm
                delivery, real results.
              </p>
              <div className="mt-6 flex gap-3">
                <Button size="lg" asChild>
                  <a href="#contact">Start a project</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#work">See work</a>
                </Button>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
                <Stat label="LCP" value="1.8s" />
                <Stat label="Leads ↑" value="+42%" />
                <Stat label="SEO wins" value="+3 top-3" />
              </div>
            </div>
            <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border bg-white">
              <Image
                src="/hero-shot.png"
                alt="Preview"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.section>

        {/* WORK */}
        <motion.section
          id="work"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-screen snap-start flex items-center justify-center bg-gray-50"
        >
          <Section
            eyebrow="Selected work"
            title="Results over aesthetics — but we do both."
            intro="A few projects with clear before/after and measurable outcomes."
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <CaseStudyCard
                title="iService — Apple-style service site"
                result="+38% booking form submissions"
                img="/work/iservice.jpg"
              />
              <CaseStudyCard
                title="JapanMan — travel builder"
                result="LCP 1.9s on 3G, no hydration errors"
                img="/work/japanman.jpg"
              />
            </div>
            <div className="mt-8">
              <a href="#contact" className="text-sm underline">
                Want your project here next?
              </a>
            </div>
          </Section>
        </motion.section>

        {/* SERVICES */}
        <motion.section
          id="services"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-screen snap-start flex items-center justify-center bg-white"
        >
          <Section
            eyebrow="Services"
            title="Productized so you know exactly what you get"
            intro="Simple packages to fit where you are — launch fast or iterate for growth."
          >
            <div className="grid md:grid-cols-3 gap-6">
              <Package
                name="Launch Lite"
                price="from $699"
                bullets={["1–2 pages", "Copy polish", "Contact form"]}
                highlight
              />
              <Package
                name="Portfolio Pro"
                price="from $1,999"
                bullets={["5–7 pages", "CMS ready", "Speed & SEO setup"]}
              />
              <Package
                name="Growth Retainer"
                price="$399/mo"
                bullets={[
                  "Monthly UX tweaks",
                  "Analytics & A/B",
                  "SEO tech fixes",
                ]}
              />
            </div>
          </Section>
        </motion.section>

        {/* ABOUT */}
        <motion.section
          id="about"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-screen snap-start flex items-center justify-center bg-gray-50"
        >
          <Section
            eyebrow="About"
            title="Calm, competent, pragmatic."
            intro="I work async with Loom updates, staging links and small, trustworthy iterations."
          >
            <div className="grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 space-y-3 text-gray-700">
                <p>
                  Stack: Next.js 15, Vercel, shadcn/ui, Tailwind, Supabase,
                  Cloudflare, Plausible.
                </p>
                <p>
                  Location: Luang Prabang ↔ UK. Available for SME sites and
                  light web apps.
                </p>
                <p>
                  Delivery: Clear scope → fast build → measure → iterate. No
                  fluff.
                </p>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden border bg-white">
                <Image
                  src="/rich.jpg"
                  alt="Richard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </Section>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="h-screen snap-start flex items-center justify-center bg-white"
        >
          <Section
            eyebrow="Contact"
            title="Start a project"
            intro="Tell me what you need in ~60 seconds. I’ll reply with next steps."
          >
            <ContactForm />
          </Section>
        </motion.section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-sm text-gray-500">
          <div className="container flex flex-col items-center gap-2">
            <p>
              © {new Date().getFullYear()} Richard Lee. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
              <a href="#" className="hover:underline">
                GitHub
              </a>
              <a href="#" className="hover:underline">
                Email
              </a>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="text-2xl font-semibold">{value}</div>
      <div className="text-xs text-gray-500 mt-1">{label}</div>
    </div>
  );
}

function CaseStudyCard({ title, result, img }) {
  return (
    <article className="group overflow-hidden rounded-2xl border bg-white">
      <div className="relative aspect-[16/10]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold tracking-tight">{title}</h3>
        <p className="mt-1 text-sm text-gray-600">{result}</p>
      </div>
    </article>
  );
}

function Package({ name, price, bullets = [], highlight = false }) {
  return (
    <div
      className={`rounded-2xl border bg-white p-6 ${
        highlight ? "ring-2 ring-blue-500" : ""
      }`}
    >
      <h3 className="text-lg font-semibold tracking-tight">{name}</h3>
      <p className="mt-1 text-sm text-gray-500">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-gray-700 list-disc pl-5">
        {bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
      <div className="mt-6">
        <Button className="w-full" asChild>
          <a href="#contact">Choose {name}</a>
        </Button>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="mx-auto max-w-xl grid gap-4">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input className="mt-1 w-full rounded-xl border px-3 py-2" required />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            className="mt-1 w-full rounded-xl border px-3 py-2"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Budget</label>
          <select className="mt-1 w-full rounded-xl border px-3 py-2">
            <option>— select —</option>
            <option>Under $1k</option>
            <option>$1k–$2k</option>
            <option>$2k–$5k</option>
            <option>$5k+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium">Project details</label>
        <textarea
          rows={5}
          className="mt-1 w-full rounded-xl border px-3 py-2"
          placeholder="Goals, pages, examples…"
        />
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-500">
          I’ll reply within 1 business day.
        </span>
        <Button type="submit">Send</Button>
      </div>
    </form>
  );
}
