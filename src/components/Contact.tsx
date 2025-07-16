import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const serviceId = "service_v9kd7lp";
      const templateId = "template_tvgk85f";
      const publicKey = "ThAnGZTXldiiXagu7";

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },
        publicKey
      );

      if (result.status === 200) {
        toast.success(
          "Pesan berhasil dikirim! Saya akan segera menghubungi Anda."
        );
        reset();
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Terjadi kesalahan. Silakan coba lagi nanti.");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-background-secondary relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-radial from-purple-500/10 to-transparent"></div>

      <div className="container mx-auto px-6 relative z-10">
        <Toaster position="top-center" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hubungi <span className="text-accent-primary">Saya</span>
          </h2>
          <div className="w-20 h-1 bg-accent-primary mx-auto rounded-full mb-8"></div>
          <p className="text-text-tertiary max-w-2xl mx-auto">
            Punya proyek atau ingin berkolaborasi? Jangan ragu untuk menghubungi
            saya!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="min-w-10 h-10 bg-accent-primary/20 rounded-lg flex items-center justify-center">
                  <Mail size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a
                    href="mailto:adisetyo.w1112@gmail.com"
                    className="text-text-tertiary hover:text-accent-primary transition-colors duration-300"
                  >
                    adisetyo.w1112@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-10 h-10 bg-accent-primary/20 rounded-lg flex items-center justify-center">
                  <Phone size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Telepon</h4>
                  <a
                    href="tel:+6285741797964"
                    className="text-text-tertiary hover:text-accent-primary transition-colors duration-300"
                  >
                    (+62) 857-4179-7964
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="min-w-10 h-10 bg-accent-primary/20 rounded-lg flex items-center justify-center">
                  <MapPin size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Lokasi</h4>
                  <p className="text-text-tertiary">
                    Salatiga, Jawa Tengah, Indonesia
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-background-tertiary p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Status Saat Ini</h3>
              <p className="text-text-tertiary mb-6">
                Saat ini sedang menempuh tahun ketiga studi Teknik Informatika.
                Terbuka untuk peluang magang dan proyek freelance terkait
                pengembangan web dan rekayasa perangkat lunak.
              </p>
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-green-400">Tersedia untuk proyek</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-background-tertiary rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-text-secondary mb-2"
                    >
                      Nama Anda{" "}
                      {errors.name && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 bg-background-secondary text-text-primary rounded-lg focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "focus:ring-red-500"
                          : "focus:ring-accent-primary"
                      }`}
                      placeholder="Nama Lengkap"
                      {...register("name", { required: true })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">
                        Nama harus diisi
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm text-text-secondary mb-2"
                    >
                      Email Anda{" "}
                      {errors.email && <span className="text-red-500">*</span>}
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 bg-background-secondary text-text-primary rounded-lg focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "focus:ring-red-500"
                          : "focus:ring-accent-primary"
                      }`}
                      placeholder="email@contoh.com"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email.type === "required"
                          ? "Email harus diisi"
                          : "Email tidak valid"}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="subject"
                    className="block text-sm text-text-secondary mb-2"
                  >
                    Subjek{" "}
                    {errors.subject && <span className="text-red-500">*</span>}
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-3 bg-background-secondary text-text-primary rounded-lg focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? "focus:ring-red-500"
                        : "focus:ring-accent-primary"
                    }`}
                    placeholder="Judul Pesan"
                    {...register("subject", { required: true })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      Subjek harus diisi
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-sm text-text-secondary mb-2"
                  >
                    Pesan{" "}
                    {errors.message && <span className="text-red-500">*</span>}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-3 bg-background-secondary text-text-primary rounded-lg focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "focus:ring-red-500"
                        : "focus:ring-accent-primary"
                    } resize-none`}
                    placeholder="Halo, saya tertarik untuk berdiskusi tentang..."
                    {...register("message", { required: true, minLength: 10 })}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message.type === "required"
                        ? "Pesan harus diisi"
                        : "Pesan terlalu pendek (minimal 10 karakter)"}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-accent-primary hover:bg-accent-secondary text-white font-medium rounded-lg transition-colors duration-300 disabled:opacity-70 w-full justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Kirim Pesan
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
