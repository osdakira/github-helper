import addDuplicateButton from "./MyContnetScript/DuplicateButton";
import suppressCommitLinks from "./MyContnetScript/SuppressCommitLinks";

document.addEventListener("pjax:complete", function(){
  addDuplicateButton();
});

addDuplicateButton();
suppressCommitLinks();
