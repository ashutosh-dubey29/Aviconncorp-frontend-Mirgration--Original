import { FormGroup, FormControl, Validators } from '@angular/forms';

export class User {
    id: number;
    username: string;
    email: string;
}

export class CustomerDetailsModel {
    id: number;
    username: string;
    email: string;
    UserType: number;
    contactNumber: string;
    address: string;
    totalProperties: number;
    name: string;
}

export class Album {
    userId: number;
    id: number;
    title: string;
  
    static asFormGroup(album: Album): FormGroup {
      const fg = new FormGroup({
        userId: new FormControl(album.userId, Validators.required),
        id: new FormControl(album.id, Validators.required),
        title: new FormControl(album.title, Validators.required)
      });
      return fg;
    }
  }