
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