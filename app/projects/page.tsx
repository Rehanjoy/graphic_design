import { projects } from "@/lib/projectData"
import Link from "next/link"

export default async function ProjectPage() {
  const ITEMS_PER_PAGE = 8
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE)

  // Precompute the first page of projects
  const currentProjects = projects.slice(0, ITEMS_PER_PAGE)

  return (
    <div className="min-h-screen bg-black  text-white p-1 md:p-8">
    <div className="max-w-6xl mx-auto space-y-12">
      <section className="relative min-h-screen rounded-xl bg-[#0D0D12] flex items-center justify-center p-6 overflow-hidden">
        {/* Background Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
        <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
        <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />
      <div className="container relative mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text">
            All Projects
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentProjects.map((project) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="bg-gray-800/50 rounded-xl overflow-hidden"
            >
              <div className="p-4">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400">{project.description}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {project.posts} Posts • {project.members} Members
                </p>
              </div>
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-4 mt-8">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Link
              key={page}
              href={`/projects?page=${page}`}
              className={`px-4 py-2 rounded-lg ${
                page === 1
                  ? "bg-pink-500 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700"
              }`}
            >
              {page}
            </Link>
          ))}
        </div>
      </div>
    </section>
    </div>
    </div>
    
  )
}
