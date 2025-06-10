document.addEventListener("DOMContentLoaded", () => {
  const profiles = [
    {
      name: "Saranyaa",
      bio: "Frontend developer passionate about clean UI.",
      skills: ["HTML", "CSS", "JS"],
      image: "assets/profile-placeholder.jpg"
    },
    {
      name: "Dev User",
      bio: "Loves open source and React.",
      skills: ["React", "Node", "MongoDB"],
      image: "assets/profile-placeholder.jpg"
    }
  ];

  const container = document.getElementById("profiles");

  profiles.forEach((profile) => {
    const card = document.createElement("div");
    card.className = "profile-card";
    card.innerHTML = `
      <img loading="lazy" src="${profile.image}" alt="${profile.name}" />
      <h2>${profile.name}</h2>
      <p>${profile.bio}</p>
      <p><strong>Skills:</strong> ${profile.skills.join(", ")}</p>
    `;
    container.appendChild(card);
  });
});
