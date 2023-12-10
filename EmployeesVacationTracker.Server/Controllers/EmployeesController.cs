using EmployeesVacationTracker.Application.Features.Employees.Create;
using EmployeesVacationTracker.Application.Features.Employees.Delete;
using EmployeesVacationTracker.Application.Features.Employees.ListAll;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace EmployeesVacationTracker.Server.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeesController : ControllerBase
{
    private readonly IMediator _mediator;

    public EmployeesController(IMediator mediator)
    {
        _mediator = mediator;
    }

    [HttpGet]
    public async Task<IActionResult> GetAsync()
    {
        var response = await _mediator.Send(new ListAllEmployeesQuery());
        return Ok(response);
    }

    [HttpPost]
    public async Task<IActionResult> CreateEmployee(CreateEmployeeCommand payload)
    {
        var newlyCreatedEmployeeId = await _mediator.Send(payload);
        return Ok(newlyCreatedEmployeeId);
    }

    [HttpDelete]
    [ProducesResponseType(StatusCodes.Status204NoContent)]
    public async Task<IActionResult> DeleteEmployee(DeleteEmployeeCommand payload)
    {
        await _mediator.Send(payload);
        return Ok();
    }
}
