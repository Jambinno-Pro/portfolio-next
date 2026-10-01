import api from "./api";

// ==========================================
// TYPES
// ==========================================

export interface Message {
  _id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface MessagesResponse {
  messages?: Message[];
  message?: string;
}

export interface MessageResponse {
  message?: Message;
  data?: Message;
  success?: boolean;
}

// ==========================================
// SEND MESSAGE
// PUBLIC
// ==========================================

export async function sendMessage(
  messageData: Omit<Message, "_id" | "createdAt" | "updatedAt" | "status">,
): Promise<MessageResponse> {
  const response = await api.post<MessageResponse>("/messages", messageData);

  return response.data;
}

// ==========================================
// GET ALL MESSAGES
// ADMIN
// ==========================================

export async function getMessages(): Promise<MessagesResponse> {
  const response = await api.get<MessagesResponse>("/messages");

  return response.data;
}

// ==========================================
// GET SINGLE MESSAGE
// ADMIN
// ==========================================

export async function getMessage(id: string): Promise<MessageResponse> {
  const response = await api.get<MessageResponse>(`/messages/${id}`);

  return response.data;
}

// ==========================================
// UPDATE MESSAGE STATUS
// ADMIN
// ==========================================

export async function updateMessageStatus(
  id: string,
  status: string,
): Promise<MessageResponse> {
  const response = await api.put<MessageResponse>(`/messages/${id}/status`, {
    status,
  });

  return response.data;
}

// ==========================================
// DELETE MESSAGE
// ADMIN
// ==========================================

export async function deleteMessage(id: string): Promise<MessageResponse> {
  const response = await api.delete<MessageResponse>(`/messages/${id}`);

  return response.data;
}
