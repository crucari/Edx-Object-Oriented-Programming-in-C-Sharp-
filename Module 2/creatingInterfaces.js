// Declaring an Interface
public interface IBeverage
{
  // Methods, properties, events, and indexers go here.
}


//Adding Interface members
// To define a method, you specify the name of the method, the return type, and any parameters:

int GetServingTemperature(bool includesMilk);

// To define a property, you specify the name of the property, the type of the property, and the property accessors:

bool IsFairTrade { get; set; }

// To define an event, you use the event keyword, followed by the event handler delegate, followed by the name of the event:

event EventHandler OnSoldOut;

// To define an indexer, you specify the return type and the accessors:

string this[int index] { get; set; }

// The following example shows an interface that defines one read-only property and two methods:
// Defining an Interface
public interface ILoyaltyCardHolder
{
   int TotalPoints { get; }
   int AddPoints(decimal transactionValue);
   void ResetPoints();
}

// Implementing an Interface
//The following example shows a class that implements the ILoyaltyCardHolder interface:
// Calculate the number of points to add by multiplying the transaction value by a fixed amount.
// Get the number of points to add by calling a service.
// Calculate the number of points to add by using additional factors, such as the location of the loyalty cardholder.

public class Customer : ILoyaltyCardHolder
{
   private int totalPoints;
   public int TotalPoints
   {
      get { return totalPoints; }
   }
   public int AddPoints(decimal transactionValue)
   {
      int points = Decimal.ToInt32(transactionValue);
      totalPoints += points;
      return totalPoints;
   }
   public void ResetPoints()
   {
      totalPoints = 0;
   }
      // Other members of the Customer class.
}


// Implementing an Interface Explicitly
public class Coffee : IBeverage
{
   private int servingTempWithoutMilk { get; set; }
   private int servingTempWithMilk { get; set; }
   public int IBeverage.GetServingTemperature(bool includesMilk)
   {
      if(includesMilk)
      {
          return servingTempWithMilk;
      }
      else
      {
         return servingTempWithoutMilk;
      }
   }
   public bool IBeverage.IsFairTrade { get; set; }
   // Other non-interface members.
}