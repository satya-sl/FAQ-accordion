const signs = document.getElementsByClassName("sign");
const answers = document.getElementsByClassName("answer");

// Loop through each element with the class "sign"
for (let i = 0; i < signs.length; i++) {
    signs[i].addEventListener('click', function() {
        console.log('Clicked on sign element');

        // Toggle the image source and display of the corresponding answer element
        if (this.src.endsWith("icon-plus.svg")) {
            // Hide all answers and reset all signs
            for (let j = 0; j < answers.length; j++) {
                answers[j].style.display = 'none';
                signs[j].src = "assets/images/icon-plus.svg";
            }

            // Show the current answer and change the sign
            this.src = "assets/images/icon-minus.svg";
            answers[i].style.display = 'block';
            
            console.log('Changed to minus');
        } else {
            // Toggle back to plus and hide the answer
            this.src = "assets/images/icon-plus.svg";
            answers[i].style.display = 'none';
            
            console.log('Changed to plus');
        }
    });
}
