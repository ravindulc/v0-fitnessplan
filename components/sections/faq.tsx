'use client'

import { motion } from 'framer-motion'
import { SECTION_IDS, FAQ_ITEMS } from '@/lib/constants'
import { trackFAQExpand } from '@/lib/analytics'
import { SectionWrapper } from '@/components/shared/section-wrapper'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

export function FAQ() {
  const handleValueChange = (value: string) => {
    if (value) {
      const question = FAQ_ITEMS.find((_, index) => `item-${index}` === value)?.question
      if (question) {
        trackFAQExpand(question)
      }
    }
  }

  return (
    <SectionWrapper id={SECTION_IDS.faq} className="bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-sm font-mono text-primary mb-4"
          >
            QUESTIONS ANSWERED
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance"
          >
            Frequently Asked Questions
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Everything you need to know before you start building.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Accordion 
            type="single" 
            collapsible 
            className="w-full"
            onValueChange={handleValueChange}
          >
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-border"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  <span className="flex items-start gap-4">
                    <span className="font-mono text-xs text-primary shrink-0 mt-1">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="font-medium">{item.question}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pl-10 pr-4 leading-relaxed">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Additional help */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Still have questions?{' '}
            <a href="mailto:jax@architect.fitness" className="text-primary hover:underline">
              Send me an email
            </a>
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
