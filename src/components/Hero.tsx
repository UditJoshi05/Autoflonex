import { motion } from 'framer-motion'
import { Suspense, lazy } from 'react'
import { ArrowRight } from 'lucide-react'

const Scene3D = lazy(() => import('./Scene3D'))

export default function Hero() {
    return (
        <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-hero-gradient">
            {/* 3D Background - simplified and subtle */}
            <div className="absolute inset-0 opacity-60 mix-blend-screen pointer-events-none">
                <Suspense fallback={null}>
                    <Scene3D />
                </Suspense>
            </div>

            <div className="section-container relative z-10 flex flex-col items-center text-center">

                {/* Badge/Pill - Updated to Tech Style */}
                <motion.div
                    className="inline-flex items-center gap-2 px-3 py-1 rounded border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-mono tracking-wide uppercase mb-8 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span>✨ Intelligent Automation</span>
                </motion.div>

                <motion.h1
                    className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 max-w-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    Powering Automation with <span className="gradient-text">Intelligence</span>
                </motion.h1>

                <motion.p
                    className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-10 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    AutoFlonex designs AI-powered workflows that remove manual work, streamline operations, and help businesses scale efficiently.
                </motion.p>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <a href="#scheduler" className="btn-primary flex items-center gap-2 group">
                        Book a $99 Automation Audit
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a href="#process" className="btn-secondary">
                        How It Works
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
