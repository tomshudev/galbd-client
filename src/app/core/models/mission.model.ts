export enum MissionTypes {
  PASSWORD = 'password',
  PHOTO = 'photo',
  RECOGNIZE = 'recognize',
  QUIZ = 'quiz',
  ORDER = 'order',
}

export type Mission = {
  index?: number;
  id: string;
  type: MissionTypes;
  name: string;
  explanation: string;
  isSolved: boolean;
  data: any;
  doesMissionNeedsApproval: boolean;
  isApproved: boolean;
  isWaitingForApproval: boolean;
};
