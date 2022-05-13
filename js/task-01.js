const numberOfList = document.querySelectorAll(".item");
console.log(`Number of categories: ${numberOfList.length}`);

numberOfList.forEach(element => {

    const listCategory = element.querySelector("h2");

    console.log(`Category: ${listCategory.textContent}`);

    const numberOfListItems = element.querySelectorAll('li');
    
    console.log(`Elements ${numberOfListItems.length}`);

});
