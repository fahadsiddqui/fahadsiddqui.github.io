function Add()
{
    let add_num1 = document.getElementById('add_num1').value;
    let add_num2 = document.getElementById('add_num2').value;
    let add_res= parseFloat(add_num1) + parseFloat(add_num2);
    document.getElementById('add_res').value = add_res;
}
function Sub()
{
    let sub_num1 = document.getElementById('sub_num1').value;
    let sub_num2 = document.getElementById('sub_num2').value;
    let sub_res= parseFloat(sub_num1) - parseFloat(sub_num2);
    document.getElementById('sub_res').value = sub_res;
}
function Mul()
{
    let mul_num1 = document.getElementById('mul_num1').value;
    let mul_num2 = document.getElementById('mul_num2').value;
    let mul_res= parseFloat(mul_num1) * parseFloat(mul_num2);
    document.getElementById('mul_res').value = mul_res;
}
function Div()
{
    let div_num1 = document.getElementById('div_num1').value;
    let div_num2 = document.getElementById('div_num2').value;
    let div_res= parseFloat(div_num1) / parseFloat(div_num2);
    document.getElementById('div_res').value = div_res;
}
