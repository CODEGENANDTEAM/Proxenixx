import Image from 'next/image';
import card1 from './ecom.png';
import card2 from './ebookstore.png';
export default function Portfolio() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl pb-12 md:pb-20">
            <h1 className="h1 mb-4">Portfolio.</h1>
            <p className="text-xl text-gray-600">Our portfolio showcases our previous work to give you a sense of our services. Browse through our projects and see for yourself.</p>
          </div>

          {/* Portfolio grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* NFT Distro Project */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg">
              <Image 
                src={card1}
                width={540} 
                height={405} 
                alt="NFT Distro Project"
                className="transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/75 p-6 flex flex-col justify-end">
                <h3 className="h4 mb-2 text-white">NFT Distro Marketplace</h3>
                <p className="text-gray-300">Creating a secure and user-friendly online marketplace for NFTs requires advanced technology and unique features.</p>
                <div className="mt-4 space-x-2">
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Research</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Strategy</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Design</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Development</span>
                </div>
              </div>
            </div>

            {/* TheHealing Project */}
            <div className="group relative overflow-hidden rounded-lg bg-gray-900 shadow-lg">
              <Image 
                src={card2} 
                width={540} 
                height={405} 
                alt="TheHealing Platform"
                className="transition duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/75 p-6 flex flex-col justify-end">
                <h3 className="h4 mb-2 text-white">Design and Develop of TheHealing Platform</h3>
                <p className="text-gray-300">TheHealing.com is an online platform that connects healers offering alternative healing to potential users with ailments or looking to solve their health issues.</p>
                <div className="mt-4 space-x-2">
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Design</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Development</span>
                  <span className="inline-block px-3 py-1 text-sm bg-gray-800/50 text-gray-300 rounded-full">Maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}