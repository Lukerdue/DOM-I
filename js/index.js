const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};
const sections = ['Services', 'Product', 'Vision', 'Features', 'About', 'Contact']
// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
let nav = document.querySelector('nav')
let links = document.querySelectorAll('nav a'

)
let newLinkOne = document.createElement('a')
newLinkOne.href = '#Blog';
newLinkOne.textContent = 'Blog';
newLinkOne.style.color = "green";

let newLinkTwo = document.createElement('a')
newLinkTwo.href = '#home';
newLinkTwo.textContent = 'Home';
newLinkTwo.style.color = "green";

nav.appendChild(newLinkOne)
nav.prepend(newLinkTwo)
let linkFunc = function(){
  
  for (let i = 0; i < links.length; i++){
    links[i].textContent = sections[i]
    links[i].style.color = 'green'
  }
}
linkFunc()


const title = document.querySelector('h1')
title.textContent = 'Dom is Awesome'
document.querySelector('button').textContent = 'Get Started'

let headImg = document.getElementById('cta-img')
headImg.setAttribute('src',siteContent['cta']['img-src'] )

// MAIN CONTENT
let contHeadings = document.querySelectorAll('h4')
let sectionHeadings = function(){
  for (let i = 0; i < contHeadings.length; i++){
    contHeadings[i].textContent = sections[i]
  }
}

sectionHeadings()

let sectP = document.querySelectorAll('.main-content p')
let contP = function(){
  for (let i = 0; i < sectP.length; i++){
    sectP[i].textContent = `${sections[i]} content Nulla facilisis mi quis ligula euismod, porta dictum mauris faucibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam sollicitudin vitae odio eget porta. Suspendisse pulvinar ipsum eu tortor pharetra, at sagittis arcu lobortis.`
  }
}
contP()
let mainImg = document.getElementById('middle-img')
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src'])


//CONTACT

let contact = document.querySelectorAll('.contact p')
let contInfo = function (){
  const arr = Object.values(siteContent['contact'])
  for (let i = 0; i < contact.length; i++){
    contact[i].textContent = arr[i+1]
  }
}
contInfo()

// Footer!

document.querySelector('footer p').textContent = siteContent.footer.copyright