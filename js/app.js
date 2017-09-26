/*Use the Document Object Model (DOM) to complete the following exercises below:*/

/*1. Taylor Swift

Find the div with the id of "name1" and replace the n/a with the following:

Tay-Tay*/
var taylorNameDiv = document.getElementById('name1');
taylorNameDiv.innerHTML = "Tay-Tay";

/*2. DJ Khaled

Find the div with the id of "position2" and replace the n/a with the following: 

Project Manager*/

var projMan = document.getElementById('position2');
projMan.innerHTML = "Project Manager";


/*3. Piko Taro

Find the div with the id of "alias3" and replace the n/a with the following:

Concatenation*/

var conCat= document.getElementById('alias3');
conCat.innerHTML = "Concatenation";




/*4. Prince

Find the div with the class name of "profile" and replace the n/a with a verse from your favorite Prince song.*/

var arrClass=document.getElementsByClassName('profile');

arrClass[0].innerHTML = '"I always cry for love, never cry for pain."';


/*5. Bruce Lee

Find the div with the class name of "profile" and replace the n/a with a quote from the legend himself.*/

arrClass[1].innerHTML = '"Having no limitation as limitation"';



/*6. Samuel L Jackson

Find the div with the class name of "alias" and replace the n/a with your favorite character that Sammy portrayed.*/

var divAlias = document.getElementsByClassName('alias');

divAlias[2].innerHTML = 'Coach Carter';




/*7. Peter Griffin

Create a div element and give it an id of "name7". Inside this div element, give it the contents of "Peter Griffin".


Append this div element to the nameParent div*/

var peter = document.createElement("div");
peter.id = "name7";
peter.innerHTML= "Peter Griffin";
nameParent.appendChild(peter);




 
/*8. Tim Duncan

Create a div element give it an id of "alias8". Inside this div element, give it the contents of "Old Man Riverwalk".

Append this div element to the aliasParent div.*/

var timMay = document.createElement('div');
timMay.id = 'alias8';
timMay.innerHTML = "Old Man Riverwalk";
aliasParent.appendChild(timMay);


//Final Boss
/*9. Create your own profile.*/

