using EmployeesVacationTracker.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace EmployeesVacationTracker.Infrastructure.Context;

public static class SeedDataExtension
{
    public static void Seed(this ModelBuilder modelBuilder)
    {
        // Seed Employees
        modelBuilder.Entity<Employee>().HasData(
            new Employee()
            {
                Id = 1,
                JobTitle = "Frontend developer",
                Department = EmployeeDepartment.Development,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 2,
                JobTitle = "UI/UX Designer",
                Department = EmployeeDepartment.Design,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 3,
                JobTitle = "Backend Developer",
                Department = EmployeeDepartment.Development,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 4,
                JobTitle = "DevOps Engineer",
                Department = EmployeeDepartment.Development,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 5,
                JobTitle = "HR Coordinator",
                Department = EmployeeDepartment.HR,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 6,
                JobTitle = "Talent Acquisition Specialist",
                Department = EmployeeDepartment.HR,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 7,
                JobTitle = "HR Project Manager",
                Department = EmployeeDepartment.HR,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 8,
                JobTitle = "QA Engineer",
                Department = EmployeeDepartment.Testing,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 9,
                JobTitle = "Performance Tester",
                Department = EmployeeDepartment.Testing,
                JoiningDate = DateTime.Now,
            },
            new Employee()
            {
                Id = 10,
                JobTitle = "Product Designer",
                Department = EmployeeDepartment.Design,
                JoiningDate = DateTime.Now,
            }

        );

    }
}
