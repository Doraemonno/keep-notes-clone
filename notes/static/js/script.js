// script.js
document.addEventListener('DOMContentLoaded', function() {
    console.log("hello");
    var notes = document.querySelectorAll('.card');
    var overlay=document.querySelector('.overlay');
    var description=document.querySelector('#description');
    var box=document.querySelector('.box');

    description.addEventListener('focus',function()
    {
        box.classList.add("focused")
    })
    document.addEventListener('click', function(event) {
        if (!box.contains(event.target)) {
             box.classList.remove('focused');
        }
    });


    notes.forEach(function(note) {


        note.addEventListener('focus', function(event) {
            var rect = note.getBoundingClientRect();
            var containerRect = note.parentElement.getBoundingClientRect();
            var translateX = window.innerWidth / 2 - (rect.left + rect.width / 2);
            var translateY = window.innerHeight / 2 - (rect.top + rect.height / 2);

            note.style.transform = 'translate(' + translateX + 'px, ' + translateY + 'px)';
            
            note.querySelector('.card-title').setAttribute("contenteditable","true");
            note.querySelector('.card-text').setAttribute("contenteditable","true");
            
        });



        note.addEventListener('blur', function(event) {
            note.style.transform = 'translate(0, 0)';
            note.querySelector('.card-title').removeAttribute("contenteditable");
            note.querySelector('.card-text').removeAttribute("contenteditable");
        });

        
    });
});
