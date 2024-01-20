/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import Head from "next/head";
import { BsFillMoonStarsFill, BsFillSunFill, BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiFillInstagram, AiOutlineMail } from "react-icons/ai";
import Image from "next/image";
import myphoto from "../public/myphoto.png";
import { FaFileDownload } from "react-icons/fa";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Musyaffa's Web Profile</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white dark:bg-gray-900 px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white">
              musyaffa's web profile
            </h1>
            <ul className="flex items-center gap-x-4">
              <a
                className="select-none bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 ml-8 rounded-md  flex items-center gap-x-2"
                href="https://drive.google.com/file/d/1Mq-1VlhZ7XQCZqxFuAR_PRQxHkCHJ3Lj/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                <FaFileDownload /> <span>Download My CV</span>
              </a>
              <div className="cursor-pointer text-2xl">
                {!darkMode ? (
                  <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
                ) : (
                  <BsFillSunFill
                    className="text-white"
                    onClick={() => setDarkMode(!darkMode)}
                  />
                )}
              </div>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400 font-medium md:text-6xl">
              Musyaffa Choirun Man
            </h2>
            <h3 className="text-2xl dark:text-white py-2 md:text-3xl">
              Front End Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              Code Enthusiast who loves on front - end developing using React
              JS, and Vue JS. But i also have back - end skills to creating
              aplication using Laravel. Contact me down below and let's get
              cracking!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
            <a href="//linkedin.com/in/musyaffa/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:musyaffa220@gmail.com">
              <AiOutlineMail />
            </a>
            <a href="//github.com/musyaffacm">
              <BsGithub />
            </a>
            <a href="//instagram.com/musyaffa44/">
              <AiFillInstagram />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={myphoto} alt="myphoto" className="w-80 md:w-96" />
          </div>
        </section>
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            {PORTO_DATA.map((item, index) => (
              <PortoItem
                title={item.title}
                imageSrc={item.image}
                description={item.description}
                techStack={item.techStack}
                footNote={item.footNote}
                url={item.url}
                key={index}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

const PortoItem = (props) => {
  const { title, url, imageSrc, description, techStack, footNote, key } = props;
  return (
    <div className="basis-1/3 flex-1" key={key}>
      <a href={url}>
        <img
          className="rounded-lg object-cover"
          width={"100%"}
          height={"100%"}
          src={imageSrc}
          alt="iris"
        />
      </a>
      <a href={url}>
        <p className="text-md dark:text-white mt-3 py-1 md:text-xl">{title}</p>
      </a>
      <p className="text-sm py-1 mt-2 leading-6 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-md text-justify">
        {description}
      </p>
      <p className="text-sm py-1 leading-6 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-md text-justify">
        {footNote}
      </p>
      <p className="text-sm py-1 leading-6 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-md text-justify">
        {techStack}
      </p>
    </div>
  );
};

const PORTO_DATA = [
  {
    title: "Mirotaklik",
    image: "/web/mirotaklik.png",
    description:
      "An advanced information system for optimizing Mirota's distribution, sales, and marketing processes, leveraging React JS and Laravel",
    techStack: "Created using : Vue JS, Vuetify, Vuex and Javascript Language",
    footNote: "Developed when i was work for YLabs Indonesia",
  },
  {
    title: "Open Innovation",
    image: "/web/open-innovation.png",
    url: "https://open-innovation.id/",
    description:
      "A platform to gather the ideas of young people as solutions to various issues",
    techStack: "Created using : Vue JS, Vuetify, Vuex and Javascript Language",
    footNote: "",
  },
  {
    title: "Dapoint",
    image: "/web/dapoint.png",
    url: "//dapoint.netlify.app/",
    description:
      "Applications for stores provide gifts to their customers in the form of vouchers that are easily accessible and easy to reedem. Aims to increase customer loyalty to related stores",
    techStack: "Created using : Vue JS, Vuetify, Vuex and Javascript Language",
    footNote: "Developed when i was work for YLabs Indonesia",
  },
  {
    title: "IRIS",
    image: "/web/iris.png",
    url: "//m3119063.mhs.d3tiuns.com/",
    description:
      "A web-based system that is used to provide online and integrated      services to research lecturers or service lecturers in terms of      proposals to research and community service information at the      university",
    techStack: "Created using : Laravel, Bootstrap, and PHP Language",
    footNote: "",
  },
];
