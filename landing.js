

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