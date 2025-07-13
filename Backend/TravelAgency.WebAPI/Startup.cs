using LightInject;
using Spiderly.Shared.Helpers;
using Spiderly.Shared.Extensions;
using TravelAgency.WebAPI.DI;
using TravelAgency.Infrastructure;
using Quartz;

public class Startup
{
    public static string _jsonConfigurationFile = "appsettings.json";
    private readonly IHostEnvironment _hostEnvironment;

    public Startup(IConfiguration configuration, IHostEnvironment hostEnvironment)
    {
        Configuration = configuration;
        _hostEnvironment = hostEnvironment;

        if (_hostEnvironment.IsStaging())
            _jsonConfigurationFile = "appsettings.Staging.json";
        else if (_hostEnvironment.IsProduction())
            _jsonConfigurationFile = "appsettings.Production.json";

        TravelAgency.WebAPI.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<TravelAgency.WebAPI.Settings>(_jsonConfigurationFile);
        TravelAgency.Business.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<TravelAgency.Business.Settings>(_jsonConfigurationFile);
        Spiderly.Infrastructure.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<Spiderly.Infrastructure.Settings>(_jsonConfigurationFile);
        Spiderly.Security.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<Spiderly.Security.Settings>(_jsonConfigurationFile);
        Spiderly.Shared.SettingsProvider.Current = Helper.ReadAssemblyConfiguration<Spiderly.Shared.Settings>(_jsonConfigurationFile);
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        services.SpiderlyConfigureServices<TravelAgencyApplicationDbContext>();
    }

    public void ConfigureContainer(IServiceContainer container)
    {
        container.RegisterInstance(container);

        container.RegisterFrom<CompositionRoot>();
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        app.SpiderlyConfigure(env);

        app.UseEndpoints(endpoints =>
        {
            endpoints
                .MapControllers();
        });
    }
}
