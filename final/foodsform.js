document.getElementById('myform').addEventListener('submit',function(event) {
    event.preventDefault();
    //alert("Form Submitted");
    const fullname = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const birthday = document.getElementById('birthday').value;
    const state = document.getElementById('state').value;
    const comments = document.getElementById('comments').value;
    

    if (!fullname || !email){
        alert("You need a name, an email.")
        return
    }
   

    const data ={
        name: fullname,
        email: email,
        password: password,
        birthday: birthday,
        state: state,
        comments: comments,
    

    }
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "foodsubmit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8")
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById('message').innerHTML = response.message;
            document.getElementById('myform').innerHTML = "";
            //alert('Form submitted sucessfully.');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.')
        }
    };
    xhr.send();
    console.log(data);
});