import { Linkedin, Mail, Instagram } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-black border-t border-neutral-900 pt-20 pb-10">
            <div className="section-container !py-0">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="col-span-1 md:col-span-1">
                        <a href="#" className="flex items-center gap-2 mb-6 h-8">
                            <img src="/logo.png" alt="AutoFlonex" className="h-full w-auto opacity-90 hover:opacity-100 transition-opacity object-contain" />
                        </a>
                        <p className="text-neutral-500 mb-6">
                            Engineering intelligence into your business operations.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/autoflonex/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#0077b5] transition-colors"><Linkedin className="w-5 h-5" /></a>
                            <a href="https://www.instagram.com/autoflonex?igsh=MXJkaWt4Y2dobjRqZQ==" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-[#E4405F] transition-colors"><Instagram className="w-5 h-5" /></a>
                            <a href="mailto:autoflonex@gmail.com" className="text-neutral-500 hover:text-white transition-colors"><Mail className="w-5 h-5" /></a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h4 className="font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" className="hover:text-primary-purple transition-colors">Workflow Audits</a></li>
                            <li><a href="#" className="hover:text-primary-purple transition-colors">CRM Automation</a></li>
                            <li><a href="#" className="hover:text-primary-purple transition-colors">AI Agents</a></li>
                            <li><a href="#" className="hover:text-primary-purple transition-colors">Custom Integrations</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" className="hover:text-primary-purple transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-primary-purple transition-colors">Process</a></li>
                            <li><a href="#" className="hover:text-primary-purple transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-primary-purple transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Legal</h4>
                        <ul className="space-y-4 text-sm text-neutral-500">
                            <li><a href="#" className="hover:text-primary-purple transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary-purple transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-600">
                    <p>&copy; {new Date().getFullYear()} AutoFlonex. All rights reserved.</p>
                    <div className="flex gap-2 items-center">
                        <Mail className="w-4 h-4" />
                        <a href="mailto:autoflonex@gmail.com" className="hover:text-white transition-colors">autoflonex@gmail.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
