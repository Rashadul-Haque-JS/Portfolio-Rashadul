export interface Project {
  title: string;
  overlay: string;
  id: string;
  image: string;
  url: string;
  github_url: string;
  description: string;
  tags: string[];
}

export interface ProjectCardProps {
  item: Project;
}

export interface Props {
  position: string;
  company: string;
  place: string;
  date: string;
  contact?: string;
  locationType?: string;
  description: string[];
}

export interface ExperienceProps {
  data: Props;
}

export interface OtherProjectProps {
title: string;
shortDesc: string;
url: string;
}

export interface ProjectViewBtnProps {
  active: boolean;
  onClick: () => void;
  icon: string;
  label: string;
}


// export interface ProjectViewProps {}