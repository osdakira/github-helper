export default function () {
  const links = document.querySelectorAll(".TimelineItem .minimized-comment:not(.d-none)");
  links.forEach((x) => x.closest(".TimelineItem").style.display = "none");
}
