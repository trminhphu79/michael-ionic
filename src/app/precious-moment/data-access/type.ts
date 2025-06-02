import { FormControl } from '@angular/forms';

export type TPerciousForm = {
  title: FormControl<string>;
  description: FormControl<string>;
  tags: FormControl<string[]>;
  imgUrl: FormControl<string | null>;
};

export type TPreciousOutput = {
  title: string;
  description: string;
  tags: string;
  imgUrl: string;
};
