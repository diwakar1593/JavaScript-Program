<html> 
<head> 
<title>t1</title> 
<script type="text/javascript"> 
    function addNode () { var newP = document. createElement("p"); 
    var textNode = document.createTextNode(" This is a new text node"); 
    newP.appendChild(textNode); document.getElementById("firstP").appendChild(newP); } 
</script> </head> 
<body> <p id="firstP">firstP<p> </body> 
</html>
