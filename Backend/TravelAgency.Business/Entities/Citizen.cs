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
    [DoNotAuthorize]
    public class Citizen : BusinessObject<long>
    {
        [Required]
        [StringLength(13)]
        public string Jmbg { get; set; }

        [Required]
        [StringLength(9)]
        public string PassportNumber { get; set; }
    }
}
