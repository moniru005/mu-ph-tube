const handleCategory = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/videos/categories');
    const data = await res.json();
    const categories = data.data;
    console.log(categories);

    const tabContainer = document.getElementById('tab-container');

    categories.forEach(category => {
        console.log(category);

        const tabCategory = document.createElement('div');
        tabCategory.innerHTML = `
        <a class="tab">${category.category}</a> 
        `;
        tabContainer.appendChild(tabCategory);
    });
    

}

handleCategory();