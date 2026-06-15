/* ============================================================
   myPATH prototype — shared behavior
   - Option groups (Yes/No + segmented): single-select toggle
   - Required fields gate the Next button
   - Previous/Next navigation via body data-prev / data-next
   - Cancel / Save Draft are intentionally non-functional
   No data is read or written outside the page.
   ============================================================ */
(function () {
  "use strict";

  function validate() {
    var nextBtn = document.querySelector(".btn-next");
    if (!nextBtn) return;

    var ok = true;

    // Every required option group must have a selection.
    var groups = document.querySelectorAll('.option-group[data-required="true"]');
    groups.forEach(function (group) {
      if (!group.querySelector(".option.selected")) ok = false;
    });

    // Every required dropdown must have a non-empty value.
    var selects = document.querySelectorAll("select[required]");
    selects.forEach(function (sel) {
      if (!sel.value) ok = false;
    });

    nextBtn.disabled = !ok;
  }

  function selectOption(group, option) {
    group.querySelectorAll(".option").forEach(function (o) {
      o.classList.remove("selected");
      o.setAttribute("aria-pressed", "false");
    });
    option.classList.add("selected");
    option.setAttribute("aria-pressed", "true");
    validate();
  }

  function init() {
    // Wire up option groups (Yes/No and segmented).
    document.querySelectorAll(".option-group").forEach(function (group) {
      group.querySelectorAll(".option").forEach(function (option) {
        option.addEventListener("click", function () {
          selectOption(group, option);
        });
      });
    });

    // Required dropdowns: keep placeholder styling + revalidate on change.
    document.querySelectorAll("select.dropdown").forEach(function (sel) {
      function refresh() {
        if (!sel.value) sel.classList.add("placeholder");
        else sel.classList.remove("placeholder");
      }
      sel.addEventListener("change", function () {
        refresh();
        validate();
      });
      refresh();
    });

    // Navigation.
    var body = document.body;
    var nextBtn = document.querySelector(".btn-next");
    var prevBtn = document.querySelector(".btn-prev");

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        if (nextBtn.disabled) return;
        var dest = body.getAttribute("data-next");
        if (dest) window.location.href = dest;
      });
    }
    if (prevBtn) {
      var prev = body.getAttribute("data-prev");
      if (!prev) {
        prevBtn.hidden = true;
      } else {
        prevBtn.addEventListener("click", function () {
          window.location.href = prev;
        });
      }
    }

    validate();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
