export function Eyebrows({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold uppercase tracking-widest text-amber-700 border-l-4 border-amber-500 bg-amber-50 px-3 py-1 w-max">
      {children}
    </p>
  );
}
