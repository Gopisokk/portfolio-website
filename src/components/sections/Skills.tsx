
import { SectionWrapper } from '../ui/SectionWrapper';
import { motion } from 'framer-motion';

const skills = {
    "Primary Stack": ["Python", "TypeScript", "React", "Vite", "TailwindCSS", "FastAPI"],
    "AI & Data": ["LangChain", "TensorFlow", "Pandas", "Scikit-learn", "GenAI", "RAG"],
    "Tools & Platforms": ["Git", "Docker", "AWS (CCP)", "MongoDB", "MySQL", "Linux"],
    "Learning": ["Solana", "Rust", "Smart Contracts"]
};

export const Skills = () => {
    return (
        <SectionWrapper id="skills">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Technical <span className="text-gradient">Arsenal</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([category, items], index) => (
                    <motion.div
                        key={category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="glass p-6 rounded-2xl"
                    >
                        <h3 className="text-xl font-bold mb-6 text-white border-b border-white/10 pb-2">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 rounded-full text-sm font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all cursor-default"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SectionWrapper>
    );
};
