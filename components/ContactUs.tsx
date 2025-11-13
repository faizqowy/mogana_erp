import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ContactUs() {
    return (
        <section className="w-full h-[120vh]  flex items-center justify-between p-24 gap-5" id="contact">
            <div className="w-[45%] pb-10">
                <h2 className="text-4xl font-bold mb-8" >Contact Us</h2>
                <p>If you have any questions or inquiries, feel free to reach out to us!</p>

                <div>
                    <br />
                    <p> email@example.com</p>
                    <p> +1234567890</p>
                </div>
            </div>
            <div className="w-[45%]">
            <Card className="w-full backdrop-blur-md bg-white/20 border border-white/30 rounded-xl shadow-lg">
                <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>We would love to hear from you!</CardDescription>
                </CardHeader>
                <CardContent>   
                    <form className="flex flex-col space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="border border-gray-300 p-2 rounded-md"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="border border-gray-300 p-2 rounded-md"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="border border-gray-300 p-2 rounded-md"
                        />
                        <button className="bg-blue-500 text-white p-2 rounded-md">Send Message</button>
                    </form>
                </CardContent>
            </Card>
            </div>
        </section>
    );
}