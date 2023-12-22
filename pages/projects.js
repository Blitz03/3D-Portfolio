import Image from "next/image";
import { projects } from "@/constants";
import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";
import CTA from "@/components/about/CTA";

export default function Projects() {
  return (
    <section className="container mx-auto px-6 flex flex-col">
      <h1 className="head-text pt-6">
        My <span className="blue-gradient_text">Projects</span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={project.iconUrl}
                  alt="Project Icon"
                  width={500}
                  height={500}
                  style={{ width: "50%", height: "50%", objectFit: "contain" }}
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600">
                  Live Link
                </Link>
                <FaLongArrowAltRight className="w-4 h-4 object-contain text-blue-500" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
}
