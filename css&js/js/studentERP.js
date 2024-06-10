function addstud(){
    var btn = document.getElementById("uid").value;
    var btn2 = document.getElementById("name").value;
    var btn3 = document.getElementById("email").value;
    var btn4 = document.getElementById("contact").value;
    document.getElementById("inputuid").innerHTML = btn;
    document.getElementById("inputname").innerHTML= btn2;
    document.getElementById("inputemail").innerHTML=btn3;
    document.getElementById("inputnum").innerHTML=btn4;
}



// exam form 
function addexam(){

var en = document.getElementById("inexname").value;
var sc = document.getElementById("insubcode").value;
var sn = document.getElementById("insub").value;
var dep = document.getElementById("indep").value;
var ed = document.getElementById("inexdate").value;
var et = document.getElementById("inextime").value;
// document.getElementById("no").innerHTML = en;
document.getElementById("subcode").innerHTML = sc;
document.getElementById("exname").innerHTML = en;
document.getElementById("dep").innerHTML = dep;
document.getElementById("subname").innerHTML = sn;
document.getElementById("extime").innerHTML = et;
document.getElementById("exdate").innerHTML = ed;
}





// function addstudform(){
//     // var button = document.getElementById("addstudbtn");
//     document.getElementById("addstudform").style.display='block';
//     document.getElementById("adminprof").style.display='block';

// }

// function dblclick(){
//     document.getElementById("addstudform").style.display='none';
//     document.getElementById("adminprofdet").style.display='none';

// }


function myfunction(){
var loading = document.getElementById("loder1");
    loading.style.display='none';
    loading.style.backgroundcolor ='white';
}

// let att = document.getElementById('attdash');
// let bday = document.getElementById('bdaydash');
// let leave = document.getElementById('leavedash');
 
//     window.addEventListener("scroll",function(){
//         let scroll = window.scrollY;
//         att.style.right=scroll*0.5+'px';
//         bday.style.top=scroll*1.25+'px';
//         leave.style.left=scroll*0.25+'px';
//     });



function adminprof(){
    var adminprofile = document.getElementById("adminprofdet");
    adminprofile.classList.toggle(".adminprofileview");
}




$(document).ready(function () {
    $("#addstudbtn").click(function () {
        $("#addstudform").hide(100);
    });

    $("#addstudbtn").click(function () {
        $("#addstudform").show();
    });
});

let studform = document.getElementById("addstudform");

function backaddstud(){
    studform.style.display='none';
}

// view table by click 
var tbl = document.getElementById("atttable");
function viewtbl(){
    document.style.display='block';
}


// search by name
function searchfun(){
    let filter = document.getElementById("Myinput").value.toUpperCase();
    let table = document.getElementById("mytable");
    let tr = table.getElementsByTagName("tr");
    for(i=0 ;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[2];
        if(td){
            let textvalue = td.textContent || table.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }

}


// search by department
function searchfunDep(){
    let filter = document.getElementById("MyinputDep").value.toUpperCase();
    let table = document.getElementById("mytable");
    let tr = table.getElementsByTagName("tr");
    for(i=0 ;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[1];
        if(td){
            let textvalue = td.textContent || table.innerHTML;
            if(textvalue.toUpperCase().indexOf(filter) > -1){
                tr[i].style.display="";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }

}