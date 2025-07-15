import { createClient } from "redis";

const redisClient = createClient({
  url: "redis://default:ruvL9kXSPr86nPnioeolaKhFsavCY2xl@redis-16058.c292.ap-southeast-1-1.ec2.redns.redis-cloud.com:16058"
});

redisClient.on("error", (err) => console.error("❌ Redis Error:", err));
redisClient.on("connect", () => console.log("✅ Redis Connected"));

await redisClient.connect();

export default redisClient;
