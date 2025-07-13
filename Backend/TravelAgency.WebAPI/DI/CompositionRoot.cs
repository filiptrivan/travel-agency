using LightInject;
using Spiderly.Security.Interfaces;
using Spiderly.Shared.Excel;
using Spiderly.Security.Services;
using Microsoft.Extensions.Options;
using Microsoft.AspNetCore.Mvc;
using Spiderly.Shared.Emailing;
using TravelAgency.Business.Services;
using TravelAgency.Business.Entities;
using TravelAgency.Shared.FluentValidation;
using Spiderly.Shared.Interfaces;
using Spiderly.Shared.Services;

namespace TravelAgency.WebAPI.DI
{
    public class CompositionRoot : ICompositionRoot
    {
        public virtual void Compose(IServiceRegistry registry)
        {
            #region Spiderly

            registry.Register<AuthenticationService>();
            registry.Register<AuthorizationService>();
            registry.Register<SecurityBusinessService<User>>();
            registry.Register<Spiderly.Security.Services.BusinessServiceGenerated<User>>();
            registry.Register<Spiderly.Security.Services.AuthorizationBusinessService<User>>();
            registry.Register<Spiderly.Security.Services.AuthorizationBusinessServiceGenerated<User>>();
            registry.Register<ExcelService>();
            registry.Register<EmailingService>();
            registry.Register<IFileManager, DiskStorageService>();
            registry.RegisterSingleton<IConfigureOptions<MvcOptions>, TranslatePropertiesConfiguration>();
            registry.RegisterSingleton<IJwtAuthManager, JwtAuthManagerService>();

            #endregion

            #region Business

            registry.Register<TravelAgency.Business.Services.TravelAgencyBusinessService>();
            registry.Register<TravelAgency.Business.Services.BusinessServiceGenerated>();
            registry.Register<TravelAgency.Business.Services.AuthorizationBusinessService>();
            registry.Register<TravelAgency.Business.Services.AuthorizationBusinessServiceGenerated>();

            #endregion
        }
    }
}
