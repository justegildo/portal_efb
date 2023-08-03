import { Model } from './model';

export class Approval extends Model {
    approvalAction?: string;
    inspectionAction?: string;
    newValue?: string;
    oldValue?: string;
    path ?: string;
    projectCode?: string;
    projectParcelNumber ?: string;
}
