import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleDot, Gamepad2, Clapperboard, Church, BookOpen, Dumbbell } from "lucide-react";


const hobbies = [
  {
    title: "Basketball",
    icon: CircleDot,
    description: "Driven by teamwork, competition, and the passion for improving skills on the court.",
  },
  {
    title: "Gaming",
    icon: Gamepad2,
    description: "Enjoying immersive gameplay, exploring virtual worlds, and having fun through exciting gaming experiences.",
  },
  {
    title: "Watching Movies",
    icon: Clapperboard,
    description: "Enjoying different stories, exploring new worlds, and experiencing entertainment through films..",
  },
  {
    title: "Praying",
    icon: Church,
    description: "Strengthened by faith, guided by prayer, and finding peace through a connection with God.",
  },
  {
    title: "Studying",
    icon: BookOpen,
    description: "Motivated by curiosity, continuous learning, and the desire to gain knowledge and achieve success.",
  },
  {
    title: "Exercising",
    icon: Dumbbell,
    description: "Focused on building strength, improving fitness, and maintaining a healthy and active lifestyle.",
  },
];


export default function Hobbies() {
  return (
    <div className="space-y-8 max-w-4x1 mx-auto">
      <div>
        <h1 className="text-3x1 font-bold tracking-tight">Hobbies & Interests</h1>
        <p className="text-muted-foreground mt-1">What I enjoy doing outside of coding .</p>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 1g:grid-cols-3 gap-6">
        {hobbies.map((hobby) => {
          const Icon = hobby.icon;
          return (
            <Card key={hobby.title} className="hover: shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-primary/10 rounded-1g text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="text-1g">{hobby.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{hobby.description}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
