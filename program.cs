namespace MVA_Class_Demo
{
    class Program
          {
              statis void Main(string[] args)
          {
              DrinksMachine myMachine = new DrinksMachine();
              myMachine._location = "kitchen";
              myMachine._model = "DM1000";

          }

          Console.WriteLine(myMachine._location);
          myMachine.MakeCappuccino();
          }