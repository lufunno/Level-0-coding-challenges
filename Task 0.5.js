function triangleArea(sideA, sideB, sideC){
    var totalSide = (sideA + sideB + sideC) / 2;
    var area = Math.sqrt(totalSide * ((totalSide - sideA) * (totalSide - sideB) * (totalSide - sideC)));
    console.log(area)
}
