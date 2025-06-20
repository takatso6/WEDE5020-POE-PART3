// Wait until the DOM content is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function () {
    // Select the enquiry form element
    const form = document.querySelector("form");
  
    // Listen for the form submission event
    form.addEventListener("submit", function (event) {
      // Prevent the form's default submission which reloads the page
      event.preventDefault();
  
      // Retrieve form input values and trim whitespace where appropriate
      const name = document.getElementById("name").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const email = document.getElementById("email").value.trim();
      // Use optional chaining (?) to avoid errors if no radio button is selected
      const service = document.querySelector('input[name="service"]:checked')?.value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const requests = document.getElementById("requests").value.trim();
  
      // Validate required fields - name, phone, and service selection
      if (!name || !phone || !service) {
        alert("Please fill in all required fields: Full Name, Phone Number, and Service Needed.");
        return; // Stop submission if validation fails
      }
  
      // Compose a confirmation message including all relevant details
      let confirmationMessage = `Thank you for your enquiry, ${name}!\n\n` +
        `Service Needed: ${service}\n` +
        `Preferred Date: ${date || "Not specified"}\n` +
        `Preferred Time: ${time || "Not specified"}\n` +
        `Special Requests: ${requests || "None"}\n\n` +
        `We will get back to you shortly!`;
  
      // Display the confirmation message as an alert popup
      alert(confirmationMessage);
  
      // Reset the form fields after successful submission
      form.reset();
    });
  });
  
// Wait for the page DOM content to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Select all buttons with the class 'copy-button' that will trigger the copy action
    const copyButtons = document.querySelectorAll('.copy-button');
  
    // Iterate over each copy button to attach a click event listener
    copyButtons.forEach(button => {
      button.addEventListener('click', function () {
        // Retrieve the text content from the element immediately before the button
        // This assumes the contact info text is the previous sibling element's text
        const contactDetail = this.previousElementSibling.textContent;
  
        // Create a temporary textarea element to hold the text for copying
        const tempInput = document.createElement('textarea');
        tempInput.value = contactDetail; // Set the textarea value to the contact info text
        document.body.appendChild(tempInput); // Append textarea to document body to enable selection
  
        // Select the textarea content so it can be copied
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // For compatibility with mobile devices
  
        // Execute the copy command to copy the selected text to clipboard
        document.execCommand('copy');
  
        // Remove the temporary textarea element from the DOM as it is no longer needed
        document.body.removeChild(tempInput);
  
        // Notify the user that the contact detail text has been copied successfully
        alert(`Copied to clipboard: ${contactDetail}`);
      });
    });
  });
  // Initialize and add the map
  function initMap() {
    // The location of Bloemfontein IIE Rosebank College (example coords)
    const collegeLocation = { lat: -29.121, lng: 26.214 };
          // Create the map centered at the location
          const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 15,
            center: collegeLocation,
          });
          // Create a marker at the location
          const marker = new google.maps.Marker({
            position: collegeLocation,
            map: map,
            title: "IIE Rosebank College - Bloemfontein",
          });
          // Optional: Info window for the marker
          const infoWindow = new google.maps.InfoWindow({
            content: "<h2>IIE Rosebank College</h2><p>Located in Bloemfontein, South Africa.</p>",
          });
          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        }
    <script async defer src="https://www.google.com/maps/place/University+of+the+Free+State/@-29.1075973,26.1898757,17z/data=!3m1!4b1!4m6!3m5!1s0x1e8fc52b003394f3:0x8dd8523e8f33f2ea!8m2!3d-29.1075973!4d26.1924506!16zL20vMDd2ejB5?entry=ttu&g_ep=EgoyMDI1MDYxNS4wIKXMDSoASAFQAw%3D%3D"></script>

    // Create a footer element
const footer = document.createElement('footer');

// Create a paragraph element
const paragraph = document.createElement('p');
paragraph.textContent = 'SBU Shisanyama & Carwash | Connecting through food and service';

// Append the paragraph to the footer
footer.appendChild(paragraph);

// Append the footer to the body (or another container)
document.body.appendChild(footer);
