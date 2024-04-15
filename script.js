document.addEventListener("DOMContentLoaded", (event) => {
    
    var cb = document.getElementById("color-box");
    var cc = document.getElementById("change-color-btn");

    function getRandomColor(){

        let maxVal = 0xFFFFFF;
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        let randColor = randomNumber.toString(16);
        cb.setAttribute("style", "background-color:#"+randColor);
        return randColor;
    }

    cc.addEventListener("click", 
    
        function(){
            getRandomColor();
        },
    );
    console.log("DOM charge");
});