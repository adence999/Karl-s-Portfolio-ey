import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


const skills = [
  "JavaScript / TypeScript",
  "React & Next. js",
  "Tailwind CSS",
  "Node.js & Express",
  "MySQL / Oracle",
  "Git & GitHub",
  "REST APIS & GraphQL",
  "Shadcn UI",


];


export default function About() {
  return (
    <div className="space-y-8 max-w-3x1 mx-auto">
      <div>
        <h1 className="text-3x1 font-bold tracking-tight">About Me</h1>
        <p className="text-muted-foreground mt-1">
          A bit about my background, passion, and technical skillset.
        </p>
      </div>


      <Card>
        <CardHeader>
          <CardTitle>My Story</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
          <p>
            My name is Karl Adence Agreda, and I am 19 years old. I am from Milaor, Camarines Sur. I am currently a second-year college student taking up Bachelor of Science in Information Technology (BSIT). As an IT student, I am interested in learning more about computers, programming, and modern technology. I enjoy gaining new knowledge and developing skills that can help me in my future career.          </p>
          <p>
            As a student, I know that there are many challenges and difficulties in college, but I believe that these experiences help me become a better person. I am willing to learn, improve myself, and work hard to achieve my dreams. My goal is to finish my studies, become successful in life, and make my family proud.          </p>
        </CardContent>
      </Card>


      <Card>
        <CardHeader>
          <CardTitle>Skills & Technologies</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) =>(
              <span key={skill} className="rounded-full bg-secondary text-secondary-foreground text-sm px-3 py-1">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>  
  );
}
