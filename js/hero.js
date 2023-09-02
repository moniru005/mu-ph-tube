const handleCategory = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    // console.log(categories);

    const tabContainer = document.getElementById('tab-container');

    categories.forEach(category => {
        console.log(category);

        const tabCategory = document.createElement('div');
        tabCategory.innerHTML = `
        <a onclick="handleLoadVideos('${category.category_id}')" class="tab bg-gray-300 ">${category.category}</a> 
        `;
        tabContainer.appendChild(tabCategory);
    });
}

const handleLoadVideos = async (id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${id}`);
    const data = await res.json();
    const videos = data.data;

    console.log(videos);

    const videosByCategory = document.getElementById('videos-by-category');
    videosByCategory.textContent = '';

    videos.forEach(video => {
    
        // const sortButton = document.getElementById("sort-by-view");
        // function sortVideosByViews() {
        //     allVideo.sort((a, b) => parseInt(b.others.views) - parseInt(a.others.views)); // Sort in descending order
        //     handleLoadVideos(allVideo); // Display the sorted list
        // }
        // sortButton.addEventListener("click", sortVideosByViews);

        const showVideos = document.createElement('div');
        showVideos.innerHTML = `
        <div class="">
                <div class="relative ">
                    <img class="h-56 w-full lg:h-56 rounded-lg" src="${video.thumbnail}" alt="">
                <div id="play-time" class=" absolute  bottom-4 right-4 text-sm bg-[#171717] w-28 text-center text-white rounded-md"> 
                    <h5 class="p-0.5"> ${Math.floor(video.others.posted_date / 3600 % 24)}hrs ${Math.floor((video.others.posted_date / 60) % 60)}min ago </h5>
                </div>
            </div>
            <div class="flex flex-row gap-2 mt-2 justify-center md:justify-start lg:justify-start ">
                <div class="mt-1 ">
                    <img class="rounded-full w-6 h-6 " src="${video.authors[0].profile_picture}" alt="">
                </div>
                <div class=" ">
                    <h4 class="text-lg font-semibold">${video.title}</h4>
                    <div class="flex flex-row gap-2"> 
                        <h5 class="text-sm"> ${video.authors[0].profile_name}</h5>
                        <div id="verified-image" class=""> 
                            <img src="./images/fi_10629607.png" alt="">
                        </div>
                    </div>
                    <h5 class="text-sm"> ${video.others.views} views</h5>
                    
                </div>
            </div>
        </div>      
        `;

        videosByCategory.appendChild(showVideos);
    });
    
}

handleLoadVideos(id = '1000');
handleCategory();




