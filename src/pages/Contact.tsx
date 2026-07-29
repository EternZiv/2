import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router";
import { createContactMessage } from "../admin/adminApi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedOffice, setSelectedOffice] = useState("Karachi");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await createContactMessage({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      });
      toast.success("Message sent successfully! We'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again or email us directly at info@power2go.energy");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "Karachi Office:",
        "1D-27 Sector 30, Korangi Karachi, Pakistan",
        "Lahore Office:",
        "10 Ali Block Garden Town Lahore"
      ]
    },
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "Karachi: 111-P2G-247",
        "Lahore: (042) 3591 1165-69"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "info@power2go.energy",
        "sales@power2go.energy",
        "support@power2go.energy"
      ]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 9 AM - 6 PM",
        "Saturday: 10 AM - 4 PM",
        "Sunday: Closed"
      ]
    }
  ];

  const offices = [
    {
      city: "Karachi",
      address: "1D-27 Sector 30, Korangi Karachi, Pakistan",
      phone: "111-P2G-247",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59.1!2d67.0992625!3d24.8297773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33b00375af6b5%3A0xd31235cf42fa277e!2sPower2Go.Energy+Private+Limited!5e1!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
    },
    {
      city: "Lahore",
      address: "10 Ali Block Garden Town Lahore",
      phone: "(042) 3591 1165-69",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.5!2d74.326!3d31.503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDMwJzEwLjgiTiA3NMKwMTknMzMuNiJF!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s&q=G83G%2BGFF,+Street+10,+Ali+Block+Garden+Town,+Lahore"
    }
  ];

  const getMapUrl = () => {
    const office = offices.find(o => o.city === selectedOffice);
    if (office) return office.mapUrl;
    return "https://www.google.com/maps/embed?pb=!1m18!1m12!1d212270.5451884208!2d72.80971984999999!3d33.6144388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfbfd07891722f%3A0x6059515c3bdb02b6!2sIslamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s";
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl">
            Get in touch with our team. We're here to answer your questions and help you find the perfect energy solution.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92-300-1234567"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help you?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us more about your inquiry..."
                    className="w-full min-h-[150px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Map & Regional Offices */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Locations
              </h2>

              {/* Map Placeholder */}
              <div className="rounded-lg h-64 mb-8 overflow-hidden border border-gray-200">
                <iframe
                  src={getMapUrl()}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Power2Go Location Map"
                />
              </div>

              {/* Regional Offices */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Regional Offices
                </h3>
                {offices.map((office, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedOffice(office.city)}
                    className={`bg-gray-50 border rounded-lg p-4 transition-all cursor-pointer ${
                      selectedOffice === office.city
                        ? 'border-blue-600 bg-blue-50 shadow-md'
                        : 'border-gray-200 hover:bg-gray-100'
                    }`}
                  >
                    <h4 className="font-bold text-gray-900 mb-2">
                      {office.city}
                    </h4>
                    <p className="text-sm text-gray-600 mb-1">
                      {office.address}
                    </p>
                    <p className="text-sm text-blue-600 font-medium">
                      {office.phone}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Power Your Future?
          </h2>
          <p className="text-lg text-blue-50 mb-8">
            Explore our range of energy storage solutions or speak with our sales team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/products">
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg">
                View Products
              </Button>
            </Link>
            <Link to="/support">
              <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-6 text-lg">
                Request a Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}