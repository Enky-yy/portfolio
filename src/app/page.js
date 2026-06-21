"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import LoadingScreen from "@/components/LoadingSreen";
import { useState, useEffect } from "react";
import { Parallax } from "react-scroll-parallax";
import { GitHubCalendar } from "react-github-calendar";
import Link from "next/link";

export default function Home() {
  const projects = [
    {
      title: "QR-Based File Sharing App",
      description:
        "A Flask-powered file sharing platform with QR transfer, OCR-based search, and secure uploads.",
      repo_name: "QR-based-File-sharing-App",
      stack: ["Flask", "SQLite", "OCR", "Python"],
      highlights: [
        "QR Device Pairing",
        "OCR File Search",
        "Multi-file Upload",
        "Session Authentication",
      ],
      image: "/qr-code.png",
    },

    {
      title: "A Multipurpose Discord Bot",
      description: "A Github-Flows integrated Multipurpose Discord bot.",
      repo_name: "github_api_discord_app",
      stack: ["Github", "FastAPI", "Python"],
      highlights: [
        "GitHub Integration",
        "Automated Workflows",
        "Custom Commands",
        "Multipurposed",
      ],

      image: "/Discord-github.png",
    },

    {
      title: "URL Shortner",
      description:
        "FastAPI based URL Shortner with Base62 encoding, redis caching and Click analytics ",
      repo_name: "URL-Shortner",
      stack: ["FastAPI", "JavaScript",'SQLite', "Python"],
      image: "/link.png",
    },
  ];

  const skills = {
    "AI / ML": ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],

    Backend: ["FastAPI", "Flask", "SQLAlchemy", "MongoDB"],

    Frontend: ["Next.js", "React", "Tailwind CSS"],

    Tools: ["Git", "Linux", "GitHub"],
  };

  const GitHub_Username = "Enky-yy";

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <main className="relative min-h-screen bg-[#0B0F19] text-white">
      {/* CURSOR GLOW */}
      <div className="pointer-events-none fixed inset-0 z-30 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-500/10 blur-[120px] rounded-full" />

        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      {/* Parallex Scrolling */}
      <Parallax speed={-10}>
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
      </Parallax>

      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 blur-[120px]" />
      </div>

      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.12),transparent_50%)]" />

      {/* Navbar */}
      <nav className="border-b border-white/10 backdrop-blur-xl sticky top-0 z-50 bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">
            Harshvardhan Shah
          </h1>

          <div className="hidden md:flex gap-8 text-gray-300">
            <a href="#projects" className="hover:text-white transition ">
              Projects
            </a>
            <a href="#skills" className="hover:text-white transition ">
              Skills
            </a>
            <a href="#building" className="hover:text-white transition">
              Building
            </a>
            <a href="#contact" className="hover:text-white transition  ">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="absolute right-10 top-10 hidden lg:block"></div>
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-6 text-sm">
              AI/ML Developer
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
              Building Intelligent
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                AI Systems
              </span>
            </h1>

            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
              I build AI-powered softwares, applications, and scalable web
              solutions using FastAPI, TensorFlow, and modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-500 hover:bg-blue-600 transition px-7 py-4 rounded-2xl font-medium shadow-lg shadow-blue-500/30">
                <a href="#projects">View Projects</a>
              </button>

              <a
                href="/resume.pdf"
                download
                className="border border-white/20 hover:border-white/40 transition px-7 py-4 rounded-2xl"
              >
                Download Resume
              </a>
            </div>
            <div className="flex flex-wrap gap-3 mt-10">
              {["FastAPI", "TensorFlow", 'Python', "Linux"].map((item) => (
                <div
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 backdrop-blur-xl"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right side */}

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 min-h-[380px] shadow-2xl">
              {/* Terminal Top */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>

              <div className="space-y-5 font-mono text-sm md:text-base">
                <div>
                  <p className="text-green-400">$ whoami</p>
                  <p className="text-white mt-1">Harshvardhan Shah</p>
                </div>

                <div>
                  <p className="text-green-400">$ stack</p>
                  <p className="text-white mt-1">
                    Python • FastAPI • TensorFlow • Linux
                  </p>
                </div>

                <div>
                  <p className="text-green-400">$ current_focus</p>
                  <div className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 h-2">
                    <TypeAnimation
                      sequence={[
                        "Building AI-powered backend systems.",
                        2000,
                        "Creating wonderful applications.",
                        2000,
                        "Developing scalable FastAPI solutions.",
                        2000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </div>
                </div>

                <div>
                  <p className="text-green-400">$ status</p>
                  <p className="text-transparent mt-1 bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Available for internships
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Project Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 py-28"
      >
        {/* Title */}
        <div className="mb-16">
          <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 flex">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -14, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer transform-gpu rounded-3xl border border-white/[0.08] bg-white/5 p-6 hover:bg-white/10 transition duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
            >
              {/* Image */}
              <div className="h-48 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 mb-6 item-center justify-center">
                <img
                  src={`${project.image}`}
                  className="h-47 w-48 object-cover rounded-2xl  justify-center items-center mx-auto my-auto pt-1 "
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-blue-400 transition">
                {project.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Stack */}
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm bg-white/10 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Highlights Metrics
              <div className="grid grid-cols-2 gap-2 mb-6 mt-auto">
                {project.highlights.map((item) => (
                  <div
                    key={item}
                    className="text-sm text-gray-300 flex items-center gap-2"
                  >
                    <span className="text-green-400">•</span>
                    {item}
                  </div>
                ))}
              </div> */}

              {/* buttons */}
              <div className="flex gap-5 text-sm mb-auto">
                <button className="text-blue-400 hover:text-blue-300 transition visited:text-blue-400">
                  <a
                    href={`https://github.com/${GitHub_Username}/${project.repo_name}`}
                    target="_blank"
                  >
                    GitHub →
                  </a>
                </button>

                <button className="text-purple-400 hover:text-purple-300 transition">
                  Live Demo →
                </button>
                <Link href={`/projects/${project.repo_name}`} target="_blank">
                  <button className="text-purple-400 hover:text-purple-300 transition">
                    Full Description →
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Skills */}
      <section id="skills" className="bg-white/[0.02] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <div className="mb-16">
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Technologies
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">Technical Stack</h2>
          </div>

          {/* Skill grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-2xl font-semibold mb-6">{category}</h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-xl bg-white/10 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <section className="py-28 px-6" id="building">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Currently Building
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              What I'm Working On
            </h2>
          </div>

          <div className="rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 md:p-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                In Progress
              </span>
            </div>

            <h3 className="text-3xl font-bold mb-4">CodeCompass</h3>

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              An AI-powered platform that helps developers understand unfamiliar
              GitHub repositories in minutes. The goal is to generate repository
              overviews, architecture insights, contribution guides, and
              onboarding roadmaps for new contributors.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Repository Summarization",
                "Contribution Guide Generation",
                "Architecture Mapping",
                "Codebase Understanding",
                "AI-Powered Insights",
                "Developer Onboarding",
              ].map((feature) => (
                <div
                  key={feature}
                  className="rounded-xl bg-white/5 border border-white/10 px-4 py-3"
                >
                  ✓ {feature}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
              GitHub
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Contribution Activity
            </h2>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 overflow-x-auto">
            <GitHubCalendar
              username={`${GitHub_Username}`}
              colorScheme="dark"
            />
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Experience */}
      <section id="experience" className="py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* TITLE */}
          <div className="mb-16">
            <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
              Leadership
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Experience & Activities
            </h2>
          </div>

          {/* Section Divider */}
          {/* <div className="max-w-7xl mx-auto px-6">
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </div> */}

          {/* Experience Card */}
          <div className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/9">
              <h3 className="text-2xl font-semibold mb-4">Outreach Club</h3>
              <span className="flex text-[15px] leading-relaxed">
                <p className="mr-1 text-gray-400 font-semibold ">Position:</p>
                <p className="text-gray-200 font-bold">SECRETARY</p>
              </span>

              <p className="text-gray-400 leading-relaxed">
                Worked on media production, interviews, event documentation,
                workshops, and collaborative content creation while improving
                communication and leadership skills.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/9">
              <h3 className="text-2xl font-semibold mb-4">
                Technex IIT(BHU) Varanasi
              </h3>
              <span className="flex text-[15px] leading-relaxed">
                <p className="mr-1 text-gray-400 font-semibold ">Worked as:</p>
                <p className="text-gray-200 font-bold">COVERAGE HEAD</p>
              </span>

              <p className="text-gray-400 leading-relaxed">
                Worked as Coverage Head for Day 1 of Technex 2026 and
                successfully documented whole event across platforms.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 hover:bg-white/9">
              <h3 className="text-2xl font-semibold mb-4">
                FMC Weekend IIT(BHU) Varanasi
              </h3>
              <span className="flex text-[15px] leading-relaxed">
                <p className="mr-1 text-gray-400 font-semibold ">Worked as:</p>
                <p className="text-gray-200 font-bold">EVENT COORDINATOR</p>
              </span>

              <p className="text-gray-400 leading-relaxed">
                Worked on managing key events and coordination to ensure smooth
                execution and participants experience
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Contact */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 uppercase tracking-[0.3em] mb-4 text-sm">
            Contact
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Build Something Amazing
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Interested in AI systems, backend engineering, or collaborations?
            Let's connect.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:shahharsh4653@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 transition px-7 py-4 rounded-2xl"
            >
              Email Me
            </a>

            <a
              href={`https://github.com/${GitHub_Username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white/40 transition px-7 py-4 rounded-2xl"
            >
              GitHub
            </a>

            <a
              href={`https://www.linkedin.com/in/harshvardhan-shah-6230a2318`}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 hover:border-white/40 transition px-7 py-4 rounded-2xl"
            >
              Linkedin
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center text-gray-500 text-sm">
        © 2026 Harshvardhan Shah — AI Engineer Portfolio
      </footer>
    </main>
  );
}
