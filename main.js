// get the element in html
const modelBtn = document.querySelector(".model-btn");
const getMainSection = document.querySelector(".main-section");
const getCloseBtn = document.querySelector("#close-btn");
// add click event buttons
const clickEventOnModelButton = () => {
  getMainSection.style.display = "flex";
};
// add more functions
modelBtn.addEventListener("click", clickEventOnModelButton);
const clickOnExitButton = () => {
  getMainSection.style.display = "none";
};
getCloseBtn.addEventListener("click", clickOnExitButton);

const changeColorWhenOneClick = (e) => {
  e.target.style.backgroundColor = "white";
  e.target.style.color = "black";
};
modelBtn.addEventListener("click", changeColorWhenOneClick);
const doubleClickOnModelButton = (e) => {
  e.target.style.backgroundColor = "rgb(81, 81, 83)";
  e.target.style.color = "white";
  clickOnExitButton();
};
modelBtn.addEventListener("dblclick", doubleClickOnModelButton);
