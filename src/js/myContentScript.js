import addDuplicateButton from "./MyContnetScript/DuplicateButton";
import renderHideButton from "./MyContnetScript/RenderHideButton";
import suppressCommitLinks from "./MyContnetScript/SuppressCommitLinks";

function call() {
  addDuplicateButton();
  suppressCommitLinks();
  renderHideButton();
}

document.addEventListener("pjax:complete", function(){
  call();
});

call();
