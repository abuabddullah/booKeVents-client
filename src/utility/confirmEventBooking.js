import { toast } from "react-toastify";

const confirmEventBooking = (eventID, name) => {
  const token = localStorage.getItem("token");
  const currentUser = { name };
  if (eventID) {
    try {
      fetch(`http://localhost:5000/api/v1/events/book-event/${eventID}`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(currentUser),
      })
        .then((response) => response.json())
        .then((data) => toast(data.message));
    } catch (error) {
      console.log(error);
    }
  }
};

export default confirmEventBooking;
