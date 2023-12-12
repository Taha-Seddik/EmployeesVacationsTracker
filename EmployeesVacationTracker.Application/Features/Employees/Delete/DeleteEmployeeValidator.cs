using EmployeesVacationTracker.Application.Common.Interfaces;
using FluentValidation;

namespace EmployeesVacationTracker.Application.Features.Employees.Delete;

public class DeleteEmployeeValidator : AbstractValidator<DeleteEmployeeCommand>
{
    private readonly IEmployeesRepository _employeesRepo;

    public DeleteEmployeeValidator(IEmployeesRepository employeesRepo)
    {
        _employeesRepo = employeesRepo;

        RuleFor(v => v.EmployeeId)
            .NotNull().WithMessage("EmployeeId is required.")
            .MustAsync(EmployeeShouldExists).WithMessage("The specified Employee Id should exists.");
    }

    public async Task<bool> EmployeeShouldExists(int empId, CancellationToken cancellationToken)
    {
        return await _employeesRepo.GetByIdAsync(empId, cancellationToken) != null;
    }
}