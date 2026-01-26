import { Calculator, BookOpen, FlaskConical, Globe, Music, Code, Palette, Languages } from "lucide-react"

const subjects = [
  { icon: Calculator, name: "Mathematics", count: "120+ tutors" },
  { icon: FlaskConical, name: "Science", count: "85+ tutors" },
  { icon: BookOpen, name: "English", count: "95+ tutors" },
  { icon: Globe, name: "History", count: "60+ tutors" },
  { icon: Code, name: "Computer Science", count: "70+ tutors" },
  { icon: Languages, name: "Languages", count: "110+ tutors" },
  { icon: Music, name: "Music", count: "45+ tutors" },
  { icon: Palette, name: "Art", count: "35+ tutors" },
]

export function SubjectsSection() {
  return (
    <section id="subjects" className="py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Subjects We Cover
          </h2>
          <p className="text-muted-foreground text-lg">
            From STEM to humanities, find expert tutors across all academic disciplines.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {subjects.map((subject) => (
            <div
              key={subject.name}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 hover:shadow-md transition-all cursor-pointer"
            >
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-3 group-hover:bg-accent/10 transition-colors">
                <subject.icon className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-medium text-foreground mb-1">{subject.name}</h3>
              <p className="text-sm text-muted-foreground">{subject.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
