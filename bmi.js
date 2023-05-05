document.write("<div>");
document.write("<form>");
document.write("Mass (in kiligrams):<input type= 'float' id= 'mass' placeholder='mass in kg'/><br /> ");
document.write("Height (in meters):<input type='float' id='height' placeholder='height in m' /><br />");
document.write('<input type="button" onclick="bmi()" value="Evaluate" /> <br />');
document.write('BMI: <input id="ans" type="text" /><br />');
document.write('Category: <input type="text" id="category" /><br />');
document.write('<input type="reset" value="Reset"/>');
document.write('</form>');
document.write("</div>");
document.write("<hr>")
document.write("<h2>Compare BMI's</h2>");
document.write("<br>")
document.write("<div>");
document.write("<form1>");
document.write("Enter Marks BMI: <input type= 'bmi' id= 'mb' placeholder='Makrs BMI'><br /><br />");
document.write("Enter Johns BMI: <input type= 'bmi' id= 'jb'placeholder='Jonhs BMI'><br /><br />");
document.write('<input type="button" onclick="markHigherBMI()" value="Compare Highest BMI"> <br/><br />');
document.write('Higher BMI: <input id="ans1" type="text" /><br /><br />');
document.write('<input type="reset" value="Reset"/>');
document.write('</form1>');
document.write("</div>");



function markHigherBMI()
{
    var m = parseFloat(document.getElementById("mb").value);
    var j = parseFloat(document.getElementById("jb").value);     
    if(m>j)
    {
        document.getElementById("bms").value ="mark has higher BMI than John ";
    } 
    else
    {
        document.getElementById("bms").value ="John has higher BMI than Mark "
    }
}
function bmi()
{
    var w = parseFloat(document.getElementById("mass").value);  // To get weight from the input with id as weight
    var h = parseFloat(document.getElementById("height").value)/100; // Convert height to meters
    var b = w/(h*h);  // According to the formula
    document.getElementById("ans").value = String(b.toPrecision(3)) +" kg/m^2"; // writing to the output 
    if (b < 18.5)
    {
        document.getElementById("category").value = "Underweight";
    }
    else if (b >= 18.5 && b <= 25)
    {
        document.getElementById("category").value = "Healthy weight";
    }
    else if (b > 25 && b <= 30)
    {
        document.getElementById("category").value = "Overweight";
    }
    else if (b > 30 && b <= 35)
    {
        document.getElementById("category").value = "Obese Class 1";
    }
    else if(b > 35 && b <= 40)
    {
        document.getElementById("category").value = "Obese Class 2 ,be careful";
    }
    else
    {
        document.getElementById("category").value = "Obese Class 3";
    }
}