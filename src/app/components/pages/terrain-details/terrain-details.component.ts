import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';


@Component({
  selector: 'app-terrain-details',
  templateUrl: './terrain-details.component.html',
  styleUrls: ['./terrain-details.component.scss']
})
export class TerrainDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['id'])
  }

  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin],
    
    
    initialView: 'timeGridWeek',
    
    weekends: false,
    allDaySlot:false,
    slotEventOverlap: false,
    slotDuration: '01:00:00',
    slotMinTime: '07:00:00',
    slotMaxTime: '24:00:00',
    scrollTimeReset: false,
    expandRows: true,
    events: [
      { title: 'Meeting',  start: '2023-01-12T08:00', end: '2023-01-12T10:00',backgroundColor:'green'},

      
    ]
  };
}
