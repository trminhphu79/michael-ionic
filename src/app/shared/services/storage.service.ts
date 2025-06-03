import { inject, Injectable } from '@angular/core';
import { defer, from, map, Observable } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({ providedIn: 'root' })
export class StorageManager {
  #storage!: Storage;
  private storage = inject(Storage);

  async init() {
    if (this.#storage) {
      return;
    }
    this.#storage = await this.storage.create();
  }

  public get<T>(key: string): Observable<T> {
    return defer(() => this.#storage?.get(key) as Promise<T>);
  }

  public set<T>(key: string, data: T) {
    this.#storage?.set(key, data);
  }

  public has(key: string) {
    return defer(() => this.get(key)).pipe(map((value) => !!value));
  }

  public remove(key: string) {
    return from(this.#storage.remove(key));
  }
}
