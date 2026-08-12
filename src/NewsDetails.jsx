import { Link, useParams } from "react-router-dom";
import { newsData } from "./newsData";
import "./Person3.css";

export default function NewsDetails() {
  const { id } = useParams();

  const news = newsData.find((item) => item.id === id);

  if (!news) {
    return (
      <main className="p3-page">
        <div className="p3-empty">
          <h1>News Not Found</h1>

          <p>
            The requested news article does not exist.
          </p>

          <Link to="/news" className="p3-button">
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="p3-page">
      <article className="p3-details">

        <Link to="/news" className="p3-back">
          ← Back to News
        </Link>

        <div className="p3-details-meta">
          <span>{news.category}</span>

          <time dateTime={news.date}>
            {news.date}
          </time>
        </div>

        <h1>{news.titleEn}</h1>

        <div className="p3-details-image">
          <img
            src={news.image}
            alt={news.titleEn}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        </div>

        <p className="p3-details-excerpt">
          {news.excerptEn}
        </p>

        <p>{news.contentEn}</p>

        <hr />

        <h2>العربية</h2>

        <h3>{news.titleAr}</h3>

        <p>{news.contentAr}</p>

      </article>
    </main>
  );
}