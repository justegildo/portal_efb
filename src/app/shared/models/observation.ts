import {Model} from './model';

export class Observations extends Model {
  errorDescription?: string;
  filename?: string;
  
}


export class Validations extends Model {
  note?: string;
  status?: string;
  
}



export class GlobalApprove extends Model {
  codeProject?: string;
  decision?: string; 
  note?: string;
}