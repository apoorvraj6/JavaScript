// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "jan"; // all datatype can be used
 
switch (month) {
    case "jan":
        console.log("Jan");
        break; // if break is not used then after a matched case all the cases after matched are marked as true and executed except default
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("Mar");
        break;
    case 4:
        console.log("Apr");
        break;

    default:
        console.log("default")
        break;
}