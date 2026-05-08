import { Building2, Mail, Phone } from "lucide-react";

export const ApartmentSidebar = ({ stair, unit }) => {
  return (
    <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
      <div className="rounded-[2.4rem] border border-black/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.1)] backdrop-blur-xl">
        <div className="flex items-center gap-4">
          <span className="grid h-13 w-13 place-items-center rounded-2xl bg-[#17130d] text-[#d8b56d]">
            <Building2 className="h-6 w-6" />
          </span>
          <div>
            <p className="text-sm text-[#62594d]">Vendndodhja</p>
            <h3 className="text-xl font-semibold">{stair.name}</h3>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#f4efe6] p-4">
            <p className="text-sm text-[#62594d]">Tipologjia</p>
            <strong>{unit.type}</strong>
          </div>

          <div className="rounded-2xl bg-[#f4efe6] p-4">
            <p className="text-sm text-[#62594d]">Kuzhina</p>
            <strong>{unit.kitchen}</strong>
          </div>

          <div className="rounded-2xl bg-[#f4efe6] p-4">
            <p className="text-sm text-[#62594d]">Ballkone</p>
            <strong>{unit.balconies}</strong>
          </div>

          <div className="rounded-2xl bg-[#f4efe6] p-4">
            <p className="text-sm text-[#62594d]">Sallon</p>
            <strong>{unit.livingRooms}</strong>
          </div>
        </div>
      </div>

      <div className="rounded-[2.4rem] bg-[#17130d] p-6 text-white shadow-[0_30px_90px_rgba(23,19,13,0.25)]">
        <p className="text-sm uppercase tracking-[0.3em] text-[#d8b56d]">
          Kontakt
        </p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight">
          Interesohuni për këtë apartament
        </h3>

        <div className="mt-6 space-y-3">
          <a
            href={`tel:${unit.contact.phone}`}
            className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 transition hover:bg-white/15"
          >
            <Phone className="h-5 w-5 text-[#d8b56d]" />
            {unit.contact.phone}
          </a>

          <a
            href={`mailto:${unit.contact.email}`}
            className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-4 transition hover:bg-white/15"
          >
            <Mail className="h-5 w-5 text-[#d8b56d]" />
            {unit.contact.email}
          </a>
        </div>

        <a
          href={`https://wa.me/${unit.contact.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="mt-5 block rounded-full bg-[#d8b56d] px-6 py-4 text-center font-semibold text-[#17130d] transition hover:bg-white"
        >
          Kontakto në WhatsApp
        </a>
      </div>

      <div className="rounded-[2.4rem] border border-black/10 bg-white/75 p-6 shadow-[0_24px_80px_rgba(55,38,15,0.08)]">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#9a7330]">
          Përreth
        </p>

        <div className="space-y-3">
          {unit.nearby.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#9a7330]" />
              <span className="text-[#62594d]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
