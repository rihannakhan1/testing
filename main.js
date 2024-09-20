// script.ts
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("resume-form");
  var output = document.getElementById("resume-output");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;

    // Split skills by comma and map them to a list

    var skillsList = skills
      .split(",")
      .map(function (skill) {
        return "<li>".concat(skill.trim(), "</li>");
      })
      .join("");

    // Create the resume template dynamically
    var resumeHTML = "\n            <h3>"
      .concat(name, "</h3>\n            <p>Email: ")
      .concat(email, "</p>\n            <h4>Education</h4>\n            <p>")
      .concat(
        education,
        "</p>\n            <h4>Work Experience</h4>\n            <p>"
      )
      .concat(work, "</p>\n            <h4>Skills</h4>\n            <ul>")
      .concat(skillsList, "</ul>\n        ");

    // Insert the generated resume into the output div
    output.innerHTML = resumeHTML;
  });
});
