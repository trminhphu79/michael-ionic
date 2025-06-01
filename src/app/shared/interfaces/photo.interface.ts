import { Observable } from 'rxjs';

export interface IPhotoService {
  //all return observable instead promise
  getPhotos<T>(): Observable<T>;
  getPhoto<T>(id: string): Observable<T>;
  addPhoto<T>(photo: T): Observable<T>;
  updatePhoto<T>(photo: T): Observable<T>;
  deletePhoto<T>(id: string): Observable<T>;
}
