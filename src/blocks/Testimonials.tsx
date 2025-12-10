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
    >
      <div className="absolute inset-0 bg-gradient-to-t from-surface-elevated to-surface pointer-events-none" />

      <div className="relative py-16 px-4 mx-auto max-w-screen-xl sm:py-24 lg:px-6">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="mb-6 text-4xl tracking-tight font-extrabold text-text-primary lg:text-5xl">
            What Our Clients Say
          </h2>
          <p className="text-text-secondary text-lg leading-relaxed max-w-2xl mx-auto">
            Don't just take our word for it - hear from some of our satisfied customers.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-10 bg-surface/60 backdrop-blur-md border border-border rounded-3xl hover:border-primary-300 dark:hover:border-primary-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
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
                <p className="text-xl md:text-2xl text-text-primary leading-relaxed mb-8 font-medium">
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
                    <div className="font-bold text-text-primary text-lg">
                      {testimonial.author}
                    </div>
                    <div className="text-text-secondary text-sm font-medium">
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
