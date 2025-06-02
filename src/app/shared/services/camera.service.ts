import { Injectable } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CameraService {
  takePhoto$(): Observable<string | null> {
    return new Observable((observer) => {
      Camera.getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      })
        .then((photo) => {
          observer.next(photo.dataUrl ?? null);
          observer.complete();
        })
        .catch((err) => {
          console.error('Camera error:', err);
          observer.next(null);
          observer.complete();
        });
    });
  }
}
