using Spiderly.Shared.Attributes.Entity;
using Spiderly.Shared.Attributes.Entity.Translation;
using Spiderly.Shared.Attributes.Entity.UI;
using Spiderly.Shared.BaseEntities;
using Spiderly.Shared.Enums;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TravelAgency.Business.Entities
{
    [DoNotAuthorize] // Be carefull with this attribute in prod, it will disable authorization for the whole entity, we are doing this just because this is only a demo app.
    public class Trip : BusinessObject<long>
    {
        [TranslateEn("Entry Date")]
        [Required]
        public DateTime EntryDate { get; set; }

        [TranslateEn("Exit Date")]
        [Required]
        public DateTime ExitDate { get; set; }

        [TranslateEn("Should Pay Trip Fee")]
        public bool? ShouldPayTripFee { get; set; }

        // One trip can have only a single user
        [WithMany(nameof(User.Trips))]
        [Required]
        // Do we want to delete the trip when the user gets deleted? Yes.
        [CascadeDelete]
        public virtual User User { get; set; }

        [WithMany(nameof(Vehicle.Trips))]
        [Required]
        [UIControlWidth("col-12")]
        // Do we want to delete the trip when the vehicle gets deleted? No.
        //[SetNull] // We cant make it required and set null at the same time, so we use "no action" by default.
        public virtual Vehicle Vehicle { get; set; }

        // You can go to multiple EU countries
        [UIControlType(nameof(UIControlTypeCodes.MultiSelect))] // We can use multi-select because there are not many of the EU countries.
        public virtual List<Country> Countries { get; } = new(); // M2M
    }
}
