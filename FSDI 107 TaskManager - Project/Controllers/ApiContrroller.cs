
using Microsoft.AspNetCore.Mvc;
using TaskManager.Models;
using System.Collections.Generic;
using System.Linq;

namespace TaskManager.Controllers
{
    public class ApiController : Controller
    {
        //array /list to temp store the data
        static List<Task> DB;
        static int count;

        //Constructor should have same name of the class and no return type
        public ApiController()
        {
            if(DB == null)
            {
                DB = new List<Task>();
                count = 1;
            }
        }

        public IActionResult Test()
        {
         return Content("Hello from API");
        }
        
        [HttpPost]
        public IActionResult SaveTask([FromBody] Task data)
        {
            System.Console.WriteLine("Saving task: " + data.Title);

            // assign a unique id
            data.Id = count;
            count += 1;

            // save to database
            DB.Add(data); //add items to list

            // return the object back
            return Json(data);
        }

        [HttpGet]
        public IActionResult GetTasks()
        {
            return Json(DB);
        }

        [HttpDelete]
        public IActionResult DeleteTasks(int id)
        {
            //find the task with the ID
            Task t = DB.First(t => t.Id == id);

            // remove the task
            DB.Remove(t);

            return Ok();
        }

        [HttpPatch]
        public IActionResult MarkDone(int id){
            // find the task
            Task t = DB.First(t => t.Id == id);
            
            // change the status
           t.Status = 2; // 2 = done

            return Json(t);
        }
    
    }
           
}