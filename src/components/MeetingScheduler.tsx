import { useEffect } from 'react'

export default function MeetingScheduler() {
    useEffect(() => {
        // Load Calendly script
        const script = document.createElement('script')
        script.src = 'https://assets.calendly.com/assets/external/widget.js'
        script.async = true
        document.body.appendChild(script)

        return () => {
            document.body.removeChild(script)
        }
    }, [])

    return (
        <section id="scheduler" className="section-container bg-neutral-900 border-t border-neutral-800">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                    Book Your <span className="gradient-text">Automation Audit</span>
                </h2>
                <p className="text-neutral-400 mb-12">
                    Schedule a 30-minute consultation to discover automation opportunities in your business
                </p>

                {/* Calendly Inline Widget Wrapper */}
                <div className="rounded-xl overflow-hidden border border-neutral-800 shadow-2xl bg-black">
                    <div
                        className="calendly-inline-widget min-w-[320px] h-[700px] w-full"
                        style={{ backgroundColor: 'black' }}
                        data-url="https://calendly.com/autoflonex/30min?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=8b5cf6"
                    />
                </div>

                <p className="mt-8 text-sm text-neutral-500">
                    No obligation. Practical insights only.
                </p>
            </div>
        </section>
    )
}
