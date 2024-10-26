document.getElementById("input-wrapper-button").addEventListener("click", function() {
    // Get the input value
    const inputValue = document.getElementById("input-wrapper-input").value;
    // Get the current date
    const date = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }); // Format: "20 Oct"
    
    // Check if the input value is not empty
    if (inputValue.trim() !== "") {
        // Create a new content box div
        const contentBox = document.createElement("div");
        contentBox.id = "content-box";

        // Create the span holder div
        const spanHolder = document.createElement("div");
        spanHolder.id = "content-box-spanholder";

        // Create the name span
        const nameSpan = document.createElement("span");
        nameSpan.id = "content-box-spanholder-name";
        nameSpan.textContent = inputValue; // Set the name from input

        // Create the date span
        const dateSpan = document.createElement("span");
        dateSpan.id = "content-box-spanholder-date";
        dateSpan.textContent = date; // Set the date

        // Append the spans to the span holder
        spanHolder.appendChild(nameSpan);
        spanHolder.appendChild(dateSpan);

        // Create the paragraph
        const para = document.createElement("p");
        para.id = "content-box-para";
        para.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing."; // Default text

        // Append span holder and paragraph to the content box
        contentBox.appendChild(spanHolder);
        contentBox.appendChild(para);

        // Append the content box to the parent div
        document.getElementById("parent-content-box").appendChild(contentBox);

        // Clear the input field after adding
        document.getElementById("input-wrapper-input").value = "";
    } else {
        alert("Please enter a name."); // Alert if input is empty
    }
});