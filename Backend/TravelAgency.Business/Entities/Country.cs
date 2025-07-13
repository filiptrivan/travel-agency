using Spiderly.Shared.Attributes.Entity;
using Spiderly.Shared.BaseEntities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelAgency.Business.Entities
{
    [DoNotAuthorize] // Be carefull with this attribute in prod, it will disable authorization for the whole entity, we are doing this just because this is only a demo app.
    public class Country : BusinessObject<long>
    {
        [StringLength(100, MinimumLength = 1)]
        [Required]
        [DisplayName]
        public string Name { get; set; }

        public virtual List<Trip> Trips { get; } = new(); // M2M
    }
}
