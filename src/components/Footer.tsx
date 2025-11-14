export default function Footer() {
  return (
    <footer className="bg-[#0a0d1a] text-white py-15 ">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-4">لینک‌ها</h3>
          <ul className="english space-y-3 text-gray-300">
            <li>
               <a
                href="https://www.linkedin.com/company/codearealab/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
               >
                 LinkedIn
              </a>
            </li>
            <li>
               <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
               >
                Instagram
               </a>
            </li>
            <li>
               <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition"
               >
                Twitter
               </a>
            </li>
            
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold mb-4">راه ارتباطی</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-center justify-center gap-3">
              <img
              src="src/assets/images/email-logo.png"
              alt="Email Icon"
              className="w-5 h-5"
              />
              <span className="english">info@codearea.org</span>
            </li>

            <li className="flex items-center justify-center gap-3">
              <img
              src="src/assets/images/phone-logo.png"
              alt="Phone Icon"
              className="w-5 h-5"
            />
            <span className="english">+989380216785</span>
            </li>

            <li className="flex items-start justify-center gap-3">
              <img
              src="src/assets/images/location-logo.png"
              alt="Location Icon"
              className="w-5 h-5 mt-1"
            />
              <span>لرستان، بروجرد، خیابان شهید قندی</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center text-center">
            <img
            src="src/assets/images/logo.png"
            alt="CodeArea Logo"
            className="w-25 mb-4 r"
            />
        </div>

        
      </div>
    </footer>
  );
}
