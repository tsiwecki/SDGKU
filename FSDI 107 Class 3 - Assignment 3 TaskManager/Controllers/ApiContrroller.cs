
using Microsoft.AspNetCore.Mvc;
using TaskManager.Models;

namespace TaskManager.Controllers
{
    public class ApiController : Controller
    {
        public IActionResult Test()
        {
         return Content("Hello from API");
        }
        
        [HttpPost]


        public IActionResult SaveTask([FromBody]Task data)
        {
            System.Console.WriteLine("Saving task: " + data.Title);

            data.Id = 1;

            return Json(data);
        }
    }
           
}