//comece aqui
nomedoestudantearay=[];
function submit(){
    displaystudantearay=[];
  
    document.getElementById("displayNameWithCommas").innerHTML=displaystudantearay;
    var semvirgula=displaystudantearay.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML=semvirgula;
    document.getElementById("submitButton").style.display="none";
    document.getElementById("sortButton").style.display="inline-block";
}
function sorting(){
    nomedoestudantearay.sort();
    nomesorganizadosaray=[];
    var comprimento=nomedoestudantearay.length;
    for(var j=0;j<comprimento;j++){
        nomesorganizadosaray.push("<h4>nome- "+nomedoestudantearay[j]+"</h4>");   
    }
    var semvirgula=displaystudantearay.join(" ");
    document.getElementById("displayNameWithoutCommas").innerHTML=semvirgula;

}

