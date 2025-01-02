document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("transaksiForm").addEventListener("submit", function(e) {
        e.preventDefault();

    
        const nama = document.getElementById("nama").value;
        const jumlah = document.getElementById("jumlah").value;
        const kategori = document.getElementById("kategori").value;

    
        const table = document.querySelector("table tbody");
        const newRow = document.createElement("tr");

       
        newRow.innerHTML = `
            <td>${nama}</td>
            <td>${jumlah}</td>
            <td>${kategori}</td>
        `;
        table.appendChild(newRow);

       
        document.getElementById("transaksiForm").reset();

        alert("Transaksi berhasil disimpan!");
    });
});
const validUsername = "user123";
const validPassword = "password123";
function validateLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    if (username === validUsername && password === validPassword) {
        return true;
    } else {
        document.getElementById("error-message").style.display = "block";
        return false;
    }
}
// Function to handle the "Pesan" button click
function handlePesan() {
    const nama = document.getElementById("nama").value;
    const jumlah = document.getElementById("jumlah").value;
    const kategori = document.getElementById("kategori").value;

    // Validate the form data before proceeding with the "Pesan"
    if (nama === "" || jumlah === "" || kategori === "") {
        alert("Harap lengkapi semua field sebelum melakukan pemesanan.");
        return; // Stop if any field is empty
    }

    // Logic for handling the transaction (can be expanded for actual processing)
    alert(`Transaksi Berhasil!\nNama: ${nama}\nJumlah: ${jumlah}\nKategori: ${kategori}`);
    
    // Optionally, reset the form or take the user to a confirmation page
    document.getElementById("transaksiForm").reset();
}

