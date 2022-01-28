let selectedColor='blue'

const painting = document.querySelector('.painting')
painting.addEventListener('click',function(e){
    //console.log(e.target)
    e.target.style.backgroundColor=selectedColor
})
painting.addEventListener('dblclick', function(e){
    e.target.style.backgroundColor='white'
})

let palleteColor=document.querySelector('.palette')
palleteColor.addEventListener('click',function(e){
    console.log(e.target.id)
    selectedColor=e.target.id
})
