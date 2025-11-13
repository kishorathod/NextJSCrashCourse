// app/fetchingData/page.tsx

async function News() {
    const url = `https://newsapi.org/v2/everything?q=apple&sortBy=popularity&apiKey=1e3bb7f69e0f456aae5eacd581a5ddb8`;

    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch the data");

    const newsData = await response.json();
    const articles = newsData.articles || [];

    return (
        <main className="min-h-screen bg-gray-950 text-white p-6">
            <header className="text-center mb-10">
                <h1 className="text-3xl font-bold text-blue-400">
                    Welcome to News Buddy Page :)
                </h1>
                <p className="text-gray-400 mt-2">
                    Check out the latest news here...
                </p>
            </header>

            <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {articles.length > 0 ? (
                    articles.map((news, index) => (
                        <article
                            key={index}
                            className="bg-gray-900 border border-gray-800 rounded-2xl shadow-lg hover:shadow-blue-900 transition-all duration-300"
                        >
                            {news.urlToImage && (
                                <img
                                    src={news.urlToImage}
                                    alt={news.title}
                                    className="rounded-t-2xl w-full h-56 object-cover"
                                />
                            )}
                            <div className="p-5">
                                <h2 className="text-xl font-semibold mb-2 hover:text-blue-400 transition-colors">
                                    {news.title}
                                </h2>
                                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                                    {news.description || "No description available."}
                                </p>
                                <a
                                    href={news.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-blue-500 hover:underline text-sm"
                                >
                                    Read full article →
                                </a>
                            </div>
                        </article>
                    ))
                ) : (
                    <p className="text-center text-gray-500 col-span-full">
                        No news found.
                    </p>
                )}
            </section>
        </main>
    );
}

export default News;
