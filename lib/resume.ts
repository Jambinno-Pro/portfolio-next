import api from "./api";

export interface ResumeExperience {
  _id?: string;
  position?: string;
  period?: string;
  company?: string;
  description?: string;
  [key: string]: unknown;
}

export interface ResumeEducation {
  _id?: string;
  qualification?: string;
  school?: string;
  period?: string;
  [key: string]: unknown;
}

export interface ResumeCertificate {
  _id?: string;
  name?: string;
  issuer?: string;
  year?: string | number;
  [key: string]: unknown;
}

export interface ResumeSkill {
  _id?: string;
  name?: string;
  level?: string;
  [key: string]: unknown;
}

export interface ResumeLanguage {
  _id?: string;
  name?: string;
  level?: string;
  [key: string]: unknown;
}

export interface Resume {
  _id?: string;

  fullName?: string;
  title?: string;
  bio?: string;

  email?: string;
  phone?: string;
  location?: string;
  website?: string;

  github?: string;
  linkedin?: string;
  cv?: string;

  skills?: ResumeSkill[];

  experience?: ResumeExperience[];
  education?: ResumeEducation[];
  certificates?: ResumeCertificate[];
  languages?: ResumeLanguage[];

  [key: string]: unknown;
}

export interface ResumeResponse {
  success?: boolean;
  resume?: Resume;
  message?: string;
}

export async function getResume(): Promise<Resume | null> {
  const response = await api.get<ResumeResponse>(`/resume?ts=${Date.now()}`, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });

  return response.data?.resume || null;
}
