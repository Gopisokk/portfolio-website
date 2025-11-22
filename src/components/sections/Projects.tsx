import { useState } from 'react';
import { SectionWrapper } from '../ui/SectionWrapper';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Github, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
    {
        id: 1,
        title: "Smart Product Pricing",
        subtitle: "Amazon ML Challenge 2025",
        description: "Developed a machine learning model to predict product prices based on text descriptions. Achieved Top ~10% rank (2015/21000+) with 54.66 SMAPE score.",
        tags: ["Python", "XGBoost", "TF-IDF", "Regex", "ML"],
        stats: "Rank 2015 / 21000+",
        link: "https://github.com/Gopisokk", // Placeholder
        color: "from-orange-500 to-yellow-500"
    },
    {
        id: 2,
        title: "Chat with Multiple PDFs",
        subtitle: "RAG Application",
        description: "Built a GenAI application using Gemini API and LangChain to analyze 10+ PDFs simultaneously. Optimized context retrieval for 40% faster responses.",
        tags: ["LangChain", "Gemini API", "Streamlit", "Python"],
        stats: "40% Faster Response",
        link: "https://github.com/Gopisokk",
        color: "from-blue-500 to-cyan-500"
    },
    {
        id: 3,
        title: "Open Library MCP Server",
        subtitle: "Model Context Protocol",
        description: "Created a TypeScript/Node.js MCP server exposing book/author tools for Claude Desktop. Implemented strong typing and validation.",
        tags: ["TypeScript", "Node.js", "MCP", "Claude"],
        stats: "Type-Safe Tools",
        link: "https://github.com/Gopisokk",
        color: "from-purple-500 to-pink-500"
    }
];

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <SectionWrapper id="projects">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Featured <span className="text-gradient">Projects</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <Card key={project.id} className="flex flex-col h-full group cursor-pointer" onClick={() => setSelectedProject(project)}>
                        <div className={`h-32 -mx-6 -mt-6 mb-6 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`} />

                        <div className="flex-1">
                            <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wider">{project.subtitle}</div>
                            <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-gray-400 text-sm mb-6 line-clamp-3">{project.description}</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map(tag => (
                                <span key={tag} className="text-xs px-2 py-1 rounded bg-white/5 text-gray-300 border border-white/5">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-[#121212] border border-white/10 rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-2xl"
                            onClick={e => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className={`h-40 bg-gradient-to-br ${selectedProject.color} opacity-30`} />

                            <div className="p-8">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <div className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">{selectedProject.subtitle}</div>
                                        <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                                    </div>
                                    <div className="bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                        <span className="text-sm font-mono text-white">{selectedProject.stats}</span>
                                    </div>
                                </div>

                                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                                    {selectedProject.description}
                                </p>

                                <div className="mb-8">
                                    <h4 className="text-sm font-bold text-gray-500 uppercase mb-3">Technologies</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1.5 rounded-md bg-white/5 text-white border border-white/10 text-sm">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4">
                                    <Button onClick={() => window.open(selectedProject.link, '_blank')}>
                                        <Github className="mr-2 w-4 h-4" /> View Code
                                    </Button>
                                    {/* <Button variant="outline">
                    <ExternalLink className="mr-2 w-4 h-4" /> Live Demo
                  </Button> */}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </SectionWrapper>
    );
};
