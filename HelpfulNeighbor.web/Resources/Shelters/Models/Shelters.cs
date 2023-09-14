﻿namespace HelpfulNeighbor.web.Resources.Shelters.Models
{
    public class Shelters
    {
        public int ResourceId { get; set; }
        public string Name { get; set; }
        public string City { get; set; }
        public string Address { get; set; }
        public string Type { get; set; } 
        public string AdditionalDetails { get; set; }
        public string Parish { get; set; }
        public string PhoneNumber { get; set; }
        public string Website { get; set; }
        public int ResourceType { get; set; }
    }
}
