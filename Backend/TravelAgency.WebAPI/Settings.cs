namespace TravelAgency.WebAPI
{
    public static class SettingsProvider
    {
        public static Settings Current { internal get; set; } = new Settings();
    }

    public class Settings
    {
        public string ExcelContentType { get; set; }
    }
}
