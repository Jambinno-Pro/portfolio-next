import api from "./api";

export interface Skill {
  _id?: string;
  name: string;
  icon?: string;
  level?: number;
  category?: string;
  featured?: boolean;
}

export interface SkillsResponse {
  skills?: Skill[];
  message?: string;
}

export interface SkillResponse {
  skill?: Skill;
  message?: string;
}

// ==========================================
// GET ALL SKILLS
// ==========================================

export async function getSkills(): Promise<Skill[]> {
  const response = await api.get<SkillsResponse>("/skills");

  return Array.isArray(response.data?.skills) ? response.data.skills : [];
}

// ==========================================
// GET SINGLE SKILL
// ==========================================

export async function getSkill(id: string): Promise<Skill | null> {
  const response = await api.get<SkillResponse>(`/skills/${id}`);

  return response.data?.skill || null;
}

// ==========================================
// CREATE SKILL
// ==========================================

export async function createSkill(
  skill: Omit<Skill, "_id">,
): Promise<SkillResponse> {
  const response = await api.post<SkillResponse>("/skills", skill);

  return response.data;
}

// ==========================================
// UPDATE SKILL
// ==========================================

export async function updateSkill(
  id: string,
  skill: Partial<Skill>,
): Promise<SkillResponse> {
  const response = await api.put<SkillResponse>(`/skills/${id}`, skill);

  return response.data;
}

// ==========================================
// DELETE SKILL
// ==========================================

export async function deleteSkill(id: string): Promise<SkillResponse> {
  const response = await api.delete<SkillResponse>(`/skills/${id}`);

  return response.data;
}
