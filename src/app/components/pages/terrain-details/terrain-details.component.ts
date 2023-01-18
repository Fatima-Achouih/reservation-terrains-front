import { Eror } from './../../../models/eror';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { Res } from 'src/app/models/res';
import { ResServiceService } from 'src/app/service/res-service.service';


@Component({
  selector: 'app-terrain-details',
  templateUrl: './terrain-details.component.html',
  styleUrls: ['./terrain-details.component.scss']
})
export class TerrainDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private rs: ResServiceService) { }

  
  eventss: any =[]
  res: Res = new Res();
  eror: Eror= new Eror();

  ngOnInit(): void {
    this.res.terrId=this.route.snapshot.params['id'];
    console.log(this.route.snapshot.params['id'])
    this.getRes()
  }
  private getRes(){
    this.rs.getResT(this.route.snapshot.params['id']).subscribe(data => {
     this.eventss = data;
      console.log(this.eventss)
      this.calendarOptions.events=this.eventss
     
      
    });
  }
  

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],
    
    
    initialView: 'timeGridWeek',
    
    
    allDaySlot:false,
    slotEventOverlap: false,
    slotDuration: '01:00:00',
    slotMinTime: '07:00:00',
    slotMaxTime: '24:00:00',
    scrollTimeReset: false,
    expandRows: true,
    
   
    
    
  };

 
  onSubmit(){
    console.log(this.res);
    this.saveRes();
  }
  saveRes(){
    this.rs.createRes(this.res).subscribe( data =>{
      this.eror=data
      console.log(this.eror)
      console.log(this.eror.message);
      
      alert(this.eror.message);
     
    });
    
  }
}
