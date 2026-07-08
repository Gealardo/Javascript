const form = document.querySelector('.pagebox')
// console.log(form);
form.addEventListener('submit',function(e){
  e.preventDefault();

  const h = parseInt(document.querySelector('#height').value)
  const w = parseInt(document.querySelector('#weight').value)

  const r = document.querySelector('.result')

  if(h<0 || isNaN(h) || h===''){
    
    r.innerHTML = `Enter Valid height ${h}`
  }
  else if(w<0 || isNaN(w) || w===''){
    
    r.innerHTML = `Enter Valid weight ${w}`
  }

  else{
    const bmi = (w/((h*h)/10000)).toFixed(2);
    r.innerHTML=`${bmi}`
   
  }

})
