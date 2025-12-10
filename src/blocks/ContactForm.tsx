import { Button, Label, TextInput, Textarea } from "../components";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function ContactForm() {
  const config = ANIMATION_CONFIG.blockAnimations.contact;

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="bg-surface-elevated relative overflow-hidden"
      data-section="contact"
    >
      {/* Decorative blob */}
      <div className="ds-blob absolute -top-20 -right-20 bg-primary-600/20 rounded-full pointer-events-none" />

      <div className="ds-section relative mx-auto max-w-screen-md">
        {/* Section Header */}
        <h2 className="ds-heading-2 mb-6 text-center text-text-primary">
          Contact Us
        </h2>
        <p className="ds-body-lg mb-12 text-center text-text-secondary">
          Got a technical issue? Want to send feedback about a beta feature? Need details about our
          Business plan? Let us know.
        </p>

        {/* Form Card */}
        <div
          className="ds-card bg-surface border border-border"
        >
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
                      base: "block w-full p-4 text-sm text-text-primary bg-surface-elevated border border-border shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent ds-transition placeholder:text-text-tertiary",
                      sizes: {},
                      colors: {},
                      withRightIcon: {},
                      withIcon: {},
                      withAddon: {},
                      withShadow: {},
                    },
                  },
                }}
                style={{ borderRadius: 'var(--card-radius, 0.75rem)' }}
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
                      base: "block w-full p-4 text-sm text-text-primary bg-surface-elevated border border-border shadow-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent ds-transition placeholder:text-text-tertiary",
                      sizes: {},
                      colors: {},
                      withRightIcon: {},
                      withIcon: {},
                      withAddon: {},
                      withShadow: {},
                    },
                  },
                }}
                style={{ borderRadius: 'var(--card-radius, 0.75rem)' }}
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
                  base: "block p-4 w-full text-sm text-text-primary bg-surface-elevated shadow-sm border border-border focus:ring-2 focus:ring-primary-500 focus:border-transparent ds-transition placeholder:text-text-tertiary resize-y",
                }}
                style={{ borderRadius: 'var(--card-radius, 0.75rem)' }}
              />
            </div>
            <Button
              type="submit"
              color="blue"
              className="ds-button w-full sm:w-auto text-center text-white bg-primary-600 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-500/30 active:scale-95"
            >
              Send message
            </Button>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
