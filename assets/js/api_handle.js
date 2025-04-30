async function loadHomeSection() {
    try {
        const response = await fetch('api/home_api.php');
        const data = await response.json();
        if (data.error) {
            console.error('Error loading about data:', data.error);
            return;
        }
        console.log("querySelector");
        if  (data)
        {
            document.querySelector('#home-header').textContent = data.title;
            document.querySelector('#home-desc').textContent = data.content;
            
            if (data.image_name?.trim()) {
                console.log(data.image_name);
                document.querySelector('#home-image').src = data.image_name;
            }
            else
            {
                document.querySelector('#home-image').style.display = 'none';
            }
          
            if (data.link?.trim() && data.button?.trim()) {
                console.log(data.link);
                document.querySelector('#home-link').href = data.link;
                document.querySelector('#home-button').textContent = data.button;
            }
            document.querySelector('#home-link').classList.toggle('hidden', !(data.link?.trim() && data.button?.trim()));
        }
        // Update the HTML with the fetched data
       
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