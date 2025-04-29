async function loadHomeSection() {
    try {
        const response = await fetch('api/home_api.php');
        const data = await response.json();
        
        if (data.error) {
            console.error('Error loading about data:', data.error);
            return;
        }
        
        // Update the HTML with the fetched data
        document.querySelector('#home-header').textContent = data.title;
        document.querySelector('#home-desc').textContent = data.content;
    } catch (error) {
        console.error('Error fetching about data:', error);
    }
}
async function loadAboutSection() {
    try {
        const response = await fetch('api/about.php');
        const data = await response.json();
        
        if (data.error) {
            console.error('Error loading about data:', data.error);
            return;
        }
        
        // Update the HTML with the fetched data
        document.querySelector('.about-section h6').textContent = data.subtitle;
        document.querySelector('.about-section h2').textContent = data.title;
        document.querySelector('.about-section .about-text').textContent = data.content;
    } catch (error) {
        console.error('Error fetching about data:', error);
    }
}