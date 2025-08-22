const form = document.getElementById("itemForm");
const tableBody = document.querySelector("#inventoryTable tbody");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById("itemName").value;
  const qty = document.getElementById("itemQty").value;
  const price = document.getElementById("itemPrice").value;
  const total = qty * price;

  // Create row
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${name}</td>
    <td>${qty}</td>
    <td>₹${price}</td>
    <td>₹${total}</td>
    <td><button class="deleteBtn">❌</button></td>
  `;

  // Add delete button functionality
  row.querySelector(".deleteBtn").addEventListener("click", () => {
    row.remove();
  });

  // Add row to table
  tableBody.appendChild(row);

  // Clear form
  form.reset();
});
