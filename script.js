document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  form.addEventListener("submit", (e) => {
    let isValid = true;
    const inputs = document.querySelectorAll("input");

    inputs.forEach((input) => {
      const existingIcon = input.parentNode.querySelector(".error-icon");
      const existingErrorMessage =
        input.parentNode.querySelector(".error-message");
      if (existingIcon) {
        existingIcon.remove();
      }
      if (existingErrorMessage) {
        existingErrorMessage.remove();
      }

      if (input.value.trim() === "") {
        isValid = false;
        input.style.borderColor = "red";
        const icon = document.createElement("img");
        icon.src = "./images/icon-error.svg";
        icon.classList.add("error-icon");
        input.parentNode.appendChild(icon);
        const errorMessage = document.createElement("span");
        errorMessage.textContent = `${input.placeholder} cannot be empty`;
        errorMessage.classList.add("error-message");
        input.parentNode.appendChild(errorMessage);
      } else if (
        input.type === "email" &&
        !emailRegex.test(input.value.trim())
      ) {
        isValid = false;
        input.style.borderColor = "red";
        const icon = document.createElement("img");
        icon.src = "./images/icon-error.svg";
        icon.classList.add("error-icon");
        input.parentNode.appendChild(icon);
        const errorMessage = document.createElement("span");
        errorMessage.textContent =
          "It doesn't look like a valid email, be a good boi and type in ur email";
        errorMessage.classList.add("error-message");
        input.parentNode.appendChild(errorMessage);
      } else {
        input.style.borderColor = "";
      }
    });

    if (!isValid) {
      e.preventDefault();
    }

    // prevent default anyways so you folks don't see your page crushed
    if (isValid) {
      e.preventDefault();
      const body = document.querySelector("body");
      body.innerHTML = "";
      const code = `<video autoplay loop playsinline>
      <source src="./images/proud.mp4" type="video/mp4">
      Your browser does not support the video tag.
  </video>`;
      body.innerHTML = code;
    }
  });
});
