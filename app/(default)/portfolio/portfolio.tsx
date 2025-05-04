import Image from 'next/image';
import card1 from './ecom.png';
import card2 from './ebookstore.png';
export default function Portfolio() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20" data-aos="fade-up" data-aos-delay="100">
            <h1 className="h1 mb-4">Portfolio.</h1>
            <p className="text-xl text-gray-600">Our portfolio showcases our previous work to give you a sense of our services. Browse through our projects and see for yourself.</p>
          </div>

          {/* Portfolio grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* E-commerce Website Project */}
            <div 
              className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <Image 
                src={card1}
                width={540} 
                height={405} 
                alt="E-commerce Website"
                className="transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/75 p-6 flex flex-col justify-end">
                <h3 className="h4 mb-2 text-white">Modern E-commerce Platform</h3>
                <p className="text-gray-300">A fully responsive e-commerce solution with secure payment processing, inventory management, and customer analytics dashboard.</p>
                <div className="mt-4 space-x-2">
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">React</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Node.js</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">MongoDB</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Stripe</span>
                </div>
              </div>
            </div>

            {/* E-book Store Project */}
            <div 
              className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <Image 
                src={card2} 
                width={540} 
                height={405} 
                alt="E-book Store Platform"
                className="transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/75 p-6 flex flex-col justify-end">
                <h3 className="h4 mb-2 text-white">Digital E-book Marketplace</h3>
                <p className="text-gray-300">A comprehensive e-book platform with secure digital rights management, personalized recommendations, and integrated reading experience.</p>
                <div className="mt-4 space-x-2">
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Next.js</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">TypeScript</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">AWS</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Tailwind</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
