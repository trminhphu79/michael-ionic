import { IonicModule, ModalController } from '@ionic/angular';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnInit,
  output,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TPerciousForm, TPreciousOutput } from '../../data-access/type';
import { CameraService } from 'src/app/shared/services/camera.service';

@Component({
  selector: 'mcl-precious-moment-form',
  templateUrl: './precious-moment-form.component.html',
  styleUrls: ['./precious-moment-form.component.scss'],
  imports: [ReactiveFormsModule, IonicModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PreciousMomentFormComponent implements OnInit {
  valueChanges = output<TPreciousOutput>();

  private readonly fb = inject(FormBuilder);
  private readonly cd = inject(ChangeDetectorRef);
  private readonly cameraService = inject(CameraService);
  private readonly modalCtrl = inject(ModalController);

  protected form!: FormGroup<TPerciousForm>;
  protected imagePreview: string | null = null;

  ngOnInit() {
    this.form = this.fb.group({
      title: this.fb.control('', { nonNullable: true }),
      description: this.fb.control('', { nonNullable: true }),
      tags: this.fb.control([], { nonNullable: true }),
      imgUrl: this.fb.control(null),
    }) as FormGroup<any>;
  }

  async onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const base64 = await this.readAsBase64(file);
      this.imagePreview = base64;
      this.form.controls.imgUrl.setValue(base64);
    }
  }

  private readAsBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result as string);
      reader.readAsDataURL(file);
    });
  }

  onSubmit() {
    this.modalCtrl.dismiss(this.form.value);
    this.valueChanges.emit(this.form.value as unknown as TPreciousOutput);
  }

  cancel() {
    this.modalCtrl.dismiss(null);
  }

  takePhotoAndSet() {
    this.cameraService.takePhoto$().subscribe((base64) => {
      if (base64) {
        this.form.controls.imgUrl.setValue(base64);
        this.cd.markForCheck();
      }
    });
  }
}
