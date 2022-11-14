import { Component, OnInit } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import { IUser } from 'src/app/models/user';
//import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pro-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  User!: IUser;
  selectedFile: any;
  myimage: any;

  constructor() { }
  ngOnInit(): void {
  }

  onChange($event: any) {
    if ($event.target.files[0].size >= 10240000) {
      window.alert("tamanho não é permitido");
      $event.target.value = null;

    } else {
      const file = $event.target.files[0];
      this.convertToBase64(file);
      //console.log(this.myimage);
    }

  }

  convertToBase64(file: File) {
    const imageTrasfer = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });
    imageTrasfer.subscribe((d) => {
      console.log(d);
      this.myimage = imageTrasfer;
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

}
