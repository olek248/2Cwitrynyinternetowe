function utworzTablice() {
    let liczba1 = document.getElementById('liczba1').value;
    let liczba2 = document.getElementById('liczba2').value;
    let liczba3 = document.getElementById('liczba3').value;
    let liczba4 = document.getElementById('liczba4').value;
    let liczba5 = document.getElementById('liczba5').value;
    let liczba6 = document.getElementById('liczba6').value;
    let liczba7 = document.getElementById('liczba7').value;
    let liczba8 = document.getElementById('liczba8').value;
    let liczba9 = document.getElementById('liczba9').value;
    let liczba10 = document.getElementById('liczba10').value;

    let liczby = [liczba1, liczba2, liczba3, liczba4, liczba5, liczba6, liczba7, liczba8, liczba9, liczba10];

    liczby.sort();
    document.write("Największa liczba z tablicy to: " + liczby[0]);
}