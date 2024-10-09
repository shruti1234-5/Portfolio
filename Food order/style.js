// Function to handle form submission 
function submitForm(event) {   
    event.preventDefault(); // Prevent default form submission 

    // Log form data to the console     
    const formData = new FormData(event.target);    
     for (const [name, value] of formData.entries()) {  
             console.log(`${name}: ${value}`); 
  }

  // Reset the form 
     event.target.reset(); 

  // Show the popup   
    document.getElementById("popup").style.display = "block"; 
}

// Function to close the popup 
function closePopup() {    
   document.getElementById("popup").style.display = "none"; 
}

// Attach event listener to the form 
document.getElementById("contact-form").addEventListener("submit", submitForm);  
// Open the modal when "Order Now" button is clicked 
document.getElementById("OrderNowBtn").addEventListener("click", function () {  
     document.getElementById("foodModal").style.display = "block"; 
});

// Close the modal 
function closeModal() {   
    document.getElementById("foodModal").style.display = "none"; 
}

// Function to populate food items based on selected category 
function populateFoodItems() { 
      var foodCategory = document.getElementById("foodCategory").value;  
         var foodItemsSelect = document.getElementById("foodItems"); 

  // Clear previous options  
     foodItemsSelect.innerHTML = ""; 


  // Define food items for each category     
  var foodItems = {       
      indian: ["Butter Chicken", "Naan", "Biryani", "Samosa"], 
              italian: ["Pizza", "Pasta", "Lasagna", "Risotto"],  
                     chinese: ["Spring Rolls", "Fried Rice", "Chow Mein", "Dumplings"] 
      // Add more food items as needed 
  };

  // Populate food items dropdown based on selected category 
      foodItems[foodCategory].forEach(function (item) {         
        var option = document.createElement("option");       
          option.text = item;     
              foodItemsSelect.add(option); 
  }); 
}

// Populate food items dropdown when category changes 
document.getElementById("foodCategory").addEventListener("change", populateFoodItems); 

// Function to place order 
function placeOrder() {     
  var foodCategory = document.getElementById("foodCategory").value;  
     var selectedFood = document.getElementById("foodItems").value; 

// Display order confirmation   
  alert("Order placed!\nCategory: " + foodCategory + "\nFood: " + selectedFood); 
closeModal(); // Close the modal after placing the order 
}

