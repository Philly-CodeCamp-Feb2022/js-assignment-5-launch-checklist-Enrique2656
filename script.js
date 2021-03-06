// Write your JavaScript code here!

window.addEventListener("load", function() {
    //  fetch our planet JSON data
    function pickPlanet(planets){

    }

    fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        response.json().then(function(json){
            console.log(json)
            let missionTarget = document.getElementById('missionTarget');
            let randomNumber = Math.floor(Math.random() * json.length)
            let planet = json[randomNumber]
            missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${planet.name} </li>
                    <li>Diameter: ${planet.diameter}</li>
                    <li>Star: ${planet.star}</li>
                    <li>Distance from Earth:${planet.distance} </li>
                    <li>Number of Moons:${planet.moons} </li>
                </ol>
                <img src="${planet.image}">
            `


            /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */


            // we need to write the erst of code this is the only scope
            // in which we have acess to our json array
            // select a random planet object from json
            // display the random planets data type in missionTarget
        })
    })

//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse = fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
        // response.json().then(function(json){
        //     console.log(json);
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});

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