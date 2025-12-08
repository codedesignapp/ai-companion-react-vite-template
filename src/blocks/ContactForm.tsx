import { Button, Label, TextInput, Textarea } from "../components";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function ContactForm() {
  const config = ANIMATION_CONFIG.blockAnimations.contact;
  
  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface"
    >
      <div className="py-16 sm:py-24 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-center text-text-primary lg:text-5xl">
          Contact Us
        </h2>
        <p className="mb-12 text-center text-text-secondary text-lg leading-relaxed">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our
          Business plan? Let us know.
        </p>
        <form action="#" className="space-y-6">
          <div>
            <Label htmlFor="email" className="block mb-2 text-sm font-medium text-text-primary">
              Your email
            </Label>
            <TextInput
              id="email"
              type="email"
              placeholder="name@flowbite.com"
              required
              theme={{
                base: "w-full",
                field: {
                  input: {
                    base: "shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
                  },
                },
              }}
            />
          </div>
          <div>
            <Label htmlFor="subject" className="block mb-2 text-sm font-medium text-text-primary">
              Subject
            </Label>
            <TextInput
              id="subject"
              type="text"
              placeholder="Let us know how we can help you"
              required
              theme={{
                base: "w-full",
                field: {
                  input: {
                    base: "block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light",
                  },
                },
              }}
            />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="message" className="block mb-2 text-sm font-medium text-text-primary">
              Your message
            </Label>
            <Textarea
              id="message"
              rows={6}
              placeholder="Leave a comment..."
              theme={{
                base: "block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
              }}
            />
          </div>
          <Button
            type="submit"
            color="blue"
            className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-center text-white rounded-xl bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 transition-all duration-200 hover:scale-105 shadow-lg shadow-primary-500/25"
          >
            Send message
          </Button>
        </form>
      </div>
    </AnimatedSection>
  );
}

