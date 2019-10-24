export default function () {
  const icons = [".octicon-project", ".octicon-tag", ".octicon-person", ".octicon-pencil"];

  icons.forEach((icon) => {
    const links = document.querySelectorAll(`.TimelineItem ${icon}`);
    links.forEach((x) => x.closest(".TimelineItem").style.display = "none");
  });
}
