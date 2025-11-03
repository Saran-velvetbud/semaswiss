import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ReturnsRefundPage() {
  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />

      <main className="pt-0 pb-16">
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-6">

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                Returns & Refund Policy
              </h1>

              <p className="text-gray-600 leading-relaxed">
                At <span className="font-semibold text-gray-900">Semaswiss</span>, we strive to provide the highest level of quality healthcare — including frictionless access to medical providers and medications at prices that are affordable and accessible. We also make every effort to ensure the highest level of patient care before and after the sale.
              </p>

              <p className="text-gray-600 leading-relaxed">
                If you have an issue with your order or product, please reach out to our patient care team at{" "}
                <span className="font-medium text-gray-900">+1 844 821 9675‬‬</span> or{" "}
                <a href="mailto:admin@semaswiss.com " className="text-sema-red hover:underline">
                  admin@semaswiss.com 
                </a>.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Prescription Medications
              </h2>
              <p className="text-gray-600 leading-relaxed">
                State and Federal regulations do not allow the return of prescription medications after being dispensed by the pharmacy. Once your method of payment has been charged and your package has been handed over to the carrier (USPS, FedEx, UPS), all sales are final.
              </p>
              <p className="text-gray-600 leading-relaxed">
                You can always log in to your <span className="font-medium text-gray-900">semaswiss.com</span> account before your products ship to change your address, method of payment, or to cancel your subscription.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If your prescription medication arrives damaged or is lost during transit, please contact our patient care team at{" "}
                <span className="font-medium text-gray-900">+1 844 821 9675‬‬</span> or{" "}
                <a href="mailto:admin@semaswiss.com " className="text-sema-red hover:underline">
                  admin@semaswiss.com 
                </a>.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Non-Prescription (Over-the-Counter) Products
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Semaswiss may accept returns on unopened, non-prescription items up to <span className="font-medium text-gray-900">30 days</span> after the sale. You will be responsible for paying the return shipping cost, and we do not accept COD returns.
              </p>
              <p className="text-gray-600 leading-relaxed">
                To initiate a return, please contact our patient care team at{" "}
                <span className="font-medium text-gray-900">+1 844 821 9675‬‬</span> or{" "}
                <a href="mailto:admin@semaswiss.com " className="text-sema-red hover:underline">
                  admin@semaswiss.com 
                </a>. Include your order number, reason for the return, and the product name.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Semaswiss reserves the right to deny a return that does not arrive in the original condition it was shipped or if the products appear to be tampered with or opened.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Once the returned product is received and approved by our Semaswiss team, your purchase price will be refunded to your original method of payment.
              </p>

              <div className="bg-gray-50 p-6 md:p-8 rounded-lg mb-8">
                <p className="text-gray-900 font-semibold mb-2">Address for Returns:</p>
                <p className="text-gray-600 mb-1">Nobleza-LLC</p>
                <p className="text-gray-600 mb-1">30 N Gould St Ste R</p>
                {/* <p className="text-gray-600 mb-1">Building 4-A</p> */}
                <p className="text-gray-600">Sheridan, WY 82801</p>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Lost Packages
              </h2>
              <p className="text-gray-600 leading-relaxed">
                In the rare case your package is lost in transit, Semaswiss will reship your prescription or non-prescription order. We will work with your carrier (USPS, FedEx, UPS) to locate your package and have it redirected if needed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Occasionally, weather or carrier delays may extend delivery times. Since we do not ship refrigerated products, your product will not be affected by increased transit time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                If your package is lost in transit or does not arrive at the shipping address you provided, please contact our patient care team at{" "}
                <span className="font-medium text-gray-900">+1 844 821 9675‬‬</span> or{" "}
                <a href="mailto:admin@semaswiss.com " className="text-sema-red hover:underline">
                  admin@semaswiss.com 
                </a>.
              </p>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
