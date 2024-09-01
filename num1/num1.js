document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tabs label');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            // Add 'active' class to clicked tab
            tab.classList.add('active');
        });
    });
});

