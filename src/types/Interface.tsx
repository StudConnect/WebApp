export interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string
}

// types/Interface.ts
export interface PostProps {
  post: {
    id: number;
    profile_pic: string;
    full_name: string;
    headline: string;
    posted: string;
    content: string;
  };
}


export interface RootState {
  action: {
    sidenav: boolean;
    // Add other properties if needed
  };
}
