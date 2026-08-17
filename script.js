const DRIVE_ROOT = "https://drive.google.com/drive/folders/1w_khDcyZeAnavm9qyiBQt2Bapp3XR48-";

const projects = [
  {
    id: "1I_a9O9UPgpdYBcoac-XIwakk7Trjz0Fq",
    title: "House 01",
    description: "A complete residential concept with warm circulation spaces, tailored bedrooms, kitchen, and family rooms.",
    rooms: [
      {
        name: "Entrance Hall",
        images: ["1eHfDIe2n3JgI8Jy8VEK5mZR8kJ2JGuaS", "19XZbPrBA9j1GUic5Z7BePsZfFTCFrN61", "1M7GHOrspTF1FI2nxw7evQFtyk-GYaJ7k", "1exnfg9pr75d0TfWAfXKnHyNqJxU7FN3h"],
      },
      {
        name: "Master Bedroom",
        images: ["1nUeYq2k9bnpPYsX8yRCEN5zvqcz-BwLv", "12DWLorv792OUKvGth5tjTTauG8NfQKND", "1wmAxd2OJ4FJjeMbQvfAjAxbNLj3x8KwY", "1UNneBkwg6HDndMNbsmcZqHi_T3c23Xmm"],
      },
      {
        name: "Kitchen",
        images: ["1HEHuAOCpt3mST613lD8B7hztoxSWuLQw", "15OfbCr6x4GlC4tiIxsnDdbiQ_3B0TTK0", "1laZv4RxmfrAuZ-IytSRlNfR-XmHRxxxi", "1rAZpsKpItdKVxWige4nUs2VY8Ng_aKqI"],
      },
      {
        name: "Kids' Room",
        images: ["1uq1C5sq1g97716-Xd4j2ubZDDLoQAfVc", "1UnnCDpUU72AO0z5UemZE7Q08WPP6sWY9", "1yl_BW0x46y0prbu1YDntQsuU8jBLm_TV", "1Hte2LJ_mqApu9OVH_CwHG8JyKdipFVYp"],
      },
    ],
  },
  {
    id: "10Z7X-HqMMfUJHFnJi6iShNL-aMz2Lxsc",
    title: "House 02",
    description: "A focused home package centered on bedrooms, bathroom detailing, and a broad living room set.",
    rooms: [
      {
        name: "Boy's Room",
        images: ["1zdiMnvyr_GAUbXwmzKyg8R55aa0XkLwS", "17laq7zLK56ceRSU5uLXfQTYxD_NETTZa", "11Us51k9nKGVp4CknAZ6tOZuf1WThTucI", "1nYqMVEwF0RV2jRHewBlDQaze86ZBu7ct"],
      },
      {
        name: "Master Bedroom",
        images: ["12bV3D6j0hiYpSIe13UQwwWfDPQYJNKVY", "1qkdVZhfV_2HngxIB0gyOFgmOXJsy9sHT", "1VxRYocbYdriJJn_WoleQAmv1B3kbyNvk", "1wN5gxkyP153Vw0zcGxwiLEvrZoLe2NnG"],
      },
      {
        name: "Bathroom",
        images: ["1gZ_4XViN_6ae5RdiuFYRnFezQu46BwHc", "1lJqJBtqU_PWjD4vX7kU940AybxK7mIUf", "1qCMhPMpUGDMKaj3HFAsNO_VPKlc6wM9W", "1fCKTWZSOSZtBw6HrCkzKk0lpsEn94H7Y"],
      },
      {
        name: "Living Room",
        images: ["1u9zrr2KWRokH0mLOQnXltzyOfoEWS8jB", "1HDG9SntkdO4O4wluoYNTBjjteIMaB7ih", "1b5cbv_grFzgqyK9n0JuPsK1ovXPwg9LJ", "1OGdctYxtg-6kmszE3o7enFMcw3ASqa96"],
      },
    ],
  },
  {
    id: "1ucYMBhopC4zAoJUEiLKmb3zC_aG3TcwB",
    title: "House 03",
    description: "A brighter residential set with hallway, kitchen, child room, and bathroom views ready for client review.",
    rooms: [
      {
        name: "Bathroom",
        images: ["1KDzFRBFjpcJSkDpIqtzfJDEeNFRlE82w", "1llG_UVh6cA9O4fQlR6Bw4Q613xBGXAH2", "1nnuU_cuU3S0gVtJHxeS8UHC1ae7aIlvL", "1w15SogEDreXyH2xta0WX2AQ7NroC6AUK"],
      },
      {
        name: "Hallway",
        images: ["1pwwp6fuatIdRHmpqT6bhFSQs1ihvyjup", "12p1zPMngrLdZOKVbNnuwhXfL4NLceu-R", "1UN0N0kdVZ9e9MpV8SqMO-QcDGJVt9Nu3", "19PqNSKx9mtorcS78MuipDa_aSl5MBE9G"],
      },
      {
        name: "Children's Room",
        images: ["1VP6HX4x4fCwPqVGmXOMLD1icdg_-X5Q4", "1RKJQtbgunSr2Nwx-DKCd2draahdbE0GN", "1Hcp2AAx98NVRRax05SWNfJn3gYd_Af4M", "17YsFMCfV9-fJyq-OdHYhBUFcRQMejWOG"],
      },
      {
        name: "Kitchen",
        images: ["1CT6-apRXEoBQCpu3dAGdo2rS4eosQ-W_", "1wF_GQgKGD0K4hLKzL8K-arV5-uC40hQy", "1Wz2U6nfT2V1mJ1B4Sted_EiMkmtaqVM1", "10C5cPNvDNoFPSOJI3TxOerLo7JDInRiK"],
      },
    ],
  },
  {
    id: "1-YEeerhPp1L9WOP1_jzwhiROyMjt6Rol",
    title: "House 04",
    description: "A compact set with bathroom, bedroom concepts, and a living area presented for fast visual comparison.",
    rooms: [
      {
        name: "Bathroom",
        images: ["1XE2XJnsyLqHtQw4H6yFJXFXVsypdPY-K", "17h3PNw7cmAXgOdl-Pwg6lr-XudQwW3SQ", "18yKwN0HePR88CcYkY-yFCtbq9YwNcm7N", "1sU_5KDE1PELJNyMdX_01kOHY1MN5ncFu"],
      },
      {
        name: "Bedroom 01",
        images: ["1xVV05yHZQLBdt8VnPx5H8G_DJm5Rc7VD", "1GwBNjWmSuGbODmkjKnG2Ngjo8O-WIlRw", "1tYDzAByvXHVGQva5XNlRpa_6Uy6Tv2-I", "1Q_UxYPpeRldK6jkPz50zDHYzuyFeMiJB"],
      },
      {
        name: "Bedroom 02",
        images: ["1RyPvbEAY2WevOk3paAo0raEtqgsIeKRT", "1BMNsIUl-WAFERxHk4RDkxS83t0cf7449", "1Zmu1iLKQC7aebSzWyv3z_2S3d0Q5U4Qe", "1-KM_c49H5UFb4508Er9cVr7OxlPKDc3J"],
      },
      {
        name: "Living Room",
        images: ["139qbNHyQvCGcSWtS0S66-wXtbwVGojBs", "1eTVOADqUoOTJfILeB4LldjJmtdI9Zngk", "1m3HjE4tR7vFG1GV8wJIfvnIDMmj5PpLw", "1iSjDsva1UwXgvIi_O1LjolxXFgk9liyF"],
      },
    ],
  },
  {
    id: "1EHOS1-ibtJvzbKTxDF5BAnv859EDeZ7N",
    title: "House 05",
    description: "A second full residential concept with entrance hall, bedroom, kitchen, and kids' room variations.",
    rooms: [
      {
        name: "Entrance Hall",
        images: ["1xdEcZZxkOIW-J8jGZTRE7rLix5Pc51f7", "1X0hfKdcghccDbHSPIFt1sB4aQuvFUbVE", "1BP-8RbvkfDkVE3IknQdOQ8qS9zayKaB-", "1NEHz6ks8a3N-Za7VVx_A2FbNPHVOBLzO"],
      },
      {
        name: "Master Bedroom",
        images: ["1wnlkpqmWz-1aUOwYgLxbYk6sGGih5237", "1DWg74Vx_E7dKUkWvTIJErAcOsRr7XnXl", "1yfgLuP2gte5Q-Q0RlAIB4aN-gtonC8RA", "1TspIMmyRfGP24tV_WfDMW74pqW0CuqJz"],
      },
      {
        name: "Kitchen",
        images: ["1d3C_fT60cjEZpUmIFnZWQveOC4Uc4X_z", "1AmC5fUj5TEKZf2QOEmuPDnLjZgpoGIgv", "14eNzZ7zf80Eyp0Grt9NhPPG3nQn6iePT", "1aGB3mrf0fQojK_NnCJoy-fcec1or7NO2"],
      },
      {
        name: "Kids' Room",
        images: ["1Ktu5nn8FYMKUKzI6xKq7NyElvfYNEdH3", "1f1kN_Kz5BAWVAcNXDrvXYGXd8LhpVSPI", "1gapj9w0iRY7ePNSo8JFezGn5R6W6DKjE", "1NGPicefi1Zgq9MKRf6RRKE2lmuyDMqdj"],
      },
    ],
  },
];

const header = document.querySelector("[data-header]");
const tabs = document.querySelector("[data-project-tabs]");
const projectsRoot = document.querySelector("[data-projects]");
const lightbox = document.querySelector("[data-lightbox]");
const lightboxImage = document.querySelector("[data-lightbox-image]");
const lightboxCaption = document.querySelector("[data-lightbox-caption]");

function driveImage(id, size = 1400) {
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`;
}

function driveFile(id) {
  return `https://drive.google.com/file/d/${id}/view`;
}

function createButton(label, value, pressed = false) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.dataset.filter = value;
  button.setAttribute("aria-pressed", String(pressed));
  return button;
}

function renderTabs() {
  tabs.append(createButton("All", "all", true));
  projects.forEach((project) => tabs.append(createButton(project.title, project.id)));
}

function mediaItems(project) {
  return project.rooms.flatMap((room) =>
    room.images.map((imageId, index) => ({
      id: imageId,
      room: room.name,
      label: `${project.title} - ${room.name} ${String(index + 1).padStart(2, "0")}`,
    }))
  );
}

function renderProjects(activeId = "all") {
  projectsRoot.innerHTML = "";
  const visibleProjects = activeId === "all" ? projects : projects.filter((project) => project.id === activeId);

  visibleProjects.forEach((project) => {
    const article = document.createElement("article");
    article.className = "project";

    const summary = document.createElement("div");
    summary.className = "project-summary";
    summary.innerHTML = `
      <div>
        <p class="eyebrow">Private residence</p>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      </div>
      <div class="room-tags">${project.rooms.map((room) => `<span>${room.name}</span>`).join("")}</div>
      <a class="project-link" href="https://drive.google.com/drive/folders/${project.id}" target="_blank" rel="noreferrer">Open source folder</a>
    `;

    const grid = document.createElement("div");
    grid.className = "media-grid";

    mediaItems(project).slice(0, 12).forEach((item) => {
      const button = document.createElement("button");
      button.className = "media-item";
      button.type = "button";
      button.dataset.full = driveImage(item.id, 2200);
      button.dataset.caption = item.label;
      button.dataset.file = driveFile(item.id);
      button.innerHTML = `
        <img src="${driveImage(item.id, 900)}" alt="${item.label}" loading="lazy" referrerpolicy="no-referrer" />
        <span>${item.room}</span>
      `;
      grid.append(button);
    });

    article.append(summary, grid);
    projectsRoot.append(article);
  });
}

function setActiveTab(nextValue) {
  tabs.querySelectorAll("button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.filter === nextValue));
  });
  renderProjects(nextValue);
}

function openLightbox(trigger) {
  lightboxImage.src = trigger.dataset.full;
  lightboxImage.alt = trigger.dataset.caption;
  lightboxCaption.innerHTML = `${trigger.dataset.caption} <a href="${trigger.dataset.file}" target="_blank" rel="noreferrer">Open original</a>`;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImage.src = "";
  document.body.style.overflow = "";
}

document.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
});

tabs.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  setActiveTab(button.dataset.filter);
});

projectsRoot.addEventListener("click", (event) => {
  const media = event.target.closest(".media-item");
  if (!media) return;
  openLightbox(media);
});

document.querySelector("[data-lightbox-close]").addEventListener("click", closeLightbox);
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) closeLightbox();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !lightbox.hidden) closeLightbox();
});

renderTabs();
renderProjects();

window.URBANERA_PORTFOLIO = {
  driveRoot: DRIVE_ROOT,
  projects,
};
