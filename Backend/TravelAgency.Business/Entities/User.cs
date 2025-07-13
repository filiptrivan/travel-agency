using Microsoft.EntityFrameworkCore;
using Spiderly.Security.Entities;
using Spiderly.Security.Interfaces;
using Spiderly.Shared.Attributes;
using Spiderly.Shared.Attributes.Entity;
using Spiderly.Shared.Attributes.Entity.Translation;
using Spiderly.Shared.Attributes.Entity.UI;
using Spiderly.Shared.BaseEntities;
using System.ComponentModel.DataAnnotations;

namespace TravelAgency.Business.Entities
{
    [Index(nameof(Email), IsUnique = true)]
    public class User : BusinessObject<long>, IUser
    {
        [UIDoNotGenerate]
        [UIControlWidth("col-12")]
        [DisplayName]
        [CustomValidator("EmailAddress()")]
        [StringLength(70, MinimumLength = 5)]
        [Required]
        public string Email { get; set; }

        public bool? HasLoggedInWithExternalProvider { get; set; }

        public bool? IsDisabled { get; set; }

        // Even if they say that on the trip form we should fill in JMBG, Passport number etc. we will make those fields on the user because those informations never changes
        [StringLength(13, MinimumLength = 1)]
        public string Jmbg { get; set; } // Im 99% sure that the problem is because of every upper case.

        [StringLength(10, MinimumLength = 1)]
        public string PassportNumber { get; set; }

        [StringLength(150, MinimumLength = 1)]
        public string FullName { get; set; }


        [ExcludeServiceMethodsFromGeneration]
        public virtual List<Role> Roles { get; } = new(); // M2M

        public virtual List<Notification> Notifications { get; } = new(); // M2M

        // One user can have many Trips
        public virtual List<Trip> Trips { get; } = new();
    }
}
