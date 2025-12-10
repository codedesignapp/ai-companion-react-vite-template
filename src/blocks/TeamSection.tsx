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
      staggerSelector=".ds-grid-responsive > div"
      className="bg-surface-elevated relative overflow-hidden"
      data-section="team"
    >
      {/* Decorative blobs */}
      <div className="ds-blob absolute top-0 right-0 -mr-20 -mt-20 bg-primary-600/20 rounded-full" />
      <div className="ds-blob absolute bottom-0 left-0 -ml-20 -mb-20 bg-secondary-600/20 rounded-full" />

      <div className="ds-section relative mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="mx-auto max-w-screen-md text-center mb-[var(--section-gap)]">
          <h2 className="ds-heading-2 mb-6 text-text-primary">
            Our Team
          </h2>
          <p className="ds-body-lg text-text-secondary">
            Explore the whole collection of open-source web components and elements built with the
            utility classes from Tailwind
          </p>
        </div>

        {/* Team Grid - 4 members: 2x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="ds-card items-center bg-surface/[var(--card-bg-opacity)] sm:flex border border-border hover:border-primary-300 dark:hover:border-primary-700 overflow-hidden group"
            >
              {/* Member Image */}
              <a href="/about" className="block sm:w-48 flex-shrink-0 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent ds-transition z-10" />
                <img
                  className="w-full h-full object-cover group-hover:scale-110 ds-transition"
                  style={{ transitionDuration: 'calc(var(--transition-duration) * 2)' }}
                  src={member.image}
                  alt={member.imageAlt}
                />
              </a>

              {/* Member Info */}
              <div className="p-6 relative" style={{ padding: 'var(--card-padding)' }}>
                <div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary-500/5 to-transparent rounded-bl-3xl -mr-6 -mt-6 ds-transition group-hover:from-primary-500/10"
                  style={{ opacity: 'var(--deco-gradient-opacity)' }}
                />

                <h3 className="ds-heading-3 text-text-primary mb-1 relative">
                  <a href="/about" className="hover:text-primary-600 dark:hover:text-primary-400 ds-transition">{member.name}</a>
                </h3>
                <span
                  className="text-sm font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-secondary-500 uppercase tracking-wider"
                  style={{ fontFamily: 'var(--body-font)' }}
                >
                  {member.role}
                </span>
                <p className="ds-body mt-4 mb-6 text-text-secondary">
                  {member.description}
                </p>

                {/* Social Links */}
                <ul className="flex gap-4">
                  {[
                    { Icon: FaFacebook, label: "Facebook" },
                    { Icon: FaTwitter, label: "Twitter" },
                    { Icon: FaGithub, label: "GitHub" },
                    { Icon: FaDribbble, label: "Dribbble" }
                  ].map(({ Icon, label }, i) => (
                    <li key={i}>
                      <a
                        href="/about"
                        className="text-text-tertiary hover:text-primary-600 dark:hover:text-primary-400 ds-transition hover:scale-110 block"
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
