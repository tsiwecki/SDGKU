
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Assignment1
{
    class Assignment1
    {
        static void Main(string[] args)
        {
           
            Decimal a = 09871.23m;
            Decimal b = 12398.007m;
            Decimal c = -089342m;
            
          if (a > b && a > c)
        {
            Console.WriteLine("The biggest number is: {0}", a);
        }
        else if (b > a && b > c)
        {
            Console.WriteLine("The biggest number is: {0}", b);
        }
        else
        {
            Console.WriteLine("The biggest number is: {0}", c);
        }
    
        }
    }
}