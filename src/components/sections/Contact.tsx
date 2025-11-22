import { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Mail, Copy, Check, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Contact = () => {
    const [copied, setCopied] = useState(false);
    const email = "gopi030506@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <SectionWrapper id="contact">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    Let's <span className="text-gradient">Connect</span>
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    <Card className="flex flex-col justify-center items-center text-center p-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 text-primary">
                            <Mail size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Drop me a line</h3>
                        <p className="text-gray-400 mb-8">
                            Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                        </p>

                        <div className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/10 w-full max-w-xs mb-6">
                            <span className="flex-1 text-sm text-gray-300 truncate px-2">{email}</span>
                            <button
                                onClick={handleCopy}
                                className="p-2 hover:bg-white/10 rounded-md transition-colors text-gray-400 hover:text-white relative"
                                title="Copy Email"
                            >
                                <AnimatePresence mode='wait'>
                                    {copied ? (
                                        <motion.div
                                            key="check"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >
                                            <Check size={18} className="text-green-500" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="copy"
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            exit={{ scale: 0 }}
                                        >
                                            <Copy size={18} />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>

                        <Button onClick={() => window.location.href = `mailto:${email}`}>
                            Send Email
                        </Button>
                    </Card>

                    <div className="grid gap-4">
                        <a href="https://linkedin.com/in/gopirk" target="_blank" rel="noopener noreferrer" className="group">
                            <Card className="flex items-center gap-4 p-6 hover:bg-blue-600/10 hover:border-blue-500/30 transition-colors">
                                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 group-hover:scale-110 transition-transform">
                                    <Linkedin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">LinkedIn</h4>
                                    <p className="text-sm text-gray-400">Connect professionally</p>
                                </div>
                            </Card>
                        </a>

                        <a href="https://github.com/Gopisokk" target="_blank" rel="noopener noreferrer" className="group">
                            <Card className="flex items-center gap-4 p-6 hover:bg-gray-600/10 hover:border-gray-500/30 transition-colors">
                                <div className="p-3 bg-gray-500/20 rounded-lg text-gray-400 group-hover:scale-110 transition-transform">
                                    <Github size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">GitHub</h4>
                                    <p className="text-sm text-gray-400">Check out my code</p>
                                </div>
                            </Card>
                        </a>

                        <Card className="flex items-center gap-4 p-6">
                            <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
                                <div className="w-6 h-6 flex items-center justify-center font-bold text-xs">+91</div>
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Phone</h4>
                                <p className="text-sm text-gray-400">+91 9345869720</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
};
