using Spiderly.Shared.Attributes.Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelAgency.Business.Entities
{
    [M2M]
    public class CountryTrip
    {
        [M2MWithMany(nameof(Country.Trips))]
        public virtual Country Country { get; set; }

        [M2MWithMany(nameof(Trip.Countries))]
        public virtual Trip Trip { get; set; }
    }
}
