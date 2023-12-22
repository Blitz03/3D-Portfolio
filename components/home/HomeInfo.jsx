import Link from "next/link";
import { FaLongArrowAltRight } from "react-icons/fa";

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center text-white py-4 px-8 rounded-md bg-blue-500 border-4 border-black border-black shadow-[5px_5px_0px_rgba(0,0,0,1)]">
      Hi, I'm <span className="font-semibold">Blitz</span> 👋
      <br />A Web Developer from Iraq
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on many projects and picked up many skills along the way 🚀"
      link="/about"
      btnText="Learn more"
    />
  ),
  3: (
    <InfoBox
      text="Lead multiple projects to success over the years. Curious about the impact? 🕵🏻"
      link="/projects"
      btnText="Visit my portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away 👨🏻‍💻"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

function InfoBox({ text, link, btnText }) {
  return (
    <div className="w-[500px] px-8 py-4 bg-white border-4 border-black shadow-[5px_5px_0px_rgba(0,0,0,1)] grid place-content-center rounded-md">
      <p className="font-medium sm:text-xl text-center">{text}</p>
      <Link
        href={link}
        className="text-center text-white h-12 border-black border-2 p-2.5 bg-blue-500 hover:text-blue-500 hover:bg-white hover:shadow-[2px_2px_0px_rgba(0,0,0,1)] active:text-blue-500 rounded-md text-black transition font-semibold mt-6 flex items-center justify-center gap-2">
        {btnText}
        <FaLongArrowAltRight className="text-lg" />
      </Link>
    </div>
  );
}

export default function HomeInfo({ currentStage }) {
  return renderContent[currentStage] || null;
}
