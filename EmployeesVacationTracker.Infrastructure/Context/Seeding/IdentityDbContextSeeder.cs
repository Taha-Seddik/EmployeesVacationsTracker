using EmployeesVacationTracker.DomainLayer.Entities;
using Microsoft.AspNetCore.Identity;

namespace EmployeesVacationTracker.Infrastructure.Context.Seeding;

public class IdentityDbContextSeeder: IDbContextSeeder
{
    private readonly UserManager<ApplicationUser> _userManager;
    private readonly RoleManager<IdentityRole> _roleManager;

    public IdentityDbContextSeeder(UserManager<ApplicationUser> userManager, RoleManager<IdentityRole> roleManager)
    {
        _userManager = userManager;
        _roleManager = roleManager;
    }

    public async Task SeedAsync(ApplicationDbContext dbContext)
    {
        if (!dbContext.Roles.Any())
        {
            await SeedRolesAsync();
        }
        if (!dbContext.Employees.Any())
        {
            await SeedUsersAsync(dbContext);
        }
    }

    private async Task SeedRolesAsync()
    {
        var roles = new[] { "Admin", "User" };

        foreach (var role in roles)
        {
            if (!await _roleManager.RoleExistsAsync(role))
            {
                await _roleManager.CreateAsync(new IdentityRole(role));
            }
        }
    }

    private async Task SeedUsersAsync(ApplicationDbContext dbContext)
    {
        #region Seed Users
        var initialUsers = new[]
       {
            new ApplicationUser
            {
                UserName = "john.doe@example.com",
                Email = "john.doe@example.com",
                FirstName = "John",
                LastName = "Doe"
            },
            new ApplicationUser
            {
                UserName = "jane.smith@example.com",
                Email = "jane.smith@example.com",
                FirstName = "Jane",
                LastName = "Smith"
            },
            new ApplicationUser
            {
                UserName = "bob.jones@example.com",
                Email = "bob.jones@example.com",
                FirstName = "Bob",
                LastName = "Jones"
            },
            new ApplicationUser
            {
                UserName = "alice.rodriguez@example.com",
                Email = "alice.rodriguez@example.com",
                FirstName = "Alice",
                LastName = "Rodriguez"
            },
            new ApplicationUser
            {
                UserName = "samuel.white@example.com",
                Email = "samuel.white@example.com",
                FirstName = "Samuel",
                LastName = "White"
            },
            new ApplicationUser
            {
                UserName = "lisa.miller@example.com",
                Email = "lisa.miller@example.com",
                FirstName = "Lisa",
                LastName = "Miller"
            },
            new ApplicationUser
            {
                UserName = "michael.clark@example.com",
                Email = "michael.clark@example.com",
                FirstName = "Michael",
                LastName = "Clark"
            },
            new ApplicationUser
            {
                UserName = "emily.carter@example.com",
                Email = "emily.carter@example.com",
                FirstName = "Emily",
                LastName = "Carter"
            },
            new ApplicationUser
            {
                UserName = "david.brown@example.com",
                Email = "david.brown@example.com",
                FirstName = "David",
                LastName = "Brown"
            },
            new ApplicationUser
            {
                UserName = "olivia.martin@example.com",
                Email = "olivia.martin@example.com",
                FirstName = "Olivia",
                LastName = "Martin"
            },
        };

        foreach (var user in initialUsers)
        {
            if (_userManager.Users.All(u => u.UserName != user.UserName))
            {
                await _userManager.CreateAsync(user, "NicePwd991!");

                // Assign the user to a role if needed
                await _userManager.AddToRoleAsync(user, "User");
            }
        } 
        #endregion

        // Seed Admin
        var admin = new ApplicationUser
        {
            UserName = "system.Admin@example.com",
            Email = "system.Admin@example.com",
            FirstName = "Taha",
            LastName = "Seddik"
        };
        await _userManager.CreateAsync(admin, "NicePwd991!");
        await _userManager.AddToRoleAsync(admin, "Admin");

        // Seed Employees map of user email / employee data
        var employeesMap = new Dictionary<string, Employee>()
        {
            {
                "john.doe@example.com",
                new Employee()
                {
                    JobTitle = "Frontend developer",
                    Department = EmployeeDepartment.Development,
                    JoiningDate = DateTime.Now,
                } 
            },
            {
                "jane.smith@example.com",
                new Employee()
                {
                    JobTitle = "UI/UX Designer",
                    Department = EmployeeDepartment.Design,
                    JoiningDate = DateTime.Now,
                }
            },
            {
                "bob.jones@example.com",
                new Employee()
                {
                    JobTitle = "Backend Developer",
                    Department = EmployeeDepartment.Development,
                    JoiningDate = DateTime.Now,
                }
            },
            {
                "alice.rodriguez@example.com",
                new Employee()
                {
                    JobTitle = "DevOps Engineer",
                    Department = EmployeeDepartment.Development,
                    JoiningDate = DateTime.Now,
                }
            },
            {
                "samuel.white@example.com",
                new Employee()
                {
                    JobTitle = "HR Coordinator",
                    Department = EmployeeDepartment.HR,
                    JoiningDate = DateTime.Now,
                }
            },
            {
                "lisa.miller@example.com",
                new Employee()
                {
                    JobTitle = "Talent Acquisition Specialist",
                    Department = EmployeeDepartment.HR,
                    JoiningDate = DateTime.Now,
                }
            },
            {
                "michael.clark@example.com",
                new Employee()
                {
                    JobTitle = "HR Project Manager",
                    Department = EmployeeDepartment.HR,
                    JoiningDate = DateTime.Now,
                }
            },
            {
                "emily.carter@example.com",
                new Employee()
                {
                    JobTitle = "QA Engineer",
                    Department = EmployeeDepartment.Testing,
                    JoiningDate = DateTime.Now,
                }
            },
            {
                "david.brown@example.com",
                new Employee()
                {
                    JobTitle = "Performance Tester",
                    Department = EmployeeDepartment.Testing,
                    JoiningDate = DateTime.Now,
                }
            },
            {
                "olivia.martin@example.com",
                new Employee()
                {
                    JobTitle = "Product Designer",
                    Department = EmployeeDepartment.Design,
                    JoiningDate = DateTime.Now,
                }
            }
        };

        // Seed employees
        foreach (var u in initialUsers)
        {
            var emp = employeesMap[u.Email!];
            emp.UserId = u.Id;

            dbContext.Employees.Add(emp);
            await dbContext.SaveChangesAsync();
        }
        
    }

    
}
