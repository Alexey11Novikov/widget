import "./style.css";

// function send(event, php){
//   console.log("Отправка запроса");
//   event.preventDefault ? event.preventDefault() : event.returnValue = false;
//   var req = new XMLHttpRequest();
//   req.open('POST', php, true);
//   req.onload = function() {
//       if (req.status >= 200 && req.status < 400) {
//       json = JSON.parse(this.response); // Ебанный internet explorer 11
//           console.log(json);

//           // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
//           if (json.result == "success") {
//               // Если сообщение отправлено
//               alert("Сообщение отправлено");
//           } else {
//               // Если произошла ошибка
//               alert("Ошибка. Сообщение не отправлено");
//           }
//       // Если не удалось связаться с php файлом
//       } else {alert("Ошибка сервера. Номер: "+req.status);}};

//   // Если не удалось отправить запрос. Стоит блок на хостинге
//   req.onerror = function() {alert("Ошибка отправки запроса");};
//   req.send(new FormData(event.target));
//   }

//   // Если не удалось отправить запрос. Стоит блок на хостинге
//   req.onerror = function () {
//     alert("Ошибка отправки запроса");
//   };
//   console.log(event.target);
//   req.send(new FormData(event.target));
// }

document.querySelector("body").insertAdjacentHTML(
  "beforeend",
  `  <button type="button" class="btn main" id="btnCall" data-toggle="modal" data-target="#myModal">Что-то не понравилось?</button>

  <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
            <h4 class="modal-title" id="staticBackdropLabel">Что-то не понравилось?</h4>
          </div>
        <form enctype="multipart/form-data" method="post" id="form">
         <div class="modal-body">
              <div class="container-fluid">
                  <p for="link" class="label-modal">Если у вас возникли трудности с сайтом 
                  или вы просто хотите посоветовать, как нам стать лучше - напишите об этом. Мы всё быстро исправим!</p>
                    <textarea class="form-control textField" autocomplete="off" name="message" id="message"
                        placeholder="Описание ошибки" rows="4"></textarea>
           </div>
              </div>
              <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Закрыть</button>
                  <button type="button" id="btnSubmit" data-dismiss="modal" class="btn btn-primary">Отправить</button>
              </div>
        </form>
      </div>
    </div>
</div>`
);

function onCallModal() {
  $("#myModal").on('show.bs.modal');
}

function send() {
  let msg = document.querySelector("#message").value;
  const data = {

    comment: msg,
    // метки источника трафика
    // UTM_CEK_ADV: cekUTMModule.getBitrixUTMs(),
  };

  $.post("mail.php", data, () => { });
}

document.getElementById("btnCall").onclick = onCallModal;
document.getElementById("btnSubmit").addEventListener("click", () => {
  send();
});
