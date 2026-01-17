import { motion } from 'framer-motion'
import { CalendarCheck } from 'lucide-react'

export default function CTASection() {
    return (
        <section className="bg-neutral-950 text-white py-24 border-t border-neutral-900">
            <div className="section-container !py-0 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="inline-block p-1 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 mb-6 border border-purple-500/20">
                        <div className="px-4 py-1 rounded-full bg-neutral-900 text-sm font-medium text-purple-300">
                            Ready to scale?
                        </div>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
                        Start with a Simple Automation Audit
                    </h2>
                    <p className="text-xl text-neutral-400 max-w-2xl mx-auto mb-10">
                        For just $99, we'll analyze your current workflows and identify the highest-impact automation opportunities for your business. Low risk, high ROI.
                    </p>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <a href="#scheduler" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-purple hover:bg-purple-500 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all">
                            <CalendarCheck className="w-5 h-5" />
                            Schedule My Audit
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
