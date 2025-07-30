import React from "react";
import { Github, Linkedin, Instagram, X as Twitter } from "lucide-react";
function Footer() {
  return (
    <div id="footer" className="min-h-[50vh] w-full bg-[#f4f5f4]">
      <footer className="px-6 pb-10">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl p-10 shadow-md grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-black text-white p-2 rounded-md font-bold">
                B
              </div>
              <span className="text-xl font-semibold font-[Amer]">BRAND</span>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              BRAND empowers teams to transform raw data into clear, compelling
              visuals — making insights easier to share, understand, and act on.
            </p>
            <div className="flex space-x-4 text-gray-600">
              <Twitter className="w-5 h-5 hover:text-black cursor-pointer" />
              <Instagram className="w-5 h-5 hover:text-black cursor-pointer" />
              <Linkedin className="w-5 h-5 hover:text-black cursor-pointer" />
              <Github className="w-5 h-5 hover:text-black cursor-pointer" />
            </div>
          </div>

          {/* Product */}
          <div className="lg:ml-[10vw]">
            <h4 className="text-sm font-semibold mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Features</li>
              <li>Pricing</li>
              <li>Integrations</li>
              <li>Changelog</li>
            </ul>
          </div>

          {/* Resources */}
          <div className="lg:ml-[5vw]">
            <h4 className="text-sm font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Documentation</li>
              <li>Tutorials</li>
              <li>Blog</li>
              <li>Support</li>
            </ul>
          </div>

          {/* Company */}
          <div className="">
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="text-center text-xs text-gray-500 mt-8 space-x-4">
          <span>© 2025 BRAND. All rights reserved.</span>
          <span>|</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Cookies Settings
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
