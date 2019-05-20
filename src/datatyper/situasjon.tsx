import { HensynType } from '../components/hensyn/hensyn';
import { HovedmalType } from './hovedmalType';

export interface SisteSituasjon {
    helseHinder?: HensynType;
    andreHinder?: HensynType;
    fremtidigSituasjonData?: HovedmalType;
}