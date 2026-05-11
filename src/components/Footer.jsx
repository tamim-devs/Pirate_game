import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className=" shadow-gray-600 shadow-2xl text-black mt-20">

      <div className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

    
        <div>
          <div className="flex items-center gap-3 mb-5">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={55}
              height={55}
              className="rounded-xl"
            />
            <h2 className="text-3xl font-black tracking-wide">
              Pirate Game
            </h2>
          </div>

          <p className="text-gray-400 leading-7">
            Pirate Game is your ultimate gaming hub where you can explore,
            discover, and download the latest free-to-play games with ease.
            Built for gamers who love action, adventure, and fun.
          </p>
        </div>

        
        <div>
          <h3 className="text-2xl font-bold mb-5">Quick Links</h3>

          <ul className="space-y-4 text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link href="/products" className="hover:text-white transition">
                All Games
              </Link>
            </li>

            <li>
              <Link href="/profile" className="hover:text-white transition">
                Profile
              </Link>
            </li>

            <li>
              <Link href="/signin" className="hover:text-white transition">
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold mb-5">
            Stay Updated 🎮
          </h3>

          <p className="text-gray-400 mb-6">
            Subscribe to get latest game updates and releases.
          </p>

          <div className="flex rounded-xl overflow-hidden shadow-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 text-black outline-none"
            />

            <button className="bg-blue-600 text-white hover:bg-blue-500 px-6 font-semibold transition">
              Join
            </button>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-800 py-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Pirate Game. Built with ❤️ for gamers.
      </div>

    </footer>
  )
}

export default Footer