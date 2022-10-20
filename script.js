
let _config = {
   duration: 200
}
class toast {
constructor(message,duration,type){
this._message = message;
this._duration = duration;
this._type = type;
   }

   show() {
      let MyToast = document.querySelector('.toast-message');
  switch(this._type){
case "information":

   MyToast.innerText = this._message;
   MyToast.classList.add('toast--visible')
   setTimeout(() => {
      MyToast.style.paddingLeft = "100px";
      MyToast.style.paddingRight = "100px";
  
   }, 100)
this._destroy(MyToast, this._duration);
break;
case "success":
   MyToast.innerText = this._message;
   MyToast.classList.add('toast--visible')
   MyToast.style.backgroundColor = "#4CAF50"
   setTimeout(() => {
      MyToast.style.paddingLeft = "100px";
      MyToast.style.paddingRight = "100px";
  
   }, 100)
this._destroy(MyToast, this._duration);
break;
case "warning":
   MyToast.innerText = this._message;
   MyToast.classList.add('toast--visible')
   MyToast.style.backgroundColor = "#ffeb3b"
   setTimeout(() => {
      MyToast.style.paddingLeft = "100px";
      MyToast.style.paddingRight = "100px";
  
   }, 100)
this._destroy(MyToast, this._duration);
break;
case "danger":
   MyToast.innerText = this._message;
   MyToast.classList.add('toast--visible')
   MyToast.style.backgroundColor = "#ff5722"
   setTimeout(() => {
      MyToast.style.paddingLeft = "100px";
      MyToast.style.paddingRight = "100px";
  
   }, 100)
this._destroy(MyToast, this._duration);
break;
default:
   alert('hello world');
  }
   }
   _destroy(MyToast) {

      setTimeout(() => {
         MyToast.classList.remove('toast--visible')
         MyToast.style.paddingLeft = "16px";
         MyToast.style.paddingRight = "16px";
   
      }, this._duration)
   }
}