import {Model} from './model';

export class Download extends Model {
    excel?: File;
    geojson?: File;
    attachment?: File;
    proces_verbal?: File;
    repertoire_excel?: File;
    endAt?: string;
    beginAt?: string;
    username?: string;
    action ?: string;
    projectCode?: string;
    oldFileName?: string;
    publicationLocation ?: string;
}
