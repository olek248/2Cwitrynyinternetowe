let liczby = [1, 2, 3, 4, 5];

function nowyElement() {
    let nowyElement = document.getElementById('nowyElement').value;
    liczby.push(nowyElement);
    document.write("<h3>Nowa tablica:</h3>");
    document.write("<p>" + liczby + "<p>");
}

document.write("<h3>Początkowa tablica:</h3>");
document.write("<p>" + liczby + "</p>");
