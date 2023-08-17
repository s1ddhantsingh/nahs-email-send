import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import { Email } from "./emails/index";

const transporter = nodemailer.createTransport({
	host: "smtp.forwardemail.net",
	port: 465,
	secure: true,
	auth: {
		user: "my_user",
		pass: "my_password",
	},
});

const emailHtml = render(<Email firstname="Sarah" />);

const options = {
	from: "siddhant.singh.505@k12.friscoisd.org",
	to: "user@gmail.com",
	subject: "hello world",
	html: emailHtml,
};

await transporter.sendMail(options);
