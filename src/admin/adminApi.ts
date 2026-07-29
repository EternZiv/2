import { supabase } from "../lib/supabase";
import type { DbProduct, DbProductVariant, WarrantyRegistration, ContactMessage, WarrantyClaim } from "../lib/types";

export async function fetchDbProducts(): Promise<DbProduct[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data || []) as DbProduct[];
}

export async function fetchDbProductVariants(productId: string): Promise<DbProductVariant[]> {
  const { data, error } = await supabase
    .from("product_variants")
    .select("*")
    .eq("product_id", productId)
    .order("sort_order", { ascending: true });
  if (error) throw error;
  return (data || []) as DbProductVariant[];
}

export async function createDbProduct(product: Omit<DbProduct, "id" | "created_at" | "updated_at">) {
  const { data, error } = await supabase
    .from("products")
    .insert(product)
    .select()
    .single();
  if (error) throw error;
  return data as DbProduct;
}

export async function updateDbProduct(id: string, updates: Partial<DbProduct>) {
  const { error } = await supabase
    .from("products")
    .update(updates)
    .eq("id", id);
  if (error) throw error;
}

export async function deleteDbProduct(id: string) {
  const { error } = await supabase
    .from("products")
    .delete()
    .eq("id", id);
  if (error) throw error;
}

export async function createDbProductVariant(variant: Omit<DbProductVariant, "id" | "created_at">) {
  const { data, error } = await supabase
    .from("product_variants")
    .insert(variant)
    .select()
    .single();
  if (error) throw error;
  return data as DbProductVariant;
}

export async function updateDbProductVariant(id: string, updates: Partial<DbProductVariant>) {
  const { error } = await supabase
    .from("product_variants")
    .update(updates)
    .eq("id", id);
  if (error) throw error;
}

export async function deleteDbProductVariant(id: string) {
  const { error } = await supabase
    .from("product_variants")
    .delete()
    .eq("id", id);
  if (error) throw error;
}

export async function fetchWarrantyRegistrations(): Promise<WarrantyRegistration[]> {
  const { data, error } = await supabase
    .from("warranty_registrations")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []) as WarrantyRegistration[];
}

export async function createWarrantyRegistration(reg: Omit<WarrantyRegistration, "id" | "created_at" | "warranty_status">) {
  const { data, error } = await supabase
    .from("warranty_registrations")
    .insert(reg)
    .select()
    .single();
  if (error) throw error;
  return data as WarrantyRegistration;
}

export async function updateWarrantyStatus(id: string, status: string) {
  const { error } = await supabase
    .from("warranty_registrations")
    .update({ warranty_status: status })
    .eq("id", id);
  if (error) throw error;
}

export async function deleteWarrantyRegistration(id: string) {
  const { error } = await supabase
    .from("warranty_registrations")
    .delete()
    .eq("id", id);
  if (error) throw error;
}

export async function fetchContactMessages(): Promise<ContactMessage[]> {
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []) as ContactMessage[];
}

export async function createContactMessage(msg: Omit<ContactMessage, "id" | "created_at" | "is_read">) {
  const { data, error } = await supabase
    .from("contact_messages")
    .insert(msg)
    .select()
    .single();
  if (error) throw error;
  return data as ContactMessage;
}

export async function markMessageRead(id: string) {
  const { error } = await supabase
    .from("contact_messages")
    .update({ is_read: true })
    .eq("id", id);
  if (error) throw error;
}

export async function deleteContactMessage(id: string) {
  const { error } = await supabase
    .from("contact_messages")
    .delete()
    .eq("id", id);
  if (error) throw error;
}

export async function fetchWarrantyClaims(): Promise<WarrantyClaim[]> {
  const { data, error } = await supabase
    .from("warranty_claims")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data || []) as WarrantyClaim[];
}

export async function createWarrantyClaim(claim: Omit<WarrantyClaim, "id" | "created_at" | "updated_at" | "claim_status" | "admin_notes">) {
  const { data, error } = await supabase
    .from("warranty_claims")
    .insert(claim)
    .select()
    .single();
  if (error) throw error;
  return data as WarrantyClaim;
}

export async function updateWarrantyClaimStatus(id: string, status: string, adminNotes?: string) {
  const updates: Record<string, string> = { claim_status: status };
  if (adminNotes !== undefined) updates.admin_notes = adminNotes;
  const { error } = await supabase
    .from("warranty_claims")
    .update(updates)
    .eq("id", id);
  if (error) throw error;
}

export async function deleteWarrantyClaim(id: string) {
  const { error } = await supabase
    .from("warranty_claims")
    .delete()
    .eq("id", id);
  if (error) throw error;
}

export async function lookupWarrantyBySerial(serialNumber: string): Promise<WarrantyRegistration | null> {
  const { data, error } = await supabase
    .from("warranty_registrations")
    .select("*")
    .eq("serial_number", serialNumber)
    .limit(1)
    .single();
  if (error || !data) return null;
  return data as WarrantyRegistration;
}
