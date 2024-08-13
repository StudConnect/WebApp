
export interface RootState {
  action: {
    sidenav: boolean;
    // Add other properties if needed
  };
}

export interface ButtonProps {
  children: any;
  onClick?: any;
  disabled?: boolean;
  className?: string;
}

export interface InputProps {
  label: string;
  handleChange: () => void;
  type?: string;
  placeholder?: string;
  name?: string
}

export interface SelectProps {
  label?: string;
  handleChange: () => void;
  type?: string;
  options?: any;
  placeholder?: string;
  name?: string
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

export interface ResourceProps {
  resource: {
    displayImage: string;
    author: {
      firstName: string;
      lastName: string;
      profilePic: string;
    };
    title: string;
    type: string;
    url: string;
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

export interface MentorBoxProps {
  profilePic: string;
  firstName: string;
  lastName: string;
  school: string;
  course: string;
  noOfMentees: number;
  noOfConnections: number;
  rating: number;
  onApply: () => void;
}

export interface TextAreaProps {
  label: string;
  handleChange: () => void;
  type?: string;
  placeholder?: string;
  name?: string;
  cols?: number;
  rows?: number;
}

