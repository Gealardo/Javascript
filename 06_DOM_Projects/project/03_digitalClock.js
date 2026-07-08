const clock = document.querySelector('.timebox')

setInterval(function(){
 let date=new Date()

 clock.innerHTML= date.toLocaleTimeString();

},1000)
  
