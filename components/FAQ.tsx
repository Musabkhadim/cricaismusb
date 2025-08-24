"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
	{
	question: "What is Cricaismus?",
	answer: `Cricaismus is Pakistan's business directory platform that helps local businesses grow online through free listings and high-quality dofollow backlinks.
- Free business listings in relevant categories
- Dofollow backlinks that improve your website's SEO
- Local search visibility for customers in your area
- Contact information display for easy customer reach
`},
	{
  question: "Can I list my business in Cricaismus?",
  answer: "Yes, you can absolutely free list your business in Cricaismus! Cricaismus welcomes all types of businesses to join our growing directory platform. Whether you're a small local business, startup, or established company, you can create your business listing and start benefiting from increased online visibility immediately.",
},

	{
		question: "How can I list my business on Cricaismus?",
		answer:
			"Listing your business on Cricaismus is simple and 100% free. Just go to the “Add Business” button , fill in your business details including Name, Category, Description, Address, Website, and Business Hours etc. then click on Submit. Once submitted, your business will be listed on Cricaismus and start getting visibility online.",
	},
	{
		question: "What types of businesses can be listed on Cricaismus?",
		answer:
			": Cricaismus accepts all  business types including restaurants, retail stores, professional services, automotive repair shops, legal services, healthcare providers, beauty salons, and more. We support both local and online businesses.",
	},
	{
		question: "What are dofollow backlinks and how does Cricaismus provide them?",
		answer:
			"Dofollow backlinks are links that pass SEO authority your website, helping improve your search engine rankings. When you list your business & company on Cricaismus and include your website URL, you receive a High quality dofollow backlink that enhances your online visibility.",
	},
	{
		question: "How can I contact Cricaismus support if I face any problem?",
		answer:
			"If you face any issue while adding or managing your business listing on Cricaismus, you can easily contact our support team. Simply visit the Contact Us page, fill out the form with your query, or email us directly. Our team will respond quickly to help you resolve your problem.",
	},
];

export default function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<section className="w-full max-w-6xl mx-auto px-4 py-16">
			<h2 className="text-3xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
				Frequently Asked Questions
			</h2>

			{/* Grid layout (3 questions per row) */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{faqs.map((faq, index) => (
					<div
						key={index}
						className="border border-gray-200 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-900 shadow-md overflow-hidden"
					>
						<button
							type="button"
							onClick={() => toggleFAQ(index)}
							className="flex justify-between items-center w-full p-5 text-left text-lg font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
						>
							{faq.question}
							<ChevronDown
								className={`w-5 h-5 transform transition-transform duration-300 ${
									openIndex === index ? "rotate-180" : ""
								}`}
							/>
						</button>
						{openIndex === index && (
							<div className="px-5 pb-5 text-gray-600 dark:text-gray-400 text-base leading-relaxed">
								{faq.answer}
							</div>
						)}
					</div>
				))}
			</div>
		</section>
	);
}
