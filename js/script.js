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
            <a onclick="newsDetails('${category.id}')" class="nav-link">${category.category_name}</a>
        `;
        navBarContainer.appendChild(newAnchor);

    })
}

const newsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`;

    console.log(url);
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
    categories.forEach(category => {
        console.log(category);
    })
}

loadNewsCategory();