class Singleton
{	private static Singleton single_instance = null;//declared, not initialized
	public String s;
	private Singleton()
	{
		s = "Hello I am a string part of Singleton class";
	}
	public static Singleton getInstance(){
		if (single_instance == null)
			single_instance = new Singleton();//instantiate once, inside
		return single_instance; 
	}
}
class Main{
	public static void main(String args[])
	{	// instantiating Singleton class with variable x
		Singleton x = Singleton.getInstance();
		// instantiating Singleton class with variable y
		Singleton y = Singleton.getInstance();

		// instantiating Singleton class with variable z
		Singleton z = Singleton.getInstance();

		// changing variable of instance x
		x.s = (x.s).toUpperCase();

		System.out.println("String from x is " + x.s);
		System.out.println("String from y is " + y.s);
		System.out.println("String from z is " + z.s);
		System.out.println("\n");

		// changing variable of instance z
		z.s = (z.s).toLowerCase();

		System.out.println("String from x is " + x.s);
		System.out.println("String from y is " + y.s);
		System.out.println("String from z is " + z.s);
	}
}
