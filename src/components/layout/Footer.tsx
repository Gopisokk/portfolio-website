

export const Footer = () => {
    return (
        <footer className="py-8 border-t border-white/10 bg-black text-center">
            <p className="text-gray-500 text-sm">
                Designed & Built by <span className="text-white font-medium">Gopi R K</span> © {new Date().getFullYear()}
            </p>
        </footer>
    );
};
