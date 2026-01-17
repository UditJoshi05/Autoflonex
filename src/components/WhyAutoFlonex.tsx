import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const reasons = [
    "Engineering-led automation built for scale",
    "AI-enhanced decision making, not just simple triggers",
    "Flexible integrations with your entire tech stack",
    "Designed for security and data privacy",
    "Clear ROI tracking and efficiency gains",
    "No-code / Low-code handover options"
]

export default function WhyAutoFlonex() {
    return (
        <section id="why-us" className="section-container bg-dark-section">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* Left Side: Content */}
                <div>
                    <motion.h2
                        className="text-3xl md:text-5xl font-bold mb-6 text-white"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        Why <span className="gradient-text">AutoFlonex?</span>
                    </motion.h2>

                    <motion.p
                        className="text-lg text-neutral-400 mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        We don't just zap data from A to B. We build intelligent, robust business systems that function like software but move at the speed of no-code.
                    </motion.p>

                    <div className="space-y-4">
                        {reasons.map((reason, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-3"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 + (index * 0.05) }}
                            >
                                <CheckCircle2 className="w-6 h-6 text-primary-purple flex-shrink-0 mt-0.5" />
                                <span className="text-neutral-300 font-medium">{reason}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Animated Metric Card */}
                <motion.div
                    className="relative h-[400px] rounded-xl overflow-hidden flex items-center justify-center group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    {/* Animated Gradient Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-neutral-900 to-blue-900/40 animated-gradient border border-white/10 rounded-xl" />

                    {/* Glowing Orb Effect */}
                    <motion.div
                        className="absolute w-64 h-64 bg-primary-purple/20 rounded-full blur-[80px]"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                    <div className="text-center p-8 relative z-10 backdrop-blur-sm bg-neutral-900/30 rounded-2xl border border-white/10 py-12 px-10 shadow-2xl">
                        <motion.div
                            className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-2"
                            animate={{
                                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity
                            }}
                            style={{ backgroundSize: '200% auto' }}
                        >
                            10x
                        </motion.div>
                        <div className="text-white font-medium text-xl tracking-wide uppercase">Efficiency Gains</div>
                        <div className="mt-4 text-sm text-neutral-400">Average client impact</div>
                    </div>
                </motion.div>

            </div>
        </section>
    )
}
