export interface ITeammate {
  name: string;
  surname: string;
  city: string;
  country: string;
  photoName: string;
  github: string;
}

export interface ITeammateWorkLog {
  teammateName: string;
  worklogItems: IWorklogItem[];
}

export interface IWorklogItem {
  hours: number;
  description: string;
}
