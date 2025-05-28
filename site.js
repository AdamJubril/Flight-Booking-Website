// // SEARCH FLIGHT FORM SCRIPT 

const searchForm = document.forms['searchForm'];
if(searchForm){
    searchForm.addEventListener('submit', function(e){
        e.preventDefault();
        
        const locationFrom = document.getElementById('locationFrom').value;
        const locationTo = document.getElementById('locationTo').value;
        const date = document.getElementById('date').value;
        const flightSeat = document.getElementById('flightSeat').value;
        const passenger = document.getElementById('passenger').value;

        if(locationFrom && locationTo && date && flightSeat && passenger){
            alert("Your Flight has been booked Successfully.");
        }else{
            alert("Please fill in the required form");
        }

    });
}


    let flightForm = document.forms['flightForm'];
    // let flightForm = document.getElementById('flightForm');
    flightForm.addEventListener('submit', function(e){
        e.preventDefault();
    
        // VARIABLES & POPUPS FOR BOOKING FORM
        
       let checkBox = document.getElementsByName('checkbox');
       let radio = null;
// check for values in cs and assign it to c for radio check
       checkBox.forEach(element => {
        if (element.checked) {
            radio = element.value;
        }
       });

        const flightDeparture = document.getElementById('departure').value;
        const flightArrival = document.getElementById('arrival').value;
        const departingTime = document.getElementById('departing-time').value;
        const arrivalTime = document.getElementById('arrival-time').value;
        const adults = document.getElementById('adults').value;
        const children = document.getElementById('children').value;
        const flightClass = document.getElementById('flightClass').value;

        if(radio != null && flightDeparture && flightArrival && arrivalTime && departingTime && adults && children && flightClass){
            alert("Your Flight has been booked Successfully. \n Thank You");
        }else{
            alert("Please fill in the required form");
        }

    });
 
// NEWSLETTER EMAIL ADDRESS SCRIPT
// Used onclick funtion on subscribe button in the home page

    function subscribeBtn(){
        let inputField = document.getElementById('emailAddr').value;

        if (inputField !== "") {
            alert("Thank You \n We have successfully sent a link to this email");
       } else {
           alert ("please fill in the field!!");
       }
        
    }


// NEWSLETTER EMAIL ADDRESS SCRIPT
const eMail = document.forms['e-mail'];
    if(eMail){
    
    eMail.addEventListener('submit', function(e){
        e.preventDefault();

        const emailAddress = document.getElementById('emailAddress').value;
        if(emailAddress !==""){
            alert("Thank You \n We have successfully sent a link to this email");
        }else{
            alert("Please fill in your e-mail");
        }
        
    });
}

// CONTACT FORM
// Using onclick function to generate a pop up for the submit button 

function submitBtn() {
        let name = document.getElementById ('name1').value;
        let mail = document.getElementById ('mail1').value;
        let text = document.getElementsByClassName ('message').value;

        
    
        if (name && mail && text !== "") {
             alert ("Thanks for the feedback!");
        } else {
            alert ("please fill in the field!!");
        }
}