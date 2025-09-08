import Image from "next/image";
import Link from "next/link";
import { socialLinks } from "./lib/config";
import { resume } from "./lib/resume";

export default function Page() {
  return (
    <section className="mt-6">
      <div className="flex flex-col-reverse lg:flex-row lg:items-center gap-6">
        <div className="lg:flex-1">
          <h1 className="text-3xl font-bold">👋 Hello, I am Sagar</h1>
          <p className="mt-2 text-neutral-700 dark:text-neutral-300">
            {resume.title}
          </p>

          <div className="mt-4 prose prose-neutral dark:prose-invert max-w-none">
            <p>{resume.about}</p>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="inline-block rounded bg-black text-white px-4 py-2 text-sm"
            >
              View Projects
            </Link>
            <Link
              href="/CV"
              className="inline-block rounded border border-neutral-200 dark:border-neutral-700 px-4 py-2 text-sm"
            >
              View CV
            </Link>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="inline-block rounded px-4 py-2 text-sm"
            >
              GitHub
            </a>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-semibold">Key skills</h4>
            <p className="text-neutral-800 dark:text-neutral-200">
              {resume.skills?.techstack?.slice(0, 6).join(" • ")}
              {resume.skills?.techstack && resume.skills.techstack.length > 6
                ? " • ..."
                : ""}
            </p>
          </div>
        </div>

        <div className="lg:w-40 w-36">
          <a href={socialLinks.github} target="_blank" rel="noreferrer">
            <Image
              src="/profile.png"
              alt="Profile photo"
              className="rounded-full bg-gray-100 block mx-auto grayscale hover:grayscale-0"
              unoptimized
              width={160}
              height={160}
              priority
            />
          </a>
        </div>
      </div>
    </section>
  );
}
