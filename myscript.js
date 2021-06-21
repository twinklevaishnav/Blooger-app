let btnShow = document.querySelector('button');
btnShow.addEventListener('click', () => {
//   swal("This Is My Wesite","Hi !","success");
//       swal({
//         title: 'My Title' ,
//         text: 'Welcome ' ,
//         icon: 'success' ,
//         button: 'Custom Button'
    //})
    swal({

        title: "Enter password",
        text: "To Login In",
        content: {
          element: "input",
          attributes: {
            placeholder: "Type your password",
            type: "password",
          },
        },
      });


})
