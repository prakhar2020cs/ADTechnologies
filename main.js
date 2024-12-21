// $(document).ready(
//     function () {

//        $(".Process .RoundIcons")
//        .mouseenter(
//         function() {
//         $(this).css("background-color", "rgba(19, 74, 142, 1)");
//         $(this).css("color", "rgb(228, 235, 243)");
//         $(this).css("box-shadow", "0px 0px 10px black");
//         $('.Process .Cards').css("background-color", "rgba(19, 74, 142, 1)");
//         $(".Process .Cards").css("color", "rgb(228, 235, 243)");
//         $(".Process .Cards").css("box-shadow", "0px 0px 10px black");
//         }
//        )
//        .mouseleave(
//         function() {
//         $(this).css("background-color", "");
//         $(this).css("color", "");
//         }
//        )
//     }
// )


















let RoundIcons =document.querySelectorAll('.Process .RoundIcon');
let Cards = document.querySelectorAll('.Process .Card');

RoundIcons.forEach((icon , index)=>{
   
    
    icon.addEventListener('mouseenter',(event)=>{ChangeIconNCardsBackground(event,index), addClass(event, index)});
    icon.addEventListener('mouseleave',(event)=>{ChangeIconNCardsBackground(event,index)});
})
   ;
// RoundIcons.addEventListener('mouseleave', ChangeIconNCardsBackground );

function addClass(event, index) {
    if(event.type==='mouseenter'){
        Cards[index].classList.add("activeLinear")
        // alert("mouse enter")
    }
    if(event.type==='mouseleave'){
        Cards[index].classList.remove("activeLinear")
    }
   
}

function ChangeIconNCardsBackground(event,index){
    console.log("eventtt",event);                                                                                                                               
    RoundIcons[index].style.backgroundColor = event.type === "mouseenter" ? "rgba(19, 74, 142, 1)" : ""; // Toggle color based on the event
    RoundIcons[index].style.color = event.type === "mouseenter" ? "rgb(255, 255, 255) !important" : ""; // Toggle color based on the event
    Cards[index].style.backgroundColor = event.type === "mouseenter" ? "rgba(19, 74, 142, 1)" : ""; // Toggle color based on the event
    Cards[index].style.color = event.type === "mouseenter" ? "rgb(255, 255, 255)" : ""; // Toggle color based on the event
}