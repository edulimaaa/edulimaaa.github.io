const companies = document.querySelectorAll(".company-none");
const menuCompanies = document.querySelectorAll("#experience-left ul li");

companies[0].classList.add("company-active");
companies[0].classList.remove("company-none");
menuCompanies[0].classList.add("experience-click");

function showsCompanies(index) {
  companies.forEach((item) => {
    item.classList.add("company-none");
  });

  companies[index].classList.add("company-active");
  companies[index].classList.add("text-focus-in");
  menuCompanies[index].classList.add("experience-click");

  if (index == 0) {
    menuCompanies[1].classList.remove("experience-click");
    menuCompanies[2].classList.remove("experience-click");
    menuCompanies[3].classList.remove("experience-click");
    companies[0].classList.remove("company-none");
    companies[0].classList.add("company-active");
    companies[1].classList.add("company-none");
    companies[1].classList.remove("company-active");
    companies[2].classList.add("company-none");
    companies[2].classList.remove("company-active");
    companies[3].classList.add("company-none");
    companies[3].classList.remove("company-active");
  }

  if (index == 1) {
    menuCompanies[0].classList.remove("experience-click");
    menuCompanies[2].classList.remove("experience-click");
    menuCompanies[3].classList.remove("experience-click");
    companies[1].classList.remove("company-none");
    companies[0].classList.add("company-none");
    companies[0].classList.remove("company-active");
    companies[2].classList.add("company-none");
    companies[2].classList.remove("company-active");
    companies[3].classList.add("company-none");
    companies[3].classList.remove("company-active");
  }

  if (index == 2) {
    menuCompanies[0].classList.remove("experience-click");
    menuCompanies[1].classList.remove("experience-click");
    menuCompanies[3].classList.remove("experience-click");
    companies[2].classList.remove("company-none");
    companies[0].classList.add("company-none");
    companies[0].classList.remove("company-active");
    companies[1].classList.add("company-none");
    companies[1].classList.remove("company-active");
    companies[3].classList.add("company-none");
    companies[3].classList.remove("company-active");
  }

  if (index == 3) {
    menuCompanies[0].classList.remove("experience-click");
    menuCompanies[1].classList.remove("experience-click");
    menuCompanies[2].classList.remove("experience-click");
    companies[3].classList.remove("company-none");
    companies[0].classList.add("company-none");
    companies[0].classList.remove("company-active");
    companies[1].classList.add("company-none");
    companies[1].classList.remove("company-active");
    companies[2].classList.add("company-none");
    companies[2].classList.remove("company-active");
  }
}

menuCompanies.forEach((itens, index) => {
  itens.addEventListener("click", () => {
    showsCompanies(index);
  });
});
