import addDuplicateButton from "./MyContnetScript/DuplicateButton";

document.addEventListener("pjax:complete", function(){
  addDuplicateButton();
});

addDuplicateButton();
