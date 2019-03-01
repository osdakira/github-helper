"use strict";

function addDuplicateButton() {
  if (duplicateButtonExists()) {
    return;
  }

  var node = getIssueActionMenuNode();
  if (!node) {
    return;
  }

  node.appendChild(makeDividerNode());
  node.appendChild(makeDuplicateButton());
}

function duplicateButtonExists() {
  return document.getElementById("js-duplicate-button");
}

function getIssueActionMenuNode() {
  var nodes = document.querySelectorAll(".discussion-timeline .js-discussion > .js-comment-container .timeline-comment-actions details-menu");
  return nodes[1];
}

function makeDividerNode() {
  var divider = document.createElement("div");
  divider.className = "dropdown-divider";
  return divider;
}

function makeDuplicateButton() {
  var button = document.createElement("button");
  button.id = "js-duplicate-button";
  button.className = "dropdown-item btn-link";
  button.textContent = "Duplicate issue";
  button.setAttribute("role", "menuitem");
  button.addEventListener("click", function(){
    window.location = makeNewIssueLink();
  });
  return button;
}

function makeNewIssueLink() {
  // https://help.github.com/en/articles/about-automation-for-issues-and-pull-requests-with-query-parameters
  var repositoryRoot = window.location.href.replace(/\/issues\/\d+/, "");
  var newIssueLink = repositoryRoot + "/issues/new";

  var body = document.querySelector('textarea[name="issue[body]"').value;
  var title = document.querySelector('input[name="issue[title]"]').value;
  var assignees = Array.from(document.querySelectorAll("[data-assignee-name]")).map(function(node) {
    return node.dataset.assigneeName;
  });
  var labels =  Array.from(document.querySelectorAll(".js-issue-labels .IssueLabel")).map(function(node) {
    return node.dataset.name;
  });
  var projects = Array.from(document.querySelectorAll(".sidebar-projects a[data-skip-pjax]")).map(function(node) {
    // node.href => "https://github.com/fout/fout_x/projects/10#card-18163949"
    return node.href.replace(/.*github.com\/(.*?)\/projects\/(\d+)#.*/, "$1/$2");
  });
  var milestoneNode = document.querySelector(".milestone-name");
  var milestone = milestoneNode ? milestone.title : "";

  var params = {
    body: body,
    title: title,
    assignees: assignees,
    labels: labels,
    projects: projects,
    milestone: milestone,
  };
  var queryString = Object.getOwnPropertyNames(params).map(function(name) {
    var value = params[name];
    if (Array.isArray(value)) {
      value = value.join(",");
    }
    return [name, encodeURIComponent(value)].join("=");
  }).join("&");

  return newIssueLink + "?" + queryString;
}

document.addEventListener("pjax:complete", function(){
  addDuplicateButton();
});

addDuplicateButton();
