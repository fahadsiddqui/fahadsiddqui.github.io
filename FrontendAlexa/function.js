function post_create(){
let student_name = document.getElementById('student_name').value;
let father_name = document.getElementById('father_name').value;
let age = document.getElementById('age').value;
let roll_no = document.getElementById('roll_no').value;

axios.post('http://pacific-coast-71393.herokuapp.com/user',{
    student_name:student_name, father_name:father_name,age:age,roll_no:roll_no
}).then(function(response){
    console.log(response);
    alert(response.data);
}).catch(function(error){
    console.log(error);
})
}



function get_all(){
axios.get('http://pacific-coast-71393.herokuapp.com/users')
.then(function(response){
    console.log(response);
    $html ='';
    response.data.forEach(function(data){
        $id = data._id;
        console.log(data);
        $html+='<tr>';
        $html += '<td id="student_name_'+$id+'">'+data.student_name+'</td>';
        $html += '<td id="father_name_'+$id+'">'+data.father_name+'</td>';
        $html += '<td id="age_'+$id+'">'+data.age+'</td>';
        $html += '<td id="roll_no_'+$id+'">'+data.roll_no+'</td>';
        $html += '<td><a href="javascript:void(0)" onclick="get_record(this)" id='+$id+'>View</td>';
        $html+='</tr>';
    })
    document.getElementById('tblper').innerHTML = $html;
})
.catch(function(error){
    console.log(error)
})
.then(function(){
});
}

function get_record($obj){
    var id = $obj.getAttribute('id');
    let student_name = document.getElementById('student_name_'+id).innerHTML;
    let father_name = document.getElementById('father_name_'+id).innerHTML;
    let age = document.getElementById('age_'+id).innerHTML;
    let roll_no = document.getElementById('roll_no_'+id).innerHTML;
    
    document.getElementById('student_name').value = student_name;
    document.getElementById('father_name').value = father_name;
    document.getElementById('age').value = age;
    document.getElementById('roll_no').value = roll_no;
    document.getElementById('student_id').value = id;

}
function update_student(){
    let student_name = document.getElementById('student_name').value;
    let father_name = document.getElementById('father_name').value;
    let age = document.getElementById('age').value;
    let roll_no = document.getElementById('roll_no').value;
    let id = document.getElementById('student_id').value;

axios.put('http://pacific-coast-71393.herokuapp.com/user/'+id,{
    student_name:student_name, father_name:father_name,age:age,roll_no:roll_no
}).then(response => {
    console.log(response);
    alert("User Updated");
    get_all();
}).catch(function(error){
    console.log(error);
})
}

function delete_student(){
    let id = document.getElementById('student_id').value;
axios.delete('http://pacific-coast-71393.herokuapp.com/user/'+id)
.then(function(response) {
    console.log(response);
    alert("record deleted");
    get_all();
}).catch(function(error){
    console.log(error);
})
}

function get_skill(){
    axios.get('https://pacific-coast-71393.herokuapp.com/usages')
    .then(function(response){
        console.log(response);
        $html ='';
        response.data.forEach(function(data){
            console.log(data);
            $html+='<tr>';
            $html += '<td>'+data.skillName+'</td>';
            $html += '<td>'+data.clientName+'</td>';
            $html += '<td>'+data.createdOn+'</td>';
            $html+='</tr>';
        })
        document.getElementById('tblStart').innerHTML = $html;
    })
    .catch(function(error){
        console.log(error)
    })
    .then(function(){
    });
    }
    function get_order(){
    axios.get('https://pacific-coast-71393.herokuapp.com/orders')
    .then(function(response){
        console.log(response);
        $html ='';
        response.data.forEach(function(data){
            console.log(data);
            $html+='<tr>';
            $html += '<td>'+data.userName+'</td>';
            $html += '<td>'+data.email+'</td>';
            $html += '<td>'+data.order+'</td>';
            $html += '<td>'+data.createdOn+'</td>';
            $html+='</tr>';
        })
        document.getElementById('tblper').innerHTML = $html;
    })
    .catch(function(error){
        console.log(error)
    })
    .then(function(){
    });
    }


    function get_cart(){
        axios.get('https://pacific-coast-71393.herokuapp.com/carts')
        .then(function(response){
            console.log(response);
            $html ='';
            response.data.forEach(function(data){
                console.log("Cart ",data);
                $html+='<tr>';
                $html += '<td>'+data.customerName+'</td>';
                $html += '<td>'+data.email+'</td>';
                $html += '<td>'+data.items+'</td>';
                $html += '<td>'+data.createdOn+'</td>';
                $html+='</tr>';
            })
            document.getElementById('tblCart').innerHTML = $html;
        })
        .catch(function(error){
            console.log(error)
        })
        .then(function(){
        });
        }
    

    window.onload = function () {
    get_skill();
    get_order();
    }