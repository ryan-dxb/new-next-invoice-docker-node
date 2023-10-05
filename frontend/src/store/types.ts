export interface IUser {
  success: boolean;
  user: {
    id: string;
    email: string;
    username: string;
    createdAt?: string;
    friends?: string[];
    updatedAt?: string;
    firstName?: string;
    lastName?: string;
    avatar?: string;

    accessToken?: string;
  };
}
