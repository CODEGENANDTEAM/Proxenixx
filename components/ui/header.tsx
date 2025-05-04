import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <header className="fixed top-2 z-30 w-full md:top-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative flex h-14 items-center justify-between gap-3 rounded-2xl bg-white/90 px-3 shadow-lg shadow-black/[0.03] backdrop-blur-xs before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(var(--color-gray-100),var(--color-gray-200))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)]">
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Navigation */}
          <nav className="flex flex-1 items-center justify-center">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  href="/" 
                  className="text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline hover:underline-offset-4"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline hover:underline-offset-4"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="text-sm text-gray-600 transition duration-150 ease-in-out hover:text-gray-900 hover:underline hover:underline-offset-4"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdsoLL7Ycr6FOIigXny-u3d7uHsLyndsaJwNEiK7mG8NMfHlA/viewform?usp=dialog" 
                  className="btn-sm bg-gray-800 text-gray-200 shadow-sm transition duration-300 ease-in-out hover:bg-gray-900 hover:scale-105 hover:shadow-md active:scale-95"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  );
}
