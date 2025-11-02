import Header from "@/components/header";
import Footer from "@/components/footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      question: "What Are GLP-1 Medications?",
      answer: "GLP-1 medications are a class of prescription drugs that not only improves blood sugar control but may also lead to weight loss. This class of drugs is commonly called glucagon-like peptide 1 (GLP-1) agonists. Weight loss can vary, depending on which GLP-1 drug you use and the dosage. Some of the more common side effects include: Nausea, Vomiting, Diarrhea. Side effects can often be mitigated by correctly titrating your dosage upward, so you'll want to ensure that you are taking the medication exactly as prescribed by your provider to minimize risk and/or severity of side effects. Anti-nausea medications such as ondansetron (generic Zofran) are also helpful to assist in mitigating nausea. Low blood sugar levels (hypoglycemia) are a more serious risk linked to the GLP-1 class of drugs. But the risk of low blood sugar levels often only goes up if you're also taking another drug known to lower blood sugar at the same time, such as sulfonylureas or insulin. The GLP-1 class of drugs isn't recommended if you have a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia. Lab studies have linked these drugs with thyroid tumors in rats. But until more long-term studies are done, the risk to humans isn't known. The GLP-1 class of drugs is also not recommended if you've had pancreatitis.",
      value: "item-1"
    },
    {
      question: "How to take GLP-1 medication?",
      answer: "It is important to follow the prescribed doses and directions from your provider accurately in order to minimize risk and/or severity of potential side effects. If you have any questions regarding how to properly take your medication once you receive it, please reach out to us before taking for proper guidance from a licensed medication professional. Taking doses other than what is prescribed by your provider may have unintended and potentially dangerous side effects.",
      value: "item-2"
    },
    {
      question: "What should I do if I miss a dosage?",
      answer: "If you miss a dosage on your day of the week, please reach out to us before continuing your dosage. You may need to lessen your dosage for your next dose in order to minimize risk and/or severity of potential side effects.",
      value: "item-3"
    },
    {
      question: "How should I store GLP-1 medications?",
      answer: "These medications should be stored in the refrigerator between doses. GLP-1 medications are sensitive to temperature and could degrade if not stored properly.",
      value: "item-4"
    },
    {
      question: "When should I take my dose of GLP-1 medication?",
      answer: "You can take GLP-1 medications at any time during the day, without regard to meals. If your dosage is prescribed to take weekly, you should take your dose on the same day each week.",
      value: "item-5"
    },
    {
      question: "Can I take a dosage that I've already been on if I'm switching to you from another doctor?",
      answer: "Please discuss your previous prescription and dosage with your provider during your medical intake process when enrolling and if medically appropriate, your provider will coordinate your dosage accordingly.",
      value: "item-6"
    },
    {
      question: "Is this treatment covered by insurance?",
      answer: "Our compounded medications are not typically covered by insurance, but our pricing is designed to be more affordable than brand-name alternatives, even without insurance coverage.",
      value: "item-7"
    },
    {
      question: "How long does it take to see results?",
      answer: "Most patients begin to see weight loss results within the first 4-8 weeks of treatment. Individual results may vary based on factors such as starting weight, adherence to treatment, diet, and exercise habits.",
      value: "item-8"
    },
    {
      question: "Are there any dietary restrictions while taking GLP-1 medications?",
      answer: "While there are no specific dietary restrictions, we recommend following a balanced, healthy diet to maximize weight loss results. Your healthcare provider may provide specific dietary guidance based on your individual needs.",
      value: "item-9"
    },
    {
      question: "What is the consultation process like?",
      answer: "Our consultation process is simple and convenient. You'll complete an online medical questionnaire, have a virtual consultation with a licensed healthcare provider, and if approved, receive your medication delivered directly to your door.",
      value: "item-10"
    },
    {
      question: "How do I know if I'm a good candidate for GLP-1 treatment?",
      answer: "Good candidates typically have a BMI of 30 or higher, or a BMI of 27 or higher with weight-related health conditions. However, only a licensed healthcare provider can determine if this treatment is right for you based on your medical history and current health status.",
      value: "item-11"
    },
    {
      question: "What should I do if I experience side effects?",
      answer: "If you experience any side effects, especially severe ones, contact our medical team immediately. We can help adjust your dosage or provide guidance on managing side effects. Never stop taking your medication without consulting your healthcare provider first.",
      value: "item-12"
    },
    {
      question: "How often will I need follow-up appointments?",
      answer: "Follow-up frequency depends on your individual treatment plan and progress. Typically, patients have follow-up consultations every 4-8 weeks to monitor progress and adjust treatment as needed.",
      value: "item-13"
    },
    {
      question: "Can I exercise while taking GLP-1 medications?",
      answer: "Yes, exercise is generally safe and recommended while taking GLP-1 medications. Regular physical activity can enhance weight loss results and improve overall health. Always consult with your healthcare provider about appropriate exercise routines.",
      value: "item-14"
    },
    {
      question: "What happens if I need to stop treatment?",
      answer: "If you need to stop treatment for any reason, it's important to do so under medical supervision. Your healthcare provider can help you taper off the medication safely and discuss alternative treatment options if needed.",
      value: "item-15"
    }
  ];

  return (
    <div className="min-h-screen bg-medical-bg">
      <Header />
      
      <main className="pt-20">
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Find answers to common questions about our GLP-1 weight loss treatments, 
                consultation process, and medication management.
              </p>
            </div>

            <div className="space-y-4">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={faq.value}
                    value={faq.value}
                    className="bg-gray-50 rounded-lg border border-gray-200"
                  >
                    <AccordionTrigger className="px-6 py-4 text-left font-semibold text-gray-900 hover:bg-gray-100 transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            <div className="mt-12 text-center">
              <div className="bg-sema-red/5 border border-sema-red/20 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h3>
                <p className="text-gray-600 mb-4">
                  Our medical team is here to help. Contact us for personalized answers to your questions.
                </p>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 bg-sema-red text-white font-medium rounded-md hover:bg-red-600 transition-colors"
                >
                  Contact Our Medical Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
