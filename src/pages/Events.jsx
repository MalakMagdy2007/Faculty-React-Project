import { useTranslation } from "react-i18next";
import events from "../data/events";

function Events() {
  const { i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  return (
    <section className="events-page">
      <div className="container">
        <h1>{isArabic ? "الفعاليات" : "Events"}</h1>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-content">
                <h2>{isArabic ? event.titleAr : event.title}</h2>

                <p>
                  <strong>{isArabic ? "التاريخ:" : "Date:"}</strong> {event.date}
                </p>

                <p>
                  <strong>{isArabic ? "الموقع:" : "Location:"}</strong> {isArabic ? event.locationAr : event.location}
                </p>

                <p>{isArabic ? event.descriptionAr : event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Events;
import "../Person5.css";