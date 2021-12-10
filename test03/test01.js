console.log("@test01.js");

window.onload = function(){
    var menu1 = document.getElementById("menu1");
    var tagList = menu1.getElementsByTagName("li");

    for(var i=0;i<tagList.length;i++){
        var li = tagList[i];
        li.style.color = "#f00";
    }
}
