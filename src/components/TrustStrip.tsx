import { motion } from 'framer-motion'
import { ShieldCheck, Zap, Layers, BarChart3 } from 'lucide-react'

const trustItems = [
    { icon: Layers, text: "Built for real business workflows" },
    { icon: Zap, text: "AI-first automation approach" },
    { icon: ShieldCheck, text: "Secure & scalable by design" },
    { icon: BarChart3, text: "Custom systems, not templates" }
]

export default function TrustStrip() {
    return (
        <section className="border-y border-neutral-800 bg-neutral-900/50 py-8">
            <div className="section-container !py-0">
                <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-80">
                    {trustItems.map((item, index) => (
                        <motion.div
                            key={index}
                            className="flex items-center gap-2 text-sm md:text-base font-medium text-neutral-400 hover:text-white transition-colors"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <item.icon className="w-5 h-5 text-primary-purple" />
                            <span>{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
