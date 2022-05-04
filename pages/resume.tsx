import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import avatar from "../public/avatar.jpg";

const skills = [
  { skill: "JavaScript", level: 100 },
  { skill: "Bootstrap", level: 95 },
  { skill: "Tailwind", level: 80 },
  { skill: "Python", level: 95 },
  { skill: "TypeScript", level: 80 },
  { skill: "Java", level: 75 },
  { skill: "Kotlin", level: 60 },
  { skill: "Rust", level: 60 },
  { skill: "Go", level: 60 },
  { skill: "SQL", level: 50 },
  { skill: "React", level: 90 },
  { skill: "Next.js", level: 85 },
  { skill: "GraphQL", level: 90 },
  { skill: "Flask", level: 90 },
  { skill: "Django", level: 60 },
  { skill: "Node.js", level: 60 },
  { skill: "Helm", level: 50 },
  { skill: "Kubernetes", level: 40 },
  { skill: "AWS", level: 40 },
  { skill: "GCP", level: 40 },
  { skill: "Docker", level: 90 },
  { skill: "Jenkins", level: 80 },
  { skill: "Terraform", level: 70 },
  { skill: "Postgres", level: 65 },
  { skill: "MongoDB", level: 50 },
  { skill: "Kafka", level: 40 },
];

function Skillz({ skillz }: { skillz: { skill: string; level: number }[] }) {
  const sortedSkillz = skillz.sort((a, b) => b.level - a.level);
  return (
    <ul className="grid-cols-2 gap-x-sm sm:grid md:grid-cols-3">
      {sortedSkillz.map(({ skill, level }, idx) => (
        <li key={idx} className="text-slate-600">
          <SkillLevel skill={skill} level={level} />
        </li>
      ))}
    </ul>
  );
}

function SkillLevel({ skill, level }: { skill: string; level: number }) {
  return (
    <div className="flex flex-col">
      <span className="text-sm">{skill}</span>
      <div className="relative w-10">
        <span className="flex h-2 w-full rounded bg-gray-300">
          <span
            style={{ width: `${level}%` }}
            className="inline-block h-2 rounded bg-gradient-to-r from-green-200 to-green-400"
          ></span>
        </span>
      </div>
    </div>
  );
}

function Employment({
  company,
  title,
  description,
  tech,
  start,
  end,
}: {
  company: string;
  title: string;
  description: string;
  tech: Array<string>;
  start: string;
  end: string;
}) {
  return (
    <section className="relative mb-xl pl-md md:pl-lg">
      <span className="absolute top-md bottom-sm left-0 border-l-2 border-dotted border-gray-200">
        <span className="absolute top-0 left-0 w-2 border-t-2 border-dotted border-gray-200 md:w-3"></span>
        <span className="absolute bottom-0 left-0 w-2 border-t-2 border-dotted border-gray-200 md:w-3"></span>
      </span>
      <span className="inline-block text-2xl font-medium text-slate-800">
        <h2>{company}</h2>
      </span>
      <span className="mx-sm inline-block h-4 border-r-2 border-solid"></span>
      <span className="inline-block text-2xl font-light italic text-slate-700">
        <h3>{title}</h3>
      </span>
      <div className="prose">
        <p>{description}</p>
      </div>
      <div>
        <ul>
          {tech.map((name, idx) => (
            <li key={idx} className="mr-sm mb-sm inline-block">
              <p className="inline-block rounded-md border border-solid border-gray-200 bg-transparent bg-gray-100 px-sm py-0.5 text-sm font-medium text-slate-500">
                {name}
              </p>
            </li>
          ))}
        </ul>
        <p className="mt-1 inline-block rounded-md bg-slate-500 p-0.5 px-sm text-sm font-medium text-gray-50">
          <span>{start} - </span>
          <span>{end}</span>
        </p>
      </div>
    </section>
  );
}

function Project({ href, title }: { href: string; title: string }) {
  return (
    <p>
      <span className="text-slate-800">
        <a href={href} target="_blank" rel="noreferrer">
          {title}
        </a>
      </span>
    </p>
  );
}

export default function Resume() {
  const router = useRouter();

  const goBack = () => {
    if (document.referrer.includes("gomena.io")) {
      router.back();
      return;
    }
    router.push("/");
    return;
  };

  return (
    <article className="bg-gray-100 p-sm pt-4xl md:p-md lg:p-lg xl:p-xl 2xl:p-2xl">
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mb-xl -mt-3xl cursor-pointer duration-150 ease-in-out hover:-translate-x-1 md:m-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M25 12H6M10 5l-7 7 7 7" />
        </svg>
      </Link>
      <div className="mx-auto max-w-screen-lg rounded-md bg-white p-sm shadow-xl md:flex md:gap-md md:p-md lg:gap-lg lg:p-lg xl:p-xl 2xl:p-2xl">
        <header className="-mt-3xl md:sticky md:top-xl md:mt-0 md:w-1/3 md:self-start">
          <div className="mx-auto w-32 overflow-hidden rounded-full border-4 border-solid border-white">
            <Image
              src={avatar}
              alt="A mugshot of Sam Gomena"
              width={300}
              height={300}
              layout="responsive"
            />
          </div>
          <section className="prose-a:text-club-500 prose text-center">
            <h2>Sam Gomena</h2>
            <h6>Software Engineer</h6>
            <div className="text-xs">
              <p>Portland, Oregon 🌲</p>
            </div>
          </section>
          <div className="grid-cols-3 sm:grid md:block">
            <div className="prose">
              <h4>See also</h4>
              <ul>
                <li>
                  <a
                    href="https://github.com/samgomena"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/samgomena/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <Link href="/">Gomena.io</Link>
                </li>
              </ul>
            </div>
          </div>
        </header>
        <div className="md:w-2/3">
          <section>
            <div className="prose prose-lg">
              <h1>Who</h1>
              <p>
                Hey! I'm Sam and I'm a software engineer who's passionate about
                technology and the positive impact it can have on humanity. I
                believe in writing software that is fast, sane, and
                uncompromisingly beautiful at all levels of the stack. I'm
                interested in working on ideas that meet these aspirations in
                collaboration with people that share these values.
              </p>
            </div>
          </section>
          <section>
            <div className="prose">
              <h1>Experience</h1>
            </div>
            <Employment
              company="Tripwire"
              title="Software Engineer"
              description="Building security and compliance solutions to protect the digital world."
              tech={[
                "React",
                "TypeScript",
                "Java",
                "Python",
                "Go",
                "Kafka",
                "K8s",
                "Docker",
                "Kotlin",
                "AWS",
                "GraphQL",
                "Jenkins",
              ]}
              start="2018"
              end="present"
            />
            <Employment
              company="Portland State University"
              title="Research and Development Engineer"
              description="Researched and developed a distributed edge computing platform with a focus on facilitating machine learning as part of the Undergraduate Research and Mentorship Program."
              tech={[
                "Python",
                "JavaScript",
                "node.js",
                "Docker",
                "MongoDB",
                "TensorFlow",
                "Spark",
                "Hadoop",
              ]}
              start="2017"
              end="2020"
            />
            <Employment
              company="Tektronix"
              title="Software Engineering Intern"
              description="Developed and maintained a BDD testing framework and associated infrastructure responsible for ensuring the quality of next generation oscilloscope software and hardware platforms."
              tech={[
                "Python",
                "Jenkins",
                "Cucumber",
                "C++",
                "JavaScript",
                "SQL",
                "Chef",
              ]}
              start="2016"
              end="2018"
            />
          </section>
          <section>
            <div className="prose">
              <h1>Projects</h1>
              <Project
                href="https://deepmarket.cs.pdx.edu/overview"
                title="DeepMarket"
              />
              <Project
                href="https://github.com/samgomena/transitcrumbs"
                title="TransitCrumbs"
              />
              <Project
                href="https://avantiwestlinn.com"
                title="Avanti Restaurant & Bar"
              />
              <Project
                href="https://tlctileandstone.com"
                title="TLC Tile and Stone"
              />
            </div>
          </section>
          <section>
            <div className="prose">
              <h1>Technologies</h1>
              <p>A non-exhaustive list of technologies I've worked with</p>
            </div>
            <Skillz skillz={skills} />
          </section>
          <section>
            <div className="prose">
              <h1>Education</h1>
              <p>
                <span className="text-slate-800">
                  Portland State University
                </span>
                <span className="mx-sm inline-block h-4 border-r-2 border-solid"></span>
                <span className="italic text-slate-700">
                  B.S. Computer Science
                </span>
                <span className="mx-sm inline-block h-4 border-r-2 border-solid"></span>
                <span className="text-slate-600">2021</span>
              </p>
            </div>
            <div className="prose prose-sm">
              <ul>
                <li>
                  <p>
                    Participated in the Undergraduate Research and Mentorship
                    Program collaborating with a team of graduate students
                    conducting research on distributed machine learning systems.
                  </p>
                </li>
                <li>
                  <p>
                    Worked under multiple professors doing independent study on
                    projects ranging from designing and developing business
                    intelligence tools for a local transit company to an
                    end-to-end encrypted messaging system leveraging
                    self-sovereign identity.
                  </p>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
}

Resume.useLayout = function useLayout() {
  return false;
};
