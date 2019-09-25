import addDuplicateButton from "./MyContnetScript/DuplicateButton";
import suppressCommitLinks from "./MyContnetScript/SuppressCommitLinks";
import renderHideButton from "./MyContnetScript/RenderHideButton";

document.addEventListener("pjax:complete", function(){
  addDuplicateButton();
  renderHideButton();
});

addDuplicateButton();
suppressCommitLinks();
renderHideButton();
