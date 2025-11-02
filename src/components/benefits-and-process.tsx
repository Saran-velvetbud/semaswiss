import questionnaireImage from '@assets/generated_images/Medical_questionnaire_smartphone_interface_ef4973b9.png';
import doctorsImage from '@assets/generated_images/Doctors_reviewing_weight_loss_treatment_f34fb486.png';
import deliveryImage from '@assets/generated_images/Small_discreet_unbranded_package_delivery_2a107366.png';
import { Button } from "@/components/ui/button";

export default function BenefitsAndProcess() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          
          {/* Industry Best Pricing */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Industry Best Pricing</h3>
            <p className="text-sm text-gray-600">
              One Low Price. Everything Included. 
              No insurance Needed.
            </p>
          </div>

          {/* No Price Increases */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Price Increases</h3>
            <p className="text-sm text-gray-600">
              Same Price for ALL Dosages. No 
              membership or hidden fees ever.
            </p>
          </div>

          {/* Fast & Easy Process */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast & Easy Process.</h3>
            <p className="text-sm text-gray-600">
              100% Online. As little as 3-5 Business 
              Day Delivery. Free Overnight Cold 
              Shipping.
            </p>
          </div>

          {/* Trusted Clinical Care */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-sema-red" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Trusted Clinical Care.</h3>
            <p className="text-sm text-gray-600">
              US Licensed Doctors
            </p>
          </div>
        </div>

        {/* Weight Loss GLP-1 Section */}
        <div id="semaglutide-treatment" className="text-center mb-16 pt-20">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Weight Loss - <span className="text-sema-red">GLP-1</span>
          </h2>
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-8">
            Semaglutide - Personalized Weight Loss Care from Home
          </h3>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-sema-red/5 rounded-2xl p-8 mb-8 border border-sema-red/20">
              <p className="text-lg font-semibold text-gray-800">
                ✔ Includes labs, physician visits, prescription, & coaching.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-6 h-6 bg-sema-red rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">100% discreet, online consultation</span>
              </div>
              
              <div className="flex items-center space-x-3 text-left">
                <div className="w-6 h-6 bg-sema-red rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">U.S. board certified physicians</span>
              </div>
              
              <div className="flex items-center space-x-3 text-left">
                <div className="w-6 h-6 bg-sema-red rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Trusted medications, money back guarantee</span>
              </div>
              
              <div className="flex items-center space-x-3 text-left">
                <div className="w-6 h-6 bg-sema-red rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Affordable pricing, no insurance required</span>
              </div>
              
              <div className="flex items-center space-x-3 text-left">
                <div className="w-6 h-6 bg-sema-red rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">Fast shipping</span>
              </div>
            </div>
          </div>
        </div>

        {/* What is GLP-1 Medication Section */}
        <div id="glp-1-medication" className="mb-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-8 text-center">
              What is <span className="text-sema-red">GLP-1</span> Medication?
            </h2>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  GLP-1 medication is a prescription treatment prescribed for weight loss and Type 2 Diabetes. It belongs to a class of drugs called glucagon-like peptide-1 (GLP-1) receptor agonists. It mimics the action of natural GLP-1, a hormone that stimulates the release of insulin and reduces the amount of glucose produced by the liver. This helps lower blood sugar levels in people with diabetes.
                </p>
                
                <p className="text-gray-700 leading-relaxed">
                  GLP-1 therapy also reduces the speed at which food passes through the digestive system. GLP-1 treatment prolongs digestion, helping to maintain your feeling of fullness for a longer period. Therefore, when you take GLP-1 injections, you feel fuller faster and are less likely to overeat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Three Step Process Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
            Getting weight loss prescription in <span className="text-sema-red">3</span><br />
            <span className="text-sema-red">easy steps</span>
          </h2>
          <p className="text-gray-600 text-xl font-medium">Affordable, easy to use and at your fingertips</p>
        </div>
        {/* three step process section */}

        {/* Three Step Layout - Redesigned with Red Theme */}
        <div className="relative max-w-7xl mx-auto">
          {/* Background decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-50 via-white to-red-50 rounded-3xl -z-10"></div>
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-sema-red/10 rounded-full blur-2xl -z-10"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-sema-red/5 rounded-full blur-3xl -z-10"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start py-16 px-8">
            
            {/* Step 1 - Left */}
            <div className="relative group">
              {/* Card background */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sema-red/20">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl transform group-hover:scale-110 transition-transform duration-500 ring-4 ring-white ring-offset-4 ring-offset-sema-red/10">
                      <img
                        src={questionnaireImage}
                        alt="Person using laptop for medical questionnaire"
                        className="w-full h-full object-cover"
                        data-testid="img-step1-questionnaire"
                      />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-sema-red to-red-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg">
                      1
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight">
                    Take the health questionnaire
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Complete a short assessment of your medical history.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 - Center */}
            <div className="relative group">
              {/* Card background */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sema-red/20">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl transform group-hover:scale-110 transition-transform duration-500 ring-4 ring-white ring-offset-4 ring-offset-sema-red/10">
                      <img
                        src={doctorsImage}
                        alt="Medical provider reviewing patient responses"
                        className="w-full h-full object-cover"
                        data-testid="img-step2-provider"
                      />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-sema-red to-red-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg">
                      2
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight">
                    DOCTOR REVIEW
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    A licensed physician will review your answers and prescribe the appropriate treatment.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 - Right */}
            <div className="relative group">
              {/* Card background */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-sema-red/20">
                <div className="flex flex-col items-center text-center mb-6">
                  <div className="relative mb-6">
                    <div className="w-48 h-48 rounded-full overflow-hidden shadow-xl transform group-hover:scale-110 transition-transform duration-500 ring-4 ring-white ring-offset-4 ring-offset-sema-red/10">
                      <img
                        src={deliveryImage}
                        alt="GLP-1 medication package delivery"
                        className="w-full h-full object-cover"
                        data-testid="img-step3-delivery"
                      />
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-sema-red to-red-600 text-white rounded-full flex items-center justify-center text-xl font-black shadow-lg">
                      3
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-black text-gray-900 mb-4 leading-tight">
                    Receive your Medication
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    Fast free delivery from our accredited pharmacies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}