$(document).ready(function() {
   $("#stress-form").submit(function(event) {
    $("#results1").show();
    $("#results2").show();
    $("#results3").show();

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

    
    
    // console.log(physicalTotal);
    // console.log(emotionalTotal);
    // console.log(copingTotal);

    event.preventDefault();
   }); 
});