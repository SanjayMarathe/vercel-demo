import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Trusted by 10,000+ students
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Unlock Your Full Academic Potential
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              Connect with expert tutors who personalize every lesson to help you succeed. From math to music, we've got you covered.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8">
                Find Your Tutor
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-border text-foreground hover:bg-secondary bg-transparent">
                See How It Works
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {["Verified Tutors", "Flexible Scheduling", "Money-Back Guarantee"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="h-4 w-4 text-accent" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative bg-card rounded-2xl shadow-xl p-6 border border-border">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-foreground">98%</div>
                  <div className="text-sm text-muted-foreground mt-1">Grade Improvement</div>
                </div>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-foreground">500+</div>
                  <div className="text-sm text-muted-foreground mt-1">Expert Tutors</div>
                </div>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground mt-1">Availability</div>
                </div>
                <div className="bg-secondary rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-foreground">4.9</div>
                  <div className="text-sm text-muted-foreground mt-1">Average Rating</div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
