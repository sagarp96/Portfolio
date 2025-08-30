import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.github} target="_blank">
        <Image
          src="./profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>
      <h1 className="mb-8 text-2xl font-medium">Sagar Panwar</h1>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I'm a software engineer with a passion for building innovative and
          user-friendly applications. I have a strong background in software
          development and a keen eye for detail. I am always looking for new
          challenges and opportunities to learn and grow.
        </p>
        <p>
          I am currently working as a Software Engineer at{" "}
          <a href="https://www.google.com/" target="_blank">
            Google
          </a>
          .
        </p>
      </div>
    </section>
  );
}
