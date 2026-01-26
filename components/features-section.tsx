import { Users, Calendar, MessageSquare, Award } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "1-on-1 Sessions",
    description: "Personalized attention from expert tutors who adapt to your unique learning style and pace.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description: "Book sessions that fit your busy life. Morning, evening, or weekend - we're here for you.",
  },
  {
    icon: MessageSquare,
    title: "Interactive Learning",
    description: "Engage with digital whiteboards, screen sharing, and real-time problem solving tools.",
  },
  {
    icon: Award,
    title: "Certified Tutors",
    description: "All tutors are background-checked and verified with proven teaching experience.",
  },
]

export function FeaturesSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Why Students Love BrightPath
          </h2>
          <p className="text-muted-foreground text-lg">
            We've built a platform that makes learning effective, enjoyable, and accessible to everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground text-lg mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
