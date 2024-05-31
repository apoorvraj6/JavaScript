// +++++++++++++++++++++++++++++JAVASCRIPT EXECUTION CONTEXT ++++++++++++++++++++++++++++++++++


/*
1 => GLOBAL EXECUTION CONTEXT
2 => FUNCTION EXECUTION CONTEXT
*/

// ++++++++++++++++++++++++++ PHASES ++++++++++++++++++++++++++++++++

/*
MEMORY CREATTION PHASE
EXECUTION PHASE


let val1=10;
let val2=5;

function addnum(num1,num2)
{
    let sum=num1+num2;
    return sum;
}

let result1=addnum(val1,val2);
let result2=addnum(10,2);


step 1 => global execution 
step 2 => memory phase
          val1=undefined
          val2=undefined
          addnum(defination)
          result1=undefined
          result2=undefined
step 3 =>execution phase
         val1=10
         val2=5
         addnum ----> New variable environment + execution thread
                      step 1 => memory phase
                                val1=undefined
                                val2=undefined
                                total=undefined
                      step 2 => execution AudioContext
                                num1=10;
                                num2=5
                                total=15
                                return into global execution context 
                         Now this is deleted                    
                       
                        
+++++++++++++++++++++++++++++++++call stack++++++++++++++++++


*/