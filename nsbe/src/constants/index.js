const calendar = () => {
  window.location.href = "https://calendar.google.com/calendar/embed?src=nsbelatech.vice%40gmail.com&ctz=America%2FChicago";
};



export const navLinks = [
    {
      id: "about",
      title: "About Us",
    },
    {
      id: "calendar",
      title: "Events",
    },
    {
      id: "programs",
      title: "CEB",
    },
    {
      id: "Calendar",
      title: "Calendar",
      onclick: calendar,
    },
  ];