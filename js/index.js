// Iteration 1: Names and Input
let hacker1 = "Eva";
let hacker2 = "Eva";
console.log(`The driver's name is ${hacker1}`);
console.log(`The navigator´s name is ${hacker2}`);


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length)
  {
  console.log(`The driver has the longest name   , it has ${hacker1.length} characters`);
  }
else if (hacker2.length > hacker1.length)
  {
  console.log(`The navigator has the longest name, it has ${hacker2.length} characters`);
  }
else
  {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`);
}

// Iteration 3: Loops
var newNameDriv = '';
var hacker1Caps = hacker1.toUpperCase();
for (var i = 0; i < hacker1.length; i++)
{
 var newNameDriv = newNameDriv + hacker1Caps[i] + " ";
}
console.log(newNameDriv);

newNameNav = ''
for (var i = hacker2.length - 1; i >= 0; i-- )
{
 var newNameNav = newNameNav + hacker2[i];
}
console.log(newNameNav);

/* iterate through each array and compare. If first letter != then continue. otherwise break*/
if (hacker1.length > hacker2.length)
{ 
  greaterLength = hacker1.length;
}
else
{
  greaterLength =hacker2.length;
}

for (i=0; i < greaterLength; i++)
{
  if (hacker1[i] < hacker2[i])
  {
    console.log("The driver's name goes first.");
    break;
  }
  else if (hacker2[i] > hacker1[i])
  {
    console.log("Yo, the navigator goes first definitely.");
    break;
  }
  else
  {
    console.log("What?! You both have the same name?");
    break; //actually here need to loop to next character
  }
}
//BONUS

let para1 = "Fusce in elementum urna. Cras tincidunt enim a nibh placerat, aliquam sollicitudin erat semper. Phasellus condimentum diam et mi tempus, vel malesuada mi tempus. Cras placerat a nulla id ultricies. Nunc mollis libero dolor, quis convallis lacus eleifend eu. Ut sollicitudin in risus vitae vehicula. Mauris eleifend faucibus convallis. Pellentesque sit amet eros ultricies, aliquet tellus sed, ultrices est. Sed pulvinar, lectus facilisis tempor ultrices, massa nibh dictum magna, ut rhoncus est nulla ac erat. In quis leo dolor. Duis sollicitudin nunc vitae viverra tincidunt. Phasellus congue orci ac vehicula iaculis. Praesent auctor magna augue, quis placerat est vulputate sed. Nam iaculis rhoncus augue vel gravida.";
let para2 = "Suspendisse potenti. Etiam a tincidunt est. In hac habitasse platea dictumst. Aliquam vitae lorem sed ipsum congue efficitur sit amet et mauris. Proin a orci turpis. Mauris sed malesuada sapien. Etiam pretium ac mauris nec varius. Aenean mi enim, accumsan in efficitur et, laoreet et lectus. Aenean congue accumsan lorem, vel tempor arcu egestas vitae. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam nec tortor vel quam sodales volutpat id sit amet massa. Duis ut ex mauris. Praesent eget enim id neque molestie dapibus.";
let para3 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at ex sed ante pellentesque ultrices in elementum augue. Aenean et ante est. Nullam ex tortor, tincidunt in augue sit amet, pharetra luctus velit. Sed interdum varius lectus. Cras aliquam justo eu ultricies aliquet. Suspendisse luctus lacus est, a venenatis mauris venenatis et. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec facilisis, urna ut mollis sagittis, dolor dui aliquam erat, non rutrum eros elit vel nulla. Nullam porta justo vel mi eleifend venenatis. Donec egestas accumsan hendrerit. Nulla viverra mi justo, ac bibendum elit sagittis vitae. Donec vitae suscipit mi. Quisque molestie leo vitae mollis porttitor. Quisque orci elit, maximus sit amet maximus sollicitudin, euismod ac velit. Quisque rhoncus libero non sem mollis facilisis. Quisque pulvinar sed nibh vel convallis."; 
let countPara1 = 1;
for (i=0; i<para1.length; i++)
{
  
  if(para1[i] = " ")
  {
    countPara1 ++;
  }
}
console.log(`Paragraph 1 has ${countPara1} characters.`);
let countPara2 = 1;
for (i=0; i<para2.length; i++)
{
  
  if(para2[i] = " ")
  {
    countPara2 ++;
  }
}
console.log(`Paragraph 2 has ${countPara2} characters.`);

let countPara3 = 1;
for (i=0; i<para3.length; i++)
{
  
  if(para3[i] = " ")
  {
    countPara3 ++;
  }
}
console.log(`Paragraph 3 has ${countPara3} characters.`);
//use substring to find et

//Palindromes

let phraseToCheck = "Amor,roma";
let phraseToCheckUpper = phraseToCheck.toUpperCase();
for (var i=0; i<=(phraseToCheck.length/2); i++)
{
  if (phraseToCheckUpper[i] === phraseToCheckUpper[phraseToCheck.length-(i+1)])
  {
    console.log("it's a palindrome");
    break;
  }
  else
  {
    console.log("it's not a palindrome");
    break;
  }
}
