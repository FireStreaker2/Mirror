import { createProxyMiddleware } from "http-proxy-middleware";
import * as express from "express";
const app = express();
const port = process.env.PORT || 3000;

app.use(
	createProxyMiddleware("/", {
		target: process.env.URL || "https://firestreaker2.gq",
		changeOrigin: true,
	})
);

app.listen(port, () => {
	console.log(`App is running at http://localhost:${port}`);
});
