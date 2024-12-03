import { services } from "@/lib/service";

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id.toString(),
  }));
}

export default function ServiceDetail({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === String(params.id));

  if (!service) {
    return (
      <div className="text-red-500 text-center py-10 text-xl">
        Service not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <section className="relative min-h-screen rounded-xl bg-[#0D0D12] p-6 overflow-hidden">
          {/* Background Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0D0D12] to-[#1C1C24] opacity-80 z-0"></div>
          <div className="absolute top-1/4 left-1/3 w-[800px] h-[800px] bg-purple-600 opacity-10 blur-3xl rounded-full z-0" />
          <div className="absolute bottom-1/4 right-1/3 w-[700px] h-[700px] bg-pink-600 opacity-10 blur-3xl rounded-full z-0" />
          <div className="container relative mx-auto max-w-4xl space-y-12">
            {/* Service Main Image */}
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Service Metadata */}
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 bg-clip-text">
                {service.title}
              </h1>
              <p className="text-gray-400">{service.description}</p>
            </div>

            {/* Additional Images */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Gallery</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {service.additionalImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="rounded-lg shadow-md object-cover"
                  />
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Key Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {service.highlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="bg-gray-800/50 p-6 rounded-lg shadow-lg"
                  >
                    <h3 className="text-xl font-bold text-white mb-2">
                      {highlight.title}
                    </h3>
                    <p className="text-gray-400">{highlight.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
