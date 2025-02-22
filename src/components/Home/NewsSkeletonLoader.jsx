function NewsSkeletonLoader() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
                <div key={index} className="card bg-base-100 shadow-xl animate-pulse">
                    <div className="w-full h-48 bg-base-300" />
                    <div className="card-body">
                        <div className="h-6 bg-base-300 rounded w-3/4 mb-4" />
                        <div className="space-y-2">
                            <div className="h-4 bg-base-300 rounded w-full" />
                            <div className="h-4 bg-base-300 rounded w-5/6" />
                            <div className="h-4 bg-base-300 rounded w-4/6" />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default NewsSkeletonLoader;