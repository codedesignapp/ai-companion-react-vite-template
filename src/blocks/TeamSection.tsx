import { FaFacebook, FaTwitter, FaGithub, FaDribbble } from "react-icons/fa";

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
  return (
    <section className="bg-surface">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-text-primary">
            Our Team
          </h2>
          <p className="font-light text-text-secondary lg:mb-16 sm:text-xl">
            Explore the whole collection of open-source web components and elements built with the
            utility classes from Tailwind
          </p>
        </div>
        <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="items-center bg-surface-elevated rounded-lg shadow sm:flex border border-border"
            >
              <a href="#">
                <img
                  className="w-full rounded-lg sm:rounded-none sm:rounded-l-lg"
                  src={member.image}
                  alt={member.imageAlt}
                />
              </a>
              <div className="p-5">
                <h3 className="text-xl font-bold tracking-tight text-text-primary">
                  <a href="#">{member.name}</a>
                </h3>
                <span className="text-text-secondary">{member.role}</span>
                <p className="mt-3 mb-4 font-light text-text-secondary">
                  {member.description}
                </p>
                <ul className="flex space-x-4 sm:mt-0">
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-text-primary"
                      aria-label="Facebook"
                    >
                      <FaFacebook className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-text-primary"
                      aria-label="Twitter"
                    >
                      <FaTwitter className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-text-primary"
                      aria-label="GitHub"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-text-secondary hover:text-text-primary"
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
    </section>
  );
}

