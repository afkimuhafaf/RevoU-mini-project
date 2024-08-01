function validateForm() {
    const name = document.getElementById("customer-name").value;
    const email = document.getElementById("customer-email").value;

    if (name === "" || email === "") {
        alert  ("Tidak boleh kosong");
}

    if (!email.includes("@")) {
        alert  ("Email harus mengandung @");
}
}
