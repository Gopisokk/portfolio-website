import { type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';

interface CardProps extends HTMLMotionProps<"div"> {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export const Card = ({ children, className = '', hoverEffect = true, ...props }: CardProps) => {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, transition: { duration: 0.2 } } : {}}
            className={`glass rounded-xl p-6 overflow-hidden relative ${className}`}
            {...props}
        >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            {children}
        </motion.div>
    );
};
