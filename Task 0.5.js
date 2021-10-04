function TriangleArea(sideA, sideB, sideC){
    let totalSide = (sideA + sideB + sideC) / 2;
    let area = Math.sqrt(totalSide * ((totalSide - sideA) * (totalSide - sideB) * (totalSide - sideC)));
    return area;
}
console.log(TriangleArea(10, 10, 10));
