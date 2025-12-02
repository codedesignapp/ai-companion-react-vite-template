import { Button } from "../components";
import { AnimatedSection } from "../components/AnimatedSection";
import { FaYoutube, FaProductHunt, FaReddit } from "react-icons/fa";
import { ANIMATION_CONFIG } from "../animation.config";

export function Hero() {
  const config = ANIMATION_CONFIG.blockAnimations.hero;
  
  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
    >
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        {/* Banner with Badge */}
        <a
          href="#"
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-text-secondary bg-surface-subtle rounded-full hover:bg-surface-elevated"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-white px-4 py-1.5 mr-3">
            New
          </span>
          <span className="text-sm font-medium">Flowbite is out! See what's new</span>
          <svg
            className="ml-2 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Main Heading */}
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-text-primary md:text-5xl lg:text-6xl">
          We invest in the world's potential
        </h1>

        {/* Description */}
        <p className="mb-8 text-lg font-normal text-text-secondary lg:text-xl sm:px-16 xl:px-48">
          Here at Flowbite we focus on markets where technology, innovation, and capital can unlock
          long-term value and drive economic growth.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Button
            as="a"
            href="#"
            color="blue"
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Learn more
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button
            as="a"
            href="#"
            outline
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-text-primary rounded-lg border border-border hover:bg-surface-subtle focus:ring-4 focus:ring-surface-subtle"
          >
            <svg
              className="mr-2 -ml-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
            </svg>
            Watch video
          </Button>
        </div>

        {/* Featured In Section */}
        <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold text-text-tertiary uppercase">FEATURED IN</span>
          <div className="flex flex-wrap justify-center items-center mt-8 text-text-secondary sm:justify-between">
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-text-primary"
              aria-label="YouTube"
            >
              <FaYoutube className="h-8 w-auto" />
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-text-primary"
              aria-label="Product Hunt"
            >
              <FaProductHunt className="h-11 w-auto" />
            </a>
            <a
              href="#"
              className="mr-5 mb-5 lg:mb-0 hover:text-text-primary"
              aria-label="Reddit"
            >
              <FaReddit className="h-11 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}

