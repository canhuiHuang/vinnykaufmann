// Hold plan information
let appPlan = "";
let packagePlan = "";
const extraPlans = [];

// Core elements
const appPlans = document.querySelectorAll(".app-plan");
const packagePlans = document.querySelectorAll(".package-plan");
const extraPlanElems = document.querySelectorAll(".extra-plan");
const previewBox = document.querySelector("#selectedPlansField");
const plansInput = document.querySelector("#email-form #plansInput");

// Transition Boxes
function changeStage(nextStage) {
  // Clear active stage
  document
    .querySelector(".transition-boxes .plan.active")
    .classList.remove("active");

  // Set active stage
  document
    .querySelector(`.transition-boxes .plan${nextStage}`)
    .classList.add("active");
}

// Listen for stages next & prev button
document
  .querySelector(".plan1 .next-btn")
  .addEventListener("click", () => changeStage(2));
document
  .querySelector(".plan2 .next-btn")
  .addEventListener("click", () => changeStage(3));
document
  .querySelector(".plan2 .prev-btn")
  .addEventListener("click", () => changeStage(1));
document
  .querySelector(".plan3 .prev-btn")
  .addEventListener("click", () => changeStage(2));

// App Plans (App Basic, App Plus, App Max)
const showPackages = (self, id) => {
  // Clear shown packages & clear selected

  if (document.querySelector(".packages.show"))
    document.querySelector(".packages.show").classList.remove("show");

  const selectedAppPlan = document.querySelector(".app-plan.selected");
  if (selectedAppPlan) {
    if (selectedAppPlan !== self) {
      packagePlan = "";
      selectedAppPlan.classList.remove("selected");

      // Remove selected from child plans
      const selectedPlan = document.querySelector(".package-plan.selected");
      if (selectedPlan) {
        selectedPlan.classList.remove("selected");
      }
    }
  }

  // deselect if selected
  if (self.classList.contains("selected")) {
    self.classList.remove("selected");
    appPlan = "";

    // Show trigger elements if apply
    document.querySelector("#packages-title").classList.remove("show");
  } else {
    // Make it selected
    self.classList.add("selected");
    appPlan = self.querySelector("h6.heading-plan").innerText;
    // Show trigger elements if apply
    document.querySelector("#packages-title").classList.add("show");
    document.querySelector(`.${id}`).classList.add("show");

    // Scroll to next level of packages
    setTimeout(() => {
      location.href = "#category-packages";
    }, 20);
  }
  renderPreviewBox();
};

for (let i = 0; i < appPlans.length; i++) {
  appPlans[i].onclick = () => showPackages(appPlans[i], appPlans[i].id);
}
// appPlans[0].onclick = () => showPackages(appPlans[0], appPlans[0].id);

// Package Plans
const selectPackagePlan = (self) => {
  // Clear shown packages & clear selected
  const selectedPlan = document.querySelector(".package-plan.selected");
  if (selectedPlan) {
    if (selectedPlan !== self) selectedPlan.classList.remove("selected");
  }

  // deselect if selected
  if (self.classList.contains("selected")) {
    self.classList.remove("selected");
    packagePlan = "";

    // Scroll to prev level of packages
    setTimeout(() => {
      location.href = "#plans";
    }, 20);
  } else {
    // Make it selected
    self.classList.add("selected");
    packagePlan = self.querySelector("h6.heading-plan").innerText;

    // Scroll to next level of packages
    setTimeout(() => {
      location.href = "#extraPlans";
    }, 20);
  }
  renderPreviewBox();
};
for (let i = 0; i < packagePlans.length; i++) {
  packagePlans[i].onclick = () => selectPackagePlan(packagePlans[i]);
}

const selectExtraPlan = (self) => {
  // deselect if selected
  if (self.classList.contains("selected")) {
    self.classList.remove("selected");
    extraPlans.splice(
      extraPlans.indexOf(self.querySelector("h6.heading-plan").innerText),
      1
    );
  } else {
    // Make it selected
    self.classList.add("selected");
    extraPlans.push(self.querySelector("h6.heading-plan").innerText);

    // Scroll to next level of packages
    if (extraPlans.length >= 2) {
      setTimeout(() => {
        location.href = "#email-form";
      }, 20);
    }
  }

  renderPreviewBox();
};
// Extra Plans
for (let i = 0; i < extraPlanElems.length; i++) {
  extraPlanElems[i].onclick = () => selectExtraPlan(extraPlanElems[i]);
}

// render previewBox with updated plans
function renderPreviewBox() {
  // Map text to an input element
  const getInputElement = (text, type) => {
    const plan = document.createElement("input");
    plan.type = "text";
    plan.setAttribute("name", text);
    plan.setAttribute("data-name", text);
    plan.setAttribute("placeholder", text);
    plan.value = text;
    plan.classList.add(type);

    return plan;
  };

  // Clear preview box & plans input
  previewBox.innerHTML = "";
  plansInput.innerText = "";

  // Push app plan & package plan
  if (appPlan !== "") {
    previewBox.appendChild(getInputElement(appPlan, "app-plan"));
    plansInput.innerText += appPlan;
  }
  if (packagePlan !== "") {
    previewBox.appendChild(getInputElement(packagePlan, "package-plan"));
    plansInput.innerText += ", " + packagePlan;
  }
  // Push all extra plans selected
  for (let i = 0; i < extraPlans.length; i++) {
    previewBox.appendChild(getInputElement(extraPlans[i], "extra-plan"));
    plansInput.innerText += ", " + extraPlans[i];
  }
}

// On window scroll
window.onscroll = () => {
  document.querySelector(".overflow").classList.add("scrolling");
  setTimeout(() => {
    document.querySelector(".overflow").classList.remove("scrolling");
  }, 250);

  console.log(appPlan, packagePlan, extraPlans);
};

// Modal
const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function () {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function () {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", (e) => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", (e) => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
