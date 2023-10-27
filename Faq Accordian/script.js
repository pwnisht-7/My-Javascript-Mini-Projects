const accordians = document.querySelectorAll('.accordian')

accordians.forEach(accordian => {
    const paragraph = accordian.querySelector('.paragraph')
    const btn = accordian.querySelector('.btn')
    btn.addEventListener('click', (e) =>{
        if(e.target.name =='add-outline'){
            paragraph.classList.add('active')
            e.target.name = 'close'
        }
        else{
            paragraph.classList.remove('active')
            e.target.name = 'add-outline'
        }
    })
});