const items = document.querySelectorAll('.item')
const view = document.querySelector('.banner')


//Open gallery
view.addEventListener('click', () => {
    view.classList.toggle('openGallery')

})



//Show img
items.forEach(item => {
    const upBtn = item.lastElementChild;
    
    item.addEventListener('click', () => {
        items.forEach(itm => {
            itm.classList.remove('expand')
        })
        item.classList.add('expand')
        
    })

    upBtn.addEventListener('click', () => {
        item.classList.toggle('showCaption')
    })
})