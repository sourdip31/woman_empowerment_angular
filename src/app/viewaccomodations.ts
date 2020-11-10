export class ViewAccomodation{
    constructor(
      public accomodationId:number,
     public areaOfResidence:string,
    public grossIncomePerMonth:number,
    public caste:string,
    public husbandResidenceName:string,
    public userResidenceName:string,
    public numberOfGirlChildBelow18:number,
    public numberOfBoyChildBelow5:number,
    public anyPhysicalChallenges:string,
    public dayCareRequirements:string,
    public applicationStatus:string,
    public employmentStatus:string

    ){}
}