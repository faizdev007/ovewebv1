// app/globals.tsx or utils/globals.ts (recommended to place in utils)
export const onlyNumber = (e: React.FormEvent<HTMLInputElement>) => {
  const value = e.currentTarget.value;
  const cleaned = value.replace(/[^0-9]/g, ''); // remove all non-digits
  e.currentTarget.value = cleaned;
};