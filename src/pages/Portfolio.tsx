import { Sparkles, Cpu, Workflow } from 'lucide-react'
import { projects } from '@/data/projects'
import { Container } from '@/components/ui/Container'
import { ProjectCard } from '@/components/projects/ProjectCard'

const sortedProjects = [...projects].sort((a, b) => a.name.localeCompare(b.name))

const BUBBLES = [
  { size: 50, left: '10%', top: '12%', delay: '0s', duration: '10s' },
  { size: 36, left: '90%', top: '10%', delay: '1s', duration: '12s' },
  { size: 55, left: '80%', top: '50%', delay: '2s', duration: '14s' },
  { size: 32, left: '8%', top: '58%', delay: '0.5s', duration: '11s' },
]
const SPARKLES = [
  { left: '20%', top: '18%', delay: '0s' },
  { left: '78%', top: '24%', delay: '0.8s' },
  { left: '72%', top: '62%', delay: '0.3s' },
  { left: '50%', top: '35%', delay: '1.5s' },
]

export function Portfolio() {
  return (
    <>
      <section className="relative overflow-hidden py-3 sm:py-4">
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className="bubble animate-float-slow"
            style={{
              width: b.size,
              height: b.size,
              left: b.left,
              top: b.top,
              animationDelay: b.delay,
              animationDuration: b.duration,
            }}
            aria-hidden
          />
        ))}
        {SPARKLES.map((s, i) => (
          <div
            key={i}
            className="sparkle-dot animate-twinkle"
            style={{ left: s.left, top: s.top, animationDelay: s.delay }}
            aria-hidden
          />
        ))}

        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-transparent" aria-hidden />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center min-w-0">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              SA AI Projects
            </p>
            <p className="mt-0.5 text-xs text-slate-secondary sm:text-sm">
              Building the future with artificial intelligence
            </p>

            <div className="relative my-2 flex min-h-[48px] items-center justify-center sm:my-3 sm:min-h-[52px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-14 w-14 -translate-x-1/2 -translate-y-1/2 sm:h-16 sm:w-16">
                <div className="h-full w-full rounded-full border border-dashed border-primary/25 animate-orbit" aria-hidden />
              </div>
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 sm:h-14 sm:w-14">
                <div className="h-full w-full rounded-full border border-dashed border-primary/20 animate-orbit" style={{ animationDuration: '18s', animationDirection: 'reverse' }} aria-hidden />
              </div>
              <div className="relative z-10 flex gap-1.5 opacity-90 sm:gap-2">
                <Sparkles className="h-6 w-6 text-primary animate-float sm:h-7 sm:w-7" aria-hidden />
                <Cpu className="h-6 w-6 text-primary animate-float" style={{ animationDelay: '0.5s' }} aria-hidden />
                <Workflow className="h-6 w-6 text-primary animate-float" style={{ animationDelay: '1s' }} aria-hidden />
              </div>
            </div>

            <h1 className="text-xl font-bold tracking-tight text-slate-primary sm:text-2xl md:text-3xl">
              AI Products, Agents & Solutions
            </h1>
            <p className="mt-1 text-xs text-slate-secondary sm:text-sm">
              Production-grade AI systems that accelerate workflows and improve decision-making.
            </p>
          </div>
        </Container>
      </section>

      <section className="relative pb-6 sm:pb-8">
        <Container>
          <div className="mb-3 text-center sm:mb-4">
            <h2 className="text-xs font-semibold uppercase tracking-widest text-primary">
              Our Work
            </h2>
            <p className="mt-0.5 text-base font-semibold tracking-tight text-slate-primary sm:text-lg">
              Projects we build
            </p>
          </div>
          <div className="stagger-children grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2 xl:grid-cols-3">
            {sortedProjects.map((project) => (
              <div key={project.id} className="stagger-child">
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
