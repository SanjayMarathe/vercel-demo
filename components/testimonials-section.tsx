import { Star } from "lucide-react"

const testimonials = [
  {
    quote: "My daughter's math grade went from a C to an A in just two months. The personalized approach made all the difference.",
    author: "Sarah M.",
    role: "Parent",
    rating: 5,
  },
  {
    quote: "I was struggling with organic chemistry, but my tutor explained concepts in a way that finally clicked. Highly recommend!",
    author: "James L.",
    role: "College Student",
    rating: 5,
  },
  {
    quote: "Flexible scheduling and amazing tutors. I can finally balance work and studying for my professional exams.",
    author: "Michelle R.",
    role: "Working Professional",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Real results from real students who transformed their academic journey with us.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-background rounded-xl p-6 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-foreground">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
