export default function () {
  const keys = ["project", "tag", "person", "pencil"];
  chrome.storage.local.get(keys, (result) => {
    keys.forEach((key) => {
      const display = result[key] ? "flex" : "none" ;
      const links = document.querySelectorAll(`.TimelineItem-badge .octicon-${key}`);
      links.forEach((x) => x.closest(".TimelineItem").style.display = display);
    });
  });
}
