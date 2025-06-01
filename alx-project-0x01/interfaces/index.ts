export interface UserData {
  id?: number;
  name: string;
  username: string;
  email: string;
}

export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
}
