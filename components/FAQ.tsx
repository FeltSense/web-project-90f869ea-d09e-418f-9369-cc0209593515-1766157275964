'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: '🤖 How does the AI recipe generation work?',
    answer: 'Our advanced AI analyzes your preferences, dietary restrictions, and available ingredients to generate personalized recipes. The system uses machine learning to understand flavor combinations and cooking techniques, creating unique recipes tailored specifically to your needs. Each recipe is optimized for taste, nutrition, and ease of preparation.'
  },
  {
    id: 2,
    question: '🥗 Can I specify dietary preferences?',
    answer: 'Absolutely! You can set multiple dietary preferences including vegetarian, vegan, gluten-free, keto, paleo, dairy-free, and more. The AI takes these into account when generating recipes and will never suggest ingredients that conflict with your preferences. You can also exclude specific ingredients you dislike.'
  },
  {
    id: 3,
    question: '🛒 What if I have specific ingredients I want to use?',
    answer: 'You can input any ingredients you have on hand, and our AI will create recipes using those ingredients. This is perfect for using up items in your pantry or incorporating specific proteins and vegetables you want to cook with. Our smart algorithm finds creative ways to combine your ingredients.'
  },
  {
    id: 4,
    question: '📊 How accurate are the nutritional values?',
    answer: 'Our nutritional information is based on USDA data and regularly updated databases. While we strive for accuracy, exact values may vary based on brand and preparation method. We recommend consulting a nutritionist for precise dietary tracking. All values are clearly labeled with their sources.'
  },
  {
    id: 5,
    question: '❤️ Can I save my favorite recipes?',
    answer: 'Yes! Create an account to save unlimited recipes to your personal collection. You can organize them by category, add notes, rate recipes, and access them anytime from any device. Your saved recipes sync across all your devices automatically.'
  },
  {
    id: 6,
    question: '📱 Is there a mobile app available?',
    answer: 'Our web application is fully responsive and works seamlessly on mobile devices. We are currently developing native iOS and Android apps for an even better mobile experience with offline access and push notifications for meal reminders.'
  },
  {
    id: 7,
    question: '👥 Can I share recipes with friends?',
    answer: 'Yes! Each recipe has a shareable link that you can send to friends via email, text, or social media. They can view the recipe, nutritional information, and save it to their own collection if they have an account. You can also create shared meal plans with family.'
  },
  {
    id: 8,
    question: '🔄 How often is the recipe database updated?',
    answer: 'Our AI continuously learns and generates new recipes. We add seasonal recipes, trending ingredients, and user-requested variations regularly to keep content fresh and relevant. New recipes are generated daily based on trending ingredients and seasonal availability.'
  }
];

interface AccordionItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: (id: number) => void;
}

function AccordionItem({ item, isOpen, onToggle }: AccordionItemProps): JSX.Element {
  return (
    <motion.div
      className="border border-gray-700 rounded-lg overflow-hidden hover:border-emerald-500 transition-colors duration-300 group"
      initial={false}
    >
      <button
        onClick={() => onToggle(item.id)}
        className="w-full px-6 py-4 flex items-center justify-between bg-gray-900 hover:bg-gray-800 transition-colors duration-200 group-hover:bg-gray-800"
      >
        <h3 className="text-left text-lg font-semibold text-white">
          {item.question}
        </h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-purple-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 py-4 bg-gray-800 border-t border-gray-700">
              <p className="text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ(): JSX.Element {
  const [openIds, setOpenIds] = useState<number[]>([]);

  const toggleAccordion = (id: number): void => {
    setOpenIds(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-teal-500/30 border border-emerald-500/50 mb-6 hover:border-emerald-400/80 transition-colors">
            <HelpCircle className="w-4 h-4 text-emerald-300 animate-bounce" />
            <span className="text-sm font-semibold text-emerald-300">❓ Questions? We Have Answers</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Get answers to common questions about our AI-powered recipe generation, meal planning, and personalization features
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <AccordionItem
                item={item}
                isOpen={openIds.includes(item.id)}
                onToggle={toggleAccordion}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gradient-to-br from-emerald-500/20 via-teal-500/15 to-cyan-500/20 border border-emerald-400/50 rounded-2xl text-center shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20 transition-all"
        >
          <h3 className="text-2xl font-bold text-white mb-2">
            ✨ Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Can't find the answer you're looking for? Our dedicated support team is available 24/7 to help you get the most out of your AI-powered cooking experience.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95">
            📧 Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}