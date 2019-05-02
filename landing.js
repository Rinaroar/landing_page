

let button = document.querySelectorAll('.external')

for (let i=0; i<button.length; i++){
    let jumbotron = button[i]

    jumbotron.addEventListener('click', function(e){

        let response = window.confirm('Etes vous certain de vouloir quitter le site ?')
        if (response === false){
            e.preventDefault()
        }
    })
}

// Proposition 1

/** document.getElementById('test').style.color = "blue"; **/



// Proposition 2

/** let title = document.getElementById('test');

function red(){
    document.body.style.color = "red";
    console.log(document.body.style.color)
};

title.addEventListener("click", red); **/



// Proposition 3

let element = document.getElementById('test');

element.addEventListener('click', function() {
    document.body.style.color = "red";

});

