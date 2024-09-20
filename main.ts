// script.ts

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resume-form") as HTMLFormElement;
    const output = document.getElementById("resume-output") as HTMLDivElement;

    form.addEventListener("submit", (e: Event) => {
        e.preventDefault(); // Prevent form from submitting the default way

        // Get form values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const work = (document.getElementById("work") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLInputElement).value;

        // Split skills by comma and map them to a list
        const skillsList = skills.split(",").map(skill => `<li>${skill.trim()}</li>`).join("");

        // Create the resume template dynamically
        const resumeHTML = `
            <h3>${name}</h3>
            <p>Email: ${email}</p>
            <h4>Education</h4>
            <p>${education}</p>
            <h4>Work Experience</h4>
            <p>${work}</p>
            <h4>Skills</h4>
            <ul>${skillsList}</ul>
        `;

        // Insert the generated resume into the output div
        output.innerHTML = resumeHTML;
    });
});
