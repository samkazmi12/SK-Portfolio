import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const schema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  subject: z.string().trim().min(2, "Subject is required").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000),
});

type FormState = z.infer<typeof schema>;

export const Contact = () => {
  const [data, setData] = useState<FormState>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [sending, setSending] = useState(false);

  const onChange = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setData((d) => ({ ...d, [k]: e.target.value }));
    setErrors((er) => ({ ...er, [k]: undefined }));
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse(data);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormState, string>> = {};
      result.error.issues.forEach((i) => {
        const key = i.path[0] as keyof FormState;
        if (!fieldErrors[key]) fieldErrors[key] = i.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors and try again.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent! I'll get back to you within 24 hours.");
      setData({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-8">
            <SectionHeading
              kicker="Contact"
              title={<>Send a message — <span className="text-gradient">let's discuss</span> your project.</>}
              description="Have a product, dashboard, or SaaS idea? Drop a message and I'll get back within 24 hours."
            />
            <div className="space-y-3">
              {[
                { icon: Phone, label: "Phone", value: "+92 339 1514544", href: "tel:+923391514544" },
                { icon: Mail, label: "Email", value: "syedalimuzahir2@gmail.com", href: "mailto:syedalimuzahir2@gmail.com" },
                { icon: Linkedin, label: "LinkedIn", value: "/in/syedalimuzahir", href: "https://www.linkedin.com/in/syedalimuzahir" },
              ].map((i) => (
                <a
                  key={i.label}
                  href={i.href}
                  className="flex items-center gap-4 glass rounded-2xl p-4 hover:border-primary/60 transition-colors group"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-primary-foreground">
                    <i.icon className="h-4 w-4" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs text-muted-foreground">{i.label}</span>
                    <span className="block text-sm font-medium">{i.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-7 glass rounded-3xl p-7 sm:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Your name" id="name" error={errors.name}>
                <Input id="name" value={data.name} onChange={onChange("name")} placeholder="Jane Doe" maxLength={80} />
              </Field>
              <Field label="Your email" id="email" error={errors.email}>
                <Input id="email" type="email" value={data.email} onChange={onChange("email")} placeholder="jane@company.com" maxLength={160} />
              </Field>
            </div>
            <Field label="Subject" id="subject" error={errors.subject}>
              <Input id="subject" value={data.subject} onChange={onChange("subject")} placeholder="Dashboard project" maxLength={120} />
            </Field>
            <Field label="Project details" id="message" error={errors.message}>
              <Textarea id="message" rows={6} value={data.message} onChange={onChange("message")} placeholder="Tell me a bit about your product, goals and timeline." maxLength={2000} />
            </Field>
            <Button type="submit" variant="hero" size="xl" disabled={sending} className="w-full sm:w-auto">
              {sending ? "Sending..." : (<>Send Message <Send className="h-4 w-4" /></>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) => (
  <div className="space-y-2">
    <Label htmlFor={id} className="text-xs uppercase tracking-widest text-muted-foreground">{label}</Label>
    {children}
    {error && <p className="text-xs text-destructive">{error}</p>}
  </div>
);
