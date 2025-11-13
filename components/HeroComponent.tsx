import Image from 'next/image';

export default function HeroComponent({ data_speed }: { data_speed?: number }) {
    return (
        <section className="relative w-full h-screen bg-gray-800 flex items-center justify-center overflow-hidden" data-speed={data_speed}>
            <div className="absolute inset-0 z-0">
              <Image
                src="/img/Hero.jpg"
                alt="Hero Image"
                fill
                className="object-cover brightness-50 blur-md"
                priority
              />
            </div>
            <div className="relative z-10 text-white">
                <h1 className="text-5xl font-bold">Welcome to Mogana ERP</h1>
                <p className="mt-4">Your solution for efficient business management.</p>
            </div>
        </section>
    );
}