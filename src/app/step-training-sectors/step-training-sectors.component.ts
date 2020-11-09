import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { SectorName } from '../sectorname';
import { ViewCourseBySectorService } from '../view-course-by-sector.service';

@Component({
  selector: 'app-step-training-sectors',
  templateUrl: './step-training-sectors.component.html',
  styleUrls: ['./step-training-sectors.component.css']
})
export class StepTrainingSectorsComponent implements OnInit {
  isAgriculture:boolean = false;
  isFoodProcessing : boolean = false ;
  isHandicrafts : boolean = false ;
  isEmbroidery : boolean = false;
  isComputerIT : boolean = false ;
  isSoftSkill : boolean = false ;


  sector: SectorName = new SectorName(); 
  constructor(private viewCourseBySectorService : ViewCourseBySectorService) { }
  courses : Array<Course>=[] ;
  ngOnInit(): void {
  }

  viewCoursesAgriculture(){
    this.isAgriculture= true ;
    this.isFoodProcessing= false ;
    this.isHandicrafts = false ;
    this.isEmbroidery = false;
    this.isComputerIT = false ;
    this.isSoftSkill = false ;
    this.sector.trainingSector = "Agriculture" ;

    this.viewCourseBySectorService.viewCourseBySector(this.sector).subscribe(data=>{
      this.courses = data ;
    })
  }

  viewCoursesFoodProcessing(){
    this.isFoodProcessing= true ;
    this.isAgriculture= false ;
    this.isHandicrafts = false ;
    this.isEmbroidery = false;
    this.isComputerIT = false ;
    this.isSoftSkill = false ;

    this.sector.trainingSector = "Food Processing" ;

    this.viewCourseBySectorService.viewCourseBySector(this.sector).subscribe(data=>{
      this.courses = data ;
    })
  }

  viewCoursesHandicrafts(){
    this.isFoodProcessing= false ;
    this.isAgriculture= false ;
    this.isHandicrafts = true ;
    this.isEmbroidery = false;
    this.isComputerIT = false ;
    this.isSoftSkill = false ;
    
    this.sector.trainingSector = "Handicrafts" ;

    this.viewCourseBySectorService.viewCourseBySector(this.sector).subscribe(data=>{
      this.courses = data ;
    })
  }

  viewCoursesEmbroidery(){
    this.isFoodProcessing= false ;
    this.isAgriculture= false ;
    this.isHandicrafts = false ;
    this.isEmbroidery = true;
    this.isComputerIT = false ;
    this.isSoftSkill = false ;
    
    this.sector.trainingSector = "Embroidery" ;

    this.viewCourseBySectorService.viewCourseBySector(this.sector).subscribe(data=>{
      this.courses = data ;
    })
  }

  viewCoursesComputerIT(){
    this.isFoodProcessing= false ;
    this.isAgriculture= false ;
    this.isHandicrafts = false ;
    this.isEmbroidery = false;
    this.isComputerIT = true ;
    this.isSoftSkill = false ;
    
    this.sector.trainingSector = "Computer & IT" ;

    this.viewCourseBySectorService.viewCourseBySector(this.sector).subscribe(data=>{
      this.courses = data ;
    })
  }

  viewCoursesSoftSkill(){
    this.isFoodProcessing= false ;
    this.isAgriculture= false ;
    this.isHandicrafts = false ;
    this.isEmbroidery = false;
    this.isComputerIT = false ;
    this.isSoftSkill = true ;
    
    this.sector.trainingSector = "Soft Skill" ;

    this.viewCourseBySectorService.viewCourseBySector(this.sector).subscribe(data=>{
      this.courses = data ;
    })
  }


}
