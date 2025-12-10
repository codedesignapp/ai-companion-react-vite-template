import { Button, Label, TextInput, Textarea } from "../components";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function ContactForm() {
  const config = ANIMATION_CONFIG.blockAnimations.contact;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-surface to-surface-elevated pointer-events-none" />

      <div className="relative py-16 sm:py-24 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-center text-text-primary lg:text-5xl">
          Contact Us
        </h2>
        <p className="mb-12 text-center text-text-secondary text-lg leading-relaxed">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our
          Business plan? Let us know.
        </p>

        <div className="p-8 bg-surface/50 backdrop-blur-md border border-border rounded-3xl shadow-2xl">
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
                      base: "block w-full p-4 text-sm text-text-primary bg-surface-elevated border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder:text-text-tertiary",
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
                      base: "block w-full p-4 text-sm text-text-primary bg-surface-elevated border border-border rounded-xl shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder:text-text-tertiary",
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
                  base: "block p-4 w-full text-sm text-text-primary bg-surface-elevated rounded-xl shadow-sm border border-border focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 placeholder:text-text-tertiary resize-y",
                }}
              />
            </div>
            <Button
              type="submit"
              color="blue"
              className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-center text-white rounded-xl bg-primary-600 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-800 transition-all duration-300 hover:scale-[1.02] shadow-lg shadow-primary-500/20 active:scale-95"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}

