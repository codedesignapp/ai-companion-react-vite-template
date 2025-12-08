import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Bonnie Green",
    role: "CEO & Web Developer",
    description: "Bonnie drives the technical strategy of the flowbite platform and brand.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
    imageAlt: "Bonnie Avatar",
  },
  {
    name: "Jese Leos",
    role: "CTO",
    description: "Jese drives the technical strategy of the flowbite platform and brand.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
    imageAlt: "Jese Avatar",
  },
  {
    name: "Michael Gough",
    role: "Senior Front-end Developer",
    description: "Michael drives the technical strategy of the flowbite platform and brand.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
    imageAlt: "Michael Avatar",
  },
  {
    name: "Lana Byrd",
    role: "Marketing & Sale",
    description: "Lana drives the technical strategy of the flowbite platform and brand.",
    image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/sofia-mcguire.png",
    imageAlt: "Sofia Avatar",
  },
];

export function TeamSection() {
  const config = ANIMATION_CONFIG.blockAnimations.team;
  
  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      stagger={config.stagger}
      staggerSelector="div.grid > div"
      className="bg-surface"
    >
      <div className="py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-20">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            Our Team
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed">
            Explore the whole collection of open-source web components and elements built with the
            utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="items-center bg-surface-elevated rounded-2xl shadow-lg hover:shadow-xl sm:flex border border-border transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700 overflow-hidden group"
            >
              <a href="#" className="block sm:w-48 flex-shrink-0">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src={member.image}
                  alt={member.imageAlt}
                />
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold tracking-tight text-text-primary mb-1">
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{member.name}</a>
                </h3>
                <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">{member.role}</span>
                <p className="mt-4 mb-4 text-text-secondary leading-relaxed">
                  {member.description}
                </p>
                <ul className="flex gap-4">
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      aria-label="Dribbble"
                    >
                      <FaDribbble className="w-5 h-5" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

