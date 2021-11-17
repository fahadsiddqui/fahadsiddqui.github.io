window.onload = function () {
    let student_id = window.location.search.replace('?id=','');
    if(student_id != ''){
        document.getElementById('student_id').value = student_id
    }

};
function save() {
    let student_id = document.getElementById('student_id').value;
    if (student_id != "") {
        update_student();
    } else {
        post_create();
    }
}

function post_create() {
    let student_name = document.getElementById('student_name').value;
    let father_name = document.getElementById('father_name').value;
    let age = document.getElementById('age').value;
    let dob = document.getElementById('dob').value;
    let mobile = document.getElementById('mobile').value;
    let email = document.getElementById('email').value;
    var gender = "";
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else {
        gender = document.getElementById('female').value;
    }

    axios.post('https://pacific-coast-71393.herokuapp.com/user', {
        student_name: student_name,
        father_name: father_name, 
        age: age, 
        dob: dob,
        mobile:mobile,
        email:email,
        gender:gender
    }).then(function (response) {
        console.log(response);
        alert(response.data);
        window.location.href = "./index.html";
    }).catch(function (error) {
        console.log(error);
    })
}

function get_all() {
    axios.get('https://pacific-coast-71393.herokuapp.com/users')
        .then(function (response) {
            console.log(response);
            $html = '';
            response.data.forEach(function (data) {
                $id = data._id;
                console.log(data);
                $html += '<tr>';
                $html += '<td id="student_name_' + $id + '">' + data.student_name + '</td>';
                $html += '<td id="father_name_' + $id + '">' + data.father_name + '</td>';
                $html += '<td id="age_' + $id + '">' + data.age + '</td>';
                $html += '<td id="roll_no_' + $id + '">' + data.dob + '</td>';
                $html += '<td><a href="javascript:void(0)" onclick="get_record(this)" id=' + $id + '>View</td>';
                $html += '</tr>';
            })
            document.getElementById('s-body').innerHTML = $html;
        })
        .catch(function (error) {
            console.log(error)
        })
        .then(function () {

        });
}

function get_record($obj) {
    var id = $obj.getAttribute('id');
    let student_name = document.getElementById('student_name_' + id).innerHTML;
    let father_name = document.getElementById('father_name_' + id).innerHTML;
    let age = document.getElementById('age_' + id).innerHTML;
    let roll_no = document.getElementById('roll_no_' + id).innerHTML;

    document.getElementById('student_name').value = student_name;
    document.getElementById('father_name').value = father_name;
    document.getElementById('age').value = age;
    document.getElementById('roll_no').value = roll_no;
    document.getElementById('student_id').value = id;

}

function update_student() {
    let student_name = document.getElementById('student_name').value;
    let father_name = document.getElementById('father_name').value;
    let age = document.getElementById('age').value;
    let roll_no = document.getElementById('roll_no').value;
    let id = document.getElementById('student_id').value;

    axios.put('https://pacific-coast-71393.herokuapp.com/user/' + id, {
        student_name: student_name, father_name: father_name, age: age, roll_no: roll_no
    }).then(response => {
        console.log(response);
        alert("User Updated");
        get_all();
    }).catch(function (error) {
        console.log(error);
    })
}

// function delete_student() {
//     let id = document.getElementById('student_id').value;
//     axios.delete('https://pacific-coast-71393.herokuapp.com/user/' + id)
//         .then(function (response) {
//             console.log(response);
//             alert("record deleted");
//             get_all();
//         }).catch(function (error) {
//             console.log(error);
//         })
// }

