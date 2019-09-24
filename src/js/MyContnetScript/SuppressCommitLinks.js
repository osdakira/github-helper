export default function () {
  const commitReferences = document.querySelectorAll("[id^='ref-commit-']");
  commitReferences.forEach((x) => x.parentElement.style.display = "none");

  const commitMessages = document.querySelectorAll(".commit-message");
  commitMessages.forEach((x) => x.closest(".TimelineItem").style.display = "none");
}
