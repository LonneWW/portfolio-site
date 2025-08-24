export interface Project {
  title: string;
  imageUrl: string;
  description: string;
  techChipList: projectChip[];
  sourcesList: source[];
}

interface source {
  text: string;
  link: string;
}

interface projectChip {
  text: string;
}
