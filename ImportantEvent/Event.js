

// event adding
const btn1=document.querySelector('#myBtn')

btn1.addEventListener('click', function(){
  
  alert('button clicked')

})

    // const parent = document.querySelector('#myparent');
    // const child = document.querySelector('#mychild');

    // --- TEST SCENARIO 1: Both False (Bubbling) ---

  /*
    parent.addEventListener('click', function() {
       console.log('Parent (false/bubble)');
    }, false);

    child.addEventListener('click', function(e) {
        console.log('Child (false/bubble)');
        // e.stopPropagation(); // Uncomment to test
    }, false);

  */  

    // --- TEST SCENARIO 2: Both True (Capturing) ---

  /*
   
    parent.addEventListener('click', function() {
        console.log('Parent (true/capture)');
    }, true);

    child.addEventListener('click', function() {
        console.log('Child (true/capture)');
    }, true);

  */  
    

    // --- TEST SCENARIO 3: Mixed ---

    
    // parent.addEventListener('click', function() {
    //     console.log('Parent (true/capture)');
    // }, true);

    // child.addEventListener('click', function() {
    //     console.log('Child (false/bubble)');
    // }, false);



    // prevent default
    const submitform=document.querySelector("#myForm")
    submitform.addEventListener('submit',function(e){
      e.preventDefault();
      console.log("submited without reroding")
    })

    //stop propagation
    const father=document.querySelector('#parent')
    const son=document.querySelector('#child')
    father.addEventListener('click',function(){
      console.log('this parent clicked')
    })
     son.addEventListener('click',function(e){
      console.log('this son clicked')
      e.stopPropagation()
    })

    const newli=document.createElement('li')
    const text=document.createTextNode('Extra Task')
    newli.appendChild(text)
    const list1=document.querySelector("#todoList")
    list1.appendChild(newli)
  

    // const todoList=document.querySelectorAll('li')

    // todoList.forEach(function(li){
    //   li.addEventListener('click',function(e){
    //     console.log("clicked ",e.target)
    //   })
    // })
    // 1. Select the PARENT (the ul)
const listContainer = document.querySelector('#todoList');

// 2. Add ONLY ONE event listener to the parent
listContainer.addEventListener('click', function(e) {
    
    // 3. Check if the clicked target is actually an LI
    if (e.target.tagName === 'LI') {
        console.log("Clicked: ", e.target.innerText);
        
        // Bonus: Strike it through to show it's done
        e.target.style.color='red' 
    }
});

// ==========================================
// JS EVENTS - CHEAT SHEET & NOTES
// ==========================================

// 1. ADD EVENT LISTENER (Standard way)
const btn = document.querySelector('#myBtn');

btn.addEventListener('click', function(e) {
    console.log('Button clicked');
    
    // Event Object (e) properties:
    console.log(e.target);    // The exact element that was clicked
    console.log(e.type);      // The type of event ('click')
    console.log(e.clientX);   // Mouse X coordinate
});


// 2. PREVENT DEFAULT BEHAVIOR
// Stops browser defaults like form submission or link navigation
const form = document.querySelector('#myForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevents page reload
    console.log('Form submitted without reloading');
});


// 3. EVENT BUBBLING & STOP PROPAGATION
// Events bubble up from child -> parent -> body -> html
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

parent.addEventListener('click', function() {
    console.log('Parent div clicked');
});

child.addEventListener('click', function(e) {
    console.log('Child button clicked');
    
    // Uncomment the line below to stop the event from reaching the parent
    // e.stopPropagation(); 
});


// 4. EVENT DELEGATION (Most important for projects)
// Instead of adding listeners to every child, add ONE to the parent.
// This works for dynamically added elements too.
const list = document.querySelector('#todoList');

list.addEventListener('click', function(e) {
    // Check if the clicked target is an LI
    if (e.target.tagName === 'LI') {
        e.target.style.textDecoration = 'line-through';
        console.log('Toggled task:', e.target.innerText);
    }
});


// 5. REMOVING EVENT LISTENERS
// You MUST use a named function reference. Anonymous functions cannot be removed.
const removeB = document.querySelector('#removeBtn');

function handleClickOnce() {
    console.log('This will only print once');
    
    // Remove the listener after it runs
    removeB.removeEventListener('click', handleClickOnce);
}

removeB.addEventListener('click', handleClickOnce);



