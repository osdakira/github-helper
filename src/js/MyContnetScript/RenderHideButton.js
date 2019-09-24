export default function () {
  const commentHeaders = document.querySelectorAll(".timeline-comment-header");
  commentHeaders.forEach((headerNode) => {
    const form = headerNode.nextElementSibling.querySelector("form");
    if (! form) {
      return;
    }

    headerNode.insertBefore(makeHideButton(form), headerNode.lastElementChild);
  });
}

function makeHideButton(form) {
  const button = document.createElement("button");
  // button.id = "js-duplicate-button";
  button.className = "hide-button";
  button.textContent = "Outdated";
  button.addEventListener("click", () => {
    form.querySelector("select").selectedIndex = 4;
    form.querySelector("button[type='submit']").click();
  });
  return button;
}
