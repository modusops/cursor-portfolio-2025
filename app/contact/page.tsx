import Link from "next/link"

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="flex items-center justify-between py-6">
          <div>
            <Link href="/">
              <h1 className="text-xl font-medium text-black">David Chan</h1>
            </Link>
          </div>
          <nav className="flex space-x-4">
            <Link
              href="/work"
              className="px-5 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors text-sm font-medium"
            >
              Work
            </Link>
            <Link
              href="/about"
              className="px-5 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors text-sm font-medium"
            >
              About
            </Link>
            <Link href="/contact" className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium">
              Contact
            </Link>
          </nav>
        </header>

        {/* Contact Content */}
        <div className="py-20 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-medium mb-8">Contact</h1>

          <div className="prose max-w-none text-lg">
            <p>
              I'm currently available for new projects and collaborations. If you're interested in working together,
              please reach out using one of the methods below.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <div className="text-sm text-gray-500">Email</div>
                <a href="mailto:hello@example.com" className="text-black hover:underline">
                  hello@example.com
                </a>
              </div>

              <div>
                <div className="text-sm text-gray-500">LinkedIn</div>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  linkedin.com/in/yourname
                </a>
              </div>

              <div>
                <div className="text-sm text-gray-500">Twitter</div>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline"
                >
                  @yourhandle
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
