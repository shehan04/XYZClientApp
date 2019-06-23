import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-assets-landing',
  templateUrl: './assets-landing.component.html',
  styleUrls: ['./assets-landing.component.css']
})
export class AssetsLandingComponent implements OnInit {
  returnItemList: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.getAssetsList();
  }

  getAssetsList() {
    this.returnItemList = [
      { id: 1, name: 'Item 001', serialNumber: 'XYZ-001', subStation: 'Location 001', dateOfManufacture: '2019-6-23', activeStatus: true },
      { id: 1, name: 'Item 002', serialNumber: 'XYZ-001', subStation: 'Location 002', dateOfManufacture: '2019-6-23', activeStatus: true },
      { id: 1, name: 'Item 003', serialNumber: 'XYZ-001', subStation: 'Location 003', dateOfManufacture: '2019-6-23', activeStatus: true },
      { id: 1, name: 'Item 004', serialNumber: 'XYZ-001', subStation: 'Location 004', dateOfManufacture: '2019-6-23', activeStatus: true },
      { id: 1, name: 'Item 005', serialNumber: 'XYZ-001', subStation: 'Location 005', dateOfManufacture: '2019-6-23', activeStatus: true },
      { id: 1, name: 'Item 006', serialNumber: 'XYZ-001', subStation: 'Location 006', dateOfManufacture: '2019-6-23', activeStatus: true },
    ];
  }

  addEditAsset(id) {
    if (id === null || id === '')
      this.router.navigate(['/create']);
    else
      this.router.navigate(['/edit',{id: id}] );
  }


}
