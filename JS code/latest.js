// Example project data (replace with your backend later)
const latestProjects = [
    {
        title: "Dummy clicker",
        thumbnail: "thumbs/dummy.png",
        remix: "/buttons/remix",
        view: "/project/#478.html"
    },
    {
        title: "E Racing Game",
        thumbnail: "thumbs/race.png",
        remix: "/buttons/remix",
        view: "/project/#4778.html"
    },
    {
        title: "Scratch vs. E",
        thumbnail: "thumbs/vs.png",
        remix: "/buttons/remix",
        view: "/project/#999.html"
    }
];

const grid = document.getElementById("latestGrid");

latestProjects.forEach(p => {
    const card = document.createElement("div");
    card.className = "project-card";

    card.innerHTML = `
        <div class="project-thumb" style="background-image:url('${p.thumbnail}')"></div>
        <div class="project-title">${p.title}</div>
        <div class="project-actions">
            <a href="${p.view}">View</a>
            <a href="${p.remix}" target="_blank">Remix</a>
        </div>
    `;

    grid.appendChild(card);
});
