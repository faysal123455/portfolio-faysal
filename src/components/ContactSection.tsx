import React, { useState } from "react";
import { MapPin, Mail, Phone, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Animated from "./Animated";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast({
          title: "Message envoyé avec succès !",
          description: "Merci pour votre message, je vous répondrai bientôt.",
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error("Échec de l'envoi");
      }
    } catch (error) {
      console.error("Erreur :", error);
      toast({
        title: "Échec de l'envoi",
        description: "Veuillez réessayer ou vérifier votre connexion.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <Animated delay={100} direction="up">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-navy-900 mb-4">
              Me contacter
            </h2>
            <div className="h-1 w-20 bg-navy-500 mx-auto rounded-full"></div>
            <p className="text-navy-700 mt-6">
              Pour une alternance, une opportunité ou simplement échanger.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-bold text-navy-800 mb-6">
                Coordonnées
              </h3>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-navy-100 p-3 rounded-full mr-4">
                    <MapPin className="h-5 w-5 text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-1">Adresse</h4>
                    <p className="text-navy-700">
                      Montreuil, Île-de-France, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy-100 p-3 rounded-full mr-4">
                    <Mail className="h-5 w-5 text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-1">Email</h4>
                    <a
                      href="mailto:faisaladnan700@gmail.com"
                      className="text-navy-700 hover:text-navy-500 transition-colors"
                    >
                      faisaladnan700@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-navy-100 p-3 rounded-full mr-4">
                    <Phone className="h-5 w-5 text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-900 mb-1">Téléphone</h4>
                    <p className="text-navy-700">06 62 06 40 83</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h4 className="font-medium text-navy-900 mb-4">
                  Me retrouver en ligne
                </h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/faysal123455"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-100 p-3 rounded-full text-navy-700 hover:bg-navy-200 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/sarker-faysal-05066521"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-navy-100 p-3 rounded-full text-navy-700 hover:bg-navy-200 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 border border-navy-100">
              <h3 className="text-2xl font-bold text-navy-800 mb-6">
                Envoyer un message
              </h3>

              <form
                onSubmit={handleSubmit}
                className="space-y-4"
                action="https://formsubmit.co/faisaladnan700@gmail.com"
                method="POST"
              >
                <input
                  type="hidden"
                  name="_subject"
                  value="Nouveau message depuis le portfolio"
                />
                <input type="hidden" name="_captcha" value="false" />

                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy-700 mb-1"
                  >
                    Votre nom
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Entrez votre nom"
                    required
                    autoComplete="off"
                    className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy-700 mb-1"
                  >
                    Votre email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Entrez votre email"
                    required
                    autoComplete="off"
                    className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-navy-700 mb-1"
                  >
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Sujet du message"
                    required
                    autoComplete="off"
                    className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-700 mb-1"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Écrivez votre message ici..."
                    rows={4}
                    required
                    className="border-navy-200 focus:border-navy-500 focus:ring-navy-500"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-navy-700 hover:bg-navy-800 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Animated>
    </section>
  );
};

export default ContactSection;
