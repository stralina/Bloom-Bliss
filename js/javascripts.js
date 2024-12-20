document.getElementById('subButton').onclick = function() {
    
    var name = document.querySelector('.name').value;
    var email = document.querySelector('.email').value;
    var question = document.querySelector('.question').value;
    
    if (name && email && question) {
        document.getElementById('respseMessage').style.display = 'block';
        
        document.querySelector('.name').value = '';
        document.querySelector('.email').value = '';
        document.querySelector('.question').value = '';
    }
};