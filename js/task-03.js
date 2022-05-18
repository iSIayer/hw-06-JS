const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");
console.log(gallery);

const iterationImages = images.map((image) => `<li><img src ="${image.url}" alt ="${image.alt}" width="600" height="400"/></li>`).join("");
console.log(iterationImages);

gallery.insertAdjacentHTML("beforeend", iterationImages);

gallery.style.listStyle = "none";
gallery.style.display = "flex";
gallery.style.flexWrap = "wrap";
gallery.style.justifyContent = "space-around";
gallery.style.alignItems = "center";
gallery.style.margin = "0 auto";
gallery.style.padding = "20px";
gallery.style.border = "2px solid black";
gallery.style.borderRadius = "10px";
gallery.style.backgroundColor = "palevioletred";

















