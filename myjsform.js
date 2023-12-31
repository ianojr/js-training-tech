let form = document.getElementById("my_form");
form.addEventListener("submit", function (e) {
    e.preventDefault()


    let input1 = document.getElementById("first_name").value
    let input2 = document.getElementById("last_name").value
    let input3 = document.getElementById("users_email").value

    let table = document.getElementById("datatable")

    if ((input1.length == 0) && (input2.length == 0) && (input3 == 0)) {
        document.getElementById("error").innerHTML = "Ensure You insert a value"
    } else {

        let new_row = table.insertRow();
        new_row.insertCell(0).textContent = input1

        new_row.insertCell(1).textContent = input2

        new_row.insertCell(2).textContent = input3
        form.reset()

        // document.getElementById("first_name_answer").innerHTML = input1
        // document.getElementById("last_name_answer").innerHTML = input2
        // document.getElementById("email_answer").innerHTML = input3
    }
})