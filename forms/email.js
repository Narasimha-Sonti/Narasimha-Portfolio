function emailSend()
{
    var params={ 
    name : document.getElementById('name-field').value,
    email : document.getElementById('email-field').value,
    subject : document.getElementById('subject-field').value,
    message : document.getElementById('message-field').value,
    };
    //connect emailjs
    const serviceId = "service_hcr7lgq";
    const templateId = "template_8m31mdi";
    //email sent
    emailjs.send(serviceId,templateId,params)
    .then(
      res =>{
        document.getElementById("name-field").value = "";
        document.getElementById("email-field").value = "";
        document.getElementById("subject-field").value = "";
        document.getElementById("message-field").value = "";
        swal({
          title: "Message Sent Successfully!",
          text: "Thank you for reaching out. I will review your message and get back to you as soon as possible.",
          icon: "success",
          button: "Okay",
          buttonsStyling: false,
          customClass: {
              confirmButton: 'btn btn-primary',
          },
      });      
        console.log(res);
      }
    )
    .catch(err=>console.log(err));

}