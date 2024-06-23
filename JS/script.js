
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  };
  // using selectors inside the elements

const questions = document.querySelectorAll(".question");
questions.forEach(function (question) {
  const btn = question.querySelector(".question_btn");

  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove('show-text');
      }
    });
    question.classList.toggle("show-text");
  });
});
 
  // traversing the dom

  /*
const btns = document.querySelectorAll('.question_btn');

btns.forEach(function (btn){
  btn.addEventListener("click", function (e) {
   const question = e.currentTarget.parentElement.parentElement;
   question.classList.toggle(".show-text")
  });
});  */


