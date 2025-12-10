import { HiQuestionMarkCircle } from "react-icons/hi";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

interface FAQ {
  question: string;
  answers: string[];
  links?: { text: string; href: string }[];
}

const faqs: FAQ[] = [
  {
    question: 'What do you mean by "Figma assets"?',
    answers: [
      "You will have access to download the full Figma project including all of the pages, the components, responsive pages, and also the icons, illustrations, and images included in the screens.",
    ],
  },
  {
    question: 'What does "lifetime access" exactly mean?',
    answers: [
      "Once you have purchased either the design, code, or both packages, you will have access to all of the future updates based on the roadmap, free of charge.",
    ],
  },
  {
    question: "How does support work?",
    answers: [
      "We're aware of the importance of well qualified support, that is why we decided that support will only be provided by the authors that actually worked on this project.",
      "Feel free to {contact us} and we'll help you out as soon as we can.",
    ],
    links: [{ text: "contact us", href: "#" }],
  },
  {
    question: "I want to build more than one project. Is that allowed?",
    answers: [
      "You can use Windster for an unlimited amount of projects, whether it's a personal website, a SaaS app, or a website for a client. As long as you don't build a product that will directly compete with Windster either as a UI kit, theme, or template, it's fine.",
      "Find out more information by {reading the license}.",
    ],
    links: [{ text: "reading the license", href: "#" }],
  },
  {
    question: 'What does "free updates" include?',
    answers: [
      "The free updates that will be provided is based on the {roadmap} that we have laid out for this project. It is also possible that we will provide extra updates outside of the roadmap as well.",
    ],
    links: [{ text: "roadmap", href: "#" }],
  },
  {
    question: "What does the free version include?",
    answers: [
      "The {free version} of Windster includes a minimal style guidelines, component variants, and a dashboard page with the mobile version alongside it.",
      "You can use this version for any purposes, because it is open-source under the MIT license.",
    ],
    links: [{ text: "free version", href: "#" }],
  },
  {
    question: "What is the difference between Windster and Tailwind UI?",
    answers: [
      "Although both Windster and Tailwind UI are built for integration with Tailwind CSS, the main difference is in the design, the pages, the extra components and UI elements that Windster includes.",
      "Additionally, Windster is a project that is still in development, and later it will include both the application, marketing, and e-commerce UI interfaces.",
    ],
  },
  {
    question: "Can I use Windster in open-source projects?",
    answers: [
      "Generally, it is accepted to use Windster in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to Windster itself.",
      "With that being said, feel free to use this design kit for your open-source projects.",
      "Find out more information by {reading the license}.",
    ],
    links: [{ text: "reading the license", href: "#" }],
  },
];

export function FAQSection() {
  const leftColumn = faqs.slice(0, 4);
  const rightColumn = faqs.slice(4);

  const renderAnswer = (answer: string, answerIndex: number, faq: FAQ) => {
    // Check if this answer contains a link placeholder
    if (faq.links && faq.links.length > 0) {
      for (const link of faq.links) {
        const placeholder = `{${link.text}}`;
        if (answer.includes(placeholder)) {
          const parts = answer.split(placeholder);
          return (
            <p key={answerIndex} className="ds-body text-text-secondary">
              {parts[0]}
              <a
                href={link.href}
                className="font-medium underline text-primary-500 hover:text-primary-400 ds-transition"
                target="_blank"
                rel="noreferrer"
              >
                {link.text}
              </a>
              {parts[1]}
            </p>
          );
        }
      }
    }
    return (
      <p key={answerIndex} className="ds-body text-text-secondary">
        {answer}
      </p>
    );
  };

  const config = ANIMATION_CONFIG.blockAnimations.faq;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface relative overflow-hidden"
      data-section="faq"
    >
      {/* Decorative blob */}
      <div className="ds-blob absolute -top-40 -right-40 bg-primary-600/20 rounded-full pointer-events-none" />

      <div className="ds-section relative mx-auto max-w-screen-xl">
        <h2 className="ds-heading-2 mb-10 text-text-primary">
          Frequently asked questions
        </h2>

        <div className="ds-grid-responsive pt-10 text-left border-t border-border">
          {/* Left Column */}
          <div>
            {leftColumn.map((faq, index) => (
              <div key={index} className="mb-[var(--section-gap)]">
                <h3 className="ds-heading-3 flex items-center mb-4 text-text-primary">
                  <div className="ds-icon-container flex-shrink-0 mr-4 bg-primary-600/20 text-primary-500">
                    <HiQuestionMarkCircle className="ds-icon" />
                  </div>
                  {faq.question}
                </h3>
                <div className="space-y-3" style={{ paddingLeft: 'calc(var(--icon-container-size) + 1rem)' }}>
                  {faq.answers.map((answer, answerIndex) => renderAnswer(answer, answerIndex, faq))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div>
            {rightColumn.map((faq, index) => (
              <div key={index} className="mb-[var(--section-gap)]">
                <h3 className="ds-heading-3 flex items-center mb-4 text-text-primary">
                  <div className="ds-icon-container flex-shrink-0 mr-4 bg-primary-600/20 text-primary-500">
                    <HiQuestionMarkCircle className="ds-icon" />
                  </div>
                  {faq.question}
                </h3>
                <div className="space-y-3" style={{ paddingLeft: 'calc(var(--icon-container-size) + 1rem)' }}>
                  {faq.answers.map((answer, answerIndex) => renderAnswer(answer, answerIndex, faq))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
