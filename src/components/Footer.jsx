import React, { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [subscribed, setSubscribed] = useState(false);
    const year = new Date().getFullYear();

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (!email) return;
        // placeholder for real subscription logic
        setSubscribed(true);
        setEmail("");
        setTimeout(() => setSubscribed(false), 4000);
    };

    return (
        <footer className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-slate-200">
            <div className="max-w-7xl mx-auto px-6 py-12 sm:py-16">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    {/* Brand / Logo */}
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-lg">
                            <svg
                                className="w-7 h-7 text-white"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                aria-hidden
                            >
                                <path d="M3 12h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                                <path d="M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">Aurora UI</h3>
                            <p className="text-sm text-slate-300">Design-forward React components</p>
                        </div>
                    </div>

                    {/* Links */}
                    <nav className="flex gap-8 flex-wrap">
                        <div>
                            <h4 className="text-sm font-medium text-slate-300 mb-3">Product</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a className="hover:text-white transition-colors" href="#">Features</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Docs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-slate-300 mb-3">Company</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a className="hover:text-white transition-colors" href="#">About</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-sm font-medium text-slate-300 mb-3">Resources</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a className="hover:text-white transition-colors" href="#">Support</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">API</a></li>
                                <li><a className="hover:text-white transition-colors" href="#">Status</a></li>
                            </ul>
                        </div>
                    </nav>

                    {/* Newsletter */}
                    <div className="w-full max-w-sm">
                        <h4 className="text-sm font-medium text-slate-300 mb-3">Stay in the loop</h4>
                        <form onSubmit={handleSubscribe} className="flex gap-2">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <input
                                id="footer-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                                aria-label="Email address"
                            />
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 transition-colors text-white font-semibold"
                            >
                                Subscribe
                            </button>
                        </form>
                        {subscribed && (
                            <p className="mt-3 text-sm text-green-400">Thanks for subscribing — check your inbox!</p>
                        )}
                    </div>
                </div>

                <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-400">© {year} Aurora UI. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <div className="flex gap-3">
                            <a href="#" className="p-2 rounded-full hover:bg-slate-800 transition-colors" aria-label="Twitter">
                                <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M8 19c7.333 0 11.333-6.084 11.333-11.333 0-.173 0-.347-.012-.519A8.116 8.116 0 0 0 20 4.7a8.14 8.14 0 0 1-2.357.646A4.118 4.118 0 0 0 19.447 3a8.224 8.224 0 0 1-2.605.996A4.107 4.107 0 0 0 9.85 7.03 11.65 11.65 0 0 1 3.157 2.9a4.106 4.106 0 0 0 1.27 5.48A4.07 4.07 0 0 1 2.8 7.6v.052a4.109 4.109 0 0 0 3.292 4.028 4.095 4.095 0 0 1-1.852.07 4.113 4.113 0 0 0 3.834 2.85A8.234 8.234 0 0 1 2 17.54 11.616 11.616 0 0 0 8 19z" />
                                </svg>
                            </a>
                            <a href="#" className="p-2 rounded-full hover:bg-slate-800 transition-colors" aria-label="GitHub">
                                <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.8 5.62-5.47 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58A12 12 0 0 0 12 .5z" />
                                </svg>
                            </a>
                            <a href="#" className="p-2 rounded-full hover:bg-slate-800 transition-colors" aria-label="LinkedIn">
                                <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5.001 2.5 2.5 0 0 1 0-5.001zM3 9h4v12H3zM9 9h3.8v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.5V21H17v-5.1c0-1.2 0-2.8-1.7-2.8-1.7 0-1.9 1.3-1.9 2.7V21H9V9z" />
                                </svg>
                            </a>
                        </div>
                        <a className="text-sm text-slate-400 hover:text-white transition-colors" href="#">Privacy · Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}