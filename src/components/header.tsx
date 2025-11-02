import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { navigate } from "wouter/use-browser-location";

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header data-testid="header" className="bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo - simple and clean */}
          <div className="flex items-center">
            <img 
              src="https://gokulnair.com/aniket/aniket_logo/swisslogo.png" 
              alt="Sema Swiss" 
              className="w-48 h-48 object-contain"
              onClick={() => navigate("/")}
            />
          </div>

          {/* Navigation - centered like AlgoRx */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Treatment
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              How it Works
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              About
            </button>
            <Link 
              href="/contact"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Contact
            </Link>
            <Link 
              href="/faq"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA Buttons - exactly like AlgoRx */}
          <div className="flex items-center space-x-4">
            {/* <Button 
              data-testid="button-sign-in" 
              variant="ghost"
              onClick={() => window.open("http://member.semaswiss.com/", "_blank")}
              className="text-gray-600 hover:text-gray-900 text-sm font-medium px-4 py-2"
            >
              Login
            </Button> */}
            <Button 
              data-testid="button-get-started"
              // onClick={() => scrollToSection('contact')}
              onClick={() => window.open("http://member.semaswiss.com/", "_blank")}

              // onClick={() => window.open("http://checkout.semaswiss.com/?id=1", "_blank")}
              className="bg-sema-red hover:bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md"
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
