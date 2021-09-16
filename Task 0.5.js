function triangleArea(sideA, sideB, sideC){
    let totalSide = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(totalSide * ((totalSide - sideA) * (totalSide - sideB) * (totalSide - sideC)));
    return area;
}
