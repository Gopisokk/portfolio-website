
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Code2, Brain, Rocket } from 'lucide-react';

export const About = () => {
    return (
        <SectionWrapper id="about">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        About <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                        I'm a B.Tech AI & Data Science student at Chennai Institute of Technology (2023–2027) with a passion for building intelligent systems and scalable web applications.
                    </p>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        My journey spans from competitive programming (Top ~10% in Amazon ML Challenge) to open-source contributions. I thrive at the intersection of <span className="text-white">Generative AI</span>, <span className="text-white">Web3 (Solana)</span>, and <span className="text-white">Full-Stack Development</span>.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-primary/10 text-primary">
                                <Code2 size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Full-Stack Engineer</h4>
                                <p className="text-sm text-gray-500">React, Vite, FastAPI, Express</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                                <Brain size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">AI/ML Researcher</h4>
                                <p className="text-sm text-gray-500">LangChain, TF-IDF, XGBoost</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="p-3 rounded-lg bg-green-500/10 text-green-500">
                                <Rocket size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white">Open Source Contributor</h4>
                                <p className="text-sm text-gray-500">Learning Equality (Kolibri Studio)</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <Card className="relative z-10 bg-black/40 border-white/10">
                        <h3 className="text-xl font-bold mb-4 text-white">Now Working On</h3>
                        <div className="space-y-4">
                            <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-primary font-medium text-sm">Open Source</span>
                                    <span className="text-xs text-gray-500">Current</span>
                                </div>
                                <p className="text-gray-300 text-sm">Refactoring Sign-In tests for Kolibri Studio to Vue Testing Library.</p>
                            </div>

                            <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-secondary/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-secondary font-medium text-sm">GenAI</span>
                                    <span className="text-xs text-gray-500">In Progress</span>
                                </div>
                                <p className="text-gray-300 text-sm">Building an Open Library MCP Server with TypeScript & Node.js.</p>
                            </div>

                            <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-green-500/30 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <span className="text-green-500 font-medium text-sm">Solana</span>
                                    <span className="text-xs text-gray-500">Learning</span>
                                </div>
                                <p className="text-gray-300 text-sm">Exploring Rust and Solana smart contract development.</p>
                            </div>
                        </div>
                    </Card>

                    {/* Decorative background blob */}
                    <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10" />
                </div>
            </div>
        </SectionWrapper>
    );
};
