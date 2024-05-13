
export interface RootState {
  action: {
    sidenav: boolean;
    // Add other properties if needed
  };
}

export interface ButtonProps {
  children: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

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

export interface EventProps {
  events: {
    speaker_profile_pic: string;
    speaker_first_name: string;
    title: string;
    event_link: string;
  }[];
}

export interface UserFollowProps {
  users: {
    profile_pic: string;
    full_name: string;
    headline: string;
  }[];
}

