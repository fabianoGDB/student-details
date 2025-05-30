import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridApi, ModuleRegistry } from "ag-grid-community"
import { ClientSideRowModelModule } from 'ag-grid-community';


ModuleRegistry.registerModules([ClientSideRowModelModule]);

@Component({
  selector: 'students-details-student-records',
  standalone: true,
  imports: [AgGridModule],
  templateUrl: './student-records.component.html',
  styleUrl: './student-records.component.scss'
})
export class StudentRecordsComponent {
  gridApi: any;
  apiResponse: any = [{
    "name": "Pamela Feeney",
    "country": "Paraguay",
    "state": "NH",
    "passportDeclaration": "false",
    "fitnessDeclaration": "false",
    "courseName": "BSc",
    "subjects": "Maths",
    "date":"Fri Oct 11 0030 10:00:10 GMT+0553 (India Standard Time)",
    "city": "Fort Mustafastead",
    "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1113.jpg",
    "street": "64282 Hauck Drives",
    "address2": "Apt. 280",
    "zip": "84106-6709",
    "phone": "389-600-8245 x581",
    "email": "Donald.Carter@gmail.com",
    "website": "http://immaterial-eyestrain.biz"
  },
  {
    "name": "Ms. Jasmine Klein",
    "country": "Falkland Islands (Malvinas)",
    "state": "KS",
    "passportDeclaration": "true",
    "fitnessDeclaration": "true",
    "courseName": "BSc",
    "subjects": "Maths",
    "date":"Wed Jul 21 0038 03:44:39 GMT+0553 (India Standard Time)",
    "city": "Destineystead",
    "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/77.jpg",
    "street": "205 Linwood Keys",
    "address2": "Suite 772",
    "zip": "39920-7589",
    "phone": "857.755.4762 x4394",
    "email": "Gwendolyn93@gmail.com",
    "website": "http://haunting-volume.info"
  },
  {
    "name": "Constance Durgan DDS",
    "country": "Republic of Korea",
    "state": "SC",
    "passportDeclaration": "false",
    "fitnessDeclaration": "false",
    "courseName": "BSc",
    "subjects": "Maths",
    "date":"Wed Dec 03 0053 07:32:11 GMT+0553 (India Standard Time)",
    "city": "Lake Sofia",
    "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1013.jpg",
    "street": "95752 Lindgren Corners",
    "address2": "Apt. 429",
    "zip": "12255-8472",
    "phone": "1-753-886-7212 x2333",
    "email": "Dena67@yahoo.com",
    "website": "http://petty-nursing.org"
  },
  {
    "name": "Nichole Stiedemann III",
    "country": "Andorra",
    "state": "TN",
    "passportDeclaration": "false",
    "fitnessDeclaration": "false",
    "courseName": "BSc",
    "subjects": "Maths",
    "date":"Mon Jun 23 0064 10:33:11 GMT+0553 (India Standard Time)",
    "city": "Thornton",
    "studentImage": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1198.jpg",
    "street": "6749 Stuart Parkways",
    "address2": "Suite 349",
    "zip": "57530",
    "phone": "1-705-881-5262 x7961",
    "email": "Alta_McCullough@yahoo.com",
    "website": "https://grimy-exposure.name"
  }];

  columnDefs: ColDef[] = [
		{ field: "name"},
		{ field: "country"},
		{ field: "state"},
		{ field: "passportDeclaration"},
		{ field: "fitnessDeclaration"},
		{ field: "courseName"},
		{ field: "subjects"},
		{ field: "city"},
		{ field: "street"},
		{ field: "address2"},
		{ field: "city"},
		{ field: "state"},
		{ field: "country"},
		{ field: "phone"},
		{ field: "email"},
	];

  onGridReady(params: any){
    this.gridApi = params?.api;
  }
}
