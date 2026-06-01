const elemento = {
    aside: document.querySelector('aside'),
    section: document.querySelectorAll('section'),
};

//monitora os eventos do aside
elemento.aside.addEventListener('click', (e) => {
    e.preventDefault(); // Impede o comportamento padrão do link
    console.log(e.target); // Imprime o elemento clicado no console//
    displayController(e.target.id); // Chama a função de controle de exibição passando o id do elemento clicado
    });

    //função de controle de exibição das seções
function displayController(id) {
    elemento.section.forEach((section) => {
        //verifica se o id da seção é igual ao id passado como argumento
        if(!section.classList.contains("hidden")){
            section.classList.add("hidden");
        }


        //Remove a classe "hidden" da seção correspondente ao id passado como argumento
        if(!section.classList.contains(id)){
            section.classList.remove("hidden");
        }
    });

}
