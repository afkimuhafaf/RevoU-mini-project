function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
}

    if (name === "") {
        alert  ("Tidak boleh kosong");
        return false;
}

    if (email === "") {
        alert  ("Tidak boleh kosong");
        return false;
}

    if (!email.includes("@")) {
        alert  ("Email harus mengandung @");
        return false;
}

document.getElementById("submit").addEventListener("click", function(){
    return validateForm();
})

