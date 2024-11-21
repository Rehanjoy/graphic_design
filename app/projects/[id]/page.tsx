import Footer from "@/components/footer"
import { projects } from "@/lib/projectData"

export function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find((p) => p.id === parseInt(params.id))

  if (!project) {
    return (
      <div className="text-red-500 text-center py-10 text-xl">
        Project not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black  text-white p-1 md:p-8">
    <div className="max-w-6xl mx-auto space-y-12">
      <section className="relative min-h-screen rounded-xl bg-[#0D0D12] flex items-center justify-center p-6 overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
        <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />
      <div className="container relative mx-auto max-w-4xl space-y-12">
        {/* Project Image */}
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Project Metadata */}
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text">
            {project.title}
          </h1>
          <p className="text-gray-400">{project.description}</p>
          <p className="text-gray-500 text-sm">
            {project.posts} Posts • {project.members} Members
          </p>
        </div>

        {/* Project Details */}
        <div className="text-lg text-gray-300 leading-relaxed space-y-6">
          {project.details.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
 
  )
}
