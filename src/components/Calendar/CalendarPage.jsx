import { Calendar, dayjsLocalizer } from "react-big-calendar";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "dayjs/locale/fi";

dayjs.locale("fi");

export default function CalendarPage() {
  const localizer = dayjsLocalizer(dayjs);
  const [trainings, setTrainings] = useState([]);

  // Fetch "get trainings" data
  const getTrainings = () => {
    fetch(
      "https://customer-rest-service-frontend-personaltrainer.2.rahtiapp.fi/api/gettrainings"
    )
      .then((response) => {
        if (!response.ok)
          throw new Error("Error in fetch: " + response.statusText);

        return response.json();
      })
      .then((data) => {
        setTrainings(data);
        console.log(data);
      })
      .catch((err) => console.log(err));
  };

  // UseEffect for get Trainings
  useEffect(() => {
    getTrainings();
  }, []);

  const events = trainings.map((item) => {
    const { id, date, duration, activity, customer } = item; // Extract customer here

    try {
      const start = new Date(date);
      const end = dayjs(date).add(duration, "minute").toDate();

      // Correctly reference customer.firstname and customer.lastname
      const title = `${activity} / ${customer?.firstname ?? ""} ${
        customer?.lastname ?? ""
      }`;

      return {
        id,
        title,
        start,
        end,
      };
    } catch (err) {
      console.error(`Error processing training ${id}:`, err);
      return null;
    }
  });

  return (
    <div style={{ padding: "1rem" }}>
      <Calendar
        localizer={localizer}
        events={events.filter(Boolean)} // Filter out null events
        startAccessor="start"
        endAccessor="end"
        style={{
          height: 600,
          width: "100%",
          maxWidth: 1000,
          margin: "auto",
          backgroundColor: "#02c93e",
          color: "#1b1b1b",
          borderRadius: "8px",
          padding: "1rem",
        }}
        eventPropGetter={() => ({
          style: {
            backgroundColor: "#3b3b3b",
            color: "#ffffff",
          },
        })}
      />
    </div>
  );
}
