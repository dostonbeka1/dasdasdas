
function Ishla(son1) {
    console.log(son1);
    return function (son2) {
        return function (son3) {
            return function (son4) {
                console.log(son4);
            }
        }
    }
}
Ishla({online:true})(0)(0)(4)




