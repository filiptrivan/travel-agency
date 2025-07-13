using Microsoft.AspNetCore.Mvc;
using Spiderly.Shared.Attributes;
using Spiderly.Shared.Interfaces;
using Azure.Storage.Blobs;
using Spiderly.Shared.DTO;
using Spiderly.Shared.Resources;
using Spiderly.Security.Services;
using TravelAgency.Business.Services;
using TravelAgency.Business.DTO;
using TravelAgency.Business.Entities;

namespace TravelAgency.WebAPI.Controllers
{
    [ApiController]
    [Route("/api/[controller]/[action]")]
    public class UserController : UserBaseController
    {
        private readonly IApplicationDbContext _context;
        private readonly TravelAgencyBusinessService _travelAgencyBusinessService;
        private readonly AuthenticationService _authenticationService;

        public UserController(
            IApplicationDbContext context, 
            TravelAgencyBusinessService travelAgencyBusinessService, 
            AuthenticationService authenticationService
        )
            : base(context, travelAgencyBusinessService)
        {
            _context = context;
            _travelAgencyBusinessService = travelAgencyBusinessService;
            _authenticationService = authenticationService;
        }

        [HttpGet]
        [AuthGuard]
        [SkipSpinner]
        public async Task<UserDTO> GetCurrentUser()
        {
            long userId = _authenticationService.GetCurrentUserId();
            return await _travelAgencyBusinessService.GetUserDTO(userId, false); // Don't need to authorize because he is current user
        }

    }
}

