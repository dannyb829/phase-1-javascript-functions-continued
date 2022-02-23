// code your solution here
function saturdayFun(act= "roller-skate") {
    return `This Saturday, I want to ${act}!`
}

const mondayWork = function(act= "go to the office") {
    return `This Monday, I will ${act}.`
}

function wrapAdjective(wrap= "*") {
    return function(adj= "special") {
        return `You are ${wrap}${adj}${wrap}!`
    }
}
