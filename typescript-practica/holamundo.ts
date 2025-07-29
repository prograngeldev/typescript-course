class Vehicle {
    brand: string;
    color: string;
    wheels: number;
    gears: number;
    private on: boolean;

    constructor(brand: string, color: string, wheels: number, gears: number) {
        this.brand = brand;
        this.color = color;
        this.wheels = wheels;
        this.gears = gears;
        this.on = false;
    }

    start(): void {
        if (!this.on) {
            this.on = true;
            console.log(`El vehículo ${this.brand} ha arrancado.`);
        } else {
            console.log(`El vehículo ${this.brand} ya está en marcha.`);
        }
    }

    stop(): void {
        if (this.on) {
            this.on = false;
            console.log(`El vehículo ${this.brand} se ha detenido.`);
        } else {
            console.log(`El vehículo ${this.brand} ya está detenido.`);
        }
    }
}

const vehicle1 = new Vehicle("Honda", "rojo", 4, 6);
vehicle1.start();

class Motor extends Vehicle {
    private wheeling: boolean;

    constructor(brand: string, color: string, wheels: number, gears: number) {
        super(brand, color, wheels, gears);
        this.wheeling = false;
    }

    startWheeling(): void {
        if (!this.wheeling) {
            this.wheeling = true;
            console.log(`El vehículo ${this.brand} está haciendo wheeling.`);
        } else {
            console.log(`El vehículo ${this.brand} ya está haciendo wheeling.`);
        }
    }
}

const motor1 = new Motor("Yamaha", "azul", 2, 5);
motor1.start();
motor1.startWheeling();