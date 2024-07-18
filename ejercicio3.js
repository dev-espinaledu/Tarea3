class Silos {
    constructor(tipoGrano, cantidad, cliente, diasAlmacenamiento, mes) {
        this.tipoGrano = tipoGrano;
        this.cantidad = cantidad;
        this.cliente = cliente;
        this.diasAlmacenamiento = diasAlmacenamiento;
        this.mes = mes;
        this.costoDia = this.calcularCostoDia();
    }
    calcularCostoDia() {
        let costoBase = 500;
        return costoBase;
    }
    calcularCostoAdicional() {
        if (this.mes >= 1 && this.mes <= 6) {
            return 15000;
        } else if (this.mes >= 7 && this.mes <= 12) {
            return 25000;
        }
    }
    calcularCostoTotal() {
        let costoBase = this.costoDia * this.diasAlmacenamiento * this.cantidad;
        let costoAdicional = this.calcularCostoAdicional();
        return costoBase + costoAdicional;
    }
    mostrarInformacion() {
        console.log(`Cliente: ${this.cliente}`);
        console.log(`Tipo de Grano: ${this.tipoGrano}`);
        console.log(`Cantidad: ${this.cantidad}`);
        console.log(`Días de Almacenamiento: ${this.diasAlmacenamiento}`);
        console.log(`Mes de Almacenamiento: ${this.mes}`);
        console.log(`Costo Total: ${this.calcularCostoTotal()} pesos`);
    }
}
let silo1 = new Silos("Trigo", 100, "Cliente 1", 30, 5);
silo1.mostrarInformacion();
let silo2 = new Silos("Maíz", 200, "Cliente 2", 45, 10);
silo2.mostrarInformacion();