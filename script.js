// Write your JavaScript code here!

// window.addEventListener("load", function() {

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
// });

window.addEventListener('load', function(){
    let form = document.querySelector('form')
    form.addEventListener('submit', function(event){
        let pilotInput = document.querySelector('input[name=pilotName]')
        let coPilotInput = document.querySelector('input[name=coPilotName]')
        let fuelLevelInput = document.querySelector('input[name=fuelLevel]')
        let cargoMassInput = document.querySelector('input[name=cargomass]')
        

        if (pilotInput.value === "" || coPilotInput.value === "" || fuelLevelInput.value === "" || cargoMassInput.value === ""){
            alert("All Fields Are Required!")
        } else if(isNaN(pilotInput.value) === false || isNaN(coPilotInput.value)=== false || isNaN(fuelLevelInput.value) ||  isNaN(cargoMassInput.value) ){
            alert("Names cannot be numbers!")
        } else if (fuelLevelInput.value < 10000 && cargoMassInput.value <= 10000) {
            document.getElementById('faultyItems').style.visibility = 'visible';
            document.getElementById('cargoStatus').innerHTML = "mass is good for takeoff";
            document.getElementById('fuelStatus').innerHTML = "there isnt enough fuel for the journey";
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = 'red';
        } else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
            document.getElementById('faultyItems').style.visibility = 'visible';
            document.getElementById('cargoStatus').innerHTML = "there is too much mass for the shuttle to take off";
            document.getElementById('fuelStatus').innerHTML = "there isnt enough fuel for the journey";
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = 'red';
        } else if(fuelLevelInput.value >= 10000 && cargoMassInput.value >= 10000){
            document.getElementById('faultyItems').style.visibility = 'visible';
            document.getElementById('fuelStatus').innerHTML = "there is enough fuel for the journey";
            document.getElementById('cargoStatus').innerHTML = "there is too much cargo mass";
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = 'red';
       } else {
            document.getElementById('pilotStatus').innerHTML = `${pilotInput} is Ready!`
            document.getElementById('copilotStatus').innerHTML = `${coPilotInput} is Ready!`
            document.getElementById('faultyItems').style.visibility = 'visible';
            document.getElementById("launchStatus").style.color = 'green';
            document.getElementById('launchStatus').innerHTML = "Shuttle is ready for launch!";
            // If the shuttle is ready to launch, change the text of launchStatus to green and display "Shuttle is ready for launch"
        }
        
        event.preventDefault();
    })
})

/*

// if fuel level high enough, cargo low enough

// if fuel level too low, cargo low enough
if (fuelLevelInput.value < 10000 && cargoMassInput.value <= 10000) {
    document.getElementById('faultyItems').style.visibility = 'visible';
    document.getElementById('cargoStatus').innerHTML = "mass is good for takeoff";
    document.getElementById('fuelStatus').innerHTML = "there isnt enough fuel for the journey";
    document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = 'red';
}

// if fuel level too low, cargo too high
else if (fuelLevelInput.value < 10000 && cargoMassInput.value > 10000) {
    document.getElementById('faultyItems').style.visibility = 'visible';
    document.getElementById('cargoStatus').innerHTML = "there is too much mass for the shuttle to take off";
    document.getElementById('fuelStatus').innerHTML = "there isnt enough fuel for the journey";
    document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
    document.getElementById("launchStatus").style.color = 'red';
}

// if fuel level is high enough, cargo too high
else if(fuelLevelInput.value >= 10000 && cargoMassInput.value >= 10000){
     document.getElementById('faultyItems').style.visibility = 'visible';
            document.getElementById('fuelStatus').innerHTML = "there is enough fuel for the journey";
            document.getElementById('cargoStatus').innerHTML = "there is too much cargo mass";
            document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
            document.getElementById("launchStatus").style.color = 'red';

}




*/