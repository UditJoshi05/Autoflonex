import { motion } from 'framer-motion'
import { Users, FileCog, Bot, BarChart, Network, Workflow } from 'lucide-react'

const services = [
    {
        icon: Users,
        title: 'CRM & Lead Automation',
        description: 'Capture, qualify, and route leads automatically. No more manual data entry or lost opportunities.',
        color: 'text-blue-400'
    },
    {
        icon: FileCog,
        title: 'Internal Operations',
        description: 'Streamline approvals, onboarding, and document processing to reduce bottlenecks.',
        color: 'text-purple-400'
    },
    {
        icon: Bot,
        title: 'AI Agents & Chatbots',
        description: 'Deploy intelligent 24/7 support and internal assistants that handle complex queries.',
        color: 'text-pink-400'
    },
    {
        icon: BarChart,
        title: 'Reporting & Analytics',
        description: 'Auto-compile data from multiple sources into real-time dashboards for founders.',
        color: 'text-indigo-400'
    },
    {
        icon: Network,
        title: 'Tool-to-Tool Integrations',
        description: 'Connect your entire tech stack. We ensure seamless data flow between all your apps.',
        color: 'text-cyan-400'
    },
    {
        icon: Workflow,
        title: 'Custom AI Workflows',
        description: 'Bespoke automation systems designed specifically for your unique business logic.',
        color: 'text-orange-400'
    }
]

export default function ServiceCards() {
    return (
        <section id="services" className="section-container bg-dark-section">
            <div className="mb-16 md:text-center">
                <motion.h2
                    className="text-3xl md:text-5xl font-bold mb-6 text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    What You Can <span className="gradient-text">Automate</span>
                </motion.h2>
                <motion.p
                    className="text-lg text-neutral-400 max-w-2xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    From simple tasks to complex AI decision-making, we build systems that handle it all.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className="card group hover:shadow-lg hover:shadow-purple-900/10 transition-all duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <div className={`p-3 rounded-lg bg-neutral-900 w-fit mb-4 group-hover:bg-neutral-800 transition-colors border border-neutral-800 ${service.color}`}>
                            <service.icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                        <p className="text-neutral-400 leading-relaxed text-sm">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
