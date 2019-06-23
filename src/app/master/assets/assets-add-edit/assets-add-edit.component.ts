import { Assets } from './../../../shared/models/assets.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {  ActivatedRoute ,Router} from '@angular/router';
import { DataService } from '../../../shared/Services/data.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-assets-add-edit',
  templateUrl: './assets-add-edit.component.html',
  styleUrls: ['./assets-add-edit.component.css']
})
export class AssetsAddEditComponent implements OnInit {
  assetsForm: FormGroup;
  submitted = false;
  subLocationList: any;
  pageTitle:string;
  assetsDetail: Assets = { id: '', name: '', serialNumber: '', subStation: '', subStationId: '', dateOfManufacture: new Date(), activeStatus: true }


  constructor(private formBuilder: FormBuilder, private router: ActivatedRoute, private dataService: DataService, private toastr: ToastrService,private currentRoute :Router) {
    this.router.params.subscribe(params => {
      if (params['id']) {
        this.assetsDetail.id = params['id'];
        this.getAssetDetailForid(this.assetsDetail.id );
        this.pageTitle="Edit Asset"
      }
      else
      this.pageTitle="Create Asset"
    });
  }

  ngOnInit() {
    this.assetsForm = this.formBuilder.group({
      id: [this.assetsDetail.id],
      assetName: [this.assetsDetail.name, Validators.required],
      serialNumber: [this.assetsDetail.serialNumber, Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      subStationId: [this.assetsDetail.subStationId, [Validators.required]],
      dateOfManufacture: [this.assetsDetail.dateOfManufacture, [Validators.required]],
      activeStatus: this.assetsDetail.activeStatus
    });
    this.getsubLocationList();
  }
  //submit request
  onSubmit(post) {

    this.assetsDetail.name = post.assetName;
    this.assetsDetail.serialNumber = post.serialNumber;
    this.assetsDetail.subStationId = post.subStationId;
    this.assetsDetail.dateOfManufacture = post.dateOfManufacture;
    this.assetsDetail.activeStatus = post.activeStatus;

    if (this.assetsForm.invalid) {
      return;
    }
    if (this.assetsDetail.id === '') {
      this.dataService.add("/Assets/Create", post).subscribe(result => {
        if (result){
          this.toastr.success(result.toString(), 'Success!');
          this.currentRoute.navigate(['/']);
        }

      },
        error => this.toastr.error(error.message, "Error"));
    }
    else {
      this.dataService.update("/Assets/Edit", this.assetsDetail.id, post).subscribe(result => {
        if (result){
          this.toastr.success(result.toString(), 'Success!');
          this.currentRoute.navigate(['/']);
        }


      },
        error => this.toastr.error(error.message, "Error"));
    }
  }

  //get assets details for asset id
  getAssetDetailForid(id) {
    this.dataService.getSingle('/Location/Get', id).subscribe(
      (data: any) => this.assetsDetail =
                     {  id: data.id, name: '',
                        serialNumber: data.serialNumber,
                        subStation: data.subStation,
                        subStationId:data.subStationId,
                        dateOfManufacture: data.dateOfManufacture,
                        activeStatus: data.activeStatus
                      },
      error => () => {
        this.toastr.error('Something went wrong...', 'error');
      },
      () => {
      });
  }
  //get active sub location details list
  getsubLocationList() {
    this.subLocationList = [
      { id: 1, name: 'Location 01' },
      { id: 2, name: 'Location 02' },
      { id: 3, name: 'Location 03' },

    ]
  }

  naviageToLanding(){
    this.currentRoute.navigate(['/']);
  }


}
