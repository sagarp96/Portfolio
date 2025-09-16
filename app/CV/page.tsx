import type { Metadata } from "next";
import { metaData, socialLinks } from "../lib/config";
import { resume } from "../lib/resume";

export const metadata: Metadata = {
  title: "Resume",
  description: "Sagar Panwar — Resume",
};

export default function CV() {
  return (
    <section className="max-w-3xl">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold leading-tight">
          {resume.fullName || metaData.name}
        </h1>
        <p className="text-neutral-700 dark:text-neutral-300">{resume.title}</p>
        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-neutral-600 dark:text-neutral-400">
          <a className="hover:underline" href={socialLinks.email}>
            {socialLinks.email.replace("mailto:", "")}
          </a>
          <span>•</span>
          <a
            className="hover:underline"
            href={socialLinks.github}
            target="_blank"
            rel="noreferrer"
          >
            github.com/sagarp96
          </a>
          <span>•</span>
          <a
            className="hover:underline"
            href={socialLinks.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            className="hover:underline"
            href="https://drive.google.com/file/d/1lWTWxXqmJpncL3M_3vHctHYjWaeFDBel/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/** PDF embed removed; page mirrors PDF content textually below. */}

      {/* About me */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">About me</h2>
        <p className="text-neutral-800 dark:text-neutral-200">{resume.about}</p>
      </section>

      {/* Skills / Techstack */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Techstack</h2>
        {resume.skills?.techstack && (
          <p className="text-neutral-800 dark:text-neutral-200">
            {resume.skills.techstack.join(", ")}
          </p>
        )}
        {resume.skills?.frameworks && (
          <div className="mt-3">
            <h3 className="font-medium">Frameworks</h3>
            <p className="text-neutral-800 dark:text-neutral-200">
              {resume.skills.frameworks.join(", ")}
            </p>
          </div>
        )}
      </section>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Experience</h2>
        <div className="space-y-8">
          {resume.experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex items-baseline justify-between">
                <h3 className="font-medium">{exp.company}</h3>
                <span className="text-sm text-neutral-600 dark:text-neutral-400">
                  {exp.start} — {exp.end}
                </span>
              </div>
              {exp.summary && (
                <p className="mt-1 text-neutral-800 dark:text-neutral-200">
                  {exp.summary}
                </p>
              )}
              {exp.description && (
                <p className="mt-1 text-neutral-800 dark:text-neutral-200">
                  {exp.description}
                </p>
              )}
              {exp.projects?.map((proj, pidx) => (
                <div key={pidx} className="mt-3">
                  <h4 className="font-medium">
                    {pidx + 1}. {proj.title}
                  </h4>
                  {proj.description && (
                    <p className="text-neutral-800 dark:text-neutral-200">
                      {proj.description}
                    </p>
                  )}
                  {proj.keySolutions && proj.keySolutions.length > 0 && (
                    <div className="mt-2">
                      <p className="font-medium">Key solutions applied:</p>
                      <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200">
                        {proj.keySolutions.map((k, kidx) => (
                          <li key={kidx}>{k}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {proj.languagesUsed && proj.languagesUsed.length > 0 && (
                    <p className="mt-2 text-neutral-800 dark:text-neutral-200">
                      <span className="font-medium">Languages used:</span>{" "}
                      {proj.languagesUsed.join(", ")}
                    </p>
                  )}
                  {proj.techStack && proj.techStack.length > 0 && (
                    <p className="text-neutral-800 dark:text-neutral-200">
                      <span className="font-medium">Tech stack:</span>{" "}
                      {proj.techStack.join(", ")}
                    </p>
                  )}
                  {proj.frameworks && proj.frameworks.length > 0 && (
                    <p className="text-neutral-800 dark:text-neutral-200">
                      <span className="font-medium">Frameworks:</span>{" "}
                      {proj.frameworks.join(", ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      {resume.personalProjects && resume.personalProjects.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Personal Projects</h2>
          <div className="space-y-6">
            {resume.personalProjects.map((pp, idx) => (
              <div key={idx}>
                <div className="flex items-baseline justify-between gap-4 flex-wrap">
                  <h3 className="font-medium">{pp.title}</h3>
                  <div className="text-sm text-neutral-600 dark:text-neutral-400 flex gap-3">
                    {pp.github && (
                      <a
                        className="hover:underline"
                        href={pp.github}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Github
                      </a>
                    )}
                    {pp.app && (
                      <a
                        className="hover:underline"
                        href={pp.app}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live App
                      </a>
                    )}
                  </div>
                </div>
                {pp.description && (
                  <p className="mt-1 text-neutral-800 dark:text-neutral-200">
                    {pp.description}
                  </p>
                )}
                {pp.keySolutions && pp.keySolutions.length > 0 && (
                  <div className="mt-2">
                    <p className="font-medium">Key solutions applied:</p>
                    <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200">
                      {pp.keySolutions.map((k, kidx) => (
                        <li key={kidx}>{k}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {pp.languagesUsed && pp.languagesUsed.length > 0 && (
                  <p className="mt-2 text-neutral-800 dark:text-neutral-200">
                    <span className="font-medium">Languages used:</span>{" "}
                    {pp.languagesUsed.join(", ")}
                  </p>
                )}
                {pp.techStack && pp.techStack.length > 0 && (
                  <p className="text-neutral-800 dark:text-neutral-200">
                    <span className="font-medium">Tech stack:</span>{" "}
                    {pp.techStack.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Certificates */}
      {resume.certificates && resume.certificates.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Certificates</h2>
          <ul className="list-disc ml-5 text-neutral-800 dark:text-neutral-200">
            {resume.certificates.map((c, idx) => (
              <li key={idx}>
                {c.url ? (
                  <a
                    className="hover:underline"
                    href={c.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {c.title}
                  </a>
                ) : (
                  c.title
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Language Proficiency */}
      {resume.languageProficiency && resume.languageProficiency.length > 0 && (
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Language Proficiency</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-800 dark:text-neutral-200">
            {resume.languageProficiency.map((lp, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{lp.name}</span>
                <span className="text-neutral-600 dark:text-neutral-400">
                  {lp.percent}%
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Education</h2>
        {resume.education.map((ed, idx) => (
          <div key={idx} className="mt-2 first:mt-0">
            <div className="flex items-baseline justify-between">
              <h3 className="font-medium">{ed.degree}</h3>
              <span className="text-sm text-neutral-600 dark:text-neutral-400">
                {ed.year}
              </span>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300">
              {ed.school}
            </p>
            {ed.location ? (
              <p className="text-neutral-700 dark:text-neutral-300">
                {ed.location}
              </p>
            ) : null}
          </div>
        ))}
      </section>

      {/* Links */}
      <footer className="pt-4 border-t border-neutral-200 dark:border-neutral-800 text-sm text-neutral-600 dark:text-neutral-400">
        References and portfolio available upon request.
      </footer>
    </section>
  );
}
