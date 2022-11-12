import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { IUser } from 'src/app/models/IUser';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pro-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  image!: any;
  image64: FileReader = new FileReader();
  User!: IUser;
  default: any;
  selectedFile: any;
  constructor() {}

  myimage: any;

  ngOnInit(): void {}

  onChange($event: any) {
    const file = $event.target.files[0];
    this.convertToBase64(file);
    console.log(this.myimage);
  }

  convertToBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    observable.subscribe((d) => {
      console.log(d);
      this.myimage = observable;
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();
    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete();
    };
    filereader.onerror = (error) => {
      subscriber.error(error);
      subscriber.complete();
    };
  }

  // selecionaimagen(event: any) {
  //   if (event.target.files && event.target.files[0]) {
  //     this.image = event.target.files[0];

  //     const formData = new FormData();
  //     formData.append('foto', this.image);
  //     this.getBase64(this.image);
  //     console.log(this.image);

  //     // this.http.post('http://localhost:8080/fotos', formData)
  //     //   .subscribe(resposta => console.log('Upload ok.'));
  //   }
  // }

  // getBase64(file: File) {
  //   var reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = (e) => {
  //     this.image = reader.result;
  //   }; reader.onerror = function () {
  //     console.log("erro", this.error);
  //   }

  // }
}

//   send() {
//     this.getBase64(this.image);
//     console.log(this.image);
//   }
//   selecionaimagen(event: any) {
//     this.selectedFile = event.target.file[0];
//     this.User.image = this.image;
//   }
// }
