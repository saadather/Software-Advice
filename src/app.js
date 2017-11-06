import "./style.less";
var number;
class Modal {
  constructor(overlay) {
    this.overlay = overlay;
    const closeButton = overlay.querySelector(".button-close");
    closeButton.addEventListener("click", this.close.bind(this));
  }
  open() {
    number = localStorage.getItem('number') || Math.ceil(Math.random() * 2);
    localStorage.setItem('number', number);    
    document
      .querySelector("#imageVariation")
      .setAttribute("src", `./src/assets/${number}.png`);
    let obj = {
      session_id: new Date()
    };
    console.log(obj);
    this.overlay.classList.remove("is-hidden");
  }

  close() {
    this.overlay.classList.add("is-hidden");
  }
}
const modal = new Modal(document.querySelector(".modal-overlay"));
window.openModal = modal.open.bind(modal);

document.getElementById("name").addEventListener("input", function (evt) {
  console.log(this.value); 
});


document.querySelector(".form").addEventListener("submit", function(e) {
  e.preventDefault();  
  let obj = {
    'Name' : document.forms[0].name.value,
    'Email': document.forms[0].email.value,
    'Phone': document.forms[0].phone.value,
    'Address': document.forms[0].address.value,
    'City': document.forms[0].city.value,
    'State': document.forms[0].state.value,
    'Zipcode': document.forms[0].zipcode.value,
    'Layout variation': number
  };
  console.log(obj);
  modal.close();
});
