
export function formatToYear(inputDate:string) {
  const date = new Date(inputDate);
  return date.toLocaleDateString("en-US",{year:"numeric"}) 
}

export const formatRuntimeClock = (minutes: number) => {
  const date = new Date(minutes * 60 * 1000);
  const h = String(date.getUTCHours());
  const m = String(date.getUTCMinutes()).padStart(2, "0");
  return `${h}h:${m}m`;
};

export function formatArrayValue(value:| string
    | number
    | { name?: string; english_name?: string }[]
    | null
    | undefined): string {
  if (Array.isArray(value)) {
    // Try to extract "name" or "english_name" if objects have them
    return value
      .map((item: any) => item.name ?? item.english_name ?? "")
      .filter(Boolean)
      .join(", ");
  }

  if (typeof value === "number" ) return value.toLocaleString("en-US", { style: "currency", currency: "USD" });
  if (typeof value === "string") return value;
  return "N/A";
}