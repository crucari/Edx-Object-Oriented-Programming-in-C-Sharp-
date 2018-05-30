self = [super initWithNibName:nibNameOrNil bundle:nibBundleOrNil];

//Applying Inheritance Ex
class Manager : Employee
{
    private char payRateIndicator;
    private Employee[] emps;
}

//This simple class definition in C# lists the keyword class followed by the class name Manager,
//a colon and then the name of the base class Employee. Looking at this snippet we can't tell what
//the Manager class has inherited from Employee so we would need to look at that class as well to understand all the properties available for us.

// Employee Class:
class Employee
{
    private string empNumber;
    private string firstName;
    private string lastName;
    private string address;

    public string EmpNumber
    {
        get
        {
            return empNumber;
        }

        set
        {
            empNumber = value;
        }
    }

    public string FirstName
    {
        get
        {
            return firstName;
        }

        set
        {
            firstName = value;
        }
    }

    public string LastName
    {
        get
        {
            return lastName;
        }

        set
        {
            lastName = value;
        }
    }

    public string Address
    {
        get
        {
            return address;
        }

        set
        {
            address = value;
        }
    }
}