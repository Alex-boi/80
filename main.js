var childarray=[]; 

function submit() {
    var displaychildarray=[];
    for (var j=1;)j<=4; j++){
        var childname=document.getElementById("name_of_the_student_"+j).value;
        console.log(childname);
        childarray.push(childname);
    }
    console.log(childarray);
    var length=childarray.length;
    for (var k=0; k<length; k++){
        displaychildarray.push("<h4> name - "+childarray[k]+"</h4>");
        console.log(displaychildarray); 
    }
    console.log(displaychildarray);
    document.getElementById("display_name_with_commas").innerHTML=displaychildarray;
    var remove_commas = displaychildarray.join(" "); 
    console.log(remove_commas);
     document.getElementById("display_name_without_commas").innerHTML = remove_commas; 
     document.getElementById("submit_button").style.display = "none"; 
     document.getElementById("sort_button").style.display = "inline-block";
}  

function sorting() { 
    childarray.sort();
     console.log(childarray); 
     var display_student_array_sorting = []; 
     var length = childarray.length;
      console.log(childarray);
       for (var k = 0; k < length; k++){
display_student_array_sorting.push("NAME - "+ childarray[k]+"</h4>"); 
console.log(display_student_array_sorting);
 } 
 var remove_commas = display_student_array_sorting.join(" "); 
 console.log(remove_commas); 
document.getElementById("display_name_without_commas").innerHTML = remove_commas; 
}