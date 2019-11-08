export default function () {
  const key = "hidden-comments";
  chrome.storage.local.get(key, (result) => {
    const display = result[key] ? "block" : "none" ;
    const links = document.querySelectorAll(".TimelineItem .minimized-comment:not(.d-none)");
    links.forEach((x) => x.closest(".TimelineItem").style.display = display);
  });
}
