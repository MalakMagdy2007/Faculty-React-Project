import events from "../data/events";

function Events() {
  return (
    <section className="events-page">
      <div className="container">
        <h1>Events</h1>

        <div className="events-grid">
          {events.map((event) => (
            <article className="event-card" key={event.id}>
              <div className="event-content">
                <h2>{event.title}</h2>

                <p>
                  <strong>Date:</strong> {event.date}
                </p>

                <p>
                  <strong>Location:</strong> {event.location}
                </p>

                <p>{event.description}</p>
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