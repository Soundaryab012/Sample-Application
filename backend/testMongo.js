const dns = require("dns");

dns.setServers(["8.8.8.8"]);

dns.resolveSrv("_mongodb._tcp.application.juxc8g2.mongodb.net", (err, addresses) => {
  if (err) {
    console.log("DNS Error:", err);
  } else {
    console.log(addresses);
  }
});