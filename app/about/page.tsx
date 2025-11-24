import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GraduationCap, Users, Target, Award } from "lucide-react";

export default function AboutPage() {
  const stats = [
    { label: "Years of Excellence", value: "10+", icon: Award },
    { label: "Students Graduated", value: "500+", icon: GraduationCap },
    { label: "Industry Partners", value: "50+", icon: Users },
    { label: "Job Placement Rate", value: "85%", icon: Target },
  ];

  return (
    <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <BlurFade delay={0.1}>
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold sm:text-5xl">
            About Chamama High School
          </h1>
          <p className="mb-8 text-lg text-muted-foreground">
            Empowering the next generation of developers through comprehensive
            education and hands-on experience
          </p>
        </div>
      </BlurFade>

      <BlurFade delay={0.2} inView>
        <div className="mx-auto mb-16 max-w-4xl">
          <div className="rounded-lg border bg-card p-8">
            <h2 className="mb-4 text-2xl font-bold">Our Mission</h2>
            <p className="mb-4 text-muted-foreground">
              At Chamama High School, we believe that every student has the
              potential to become a skilled software developer. Our comprehensive
              4-year curriculum is designed to take students from complete
              beginners to job-ready professionals.
            </p>
            <p className="text-muted-foreground">
              We focus on practical, hands-on learning combined with strong
              theoretical foundations. Our students don&apos;t just learn to code -
              they learn to think like developers, solve real-world problems, and
              build applications that make a difference.
            </p>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.3} inView>
        <div className="mb-16">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Impact</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="rounded-lg border bg-card p-6 text-center"
                >
                  <Icon className="mx-auto mb-4 h-10 w-10 text-primary" />
                  <div className="mb-2 text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.4} inView>
        <div className="mx-auto mb-16 max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">
            Our Curriculum
          </h2>
          <div className="space-y-6">
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Year 1: Foundations
              </h3>
              <p className="text-muted-foreground">
                Learn programming fundamentals, basic web development, and
                problem-solving skills.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Year 2: Specialization
              </h3>
              <p className="text-muted-foreground">
                Choose your track (Frontend, Backend, DevOps, or Data Science)
                and dive deeper into specialized skills.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Year 3: Advanced Development
              </h3>
              <p className="text-muted-foreground">
                Build complex applications, contribute to open source, and
                prepare for internships.
              </p>
            </div>
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-2 text-xl font-semibold">
                Year 4: Career Launch
              </h3>
              <p className="text-muted-foreground">
                Complete capstone projects, interview preparation, and job
                placement support.
              </p>
            </div>
          </div>
        </div>
      </BlurFade>

      <BlurFade delay={0.5} inView>
        <div className="rounded-lg border bg-primary/5 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to Start Learning?</h2>
          <p className="mb-6 text-muted-foreground">
            Join hundreds of students who have launched successful tech careers
          </p>
          <Button size="lg" asChild>
            <Link href="/learning/year-1">Begin Your Journey</Link>
          </Button>
        </div>
      </BlurFade>
    </div>
  );
}
