const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

const h1= document.querySelector('h1')
const h2= document.querySelector('h2')


// console.log(buttons)

buttons.forEach(function (btn){
  // console.log(btn)

  btn.addEventListener('click', function(event){
      // console.log(event)
      // console.log(event.target)
      if(event.target.id === "yellow"){
        body.style.backgroundColor = event.target.id

        h1.style.color='grey';
        h2.style.color='grey';
      }
      if(event.target.id === "grey"){
        body.style.backgroundColor = event.target.id

        h1.style.color='pink';
        h2.style.color='pink';

      }
      if(event.target.id === "pink"){
        body.style.backgroundColor = event.target.id

        h1.style.color='black';
        h2.style.color='black';

      }
      if(event.target.id === "black"){
        body.style.backgroundColor = event.target.id
        h1.style.color='white';
        h2.style.color='white';
      }
      
  })

})