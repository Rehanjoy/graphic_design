import { blogs } from "@/lib/blogData"

export function generateStaticParams() {
  return blogs.map((blog) => ({
    id: blog.id.toString(),
  }))
}

export default function BlogDetail({ params }: { params: { id: string } }) {
  const blog = blogs.find((b) => b.id === parseInt(params.id))

  if (!blog) {
    return (
      <div className="text-red-500 text-center py-10 text-xl">
        Blog not found
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-white p-1 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="relative rounded-xl bg-[#0D0D12] flex flex-col items-center justify-center overflow-hidden">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
          <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
          <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />

          {/* Blog Image */}
          <div className="w-full h-[50vh] lg:h-[70vh] relative p-5 overflow-hidden rounded-none ">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>

          {/* Blog Metadata */}
          <div className="space-y-2 relative  text-center p-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-l from-purple-400 via-pink-500 to-yellow-500 text-transparent bg-clip-text">{blog.title}</h1>
            <p className="text-pink-500 text-sm">
              {blog.date} • {blog.author}
            </p>
          </div>

          {/* Blog Content */}
          <div className="text-lg relative  text-gray-300 leading-relaxed space-y-6 p-6 max-w-4xl mx-auto">
            {blog.content.split("\n").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
