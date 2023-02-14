const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alert = (message, type) => {
  const wrapper = document.createElement('div')
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>'
  ].join('')

  alertPlaceholder.append(wrapper)
}

const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    alert('Nice, you triggered this alert message!', 'success')
  })
}



(function(){
  const btnEliminacion = document.querySelectorAll(".btnDelete");

  btnEliminacion.forEach(btn =>{
  btn.addEventListener('click',(e)=>{
      e.preventDefault();
      Swal.fire({
          title:"Are you sure to remove this task?",
          showCancelButton:true,
          confirmButtonText:"Delete",
          confirmButtonColor:"#d33",
          backdrop:true,
          icon:"warning",
          showLoaderOnConfirm:true,
          preConfirm:()=>{
              location.href = e.target.href
          },
          allowOutsideClick:()=>true,
          allowEscapeKey:()=>true,
      });
  });
});
})();

$(".alert-dismissible").fadeTo(1000, 500).slideUp(1000, function(){
  $(".alert-dismissible").alert('close');
});