

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer data-testid="footer" className="bg-white text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://gokulnair.com/aniket/aniket_logo/swiss.png" 
                alt="Company Logo" 
                className="w-32 h-32 object-contain"
              />
            </div>
            <p data-testid="text-footer-description" className="text-gray-600 text-sm">
              Premium weight loss treatments delivered to your door at industry-leading prices.
            </p>
          </div>
          
          <div>
            <h3 data-testid="text-treatment-heading" className="font-semibold mb-4 text-black">Treatment</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><button data-testid="link-semaglutide" onClick={() => scrollToSection('semaglutide-treatment')} className="hover:text-sema-red transition-colors text-left">GLP-1 Treatment</button></li>
              <li><button data-testid="link-how-it-works" onClick={() => scrollToSection('contact')} className="hover:text-sema-red transition-colors text-left">How it Works</button></li>
              <li><button data-testid="link-pricing" onClick={() => scrollToSection('pricing')} className="hover:text-sema-red transition-colors text-left">Pricing</button></li>
            </ul>
          </div>
          
          <div>
            <h3 data-testid="text-support-heading" className="font-semibold mb-4 text-black">Support</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a data-testid="link-faq" href="/faq" className="hover:text-sema-red transition-colors">FAQ</a></li>
              <li><button data-testid="link-contact" onClick={() => scrollToSection('contact')} className="hover:text-sema-red transition-colors text-left">Contact Us</button></li>
              <li><button data-testid="link-medical-team" onClick={() => scrollToSection('contact')} className="hover:text-sema-red transition-colors text-left">Medical Team</button></li>
              <li><button data-testid="link-patient-portal" onClick={() => scrollToSection('contact')} className="hover:text-sema-red transition-colors text-left">Patient Portal</button></li>
            </ul>
          </div>
          
          <div>
            <h3 data-testid="text-legal-heading" className="font-semibold mb-4 text-black">Legal</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a data-testid="link-privacy" href="privacy" className="hover:text-sema-red transition-colors">Privacy Policy</a></li>
              <li><a data-testid="link-terms" href="terms" className="hover:text-sema-red transition-colors">Terms of Use</a></li>
              <li><a data-testid="link-hipaa" href="hipaa" className="hover:text-sema-red transition-colors">HIPAA Notice</a></li>
              <li><a data-testid="link-returnrefund" href="returnrefund" className="hover:text-sema-red transition-colors">Return & Refund</a></li>
              <li><a data-testid="link-ccpa" href="ccpa" className="hover:text-sema-red transition-colors">CCPA Opt-Out</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-sm text-gray-600">
          <p data-testid="text-copyright">
            &copy; {currentYear} All rights reserved. | Licensed medical professionals
          </p>
        </div>
      </div>
    </footer>
  );
}
