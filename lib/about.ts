import api from "./api";

export interface About {
  _id?: string;
  fullName?: string;
  jobTitle?: string;
  bio?: string;
  email?: string;
  phone?: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  experience?: number | string;
  [key: string]: unknown;
}

export interface AboutResponse {
  about?: About | About[];
  message?: string;
}

export async function getAbout(): Promise<AboutResponse> {
  const response = await api.get<AboutResponse>("/about");

  return response.data;
}

export async function getAboutById(id: string): Promise<AboutResponse> {
  const response = await api.get<AboutResponse>(`/about/${id}`);

  return response.data;
}

export async function createAbout(formData: FormData): Promise<AboutResponse> {
  const response = await api.post<AboutResponse>("/about", formData);

  return response.data;
}

export async function updateAbout(
  id: string,
  formData: FormData,
): Promise<AboutResponse> {
  const response = await api.put<AboutResponse>(`/about/${id}`, formData);

  return response.data;
}

export async function deleteAbout(id: string): Promise<AboutResponse> {
  const response = await api.delete<AboutResponse>(`/about/${id}`);

  return response.data;
}
