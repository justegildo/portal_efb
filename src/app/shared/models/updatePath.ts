import {Model} from './model';

export class UpdatePath extends Model {
  env?: string;
  key?: string;  // Paramètre
  label?: string;  // Description
  type?: string;
  value?: string; // Valeur
}
