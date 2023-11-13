const btn_Alert = document.getElementById("btn_Alert");
const btn_send = document.getElementById("btn_send");

btn_Alert.addEventListener("click", () => {
  Swal.fire({
    title: "Do you want to save the changes?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Save",
    denyButtonText: `Don't save`,
    imageUrl: "./images/batman.jpg",
    imageHeight: 150,
    imageAlt: "A batman image",

    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: false,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Changes are not saved", "", "info");
    }
  });
});

btn_send.addEventListener("click", () => {
Swal.fire({
  position: "top-end",
  icon: "success",
  title: "Your datas has been sended",
  showConfirmButton: false,
  timer: 2000
});
});