document.querySelectorAll('.submit_rating').forEach(function(button) {
    button.addEventListener('click', function(event) {
        const form = button.closest('form');
        const formData = new FormData(form);
        let answerString = "> "
        for (let [key, value] of formData.entries()) {
            fieldName = key.charAt(0).toUpperCase() + key.slice(1);
            answerString += `${fieldName}:${value} `;
            console.log(answerString);
        }
        form.querySelector("p").innerText = answerString
    });
})

function openDIA() {
    window.open("https://www.dia.mil/FOIA/FOIA-Electronic-Reading-Room/FileId/161442/")
}
