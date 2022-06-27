import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table } from 'primeng/table';


import { auditDetails } from 'src/app/api/libraries';
import { AudituniverseService } from 'src/app/service/audituniverse.service';

@Component({
  selector: 'app-audit-universe-detail',
  templateUrl: './audit-universe-detail.component.html',
  providers: [MessageService, ConfirmationService],
  styleUrls: ['./audit-universe-detail.component.scss']
})

export class AuditUniverseDetailComponent implements OnInit,AfterViewInit  {

  filters: [
    {
      "name": "string",
      "value": "string",
      "operation": "string",
      "orderBy": "string"
    }
  ]
  auditDetailsDialog: boolean;

  deleteauditDetails: boolean = false;

  //deleterisksDialog: boolean = false;

  auditDetails: auditDetails[];

  dataauditDetails: auditDetails;

  auditDetail: auditDetails;
  loading:boolean = true;

  selectedauditDetails: auditDetails[];

  submitted: boolean;
  
  cols: any[];
  @ViewChild('dt1') table: Table;

  @ViewChild('filter') filter: ElementRef;

  statuses: any[];

  rowsPerPageOptions = [5, 10, 20];
  constructor(private auditDetailsService: AudituniverseService, private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void
  {
           
          this.getaudit();
          this.cols = [
              {field: 'au_level_1_id', header: 'AU level 1 ID'},
              {field: 'au_level_1_uid', header: 'AU level 1 UID'},
              {field: 'au_level_1_desc', header: 'AU level 1 Desc'},
              // -----------
              {field: 'au_level_2_uid',  header: 'AU level 2 UID'},
              {field: 'au_level_2_desc', header: 'AU level 2  Desc'},
              {field: 'au_level_3_uid', header: 'AU level 3 UID'},
              {field: 'au_level_3_desc', header: 'AU level 3  Desc'},
              {field: 'au_level_3_definition', header: 'AU level_1 Definition'},
              {field: 'au_level_3_comments', header: 'AU level 3  Comments'},
              {field: 'au_level_4_uid', header: 'AU level 4 UID'},
              {field: 'au_level_4_desc', header: 'AU level 4  Desc'},
              {field: 'au_level_4_definition', header: 'AU level_1 Definition'},
              {field: 'au_level_4_comments', header: 'AU level 2 Comments'},
          ];
  }

  getaudit()
  {

    //const auditvaluedata = Object.assign({},{'offsetPageNumber':0,'rowCount':0,'filters': this.filters});
      this.auditDetailsService.sendGetRequestForAuditUniverseall().subscribe((result: any)=>{
        console.log(result);

          this.auditDetails = result.data.data;
          this.loading = false;

        })  
  }

  clear(table: Table) {
    table.clear();
  //  this.filter.nativeElement.value = '';
  }

  ngAfterViewInit(){

  } 

}
