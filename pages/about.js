import CTA from "@/components/about/CTA";
import { skills, experiences } from "@/constants";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function About() {
  return (
    <section className="container mx-auto px-6 flex flex-col">
      <h1 className="head-text pt-6">
        Hello, I'm <span className="blue-gradient_text">Blitz</span> 👋
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Web Developer based in Iraq, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div>

      <div className="py-10 flex flex-col mt-12">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill, index) => (
            <div className="block-container w-20 h-20" key={`skill-${index}`}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <Image
                  src={skill.imageUrl}
                  alt={skill.name}
                  width={500}
                  height={500}
                  style={{ width: "50%", height: "50%", objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16 mt-12">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked with all sorts of companies, leveling upm my skills and
            teaming up with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={`experience-${index}`}
                date={experience.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src={experience.icon}
                      alt={experience.company_name}
                      width={500}
                      height={500}
                      style={{
                        width: "60%",
                        height: "60%",
                        objectFit: "contain",
                      }}
                    />
                  </div>
                }
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}>
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0, marginTop: "10px" }}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      className="text-black-500/50 font-normal pl-1 text-sm"
                      key={`experience-point-${index}`}>
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
}
