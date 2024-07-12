const warnabtn = document.querySelector('.colorBtn')

function ubahwarna(){
    if(warnabtn.style.backgroundColor === 'lightblue'){
        warnabtn.style.backgroundColor = '';
    }else{
        warnabtn.style.backgroundColor = 'lightblue';
    }
}
    warnabtn.onclick = ubahwarna;


const btn = document.querySelector('.btn');
btn.addEventListener('click', function(){
    const ul = document.querySelector('.ul');
    const newli = document.createElement('li');
    const textbaru = document.createTextNode('list item baru');

    newli.appendChild(textbaru);
    ul.appendChild(newli);
})

