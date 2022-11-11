import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BloodRequest } from '../blood-request.model';
import { BloodRequestService } from './service/blood-request.service';


@Component({
  selector: 'app-manager-request-review',
  templateUrl: './manager-request-review.component.html',
  styleUrls: ['./manager-request-review.component.css']
})
export class ManagerRequestReviewComponent implements OnInit {
  public dataSource = new MatTableDataSource<BloodRequest>();
  public displayedColumns = ['Doctor', 'Reasons For Blood', 'Ammount of Bood Needed', 'Manage Request'];
  public bloodRequests: BloodRequest[] = [];
  bloodType: string = "";

  constructor(private bloodRequestService: BloodRequestService, private router: Router, private modalService: NgbModal, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.bloodRequestService.getBloodRequests().subscribe(res => {
    this.bloodRequests = res;
    this.dataSource.data = this.bloodRequests;
    })
  }

}
