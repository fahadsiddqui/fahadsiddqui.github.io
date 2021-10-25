var date = new Date();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
document.getElementById("today").innerHTML = "Today is : "+days[date.getDay()];
document.getElementById("time").innerHTML = "Current time is : "+date.getHours() +":"+date.getMinutes() +":"+date.getSeconds();

function getDate(){
    var date = new Date();
    document.getElementById("current_date").innerHTML = "Current date is : "+ date.getDate()+"-"+ date.getMonth()+"-"+ date.getFullYear()
    +" , "+date.getDate()+"/"+ date.getMonth()+"/"+ date.getFullYear();
}

function getArea() {
    var side1 = parseInt(document.getElementById("side1").value);
    var side2 = parseInt(document.getElementById("side2").value);
    var side3 = parseInt(document.getElementById("side3").value);
    var s = (side1 + side2 + side3) / 2;
    var area = Math.sqrt(s * ((s - side1)  * (s - side2) * (s - side3)));
    document.getElementById("result").value = area;
}

function Calculation(){
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);

    var operator = document.getElementById("operator").value;
    var cal_result ="";
    if(operator == "+")
    {
        cal_result = num1+num2;
    }
    else if(operator == "-")
    {
        cal_result = num1-num2;        
    }
    else if(operator == "*")
    {
        cal_result = num1*num2;
    }
    else
    {
        cal_result = num1/num2;
    }
    document.getElementById("cal_result").value = cal_result;
}

function getReverse(){
    var text = "Saylani";
    var len = text.length;
    var textar =[];
    for (let i = len; i >= 0; i--) {
        textar.push(text.charAt(i))    
    }
    var rev = textar.join('');
    document.getElementById('rotate_text').innerHTML=rev;
}

function getLeapYear() {
    var year = document.getElementById('leap_year').value;
    var res="";
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        res =year + ' is a leap year';
    } else {
        res = year + ' is not a leap year';
    }
    document.getElementById('result_leap_year').innerHTML = res;
}

function getSunday() {
    var res="";
    for (var year = 2014; year <= 2050; year++) {
      var d = new Date(year, 0, 1);
      if (d.getDay() === 0) {
        res += year +'</br>';
      }
    }
    document.getElementById('result_sunday').innerHTML = res;
  }


  function getGuessNo(){
      var guess_no = document.getElementById('guess_no').value;
      var res="";

 const num = Math.ceil(Math.random() * 10);
  if (guess_no == num)
    res ='Good Work';
   else
    res ='Not matched no is '+ num;
  
  document.getElementById('result_guess_no').innerHTML = res;
  }

  function get14August(){
    var res = "";
    today=new Date();
    console.log(today.getFullYear());
    var aug14=new Date(today.getFullYear(), 7, 14);
    if (today.getMonth() >7 && today.getDate()>14) 
    {
    aug14.setFullYear(aug14.getFullYear()+1); 
    }  
    var one_day=1000*60*60*24;
    res = Math.ceil((aug14.getTime()-today.getTime())/(one_day))+" days left until 14 August!";
    document.getElementById('result_14_august').innerHTML = res;
  }

  function getTriple() {
    var num1 = parseFloat(document.getElementById("t_num1").value);
    var num2 = parseFloat(document.getElementById("t_num2").value);
    
    var result ="";
    if (num1 == num2) {
      result = 3 * (num1 + num2);
      } 
     else
     {
      result =(num1 + num2);
     }
     document.getElementById('result_triple').value = result;

   }

   function getThree() 
   {
      var num1 = parseFloat(document.getElementById("l_num1").value);
      var num2 = parseFloat(document.getElementById("l_num2").value);
      var num3 = parseFloat(document.getElementById("l_num3").value);
  
    max_val = 0;
    if (num1 > num2)
    {
      max_val = num1;
    } else
    {
      max_val = num2;
    }
    if (num3 > max_val) 
    {
      max_val = num3;
    }
    document.getElementById('result_l').value = max_val;
  }
  function getCapitalize() 
{
    var str = document.getElementById("letter").value;
    str = str.split(" ");
    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    str = str.join(" ");
    document.getElementById('letter').value = str;
}
function getHours(){
    var days = parseInt(document.getElementById("days").value);

    var hours = days * 24;
    var mins = hours * 60;
    var res =   "Hours is "+hours+" Minutes is "+mins;
    document.getElementById('result_days').innerHTML = res;
}
function getArrReverse(){
  
  var text = document.getElementById('arr_rev').value;
  var len = text.length;
  var textar =[];
  for (let i = len; i >= 0; i--) {
      textar.push(text.charAt(i))    
  }
  var rev = textar.join('');
  document.getElementById('result_arr_rev').innerHTML=rev;
}
function getLargerValue() 
 {
  var arr_num1 = parseFloat(document.getElementById("arr_num1").value);
  var arr_num2 = parseFloat(document.getElementById("arr_num2").value);
  var arr_num3 = parseFloat(document.getElementById("arr_num3").value);

  var nums_arr =[arr_num1,arr_num2,arr_num3];
  console.log(nums_arr);
  var max_val = nums_arr[0] > nums_arr[2] ? nums_arr[0] : nums_arr[2];

    document.getElementById("arr_res_num1").value = max_val;
    document.getElementById("arr_res_num2").value = max_val;
    document.getElementById("arr_res_num3").value= max_val;

}

function getKTH() 
 {
  var kth_num1 = parseFloat(document.getElementById("kth_num1").value);
  var kth_num2 = parseFloat(document.getElementById("kth_num2").value);
  var kth_num3 = parseFloat(document.getElementById("kth_num3").value);
  var kth_num4 = parseFloat(document.getElementById("kth_num4").value);
  var kth_num5 = parseFloat(document.getElementById("kth_num5").value);

  var kth_res_num1 = parseFloat(document.getElementById("kth_res_num1").value);

  var nums_arr =[kth_num1,kth_num2,kth_num3,kth_num4,kth_num5];
  console.log(nums_arr);

  for (let i = 0; i < kth_res_num1; i++) {
    let max_index = i;
    const tmp = nums_arr[i];

    for (let j = i + 1; j < nums_arr.length; j++) {
      if (nums_arr[j] > nums_arr[max_index]) {
        max_index = j;
      }
    }

    nums_arr[i] = nums_arr[max_index];
    nums_arr[max_index] = tmp;
  }

  var res= nums_arr[kth_res_num1 - 1];
  document.getElementById("kth_display").innerHTML = res;

}



function getMostAppears() 
 {
  var ma_num1 = parseFloat(document.getElementById("ma_num1").value);
  var ma_num2 = parseFloat(document.getElementById("ma_num2").value);
  var ma_num3 = parseFloat(document.getElementById("ma_num3").value);
  var ma_num4 = parseFloat(document.getElementById("ma_num4").value);
  var ma_num5 = parseFloat(document.getElementById("ma_num5").value);
  var ma_num6 = parseFloat(document.getElementById("ma_num6").value);

  var nums_arr =[ma_num1,ma_num2,ma_num3,ma_num4,ma_num5,ma_num6];
  console.log(nums_arr);

  var ctr = [],
  ans = 0;


  for(var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for(var i = 0; i < nums_arr.length; i++) {
    ctr[nums_arr[i] - 1]++;
    if(ctr[nums_arr[i] - 1] > ctr[ans]) {
      ans = nums_arr[i] - 1;
    }
  }

  var res= ans + 1;
  document.getElementById("ma_res_num1").value = res;

}

function getReplaceAll() 
 {
  var r_num1 = parseFloat(document.getElementById("r_num1").value);
  var r_num2 = parseFloat(document.getElementById("r_num2").value);
  var r_num3 = parseFloat(document.getElementById("r_num3").value);
  var r_num4 = parseFloat(document.getElementById("r_num4").value);
  var r_num5 = parseFloat(document.getElementById("r_num5").value);
  var r_num6 = parseFloat(document.getElementById("r_num6").value);

  var r_old = parseFloat(document.getElementById("r_old_num1").value);
  var r_new = parseFloat(document.getElementById("r_new_num1").value);


  var nums_arr =[r_num1,r_num2,r_num3,r_num4,r_num5,r_num6];
  console.log(nums_arr);

  for (var i = 0; i < nums_arr.length; i++) {
    if (nums_arr[i] === r_old) {
      nums_arr[i] = r_new;
    }
  }
console.log(nums_arr);
  a=1;
  for (var i = 0; i < nums_arr.length; i++) {
    document.getElementById("r_num"+a).value = nums_arr[i];
    a++;
  }
}