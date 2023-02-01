import { Component, OnInit } from '@angular/core';
import { FileService } from 'src/app/services/file-service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {


  url?:string;
  constructor(private mediaService:FileService ) { }


  ngOnInit(): void {


  }

  upload(event:any) {
    const file = event.target.files[0];
    if(file){
      const formData = new FormData();
      formData.append('file',file);


      this.mediaService.uploadFile(formData)
      .subscribe(response=>{
        console.log('response',response);
        this.url =response.url;
      })
  }

}

}
