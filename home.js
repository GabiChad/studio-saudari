// Fruta image-pops section
let list1 = document.querySelector(".fruta-image-pops-section1");
list1.addEventListener("mousemove", () => addNew(list1, imageSources1));

let imageSources1 = [

'https://i.pinimg.com/originals/1a/b3/7f/1ab37fe262dc6d994baef655859e2988.jpg',
'https://i.pinimg.com/originals/e8/57/00/e85700b00c04850a8b2e505434e4d8d0.jpg',
'https://i.pinimg.com/originals/d5/c5/c1/d5c5c1831d8f318720c30efefd9dfb84.jpg',
'https://i.pinimg.com/originals/c4/67/c8/c467c8c8eeb5ece1891de7dc60db93c4.jpg',
'https://i.pinimg.com/originals/d6/4b/16/d64b16ad730ec0b8bc69c0037dde5337.jpg',
'https://i.pinimg.com/originals/1b/3d/d9/1b3dd99580556c100d3da78059b18d8c.jpg',
'https://i.pinimg.com/originals/ab/bc/c4/abbcc4673b3009fc4747492ea2a95792.jpg',
'https://i.pinimg.com/originals/1b/3d/d9/1b3dd99580556c100d3da78059b18d8c.jpg',
'https://i.pinimg.com/originals/a5/d1/00/a5d1005838df398c87bb3fdb29160e16.jpg',
'https://i.pinimg.com/originals/d8/d0/6e/d8d06e829c34678fa05ffc8fe148bf1a.jpg',
'https://i.pinimg.com/originals/4a/40/40/4a40405d43ba404dedf75c54c12db5f9.jpg',
'https://i.pinimg.com/originals/51/a0/b6/51a0b69a44da30548cd4bbb8bfc4250a.jpg',
'https://i.pinimg.com/originals/fe/e0/22/fee022c5a5aa27c2ccaa64a14433be21.jpg',
'https://i.pinimg.com/originals/29/b7/df/29b7df0ab1f787070abb762ee1390038.jpg',
'https://i.pinimg.com/originals/87/23/f5/8723f5ca7e0a5d4e731c4fdd9de0483f.jpg',
'https://i.pinimg.com/originals/d6/4b/16/d64b16ad730ec0b8bc69c0037dde5337.jpg',
'https://i.pinimg.com/originals/d5/c5/c1/d5c5c1831d8f318720c30efefd9dfb84.jpg',
'https://i.pinimg.com/originals/d6/5b/3d/d65b3def758e47859a01d84eb0a0056b.jpg',
'https://i.pinimg.com/originals/0c/58/a0/0c58a0483f66d2ad61603c504d3ea9f1.jpg',
'https://i.pinimg.com/originals/9b/9b/dc/9b9bdce3ebef59d39f1b7c770f102990.jpg'
];


function addNew(list, imageSources) {
    let ni = document.createElement("img");
  
    let randomIndex = Math.floor(Math.random() * imageSources.length);
    ni.src = imageSources[randomIndex];
  
    let z = -95 + Math.random() * 90;
    ni.style.left = Math.random() * window.innerWidth + "px";
    ni.style.top = Math.random() * 600 + "px";
    list.appendChild(ni);
  
    setTimeout(() => {
      ni.remove();
    }, 2000); // Adjust the time duration as needed
  }


// Petala image-pops section
let list2 = document.querySelector(".petala-image-pops-section2");
list2.addEventListener("mousemove", () => addNew(list2, imageSources2));

let imageSources2 = [
 
'https://i.pinimg.com/originals/84/c7/08/84c7088dd3efb02bc5f83539daca4bd5.jpg',
'https://i.pinimg.com/originals/d2/65/94/d26594b12c46b04b3d69d71d2e6f8754.jpg',
'https://i.pinimg.com/originals/f5/ed/19/f5ed191e2ad1a2352c1994b9b36da7ea.jpg',
'https://i.pinimg.com/originals/85/8b/c8/858bc8faedf94b149bbbace00bf2f78f.jpg',
'https://i.pinimg.com/originals/d6/9b/06/d69b0610b504f2d1b3256e0f5b25c4e0.jpg',
'https://i.pinimg.com/originals/d7/e7/b8/d7e7b815dc723eff2da982e71f7f1256.jpg',
'https://i.pinimg.com/originals/d0/72/ea/d072eabf506f8c2a37f11cb02b873f21.jpg',
'https://i.pinimg.com/originals/17/62/83/17628380b9a72a98a571d11098b9d712.jpg',
'https://i.pinimg.com/originals/05/30/48/053048b13dcf418f2bc924a28c68da5a.jpg',
'https://i.pinimg.com/originals/be/59/7f/be597fb01e7a71498e82c8ad62feca38.jpg',
'https://i.pinimg.com/originals/94/f7/ea/94f7ea5fdb2900beeb0aa9dd7b601cfc.jpg',
'https://i.pinimg.com/originals/1a/b0/60/1ab060ded11da03cc73b4e896ed3bb47.jpg'
];


function addNew(list, imageSources) {
    let ni = document.createElement("img");
  
    let randomIndex = Math.floor(Math.random() * imageSources.length);
    ni.src = imageSources[randomIndex];
  
    let z = -95 + Math.random() * 90;
    ni.style.left = Math.random() * window.innerWidth + "px";
    ni.style.top = Math.random() * 600 + "px";
    list.appendChild(ni);
  
    setTimeout(() => {
      ni.remove();
    }, 2000); // Adjust the time duration as needed
  }


//   Slideshow Petala
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("petala-mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000); // Change slide every 2 seconds
}

showSlides();


