// to hide icon on click on sidebar button--------
let FullSideBar = document.getElementById('demo');
let SidebarOpenButton  = document.getElementById("SidebarOpenButton");
let SidebarCloseButton = document.getElementById("SidebarCloseButton");
SidebarCloseButton.addEventListener('click', ()=>{ SidebarOpenButton.classList.remove('Hide'); });
SidebarOpenButton.addEventListener('click', function (){ 
    this.classList.add('Hide');
    DetectClickOutsideSidebar();
});

function DetectClickOutsideSidebar(){

console.log(event);

  
    document.addEventListener('click', handleClickOutside);
    

// document.addEventListener('click', DetectClickOutsideSidebar);
}

function handleClickOutside(event){
    if(!FullSideBar.contains(event.target) &&!SidebarOpenButton.contains(event.target)){
        SidebarOpenButton.classList.remove('Hide');
      console.log(event,"handel click outside");
      document.removeEventListener("click",handleClickOutside );
    }
}


















// -------to apply styles on cards and on icons on click on each other------
let RoundIcons =document.querySelectorAll('.Process .RoundIcon');
let Cards = document.querySelectorAll('.Process .Card');

RoundIcons.forEach((icon , index)=>{
   
    
    icon.addEventListener('mouseenter',(event)=>{ChangeIconNCardsBackground(event,index)});
    icon.addEventListener('mouseleave',(event)=>{ChangeIconNCardsBackground(event,index)});
});

Cards.forEach((card , index)=>{
   
    
    card.addEventListener('mouseenter',(event)=>{ChangeCardNIconsBackground(event,index)});
    card.addEventListener('mouseleave',(event)=>{ChangeCardNIconsBackground(event,index)});
});

// Icon:hover to card color change
function ChangeIconNCardsBackground(event,index){
    console.log("event",event);                                                                                                                               
    RoundIcons[index].style.backgroundColor = event.type === "mouseenter" ? "rgba(19, 74, 142, 1)" : ""; // Toggle color based on the event
    RoundIcons[index].style.color = event.type === "mouseenter" ? "rgb(255, 255, 255) " : ""; // Toggle color based on the event
    Cards[index].style.backgroundColor = event.type === "mouseenter" ? "rgba(19, 74, 142, 1)" : ""; // Toggle color based on the event
   if( event.type === "mouseenter"){
    Cards[index].querySelector('h4').style.setProperty("color", "white", "important");
    Cards[index].querySelector('p').style.setProperty("color", "white", "important");
   }else{
    Cards[index].querySelector('p').style.setProperty("color", "", "important");

   Cards[index].querySelector('h4').style.setProperty("color", "", "important");
   }
    // Toggle color based on the event
}

// Card:hover to icon color change
function ChangeCardNIconsBackground(event,index){
    console.log("event",event);                                                                                                                               
    Cards[index].style.backgroundColor = event.type === "mouseenter" ? "rgba(19, 74, 142, 1)" : ""; // Toggle color based on the event
    Cards[index].style.color = event.type === "mouseenter" ? "rgb(255, 255, 255) " : ""; // Toggle color based on the event
    RoundIcons[index].style.backgroundColor = event.type === "mouseenter" ? "rgba(19, 74, 142, 1)" : ""; // Toggle color based on the event
    RoundIcons[index].style.color = event.type === "mouseenter" ? "rgba(255, 255, 255, 2)" : ""; // Toggle color based on the event
   if( event.type === "mouseenter"){
    Cards[index].querySelector('h4').style.setProperty("color", "white", "important");
    Cards[index].querySelector('p').style.setProperty("color", "white", "important");
   }else{
    Cards[index].querySelector('p').style.setProperty("color", "", "important");

   Cards[index].querySelector('h4').style.setProperty("color", "", "important");
   }
    // Toggle color based on the event
}

// // distance calculate between 2round icons 
// function calculateDistance() {
//     const RoundIcon1 = document.querySelector('.RoundIcon1');
//     const RoundIcon2 = document.querySelector('.RoundIcon2');
//     const Line1 = document.querySelector('.Process .Line1');

   

//     // Get bounding rectangles
//     const rect1 = RoundIcon1.getBoundingClientRect();
//     const rect2 = RoundIcon2.getBoundingClientRect();

//     // Calculate center points
//     const center1 = {
//       x: rect1.left + rect1.width / 2,
//       y: rect1.top + rect1.height / 2
//     };

//     const center2 = {
//       x: rect2.left + rect2.width / 2,
//       y: rect2.top + rect2.height / 2
//     };

//     // Calculate the distance using the Euclidean formula
//     const distance = Math.sqrt(
//       Math.pow(center2.x - center1.x, 2) +
//       Math.pow(center2.y - center1.y, 2)
//     );

//     // Update the display
//     console.log( `Distance: ${Math.round(distance)}px`);
//    ;
//   }
//   Line1.style.height=`${Math.round(distance)}px`;

//   // Recalculate on window resize or DOM changes
//   window.addEventListener('resize', calculateDistance);
//   document.addEventListener('DOMContentLoaded', calculateDistance);