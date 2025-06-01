import { Injectable } from '@angular/core';
import { IPhotoService } from '../interfaces/photo.interface';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PhotoService implements IPhotoService {
  getPhotos<T>(): Observable<T> {
    throw new Error('Method not implemented.');
  }
  getPhoto<T>(id: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
  addPhoto<T>(photo: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  updatePhoto<T>(photo: T): Observable<T> {
    throw new Error('Method not implemented.');
  }
  deletePhoto<T>(id: string): Observable<T> {
    throw new Error('Method not implemented.');
  }
}
