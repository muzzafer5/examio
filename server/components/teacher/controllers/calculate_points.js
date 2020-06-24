
function CalculatePoints(type,value) {
    weights = {
        rating : 25,
        lessons : 20,
        score : 15,
        experience : 14,
        degree : {
            "Doctoral" : 12, 
            "Master" : 9,
            "Bachelor" : 6,
        },
        college : 9,
        demo : 5
    }

    if(!value)
        return 0
    if(type == "degree"){
        return (weights[type][value])
    }
    return (weights[type] * value)
}

module.exports = CalculatePoints