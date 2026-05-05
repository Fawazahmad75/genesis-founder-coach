export interface Question {
  id: string;
  label: string;
  placeholder?: string;
  type?: "text" | "select";
  options?: string[];
}

export interface AgentState {
  name: string;
  status: "thinking" | "done";
  content: string;
}

export interface Tool {
  layer: string;
  name: string;
  reason: string;
}

export interface DayTask {
  task: string;
  completed?: boolean;
}

export interface SprintDay {
  day: number;
  theme: string;
  tasks: DayTask[];
}

export interface Prompt {
  title: string;
  tool: string;
  prompt: string;
}

export interface PlanScore {
  overall: number;
  dimensions: {
    specificity: number;
    realism: number;
    tool_fit: number;
    completeness: number;
  };
}

export interface PlanResult {
  score: PlanScore;
  toolStack: Tool[];
  sprint: SprintDay[];
  prompts: Prompt[];
}