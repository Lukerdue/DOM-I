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

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//nav
//get nav a tags in array
const navAList = document.querySelectorAll('nav a');
let navATexts = Object.keys(siteContent['nav'])//make object keys into array

//loop over array to add the text-content
for(i=0; i < navATexts.length-1; i++){
  let key = navATexts[i]
  navAList[i].textContent= siteContent['nav'][key];
}

//cta
document.querySelector('h1').textContent = siteContent['cta']['h1'];
document.querySelector('button').textContent = siteContent['cta']['button'];
document.querySelector('#cta-img').src = siteContent['cta']['img-src'];

//top-content
let textKeys = ['features-content',"about-content","services-content","product-content","vision-content"];
let texts = document.querySelectorAll('.text-content p');
for(i=0; i<texts.length; i++){
let contentKeys = textKeys[i];
texts[i].textContent = siteContent['main-content'][contentKeys];
}
//h4 main content
let headerKeys = ["features-h4", "about-h4", 'services-h4', 'product-h4', 'vision-h4'];
let headers = document.querySelectorAll(".main-content .text-content h4");
for(i=0;i<headers.length; i++){
  let contentKeys = headerKeys[i];
  headers[i].textContent = siteContent['main-content'][contentKeys];
}

//img main content
document.querySelector('#middle-img').src = siteContent['main-content']['middle-img-src'];