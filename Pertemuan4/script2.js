function findRoots() {
    const a = document.getElementById('a').value;
    const b = document.getElementById('b').value;
    const c = document.getElementById('c').value;

    if (a === '0') {
        document.getElementById('result').innerHTML = "Persamaan bukan persamaan kuadrat.";
        return;
    }

    const discriminant = b * b - 4 * a * c;
    let root1, root2;

    if (discriminant > 0) {
        root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        document.getElementById('result').innerHTML = `Akar-akar persamaan adalah ${root1} dan ${root2}.`;
    } else if (discriminant === 0) {
        root1 = root2 = -b / (2 * a);
        document.getElementById('result').innerHTML = `Akar-akar persamaan adalah ${root1}.`;
    } else {
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        document.getElementById('result').innerHTML = `Akar-akar persamaan adalah ${realPart} + ${imaginaryPart}i dan ${realPart} - ${imaginaryPart}i.`;
    }
}
