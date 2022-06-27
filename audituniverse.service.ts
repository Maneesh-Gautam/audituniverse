import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { auditDetails } from '../api/libraries';

@Injectable({
  providedIn: 'root'
})
export class AudituniverseService {

 
  private REST_API_SERVER = "http://192.168.1.9:5100/api/AuditUniverse";

  constructor(private httpClient: HttpClient) { }

  public sendGetRequestForAuditUniverseall(){
   //alert("get api");
    return this.httpClient.get(`${this.REST_API_SERVER}/GetAuditUniverseLevelAll`);
  }


  public sendPostRequestForAuditUniverseall(auditvaluedata: { offsetPageNumber: number; rowCount: number; filters: [{ name: "string"; value: "string"; operation: "string"; orderBy: "string"; }]; }): Observable<any> {
  //  return this.httpClient.post<auditDetails>(`${this.REST_API_SERVER}/AuditUniverseall`, data);

  console.log(JSON.stringify(auditvaluedata));
 
   let auditPlanRequest = JSON.stringify(auditvaluedata);
    
    
    return this.httpClient.post<any>(`${this.REST_API_SERVER}/AuditUniverseall`, auditPlanRequest,
      {
        headers: new HttpHeaders({
          'content-type': 'application/json; charset=utf-8'
        })

      }

    );
}

}
