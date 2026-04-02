document.getElementById('myform').addEventListener('submit',(e)=>{
    e.preventDefault();

    const name = document.getElementById('Fullname').value;
    const email = document.getElementById('Email').value;
    const message = document.getElementById('Message').value;

    const btn = e.target.querySelector('button');
    const originalText = btn.textContent;

    btn.textContent = "Sending...";
    btn.disabled = true;


setTimeout(() => {
    alert("Message Sent! ✅");
    btn.textContent = originalText;
    btn.disabled = false;
    this.reset();
}, 1500);

    if(name && email && message){
        console.log("my message:",{name,email,message});

            alert(`
                thank you:
                1.my Name:${name}
                2.my Email:${email}
                3.my Message:${message} 
                your message has been recieved.
                `);

        this.reset();
    }
    
    else
    {
        alert("please fill out all field before you sending");
    }

})