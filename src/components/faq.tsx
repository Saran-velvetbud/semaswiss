import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "What Are GLP-1 Medications?",
      answer: "GLP-1 medications are a class of prescription drugs that not only improves blood sugar control but may also lead to weight loss. This class of drugs is commonly called glucagon-like peptide 1 (GLP-1) agonists. Weight loss can vary, depending on which GLP-1 drug you use and the dosage.Some of the more common side effects include:Nausea, Vomiting, Diarrhea.Side effects can often be mitigated by correctly titrating your dosage upward, so you’ll want to ensure that you are taking the medication exactly as prescribed by your provider to minimize risk and/ or severity of side effects.Anti - nausea medications such as ondansetron (generic Zofran) are also helpful to assist in mitigating nausea.Low blood sugar levels(hypoglycemia) are a more serious risk linked to the GLP - 1 class of drugs.But the risk of low blood sugar levels often only goes up if you’re also taking another drug known to lower blood sugar at the same time, such as sulfonylureas or insulin.The GLP - 1 class of drugs isn’t recommended if you have a personal or family history of medullary thyroid cancer or multiple endocrine neoplasia.Lab studies have linked these drugs with thyroid tumors in rats.But until more long - term studies are done, the risk to humans isn’t known.The GLP - 1 class of drugs is also not recommended if you’ve had pancreatitis.",
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
// {
//   question: "Can I take a dosage that I've already been on if I'm switching to you from another doctor?",
//     answer: "Please discuss your previous prescription and dosage with your provider during your medical intake process when enrolling and if medically appropriate, your provider will coordinate your dosage accordingly.",
//       value: "item-10"
// },
// {
//   question: "Is this treatment covered by insurance?",
//     answer: "Our compounded medications are not typically covered by insurance, but our pricing is designed to be more affordable than brand-name alternatives, even without insurance coverage.",
//       value: "item-11"
// }
  ];

return (
  <section id="faq" data-testid="faq-section" className="py-16 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 data-testid="text-section-title" className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600">Get answers to common questions about our treatments</p>
      </div>

      <Accordion data-testid="accordion-faq" type="single" collapsible className="space-y-6">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={faq.value}
            value={faq.value}
            data-testid={`faq-item-${index + 1}`}
            className="bg-white rounded-lg shadow-sm border border-gray-200"
          >
            <AccordionTrigger
              data-testid={`faq-trigger-${index + 1}`}
              className="px-6 py-4 text-left font-medium text-gray-900 hover:bg-gray-50 transition-colors"
            >
              {faq.question}
            </AccordionTrigger>
            <AccordionContent
              data-testid={`faq-content-${index + 1}`}
              className="px-6 pb-4 text-gray-600"
            >
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);
}
