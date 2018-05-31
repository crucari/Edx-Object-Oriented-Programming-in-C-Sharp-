// Declaring an Interface
public interface IBeverage
{
  // Methods, properties, events, and indexers go here.
}

The following example shows an interface that defines one read-only property and two methods:
// Defining an Interface
public interface ILoyaltyCardHolder
{
   int TotalPoints { get; }
   int AddPoints(decimal transactionValue);
   void ResetPoints();
}
