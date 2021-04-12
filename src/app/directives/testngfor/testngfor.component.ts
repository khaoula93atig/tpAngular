import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testngfor',
  templateUrl: './testngfor.component.html',
  styleUrls: ['./testngfor.component.css']
})
export class TestngforComponent implements OnInit {

  series = [
    {name: 'friends', type: 'comidie'},
    {name: 'big bang theory', type: 'comidie'},
    {name: 'swat', type: 'policier'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
