
    document.querySelector('.search-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        var searchTerm = document.querySelector('.search-form input[name="q"]').value.toLowerCase();
        
        if (searchTerm === "temple") {
            // Clear previous images
            document.getElementById('imageContainer').innerHTML = '';
            
            // Create and append image elements for temple images
            var image1 = document.createElement('img');
            image1.src = 'https://t3.ftcdn.net/jpg/06/18/51/68/360_F_618516899_5MTPaCA96bARDcFysmB2XZYfzuOiJrtx.jpg'; // Path to your first temple image
            document.getElementById('imageContainer').appendChild(image1);
            
            var image2 = document.createElement('img');
            image2.src = 'https://media.istockphoto.com/id/508628776/photo/sunset-over-kandariya-mahadeva-temple.jpg?s=612x612&w=0&k=20&c=YOpVZmLiY4ccl_aoWRJhfqLpNEDgjyOGuTAKbobCO-U='; // Path to your second temple image
            document.getElementById('imageContainer').appendChild(image2);
        } else if (searchTerm === "beach") {
            // Clear previous images
            document.getElementById('imageContainer').innerHTML = '';
            
            // Create and append image elements for beach images
            var image1 = document.createElement('img');
            image1.src = 'https://cityfurnish.com/blog/wp-content/uploads/2023/08/beach-near-hotel-min-1200x800.jpg'; // Path to your first beach image
            document.getElementById('imageContainer').appendChild(image1);
            
            var image2 = document.createElement('img');
            image2.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXNsYW5kJTIwYmVhY2h8ZW58MHx8MHx8fDA%3D'; // Path to your second beach image
            document.getElementById('imageContainer').appendChild(image2);
        } else if (searchTerm === "country") {
            // Clear previous images
            document.getElementById('imageContainer').innerHTML = '';
            
            // Create and append image elements for country images
            var image1 = document.createElement('img');
            image1.src = 'https://paristickets.tours/wp-content/uploads/2022/09/paris-at-spring.jpg'; // Path to your first country image
            document.getElementById('imageContainer').appendChild(image1);
            
            var image2 = document.createElement('img');
            image2.src = 'https://imageio.forbes.com/specials-images/imageserve/65f60efebed17b2b2b12bbe0/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'; // Path to your second country image
            document.getElementById('imageContainer').appendChild(image2);
        } else {
            // Handle other search terms or display a message
            document.getElementById('imageContainer').innerHTML = '<p>No images found for this search term.</p>';
        }
    });

