/* NVA persona fixtures. Source of truth: skills/nva-persona-fixtures.
   A .js file (not .json) so flows work from file:// and GitHub Pages without a server or fetch. */
window.NVA = {
  household: {
    name: "Lucy Bennett", city: "Austin, TX", mobile: "+1 512 555 0142",
    membership: { plan: "NVA Care Plan — Plus", discount: 0.10, renews: "14 Mar" },
    insurance: { provider: "Trupanion", onFile: true },
  },
  pets: {
    waffles: {
      name: "Waffles", species: "Dog", breed: "Golden Retriever", sex: "Male, neutered",
      born: "2 May 2024", weightKg: 31.4, microchip: "985112009876543",
      clinic: "NVA Barton Springs Animal Hospital", vet: "Dr Priya Nair",
      nextVisit: "Annual exam · 3 Sep 2027",
      timeline: [
        { date: "3 Sep 2026", icon: "VAX", text: "Annual exam, DHPP + rabies. 31.4 kg." },
        { date: "12 Feb 2026", icon: "VISIT", text: "Ear infection, otic drops 10 days." },
        { date: "14 Jul 2024", icon: "VAX", text: "First visit, puppy vaccines, deworming." },
        { date: "3 Jul 2024", icon: "HOME", text: "Adopted. Shelter record uploaded." },
      ],
    },
  },
  clinics: {
    gp: { name: "NVA Barton Springs Animal Hospital", type: "GP", distance: "2.1 mi", hours: "Mon–Sat 7am–7pm" },
    er: { name: "NVA Austin Specialty & ER", type: "Spec/ER", distance: "4.6 mi", hours: "24/7", phone: "+1 512 555 0199", address: "4100 S Lamar Blvd, Austin" },
    erAway: { name: "NVA Hill Country Specialty & ER", type: "Spec/ER", distance: "6.3 mi from your current location", hours: "24/7", phone: "+1 830 555 0120", address: "1250 Ranch Rd 12, Dripping Springs" },
  },
  prices: {
    erTriage: 175, overnight: [600, 1200],
    financing: "Scratch Pay from $52/month over 12 months on a $600 balance",
  },
  scenario: {
    now: "18 Oct 2026 · 11:42 PM",
    where: "At Lucy's in-laws', 40 miles from home",
    symptom: "Blood in stool",
    arrivalHeld: "12:10 AM",
  },
  // Toggle to produce fallback states. See skills/nva-persona-fixtures "No-data toggles".
  toggles: { shelter_feed: true, pims_link: true, clinic_availability: true, insurance_on_file: true, connectivity: true },
};
