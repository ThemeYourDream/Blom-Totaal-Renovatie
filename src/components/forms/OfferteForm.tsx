'use client';

import { useState } from 'react';
import { submitOfferteForm } from '@/app/actions/offerte';

interface FormData {
  name: string;
  email: string;
  phone: string;
  postcode: string;
  city: string;
  type: string;
  serviceType: string;
  period: string;
  description: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  postcode: '',
  city: '',
  type: 'particular',
  serviceType: 'general',
  period: 'flexible',
  description: '',
};

export default function OfferteForm() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [files, setFiles] = useState<File[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      if (files.length + newFiles.length > 10) {
        setError('Maximaal 10 bestanden toegestaan');
        return;
      }

      const validFiles = newFiles.filter((file) => {
        const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
        const maxSize = 10 * 1024 * 1024; // 10MB

        if (!validTypes.includes(file.type)) {
          setError(`${file.name} heeft een niet-ondersteund formaat`);
          return false;
        }
        if (file.size > maxSize) {
          setError(`${file.name} is groter dan 10MB`);
          return false;
        }
        return true;
      });

      setFiles((prev) => [...prev, ...validFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validate required fields
      if (!formData.name || !formData.email || !formData.phone) {
        setError('Naam, e-mailadres en telefoonnummer zijn verplicht');
        setLoading(false);
        return;
      }

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      files.forEach((file) => {
        formDataToSend.append('files', file);
      });

      const result = await submitOfferteForm(formDataToSend);

      if (result.success) {
        setSuccess(true);
        setFormData(initialFormData);
        setFiles([]);
        setStep(1);
      } else {
        setError(result.error || 'Er is iets misgelopen. Probeer het later opnieuw.');
      }
    } catch (err) {
      setError('Er is een fout opgetreden. Probeer het later opnieuw.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto p-8 bg-green-50 border border-green-200 rounded-lg text-center">
        <div className="text-4xl mb-4">✓</div>
        <h2 className="font-heading font-bold text-2xl mb-2 text-green-900">
          Dank voor uw aanvraag!
        </h2>
        <p className="text-green-800 mb-4">
          Wij hebben uw gegevens ontvangen en nemen contact met u op om de werkzaamheden en
          mogelijkheden te bespreken.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="px-6 py-2 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
        >
          Nog een aanvraag indienen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded text-red-800 text-sm">
          {error}
        </div>
      )}

      {/* Step 1: Contact Info */}
      {step === 1 && (
        <div className="space-y-6 mb-8">
          <h2 className="font-heading font-bold text-2xl">Stap 1: Uw gegevens</h2>

          <div>
            <label className="block text-sm font-medium mb-2">
              Naam <span className="text-brand-red">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
              placeholder="Uw naam"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                E-mailadres <span className="text-brand-red">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
                placeholder="naam@voorbeeld.nl"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Telefoonnummer <span className="text-brand-red">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
                placeholder="06 12345678"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">
                Postcode
              </label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
                placeholder="1234 AB"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Woonplaats
              </label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
                placeholder="Amsterdam"
              />
            </div>
          </div>

          <button
            type="button"
            onClick={() => setStep(2)}
            className="w-full px-6 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
          >
            Volgende stap
          </button>
        </div>
      )}

      {/* Step 2: Project Info */}
      {step === 2 && (
        <div className="space-y-6 mb-8">
          <h2 className="font-heading font-bold text-2xl">Stap 2: Uw project</h2>

          <div>
            <label className="block text-sm font-medium mb-2">
              U bent een...
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
            >
              <option value="particular">Particulier (huiseigenaar)</option>
              <option value="business">Bedrijf of organisatie</option>
              <option value="vve">VvE / Huishoudensbeheer</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Type werkzaamheden
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
            >
              <option value="general">Alstublieft selecteren...</option>
              <option value="totalrenovation">Totaalrenovatie</option>
              <option value="bathroom">Badkamerrenovatie</option>
              <option value="kitchen">Keukenrenovatie</option>
              <option value="painting">Schilderwerk</option>
              <option value="plasterwork">Stucwerk</option>
              <option value="tilework">Tegelwerk</option>
              <option value="carpentry">Timmerwerk</option>
              <option value="flooring">Vloeren</option>
              <option value="extension">Aanbouw / Uitbouw</option>
              <option value="maintenance">Onderhoud / Renovatie</option>
              <option value="other">Overige werkzaamheden</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Gewenste uitvoeringsperiode
            </label>
            <select
              name="period"
              value={formData.period}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
            >
              <option value="flexible">Flexibel / Nog niet bepaald</option>
              <option value="soon">Zo snel mogelijk</option>
              <option value="months3">Binnen 3 maanden</option>
              <option value="months6">Binnen 6 maanden</option>
              <option value="later">Later dit jaar of later</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Korte omschrijving van uw werkzaamheden
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-brand-red"
              rows={5}
              placeholder="Beschrijf kort wat u wilt laten doen..."
            />
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 px-6 py-3 border-2 border-brand-red text-brand-red font-medium rounded hover:bg-brand-light transition-colors"
            >
              Vorige
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex-1 px-6 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
            >
              Volgende stap
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Files */}
      {step === 3 && (
        <div className="space-y-6 mb-8">
          <h2 className="font-heading font-bold text-2xl">Stap 3: Foto's (optioneel)</h2>

          <div className="border-2 border-dashed border-brand-red/30 rounded-lg p-6 text-center">
            <label className="cursor-pointer">
              <div className="mb-2 text-2xl">📸</div>
              <p className="font-medium text-brand-dark mb-1">
                Klik om bestanden toe te voegen
              </p>
              <p className="text-sm text-brand-dark/60 mb-4">
                of sleep bestanden hiernaartoe
              </p>
              <p className="text-xs text-brand-dark/40">
                JPG, PNG, WEBP, PDF - Max 10 bestanden, 10MB per bestand
              </p>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="hidden"
                accept="image/jpeg,image/png,image/webp,application/pdf"
              />
            </label>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">
                Geselecteerde bestanden ({files.length}/10):
              </p>
              {files.map((file, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 bg-brand-light rounded"
                >
                  <span className="text-sm text-brand-dark truncate">
                    {file.name}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="text-brand-red hover:text-red-700 text-sm"
                  >
                    Verwijderen
                  </button>
                </div>
              ))}
            </div>
          )}

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 px-6 py-3 border-2 border-brand-red text-brand-red font-medium rounded hover:bg-brand-light transition-colors"
            >
              Vorige
            </button>
            <button
              type="button"
              onClick={() => setStep(4)}
              className="flex-1 px-6 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors"
            >
              Controleren
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Review & Submit */}
      {step === 4 && (
        <div className="space-y-6">
          <h2 className="font-heading font-bold text-2xl">Stap 4: Controleren</h2>

          <div className="bg-brand-light rounded-lg p-6 space-y-4">
            <div>
              <p className="text-sm text-brand-dark/60">Naam</p>
              <p className="font-medium">{formData.name}</p>
            </div>
            <div>
              <p className="text-sm text-brand-dark/60">E-mailadres</p>
              <p className="font-medium">{formData.email}</p>
            </div>
            <div>
              <p className="text-sm text-brand-dark/60">Telefoonnummer</p>
              <p className="font-medium">{formData.phone}</p>
            </div>
            <div>
              <p className="text-sm text-brand-dark/60">Omschrijving</p>
              <p className="font-medium">{formData.description || '-'}</p>
            </div>
            {files.length > 0 && (
              <div>
                <p className="text-sm text-brand-dark/60">Bestanden</p>
                <p className="font-medium">{files.length} bestand(en)</p>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded border border-blue-200">
            <input
              type="checkbox"
              id="consent"
              required
              className="w-4 h-4 rounded border-gray-300 text-brand-red"
            />
            <label htmlFor="consent" className="text-sm text-brand-dark">
              Ik ga akkoord met de verwerking van mijn persoonsgegevens en heb de privacyverklaring
              gelezen
            </label>
          </div>

          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex-1 px-6 py-3 border-2 border-brand-red text-brand-red font-medium rounded hover:bg-brand-light transition-colors"
            >
              Vorige
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-3 bg-brand-red text-white font-medium rounded hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Verzenden...' : 'Aanvraag verzenden'}
            </button>
          </div>
        </div>
      )}

      {/* Progress Indicator */}
      <div className="flex justify-between mt-8 pt-8 border-t text-sm text-brand-dark/60">
        <span>Stap {step} van 4</span>
        <span>{Math.round((step / 4) * 100)}%</span>
      </div>
    </form>
  );
}
