import { Button } from '@/components/ui/button';

export function ConnectSection() {
  return (
    <section className="relative">
      <div className="bg-[#0D0D12] rounded-2xl p-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            Elevate Your Design Game
          </h2>
          <p className="text-xl text-gray-300 mb-6">
            and Connect with Like-Minded Professionals at Design Lab
          </p>
          <Button className="bg-pink-500 text-black hover:bg-pink-400">
            Join Now
          </Button>
        </div>
        <div className="absolute bottom-4 right-4 flex -space-x-4">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full bg-gray-800 border-2 border-black"
            />
          ))}
          <div className="w-12 h-12 rounded-full bg-yellow-500 border-2 border-black flex items-center justify-center">
            <span className="text-sm font-bold">17k+</span>
          </div>
        </div>
      </div>
    </section>
  );
}