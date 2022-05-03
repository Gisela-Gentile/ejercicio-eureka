import "./styles.css";
let contador: number = 1;
let clave: string = "";

while (contador <= 3 && clave !== "eureka") {
  clave = prompt("Introduzca la clave");
  contador++;
}
if (clave === "eureka") {
  console.log("Clave correcta");
} else {
  console.log("Ya no tiene más intentos");
}
