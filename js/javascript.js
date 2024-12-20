let itemCount = 0;

function addToCart() {
    itemCount++;
    document.getElementById('cartCount').innerText = itemCount;
}


document.getElementById('submitButton').onclick = function() {
    
    var name = document.querySelector('.name').value;
    var phone = document.querySelector('.phone').value;
    
    
    if (name && phone) {
        
        document.getElementById('responseMessage').style.display = 'block';
        
        
        document.querySelector('.name').value = '';
        document.querySelector('.phone').value = '';
    }
};