const FEATURES = [
  "Selección de empresa con identidad visual",
  "Inicio de sesión con validaciones",
  "Perfil editable con avatar",
  "Cambio de idioma",
  "Persistencia de sesión",
  "APK Android funcional",
];

export default function Features() {
  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-8xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16">
          Funcionalidades
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURES.map((f) => (
            <div
              key={f}
              className="p-6 bg-white border border-slate-200 rounded-xl shadow-sm"
            >
              <p className="font-semibold text-slate-800">
                ✔ {f}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
