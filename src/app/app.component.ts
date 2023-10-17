import { Component } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  url = "https://benepik.in/yorker/api/brandForm";
  data = {
        client_id:"CO-40",
        device:"1",
        device_id:"browser",
        app_version:"1",
        user_id:"115",
        admin_id:"115",
        brand_id:"108",
        is_panel:"1"
      };
  obtainedData:any;
  formData:any;
  selectedFileName: string = "No File choosen";
  constructor(
      private http: HttpClient,
  ){
    this.postData();
  }
  ngOnInit(){
    
  }
  postData(){
    const headersData = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `IrAuCxwLhBO49H7iqAxLpJ6ZRfK47C0Ia2DHFFZn`
    });

   const headersOptions = {headers: headersData}; 
    this.http.post(this.url,this.data, headersOptions).subscribe((d:any)=>{
      this.obtainedData = d.data;
    })
  }

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      this.selectedFileName = file.name;
    } else {
      this.selectedFileName = 'No File choosen';
    }
  }


  submitForm(formData: any) {
    this.formData = formData;
    console.log(formData); 
  }
  
}
