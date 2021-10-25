function calculate()
{
    let mo_urdu = document.getElementById('mo_urdu').value;
    let mo_eng = document.getElementById('mo_eng').value;
    let mo_isl = document.getElementById('mo_isl').value;
    let mo_acc = document.getElementById('mo_acc').value;
    let mo_com = document.getElementById('mo_com').value;
    let mo_eco = document.getElementById('mo_eco').value;
    let mo_math = document.getElementById('mo_math').value;

    let total_marks = 0;

    if(mo_urdu > 0)
    {
        let per_urdu = (mo_urdu/100)*100;
        document.getElementById('per_urdu').innerHTML = per_urdu;
        if(per_urdu >= 36){
            document.getElementById('rem_urdu').innerHTML = "Pass";
        }else{
            document.getElementById('rem_urdu').innerHTML = "Fail";
        }
        total_marks += parseFloat(mo_urdu);
    }
    if(mo_eng > 0)
    {
        let per_eng = (mo_eng/100)*100;
        document.getElementById('per_eng').innerHTML = per_eng;
        if(per_eng >= 36){
            document.getElementById('rem_eng').innerHTML = "Pass";
        }else{
            document.getElementById('rem_eng').innerHTML = "Fail";
        }
        total_marks += parseFloat(mo_eng);
    }
    if(mo_isl > 0)
    {
        let   per_isl = (mo_isl/50)*100;
        document.getElementById('per_isl').innerHTML = per_isl;
        if(per_isl >= 18){
            document.getElementById('rem_isl').innerHTML = "Pass";
        }else{
            document.getElementById('rem_isl').innerHTML = "Fail";
        }
        total_marks += parseFloat(mo_isl);
    }
    if(mo_acc > 0)
    {
        let per_acc = (mo_acc/100)*100;
        document.getElementById('per_acc').innerHTML = per_acc;
        if(per_acc >= 36){
            document.getElementById('rem_acc').innerHTML = "Pass";
        }else{
            document.getElementById('rem_acc').innerHTML = "Fail";
        }
        total_marks += parseFloat(mo_acc);
    }
    if(mo_com > 0)
    {
        let per_com = (mo_com/75)*100;
        document.getElementById('per_com').innerHTML = per_com;
        if(per_com >= 25){
            document.getElementById('rem_com').innerHTML = "Pass";
        }else{
            document.getElementById('rem_com').innerHTML = "Fail";
        }
        total_marks += parseFloat(mo_com);
    }
    if(mo_eco > 0)
    {
        let per_eco = (mo_eco/75)*100;
        document.getElementById('per_eco').innerHTML = per_eco;
        if(per_eco >= 25){
            document.getElementById('rem_eco').innerHTML = "Pass";
        }else{
            document.getElementById('rem_eco').innerHTML = "Fail";
        }
        total_marks += parseFloat(mo_eco);
    }
    if(mo_math > 0)
    {
        let per_math = (mo_math/50)*100;
        document.getElementById('per_math').innerHTML = per_math;
        if(per_math >= 18){
            document.getElementById('rem_math').innerHTML = "Pass";
        }else{
            document.getElementById('rem_math').innerHTML = "Fail";
        }
        total_marks += parseFloat(mo_math);
    }

        document.getElementById('total_marks').innerHTML = total_marks;
        let total_per = Math.round(((total_marks/550)*100),2);
        document.getElementById('total_per').innerHTML = total_per;

        if(total_per >=80 && total_per <= 100){
            document.getElementById('total_remarks').innerHTML = "A+ Grade";
        }else if(total_per >=70 && total_per <= 79){
            document.getElementById('total_remarks').innerHTML = "A Grade";
        }else if(total_per >=60 && total_per <= 69){
            document.getElementById('total_remarks').innerHTML = "B Grade";
        }else if(total_per >=50 && total_per <= 59){
            document.getElementById('total_remarks').innerHTML = "C Grade";
        }else if(total_per >=40 && total_per <= 49){
            document.getElementById('total_remarks').innerHTML = "D Grade";
        }else if(total_per >=33 && total_per <= 39){
            document.getElementById('total_remarks').innerHTML = "E Grade";
        }else{
            document.getElementById('total_remarks').innerHTML = "Fail";
        }

}
