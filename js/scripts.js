$(document).ready(function() {
   $("#stress-form").submit(function(event) {
    event.preventDefault();
   
    let physicalResults = [];
    $("input:checkbox[name=physical]:checked").each(function() {
        let physicalValue = $(this).val();
        physicalResults.push($(this).val());
    });
    // console.log(physicalResults); 
    let emotionalResults = [];
    $("input:checkbox[name=emotional]:checked").each(function() {
        let emotionalValue = $(this).val();
        emotionalResults.push($(this).val());
    });
    // console.log(emotionalResults); 
    let copingResults= [];
    $("input:checkbox[name=coping]:checked").each(function() {
        let copingValue = $(this).val();
        copingResults.push($(this).val());
    });
    // console.log(copingResults); 

    let physicalTotal = physicalResults.length;
    let emotionalTotal = emotionalResults.length;
    let copingTotal = copingResults.length;

    if ((physicalTotal === 0) && (emotionalTotal === 0) && (copingTotal ===0)) {
        alert("Please check some symptoms or coping skills");
        
    } else {


    $("#results1").show();
    $("#results-paragraph").append(`You have ${physicalTotal} physical stress symptoms, ${emotionalTotal} emotional stress symptoms, and ${copingTotal} coping skills. You're doing great! Check out some additional healthy coping tips below:`);


    
    // console.log(physicalTotal);
    // console.log(emotionalTotal);
    // console.log(copingTotal);
    }
   
   }); 
});