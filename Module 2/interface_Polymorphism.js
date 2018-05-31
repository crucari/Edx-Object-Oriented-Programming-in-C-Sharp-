// Representing an Object as an Interface Type
Coffee coffee1 = new Coffee();
IBeverage coffee2 = new Coffee();

// You can use an implicit cast to convert to an interface type, because you know that the class must include all the interface members.

// Casting to an Interface Type
IBeverage beverage = coffee1;
// You must use an explicit cast to convert from an interface type to a derived class type, as the class may include members that are not defined in the interface.

// Casting an Interface Type to a Derived Class Type
Coffee coffee3 = beverage as Coffee;
// OR
Coffee coffee4 = (Coffee)beverage;
// Implementing Multiple Interfaces
// In many cases, you will want to create classes that implement more than one interface. For example, you might want to:


// Declaring a Class that Implements Multiple Interfaces
public class Coffee: IBeverage, IInventoryItem
{
}