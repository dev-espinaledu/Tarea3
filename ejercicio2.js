class Panaderia {
    constructor(tipoPan, insumoPrincipal, cantidadProducida, costoProduccion) {
        this.tipoPan = tipoPan;
        this.insumoPrincipal = insumoPrincipal;
        this.cantidadProducida = cantidadProducida;
        this.costoProduccion = costoProduccion;
    }
    setTipo(tipo) {
        this.tipoPan = tipo;
    }
    getTipo() {
        return this.tipoPan;
    }
    setInsumo(insumo) {
        this.insumoPrincipal = insumo;
    }
    getInsumo() {
        return this.insumoPrincipal;
    }
    setCantidad(cantidad) {
        this.cantidadProducida = cantidad;
    }
    getCantidad() {
        return this.cantidadProducida;
    }
    setCosto(costo) {
        this.costoProduccion = costo;
    }
    getCosto() {
        return this.costoProduccion;
    }
}
class Pan extends Panaderia {
    constructor(tipo, insumoPrincipal, cantidadProducida, costoProduccion) {
        super(tipo, insumoPrincipal, cantidadProducida, costoProduccion);
    }
    mostrarInfoPan() {
        console.log(`Este es un pan de tipo ${this.tipoPan}.`);
    }
}
let pandebono = new Pan("Pandebono", "Harina", 100, 300000);
pandebono.mostrarInfoPan();
console.log(pandebono.getTipo());
console.log(pandebono.getInsumo());
console.log(pandebono.getCantidad());
console.log(pandebono.getCosto());