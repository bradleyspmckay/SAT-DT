document.querySelectorAll('.submit_rating').forEach(function(button) {
    button.addEventListener('click', function(event) {
        const form = button.closest('form');
        const formData = new FormData(form);
        let answerString = "Answers - "
        for (let [key, value] of formData.entries()) {
            fieldName = key.charAt(0).toUpperCase() + key.slice(1)
            answerString += `${fieldName}: ${value} `
            console.log(answerString);
        }
        form.querySelector("p").innerText = answerString
    });
})
