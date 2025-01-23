import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-neutral-600 relative text-white py-6 foter"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bagian Atas Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-4">
          {/* Hak Cipta */}
          <p className="text-red-100 text-lg sm:text-xl">
            &copy; Muhammad Nadhar
          </p>

          {/* Ikon Media Sosial */}
          <div className="flex space-x-4">
            <a
              href="https://wa.me/+6289523135244"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition-colors duration-300"
            >
              <FaWhatsapp className="w-6 h-6" />
            </a>

            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 transition-colors duration-300"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors duration-300"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Bagian Bawah Footer */}
        <div className="text-center text-sm text-gray-300">
          <p>Built with ❤️ using React+ Typescript and Tailwind CSS.</p>
          <p>Connect with me for collaborations or just say hi!</p>
        </div>
      </div>
    </footer>
  );
}
