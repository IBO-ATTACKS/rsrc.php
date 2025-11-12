document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('clickBtn');
    const demo = document.getElementById('demo');
    
    button.addEventListener('click', function() {
        demo.textContent = 'Button clicked! ' + new Date().toLocaleTimeString();
        demo.style.color = 'green';
    });
});