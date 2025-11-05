export function formatToYear(inputDate: string) {
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) return "unknown";
  return date.toLocaleDateString("en-US", { year: "numeric" });
}

export const formatRuntimeClock = (minutes: number) => {
  if (!minutes || minutes < 0) return "unknown";

  const h = Math.floor(minutes / 60);
  const m = String(minutes % 60).padStart(2, "0");
  return `${h}h:${m}m`;
};

export function formatArrayValue(
  value:
    | string
    | number
    | { name?: string; english_name?: string }[]
    | null
    | undefined
): string {
  if (Array.isArray(value)) {
    // Try to extract "name" or "english_name" if objects have them
    const names = value.map((item) => item.name ?? item.english_name ?? "N/A")
    return names.length ? names.join(", ") : "N/A";
  }

  if (typeof value === "number")
    return value
      ? value.toLocaleString("en-US", { style: "currency", currency: "USD" })
      : "N/A";
  if (typeof value === "string") return value || "N/A";
  return "N/A";
}
