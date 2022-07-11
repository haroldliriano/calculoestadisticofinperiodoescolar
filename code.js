
/*objeto datos de estudiante*/
var cantEstData = 0;
/*Aprobabados */
var contAproFemEdad1 = 0;
var contAproMasEdad1 = 0;
var contAproFemEdad2 = 0;
var contAproMasEdad2 = 0;
var contAproFemEdad3 = 0;
var contAproMasEdad3 = 0;
var contAproFemEdad4 = 0;
var contAproMasEdad4 = 0;
/*Reprobabados */
var contReproFemEdad1 = 0;
var contReproMasEdad1 = 0;
var contReproFemEdad2 = 0;
var contReproMasEdad2 = 0;
var contReproFemEdad3 = 0;
var contReproMasEdad3 = 0;
var contReproFemEdad4 = 0;
var contReproMasEdad4 = 0;

/*Aplazados */
var contAplaFemEdad1 = 0;
var contAplaMasEdad1 = 0;
var contAplaFemEdad2 = 0;
var contAplaMasEdad2 = 0;
var contAplaFemEdad3 = 0;
var contAplaMasEdad3 = 0;
var contAplaFemEdad4 = 0;
var contAplaMasEdad4 = 0;

var calFlag = true;
class StudentData {

    constructor(condition, sex, age) {
        this.condition = condition;
        this.sex = sex;
        this.age = age;
    }

}

/*Array de objetos StudentData*/
var stdntDatos = [];

var birthdate = new Date("9/11/1981");
/*Funcion que calcula la edad a partir d */
function difference(date1) {
    let date2 = new Date();
    const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    let year = 1000 * 60 * 60 * 24 * 365.25;
    return Math.trunc((date2utc - date1utc) / year)
}

//document.write(difference(birthdate));
var salida;

function agregar() {
    const cond = document.getElementById('condition').value;
    const sexo = document.getElementById('sexo').value;
    const mydate = new Date(document.getElementById('date').value);
    const edad = difference(mydate);
    stdntDatos.push(new StudentData(cond, sexo, edad));
    //console.log(stdntDatos);
    // cantEstData=stdntDatos.length;
    document.getElementById("ttlEstAgr").innerHTML = stdntDatos.length;
    //calFlag=true;
}
cantEstData = stdntDatos.length;

function reset() {
    window.location.reload();

}

function eliminar() {
    stdntDatos.pop();
    document.getElementById("ttlEstAgr").innerHTML = stdntDatos.length;
}
function calcular() {

    if (calFlag) {
        var ageMin1 = document.getElementById("ageMin1").value;
        var ageMin2 = document.getElementById("ageMin2").value;
        var ageMin3 = document.getElementById("ageMin3").value;
        var ageMax1 = document.getElementById("ageMax1").value;
        var ageMax2 = document.getElementById("ageMax2").value;
        var ageMax3 = document.getElementById("ageMax3").value;

        for (let x = 0; x < stdntDatos.length; x++) {
            /*----------------------Aprobados------------------------------------- */
            if ((stdntDatos[x].condition == "apr") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin1 || stdntDatos[x].age == ageMax1))
                contAproFemEdad1++;
            if ((stdntDatos[x].condition == "apr") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin1 || stdntDatos[x].age == ageMax1))
                contAproMasEdad1++;
            if ((stdntDatos[x].condition == "apr") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin2 || stdntDatos[x].age == ageMax2))
                contAproFemEdad2++;
            if ((stdntDatos[x].condition == "apr") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin2 || stdntDatos[x].age == ageMax2))
                contAproMasEdad2++;
            if ((stdntDatos[x].condition == "apr") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin3 || stdntDatos[x].age == ageMax3))
                contAproFemEdad3++;
            if ((stdntDatos[x].condition == "apr") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin3 || stdntDatos[x].age == ageMax3))
                contAproMasEdad3++;
            if ((stdntDatos[x].condition == "apr") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age < ageMin1 || stdntDatos[x].age > ageMax3))
                contAproFemEdad4++;
            if ((stdntDatos[x].condition == "apr") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age < ageMin1 || stdntDatos[x].age > ageMax3))
                contAproMasEdad4++;
            /*--------------------------------------------------------------------------------- */

            /*----------------------Reprobados------------------------------------- */
            if ((stdntDatos[x].condition == "rep") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin1 || stdntDatos[x].age == ageMax1))
                contReproFemEdad1++;
            if ((stdntDatos[x].condition == "rep") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin1 || stdntDatos[x].age == ageMax1))
                contReproMasEdad1++;
            if ((stdntDatos[x].condition == "rep") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin2 || stdntDatos[x].age == ageMax2))
                contReproFemEdad2++;
            if ((stdntDatos[x].condition == "rep") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin2 || stdntDatos[x].age == ageMax2))
                contReproMasEdad2++;
            if ((stdntDatos[x].condition == "rep") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin3 || stdntDatos[x].age == ageMax3))
                contReproFemEdad3++;
            if ((stdntDatos[x].condition == "rep") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin3 || stdntDatos[x].age == ageMax3))
                contReproMasEdad3++;
            if ((stdntDatos[x].condition == "rep") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age < ageMin1 || stdntDatos[x].age > ageMax3))
                contReproFemEdad4++;
            if ((stdntDatos[x].condition == "rep") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age < ageMin1 || stdntDatos[x].age > ageMax3))
                contReproMasEdad4++;
            /*--------------------------------------------------------------------------------- */
            /*----------------------Aplazados------------------------------------- */
            if ((stdntDatos[x].condition == "apl") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin1 || stdntDatos[x].age == ageMax1))
                contAplaFemEdad1++;
            if ((stdntDatos[x].condition == "apl") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin1 || stdntDatos[x].age == ageMax1))
                contAplaMasEdad1++;
            if ((stdntDatos[x].condition == "apl") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin2 || stdntDatos[x].age == ageMax2))
                contAplaFemEdad2++;
            if ((stdntDatos[x].condition == "apl") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin2 || stdntDatos[x].age == ageMax2))
                contAplaMasEdad2++;
            if ((stdntDatos[x].condition == "apl") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age == ageMin3 || stdntDatos[x].age == ageMax3))
                contAplaFemEdad3++;
            if ((stdntDatos[x].condition == "apl") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age == ageMin3 || stdntDatos[x].age == ageMax3))
                contAplaMasEdad3++;
            if ((stdntDatos[x].condition == "apl") && (stdntDatos[x].sex == "f") && (stdntDatos[x].age < ageMin1 || stdntDatos[x].age > ageMax3))
                contAplaFemEdad4++;
            if ((stdntDatos[x].condition == "apl") && (stdntDatos[x].sex == "m") && (stdntDatos[x].age < ageMin1 || stdntDatos[x].age > ageMax3))
                contAplaMasEdad4++;
            /*--------------------------------------------------------------------------------- */
        }

        /*--------------Aprobados-----------------------------------*/
        /*aprobados 13-14 */
        document.getElementById("aproFemEd1").innerHTML = contAproFemEdad1;
        document.getElementById("aproMasEd1").innerHTML = contAproMasEdad1;
        document.getElementById("aproEd1").innerHTML = contAproMasEdad1 + contAproFemEdad1;

        /*aprobados 15-16 */
        document.getElementById("aproFemEd2").innerHTML = contAproFemEdad2;
        document.getElementById("aproMasEd2").innerHTML = contAproMasEdad2;
        document.getElementById("aproEd2").innerHTML = contAproMasEdad2 + contAproFemEdad2;
        /*aprobados 17-18 */
        document.getElementById("aproFemEd3").innerHTML = contAproFemEdad3;
        document.getElementById("aproMasEd3").innerHTML = contAproMasEdad3;
        document.getElementById("aproEd3").innerHTML = contAproMasEdad3 + contAproFemEdad3;

        /*Casos exepcionales menor a 13 o mayor a 18 */
        document.getElementById("aproFemEd4").innerHTML = contAproFemEdad4;
        document.getElementById("aproMasEd4").innerHTML = contAproMasEdad4;
        document.getElementById("aproEd4").innerHTML = contAproMasEdad4 + contAproFemEdad4;
        /*Totales aprobados */
        document.getElementById("aproFem").innerHTML = contAproFemEdad1 + contAproFemEdad2 + contAproFemEdad3 + contAproFemEdad4;

        document.getElementById("aproMas").innerHTML = contAproMasEdad1 + contAproMasEdad2 + contAproMasEdad3 + contAproMasEdad4;
        document.getElementById("apro").innerHTML = contAproFemEdad1 + contAproFemEdad2 + contAproFemEdad3 + contAproFemEdad4 + contAproMasEdad1 + contAproMasEdad2 + contAproMasEdad3 + contAproMasEdad4;
        calFlag = false;
        /*------------------------------------------------------------------------------------------ */

        /*--------------Reprobados-----------------------------------*/
        /*Reprobados 13-14 */
        document.getElementById("repFemEd1").innerHTML = contReproFemEdad1;
        document.getElementById("repMasEd1").innerHTML = contReproMasEdad1;
        document.getElementById("repEd1").innerHTML = contReproMasEdad1 + contReproFemEdad1;

        /*Reprobados 15-16 */
        document.getElementById("repFemEd2").innerHTML = contReproFemEdad2;
        document.getElementById("repMasEd2").innerHTML = contReproMasEdad2;
        document.getElementById("repEd2").innerHTML = contReproMasEdad2 + contReproFemEdad2;
        /*Reprobados 17-18 */
        document.getElementById("repFemEd3").innerHTML = contReproFemEdad3;
        document.getElementById("repMasEd3").innerHTML = contReproMasEdad3;
        document.getElementById("repEd3").innerHTML = contReproMasEdad3 + contReproFemEdad3;

        /*Casos exepcionales menor a 13 o mayor a 18 */
        document.getElementById("repFemEd4").innerHTML = contReproFemEdad4;
        document.getElementById("repMasEd4").innerHTML = contReproMasEdad4;
        document.getElementById("repEd4").innerHTML = contReproMasEdad4 + contReproFemEdad4;
        /*Totales Reprobados */
        document.getElementById("repFem").innerHTML = contReproFemEdad1 + contReproFemEdad2 + contReproFemEdad3 + contReproFemEdad4;

        document.getElementById("repMas").innerHTML = contReproMasEdad1 + contReproMasEdad2 + contReproMasEdad3 + contReproMasEdad4;
        document.getElementById("rep").innerHTML = contReproFemEdad1 + contReproFemEdad2 + contReproFemEdad3 + contReproFemEdad4 + contReproMasEdad1 + contReproMasEdad2 + contReproMasEdad3 + contReproMasEdad4;
        calFlag = false;
        /*------------------------------------------------------------------------------------------ */

        /*--------------Aplazados-----------------------------------*/
        /*Aplazados 13-14 */
        document.getElementById("aplFemEd1").innerHTML = contAplaFemEdad1;
        document.getElementById("aplMasEd1").innerHTML = contAplaMasEdad1;
        document.getElementById("aplEd1").innerHTML = contAplaMasEdad1 + contAplaFemEdad1;

        /*Aplazados 15-16 */
        document.getElementById("aplFemEd2").innerHTML = contAplaFemEdad2;
        document.getElementById("aplMasEd2").innerHTML = contAplaMasEdad2;
        document.getElementById("aplEd2").innerHTML = contAplaMasEdad2 + contAplaFemEdad2;
        /*Aplazados 17-18 */
        document.getElementById("aplFemEd3").innerHTML = contAplaFemEdad3;
        document.getElementById("aplMasEd3").innerHTML = contAplaMasEdad3;
        document.getElementById("aplEd3").innerHTML = contAplaMasEdad3 + contAplaFemEdad3;

        /*Casos exepcionales menor a 13 o mayor a 18 */
        document.getElementById("aplFemEd4").innerHTML = contAplaFemEdad4;
        document.getElementById("aplMasEd4").innerHTML = contAplaMasEdad4;
        document.getElementById("aplEd4").innerHTML = contAplaMasEdad4 + contAplaFemEdad4;
        /*Totales Aplazados */
        document.getElementById("aplFem").innerHTML = contAplaFemEdad1 + contAplaFemEdad2 + contAplaFemEdad3 + contAplaFemEdad4;

        document.getElementById("aplMas").innerHTML = contAplaMasEdad1 + contAplaMasEdad2 + contAplaMasEdad3 + contAplaMasEdad4;
        document.getElementById("apl").innerHTML = contAplaFemEdad1 + contAplaFemEdad2 + contAplaFemEdad3 + contAplaFemEdad4 + contAplaMasEdad1 + contAplaMasEdad2 + contAplaMasEdad3 + contAplaMasEdad4;
        calFlag = false;
        /*------------------------------------------------------------------------------------------ */
        document.getElementById("sumTotal").innerHTML = contAproFemEdad1 + contAproFemEdad2 + contAproFemEdad3 + contAproFemEdad4 + contAproMasEdad1 + contAproMasEdad2 + contAproMasEdad3 + contAproMasEdad4 + contReproFemEdad1 + contReproFemEdad2 + contReproFemEdad3 + contReproFemEdad4 + contReproMasEdad1 + contReproMasEdad2 + contReproMasEdad3 + contReproMasEdad4 + contAplaFemEdad1 + contAplaFemEdad2 + contAplaFemEdad3 + contAplaFemEdad4 + contAplaMasEdad1 + contAplaMasEdad2 + contAplaMasEdad3 + contAplaMasEdad4;
    }
}



