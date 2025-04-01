function utworzTablice() {
    let zwierze1 = document.getElementById('zwierze1').value;
    let zwierze2 = document.getElementById('zwierze2').value;
    let zwierze3 = document.getElementById('zwierze3').value;
    let zwierze4 = document.getElementById('zwierze4').value;
    let zwierze5 = document.getElementById('zwierze5').value;

    let zwierzeta = [zwierze1, zwierze2, zwierze3, zwierze4, zwierze5];
    zwierzeta.shift();
    document.write(zwierzeta);
}

