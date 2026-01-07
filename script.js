const reviews = [
  { text: "Great service and quality products.", name: "Karthikeyan" },
  { text: "Very helpful staff and reasonable pricing.", name: "Ramesh" }
];

let i = 0;

setInterval(() => {
  document.getElementById("review").innerText = reviews[i].text;
  document.getElementById("author").innerText = "- " + reviews[i].name;
  i = (i + 1) % reviews.length;
}, 4000);
