// Load existing database or create one
let projectDatabase = JSON.parse(localStorage.getItem("E_projects") || "[]");

const form = document.getElementById("publishForm");
const statusEl = document.getElementById("publishStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);

  const project = {
    id: Date.now(),
    title: data.get("title"),
    description: data.get("description"),
    projectUrl: data.get("projectUrl"),
    thumbnail: data.get("thumbnail") || "/default-thumb.png",
    tags: data.get("tags")
      ? data.get("tags").split(",").map(t => t.trim())
      : [],
    likes: 0,
    views: 0,
    createdAt: new Date().toISOString()
  };

  // Save to database
  projectDatabase.push(project);
  localStorage.setItem("E_projects", JSON.stringify(projectDatabase));

  statusEl.textContent = "Project published successfully!";
  form.reset();
});
