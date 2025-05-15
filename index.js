//  Инкапсуляция – сокрытие внутренней реализации и предоставление безопасного интерфейса.  
// Пример  Поля brand, model, year, speed, engine в классе Vehicle инкапсулированы (используются через методы)Методы startEngine(), acceleration(), brake() управляют состоянием объекта.  

//  Наследование – повторное использование кода через создание иерархии классов.  
//  Пример GasolineCar и ElectricCar наследуют общие свойства и методы от Vehicle, super() в конструкторах подклассов вызывает конструктор родителя.  

// Полиморфизм – возможность объектов разных классов обрабатываться через единый интерфейс
// Пример Метод startEngine() по-разному реализован в GasolineCar (проверка топлива) и ElectricCar (проверка заряда), Метод acceleration() в GasolineCar учитывает расход топлива, а в ElectricCar (если бы был реализован) мог бы учитывать заряд батареи.  


//   Класс Vehicle абстрактный (не предназначен для создания экземпляров).  


//   startEngine():
//     В GasolineCar проверяет наличие топлива.  
//     В ElectricCar проверяет заряд батареи.  
//     Общий интерфейс (vehicle.startEngine()), но разное поведение.  
//       acceleration():  
//        В GasolineCar уменьшает топливо при ускорении.  
//        В ElectricCar (если добавить) мог бы уменьшать заряд батареЗадание



// class DieselCar extends Vehicle {
//     constructor(brand, model, year, fuelCapacity, glowPlugActive = false) {
//         super(brand, model, year);
//         this.fuelCapacity = fuelCapacity;
//         this.currentFuel = fuelCapacity;
//         this.glowPlugActive = glowPlugActive; 
//     }

//     startEngine() {
//         if (this.currentFuel <= 0) {
//             console.log("Нет дизельного топлива!");
//             return false;
//         }
//         if (!this.glowPlugActive) {
//             console.log("Прогрев свечей накаливания...");
//             this.glowPlugActive = true;
//         }
//         this.engine = true;
//         console.log(this.getInfo() + " дизельный двигатель запущен");
//         return true;
//     }

//     refuel(liters) {
//         this.currentFuel = Math.min(this.fuelCapacity, this.currentFuel + liters);
//         console.log("Заправлено дизелем. Остаток: " + this.currentFuel + " л.");
//     }
// }




// class HybridCar extends Vehicle {
//     constructor(brand, model, year, fuelCapacity, batteryCapacity) {
//         super(brand, model, year);
//         this.fuelCapacity = fuelCapacity;
//         this.currentFuel = fuelCapacity;
//         this.batteryCapacity = batteryCapacity;
//         this.currentCharge = batteryCapacity;
//         this.isElectricMode = false;
//     }

//     switchMode() {
//         this.isElectricMode = !this.isElectricMode;
//         console.log(this.getInfo() + " переключен в " + (this.isElectricMode ? "электрический" : "бензиновый") + " режим");
//     }

//     startEngine() {
//         if (this.isElectricMode) {
//             if (this.currentCharge <= 0) {
//                 console.log("Батарея разряжена! Переключитесь на бензин");
//                 return false;
//             }
//             console.log(this.getInfo() + " электродвигатель запущен");
//         } else {
//             if (this.currentFuel <= 0) {
//                 console.log("Нет бензина! Переключитесь на электричество");
//                 return false;
//             }
//             console.log(this.getInfo() + " бензиновый двигатель запущен");
//         }
//         this.engine = true;
//         return true;
//     }
// }