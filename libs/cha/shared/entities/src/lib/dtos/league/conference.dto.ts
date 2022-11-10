export interface ConferenceDto {
  id: number;
  conferencename: string;
  isactive: boolean;
}

export interface ConferenceCreateDto {
  conferencename: string;
  isactive: boolean;
}
