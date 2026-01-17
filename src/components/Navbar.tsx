import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowRight } from 'lucide-react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 pointer-events-none"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div
                className={`pointer-events-auto flex items-center justify-between gap-6 pl-5 pr-3 h-14 rounded-full border transition-all duration-500 ease-out
        ${scrolled
                        ? 'bg-neutral-950/40 border-neutral-800/50 backdrop-blur-md shadow-xl shadow-purple-900/10'
                        : 'bg-neutral-900/0 border-transparent backdrop-blur-none'
                    }`}
            >

                {/* Logo Integration - Constrained but Visible */}
                <a href="#" className="flex items-center gap-3 pr-6 border-r border-white/10 opacity-100 hover:opacity-80 transition-opacity h-full">
                    <img src="/logo.png" alt="AutoFlonex" className="h-full w-auto py-1 object-contain" />
                </a>

                {/* Links with Updated Hover Effect */}
                <div className="hidden md:flex items-center gap-1">
                    {[
                        ['Services', '#services'],
                        ['Process', '#process'],
                        ['Why Us', '#why-us'],
                        ['About', '#about']
                    ].map(([label, href]) => (
                        <a
                            key={label}
                            href={href}
                            className="relative px-4 py-2 text-sm font-medium text-neutral-300 hover:text-white rounded-full transition-all group overflow-hidden"
                        >
                            <span className="relative z-10">{label}</span>
                            {/* New Hover Effect: Purple Glow Background */}
                            <span className="absolute inset-0 bg-primary-purple/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-full blur-md" />
                            <span className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                        </a>
                    ))}
                </div>

                {/* Gradient CTA Button */}
                <a
                    href="#scheduler"
                    className="group relative flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-bold shadow-lg shadow-violet-900/30 overflow-hidden transition-all hover:scale-105 hover:shadow-violet-700/50"
                >
                    {/* Animated Sheen Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />

                    <span className="relative z-10">Book Audit</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>

            </div>
        </motion.div>
    )
}
