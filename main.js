document.getElementById('menu').addEventListener('click', function () {
    document.getElementById('sidebar-menu').classList.remove('-translate-x-full');
    document.getElementById('sidebar-menu').classList.add('translate-x-0');
  });
  
  document.getElementById('back-button').addEventListener('click', function () {
    document.getElementById('sidebar-menu').classList.remove('translate-x-0');
    document.getElementById('sidebar-menu').classList.add('-translate-x-full');
  });
      
  
    // First Carousel
    const track1 = document.querySelector('.carousel-track1');
    const slides1 = Array.from(track1.children);
    const nextButton1 = document.querySelector('#next1');
    const prevButton1 = document.querySelector('#prev1');
  
    const slideWidth1 = slides1[0].getBoundingClientRect().width;
  
    let currentIndex1 = 0;
  
    const updateCarousel1 = () => {
      const offset = -currentIndex1 * slideWidth1;
      track1.style.transform = `translateX(${offset}px)`;
    };
  
    nextButton1.addEventListener('click', () => {
      if (currentIndex1 < slides1.length - 1) {
        currentIndex1++;
      } else {
        currentIndex1 = 0; // Loop back to start
      }
      updateCarousel1();
    });
  
    prevButton1.addEventListener('click', () => {
      if (currentIndex1 > 0) {
        currentIndex1--;
      } else {
        currentIndex1 = slides1.length - 1; // Loop back to end
      }
      updateCarousel1();
    });
  
    // Second Carousel
    const track2 = document.querySelector('.carousel-track2');
    const slides2 = Array.from(track2.children);
    const nextButton2 = document.querySelector('#next2');
    const prevButton2 = document.querySelector('#prev2');
  
    const slideWidth2 = slides2[0].getBoundingClientRect().width;
  
    let currentIndex2 = 0;
  
    const updateCarousel2 = () => {
      const offset = -currentIndex2 * slideWidth2;
      track2.style.transform = `translateX(${offset}px)`;
    };
  
    nextButton2.addEventListener('click', () => {
      if (currentIndex2 < slides2.length - 1) {
        currentIndex2++;
      } else {
        currentIndex2 = 0; // Loop back to start
      }
      updateCarousel2();
    });
  
    prevButton2.addEventListener('click', () => {
      if (currentIndex2 > 0) {
        currentIndex2--;
      } else {
        currentIndex2 = slides2.length - 1; // Loop back to end
      }
      updateCarousel2();
    });

    // boook it form script
    const openModalButtons = document.querySelectorAll('.btn-open-modal');
    const modal = document.getElementById('modal');
    const closeModalButton = document.querySelector('.close-btn');
    const descriptionInput = document.getElementById('description');

    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get data from the clicked button
            const description = button.getAttribute('data-description');

            // Update form content
            descriptionInput.textContent = description;

            // Show the modal
            modal.classList.remove('hidden');
        });
    });

    closeModalButton.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Optionally close modal when clicking outside the form
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
    
document.addEventListener("DOMContentLoaded", function () { 
const otpButton = document.getElementById("otpButton");
const numberInput = document.getElementById("number");
const nameInput = document.getElementById("name");
const numberError = document.getElementById("numbererror");
const nameError = document.getElementById("nameerror");
const otpSection = document.getElementById("otpsection");
const getLinkButton = document.getElementById("getLinkButton"); 
const otpInput = document.getElementById("otp");
const otpErrorMessage = document.getElementById("otperrormessage");

otpButton.addEventListener("click", function () {
    const number = numberInput.value;
    const name = nameInput.value;

    if (number.trim() === "" && name.trim() === "") {
        numberError.innerHTML = "Please enter the number.";
        nameError.innerHTML = "Please enter the name.";
    } else if (number.trim() === "") {
        numberError.innerHTML = "Please enter the number.";
        nameError.innerHTML = "";
    } else if (name.trim() === "") {
        nameError.innerHTML = "Please enter the name.";
        numberError.innerHTML = "";
    } else {
        numberError.innerHTML = "";
        nameError.innerHTML = "";
        otpSection.classList.remove("hidden");
    }
}); 

function formatPhoneNumber() {
    let phoneNumber = numberInput.value.replace(/\D/g, ''); 
    phoneNumber = phoneNumber.slice(0, 10); 

    const formattedNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'); 
    numberInput.value = formattedNumber;
}
numberInput.addEventListener("input", formatPhoneNumber);

//hide error message when user starts typing in any input box
[numberInput, nameInput, otpInput].forEach(input => {
    input.addEventListener("input", function () {
        if (this === numberInput) {
            numberError.innerText = "";
        } else if (this === nameInput) {
            nameError.innerText = "";
        } else if (this === otpInput) {
            otpErrorMessage.innerText = "";
        }
    });
});

getLinkButton.addEventListener("click", function (event) {
    event.preventDefault(); 

    if (!otpInput.value.trim()) {
        otpErrorMessage.innerText = "Please enter the OTP";
        return;
    }

    if (otpInput.value.trim() !== "1234") {
        otpErrorMessage.innerText = "Incorrect OTP. Please try again.";
        return;
    }

    // Navigate to the desired URL
    window.location.href = "https://google.com/link-page";
});

});
  
  