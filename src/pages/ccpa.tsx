import Header from "@/components/header";
import Footer from "@/components/footer";

export default function CcpaPage() {
  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />

      <main className="pt-0 pb-16">
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none space-y-6">
              
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-200">
                CCPA Opt-Out
              </h1>

              <p className="text-gray-600 mb-6 leading-relaxed">
                This California Privacy Notice (“Notice”) is in addition to, and incorporated into, the Privacy Policy of Semaswiss and its owners and affiliates (collectively, “we,” “us,” or “our”) and applies to personal information that we collect online or offline from California residents (“consumers” or “you” or “your”).
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Information We Collect
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We have collected the following categories of personal information from consumers within the last twelve (12) months:
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-200 text-sm text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border px-4 py-2 text-left w-1/3">Category</th>
                      <th className="border px-4 py-2 text-left">Examples</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-4 py-2">A. Identifiers and Contact Information</td><td className="border px-4 py-2">Your name, postal address, telephone number, or email address.</td></tr>
                    <tr><td className="border px-4 py-2">B. Medical and Financial Information</td><td className="border px-4 py-2">Your credit card, debit card, or health plan.</td></tr>
                    <tr><td className="border px-4 py-2">C. Protected Classifications</td><td className="border px-4 py-2">Age, gender, race, medical condition, disability.</td></tr>
                    <tr><td className="border px-4 py-2">D. Commercial Information</td><td className="border px-4 py-2">Records of products or services you have purchased.</td></tr>
                    <tr><td className="border px-4 py-2">E. Internet or Other Network Activity</td><td className="border px-4 py-2">Browsing history, search history, or interaction with our website.</td></tr>
                    <tr><td className="border px-4 py-2">F. Geolocation Data</td><td className="border px-4 py-2">Your physical location or movements.</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Use of Personal Information
              </h2>
              <ul className="list-disc pl-6 md:pl-8 text-gray-600 mb-8 space-y-2">
                <li>To provide our products and services, such as to process drug claims and fulfill orders.</li>
                <li>To provide patient care and customer service, respond to inquiries, and maintain your account.</li>
                <li>To analyze and improve our products and services.</li>
                <li>For marketing, such as providing email alerts about products or services.</li>
                <li>To maintain the security of our products, services, and systems.</li>
                <li>To ensure proper website functionality, including debugging and fixing errors.</li>
                <li>To comply with our legal obligations.</li>
                <li>To protect our rights, property, and safety or those of others.</li>
              </ul>
              <p className="text-gray-600 mb-6 leading-relaxed">We do not sell your personal information.</p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Sharing of Personal Information
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We may share personal information with third parties for business purposes, such as with pharmacies, marketing partners, advertising networks, and service providers. These parties are required to protect and use your information only for limited business purposes.
              </p>

              <div className="overflow-x-auto mb-8">
                <table className="min-w-full border border-gray-200 text-sm text-gray-700">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="border px-4 py-2 text-left w-1/3">Category</th>
                      <th className="border px-4 py-2 text-left">Third Parties</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border px-4 py-2">A. Identifiers and Contact Information</td><td className="border px-4 py-2">Service providers, pharmacies, healthcare providers, product distributors, social networks, marketing partners, clients.</td></tr>
                    <tr><td className="border px-4 py-2">B. Medical and Financial Information</td><td className="border px-4 py-2">Service providers, pharmacies, healthcare providers, product distributors, marketing partners, clients.</td></tr>
                    <tr><td className="border px-4 py-2">C. Protected Classifications</td><td className="border px-4 py-2">Service providers, healthcare providers, product distributors, clients.</td></tr>
                    <tr><td className="border px-4 py-2">D. Commercial Information</td><td className="border px-4 py-2">Service providers.</td></tr>
                    <tr><td className="border px-4 py-2">E. Internet or Network Activity</td><td className="border px-4 py-2">Service providers.</td></tr>
                    <tr><td className="border px-4 py-2">F. Geolocation Data</td><td className="border px-4 py-2">Service providers.</td></tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Your Rights and Choices
              </h2>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Right to Know</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                You have the right to know what categories of personal information we have collected about you in the past 12 months, including sources, purposes, and the parties with whom we share it.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Right to Delete</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                You have the right to request deletion of your personal information, subject to certain exceptions.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Right to Opt-Out</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                You have the right to opt-out of the sale of your personal information. We do not sell personal information.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Right to Non-Discrimination</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                You have the right not to be discriminated against for exercising any of your privacy rights.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">
                Submitting Requests to Know or Delete
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                You can submit a request by emailing us at <a href="mailto:support@semaswiss.com" className="text-sema-red hover:underline">support@semaswiss.com</a> or visiting <a href="https://semaswiss.com/contact-us" className="text-sema-red hover:underline">semaswiss.com/contact-us</a>.
              </p>

              <p className="text-gray-600 mb-4 leading-relaxed">
                We may verify your identity before processing your request. Authorized agents may act on your behalf with proper documentation.
              </p>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-8">Response Timing</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We will confirm receipt of your request within 10 business days and provide updates on processing, verification, and expected response time.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Changes to Our Privacy Notice
              </h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We may change this Notice at any time. However, we will not use personal information already collected for new purposes without your explicit consent.
              </p>

              <h2 className="text-2xl font-semibold text-gray-900 mb-4 mt-10">
                Contact Information
              </h2>
              <div className="bg-gray-50 p-6 md:p-8 rounded-lg mb-8">
                <p className="text-gray-900 font-semibold mb-2">Semaswiss Privacy Team</p>
                <p className="text-gray-600 mb-1">Email: <a href="mailto:support@semaswiss.com" className="text-sema-red hover:underline">support@semaswiss.com</a></p>
                <p className="text-gray-600">Address: 7901 4th St. N STE 300, St Petersburg, FL, 33702</p>
              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
