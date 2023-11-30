let currentStep = 1;
      let totalSteps = 3;

      function nextStep() {
          if (currentStep < totalSteps) {
              let currentSection = document.getElementById("step" + currentStep);
              currentSection.style.display = "none";

              currentStep++;

              let nextSection = document.getElementById("step" + currentStep);
              nextSection.style.display = "block";
          }
      }

      function previousStep() {
          if (currentStep > 1) {
              let currentSection = document.getElementById("step" + currentStep);
              currentSection.style.display = "none";

              currentStep--;

              let previousSection = document.getElementById("step" + currentStep);
              previousSection.style.display = "block";
          }
      }

      function submitForm() {
          // Lógica para enviar o formulário
          document.getElementById("myForm").submit();
      }