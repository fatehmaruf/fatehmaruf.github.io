// function for hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementById("navbar").style.transition = "top 0.2s"
        document.getElementById("navbar").style.top = "0";
    } else {
        document.getElementById("navbar").style.transition = "top 0.2s"
        document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}



const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ['Front End Engineer', 'Web Developer'];
const typingDelay = 100;
const erasingDelay = 75;
const newTextDelay = 1000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;
function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// get id at each web porto
// define array of description each web porto
// show modal
// - when the web porto clicked
// - show modal


const portofolio = [
    {
        id: '1',
        label: 'Soup',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae, iusto vel quisquam temporibus repellendus dolores pariatur laborum porro saepe aut nesciunt ullam lo',
        link: '#',
        img: 'images/porto/spicysoup.jpeg',
        technology: ['HTML', 'CSS', 'Bootstrap']
    },
    {
        id: '2',
        label: 'GuruBisa',
        description: 'Guru Bisa is an ecourse that aims to improve the competence of teaching staff in the field of information technology',
        link: '#',
        img: 'images/porto/gurubisa.jpeg',
        technology: ['HTML, CSS', 'JQuery', 'Bootstrap', 'CodeIgneter']
    },
    {
        id: '3',
        label: 'E-verification',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae, iusto vel quisquam temporibus repellendus dolores pariatur laborum porro saepe aut nesciunt ullam lo',
        link: '#',
        img: 'images/porto/qrcode.jpeg',
        technology: ['HTML, CSS', 'JQuery', 'Bootstrap', 'CodeIgneter', 'Dompdf']
    },
    {
        id: '4',
        label: 'Web Kemala',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis beatae, iusto vel quisquam temporibus repellendus dolores pariatur laborum porro saepe aut nesciunt ullam lo',
        link: '#',
        img: 'images/porto/kemala.jpeg',
        technology: ['HTML, CSS', 'JQuery', 'Bootstrap', 'CodeIgneter', 'Dompdf']
    }
]

//function for add text to each tag at modal
const textModal = (label, description, image, technology, link) => {
    const modalLabel = document.querySelector("#modalLabel");
    // const modalBody = document.querySelector("#modalBody");
    const modalDescription = document.querySelector("#modalDescription");
    const modalLink = document.querySelector("#modalLink");
    const modalImg = document.querySelector("#modalImg");
    const modalHref = document.querySelector("#modalHref");
    modalLabel.innerHTML = '';
    modalLabel.appendChild(document.createTextNode(label));
    modalHref.innerHTML = 'Go to ';
    modalHref.appendChild(document.createTextNode(label));
    // modalBody.innerHTML = '';
    // modalBody.appendChild(document.createTextNode(body));
    modalDescription.innerHTML = '';
    modalDescription.appendChild(document.createTextNode(description));
    modalImg.src = image;
    // modalLink.src = link;
    modalHref.href = link;
    list(technology);
    // modalImg.appendChild(document.createTextNode(description));
}


//function for create list tech
const list = (list) => {
    // console.log(list);
    const ul = document.querySelector("#modalList");
    while (ul.hasChildNodes()) {
        ul.removeChild(ul.firstChild);
    }

    for (var i = 0; i < list.length; i++) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(list[i]));
        ul.appendChild(li);
    }
}


// function for clicked
const portoAsli = document.querySelectorAll(".porto");
portoAsli.forEach(occurence => {
    occurence.addEventListener('click', (e) => {
        const porto = portofolio.filter((portofoli) => portofoli.id == e.delegateTarget.id)[0];
        // console.log(porto);
        textModal(porto.label, porto.description, porto.img, porto.technology, porto.link);
        // console.log(e.delegateTarget.id)
    });
});
