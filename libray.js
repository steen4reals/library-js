let myLibrary = [
    {title:"Harry Potter",author: "JK Rowling", recommendedBy: "Myself"},
    {title:"Winnie the Pooh",author: "A.A.Milne", recommendedBy: "Ayoub"},
    {title:"Americanah",author: "etc", recommendedBy: "etc"}
    
];

displayLibrary();

//write function to loop through array and display each book on page
function displayLibrary(){
    for(let i =0; i<myLibrary.length; i++){
        var div = document.getElementById('list');
        //create list element
        var li = document.createElement('li');
        
        var content = document.createTextNode(`title is: ${myLibrary[i].title}, author: ${myLibrary[i].author}, recommended by: ${myLibrary[i].recommendedBy}`);
        
        var readButton = document.createElement('button')
        readButton.innerHTML='read'
        
        div.appendChild(li);
        
        li.appendChild(content);
        
        li.appendChild(readButton);
        
        //create event listener next to read button that will change read to not-read on click of button

        readButton.addEventListener('click', changeRead)
}
}

function changeRead(e){
    if(e.target.innerHTML=='read'){
    e.target.innerHTML='notread'
    }
    else{
        e.target.innerHTML='read'
    }
}

function addToLibrary(){

        var div = document.getElementById('list');
        //create list element
        var li = document.createElement('li');
    
        var content = document.createTextNode(`title is: ${myLibrary[myLibrary.length-1].title}, author: ${myLibrary[myLibrary.length-1].author}, recommended by: ${myLibrary[myLibrary.length-1].recommendedBy}`);

        readButton = document.createElement('button')
        readButton.innerHTML='read'

        div.appendChild(li);
        
        li.appendChild(content);

        li.appendChild(readButton);

        readButton.addEventListener('click', changeRead)
}
    


function Book(title, author, recommendedBy){
    this.title=title
    this.author=author
    this.recommendedBy=recommendedBy
};


//this to create a new entry 
function createForm(e){
    //create a form
    // e.preventDefault()
    var form= document.createElement('form');
    form.setAttribute('id', 'form')
    // form.setAttribute('method', 'post')
    //create title input
    var titleInput = document.createElement('input');
    titleInput.setAttribute('type', 'text');
    titleInput.setAttribute('id', 'title');
    titleInput.setAttribute('placeholder', 'title');

    //create author input
    var authorInput = document.createElement('input');
    authorInput.setAttribute('type', 'text');
    authorInput.setAttribute('id', 'author');
    authorInput.setAttribute('placeholder', 'author');

    //create recommendedBy input
    var recommendByInput = document.createElement('input');
    recommendByInput.setAttribute('type', 'text');
    recommendByInput.setAttribute('id', 'recommendedBy');
    recommendByInput.setAttribute('placeholder', 'recommendedBy');

    //create read input
    // var readInput = document.createElement('input');
    // readInput.setAttribute('type', 'text');
    // readInput.setAttribute('id', 'read');
    // readInput.setAttribute('placeholder', 'read');

    var submitInput = document.createElement('input');
    submitInput.setAttribute('type', 'submit');
    submitInput.setAttribute('id', 'submit');
    

    form.appendChild(titleInput)
    form.appendChild(authorInput)
    form.appendChild(recommendByInput)
    // form.appendChild(readInput)
    form.appendChild(submitInput)
    
    document.getElementsByTagName('body')[0].appendChild(form)

    let submitButton = document.getElementById('submit');
    submitButton.addEventListener('click', addBookToLibrary);
}


//create button event listener for new book
let button = document.getElementById('button');
button.addEventListener('click', createForm);

function addBookToLibrary(){
    console.log('working');
    var title = document.getElementById('title').value
    var author = document.getElementById('author').value
    var recommendedBy = document.getElementById('recommendedBy').value
    var book = new Book(title, author, recommendedBy);
    myLibrary.push(book);
    addToLibrary();
    let child=document.getElementById('form')
    child.parentNode.removeChild(child)
}    


