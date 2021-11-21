function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function myFunction2() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

let links = document.querySelectorAll('.dropitem');
let dropContentLinks = document.querySelectorAll('dropdown-content a');

links.forEach(dropitem => {
  dropitem.addEventListener('click', function () {
    if (dropitem.classList.contains('active')) {
      dropitem.classList.remove('active');
      dropContentLinks.classList.remove('active');                
    }else{
      links.forEach(btn => btn.classList.remove('active'));
      dropitem.classList.add('active');
    }

  })
});

let img = document.querySelector('.slider-img');
let iterator = 1;
let interval = setInterval(() => {
  iterator++;
  if (iterator > 5) {
    iterator = 1;
  }
  img.src = `images/content/slider-${iterator}.jpg`;
}, 3000);

/* class Scroll {
  constructor(obj){
      if (typeof obj.el == "string") {
          this.element = document.querySelector(obj.el);
      } else if (obj.el instanceof HTMLElement) { // instanceof - проверяет наличие в наследниках класса HTMLElement
          this.element = obj.el;
      }
      this.element.style.position = "fixed";
      this.top = obj.top;
      this.unit = obj.unit;
      this.scroll();
      window.addEventListener("scroll", ()=>{this.scroll()});
      window.addEventListener("resize", ()=>{this.scroll()});
  }
  scroll() {
      this.menuTop = this.scrollNumber()
      console.log(window.pageYOffset);
      if (this.menuTop - window.pageYOffset > 0) {
          this.element.style.top = this.menuTop - window.pageYOffset + "px";            
      } else {
          this.element.style.top = 0;
      }
  }
  scrollNumber() {
      if(this.unit == "px") {
          return this.top >= 0 ? this.top : 0;
      } else if( this.unit == "%" || this.unit == undefined) {
          return window.innerHeight / 100 * this.top - this.element.clientHeight;
      }
  }
}

let y = document.querySelector('.header-info');
const x = new Scroll({
  // el: ".header__nav"
  el: y,
  top: 100,
  unit: "%"
});
console.dir(x.element); */