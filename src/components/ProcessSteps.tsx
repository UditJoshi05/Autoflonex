import { motion } from 'framer-motion'
import { Search, PenTool, Braces, Rocket } from 'lucide-react'

const steps = [
    {
        number: '01',
        title: 'Automation Audit',
        description: 'We analyze your current manual workflows, identify bottlenecks, and uncover high-impact automation opportunities.',
        icon: Search
    },
    {
        number: '02',
        title: 'Workflow & System Design',
        description: 'We architect robust, scalable automation systems tailored specifically to your business logic and goals.',
        icon: PenTool
    },
    {
        number: '03',
        title: 'Automation Build',
        description: 'Our engineers build, test, and refine your custom workflows using industry-leading tools and AI integration.',
        icon: Braces
    },
    {
        number: '04',
        title: 'Deployment & Optimization',
        description: 'We deploy your automation, monitor performance, and continuously optimize to ensure maximum ROI.',
        icon: Rocket
    }
]

export default function ProcessSteps() {
    return (
        <section id="process" className="section-container bg-n8n-gray">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        How <span className="gradient-text">AutoFlonex</span> Works
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Connecting Line (Only visible on desktop) */}
                    <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-neutral-800 -translate-x-1/2" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {/* Content Side */}
                                <div className="flex-1 text-center md:text-left">
                                    <div className={`bg-neutral-900 p-6 rounded-xl border border-neutral-800 shadow-sm ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} justify-center`}>
                                            <span className="text-primary-purple font-bold text-lg">{step.number}</span>
                                            <h3 className="text-xl font-bold text-white">{step.title}</h3>
                                        </div>
                                        <p className="text-neutral-400 leading-relaxed text-sm">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Icon */}
                                <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-neutral-900 border-2 border-primary-purple flex items-center justify-center text-primary-purple shadow-lg shadow-purple-900/20">
                                    <step.icon className="w-5 h-5" />
                                </div>

                                {/* Empty Side for balance */}
                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
