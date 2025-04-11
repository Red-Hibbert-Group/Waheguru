export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      contact_submissions: {
        Row: {
          id: string
          name: string
          email: string
          message: string
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          email: string
          message: string
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          email?: string
          message?: string
          created_at?: string
        }
      }
      newsletter_subscriptions: {
        Row: {
          id: string
          email: string
          subscription_date: string
          status: string
          source: string
          unsubscribed_at?: string
          created_at: string
        }
        Insert: {
          id?: string
          email: string
          subscription_date?: string
          status?: string
          source?: string
          unsubscribed_at?: string
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          subscription_date?: string
          status?: string
          source?: string
          unsubscribed_at?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_table_columns: {
        Args: {
          table_name: string
        }
        Returns: {
          column_name: string
          data_type: string
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
  }
} 