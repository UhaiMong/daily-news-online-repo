const loadNewsCategory = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayCategory(data.data.news_category);
    }
    catch {
        console.log(Error);
    }
}

const displayCategory = (categories) => {
    console.log(categories);
    const navBarContainer = document.getElementById('menubar');

    categories.forEach(category => {
        console.log(category);
        const newAnchor = document.createElement('a');
        newAnchor.classList.add('nav-link');
        newAnchor.innerHTML = `
            <a onclick="newsDetails('${category.category_id?category.category_id:'The content is not available'}')" class="nav-link">${category.category_name}</a>
        `;
        navBarContainer.appendChild(newAnchor);

    })
}

const newsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displayNewsDetails(data.data);   
    }
    catch {
        console.log(Error);
    }
}

const displayNewsDetails = categories => {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ``;
    categories.forEach(category => {
        console.log(category);
        const newDiv = document.createElement('div');
        newDiv.classList.add('row');
        newDiv.innerHTML = `
            <div class="row g-3">
                    <div class="col-md-4">
                        <img src="${category.thumbnail_url}" class="img-fluid rounded-3" alt="${category.thumbnail_url}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">${category.title}</h5>
                            <p class="card-text">${category.details}</p>
                            
                            <div class="row">
                                <div class="d-flex align-items-center col">
                                    <img class="img-fluid w-25 rounded rounded-circle" src="${category.author.img?category.author.img:alt="Empty"}">

                                    <span>
                                        <h6>${category.author.name?category.author.name:"Unknow"}</h6>
                                        <p class="card-text"><smal class="text-muted">${category.author.published_date?category.author.published_date:"not sure"}</small></p>
                                    </span>
                                </div>
                                <h6 class="col">${category.total_view?category.total_view:"0"}</h6>

                                <a class="btn col">Details</a>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        newsContainer.appendChild(newDiv);
    })
}

loadNewsCategory();