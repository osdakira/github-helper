export default function () {
  const commitReferences = document.querySelectorAll("[id^='ref-commit-']");
  if (commitReferences.length === 0) {
    return;
  }
  commitReferences.forEach((x) => x.parentElement.style.display = "none");

  const commitMessages = document.querySelectorAll(".commit-message");
  commitMessages.forEach((x) => x.closest(".TimelineItem").style.display = "none");
}
