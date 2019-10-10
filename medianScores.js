var scores=[]; // array for the scores
var output=[]; //array for the median results
var median; // variable to keep the median result
 console.log(Math.floor(1/2));
/* getMedian function will get the existing scores, addin the new one 
and calculating the new median*/
var getMedian = function(scores,newScore){
  if(scores==null) //check if the scores a value is missing
  {
      return "Please add scores array";
  }
  if(newScore==null) //check if the new score a value is missing
  { 
      return  "Please add new score";;
  }
  else{
    scores.push(newScore); //adding the new score
    /* the scoresMiddle variable is for readability*/
    var scoresMiddle=Math.floor(scores.length/2); 

    scores.sort((a, b) => a - b); //ascending sort 
      if(scores.length%2==0) //check if the elements are even 
      {
      	median=(scores[scoresMiddle-1]+scores[scoresMiddle])/2;
      }
      else // a case for when the elements are odd 
      {
      	median=scores[scoresMiddle];
      }
      output.push(median);
      return output;
  }
  
}
  console.log(getMedian(scores));
  console.log(getMedian(scores,50));
  console.log(getMedian(scores,30));
  console.log(getMedian(scores,30));
 