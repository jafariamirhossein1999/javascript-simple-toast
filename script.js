
let _config = {
   duration: 200
}
let InformationIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/></svg>'
let DangerIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16"><path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>'
let WarningIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z"/></svg>'
let SuccessIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-lg" viewBox="0 0 16 16"><path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/></svg>'

class toast {
   constructor(message, duration, type, IconType, TextColor) {
      this._TextColor = TextColor;
      this._IconType = IconType;
      this._message = message;
      this._duration = duration;
      this._type = type;
   }

   show() {
      let MyToast = document.querySelector('.toast-message');
      switch (this._type) {
         case "information":

            MyToast.innerText = this._message;
            this._ToastTextColor(MyToast)
            this._ShowIcon(MyToast)
            MyToast.classList.add('toast--visible')
            MyToast.style.backgroundColor = "#2196F3"
            setTimeout(() => {
               MyToast.style.paddingLeft = "100px";
               MyToast.style.paddingRight = "100px";

            }, 100)
            this._destroy(MyToast, this._duration);
            break;
         case "success":
            MyToast.innerText = this._message;
            this._ToastTextColor(MyToast)
            this._ShowIcon(MyToast)
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
            this._ToastTextColor(MyToast)
            this._ShowIcon(MyToast)
            MyToast.classList.add('toast--visible')
            MyToast.style.backgroundColor = "#ffeb3b"
            MyToast.style.color = "#000"
            setTimeout(() => {
               MyToast.style.paddingLeft = "100px";
               MyToast.style.paddingRight = "100px";

            }, 100)
            this._destroy(MyToast, this._duration);
            break;
         case "danger":
            MyToast.innerText = this._message;
            this._ToastTextColor(MyToast)
            this._ShowIcon(MyToast)
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

   _ShowIcon(MyToast) {
      switch (this._IconType) {
         case 'infoIcon':
            MyToast.innerHTML += InformationIcon
            break;
         case 'DangerIcon':
            MyToast.innerHTML += DangerIcon
            break;
         case 'WarningIcon':
            MyToast.innerHTML += WarningIcon
            break;
         case 'SuccessIcon':
            MyToast.innerHTML += SuccessIcon
            break;
         default:

            break;
      }

   }

   _ToastTextColor(MyToast) {

      if (this._TextColor) {
         MyToast.style.color = this._TextColor
      } else {
         MyToast.style.color = "White"
      }



   }
}