import { HiStar } from "react-icons/hi";
import { AnimatedSection } from "../components/AnimatedSection";
import { ANIMATION_CONFIG } from "../animation.config";

export function Testimonials() {
  const config = ANIMATION_CONFIG.blockAnimations.content;

  const testimonials = [
    {
      quote: "This platform has completely transformed how we operate. The efficiency gains have been remarkable, and our team couldn't be happier with the results.",
      author: "Sarah Johnson",
      role: "CEO, TechCorp",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png",
      rating: 5,
    },
    {
      quote: "Outstanding service and support. They went above and beyond to ensure our success. I would recommend them to anyone looking for a reliable partner.",
      author: "Michael Chen",
      role: "CTO, InnovateLabs",
      image: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png",
      rating: 5,
    },
  ];

  return (
    <AnimatedSection
      type={config.type}
      enabled={config.enabled}
      className="relative overflow-hidden"
      data-section="testimonials"
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-surface pointer-events-none ds-gradient-overlay" />

      <div className="ds-section relative mx-auto max-w-screen-xl">
        {/* Section Header */}
        <div className="text-center mb-[var(--section-gap)]">
          <h2 className="ds-heading-2 mb-6 text-text-primary">
            What Our Clients Say
          </h2>
          <p className="ds-body-lg text-text-secondary max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers.
          </p>
        </div>

        {/* Testimonials Grid - theme-controlled columns */}
        <div className="ds-grid-responsive">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="ds-card relative bg-surface/[var(--card-bg-opacity)] backdrop-blur-md border border-border hover:border-primary-300 dark:hover:border-primary-700 group"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-8 left-8 text-7xl text-primary-200/50 dark:text-primary-800/30 font-serif leading-none select-none">"</div>

              <div className="relative z-10 pt-4">
                {/* Rating stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>

                {/* Quote */}
                <p
                  className="text-text-primary mb-8 font-medium"
                  style={{
                    fontFamily: 'var(--heading-font)',
                    fontSize: 'var(--heading-3-size)',
                    lineHeight: 'var(--body-leading)'
                  }}
                >
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full border-2 border-primary-200 dark:border-primary-700 object-cover"
                  />
                  <div>
                    <div
                      className="font-bold text-text-primary"
                      style={{ fontFamily: 'var(--heading-font)' }}
                    >
                      {testimonial.author}
                    </div>
                    <div className="ds-body text-text-secondary text-sm font-medium">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
