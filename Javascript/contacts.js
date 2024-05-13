function submitForm() {
    let name = document.getElementById("name").value;
    let country = document.getElementById("country").value;
    let issue = document.getElementById("issue").value;
    let description = document.getElementById("description").value;
    let notify = document.getElementById("notify").value;

    if (!validate(name, country, issue, description, notify)) {
        return false; // Prevent form submission if validation fails
    }

    let data = {
        name: name,
        country: country,
        issue: issue,
        description: description,
        notify: notify,
    };  

    console.log('Form data:', data);

    fetch('register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the entire data object as JSON
    })
    .then(response => {
        console.log('Server response:', response);  // Log the response object
        if (response.ok == true) {
            try {
                console.log("Redirecting to index.html");
                window.location.href = 'http://127.0.0.1:5500/index.html';
                // window.location.href = '';
            } catch (error) {
                console.error('Error during redirect:', error);
            }
        }
        return response.json();
    })
    .then(responseData => {
        console.log('Response data:', responseData);
        
    })
    .catch(error => {
        console.error('Error during fetch:', error);
    });

    return false;  // Prevent the form from traditional submission
}

function validate(name, country, issue, description, notify) {
    
    let error = false;
    document.getElementById("validate_name").innerHTML = "&nbsp; ";
    document.getElementById("validate_country").innerHTML = "&nbsp; ";
    document.getElementById("validate_issue").innerHTML = "&nbsp; ";
    document.getElementById("validate_description").innerHTML = "&nbsp; ";
    document.getElementById("validate_notify").innerHTML = "&nbsp; ";

    if (name === "") {
        document.getElementById("validate_name").innerHTML = "Debe completar el campo";
        error = true;
    }
    if (country === "") {
        document.getElementById("validate_country").innerHTML = "Debe completar este campo";
        error = true;
    }
    if (issue === "") {
        document.getElementById("validate_issue").innerHTML = "Debe completar este campo";
        error = true;   
    }
    if (description === "") {
        document.getElementById("validate_description").innerHTML = "Debe completar este campo";
        error = true;   
    }
    else if (notify === "") {
        document.getElementById("validate_notify").innerHTML = "Debe completar este campo";
        error = true;
    }

    return !error; // Return true if validation passed, false if there are errors
}