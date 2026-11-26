const works = document.querySelector("#works");
const filters = [...works.querySelectorAll("[data-filter]")];
const cards = [...works.querySelectorAll(".work-card")];
const status = document.querySelector("#filter-status");

function showCategory(category) {
  let visibleCount = 0;
  for (const card of cards) {
    card.hidden = category !== "works" && card.dataset.category !== category;
    if (!card.hidden) visibleCount += 1;
  }

  for (const filter of filters) {
    filter.setAttribute("aria-pressed", String(filter.dataset.filter === category));
  }
  status.textContent = visibleCount === 1 ? "Showing 1 work." : `Showing ${visibleCount} works.`;
}

function syncCategory() {
  const category = location.hash.slice(1);
  if (!category) showCategory("works");
  if (!filters.some((filter) => filter.dataset.filter === category)) return;

  showCategory(category);
  works.scrollIntoView();
}

for (const filter of filters) {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;
    if (location.hash !== `#${category}`) history.pushState(null, "", `#${category}`);
    showCategory(category);
  });
}

window.addEventListener("hashchange", syncCategory);
syncCategory();

const gallery = document.querySelector("#work-gallery");
const viewButtons = [...works.querySelectorAll("[data-view]")];

for (const button of viewButtons) {
  button.addEventListener("click", () => {
    gallery.dataset.layout = button.dataset.view;
    for (const option of viewButtons) {
      option.setAttribute("aria-pressed", String(option === button));
    }
  });
}

const dialog = document.querySelector(".work-dialog");
const dialogMedia = dialog.querySelector(".dialog-media");
const dialogTitle = dialog.querySelector("#dialog-title");
const dialogDescription = dialog.querySelector(".dialog-description");

for (const card of cards) {
  card.querySelector(".work-button").addEventListener("click", () => {
    const media = card.querySelector(".work-media").firstElementChild;
    dialogMedia.replaceChildren(media.cloneNode(true));
    dialogTitle.textContent = card.querySelector(".work-title").textContent;
    dialogDescription.textContent = card.querySelector(".work-description").textContent;
    dialog.showModal();
  });
}

dialog.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
  if (event.target === dialog) dialog.close();
});
