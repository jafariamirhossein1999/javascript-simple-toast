
let _config = {
   duration: 200
}

class toast {
   show(message, myduration = 300) {
      let MyToast = document.querySelector('.toast-message');
      MyToast.innerText = message;
      MyToast.classList.add('toast--visible')
      setTimeout(() => {
         MyToast.style.paddingLeft = "100px";
         MyToast.style.paddingRight = "100px";
         MyToast.style.borderBottom = "solid 10px red";
      }, 100)
   this._destroy(MyToast, myduration);
   }
   _destroy(MyToast, myduration) {

      setTimeout(() => {
         MyToast.classList.remove('toast--visible')
         MyToast.style.paddingLeft = "16px";
         MyToast.style.paddingRight = "16px";
         MyToast.style.borderBottom = "solid 2px red";
      }, myduration)
   }
}