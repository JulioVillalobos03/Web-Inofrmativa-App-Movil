export default function Download() {
  return (
    <section id="download" className="py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold">
          Descargar aplicación
        </h2>

        <p className="mt-6 text-slate-600">
          Instala la aplicación directamente en Android mediante el archivo APK.
        </p>

        <a
          href="/apk/app-movil-fytssa.apk"
          download
          className="inline-block mt-10 px-10 py-4 bg-primary text-black font-bold rounded-xl hover:opacity-90 transition"
        >
          Descargar APK
        </a>

       
      </div>
    </section>
  );
}
