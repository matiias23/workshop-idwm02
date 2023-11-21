using backend.Src.Data;
using backend.Src.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace backend.Src.Controllers
{
    [ApiController]
    [Route("api/[controller]")]

    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;

        }

        private bool UserExists(int id)
        {
            return _context.Users.Any(e => e.Id == id);
        }

        [HttpGet]
        public async Task<ActionResult<List<User>>> AllUsers()
        {
            var users = await _context.Users.ToListAsync();
            return users;
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<User>> GetUserById(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound(); 
            }

            return user;
        }


        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User newUser)
        {
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUserById), new { id = newUser.Id }, newUser);
        }

        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _context.Users.FindAsync(id);
            

            if (user == null)
            {
                return NotFound("No se encontro el id"); 
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();
            return NoContent(); // Retorna un 204 si la eliminación fue exitosa.
        }

        [HttpPut("{id:int}")]
        public async Task<IActionResult> UpdateUser(int id, User updatedUser)
        {
            if (id != updatedUser.Id)
            {
                return BadRequest();
            }

            _context.Entry(updatedUser).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
                {
                    return NotFound(); // Retorna un 404 si el usuario con el ID proporcionado no se encuentra.
                }
                else
                {
                    throw;
                }
            }

            return NoContent(); // Retorna un 204 si la actualización fue exitosa.
        }

    }

}