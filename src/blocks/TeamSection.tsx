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
      className="bg-surface-elevated relative overflow-hidden"
    >
      {/* Decorative blobs - subtle and positioned away from content */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-100/40 dark:bg-primary-900/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-secondary-100/40 dark:bg-secondary-900/10 rounded-full blur-3xl opacity-50" />


      <div className="relative py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
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
              className="items-center bg-surface/50 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl sm:flex border border-border transition-all duration-300 hover:border-primary-300 dark:hover:border-primary-700 overflow-hidden group hover:-translate-y-1"
            >
              <a href="#" className="block sm:w-48 flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <img
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src={member.image}
                  alt={member.imageAlt}
                />
              </a>
              <div className="p-6 relative">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/5 to-transparent rounded-bl-3xl -mr-6 -mt-6 transition-all duration-300 group-hover:from-primary-500/10" />

                <h3 className="text-xl font-bold tracking-tight text-text-primary mb-1 relative">
                  <a href="#" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">{member.name}</a>
                </h3>
                <span className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 uppercase tracking-wider">{member.role}</span>
                <p className="mt-4 mb-6 text-text-secondary leading-relaxed">
                  {member.description}
                </p>
                <ul className="flex gap-4">
                  {[
                    { Icon: FaFacebook, label: "Facebook" },
                    { Icon: FaTwitter, label: "Twitter" },
                    { Icon: FaGithub, label: "GitHub" },
                    { Icon: FaDribbble, label: "Dribbble" }
                  ].map(({ Icon, label }, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-text-tertiary hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-200 hover:scale-110 block"
                        aria-label={label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}

