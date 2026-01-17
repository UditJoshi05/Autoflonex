import { motion } from 'framer-motion'
import { Code2, Cpu, LineChart, ShieldCheck } from 'lucide-react'
import { Suspense, lazy } from 'react'

const AutomationCore = lazy(() => import('./AutomationCore'))
const ContactStars = lazy(() => import('./ContactStars'))

export default function About() {
    return (
        <section id="about" className="section-container bg-neutral-950 border-t border-neutral-900 overflow-hidden relative">
            {/* Background Glow & Stars */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <Suspense fallback={null}>
                <ContactStars />
            </Suspense>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Text & Values */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
                                The DNA of <br />
                                <span className="gradient-text">Intelligent Automation</span>
                            </h2>
                            <p className="text-lg text-neutral-400 mb-10 leading-relaxed">
                                AutoFlonex wasn't built to just "connect apps." We are a collective of engineers and architects redefining how businesses operate.
                                We treat automation as critical infrastructure—robust, scalable, and intelligent.
                            </p>
                        </motion.div>

                        {/* Bento Grid of Values */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                {
                                    icon: Code2,
                                    title: "Engineering Grade",
                                    desc: "Built with error handling, versioning, and rigorous testing.",
                                    color: "border-purple-500/30 bg-purple-500/5"
                                },
                                {
                                    icon: Cpu,
                                    title: "AI Native",
                                    desc: "Workflows that think, decide, and adapt using LLMs.",
                                    color: "border-blue-500/30 bg-blue-500/5"
                                },
                                {
                                    icon: LineChart,
                                    title: "Measurable ROI",
                                    desc: "We track time saved and efficiency gained for every flow.",
                                    color: "border-cyan-500/30 bg-cyan-500/5"
                                },
                                {
                                    icon: ShieldCheck,
                                    title: "Secure by Design",
                                    desc: "Enterprise-grade security and data privacy standards.",
                                    color: "border-emerald-500/30 bg-emerald-500/5"
                                }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className={`p-5 rounded-xl border ${item.color} backdrop-blur-sm hover:border-white/20 transition-all cursor-crosshair group`}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                >
                                    <item.icon className="w-8 h-8 text-white mb-3 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                                    <h3 className="text-white font-bold mb-1">{item.title}</h3>
                                    <p className="text-sm text-neutral-400">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: 3D Core Interaction */}
                    <motion.div
                        className="hidden lg:flex items-center justify-center relative h-[600px] w-full"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        {/* The 3D Component */}
                        <div className="absolute inset-0 z-10">
                            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-neutral-600">Loading Core...</div>}>
                                <AutomationCore />
                            </Suspense>
                        </div>

                        {/* Decorative Rings - Simple CSS Animation */}
                        <div className="absolute w-[400px] h-[400px] border border-neutral-800 rounded-full opacity-30 animate-spin" style={{ animationDuration: '20s' }} />
                        <div className="absolute w-[550px] h-[550px] border border-neutral-800 rounded-full opacity-20 animate-spin" style={{ animationDuration: '30s', animationDirection: 'reverse' }} />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
