
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Trophy, GitPullRequest, Award } from 'lucide-react';

export const Achievements = () => {
    return (
        <SectionWrapper id="achievements">
            <div className="grid md:grid-cols-3 gap-6">
                {/* Open Source Highlight */}
                <Card className="md:col-span-2 bg-gradient-to-br from-purple-900/20 to-black border-purple-500/20">
                    <div className="flex items-center gap-3 mb-4">
                        <GitPullRequest className="text-purple-400" />
                        <h3 className="text-xl font-bold text-white">Open Source Spotlight</h3>
                    </div>
                    <div className="mb-4">
                        <h4 className="text-lg font-semibold text-white mb-1">Learning Equality (Kolibri Studio)</h4>
                        <p className="text-sm text-purple-300 font-mono">PR #5553 • Merged</p>
                    </div>
                    <p className="text-gray-400 mb-4">
                        Refactored Sign-In tests from VTU to Vue Testing Library. Improved test reliability and focused on user-centric interactions.
                    </p>
                    <a
                        href="https://github.com/learningequality/studio/pull/5553"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-purple-400 hover:text-purple-300 underline"
                    >
                        View Pull Request
                    </a>
                </Card>

                {/* Competitive Programming */}
                <Card className="bg-gradient-to-br from-yellow-900/20 to-black border-yellow-500/20">
                    <div className="flex items-center gap-3 mb-4">
                        <Trophy className="text-yellow-400" />
                        <h3 className="text-xl font-bold text-white">Competitive</h3>
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-gray-300">LeetCode</span>
                                <span className="text-yellow-400 font-bold">Top 25%</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <div className="bg-yellow-400 h-full w-[75%]" />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">500+ Solved • Max 1500+</p>
                        </div>
                        <div>
                            <div className="flex justify-between mb-1">
                                <span className="text-gray-300">CodeChef</span>
                                <span className="text-yellow-400 font-bold">2 Star</span>
                            </div>
                            <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                                <div className="bg-yellow-400 h-full w-[40%]" />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Max Rating 1400+</p>
                        </div>
                    </div>
                </Card>

                {/* Certifications */}
                <Card className="md:col-span-3 bg-gradient-to-br from-blue-900/20 to-black border-blue-500/20">
                    <div className="flex items-center gap-3 mb-6">
                        <Award className="text-blue-400" />
                        <h3 className="text-xl font-bold text-white">Certifications</h3>
                    </div>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
                            <div className="p-2 bg-blue-500/20 rounded text-blue-400"><Award size={20} /></div>
                            <div>
                                <h4 className="font-bold text-white text-sm">AWS CCP</h4>
                                <p className="text-xs text-gray-500">CLF-C02</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
                            <div className="p-2 bg-cyan-500/20 rounded text-cyan-400"><Award size={20} /></div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Cisco CyberSec</h4>
                                <p className="text-xs text-gray-500">Intro + Essentials</p>
                            </div>
                        </div>
                        <div className="p-4 rounded-lg bg-white/5 border border-white/5 flex items-center gap-3">
                            <div className="p-2 bg-green-500/20 rounded text-green-400"><Award size={20} /></div>
                            <div>
                                <h4 className="font-bold text-white text-sm">Coursera DSA</h4>
                                <p className="text-xs text-gray-500">Algorithms Specialization</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </SectionWrapper>
    );
};
