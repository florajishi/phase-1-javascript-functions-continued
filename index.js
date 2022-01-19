// code your solution here
//function declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("bathe my dog!")
//function expression
const mondayWork = function (activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}
mondayWork(`work from home`)

//implement function wrapAdjective
//wrapAdjective should return a function
    //inner function should take a single parameter that defails to "special"
    //return a String in the form of "You are..." where ... should be the adjective this function recieved wrapped in visual flair
//take parameter (wrap = "*") to create visual flair. Can be any symbol when called but must be "*" in default value
//*
function wrapAdjective(wrap = "*") {
    return function(niceCompliment = `special`){
        return `You are ${wrap + niceCompliment + wrap}!`
    }
}
wrapAdjective("☆")("a dedicated programmer"); 