using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelAgency.Business
{
    public static class SettingsProvider
    {
        public static Settings Current { internal get; set; } = new Settings();
    }

    public class Settings
    {

    }
}
