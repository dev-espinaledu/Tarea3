class Herramientas{
    estado() {
        console.log("Las herramientas son necesarias para tareas de mantenimiento");
    }
}
class Destornillador extends Herramientas {
    estado() {
        console.log("Las herramientas mecánicas son básicas y manejables");
    }
}
class Martillo extends Herramientas {
    estado() {
        console.log("Las herramientas mecánicas son básicas y manejables");
    }
}
let objHerramienta = new Herramientas();
objHerramienta.estado();

let objDestornillador = new Destornillador();
objDestornillador.estado();

let objMartillo = new Martillo();
objMartillo.estado();