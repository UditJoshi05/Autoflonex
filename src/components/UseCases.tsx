import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const useCases = [
    {
        title: 'Lead Capture & Enrichment',
        scenario: 'Lead Form → CRM Entry → LinkedIn Enrichment → Customized Email Draft',
        tag: 'Growth'
    },
    {
        title: 'Intelligent Support Agent',
        scenario: 'Incoming Ticket → AI Knowledge Base Check → Draft Response → Slack Notification',
        tag: 'Support'
    },
    {
        title: 'Automated Operations Reporting',
        scenario: 'Pull Data (Ads, Stripe, Analytics) → Compile Report → Slack/Email to Founders',
        tag: 'Operations'
    },
    {
        title: 'Internal Ops Workflows',
        scenario: 'New Hire Form → Account Creation → Welcome Email → Task Assignment',
        tag: 'HR'
    }
]

export default function UseCases() {
    return (
        <section className="section-container bg-dark-section">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Example <span className="gradient-text">Use Cases</span>
                    </motion.h2>
                    <p className="text-lg text-neutral-400">Real-world scenarios we automate every day.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {useCases.map((item, index) => (
                        <motion.div
                            key={index}
                            className="bg-neutral-900 p-6 rounded-xl border border-neutral-800 shadow-sm hover:border-primary-blue hover:shadow-lg hover:shadow-blue-900/10 transition-all group"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-neutral-800 text-neutral-300 text-xs font-semibold rounded-full uppercase tracking-wide border border-neutral-700">
                                    {item.tag}
                                </span>
                                <ArrowRight className="w-5 h-5 text-neutral-500 group-hover:text-primary-blue transition-colors" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                            <p className="text-neutral-400 font-mono text-sm bg-black/50 p-3 rounded-lg border border-neutral-800">
                                {item.scenario}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
