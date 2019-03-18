export const CHANGE_SECTION = 'CHANGE_SECTION';

export interface Section {
    title: string;
}
interface ChangeSectionAction {
    type: typeof CHANGE_SECTION;
    payload: Section;
}
