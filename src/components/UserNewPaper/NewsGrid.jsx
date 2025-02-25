import { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import NewsSkeletonLoader from './NewsSkeletonLoader';
import Datos from '../../services/ApiDatos';

function NewsGrid() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const newsData = await Datos('noticias');
                if (newsData) {
                    setNews(newsData);
                } else {
                    setError('No se pudieron cargar las noticias');
                }
            } catch (err) {
                setError('Error al cargar las noticias: ' + err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <NewsSkeletonLoader />;
    }

    if (error) {
        return (
            <div className="alert alert-error shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <h3 className="font-bold">¡Oops!</h3>
                    <div className="text-xs">{error}</div>
                </div>
            </div>
        );
    }

    if (!news.length) {
        return (
            <div className="alert alert-info shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                    <h3 className="font-bold">¡Sin noticias!</h3>
                    <div className="text-xs">No hay noticias disponibles en este momento.</div>
                </div>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((item) => (
                <NewsCard
                    key={item._id}
                    news={item}
                    onDelete={(id) => setNews(news.filter(n => n._id !== id))}
                />
            ))}
        </div>
    );
}

export default NewsGrid;