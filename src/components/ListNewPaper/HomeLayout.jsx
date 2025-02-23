import { useState } from 'react';
import { Plus, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import NewsGrid from './NewsGrid';
import CreateNewsModal from './CreateNewsModal';

function HomeLayout() {
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

    return (
        <div className="min-h-screen bg-base-200 py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8">
                    <div className="flex items-center gap-4 w-full sm:w-auto">
                        <Link 
                            to="/"
                            className="btn btn-circle btn-secondary btn-lg hover:scale-105 transition-transform duration-300"
                            title="Volver al inicio"
                        >
                            <Home className="w-6 h-6" />
                        </Link>
                        <div className="text-center sm:text-left">
                            <h1 className="text-4xl font-extrabold">
                                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                                    Noticias y Anuncios
                                </span>
                            </h1>
                            <p className="text-base-content/70 mt-2">
                                Mantente al día con las últimas actualizaciones
                            </p>
                        </div>
                    </div>
                    <button
                        className="btn btn-primary btn-lg gap-2 normal-case w-full sm:w-auto"
                        onClick={() => setIsCreateModalOpen(true)}
                    >
                        <Plus className="w-5 h-5" />
                        Nueva Noticia
                    </button>
                </div>

                <NewsGrid />

                <CreateNewsModal
                    isOpen={isCreateModalOpen}
                    onClose={() => setIsCreateModalOpen(false)}
                />
            </div>
        </div>
    );
}

export default HomeLayout;