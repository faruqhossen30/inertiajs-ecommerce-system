import Header from './Header';
import Footer from './Footer';

export default function AppLayout({ children }) {
    return (
        <div className="dark:bg-slate-800 min-h-screen">
            <Header />
            <div className="container min-h-screen">
                {children}
            </div>
            <Footer />
        </div>
    );
}
