using EmployeesVacationTracker.Application.Common.Interfaces;
using FluentValidation;

namespace EmployeesVacationTracker.Application.Features.Employees.Update;

public class UpdateEmployeeValidator : AbstractValidator<UpdateEmployeeCommand>
{
    private readonly IEmployeesRepository _employeesRepo;

    public UpdateEmployeeValidator(IEmployeesRepository employeesRepo)
    {
        _employeesRepo = employeesRepo;

        RuleFor(v => v.EmployeeId)
         .GreaterThan(0).WithMessage("EmployeeId is required.")
          .MustAsync(EmployeeShouldExists).WithMessage("The specified Employee Id should exists.");
    }

    public async Task<bool> EmployeeShouldExists(int chocolateId, CancellationToken cancellationToken)
    {
        return await _employeesRepo.GetByIdAsync(chocolateId, cancellationToken) != null;
    }
}
