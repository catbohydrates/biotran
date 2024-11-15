"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var glowInTexts = document.querySelectorAll(".glowIn");
  glowInTexts.forEach(function (glowInText) {
    var letters = glowInText.textContent.split("");
    glowInText.textContent = "";
    letters.forEach(function (letter, i) {
      var span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = i * 0.0025 + "s";
      glowInText.append(span);
    });
  });
});