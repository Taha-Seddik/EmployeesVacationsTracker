using AutoMapper;
using EmployeesVacationTracker.Application.Common.Interfaces;
using MediatR;

namespace EmployeesVacationTracker.Application.Features.Employees.ListAll;

public class ListAllEmployeesQueryResponse
{
    public IEnumerable<EmployeeDTO> Employees { get; set; }
}

public class ListAllEmployeesQuery : IRequest<ListAllEmployeesQueryResponse>
{}

public class ListAllEmployeesQueryHandler : IRequestHandler<ListAllEmployeesQuery, ListAllEmployeesQueryResponse>
{
    private readonly IMapper _mapper;
    private readonly IEmployeesRepository _employeesRepo;

    public ListAllEmployeesQueryHandler(IEmployeesRepository employeesRepo, IMapper mapper)
    {
        _employeesRepo = employeesRepo;
        _mapper = mapper;
    }

    public async Task<ListAllEmployeesQueryResponse> Handle(ListAllEmployeesQuery request, CancellationToken cancellationToken)
    {
        var employees = await _employeesRepo.ListAllWithUserFilled(cancellationToken);
        var dtos = employees.Select(x =>
        {
            var basicDto = _mapper.Map<EmployeeDTO>(x);
            basicDto.FirstName = x.User.FirstName;
            basicDto.LastName = x.User.LastName;
            basicDto.Email = x.User.Email!;
            return basicDto;
        }).ToList().AsReadOnly();
        return new ListAllEmployeesQueryResponse()
        {
            Employees = dtos
        };
    }
}



