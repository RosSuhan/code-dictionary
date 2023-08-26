const   from = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".form-first .input-field-input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != "") {
            form.classList.add('secActive');
        }
        else {
            form.classList.remove('secActive');
            alert("input is empty")
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('SecActive'));